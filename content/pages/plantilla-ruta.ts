// Textos de la PLANTILLA de las páginas de ruta (/rutas/<ruta>/): textos comunes a todas las
// rutas. Se editan en Sanity (Páginas → Rutas y destinos → Plantilla · Página de ruta); esto es
// el respaldo y la fuente de la carga inicial. Mismas claves que el esquema
// sanity/schemaTypes/pages/plantilla-ruta.ts.
//
// Sin SEO: el SEO de cada ruta vive en su documento "ruta" (Red de rutas). La descripción,
// "quién viaja", "ventaja Aerus", FAQ, aeropuertos, distancia y duración también vienen de la red.
//
// Marcadores (la página los reemplaza):
//   {origen}   ciudad de origen
//   {destino}  ciudad de destino
//   {duracion} duración estimada del vuelo (p. ej. "1h 10min")
import type { PageDefaults } from '@/lib/content'

type Enlace = { label: string; href: string }

export type PlantillaRutaContent = {
  h1: string
  flightTime: string
  directFlight: string
  international: string
  statDuration: string
  statDistance: string
  statDirect: string
  statNonstop: string
  statCapacity: string
  statAircraft: string
  passengerProfile: string
  whoTravels: string
  whyAerus: string
  difference: string
  flightInfo: string
  airports: string
  origin: string
  destination: string
  beforeYouFly: string
  practicalInfo: string
  docsA: string
  docsLink: string
  docsHref: string
  docsB: string
  timesA: string
  timesLink: string
  timesHref: string
  timesB: string
  bagA: string
  bagLink: string
  bagHref: string
  bagB: string
  assistA: string
  assistLink: string
  assistHref: string
  faq: string
  ready: string
  readyDesc: string
  book: string
  bookHref: string
  moreFrom: string
  related: string
  relacionados: Enlace[]
}

const es: PlantillaRutaContent = {
  h1: 'Vuelos {origen} – {destino}',
  flightTime: '~{duracion} de vuelo',
  directFlight: 'Vuelo directo',
  international: 'Internacional',
  statDuration: 'Duración estimada',
  statDistance: 'Distancia directa',
  statDirect: 'Directo',
  statNonstop: 'Sin escalas',
  statCapacity: '12 pax',
  statAircraft: 'Cessna Grand Caravan EX',
  passengerProfile: 'Perfil de pasajero',
  whoTravels: '¿Quién viaja en esta ruta?',
  whyAerus: 'Por qué Aerus',
  difference: 'La diferencia en esta ruta',
  flightInfo: 'Información de vuelo',
  airports: 'Aeropuertos',
  origin: 'Origen',
  destination: 'Destino',
  beforeYouFly: 'Antes de viajar',
  practicalInfo: 'Información práctica',
  docsA: 'Ruta internacional — revisa los',
  docsLink: 'documentos requeridos',
  docsHref: '/ayuda/documentos-para-viajar/',
  docsB: 'antes de volar.',
  timesA: 'Consulta los',
  timesLink: 'tiempos de llegada al aeropuerto',
  timesHref: '/ayuda/tiempos-aeropuerto/',
  timesB: 'recomendados por Aerus.',
  bagA: 'Revisa nuestra',
  bagLink: 'política de equipaje',
  bagHref: '/ayuda/equipaje/',
  bagB: 'para conocer límites de peso y dimensiones.',
  assistA: 'Si necesitas asistencia especial,',
  assistLink: 'contáctanos antes del vuelo',
  assistHref: '/ayuda/requerimientos-especiales/',
  faq: 'Preguntas frecuentes',
  ready: '¿Listo para volar?',
  readyDesc: 'Vuelo directo {origen} – {destino} en {duracion}. Sin escalas, sin esperas.',
  book: 'Reservar vuelo',
  bookHref: '/reservar/',
  moreFrom: 'Más rutas desde {origen}',
  related: 'También puede interesarte',
  relacionados: [
    { label: 'Cómo es el check-in', href: '/experiencia/proceso-agil/' },
    { label: 'La flota Aerus', href: '/experiencia/flota/' },
    { label: 'Política de equipaje', href: '/ayuda/equipaje/' },
  ],
}

const en: PlantillaRutaContent = {
  h1: '{origen} – {destino} Flights',
  flightTime: '~{duracion} flight',
  directFlight: 'Direct flight',
  international: 'International',
  statDuration: 'Estimated duration',
  statDistance: 'Direct distance',
  statDirect: 'Direct',
  statNonstop: 'Nonstop',
  statCapacity: '12 pax',
  statAircraft: 'Cessna Grand Caravan EX',
  passengerProfile: 'Passenger profile',
  whoTravels: 'Who flies this route?',
  whyAerus: 'Why Aerus',
  difference: 'The difference on this route',
  flightInfo: 'Flight information',
  airports: 'Airports',
  origin: 'Origin',
  destination: 'Destination',
  beforeYouFly: 'Before you fly',
  practicalInfo: 'Practical information',
  docsA: 'International route — check the',
  docsLink: 'required travel documents',
  docsHref: '/ayuda/documentos-para-viajar/',
  docsB: 'before you fly.',
  timesA: 'See the',
  timesLink: 'airport arrival times',
  timesHref: '/ayuda/tiempos-aeropuerto/',
  timesB: 'recommended by Aerus.',
  bagA: 'Review our',
  bagLink: 'baggage policy',
  bagHref: '/ayuda/equipaje/',
  bagB: 'for weight and size limits.',
  assistA: 'If you need special assistance,',
  assistLink: 'contact us before your flight',
  assistHref: '/ayuda/requerimientos-especiales/',
  faq: 'Frequently asked questions',
  ready: 'Ready to fly?',
  readyDesc: 'Direct flight {origen} – {destino} in {duracion}. No layovers, no waiting.',
  book: 'Book a flight',
  bookHref: '/reservar/',
  moreFrom: 'More routes from {origen}',
  related: 'You may also be interested in',
  relacionados: [
    { label: 'How check-in works', href: '/experiencia/proceso-agil/' },
    { label: 'The Aerus fleet', href: '/experiencia/flota/' },
    { label: 'Baggage policy', href: '/ayuda/equipaje/' },
  ],
}

const defaults: PageDefaults<PlantillaRutaContent> = { es, en }
export default defaults
