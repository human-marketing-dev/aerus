import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { getAllRutas, type RutaData } from '@/lib/rutas-data'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/rutas/'

const T = {
  es: {
    metaTitle: 'Rutas | Aerus',
    metaDescription:
      'Red de rutas directas de Aerus. Vuelos regionales sin escalas entre las principales ciudades de México y la frontera norte con Estados Unidos.',
    eyebrow: 'Red Aerus',
    titleA: 'Rutas ',
    titleAccent: 'directas',
    intro: (n: number) =>
      `${n} rutas directas. Sin escalas, sin conexiones, sin perder el día en un aeropuerto grande. Vuelas de origen a destino.`,
    statDirect: 'rutas directas',
    statIntl: 'internacionales',
    statDomestic: 'nacionales',
    domestic: 'Nacionales',
    international: 'Internacionales — Frontera norte',
    vivaLabel: 'Amplía tu red',
    vivaTitle: 'Alianza con Viva',
    vivaDesc:
      'Combina tu vuelo Aerus con la red de Viva para llegar a más destinos nacionales e internacionales con una sola reservación.',
    vivaCta: 'Conocer la alianza',
    intlBadge: 'Intl',
    seeRoute: 'Ver ruta',
  },
  en: {
    metaTitle: 'Routes | Aerus',
    metaDescription:
      'The Aerus direct route network. Nonstop regional flights between Mexico’s major cities and the northern border with the United States.',
    eyebrow: 'Aerus network',
    titleA: 'Direct ',
    titleAccent: 'routes',
    intro: (n: number) =>
      `${n} direct routes. No layovers, no connections, no losing the day in a big airport. You fly straight from origin to destination.`,
    statDirect: 'direct routes',
    statIntl: 'international',
    statDomestic: 'domestic',
    domestic: 'Domestic',
    international: 'International — Northern border',
    vivaLabel: 'Expand your network',
    vivaTitle: 'Viva alliance',
    vivaDesc:
      'Combine your Aerus flight with the Viva network to reach more domestic and international destinations with a single booking.',
    vivaCta: 'Explore the alliance',
    intlBadge: 'Intl',
    seeRoute: 'View route',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function RutasPage({ params }: PageProps<'/[lang]/rutas'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  const rutas = getAllRutas(lang)
  const nacionales = rutas.filter(r => !r.esInternacional)
  const internacionales = rutas.filter(r => r.esInternacional)

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* ── Hero ── */}
        <section className="rutas-hero">
          <div className="container rutas-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro(rutas.length)}
            </p>
            <div className="rutas-hero-stats">
              <span className="rutas-hero-stat">
                <strong>{rutas.length}</strong> {t.statDirect}
              </span>
              <span className="rutas-hero-sep" aria-hidden="true" />
              <span className="rutas-hero-stat">
                <strong>{internacionales.length}</strong> {t.statIntl}
              </span>
              <span className="rutas-hero-sep" aria-hidden="true" />
              <span className="rutas-hero-stat">
                <strong>{nacionales.length}</strong> {t.statDomestic}
              </span>
            </div>
          </div>
        </section>

        {/* ── Rutas nacionales ── */}
        <section className="rutas-section">
          <div className="container">
            <p className="rutas-section-label">{t.domestic}</p>
            <div className="rutas-grid">
              {nacionales.map(r => (
                <RutaCard key={r.slug} r={r} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Rutas internacionales ── */}
        <section className="rutas-section rutas-section--dark">
          <div className="container">
            <p className="rutas-section-label">{t.international}</p>
            <div className="rutas-grid">
              {internacionales.map(r => (
                <RutaCard key={r.slug} r={r} lang={lang} dark />
              ))}
            </div>
          </div>
        </section>

        {/* ── Alianza con Viva ── */}
        <section className="rutas-viva-strip">
          <div className="container rutas-viva-inner">
            <div className="rutas-viva-text">
              <p className="rutas-viva-label">{t.vivaLabel}</p>
              <p className="rutas-viva-titulo">{t.vivaTitle}</p>
              <p className="rutas-viva-desc">{t.vivaDesc}</p>
            </div>
            <Link href={lp(lang, '/rutas/alianza-viva/')} className="btn btn-primary">
              {t.vivaCta}
            </Link>
          </div>
        </section>

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}

function RutaCard({ r, lang, dark = false }: { r: RutaData; lang: Lang; dark?: boolean }) {
  const t = T[lang]
  const duracionLabel =
    r.duracionMin < 60
      ? `~${r.duracionMin} min`
      : r.duracionMin % 60 === 0
        ? `~${Math.floor(r.duracionMin / 60)}h`
        : `~${Math.floor(r.duracionMin / 60)}h ${r.duracionMin % 60}min`

  return (
    <Link href={lp(lang, `/rutas/${r.slug}/`)} className={`ruta-card${dark ? ' ruta-card--dark' : ''}`}>
      <div className="ruta-card-codes">
        <span className="ruta-card-iata">{r.iataOrigen}</span>
        <span className="ruta-card-line" aria-hidden="true" />
        <Icon name="plane" size={14} stroke={1.5} className="ruta-card-plane" />
        <span className="ruta-card-line" aria-hidden="true" />
        <span className="ruta-card-iata">{r.iataDestino}</span>
      </div>
      <p className="ruta-card-label">{r.label}</p>
      <div className="ruta-card-meta">
        <span className="ruta-card-dur">{duracionLabel}</span>
        {r.esInternacional && <span className="ruta-card-intl">{t.intlBadge}</span>}
      </div>
      <span className="ruta-card-cta" aria-hidden="true">
        {t.seeRoute} <Icon name="arrow-right" size={13} />
      </span>
    </Link>
  )
}
