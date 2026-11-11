import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/tiempos-aeropuerto/'

/* ── Data ───────────────────────────────────────────────────────────────── */

type Fase = { label: string; valor: string; minutos: number }

type TiempoCard = {
  id: string
  tipo: string
  subtitulo: string
  destacado: boolean
  llegada: { texto: string; minutos: number }
  fases: Fase[]
  nota?: string
}

const TIEMPOS: Record<Lang, TiempoCard[]> = {
  es: [
    {
      id: 'nacional',
      tipo: 'Nacional',
      subtitulo: 'Vuelos dentro de México',
      destacado: false,
      llegada: { texto: '1h 30 min', minutos: 90 },
      fases: [
        { label: 'Cierre de mostrador', valor: '45 min antes', minutos: 45 },
        { label: 'Cierre de puerta', valor: '20 min antes', minutos: 20 },
      ],
    },
    {
      id: 'internacional',
      tipo: 'Internacional',
      subtitulo: 'Vuelos a EE. UU. (Texas)',
      destacado: true,
      llegada: { texto: '2h 30 min', minutos: 150 },
      fases: [
        { label: 'Cierre de mostrador', valor: '60 min antes', minutos: 60 },
        { label: 'Cierre de puerta', valor: '20 min antes', minutos: 20 },
      ],
      nota: 'Los vuelos internacionales requieren trámites migratorios y de aduana. Llegar con suficiente anticipación es especialmente importante.',
    },
  ],
  en: [
    {
      id: 'nacional',
      tipo: 'Domestic',
      subtitulo: 'Flights within Mexico',
      destacado: false,
      llegada: { texto: '1h 30 min', minutos: 90 },
      fases: [
        { label: 'Check-in counter closes', valor: '45 min before', minutos: 45 },
        { label: 'Gate closes', valor: '20 min before', minutos: 20 },
      ],
    },
    {
      id: 'internacional',
      tipo: 'International',
      subtitulo: 'Flights to the U.S. (Texas)',
      destacado: true,
      llegada: { texto: '2h 30 min', minutos: 150 },
      fases: [
        { label: 'Check-in counter closes', valor: '60 min before', minutos: 60 },
        { label: 'Gate closes', valor: '20 min before', minutos: 20 },
      ],
      nota: 'International flights require immigration and customs procedures, so arriving with plenty of time to spare is especially important.',
    },
  ],
}

/** Una recomendación es texto plano o texto seguido de un enlace interno (ruta canónica). */
type Recomendacion = string | { texto: string; link: { label: string; href: string } }

const RECOMENDACIONES: Record<Lang, Recomendacion[]> = {
  es: [
    'En temporada alta (Semana Santa, verano y diciembre) agrega al menos 30 minutos adicionales a los tiempos indicados.',
    'Considera el tiempo de traslado hasta el aeropuerto, tráfico, estacionamiento y llegada con transporte público.',
    'Haz tu check-in en línea desde 24 horas antes para reducir el tiempo en mostrador y poder ir directo a controles de seguridad.',
    {
      texto: 'Ten tu identificación y documentos de viaje listos antes de llegar a los filtros de seguridad.',
      link: { label: 'Ver documentos requeridos →', href: '/ayuda/documentos-para-viajar/' },
    },
    'Si viajas con mascota, equipaje especial o requerimientos de asistencia, presenta 30 minutos adicionales a los tiempos indicados.',
  ],
  en: [
    'During peak season (Easter week, summer and December), add at least 30 extra minutes to the times shown.',
    'Allow time to get to the airport, including traffic, parking or arriving by public transportation.',
    'Check in online starting 24 hours before your flight to spend less time at the counter and go straight to security screening.',
    {
      texto: 'Have your ID and travel documents ready before you reach the security checkpoint.',
      link: { label: 'See required documents →', href: '/ayuda/documentos-para-viajar/' },
    },
    'If you’re traveling with a pet, special baggage or assistance needs, arrive 30 minutes earlier than the times shown.',
  ],
}

const es = {
  metaTitle: 'Tiempos de llegada al aeropuerto | Aerus',
  metaDescription:
    'Entérate con cuánta anticipación debes llegar al aeropuerto para tu vuelo Aerus. Tiempos recomendados para vuelos nacionales e internacionales.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Tiempos de llegada al aeropuerto',
  eyebrow: 'Ayuda',
  titleA: 'Tiempos de llegada al',
  titleB: 'aeropuerto',
  intro: 'Llegar a tiempo es parte del vuelo. Aquí los tiempos recomendados para que no se te vaya el avión.',
  beforeFlight: 'antes de tu vuelo',
  departure: 'Salida del vuelo',
  generalNote: 'Los tiempos son contados hacia atrás desde la hora de salida programada del vuelo.',
  tipsEyebrow: 'Recomendaciones',
  tipsTitle: 'Llega con margen de tiempo',
}

const en: typeof es = {
  metaTitle: 'Airport Arrival Times | Aerus',
  metaDescription:
    'Find out how early you should arrive at the airport for your Aerus flight. Recommended times for domestic and international flights.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Airport arrival times',
  eyebrow: 'Help',
  titleA: 'Airport arrival',
  titleB: 'times',
  intro: 'Getting there on time is part of the trip. Here are our recommended times so you don’t miss your flight.',
  beforeFlight: 'before your flight',
  departure: 'Flight departure',
  generalNote: 'Times are counted back from the flight’s scheduled departure time.',
  tipsEyebrow: 'Recommendations',
  tipsTitle: 'Leave yourself extra time',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/tiempos-aeropuerto'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default async function TiemposAeropuertoPage({ params }: PageProps<'/[lang]/ayuda/tiempos-aeropuerto'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const tx = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="tiempos-hero">
          <div className="container tiempos-hero-inner">
            <nav className="destino-breadcrumb" aria-label={tx.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{tx.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{tx.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{tx.current}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{tx.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {tx.titleA} <span className="accent">{tx.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {tx.intro}
            </p>
          </div>
        </section>

        {/* Timing cards */}
        <section className="tiempos-cards-section">
          <div className="container">
            <div className="tiempos-cards-grid">
              {TIEMPOS[lang].map((t) => (
                <div
                  key={t.id}
                  className={`tiempos-card${t.destacado ? ' tiempos-card--featured' : ''}`}
                >
                  <div className="tiempos-card-top">
                    <div className="tiempos-card-type">{t.tipo}</div>
                    <p className="tiempos-card-subtitulo">{t.subtitulo}</p>
                  </div>

                  <div className="tiempos-card-llegada">
                    <span className="tiempos-llegada-big">{t.llegada.texto}</span>
                    <span className="tiempos-llegada-label">{tx.beforeFlight}</span>
                  </div>

                  <div className="tiempos-card-divider" aria-hidden="true" />

                  <ul className="tiempos-card-fases">
                    {t.fases.map((fase) => (
                      <li key={fase.label} className="tiempos-fase">
                        <span className="tiempos-fase-label">{fase.label}</span>
                        <span className="tiempos-fase-valor">{fase.valor}</span>
                      </li>
                    ))}
                    <li className="tiempos-fase tiempos-fase--salida">
                      <span className="tiempos-fase-label">{tx.departure}</span>
                      <span className="tiempos-fase-valor tiempos-fase-valor--salida">00:00</span>
                    </li>
                  </ul>

                  {t.nota && (
                    <p className="tiempos-card-nota">{t.nota}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="tiempos-general-note">
              <Icon name="clock" size={14} className="tiempos-note-icon" />
              {tx.generalNote}
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="section-pad tiempos-tips-section">
          <div className="container">
            <div className="tiempos-tips-inner">
              <div className="docs-section-header" style={{ marginBottom: 24 }}>
                <div className="docs-section-icon">
                  <Icon name="check" size={20} stroke={1.5} />
                </div>
                <div>
                  <p className="docs-subtitulo">{tx.tipsEyebrow}</p>
                  <h2 className="docs-h2">{tx.tipsTitle}</h2>
                </div>
              </div>
              <ul className="docs-list">
                {RECOMENDACIONES[lang].map((item, i) => (
                  <li key={i}>
                    {typeof item === 'string' ? item : (
                      <>
                        {item.texto}{' '}
                        <Link href={lp(lang, item.link.href)} style={{ color: 'inherit', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                          {item.link.label}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
