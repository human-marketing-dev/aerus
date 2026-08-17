import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Solicitar cotización MRO | Aerus',
  description:
    'Solicita una cotización de mantenimiento aeronáutico a Aerus MRO. Comparte los datos de tu aeronave y el servicio requerido — te respondemos en 24 horas.',
}

const PASOS = [
  {
    titulo: 'Identifica el servicio que necesitas',
    descripcion:
      'Revisa nuestra sección de servicios MRO: motores PT6A, hélices, accesorios, radios e instrumentos. Si no estás seguro, indícanos los síntomas o el mantenimiento programado próximo y nuestro equipo técnico te orientará.',
  },
  {
    titulo: 'Reúne los datos de tu aeronave',
    descripcion:
      'Para preparar la cotización necesitamos: fabricante, modelo y serie de la aeronave; matrícula (registro N- o XB-); total de horas de vuelo y horas desde el último overhaul del componente a revisar.',
  },
  {
    titulo: 'Contáctanos por teléfono o correo',
    descripcion:
      'Envíanos los datos al correo mro@aerus.mx o llámanos al número de MRO. Nuestro equipo técnico revisará la información, confirmará si el trabajo está dentro de nuestro alcance AMO y preparará la propuesta.',
  },
  {
    titulo: 'Recibe tu cotización en 24 horas',
    descripcion:
      'Te enviamos una propuesta formal con alcance de trabajo, tiempo estimado de entrega y costo. Si aceptas, coordinamos la recepción de la aeronave o el componente en nuestras instalaciones.',
  },
]

const DATOS_NECESARIOS = [
  'Fabricante, modelo y serie de la aeronave (ej. Cessna 208B Grand Caravan EX)',
  'Registro de la aeronave (matrícula XB- o N-)',
  'Total de horas de vuelo (TTSN)',
  'Horas desde el último overhaul del componente (SMOH)',
  'Descripción del servicio requerido o síntomas observados',
  'Fecha tentativa de ingreso al taller',
]

export default function CotizacionMroPage() {
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
              <span aria-current="page">Solicitar cotización</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Solicitar <span className="accent">cotización</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Cuéntanos qué necesita tu aeronave. Nuestro equipo técnico evalúa el trabajo y te responde con una propuesta formal en menos de 24 horas hábiles.
            </p>
          </div>
        </section>

        <section className="mro-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Pasos */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>Cómo solicitar tu cotización</h2>
                  <ol className="fact-steps">
                    {PASOS.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.descripcion}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Datos necesarios */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué necesitamos saber</p>
                      <h2 className="docs-h2">Datos de la aeronave</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {DATOS_NECESARIOS.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>Si tu aeronave requiere atención urgente o presentó una falla en vuelo, comunícate directamente por teléfono para atención prioritaria.</p>
                  </div>
                </div>
              </div>

              {/* Sidebar — contacto */}
              <aside className="docs-sidebar">
                <div className="mro-contact-card">
                  <p className="mro-contact-card-tag">Contacto MRO</p>
                  <h3 className="mro-contact-card-title">Escríbenos o llámanos</h3>

                  <a href="mailto:mro@aerus.mx" className="mro-contact-row">
                    <Icon name="mail" size={16} stroke={1.5} />
                    <span>mro@aerus.mx</span>
                  </a>
                  <a href="tel:+528126823501" className="mro-contact-row">
                    <Icon name="phone" size={16} stroke={1.5} />
                    <span>+52 (812) 682·3501</span>
                  </a>

                  <p className="mro-contact-horario">Lun–Vie · 08:00–18:00 hrs</p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Servicios MRO</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
                      { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
                      { label: 'Hélices', href: '/mro/helices/' },
                      { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
                      { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
                    ].map((o) => (
                      <li key={o.href}>
                        <Link href={o.href} className="docs-related-link">
                          <span>{o.label}</span>
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
