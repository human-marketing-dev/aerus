// Textos de la página "Destinos" (listado, /destinos/).
// Se editan en Sanity (Páginas → Rutas y destinos → Destinos); esto es el respaldo y la fuente de
// la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/destinos.ts.
//
// Los destinos (nombres, fotos, hubs, conexiones) NO están aquí: vienen de la red de rutas
// (documentos "destino" y "ruta" de Sanity, lib/red.ts).
//
// Marcadores: {n} se reemplaza por el número. Los textos con singular/plural tienen dos campos
// (…One para 1, …Other para cualquier otro número); la página elige cuál usar.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type DestinosContent = {
  seo: PageSeo
  eyebrow: string
  title: string
  intro: string
  statDestinations: string
  statHubs: string
  statIntlOne: string
  statIntlOther: string
  hubsEyebrow: string
  hubBadge: string
  directRoutesOne: string
  directRoutesOther: string
  seeFlights: string
  allEyebrow: string
  destinationCountOne: string
  destinationCountOther: string
  intlBadge: string
}

const es: DestinosContent = {
  seo: {
    metaTitle: 'Destinos | Aerus',
    metaDescription:
      'Explora la red de rutas aéreas regionales de Aerus. Vuelos directos a los destinos más importantes de México.',
  },
  eyebrow: 'Red Aerus',
  title: 'Destinos',
  intro: 'Vuelos regionales directos a los destinos más importantes de México.',
  statDestinations: 'destinos',
  statHubs: 'hubs',
  statIntlOne: 'internacional',
  statIntlOther: 'internacionales',
  hubsEyebrow: 'Nuestros hubs',
  hubBadge: 'Hub',
  directRoutesOne: '{n} ruta directa',
  directRoutesOther: '{n} rutas directas',
  seeFlights: 'Ver vuelos →',
  allEyebrow: 'Toda la red',
  destinationCountOne: '{n} destino',
  destinationCountOther: '{n} destinos',
  intlBadge: 'Internacional',
}

const en: DestinosContent = {
  seo: {
    metaTitle: 'Destinations | Aerus',
    metaDescription:
      'Explore the Aerus regional route network. Direct flights to Mexico’s most important destinations.',
  },
  eyebrow: 'Aerus network',
  title: 'Destinations',
  intro: 'Direct regional flights to Mexico’s most important destinations.',
  statDestinations: 'destinations',
  statHubs: 'hubs',
  statIntlOne: 'international',
  statIntlOther: 'international',
  hubsEyebrow: 'Our hubs',
  hubBadge: 'Hub',
  directRoutesOne: '{n} direct route',
  directRoutesOther: '{n} direct routes',
  seeFlights: 'View flights →',
  allEyebrow: 'The full network',
  destinationCountOne: '{n} destination',
  destinationCountOther: '{n} destinations',
  intlBadge: 'International',
}

const defaults: PageDefaults<DestinosContent> = { es, en }
export default defaults
