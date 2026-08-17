import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Radios e instrumentos | Aerus MRO',
  description:
    'Mantenimiento, instalación y calibración de aviónica, radios y sistemas de navegación. Aerus MRO: taller de instrumentos aprobado DGAC.',
}

const SERVICIOS = [
  {
    titulo: 'Radios VHF / COM',
    descripcion:
      'Mantenimiento, diagnóstico y sustitución de radios COM VHF. Verificación de frecuencias, modulación y potencia de salida conforme a los estándares ICAO Annex 10.',
  },
  {
    titulo: 'Sistemas de navegación VOR / ILS / GPS',
    descripcion:
      'Calibración y mantenimiento de receptores VOR/LOC/GS e ILS. Instalación y actualización de bases de datos de navegadores GPS (Garmin, Avidyne). Verificación de precisión conforme a los manuales del fabricante.',
  },
  {
    titulo: 'Transpondedor ADS-B',
    descripcion:
      'Inspección, prueba de bianuales (prueba de altímetro y transpondedor requerida por DGAC) e instalación de equipos ADS-B Out para cumplimiento reglamentario.',
  },
  {
    titulo: 'Instrumentos de vuelo',
    descripcion:
      'Mantenimiento y calibración de altímetros, variómetros, velocímetros y horizontes artificiales. Verificación de instrumentos pitot-estáticos conforme a los requerimientos de aeronavegabilidad.',
  },
  {
    titulo: 'Piloto automático',
    descripcion:
      'Inspección, diagnóstico y ajuste de sistemas de piloto automático (S-TEC, Garmin GFC). Revisión de servos, engagement y desconexión de emergencia.',
  },
  {
    titulo: 'Sistema de audio e intercomunicador',
    descripcion:
      'Mantenimiento de paneles de audio (Garmin GMA, PS Engineering), intercomunicadores y sistema de cabina. Prueba de integración con radios COM.',
  },
]

const MARCAS = [
  'Garmin (G1000, GTN, GTR, GNS series)',
  'Avidyne (IFD, EX series)',
  'S-TEC (piloto automático)',
  'BendixKing (KX, KI, KN series)',
  'Honeywell / AlliedSignal (instrumentos)',
  'Shadin / PS Engineering (audio, datos de motor)',
]

const OTROS = [
  { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
  { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
  { label: 'Hélices', href: '/mro/helices/' },
  { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
]

export default function RadiosInstrumentosPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mro-hero">
          <div className="container mro-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/mro/">MRO</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Radios e instrumentos</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Radios e <span className="accent">instrumentos</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Aviónica moderna mantenida con estándares de fábrica. Navegación, comunicaciones, transpondedor ADS-B, piloto automático e instrumentos de vuelo.
            </p>
          </div>
        </section>

        <section className="mro-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="wifi" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Aviónica y navegación</p>
                      <h2 className="docs-h2">Servicios</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {SERVICIOS.map((s) => (
                      <div key={s.titulo} className="destino-faq-item">
                        <dt className="destino-faq-q">{s.titulo}</dt>
                        <dd className="destino-faq-a">{s.descripcion}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Equipos admitidos</p>
                      <h2 className="docs-h2">Marcas que atendemos</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {MARCAS.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 16 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>Para instalaciones nuevas o modificaciones de aviónica se requiere aprobación previa de ingeniería. Contáctanos con el modelo de equipo y tipo de aeronave para verificar viabilidad.</p>
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">Otros servicios MRO</p>
                  <ul className="docs-related-list">
                    {OTROS.map((o) => (
                      <li key={o.href}>
                        <Link href={o.href} className="docs-related-link">
                          <span>{o.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">¿Necesitas servicio de aviónica?</p>
                  <p className="mro-cta-sidebar-desc">Comparte marca, modelo de equipo y tipo de aeronave para iniciar la cotización.</p>
                  <Link href="/mro/cotizacion/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Solicitar cotización
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
