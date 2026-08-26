import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FAQ_CATEGORIAS } from '@/lib/faq-mock'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Aerus',
  description:
    'Respuestas a las preguntas más comunes sobre reservas, equipaje, cambios, abordaje y pagos con Aerus.',
}

const SITE = 'https://aerus.mx'

export default function FaqPage() {
  const allItems = FAQ_CATEGORIAS.flatMap(cat => cat.items)

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Ayuda', item: `${SITE}/ayuda/` },
      { '@type': 'ListItem', position: 3, name: 'Preguntas frecuentes', item: `${SITE}/ayuda/faq/` },
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
      <Nav />
      <main>
        <section className="faq-hero">
          <div className="container faq-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Preguntas frecuentes</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              Ayuda
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Preguntas <span className="accent">frecuentes</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Encuentra respuestas a las dudas más comunes sobre vuelos, equipaje, pagos y más.
            </p>
          </div>
        </section>

        <section className="section-pad faq-body">
          <div className="container">
            <FaqAccordion categorias={FAQ_CATEGORIAS} />
          </div>
        </section>
      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
