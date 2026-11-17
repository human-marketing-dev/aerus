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
import defaults from '@/content/pages/ayuda-requerimientos'

const PATH = '/ayuda/requerimientos-especiales/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/requerimientos-especiales'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaRequerimientos', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function RequerimientosEspecialesPage({ params }: PageProps<'/[lang]/ayuda/requerimientos-especiales'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyudaRequerimientos', lang, defaults)
  const ui = UI[lang]
  const secciones = t.secciones

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="req-hero">
          <div className="container req-hero-inner">
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

        <section className="section-pad req-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div>
                {secciones.map((sec) => (
                  <div
                    id={sec.ancla}
                    key={sec.ancla}
                    className="docs-section req-section"
                  >
                    <div className="docs-section-header">
                      <div className="docs-section-icon">
                        <Icon name={sec.icono} size={20} stroke={1.5} />
                      </div>
                      <h2 className="docs-h2">{sec.titulo}</h2>
                    </div>
                    <ul className="docs-list">
                      {sec.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    {sec.nota && (
                      <div className="docs-callout">
                        <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                        <p>{sec.nota}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Bottom CTA */}
                <div className="req-cta-card">
                  <div className="req-cta-icon">
                    <Icon name="phone" size={22} stroke={1.5} />
                  </div>
                  <div className="req-cta-body">
                    <h3 className="req-cta-title">{t.ctaTitle}</h3>
                    <p className="req-cta-text">
                      {t.ctaText}
                    </p>
                    <Link href={lp(lang, t.contactHref)} className="btn btn-primary">
                      {t.contactCta}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <h3 className="docs-sidebar-title">{t.onThisPage}</h3>
                  <ul className="req-nav-list">
                    {secciones.map((sec) => (
                      <li key={sec.ancla}>
                        <a href={`#${sec.ancla}`} className="req-nav-link">
                          {sec.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="docs-sidebar-cta">
                    <p className="docs-sidebar-cta-text">
                      {t.sidebarCta}
                    </p>
                    <Link href={lp(lang, t.contactHref)} className="btn btn-primary docs-sidebar-btn">
                      {t.sidebarBtn}
                    </Link>
                  </div>
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
