// Textos de la página "Mi reserva" (/mi-reserva).
// Se editan en Sanity (Páginas → Reservar → Mi reserva); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/reservar.ts.
import type { PageDefaults } from '@/lib/content'
import type { ProximamenteContent } from './reservar'

const defaults: PageDefaults<ProximamenteContent> = {
  es: {
    seo: {
      metaTitle: 'Mi Reserva | Aerus',
      metaDescription: 'Consulta y gestiona tu reserva de Aerus.',
    },
    eyebrow: 'Gestiona tu viaje',
    title: 'Mi Reserva',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    seo: {
      metaTitle: 'My Booking | Aerus',
      metaDescription: 'View and manage your Aerus booking.',
    },
    eyebrow: 'Manage your trip',
    title: 'My Booking',
    wip: 'This page will be available soon.',
  },
}
export default defaults
