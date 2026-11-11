import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import ScrollAnimations from '@/components/ScrollAnimations'
import { LANGS, isLang } from '@/lib/i18n'

// Solo /es y /en existen como rutas internas; cualquier otro valor es 404
export const dynamicParams = false

export function generateStaticParams() {
  return LANGS.map(lang => ({ lang }))
}

const META = {
  es: {
    title: 'Aerus · Descubre el futuro',
    description: 'Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.',
  },
  en: {
    title: 'Aerus · Discover the future',
    description: 'A Mexican airline focused on agility, flexibility and innovation. Reimagine the new way to travel.',
  },
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    metadataBase: new URL('https://aerus.mx'),
    ...META[lang],
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <html lang={lang}>
      <body>
        {children}
        <ScrollAnimations/>
      </body>
    </html>
  )
}
