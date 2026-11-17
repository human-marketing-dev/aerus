import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { notFound } from 'next/navigation'
import { isLang, lp } from '@/lib/i18n'
import { getRoutes } from '@/lib/red'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/prensa'

const PATH = '/nosotros/prensa/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', nosotros: 'Nosotros' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', nosotros: 'About us' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/nosotros/prensa'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaPrensa', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function PrensaPage({ params }: PageProps<'/[lang]/nosotros/prensa'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaPrensa', lang, defaults)
  const ui = UI[lang]
  // Rutas activas: se toman de la red de rutas (Sanity); {rutas} en el fact sheet = cuántas son
  const RUTAS = (await getRoutes(lang)).map(([a, b]) => `${a} – ${b}`)
  const factSheet = t.factSheet.map(f => ({ ...f, valor: f.valor.replace('{rutas}', String(RUTAS.length)) }))
  const rutasHref = lp(lang, '/rutas/')

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* Hero */}
        <section className="prensa-hero">
          <div className="container prensa-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/nosotros/')}>{ui.nosotros}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="prensa-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Fact sheet */}
                <div className="docs-section" style={{ marginBottom: 48 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.factSub}</p>
                      <h2 className="docs-h2">{t.factTitle}</h2>
                    </div>
                  </div>
                  <table className="prensa-fact-table">
                    <tbody>
                      {factSheet.map((f) => (
                        <tr key={f.label} className="prensa-fact-row">
                          <td className="prensa-fact-label">{f.label}</td>
                          <td className="prensa-fact-valor">{f.valor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Rutas activas */}
                <div className="docs-section" style={{ marginBottom: 48 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="pin" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.rutasSub}</p>
                      <h2 className="docs-h2">{t.rutasTitle}</h2>
                    </div>
                  </div>
                  <ul className="prensa-rutas-list">
                    {RUTAS.map((r) => (
                      <li key={r} className="prensa-ruta-item">
                        <span className="prensa-ruta-dot" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="prensa-rutas-nota">
                    {t.rutasNota}{' '}
                    <Link href={rutasHref}>aerus.mx{rutasHref.replace(/\/$/, '')}</Link>.
                  </p>
                </div>

                {/* Kit de prensa */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="luggage" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.kitSub}</p>
                      <h2 className="docs-h2">{t.kitTitle}</h2>
                    </div>
                  </div>
                  <div className="prensa-kit-grid">
                    {t.kitItems.map((k) => (
                      <div key={k.titulo} className="prensa-kit-card">
                        <div className="prensa-kit-icon">
                          <Icon name={k.icono} size={18} stroke={1.5} />
                        </div>
                        <div className="prensa-kit-body">
                          <p className="prensa-kit-titulo">{k.titulo}</p>
                          <p className="prensa-kit-desc">{k.desc}</p>
                          <span className="prensa-kit-tag">{k.etiqueta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    {t.kitCallout}{' '}
                    <a href={`mailto:${t.contactEmail}`}>{t.contactEmail}</a>.
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="prensa-contacto-card">
                  <p className="prensa-contacto-tag">{t.contactTag}</p>
                  <p className="prensa-contacto-titulo">{t.contactTitle}</p>
                  <div className="prensa-contacto-rows">
                    <a href={`mailto:${t.contactEmail}`} className="prensa-contacto-row">
                      <Icon name="mail" size={15} stroke={1.5} />
                      <span>{t.contactEmail}</span>
                    </a>
                    <a href={`tel:${t.contactPhone.replace(/[^+\d]/g, '')}`} className="prensa-contacto-row">
                      <Icon name="phone" size={15} stroke={1.5} />
                      <span>{t.contactPhone}</span>
                    </a>
                  </div>
                  <p className="prensa-contacto-horario">
                    {t.contactHours}
                  </p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.moreTitle}</p>
                  <ul className="docs-related-list">
                    {t.moreLinks.map((r) => (
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
