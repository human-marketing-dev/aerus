import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'MRO — Mantenimiento aeronáutico | Aerus',
  description:
    'Centro de mantenimiento aeronáutico Aerus. Especialistas en motores PT6A, hélices McCauley y Hartzell, aviónica y accesorios de aeronaves turbohélice. Aprobado DGAC.',
}

type Servicio = { icono: string; titulo: string; descripcion: string; href: string }

const SERVICIOS: Servicio[] = [
  {
    icono: 'shield',
    titulo: 'Capacidades y certificaciones',
    descripcion: 'Nuestras aprobaciones DGAC, tipos de aeronave admitidos y el alcance completo de nuestro taller.',
    href: '/mro/capacidades/',
  },
  {
    icono: 'plane',
    titulo: 'Motores PT6A',
    descripcion: 'Inspección, mantenimiento y overhaul de motores Pratt & Whitney Canada serie PT6A.',
    href: '/mro/motores-pt6a/',
  },
  {
    icono: 'swap',
    titulo: 'Hélices',
    descripcion: 'Balanceo, inspección y overhaul de hélices McCauley y Hartzell.',
    href: '/mro/helices/',
  },
  {
    icono: 'check',
    titulo: 'Accesorios y planeadores',
    descripcion: 'Mantenimiento de accesorios de aeronave y servicio especializado en planeadores Cessna.',
    href: '/mro/accesorios-planeadores/',
  },
  {
    icono: 'wifi',
    titulo: 'Radios e instrumentos',
    descripcion: 'Aviónica, radios, GPS y mantenimiento de instrumentos de vuelo.',
    href: '/mro/radios-instrumentos/',
  },
  {
    icono: 'mail',
    titulo: 'Solicitar cotización',
    descripcion: 'Cuéntanos tu necesidad de mantenimiento y te preparamos una propuesta en 24 horas.',
    href: '/mro/cotizacion/',
  },
]

export default function MroPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mro-hero">
          <div className="container mro-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Mantenimiento <span className="accent">aeronáutico</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Centro autorizado DGAC especializado en aeronaves turbohélice. Motores PT6A, hélices, aviónica y sistemas completos — mantenemos lo que vuela.
            </p>
          </div>
        </section>

        <section className="mro-servicios-section">
          <div className="container">
            <div className="mro-servicios-grid">
              {SERVICIOS.map((s) => (
                <Link key={s.href} href={s.href} className="mro-servicio-card">
                  <div className="mro-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="mro-servicio-titulo">{s.titulo}</p>
                  <p className="mro-servicio-desc">{s.descripcion}</p>
                  <span className="mro-servicio-arr" aria-hidden="true">
                    Ver más <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mro-creds-strip">
          <div className="container mro-creds-inner">
            <span className="mro-creds-label">Aprobaciones</span>
            <div className="mro-creds-list">
              <span className="mro-cred-item">✦ DGAC AMO Aprobado</span>
              <span className="mro-cred-item">✦ Pratt & Whitney Canada Authorized</span>
              <span className="mro-cred-item">✦ Hartzell Propeller Certified</span>
              <span className="mro-cred-item">✦ McCauley Service Center</span>
            </div>
          </div>
        </section>
      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
