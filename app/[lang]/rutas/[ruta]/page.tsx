import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { getRuta, getRutaSlugs } from '@/lib/red'
import { isLang, lp } from '@/lib/i18n'
import { seoMetadata } from '@/lib/seo'
import { redirectIfConfigured } from '@/lib/redirects'
import { fill, getPlantilla } from '@/lib/plantillas'
import defaults from '@/content/pages/plantilla-ruta'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', routes: 'Rutas' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', routes: 'Routes' },
}

// Rutas nuevas publicadas en Sanity se generan al primer visita (no hace falta rebuild)
export const dynamicParams = true

export async function generateStaticParams() {
  return (await getRutaSlugs()).map(ruta => ({ ruta }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas/[ruta]'>): Promise<Metadata> {
  const { lang, ruta: slug } = await params
  if (!isLang(lang)) return {}
  const r = await getRuta(slug, lang)
  if (!r) return {}
  return seoMetadata(r.seo, lang, `/rutas/${r.slug}/`)
}

export default async function RutaPage({ params }: PageProps<'/[lang]/rutas/[ruta]'>) {
  const { lang, ruta: slug } = await params
  if (!isLang(lang)) notFound()
  const ui = UI[lang]
  const r = await getRuta(slug, lang)
  if (!r) {
    await redirectIfConfigured(lp(lang, `/rutas/${slug}`))
    notFound()
  }
  const t = await getPlantilla('plantillaRuta', lang, defaults)

  const duracionLabel =
    r.duracionMin < 60
      ? `${r.duracionMin} min`
      : r.duracionMin % 60 === 0
        ? `${Math.floor(r.duracionMin / 60)}h`
        : `${Math.floor(r.duracionMin / 60)}h ${r.duracionMin % 60}min`

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* ── Hero ── */}
        <section className="ruta-hero">
          <div className="container ruta-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/rutas/')}>{ui.routes}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{r.label}</span>
            </nav>

            <div className="ruta-hero-codes">
              <span className="ruta-iata">{r.iataOrigen}</span>
              <span className="ruta-arrow" aria-hidden="true" />
              <span className="ruta-iata">{r.iataDestino}</span>
            </div>

            <h1 className="ruta-hero-titulo">
              {fill(t.h1, { origen: r.origen, destino: r.destino })}
            </h1>

            <div className="ruta-hero-badges">
              <span className="ruta-badge">
                <Icon name="clock" size={13} stroke={1.5} />
                {fill(t.flightTime, { duracion: duracionLabel })}
              </span>
              <span className="ruta-badge">
                <Icon name="plane" size={13} stroke={1.5} />
                {t.directFlight}
              </span>
              {r.esInternacional && (
                <span className="ruta-badge ruta-badge--intl">{t.international}</span>
              )}
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <div className="ruta-stats-strip">
          <div className="container ruta-stats-inner">
            <div className="ruta-stat">
              <span className="ruta-stat-num">~{duracionLabel}</span>
              <span className="ruta-stat-label">{t.statDuration}</span>
            </div>
            <div className="ruta-stat-div" aria-hidden="true" />
            <div className="ruta-stat">
              <span className="ruta-stat-num">{r.distanciaKm} km</span>
              <span className="ruta-stat-label">{t.statDistance}</span>
            </div>
            <div className="ruta-stat-div" aria-hidden="true" />
            <div className="ruta-stat">
              <span className="ruta-stat-num">{t.statDirect}</span>
              <span className="ruta-stat-label">{t.statNonstop}</span>
            </div>
            <div className="ruta-stat-div" aria-hidden="true" />
            <div className="ruta-stat">
              <span className="ruta-stat-num">{t.statCapacity}</span>
              <span className="ruta-stat-label">{t.statAircraft}</span>
            </div>
          </div>
        </div>

        {/* ── Cuerpo ── */}
        <section className="ruta-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Descripción */}
                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <p className="ruta-desc">{r.descripcion}</p>
                </div>

                {/* Quién viaja */}
                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.passengerProfile}</p>
                      <h2 className="docs-h2">{t.whoTravels}</h2>
                    </div>
                  </div>
                  <p className="ruta-body-texto">{r.quienViaja}</p>
                </div>

                {/* Ventaja Aerus */}
                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane-takeoff" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.whyAerus}</p>
                      <h2 className="docs-h2">{t.difference}</h2>
                    </div>
                  </div>
                  <div className="docs-callout">{r.ventajaAerus}</div>
                </div>

                {/* Aeropuertos */}
                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="pin" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.flightInfo}</p>
                      <h2 className="docs-h2">{t.airports}</h2>
                    </div>
                  </div>
                  <div className="ruta-aeropuertos-grid">
                    <div className="ruta-aeropuerto-card">
                      <span className="ruta-aeropuerto-iata">{r.iataOrigen}</span>
                      <p className="ruta-aeropuerto-ciudad">{r.origen}</p>
                      <p className="ruta-aeropuerto-nombre">{r.aeropuertoOrigen}</p>
                      <span className="ruta-aeropuerto-rol">{t.origin}</span>
                    </div>
                    <div className="ruta-aeropuertos-sep" aria-hidden="true">
                      <span />
                      <Icon name="arrow-right" size={16} stroke={1.5} />
                      <span />
                    </div>
                    <div className="ruta-aeropuerto-card">
                      <span className="ruta-aeropuerto-iata">{r.iataDestino}</span>
                      <p className="ruta-aeropuerto-ciudad">{r.destino}</p>
                      <p className="ruta-aeropuerto-nombre">{r.aeropuertoDestino}</p>
                      <span className="ruta-aeropuerto-rol">{t.destination}</span>
                    </div>
                  </div>
                </div>

                {/* Info práctica */}
                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="luggage" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.beforeYouFly}</p>
                      <h2 className="docs-h2">{t.practicalInfo}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {r.esInternacional && (
                      <li>
                        {t.docsA}{' '}
                        <Link href={lp(lang, t.docsHref)}>{t.docsLink}</Link>{' '}
                        {t.docsB}
                      </li>
                    )}
                    <li>
                      {t.timesA}{' '}
                      <Link href={lp(lang, t.timesHref)}>{t.timesLink}</Link>{' '}
                      {t.timesB}
                    </li>
                    <li>
                      {t.bagA}{' '}
                      <Link href={lp(lang, t.bagHref)}>{t.bagLink}</Link>{' '}
                      {t.bagB}
                    </li>
                    <li>
                      {t.assistA}{' '}
                      <Link href={lp(lang, t.assistHref)}>{t.assistLink}</Link>.
                    </li>
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 20 }}>{t.faq}</h2>
                  <dl className="destino-faq">
                    {r.faq.map(({ q, a }) => (
                      <div key={q} className="destino-faq-item">
                        <dt className="destino-faq-q">{q}</dt>
                        <dd className="destino-faq-a">{a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ready}</p>
                  <p className="mro-cta-sidebar-desc">
                    {fill(t.readyDesc, { origen: r.origen, destino: r.destino, duracion: duracionLabel })}
                  </p>
                  <Link
                    href={lp(lang, t.bookHref)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.book}
                  </Link>
                </div>

                {r.conectadas.length > 0 && (
                  <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                    <p className="docs-sidebar-card-title">{fill(t.moreFrom, { origen: r.origen })}</p>
                    <ul className="docs-related-list">
                      {r.conectadas.map(c => (
                        <li key={c.href}>
                          <Link href={lp(lang, c.href)} className="docs-related-link">
                            <span>{c.label}</span>
                            <span className="docs-related-arr" aria-hidden="true">›</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.related}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map(l => (
                      <li key={l.href}>
                        <Link href={lp(lang, l.href)} className="docs-related-link">
                          <span>{l.label}</span>
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
