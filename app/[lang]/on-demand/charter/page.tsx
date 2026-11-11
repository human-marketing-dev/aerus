import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/on-demand/charter/'

const es = {
  metaTitle: 'Aerus Charter | Aerus',
  metaDescription:
    'Chárter ejecutivo y grupal con Aerus. Avión exclusivo, horario a tu medida, hasta 12 pasajeros. Para eventos corporativos, delegaciones, equipos deportivos y traslados urgentes.',
  breadcrumbLabel: 'Ruta de navegación',
  inicio: 'Inicio',
  intro:
    'Avión exclusivo para tu grupo o evento. Tú defines el destino, la fecha y el horario. Hasta 12 pasajeros. Vuelo directo, sin escalas, sin horarios ajenos.',
  usosSub: 'Para quién es',
  usosTitulo: 'Usos frecuentes del chárter',
  usos: [
    {
      icono: 'users',
      titulo: 'Viajes ejecutivos',
      desc: 'Directivos y equipos que necesitan llegar el mismo día a una reunión, sin depender de horarios comerciales.',
    },
    {
      icono: 'plane',
      titulo: 'Delegaciones y eventos',
      desc: 'Traslado de grupos a convenciones, lanzamientos, inauguraciones o eventos corporativos en destinos regionales.',
    },
    {
      icono: 'ticket',
      titulo: 'Equipos deportivos',
      desc: 'Vuelos coordinados para equipos, cuerpos técnicos y staff. Gestión de equipaje especial incluida en la coordinación.',
    },
    {
      icono: 'clock',
      titulo: 'Traslados urgentes',
      desc: 'Cuando un vuelo comercial no existe o no llega a tiempo. Salida en el horario que necesitas hacia cualquier destino de la red.',
    },
  ],
  incluyeSub: 'El servicio',
  incluyeTitulo: 'Qué incluye el chárter',
  incluye: [
    'Uso exclusivo de la aeronave para tu grupo (hasta 12 pasajeros)',
    'Horario de salida y llegada definido por ti',
    'Salida desde cualquier aeropuerto dentro de la red Aerus',
    'Flexibilidad de equipaje mayor a vuelos regulares',
    'Factura a razón social de la empresa',
    'Atención de un agente Aerus durante todo el proceso',
    'Posibilidad de escala intermedia según la ruta',
  ],
  pasosTitulo: 'Cómo funciona',
  pasos: [
    {
      titulo: 'Cuéntanos del vuelo',
      desc: 'Origen, destino, fecha, horario tentativo y número de pasajeros. Mientras más detalle, más precisa será la propuesta.',
    },
    {
      titulo: 'Recibe tu propuesta en 24h',
      desc: 'Nuestro equipo revisa disponibilidad de aeronave y te envía una propuesta con precio, itinerario y condiciones de pago.',
    },
    {
      titulo: 'Confirma y paga',
      desc: 'Al confirmar la propuesta coordinamos todos los detalles operativos. El pago puede realizarse por transferencia o cargo a cuenta empresarial.',
    },
    {
      titulo: 'Vuela',
      desc: 'El día del vuelo, llega al aeropuerto 60 minutos antes. Tu avión está esperando — no hay filas de check-in ni espera en sala.',
    },
  ],
  ctaTitulo: 'Solicita tu cotización',
  ctaDesc: 'Envíanos los datos del vuelo y te respondemos con una propuesta en menos de 24 horas.',
  ctaBtn: 'Cotizar chárter',
  relacionadosTitulo: 'También puede interesarte',
  relacionados: [
    { label: 'Aerus Flight Pass',     href: '/on-demand/flight-pass/' },
    { label: 'Cuenta empresarial',    href: '/on-demand/empresas/' },
    { label: 'Vuelos para grupos',    href: '/experiencia/grupos/' },
    { label: 'Red de rutas',          href: '/rutas/' },
  ],
  contactoTag: 'Contacto directo',
  contactoTitulo: 'Equipo Charter',
  horario: 'Lun–Vie · 08:00–18:00 h',
}

const en: typeof es = {
  metaTitle: 'Aerus Charter | Aerus',
  metaDescription:
    'Executive and group charter flights with Aerus. A private aircraft on your schedule for up to 12 passengers. Ideal for corporate events, delegations, sports teams and urgent travel.',
  breadcrumbLabel: 'Breadcrumb',
  inicio: 'Home',
  intro:
    'A private aircraft for your group or event. You choose the destination, date and time. Up to 12 passengers. Nonstop, with no layovers and no one else’s schedule.',
  usosSub: 'Who it’s for',
  usosTitulo: 'Common charter uses',
  usos: [
    {
      icono: 'users',
      titulo: 'Executive travel',
      desc: 'Executives and teams who need to make a same-day meeting without depending on commercial flight schedules.',
    },
    {
      icono: 'plane',
      titulo: 'Delegations and events',
      desc: 'Group transportation to conventions, product launches, openings and corporate events in regional destinations.',
    },
    {
      icono: 'ticket',
      titulo: 'Sports teams',
      desc: 'Coordinated flights for teams, coaching staff and support personnel. Special baggage handling is included in the planning.',
    },
    {
      icono: 'clock',
      titulo: 'Urgent travel',
      desc: 'When there’s no commercial flight, or it won’t get you there in time. Depart when you need to, to any destination in our network.',
    },
  ],
  incluyeSub: 'The service',
  incluyeTitulo: 'What the charter includes',
  incluye: [
    'Exclusive use of the aircraft for your group (up to 12 passengers)',
    'Departure and arrival times set by you',
    'Departures from any airport in the Aerus network',
    'More generous baggage allowance than scheduled flights',
    'Invoice issued to your company’s legal entity',
    'Support from an Aerus agent throughout the entire process',
    'Optional intermediate stop depending on the route',
  ],
  pasosTitulo: 'How it works',
  pasos: [
    {
      titulo: 'Tell us about your flight',
      desc: 'Origin, destination, date, preferred departure time and number of passengers. The more detail you share, the more accurate your proposal will be.',
    },
    {
      titulo: 'Get your proposal within 24 hours',
      desc: 'Our team checks aircraft availability and sends you a proposal with pricing, itinerary and payment terms.',
    },
    {
      titulo: 'Confirm and pay',
      desc: 'Once you confirm the proposal, we coordinate all operational details. Payment can be made by bank transfer or charged to your business account.',
    },
    {
      titulo: 'Fly',
      desc: 'On the day of your flight, arrive at the airport 60 minutes before departure. Your aircraft is waiting — no check-in lines, no time in the lounge.',
    },
  ],
  ctaTitulo: 'Request a quote',
  ctaDesc: 'Send us your flight details and we’ll reply with a proposal in less than 24 hours.',
  ctaBtn: 'Get a charter quote',
  relacionadosTitulo: 'You may also be interested in',
  relacionados: [
    { label: 'Aerus Flight Pass',     href: '/on-demand/flight-pass/' },
    { label: 'Business account',      href: '/on-demand/empresas/' },
    { label: 'Group travel',          href: '/experiencia/grupos/' },
    { label: 'Route network',         href: '/rutas/' },
  ],
  contactoTag: 'Direct contact',
  contactoTitulo: 'Charter Team',
  horario: 'Mon–Fri · 8:00 a.m.–6:00 p.m.',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/charter'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function CharterPage({ params }: PageProps<'/[lang]/on-demand/charter'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.inicio}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/on-demand/')}>On Demand</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Aerus Charter</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>On Demand</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Aerus <span className="accent">Charter</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                {/* Para quién es */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.usosSub}</p>
                      <h2 className="docs-h2">{t.usosTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {t.usos.map((u) => (
                      <div key={u.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={u.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{u.titulo}</p>
                        <p className="corp-uso-desc">{u.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qué incluye */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.incluyeSub}</p>
                      <h2 className="docs-h2">{t.incluyeTitulo}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.incluye.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>

                {/* Cómo funciona */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitulo}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((p, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{p.titulo}</p>
                          <p className="fact-step-desc">{p.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.ctaDesc}
                  </p>
                  <Link
                    href={lp(lang, '/on-demand/charter/cotizar/')}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaBtn}
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitulo}</p>
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

                <div className="mro-contact-card" style={{ marginTop: 16 }}>
                  <p className="mro-contact-card-tag">{t.contactoTag}</p>
                  <p className="mro-contact-card-title">{t.contactoTitulo}</p>
                  <div className="mro-contact-row">
                    <Icon name="mail" size={14} stroke={1.5} />
                    <a href="mailto:charter@aerus.mx">charter@aerus.mx</a>
                  </div>
                  <div className="mro-contact-row">
                    <Icon name="phone" size={14} stroke={1.5} />
                    <a href="tel:+528126823501">+52 812 682 3501</a>
                  </div>
                  <p className="mro-contact-horario">{t.horario}</p>
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
