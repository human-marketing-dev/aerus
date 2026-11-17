import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/ayuda-tiempos'

const PATH = '/ayuda/tiempos-aeropuerto/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/tiempos-aeropuerto'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaTiempos', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function TiemposAeropuertoPage({ params }: PageProps<'/[lang]/ayuda/tiempos-aeropuerto'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const tx = await getPage('paginaAyudaTiempos', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="tiempos-hero">
          <div className="container tiempos-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{ui.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{tx.crumb}</span>
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
              {tx.tarjetas.map((t, i) => (
                <div
                  key={i}
                  className={`tiempos-card${t.destacado ? ' tiempos-card--featured' : ''}`}
                >
                  <div className="tiempos-card-top">
                    <div className="tiempos-card-type">{t.tipo}</div>
                    <p className="tiempos-card-subtitulo">{t.subtitulo}</p>
                  </div>

                  <div className="tiempos-card-llegada">
                    <span className="tiempos-llegada-big">{t.llegada}</span>
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
                {tx.recomendaciones.map((item, i) => (
                  <li key={i}>
                    {!(item.linkLabel && item.linkHref) ? item.texto : (
                      <>
                        {item.texto}{' '}
                        <Link href={lp(lang, item.linkHref)} style={{ color: 'inherit', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                          {item.linkLabel}
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
