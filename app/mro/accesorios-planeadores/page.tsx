import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Accesorios y planeadores Cessna | Aerus MRO',
  description:
    'Mantenimiento de accesorios de la célula y servicio especializado en planeadores Cessna. Aerus MRO: taller aprobado DGAC para turbohélices y planeadores.',
}

const ACCESORIOS = [
  {
    titulo: 'Sistema de combustible',
    descripcion: 'Inspección y reparación de tanques, líneas, válvulas de selector, bombas de transferencia y filtros. Verificación de estanqueidad conforme al AMM.',
  },
  {
    titulo: 'Sistema de tren de aterrizaje',
    descripcion: 'Inspección, lubricación y ajuste de tren fijo y retráctil. Cambio de amortiguadores, neumáticos, frenos y accesorios de acero. Servicio de ruedas y frenos Cleveland.',
  },
  {
    titulo: 'Sistema hidráulico',
    descripcion: 'Inspección de líneas y componentes hidráulicos, purga y cambio de fluido, reparación de sellos y actuadores conforme al CMM del componente.',
  },
  {
    titulo: 'Sistema de control de vuelo',
    descripcion: 'Inspección de cables, poleas y varillas de mando, ajuste de tensión y verificación de recorrido de superficies de control conforme a valores AMM.',
  },
  {
    titulo: 'Sistema eléctrico de la célula',
    descripcion: 'Diagnóstico, inspección y reparación de arneses, interruptores de circuito y luminarias. No incluye aviónica (ver Radios e instrumentos).',
  },
]

const PLANEADORES = [
  {
    titulo: 'Inspección anual y bienal',
    descripcion: 'Revisión completa del planeador conforme a la lista de verificación del fabricante y requerimientos DGAC para aeronaves de ala fija no motorizadas.',
  },
  {
    titulo: 'Reparación de célula',
    descripcion: 'Reparación de superficies de fibra de vidrio, revestimientos de aluminio y componentes estructurales dentro de los límites de reparación del Manual de Estructura.',
  },
  {
    titulo: 'Sistema de despliegue de paracaídas (BRS)',
    descripcion: 'Inspección y recarga del sistema BRS (Ballistic Recovery System) conforme al manual del fabricante para modelos Cessna que lo incluyen como equipo estándar o STC.',
  },
]

const OTROS = [
  { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
  { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
  { label: 'Hélices', href: '/mro/helices/' },
  { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
]

export default function AccesoriosPlaneadoresPage() {
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
              <span aria-current="page">Accesorios y planeadores</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Accesorios y <span className="accent">planeadores</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Mantenimiento de sistemas de la célula — combustible, tren de aterrizaje, hidráulico y controles — además de servicio especializado en planeadores Cessna.
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
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Sistemas de aeronave</p>
                      <h2 className="docs-h2">Accesorios de la célula</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {ACCESORIOS.map((s) => (
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
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Servicio especializado</p>
                      <h2 className="docs-h2">Planeadores Cessna</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {PLANEADORES.map((s) => (
                      <div key={s.titulo} className="destino-faq-item">
                        <dt className="destino-faq-q">{s.titulo}</dt>
                        <dd className="destino-faq-a">{s.descripcion}</dd>
                      </div>
                    ))}
                  </dl>
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
                  <p className="mro-cta-sidebar-titulo">¿Necesitas servicio de accesorios?</p>
                  <p className="mro-cta-sidebar-desc">Cuéntanos el sistema y tipo de aeronave — te respondemos en 24 horas.</p>
                  <Link href="/mro/cotizacion/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Solicitar cotización
                  </Link>
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
