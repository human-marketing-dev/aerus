import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Vuelos para grupos | Aerus',
  description:
    'Viaja en grupo con Aerus. Coordinamos vuelos para equipos deportivos, grupos corporativos, familiares y cualquier conjunto de 8 pasajeros o más. Solicita tu cotización.',
}

const TIPOS = [
  {
    icono: 'users',
    titulo: 'Grupos corporativos',
    descripcion: 'Traslado de equipos de trabajo, directivos o delegaciones a reuniones y eventos de negocio. Factura a razón social de la empresa.',
  },
  {
    icono: 'plane',
    titulo: 'Equipos deportivos',
    descripcion: 'Vuelos coordinados para equipos, cuerpos técnicos y staff. Gestión de equipaje especial (implementos deportivos) incluida en la coordinación.',
  },
  {
    icono: 'ticket',
    titulo: 'Grupos turísticos y familiares',
    descripcion: 'Reuniones familiares, bodas, quinceaños o excursiones. Organizamos la logística para que el grupo vuele junto y a tiempo.',
  },
  {
    icono: 'shield',
    titulo: 'Grupos académicos',
    descripcion: 'Viajes escolares, delegaciones universitarias y grupos de investigación. Coordinación con responsables del grupo y documentación requerida para menores.',
  },
]

const BENEFICIOS = [
  'Asientos asignados juntos en el mismo vuelo.',
  'Coordinación directa con un agente Aerus durante todo el proceso.',
  'Posibilidad de facturar a nombre de empresa u organización.',
  'Gestión de requerimientos especiales del grupo (dietas, movilidad, menores).',
  'Flexibilidad en cambios de fecha con mínimo 72 horas de anticipación.',
  'Opción de vuelo exclusivo (charter) para grupos que requieran mayor privacidad o logística.',
]

const PASOS = [
  {
    titulo: 'Cuéntanos de tu grupo',
    descripcion: 'Envíanos el número de pasajeros, origen, destino, fecha(s) tentativa(s) y tipo de grupo. Mientras más detalles, más precisa será la propuesta.',
  },
  {
    titulo: 'Recibe tu propuesta en 24 horas',
    descripcion: 'Nuestro equipo revisa disponibilidad y te envía una propuesta de vuelo con tarifas de grupo, opciones de fecha y condiciones de pago.',
  },
  {
    titulo: 'Confirma y gestiona los pasajeros',
    descripcion: 'Al confirmar, te pedimos la lista de pasajeros con nombre completo e identificación. El pago puede hacerse en bloque o por pasajero según se acuerde.',
  },
  {
    titulo: 'El día del vuelo, nosotros te esperamos',
    descripcion: 'Asignamos un agente en aeropuerto para recibir al grupo, agilizar el check-in y coordinar el abordaje. Tu grupo viaja junto, sin complicaciones.',
  },
]

export default function GruposPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/experiencia/">Experiencia</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Vuelos para grupos</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Experiencia Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Vuelos para <span className="accent">grupos</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              ¿Viajan 8 o más personas? Aerus coordina el vuelo para que tu grupo llegue junto, a tiempo y sin el caos de reservar asientos uno por uno.
            </p>
          </div>
        </section>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Tipos de grupo */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Para quién es</p>
                      <h2 className="docs-h2">Tipos de grupos que atendemos</h2>
                    </div>
                  </div>
                  <div className="exp-grupos-tipos-grid">
                    {TIPOS.map((t) => (
                      <div key={t.titulo} className="exp-grupos-tipo-card">
                        <div className="exp-grupos-tipo-icon">
                          <Icon name={t.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="exp-grupos-tipo-titulo">{t.titulo}</p>
                        <p className="exp-grupos-tipo-desc">{t.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué incluye</p>
                      <h2 className="docs-h2">Beneficios del vuelo grupal</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {BENEFICIOS.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>

                {/* Proceso */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>Cómo funciona</h2>
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
              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">¿Cuántos viajan?</p>
                  <p className="mro-cta-sidebar-desc">Escríbenos con los datos del grupo y te respondemos en 24 horas con disponibilidad y tarifas.</p>
                  <a
                    href="mailto:grupos@aerus.mx"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    Escribir a grupos@aerus.mx
                  </a>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">También puede interesarte</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Corporativo — charter', href: '/corporativo/charter/' },
                      { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
                      { label: 'Equipaje', href: '/ayuda/equipaje/' },
                      { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
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
      <Footer />
    </>
  )
}
