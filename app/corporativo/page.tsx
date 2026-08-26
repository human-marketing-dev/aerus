import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Corporativo | Aerus',
  description:
    'Soluciones de vuelo para empresas. Aerus Charter para grupos y eventos, Aerus Flight Pass para viajeros frecuentes y cuentas corporativas para equipos que vuelan de forma recurrente.',
}

const SERVICIOS = [
  {
    icono: 'plane',
    titulo: 'Aerus Charter',
    desc: 'Avión exclusivo para tu grupo o evento. Tú defines el destino, la fecha y el horario. Hasta 12 pasajeros por vuelo.',
    href: '/corporativo/charter/',
    cta: 'Conocer charter',
  },
  {
    icono: 'ticket',
    titulo: 'Aerus Flight Pass',
    desc: 'Bloque de vuelos prepagados para empleados que viajan en rutas Aerus con frecuencia. Precio fijo, factura a la empresa.',
    href: '/corporativo/flight-pass/',
    cta: 'Conocer Flight Pass',
  },
  {
    icono: 'users',
    titulo: 'Cuenta empresarial',
    desc: 'Acuerdo de servicio continuo para empresas con necesidades de viaje recurrente. Gestor de cuenta dedicado, facturación mensual y reporte de viajes.',
    href: '/corporativo/empresas/',
    cta: 'Ver solución empresarial',
  },
]

const VENTAJAS = [
  { icono: 'clock',   texto: 'Check-in en minutos, no en horas' },
  { icono: 'plane',   texto: 'Vuelos directos sin conexiones' },
  { icono: 'shield',  texto: 'Flota propia con mantenimiento certificado DGAC' },
  { icono: 'users',   texto: 'Cabina privada de hasta 12 pasajeros' },
  { icono: 'mail',    texto: 'Facturación directa a razón social' },
  { icono: 'support', texto: 'Atención personalizada antes y durante el vuelo' },
]

export default function CorporativoPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Para empresas</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Vuelos corporativos <span className="accent">sin tiempos muertos</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Aerus ofrece soluciones de aviación para empresas que necesitan moverse
              con eficiencia en las rutas regionales de México. Charter, pases de vuelo
              y cuentas corporativas — adaptados a cómo opera tu empresa.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="corp-servicios-section">
          <div className="container">
            <div className="corp-servicios-grid">
              {SERVICIOS.map((s) => (
                <Link key={s.href} href={s.href} className="corp-servicio-card">
                  <div className="corp-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="corp-servicio-titulo">{s.titulo}</p>
                  <p className="corp-servicio-desc">{s.desc}</p>
                  <span className="corp-servicio-arr">
                    {s.cta} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas strip */}
        <section className="corp-ventajas-section">
          <div className="container corp-ventajas-inner">
            <p className="corp-ventajas-titulo">Por qué las empresas eligen Aerus</p>
            <div className="corp-ventajas-grid">
              {VENTAJAS.map((v) => (
                <div key={v.texto} className="corp-ventaja-item">
                  <Icon name={v.icono} size={16} stroke={1.5} className="corp-ventaja-icon" />
                  <span className="corp-ventaja-texto">{v.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="corp-cta-section">
          <div className="container corp-cta-inner">
            <div>
              <p className="corp-cta-eyebrow">¿Listo para empezar?</p>
              <p className="corp-cta-titulo">Hablemos de tu necesidad de vuelo</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/corporativo/charter/cotizar/" className="btn btn-primary">
                Solicitar cotización charter
              </Link>
              <Link href="/ayuda/contacto/" className="btn btn-on-dark">
                Contactar Aerus
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
