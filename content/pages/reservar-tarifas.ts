// Textos de la página "Tarifas y familias" (/reservar/tarifas).
// Se editan en Sanity (Páginas → Reservar → Tarifas y familias); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/reservar.ts.
import type { PageDefaults } from '@/lib/content'
import type { ProximamenteContent } from './reservar'

const defaults: PageDefaults<ProximamenteContent> = {
  es: {
    seo: {
      metaTitle: 'Tarifas y familias | Aerus',
      metaDescription: 'Conoce las tarifas y familias tarifarias de Aerus.',
    },
    eyebrow: 'Reservar',
    title: 'Tarifas y familias',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    seo: {
      metaTitle: 'Fares and Fare Families | Aerus',
      metaDescription: 'Learn about Aerus fares and fare families.',
    },
    eyebrow: 'Book',
    title: 'Fares and fare families',
    wip: 'This page will be available soon.',
  },
}
export default defaults
