import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/experiencia/proceso-agil/'

type Comparacion = { aspecto: string; grande: string; aerus: string }
type Paso = { icono: string; paso: string; titulo: string; descripcion: string }
type Relacionado = { label: string; href: string }

const es = {
  metaTitle: 'Espera minutos, no horas | Aerus',
  metaDescription:
    'En Aerus llegas al aeropuerto 90 minutos antes, no 3 horas. Terminales regionales más ágiles, menos filas y un proceso de abordaje diseñado para ir al grano.',
  breadcrumbLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',
  breadcrumbSection: 'Experiencia',
  breadcrumbCurrent: 'Espera minutos, no horas',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Espera minutos, ',
  heroTitleAccent: 'no horas',
  heroIntro:
    'Las aerolíneas grandes te piden llegar 3 horas antes. En Aerus, 90 minutos son suficientes. Terminales regionales más ágiles, filas cortas y abordaje directo.',
  comparacionSubtitulo: 'Aerus vs. aerolíneas tradicionales',
  comparacionTitle: '¿Cuánto tiempo te ahorra Aerus?',
  colGrande: 'Aerolínea grande',
  pasosSubtitulo: 'Tu día de vuelo',
  pasosTitle: 'El proceso paso a paso',
  relacionadosTitle: 'También puede interesarte',
  ctaTitle: '¿Listo para volar?',
  ctaDesc: 'Reserva tu vuelo y disfruta un proceso sin filas largas.',
  ctaButton: 'Reservar vuelo',
  comparacion: [
    { aspecto: 'Llegada recomendada', grande: '3 horas antes', aerus: '90 minutos antes' },
    { aspecto: 'Tiempo en fila de check-in', grande: '30–60 min', aerus: '5–10 min' },
    { aspecto: 'Controles de seguridad', grande: 'Terminal internacional masiva', aerus: 'Terminal regional con menos afluencia' },
    { aspecto: 'Sala de espera', grande: 'Cientos de pasajeros', aerus: 'Ambiente tranquilo, vuelo pequeño' },
    { aspecto: 'Abordaje', grande: 'Por grupos, 30–45 min', aerus: 'Directo, 10 min' },
    { aspecto: 'Llegada y salida del avión', grande: 'Puerta de manga, esperas', aerus: 'Acceso directo a pista en muchos destinos' },
  ] as Comparacion[],
  pasos: [
    {
      icono: 'calendar',
      paso: '90 min antes',
      titulo: 'Llega al aeropuerto',
      descripcion: 'En vuelos nacionales Aerus basta llegar 90 minutos antes. Para vuelos internacionales (Texas) recomendamos 2:30 horas por los trámites migratorios.',
    },
    {
      icono: 'user',
      paso: 'Check-in',
      titulo: 'Documenta en minutos',
      descripcion: 'El mostrador Aerus tiene filas cortas. Si ya hiciste tu check-in en línea, puedes ir directo a documentar equipaje o a controles de seguridad si viajas solo con equipaje de mano.',
    },
    {
      icono: 'shield',
      paso: 'Seguridad',
      titulo: 'Controles ágiles',
      descripcion: 'Las terminales regionales tienen menos flujo de personas. El proceso de revisión de seguridad suele tomar menos de 10 minutos.',
    },
    {
      icono: 'plane-takeoff',
      paso: 'Abordaje',
      titulo: 'Directamente al avión',
      descripcion: 'El Cessna Grand Caravan EX aborda a todos los pasajeros desde la pista o puerta en un proceso que dura alrededor de 10 minutos. Sin manga, sin grupos, sin espera.',
    },
  ] as Paso[],
  relacionados: [
    { label: 'La flota', href: '/experiencia/flota/' },
    { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Check-in en línea', href: '/check-in/' },
  ] as Relacionado[],
}

const en: typeof es = {
  metaTitle: 'Wait Minutes, Not Hours | Aerus',
  metaDescription:
    'With Aerus, you arrive at the airport 90 minutes before your flight, not 3 hours. Faster regional terminals, shorter lines and a boarding process designed to get you on your way.',
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',
  breadcrumbSection: 'Experience',
  breadcrumbCurrent: 'Wait minutes, not hours',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Wait minutes, ',
  heroTitleAccent: 'not hours',
  heroIntro:
    'Big airlines ask you to arrive 3 hours early. With Aerus, 90 minutes is enough. Faster regional terminals, short lines and direct boarding.',
  comparacionSubtitulo: 'Aerus vs. traditional airlines',
  comparacionTitle: 'How much time does Aerus save you?',
  colGrande: 'Major airline',
  pasosSubtitulo: 'Your travel day',
  pasosTitle: 'The process, step by step',
  relacionadosTitle: 'You may also like',
  ctaTitle: 'Ready to fly?',
  ctaDesc: 'Book your flight and enjoy a process without long lines.',
  ctaButton: 'Book a flight',
  comparacion: [
    { aspecto: 'Recommended arrival', grande: '3 hours before', aerus: '90 minutes before' },
    { aspecto: 'Check-in line wait', grande: '30–60 min', aerus: '5–10 min' },
    { aspecto: 'Security screening', grande: 'Massive international terminal', aerus: 'Regional terminal with fewer travelers' },
    { aspecto: 'Waiting area', grande: 'Hundreds of passengers', aerus: 'Calm atmosphere, small flight' },
    { aspecto: 'Boarding', grande: 'By group, 30–45 min', aerus: 'Direct, 10 min' },
    { aspecto: 'Boarding and deplaning', grande: 'Jet bridge gate, waiting', aerus: 'Direct ramp access at many destinations' },
  ],
  pasos: [
    {
      icono: 'calendar',
      paso: '90 min before',
      titulo: 'Arrive at the airport',
      descripcion: 'On Aerus domestic flights, arriving 90 minutes early is enough. For international flights (Texas), we recommend 2 hours 30 minutes to allow time for immigration procedures.',
    },
    {
      icono: 'user',
      paso: 'Check-in',
      titulo: 'Check in within minutes',
      descripcion: 'Lines at the Aerus counter are short. If you already checked in online, you can go straight to bag drop — or directly to security if you’re only traveling with a carry-on.',
    },
    {
      icono: 'shield',
      paso: 'Security',
      titulo: 'Fast screening',
      descripcion: 'Regional terminals have less foot traffic. Security screening usually takes less than 10 minutes.',
    },
    {
      icono: 'plane-takeoff',
      paso: 'Boarding',
      titulo: 'Straight to the aircraft',
      descripcion: 'The Cessna Grand Caravan EX boards all passengers from the ramp or gate in about 10 minutes. No jet bridge, no boarding groups, no waiting.',
    },
  ],
  relacionados: [
    { label: 'Our fleet', href: '/experiencia/flota/' },
    { label: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Airport arrival times', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Online check-in', href: '/check-in/' },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/proceso-agil'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function ProcesoAgilPage({ params }: PageProps<'/[lang]/experiencia/proceso-agil'>) {
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
                {/* Comparación */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="clock" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.comparacionSubtitulo}</p>
                      <h2 className="docs-h2">{t.comparacionTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-comparacion-table">
                    <div className="exp-comparacion-header">
                      <span></span>
                      <span>{t.colGrande}</span>
                      <span>Aerus</span>
                    </div>
                    {t.comparacion.map((c) => (
                      <div key={c.aspecto} className="exp-comparacion-row">
                        <span className="exp-comp-aspecto">{c.aspecto}</span>
                        <span className="exp-comp-grande">{c.grande}</span>
                        <span className="exp-comp-aerus">{c.aerus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pasos */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 28 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane-takeoff" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.pasosSubtitulo}</p>
                      <h2 className="docs-h2">{t.pasosTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-pasos-grid">
                    {t.pasos.map((p) => (
                      <div key={p.paso} className="exp-paso-card">
                        <div className="exp-paso-icon">
                          <Icon name={p.icono} size={20} stroke={1.5} />
                        </div>
                        <span className="exp-paso-tiempo">{p.paso}</span>
                        <p className="exp-paso-titulo">{p.titulo}</p>
                        <p className="exp-paso-desc">{p.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.relacionadosTitle}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map((s) => (
                      <li key={s.href}>
                        <Link href={lp(lang, s.href)} className="docs-related-link">
                          <span>{s.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <Link href={lp(lang, '/reservar/')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {t.ctaButton}
                  </Link>
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
