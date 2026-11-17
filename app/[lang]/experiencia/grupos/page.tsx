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
import defaults from '@/content/pages/experiencia-grupos'

const PATH = '/experiencia/grupos/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', section: 'Experiencia' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', section: 'Experience' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/grupos'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaGrupos', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function GruposPage({ params }: PageProps<'/[lang]/experiencia/grupos'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaGrupos', lang, defaults)
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
                {/* Tipos de grupo */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.tiposSubtitulo}</p>
                      <h2 className="docs-h2">{t.tiposTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-grupos-tipos-grid">
                    {t.tipos.map((tipo) => (
                      <div key={tipo.titulo} className="exp-grupos-tipo-card">
                        <div className="exp-grupos-tipo-icon">
                          <Icon name={tipo.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="exp-grupos-tipo-titulo">{tipo.titulo}</p>
                        <p className="exp-grupos-tipo-desc">{tipo.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.beneficiosSubtitulo}</p>
                      <h2 className="docs-h2">{t.beneficiosTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.beneficios.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>

                {/* Proceso */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitle}</h2>
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
              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <a
                    href={lp(lang, t.ctaHref)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaButton}
                  </a>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitle}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map((r) => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
