// Textos de la página "Aerus Flight Pass" (/on-demand/flight-pass).
// Se editan en Sanity (Páginas → Aerus Flight Pass); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/on-demand-flight-pass.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { IconName } from '@/components/icon-names'

export type FlightPassContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  beneficiosSub: string
  beneficiosTitulo: string
  beneficios: { icono: IconName; titulo: string; desc: string }[]
  pasosTitulo: string
  pasos: { titulo: string; desc: string }[]
  faqTitulo: string
  faq: { q: string; a: string }[]
  ctaTitulo: string
  ctaDesc: string
  ctaBtn: string
  ctaHref: string
  relacionadosTitulo: string
  relacionados: { label: string; href: string }[]
  contactoTag: string
  contactoTitulo: string
  email: string
  horario: string
}

const es: FlightPassContent = {
  seo: {
    metaTitle: 'Aerus Flight Pass | Aerus',
    metaDescription:
      'Bloque de vuelos prepagados para empresas. Precio fijo por vuelo, factura a razón social, prioridad en reservación y gestor de cuenta dedicado.',
  },
  crumb: 'Aerus Flight Pass',
  eyebrow: 'On Demand',
  titleA: 'Aerus ',
  titleAccent: 'Flight Pass',
  intro:
    'Vuelos prepagados para empresas cuyos empleados viajan en rutas Aerus de forma recurrente. Precio fijo, factura mensual y prioridad en cada reservación.',
  beneficiosSub: 'Ventajas del pase',
  beneficiosTitulo: 'Qué incluye el Flight Pass',
  beneficios: [
    {
      icono: 'cash',
      titulo: 'Precio fijo por vuelo',
      desc: 'Tu empresa conoce exactamente el costo de cada vuelo antes de que el empleado viaje. Sin sorpresas en la liquidación.',
    },
    {
      icono: 'calendar',
      titulo: 'Prioridad en reservación',
      desc: 'Los titulares de Flight Pass tienen acceso preferente en rutas con alta demanda y cambios de fecha sin cargo adicional.',
    },
    {
      icono: 'mail',
      titulo: 'Factura a la empresa',
      desc: 'Un solo proceso de facturación mensual para todos los viajes del período. Compatible con los procesos contables de tu área de finanzas.',
    },
    {
      icono: 'support',
      titulo: 'Gestor de cuenta dedicado',
      desc: 'Un contacto directo en Aerus que conoce las rutas y necesidades de tu empresa. Disponible para cambios, ajustes y consultas.',
    },
    {
      icono: 'shield',
      titulo: 'Control de viajes',
      desc: 'Reporte mensual de vuelos por empleado, ruta y fecha. Información lista para conciliación con viáticos y gastos de viaje.',
    },
    {
      icono: 'users',
      titulo: 'Multi-empleado',
      desc: 'El Flight Pass puede asignarse a uno o varios empleados dentro de la misma cuenta. Ideal para equipos con rutas fijas.',
    },
  ],
  pasosTitulo: 'Cómo funciona',
  pasos: [
    {
      titulo: 'Define tus rutas',
      desc: 'Cuéntanos qué rutas vuelan tus empleados con mayor frecuencia y cuántos viajes al mes manejan en promedio.',
    },
    {
      titulo: 'Recibe tu propuesta de paquete',
      desc: 'Diseñamos un paquete a la medida de tu volumen. El precio por vuelo disminuye según el tamaño del bloque contratado.',
    },
    {
      titulo: 'Activa el Flight Pass',
      desc: 'Firmamos el convenio corporativo y activamos los accesos. Tus empleados pueden reservar desde ese momento.',
    },
    {
      titulo: 'Vuelas, nosotros facturamos',
      desc: 'Al cierre del período recibes la factura consolidada con el detalle de todos los vuelos realizados.',
    },
  ],
  faqTitulo: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Cuántos vuelos incluye un Flight Pass?',
      a: 'El número de vuelos se define según las necesidades de la empresa. Ofrecemos paquetes desde 10 vuelos mensuales. Contáctanos para una propuesta personalizada.',
    },
    {
      q: '¿Los vuelos del Flight Pass tienen fecha de vencimiento?',
      a: 'Los bloques de vuelo tienen una vigencia definida en el convenio. Los vuelos no utilizados dentro del período pueden prorratearse según las condiciones del acuerdo.',
    },
    {
      q: '¿Puede un empleado usar el Flight Pass para rutas fuera de la red Aerus?',
      a: 'El Flight Pass aplica exclusivamente a las rutas operadas por Aerus. Para conexiones adicionales a través de Viva, consulta nuestra sección Alianza con Viva.',
    },
    {
      q: '¿Se puede transferir un vuelo a otro empleado?',
      a: 'Sí, con un mínimo de 24 horas de anticipación. El gestor de cuenta puede hacer el cambio de nombre sin cargo adicional.',
    },
  ],
  ctaTitulo: '¿Tu empresa vuela Aerus?',
  ctaDesc: 'Cuéntanos cuántos vuelos manejan al mes y te preparamos una propuesta de Flight Pass.',
  ctaBtn: 'Solicitar información',
  ctaHref: '/on-demand/flight-pass/contacto/',
  relacionadosTitulo: 'También puede interesarte',
  relacionados: [
    { label: 'Aerus Charter',         href: '/on-demand/charter/' },
    { label: 'Cuenta empresarial',    href: '/on-demand/empresas/' },
    { label: 'Red de rutas',          href: '/rutas/' },
    { label: 'Alianza con Viva',      href: '/rutas/alianza-viva/' },
  ],
  contactoTag: 'Contacto corporativo',
  contactoTitulo: 'Equipo Empresas',
  email: 'corporativo@aerus.mx',
  horario: 'Lun–Vie · 08:00–18:00 h',
}

const en: FlightPassContent = {
  seo: {
    metaTitle: 'Aerus Flight Pass | Aerus',
    metaDescription:
      'A block of prepaid flights for businesses. Fixed price per flight, invoices issued to your legal entity, priority booking and a dedicated account manager.',
  },
  crumb: 'Aerus Flight Pass',
  eyebrow: 'On Demand',
  titleA: 'Aerus ',
  titleAccent: 'Flight Pass',
  intro:
    'Prepaid flights for companies whose employees travel Aerus routes on a regular basis. Fixed pricing, monthly invoicing and priority on every booking.',
  beneficiosSub: 'Pass benefits',
  beneficiosTitulo: 'What the Flight Pass includes',
  beneficios: [
    {
      icono: 'cash',
      titulo: 'Fixed price per flight',
      desc: 'Your company knows the exact cost of every flight before the employee travels. No surprises when it’s time to settle expenses.',
    },
    {
      icono: 'calendar',
      titulo: 'Priority booking',
      desc: 'Flight Pass holders get preferred access on high-demand routes, plus date changes at no extra charge.',
    },
    {
      icono: 'mail',
      titulo: 'Invoiced to your company',
      desc: 'A single monthly invoicing process for all trips in the period, compatible with your finance team’s accounting workflows.',
    },
    {
      icono: 'support',
      titulo: 'Dedicated account manager',
      desc: 'A direct contact at Aerus who knows your company’s routes and needs. Available for changes, adjustments and questions.',
    },
    {
      icono: 'shield',
      titulo: 'Travel oversight',
      desc: 'Monthly flight report by employee, route and date — ready to reconcile against per diems and travel expenses.',
    },
    {
      icono: 'users',
      titulo: 'Multiple employees',
      desc: 'A Flight Pass can be assigned to one or more employees under the same account. Ideal for teams that fly the same routes.',
    },
  ],
  pasosTitulo: 'How it works',
  pasos: [
    {
      titulo: 'Define your routes',
      desc: 'Tell us which routes your employees fly most often and how many trips they take per month on average.',
    },
    {
      titulo: 'Get your package proposal',
      desc: 'We design a package tailored to your volume. The price per flight goes down as the size of the block increases.',
    },
    {
      titulo: 'Activate your Flight Pass',
      desc: 'We sign the corporate agreement and activate access. Your employees can start booking right away.',
    },
    {
      titulo: 'You fly, we invoice',
      desc: 'At the end of each period, you receive a consolidated invoice detailing every flight taken.',
    },
  ],
  faqTitulo: 'Frequently asked questions',
  faq: [
    {
      q: 'How many flights does a Flight Pass include?',
      a: 'The number of flights is based on your company’s needs. We offer packages starting at 10 flights per month. Contact us for a customized proposal.',
    },
    {
      q: 'Do Flight Pass flights expire?',
      a: 'Flight blocks are valid for the term set out in the agreement. Flights not used within the period may be prorated according to the terms of the agreement.',
    },
    {
      q: 'Can an employee use the Flight Pass on routes outside the Aerus network?',
      a: 'The Flight Pass applies only to routes operated by Aerus. For additional connections through Viva, see our Viva alliance section.',
    },
    {
      q: 'Can a flight be transferred to another employee?',
      a: 'Yes, with at least 24 hours’ notice. Your account manager can make the name change at no extra charge.',
    },
  ],
  ctaTitulo: 'Does your company fly Aerus?',
  ctaDesc: 'Tell us how many flights your team takes each month and we’ll prepare a Flight Pass proposal for you.',
  ctaBtn: 'Request information',
  ctaHref: '/on-demand/flight-pass/contacto/',
  relacionadosTitulo: 'You may also be interested in',
  relacionados: [
    { label: 'Aerus Charter',         href: '/on-demand/charter/' },
    { label: 'Business account',      href: '/on-demand/empresas/' },
    { label: 'Route network',         href: '/rutas/' },
    { label: 'Viva alliance',         href: '/rutas/alianza-viva/' },
  ],
  contactoTag: 'Corporate contact',
  contactoTitulo: 'Business Team',
  email: 'corporativo@aerus.mx',
  horario: 'Mon–Fri · 8:00 a.m.–6:00 p.m.',
}

const defaults: PageDefaults<FlightPassContent> = { es, en }
export default defaults
