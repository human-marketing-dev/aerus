import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/experiencia-flota'

const PATH = '/experiencia/flota/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', section: 'Experiencia' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', section: 'Experience' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/flota'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaFlota', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function FlotaPage({ params }: PageProps<'/[lang]/experiencia/flota'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaFlota', lang, defaults)
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

        <div className="flota-img-banner">
          <Image
            src={t.imagen.src}
            alt={t.imagen.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: t.imagen.position ?? 'center' }}
            preload
          />
        </div>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Especificaciones */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.specsSubtitulo}</p>
                      <h2 className="docs-h2">{t.specsTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-specs-table">
                    {t.specs.map((s) => (
                      <div key={s.etiqueta} className="exp-spec-row">
                        <span className="exp-spec-etiqueta">{s.etiqueta}</span>
                        <span className="exp-spec-valor">{s.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ventajas */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>{t.ventajasTitle}</h2>
                  <div className="exp-ventajas-grid">
                    {t.ventajas.map((v) => (
                      <div key={v.titulo} className="exp-ventaja-card">
                        <div className="exp-ventaja-icon">
                          <Icon name={v.icono} size={18} stroke={1.5} />
                        </div>
                        <div>
                          <p className="exp-ventaja-titulo">{v.titulo}</p>
                          <p className="exp-ventaja-desc">{v.descripcion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.sidebarTitle}</p>
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
