import { defineDocuments, defineLocations, type PresentationPluginOptions } from 'sanity/presentation'
import { PAGES, docIds } from '../content/registry'
import { lp } from '../lib/i18n'

// Páginas fijas: cada documento se ve en su ruta (ES y EN)
const pageLocations = Object.fromEntries(
  PAGES.filter(p => p.path).map(p => [
    p.schema.name,
    defineLocations({
      locations: [
        { title: `${p.schema.title} (ES)`, href: lp('es', p.path!) },
        { title: `${p.schema.title} (EN)`, href: lp('en', p.path!) },
      ],
    }),
  ]),
)

// Qué páginas del sitio muestran cada documento (para la vista previa).
export const resolve: PresentationPluginOptions['resolve'] = {
  mainDocuments: defineDocuments([
    ...PAGES.filter(p => p.path).flatMap(p => [
      { route: p.path!.replace(/\/$/, '') || '/', filter: `_id == "${docIds(p).es}"` },
      { route: lp('en', p.path!).replace(/\/$/, ''), filter: `_id == "${docIds(p).en}"` },
    ]),
    { route: '/destinos/:slug', filter: `_type == "destino" && slug.current == $slug` },
    { route: '/rutas/:slug', filter: `_type == "ruta" && slug.current == $slug` },
  ]),
  locations: {
    ...pageLocations,
    destino: defineLocations({
      select: { title: 'nombre', slug: 'slug.current' },
      resolve: doc => ({
        locations: [
          { title: `${doc?.title} (ES)`, href: `/destinos/${doc?.slug}` },
          { title: `${doc?.title} (EN)`, href: `/en/destinations/${doc?.slug}` },
          { title: 'Destinos', href: '/destinos' },
        ],
      }),
    }),
    ruta: defineLocations({
      select: { o: 'origen.nombre', d: 'destino.nombre', slug: 'slug.current' },
      resolve: doc => ({
        locations: [
          { title: `${doc?.o} – ${doc?.d} (ES)`, href: `/rutas/${doc?.slug}` },
          { title: `${doc?.o} – ${doc?.d} (EN)`, href: `/en/routes/${doc?.slug}` },
          { title: 'Rutas', href: '/rutas' },
        ],
      }),
    }),
  },
}
