import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contacto Flight Pass | Aerus',
  description:
    'Solicita información sobre el Aerus Flight Pass para tu empresa. Nuestro equipo corporativo te prepara una propuesta personalizada.',
}

const DATOS = [
  'Nombre de la empresa y giro',
  'Rutas que utilizan tus empleados con mayor frecuencia',
  'Número aproximado de vuelos al mes',
  'Número de empleados que viajarían bajo el Flight Pass',
  'Nombre y cargo del responsable de viajes corporativos',
]

export default function FlightPassContactoPage() {
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
              <Link href="/corporativo/flight-pass/">Aerus Flight Pass</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Contacto</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus Flight Pass</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Solicitar <span className="accent">información</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Cuéntanos sobre tu empresa y el volumen de viajes de tu equipo.
              Un ejecutivo de cuentas Aerus te prepara una propuesta de Flight Pass en 24 horas.
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="mail" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Qué incluir en tu mensaje</p>
                      <h2 className="docs-h2">Información para la propuesta</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)', marginBottom: 20 }}>
                    Con estos datos podemos diseñar un Flight Pass ajustado al perfil
                    de viaje real de tu empresa:
                  </p>
                  <ul className="docs-list">
                    {DATOS.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="support" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">El siguiente paso</p>
                      <h2 className="docs-h2">Qué pasa después</h2>
                    </div>
                  </div>
                  <div className="docs-callout">
                    Al recibir tu mensaje, un ejecutivo de cuentas Aerus te contactará dentro de
                    <strong> 24 horas hábiles</strong> para agendar una llamada breve, entender
                    tu necesidad con más detalle y enviarte una propuesta de paquete personalizada.
                  </div>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">Contáctanos</p>
                  <p className="mro-cta-sidebar-desc">Escríbenos con los datos de tu empresa y te respondemos en 24 horas.</p>
                  <a
                    href="mailto:corporativo@aerus.mx?subject=Información Flight Pass"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 10 }}
                  >
                    <Icon name="mail" size={15} stroke={1.5} />
                    corporativo@aerus.mx
                  </a>
                  <a
                    href="tel:+528126823501"
                    className="btn btn-on-dark"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    <Icon name="phone" size={15} stroke={1.5} />
                    +52 812 682 3501
                  </a>
                  <p style={{ font: '400 12px/1.4 var(--font-body)', color: 'rgba(255,255,255,0.30)', marginTop: 14 }}>
                    Lunes a viernes · 08:00–18:00 h CST
                  </p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Antes de contactar</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Qué incluye el Flight Pass', href: '/corporativo/flight-pass/' },
                      { label: 'Cuenta empresarial',         href: '/corporativo/empresas/' },
                      { label: 'Red de rutas',               href: '/rutas/' },
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
      <Newsletter/>
      <Footer />
    </>
  )
}
