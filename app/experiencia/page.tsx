import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Experiencia Aerus | Aerus',
  description:
    'Volar con Aerus es diferente. Espera minutos, no horas. Conoce nuestra flota, asistencia de viaje, seguro de cancelación y opciones para grupos.',
}

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
      </main>
      <Footer />
    </>
  )
}
