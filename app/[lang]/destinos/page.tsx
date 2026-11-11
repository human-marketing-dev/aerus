import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos } from '@/lib/destinos-mock'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/destinos/'

const T = {
  es: {
    metaTitle: 'Destinos | Aerus',
    metaDescription:
      'Explora la red de rutas aéreas regionales de Aerus. Vuelos directos a los destinos más importantes de México.',
    eyebrow: 'Red Aerus',
    title: 'Destinos',
    intro: 'Vuelos regionales directos a los destinos más importantes de México.',
    statDestinations: 'destinos',
    statHubs: 'hubs',
    statIntl: { one: 'internacional', other: 'internacionales' },
    hubsEyebrow: 'Nuestros hubs',
    hubBadge: 'Hub',
    directRoutes: (n: number) => `${n} ruta${n !== 1 ? 's' : ''} directa${n !== 1 ? 's' : ''}`,
    seeFlights: 'Ver vuelos →',
    allEyebrow: 'Toda la red',
    destinationCount: (n: number) => `${n} destino${n !== 1 ? 's' : ''}`,
    intlBadge: 'Internacional',
  },
  en: {
    metaTitle: 'Destinations | Aerus',
    metaDescription:
      'Explore the Aerus regional route network. Direct flights to Mexico’s most important destinations.',
    eyebrow: 'Aerus network',
    title: 'Destinations',
    intro: 'Direct regional flights to Mexico’s most important destinations.',
    statDestinations: 'destinations',
    statHubs: 'hubs',
    statIntl: { one: 'international', other: 'international' },
    hubsEyebrow: 'Our hubs',
    hubBadge: 'Hub',
    directRoutes: (n: number) => `${n} direct route${n !== 1 ? 's' : ''}`,
    seeFlights: 'View flights →',
    allEyebrow: 'The full network',
    destinationCount: (n: number) => `${n} destination${n !== 1 ? 's' : ''}`,
    intlBadge: 'International',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/destinos'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function DestinosPage({ params }: PageProps<'/[lang]/destinos'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  const todos = getAllDestinos(lang)
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
                    <strong>{totalIntl}</strong> {totalIntl !== 1 ? t.statIntl.other : t.statIntl.one}
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
                    style={d.imagen ? { backgroundImage: `url(${d.imagen})` } : undefined}
                  >
                    <span className="dest-hub-card-iata" aria-hidden="true">{d.iata}</span>
                  </div>
                  <div className="dest-hub-card-body">
                    <span className="dest-hub-badge">{t.hubBadge}</span>
                    <span className="dest-hub-card-name">{d.nombre}</span>
                    <span className="dest-hub-card-routes">
                      {t.directRoutes(d.rutas.length)}
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
                  {t.destinationCount(resto.length)}
                </p>
              </div>
              <div className="destinos-grid">
                {resto.map(d => (
                  <Link key={d.slug} href={lp(lang, `/destinos/${d.slug}`)} className="dest-card">
                    <div
                      className="dest-card-img"
                      style={d.imagen ? { backgroundImage: `url(${d.imagen})` } : undefined}
                    >
                      <span className="dest-card-iata" aria-hidden="true">{d.iata}</span>
                      {d.esInternacional && (
                        <span className="dest-badge-intl">{t.intlBadge}</span>
                      )}
                    </div>
                    <div className="dest-card-body">
                      <span className="dest-card-name">{d.nombre}</span>
                      <span className="dest-card-count">
                        {t.directRoutes(d.rutas.length)}
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
