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
import defaults from '@/content/pages/on-demand-charter'

const PATH = '/on-demand/charter/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', onDemand: 'On Demand' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', onDemand: 'On Demand' },
}

/** Enlace para marcar a partir del teléfono tal como se muestra (+52 812 682 3501 → tel:+528126823501) */
const tel = (telefono: string) => `tel:${telefono.replace(/[^\d+]/g, '')}`

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/charter'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaCharter', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function CharterPage({ params }: PageProps<'/[lang]/on-demand/charter'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaCharter', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/on-demand/')}>{ui.onDemand}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                {/* Para quién es */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.usosSub}</p>
                      <h2 className="docs-h2">{t.usosTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {t.usos.map((u) => (
                      <div key={u.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={u.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{u.titulo}</p>
                        <p className="corp-uso-desc">{u.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qué incluye */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.incluyeSub}</p>
                      <h2 className="docs-h2">{t.incluyeTitulo}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.incluye.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>

                {/* Cómo funciona */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitulo}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((p, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{p.titulo}</p>
                          <p className="fact-step-desc">{p.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.ctaDesc}
                  </p>
                  <Link
                    href={lp(lang, t.ctaHref)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaBtn}
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitulo}</p>
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

                <div className="mro-contact-card" style={{ marginTop: 16 }}>
                  <p className="mro-contact-card-tag">{t.contactoTag}</p>
                  <p className="mro-contact-card-title">{t.contactoTitulo}</p>
                  <div className="mro-contact-row">
                    <Icon name="mail" size={14} stroke={1.5} />
                    <a href={`mailto:${t.email}`}>{t.email}</a>
                  </div>
                  <div className="mro-contact-row">
                    <Icon name="phone" size={14} stroke={1.5} />
                    <a href={tel(t.telefono)}>{t.telefono}</a>
                  </div>
                  <p className="mro-contact-horario">{t.horario}</p>
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
