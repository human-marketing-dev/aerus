// Textos de la página "Reservar" (/reservar).
// Se editan en Sanity (Páginas → Reservar → Reservar); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/reservar.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

/** Página con aviso de "próximamente" (Reservar, Métodos de pago, Tarifas, Check-in, Mi reserva). */
export type ProximamenteContent = {
  seo: PageSeo
  eyebrow: string
  title: string
  wip: string
}

const defaults: PageDefaults<ProximamenteContent> = {
  es: {
    seo: {
      metaTitle: 'Reservar | Aerus',
      metaDescription: 'Compra tu boleto y reserva tu vuelo con Aerus.',
    },
    eyebrow: 'Compra tu boleto',
    title: 'Reservar',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    seo: {
      metaTitle: 'Book a Flight | Aerus',
      metaDescription: 'Buy your ticket and book your flight with Aerus.',
    },
    eyebrow: 'Buy your ticket',
    title: 'Book a flight',
    wip: 'This page will be available soon.',
  },
}
export default defaults
