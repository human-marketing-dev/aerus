import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { SOCIAL_LINKS } from '@/lib/social'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/contacto/'

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

const CANALES: Record<Lang, Canal[]> = {
  es: [
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
  ],
  en: [
    {
      id: 'telefono-mx',
      icono: 'phone',
      label: 'Mexico',
      valor: '+52 (812) 682·3501',
      detalle: 'Mon–Sun · 6:00 am – 10:00 pm',
      href: 'tel:+528126823501',
      cta: 'Call',
      externo: false,
      destacado: false,
    },
    {
      id: 'telefono-us',
      icono: 'phone',
      label: 'United States',
      valor: '+1 (866) 691·0179',
      detalle: 'Toll-free · Mon–Sun · 6:00 am – 10:00 pm',
      href: 'tel:+18666910179',
      cta: 'Call',
      externo: false,
      destacado: false,
    },
    {
      id: 'whatsapp',
      icono: 'bot',
      label: 'AI assistant · WhatsApp',
      valor: '+52 (814) 170·1702',
      detalle: 'Available 24/7 · every day',
      href: 'https://wa.me/528141701702',
      cta: 'Open WhatsApp',
      externo: true,
      destacado: true,
    },
    {
      id: 'email',
      icono: 'mail',
      label: 'Email',
      valor: 'contacto@aerus.mx',
      detalle: 'Reply within 24–48 business hours',
      href: 'mailto:contacto@aerus.mx',
      cta: 'Send email',
      externo: false,
      destacado: false,
    },
  ],
}

// Redes oficiales (lib/social.ts)
const REDES = SOCIAL_LINKS.map(r => ({ nombre: r.name, icono: r.icon, href: r.href }))

type HorarioFila = { dias: string; horas: string }

const HORARIOS: Record<Lang, HorarioFila[]> = {
  es: [
    { dias: 'Lunes – Domingo', horas: '06:00 – 22:00 hrs' },
    { dias: 'Asistente IA · WhatsApp', horas: '24 hrs · todos los días' },
    { dias: 'Correo electrónico', horas: 'Respuesta en 24–48 hrs hábiles' },
  ],
  en: [
    { dias: 'Monday – Sunday', horas: '6:00 am – 10:00 pm' },
    { dias: 'AI assistant · WhatsApp', horas: '24/7 · every day' },
    { dias: 'Email', horas: 'Reply within 24–48 business hours' },
  ],
}

const es = {
  metaTitle: 'Contacto | Aerus',
  metaDescription:
    'Comunícate con Aerus por teléfono, WhatsApp, correo electrónico o redes sociales. Estamos disponibles para ayudarte.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Contacto',
  eyebrow: 'Atención a clientes',
  titleA: '¿En qué podemos',
  titleB: 'ayudarte?',
  intro: 'Elige el canal que prefieras. Nuestro equipo está listo para atenderte.',
  socialEyebrow: 'Redes sociales',
  socialTitle: 'Síguenos',
  socialDesc: 'También puedes escribirnos por mensaje directo en nuestras redes sociales.',
  hoursEyebrow: 'Horarios',
  hoursTitle: 'Disponibilidad',
  specialNote:
    'Para requerimientos especiales (menores no acompañados, movilidad reducida, animales de servicio) contacta con al menos 48 horas de anticipación a tu vuelo.',
}

const en: typeof es = {
  metaTitle: 'Contact Us | Aerus',
  metaDescription:
    'Reach Aerus by phone, WhatsApp, email or social media. We’re here to help.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Contact',
  eyebrow: 'Customer service',
  titleA: 'How can we',
  titleB: 'help you?',
  intro: 'Choose the channel you prefer. Our team is ready to assist you.',
  socialEyebrow: 'Social media',
  socialTitle: 'Follow us',
  socialDesc: 'You can also send us a direct message on our social media channels.',
  hoursEyebrow: 'Hours',
  hoursTitle: 'Availability',
  specialNote:
    'For special assistance (unaccompanied minors, reduced mobility, service animals), please contact us at least 48 hours before your flight.',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/contacto'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default async function ContactoPage({ params }: PageProps<'/[lang]/ayuda/contacto'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="contact-hero">
          <div className="container contact-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{t.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.current}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              {t.eyebrow}
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        {/* Channel cards */}
        <section className="section-pad contact-channels-section">
          <div className="container">
            <div className="contact-channels-grid">
              {CANALES[lang].map((canal) => (
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
                <div className="eyebrow contact-card-eyebrow">{t.socialEyebrow}</div>
                <h2 className="contact-lower-title">{t.socialTitle}</h2>
                <p className="contact-lower-desc">
                  {t.socialDesc}
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
                <div className="eyebrow contact-card-eyebrow">{t.hoursEyebrow}</div>
                <h2 className="contact-lower-title">{t.hoursTitle}</h2>
                <table className="contact-hours-table">
                  <tbody>
                    {HORARIOS[lang].map((h) => (
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
                    {t.specialNote}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
