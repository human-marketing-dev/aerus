// Textos de la página "MRO · Accesorios y planeadores" (/mro/accesorios-planeadores).
// Se editan en Sanity (Páginas → MRO · Accesorios y planeadores); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que sanity/schemaTypes/pages/mro-accesorios-planeadores.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { EnlaceMro, ItemMro } from './mro'

export type MroAccesoriosContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  accesoriosSubtitle: string
  accesoriosTitle: string
  accesorios: ItemMro[]
  planeadoresSubtitle: string
  planeadoresTitle: string
  planeadores: ItemMro[]
  otrosTitle: string
  otros: EnlaceMro[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: MroAccesoriosContent = {
  seo: {
    metaTitle: 'Accesorios y planeadores Cessna | Aerus MRO',
    metaDescription:
      'Mantenimiento de accesorios de la célula y servicio especializado en planeadores Cessna. Aerus MRO: taller aprobado DGAC para turbohélices y planeadores.',
  },
  crumb: 'Accesorios y planeadores',
  eyebrow: 'Aerus MRO',
  titlePre: 'Accesorios y ',
  titleAccent: 'planeadores',
  intro:
    'Mantenimiento de sistemas de la célula — combustible, tren de aterrizaje, hidráulico y controles — además de servicio especializado en planeadores Cessna.',
  accesoriosSubtitle: 'Sistemas de aeronave',
  accesoriosTitle: 'Accesorios de la célula',
  accesorios: [
    {
      titulo: 'Sistema de combustible',
      descripcion: 'Inspección y reparación de tanques, líneas, válvulas de selector, bombas de transferencia y filtros. Verificación de estanqueidad conforme al AMM.',
    },
    {
      titulo: 'Sistema de tren de aterrizaje',
      descripcion: 'Inspección, lubricación y ajuste de tren fijo y retráctil. Cambio de amortiguadores, neumáticos, frenos y accesorios de acero. Servicio de ruedas y frenos Cleveland.',
    },
    {
      titulo: 'Sistema hidráulico',
      descripcion: 'Inspección de líneas y componentes hidráulicos, purga y cambio de fluido, reparación de sellos y actuadores conforme al CMM del componente.',
    },
    {
      titulo: 'Sistema de control de vuelo',
      descripcion: 'Inspección de cables, poleas y varillas de mando, ajuste de tensión y verificación de recorrido de superficies de control conforme a valores AMM.',
    },
    {
      titulo: 'Sistema eléctrico de la célula',
      descripcion: 'Diagnóstico, inspección y reparación de arneses, interruptores de circuito y luminarias. No incluye aviónica (ver Radios e instrumentos).',
    },
  ],
  planeadoresSubtitle: 'Servicio especializado',
  planeadoresTitle: 'Planeadores Cessna',
  planeadores: [
    {
      titulo: 'Inspección anual y bienal',
      descripcion: 'Revisión completa del planeador conforme a la lista de verificación del fabricante y requerimientos DGAC para aeronaves de ala fija no motorizadas.',
    },
    {
      titulo: 'Reparación de célula',
      descripcion: 'Reparación de superficies de fibra de vidrio, revestimientos de aluminio y componentes estructurales dentro de los límites de reparación del Manual de Estructura.',
    },
    {
      titulo: 'Sistema de despliegue de paracaídas (BRS)',
      descripcion: 'Inspección y recarga del sistema BRS (Ballistic Recovery System) conforme al manual del fabricante para modelos Cessna que lo incluyen como equipo estándar o STC.',
    },
  ],
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas servicio de accesorios?',
  ctaDesc: 'Cuéntanos el sistema y tipo de aeronave — te respondemos en 24 horas.',
  ctaButton: 'Solicitar cotización',
  ctaHref: '/mro/cotizacion/',
}

const en: MroAccesoriosContent = {
  seo: {
    metaTitle: 'Accessories & Cessna Gliders | Aerus MRO',
    metaDescription:
      'Airframe accessory maintenance and specialized service for Cessna gliders. Aerus MRO: DGAC-approved repair station for turboprops and gliders.',
  },
  crumb: 'Accessories & gliders',
  eyebrow: 'Aerus MRO',
  titlePre: 'Accessories & ',
  titleAccent: 'gliders',
  intro:
    'Maintenance of airframe systems — fuel, landing gear, hydraulics and flight controls — plus specialized service for Cessna gliders.',
  accesoriosSubtitle: 'Aircraft systems',
  accesoriosTitle: 'Airframe accessories',
  accesorios: [
    {
      titulo: 'Fuel system',
      descripcion: 'Inspection and repair of tanks, lines, selector valves, transfer pumps and filters. Leak checks per the AMM.',
    },
    {
      titulo: 'Landing gear',
      descripcion: 'Inspection, lubrication and rigging of fixed and retractable gear. Replacement of shock struts, tires, brakes and steel hardware. Cleveland wheel and brake service.',
    },
    {
      titulo: 'Hydraulic system',
      descripcion: 'Inspection of hydraulic lines and components, bleeding and fluid replacement, and seal and actuator repair per the component CMM.',
    },
    {
      titulo: 'Flight control system',
      descripcion: 'Inspection of cables, pulleys and push-pull rods, cable tension adjustment and control surface travel checks per AMM values.',
    },
    {
      titulo: 'Airframe electrical system',
      descripcion: 'Troubleshooting, inspection and repair of wiring harnesses, circuit breakers and lighting. Does not include avionics (see Radios & instruments).',
    },
  ],
  planeadoresSubtitle: 'Specialized service',
  planeadoresTitle: 'Cessna gliders',
  planeadores: [
    {
      titulo: 'Annual and biennial inspections',
      descripcion: 'Complete glider inspection per the manufacturer’s checklist and DGAC requirements for non-powered fixed-wing aircraft.',
    },
    {
      titulo: 'Airframe repair',
      descripcion: 'Repair of fiberglass surfaces, aluminum skins and structural components within the repair limits of the Structural Repair Manual.',
    },
    {
      titulo: 'Parachute recovery system (BRS)',
      descripcion: 'Inspection and repack of the BRS (Ballistic Recovery System) per the manufacturer’s manual for Cessna models that carry it as standard equipment or under an STC.',
    },
  ],
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need accessory service?',
  ctaDesc: 'Tell us the system and aircraft type — we will get back to you within 24 hours.',
  ctaButton: 'Request a quote',
  ctaHref: '/mro/cotizacion/',
}

const defaults: PageDefaults<MroAccesoriosContent> = { es, en }
export default defaults
