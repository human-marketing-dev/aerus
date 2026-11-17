import { defineField, type DocumentDefinition, type FieldDefinition, type ValidationContext } from 'sanity'
import { FIELD_META } from './_helpers'
import { blockContent } from '../objects/localeBlock'
import { apiVersion } from '../../env'

// Convierte el esquema bilingüe de una página (campos ES/EN lado a lado) al formato
// "un documento por idioma": la página se guarda como dos documentos, <nombre>-es y <nombre>-en.
//
// - Textos (texto, párrafo, texto enriquecido, listas de textos): un campo simple por documento.
// - Imágenes, enlaces, datos, números, íconos y referencias: solo se capturan en ESPAÑOL; en el
//   documento en inglés se ocultan y la página los toma de la versión en español.
// - Imágenes en inglés: opcionales (para el texto alternativo, o una imagen distinta).
// - Listas: el orden y los elementos los define la versión en español; en inglés se traduce cada
//   elemento en la misma posición. El panel avisa si no coinciden en número de elementos.
//
// Motivo: así cada texto cuenta como un solo "atributo" de Sanity (el plan gratuito permite 2,000).

type Doc = { _id?: string; idioma?: string }
const esIngles = (ctx: { document?: unknown }) => (ctx.document as Doc | undefined)?.idioma === 'en'
const ocultarEnIngles = ({ document }: { document?: unknown }) => (document as Doc | undefined)?.idioma === 'en'

const LINK_RE = /^(\/|https?:\/\/|mailto:|tel:|#)/
type R = { custom: (fn: (v: unknown, ctx: ValidationContext) => unknown) => R; warning: (m?: string) => R; error: (m?: string) => R }

/** Requerido solo en el documento en español (en inglés estos campos se heredan). */
const requeridoEnEspanol = (kind?: string) => (rule: R) =>
  rule.custom((v, ctx) => {
    if (esIngles(ctx)) return true
    if (v === undefined || v === null || v === '') return 'Requerido'
    if (kind === 'enlace' && typeof v === 'string' && !LINK_RE.test(v)) return 'Debe empezar con /, https://, mailto:, tel: o #'
    return true
  })

/** Aviso (no bloquea) si una lista en inglés no tiene los mismos elementos que en español. */
function avisoLongitud(path: string[]) {
  return (rule: R) =>
    rule.custom(async (v, ctx) => {
      const doc = ctx.document as Doc | undefined
      if (doc?.idioma !== 'en' || !doc._id) return true
      const esId = doc._id.replace(/^drafts\./, '').replace(/-en$/, '-es')
      const client = ctx.getClient({ apiVersion })
      const groqPath = path.map(p => `["${p}"]`).join('')
      const n = await client.fetch<number | null>(`count(*[_id == $id][0]${groqPath})`, { id: esId })
      const m = Array.isArray(v) ? v.length : 0
      return n != null && n !== m
        ? `La versión en español tiene ${n} elemento(s) y la de inglés ${m}. Deben coincidir y estar en el mismo orden.`
        : true
    }).warning()
}

function convert(field: FieldDefinition, path: string[]): FieldDefinition {
  const meta = FIELD_META.get(field)
  const f = field as FieldDefinition & {
    type: string; of?: FieldDefinition[]; fields?: FieldDefinition[]; validation?: unknown; description?: string
  }
  const here = [...path, f.name]
  const base = { ...f } as Record<string, unknown>
  delete base.validation

  switch (f.type) {
    case 'localeString':
    case 'localeText': {
      const max = meta?.max
      return defineField({
        ...(base as object),
        name: f.name,
        type: f.type === 'localeString' ? 'string' : 'text',
        ...(f.type === 'localeText' ? { rows: 4 } : {}),
        ...(meta?.required
          ? { validation: (rule: R & { required: () => R; max: (n: number) => R }) => [
              rule.required().error('Falta el texto'),
              ...(max ? [rule.max(max).warning(`Recomendado: máximo ${max} caracteres`)] : []),
            ] }
          : {}),
      } as never)
    }
    case 'localeBlock':
      return defineField({
        ...(base as object),
        name: f.name,
        type: 'array',
        of: [blockContent],
        ...(meta?.required ? { validation: (rule: R) => rule.custom(v => (Array.isArray(v) && v.length ? true : 'Falta el texto')) } : {}),
      } as never)
    case 'imagen':
      return defineField({
        ...(base as object),
        name: f.name,
        type: 'imagenTexto',
        description: [f.description, 'En la versión en inglés es opcional: si no subes imagen se usa la de español; escribe el texto alternativo en inglés.']
          .filter(Boolean).join(' '),
        ...(meta?.required ? { validation: requeridoEnEspanol() } : {}),
      } as never)
    case 'seo':
      return defineField({ ...(base as object), name: f.name, type: 'seoPorIdioma', validation: (rule: R & { required: () => R }) => rule.required() } as never)
    case 'object':
      return defineField({ ...(base as object), name: f.name, type: 'object', fields: (f.fields ?? []).map(x => convert(x, here)) } as never)
    case 'array': {
      const of = (f.of ?? []).map(m => {
        const mm = m as FieldDefinition & { type: string; fields?: FieldDefinition[] }
        if (mm.type === 'localeString') return { ...mm, type: 'string' }
        if (mm.type === 'localeText') return { ...mm, type: 'text', rows: 3 }
        if (mm.type === 'object') return { ...mm, fields: (mm.fields ?? []).map(x => convert(x, [])) }
        return mm
      })
      const deObjetos = of.some(m => (m as { type: string }).type === 'object')
      return defineField({
        ...(base as object),
        name: f.name,
        type: 'array',
        of,
        // Listas de elementos: el orden lo define español; en inglés se avisa si no coinciden
        ...(deObjetos ? { validation: avisoLongitud(here) } : {}),
      } as never)
    }
    default:
      // Campo que no se traduce (dato, enlace, número, sí/no, opción, ícono, referencia):
      // solo en español; oculto en inglés
      return defineField({
        ...(base as object),
        name: f.name,
        hidden: ocultarEnIngles,
        ...(f.validation || meta?.required ? { validation: requeridoEnEspanol(meta?.kind) } : {}),
      } as never)
  }
}

/** Esquema "un documento por idioma" a partir del esquema bilingüe de la página. */
export function aPorIdioma(schema: DocumentDefinition): DocumentDefinition {
  return {
    ...schema,
    fields: [
      defineField({
        name: 'idioma',
        title: 'Idioma',
        type: 'string',
        readOnly: true,
        hidden: true,
      }),
      ...schema.fields.map(f => convert(f, [])),
    ],
    preview: {
      select: { idioma: 'idioma' },
      prepare: ({ idioma }: { idioma?: string }) => ({
        title: `${schema.title} · ${idioma === 'en' ? 'English' : 'Español'}`,
      }),
    },
  } as DocumentDefinition
}
