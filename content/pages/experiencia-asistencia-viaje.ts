// Textos de la página "Asistencia de viaje" (/experiencia/asistencia-de-viaje).
// Se editan en Sanity (Páginas → Experiencia → Asistencia de viaje); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que sanity/schemaTypes/pages/experiencia-asistencia-viaje.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Servicio = { icono: string; titulo: string; descripcion: string }
type Canal = { icono: string; label: string; detalle: string; href: string }
type Relacionado = { label: string; href: string }

export type AsistenciaViajeContent = {
  seo: PageSeo
  crumb: string
  heroEyebrow: string
  heroTitlePre: string
  heroTitleAccent: string
  heroIntro: string
  serviciosSubtitulo: string
  serviciosTitle: string
  servicios: Servicio[]
  callout: string
  calloutLink: string
  calloutHref: string
  canalesTitle: string
  canales: Canal[]
  relacionadosTitle: string
  relacionados: Relacionado[]
}

const es: AsistenciaViajeContent = {
  seo: {
    metaTitle: 'Asistencia de viaje | Aerus',
    metaDescription:
      'Aerus te acompaña antes, durante y después de tu vuelo. Seguimiento de vuelo en tiempo real, atención personalizada y soporte en caso de cambios o imprevistos.',
  },
  crumb: 'Asistencia de viaje',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Asistencia de ',
  heroTitleAccent: 'viaje',
  heroIntro:
    'Siempre hay alguien en Aerus para ayudarte. Antes de salir, durante el vuelo y al llegar — te acompañamos en cada paso.',
  serviciosSubtitulo: 'Lo que hacemos por ti',
  serviciosTitle: 'Servicios de asistencia',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Seguimiento de vuelo en tiempo real',
      descripcion:
        'Consulta el estado de tu vuelo en cualquier momento desde aerus.mx o comunicándote con nuestro equipo. Recibirás notificaciones por correo ante cambios de horario o puerta.',
    },
    {
      icono: 'calendar',
      titulo: 'Cambios y reprogramación',
      descripcion:
        'Si necesitas cambiar tu vuelo, contáctanos con al menos 24 horas de anticipación. Nuestro equipo revisa la disponibilidad y te ayuda a encontrar la mejor opción conforme a las políticas de tu tarifa.',
    },
    {
      icono: 'phone',
      titulo: 'Atención telefónica y por WhatsApp',
      descripcion:
        'Línea de atención a pasajeros disponible de lunes a domingo de 06:00 a 22:00 hrs. Asistente de IA disponible 24 horas por WhatsApp para consultas inmediatas.',
    },
    {
      icono: 'users',
      titulo: 'Asistencia para pasajeros con necesidades especiales',
      descripcion:
        'Coordinación de asistencia en silla de ruedas, menores no acompañados, oxígeno médico a bordo y animales de servicio. Notifica al menos 48 horas antes de tu vuelo.',
    },
    {
      icono: 'luggage',
      titulo: 'Reporte y seguimiento de equipaje',
      descripcion:
        'En caso de equipaje dañado o extraviado, nuestro equipo en aeropuerto levanta el reporte y coordina la búsqueda o reembolso conforme a la Ley de Aviación Civil.',
    },
    {
      icono: 'shield',
      titulo: 'Gestión de vuelos irregulares',
      descripcion:
        'Ante cancelaciones por causas imputables a Aerus (condiciones técnicas o de aerolínea), te ofrecemos reprotección en el siguiente vuelo disponible, reembolso o compensación conforme a la normativa DGAC.',
    },
  ],
  callout:
    'Para requerimientos especiales (menores no acompañados, oxígeno médico, animales de servicio) es obligatorio notificar con al menos 48 horas de anticipación.',
  calloutLink: 'Ver requerimientos especiales →',
  calloutHref: '/ayuda/requerimientos-especiales/',
  canalesTitle: 'Canales de atención',
  canales: [
    { icono: 'phone', label: 'México', detalle: '+52 (812) 682·3501 · Lun–Dom 06:00–22:00', href: 'tel:+528126823501' },
    { icono: 'phone', label: 'EE.UU.', detalle: '+1 (866) 691·0179 · Llamada gratuita', href: 'tel:+18666910179' },
    { icono: 'bot', label: 'WhatsApp IA', detalle: '+52 (814) 170·1702 · 24 hrs', href: 'https://wa.me/528141701702' },
    { icono: 'mail', label: 'Correo', detalle: 'contacto@aerus.mx', href: 'mailto:contacto@aerus.mx' },
  ],
  relacionadosTitle: 'Más sobre tu viaje',
  relacionados: [
    { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
  ],
}

const en: AsistenciaViajeContent = {
  seo: {
    metaTitle: 'Travel Assistance | Aerus',
    metaDescription:
      'Aerus is with you before, during and after your flight. Real-time flight tracking, personalized service and support if plans change or something unexpected happens.',
  },
  crumb: 'Travel assistance',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Travel ',
  heroTitleAccent: 'assistance',
  heroIntro:
    "There's always someone at Aerus ready to help. Before you leave, during your flight and when you land — we're with you every step of the way.",
  serviciosSubtitulo: 'What we do for you',
  serviciosTitle: 'Assistance services',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Real-time flight tracking',
      descripcion:
        'Check your flight status at any time on aerus.mx or by contacting our team. You’ll receive email notifications of any schedule or gate changes.',
    },
    {
      icono: 'calendar',
      titulo: 'Changes and rebooking',
      descripcion:
        'If you need to change your flight, contact us at least 24 hours in advance. Our team will check availability and help you find the best option under your fare rules.',
    },
    {
      icono: 'phone',
      titulo: 'Phone and WhatsApp support',
      descripcion:
        'Our passenger service line is available Monday through Sunday, 6:00 am to 10:00 pm. An AI assistant is available 24/7 on WhatsApp for immediate questions.',
    },
    {
      icono: 'users',
      titulo: 'Assistance for passengers with special needs',
      descripcion:
        'We coordinate wheelchair assistance, unaccompanied minors, in-flight medical oxygen and service animals. Please notify us at least 48 hours before your flight.',
    },
    {
      icono: 'luggage',
      titulo: 'Baggage claims and tracking',
      descripcion:
        'If your baggage is damaged or lost, our airport team will file the report and coordinate the search or reimbursement in accordance with Mexico’s Civil Aviation Law (Ley de Aviación Civil).',
    },
    {
      icono: 'shield',
      titulo: 'Irregular operations',
      descripcion:
        'If a flight is canceled for reasons attributable to Aerus (technical or airline-related), we’ll offer you rebooking on the next available flight, a refund or compensation in accordance with DGAC regulations.',
    },
  ],
  callout:
    'For special assistance requests (unaccompanied minors, medical oxygen, service animals), you must notify us at least 48 hours in advance.',
  calloutLink: 'View special assistance →',
  calloutHref: '/ayuda/requerimientos-especiales/',
  canalesTitle: 'Contact channels',
  canales: [
    { icono: 'phone', label: 'Mexico', detalle: '+52 (812) 682·3501 · Mon–Sun 6:00 am–10:00 pm', href: 'tel:+528126823501' },
    { icono: 'phone', label: 'U.S.', detalle: '+1 (866) 691·0179 · Toll-free', href: 'tel:+18666910179' },
    { icono: 'bot', label: 'WhatsApp AI', detalle: '+52 (814) 170·1702 · 24/7', href: 'https://wa.me/528141701702' },
    { icono: 'mail', label: 'Email', detalle: 'contacto@aerus.mx', href: 'mailto:contacto@aerus.mx' },
  ],
  relacionadosTitle: 'More about your trip',
  relacionados: [
    { label: 'Special assistance', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Travel documents', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Contact Aerus', href: '/ayuda/contacto/' },
  ],
}

const defaults: PageDefaults<AsistenciaViajeContent> = { es, en }
export default defaults
