// Textos de la página "MRO · Motores PT6A" (/mro/motores-pt6a).
// Se editan en Sanity (Páginas → MRO · Motores PT6A); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/mro-motores-pt6a.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { EnlaceMro, ItemMro } from './mro'

export type MroMotoresContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  serviciosSubtitle: string
  serviciosTitle: string
  servicios: ItemMro[]
  modelosSubtitle: string
  modelosTitle: string
  colModelo: string
  colAplicacion: string
  modelos: { modelo: string; aplicacion: string }[]
  modelosCallout: string
  otrosTitle: string
  otros: EnlaceMro[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: MroMotoresContent = {
  seo: {
    metaTitle: 'Motores PT6A | Aerus MRO',
    metaDescription:
      'Mantenimiento, inspección y overhaul de motores Pratt & Whitney Canada serie PT6A. Centro de servicio autorizado Aerus MRO, aprobado DGAC.',
  },
  crumb: 'Motores PT6A',
  eyebrow: 'Aerus MRO',
  titlePre: 'Motores ',
  titleAccent: 'PT6A',
  intro:
    'Centro de servicio autorizado Pratt & Whitney Canada. Inspeccionamos, mantenemos y hacemos overhaul de motores PT6A conforme al EOM del fabricante.',
  serviciosSubtitle: 'Qué hacemos',
  serviciosTitle: 'Servicios de motor',
  servicios: [
    {
      titulo: 'Inspección de sección caliente (HSI)',
      descripcion:
        'Apertura del módulo de potencia para inspección visual, dimensional y por partículas magnéticas de los componentes de la sección de combustión, turbinas y accesorios de gas caliente. Incluye sustitución de piezas con vida limitada conforme a la lista del fabricante.',
    },
    {
      titulo: 'Overhaul completo (TBO)',
      descripcion:
        'Desarmado completo hasta componente, limpieza, inspección dimensional y de grietas, reparación o sustitución de partes, rearmado y prueba de aceptación conforme al Engine Overhaul Manual (EOM) de Pratt & Whitney Canada.',
    },
    {
      titulo: 'Mantenimiento de línea y 100 horas',
      descripcion:
        'Cambios de aceite, filtros, bujías de ignición, inspección visual de boroscopio y revisión de accesorios conforme al Aircraft Maintenance Manual (AMM) en los intervalos programados.',
    },
    {
      titulo: 'Servicio de accesorios del motor',
      descripcion:
        'Mantenimiento del grupo de accesorios: bomba de combustible, bomba de aceite, unidad de control de combustible (FCU), gobernador de hélice y alternadores — realizados conforme a los manuales del componente.',
    },
    {
      titulo: 'Diagnóstico y troubleshooting',
      descripcion:
        'Análisis espectral de aceite (SOAP), lectura de datos del motor (chip detector, temperatura ITT, torque) y diagnóstico por boroscopio para determinar el estado del motor sin apertura mayor.',
    },
  ],
  modelosSubtitle: 'Modelos con aprobación',
  modelosTitle: 'Variantes PT6A que atendemos',
  colModelo: 'Modelo',
  colAplicacion: 'Aeronave de aplicación',
  modelos: [
    { modelo: 'PT6A-114A', aplicacion: 'Cessna 208B Grand Caravan EX' },
    { modelo: 'PT6A-135A', aplicacion: 'Cessna 208B Super Cargomaster' },
    { modelo: 'PT6A-34', aplicacion: 'Piper PA-31T Cheyenne' },
    { modelo: 'PT6A-60A', aplicacion: 'Beechcraft King Air C90' },
  ],
  modelosCallout:
    '¿Tienes un PT6A de otra variante? Contáctanos para verificar si tu motor está dentro del alcance de nuestra aprobación AMO.',
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas servicio de motor?',
  ctaDesc: 'Dinos el modelo de tu PT6A, las horas actuales y el tipo de mantenimiento requerido.',
  ctaButton: 'Solicitar cotización',
  ctaHref: '/mro/cotizacion/',
}

const en: MroMotoresContent = {
  seo: {
    metaTitle: 'PT6A Engines | Aerus MRO',
    metaDescription:
      'Maintenance, inspection and overhaul of Pratt & Whitney Canada PT6A-series engines. Aerus MRO authorized service center, DGAC approved.',
  },
  crumb: 'PT6A engines',
  eyebrow: 'Aerus MRO',
  titlePre: 'PT6A ',
  titleAccent: 'engines',
  intro:
    'Pratt & Whitney Canada authorized service center. We inspect, maintain and overhaul PT6A engines in accordance with the manufacturer’s EOM.',
  serviciosSubtitle: 'What we do',
  serviciosTitle: 'Engine services',
  servicios: [
    {
      titulo: 'Hot section inspection (HSI)',
      descripcion:
        'Separation of the power section for visual, dimensional and magnetic particle inspection of combustion section, turbine and hot gas path components. Includes replacement of life-limited parts per the manufacturer’s list.',
    },
    {
      titulo: 'Full overhaul (TBO)',
      descripcion:
        'Complete teardown to component level, cleaning, dimensional and crack inspection, repair or replacement of parts, reassembly and acceptance testing per the Pratt & Whitney Canada Engine Overhaul Manual (EOM).',
    },
    {
      titulo: 'Line maintenance and 100-hour inspections',
      descripcion:
        'Oil and filter changes, igniter plugs, borescope inspection and accessory checks per the Aircraft Maintenance Manual (AMM) at scheduled intervals.',
    },
    {
      titulo: 'Engine accessory service',
      descripcion:
        'Maintenance of the accessory group: fuel pump, oil pump, fuel control unit (FCU), propeller governor and alternators — performed per the applicable component manuals.',
    },
    {
      titulo: 'Diagnostics and troubleshooting',
      descripcion:
        'Spectrometric oil analysis (SOAP), engine data review (chip detector, ITT, torque) and borescope diagnostics to assess engine condition without a major teardown.',
    },
  ],
  modelosSubtitle: 'Approved models',
  modelosTitle: 'PT6A variants we support',
  colModelo: 'Model',
  colAplicacion: 'Aircraft application',
  modelos: [
    { modelo: 'PT6A-114A', aplicacion: 'Cessna 208B Grand Caravan EX' },
    { modelo: 'PT6A-135A', aplicacion: 'Cessna 208B Super Cargomaster' },
    { modelo: 'PT6A-34', aplicacion: 'Piper PA-31T Cheyenne' },
    { modelo: 'PT6A-60A', aplicacion: 'Beechcraft King Air C90' },
  ],
  modelosCallout:
    'Have a different PT6A variant? Contact us to confirm whether your engine falls within the scope of our AMO approval.',
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need engine service?',
  ctaDesc: 'Tell us your PT6A model, current hours and the type of maintenance required.',
  ctaButton: 'Request a quote',
  ctaHref: '/mro/cotizacion/',
}

const defaults: PageDefaults<MroMotoresContent> = { es, en }
export default defaults
