// Textos de la PLANTILLA de las páginas de destino (/destinos/<destino>/): textos comunes a todos
// los destinos. Se editan en Sanity (Páginas → Rutas y destinos → Plantilla · Página de destino);
// esto es el respaldo y la fuente de la carga inicial. Mismas claves que el esquema
// sanity/schemaTypes/pages/plantilla-destino.ts.
//
// Sin SEO: el SEO de cada destino vive en su documento "destino" (Red de rutas).
// La descripción, foto y conexiones de cada destino también vienen de la red (lib/red.ts).
//
// Marcadores (la página los reemplaza):
//   {nombre}   nombre del destino
//   {n}        número de rutas directas / de ciudades adicionales
//   {ciudades} lista de ciudades con vuelo directo, separadas por coma
// Los textos con singular/plural tienen dos campos (…One para 1, …Other para cualquier otro número).
import type { PageDefaults } from '@/lib/content'

type Faq = { q: string; a: string }

export type PlantillaDestinoContent = {
  hubBadge: string
  intlBadge: string
  h1: string
  routeLabelOne: string
  routeLabelOther: string
  andMore: string
  routesFrom: string
  faq: string
  sidebarLabel: string
  searchFlights: string
  faqDirecto: { q: string; aOne: string; aOther: string }
  faqCiudades: Faq
  faqInternacional: Faq
  faqHub: Faq
}

const es: PlantillaDestinoContent = {
  hubBadge: 'Hub',
  intlBadge: 'Internacional',
  h1: 'Vuelos directos a {nombre}',
  routeLabelOne: '{n} ruta directa',
  routeLabelOther: '{n} rutas directas',
  andMore: 'y {n} más',
  routesFrom: 'Rutas directas desde {nombre}',
  faq: 'Preguntas frecuentes',
  sidebarLabel: 'Vuela directo a {nombre} con Aerus',
  searchFlights: 'Buscar vuelos',
  faqDirecto: {
    q: '¿Aerus vuela directo a {nombre}?',
    aOne: 'Sí. Aerus opera {n} ruta directa con {nombre}.',
    aOther: 'Sí. Aerus opera {n} rutas directas con {nombre}.',
  },
  faqCiudades: {
    q: '¿Desde qué ciudades puedo volar directo a {nombre}?',
    a: 'Puedes volar directo a {nombre} desde: {ciudades}.',
  },
  faqInternacional: {
    q: '¿{nombre} es un destino internacional?',
    a: 'Sí, {nombre} es un destino internacional dentro de la red de Aerus.',
  },
  faqHub: {
    q: '¿{nombre} es un hub de Aerus?',
    a: 'Sí, {nombre} es uno de los hubs principales de la red Aerus. Desde este aeropuerto operamos conexiones directas a múltiples destinos de la red.',
  },
}

const en: PlantillaDestinoContent = {
  hubBadge: 'Hub',
  intlBadge: 'International',
  h1: 'Direct flights to {nombre}',
  routeLabelOne: '{n} direct route',
  routeLabelOther: '{n} direct routes',
  andMore: 'and {n} more',
  routesFrom: 'Direct routes from {nombre}',
  faq: 'Frequently asked questions',
  sidebarLabel: 'Fly direct to {nombre} with Aerus',
  searchFlights: 'Search flights',
  faqDirecto: {
    q: 'Does Aerus fly direct to {nombre}?',
    aOne: 'Yes. Aerus operates {n} direct route to {nombre}.',
    aOther: 'Yes. Aerus operates {n} direct routes to {nombre}.',
  },
  faqCiudades: {
    q: 'Which cities can I fly direct to {nombre} from?',
    a: 'You can fly direct to {nombre} from: {ciudades}.',
  },
  faqInternacional: {
    q: 'Is {nombre} an international destination?',
    a: 'Yes, {nombre} is an international destination in the Aerus network.',
  },
  faqHub: {
    q: 'Is {nombre} an Aerus hub?',
    a: 'Yes, {nombre} is one of the main hubs in the Aerus network. From this airport we operate direct flights to multiple destinations across the network.',
  },
}

const defaults: PageDefaults<PlantillaDestinoContent> = { es, en }
export default defaults
