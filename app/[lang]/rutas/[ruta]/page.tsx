import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { getAllRutas, getRuta } from '@/lib/rutas-data'
import { alternates, isLang, lp } from '@/lib/i18n'

const T = {
  es: {
    metaTitle: (label: string) => `Vuelos ${label} | Aerus`,
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    routes: 'Rutas',
    h1: (o: string, d: string) => `Vuelos ${o} – ${d}`,
    flightTime: (dur: string) => `~${dur} de vuelo`,
    directFlight: 'Vuelo directo',
    international: 'Internacional',
    statDuration: 'Duración estimada',
    statDistance: 'Distancia directa',
    statDirect: 'Directo',
    statNonstop: 'Sin escalas',
    passengerProfile: 'Perfil de pasajero',
    whoTravels: '¿Quién viaja en esta ruta?',
    whyAerus: 'Por qué Aerus',
    difference: 'La diferencia en esta ruta',
    flightInfo: 'Información de vuelo',
    airports: 'Aeropuertos',
    origin: 'Origen',
    destination: 'Destino',
    beforeYouFly: 'Antes de viajar',
    practicalInfo: 'Información práctica',
    docsA: 'Ruta internacional — revisa los',
    docsLink: 'documentos requeridos',
    docsB: 'antes de volar.',
    timesA: 'Consulta los',
    timesLink: 'tiempos de llegada al aeropuerto',
    timesB: 'recomendados por Aerus.',
    bagA: 'Revisa nuestra',
    bagLink: 'política de equipaje',
    bagB: 'para conocer límites de peso y dimensiones.',
    assistA: 'Si necesitas asistencia especial,',
    assistLink: 'contáctanos antes del vuelo',
    faq: 'Preguntas frecuentes',
    ready: '¿Listo para volar?',
    readyDesc: (o: string, d: string, dur: string) =>
      `Vuelo directo ${o} – ${d} en ${dur}. Sin escalas, sin esperas.`,
    book: 'Reservar vuelo',
    moreFrom: (o: string) => `Más rutas desde ${o}`,
    related: 'También puede interesarte',
    relCheckin: 'Cómo es el check-in',
    relFleet: 'La flota Aerus',
    relBaggage: 'Política de equipaje',
  },
  en: {
    metaTitle: (label: string) => `${label} Flights | Aerus`,
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    routes: 'Routes',
    h1: (o: string, d: string) => `${o} – ${d} Flights`,
    flightTime: (dur: string) => `~${dur} flight`,
    directFlight: 'Direct flight',
    international: 'International',
    statDuration: 'Estimated duration',
    statDistance: 'Direct distance',
    statDirect: 'Direct',
    statNonstop: 'Nonstop',
    passengerProfile: 'Passenger profile',
    whoTravels: 'Who flies this route?',
    whyAerus: 'Why Aerus',
    difference: 'The difference on this route',
    flightInfo: 'Flight information',
    airports: 'Airports',
    origin: 'Origin',
    destination: 'Destination',
    beforeYouFly: 'Before you fly',
    practicalInfo: 'Practical information',
    docsA: 'International route — check the',
    docsLink: 'required travel documents',
    docsB: 'before you fly.',
    timesA: 'See the',
    timesLink: 'airport arrival times',
    timesB: 'recommended by Aerus.',
    bagA: 'Review our',
    bagLink: 'baggage policy',
    bagB: 'for weight and size limits.',
    assistA: 'If you need special assistance,',
    assistLink: 'contact us before your flight',
    faq: 'Frequently asked questions',
    ready: 'Ready to fly?',
    readyDesc: (o: string, d: string, dur: string) =>
      `Direct flight ${o} – ${d} in ${dur}. No layovers, no waiting.`,
    book: 'Book a flight',
    moreFrom: (o: string) => `More routes from ${o}`,
    related: 'You may also be interested in',
    relCheckin: 'How check-in works',
    relFleet: 'The Aerus fleet',
    relBaggage: 'Baggage policy',
  },
}

export function generateStaticParams() {
  return getAllRutas().map(r => ({ ruta: r.slug }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas/[ruta]'>): Promise<Metadata> {
  const { lang, ruta: slug } = await params
  if (!isLang(lang)) return {}
  const r = getRuta(slug, lang)
  if (!r) return {}
  return {
    title: T[lang].metaTitle(r.label),
    description: r.descripcion,
    alternates: alternates(lang, `/rutas/${r.slug}/`),
  }
}

export default async function RutaPage({ params }: PageProps<'/[lang]/rutas/[ruta]'>) {
  const { lang, ruta: slug } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const r = getRuta(slug, lang)
  if (!r) notFound()

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
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/rutas/')}>{t.routes}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{r.label}</span>
            </nav>

            <div className="ruta-hero-codes">
              <span className="ruta-iata">{r.iataOrigen}</span>
              <span className="ruta-arrow" aria-hidden="true" />
              <span className="ruta-iata">{r.iataDestino}</span>
            </div>

            <h1 className="ruta-hero-titulo">
              {t.h1(r.origen, r.destino)}
            </h1>

            <div className="ruta-hero-badges">
              <span className="ruta-badge">
                <Icon name="clock" size={13} stroke={1.5} />
                {t.flightTime(duracionLabel)}
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
              <span className="ruta-stat-num">12 pax</span>
              <span className="ruta-stat-label">Cessna Grand Caravan EX</span>
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
                        <Link href={lp(lang, '/ayuda/documentos-para-viajar/')}>{t.docsLink}</Link>{' '}
                        {t.docsB}
                      </li>
                    )}
                    <li>
                      {t.timesA}{' '}
                      <Link href={lp(lang, '/ayuda/tiempos-aeropuerto/')}>{t.timesLink}</Link>{' '}
                      {t.timesB}
                    </li>
                    <li>
                      {t.bagA}{' '}
                      <Link href={lp(lang, '/ayuda/equipaje/')}>{t.bagLink}</Link>{' '}
                      {t.bagB}
                    </li>
                    <li>
                      {t.assistA}{' '}
                      <Link href={lp(lang, '/ayuda/requerimientos-especiales/')}>{t.assistLink}</Link>.
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
                    {t.readyDesc(r.origen, r.destino, duracionLabel)}
                  </p>
                  <Link
                    href={lp(lang, '/reservar/')}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.book}
                  </Link>
                </div>

                {r.conectadas.length > 0 && (
                  <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                    <p className="docs-sidebar-card-title">{t.moreFrom(r.origen)}</p>
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
                    <li>
                      <Link href={lp(lang, '/experiencia/proceso-agil/')} className="docs-related-link">
                        <span>{t.relCheckin}</span>
                        <span className="docs-related-arr" aria-hidden="true">›</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={lp(lang, '/experiencia/flota/')} className="docs-related-link">
                        <span>{t.relFleet}</span>
                        <span className="docs-related-arr" aria-hidden="true">›</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={lp(lang, '/ayuda/equipaje/')} className="docs-related-link">
                        <span>{t.relBaggage}</span>
                        <span className="docs-related-arr" aria-hidden="true">›</span>
                      </Link>
                    </li>
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
