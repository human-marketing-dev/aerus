// Textos de la página "Check-in" (/check-in).
// Se editan en Sanity (Páginas → Reservar → Check-in); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/reservar.ts.
import type { PageDefaults } from '@/lib/content'
import type { ProximamenteContent } from './reservar'

const defaults: PageDefaults<ProximamenteContent> = {
  es: {
    seo: {
      metaTitle: 'Check-in | Aerus',
      metaDescription: 'Haz el check-in de tu vuelo Aerus.',
    },
    eyebrow: 'Viaja con Aerus',
    title: 'Check-in',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    seo: {
      metaTitle: 'Check-in | Aerus',
      metaDescription: 'Check in for your Aerus flight.',
    },
    eyebrow: 'Fly with Aerus',
    title: 'Check-in',
    wip: 'This page will be available soon.',
  },
}
export default defaults
