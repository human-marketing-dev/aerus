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
import defaults from '@/content/pages/on-demand-charter-cotizar'

const PATH = '/on-demand/charter/cotizar/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', onDemand: 'On Demand', charter: 'Aerus Charter' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', onDemand: 'On Demand', charter: 'Aerus Charter' },
}

/** Enlace para marcar a partir del teléfono tal como se muestra (+52 812 682 3501 → tel:+528126823501) */
const tel = (telefono: string) => `tel:${telefono.replace(/[^\d+]/g, '')}`

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/charter/cotizar'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaCharterCotizar', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function CotizarCharterPage({ params }: PageProps<'/[lang]/on-demand/charter/cotizar'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaCharterCotizar', lang, defaults)
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
              <Link href={lp(lang, '/on-demand/charter/')}>{ui.charter}</Link>
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

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="mail" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.datosSub}</p>
                      <h2 className="docs-h2">{t.datosTitulo}</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)', marginBottom: 20 }}>
                    {t.datosIntro}
                  </p>
                  <ul className="docs-list">
                    {t.datos.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="clock" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.tiemposSub}</p>
                      <h2 className="docs-h2">{t.tiemposTitulo}</h2>
                    </div>
                  </div>
                  <div className="docs-callout">
                    {t.tiemposA}<strong>{t.tiemposStrong}</strong>{t.tiemposB}
                  </div>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.propuestaSub}</p>
                      <h2 className="docs-h2">{t.propuestaTitulo}</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)' }}>
                    {t.propuestaTexto}
                  </p>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <a
                    href={`mailto:${t.email}?subject=${t.mailSubject}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 10 }}
                  >
                    <Icon name="mail" size={15} stroke={1.5} />
                    {t.email}
                  </a>
                  <a
                    href={tel(t.telefono)}
                    className="btn btn-on-dark"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    <Icon name="phone" size={15} stroke={1.5} />
                    {t.telefono}
                  </a>
                  <p style={{ font: '400 12px/1.4 var(--font-body)', color: 'rgba(255,255,255,0.30)', marginTop: 14 }}>
                    {t.horario}
                  </p>
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
