import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Fragment } from 'react'
import { Icon } from '@/components/icons'
import { notFound } from 'next/navigation'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/nosotros'

const PATH = '/nosotros/'

/** Renglones (separados por salto de línea), cada uno seguido de <br />, y al final la parte en cursiva. */
function Lineas({ texto, acento }: { texto: string; acento: string }) {
  return (
    <>
      {texto.split('\n').map(l => l.trim()).filter(Boolean).map((l, i) => (
        <Fragment key={i}>{l}<br /></Fragment>
      ))}
      <em>{acento}</em>
    </>
  )
}

export async function generateMetadata({ params }: PageProps<'/[lang]/nosotros'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaNosotros', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function NosotrosPage({ params }: PageProps<'/[lang]/nosotros'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaNosotros', lang, defaults)

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* ── Hero ── */}
        <section className="nos-hero">
          <div className="nos-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="nos-hero-headline">
              <Lineas texto={t.heroHeadline} acento={t.heroHeadlineAccent} />
            </h1>
            <p className="nos-hero-intro">
              {t.heroIntro}
            </p>
            <div className="nos-hero-rule">
              <span className="nos-hero-rule-line" />
              <span className="nos-hero-rule-text">{t.heroRule}</span>
            </div>
          </div>
        </section>

        {/* ── Declaración ── */}
        <section className="nos-declaracion">
          <div className="nos-declaracion-inner">
            <p className="nos-declaracion-label">{t.missionLabel}</p>
            <blockquote className="nos-declaracion-quote">
              &quot;{t.missionQuote}{' '}<em>{t.missionQuoteAccent}</em>&quot;
            </blockquote>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="nos-stats">
          <div className="nos-stats-grid">
            {t.stats.map((s) => (
              <div key={s.label} className="nos-stat">
                <div className="nos-stat-num">
                  {s.num}<span>{s.suffix}</span>
                </div>
                <p className="nos-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Historia ── */}
        <section className="nos-historia">
          <div className="nos-historia-inner">
            <div className="nos-historia-texto">
              <p className="nos-historia-eyebrow">{t.historiaEyebrow}</p>
              <h2 className="nos-historia-titulo">
                {t.historiaTitulo}
              </h2>
              <div className="nos-historia-body">
                {t.historiaBody.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <aside className="nos-historia-aside">
              <blockquote className="nos-historia-pullquote">
                <Lineas texto={t.pullquote} acento={t.pullquoteAccent} />
              </blockquote>
              <p className="nos-historia-pullattr">{t.pullattr}</p>
            </aside>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="nos-valores">
          <div className="nos-valores-inner">
            <div className="nos-valores-header">
              <p className="nos-valores-titulo">{t.valoresTitulo}</p>
            </div>
            <div className="nos-valores-grid">
              {t.valores.map((v) => (
                <div key={v.num} className="nos-valor">
                  <span className="nos-valor-num" aria-hidden="true">{v.num}</span>
                  <p className="nos-valor-titulo">
                    {v.titulo}{' '}
                    <span className="nos-valor-titulo-accent">{v.acento}</span>
                  </p>
                  <p className="nos-valor-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Flota ── */}
        <section className="nos-flota-strip">
          <div className="nos-flota-inner">
            <div className="nos-flota-text">
              <p className="nos-flota-label">{t.flotaLabel}</p>
              <p className="nos-flota-nombre">{t.flotaNombre}</p>
              <p className="nos-flota-specs">
                {t.flotaSpecs}
              </p>
            </div>
            <Link href={lp(lang, t.flotaHref)} className="nos-flota-link">
              {t.flotaLink} <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="nos-cta">
          <div className="nos-cta-inner">
            <div className="nos-cta-texto">
              <p className="nos-cta-eyebrow">{t.ctaEyebrow}</p>
              <p className="nos-cta-titulo">{t.ctaTitulo}</p>
            </div>
            <div className="nos-cta-actions">
              <Link href={lp(lang, t.ctaReservarHref)} className="btn btn-inverse">
                {t.ctaReservar}
              </Link>
              <Link href={lp(lang, t.ctaRutasHref)} className="btn btn-outline">
                {t.ctaRutas}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
