import 'server-only'
import { cache } from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import { imagePosition, imageUrl } from '@/sanity/lib/image'
import { LOCALE_TAG, type Lang } from './i18n'

// Red de rutas de Aerus, leída de Sanity (documentos "destino" y "ruta").
// Es la única fuente de: listado y páginas de destinos y rutas, mapa interactivo, "Destinos
// directos", conexiones de cada destino, mapa del sitio, sala de prensa y Alianza con Viva.
// Al publicar/borrar un destino o una ruta en Sanity, todo eso se actualiza solo.

// ── Tipos que usan las páginas ────────────────────────────────────────────────

export interface City {
  lat: number
  lon: number
  label: string
  slug: string
  hub?: boolean
  intl?: boolean
  viva?: boolean
  ldx: number
  ldy: number
  anchor: 'start' | 'middle' | 'end'
}

export interface Seo {
  title: string
  description: string
  ogImage: string | null
  noindex: boolean
}

export interface Destino {
  nombre: string
  slug: string
  iata: string
  aeropuerto: string
  descripcion: string
  imagen: string            // URL optimizada ('' si no tiene)
  imagenPosicion: string    // background-position según el punto de interés marcado en Sanity
  rutas: string[]           // ciudades con vuelo directo (derivado de las rutas)
  hub: boolean
  esInternacional: boolean
  seo: Seo
}

export interface RutaData {
  slug: string
  label: string
  origen: string
  destino: string
  iataOrigen: string
  iataDestino: string
  aeropuertoOrigen: string
  aeropuertoDestino: string
  distanciaKm: number
  duracionMin: number
  descripcion: string
  quienViaja: string
  ventajaAerus: string
  esInternacional: boolean
  faq: { q: string; a: string }[]
  conectadas: { label: string; href: string }[]
  seo: Seo
}

// ── Consultas ─────────────────────────────────────────────────────────────────

const SEO_PROJECTION = `{
  "title": metaTitle[$lang],
  "description": metaDescription[$lang],
  ogImage,
  noindex
}`

const DESTINOS_QUERY = defineQuery(`
  *[_type == "destino" && defined(slug.current)] | order(coalesce(orden, 9999) asc, nombre asc) {
    nombre,
    "slug": slug.current,
    iata,
    "aeropuerto": aeropuerto[$lang],
    "descripcion": descripcion[$lang],
    imagen,
    hub,
    esInternacional,
    conViva,
    lat,
    lon,
    etiqueta,
    "seo": seo${SEO_PROJECTION}
  }
`)

const RUTAS_QUERY = defineQuery(`
  *[_type == "ruta" && defined(slug.current) && defined(origen->slug.current) && defined(destino->slug.current)] {
    "slug": slug.current,
    "origen": origen->nombre,
    "destino": destino->nombre,
    distanciaKm,
    duracionMin,
    "descripcion": descripcion[$lang],
    "quienViaja": quienViaja[$lang],
    "ventajaAerus": ventajaAerus[$lang],
    "faq": coalesce(faq, [])[]{ "q": pregunta[$lang], "a": respuesta[$lang] },
    // Solo relacionadas que siguen publicadas (una ruta borrada no deja un enlace roto)
    "relacionadas": coalesce(relacionadas[defined(@->slug.current)]->{
      "slug": slug.current, "o": origen->nombre, "d": destino->nombre
    }, []),
    mostrarAlianzaViva,
    "seo": seo${SEO_PROJECTION}
  }
`)

type SanityImage = { asset?: { _ref: string }; hotspot?: { x?: number; y?: number } } | null
type RawSeo = { title: string | null; description: string | null; ogImage: SanityImage; noindex: boolean | null } | null

type RawDestino = {
  nombre: string; slug: string; iata: string; aeropuerto: string | null; descripcion: string | null
  imagen: SanityImage; hub: boolean | null; esInternacional: boolean | null; conViva: boolean | null
  lat: number; lon: number; etiqueta: { x?: number; y?: number; alineacion?: City['anchor'] } | null
  seo: RawSeo
}
type RawRuta = {
  slug: string; origen: string; destino: string; distanciaKm: number; duracionMin: number
  descripcion: string | null; quienViaja: string | null; ventajaAerus: string | null
  faq: { q: string | null; a: string | null }[]
  relacionadas: { slug: string; o: string; d: string }[]
  mostrarAlianzaViva: boolean | null
  seo: RawSeo
}

const ALIANZA = { es: 'Alianza con Viva', en: 'Viva alliance' } satisfies Record<Lang, string>

function seo(raw: RawSeo): Seo {
  return {
    title: raw?.title ?? '',
    description: raw?.description ?? '',
    ogImage: raw?.ogImage?.asset ? imageUrl(raw.ogImage, 1200) : null,
    noindex: !!raw?.noindex,
  }
}

// Una sola consulta por idioma y por render (React cache) — todas las funciones parten de aquí
const loadRaw = cache(async (lang: Lang) => {
  const [{ data: destinos }, { data: rutas }] = await Promise.all([
    sanityFetch({ query: DESTINOS_QUERY, params: { lang }, stega: false }),
    sanityFetch({ query: RUTAS_QUERY, params: { lang }, stega: false }),
  ])
  const d = (destinos ?? []) as RawDestino[]
  const known = new Set(d.map(x => x.nombre))
  // Orden de las rutas: por origen y luego destino (como el listado original)
  const r = ((rutas ?? []) as RawRuta[])
    .filter(x => known.has(x.origen) && known.has(x.destino))
    .sort((a, b) =>
      a.origen.localeCompare(b.origen, LOCALE_TAG.es) || a.destino.localeCompare(b.destino, LOCALE_TAG.es),
    )
  return { destinos: d, rutas: r }
})

/** Igual que loadRaw pero solo con contenido publicado (para generateStaticParams, sin modo borrador). */
async function loadPublishedSlugs() {
  const [{ data: destinos }, { data: rutas }] = await Promise.all([
    sanityFetch({ query: DESTINOS_QUERY, params: { lang: 'es' }, perspective: 'published', stega: false }),
    sanityFetch({ query: RUTAS_QUERY, params: { lang: 'es' }, perspective: 'published', stega: false }),
  ])
  return {
    destinos: ((destinos ?? []) as RawDestino[]).map(x => x.slug),
    rutas: ((rutas ?? []) as RawRuta[]).map(x => x.slug),
  }
}

// ── Red (mapa interactivo, "Destinos directos", sala de prensa, Alianza, mapa del sitio) ──

/** Rutas como pares [origen, destino] (nombres de ciudad), ordenadas. */
export async function getRoutes(lang: Lang = 'es'): Promise<[string, string][]> {
  const { rutas } = await loadRaw(lang)
  return rutas.map(r => [r.origen, r.destino])
}

/** Rutas con su slug, para enlazar a su página. */
export async function getRouteLinks(lang: Lang = 'es'): Promise<{ origen: string; destino: string; slug: string }[]> {
  const { rutas } = await loadRaw(lang)
  return rutas.map(r => ({ origen: r.origen, destino: r.destino, slug: r.slug }))
}

/** Ciudades del mapa, por nombre. */
export async function getCities(lang: Lang = 'es'): Promise<Record<string, City>> {
  const { destinos } = await loadRaw(lang)
  return Object.fromEntries(
    destinos.map(d => [
      d.nombre,
      {
        label: d.nombre,
        slug: d.slug,
        lat: d.lat,
        lon: d.lon,
        hub: d.hub || undefined,
        intl: d.esInternacional || undefined,
        viva: d.conViva || undefined,
        ldx: d.etiqueta?.x ?? 10,
        ldy: d.etiqueta?.y ?? 0,
        anchor: d.etiqueta?.alineacion ?? 'start',
      } satisfies City,
    ]),
  )
}

// ── Destinos ──────────────────────────────────────────────────────────────────

export async function getAllDestinos(lang: Lang = 'es'): Promise<Destino[]> {
  const { destinos, rutas } = await loadRaw(lang)
  const conexiones = (nombre: string) =>
    [...new Set(rutas.flatMap(r => (r.origen === nombre ? [r.destino] : r.destino === nombre ? [r.origen] : [])))]
      .sort((a, b) => a.localeCompare(b, LOCALE_TAG.es))
  return destinos.map(d => ({
    nombre: d.nombre,
    slug: d.slug,
    iata: d.iata,
    aeropuerto: d.aeropuerto ?? '',
    descripcion: d.descripcion ?? '',
    imagen: d.imagen?.asset ? imageUrl(d.imagen, 1600) : '',
    imagenPosicion: imagePosition(d.imagen),
    rutas: conexiones(d.nombre),
    hub: !!d.hub,
    esInternacional: !!d.esInternacional,
    seo: seo(d.seo),
  }))
}

export async function getDestino(slug: string, lang: Lang = 'es'): Promise<Destino | null> {
  return (await getAllDestinos(lang)).find(d => d.slug === slug) ?? null
}

export async function getDestinoSlugs(): Promise<string[]> {
  return (await loadPublishedSlugs()).destinos
}

// ── Rutas ─────────────────────────────────────────────────────────────────────

export async function getAllRutas(lang: Lang = 'es'): Promise<RutaData[]> {
  const { destinos, rutas } = await loadRaw(lang)
  const byName = new Map(destinos.map(d => [d.nombre, d]))
  return rutas.map(r => {
    const o = byName.get(r.origen)!
    const d = byName.get(r.destino)!
    return {
      slug: r.slug,
      label: `${r.origen} – ${r.destino}`,
      origen: r.origen,
      destino: r.destino,
      iataOrigen: o.iata,
      iataDestino: d.iata,
      aeropuertoOrigen: o.aeropuerto ?? '',
      aeropuertoDestino: d.aeropuerto ?? '',
      distanciaKm: r.distanciaKm,
      duracionMin: r.duracionMin,
      descripcion: r.descripcion ?? '',
      quienViaja: r.quienViaja ?? '',
      ventajaAerus: r.ventajaAerus ?? '',
      esInternacional: !!(o.esInternacional || d.esInternacional),
      faq: r.faq.filter(f => f.q && f.a).map(f => ({ q: f.q!, a: f.a! })),
      conectadas: [
        ...r.relacionadas.map(x => ({ label: `${x.o} – ${x.d}`, href: `/rutas/${x.slug}/` })),
        ...(r.mostrarAlianzaViva ? [{ label: ALIANZA[lang], href: '/rutas/alianza-viva/' }] : []),
      ],
      seo: seo(r.seo),
    }
  })
}

export async function getRuta(slug: string, lang: Lang = 'es'): Promise<RutaData | null> {
  return (await getAllRutas(lang)).find(r => r.slug === slug) ?? null
}

export async function getRutaSlugs(): Promise<string[]> {
  return (await loadPublishedSlugs()).rutas
}

/** Datos mínimos de rutas por slug (para el aviso de rutas del header). */
export async function getRutasBySlug(lang: Lang = 'es') {
  return new Map((await getAllRutas(lang)).map(r => [r.slug, r]))
}
