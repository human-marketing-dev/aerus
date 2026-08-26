import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { getAllRutas } from '@/lib/rutas-data'

export const metadata: Metadata = {
  title: 'Rutas | Aerus',
  description:
    'Red de rutas directas de Aerus. Vuelos regionales sin escalas entre las principales ciudades de México y la frontera norte con Estados Unidos.',
}

export default function RutasPage() {
  const rutas = getAllRutas()
  const nacionales = rutas.filter(r => !r.esInternacional)
  const internacionales = rutas.filter(r => r.esInternacional)

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="rutas-hero">
          <div className="container rutas-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Red Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Rutas <span className="accent">directas</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {rutas.length} rutas directas. Sin escalas, sin conexiones, sin perder el día
              en un aeropuerto grande. Vuelas de origen a destino.
            </p>
            <div className="rutas-hero-stats">
              <span className="rutas-hero-stat">
                <strong>{rutas.length}</strong> rutas directas
              </span>
              <span className="rutas-hero-sep" aria-hidden="true" />
              <span className="rutas-hero-stat">
                <strong>{internacionales.length}</strong> internacionales
              </span>
              <span className="rutas-hero-sep" aria-hidden="true" />
              <span className="rutas-hero-stat">
                <strong>{nacionales.length}</strong> nacionales
              </span>
            </div>
          </div>
        </section>

        {/* ── Rutas nacionales ── */}
        <section className="rutas-section">
          <div className="container">
            <p className="rutas-section-label">Nacionales</p>
            <div className="rutas-grid">
              {nacionales.map(r => (
                <RutaCard key={r.slug} r={r} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Rutas internacionales ── */}
        <section className="rutas-section rutas-section--dark">
          <div className="container">
            <p className="rutas-section-label">Internacionales — Frontera norte</p>
            <div className="rutas-grid">
              {internacionales.map(r => (
                <RutaCard key={r.slug} r={r} dark />
              ))}
            </div>
          </div>
        </section>

        {/* ── Conexiones Viva ── */}
        <section className="rutas-viva-strip">
          <div className="container rutas-viva-inner">
            <div className="rutas-viva-text">
              <p className="rutas-viva-label">Amplía tu red</p>
              <p className="rutas-viva-titulo">Conexiones con Viva Aerobus</p>
              <p className="rutas-viva-desc">
                Combina tu vuelo Aerus con la red de Viva Aerobus para llegar a más
                destinos nacionales e internacionales con una sola reservación.
              </p>
            </div>
            <Link href="/rutas/conexiones-viva-aerobus/" className="btn btn-primary">
              Ver conexiones
            </Link>
          </div>
        </section>

      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}

function RutaCard({ r, dark = false }: { r: ReturnType<typeof getAllRutas>[number]; dark?: boolean }) {
  const duracionLabel =
    r.duracionMin < 60
      ? `~${r.duracionMin} min`
      : r.duracionMin % 60 === 0
        ? `~${Math.floor(r.duracionMin / 60)}h`
        : `~${Math.floor(r.duracionMin / 60)}h ${r.duracionMin % 60}min`

  return (
    <Link href={`/rutas/${r.slug}/`} className={`ruta-card${dark ? ' ruta-card--dark' : ''}`}>
      <div className="ruta-card-codes">
        <span className="ruta-card-iata">{r.iataOrigen}</span>
        <span className="ruta-card-line" aria-hidden="true" />
        <Icon name="plane" size={14} stroke={1.5} className="ruta-card-plane" />
        <span className="ruta-card-line" aria-hidden="true" />
        <span className="ruta-card-iata">{r.iataDestino}</span>
      </div>
      <p className="ruta-card-label">{r.label}</p>
      <div className="ruta-card-meta">
        <span className="ruta-card-dur">{duracionLabel}</span>
        {r.esInternacional && <span className="ruta-card-intl">Intl</span>}
      </div>
      <span className="ruta-card-cta" aria-hidden="true">
        Ver ruta <Icon name="arrow-right" size={13} />
      </span>
    </Link>
  )
}
