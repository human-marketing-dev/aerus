// Textos de la página "Centro de ayuda" (/ayuda).
// Se editan en Sanity (Páginas → Ayuda → Centro de ayuda); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Categoria = { titulo: string; descripcion: string; icono: string; href: string }

export type AyudaContent = {
  seo: PageSeo
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  searchPlaceholder: string
  searchBadge: string
  catsEyebrow: string
  catsTitle: string
  categorias: Categoria[]
  contactEyebrow: string
  contactText: string
  contactCta: string
  contactHref: string
  faqCta: string
  faqHref: string
}

const es: AyudaContent = {
  seo: {
    metaTitle: 'Centro de Ayuda | Aerus',
    metaDescription:
      'Encuentra respuestas sobre reservas, equipaje, documentos, check-in y más. Centro de ayuda oficial de Aerus.',
  },
  eyebrow: 'Soporte',
  titleA: '¿Cómo podemos',
  titleB: 'ayudarte?',
  intro: 'Encuentra respuestas, políticas y formas de contacto para tu viaje con Aerus.',
  searchPlaceholder: 'Busca una pregunta o tema…',
  searchBadge: 'Próximamente',
  catsEyebrow: 'Temas',
  catsTitle: 'Explora por categoría',
  categorias: [
    { titulo: 'Preguntas frecuentes', descripcion: 'Reservas, cambios, cancelaciones y más respondidas.', icono: 'ticket', href: '/ayuda/faq/' },
    { titulo: 'Documentos para viajar', descripcion: 'Identificación y documentos requeridos según tu destino.', icono: 'shield', href: '/ayuda/documentos-para-viajar/' },
    { titulo: 'Equipaje', descripcion: 'Políticas de equipaje de mano y documentado.', icono: 'luggage', href: '/ayuda/equipaje/' },
    { titulo: 'Tiempos de llegada al aeropuerto', descripcion: 'Con cuánta anticipación presentarte antes de tu vuelo.', icono: 'clock', href: '/ayuda/tiempos-aeropuerto/' },
    { titulo: 'Requerimientos especiales', descripcion: 'Asistencia, movilidad reducida y necesidades especiales.', icono: 'support', href: '/ayuda/requerimientos-especiales/' },
    { titulo: 'Viajar con mascota', descripcion: 'Requisitos y políticas para llevar a tu mascota a bordo.', icono: 'plane', href: '/ayuda/viajar-con-mascota/' },
    { titulo: 'Facturación', descripcion: 'Solicita y descarga la factura de tus vuelos.', icono: 'cash', href: '/ayuda/facturacion/' },
    { titulo: 'Contacto', descripcion: 'Habla con nosotros por teléfono, WhatsApp o correo.', icono: 'phone', href: '/ayuda/contacto/' },
  ],
  contactEyebrow: '¿No encontraste lo que buscabas?',
  contactText: 'Nuestro equipo está disponible de lunes a domingo de 06:00 a 22:00 hrs.',
  contactCta: 'Contactar a Aerus',
  contactHref: '/ayuda/contacto/',
  faqCta: 'Preguntas frecuentes',
  faqHref: '/ayuda/faq/',
}

const en: AyudaContent = {
  seo: {
    metaTitle: 'Help Center | Aerus',
    metaDescription:
      'Find answers about bookings, baggage, travel documents, check-in and more. The official Aerus help center.',
  },
  eyebrow: 'Support',
  titleA: 'How can we',
  titleB: 'help you?',
  intro: 'Find answers, policies and ways to reach us for your trip with Aerus.',
  searchPlaceholder: 'Search for a question or topic…',
  searchBadge: 'Coming soon',
  catsEyebrow: 'Topics',
  catsTitle: 'Browse by category',
  categorias: [
    { titulo: 'Frequently asked questions', descripcion: 'Answers about bookings, changes, cancellations and more.', icono: 'ticket', href: '/ayuda/faq/' },
    { titulo: 'Travel documents', descripcion: 'ID and documents required for your destination.', icono: 'shield', href: '/ayuda/documentos-para-viajar/' },
    { titulo: 'Baggage', descripcion: 'Carry-on and checked baggage policies.', icono: 'luggage', href: '/ayuda/equipaje/' },
    { titulo: 'Airport arrival times', descripcion: 'How early to arrive before your flight.', icono: 'clock', href: '/ayuda/tiempos-aeropuerto/' },
    { titulo: 'Special assistance', descripcion: 'Assistance, reduced mobility and special needs.', icono: 'support', href: '/ayuda/requerimientos-especiales/' },
    { titulo: 'Traveling with pets', descripcion: 'Requirements and policies for bringing your pet on board.', icono: 'plane', href: '/ayuda/viajar-con-mascota/' },
    { titulo: 'Invoicing', descripcion: 'Request and download invoices for your flights.', icono: 'cash', href: '/ayuda/facturacion/' },
    { titulo: 'Contact', descripcion: 'Reach us by phone, WhatsApp or email.', icono: 'phone', href: '/ayuda/contacto/' },
  ],
  contactEyebrow: 'Didn’t find what you were looking for?',
  contactText: 'Our team is available Monday through Sunday, 6:00 am to 10:00 pm.',
  contactCta: 'Contact Aerus',
  contactHref: '/ayuda/contacto/',
  faqCta: 'FAQ',
  faqHref: '/ayuda/faq/',
}

const defaults: PageDefaults<AyudaContent> = { es, en }
export default defaults
