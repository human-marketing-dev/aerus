import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/on-demand/charter/cotizar/'

const es = {
  metaTitle: 'Cotizar chárter | Aerus',
  metaDescription:
    'Solicita una cotización para tu vuelo chárter con Aerus. Envíanos los datos de tu vuelo y te respondemos en menos de 24 horas.',
  breadcrumbLabel: 'Ruta de navegación',
  inicio: 'Inicio',
  breadcrumbActual: 'Cotizar',
  titleA: 'Solicita tu ',
  titleAccent: 'cotización',
  intro:
    'Envíanos los datos de tu vuelo por correo o WhatsApp y te respondemos con una propuesta en menos de 24 horas hábiles.',
  datosSub: 'Qué necesitamos saber',
  datosTitulo: 'Datos para tu cotización',
  datosIntro: 'Para prepararte la cotización más precisa posible, incluye los siguientes datos en tu mensaje:',
  datos: [
    'Ciudad de origen y ciudad de destino',
    'Fecha y horario de salida (puede ser tentativo)',
    'Número de pasajeros (máximo 9)',
    'Nombre de la empresa o responsable del vuelo',
    'Si necesitas vuelo de regreso y en qué fecha',
    'Cualquier requerimiento especial (equipaje extra, escalas, etc.)',
  ],
  tiemposSub: 'Tiempos de respuesta',
  tiemposTitulo: '¿Cuándo te respondemos?',
  tiemposA: 'Respondemos cotizaciones de chárter en ',
  tiemposStrong: 'menos de 24 horas hábiles',
  tiemposB:
    '. Si tu vuelo es urgente (dentro de las próximas 48 horas), indícalo en el mensaje y priorizamos tu solicitud.',
  propuestaSub: 'Qué esperar',
  propuestaTitulo: 'Cómo es la propuesta',
  propuestaTexto:
    'La propuesta incluye precio total del vuelo, itinerario con horarios tenttativos, aeronave asignada, condiciones de pago y política de cancelación. Puedes aceptarla, pedir ajustes o rechazarla — sin compromiso hasta que la confirmes.',
  ctaTitulo: 'Escríbenos ahora',
  ctaDesc: 'Incluye los datos del vuelo y te respondemos en menos de 24 horas.',
  mailSubject: 'Cotización chárter',
  horario: 'Lunes a viernes · 08:00–18:00 h CST',
  relacionadosTitulo: 'Antes de cotizar',
  relacionados: [
    { label: 'Qué incluye el chárter', href: '/on-demand/charter/' },
    { label: 'Red de rutas',            href: '/rutas/' },
    { label: 'La flota Aerus',          href: '/experiencia/flota/' },
  ],
}

const en: typeof es = {
  metaTitle: 'Charter Quote | Aerus',
  metaDescription:
    'Request a quote for your Aerus charter flight. Send us your flight details and we’ll get back to you in less than 24 hours.',
  breadcrumbLabel: 'Breadcrumb',
  inicio: 'Home',
  breadcrumbActual: 'Get a quote',
  titleA: 'Request your ',
  titleAccent: 'quote',
  intro:
    'Send us your flight details by email or WhatsApp and we’ll reply with a proposal within 24 business hours.',
  datosSub: 'What we need to know',
  datosTitulo: 'Details for your quote',
  datosIntro: 'To prepare the most accurate quote possible, please include the following details in your message:',
  datos: [
    'Departure and destination cities',
    'Departure date and time (can be tentative)',
    'Number of passengers (maximum 9)',
    'Company name or the person responsible for the flight',
    'Whether you need a return flight, and on what date',
    'Any special requirements (extra baggage, stops, etc.)',
  ],
  tiemposSub: 'Response times',
  tiemposTitulo: 'When will we get back to you?',
  tiemposA: 'We respond to charter quote requests within ',
  tiemposStrong: '24 business hours',
  tiemposB:
    '. If your flight is urgent (within the next 48 hours), let us know in your message and we’ll prioritize your request.',
  propuestaSub: 'What to expect',
  propuestaTitulo: 'What the proposal looks like',
  propuestaTexto:
    'The proposal includes the total flight price, an itinerary with tentative times, the assigned aircraft, payment terms and the cancellation policy. You can accept it, request changes or decline it — there’s no commitment until you confirm.',
  ctaTitulo: 'Write to us now',
  ctaDesc: 'Include your flight details and we’ll reply in less than 24 hours.',
  mailSubject: 'Charter quote request',
  horario: 'Monday to Friday · 8:00 a.m.–6:00 p.m. CST',
  relacionadosTitulo: 'Before you request a quote',
  relacionados: [
    { label: 'What the charter includes', href: '/on-demand/charter/' },
    { label: 'Route network',             href: '/rutas/' },
    { label: 'The Aerus fleet',           href: '/experiencia/flota/' },
  ],
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/charter/cotizar'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function CotizarCharterPage({ params }: PageProps<'/[lang]/on-demand/charter/cotizar'>) {
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
              <Link href={lp(lang, '/on-demand/charter/')}>Aerus Charter</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.breadcrumbActual}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus Charter</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
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

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="mail" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.datosSub}</p>
                      <h2 className="docs-h2">{t.datosTitulo}</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)', marginBottom: 20 }}>
                    {t.datosIntro}
                  </p>
                  <ul className="docs-list">
                    {t.datos.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="clock" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.tiemposSub}</p>
                      <h2 className="docs-h2">{t.tiemposTitulo}</h2>
                    </div>
                  </div>
                  <div className="docs-callout">
                    {t.tiemposA}<strong>{t.tiemposStrong}</strong>{t.tiemposB}
                  </div>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.propuestaSub}</p>
                      <h2 className="docs-h2">{t.propuestaTitulo}</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)' }}>
                    {t.propuestaTexto}
                  </p>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <a
                    href={`mailto:charter@aerus.mx?subject=${t.mailSubject}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 10 }}
                  >
                    <Icon name="mail" size={15} stroke={1.5} />
                    charter@aerus.mx
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
                    {t.horario}
                  </p>
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
