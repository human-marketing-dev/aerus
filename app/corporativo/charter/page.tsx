import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Aerus Charter | Aerus',
  description:
    'Chárter ejecutivo y grupal con Aerus. Avión exclusivo, horario a tu medida, hasta 9 pasajeros. Para eventos corporativos, delegaciones, equipos deportivos y traslados urgentes.',
}

const USOS = [
  {
    icono: 'users',
    titulo: 'Viajes ejecutivos',
    desc: 'Directivos y equipos que necesitan llegar el mismo día a una reunión, sin depender de horarios comerciales.',
  },
  {
    icono: 'plane',
    titulo: 'Delegaciones y eventos',
    desc: 'Traslado de grupos a convenciones, lanzamientos, inauguraciones o eventos corporativos en destinos regionales.',
  },
  {
    icono: 'ticket',
    titulo: 'Equipos deportivos',
    desc: 'Vuelos coordinados para equipos, cuerpos técnicos y staff. Gestión de equipaje especial incluida en la coordinación.',
  },
  {
    icono: 'clock',
    titulo: 'Traslados urgentes',
    desc: 'Cuando un vuelo comercial no existe o no llega a tiempo. Salida en el horario que necesitas hacia cualquier destino de la red.',
  },
]

const INCLUYE = [
  'Uso exclusivo de la aeronave para tu grupo (hasta 9 pasajeros)',
  'Horario de salida y llegada definido por ti',
  'Salida desde cualquier aeropuerto dentro de la red Aerus',
  'Flexibilidad de equipaje mayor a vuelos regulares',
  'Factura a razón social de la empresa',
  'Atención de un agente Aerus durante todo el proceso',
  'Posibilidad de escala intermedia según la ruta',
]

const PASOS = [
  {
    titulo: 'Cuéntanos del vuelo',
    desc: 'Origen, destino, fecha, horario tentativo y número de pasajeros. Mientras más detalle, más precisa será la propuesta.',
  },
  {
    titulo: 'Recibe tu propuesta en 24h',
    desc: 'Nuestro equipo revisa disponibilidad de aeronave y te envía una propuesta con precio, itinerario y condiciones de pago.',
  },
  {
    titulo: 'Confirma y paga',
    desc: 'Al confirmar la propuesta coordinamos todos los detalles operativos. El pago puede realizarse por transferencia o cargo a cuenta empresarial.',
  },
  {
    titulo: 'Vuela',
    desc: 'El día del vuelo, llega al aeropuerto 60 minutos antes. Tu avión está esperando — no hay filas de check-in ni espera en sala.',
  },
]

export default function CharterPage() {
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
              <span aria-current="page">Aerus Charter</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Corporativo</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Aerus <span className="accent">Charter</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Avión exclusivo para tu grupo o evento. Tú defines el destino, la fecha
              y el horario. Hasta 9 pasajeros. Vuelo directo, sin escalas, sin horarios ajenos.
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                {/* Para quién es */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Para quién es</p>
                      <h2 className="docs-h2">Usos frecuentes del chárter</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {USOS.map((u) => (
                      <div key={u.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={u.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{u.titulo}</p>
                        <p className="corp-uso-desc">{u.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qué incluye */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">El servicio</p>
                      <h2 className="docs-h2">Qué incluye el chárter</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {INCLUYE.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>

                {/* Cómo funciona */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>Cómo funciona</h2>
                  <ol className="fact-steps">
                    {PASOS.map((p, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{p.titulo}</p>
                          <p className="fact-step-desc">{p.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">Solicita tu cotización</p>
                  <p className="mro-cta-sidebar-desc">
                    Envíanos los datos del vuelo y te respondemos con una propuesta en menos de 24 horas.
                  </p>
                  <Link
                    href="/corporativo/charter/cotizar/"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    Cotizar chárter
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">También puede interesarte</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Aerus Flight Pass',     href: '/corporativo/flight-pass/' },
                      { label: 'Cuenta empresarial',    href: '/corporativo/empresas/' },
                      { label: 'Vuelos para grupos',    href: '/experiencia/grupos/' },
                      { label: 'Red de rutas',          href: '/rutas/' },
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

                <div className="mro-contact-card" style={{ marginTop: 16 }}>
                  <p className="mro-contact-card-tag">Contacto directo</p>
                  <p className="mro-contact-card-title">Equipo Charter</p>
                  <div className="mro-contact-row">
                    <Icon name="mail" size={14} stroke={1.5} />
                    <a href="mailto:charter@aerus.mx">charter@aerus.mx</a>
                  </div>
                  <div className="mro-contact-row">
                    <Icon name="phone" size={14} stroke={1.5} />
                    <a href="tel:+528126823501">+52 812 682 3501</a>
                  </div>
                  <p className="mro-contact-horario">Lun–Vie · 08:00–18:00 h</p>
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
