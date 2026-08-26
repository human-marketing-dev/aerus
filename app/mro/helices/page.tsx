import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Hélices — McCauley y Hartzell | Aerus MRO',
  description:
    'Balanceo, inspección y overhaul de hélices McCauley y Hartzell. Aerus MRO: centro de servicio certificado para hélices de aeronaves turbohélice.',
}

const SERVICIOS = [
  {
    titulo: 'Inspección y diagnóstico',
    descripcion:
      'Inspección visual, dimensional y por líquidos penetrantes de palas, cubo y accesorios. Verificación de corrosión, daños por FOD (Foreign Object Damage) y estado del sistema de paso variable.',
  },
  {
    titulo: 'Overhaul conforme a TBO',
    descripcion:
      'Desarmado completo, limpieza, inspección de componentes, reparación o sustitución de piezas y rearmado conforme al Propeller Overhaul Manual de Hartzell o McCauley según corresponda.',
  },
  {
    titulo: 'Balanceo dinámico',
    descripcion:
      'Balanceo dinámico en campo con equipo especializado para reducir vibración y mejorar vida útil del motor y la célula. Recomendado tras cada overhaul o cambio de pala.',
  },
  {
    titulo: 'Reparación de palas',
    descripcion:
      'Reparación de bordes de ataque, parchado de grietas dentro de los límites del manual y tratamiento anticorrosivo. Evaluación de daños fuera de límites para posible devolución al fabricante.',
  },
  {
    titulo: 'Servicio del gobernador de hélice',
    descripcion:
      'Inspección, calibración y overhaul del gobernador de paso de hélice (Woodward y otros) según Manual de Overhaul del componente.',
  },
]

const MARCAS = [
  { marca: 'McCauley', series: '3-blade (3AF32C87, series 3AF), usado en Cessna 208 Grand Caravan EX' },
  { marca: 'Hartzell', series: 'HC-B3TN, HC-C2YK y otras series — Cessna 208, King Air, Piper' },
]

const OTROS = [
  { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
  { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
  { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
  { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
]

export default function HelicesPage() {
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
              <span aria-current="page">Hélices</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Hélices <span className="accent">McCauley y Hartzell</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Centro de servicio certificado. Balanceo, inspección y overhaul de hélices para aeronaves turbohélice conforme a los manuales de overhaul del fabricante.
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
                      <Icon name="swap" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Servicios de hélice</p>
                      <h2 className="docs-h2">Qué realizamos</h2>
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
                      <p className="docs-subtitulo">Marcas certificadas</p>
                      <h2 className="docs-h2">Hélices que atendemos</h2>
                    </div>
                  </div>
                  <div className="mro-modelos-table">
                    <div className="mro-modelos-header">
                      <span>Marca</span>
                      <span>Series y aplicaciones</span>
                    </div>
                    {MARCAS.map((m) => (
                      <div key={m.marca} className="mro-modelos-row">
                        <span className="mro-modelos-modelo">{m.marca}</span>
                        <span className="mro-modelos-aplicacion">{m.series}</span>
                      </div>
                    ))}
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
                  <p className="mro-cta-sidebar-titulo">¿Necesitas servicio de hélice?</p>
                  <p className="mro-cta-sidebar-desc">Indícanos marca, modelo y horas actuales de tu hélice.</p>
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
