// Textos de la página "MRO · Capacidades y certificaciones" (/mro/capacidades).
// Se editan en Sanity (Páginas → MRO · Capacidades y certificaciones); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que sanity/schemaTypes/pages/mro-capacidades.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { EnlaceMro, ItemMro } from './mro'

export type MroCapacidadesContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  certSubtitle: string
  certTitle: string
  certificaciones: { nombre: string; descripcion: string }[]
  aeronavesSubtitle: string
  aeronavesTitle: string
  aeronaves: string[]
  aeronavesCallout: string
  alcanceSubtitle: string
  alcanceTitle: string
  alcance: ItemMro[]
  otrosTitle: string
  otros: EnlaceMro[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: MroCapacidadesContent = {
  seo: {
    metaTitle: 'Capacidades y certificaciones | Aerus MRO',
    metaDescription:
      'Aerus MRO cuenta con aprobación DGAC para el mantenimiento de aeronaves turbohélice. Conoce nuestras capacidades, tipos de aeronave admitidos y el alcance de nuestro taller.',
  },
  crumb: 'Capacidades y certificaciones',
  eyebrow: 'Aerus MRO',
  titlePre: 'Capacidades y ',
  titleAccent: 'certificaciones',
  intro:
    'Taller aprobado DGAC. Conoce qué aeronaves atendemos, qué trabajos realizamos y bajo qué aprobaciones operamos.',
  certSubtitle: 'Aprobaciones vigentes',
  certTitle: 'Certificaciones',
  certificaciones: [
    {
      nombre: 'AMO DGAC México',
      descripcion: 'Organización de Mantenimiento Aprobada por la Dirección General de Aeronáutica Civil de México.',
    },
    {
      nombre: 'Pratt & Whitney Canada Authorized Service Center',
      descripcion: 'Centro de servicio autorizado para motores de la familia PT6A de Pratt & Whitney Canada.',
    },
    {
      nombre: 'Hartzell Propeller Certified Service Center',
      descripcion: 'Centro certificado para inspección, overhaul y reparación de hélices Hartzell.',
    },
    {
      nombre: 'McCauley Authorized Service',
      descripcion: 'Servicio autorizado para hélices McCauley serie 3-blade usadas en la familia Cessna 208.',
    },
  ],
  aeronavesSubtitle: 'Tipos aprobados',
  aeronavesTitle: 'Aeronaves que atendemos',
  aeronaves: [
    'Cessna 208 Caravan / Grand Caravan EX',
    'Cessna 208B Grand Caravan',
    'Cessna 182 / 172 (inspecciones y accesorios)',
    'Beechcraft King Air (accesorios y sistemas)',
    'Piper PA-31 Navajo (radios e instrumentos)',
    'Planeadores Cessna (serie 182 y derivados)',
  ],
  aeronavesCallout:
    '¿Tu aeronave no está en la lista? Contáctanos — podemos evaluar la solicitud de mantenimiento conforme a nuestra aprobación AMO.',
  alcanceSubtitle: 'Qué hacemos',
  alcanceTitle: 'Alcance de trabajo',
  alcance: [
    { titulo: 'Mantenimiento de línea', descripcion: 'Revisiones periódicas, cambio de componentes con vida limitada y mantenimiento programado en escala de horas de vuelo.' },
    { titulo: 'Mantenimiento de base (MX Base)', descripcion: 'Inspecciones mayores: 100 horas, 200 horas, anuales y bienales. Apertura y cierre de aeronave conforme al AMM del fabricante.' },
    { titulo: 'Overhaul de motores y hélices', descripcion: 'Desarmado, inspección, reparación y rearmado conforme a manuales de overhaul Pratt & Whitney Canada y Hartzell/McCauley.' },
    { titulo: 'Modificaciones y STC', descripcion: 'Instalación de modificaciones aprobadas por STC (Supplemental Type Certificate). Consultar disponibilidad por tipo de aeronave.' },
    { titulo: 'Aviónica y sistemas', descripcion: 'Instalación, calibración y mantenimiento de sistemas de navegación, radios y paneles de instrumentos.' },
  ],
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas mantenimiento?',
  ctaDesc: 'Cuéntanos de tu aeronave y te mandamos una propuesta en 24 horas.',
  ctaButton: 'Solicitar cotización',
  ctaHref: '/mro/cotizacion/',
}

const en: MroCapacidadesContent = {
  seo: {
    metaTitle: 'Capabilities & Certifications | Aerus MRO',
    metaDescription:
      'Aerus MRO holds DGAC approval for turboprop aircraft maintenance. Learn about our capabilities, supported aircraft types and the scope of our shop.',
  },
  crumb: 'Capabilities & certifications',
  eyebrow: 'Aerus MRO',
  titlePre: 'Capabilities & ',
  titleAccent: 'certifications',
  intro:
    'A DGAC-approved repair station. See which aircraft we support, what work we perform and the approvals we operate under.',
  certSubtitle: 'Current approvals',
  certTitle: 'Certifications',
  certificaciones: [
    {
      nombre: 'DGAC Mexico AMO',
      descripcion: 'Approved Maintenance Organization certified by Mexico’s Directorate General of Civil Aviation (DGAC).',
    },
    {
      nombre: 'Pratt & Whitney Canada Authorized Service Center',
      descripcion: 'Authorized service center for Pratt & Whitney Canada PT6A-family engines.',
    },
    {
      nombre: 'Hartzell Propeller Certified Service Center',
      descripcion: 'Certified center for inspection, overhaul and repair of Hartzell propellers.',
    },
    {
      nombre: 'McCauley Authorized Service',
      descripcion: 'Authorized service for McCauley 3-blade propellers used on the Cessna 208 family.',
    },
  ],
  aeronavesSubtitle: 'Approved types',
  aeronavesTitle: 'Aircraft we support',
  aeronaves: [
    'Cessna 208 Caravan / Grand Caravan EX',
    'Cessna 208B Grand Caravan',
    'Cessna 182 / 172 (inspections and accessories)',
    'Beechcraft King Air (accessories and systems)',
    'Piper PA-31 Navajo (radios and instruments)',
    'Cessna gliders (182 series and derivatives)',
  ],
  aeronavesCallout:
    'Don’t see your aircraft on the list? Contact us — we can evaluate your maintenance request under our AMO approval.',
  alcanceSubtitle: 'What we do',
  alcanceTitle: 'Scope of work',
  alcance: [
    { titulo: 'Line maintenance', descripcion: 'Periodic checks, replacement of life-limited components and scheduled maintenance based on flight-hour intervals.' },
    { titulo: 'Base maintenance (MX Base)', descripcion: 'Heavy inspections: 100-hour, 200-hour, annual and biennial. Aircraft opening and closing per the manufacturer’s AMM.' },
    { titulo: 'Engine and propeller overhaul', descripcion: 'Disassembly, inspection, repair and reassembly per Pratt & Whitney Canada and Hartzell/McCauley overhaul manuals.' },
    { titulo: 'Modifications & STCs', descripcion: 'Installation of modifications approved under an STC (Supplemental Type Certificate). Availability varies by aircraft type.' },
    { titulo: 'Avionics & systems', descripcion: 'Installation, calibration and maintenance of navigation systems, radios and instrument panels.' },
  ],
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need maintenance?',
  ctaDesc: 'Tell us about your aircraft and we will send you a proposal within 24 hours.',
  ctaButton: 'Request a quote',
  ctaHref: '/mro/cotizacion/',
}

const defaults: PageDefaults<MroCapacidadesContent> = { es, en }
export default defaults
