import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Tiempos de llegada al aeropuerto | Aerus',
  description:
    'Entérate con cuánta anticipación debes llegar al aeropuerto para tu vuelo Aerus. Tiempos recomendados para vuelos nacionales e internacionales.',
}

/* ── Data ───────────────────────────────────────────────────────────────── */

type Fase = { label: string; valor: string; minutos: number }

type TiempoCard = {
  id: string
  tipo: string
  subtitulo: string
  destacado: boolean
  llegada: { texto: string; minutos: number }
  fases: Fase[]
  nota?: string
}

const TIEMPOS: TiempoCard[] = [
  {
    id: 'nacional',
    tipo: 'Nacional',
    subtitulo: 'Vuelos dentro de México',
    destacado: false,
    llegada: { texto: '1h 30 min', minutos: 90 },
    fases: [
      { label: 'Cierre de mostrador', valor: '45 min antes', minutos: 45 },
      { label: 'Cierre de puerta', valor: '20 min antes', minutos: 20 },
    ],
  },
  {
    id: 'internacional',
    tipo: 'Internacional',
    subtitulo: 'Vuelos a EE. UU. (Texas)',
    destacado: true,
    llegada: { texto: '2h 30 min', minutos: 150 },
    fases: [
      { label: 'Cierre de mostrador', valor: '60 min antes', minutos: 60 },
      { label: 'Cierre de puerta', valor: '20 min antes', minutos: 20 },
    ],
    nota: 'Los vuelos internacionales requieren trámites migratorios y de aduana. Llegar con suficiente anticipación es especialmente importante.',
  },
]

const RECOMENDACIONES = [
  'En temporada alta (Semana Santa, verano y diciembre) agrega al menos 30 minutos adicionales a los tiempos indicados.',
  'Considera el tiempo de traslado hasta el aeropuerto, tráfico, estacionamiento y llegada con transporte público.',
  'Haz tu check-in en línea desde 24 horas antes para reducir el tiempo en mostrador y poder ir directo a controles de seguridad.',
  <>
    Ten tu identificación y documentos de viaje listos antes de llegar a los filtros de seguridad.{' '}
    <Link href="/ayuda/documentos-para-viajar/" style={{ color: 'inherit', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
      Ver documentos requeridos →
    </Link>
  </>,
  'Si viajas con mascota, equipaje especial o requerimientos de asistencia, presenta 30 minutos adicionales a los tiempos indicados.',
]

/* ── Component ──────────────────────────────────────────────────────────── */

export default function TiemposAeropuertoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="tiempos-hero">
          <div className="container tiempos-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Tiempos de llegada al aeropuerto</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Ayuda</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Tiempos de llegada al <span className="accent">aeropuerto</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Llegar a tiempo es parte del vuelo. Aquí los tiempos recomendados para que no se te vaya el avión.
            </p>
          </div>
        </section>

        {/* Timing cards */}
        <section className="tiempos-cards-section">
          <div className="container">
            <div className="tiempos-cards-grid">
              {TIEMPOS.map((t) => (
                <div
                  key={t.id}
                  className={`tiempos-card${t.destacado ? ' tiempos-card--featured' : ''}`}
                >
                  <div className="tiempos-card-top">
                    <div className="tiempos-card-type">{t.tipo}</div>
                    <p className="tiempos-card-subtitulo">{t.subtitulo}</p>
                  </div>

                  <div className="tiempos-card-llegada">
                    <span className="tiempos-llegada-big">{t.llegada.texto}</span>
                    <span className="tiempos-llegada-label">antes de tu vuelo</span>
                  </div>

                  <div className="tiempos-card-divider" aria-hidden="true" />

                  <ul className="tiempos-card-fases">
                    {t.fases.map((fase) => (
                      <li key={fase.label} className="tiempos-fase">
                        <span className="tiempos-fase-label">{fase.label}</span>
                        <span className="tiempos-fase-valor">{fase.valor}</span>
                      </li>
                    ))}
                    <li className="tiempos-fase tiempos-fase--salida">
                      <span className="tiempos-fase-label">Salida del vuelo</span>
                      <span className="tiempos-fase-valor tiempos-fase-valor--salida">00:00</span>
                    </li>
                  </ul>

                  {t.nota && (
                    <p className="tiempos-card-nota">{t.nota}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="tiempos-general-note">
              <Icon name="clock" size={14} className="tiempos-note-icon" />
              Los tiempos son contados hacia atrás desde la hora de salida programada del vuelo.
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="section-pad tiempos-tips-section">
          <div className="container">
            <div className="tiempos-tips-inner">
              <div className="docs-section-header" style={{ marginBottom: 24 }}>
                <div className="docs-section-icon">
                  <Icon name="check" size={20} stroke={1.5} />
                </div>
                <div>
                  <p className="docs-subtitulo">Recomendaciones</p>
                  <h2 className="docs-h2">Llega con margen de tiempo</h2>
                </div>
              </div>
              <ul className="docs-list">
                {RECOMENDACIONES.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
