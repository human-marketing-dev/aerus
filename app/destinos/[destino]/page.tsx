import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllDestinos, getDestino } from '@/lib/destinos-mock'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const SITE = 'https://aerus.mx'

export function generateStaticParams() {
  return getAllDestinos().map(d => ({ destino: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destino: string }>
}): Promise<Metadata> {
  const { destino: slug } = await params
  const d = getDestino(slug)
  if (!d) return {}
  return {
    title: `Vuelos a ${d.nombre} | Aerus`,
    description: `Reserva vuelos directos a ${d.nombre} con Aerus. ${d.rutas.length} ruta${d.rutas.length !== 1 ? 's' : ''} directa${d.rutas.length !== 1 ? 's' : ''} disponible${d.rutas.length !== 1 ? 's' : ''}.`,
  }
}

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ destino: string }>
}) {
  const { destino: slug } = await params
  const destino = getDestino(slug)
  if (!destino) notFound()

  // Build nombre → slug lookup for route interlinks
  const slugByNombre = new Map(getAllDestinos().map(d => [d.nombre, d.slug]))

  const pageUrl = `${SITE}/destinos/${destino.slug}`

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
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Destinos', item: `${SITE}/destinos` },
      { '@type': 'ListItem', position: 3, name: destino.nombre, item: pageUrl },
    ],
  }

  const rutaCount = destino.rutas.length
  const rutaLabel = `${rutaCount} ruta${rutaCount !== 1 ? 's' : ''} directa${rutaCount !== 1 ? 's' : ''}`

  // FAQ items — single source of truth for both visible content and JSON-LD.
  // Adding a question here automatically adds it to the schema; removing it removes it from both.
  const faqItems: { q: string; a: string }[] = [
    {
      q: `¿Aerus vuela directo a ${destino.nombre}?`,
      a: `Sí. Aerus opera ${rutaCount} ruta${rutaCount !== 1 ? 's' : ''} directa${rutaCount !== 1 ? 's' : ''} con ${destino.nombre}.`,
    },
    {
      q: `¿Desde qué ciudades puedo volar directo a ${destino.nombre}?`,
      a: `Puedes volar directo a ${destino.nombre} desde: ${destino.rutas.join(', ')}.`,
    },
    ...(destino.esInternacional
      ? [{
          q: `¿${destino.nombre} es un destino internacional?`,
          a: `Sí, ${destino.nombre} es un destino internacional dentro de la red de Aerus.`,
        }]
      : []),
    ...(destino.hub
      ? [{
          q: `¿${destino.nombre} es un hub de Aerus?`,
          a: `Sí, ${destino.nombre} es uno de los hubs principales de la red Aerus. Desde este aeropuerto operamos conexiones directas a múltiples destinos de la red.`,
        }]
      : []),
  ]

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

      <Nav />
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
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/destinos">Destinos</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{destino.nombre}</span>
            </nav>

            <div className="destino-hero-badges">
              {destino.hub && <span className="dest-hub-badge">Hub</span>}
              {destino.esInternacional && (
                <span className="destino-badge-intl">Internacional</span>
              )}
            </div>

            <h1 className="destino-h1">
              Vuelos directos a {destino.nombre}
            </h1>

            <p className="destino-hero-sub">
              {rutaLabel}
              {destino.rutas.length > 0 && (
                <>
                  {' · '}
                  {destino.rutas.slice(0, 3).join(', ')}
                  {destino.rutas.length > 3 && ` y ${destino.rutas.length - 3} más`}
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
                  Rutas directas desde {destino.nombre}
                </h2>
                <ul className="destino-routes-chips" role="list">
                  {destino.rutas.map(nombre => {
                    const targetSlug = slugByNombre.get(nombre)
                    return (
                      <li key={nombre}>
                        {targetSlug ? (
                          <Link
                            href={`/destinos/${targetSlug}`}
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
                <h2 className="destino-section-heading">Preguntas frecuentes</h2>
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
                  Vuela directo a {destino.nombre} con Aerus
                </p>
                <div className="destino-cta">
                  <button className="btn btn-primary">
                    Buscar vuelos
                    <span className="ar" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </aside>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
