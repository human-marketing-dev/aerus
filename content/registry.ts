// Registro de páginas fijas editables en Sanity.
// Cada grupo registra sus páginas en content/grupos/<grupo>.ts; de esta lista salen el menú
// del panel, la vista previa, el esquema de Sanity y la carga inicial (scripts/seed-pages.ts).
import type { PageEntry } from './page-entry'
import { aPorIdioma } from '@/sanity/schemaTypes/pages/_porIdioma'
import { paginas as general } from './grupos/general'
import { paginas as inicio } from './grupos/inicio'
import { paginas as rutasDestinos } from './grupos/rutas-destinos'
import { paginas as reservarExperiencia } from './grupos/reservar-experiencia'
import { paginas as onDemand } from './grupos/on-demand'
import { paginas as ayuda } from './grupos/ayuda'
import { paginas as mro } from './grupos/mro'
import { paginas as nosotrosLegales } from './grupos/nosotros-legales'

export type { PageEntry }

export const PAGES: PageEntry[] = [
  ...general, ...inicio, ...rutasDestinos, ...reservarExperiencia, ...onDemand, ...ayuda, ...mro, ...nosotrosLegales,
]

/** Orden de las secciones en el menú del panel */
export const SECCIONES = [
  'General',
  'Inicio',
  'Rutas y destinos',
  'Reservar',
  'Experiencia',
  'On Demand',
  'Ayuda',
  'MRO',
  'Nosotros',
  'Legales',
]

export const PAGE_TYPES = new Set(PAGES.map(p => p.schema.name))

export const esPorIdioma = (p: PageEntry) => (p.modo ?? 'porIdioma') === 'porIdioma'

/** IDs de los documentos de una página en Sanity */
export const docIds = (p: PageEntry) =>
  esPorIdioma(p) ? { es: `${p.schema.name}-es`, en: `${p.schema.name}-en` } : { es: p.schema.name, en: p.schema.name }

/** Esquemas tal como se registran en Sanity (convertidos a "un documento por idioma" cuando aplica) */
export const STUDIO_SCHEMAS = PAGES.map(p => (esPorIdioma(p) ? aPorIdioma(p.schema) : p.schema))
