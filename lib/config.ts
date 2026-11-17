import 'server-only'
import { getPage } from './content'
import type { Lang } from './i18n'
import defaults from '@/content/pages/configuracion'

/** Configuración general del sitio (menú, aviso, footer, redes, boletín, SEO por defecto). */
export function getConfig(lang: Lang) {
  return getPage('configuracion', lang, defaults)
}
