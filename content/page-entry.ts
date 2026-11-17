import type { DocumentDefinition } from 'sanity'
import type { PageDefaults } from '@/lib/content'

export type PageEntry = {
  /** Esquema del documento (su `name` es también el ID del documento en Sanity) */
  schema: DocumentDefinition
  /** Textos actuales: respaldo y carga inicial */
  defaults: PageDefaults<object>
  /** Ruta canónica (español) de la página; null para configuración general / plantillas */
  path: string | null
  /** Agrupación en el menú del panel (ver SECCIONES en content/registry.ts) */
  seccion: string
  /**
   * Cómo se guardan los idiomas en Sanity:
   * - 'porIdioma' (por defecto): dos documentos, <nombre>-es y <nombre>-en. En inglés solo se
   *   capturan textos; imágenes, enlaces y datos se toman de español. Cuesta pocos "atributos".
   * - 'bilingue': un documento con ES/EN lado a lado en cada campo. Más cómodo de editar, pero
   *   cuesta ~4 veces más atributos: reservado a las páginas que se editan seguido.
   */
  modo?: 'porIdioma' | 'bilingue'
}
