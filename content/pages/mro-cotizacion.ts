// Textos de la página "MRO · Solicitar cotización" (/mro/cotizacion).
// Se editan en Sanity (Páginas → MRO · Solicitar cotización); esto es el respaldo y la fuente
// de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/mro-cotizacion.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { EnlaceMro, ItemMro } from './mro'

export type MroCotizacionContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  pasosTitle: string
  pasos: ItemMro[]
  datosSubtitle: string
  datosTitle: string
  datos: string[]
  urgente: string
  contactTag: string
  contactTitle: string
  email: string
  telefono: string
  telefonoMarcar: string
  horario: string
  serviciosTitle: string
  servicios: EnlaceMro[]
}

const es: MroCotizacionContent = {
  seo: {
    metaTitle: 'Solicitar cotización MRO | Aerus',
    metaDescription:
      'Solicita una cotización de mantenimiento aeronáutico a Aerus MRO. Comparte los datos de tu aeronave y el servicio requerido — te respondemos en 24 horas.',
  },
  crumb: 'Solicitar cotización',
  eyebrow: 'Aerus MRO',
  titlePre: 'Solicitar ',
  titleAccent: 'cotización',
  intro:
    'Cuéntanos qué necesita tu aeronave. Nuestro equipo técnico evalúa el trabajo y te responde con una propuesta formal en menos de 24 horas hábiles.',
  pasosTitle: 'Cómo solicitar tu cotización',
  pasos: [
    {
      titulo: 'Identifica el servicio que necesitas',
      descripcion:
        'Revisa nuestra sección de servicios MRO: motores PT6A, hélices, accesorios, radios e instrumentos. Si no estás seguro, indícanos los síntomas o el mantenimiento programado próximo y nuestro equipo técnico te orientará.',
    },
    {
      titulo: 'Reúne los datos de tu aeronave',
      descripcion:
        'Para preparar la cotización necesitamos: fabricante, modelo y serie de la aeronave; matrícula (registro N- o XB-); total de horas de vuelo y horas desde el último overhaul del componente a revisar.',
    },
    {
      titulo: 'Contáctanos por teléfono o correo',
      descripcion:
        'Envíanos los datos al correo mro@aerus.mx o llámanos al número de MRO. Nuestro equipo técnico revisará la información, confirmará si el trabajo está dentro de nuestro alcance AMO y preparará la propuesta.',
    },
    {
      titulo: 'Recibe tu cotización en 24 horas',
      descripcion:
        'Te enviamos una propuesta formal con alcance de trabajo, tiempo estimado de entrega y costo. Si aceptas, coordinamos la recepción de la aeronave o el componente en nuestras instalaciones.',
    },
  ],
  datosSubtitle: 'Qué necesitamos saber',
  datosTitle: 'Datos de la aeronave',
  datos: [
    'Fabricante, modelo y serie de la aeronave (ej. Cessna 208B Grand Caravan EX)',
    'Registro de la aeronave (matrícula XB- o N-)',
    'Total de horas de vuelo (TTSN)',
    'Horas desde el último overhaul del componente (SMOH)',
    'Descripción del servicio requerido o síntomas observados',
    'Fecha tentativa de ingreso al taller',
  ],
  urgente:
    'Si tu aeronave requiere atención urgente o presentó una falla en vuelo, comunícate directamente por teléfono para atención prioritaria.',
  contactTag: 'Contacto MRO',
  contactTitle: 'Escríbenos o llámanos',
  email: 'mro@aerus.mx',
  telefono: '+52 (812) 682·3501',
  telefonoMarcar: '+528126823501',
  horario: 'Lun–Vie · 08:00–18:00 hrs',
  serviciosTitle: 'Servicios MRO',
  servicios: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
}

const en: MroCotizacionContent = {
  seo: {
    metaTitle: 'Request an MRO Quote | Aerus',
    metaDescription:
      'Request an aircraft maintenance quote from Aerus MRO. Share your aircraft details and the service you need — we will get back to you within 24 hours.',
  },
  crumb: 'Request a quote',
  eyebrow: 'Aerus MRO',
  titlePre: 'Request a ',
  titleAccent: 'quote',
  intro:
    'Tell us what your aircraft needs. Our technical team will evaluate the work and send you a formal proposal in less than 24 business hours.',
  pasosTitle: 'How to request your quote',
  pasos: [
    {
      titulo: 'Identify the service you need',
      descripcion:
        'Browse our MRO services: PT6A engines, propellers, accessories, radios and instruments. If you are not sure, describe the symptoms or your next scheduled maintenance and our technical team will advise you.',
    },
    {
      titulo: 'Gather your aircraft details',
      descripcion:
        'To prepare the quote we need: aircraft manufacturer, model and serial number; registration (N- or XB- tail number); total flight hours and hours since the last overhaul of the component to be serviced.',
    },
    {
      titulo: 'Contact us by phone or email',
      descripcion:
        'Send the details to mro@aerus.mx or call our MRO line. Our technical team will review the information, confirm the work falls within our AMO scope and prepare the proposal.',
    },
    {
      titulo: 'Receive your quote within 24 hours',
      descripcion:
        'We send you a formal proposal with the scope of work, estimated turnaround time and cost. Once you accept, we coordinate the induction of the aircraft or component at our facility.',
    },
  ],
  datosSubtitle: 'What we need to know',
  datosTitle: 'Aircraft details',
  datos: [
    'Aircraft manufacturer, model and serial number (e.g. Cessna 208B Grand Caravan EX)',
    'Aircraft registration (XB- or N- tail number)',
    'Total time since new (TTSN)',
    'Hours since the component’s last overhaul (SMOH)',
    'Description of the required service or observed symptoms',
    'Tentative shop induction date',
  ],
  urgente:
    'If your aircraft needs urgent attention (AOG) or experienced an in-flight failure, call us directly for priority support.',
  contactTag: 'MRO contact',
  contactTitle: 'Email or call us',
  email: 'mro@aerus.mx',
  telefono: '+52 (812) 682·3501',
  telefonoMarcar: '+528126823501',
  horario: 'Mon–Fri · 8:00 am – 6:00 pm',
  serviciosTitle: 'MRO services',
  servicios: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
}

const defaults: PageDefaults<MroCotizacionContent> = { es, en }
export default defaults
