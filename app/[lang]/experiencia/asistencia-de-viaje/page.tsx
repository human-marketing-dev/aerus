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
import defaults from '@/content/pages/experiencia-asistencia-viaje'

const PATH = '/experiencia/asistencia-de-viaje/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', section: 'Experiencia' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', section: 'Experience' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/asistencia-de-viaje'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAsistenciaViaje', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function AsistenciaDeViajePage({ params }: PageProps<'/[lang]/experiencia/asistencia-de-viaje'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAsistenciaViaje', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/experiencia/')}>{ui.section}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
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
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="support" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.serviciosSubtitulo}</p>
                      <h2 className="docs-h2">{t.serviciosTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-asistencia-grid">
                    {t.servicios.map((s) => (
                      <div key={s.titulo} className="exp-asistencia-card">
                        <div className="exp-asistencia-icon">
                          <Icon name={s.icono} size={18} stroke={1.5} />
                        </div>
                        <div>
                          <p className="exp-asistencia-titulo">{s.titulo}</p>
                          <p className="exp-asistencia-desc">{s.descripcion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="docs-callout">
                  <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                  <p>
                    {t.callout}{' '}
                    <Link href={lp(lang, t.calloutHref)} style={{ color: 'inherit', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                      {t.calloutLink}
                    </Link>
                  </p>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.canalesTitle}</p>
                  <div className="exp-canales-list">
                    {t.canales.map((c) => (
                      <a key={c.label} href={lp(lang, c.href)} className="exp-canal-row">
                        <Icon name={c.icono} size={15} stroke={1.5} />
                        <div>
                          <span className="exp-canal-label">{c.label}</span>
                          <span className="exp-canal-detalle">{c.detalle}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitle}</p>
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
