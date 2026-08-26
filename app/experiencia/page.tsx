import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Pagos from '@/components/Pagos'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Experiencia Aerus | Aerus',
  description:
    'Volar con Aerus es diferente. Espera minutos, no horas. Conoce nuestra flota, asistencia de viaje, seguro de cancelación y opciones para grupos.',
}

const PASOS = [
  {
    num: '01',
    titulo: 'Llega 45 minutos antes',
    desc: 'Olvídate de las 2 horas de anticipación. En terminales regionales el proceso es más ágil y tú llegas más descansado.',
  },
  {
    num: '02',
    titulo: 'Check-in express',
    desc: 'Mostrador dedicado, sin filas interminables. En minutos tienes tu pase de abordar y tu equipaje despachado.',
  },
  {
    num: '03',
    titulo: 'Abordaje directo',
    desc: 'Caminatas cortas hasta la aeronave. Sin autobuses, sin pasillos infinitos. Subes directo desde la terminal.',
  },
  {
    num: '04',
    titulo: 'Despegue puntual',
    desc: 'Operamos en aeropuertos con menos tráfico aéreo. Menos congestión, más puntualidad en cada vuelo.',
  },
]

const SERVICIOS_ADICIONALES = [
  {
    icono: 'shield',
    titulo: 'Seguro de cancelación',
    desc: 'Protege tu inversión ante imprevistos. Agrega el seguro al reservar y recupera el valor de tu boleto si necesitas cancelar.',
    href: '/experiencia/seguro-de-cancelacion/',
  },
  {
    icono: 'support',
    titulo: 'Asistencia de viaje 24/7',
    desc: 'Atención personalizada en todo momento. Si algo cambia, hay alguien disponible para ayudarte a resolverlo.',
    href: '/experiencia/asistencia-de-viaje/',
  },
  {
    icono: 'users',
    titulo: 'Vuelos para grupos',
    desc: 'Familias, equipos corporativos o grupos de turismo. Coordinamos toda la logística desde la reservación.',
    href: '/experiencia/grupos/',
  },
  {
    icono: 'plane',
    titulo: 'Vuelo chárter privado',
    desc: 'Toda la aeronave para ti. Define la ruta, el horario y los pasajeros. Ideal para empresas y eventos especiales.',
    href: '/corporativo/charter/',
  },
]

type Servicio = { icono: string; titulo: string; descripcion: string; href: string }

const SERVICIOS: Servicio[] = [
  {
    icono: 'clock',
    titulo: 'Espera minutos, no horas',
    descripcion: 'Terminales regionales con menos filas y más tiempo para ti. Check-in rápido, abordaje directo, sin colas de una hora.',
    href: '/experiencia/proceso-agil/',
  },
  {
    icono: 'plane',
    titulo: 'La flota',
    descripcion: 'Turbohélices Cessna Grand Caravan EX. Cómodos, confiables y perfectos para las rutas regionales de México.',
    href: '/experiencia/flota/',
  },
  {
    icono: 'support',
    titulo: 'Asistencia de viaje',
    descripcion: 'Seguimiento de tu vuelo, atención personalizada y soporte en caso de cambios o imprevistos. Siempre hay alguien para ayudarte.',
    href: '/experiencia/asistencia-de-viaje/',
  },
  {
    icono: 'shield',
    titulo: 'Seguro de cancelación',
    descripcion: 'Protege tu viaje contra imprevistos. Agrega el seguro al reservar y viaja tranquilo sabiendo que tienes respaldo.',
    href: '/experiencia/seguro-de-cancelacion/',
  },
  {
    icono: 'users',
    titulo: 'Vuelos para grupos',
    descripcion: 'Equipos, empresas o familias numerosas. Coordinamos la logística de tu grupo desde la reservación hasta el aterrizaje.',
    href: '/experiencia/grupos/',
  },
]

export default function ExperienciaPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Volar diferente</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              La experiencia <span className="accent">Aerus</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Las aerolíneas grandes te hacen esperar. Nosotros no. Descubre qué hace diferente volar con Aerus en cada etapa de tu viaje.
            </p>
          </div>
        </section>

        <section className="exp-servicios-section">
          <div className="container">
            <div className="exp-servicios-grid">
              {SERVICIOS.map((s) => (
                <Link key={s.href} href={s.href} className="exp-servicio-card">
                  <div className="exp-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="exp-servicio-titulo">{s.titulo}</p>
                  <p className="exp-servicio-desc">{s.descripcion}</p>
                  <span className="exp-servicio-arr" aria-hidden="true">
                    Conocer más <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Procesos eficientes ── */}
        <section className="exp-procesos-section">
          <div className="container">
            <div className="exp-procesos-header">
              <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Sin filas, sin esperas</div>
              <h2 className="section-headline" style={{ color: 'var(--aerus-white)', margin: '12px 0 0' }}>
                Del carro a la pista <em>en minutos</em>
              </h2>
            </div>
            <div className="exp-procesos-pasos-grid">
              {PASOS.map((p) => (
                <div key={p.num} className="exp-paso">
                  <span className="exp-paso-num">{p.num}</span>
                  <p className="exp-paso-titulo">{p.titulo}</p>
                  <p className="exp-paso-desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="exp-procesos-cta">
              <Link href="/experiencia/proceso-agil/" className="btn btn-on-dark">
                Ver el proceso completo <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Servicios adicionales ── */}
        <section className="exp-adicionales-section">
          <div className="container">
            <div className="exp-adicionales-header">
              <div className="eyebrow">Más que un vuelo</div>
              <h2 className="section-headline" style={{ margin: '12px 0 0' }}>Servicios adicionales</h2>
            </div>
            <div className="exp-adicionales-grid">
              {SERVICIOS_ADICIONALES.map((s) => (
                <Link key={s.href} href={s.href} className="exp-adicional-card">
                  <div className="exp-adicional-icon">
                    <Icon name={s.icono} size={20} stroke={1.5} />
                  </div>
                  <p className="exp-adicional-titulo">{s.titulo}</p>
                  <p className="exp-adicional-desc">{s.desc}</p>
                  <span className="exp-adicional-arr">
                    Saber más <Icon name="arrow-right" size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Métodos de pago ── */}
        <Pagos />

      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
