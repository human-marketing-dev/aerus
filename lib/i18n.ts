// Configuración de idiomas del sitio.
//
// - Español es el idioma por defecto y vive en la raíz, sin prefijo: /destinos/monterrey
// - Inglés vive bajo /en con slugs traducidos:                    /en/destinations/monterrey
//
// Internamente todas las páginas están en app/[lang]/ con los nombres de carpeta en español
// (la "ruta canónica"). proxy.ts reescribe las URLs públicas a esas rutas internas.
//
// Este módulo no usa 'server-only': lo importan proxy.ts, componentes de servidor y de cliente.

export const LANGS = ['es', 'en'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'es'

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value)
}

/** Etiqueta BCP 47 para toLocaleString / Intl / <html lang>. */
export const LOCALE_TAG: Record<Lang, string> = { es: 'es-MX', en: 'en-US' }

/**
 * Ruta canónica (español) → ruta en inglés. Solo segmentos estáticos: los segmentos
 * dinámicos (slugs de destinos, rutas y blog) se conservan tal cual.
 * Al agregar una página nueva con slug traducido, regístrala aquí.
 */
const ES_TO_EN: Record<string, string> = {
  '/destinos': '/destinations',
  '/rutas': '/routes',
  '/rutas/alianza-viva': '/routes/viva-alliance',
  '/on-demand': '/on-demand',
  '/on-demand/charter': '/on-demand/charter',
  '/on-demand/charter/cotizar': '/on-demand/charter/quote',
  '/on-demand/empresas': '/on-demand/business',
  '/on-demand/flight-pass': '/on-demand/flight-pass',
  '/on-demand/flight-pass/contacto': '/on-demand/flight-pass/contact',
  '/ayuda': '/help',
  '/ayuda/contacto': '/help/contact',
  '/ayuda/documentos-para-viajar': '/help/travel-documents',
  '/ayuda/equipaje': '/help/baggage',
  '/ayuda/facturacion': '/help/invoicing',
  '/ayuda/faq': '/help/faq',
  '/ayuda/requerimientos-especiales': '/help/special-assistance',
  '/ayuda/tiempos-aeropuerto': '/help/airport-times',
  '/ayuda/viajar-con-mascota': '/help/traveling-with-pets',
  '/blog': '/blog',
  '/check-in': '/check-in',
  '/experiencia': '/experience',
  '/experiencia/asistencia-de-viaje': '/experience/travel-assistance',
  '/experiencia/flota': '/experience/fleet',
  '/experiencia/grupos': '/experience/groups',
  '/experiencia/proceso-agil': '/experience/fast-process',
  '/experiencia/seguro-de-cancelacion': '/experience/cancellation-insurance',
  '/legal': '/legal',
  '/legal/aviso-de-privacidad': '/legal/privacy-notice',
  '/legal/cookies': '/legal/cookies',
  '/legal/terminos-y-condiciones': '/legal/terms-and-conditions',
  '/mapa-del-sitio': '/site-map',
  '/mi-reserva': '/my-booking',
  '/mro': '/mro',
  '/mro/accesorios-planeadores': '/mro/accessories-airframes',
  '/mro/capacidades': '/mro/capabilities',
  '/mro/cotizacion': '/mro/quote',
  '/mro/helices': '/mro/propellers',
  '/mro/motores-pt6a': '/mro/pt6a-engines',
  '/mro/radios-instrumentos': '/mro/radios-instruments',
  '/nosotros': '/about',
  '/nosotros/prensa': '/about/press',
  '/reservar': '/book',
  '/reservar/metodos-de-pago': '/book/payment-methods',
  '/reservar/tarifas': '/book/fares',
}

const EN_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN).map(([es, en]) => [en, es]),
)

/** Traduce una ruta con la tabla dada usando el prefijo estático más largo. */
function mapPath(path: string, table: Record<string, string>): string {
  const segs = path.split('/').filter(Boolean)
  for (let i = segs.length; i > 0; i--) {
    const prefix = '/' + segs.slice(0, i).join('/')
    const mapped = table[prefix]
    if (mapped !== undefined) {
      const rest = segs.slice(i)
      return rest.length ? `${mapped}/${rest.join('/')}` : mapped
    }
  }
  return segs.length ? '/' + segs.join('/') : '/'
}

/** Ruta pública en inglés (sin prefijo /en) → ruta canónica en español. */
export function englishToCanonical(path: string): string {
  return mapPath(path, EN_TO_ES)
}

/** Ruta canónica en español → ruta pública en inglés (sin prefijo /en). */
export function canonicalToEnglish(path: string): string {
  return mapPath(path, ES_TO_EN)
}

/**
 * Convierte una ruta canónica (en español, p. ej. '/destinos/monterrey/') en la URL pública
 * del idioma pedido. Conserva barra final, query y hash. Las URLs externas, mailto:, tel:
 * y anclas (#...) se devuelven sin cambios.
 *
 *   lp('es', '/ayuda/faq/')      → '/ayuda/faq/'
 *   lp('en', '/ayuda/faq/#pagos') → '/en/help/faq/#pagos'
 *   lp('en', '/')                → '/en'
 */
export function lp(lang: Lang, href: string): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href
  if (lang === DEFAULT_LANG) return href

  const m = href.match(/^([^?#]*)(.*)$/)!
  const pathname = m[1]
  const suffix = m[2]
  const trailing = pathname.length > 1 && pathname.endsWith('/')
  const translated = canonicalToEnglish(pathname)
  const full = translated === '/' ? `/${lang}` : `/${lang}${translated}${trailing ? '/' : ''}`
  return full + suffix
}

/**
 * Normaliza cualquier pathname (público o interno) a { lang, path canónico }.
 * Sirve tanto para la URL del navegador ('/en/destinations') como para la interna que ve el
 * servidor tras el rewrite ('/en/destinos', '/es/destinos'), así server y cliente coinciden.
 */
export function parsePathname(pathname: string): { lang: Lang; path: string } {
  const segs = pathname.split('/').filter(Boolean)
  if (segs[0] === 'en') return { lang: 'en', path: englishToCanonical('/' + segs.slice(1).join('/')) }
  if (segs[0] === 'es') return { lang: 'es', path: '/' + segs.slice(1).join('/') }
  return { lang: 'es', path: '/' + segs.join('/') }
}

/**
 * Bloque `alternates` para metadata: canonical + hreflang de ambos idiomas.
 * `path` es la ruta canónica en español.
 */
export function alternates(lang: Lang, path: string) {
  return {
    canonical: lp(lang, path),
    languages: {
      'es-MX': lp('es', path),
      en: lp('en', path),
      'x-default': lp('es', path),
    },
  }
}
