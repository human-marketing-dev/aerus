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
import defaults from '@/content/pages/mro-cotizacion'

const PATH = '/mro/cotizacion/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', mro: 'MRO' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', mro: 'MRO' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/cotizacion'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaMroCotizacion', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function CotizacionMroPage({ params }: PageProps<'/[lang]/mro/cotizacion'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaMroCotizacion', lang, defaults)
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
                {/* Pasos */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitle}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.descripcion}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Datos necesarios */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.datosSubtitle}</p>
                      <h2 className="docs-h2">{t.datosTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.datos.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>{t.urgente}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar — contacto */}
              <aside className="docs-sidebar">
                <div className="mro-contact-card">
                  <p className="mro-contact-card-tag">{t.contactTag}</p>
                  <h3 className="mro-contact-card-title">{t.contactTitle}</h3>

                  <a href={`mailto:${t.email}`} className="mro-contact-row">
                    <Icon name="mail" size={16} stroke={1.5} />
                    <span>{t.email}</span>
                  </a>
                  <a href={`tel:${t.telefonoMarcar}`} className="mro-contact-row">
                    <Icon name="phone" size={16} stroke={1.5} />
                    <span>{t.telefono}</span>
                  </a>

                  <p className="mro-contact-horario">{t.horario}</p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.serviciosTitle}</p>
                  <ul className="docs-related-list">
                    {t.servicios.map((o) => (
                      <li key={o.href}>
                        <Link href={lp(lang, o.href)} className="docs-related-link">
                          <span>{o.label}</span>
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
