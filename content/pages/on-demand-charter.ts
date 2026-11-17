// Textos de la página "Aerus Charter" (/on-demand/charter).
// Se editan en Sanity (Páginas → Aerus Charter); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/on-demand-charter.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { IconName } from '@/components/icon-names'

export type CharterContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  usosSub: string
  usosTitulo: string
  usos: { icono: IconName; titulo: string; desc: string }[]
  incluyeSub: string
  incluyeTitulo: string
  incluye: string[]
  pasosTitulo: string
  pasos: { titulo: string; desc: string }[]
  ctaTitulo: string
  ctaDesc: string
  ctaBtn: string
  ctaHref: string
  relacionadosTitulo: string
  relacionados: { label: string; href: string }[]
  contactoTag: string
  contactoTitulo: string
  email: string
  telefono: string
  horario: string
}

const es: CharterContent = {
  seo: {
    metaTitle: 'Aerus Charter | Aerus',
    metaDescription:
      'Chárter ejecutivo y grupal con Aerus. Avión exclusivo, horario a tu medida, hasta 12 pasajeros. Para eventos corporativos, delegaciones, equipos deportivos y traslados urgentes.',
  },
  crumb: 'Aerus Charter',
  eyebrow: 'On Demand',
  titleA: 'Aerus ',
  titleAccent: 'Charter',
  intro:
    'Avión exclusivo para tu grupo o evento. Tú defines el destino, la fecha y el horario. Hasta 12 pasajeros. Vuelo directo, sin escalas, sin horarios ajenos.',
  usosSub: 'Para quién es',
  usosTitulo: 'Usos frecuentes del chárter',
  usos: [
    {
      icono: 'users',
      titulo: 'Viajes ejecutivos',
      desc: 'Directivos y equipos que necesitan llegar el mismo día a una reunión, sin depender de horarios comerciales.',
    },
    {
      icono: 'plane',
      titulo: 'Delegaciones y eventos',
      desc: 'Traslado de grupos a convenciones, lanzamientos, inauguraciones o eventos corporativos en destinos regionales.',
    },
    {
      icono: 'ticket',
      titulo: 'Equipos deportivos',
      desc: 'Vuelos coordinados para equipos, cuerpos técnicos y staff. Gestión de equipaje especial incluida en la coordinación.',
    },
    {
      icono: 'clock',
      titulo: 'Traslados urgentes',
      desc: 'Cuando un vuelo comercial no existe o no llega a tiempo. Salida en el horario que necesitas hacia cualquier destino de la red.',
    },
  ],
  incluyeSub: 'El servicio',
  incluyeTitulo: 'Qué incluye el chárter',
  incluye: [
    'Uso exclusivo de la aeronave para tu grupo (hasta 12 pasajeros)',
    'Horario de salida y llegada definido por ti',
    'Salida desde cualquier aeropuerto dentro de la red Aerus',
    'Flexibilidad de equipaje mayor a vuelos regulares',
    'Factura a razón social de la empresa',
    'Atención de un agente Aerus durante todo el proceso',
    'Posibilidad de escala intermedia según la ruta',
  ],
  pasosTitulo: 'Cómo funciona',
  pasos: [
    {
      titulo: 'Cuéntanos del vuelo',
      desc: 'Origen, destino, fecha, horario tentativo y número de pasajeros. Mientras más detalle, más precisa será la propuesta.',
    },
    {
      titulo: 'Recibe tu propuesta en 24h',
      desc: 'Nuestro equipo revisa disponibilidad de aeronave y te envía una propuesta con precio, itinerario y condiciones de pago.',
    },
    {
      titulo: 'Confirma y paga',
      desc: 'Al confirmar la propuesta coordinamos todos los detalles operativos. El pago puede realizarse por transferencia o cargo a cuenta empresarial.',
    },
    {
      titulo: 'Vuela',
      desc: 'El día del vuelo, llega al aeropuerto 60 minutos antes. Tu avión está esperando — no hay filas de check-in ni espera en sala.',
    },
  ],
  ctaTitulo: 'Solicita tu cotización',
  ctaDesc: 'Envíanos los datos del vuelo y te respondemos con una propuesta en menos de 24 horas.',
  ctaBtn: 'Cotizar chárter',
  ctaHref: '/on-demand/charter/cotizar/',
  relacionadosTitulo: 'También puede interesarte',
  relacionados: [
    { label: 'Aerus Flight Pass',     href: '/on-demand/flight-pass/' },
    { label: 'Cuenta empresarial',    href: '/on-demand/empresas/' },
    { label: 'Vuelos para grupos',    href: '/experiencia/grupos/' },
    { label: 'Red de rutas',          href: '/rutas/' },
  ],
  contactoTag: 'Contacto directo',
  contactoTitulo: 'Equipo Charter',
  email: 'charter@aerus.mx',
  telefono: '+52 812 682 3501',
  horario: 'Lun–Vie · 08:00–18:00 h',
}

const en: CharterContent = {
  seo: {
    metaTitle: 'Aerus Charter | Aerus',
    metaDescription:
      'Executive and group charter flights with Aerus. A private aircraft on your schedule for up to 12 passengers. Ideal for corporate events, delegations, sports teams and urgent travel.',
  },
  crumb: 'Aerus Charter',
  eyebrow: 'On Demand',
  titleA: 'Aerus ',
  titleAccent: 'Charter',
  intro:
    'A private aircraft for your group or event. You choose the destination, date and time. Up to 12 passengers. Nonstop, with no layovers and no one else’s schedule.',
  usosSub: 'Who it’s for',
  usosTitulo: 'Common charter uses',
  usos: [
    {
      icono: 'users',
      titulo: 'Executive travel',
      desc: 'Executives and teams who need to make a same-day meeting without depending on commercial flight schedules.',
    },
    {
      icono: 'plane',
      titulo: 'Delegations and events',
      desc: 'Group transportation to conventions, product launches, openings and corporate events in regional destinations.',
    },
    {
      icono: 'ticket',
      titulo: 'Sports teams',
      desc: 'Coordinated flights for teams, coaching staff and support personnel. Special baggage handling is included in the planning.',
    },
    {
      icono: 'clock',
      titulo: 'Urgent travel',
      desc: 'When there’s no commercial flight, or it won’t get you there in time. Depart when you need to, to any destination in our network.',
    },
  ],
  incluyeSub: 'The service',
  incluyeTitulo: 'What the charter includes',
  incluye: [
    'Exclusive use of the aircraft for your group (up to 12 passengers)',
    'Departure and arrival times set by you',
    'Departures from any airport in the Aerus network',
    'More generous baggage allowance than scheduled flights',
    'Invoice issued to your company’s legal entity',
    'Support from an Aerus agent throughout the entire process',
    'Optional intermediate stop depending on the route',
  ],
  pasosTitulo: 'How it works',
  pasos: [
    {
      titulo: 'Tell us about your flight',
      desc: 'Origin, destination, date, preferred departure time and number of passengers. The more detail you share, the more accurate your proposal will be.',
    },
    {
      titulo: 'Get your proposal within 24 hours',
      desc: 'Our team checks aircraft availability and sends you a proposal with pricing, itinerary and payment terms.',
    },
    {
      titulo: 'Confirm and pay',
      desc: 'Once you confirm the proposal, we coordinate all operational details. Payment can be made by bank transfer or charged to your business account.',
    },
    {
      titulo: 'Fly',
      desc: 'On the day of your flight, arrive at the airport 60 minutes before departure. Your aircraft is waiting — no check-in lines, no time in the lounge.',
    },
  ],
  ctaTitulo: 'Request a quote',
  ctaDesc: 'Send us your flight details and we’ll reply with a proposal in less than 24 hours.',
  ctaBtn: 'Get a charter quote',
  ctaHref: '/on-demand/charter/cotizar/',
  relacionadosTitulo: 'You may also be interested in',
  relacionados: [
    { label: 'Aerus Flight Pass',     href: '/on-demand/flight-pass/' },
    { label: 'Business account',      href: '/on-demand/empresas/' },
    { label: 'Group travel',          href: '/experiencia/grupos/' },
    { label: 'Route network',         href: '/rutas/' },
  ],
  contactoTag: 'Direct contact',
  contactoTitulo: 'Charter Team',
  email: 'charter@aerus.mx',
  telefono: '+52 812 682 3501',
  horario: 'Mon–Fri · 8:00 a.m.–6:00 p.m.',
}

const defaults: PageDefaults<CharterContent> = { es, en }
export default defaults
