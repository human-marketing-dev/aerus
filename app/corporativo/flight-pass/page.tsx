import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Aerus Flight Pass | Aerus',
  description:
    'Bloque de vuelos prepagados para empresas. Precio fijo por vuelo, factura a razón social, prioridad en reservación y gestor de cuenta dedicado.',
}

const BENEFICIOS = [
  {
    icono: 'cash',
    titulo: 'Precio fijo por vuelo',
    desc: 'Tu empresa conoce exactamente el costo de cada vuelo antes de que el empleado viaje. Sin sorpresas en la liquidación.',
  },
  {
    icono: 'calendar',
    titulo: 'Prioridad en reservación',
    desc: 'Los titulares de Flight Pass tienen acceso preferente en rutas con alta demanda y cambios de fecha sin cargo adicional.',
  },
  {
    icono: 'mail',
    titulo: 'Factura a la empresa',
    desc: 'Un solo proceso de facturación mensual para todos los viajes del período. Compatible con los procesos contables de tu área de finanzas.',
  },
  {
    icono: 'support',
    titulo: 'Gestor de cuenta dedicado',
    desc: 'Un contacto directo en Aerus que conoce las rutas y necesidades de tu empresa. Disponible para cambios, ajustes y consultas.',
  },
  {
    icono: 'shield',
    titulo: 'Control de viajes',
    desc: 'Reporte mensual de vuelos por empleado, ruta y fecha. Información lista para conciliación con viáticos y gastos de viaje.',
  },
  {
    icono: 'users',
    titulo: 'Multi-empleado',
    desc: 'El Flight Pass puede asignarse a uno o varios empleados dentro de la misma cuenta. Ideal para equipos con rutas fijas.',
  },
]

const COMO_FUNCIONA = [
  {
    titulo: 'Define tus rutas',
    desc: 'Cuéntanos qué rutas vuelan tus empleados con mayor frecuencia y cuántos viajes al mes manejan en promedio.',
  },
  {
    titulo: 'Recibe tu propuesta de paquete',
    desc: 'Diseñamos un paquete a la medida de tu volumen. El precio por vuelo disminuye según el tamaño del bloque contratado.',
  },
  {
    titulo: 'Activa el Flight Pass',
    desc: 'Firmamos el convenio corporativo y activamos los accesos. Tus empleados pueden reservar desde ese momento.',
  },
  {
    titulo: 'Vuelas, nosotros facturamos',
    desc: 'Al cierre del período recibes la factura consolidada con el detalle de todos los vuelos realizados.',
  },
]

const FAQ = [
  {
    q: '¿Cuántos vuelos incluye un Flight Pass?',
    a: 'El número de vuelos se define según las necesidades de la empresa. Ofrecemos paquetes desde 10 vuelos mensuales. Contáctanos para una propuesta personalizada.',
  },
  {
    q: '¿Los vuelos del Flight Pass tienen fecha de vencimiento?',
    a: 'Los bloques de vuelo tienen una vigencia definida en el convenio. Los vuelos no utilizados dentro del período pueden prorratearse según las condiciones del acuerdo.',
  },
  {
    q: '¿Puede un empleado usar el Flight Pass para rutas fuera de la red Aerus?',
    a: 'El Flight Pass aplica exclusivamente a las rutas operadas por Aerus. Para conexiones adicionales a través de Viva Aerobus, consulta nuestra sección de conexiones.',
  },
  {
    q: '¿Se puede transferir un vuelo a otro empleado?',
    a: 'Sí, con un mínimo de 24 horas de anticipación. El gestor de cuenta puede hacer el cambio de nombre sin cargo adicional.',
  },
]

export default function FlightPassPage() {
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
              <span aria-current="page">Aerus Flight Pass</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Corporativo</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Aerus <span className="accent">Flight Pass</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Vuelos prepagados para empresas cuyos empleados viajan en rutas Aerus
              de forma recurrente. Precio fijo, factura mensual y prioridad en cada reservación.
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                {/* Beneficios */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="ticket" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Ventajas del pase</p>
                      <h2 className="docs-h2">Qué incluye el Flight Pass</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {BENEFICIOS.map((b) => (
                      <div key={b.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={b.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{b.titulo}</p>
                        <p className="corp-uso-desc">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cómo funciona */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>Cómo funciona</h2>
                  <ol className="fact-steps">
                    {COMO_FUNCIONA.map((p, i) => (
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

                {/* FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 20 }}>Preguntas frecuentes</h2>
                  <dl className="destino-faq">
                    {FAQ.map((f) => (
                      <div key={f.q} className="destino-faq-item">
                        <dt className="destino-faq-q">{f.q}</dt>
                        <dd className="destino-faq-a">{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">¿Tu empresa vuela Aerus?</p>
                  <p className="mro-cta-sidebar-desc">
                    Cuéntanos cuántos vuelos manejan al mes y te preparamos una propuesta de Flight Pass.
                  </p>
                  <Link
                    href="/corporativo/flight-pass/contacto/"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    Solicitar información
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">También puede interesarte</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Aerus Charter',         href: '/corporativo/charter/' },
                      { label: 'Cuenta empresarial',    href: '/corporativo/empresas/' },
                      { label: 'Red de rutas',          href: '/rutas/' },
                      { label: 'Conexiones Viva Aerobus', href: '/rutas/conexiones-viva-aerobus/' },
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
                  <p className="mro-contact-card-tag">Contacto corporativo</p>
                  <p className="mro-contact-card-title">Equipo Empresas</p>
                  <div className="mro-contact-row">
                    <Icon name="mail" size={14} stroke={1.5} />
                    <a href="mailto:corporativo@aerus.mx">corporativo@aerus.mx</a>
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
