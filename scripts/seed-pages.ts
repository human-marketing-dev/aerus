// Carga inicial de las páginas fijas en Sanity a partir de sus textos actuales
// (content/pages/*.ts), guiada por el esquema de cada página (sanity/schemaTypes/pages/*.ts).
//
//   npx tsx --env-file=.env.local scripts/seed-pages.ts                    simulación (no escribe)
//   npx tsx --env-file=.env.local scripts/seed-pages.ts --write            crea las que no existen
//   npx tsx --env-file=.env.local scripts/seed-pages.ts --write --force    reemplaza también las existentes (¡pisa ediciones!)
//   … --only=paginaAlianzaViva,paginaInicio                                solo esas páginas
//
// Convenciones de los archivos de contenido:
//   - textos: string en `es` y en `en`
//   - imágenes (campo tipo "imagen"): { src: '/ruta/en/public.webp', alt: '…' }
//   - referencias a destinos: { slug: 'monterrey', … } → destino-monterrey
//   - referencias a rutas:    { slug: 'monterrey-tampico', … } → ruta-monterrey-tampico
//   - seo: { metaTitle, metaDescription } (+ ogImage opcional como imagen)
import { createReadStream, existsSync } from 'node:fs'
import { join } from 'node:path'
import { createClient } from '@sanity/client'
import { PAGES, docIds, esPorIdioma } from '../content/registry'

const args = process.argv.slice(2)
const WRITE = args.includes('--write')
const FORCE = args.includes('--force')
const ONLY = args.find(a => a.startsWith('--only='))?.slice(7).split(',')
const DUMP = args.find(a => a.startsWith('--dump='))?.slice(7)  // guarda los documentos generados en un JSON (diagnóstico)
const dumped: unknown[] = []
const DEFAULT_OG = '/imagen-aerus-home-avion.webp'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-10-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

type Field = { name: string; type: string; fields?: Field[]; of?: Field[]; to?: { type: string }[] }
type Ctx = { path: string; warnings: string[] }

const uploads = new Map<string, string>()
async function uploadImage(src: string, ctx: Ctx): Promise<string | null> {
  if (uploads.has(src)) return uploads.get(src)!
  const file = join(process.cwd(), 'public', src)
  if (!existsSync(file)) { ctx.warnings.push(`${ctx.path}: no existe public${src}`); return null }
  if (!WRITE) { uploads.set(src, `image-simulada`); return 'image-simulada' }
  const asset = await client.assets.upload('image', createReadStream(file), { filename: src.split('/').pop() })
  uploads.set(src, asset._id)
  return asset._id
}

let keyN = 0
const key = () => `k${(keyN++).toString(36)}${Math.random().toString(36).slice(2, 7)}`
const loc = (type: string, es: unknown, en: unknown) =>
  typeof es === 'string' || typeof en === 'string' ? { _type: type, es: es ?? '', en: en ?? '' } : undefined

async function imageValue(es: { src?: string; alt?: string } | undefined, en: { alt?: string } | undefined, ctx: Ctx, type = 'imagen') {
  if (!es?.src) return undefined
  const ref = await uploadImage(es.src, ctx)
  if (!ref) return undefined
  return { _type: type, asset: { _type: 'reference', _ref: ref }, ...(type === 'imagen' ? { alt: loc('localeString', es.alt ?? '', en?.alt ?? '') } : {}) }
}

/** Valor de Sanity para un campo, a partir de los textos en ES y EN. */
async function build(field: Field, es: unknown, en: unknown, ctx: Ctx): Promise<unknown> {
  const here = { ...ctx, path: `${ctx.path}.${field.name}` }
  switch (field.type) {
    case 'localeString':
    case 'localeText':
      return loc(field.type, es, en)
    case 'localeBlock':
      return Array.isArray(es) || Array.isArray(en) ? { _type: 'localeBlock', es: es ?? [], en: en ?? [] } : undefined
    case 'string':
    case 'number':
    case 'boolean':
    case 'slug':
      return es ?? undefined
    case 'imagen':
    case 'image':
      return imageValue(es as never, en as never, here, field.type)
    case 'reference': {
      const slug = (es as { slug?: string } | undefined)?.slug
      const target = field.to?.[0]?.type
      if (!slug || !target) { here.warnings.push(`${here.path}: referencia sin slug`); return undefined }
      return { _type: 'reference', _ref: `${target}-${slug}` }
    }
    case 'seo': {
      const e = (es ?? {}) as { metaTitle?: string; metaDescription?: string; ogImage?: { src: string } }
      const n = (en ?? {}) as typeof e
      return {
        _type: 'seo',
        metaTitle: loc('localeString', e.metaTitle, n.metaTitle),
        metaDescription: loc('localeText', e.metaDescription, n.metaDescription),
        ogImage: await imageValue({ src: e.ogImage?.src ?? DEFAULT_OG }, undefined, here, 'image'),
        noindex: false,
      }
    }
    case 'object':
      return buildObject(field.fields ?? [], es, en, here)
    case 'array': {
      const esArr = Array.isArray(es) ? es : []
      const enArr = Array.isArray(en) ? en : []
      if (esArr.length !== enArr.length) here.warnings.push(`${here.path}: ${esArr.length} elementos en ES y ${enArr.length} en EN`)
      const member = field.of?.[0]
      if (!member) return undefined
      const out = []
      for (let i = 0; i < esArr.length; i++) {
        const itemCtx = { ...here, path: `${here.path}[${i}]` }
        if (member.type === 'localeString' || member.type === 'localeText') {
          out.push({ _key: key(), ...loc(member.type, esArr[i], enArr[i]) })
        } else if (member.type === 'object' || member.fields) {
          const obj = await buildObject(member.fields ?? [], esArr[i], enArr[i], itemCtx)
          out.push({ _key: key(), _type: member.name, ...obj })
        } else {
          const v = await build({ ...member, name: String(i) }, esArr[i], enArr[i], itemCtx)
          if (v !== undefined) out.push({ _key: key(), ...(v as object) })
        }
      }
      return out
    }
    default: {
      // Tipo de objeto con nombre (p. ej. faqItem): se trata como objeto inline
      here.warnings.push(`${here.path}: tipo "${field.type}" sin manejo específico`)
      return undefined
    }
  }
}

async function buildObject(fields: Field[], es: unknown, en: unknown, ctx: Ctx) {
  const e = (es ?? {}) as Record<string, unknown>
  const n = (en ?? {}) as Record<string, unknown>
  const out: Record<string, unknown> = {}
  for (const f of fields) {
    if (!(f.name in e) && f.type !== 'seo') {
      ctx.warnings.push(`${ctx.path}.${f.name}: no está en el archivo de contenido`)
      continue
    }
    const v = await build(f, e[f.name], n[f.name], ctx)
    if (v !== undefined) out[f.name] = v
  }
  // Claves del contenido que el esquema no tiene (se quedan solo en código)
  for (const k of Object.keys(e)) if (!fields.some(f => f.name === k)) ctx.warnings.push(`${ctx.path}.${k}: no está en el esquema`)
  return out
}

const LOC = new Set(['localeString', 'localeText'])
type AnyObj = Record<string, unknown>
const isObj = (v: unknown): v is AnyObj => !!v && typeof v === 'object' && !Array.isArray(v)

/**
 * Documento bilingüe → documento de un solo idioma (páginas "por idioma").
 * En español va todo; en inglés solo textos y textos alternativos (lo demás se hereda de español).
 */
function aIdioma(v: unknown, lang: 'es' | 'en'): unknown {
  if (Array.isArray(v)) {
    return v.map(x => (isObj(x) && LOC.has(x._type as string) ? x[lang] : aIdioma(x, lang))).filter(x => x !== undefined)
  }
  if (!isObj(v)) return v
  const t = v._type as string | undefined
  if (t && LOC.has(t)) return v[lang] || undefined
  if (t === 'localeBlock') return (v[lang] as unknown[] | undefined)?.length ? v[lang] : undefined
  if (t === 'reference') return lang === 'es' ? v : undefined
  if (t === 'imagen') {
    const alt = (v.alt as AnyObj | undefined)?.[lang]
    if (lang === 'en') return alt ? { _type: 'imagenTexto', alt } : undefined
    const { alt: _alt, ...rest } = v
    void _alt
    return { ...rest, _type: 'imagenTexto', ...(alt ? { alt } : {}) }
  }
  if (t === 'seo') {
    const m = (k: string) => (v[k] as AnyObj | undefined)?.[lang]
    return {
      _type: 'seoPorIdioma',
      metaTitle: m('metaTitle'),
      metaDescription: m('metaDescription'),
      ...(lang === 'es' ? { ogImage: v.ogImage, noindex: v.noindex ?? false } : {}),
    }
  }
  const out: AnyObj = {}
  for (const [k, x] of Object.entries(v)) {
    if (k.startsWith('_')) { out[k] = x; continue }
    // Datos que no se traducen (texto simple, número, sí/no): solo en español
    if (lang === 'en' && (typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean')) continue
    const r = aIdioma(x, lang)
    if (r !== undefined) out[k] = r
  }
  return out
}

async function main() {
  const pages = PAGES.filter(p => !ONLY || ONLY.includes(p.schema.name))
  const allIds = pages.flatMap(p => [...new Set(Object.values(docIds(p)))])
  const existing = new Set<string>(await client.fetch('*[_id in $ids]._id', { ids: allIds }))
  let escritas = 0
  for (const p of pages) {
    const id = p.schema.name
    const ctx: Ctx = { path: id, warnings: [] }
    const body = await buildObject(p.schema.fields as Field[], p.defaults.es, p.defaults.en, ctx)
    // Bilingüe: un documento. Por idioma: <id>-es (completo) y <id>-en (solo textos)
    const docs = esPorIdioma(p)
      ? (['es', 'en'] as const).map(lang => ({ _id: docIds(p)[lang], _type: id, idioma: lang, ...(aIdioma(body, lang) as AnyObj) }))
      : [{ _id: id, _type: id, ...body }]
    console.log(`\n${id} (${p.path ?? 'general'}) · ${esPorIdioma(p) ? 'un documento por idioma' : 'bilingüe'}`)
    for (const w of ctx.warnings) console.log(`  ⚠ ${w}`)
    for (const doc of docs) {
      dumped.push(doc)
      const status = existing.has(doc._id) ? (FORCE ? 'se reemplaza' : 'ya existe, se omite') : 'se crea'
      console.log(`  ${doc._id}: ${status}`)
      if (!WRITE || (existing.has(doc._id) && !FORCE)) continue
      await client.createOrReplace(doc as never)
      escritas++
    }
  }
  if (DUMP) (await import('node:fs')).writeFileSync(DUMP, JSON.stringify(dumped))
  console.log(WRITE ? `\n✓ ${escritas} documento(s) escritos en Sanity` : '\nSimulación: no se escribió nada (agrega --write).')
}

main().catch(e => { console.error(e); process.exit(1) })
