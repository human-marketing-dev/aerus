import 'server-only'
import { getTextos, type PageDefaults } from './content'
import type { Lang } from './i18n'

// Textos de las PLANTILLAS de página (documentos "plantilla…" de Sanity): textos comunes a todas
// las páginas de un tipo (p. ej. todas las páginas de destino). A diferencia de getPage(), no
// llevan SEO propio: el SEO de cada destino/ruta vive en su documento de la red.
//
// Igual que getPage(): lo editado en Sanity manda; si falta un campo, se usa el archivo de
// contenido (content/pages/plantilla-*.ts).

/** Textos de una plantilla en el idioma pedido. `id` es el nombre del esquema. */
export async function getPlantilla<T extends object>(
  id: string,
  lang: Lang,
  defaults: PageDefaults<T>,
): Promise<T> {
  return getTextos(id, lang, defaults)
}

/** Reemplaza los marcadores {nombre}, {n}, … de un texto editable. */
export function fill(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m))
}

/** Elige la forma singular (n = 1) o plural (cualquier otro n) y reemplaza {n}. */
export function plural(n: number, one: string, other: string, vars: Record<string, string | number> = {}): string {
  return fill(n !== 1 ? other : one, { ...vars, n })
}
