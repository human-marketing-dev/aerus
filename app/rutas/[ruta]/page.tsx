import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { getAllRutas, getRuta } from '@/lib/rutas-data'

export function generateStaticParams() {
  return getAllRutas().map(r => ({ ruta: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ruta: string }>
}): Promise<Metadata> {
  const { ruta: slug } = await params
  const r = getRuta(slug)
  if (!r) return {}
  return {
    title: `Vuelos ${r.label} | Aerus`,
    description: r.descripcion,
  }
}

export default async function RutaPage({
  params,
}: {
  params: Promise<{ ruta: string }>
}) {
  const { ruta: slug } = await params
  const r = getRuta(slug)
  if (!r) notFound()

  const duracionLabel =
    r.duracionMin < 60
      ? `${r.duracionMin} min`
      : r.duracionMin % 60 === 0
        ? `${Math.floor(r.duracionMin / 60)}h`
        : `${Math.floor(r.duracionMin / 60)}h ${r.duracionMin % 60}min`

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="ruta-hero">
          <div className="container ruta-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/rutas/">Rutas</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{r.label}</span>
            </nav>

            <div className="ruta-hero-codes">
              <span className="ruta-iata">{r.iataOrigen}</span>
              <span className="ruta-arrow" aria-hidden="true" />
              <span className="ruta-iata">{r.iataDestino}</span>
            </div>

            <h1 className="ruta-hero-titulo">
              Vuelos {r.origen} – {r.destino}
            </h1>

            <div className="ruta-hero-badges">
              <span className="ruta-badge">
                <Icon name="clock" size={13} stroke={1.5} />
                ~{duracionLabel} de vuelo
              </span>
              <span className="ruta-badge">
                <Icon name="plane" size={13} stroke={1.5} />
                Vuelo directo
              </span>
              {r.esInternacional && (
                <span className="ruta-badge ruta-badge--intl">Internacional</span>
              )}
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <div className="ruta-stats-strip">
          <div className="container ruta-stats-inner">
            <div className="ruta-stat">
              <span className="ruta-stat-num">~{duracionLabel}</span>
              <span className="ruta-stat-label">Duración estimada</span>
            </div>
            <div className="ruta-stat-div" aria-hidden="true" />
            <div className="ruta-stat">
              <span className="ruta-stat-num">{r.distanciaKm} km</span>
              <span className="ruta-stat-label">Distancia directa</span>
            </div>
            <div className="ruta-stat-div" aria-hidden="true" />
            <div className="ruta-stat">
              <span className="ruta-stat-num">Directo</span>
              <span className="ruta-stat-label">Sin escalas</span>
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
                      <p className="docs-subtitulo">Perfil de pasajero</p>
                      <h2 className="docs-h2">¿Quién viaja en esta ruta?</h2>
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
                      <p className="docs-subtitulo">Por qué Aerus</p>
                      <h2 className="docs-h2">La diferencia en esta ruta</h2>
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
                      <p className="docs-subtitulo">Información de vuelo</p>
                      <h2 className="docs-h2">Aeropuertos</h2>
                    </div>
                  </div>
                  <div className="ruta-aeropuertos-grid">
                    <div className="ruta-aeropuerto-card">
                      <span className="ruta-aeropuerto-iata">{r.iataOrigen}</span>
                      <p className="ruta-aeropuerto-ciudad">{r.origen}</p>
                      <p className="ruta-aeropuerto-nombre">{r.aeropuertoOrigen}</p>
                      <span className="ruta-aeropuerto-rol">Origen</span>
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
                      <span className="ruta-aeropuerto-rol">Destino</span>
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
                      <p className="docs-subtitulo">Antes de viajar</p>
                      <h2 className="docs-h2">Información práctica</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {r.esInternacional && (
                      <li>
                        Ruta internacional — revisa los{' '}
                        <Link href="/ayuda/documentos-para-viajar/">documentos requeridos</Link>{' '}
                        antes de volar.
                      </li>
                    )}
                    <li>
                      Consulta los{' '}
                      <Link href="/ayuda/tiempos-aeropuerto/">tiempos de llegada al aeropuerto</Link>{' '}
                      recomendados por Aerus.
                    </li>
                    <li>
                      Revisa nuestra{' '}
                      <Link href="/ayuda/equipaje/">política de equipaje</Link>{' '}
                      para conocer límites de peso y dimensiones.
                    </li>
                    <li>
                      Si necesitas asistencia especial,{' '}
                      <Link href="/ayuda/requerimientos-especiales/">contáctanos antes del vuelo</Link>.
                    </li>
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 20 }}>Preguntas frecuentes</h2>
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
                  <p className="mro-cta-sidebar-titulo">¿Listo para volar?</p>
                  <p className="mro-cta-sidebar-desc">
                    Vuelo directo {r.origen} – {r.destino} en {duracionLabel}.
                    Sin escalas, sin esperas.
                  </p>
                  <Link
                    href="/reservar/"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    Reservar vuelo
                  </Link>
                </div>

                {r.conectadas.length > 0 && (
                  <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                    <p className="docs-sidebar-card-title">Más rutas desde {r.origen}</p>
                    <ul className="docs-related-list">
                      {r.conectadas.map(c => (
                        <li key={c.href}>
                          <Link href={c.href} className="docs-related-link">
                            <span>{c.label}</span>
                            <span className="docs-related-arr" aria-hidden="true">›</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">También puede interesarte</p>
                  <ul className="docs-related-list">
                    <li>
                      <Link href="/experiencia/proceso-agil/" className="docs-related-link">
                        <span>Cómo es el check-in</span>
                        <span className="docs-related-arr" aria-hidden="true">›</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/experiencia/flota/" className="docs-related-link">
                        <span>La flota Aerus</span>
                        <span className="docs-related-arr" aria-hidden="true">›</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ayuda/equipaje/" className="docs-related-link">
                        <span>Política de equipaje</span>
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
      <Newsletter/>
      <Footer />
    </>
  )
}
