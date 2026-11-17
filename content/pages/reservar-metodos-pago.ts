// Textos de la página "Métodos de pago" (/reservar/metodos-de-pago).
// Se editan en Sanity (Páginas → Reservar → Métodos de pago); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/reservar.ts.
import type { PageDefaults } from '@/lib/content'
import type { ProximamenteContent } from './reservar'

const defaults: PageDefaults<ProximamenteContent> = {
  es: {
    seo: {
      metaTitle: 'Métodos de pago | Aerus',
      metaDescription: 'Conoce los métodos de pago disponibles para comprar tu boleto Aerus.',
    },
    eyebrow: 'Reservar',
    title: 'Métodos de pago',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    seo: {
      metaTitle: 'Payment Methods | Aerus',
      metaDescription: 'Learn about the payment methods available to buy your Aerus ticket.',
    },
    eyebrow: 'Book',
    title: 'Payment methods',
    wip: 'This page will be available soon.',
  },
}
export default defaults
