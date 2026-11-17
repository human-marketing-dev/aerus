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
import defaults from '@/content/pages/on-demand-empresas'

const PATH = '/on-demand/empresas/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', onDemand: 'On Demand' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', onDemand: 'On Demand' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/empresas'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaEmpresas', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function EmpresasPage({ params }: PageProps<'/[lang]/on-demand/empresas'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaEmpresas', lang, defaults)
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

                {/* Soluciones */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="shield" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.solucionesSub}</p>
                      <h2 className="docs-h2">{t.solucionesTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {t.soluciones.map((s) => (
                      <div key={s.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={s.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{s.titulo}</p>
                        <p className="corp-uso-desc">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Para quién */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.paraQuienSub}</p>
                      <h2 className="docs-h2">{t.paraQuienTitulo}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.paraQuien.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>

                {/* Diferencia con Flight Pass */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="ticket" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.compararSub}</p>
                      <h2 className="docs-h2">{t.compararTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-compare-table">
                    <div className="corp-compare-header">
                      <span />
                      <span>{t.colEmpresa}</span>
                      <span>{t.colPass}</span>
                    </div>
                    {t.comparar.map((row) => (
                      <div key={row.aspecto} className="corp-compare-row">
                        <span className="corp-compare-aspecto">{row.aspecto}</span>
                        <span className="corp-compare-val">{row.empresa}</span>
                        <span className="corp-compare-val">{row.pass}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.ctaDesc}
                  </p>
                  <a
                    href={`mailto:${t.email}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaBtn.replace('{email}', t.email)}
                  </a>
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
