import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos, getDestino, type Destino } from '@/lib/destinos-mock'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { alternates, isLang, lp } from '@/lib/i18n'

const SITE = 'https://aerus.mx'

const T = {
  es: {
    metaTitle: (n: string) => `Vuelos a ${n} | Aerus`,
    metaDescription: (n: string, c: number) =>
      `Reserva vuelos directos a ${n} con Aerus. ${c} ruta${c !== 1 ? 's' : ''} directa${c !== 1 ? 's' : ''} disponible${c !== 1 ? 's' : ''}.`,
    home: 'Inicio',
    destinations: 'Destinos',
    breadcrumbLabel: 'Ruta de navegación',
    hubBadge: 'Hub',
    intlBadge: 'Internacional',
    h1: (n: string) => `Vuelos directos a ${n}`,
    routeLabel: (c: number) => `${c} ruta${c !== 1 ? 's' : ''} directa${c !== 1 ? 's' : ''}`,
    andMore: (c: number) => ` y ${c} más`,
    routesFrom: (n: string) => `Rutas directas desde ${n}`,
    faq: 'Preguntas frecuentes',
    sidebarLabel: (n: string) => `Vuela directo a ${n} con Aerus`,
    searchFlights: 'Buscar vuelos',
    faqItems: (d: Destino) => {
      const c = d.rutas.length
      return [
        {
          q: `¿Aerus vuela directo a ${d.nombre}?`,
          a: `Sí. Aerus opera ${c} ruta${c !== 1 ? 's' : ''} directa${c !== 1 ? 's' : ''} con ${d.nombre}.`,
        },
        {
          q: `¿Desde qué ciudades puedo volar directo a ${d.nombre}?`,
          a: `Puedes volar directo a ${d.nombre} desde: ${d.rutas.join(', ')}.`,
        },
        ...(d.esInternacional
          ? [{
              q: `¿${d.nombre} es un destino internacional?`,
              a: `Sí, ${d.nombre} es un destino internacional dentro de la red de Aerus.`,
            }]
          : []),
        ...(d.hub
          ? [{
              q: `¿${d.nombre} es un hub de Aerus?`,
              a: `Sí, ${d.nombre} es uno de los hubs principales de la red Aerus. Desde este aeropuerto operamos conexiones directas a múltiples destinos de la red.`,
            }]
          : []),
      ]
    },
  },
  en: {
    metaTitle: (n: string) => `Flights to ${n} | Aerus`,
    metaDescription: (n: string, c: number) =>
      `Book direct flights to ${n} with Aerus. ${c} direct route${c !== 1 ? 's' : ''} available.`,
    home: 'Home',
    destinations: 'Destinations',
    breadcrumbLabel: 'Breadcrumb',
    hubBadge: 'Hub',
    intlBadge: 'International',
    h1: (n: string) => `Direct flights to ${n}`,
    routeLabel: (c: number) => `${c} direct route${c !== 1 ? 's' : ''}`,
    andMore: (c: number) => ` and ${c} more`,
    routesFrom: (n: string) => `Direct routes from ${n}`,
    faq: 'Frequently asked questions',
    sidebarLabel: (n: string) => `Fly direct to ${n} with Aerus`,
    searchFlights: 'Search flights',
    faqItems: (d: Destino) => {
      const c = d.rutas.length
      return [
        {
          q: `Does Aerus fly direct to ${d.nombre}?`,
          a: `Yes. Aerus operates ${c} direct route${c !== 1 ? 's' : ''} to ${d.nombre}.`,
        },
        {
          q: `Which cities can I fly direct to ${d.nombre} from?`,
          a: `You can fly direct to ${d.nombre} from: ${d.rutas.join(', ')}.`,
        },
        ...(d.esInternacional
          ? [{
              q: `Is ${d.nombre} an international destination?`,
              a: `Yes, ${d.nombre} is an international destination in the Aerus network.`,
            }]
          : []),
        ...(d.hub
          ? [{
              q: `Is ${d.nombre} an Aerus hub?`,
              a: `Yes, ${d.nombre} is one of the main hubs in the Aerus network. From this airport we operate direct flights to multiple destinations across the network.`,
            }]
          : []),
      ]
    },
  },
}

export function generateStaticParams() {
  return getAllDestinos().map(d => ({ destino: d.slug }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/destinos/[destino]'>): Promise<Metadata> {
  const { lang, destino: slug } = await params
  if (!isLang(lang)) return {}
  const d = getDestino(slug, lang)
  if (!d) return {}
  const t = T[lang]
  return {
    title: t.metaTitle(d.nombre),
    description: t.metaDescription(d.nombre, d.rutas.length),
    alternates: alternates(lang, `/destinos/${d.slug}`),
  }
}

export default async function DestinoPage({ params }: PageProps<'/[lang]/destinos/[destino]'>) {
  const { lang, destino: slug } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const destino = getDestino(slug, lang)
  if (!destino) notFound()

  // Build nombre → slug lookup for route interlinks
  const slugByNombre = new Map(getAllDestinos(lang).map(d => [d.nombre, d.slug]))

  const pageUrl = `${SITE}${lp(lang, `/destinos/${destino.slug}`)}`

  const jsonLdDestino = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destino.nombre,
    description: destino.descripcion,
    url: pageUrl,
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE}${lang === 'es' ? '' : lp(lang, '/')}` },
      { '@type': 'ListItem', position: 2, name: t.destinations, item: `${SITE}${lp(lang, '/destinos')}` },
      { '@type': 'ListItem', position: 3, name: destino.nombre, item: pageUrl },
    ],
  }

  const rutaLabel = t.routeLabel(destino.rutas.length)

  // FAQ items — single source of truth for both visible content and JSON-LD.
  // Adding a question here automatically adds it to the schema; removing it removes it from both.
  const faqItems: { q: string; a: string }[] = t.faqItems(destino)

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDestino) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Nav lang={lang} />
      <main>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="destino-hero">
          {destino.imagen && (
            <div
              className="destino-hero-bg"
              style={{ backgroundImage: `url(${destino.imagen})` }}
              aria-hidden="true"
            />
          )}
          <div className="destino-hero-overlay" aria-hidden="true" />

          <div className="container destino-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/destinos')}>{t.destinations}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{destino.nombre}</span>
            </nav>

            <div className="destino-hero-badges">
              {destino.hub && <span className="dest-hub-badge">{t.hubBadge}</span>}
              {destino.esInternacional && (
                <span className="destino-badge-intl">{t.intlBadge}</span>
              )}
            </div>

            <h1 className="destino-h1">
              {t.h1(destino.nombre)}
            </h1>

            <p className="destino-hero-sub">
              {rutaLabel}
              {destino.rutas.length > 0 && (
                <>
                  {' · '}
                  {destino.rutas.slice(0, 3).join(', ')}
                  {destino.rutas.length > 3 && t.andMore(destino.rutas.length - 3)}
                </>
              )}
            </p>
          </div>
        </section>

        {/* ── Body ────────────────────────────────────────────── */}
        <section className="destino-body">
          <div className="container destino-layout">

            {/* Content column */}
            <div className="destino-content">

              {/* 1 — Descripción editorial */}
              <div className="destino-section">
                <p className="destino-desc">{destino.descripcion}</p>
              </div>

              {/* 2 — Rutas directas (interlinked) */}
              <div className="destino-section">
                <h2 className="destino-section-heading">
                  {t.routesFrom(destino.nombre)}
                </h2>
                <ul className="destino-routes-chips" role="list">
                  {destino.rutas.map(nombre => {
                    const targetSlug = slugByNombre.get(nombre)
                    return (
                      <li key={nombre}>
                        {targetSlug ? (
                          <Link
                            href={lp(lang, `/destinos/${targetSlug}`)}
                            className="destino-route-chip"
                          >
                            <span className="destino-route-chip-arr" aria-hidden="true">→</span>
                            {nombre}
                          </Link>
                        ) : (
                          <span className="destino-route-chip destino-route-chip--plain">
                            <span className="destino-route-chip-arr" aria-hidden="true">→</span>
                            {nombre}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* 3 — FAQ */}
              <div className="destino-section">
                <h2 className="destino-section-heading">{t.faq}</h2>
                <dl className="destino-faq">
                  {faqItems.map(({ q, a }) => (
                    <div key={q} className="destino-faq-item">
                      <dt className="destino-faq-q">{q}</dt>
                      <dd className="destino-faq-a">{a}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* TODO: mostrar cuando haya datos de aeropuerto (nombre, IATA, terminal) */}

            </div>

            {/* Sidebar */}
            <aside className="destino-sidebar">
              <div className="destino-routes-card">
                <p className="destino-sidebar-stat">{rutaLabel}</p>
                <p className="destino-sidebar-label">
                  {t.sidebarLabel(destino.nombre)}
                </p>
                <div className="destino-cta">
                  <button className="btn btn-primary">
                    {t.searchFlights}
                    <span className="ar" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </aside>

          </div>
        </section>

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
