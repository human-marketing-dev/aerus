import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { SanityLive } from '@/sanity/lib/live'
import { getConfig } from '@/lib/config'
import '../globals.css'
import ScrollAnimations from '@/components/ScrollAnimations'
import { LANGS, isLang } from '@/lib/i18n'
import { SITE_INDEXABLE } from '@/lib/indexing'

// Solo /es y /en existen como rutas internas: cualquier otro valor responde 404 con el
// notFound() de abajo. OJO: no usar `dynamicParams = false` aquí. Con eso Next se niega a
// regenerar las páginas cuando el webhook de Sanity las invalida y responde 404 en todo el sitio.

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }))
}


export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const { seo } = await getConfig(lang)
  return {
    metadataBase: new URL('https://aerus.mx'),
    // SEO por defecto (páginas sin SEO propio): Sanity → Configuración general → SEO
    title: seo.metaTitle,
    description: seo.metaDescription,
    ...(seo.ogImage ? { openGraph: { images: [{ url: seo.ogImage.src, width: 1200 }] } } : {}),
    // Sitio aún no lanzado: no indexar (ver lib/indexing.ts)
    ...(SITE_INDEXABLE ? {} : { robots: { index: false, follow: false } }),
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const { isEnabled: isDraftMode } = await draftMode()
  return (
    <html lang={lang}>
      <body>
        {children}
        <ScrollAnimations/>
        {/* Contenido de Sanity: se refresca solo al publicar */}
        <SanityLive />
        {/* Vista previa desde el panel de Sanity */}
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  )
}
