// Textos de la página "MRO · Hélices" (/mro/helices).
// Se editan en Sanity (Páginas → MRO · Hélices); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/mro-helices.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { EnlaceMro, ItemMro } from './mro'

export type MroHelicesContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  serviciosSubtitle: string
  serviciosTitle: string
  servicios: ItemMro[]
  marcasSubtitle: string
  marcasTitle: string
  colMarca: string
  colSeries: string
  marcas: { marca: string; series: string }[]
  otrosTitle: string
  otros: EnlaceMro[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: MroHelicesContent = {
  seo: {
    metaTitle: 'Hélices — McCauley y Hartzell | Aerus MRO',
    metaDescription:
      'Balanceo, inspección y overhaul de hélices McCauley y Hartzell. Aerus MRO: centro de servicio certificado para hélices de aeronaves turbohélice.',
  },
  crumb: 'Hélices',
  eyebrow: 'Aerus MRO',
  titlePre: 'Hélices ',
  titleAccent: 'McCauley y Hartzell',
  intro:
    'Centro de servicio certificado. Balanceo, inspección y overhaul de hélices para aeronaves turbohélice conforme a los manuales de overhaul del fabricante.',
  serviciosSubtitle: 'Servicios de hélice',
  serviciosTitle: 'Qué realizamos',
  servicios: [
    {
      titulo: 'Inspección y diagnóstico',
      descripcion:
        'Inspección visual, dimensional y por líquidos penetrantes de palas, cubo y accesorios. Verificación de corrosión, daños por FOD (Foreign Object Damage) y estado del sistema de paso variable.',
    },
    {
      titulo: 'Overhaul conforme a TBO',
      descripcion:
        'Desarmado completo, limpieza, inspección de componentes, reparación o sustitución de piezas y rearmado conforme al Propeller Overhaul Manual de Hartzell o McCauley según corresponda.',
    },
    {
      titulo: 'Balanceo dinámico',
      descripcion:
        'Balanceo dinámico en campo con equipo especializado para reducir vibración y mejorar vida útil del motor y la célula. Recomendado tras cada overhaul o cambio de pala.',
    },
    {
      titulo: 'Reparación de palas',
      descripcion:
        'Reparación de bordes de ataque, parchado de grietas dentro de los límites del manual y tratamiento anticorrosivo. Evaluación de daños fuera de límites para posible devolución al fabricante.',
    },
    {
      titulo: 'Servicio del gobernador de hélice',
      descripcion:
        'Inspección, calibración y overhaul del gobernador de paso de hélice (Woodward y otros) según Manual de Overhaul del componente.',
    },
  ],
  marcasSubtitle: 'Marcas certificadas',
  marcasTitle: 'Hélices que atendemos',
  colMarca: 'Marca',
  colSeries: 'Series y aplicaciones',
  marcas: [
    { marca: 'McCauley', series: '3-blade (3AF32C87, series 3AF), usado en Cessna 208 Grand Caravan EX' },
    { marca: 'Hartzell', series: 'HC-B3TN, HC-C2YK y otras series — Cessna 208, King Air, Piper' },
  ],
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas servicio de hélice?',
  ctaDesc: 'Indícanos marca, modelo y horas actuales de tu hélice.',
  ctaButton: 'Solicitar cotización',
  ctaHref: '/mro/cotizacion/',
}

const en: MroHelicesContent = {
  seo: {
    metaTitle: 'Propellers — McCauley & Hartzell | Aerus MRO',
    metaDescription:
      'Balancing, inspection and overhaul of McCauley and Hartzell propellers. Aerus MRO: certified propeller service center for turboprop aircraft.',
  },
  crumb: 'Propellers',
  eyebrow: 'Aerus MRO',
  titlePre: 'McCauley & Hartzell ',
  titleAccent: 'propellers',
  intro:
    'Certified service center. Propeller balancing, inspection and overhaul for turboprop aircraft in accordance with the manufacturer’s overhaul manuals.',
  serviciosSubtitle: 'Propeller services',
  serviciosTitle: 'What we do',
  servicios: [
    {
      titulo: 'Inspection and diagnostics',
      descripcion:
        'Visual, dimensional and dye penetrant inspection of blades, hub and accessories. Checks for corrosion, FOD (foreign object damage) and the condition of the variable-pitch system.',
    },
    {
      titulo: 'Overhaul at TBO',
      descripcion:
        'Complete disassembly, cleaning, component inspection, repair or replacement of parts and reassembly per the Hartzell or McCauley Propeller Overhaul Manual, as applicable.',
    },
    {
      titulo: 'Dynamic balancing',
      descripcion:
        'On-wing dynamic balancing with specialized equipment to reduce vibration and extend engine and airframe service life. Recommended after every overhaul or blade change.',
    },
    {
      titulo: 'Blade repair',
      descripcion:
        'Leading-edge repair, crack repair within manual limits and corrosion treatment. Evaluation of out-of-limits damage for possible return to the manufacturer.',
    },
    {
      titulo: 'Propeller governor service',
      descripcion:
        'Inspection, calibration and overhaul of propeller pitch governors (Woodward and others) per the component overhaul manual.',
    },
  ],
  marcasSubtitle: 'Certified brands',
  marcasTitle: 'Propellers we service',
  colMarca: 'Brand',
  colSeries: 'Series and applications',
  marcas: [
    { marca: 'McCauley', series: '3-blade (3AF32C87, 3AF series), used on the Cessna 208 Grand Caravan EX' },
    { marca: 'Hartzell', series: 'HC-B3TN, HC-C2YK and other series — Cessna 208, King Air, Piper' },
  ],
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need propeller service?',
  ctaDesc: 'Tell us your propeller’s make, model and current hours.',
  ctaButton: 'Request a quote',
  ctaHref: '/mro/cotizacion/',
}

const defaults: PageDefaults<MroHelicesContent> = { es, en }
export default defaults
