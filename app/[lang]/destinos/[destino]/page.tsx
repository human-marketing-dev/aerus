import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos, getDestino, getDestinoSlugs, type Destino } from '@/lib/red'
import { seoMetadata } from '@/lib/seo'
import { redirectIfConfigured } from '@/lib/redirects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { isLang, lp } from '@/lib/i18n'
import { fill, getPlantilla, plural } from '@/lib/plantillas'
import defaults, { type PlantillaDestinoContent } from '@/content/pages/plantilla-destino'

const SITE = 'https://aerus.mx'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', destinations: 'Destinos' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', destinations: 'Destinations' },
}

/**
 * Preguntas frecuentes del destino a partir de la plantilla (Sanity). Qué preguntas aparecen
 * (internacional / hub) y el singular/plural de la primera respuesta se deciden aquí.
 */
function faqItems(t: PlantillaDestinoContent, d: Destino): { q: string; a: string }[] {
  const v = { nombre: d.nombre, ciudades: d.rutas.join(', ') }
  const c = d.rutas.length
  return [
    { q: fill(t.faqDirecto.q, v), a: plural(c, t.faqDirecto.aOne, t.faqDirecto.aOther, v) },
    { q: fill(t.faqCiudades.q, v), a: fill(t.faqCiudades.a, v) },
    ...(d.esInternacional ? [{ q: fill(t.faqInternacional.q, v), a: fill(t.faqInternacional.a, v) }] : []),
    ...(d.hub ? [{ q: fill(t.faqHub.q, v), a: fill(t.faqHub.a, v) }] : []),
  ]
}

// Destinos nuevos publicados en Sanity se generan al primer visita (no hace falta rebuild)
export const dynamicParams = true

export async function generateStaticParams() {
  return (await getDestinoSlugs()).map(destino => ({ destino }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/destinos/[destino]'>): Promise<Metadata> {
  const { lang, destino: slug } = await params
  if (!isLang(lang)) return {}
  const d = await getDestino(slug, lang)
  if (!d) return {}
  return seoMetadata(d.seo, lang, `/destinos/${d.slug}`)
}

export default async function DestinoPage({ params }: PageProps<'/[lang]/destinos/[destino]'>) {
  const { lang, destino: slug } = await params
  if (!isLang(lang)) notFound()
  const ui = UI[lang]
  const destino = await getDestino(slug, lang)
  if (!destino) {
    await redirectIfConfigured(lp(lang, `/destinos/${slug}`))
    notFound()
  }
  const t = await getPlantilla('plantillaDestino', lang, defaults)

  // Build nombre → slug lookup for route interlinks
  const slugByNombre = new Map((await getAllDestinos(lang)).map(d => [d.nombre, d.slug]))

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
      { '@type': 'ListItem', position: 1, name: ui.home, item: `${SITE}${lang === 'es' ? '' : lp(lang, '/')}` },
      { '@type': 'ListItem', position: 2, name: ui.destinations, item: `${SITE}${lp(lang, '/destinos')}` },
      { '@type': 'ListItem', position: 3, name: destino.nombre, item: pageUrl },
    ],
  }

  const rutaLabel = plural(destino.rutas.length, t.routeLabelOne, t.routeLabelOther)

  // FAQ items — single source of truth for both visible content and JSON-LD.
  // Adding a question here automatically adds it to the schema; removing it removes it from both.
  const faq = faqItems(t, destino)

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
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
              style={{ backgroundImage: `url(${destino.imagen})`, backgroundPosition: destino.imagenPosicion }}
              aria-hidden="true"
            />
          )}
          <div className="destino-hero-overlay" aria-hidden="true" />

          <div className="container destino-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/destinos')}>{ui.destinations}</Link>
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
              {fill(t.h1, { nombre: destino.nombre })}
            </h1>

            <p className="destino-hero-sub">
              {rutaLabel}
              {destino.rutas.length > 0 && (
                <>
                  {' · '}
                  {destino.rutas.slice(0, 3).join(', ')}
                  {destino.rutas.length > 3 && ` ${fill(t.andMore, { n: destino.rutas.length - 3 })}`}
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
                  {fill(t.routesFrom, { nombre: destino.nombre })}
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
                  {faq.map(({ q, a }) => (
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
                  {fill(t.sidebarLabel, { nombre: destino.nombre })}
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
