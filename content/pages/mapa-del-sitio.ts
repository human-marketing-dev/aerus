// Textos de la página "Mapa del sitio" (/mapa-del-sitio/).
// Se editan en Sanity (Páginas → Rutas y destinos → Mapa del sitio); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/mapa-del-sitio.ts.
//
// Solo los textos son editables: la estructura del árbol (enlaces y estatus de cada página) está
// en la página, y los destinos y rutas listados vienen de la red de rutas (lib/red.ts).
// La página nunca se indexa (robots noindex), sin importar lo que diga su SEO.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type Status = 'verde' | 'azul' | 'naranja' | 'amarillo' | 'gris'

export type MapaSitioContent = {
  seo: PageSeo
  eyebrow: string
  title: string
  legendLabel: string
  status: Record<Status, string>
  secMain: string
  home: string
  book: string
  fares: string
  payment: string
  checkin: string
  myBooking: string
  secDestinations: string
  destinationsIndex: string
  secRoutes: string
  routesIndex: string
  viva: string
  secOnDemand: string
  onDemand: string
  charter: string
  charterQuote: string
  flightPass: string
  flightPassContact: string
  business: string
  secExperience: string
  experience: string
  fastProcess: string
  fleet: string
  travelAssistance: string
  cancellationInsurance: string
  groups: string
  secBlog: string
  blog: string
  blogPosts: { label: string; slug: string }[]
  secAbout: string
  about: string
  press: string
  secMro: string
  mro: string
  mroCapabilities: string
  mroPt6a: string
  mroPropellers: string
  mroAccessories: string
  mroRadios: string
  mroQuote: string
  secLegal: string
  terms: string
  privacy: string
  cookies: string
  secHelp: string
  helpCenter: string
  faq: string
  travelDocs: string
  baggage: string
  airportTimes: string
  specialAssistance: string
  pets: string
  invoicing: string
  contact: string
}

const es: MapaSitioContent = {
  seo: {
    metaTitle: 'Mapa del sitio | Aerus',
    metaDescription: 'Mapa del sitio de Aerus: todas las páginas del sitio en un solo lugar.',
  },
  eyebrow: 'Aerus',
  title: 'Mapa del sitio',
  legendLabel: 'Leyenda de estatus',
  status: {
    gris: 'Por definir',
    amarillo: 'Info lista',
    naranja: 'En construcción',
    azul: 'Construida',
    verde: 'Aprobada',
  },
  secMain: 'Tareas principales',
  home: 'Inicio',
  book: 'Reservar',
  fares: 'Tarifas y familias',
  payment: 'Métodos de pago',
  checkin: 'Check-in',
  myBooking: 'Mi Reserva',
  secDestinations: 'Destinos',
  destinationsIndex: 'Destinos (índice)',
  secRoutes: 'Rutas',
  routesIndex: 'Rutas (índice)',
  viva: 'Alianza con Viva',
  secOnDemand: 'On Demand',
  onDemand: 'On Demand',
  charter: 'Aerus Charter',
  charterQuote: 'Cotizar charter',
  flightPass: 'Aerus Flight Pass',
  flightPassContact: 'Contacto Flight Pass',
  business: 'Soluciones para empresas',
  secExperience: 'Experiencia',
  experience: 'Experiencia Aerus',
  fastProcess: 'Espera minutos, no horas',
  fleet: 'La flota',
  travelAssistance: 'Asistencia de viaje',
  cancellationInsurance: 'Seguro de cancelación',
  groups: 'Vuelos para grupos',
  secBlog: 'Blog',
  blog: 'Blog',
  blogPosts: [
    { label: '¡Con Aerus llega a los mejores lugares caribeños!', slug: 'grand-costa-maya' },
    { label: '¡Aerus: Tu guía para unas vacaciones inolvidables!', slug: 'cancun-vacaciones-inolvidables' },
    { label: 'El paraíso a solo un vuelo de distancia', slug: 'descubre-cozumel' },
    { label: '¿Quiénes somos?', slug: 'quienes-somos' },
    { label: 'Más cerca de ti', slug: 'nace-aerus' },
  ],
  secAbout: 'Nosotros',
  about: 'Nosotros',
  press: 'Sala de prensa',
  secMro: 'MRO — Mantenimiento aeronáutico',
  mro: 'MRO',
  mroCapabilities: 'Capacidades y certificaciones',
  mroPt6a: 'Motores PT6A',
  mroPropellers: 'Hélices',
  mroAccessories: 'Accesorios y planeadores',
  mroRadios: 'Radios e instrumentos',
  mroQuote: 'Solicitar cotización',
  secLegal: 'Legal',
  terms: 'Términos y condiciones',
  privacy: 'Aviso de privacidad',
  cookies: 'Política de cookies',
  secHelp: 'Ayuda',
  helpCenter: 'Centro de ayuda',
  faq: 'Preguntas frecuentes',
  travelDocs: 'Documentos para viajar',
  baggage: 'Equipaje',
  airportTimes: 'Tiempos de llegada al aeropuerto',
  specialAssistance: 'Requerimientos especiales',
  pets: 'Viajar con mascota',
  invoicing: 'Facturación',
  contact: 'Contacto',
}

const en: MapaSitioContent = {
  seo: {
    metaTitle: 'Site map | Aerus',
    metaDescription: 'Aerus site map: every page on the site in one place.',
  },
  eyebrow: 'Aerus',
  title: 'Site map',
  legendLabel: 'Status legend',
  status: {
    gris: 'To be defined',
    amarillo: 'Content ready',
    naranja: 'In progress',
    azul: 'Built',
    verde: 'Approved',
  },
  secMain: 'Main tasks',
  home: 'Home',
  book: 'Book',
  fares: 'Fares and fare families',
  payment: 'Payment methods',
  checkin: 'Check-in',
  myBooking: 'My Booking',
  secDestinations: 'Destinations',
  destinationsIndex: 'Destinations (index)',
  secRoutes: 'Routes',
  routesIndex: 'Routes (index)',
  viva: 'Viva alliance',
  secOnDemand: 'On Demand',
  onDemand: 'On Demand',
  charter: 'Aerus Charter',
  charterQuote: 'Request a charter quote',
  flightPass: 'Aerus Flight Pass',
  flightPassContact: 'Flight Pass contact',
  business: 'Business solutions',
  secExperience: 'Experience',
  experience: 'The Aerus experience',
  fastProcess: 'Wait minutes, not hours',
  fleet: 'The fleet',
  travelAssistance: 'Travel assistance',
  cancellationInsurance: 'Cancellation insurance',
  groups: 'Group flights',
  secBlog: 'Blog',
  blog: 'Blog',
  blogPosts: [
    { label: 'Reach the best Caribbean spots with Aerus!', slug: 'grand-costa-maya' },
    { label: 'Aerus: your guide to an unforgettable vacation!', slug: 'cancun-vacaciones-inolvidables' },
    { label: 'Paradise, just one flight away', slug: 'descubre-cozumel' },
    { label: 'Who we are', slug: 'quienes-somos' },
    { label: 'Closer to you', slug: 'nace-aerus' },
  ],
  secAbout: 'About us',
  about: 'About us',
  press: 'Press room',
  secMro: 'MRO — Aircraft maintenance',
  mro: 'MRO',
  mroCapabilities: 'Capabilities and certifications',
  mroPt6a: 'PT6A engines',
  mroPropellers: 'Propellers',
  mroAccessories: 'Accessories and airframes',
  mroRadios: 'Radios and instruments',
  mroQuote: 'Request a quote',
  secLegal: 'Legal',
  terms: 'Terms and conditions',
  privacy: 'Privacy notice',
  cookies: 'Cookie policy',
  secHelp: 'Help',
  helpCenter: 'Help center',
  faq: 'Frequently asked questions',
  travelDocs: 'Travel documents',
  baggage: 'Baggage',
  airportTimes: 'Airport arrival times',
  specialAssistance: 'Special assistance',
  pets: 'Traveling with pets',
  invoicing: 'Invoicing',
  contact: 'Contact',
}

const defaults: PageDefaults<MapaSitioContent> = { es, en }
export default defaults
