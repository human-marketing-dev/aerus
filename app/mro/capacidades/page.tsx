import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Capacidades y certificaciones | Aerus MRO',
  description:
    'Aerus MRO cuenta con aprobación DGAC para el mantenimiento de aeronaves turbohélice. Conoce nuestras capacidades, tipos de aeronave admitidos y el alcance de nuestro taller.',
}

const CERTIFICACIONES = [
  {
    nombre: 'AMO DGAC México',
    descripcion: 'Organización de Mantenimiento Aprobada por la Dirección General de Aeronáutica Civil de México.',
  },
  {
    nombre: 'Pratt & Whitney Canada Authorized Service Center',
    descripcion: 'Centro de servicio autorizado para motores de la familia PT6A de Pratt & Whitney Canada.',
  },
  {
    nombre: 'Hartzell Propeller Certified Service Center',
    descripcion: 'Centro certificado para inspección, overhaul y reparación de hélices Hartzell.',
  },
  {
    nombre: 'McCauley Authorized Service',
    descripcion: 'Servicio autorizado para hélices McCauley serie 3-blade usadas en la familia Cessna 208.',
  },
]

const AERONAVES = [
  'Cessna 208 Caravan / Grand Caravan EX',
  'Cessna 208B Grand Caravan',
  'Cessna 182 / 172 (inspecciones y accesorios)',
  'Beechcraft King Air (accesorios y sistemas)',
  'Piper PA-31 Navajo (radios e instrumentos)',
  'Planeadores Cessna (serie 182 y derivados)',
]

const ALCANCE = [
  { titulo: 'Mantenimiento de línea', descripcion: 'Revisiones periódicas, cambio de componentes con vida limitada y mantenimiento programado en escala de horas de vuelo.' },
  { titulo: 'Mantenimiento de base (MX Base)', descripcion: 'Inspecciones mayores: 100 horas, 200 horas, anuales y bienales. Apertura y cierre de aeronave conforme al AMM del fabricante.' },
  { titulo: 'Overhaul de motores y hélices', descripcion: 'Desarmado, inspección, reparación y rearmado conforme a manuales de overhaul Pratt & Whitney Canada y Hartzell/McCauley.' },
  { titulo: 'Modificaciones y STC', descripcion: 'Instalación de modificaciones aprobadas por STC (Supplemental Type Certificate). Consultar disponibilidad por tipo de aeronave.' },
  { titulo: 'Aviónica y sistemas', descripcion: 'Instalación, calibración y mantenimiento de sistemas de navegación, radios y paneles de instrumentos.' },
]

const OTROS = [
  { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
  { label: 'Hélices', href: '/mro/helices/' },
  { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
  { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
]

export default function CapacidadesPage() {
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
              <span aria-current="page">Capacidades y certificaciones</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Capacidades y <span className="accent">certificaciones</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Taller aprobado DGAC. Conoce qué aeronaves atendemos, qué trabajos realizamos y bajo qué aprobaciones operamos.
            </p>
          </div>
        </section>

        <section className="mro-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Certificaciones */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="shield" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Aprobaciones vigentes</p>
                      <h2 className="docs-h2">Certificaciones</h2>
                    </div>
                  </div>
                  <div className="mro-cert-list">
                    {CERTIFICACIONES.map((c) => (
                      <div key={c.nombre} className="mro-cert-item">
                        <p className="mro-cert-nombre">{c.nombre}</p>
                        <p className="mro-cert-desc">{c.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aeronaves admitidas */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Tipos aprobados</p>
                      <h2 className="docs-h2">Aeronaves que atendemos</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {AERONAVES.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 16 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>¿Tu aeronave no está en la lista? Contáctanos — podemos evaluar la solicitud de mantenimiento conforme a nuestra aprobación AMO.</p>
                  </div>
                </div>

                {/* Alcance */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué hacemos</p>
                      <h2 className="docs-h2">Alcance de trabajo</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {ALCANCE.map((item) => (
                      <div key={item.titulo} className="destino-faq-item">
                        <dt className="destino-faq-q">{item.titulo}</dt>
                        <dd className="destino-faq-a">{item.descripcion}</dd>
                      </div>
                    ))}
                  </dl>
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
                  <p className="mro-cta-sidebar-titulo">¿Necesitas mantenimiento?</p>
                  <p className="mro-cta-sidebar-desc">Cuéntanos de tu aeronave y te mandamos una propuesta en 24 horas.</p>
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
