import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'La flota — Cessna Grand Caravan EX | Aerus',
  description:
    'La flota de Aerus está compuesta por turbohélices Cessna 208B Grand Caravan EX. Conoce sus características, capacidad y por qué es ideal para las rutas regionales de México.',
}

type EspecFila = { etiqueta: string; valor: string }

const SPECS: EspecFila[] = [
  { etiqueta: 'Motor', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
  { etiqueta: 'Hélice', valor: 'McCauley 3-blade de paso variable, velocidad constante' },
  { etiqueta: 'Capacidad', valor: 'Hasta 12 pasajeros (configuración regular Aerus)' },
  { etiqueta: 'Velocidad de crucero', valor: '185 kts (343 km/h)' },
  { etiqueta: 'Altitud de vuelo', valor: 'Hasta 25,000 ft — por encima de la mayoría del mal tiempo' },
  { etiqueta: 'Autonomía', valor: '912 nm (1,689 km) con carga máxima' },
  { etiqueta: 'Cabina', valor: 'No presurizada — ideal para rutas regionales de corta distancia' },
  { etiqueta: 'Certificación', valor: 'DGAC México · FAA USA' },
]

const VENTAJAS = [
  {
    icono: 'shield',
    titulo: 'Confiabilidad probada',
    descripcion:
      'El Grand Caravan EX es la turbohélice utilitaria más vendida de la historia. Con más de 2,600 unidades en servicio en todo el mundo, es sinónimo de solidez y facilidad de mantenimiento.',
  },
  {
    icono: 'plane-takeoff',
    titulo: 'Ideal para pistas cortas',
    descripcion:
      'Su diseño de ala alta y capacidad STOL (Short Take-Off and Landing) le permiten operar en aeropuertos regionales y pistas no pavimentadas, abriendo destinos inaccesibles para aviones de fuselaje ancho.',
  },
  {
    icono: 'check',
    titulo: 'Mantenimiento propio',
    descripcion:
      'Aerus opera su propio taller MRO autorizado para motores PT6A y hélices McCauley. La misma flota que vuela es la que mantenemos — ningún detalle pasa por alto.',
  },
  {
    icono: 'users',
    titulo: 'Cabina personal',
    descripcion:
      'Con capacidad para hasta 12 pasajeros, cada vuelo es prácticamente un charter privado. Sin pasillo central, sin filas para el baño, sin bebé llorando tres filas atrás.',
  },
]

const RELACIONADOS = [
  { label: 'Espera minutos, no horas', href: '/experiencia/proceso-agil/' },
  { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
  { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
  { label: 'Mantenimiento MRO', href: '/mro/' },
]

export default function FlotaPage() {
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
              <span aria-current="page">La flota</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Experiencia Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Cessna Grand <span className="accent">Caravan EX</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              La turbohélice utilitaria más confiable del mundo. Nuestra flota de Cessna 208B Grand Caravan EX conecta el norte, centro y sureste de México con seguridad y puntualidad.
            </p>
          </div>
        </section>

        <div className="flota-img-banner">
          <Image
            src="/flota-aerus.webp"
            alt="Flota Aerus — Cessna 208B Grand Caravan EX"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Especificaciones */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Cessna 208B Grand Caravan EX</p>
                      <h2 className="docs-h2">Especificaciones técnicas</h2>
                    </div>
                  </div>
                  <div className="exp-specs-table">
                    {SPECS.map((s) => (
                      <div key={s.etiqueta} className="exp-spec-row">
                        <span className="exp-spec-etiqueta">{s.etiqueta}</span>
                        <span className="exp-spec-valor">{s.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ventajas */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>¿Por qué el Grand Caravan EX?</h2>
                  <div className="exp-ventajas-grid">
                    {VENTAJAS.map((v) => (
                      <div key={v.titulo} className="exp-ventaja-card">
                        <div className="exp-ventaja-icon">
                          <Icon name={v.icono} size={18} stroke={1.5} />
                        </div>
                        <div>
                          <p className="exp-ventaja-titulo">{v.titulo}</p>
                          <p className="exp-ventaja-desc">{v.descripcion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">Experiencia Aerus</p>
                  <ul className="docs-related-list">
                    {RELACIONADOS.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">Reserva tu vuelo</p>
                  <p className="mro-cta-sidebar-desc">Viaja en la cabina más cómoda de las rutas regionales de México.</p>
                  <Link href="/reservar/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Ver vuelos
                  </Link>
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
