import 'server-only'
import { cache } from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import { imagePosition, imageUrl } from '@/sanity/lib/image'
import type { Lang } from './i18n'

// Contenido de las páginas fijas del sitio (documentos "pagina…" de Sanity).
//
// Cada página tiene un archivo con sus textos actuales (content/pages/<pagina>.ts) que sirve de
// respaldo: getPage() lee el documento de Sanity, lo pasa al idioma pedido y lo combina con
// esos textos. Lo que el cliente edita en Sanity manda; si a un campo le falta contenido, se
// usa el texto del archivo, así una página nunca se rompe por un campo vacío.

/** Imagen ya resuelta para usar en la página. */
export type Img = { src: string; alt: string; position?: string }

/** SEO de una página fija tal como lo usa la página. */
export type PageSeo = {
  metaTitle: string
  metaDescription: string
  ogImage?: Img
  noindex?: boolean
}

/** Textos de respaldo de una página: misma forma en los dos idiomas. */
export type PageDefaults<T> = { es: T; en: T }

// Una página puede estar guardada como un documento bilingüe (<id>) o como dos documentos,
// uno por idioma (<id>-es y <id>-en). Se piden los tres y se usa lo que exista.
const PAGE_QUERY = defineQuery(`*[_id in [$id, $id + "-es", $id + "-en"]]`)

const LOCALE_TYPES = new Set(['localeString', 'localeText'])
const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v)

/** Convierte un valor de Sanity al idioma pedido (recursivo). */
/** Texto enriquecido (Portable Text): lista de bloques que se usa tal cual. */
const isBlocks = (v: unknown): v is Record<string, unknown>[] =>
  Array.isArray(v) && v.length > 0 && v.every(b => isPlainObject(b) && (b._type === 'block' || Array.isArray(b.children)))

export function localize(value: unknown, lang: Lang): unknown {
  // Texto enriquecido de un documento por idioma: sin tocar (PortableText necesita _type/_key)
  if (isBlocks(value)) return value
  if (Array.isArray(value)) {
    return value.map(v => localize(v, lang)).filter(v => v !== undefined)
  }
  if (!isPlainObject(value)) return value ?? undefined

  // Texto bilingüe { es, en } → texto del idioma
  if (LOCALE_TYPES.has(value._type as string)) {
    const s = value[lang]
    return typeof s === 'string' && s.trim() ? s : undefined
  }
  // Texto enriquecido → bloques del idioma, sin tocar (PortableText necesita _type/_key)
  if (value._type === 'localeBlock') {
    const blocks = value[lang]
    return Array.isArray(blocks) && blocks.length ? blocks : undefined
  }
  // Imagen → { src, alt, position }
  if (isPlainObject(value.asset) && (value._type === 'imagen' || value._type === 'imagenTexto' || value._type === 'image')) {
    return {
      src: imageUrl(value as never, 2000),
      alt: (localize(value.alt, lang) as string | undefined) ?? '',
      position: imagePosition(value as never),
    } satisfies Img
  }
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(value)) {
    if (k.startsWith('_')) continue
    const l = localize(v, lang)
    if (l !== undefined) out[k] = l
  }
  return out
}

/**
 * Combina el contenido de Sanity con los textos de respaldo.
 * - Textos y datos: manda Sanity; si falta, el respaldo.
 * - Listas: si existen en Sanity se usan tal cual (el cliente pudo agregar/quitar elementos).
 */
export function mergeContent<T>(fallback: T, cms: unknown): T {
  if (cms === undefined || cms === null) return fallback
  if (Array.isArray(fallback)) return (Array.isArray(cms) ? cms : fallback) as T
  if (isPlainObject(fallback) && isPlainObject(cms)) {
    const out: Record<string, unknown> = { ...cms }
    for (const [k, v] of Object.entries(fallback)) out[k] = mergeContent(v, cms[k])
    return out as T
  }
  return (typeof cms === typeof fallback || fallback === undefined ? cms : fallback) as T
}

// Referencias que pueden aparecer en una página (a destinos y rutas de la red)
const REFS_QUERY = defineQuery(`*[_id in $ids]{
  _id, _type, nombre, iata, "slug": slug.current, "origen": origen->nombre, "destino": destino->nombre
}`)

// Referencias a documentos (no a archivos: las imágenes también usan _ref hacia su asset)
const isDocRef = (v: Record<string, unknown>) =>
  v._type === 'reference' && typeof v._ref === 'string' && !/^(image|file)-/.test(v._ref)

/** Junta los IDs de todas las referencias del documento. */
function collectRefs(value: unknown, out = new Set<string>()): Set<string> {
  if (Array.isArray(value)) value.forEach(v => collectRefs(v, out))
  else if (isPlainObject(value)) {
    if (isDocRef(value)) out.add(value._ref as string)
    else Object.values(value).forEach(v => collectRefs(v, out))
  }
  return out
}

/** Sustituye cada referencia por el documento referenciado (o la quita si ya no existe). */
function resolveRefs(value: unknown, docs: Map<string, Record<string, unknown>>, inArray = false): unknown {
  if (Array.isArray(value)) {
    return value.map(v => resolveRefs(v, docs, true)).filter(v => v !== undefined)
  }
  if (!isPlainObject(value)) return value
  if (isDocRef(value)) {
    const doc = docs.get(value._ref as string)
    if (!doc) return undefined
    const rest = { ...doc }
    delete rest._id
    return rest
  }
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(value)) {
    const r = resolveRefs(v, docs)
    // Un elemento de lista cuya referencia ya no existe (p. ej. un destino borrado) se quita completo
    if (r === undefined && inArray && isPlainObject(v) && isDocRef(v)) return undefined
    if (r !== undefined) out[k] = r
  }
  return out
}

async function withRefs(doc: Record<string, unknown>) {
  const ids = [...collectRefs(doc)]
  if (!ids.length) return doc
  const { data: refs } = await sanityFetch({ query: REFS_QUERY, params: { ids }, stega: false })
  const map = new Map(((refs ?? []) as Record<string, unknown>[]).map(r => [r._id as string, r]))
  return resolveRefs(doc, map) as Record<string, unknown>
}

const fetchPage = cache(async (id: string) => {
  const { data } = await sanityFetch({ query: PAGE_QUERY, params: { id }, stega: false })
  const docs = (data ?? []) as Record<string, unknown>[]
  const byId = (x: string) => docs.find(d => d._id === x || d._id === `drafts.${x}`)
  const [bilingue, es, en] = [byId(id), byId(`${id}-es`), byId(`${id}-en`)]
  return {
    bilingue: bilingue ? await withRefs(bilingue) : null,
    es: es ? await withRefs(es) : null,
    en: en ? await withRefs(en) : null,
  }
})

const sameValue = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b)
const isEmpty = (v: unknown) =>
  v === undefined || v === null || v === '' || (isPlainObject(v) && Object.keys(v).length === 0)

/**
 * Versión en inglés de una página guardada "por idioma".
 * - Textos: los del documento en inglés; si faltan, los del archivo de contenido en inglés.
 * - Imágenes, enlaces, datos, números, íconos: los de la versión en español (en inglés no se
 *   capturan). Se reconocen porque en el archivo de contenido valen lo mismo en ES y EN.
 * - Listas: el orden y los elementos los define español; cada elemento toma los textos del
 *   elemento en la misma posición en inglés.
 */
function mergeEnglish(defEn: unknown, defEs: unknown, es: unknown, en: unknown): unknown {
  // Imagen: la de inglés si se subió; si no, la de español con el texto alternativo en inglés
  if (isPlainObject(es) && typeof es.src === 'string') {
    if (isPlainObject(en) && typeof en.src === 'string') return en
    const alt = (isPlainObject(en) && typeof en.alt === 'string' && en.alt) ||
      (isPlainObject(defEn) && typeof defEn.alt === 'string' && defEn.alt) || es.alt
    return { ...es, alt }
  }
  if (isPlainObject(es)) {
    const out: Record<string, unknown> = {}
    const keys = new Set([...Object.keys(es), ...(isPlainObject(defEn) ? Object.keys(defEn) : [])])
    for (const k of keys) {
      out[k] = mergeEnglish(
        isPlainObject(defEn) ? defEn[k] : undefined,
        isPlainObject(defEs) ? defEs[k] : undefined,
        es[k],
        isPlainObject(en) ? en[k] : undefined,
      )
    }
    return out
  }
  // Texto enriquecido: se toma completo del inglés (o del respaldo en inglés)
  if (isBlocks(es) || isBlocks(en) || isBlocks(defEn)) {
    if (isBlocks(en)) return en
    return isBlocks(defEn) ? defEn : es
  }
  if (Array.isArray(es) && es.some(isPlainObject)) {
    const enArr = Array.isArray(en) ? en : []
    const dEn = Array.isArray(defEn) ? defEn : []
    const dEs = Array.isArray(defEs) ? defEs : []
    return es.map((item, i) => mergeEnglish(dEn[i], dEs[i], item, enArr[i]))
  }
  // Valor simple o lista de textos
  if (!isEmpty(en) && !(Array.isArray(en) && en.length === 0 && !sameValue(defEs, defEn))) return en
  // Sin traducción: si es un dato común a los dos idiomas, el de español; si es texto, el de respaldo
  if (defEn === undefined || sameValue(defEn, defEs)) return es
  return defEn
}

/** Contenido de un documento de Sanity en el idioma pedido, combinado con el respaldo. */
async function getContent<T>(id: string, lang: Lang, defaults: PageDefaults<T>): Promise<T> {
  const docs = await fetchPage(id)
  // Guardada como un documento por idioma
  if (docs.es || docs.en) {
    const es = mergeContent(defaults.es, docs.es ? localize(docs.es, 'es') : undefined)
    if (lang === 'es') return es
    return mergeEnglish(defaults.en, defaults.es, es, docs.en ? localize(docs.en, 'en') : undefined) as T
  }
  // Guardada como un documento bilingüe (ES/EN lado a lado)
  return mergeContent(defaults[lang], docs.bilingue ? localize(docs.bilingue, lang) : undefined)
}

/**
 * Contenido de una página fija en el idioma pedido.
 * `id` es el nombre del tipo de documento (p. ej. "paginaAlianzaViva").
 */
export async function getPage<T extends { seo: PageSeo }>(
  id: string,
  lang: Lang,
  defaults: PageDefaults<T>,
): Promise<T> {
  return getContent(id, lang, defaults)
}

/** Igual que getPage pero para documentos sin SEO propio (p. ej. plantillas). */
export async function getTextos<T extends object>(id: string, lang: Lang, defaults: PageDefaults<T>): Promise<T> {
  return getContent(id, lang, defaults)
}
