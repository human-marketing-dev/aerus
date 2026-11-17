import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/ayuda-facturacion'

const PATH = '/ayuda/facturacion/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/facturacion'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaFacturacion', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function FacturacionPage({ params }: PageProps<'/[lang]/ayuda/facturacion'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyudaFacturacion', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="fact-hero">
          <div className="container fact-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{ui.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="section-pad fact-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div className="fact-content">

                {/* Steps */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.stepsTitle}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.descripcion}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Data required */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="lock" size={20} stroke={1.5} />
                    </div>
                    <h2 className="docs-h2">{t.dataTitle}</h2>
                  </div>
                  <ul className="docs-list">
                    {t.datosNecesarios.map((dato, i) => (
                      <li key={i}>{dato}</li>
                    ))}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>
                      {t.dataNote}
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>{t.faqTitle}</h2>
                  <dl className="destino-faq">
                    {t.preguntas.map((item, i) => (
                      <div key={i} className="destino-faq-item">
                        <dt className="destino-faq-q">{item.pregunta}</dt>
                        <dd className="destino-faq-a">{item.respuesta}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

              </div>

              {/* Sidebar — portal CTA */}
              <aside className="fact-sidebar">
                <div className="fact-portal-card">
                  <p className="fact-portal-tag">{t.portalTag}</p>
                  <h3 className="fact-portal-title">{t.portalTitle}</h3>
                  <p className="fact-portal-desc">
                    {t.portalDesc}
                  </p>

                  <a
                    href={t.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary fact-portal-btn"
                  >
                    {t.portalBtn}
                    <span className="fact-portal-btn-arr" aria-hidden="true">↗</span>
                  </a>

                  <div className="fact-portal-rfc-row">
                    <span className="fact-portal-rfc-label">{t.rfcLabel}</span>
                    <span className="fact-portal-rfc-val">{t.rfc}</span>
                  </div>

                  <p className="fact-portal-note">
                    {t.portalNote}
                  </p>
                </div>

                <div className="fact-sidebar-help">
                  <p className="fact-sidebar-help-text">{t.helpText}</p>
                  <Link href={lp(lang, t.contactHref)} className="docs-related-link" style={{ borderBottom: 'none' }}>
                    <span>{t.contactCta}</span>
                    <span className="docs-related-arr" aria-hidden="true">›</span>
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
