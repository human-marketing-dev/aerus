// Textos de la página "Vuelos para grupos" (/experiencia/grupos).
// Se editan en Sanity (Páginas → Experiencia → Vuelos para grupos); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que sanity/schemaTypes/pages/experiencia-grupos.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Tipo = { icono: string; titulo: string; descripcion: string }
type Paso = { titulo: string; descripcion: string }
type Relacionado = { label: string; href: string }

export type GruposContent = {
  seo: PageSeo
  crumb: string
  heroEyebrow: string
  heroTitlePre: string
  heroTitleAccent: string
  heroIntro: string
  tiposSubtitulo: string
  tiposTitle: string
  tipos: Tipo[]
  beneficiosSubtitulo: string
  beneficiosTitle: string
  beneficios: string[]
  pasosTitle: string
  pasos: Paso[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
  relacionadosTitle: string
  relacionados: Relacionado[]
}

const es: GruposContent = {
  seo: {
    metaTitle: 'Vuelos para grupos | Aerus',
    metaDescription:
      'Viaja en grupo con Aerus. Coordinamos vuelos para equipos deportivos, grupos corporativos, familiares y cualquier conjunto de 8 pasajeros o más. Solicita tu cotización.',
  },
  crumb: 'Vuelos para grupos',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Vuelos para ',
  heroTitleAccent: 'grupos',
  heroIntro:
    '¿Viajan 8 o más personas? Aerus coordina el vuelo para que tu grupo llegue junto, a tiempo y sin el caos de reservar asientos uno por uno.',
  tiposSubtitulo: 'Para quién es',
  tiposTitle: 'Tipos de grupos que atendemos',
  tipos: [
    {
      icono: 'users',
      titulo: 'Grupos corporativos',
      descripcion: 'Traslado de equipos de trabajo, directivos o delegaciones a reuniones y eventos de negocio. Factura a razón social de la empresa.',
    },
    {
      icono: 'plane',
      titulo: 'Equipos deportivos',
      descripcion: 'Vuelos coordinados para equipos, cuerpos técnicos y staff. Gestión de equipaje especial (implementos deportivos) incluida en la coordinación.',
    },
    {
      icono: 'ticket',
      titulo: 'Grupos turísticos y familiares',
      descripcion: 'Reuniones familiares, bodas, quinceaños o excursiones. Organizamos la logística para que el grupo vuele junto y a tiempo.',
    },
    {
      icono: 'shield',
      titulo: 'Grupos académicos',
      descripcion: 'Viajes escolares, delegaciones universitarias y grupos de investigación. Coordinación con responsables del grupo y documentación requerida para menores.',
    },
  ],
  beneficiosSubtitulo: 'Qué incluye',
  beneficiosTitle: 'Beneficios del vuelo grupal',
  beneficios: [
    'Asientos asignados juntos en el mismo vuelo.',
    'Coordinación directa con un agente Aerus durante todo el proceso.',
    'Posibilidad de facturar a nombre de empresa u organización.',
    'Gestión de requerimientos especiales del grupo (dietas, movilidad, menores).',
    'Flexibilidad en cambios de fecha con mínimo 72 horas de anticipación.',
    'Opción de vuelo exclusivo (charter) para grupos que requieran mayor privacidad o logística.',
  ],
  pasosTitle: 'Cómo funciona',
  pasos: [
    {
      titulo: 'Cuéntanos de tu grupo',
      descripcion: 'Envíanos el número de pasajeros, origen, destino, fecha(s) tentativa(s) y tipo de grupo. Mientras más detalles, más precisa será la propuesta.',
    },
    {
      titulo: 'Recibe tu propuesta en 24 horas',
      descripcion: 'Nuestro equipo revisa disponibilidad y te envía una propuesta de vuelo con tarifas de grupo, opciones de fecha y condiciones de pago.',
    },
    {
      titulo: 'Confirma y gestiona los pasajeros',
      descripcion: 'Al confirmar, te pedimos la lista de pasajeros con nombre completo e identificación. El pago puede hacerse en bloque o por pasajero según se acuerde.',
    },
    {
      titulo: 'El día del vuelo, nosotros te esperamos',
      descripcion: 'Asignamos un agente en aeropuerto para recibir al grupo, agilizar el check-in y coordinar el abordaje. Tu grupo viaja junto, sin complicaciones.',
    },
  ],
  ctaTitle: '¿Cuántos viajan?',
  ctaDesc: 'Escríbenos con los datos del grupo y te respondemos en 24 horas con disponibilidad y tarifas.',
  ctaButton: 'Escribir a grupos@aerus.mx',
  ctaHref: 'mailto:grupos@aerus.mx',
  relacionadosTitle: 'También puede interesarte',
  relacionados: [
    { label: 'On Demand — charter', href: '/on-demand/charter/' },
    { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
  ],
}

const en: GruposContent = {
  seo: {
    metaTitle: 'Group Flights | Aerus',
    metaDescription:
      'Travel as a group with Aerus. We coordinate flights for sports teams, corporate groups, families and any party of 8 or more passengers. Request a quote.',
  },
  crumb: 'Group flights',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Group ',
  heroTitleAccent: 'flights',
  heroIntro:
    'Traveling with 8 or more people? Aerus coordinates the flight so your group arrives together, on time and without the hassle of booking seats one by one.',
  tiposSubtitulo: 'Who it’s for',
  tiposTitle: 'Groups we serve',
  tipos: [
    {
      icono: 'users',
      titulo: 'Corporate groups',
      descripcion: 'Transportation for work teams, executives or delegations to business meetings and events. Invoices can be issued to your company’s legal name.',
    },
    {
      icono: 'plane',
      titulo: 'Sports teams',
      descripcion: 'Coordinated flights for players, coaching staff and support personnel. Handling of special baggage (sports equipment) is included.',
    },
    {
      icono: 'ticket',
      titulo: 'Leisure and family groups',
      descripcion: 'Family reunions, weddings, quinceañeras or excursions. We organize the logistics so your group flies together and on time.',
    },
    {
      icono: 'shield',
      titulo: 'Academic groups',
      descripcion: 'School trips, university delegations and research groups. We coordinate with group leaders and handle the documentation required for minors.',
    },
  ],
  beneficiosSubtitulo: 'What’s included',
  beneficiosTitle: 'Group travel benefits',
  beneficios: [
    'Seats assigned together on the same flight.',
    'Direct coordination with an Aerus agent throughout the entire process.',
    'Option to invoice under a company or organization name.',
    'Handling of the group’s special requirements (dietary needs, mobility, minors).',
    'Flexible date changes with at least 72 hours’ notice.',
    'Exclusive (charter) flight option for groups that need more privacy or custom logistics.',
  ],
  pasosTitle: 'How it works',
  pasos: [
    {
      titulo: 'Tell us about your group',
      descripcion: 'Send us the number of passengers, origin, destination, tentative date(s) and type of group. The more details you share, the more accurate your proposal will be.',
    },
    {
      titulo: 'Get your proposal within 24 hours',
      descripcion: 'Our team checks availability and sends you a flight proposal with group fares, date options and payment terms.',
    },
    {
      titulo: 'Confirm and manage your passengers',
      descripcion: 'Once you confirm, we’ll ask for the passenger list with full names and ID. Payment can be made as a single block or per passenger, as agreed.',
    },
    {
      titulo: 'On the day of the flight, we’ll be waiting',
      descripcion: 'We assign an airport agent to welcome your group, speed up check-in and coordinate boarding. Your group travels together, hassle-free.',
    },
  ],
  ctaTitle: 'How many are traveling?',
  ctaDesc: 'Send us your group details and we’ll reply within 24 hours with availability and fares.',
  ctaButton: 'Email grupos@aerus.mx',
  ctaHref: 'mailto:grupos@aerus.mx',
  relacionadosTitle: 'You may also like',
  relacionados: [
    { label: 'On Demand — charter', href: '/on-demand/charter/' },
    { label: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Contact Aerus', href: '/ayuda/contacto/' },
  ],
}

const defaults: PageDefaults<GruposContent> = { es, en }
export default defaults
