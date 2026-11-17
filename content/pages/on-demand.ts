// Textos de la página "On Demand" (/on-demand).
// Se editan en Sanity (Páginas → On Demand); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/on-demand.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { IconName } from '@/components/icon-names'

export type OnDemandContent = {
  seo: PageSeo
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  servicios: { icono: IconName; titulo: string; desc: string; href: string; cta: string }[]
  ventajasTitulo: string
  ventajas: { icono: IconName; texto: string }[]
  ctaEyebrow: string
  ctaTitulo: string
  ctaCharter: string
  ctaCharterHref: string
  ctaContacto: string
  ctaContactoHref: string
}

const es: OnDemandContent = {
  seo: {
    metaTitle: 'On Demand | Aerus',
    metaDescription:
      'Soluciones de vuelo para empresas. Aerus Charter para grupos y eventos, Aerus Flight Pass para viajeros frecuentes y cuentas corporativas para equipos que vuelan de forma recurrente.',
  },
  eyebrow: 'Para empresas',
  titleA: 'Vuelos corporativos ',
  titleAccent: 'sin tiempos muertos',
  intro:
    'Aerus ofrece soluciones de aviación para empresas que necesitan moverse con eficiencia en las rutas regionales de México. Charter, pases de vuelo y cuentas corporativas — adaptados a cómo opera tu empresa.',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Aerus Charter',
      desc: 'Avión exclusivo para tu grupo o evento. Tú defines el destino, la fecha y el horario. Hasta 12 pasajeros por vuelo.',
      href: '/on-demand/charter/',
      cta: 'Conocer charter',
    },
    {
      icono: 'ticket',
      titulo: 'Aerus Flight Pass',
      desc: 'Bloque de vuelos prepagados para empleados que viajan en rutas Aerus con frecuencia. Precio fijo, factura a la empresa.',
      href: '/on-demand/flight-pass/',
      cta: 'Conocer Flight Pass',
    },
    {
      icono: 'users',
      titulo: 'Cuenta empresarial',
      desc: 'Acuerdo de servicio continuo para empresas con necesidades de viaje recurrente. Gestor de cuenta dedicado, facturación mensual y reporte de viajes.',
      href: '/on-demand/empresas/',
      cta: 'Ver solución empresarial',
    },
  ],
  ventajasTitulo: 'Por qué las empresas eligen Aerus',
  ventajas: [
    { icono: 'clock',   texto: 'Check-in en minutos, no en horas' },
    { icono: 'plane',   texto: 'Vuelos directos sin conexiones' },
    { icono: 'shield',  texto: 'Flota propia con mantenimiento certificado DGAC' },
    { icono: 'users',   texto: 'Cabina privada de hasta 12 pasajeros' },
    { icono: 'mail',    texto: 'Facturación directa a razón social' },
    { icono: 'support', texto: 'Atención personalizada antes y durante el vuelo' },
  ],
  ctaEyebrow: '¿Listo para empezar?',
  ctaTitulo: 'Hablemos de tu necesidad de vuelo',
  ctaCharter: 'Solicitar cotización charter',
  ctaCharterHref: '/on-demand/charter/cotizar/',
  ctaContacto: 'Contactar Aerus',
  ctaContactoHref: '/ayuda/contacto/',
}

const en: OnDemandContent = {
  seo: {
    metaTitle: 'On Demand | Aerus',
    metaDescription:
      'Flight solutions for businesses. Aerus Charter for groups and events, Aerus Flight Pass for frequent travelers, and corporate accounts for teams that fly on a regular basis.',
  },
  eyebrow: 'For business',
  titleA: 'Corporate travel ',
  titleAccent: 'without the downtime',
  intro:
    'Aerus offers aviation solutions for companies that need to move efficiently across Mexico’s regional routes. Charter flights, flight passes and corporate accounts — tailored to the way your business operates.',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Aerus Charter',
      desc: 'A private aircraft for your group or event. You choose the destination, date and time. Up to 12 passengers per flight.',
      href: '/on-demand/charter/',
      cta: 'Explore charter',
    },
    {
      icono: 'ticket',
      titulo: 'Aerus Flight Pass',
      desc: 'A block of prepaid flights for employees who travel Aerus routes frequently. Fixed pricing, invoiced to your company.',
      href: '/on-demand/flight-pass/',
      cta: 'Explore Flight Pass',
    },
    {
      icono: 'users',
      titulo: 'Business account',
      desc: 'An ongoing service agreement for companies with recurring travel needs. Dedicated account manager, monthly invoicing and travel reporting.',
      href: '/on-demand/empresas/',
      cta: 'See business solutions',
    },
  ],
  ventajasTitulo: 'Why companies choose Aerus',
  ventajas: [
    { icono: 'clock',   texto: 'Check-in in minutes, not hours' },
    { icono: 'plane',   texto: 'Nonstop flights, no connections' },
    { icono: 'shield',  texto: 'Our own fleet with DGAC-certified maintenance' },
    { icono: 'users',   texto: 'Private cabin for up to 12 passengers' },
    { icono: 'mail',    texto: 'Invoicing issued directly to your legal entity' },
    { icono: 'support', texto: 'Personalized service before and during your flight' },
  ],
  ctaEyebrow: 'Ready to get started?',
  ctaTitulo: 'Let’s talk about your travel needs',
  ctaCharter: 'Request a charter quote',
  ctaCharterHref: '/on-demand/charter/cotizar/',
  ctaContacto: 'Contact Aerus',
  ctaContactoHref: '/ayuda/contacto/',
}

const defaults: PageDefaults<OnDemandContent> = { es, en }
export default defaults
