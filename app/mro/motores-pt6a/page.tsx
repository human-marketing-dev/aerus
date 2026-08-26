import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Motores PT6A | Aerus MRO',
  description:
    'Mantenimiento, inspección y overhaul de motores Pratt & Whitney Canada serie PT6A. Centro de servicio autorizado Aerus MRO, aprobado DGAC.',
}

const MODELOS = [
  { modelo: 'PT6A-114A', aplicacion: 'Cessna 208B Grand Caravan EX' },
  { modelo: 'PT6A-135A', aplicacion: 'Cessna 208B Super Cargomaster' },
  { modelo: 'PT6A-34', aplicacion: 'Piper PA-31T Cheyenne' },
  { modelo: 'PT6A-60A', aplicacion: 'Beechcraft King Air C90' },
]

const SERVICIOS = [
  {
    titulo: 'Inspección de sección caliente (HSI)',
    descripcion:
      'Apertura del módulo de potencia para inspección visual, dimensional y por partículas magnéticas de los componentes de la sección de combustión, turbinas y accesorios de gas caliente. Incluye sustitución de piezas con vida limitada conforme a la lista del fabricante.',
  },
  {
    titulo: 'Overhaul completo (TBO)',
    descripcion:
      'Desarmado completo hasta componente, limpieza, inspección dimensional y de grietas, reparación o sustitución de partes, rearmado y prueba de aceptación conforme al Engine Overhaul Manual (EOM) de Pratt & Whitney Canada.',
  },
  {
    titulo: 'Mantenimiento de línea y 100 horas',
    descripcion:
      'Cambios de aceite, filtros, bujías de ignición, inspección visual de boroscopio y revisión de accesorios conforme al Aircraft Maintenance Manual (AMM) en los intervalos programados.',
  },
  {
    titulo: 'Servicio de accesorios del motor',
    descripcion:
      'Mantenimiento del grupo de accesorios: bomba de combustible, bomba de aceite, unidad de control de combustible (FCU), gobernador de hélice y alternadores — realizados conforme a los manuales del componente.',
  },
  {
    titulo: 'Diagnóstico y troubleshooting',
    descripcion:
      'Análisis espectral de aceite (SOAP), lectura de datos del motor (chip detector, temperatura ITT, torque) y diagnóstico por boroscopio para determinar el estado del motor sin apertura mayor.',
  },
]

const OTROS = [
  { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
  { label: 'Hélices', href: '/mro/helices/' },
  { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
  { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
]

export default function MotoresPt6aPage() {
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
              <span aria-current="page">Motores PT6A</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Motores <span className="accent">PT6A</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Centro de servicio autorizado Pratt & Whitney Canada. Inspeccionamos, mantenemos y hacemos overhaul de motores PT6A conforme al EOM del fabricante.
            </p>
          </div>
        </section>

        <section className="mro-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Servicios */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué hacemos</p>
                      <h2 className="docs-h2">Servicios de motor</h2>
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

                {/* Modelos admitidos */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Modelos con aprobación</p>
                      <h2 className="docs-h2">Variantes PT6A que atendemos</h2>
                    </div>
                  </div>
                  <div className="mro-modelos-table">
                    <div className="mro-modelos-header">
                      <span>Modelo</span>
                      <span>Aeronave de aplicación</span>
                    </div>
                    {MODELOS.map((m) => (
                      <div key={m.modelo} className="mro-modelos-row">
                        <span className="mro-modelos-modelo">{m.modelo}</span>
                        <span className="mro-modelos-aplicacion">{m.aplicacion}</span>
                      </div>
                    ))}
                  </div>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>¿Tienes un PT6A de otra variante? Contáctanos para verificar si tu motor está dentro del alcance de nuestra aprobación AMO.</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
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
                  <p className="mro-cta-sidebar-titulo">¿Necesitas servicio de motor?</p>
                  <p className="mro-cta-sidebar-desc">Dinos el modelo de tu PT6A, las horas actuales y el tipo de mantenimiento requerido.</p>
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
