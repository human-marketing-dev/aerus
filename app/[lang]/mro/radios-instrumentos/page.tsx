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
import defaults from '@/content/pages/mro-radios-instrumentos'

const PATH = '/mro/radios-instrumentos/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', mro: 'MRO' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', mro: 'MRO' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/radios-instrumentos'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaMroRadios', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function RadiosInstrumentosPage({ params }: PageProps<'/[lang]/mro/radios-instrumentos'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaMroRadios', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="mro-hero">
          <div className="container mro-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/mro/')}>{ui.mro}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titlePre}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="mro-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="wifi" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.serviciosSubtitle}</p>
                      <h2 className="docs-h2">{t.serviciosTitle}</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {t.servicios.map((s) => (
                      <div key={s.titulo} className="destino-faq-item">
                        <dt className="destino-faq-q">{s.titulo}</dt>
                        <dd className="destino-faq-a">{s.descripcion}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.marcasSubtitle}</p>
                      <h2 className="docs-h2">{t.marcasTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.marcas.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 16 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>{t.marcasCallout}</p>
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.otrosTitle}</p>
                  <ul className="docs-related-list">
                    {t.otros.map((o) => (
                      <li key={o.href}>
                        <Link href={lp(lang, o.href)} className="docs-related-link">
                          <span>{o.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <Link href={lp(lang, t.ctaHref)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
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
