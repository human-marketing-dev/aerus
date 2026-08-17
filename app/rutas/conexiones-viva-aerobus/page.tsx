import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Conexiones con Viva Aerobus | Aerus',
  description:
    'Combina tu vuelo regional Aerus con la red nacional e internacional de Viva Aerobus. Más destinos, una sola experiencia.',
}

const COMO_FUNCIONA = [
  {
    titulo: 'Reserva tu vuelo Aerus',
    desc: 'Selecciona tu ruta regional de origen y reserva tu vuelo con Aerus normalmente.',
  },
  {
    titulo: 'Conecta con Viva Aerobus',
    desc: 'En el aeropuerto de conexión, continúa tu viaje con Viva Aerobus hacia tu destino final.',
  },
  {
    titulo: 'Llega a más destinos',
    desc: 'La red combinada te da acceso a destinos nacionales e internacionales que Aerus no cubre directamente.',
  },
]

const BENEFICIOS = [
  'Acceso a la red nacional e internacional de Viva Aerobus desde tus rutas regionales Aerus.',
  'Conexiones coordinadas para minimizar el tiempo de escala.',
  'Una sola experiencia de servicio — el mismo estándar Aerus en la etapa regional.',
  'Ideal para viajeros del norte y sureste de México que necesitan conectar con los grandes hubs.',
]

const HUBS_CONEXION = [
  {
    ciudad: 'Monterrey',
    iata: 'MTY',
    rutas: ['Brownsville', 'Laredo', 'McAllen', 'Durango'],
    desc: 'Hub principal del noreste. Desde MTY conectas con la red Viva Aerobus hacia CDMX, Cancún, Los Cabos y más.',
  },
  {
    ciudad: 'Cancún',
    iata: 'CUN',
    rutas: ['Cozumel', 'Chetumal'],
    desc: 'Hub del Caribe mexicano. Desde CUN la red Viva Aerobus cubre destinos del interior del país y Estados Unidos.',
  },
  {
    ciudad: 'Veracruz',
    iata: 'VER',
    rutas: ['Villahermosa'],
    desc: 'Hub del Golfo. Desde VER conectas hacia el centro y norte del país a través de la red de Viva Aerobus.',
  },
]

export default function ConexionesVivaPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section className="viva-hero">
          <div className="container viva-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/rutas/">Rutas</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Conexiones Viva Aerobus</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Red ampliada</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Conexiones con <span className="accent">Viva Aerobus</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Tu vuelo regional con Aerus conecta con la red nacional e internacional de
              Viva Aerobus. Más destinos desde las ciudades que ya servimos.
            </p>
          </div>
        </section>

        <section className="viva-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Cómo funciona */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="swap" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">El esquema</p>
                      <h2 className="docs-h2">Cómo funcionan las conexiones</h2>
                    </div>
                  </div>
                  <ol className="fact-steps">
                    {COMO_FUNCIONA.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Hubs de conexión */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="pin" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Puntos de conexión</p>
                      <h2 className="docs-h2">Hubs donde conectas</h2>
                    </div>
                  </div>
                  <div className="viva-hubs-grid">
                    {HUBS_CONEXION.map(h => (
                      <div key={h.iata} className="viva-hub-card">
                        <div className="viva-hub-header">
                          <span className="viva-hub-iata">{h.iata}</span>
                          <p className="viva-hub-ciudad">{h.ciudad}</p>
                        </div>
                        <p className="viva-hub-desc">{h.desc}</p>
                        <div className="viva-hub-rutas">
                          <p className="viva-hub-rutas-label">Rutas Aerus que conectan aquí:</p>
                          <div className="viva-hub-chips">
                            {h.rutas.map(dest => (
                              <span key={dest} className="viva-hub-chip">{dest}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Ventajas</p>
                      <h2 className="docs-h2">Por qué usar la conexión</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {BENEFICIOS.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">¿Necesitas ayuda con tu conexión?</p>
                  <p className="mro-cta-sidebar-desc">
                    Nuestro equipo te orienta sobre la mejor combinación de vuelos para llegar
                    a tu destino final.
                  </p>
                  <Link
                    href="/ayuda/contacto/"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    Contactar Aerus
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Rutas Aerus</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Monterrey – Brownsville', href: '/rutas/monterrey-brownsville/' },
                      { label: 'Monterrey – Laredo',      href: '/rutas/monterrey-laredo/' },
                      { label: 'Monterrey – McAllen',     href: '/rutas/monterrey-mcallen/' },
                      { label: 'Monterrey – Durango',     href: '/rutas/monterrey-durango/' },
                      { label: 'Cancún – Cozumel',        href: '/rutas/cancun-cozumel/' },
                      { label: 'Cancún – Chetumal',       href: '/rutas/cancun-chetumal/' },
                      { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/' },
                    ].map(r => (
                      <li key={r.href}>
                        <Link href={r.href} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
