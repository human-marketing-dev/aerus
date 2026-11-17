import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos } from '@/lib/red'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import { plural } from '@/lib/plantillas'
import defaults from '@/content/pages/destinos'

const PATH = '/destinos/'

export async function generateMetadata({ params }: PageProps<'/[lang]/destinos'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaDestinos', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function DestinosPage({ params }: PageProps<'/[lang]/destinos'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaDestinos', lang, defaults)
  // Singular / plural: la página elige el texto (…One / …Other) según el número
  const directRoutes = (n: number) => plural(n, t.directRoutesOne, t.directRoutesOther)

  const todos = await getAllDestinos(lang)
  const hubs = todos.filter(d => d.hub)
  const resto = todos.filter(d => !d.hub)

  const totalDestinos = todos.length
  const totalIntl = todos.filter(d => d.esInternacional).length

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="destinos-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              {t.eyebrow}
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)', maxWidth: 700 }}>
              {t.title}
            </h1>
            <p className="section-intro destinos-intro">
              {t.intro}
            </p>
            <div className="destinos-hero-stats">
              <span className="destinos-stat">
                <strong>{totalDestinos}</strong> {t.statDestinations}
              </span>
              <span className="destinos-stat-sep" aria-hidden="true" />
              <span className="destinos-stat">
                <strong>{hubs.length}</strong> {t.statHubs}
              </span>
              {totalIntl > 0 && (
                <>
                  <span className="destinos-stat-sep" aria-hidden="true" />
                  <span className="destinos-stat">
                    <strong>{totalIntl}</strong> {totalIntl !== 1 ? t.statIntlOther : t.statIntlOne}
                  </span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Hub feature cards ─────────────────────────────── */}
        <section className="destinos-hubs-section">
          <div className="container">
            <div className="eyebrow destinos-sub-eyebrow">{t.hubsEyebrow}</div>
            <div className="destinos-hubs-grid">
              {hubs.map(d => (
                <Link key={d.slug} href={lp(lang, `/destinos/${d.slug}`)} className="dest-hub-card">
                  <div
                    className="dest-hub-card-visual"
                    style={d.imagen ? { backgroundImage: `url(${d.imagen})`, backgroundPosition: d.imagenPosicion } : undefined}
                  >
                    <span className="dest-hub-card-iata" aria-hidden="true">{d.iata}</span>
                  </div>
                  <div className="dest-hub-card-body">
                    <span className="dest-hub-badge">{t.hubBadge}</span>
                    <span className="dest-hub-card-name">{d.nombre}</span>
                    <span className="dest-hub-card-routes">
                      {directRoutes(d.rutas.length)}
                    </span>
                    <span className="dest-hub-card-cta" aria-hidden="true">
                      {t.seeFlights}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Destination grid ──────────────────────────────── */}
        {resto.length > 0 && (
          <section className="destinos-all-section">
            <div className="container">
              <div className="destinos-all-header">
                <div className="eyebrow">{t.allEyebrow}</div>
                <p className="destinos-all-count">
                  {plural(resto.length, t.destinationCountOne, t.destinationCountOther)}
                </p>
              </div>
              <div className="destinos-grid">
                {resto.map(d => (
                  <Link key={d.slug} href={lp(lang, `/destinos/${d.slug}`)} className="dest-card">
                    <div
                      className="dest-card-img"
                      style={d.imagen ? { backgroundImage: `url(${d.imagen})`, backgroundPosition: d.imagenPosicion } : undefined}
                    >
                      <span className="dest-card-iata" aria-hidden="true">{d.iata}</span>
                      {d.esInternacional && (
                        <span className="dest-badge-intl">{t.intlBadge}</span>
                      )}
                    </div>
                    <div className="dest-card-body">
                      <span className="dest-card-name">{d.nombre}</span>
                      <span className="dest-card-count">
                        {directRoutes(d.rutas.length)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
