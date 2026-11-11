import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getFaqCategorias } from '@/lib/faq-mock'
import FaqAccordion from '@/components/FaqAccordion'
import { alternates, isLang, lp, LOCALE_TAG } from '@/lib/i18n'

const PATH = '/ayuda/faq/'
const SITE = 'https://aerus.mx'

const es = {
  metaTitle: 'Preguntas Frecuentes | Aerus',
  metaDescription:
    'Respuestas a las preguntas más comunes sobre reservas, equipaje, cambios, abordaje y pagos con Aerus.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Preguntas frecuentes',
  eyebrow: 'Ayuda',
  titleA: 'Preguntas',
  titleB: 'frecuentes',
  intro: 'Encuentra respuestas a las dudas más comunes sobre vuelos, equipaje, pagos y más.',
}

const en: typeof es = {
  metaTitle: 'Frequently Asked Questions | Aerus',
  metaDescription:
    'Answers to the most common questions about bookings, baggage, changes, boarding and payments with Aerus.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Frequently asked questions',
  eyebrow: 'Help',
  titleA: 'Frequently asked',
  titleB: 'questions',
  intro: 'Find answers to the most common questions about flights, baggage, payments and more.',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/faq'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

export default async function FaqPage({ params }: PageProps<'/[lang]/ayuda/faq'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const categorias = getFaqCategorias(lang)
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
      { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE}${lp(lang, '/')}` },
      { '@type': 'ListItem', position: 2, name: t.help, item: `${SITE}${lp(lang, '/ayuda/')}` },
      { '@type': 'ListItem', position: 3, name: t.current, item: `${SITE}${lp(lang, PATH)}` },
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
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{t.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.current}</span>
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
