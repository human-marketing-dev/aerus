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
import defaults from '@/content/pages/experiencia-proceso-agil'

const PATH = '/experiencia/proceso-agil/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', section: 'Experiencia' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', section: 'Experience' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/proceso-agil'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaProcesoAgil', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function ProcesoAgilPage({ params }: PageProps<'/[lang]/experiencia/proceso-agil'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaProcesoAgil', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/experiencia/')}>{ui.section}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.heroTitlePre}<span className="accent">{t.heroTitleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.heroIntro}
            </p>
          </div>
        </section>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Comparación */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="clock" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.comparacionSubtitulo}</p>
                      <h2 className="docs-h2">{t.comparacionTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-comparacion-table">
                    <div className="exp-comparacion-header">
                      <span></span>
                      <span>{t.colGrande}</span>
                      <span>{t.colAerus}</span>
                    </div>
                    {t.comparacion.map((c) => (
                      <div key={c.aspecto} className="exp-comparacion-row">
                        <span className="exp-comp-aspecto">{c.aspecto}</span>
                        <span className="exp-comp-grande">{c.grande}</span>
                        <span className="exp-comp-aerus">{c.aerus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pasos */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 28 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane-takeoff" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.pasosSubtitulo}</p>
                      <h2 className="docs-h2">{t.pasosTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-pasos-grid">
                    {t.pasos.map((p) => (
                      <div key={p.paso} className="exp-paso-card">
                        <div className="exp-paso-icon">
                          <Icon name={p.icono} size={20} stroke={1.5} />
                        </div>
                        <span className="exp-paso-tiempo">{p.paso}</span>
                        <p className="exp-paso-titulo">{p.titulo}</p>
                        <p className="exp-paso-desc">{p.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.relacionadosTitle}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map((s) => (
                      <li key={s.href}>
                        <Link href={lp(lang, s.href)} className="docs-related-link">
                          <span>{s.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <Link href={lp(lang, t.ctaHref)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {t.ctaButton}
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
