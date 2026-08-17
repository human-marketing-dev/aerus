import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Asistencia de viaje | Aerus',
  description:
    'Aerus te acompaña antes, durante y después de tu vuelo. Seguimiento de vuelo en tiempo real, atención personalizada y soporte en caso de cambios o imprevistos.',
}

const SERVICIOS = [
  {
    icono: 'plane',
    titulo: 'Seguimiento de vuelo en tiempo real',
    descripcion:
      'Consulta el estado de tu vuelo en cualquier momento desde aerus.mx o comunicándote con nuestro equipo. Recibirás notificaciones por correo ante cambios de horario o puerta.',
  },
  {
    icono: 'calendar',
    titulo: 'Cambios y reprogramación',
    descripcion:
      'Si necesitas cambiar tu vuelo, contáctanos con al menos 24 horas de anticipación. Nuestro equipo revisa la disponibilidad y te ayuda a encontrar la mejor opción conforme a las políticas de tu tarifa.',
  },
  {
    icono: 'phone',
    titulo: 'Atención telefónica y por WhatsApp',
    descripcion:
      'Línea de atención a pasajeros disponible de lunes a domingo de 06:00 a 22:00 hrs. Asistente de IA disponible 24 horas por WhatsApp para consultas inmediatas.',
  },
  {
    icono: 'users',
    titulo: 'Asistencia para pasajeros con necesidades especiales',
    descripcion:
      'Coordinación de asistencia en silla de ruedas, menores no acompañados, oxígeno médico a bordo y animales de servicio. Notifica al menos 48 horas antes de tu vuelo.',
  },
  {
    icono: 'luggage',
    titulo: 'Reporte y seguimiento de equipaje',
    descripcion:
      'En caso de equipaje dañado o extraviado, nuestro equipo en aeropuerto levanta el reporte y coordina la búsqueda o reembolso conforme a la Ley de Aviación Civil.',
  },
  {
    icono: 'shield',
    titulo: 'Gestión de vuelos irregulares',
    descripcion:
      'Ante cancelaciones por causas imputables a Aerus (condiciones técnicas o de aerolínea), te ofrecemos reprotección en el siguiente vuelo disponible, reembolso o compensación conforme a la normativa DGAC.',
  },
]

const CANALES = [
  { icono: 'phone', label: 'México', detalle: '+52 (812) 682·3501 · Lun–Dom 06:00–22:00', href: 'tel:+528126823501' },
  { icono: 'phone', label: 'EE.UU.', detalle: '+1 (866) 691·0179 · Llamada gratuita', href: 'tel:+18666910179' },
  { icono: 'bot', label: 'WhatsApp IA', detalle: '+52 (814) 170·1702 · 24 hrs', href: 'https://wa.me/528141701702' },
  { icono: 'mail', label: 'Correo', detalle: 'contacto@aerus.mx', href: 'mailto:contacto@aerus.mx' },
]

export default function AsistenciaDeViajePage() {
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
              <span aria-current="page">Asistencia de viaje</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Experiencia Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Asistencia de <span className="accent">viaje</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Siempre hay alguien en Aerus para ayudarte. Antes de salir, durante el vuelo y al llegar — te acompañamos en cada paso.
            </p>
          </div>
        </section>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="support" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Lo que hacemos por ti</p>
                      <h2 className="docs-h2">Servicios de asistencia</h2>
                    </div>
                  </div>
                  <div className="exp-asistencia-grid">
                    {SERVICIOS.map((s) => (
                      <div key={s.titulo} className="exp-asistencia-card">
                        <div className="exp-asistencia-icon">
                          <Icon name={s.icono} size={18} stroke={1.5} />
                        </div>
                        <div>
                          <p className="exp-asistencia-titulo">{s.titulo}</p>
                          <p className="exp-asistencia-desc">{s.descripcion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="docs-callout">
                  <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                  <p>
                    Para requerimientos especiales (menores no acompañados, oxígeno médico, animales de servicio) es obligatorio notificar con al menos 48 horas de anticipación.{' '}
                    <Link href="/ayuda/requerimientos-especiales/" style={{ color: 'inherit', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                      Ver requerimientos especiales →
                    </Link>
                  </p>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">Canales de atención</p>
                  <div className="exp-canales-list">
                    {CANALES.map((c) => (
                      <a key={c.label} href={c.href} className="exp-canal-row">
                        <Icon name={c.icono} size={15} stroke={1.5} />
                        <div>
                          <span className="exp-canal-label">{c.label}</span>
                          <span className="exp-canal-detalle">{c.detalle}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Más sobre tu viaje</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
                      { label: 'Equipaje', href: '/ayuda/equipaje/' },
                      { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
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
