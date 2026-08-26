import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Cotizar chárter | Aerus',
  description:
    'Solicita una cotización para tu vuelo chárter con Aerus. Envíanos los datos de tu vuelo y te respondemos en menos de 24 horas.',
}

const DATOS = [
  'Ciudad de origen y ciudad de destino',
  'Fecha y horario de salida (puede ser tentativo)',
  'Número de pasajeros (máximo 9)',
  'Nombre de la empresa o responsable del vuelo',
  'Si necesitas vuelo de regreso y en qué fecha',
  'Cualquier requerimiento especial (equipaje extra, escalas, etc.)',
]

export default function CotizarCharterPage() {
  return (
    <>
      <Nav />
      <main>

        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/corporativo/">Corporativo</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/corporativo/charter/">Aerus Charter</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Cotizar</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus Charter</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Solicita tu <span className="accent">cotización</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Envíanos los datos de tu vuelo por correo o WhatsApp y te respondemos
              con una propuesta en menos de 24 horas hábiles.
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="mail" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué necesitamos saber</p>
                      <h2 className="docs-h2">Datos para tu cotización</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)', marginBottom: 20 }}>
                    Para prepararte la cotización más precisa posible, incluye los siguientes datos
                    en tu mensaje:
                  </p>
                  <ul className="docs-list">
                    {DATOS.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="clock" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Tiempos de respuesta</p>
                      <h2 className="docs-h2">¿Cuándo te respondemos?</h2>
                    </div>
                  </div>
                  <div className="docs-callout">
                    Respondemos cotizaciones de chárter en <strong>menos de 24 horas hábiles</strong>.
                    Si tu vuelo es urgente (dentro de las próximas 48 horas), indícalo en el mensaje
                    y priorizamos tu solicitud.
                  </div>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué esperar</p>
                      <h2 className="docs-h2">Cómo es la propuesta</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)' }}>
                    La propuesta incluye precio total del vuelo, itinerario con horarios tenttativos,
                    aeronave asignada, condiciones de pago y política de cancelación. Puedes aceptarla,
                    pedir ajustes o rechazarla — sin compromiso hasta que la confirmes.
                  </p>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">Escríbenos ahora</p>
                  <p className="mro-cta-sidebar-desc">Incluye los datos del vuelo y te respondemos en menos de 24 horas.</p>
                  <a
                    href="mailto:charter@aerus.mx?subject=Cotización chárter"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 10 }}
                  >
                    <Icon name="mail" size={15} stroke={1.5} />
                    charter@aerus.mx
                  </a>
                  <a
                    href="tel:+528126823501"
                    className="btn btn-on-dark"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    <Icon name="phone" size={15} stroke={1.5} />
                    +52 812 682 3501
                  </a>
                  <p style={{ font: '400 12px/1.4 var(--font-body)', color: 'rgba(255,255,255,0.30)', marginTop: 14 }}>
                    Lunes a viernes · 08:00–18:00 h CST
                  </p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Antes de cotizar</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Qué incluye el chárter', href: '/corporativo/charter/' },
                      { label: 'Red de rutas',            href: '/rutas/' },
                      { label: 'La flota Aerus',          href: '/experiencia/flota/' },
                    ].map((r) => (
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
      <Newsletter/>
      <Footer />
    </>
  )
}
