// Textos de la página "Experiencia" (/experiencia).
// Se editan en Sanity (Páginas → Experiencia → Experiencia Aerus); esto es el respaldo y la fuente
// de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/experiencia.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Servicio = { icono: string; titulo: string; descripcion: string; href: string }
type Paso = { num: string; titulo: string; desc: string }
type ServicioAdicional = { icono: string; titulo: string; desc: string; href: string }

export type ExperienciaContent = {
  seo: PageSeo
  heroEyebrow: string
  heroTitlePre: string
  heroTitleAccent: string
  heroTitlePost: string
  heroIntro: string
  servicios: Servicio[]
  conocerMas: string
  procesosEyebrow: string
  procesosTitle: string
  procesosTitleEm: string
  pasos: Paso[]
  procesosCta: string
  procesosCtaHref: string
  adicionalesEyebrow: string
  adicionalesTitle: string
  serviciosAdicionales: ServicioAdicional[]
  saberMas: string
}

const es: ExperienciaContent = {
  seo: {
    metaTitle: 'Experiencia Aerus | Aerus',
    metaDescription:
      'Volar con Aerus es diferente. Espera minutos, no horas. Conoce nuestra flota, asistencia de viaje, seguro de cancelación y opciones para grupos.',
  },
  heroEyebrow: 'Volar diferente',
  heroTitlePre: 'La experiencia ',
  heroTitleAccent: 'Aerus',
  heroTitlePost: '',
  heroIntro:
    'Las aerolíneas grandes te hacen esperar. Nosotros no. Descubre qué hace diferente volar con Aerus en cada etapa de tu viaje.',
  servicios: [
    {
      icono: 'clock',
      titulo: 'Espera minutos, no horas',
      descripcion: 'Terminales regionales con menos filas y más tiempo para ti. Check-in rápido, abordaje directo, sin colas de una hora.',
      href: '/experiencia/proceso-agil/',
    },
    {
      icono: 'plane',
      titulo: 'La flota',
      descripcion: 'Turbohélices Cessna Grand Caravan EX. Cómodos, confiables y perfectos para las rutas regionales de México.',
      href: '/experiencia/flota/',
    },
    {
      icono: 'support',
      titulo: 'Asistencia de viaje',
      descripcion: 'Seguimiento de tu vuelo, atención personalizada y soporte en caso de cambios o imprevistos. Siempre hay alguien para ayudarte.',
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'shield',
      titulo: 'Seguro de cancelación',
      descripcion: 'Protege tu viaje contra imprevistos. Agrega el seguro al reservar y viaja tranquilo sabiendo que tienes respaldo.',
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'users',
      titulo: 'Vuelos para grupos',
      descripcion: 'Equipos, empresas o familias numerosas. Coordinamos la logística de tu grupo desde la reservación hasta el aterrizaje.',
      href: '/experiencia/grupos/',
    },
  ],
  conocerMas: 'Conocer más',
  procesosEyebrow: 'Sin filas, sin esperas',
  procesosTitle: 'Del carro a la pista ',
  procesosTitleEm: 'en minutos',
  pasos: [
    {
      num: '01',
      titulo: 'Llega 45 minutos antes',
      desc: 'Olvídate de las 2 horas de anticipación. En terminales regionales el proceso es más ágil y tú llegas más descansado.',
    },
    {
      num: '02',
      titulo: 'Check-in express',
      desc: 'Mostrador dedicado, sin filas interminables. En minutos tienes tu pase de abordar y tu equipaje despachado.',
    },
    {
      num: '03',
      titulo: 'Abordaje directo',
      desc: 'Caminatas cortas hasta la aeronave. Sin autobuses, sin pasillos infinitos. Subes directo desde la terminal.',
    },
    {
      num: '04',
      titulo: 'Despegue puntual',
      desc: 'Operamos en aeropuertos con menos tráfico aéreo. Menos congestión, más puntualidad en cada vuelo.',
    },
  ],
  procesosCta: 'Ver el proceso completo',
  procesosCtaHref: '/experiencia/proceso-agil/',
  adicionalesEyebrow: 'Más que un vuelo',
  adicionalesTitle: 'Servicios adicionales',
  serviciosAdicionales: [
    {
      icono: 'shield',
      titulo: 'Seguro de cancelación',
      desc: 'Protege tu inversión ante imprevistos. Agrega el seguro al reservar y recupera el valor de tu boleto si necesitas cancelar.',
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'support',
      titulo: 'Asistencia de viaje 24/7',
      desc: 'Atención personalizada en todo momento. Si algo cambia, hay alguien disponible para ayudarte a resolverlo.',
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'users',
      titulo: 'Vuelos para grupos',
      desc: 'Familias, equipos corporativos o grupos de turismo. Coordinamos toda la logística desde la reservación.',
      href: '/experiencia/grupos/',
    },
    {
      icono: 'plane',
      titulo: 'Vuelo chárter privado',
      desc: 'Toda la aeronave para ti. Define la ruta, el horario y los pasajeros. Ideal para empresas y eventos especiales.',
      href: '/on-demand/charter/',
    },
  ],
  saberMas: 'Saber más',
}

const en: ExperienciaContent = {
  seo: {
    metaTitle: 'The Aerus Experience | Aerus',
    metaDescription:
      'Flying with Aerus is different. Wait minutes, not hours. Discover our fleet, travel assistance, cancellation insurance and group travel options.',
  },
  heroEyebrow: 'A different way to fly',
  heroTitlePre: 'The ',
  heroTitleAccent: 'Aerus',
  heroTitlePost: ' experience',
  heroIntro:
    "Big airlines keep you waiting. We don't. Discover what makes flying with Aerus different at every stage of your trip.",
  servicios: [
    {
      icono: 'clock',
      titulo: 'Wait minutes, not hours',
      descripcion: 'Regional terminals with shorter lines and more time for you. Fast check-in, direct boarding, no hour-long queues.',
      href: '/experiencia/proceso-agil/',
    },
    {
      icono: 'plane',
      titulo: 'The fleet',
      descripcion: 'Cessna Grand Caravan EX turboprops. Comfortable, reliable and perfect for regional routes across Mexico.',
      href: '/experiencia/flota/',
    },
    {
      icono: 'support',
      titulo: 'Travel assistance',
      descripcion: "Flight tracking, personalized service and support if plans change or something unexpected happens. There's always someone to help.",
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'shield',
      titulo: 'Cancellation insurance',
      descripcion: "Protect your trip against the unexpected. Add insurance when you book and travel with peace of mind knowing you're covered.",
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'users',
      titulo: 'Group flights',
      descripcion: 'Teams, companies or large families. We coordinate your group’s logistics from booking to landing.',
      href: '/experiencia/grupos/',
    },
  ],
  conocerMas: 'Learn more',
  procesosEyebrow: 'No lines, no waiting',
  procesosTitle: 'From curb to runway ',
  procesosTitleEm: 'in minutes',
  pasos: [
    {
      num: '01',
      titulo: 'Arrive 45 minutes early',
      desc: 'Forget arriving 2 hours ahead. Regional terminals move faster, so you arrive more relaxed.',
    },
    {
      num: '02',
      titulo: 'Express check-in',
      desc: 'A dedicated counter with no endless lines. In minutes you have your boarding pass and your bags are checked.',
    },
    {
      num: '03',
      titulo: 'Direct boarding',
      desc: 'A short walk to the aircraft. No shuttle buses, no endless corridors. You board straight from the terminal.',
    },
    {
      num: '04',
      titulo: 'On-time departure',
      desc: 'We operate at airports with less air traffic. Less congestion means better on-time performance on every flight.',
    },
  ],
  procesosCta: 'See the full process',
  procesosCtaHref: '/experiencia/proceso-agil/',
  adicionalesEyebrow: 'More than a flight',
  adicionalesTitle: 'Additional services',
  serviciosAdicionales: [
    {
      icono: 'shield',
      titulo: 'Cancellation insurance',
      desc: 'Protect your purchase against the unexpected. Add insurance when you book and get your ticket value back if you need to cancel.',
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'support',
      titulo: '24/7 travel assistance',
      desc: 'Personalized support at every moment. If something changes, someone is always available to help you sort it out.',
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'users',
      titulo: 'Group flights',
      desc: 'Families, corporate teams or tour groups. We coordinate all the logistics, starting from your booking.',
      href: '/experiencia/grupos/',
    },
    {
      icono: 'plane',
      titulo: 'Private charter flight',
      desc: 'The entire aircraft is yours. Choose the route, the schedule and the passengers. Ideal for companies and special events.',
      href: '/on-demand/charter/',
    },
  ],
  saberMas: 'Learn more',
}

const defaults: PageDefaults<ExperienciaContent> = { es, en }
export default defaults
