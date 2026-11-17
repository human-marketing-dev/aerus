import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FaqAccordion from '@/components/FaqAccordion'
import { isLang, lp, LOCALE_TAG } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/ayuda-faq'

const PATH = '/ayuda/faq/'
const SITE = 'https://aerus.mx'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/faq'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaFaq', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function FaqPage({ params }: PageProps<'/[lang]/ayuda/faq'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyudaFaq', lang, defaults)
  const ui = UI[lang]
  const categorias = t.categorias
  const allItems = categorias.flatMap(cat => cat.items)

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LOCALE_TAG[lang],
    mainEntity: allItems.map(item => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: `${SITE}${lp(lang, '/')}` },
      { '@type': 'ListItem', position: 2, name: ui.help, item: `${SITE}${lp(lang, '/ayuda/')}` },
      { '@type': 'ListItem', position: 3, name: t.crumb, item: `${SITE}${lp(lang, PATH)}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Nav lang={lang} />
      <main>
        <section className="faq-hero">
          <div className="container faq-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{ui.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              {t.eyebrow}
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="section-pad faq-body">
          <div className="container">
            <FaqAccordion categorias={categorias} />
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
