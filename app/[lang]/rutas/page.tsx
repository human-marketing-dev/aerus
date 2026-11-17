import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { getAllRutas, type RutaData } from '@/lib/red'
import { isLang, lp, type Lang } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import { fill } from '@/lib/plantillas'
import defaults, { type RutasContent } from '@/content/pages/rutas'

const PATH = '/rutas/'

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaRutas', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function RutasPage({ params }: PageProps<'/[lang]/rutas'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaRutas', lang, defaults)

  const rutas = await getAllRutas(lang)
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
              {fill(t.intro, { n: rutas.length })}
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
                <RutaCard key={r.slug} r={r} lang={lang} t={t} />
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
                <RutaCard key={r.slug} r={r} lang={lang} t={t} dark />
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
            <Link href={lp(lang, t.vivaHref)} className="btn btn-primary">
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

function RutaCard({ r, lang, t, dark = false }: { r: RutaData; lang: Lang; t: RutasContent; dark?: boolean }) {
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
