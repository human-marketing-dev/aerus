// Textos de la página "Flight Pass · Contacto" (/on-demand/flight-pass/contacto).
// Se editan en Sanity (Páginas → Flight Pass · Contacto); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/on-demand-flight-pass-contacto.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type FlightPassContactoContent = {
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
  siguienteSub: string
  siguienteTitulo: string
  siguienteA: string
  siguienteStrong: string
  siguienteB: string
  ctaTitulo: string
  ctaDesc: string
  email: string
  mailSubject: string
  telefono: string
  horario: string
  relacionadosTitulo: string
  relacionados: { label: string; href: string }[]
}

const es: FlightPassContactoContent = {
  seo: {
    metaTitle: 'Contacto Flight Pass | Aerus',
    metaDescription:
      'Solicita información sobre el Aerus Flight Pass para tu empresa. Nuestro equipo corporativo te prepara una propuesta personalizada.',
  },
  crumb: 'Contacto',
  eyebrow: 'Aerus Flight Pass',
  titleA: 'Solicitar ',
  titleAccent: 'información',
  intro:
    'Cuéntanos sobre tu empresa y el volumen de viajes de tu equipo. Un ejecutivo de cuentas Aerus te prepara una propuesta de Flight Pass en 24 horas.',
  datosSub: 'Qué incluir en tu mensaje',
  datosTitulo: 'Información para la propuesta',
  datosIntro: 'Con estos datos podemos diseñar un Flight Pass ajustado al perfil de viaje real de tu empresa:',
  datos: [
    'Nombre de la empresa y giro',
    'Rutas que utilizan tus empleados con mayor frecuencia',
    'Número aproximado de vuelos al mes',
    'Número de empleados que viajarían bajo el Flight Pass',
    'Nombre y cargo del responsable de viajes corporativos',
  ],
  siguienteSub: 'El siguiente paso',
  siguienteTitulo: 'Qué pasa después',
  siguienteA: 'Al recibir tu mensaje, un ejecutivo de cuentas Aerus te contactará dentro de',
  siguienteStrong: ' 24 horas hábiles',
  siguienteB:
    ' para agendar una llamada breve, entender tu necesidad con más detalle y enviarte una propuesta de paquete personalizada.',
  ctaTitulo: 'Contáctanos',
  ctaDesc: 'Escríbenos con los datos de tu empresa y te respondemos en 24 horas.',
  email: 'corporativo@aerus.mx',
  mailSubject: 'Información Flight Pass',
  telefono: '+52 812 682 3501',
  horario: 'Lunes a viernes · 08:00–18:00 h CST',
  relacionadosTitulo: 'Antes de contactar',
  relacionados: [
    { label: 'Qué incluye el Flight Pass', href: '/on-demand/flight-pass/' },
    { label: 'Cuenta empresarial',         href: '/on-demand/empresas/' },
    { label: 'Red de rutas',               href: '/rutas/' },
  ],
}

const en: FlightPassContactoContent = {
  seo: {
    metaTitle: 'Flight Pass Contact | Aerus',
    metaDescription:
      'Request information about the Aerus Flight Pass for your company. Our corporate team will prepare a customized proposal for you.',
  },
  crumb: 'Contact',
  eyebrow: 'Aerus Flight Pass',
  titleA: 'Request ',
  titleAccent: 'information',
  intro:
    'Tell us about your company and your team’s travel volume. An Aerus account executive will prepare a Flight Pass proposal for you within 24 hours.',
  datosSub: 'What to include in your message',
  datosTitulo: 'Information for your proposal',
  datosIntro: 'With these details, we can design a Flight Pass that fits your company’s actual travel profile:',
  datos: [
    'Company name and industry',
    'Routes your employees fly most often',
    'Approximate number of flights per month',
    'Number of employees who would travel under the Flight Pass',
    'Name and title of the person responsible for corporate travel',
  ],
  siguienteSub: 'Next step',
  siguienteTitulo: 'What happens next',
  siguienteA: 'Once we receive your message, an Aerus account executive will contact you within',
  siguienteStrong: ' 24 business hours',
  siguienteB:
    ' to schedule a short call, learn more about your needs and send you a customized package proposal.',
  ctaTitulo: 'Contact us',
  ctaDesc: 'Email us your company details and we’ll get back to you within 24 hours.',
  email: 'corporativo@aerus.mx',
  mailSubject: 'Flight Pass information',
  telefono: '+52 812 682 3501',
  horario: 'Monday to Friday · 8:00 a.m.–6:00 p.m. CST',
  relacionadosTitulo: 'Before you reach out',
  relacionados: [
    { label: 'What the Flight Pass includes', href: '/on-demand/flight-pass/' },
    { label: 'Business account',              href: '/on-demand/empresas/' },
    { label: 'Route network',                 href: '/rutas/' },
  ],
}

const defaults: PageDefaults<FlightPassContactoContent> = { es, en }
export default defaults
