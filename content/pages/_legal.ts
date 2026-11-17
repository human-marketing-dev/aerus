// Forma común de las páginas legales (aviso de privacidad, cookies, términos y condiciones).
// Cada sección del documento es un elemento de `secciones`: de ahí salen el texto de la página
// (<section id={ancla}> con su título y cuerpo) y el índice lateral (`indice` → #ancla).
import type { PageSeo } from '@/lib/content'
import type { PTBlock } from '@/content/richtext'

export type SeccionLegal = {
  /** id del <section>, usado por el índice lateral (#ancla) */
  ancla: string
  /** Texto en el índice lateral */
  indice: string
  /** Título (h2) de la sección */
  titulo: string
  /** Cuerpo de la sección (texto enriquecido) */
  cuerpo: PTBlock[]
}

export type DocLegal = { label: string; href: string }

export type LegalBase<S extends SeccionLegal = SeccionLegal> = {
  seo: PageSeo
  title: string
  meta: string
  /** Nota sobre la traducción (solo se muestra si tiene texto; normalmente solo en inglés) */
  avisoTraduccion: string
  secciones: S[]
  tocTitle: string
  otherTitle: string
  otherDocs: DocLegal[]
}

export const AVISO_TRADUCCION_EN =
  'This English translation is provided for convenience only. In case of discrepancy, the Spanish version prevails.'
