import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos } from '@/lib/destinos-mock'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destinos | Aerus',
  description: 'Explora la red de rutas aéreas regionales de Aerus. Vuelos directos a los destinos más importantes de México.',
}

export default function DestinosPage() {
  const todos = getAllDestinos()
  const hubs = todos.filter(d => d.hub)
  const resto = todos.filter(d => !d.hub)

  const totalDestinos = todos.length
  const totalIntl = todos.filter(d => d.esInternacional).length

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="destinos-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              Red Aerus
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)', maxWidth: 700 }}>
              Destinos
            </h1>
            <p className="section-intro destinos-intro">
              Vuelos regionales directos a los destinos más importantes de México.
            </p>
            <div className="destinos-hero-stats">
              <span className="destinos-stat">
                <strong>{totalDestinos}</strong> destinos
              </span>
              <span className="destinos-stat-sep" aria-hidden="true" />
              <span className="destinos-stat">
                <strong>{hubs.length}</strong> hubs
              </span>
              {totalIntl > 0 && (
                <>
                  <span className="destinos-stat-sep" aria-hidden="true" />
                  <span className="destinos-stat">
                    <strong>{totalIntl}</strong> internacionale{totalIntl !== 1 ? 's' : ''}
                  </span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Hub feature cards ─────────────────────────────── */}
        <section className="destinos-hubs-section">
          <div className="container">
            <div className="eyebrow destinos-sub-eyebrow">Nuestros hubs</div>
            <div className="destinos-hubs-grid">
              {hubs.map(d => (
                <Link key={d.slug} href={`/destinos/${d.slug}`} className="dest-hub-card">
                  <div
                    className="dest-hub-card-visual"
                    style={d.imagen ? { backgroundImage: `url(${d.imagen})` } : undefined}
                  >
                    <span className="dest-hub-card-iata" aria-hidden="true">{d.iata}</span>
                  </div>
                  <div className="dest-hub-card-body">
                    <span className="dest-hub-badge">Hub</span>
                    <span className="dest-hub-card-name">{d.nombre}</span>
                    <span className="dest-hub-card-routes">
                      {d.rutas.length} ruta{d.rutas.length !== 1 ? 's' : ''} directa{d.rutas.length !== 1 ? 's' : ''}
                    </span>
                    <span className="dest-hub-card-cta" aria-hidden="true">
                      Ver vuelos →
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
                <div className="eyebrow">Toda la red</div>
                <p className="destinos-all-count">
                  {resto.length} destino{resto.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="destinos-grid">
                {resto.map(d => (
                  <Link key={d.slug} href={`/destinos/${d.slug}`} className="dest-card">
                    <div
                      className="dest-card-img"
                      style={d.imagen ? { backgroundImage: `url(${d.imagen})` } : undefined}
                    >
                      <span className="dest-card-iata" aria-hidden="true">{d.iata}</span>
                      {d.esInternacional && (
                        <span className="dest-badge-intl">Internacional</span>
                      )}
                    </div>
                    <div className="dest-card-body">
                      <span className="dest-card-name">{d.nombre}</span>
                      <span className="dest-card-count">
                        {d.rutas.length} ruta{d.rutas.length !== 1 ? 's' : ''} directa{d.rutas.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
