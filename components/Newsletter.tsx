import NewsletterClient from './NewsletterClient'
import { getConfig } from '@/lib/config'
import type { Lang } from '@/lib/i18n'

// Sección del boletín. Textos: Sanity → Configuración general → Boletín.
export default async function Newsletter({ lang }: { lang: Lang }) {
  const { boletin } = await getConfig(lang)
  return <NewsletterClient t={boletin} />
}
