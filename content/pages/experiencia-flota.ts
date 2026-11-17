// Textos de la página "La flota" (/experiencia/flota).
// Se editan en Sanity (Páginas → Experiencia → La flota); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/experiencia-flota.ts.
import type { Img, PageDefaults, PageSeo } from '@/lib/content'

type EspecFila = { etiqueta: string; valor: string }
type Ventaja = { icono: string; titulo: string; descripcion: string }
type Relacionado = { label: string; href: string }

export type FlotaContent = {
  seo: PageSeo
  crumb: string
  heroEyebrow: string
  heroTitlePre: string
  heroTitleAccent: string
  heroIntro: string
  imagen: Img
  specsSubtitulo: string
  specsTitle: string
  specs: EspecFila[]
  ventajasTitle: string
  ventajas: Ventaja[]
  sidebarTitle: string
  relacionados: Relacionado[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: FlotaContent = {
  seo: {
    metaTitle: 'La flota — Cessna Grand Caravan EX | Aerus',
    metaDescription:
      'La flota de Aerus está compuesta por turbohélices Cessna 208B Grand Caravan EX. Conoce sus características, capacidad y por qué es ideal para las rutas regionales de México.',
  },
  crumb: 'La flota',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Cessna Grand ',
  heroTitleAccent: 'Caravan EX',
  heroIntro:
    'La turbohélice utilitaria más confiable del mundo. Nuestra flota de Cessna 208B Grand Caravan EX conecta el norte, centro y sureste de México con seguridad y puntualidad.',
  imagen: { src: '/flota-aerus.webp', alt: 'Flota Aerus — Cessna 208B Grand Caravan EX' },
  specsSubtitulo: 'Cessna 208B Grand Caravan EX',
  specsTitle: 'Especificaciones técnicas',
  specs: [
    { etiqueta: 'Motor', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
    { etiqueta: 'Hélice', valor: 'McCauley 3-blade de paso variable, velocidad constante' },
    { etiqueta: 'Capacidad', valor: 'Hasta 12 pasajeros (configuración regular Aerus)' },
    { etiqueta: 'Velocidad de crucero', valor: '185 kts (343 km/h)' },
    { etiqueta: 'Altitud de vuelo', valor: 'Hasta 25,000 ft — por encima de la mayoría del mal tiempo' },
    { etiqueta: 'Autonomía', valor: '912 nm (1,689 km) con carga máxima' },
    { etiqueta: 'Cabina', valor: 'No presurizada — ideal para rutas regionales de corta distancia' },
    { etiqueta: 'Certificación', valor: 'DGAC México · FAA USA' },
  ],
  ventajasTitle: '¿Por qué el Grand Caravan EX?',
  ventajas: [
    {
      icono: 'shield',
      titulo: 'Confiabilidad probada',
      descripcion:
        'El Grand Caravan EX es la turbohélice utilitaria más vendida de la historia. Con más de 2,600 unidades en servicio en todo el mundo, es sinónimo de solidez y facilidad de mantenimiento.',
    },
    {
      icono: 'plane-takeoff',
      titulo: 'Ideal para pistas cortas',
      descripcion:
        'Su diseño de ala alta y capacidad STOL (Short Take-Off and Landing) le permiten operar en aeropuertos regionales y pistas no pavimentadas, abriendo destinos inaccesibles para aviones de fuselaje ancho.',
    },
    {
      icono: 'check',
      titulo: 'Mantenimiento propio',
      descripcion:
        'Aerus opera su propio taller MRO autorizado para motores PT6A y hélices McCauley. La misma flota que vuela es la que mantenemos — ningún detalle pasa por alto.',
    },
    {
      icono: 'users',
      titulo: 'Cabina personal',
      descripcion:
        'Con capacidad para hasta 12 pasajeros, cada vuelo es prácticamente un charter privado. Sin pasillo central, sin filas para el baño, sin bebé llorando tres filas atrás.',
    },
  ],
  sidebarTitle: 'Experiencia Aerus',
  relacionados: [
    { label: 'Espera minutos, no horas', href: '/experiencia/proceso-agil/' },
    { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
    { label: 'Mantenimiento MRO', href: '/mro/' },
  ],
  ctaTitle: 'Reserva tu vuelo',
  ctaDesc: 'Viaja en la cabina más cómoda de las rutas regionales de México.',
  ctaButton: 'Ver vuelos',
  ctaHref: '/reservar/',
}

const en: FlotaContent = {
  seo: {
    metaTitle: 'Our Fleet — Cessna Grand Caravan EX | Aerus',
    metaDescription:
      'The Aerus fleet is made up of Cessna 208B Grand Caravan EX turboprops. Learn about their features, capacity and why they are ideal for regional routes across Mexico.',
  },
  crumb: 'Our fleet',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Cessna Grand ',
  heroTitleAccent: 'Caravan EX',
  heroIntro:
    'The world’s most reliable utility turboprop. Our fleet of Cessna 208B Grand Caravan EX aircraft connects northern, central and southeastern Mexico safely and on time.',
  imagen: { src: '/flota-aerus.webp', alt: 'Aerus fleet — Cessna 208B Grand Caravan EX' },
  specsSubtitulo: 'Cessna 208B Grand Caravan EX',
  specsTitle: 'Technical specifications',
  specs: [
    { etiqueta: 'Engine', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
    { etiqueta: 'Propeller', valor: 'McCauley 3-blade, variable-pitch, constant-speed' },
    { etiqueta: 'Capacity', valor: 'Up to 12 passengers (standard Aerus configuration)' },
    { etiqueta: 'Cruise speed', valor: '185 kts (343 km/h)' },
    { etiqueta: 'Service ceiling', valor: 'Up to 25,000 ft — above most bad weather' },
    { etiqueta: 'Range', valor: '912 nm (1,689 km) at maximum payload' },
    { etiqueta: 'Cabin', valor: 'Unpressurized — ideal for short regional routes' },
    { etiqueta: 'Certification', valor: 'DGAC Mexico · FAA USA' },
  ],
  ventajasTitle: 'Why the Grand Caravan EX?',
  ventajas: [
    {
      icono: 'shield',
      titulo: 'Proven reliability',
      descripcion:
        'The Grand Caravan EX is the best-selling utility turboprop in history. With more than 2,600 aircraft in service worldwide, it is synonymous with durability and easy maintenance.',
    },
    {
      icono: 'plane-takeoff',
      titulo: 'Built for short runways',
      descripcion:
        'Its high-wing design and STOL (Short Take-Off and Landing) capability allow it to operate at regional airports and on unpaved runways, opening up destinations that wide-body aircraft can’t reach.',
    },
    {
      icono: 'check',
      titulo: 'In-house maintenance',
      descripcion:
        'Aerus operates its own MRO shop, authorized for PT6A engines and McCauley propellers. The same fleet we fly is the fleet we maintain — no detail is overlooked.',
    },
    {
      icono: 'users',
      titulo: 'A personal cabin',
      descripcion:
        'With room for up to 12 passengers, every flight feels practically like a private charter. No center aisle, no lines for the restroom, no crying baby three rows back.',
    },
  ],
  sidebarTitle: 'The Aerus experience',
  relacionados: [
    { label: 'Wait minutes, not hours', href: '/experiencia/proceso-agil/' },
    { label: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Group flights', href: '/experiencia/grupos/' },
    { label: 'MRO maintenance', href: '/mro/' },
  ],
  ctaTitle: 'Book your flight',
  ctaDesc: 'Fly in the most comfortable cabin on Mexico’s regional routes.',
  ctaButton: 'See flights',
  ctaHref: '/reservar/',
}

const defaults: PageDefaults<FlotaContent> = { es, en }
export default defaults
