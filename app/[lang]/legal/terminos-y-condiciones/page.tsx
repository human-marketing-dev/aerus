import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import RichText from '@/components/RichText'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/terminos-y-condiciones'
import { AvisoTraduccion, LEGAL_RT, UI } from '../legal-ui'

const PATH = '/legal/terminos-y-condiciones/'

export async function generateMetadata({ params }: PageProps<'/[lang]/legal/terminos-y-condiciones'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaTerminos', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function TerminosPage({ params }: PageProps<'/[lang]/legal/terminos-y-condiciones'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaTerminos', lang, defaults)
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="legal-hero">
          <div className="container">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.title}</span>
            </nav>
            <h1 className="legal-titulo">{t.title}</h1>
            <p className="legal-meta">
              {t.meta}
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">

              <article className="legal-content">
                <AvisoTraduccion texto={t.avisoTraduccion} />
                {t.secciones.map(s => (
                  <section key={s.ancla} id={s.ancla} className="legal-section">
                    <h2>{s.titulo}</h2>
                    <RichText value={s.cuerpo} lang={lang} components={LEGAL_RT} />
                  </section>
                ))}
              </article>

              <aside className="legal-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.tocTitle}</p>
                  <ul className="legal-toc">
                    {t.secciones.map(s => (
                      <li key={s.ancla}>
                        <a href={`#${s.ancla}`} className="legal-toc-link">{s.indice}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.otherTitle}</p>
                  <ul className="docs-related-list">
                    {t.otherDocs.map(r => (
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
