// Textos de la página "Charter · Cotizar" (/on-demand/charter/cotizar).
// Se editan en Sanity (Páginas → Charter · Cotizar); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/on-demand-charter-cotizar.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type CharterCotizarContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  datosSub: string
  datosTitulo: string
  datosIntro: string
  datos: string[]
  tiemposSub: string
  tiemposTitulo: string
  tiemposA: string
  tiemposStrong: string
  tiemposB: string
  propuestaSub: string
  propuestaTitulo: string
  propuestaTexto: string
  ctaTitulo: string
  ctaDesc: string
  email: string
  mailSubject: string
  telefono: string
  horario: string
  relacionadosTitulo: string
  relacionados: { label: string; href: string }[]
}

const es: CharterCotizarContent = {
  seo: {
    metaTitle: 'Cotizar chárter | Aerus',
    metaDescription:
      'Solicita una cotización para tu vuelo chárter con Aerus. Envíanos los datos de tu vuelo y te respondemos en menos de 24 horas.',
  },
  crumb: 'Cotizar',
  eyebrow: 'Aerus Charter',
  titleA: 'Solicita tu ',
  titleAccent: 'cotización',
  intro:
    'Envíanos los datos de tu vuelo por correo o WhatsApp y te respondemos con una propuesta en menos de 24 horas hábiles.',
  datosSub: 'Qué necesitamos saber',
  datosTitulo: 'Datos para tu cotización',
  datosIntro: 'Para prepararte la cotización más precisa posible, incluye los siguientes datos en tu mensaje:',
  datos: [
    'Ciudad de origen y ciudad de destino',
    'Fecha y horario de salida (puede ser tentativo)',
    'Número de pasajeros (máximo 9)',
    'Nombre de la empresa o responsable del vuelo',
    'Si necesitas vuelo de regreso y en qué fecha',
    'Cualquier requerimiento especial (equipaje extra, escalas, etc.)',
  ],
  tiemposSub: 'Tiempos de respuesta',
  tiemposTitulo: '¿Cuándo te respondemos?',
  tiemposA: 'Respondemos cotizaciones de chárter en ',
  tiemposStrong: 'menos de 24 horas hábiles',
  tiemposB:
    '. Si tu vuelo es urgente (dentro de las próximas 48 horas), indícalo en el mensaje y priorizamos tu solicitud.',
  propuestaSub: 'Qué esperar',
  propuestaTitulo: 'Cómo es la propuesta',
  propuestaTexto:
    'La propuesta incluye precio total del vuelo, itinerario con horarios tenttativos, aeronave asignada, condiciones de pago y política de cancelación. Puedes aceptarla, pedir ajustes o rechazarla — sin compromiso hasta que la confirmes.',
  ctaTitulo: 'Escríbenos ahora',
  ctaDesc: 'Incluye los datos del vuelo y te respondemos en menos de 24 horas.',
  email: 'charter@aerus.mx',
  mailSubject: 'Cotización chárter',
  telefono: '+52 812 682 3501',
  horario: 'Lunes a viernes · 08:00–18:00 h CST',
  relacionadosTitulo: 'Antes de cotizar',
  relacionados: [
    { label: 'Qué incluye el chárter', href: '/on-demand/charter/' },
    { label: 'Red de rutas',            href: '/rutas/' },
    { label: 'La flota Aerus',          href: '/experiencia/flota/' },
  ],
}

const en: CharterCotizarContent = {
  seo: {
    metaTitle: 'Charter Quote | Aerus',
    metaDescription:
      'Request a quote for your Aerus charter flight. Send us your flight details and we’ll get back to you in less than 24 hours.',
  },
  crumb: 'Get a quote',
  eyebrow: 'Aerus Charter',
  titleA: 'Request your ',
  titleAccent: 'quote',
  intro:
    'Send us your flight details by email or WhatsApp and we’ll reply with a proposal within 24 business hours.',
  datosSub: 'What we need to know',
  datosTitulo: 'Details for your quote',
  datosIntro: 'To prepare the most accurate quote possible, please include the following details in your message:',
  datos: [
    'Departure and destination cities',
    'Departure date and time (can be tentative)',
    'Number of passengers (maximum 9)',
    'Company name or the person responsible for the flight',
    'Whether you need a return flight, and on what date',
    'Any special requirements (extra baggage, stops, etc.)',
  ],
  tiemposSub: 'Response times',
  tiemposTitulo: 'When will we get back to you?',
  tiemposA: 'We respond to charter quote requests within ',
  tiemposStrong: '24 business hours',
  tiemposB:
    '. If your flight is urgent (within the next 48 hours), let us know in your message and we’ll prioritize your request.',
  propuestaSub: 'What to expect',
  propuestaTitulo: 'What the proposal looks like',
  propuestaTexto:
    'The proposal includes the total flight price, an itinerary with tentative times, the assigned aircraft, payment terms and the cancellation policy. You can accept it, request changes or decline it — there’s no commitment until you confirm.',
  ctaTitulo: 'Write to us now',
  ctaDesc: 'Include your flight details and we’ll reply in less than 24 hours.',
  email: 'charter@aerus.mx',
  mailSubject: 'Charter quote request',
  telefono: '+52 812 682 3501',
  horario: 'Monday to Friday · 8:00 a.m.–6:00 p.m. CST',
  relacionadosTitulo: 'Before you request a quote',
  relacionados: [
    { label: 'What the charter includes', href: '/on-demand/charter/' },
    { label: 'Route network',             href: '/rutas/' },
    { label: 'The Aerus fleet',           href: '/experiencia/flota/' },
  ],
}

const defaults: PageDefaults<CharterCotizarContent> = { es, en }
export default defaults
