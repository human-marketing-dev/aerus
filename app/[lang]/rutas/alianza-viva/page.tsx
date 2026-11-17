import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { isLang, lp } from '@/lib/i18n'
import { getRouteLinks } from '@/lib/red'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/alianza-viva'

const PATH = '/rutas/alianza-viva/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', routes: 'Rutas' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', routes: 'Routes' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas/alianza-viva'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAlianzaViva', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function AlianzaVivaPage({ params }: PageProps<'/[lang]/rutas/alianza-viva'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAlianzaViva', lang, defaults)
  const ui = UI[lang]

  // Rutas Aerus y ciudades que conectan en cada hub: se derivan de la red de rutas (Sanity)
  const links = await getRouteLinks(lang)
  const RUTAS_AERUS = links.map(r => ({ label: `${r.origen} – ${r.destino}`, href: `/rutas/${r.slug}/` }))
  const rutasDesde = (ciudad: string) =>
    links
      .flatMap(r => (r.origen === ciudad ? [r.destino] : r.destino === ciudad ? [r.origen] : []))
      .sort((x, y) => x.localeCompare(y, 'es'))

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* Hero */}
        <section className="viva-hero">
          <div className="container viva-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/rutas/')}>{ui.routes}</Link>
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

        <section className="viva-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Cómo funciona */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="swap" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.howSub}</p>
                      <h2 className="docs-h2">{t.howTitle}</h2>
                    </div>
                  </div>
                  <ol className="fact-steps">
                    {t.comoFunciona.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Hubs de conexión */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="pin" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.hubsSub}</p>
                      <h2 className="docs-h2">{t.hubsTitle}</h2>
                    </div>
                  </div>
                  <div className="viva-hubs-grid">
                    {t.hubs.map(h => (
                      <div key={h.destino.slug} className="viva-hub-card">
                        <div className="viva-hub-header">
                          <span className="viva-hub-iata">{h.destino.iata}</span>
                          <p className="viva-hub-ciudad">{h.destino.nombre}</p>
                        </div>
                        <p className="viva-hub-desc">{h.desc}</p>
                        <div className="viva-hub-rutas">
                          <p className="viva-hub-rutas-label">{t.hubRoutesLabel}</p>
                          <div className="viva-hub-chips">
                            {rutasDesde(h.destino.nombre).map(dest => (
                              <span key={dest} className="viva-hub-chip">{dest}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.benefitsSub}</p>
                      <h2 className="docs-h2">{t.benefitsTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.beneficios.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.helpTitle}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.helpDesc}
                  </p>
                  <Link
                    href={lp(lang, t.helpHref)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.helpCta}
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.aerusRoutes}</p>
                  <ul className="docs-related-list">
                    {RUTAS_AERUS.map(r => (
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
