import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contacto | Aerus',
  description:
    'Comunícate con Aerus por teléfono, WhatsApp, correo electrónico o redes sociales. Estamos disponibles para ayudarte.',
}

/* ── Data — replace with real values when available ─────────────────────── */

type Canal = {
  id: string
  icono: string
  label: string
  valor: string
  detalle: string
  href: string
  cta: string
  externo: boolean
  destacado: boolean
}

const CANALES: Canal[] = [
  {
    id: 'telefono-mx',
    icono: 'phone',
    label: 'México',
    valor: '+52 (812) 682·3501',
    detalle: 'Lun–Dom · 06:00 – 22:00 hrs',
    href: 'tel:+528126823501',
    cta: 'Llamar',
    externo: false,
    destacado: false,
  },
  {
    id: 'telefono-us',
    icono: 'phone',
    label: 'Estados Unidos',
    valor: '+1 (866) 691·0179',
    detalle: 'Llamada gratuita · Lun–Dom · 06:00 – 22:00 hrs',
    href: 'tel:+18666910179',
    cta: 'Llamar',
    externo: false,
    destacado: false,
  },
  {
    id: 'whatsapp',
    icono: 'bot',
    label: 'Asistente IA · WhatsApp',
    valor: '+52 (814) 170·1702',
    detalle: 'Disponible 24 hrs · todos los días',
    href: 'https://wa.me/528141701702',
    cta: 'Abrir WhatsApp',
    externo: true,
    destacado: true,
  },
  {
    id: 'email',
    icono: 'mail',
    label: 'Correo electrónico',
    valor: 'contacto@aerus.mx',
    detalle: 'Respuesta en 24–48 horas hábiles',
    href: 'mailto:contacto@aerus.mx',
    cta: 'Enviar correo',
    externo: false,
    destacado: false,
  },
]

type Red = {
  nombre: string
  icono: string
  href: string
}

const REDES: Red[] = [
  { nombre: 'Facebook', icono: 'fb', href: 'https://facebook.com/aerusmx' },
  { nombre: 'Instagram', icono: 'ig', href: 'https://instagram.com/aerusmx' },
  { nombre: 'X · Twitter', icono: 'x-twitter', href: 'https://x.com/aerusmx' },
  { nombre: 'LinkedIn', icono: 'in', href: 'https://linkedin.com/company/aerusmx' },
]

type HorarioFila = { dias: string; horas: string }

const HORARIOS: HorarioFila[] = [
  { dias: 'Lunes – Domingo', horas: '06:00 – 22:00 hrs' },
  { dias: 'Asistente IA · WhatsApp', horas: '24 hrs · todos los días' },
  { dias: 'Correo electrónico', horas: 'Respuesta en 24–48 hrs hábiles' },
]

/* ── Component ──────────────────────────────────────────────────────────── */

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="contact-hero">
          <div className="container contact-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Contacto</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              Atención a clientes
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              ¿En qué podemos <span className="accent">ayudarte?</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Elige el canal que prefieras. Nuestro equipo está listo para atenderte.
            </p>
          </div>
        </section>

        {/* Channel cards */}
        <section className="section-pad contact-channels-section">
          <div className="container">
            <div className="contact-channels-grid">
              {CANALES.map((canal) => (
                <div
                  key={canal.id}
                  className={`contact-card${canal.destacado ? ' contact-card--destacado' : ''}`}
                >
                  <div className="contact-card-icon">
                    <Icon name={canal.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="contact-card-label">{canal.label}</p>
                  <p className="contact-card-valor">{canal.valor}</p>
                  <p className="contact-card-detalle">{canal.detalle}</p>
                  <a
                    href={canal.href}
                    className={`btn ${canal.destacado ? 'btn-primary' : 'btn-outline'} contact-card-cta`}
                    {...(canal.externo
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {canal.cta}
                    {canal.externo && (
                      <span aria-hidden="true" style={{ fontSize: 14 }}> ↗</span>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social + Hours */}
        <section className="contact-lower-section">
          <div className="container">
            <div className="contact-lower-grid">

              {/* Social media */}
              <div className="contact-social-card">
                <div className="eyebrow contact-card-eyebrow">Redes sociales</div>
                <h2 className="contact-lower-title">Síguenos</h2>
                <p className="contact-lower-desc">
                  También puedes escribirnos por mensaje directo en nuestras redes sociales.
                </p>
                <div className="contact-social-links">
                  {REDES.map((red) => (
                    <a
                      key={red.nombre}
                      href={red.href}
                      className="contact-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={red.nombre}
                    >
                      <Icon name={red.icono} size={18} stroke={1.5} />
                      <span>{red.nombre}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="contact-hours-card">
                <div className="eyebrow contact-card-eyebrow">Horarios</div>
                <h2 className="contact-lower-title">Disponibilidad</h2>
                <table className="contact-hours-table">
                  <tbody>
                    {HORARIOS.map((h) => (
                      <tr key={h.dias} className="contact-hours-row">
                        <td className="contact-hours-dias">{h.dias}</td>
                        <td className="contact-hours-horas">{h.horas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="docs-callout" style={{ marginTop: 24 }}>
                  <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                  <p>
                    Para requerimientos especiales (menores no acompañados, movilidad reducida, animales de servicio) contacta con al menos 48 horas de anticipación a tu vuelo.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
