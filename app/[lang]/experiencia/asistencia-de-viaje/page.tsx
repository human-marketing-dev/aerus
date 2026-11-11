import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/experiencia/asistencia-de-viaje/'

type Servicio = { icono: string; titulo: string; descripcion: string }
type Canal = { icono: string; label: string; detalle: string; href: string }
type Relacionado = { label: string; href: string }

const es = {
  metaTitle: 'Asistencia de viaje | Aerus',
  metaDescription:
    'Aerus te acompaña antes, durante y después de tu vuelo. Seguimiento de vuelo en tiempo real, atención personalizada y soporte en caso de cambios o imprevistos.',
  breadcrumbLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',
  breadcrumbSection: 'Experiencia',
  breadcrumbCurrent: 'Asistencia de viaje',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Asistencia de ',
  heroTitleAccent: 'viaje',
  heroIntro:
    'Siempre hay alguien en Aerus para ayudarte. Antes de salir, durante el vuelo y al llegar — te acompañamos en cada paso.',
  serviciosSubtitulo: 'Lo que hacemos por ti',
  serviciosTitle: 'Servicios de asistencia',
  callout:
    'Para requerimientos especiales (menores no acompañados, oxígeno médico, animales de servicio) es obligatorio notificar con al menos 48 horas de anticipación.',
  calloutLink: 'Ver requerimientos especiales →',
  canalesTitle: 'Canales de atención',
  relacionadosTitle: 'Más sobre tu viaje',
  servicios: [
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
  ] as Servicio[],
  canales: [
    { icono: 'phone', label: 'México', detalle: '+52 (812) 682·3501 · Lun–Dom 06:00–22:00', href: 'tel:+528126823501' },
    { icono: 'phone', label: 'EE.UU.', detalle: '+1 (866) 691·0179 · Llamada gratuita', href: 'tel:+18666910179' },
    { icono: 'bot', label: 'WhatsApp IA', detalle: '+52 (814) 170·1702 · 24 hrs', href: 'https://wa.me/528141701702' },
    { icono: 'mail', label: 'Correo', detalle: 'contacto@aerus.mx', href: 'mailto:contacto@aerus.mx' },
  ] as Canal[],
  relacionados: [
    { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
  ] as Relacionado[],
}

const en: typeof es = {
  metaTitle: 'Travel Assistance | Aerus',
  metaDescription:
    'Aerus is with you before, during and after your flight. Real-time flight tracking, personalized service and support if plans change or something unexpected happens.',
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',
  breadcrumbSection: 'Experience',
  breadcrumbCurrent: 'Travel assistance',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Travel ',
  heroTitleAccent: 'assistance',
  heroIntro:
    "There's always someone at Aerus ready to help. Before you leave, during your flight and when you land — we're with you every step of the way.",
  serviciosSubtitulo: 'What we do for you',
  serviciosTitle: 'Assistance services',
  callout:
    'For special assistance requests (unaccompanied minors, medical oxygen, service animals), you must notify us at least 48 hours in advance.',
  calloutLink: 'View special assistance →',
  canalesTitle: 'Contact channels',
  relacionadosTitle: 'More about your trip',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Real-time flight tracking',
      descripcion:
        'Check your flight status at any time on aerus.mx or by contacting our team. You’ll receive email notifications of any schedule or gate changes.',
    },
    {
      icono: 'calendar',
      titulo: 'Changes and rebooking',
      descripcion:
        'If you need to change your flight, contact us at least 24 hours in advance. Our team will check availability and help you find the best option under your fare rules.',
    },
    {
      icono: 'phone',
      titulo: 'Phone and WhatsApp support',
      descripcion:
        'Our passenger service line is available Monday through Sunday, 6:00 am to 10:00 pm. An AI assistant is available 24/7 on WhatsApp for immediate questions.',
    },
    {
      icono: 'users',
      titulo: 'Assistance for passengers with special needs',
      descripcion:
        'We coordinate wheelchair assistance, unaccompanied minors, in-flight medical oxygen and service animals. Please notify us at least 48 hours before your flight.',
    },
    {
      icono: 'luggage',
      titulo: 'Baggage claims and tracking',
      descripcion:
        'If your baggage is damaged or lost, our airport team will file the report and coordinate the search or reimbursement in accordance with Mexico’s Civil Aviation Law (Ley de Aviación Civil).',
    },
    {
      icono: 'shield',
      titulo: 'Irregular operations',
      descripcion:
        'If a flight is canceled for reasons attributable to Aerus (technical or airline-related), we’ll offer you rebooking on the next available flight, a refund or compensation in accordance with DGAC regulations.',
    },
  ],
  canales: [
    { icono: 'phone', label: 'Mexico', detalle: '+52 (812) 682·3501 · Mon–Sun 6:00 am–10:00 pm', href: 'tel:+528126823501' },
    { icono: 'phone', label: 'U.S.', detalle: '+1 (866) 691·0179 · Toll-free', href: 'tel:+18666910179' },
    { icono: 'bot', label: 'WhatsApp AI', detalle: '+52 (814) 170·1702 · 24/7', href: 'https://wa.me/528141701702' },
    { icono: 'mail', label: 'Email', detalle: 'contacto@aerus.mx', href: 'mailto:contacto@aerus.mx' },
  ],
  relacionados: [
    { label: 'Special assistance', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Travel documents', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Contact Aerus', href: '/ayuda/contacto/' },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/asistencia-de-viaje'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function AsistenciaDeViajePage({ params }: PageProps<'/[lang]/experiencia/asistencia-de-viaje'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.breadcrumbHome}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/experiencia/')}>{t.breadcrumbSection}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.breadcrumbCurrent}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.heroTitlePre}<span className="accent">{t.heroTitleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.heroIntro}
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
                      <p className="docs-subtitulo">{t.serviciosSubtitulo}</p>
                      <h2 className="docs-h2">{t.serviciosTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-asistencia-grid">
                    {t.servicios.map((s) => (
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
                    {t.callout}{' '}
                    <Link href={lp(lang, '/ayuda/requerimientos-especiales/')} style={{ color: 'inherit', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                      {t.calloutLink}
                    </Link>
                  </p>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.canalesTitle}</p>
                  <div className="exp-canales-list">
                    {t.canales.map((c) => (
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
                  <p className="docs-sidebar-card-title">{t.relacionadosTitle}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map((r) => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
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
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
