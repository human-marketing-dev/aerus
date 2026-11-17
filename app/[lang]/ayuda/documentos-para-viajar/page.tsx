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
import defaults from '@/content/pages/ayuda-documentos'

const PATH = '/ayuda/documentos-para-viajar/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/documentos-para-viajar'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaDocumentos', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function DocumentosPage({ params }: PageProps<'/[lang]/ayuda/documentos-para-viajar'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyudaDocumentos', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="docs-hero">
          <div className="container docs-hero-inner">
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

        <section className="section-pad docs-body">
          <div className="container">
            <div className="docs-layout">
              <div className="docs-content">
                {t.secciones.map((sec, i) => (
                  <div key={i} className="docs-section">
                    <div className="docs-section-header">
                      <div className="docs-section-icon">
                        <Icon name={sec.icono} size={20} stroke={1.5} />
                      </div>
                      <div>
                        <p className="docs-subtitulo">{sec.subtitulo}</p>
                        <h2 className="docs-h2">{sec.titulo}</h2>
                      </div>
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
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <h3 className="docs-sidebar-title">{t.sidebarTitle}</h3>
                  <ul className="docs-related-list">
                    {t.relacionados.map(r => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="docs-sidebar-cta">
                    <p className="docs-sidebar-cta-text">
                      {t.sidebarCta}
                    </p>
                    <Link href={lp(lang, t.contactHref)} className="btn btn-primary docs-sidebar-btn">
                      {t.contactCta}
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
