import type { Metadata } from 'next'
import { alternates, type Lang } from './i18n'
import type { Seo } from './red'
import type { PageSeo } from './content'

/** Metadata de Next a partir del SEO capturado en Sanity. `path` es la ruta canónica en español. */
export function seoMetadata(seo: Seo | PageSeo, lang: Lang, path: string): Metadata {
  const s: Seo = 'metaTitle' in seo
    ? {
        title: seo.metaTitle,
        description: seo.metaDescription,
        ogImage: seo.ogImage?.src ?? null,
        noindex: !!seo.noindex,
      }
    : seo
  return {
    title: s.title,
    description: s.description,
    alternates: alternates(lang, path),
    openGraph: {
      title: s.title,
      description: s.description,
      ...(s.ogImage ? { images: [{ url: s.ogImage, width: 1200 }] } : {}),
      locale: lang === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
    ...(s.noindex ? { robots: { index: false, follow: true } } : {}),
  }
}
