import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Nosotros | Aerus',
  description:
    'Aerus conecta el México regional. Conoce nuestra historia, misión y lo que nos hace diferentes: rutas directas, flota propia y mantenimiento aeronáutico certificado.',
}

const STATS = [
  { num: '7',    suffix: '',  label: 'Rutas directas activas' },
  { num: '10',   suffix: '+', label: 'Destinos conectados' },
  { num: '9',    suffix: '',  label: 'Pasajeros por vuelo' },
  { num: 'DGAC', suffix: '',  label: 'Centro de mantenimiento certificado' },
]

const VALORES = [
  {
    num: '01',
    titulo: 'Rutas que',
    acento: 'importan',
    desc: 'Servimos conexiones que las grandes líneas ignoran. Cada ruta Aerus une dos puntos que el mercado masivo dejó sin solución directa — y las operamos con la misma disciplina que las mejores aerolíneas del mundo.',
  },
  {
    num: '02',
    titulo: 'Taller',
    acento: 'propio',
    desc: 'Operamos y mantenemos nuestras propias aeronaves. Centro MRO aprobado por la DGAC, autorizado por Pratt & Whitney Canada. No subcontratamos lo que determina la seguridad de cada vuelo.',
  },
  {
    num: '03',
    titulo: 'Escala',
    acento: 'humana',
    desc: 'Máximo 9 pasajeros por vuelo. El equipo te conoce, hay alguien en tierra antes de que llegues, el check-in dura minutos. La aviación regional debería sentirse así de personal.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="nos-hero">
          <div className="nos-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>La aerolínea</div>
            <h1 className="nos-hero-headline">
              Conectamos el México<br />
              que las grandes<br />
              <em>no alcanzan</em>
            </h1>
            <p className="nos-hero-intro">
              Aerus es la aerolínea regional de México. Operamos rutas directas a destinos
              que el mercado masivo ignora, con aeronaves turbohélice diseñadas para llegar
              donde otros no llegan.
            </p>
            <div className="nos-hero-rule">
              <span className="nos-hero-rule-line" />
              <span className="nos-hero-rule-text">Aerolínea regional · Aviación de turbohélice · México</span>
            </div>
          </div>
        </section>

        {/* ── Declaración ── */}
        <section className="nos-declaracion">
          <div className="nos-declaracion-inner">
            <p className="nos-declaracion-label">Nuestra misión</p>
            <blockquote className="nos-declaracion-quote">
              "Volar no debería ser un privilegio de las{' '}
              <em>ciudades grandes.</em>"
            </blockquote>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="nos-stats">
          <div className="nos-stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="nos-stat">
                <div className="nos-stat-num">
                  {s.num}<span>{s.suffix}</span>
                </div>
                <p className="nos-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Historia ── */}
        <section className="nos-historia">
          <div className="nos-historia-inner">
            <div className="nos-historia-texto">
              <p className="nos-historia-eyebrow">Nuestra historia</p>
              <h2 className="nos-historia-titulo">
                Una aerolínea construida para el México que se mueve entre regiones
              </h2>
              <div className="nos-historia-body">
                <p>
                  Aerus nació con una premisa clara: las rutas regionales de México merecen
                  una aerolínea que las tome en serio. Las grandes líneas concentran sus
                  operaciones en los aeropuertos internacionales, dejando a millones de
                  mexicanos atrapados en conexiones largas o carreteras de horas para
                  cubrir distancias que el avión resuelve en cuarenta minutos.
                </p>
                <p>
                  Elegimos el Cessna Grand Caravan EX — una aeronave turbohélice diseñada
                  exactamente para este tipo de operación: pistas cortas, aeropuertos
                  regionales, rutas directas sin hubear por el centro del país. Nuestros
                  pilotos conocen cada tramo. Nuestro centro de mantenimiento en tierra
                  cuida cada motor y cada hélice.
                </p>
                <p>
                  No somos una aerolínea de bajo costo que recortó servicio. Somos una
                  aerolínea regional que decidió operar bien en el espacio donde los
                  grandes no quieren competir.
                </p>
              </div>
            </div>
            <aside className="nos-historia-aside">
              <blockquote className="nos-historia-pullquote">
                No somos más pequeños,<br />
                somos más<br />
                <em>específicos.</em>
              </blockquote>
              <p className="nos-historia-pullattr">Aerus — Aviación regional</p>
            </aside>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="nos-valores">
          <div className="nos-valores-inner">
            <div className="nos-valores-header">
              <p className="nos-valores-titulo">Lo que nos define</p>
            </div>
            <div className="nos-valores-grid">
              {VALORES.map((v) => (
                <div key={v.num} className="nos-valor">
                  <span className="nos-valor-num" aria-hidden="true">{v.num}</span>
                  <p className="nos-valor-titulo">
                    {v.titulo}{' '}
                    <span className="nos-valor-titulo-accent">{v.acento}</span>
                  </p>
                  <p className="nos-valor-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Flota ── */}
        <section className="nos-flota-strip">
          <div className="nos-flota-inner">
            <div className="nos-flota-text">
              <p className="nos-flota-label">La flota</p>
              <p className="nos-flota-nombre">Cessna Grand Caravan EX</p>
              <p className="nos-flota-specs">
                Motor PT6A-114A · 675 SHP · 9 pasajeros · 182 kts · 25,000 ft
              </p>
            </div>
            <Link href="/experiencia/flota/" className="nos-flota-link">
              Ver especificaciones <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="nos-cta">
          <div className="nos-cta-inner">
            <div className="nos-cta-texto">
              <p className="nos-cta-eyebrow">Vuela con nosotros</p>
              <p className="nos-cta-titulo">¿Listo para el primer vuelo?</p>
            </div>
            <div className="nos-cta-actions">
              <Link href="/reservar/" className="btn btn-inverse">
                Reservar vuelo
              </Link>
              <Link href="/rutas/" className="btn btn-outline">
                Ver rutas
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
