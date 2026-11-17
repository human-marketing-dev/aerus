import { defineArrayMember, defineField, defineType, type ArrayRule, type FieldDefinition, type FieldGroupDefinition, type NumberRule, type Rule, type StringRule } from 'sanity'
import { requireLocales } from '../objects/locale'
import { ICON_NAMES } from '../../../components/icon-names'

// Helpers para definir los esquemas de las páginas fijas del sitio de forma consistente.
//
// Convención: el NOMBRE de cada campo es igual a la clave del texto en el archivo de contenido
// de la página (content/pages/<pagina>.ts). Así:
//   - scripts/seed-pages.ts puede llenar Sanity con los textos actuales sin capturar nada, y
//   - lib/content.ts devuelve a la página exactamente la misma forma de datos que usaba.
//
// Todos los textos son bilingües (ES / EN) y obligatorios salvo `optional: true`.

/** Metadatos de cada campo creado con estos helpers (lo usa _porIdioma.ts). */
export type FieldMeta = { required: boolean; max?: number; kind: string }
export const FIELD_META = new WeakMap<object, FieldMeta>()
const track = <F extends object>(field: F, kind: string, o: { optional?: boolean; max?: number } = {}): F => {
  FIELD_META.set(field, { required: !o.optional, max: o.max, kind })
  return field
}

type Opts = {
  description?: string
  group?: string | string[]
  optional?: boolean
  /** Límite recomendado de caracteres (advertencia, no bloquea) */
  max?: number
  hidden?: boolean
}

const base = (o: Opts = {}) => ({
  ...(o.description ? { description: o.description } : {}),
  ...(o.group ? { group: o.group } : {}),
  ...(o.hidden ? { hidden: true } : {}),
})

/** Texto corto en ES / EN (títulos, etiquetas, botones). */
export const texto = (name: string, title: string, o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'localeString', ...base(o),
      ...(o.optional ? {} : { validation: (rule: Rule) => requireLocales(rule, { max: o.max }) }),
    }),
  'texto', o)

/** Párrafo en ES / EN. */
export const parrafo = (name: string, title: string, o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'localeText', ...base(o),
      ...(o.optional ? {} : { validation: (rule: Rule) => requireLocales(rule, { max: o.max }) }),
    }),
  'parrafo', o)

/** Texto que no se traduce (códigos, teléfonos, correos, nombres propios). */
export const dato = (name: string, title: string, o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'string', ...base(o),
      ...(o.optional ? {} : { validation: (rule: StringRule) => rule.required() }),
    }),
  'dato', o)

/** Número. */
export const numero = (name: string, title: string, o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'number', ...base(o),
      ...(o.optional ? {} : { validation: (rule: NumberRule) => rule.required() }),
    }),
  'numero', o)

/** Sí / no. */
export const booleano = (name: string, title: string, o: Opts = {}) =>
  track(defineField({ name, title, type: 'boolean', initialValue: false, ...base(o) }), 'booleano', { ...o, optional: true })

/** Enlace: ruta del sitio en español (se traduce sola en /en) o URL completa. */
export const enlace = (name: string, title: string, o: Opts = {}) =>
  track(
    defineField({
      name, title, type: 'string',
      ...base({
        ...o,
        description: o.description ??
          'Ruta del sitio en español, p. ej. /ayuda/faq/ (en inglés se convierte sola), o una URL completa https://… · mailto: · tel:',
      }),
      ...(o.optional ? {} : {
        validation: (rule: StringRule) => rule.required().custom(v =>
          typeof v === 'string' && /^(\/|https?:\/\/|mailto:|tel:|#)/.test(v)
            ? true
            : 'Debe empezar con /, https://, mailto:, tel: o #'),
      }),
    }),
    'enlace', o)

/** Imagen con texto alternativo bilingüe. */
export const imagen = (name: string, title: string, o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'imagen', ...base(o),
      ...(o.optional ? {} : { validation: (rule: Rule) => rule.required() }),
    }),
  'enlace', o)

/** Lista de opciones fijas (p. ej. el ícono de una tarjeta). */
export const opcion = (name: string, title: string, options: (string | { title: string; value: string })[], o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'string', ...base(o),
      options: { list: options },
      ...(o.optional ? {} : { validation: (rule: StringRule) => rule.required() }),
    }),
  'imagen', o)

/** Grupo de campos (sección de la página). */
export const seccion = (name: string, title: string, fields: FieldDefinition[], o: Opts & { collapsed?: boolean } = {}) =>
  defineField({
    name, title, type: 'object', ...base(o),
    options: { collapsible: true, collapsed: o.collapsed ?? false },
    fields,
  })

/**
 * Lista editable de elementos (tarjetas, pasos, FAQ…): el cliente agrega, quita y reordena.
 * `itemTitle` es el campo que se muestra como título de cada elemento en el panel.
 */
export const lista = (
  name: string,
  title: string,
  itemName: string,
  fields: FieldDefinition[],
  o: Opts & { itemTitle?: string; min?: number; max?: number } = {},
) => {
  const itemTitle = o.itemTitle ?? fields[0]?.name
  const isLocale = (f?: FieldDefinition) => f && (f.type === 'localeString' || f.type === 'localeText')
  const titleField = fields.find(f => f.name === itemTitle)
  return defineField({
    name, title, type: 'array', ...base(o),
    of: [
      defineArrayMember({
        type: 'object',
        name: itemName,
        fields,
        preview: {
          select: { title: isLocale(titleField) ? `${itemTitle}.es` : itemTitle },
        },
      }),
    ],
    ...(o.min || o.max
      ? { validation: (rule: ArrayRule<unknown[]>) => {
          let r = rule
          if (o.min) r = r.min(o.min)
          if (o.max) r = r.max(o.max)
          return r
        } }
      : {}),
  })
}

/** Lista de textos sueltos en ES / EN (p. ej. viñetas). */
export const listaTextos = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name, title, type: 'array', ...base(o),
    of: [defineArrayMember({ type: 'localeString' })],
  })

/** Lista de párrafos en ES / EN. */
export const listaParrafos = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name, title, type: 'array', ...base(o),
    of: [defineArrayMember({ type: 'localeText' })],
  })

/**
 * Documento de una página fija (uno solo por página). Agrega el SEO obligatorio al final.
 * `name` debe empezar con "pagina" (p. ej. paginaAlianzaViva); es también su ID en Sanity.
 */
export const definePage = (def: {
  name: string
  title: string
  groups?: FieldGroupDefinition[]
  fields: FieldDefinition[]
}) =>
  defineType({
    name: def.name,
    title: def.title,
    type: 'document',
    groups: [...(def.groups ?? []), { name: 'seo', title: 'SEO' }],
    fields: [
      ...def.fields,
      defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo', validation: (rule: Rule) => rule.required() }),
    ],
    preview: { prepare: () => ({ title: def.title }) },
  })

/** Ícono de la librería del sitio (components/icons.tsx). */
export const icono = (name: string, title = 'Ícono', o: Opts = {}) =>
  opcion(name, title, [...ICON_NAMES], o)

/** Texto enriquecido (títulos, párrafos, listas, negritas, enlaces) en ES / EN. */
export const textoEnriquecido = (name: string, title: string, o: Opts = {}) =>
  track(
  defineField({
      name, title, type: 'localeBlock', ...base(o),
      ...(o.optional ? {} : {
        validation: (rule: Rule) => rule.custom((v: { es?: unknown[]; en?: unknown[] } | undefined) =>
          v?.es?.length && v?.en?.length ? true : 'Falta el texto en español o en inglés'),
      }),
    }),
  'bloques', o)
