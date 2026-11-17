// Textos de la página "Nosotros" (/nosotros).
// Se editan en Sanity (Páginas → Nosotros → Nosotros); esto es el respaldo y la fuente de la carga
// inicial. Mismas claves que el esquema sanity/schemaTypes/pages/nosotros.ts.
//
// Títulos con salto de línea: cada renglón va en su propia línea del texto y la última parte
// (en cursiva verde) va aparte en el campo "…Accent".
import type { PageDefaults, PageSeo } from '@/lib/content'

export type NosotrosContent = {
  seo: PageSeo
  heroEyebrow: string
  heroHeadline: string
  heroHeadlineAccent: string
  heroIntro: string
  heroRule: string
  missionLabel: string
  missionQuote: string
  missionQuoteAccent: string
  stats: { num: string; suffix: string; label: string }[]
  historiaEyebrow: string
  historiaTitulo: string
  historiaBody: string[]
  pullquote: string
  pullquoteAccent: string
  pullattr: string
  valoresTitulo: string
  valores: { num: string; titulo: string; acento: string; desc: string }[]
  flotaLabel: string
  flotaNombre: string
  flotaSpecs: string
  flotaLink: string
  flotaHref: string
  ctaEyebrow: string
  ctaTitulo: string
  ctaReservar: string
  ctaReservarHref: string
  ctaRutas: string
  ctaRutasHref: string
}

const es: NosotrosContent = {
  seo: {
    metaTitle: 'Nosotros | Aerus',
    metaDescription:
      'Aerus conecta el México regional. Conoce nuestra historia, misión y lo que nos hace diferentes: rutas directas, flota propia y mantenimiento aeronáutico certificado.',
  },
  heroEyebrow: 'La aerolínea',
  heroHeadline: 'Conectamos el México\nque las grandes',
  heroHeadlineAccent: 'no alcanzan',
  heroIntro:
    'Aerus es la aerolínea regional de México. Operamos rutas directas a destinos que el mercado masivo ignora, con aeronaves turbohélice diseñadas para llegar donde otros no llegan.',
  heroRule: 'Aerolínea regional · Aviación de turbohélice · México',
  missionLabel: 'Nuestra misión',
  missionQuote: 'Volar no debería ser un privilegio de las',
  missionQuoteAccent: 'ciudades grandes.',
  stats: [
    { num: '7', suffix: '', label: 'Rutas directas activas' },
    { num: '10', suffix: '+', label: 'Destinos conectados' },
    { num: '9', suffix: '', label: 'Pasajeros por vuelo' },
    { num: 'DGAC', suffix: '', label: 'Centro de mantenimiento certificado' },
  ],
  historiaEyebrow: 'Nuestra historia',
  historiaTitulo: 'Una aerolínea construida para el México que se mueve entre regiones',
  historiaBody: [
    'Aerus nació con una premisa clara: las rutas regionales de México merecen una aerolínea que las tome en serio. Las grandes líneas concentran sus operaciones en los aeropuertos internacionales, dejando a millones de mexicanos atrapados en conexiones largas o carreteras de horas para cubrir distancias que el avión resuelve en cuarenta minutos.',
    'Elegimos el Cessna Grand Caravan EX — una aeronave turbohélice diseñada exactamente para este tipo de operación: pistas cortas, aeropuertos regionales, rutas directas sin hubear por el centro del país. Nuestros pilotos conocen cada tramo. Nuestro centro de mantenimiento en tierra cuida cada motor y cada hélice.',
    'No somos una aerolínea de bajo costo que recortó servicio. Somos una aerolínea regional que decidió operar bien en el espacio donde los grandes no quieren competir.',
  ],
  pullquote: 'No somos más pequeños,\nsomos más',
  pullquoteAccent: 'específicos.',
  pullattr: 'Aerus — Aviación regional',
  valoresTitulo: 'Lo que nos define',
  valores: [
    {
      num: '01',
      titulo: 'Rutas que',
      acento: 'importan',
      desc: 'Servimos conexiones que las grandes líneas ignoran. Cada ruta Aerus une dos puntos que el mercado masivo dejó sin solución directa — y las operamos con la misma disciplina que las mejores aerolíneas del mundo.',
    },
    {
      num: '02',
      titulo: 'Taller',
      acento: 'propio',
      desc: 'Operamos y mantenemos nuestras propias aeronaves. Centro MRO aprobado por la DGAC, autorizado por Pratt & Whitney Canada. No subcontratamos lo que determina la seguridad de cada vuelo.',
    },
    {
      num: '03',
      titulo: 'Escala',
      acento: 'humana',
      desc: 'Máximo 12 pasajeros por vuelo. El equipo te conoce, hay alguien en tierra antes de que llegues, el check-in dura minutos. La aviación regional debería sentirse así de personal.',
    },
  ],
  flotaLabel: 'La flota',
  flotaNombre: 'Cessna Grand Caravan EX',
  flotaSpecs: 'Motor PT6A-114A · 675 SHP · 12 pasajeros · 185 kts · 25,000 ft',
  flotaLink: 'Ver especificaciones',
  flotaHref: '/experiencia/flota/',
  ctaEyebrow: 'Vuela con nosotros',
  ctaTitulo: '¿Listo para el primer vuelo?',
  ctaReservar: 'Reservar vuelo',
  ctaReservarHref: '/reservar/',
  ctaRutas: 'Ver rutas',
  ctaRutasHref: '/rutas/',
}

const en: NosotrosContent = {
  seo: {
    metaTitle: 'About Us | Aerus',
    metaDescription:
      'Aerus connects regional Mexico. Learn about our story, our mission and what sets us apart: direct routes, our own fleet and certified aircraft maintenance.',
  },
  heroEyebrow: 'The airline',
  heroHeadline: 'We connect the Mexico\nthe big airlines',
  heroHeadlineAccent: 'don’t reach',
  heroIntro:
    'Aerus is Mexico’s regional airline. We fly direct routes to destinations the mass market overlooks, with turboprop aircraft designed to go where others don’t.',
  heroRule: 'Regional airline · Turboprop aviation · Mexico',
  missionLabel: 'Our mission',
  missionQuote: 'Flying shouldn’t be a privilege reserved for',
  missionQuoteAccent: 'big cities.',
  stats: [
    { num: '7', suffix: '', label: 'Active direct routes' },
    { num: '10', suffix: '+', label: 'Destinations connected' },
    { num: '9', suffix: '', label: 'Passengers per flight' },
    { num: 'DGAC', suffix: '', label: 'Certified maintenance center' },
  ],
  historiaEyebrow: 'Our story',
  historiaTitulo: 'An airline built for a Mexico that travels between regions',
  historiaBody: [
    'Aerus was founded on a clear premise: Mexico’s regional routes deserve an airline that takes them seriously. The big carriers concentrate their operations at international airports, leaving millions of Mexicans stuck with long connections or hours-long drives to cover distances a plane can fly in forty minutes.',
    'We chose the Cessna Grand Caravan EX — a turboprop aircraft designed for exactly this kind of operation: short runways, regional airports and direct routes with no hub connection through central Mexico. Our pilots know every leg. Our ground maintenance center looks after every engine and every propeller.',
    'We are not a low-cost airline that cut back on service. We are a regional airline that chose to operate well in the space where the big players don’t want to compete.',
  ],
  pullquote: 'We’re not smaller,\nwe’re more',
  pullquoteAccent: 'focused.',
  pullattr: 'Aerus — Regional aviation',
  valoresTitulo: 'What defines us',
  valores: [
    {
      num: '01',
      titulo: 'Routes that',
      acento: 'matter',
      desc: 'We serve connections the big airlines ignore. Every Aerus route links two points the mass market left without a direct option — and we operate them with the same discipline as the world’s best airlines.',
    },
    {
      num: '02',
      titulo: 'In-house',
      acento: 'maintenance',
      desc: 'We operate and maintain our own aircraft. Our MRO center is approved by the DGAC and authorized by Pratt & Whitney Canada. We don’t outsource what determines the safety of every flight.',
    },
    {
      num: '03',
      titulo: 'Human',
      acento: 'scale',
      desc: 'A maximum of 12 passengers per flight. The crew knows you, someone is on the ground before you arrive, and check-in takes minutes. Regional aviation should feel this personal.',
    },
  ],
  flotaLabel: 'The fleet',
  flotaNombre: 'Cessna Grand Caravan EX',
  flotaSpecs: 'PT6A-114A engine · 675 SHP · 12 passengers · 185 kts · 25,000 ft',
  flotaLink: 'View specifications',
  flotaHref: '/experiencia/flota/',
  ctaEyebrow: 'Fly with us',
  ctaTitulo: 'Ready for your first flight?',
  ctaReservar: 'Book a flight',
  ctaReservarHref: '/reservar/',
  ctaRutas: 'See routes',
  ctaRutasHref: '/rutas/',
}

const defaults: PageDefaults<NosotrosContent> = { es, en }
export default defaults
