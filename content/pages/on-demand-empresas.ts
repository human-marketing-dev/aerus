// Textos de la página "Cuenta empresarial" (/on-demand/empresas).
// Se editan en Sanity (Páginas → Cuenta empresarial); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/on-demand-empresas.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { IconName } from '@/components/icon-names'

export type EmpresasContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  solucionesSub: string
  solucionesTitulo: string
  soluciones: { icono: IconName; titulo: string; desc: string }[]
  paraQuienSub: string
  paraQuienTitulo: string
  paraQuien: string[]
  compararSub: string
  compararTitulo: string
  colEmpresa: string
  colPass: string
  comparar: { aspecto: string; empresa: string; pass: string }[]
  ctaTitulo: string
  ctaDesc: string
  /** Texto del botón; {email} se reemplaza por el correo */
  ctaBtn: string
  email: string
  relacionadosTitulo: string
  relacionados: { label: string; href: string }[]
}

const es: EmpresasContent = {
  seo: {
    metaTitle: 'Soluciones para empresas | Aerus',
    metaDescription:
      'Cuenta corporativa Aerus para empresas con viajes recurrentes. Gestor de cuenta dedicado, facturación mensual, reporte de viajes y acuerdos de servicio a medida.',
  },
  crumb: 'Cuenta empresarial',
  eyebrow: 'On Demand',
  titleA: 'Cuenta ',
  titleAccent: 'empresarial',
  intro:
    'Para empresas que vuelan Aerus de forma recurrente. Un acuerdo de servicio a la medida con gestor dedicado, facturación mensual y condiciones preferenciales.',
  solucionesSub: 'El servicio',
  solucionesTitulo: 'Qué incluye la cuenta empresarial',
  soluciones: [
    {
      icono: 'support',
      titulo: 'Gestor de cuenta dedicado',
      desc: 'Un contacto exclusivo en Aerus que conoce tus rutas, tus empleados frecuentes y las particularidades de tu empresa.',
    },
    {
      icono: 'mail',
      titulo: 'Facturación mensual consolidada',
      desc: 'Todos los vuelos del período en una sola factura. Desglose por empleado, ruta y fecha listo para el área de finanzas.',
    },
    {
      icono: 'shield',
      titulo: 'Reportes de viaje',
      desc: 'Acceso a reporte mensual de actividad: vuelos realizados, rutas más usadas, cancelaciones y patrones de viaje del equipo.',
    },
    {
      icono: 'calendar',
      titulo: 'Tarifas preferenciales',
      desc: 'Acuerdos de precio basados en el volumen de viajes de la empresa. A mayor recurrencia, mejores condiciones tarifarias.',
    },
    {
      icono: 'users',
      titulo: 'Administración de viajeros',
      desc: 'Alta y gestión de empleados autorizados, perfiles de viajero frecuente y preferencias documentadas para cada miembro del equipo.',
    },
    {
      icono: 'clock',
      titulo: 'Política de cambios flexible',
      desc: 'Cambios de fecha y nombre sin costo adicional con la anticipación establecida en el acuerdo corporativo.',
    },
  ],
  paraQuienSub: 'Perfil de cliente',
  paraQuienTitulo: '¿Para qué tipo de empresa es?',
  paraQuien: [
    'Empresas industriales del noreste con empleados que viajan a la frontera norte frecuentemente',
    'Operadoras y contratistas del sector energético en el corredor Veracruz–Villahermosa',
    'Despachos y firmas con clientes en múltiples destinos de la red Aerus',
    'Grupos empresariales con necesidad de trasladar equipos entre ciudades regionales',
    'Instituciones gubernamentales o académicas con viajes recurrentes en rutas Aerus',
  ],
  compararSub: '¿Cuál elegir?',
  compararTitulo: 'Cuenta empresarial vs Flight Pass',
  colEmpresa: 'Cuenta empresarial',
  colPass: 'Flight Pass',
  comparar: [
    { aspecto: 'Volumen de vuelos', empresa: 'Alto — acuerdo anual', pass: 'Medio — bloques mensuales' },
    { aspecto: 'Precio', empresa: 'Tarifa negociada por acuerdo', pass: 'Precio fijo por vuelo prepagado' },
    { aspecto: 'Facturación', empresa: 'Mensual consolidada', pass: 'Mensual consolidada' },
    { aspecto: 'Gestor dedicado', empresa: '✓', pass: '✓' },
    { aspecto: 'Reportes', empresa: 'Detallado + analítica', pass: 'Básico' },
    { aspecto: 'Empleados cubiertos', empresa: 'Toda la empresa', pass: 'Empleados asignados' },
  ],
  ctaTitulo: '¿Quieres saber más?',
  ctaDesc: 'Contáctanos y un ejecutivo de cuentas te llama para entender tu necesidad y diseñar una propuesta.',
  ctaBtn: 'Escribir a {email}',
  email: 'corporativo@aerus.mx',
  relacionadosTitulo: 'Otras soluciones',
  relacionados: [
    { label: 'Aerus Charter',      href: '/on-demand/charter/' },
    { label: 'Aerus Flight Pass',  href: '/on-demand/flight-pass/' },
    { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
    { label: 'Red de rutas',       href: '/rutas/' },
  ],
}

const en: EmpresasContent = {
  seo: {
    metaTitle: 'Business Solutions | Aerus',
    metaDescription:
      'Aerus corporate accounts for companies with recurring travel. A dedicated account manager, monthly invoicing, travel reporting and tailored service agreements.',
  },
  crumb: 'Business account',
  eyebrow: 'On Demand',
  titleA: 'Business ',
  titleAccent: 'account',
  intro:
    'For companies that fly Aerus on a regular basis. A tailored service agreement with a dedicated account manager, monthly invoicing and preferred terms.',
  solucionesSub: 'The service',
  solucionesTitulo: 'What the business account includes',
  soluciones: [
    {
      icono: 'support',
      titulo: 'Dedicated account manager',
      desc: 'A single point of contact at Aerus who knows your routes, your frequent travelers and the specifics of your business.',
    },
    {
      icono: 'mail',
      titulo: 'Consolidated monthly invoicing',
      desc: 'Every flight in the billing period on a single invoice, broken down by employee, route and date — ready for your finance team.',
    },
    {
      icono: 'shield',
      titulo: 'Travel reports',
      desc: 'Access to a monthly activity report: flights taken, most-used routes, cancellations and your team’s travel patterns.',
    },
    {
      icono: 'calendar',
      titulo: 'Preferred fares',
      desc: 'Pricing agreements based on your company’s travel volume. The more often you fly, the better your fare terms.',
    },
    {
      icono: 'users',
      titulo: 'Traveler management',
      desc: 'Enrollment and management of authorized employees, frequent traveler profiles and documented preferences for each team member.',
    },
    {
      icono: 'clock',
      titulo: 'Flexible change policy',
      desc: 'Date and name changes at no extra cost, with the advance notice set out in your corporate agreement.',
    },
  ],
  paraQuienSub: 'Client profile',
  paraQuienTitulo: 'What kind of company is it for?',
  paraQuien: [
    'Industrial companies in northeastern Mexico whose employees travel frequently to the northern border',
    'Energy-sector operators and contractors along the Veracruz–Villahermosa corridor',
    'Law, accounting and consulting firms with clients in multiple destinations across the Aerus network',
    'Business groups that need to move teams between regional cities',
    'Government and academic institutions with recurring travel on Aerus routes',
  ],
  compararSub: 'Which one is right for you?',
  compararTitulo: 'Business account vs. Flight Pass',
  colEmpresa: 'Business account',
  colPass: 'Flight Pass',
  comparar: [
    { aspecto: 'Flight volume', empresa: 'High — annual agreement', pass: 'Medium — monthly blocks' },
    { aspecto: 'Pricing', empresa: 'Negotiated fare per agreement', pass: 'Fixed price per prepaid flight' },
    { aspecto: 'Invoicing', empresa: 'Consolidated monthly', pass: 'Consolidated monthly' },
    { aspecto: 'Dedicated manager', empresa: '✓', pass: '✓' },
    { aspecto: 'Reporting', empresa: 'Detailed + analytics', pass: 'Basic' },
    { aspecto: 'Employees covered', empresa: 'Entire company', pass: 'Assigned employees' },
  ],
  ctaTitulo: 'Want to learn more?',
  ctaDesc: 'Get in touch and an account executive will call you to understand your needs and put together a proposal.',
  ctaBtn: 'Email {email}',
  email: 'corporativo@aerus.mx',
  relacionadosTitulo: 'Other solutions',
  relacionados: [
    { label: 'Aerus Charter',      href: '/on-demand/charter/' },
    { label: 'Aerus Flight Pass',  href: '/on-demand/flight-pass/' },
    { label: 'Group travel',       href: '/experiencia/grupos/' },
    { label: 'Route network',      href: '/rutas/' },
  ],
}

const defaults: PageDefaults<EmpresasContent> = { es, en }
export default defaults
