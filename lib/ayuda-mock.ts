import type { Lang } from './i18n'

export interface AyudaCategoria {
  titulo: string
  slug: string
  descripcion: string
  icono: string
}

export const AYUDA_CATEGORIAS: AyudaCategoria[] = [
  {
    titulo: 'Preguntas frecuentes',
    slug: 'faq',
    descripcion: 'Reservas, cambios, cancelaciones y más respondidas.',
    icono: 'ticket',
  },
  {
    titulo: 'Documentos para viajar',
    slug: 'documentos-para-viajar',
    descripcion: 'Identificación y documentos requeridos según tu destino.',
    icono: 'shield',
  },
  {
    titulo: 'Equipaje',
    slug: 'equipaje',
    descripcion: 'Políticas de equipaje de mano y documentado.',
    icono: 'luggage',
  },
  {
    titulo: 'Tiempos de llegada al aeropuerto',
    slug: 'tiempos-aeropuerto',
    descripcion: 'Con cuánta anticipación presentarte antes de tu vuelo.',
    icono: 'clock',
  },
  {
    titulo: 'Requerimientos especiales',
    slug: 'requerimientos-especiales',
    descripcion: 'Asistencia, movilidad reducida y necesidades especiales.',
    icono: 'support',
  },
  {
    titulo: 'Viajar con mascota',
    slug: 'viajar-con-mascota',
    descripcion: 'Requisitos y políticas para llevar a tu mascota a bordo.',
    icono: 'plane',
  },
  {
    titulo: 'Facturación',
    slug: 'facturacion',
    descripcion: 'Solicita y descarga la factura de tus vuelos.',
    icono: 'cash',
  },
  {
    titulo: 'Contacto',
    slug: 'contacto',
    descripcion: 'Habla con nosotros por teléfono, WhatsApp o correo.',
    icono: 'phone',
  },
]

export const AYUDA_CATEGORIAS_EN: AyudaCategoria[] = [
  {
    titulo: 'Frequently asked questions',
    slug: 'faq',
    descripcion: 'Answers about bookings, changes, cancellations and more.',
    icono: 'ticket',
  },
  {
    titulo: 'Travel documents',
    slug: 'documentos-para-viajar',
    descripcion: 'ID and documents required for your destination.',
    icono: 'shield',
  },
  {
    titulo: 'Baggage',
    slug: 'equipaje',
    descripcion: 'Carry-on and checked baggage policies.',
    icono: 'luggage',
  },
  {
    titulo: 'Airport arrival times',
    slug: 'tiempos-aeropuerto',
    descripcion: 'How early to arrive before your flight.',
    icono: 'clock',
  },
  {
    titulo: 'Special assistance',
    slug: 'requerimientos-especiales',
    descripcion: 'Assistance, reduced mobility and special needs.',
    icono: 'support',
  },
  {
    titulo: 'Traveling with pets',
    slug: 'viajar-con-mascota',
    descripcion: 'Requirements and policies for bringing your pet on board.',
    icono: 'plane',
  },
  {
    titulo: 'Invoicing',
    slug: 'facturacion',
    descripcion: 'Request and download invoices for your flights.',
    icono: 'cash',
  },
  {
    titulo: 'Contact',
    slug: 'contacto',
    descripcion: 'Reach us by phone, WhatsApp or email.',
    icono: 'phone',
  },
]

/** Categorías del centro de ayuda en el idioma pedido. `slug` es el segmento canónico (español). */
export function getAyudaCategorias(lang: Lang = 'es'): AyudaCategoria[] {
  return lang === 'en' ? AYUDA_CATEGORIAS_EN : AYUDA_CATEGORIAS
}
