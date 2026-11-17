import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import RichText from '@/components/RichText'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { PortableTextComponents } from 'next-sanity'
import { notFound } from 'next/navigation'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults, { type CookieRow, type CookiesContent } from '@/content/pages/cookies'
import { AvisoTraduccion, LEGAL_RT, UI } from '../legal-ui'

const PATH = '/legal/cookies/'

// Texto debajo de una tabla de cookies: la lista lleva un margen superior para separarla de la tabla
const RT_DESPUES_TABLA: PortableTextComponents = {
  ...LEGAL_RT,
  list: {
    bullet: ({ children }) => <ul style={{ marginTop: 16 }}>{children}</ul>,
    number: ({ children }) => <ol style={{ marginTop: 16 }}>{children}</ol>,
  },
}

function CookieTable({ rows, h }: { rows: CookieRow[]; h: CookiesContent['tableHeader'] }) {
  return (
    <div className="legal-cookie-table">
      <div className="legal-cookie-header">
        <span>{h.cookie}</span>
        <span>{h.tipo}</span>
        <span>{h.duracion}</span>
        <span>{h.proposito}</span>
      </div>
      {rows.map(row => (
        <div key={row.nombre} className="legal-cookie-row">
          <span className="legal-cookie-name">{row.nombre}</span>
          <span>{row.tipo}</span>
          <span>{row.duracion}</span>
          <span>{row.proposito}</span>
        </div>
      ))}
    </div>
  )
}

export async function generateMetadata({ params }: PageProps<'/[lang]/legal/cookies'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaCookies', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function CookiesPage({ params }: PageProps<'/[lang]/legal/cookies'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaCookies', lang, defaults)
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
                    {s.tablaTitulo?.trim() && (
                      <p style={{ marginTop: 24, marginBottom: 12, fontWeight: 500 }}>{s.tablaTitulo}</p>
                    )}
                    {!!s.cookies?.length && <CookieTable rows={s.cookies} h={t.tableHeader} />}
                    <RichText value={s.cuerpoFinal} lang={lang} components={RT_DESPUES_TABLA} />
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
