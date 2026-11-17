// Textos de la página "Rutas" (listado, /rutas/).
// Se editan en Sanity (Páginas → Rutas y destinos → Rutas); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/rutas.ts.
//
// Las rutas (ciudades, códigos, duración) NO están aquí: vienen de la red de rutas (lib/red.ts).
// Marcadores: {n} se reemplaza por el número total de rutas.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type RutasContent = {
  seo: PageSeo
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  statDirect: string
  statIntl: string
  statDomestic: string
  domestic: string
  international: string
  vivaLabel: string
  vivaTitle: string
  vivaDesc: string
  vivaCta: string
  vivaHref: string
  intlBadge: string
  seeRoute: string
}

const es: RutasContent = {
  seo: {
    metaTitle: 'Rutas | Aerus',
    metaDescription:
      'Red de rutas directas de Aerus. Vuelos regionales sin escalas entre las principales ciudades de México y la frontera norte con Estados Unidos.',
  },
  eyebrow: 'Red Aerus',
  titleA: 'Rutas ',
  titleAccent: 'directas',
  intro:
    '{n} rutas directas. Sin escalas, sin conexiones, sin perder el día en un aeropuerto grande. Vuelas de origen a destino.',
  statDirect: 'rutas directas',
  statIntl: 'internacionales',
  statDomestic: 'nacionales',
  domestic: 'Nacionales',
  international: 'Internacionales — Frontera norte',
  vivaLabel: 'Amplía tu red',
  vivaTitle: 'Alianza con Viva',
  vivaDesc:
    'Combina tu vuelo Aerus con la red de Viva para llegar a más destinos nacionales e internacionales con una sola reservación.',
  vivaCta: 'Conocer la alianza',
  vivaHref: '/rutas/alianza-viva/',
  intlBadge: 'Intl',
  seeRoute: 'Ver ruta',
}

const en: RutasContent = {
  seo: {
    metaTitle: 'Routes | Aerus',
    metaDescription:
      'The Aerus direct route network. Nonstop regional flights between Mexico’s major cities and the northern border with the United States.',
  },
  eyebrow: 'Aerus network',
  titleA: 'Direct ',
  titleAccent: 'routes',
  intro:
    '{n} direct routes. No layovers, no connections, no losing the day in a big airport. You fly straight from origin to destination.',
  statDirect: 'direct routes',
  statIntl: 'international',
  statDomestic: 'domestic',
  domestic: 'Domestic',
  international: 'International — Northern border',
  vivaLabel: 'Expand your network',
  vivaTitle: 'Viva alliance',
  vivaDesc:
    'Combine your Aerus flight with the Viva network to reach more domestic and international destinations with a single booking.',
  vivaCta: 'Explore the alliance',
  vivaHref: '/rutas/alianza-viva/',
  intlBadge: 'Intl',
  seeRoute: 'View route',
}

const defaults: PageDefaults<RutasContent> = { es, en }
export default defaults
