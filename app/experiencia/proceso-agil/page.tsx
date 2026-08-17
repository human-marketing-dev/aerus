import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Espera minutos, no horas | Aerus',
  description:
    'En Aerus llegas al aeropuerto 90 minutos antes, no 3 horas. Terminales regionales más ágiles, menos filas y un proceso de abordaje diseñado para ir al grano.',
}

type Comparacion = { aspecto: string; grande: string; aerus: string }

const COMPARACION: Comparacion[] = [
  { aspecto: 'Llegada recomendada', grande: '3 horas antes', aerus: '90 minutos antes' },
  { aspecto: 'Tiempo en fila de check-in', grande: '30–60 min', aerus: '5–10 min' },
  { aspecto: 'Controles de seguridad', grande: 'Terminal internacional masiva', aerus: 'Terminal regional con menos afluencia' },
  { aspecto: 'Sala de espera', grande: 'Cientos de pasajeros', aerus: 'Ambiente tranquilo, vuelo pequeño' },
  { aspecto: 'Abordaje', grande: 'Por grupos, 30–45 min', aerus: 'Directo, 10 min' },
  { aspecto: 'Llegada y salida del avión', grande: 'Puerta de manga, esperas', aerus: 'Acceso directo a pista en muchos destinos' },
]

const PASOS = [
  {
    icono: 'calendar',
    paso: '90 min antes',
    titulo: 'Llega al aeropuerto',
    descripcion: 'En vuelos nacionales Aerus basta llegar 90 minutos antes. Para vuelos internacionales (Texas) recomendamos 2:30 horas por los trámites migratorios.',
  },
  {
    icono: 'user',
    paso: 'Check-in',
    titulo: 'Documenta en minutos',
    descripcion: 'El mostrador Aerus tiene filas cortas. Si ya hiciste tu check-in en línea, puedes ir directo a documentar equipaje o a controles de seguridad si viajas solo con equipaje de mano.',
  },
  {
    icono: 'shield',
    paso: 'Seguridad',
    titulo: 'Controles ágiles',
    descripcion: 'Las terminales regionales tienen menos flujo de personas. El proceso de revisión de seguridad suele tomar menos de 10 minutos.',
  },
  {
    icono: 'plane-takeoff',
    paso: 'Abordaje',
    titulo: 'Directamente al avión',
    descripcion: 'El Cessna Grand Caravan EX aborda a todos los pasajeros desde la pista o puerta en un proceso que dura alrededor de 10 minutos. Sin manga, sin grupos, sin espera.',
  },
]

const SERVICIOS_RELACIONADOS = [
  { label: 'La flota', href: '/experiencia/flota/' },
  { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
  { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/' },
  { label: 'Check-in en línea', href: '/check-in/' },
]

export default function ProcesoAgilPage() {
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
              <span aria-current="page">Espera minutos, no horas</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Experiencia Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Espera minutos, <span className="accent">no horas</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Las aerolíneas grandes te piden llegar 3 horas antes. En Aerus, 90 minutos son suficientes. Terminales regionales más ágiles, filas cortas y abordaje directo.
            </p>
          </div>
        </section>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Comparación */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="clock" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Aerus vs. aerolíneas tradicionales</p>
                      <h2 className="docs-h2">¿Cuánto tiempo te ahorra Aerus?</h2>
                    </div>
                  </div>
                  <div className="exp-comparacion-table">
                    <div className="exp-comparacion-header">
                      <span></span>
                      <span>Aerolínea grande</span>
                      <span>Aerus</span>
                    </div>
                    {COMPARACION.map((c) => (
                      <div key={c.aspecto} className="exp-comparacion-row">
                        <span className="exp-comp-aspecto">{c.aspecto}</span>
                        <span className="exp-comp-grande">{c.grande}</span>
                        <span className="exp-comp-aerus">{c.aerus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pasos */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 28 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane-takeoff" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Tu día de vuelo</p>
                      <h2 className="docs-h2">El proceso paso a paso</h2>
                    </div>
                  </div>
                  <div className="exp-pasos-grid">
                    {PASOS.map((p) => (
                      <div key={p.paso} className="exp-paso-card">
                        <div className="exp-paso-icon">
                          <Icon name={p.icono} size={20} stroke={1.5} />
                        </div>
                        <span className="exp-paso-tiempo">{p.paso}</span>
                        <p className="exp-paso-titulo">{p.titulo}</p>
                        <p className="exp-paso-desc">{p.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">También puede interesarte</p>
                  <ul className="docs-related-list">
                    {SERVICIOS_RELACIONADOS.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="docs-related-link">
                          <span>{s.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">¿Listo para volar?</p>
                  <p className="mro-cta-sidebar-desc">Reserva tu vuelo y disfruta un proceso sin filas largas.</p>
                  <Link href="/reservar/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Reservar vuelo
                  </Link>
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
