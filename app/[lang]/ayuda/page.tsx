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
import defaults from '@/content/pages/ayuda'

const PATH = '/ayuda/'

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyuda', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function AyudaPage({ params }: PageProps<'/[lang]/ayuda'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyuda', lang, defaults)

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="ayuda-hero">
          <div className="container ayuda-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              {t.eyebrow}
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<br />
              <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro ayuda-hero-intro">
              {t.intro}
            </p>
            <div className="ayuda-search-bar" role="search">
              <Icon name="search" size={16} className="ayuda-search-icon" />
              <span className="ayuda-search-placeholder">{t.searchPlaceholder}</span>
              <span className="ayuda-search-badge">{t.searchBadge}</span>
            </div>
          </div>
        </section>

        <section className="section-pad ayuda-cats-section">
          <div className="container">
            <div className="ayuda-cats-header">
              <div className="eyebrow">{t.catsEyebrow}</div>
              <h2 className="section-headline" style={{ fontSize: 36 }}>
                {t.catsTitle}
              </h2>
            </div>
            <div className="ayuda-cat-grid">
              {t.categorias.map(cat => (
                <Link
                  key={cat.href}
                  href={lp(lang, cat.href)}
                  className="ayuda-cat-card"
                >
                  <div className="ayuda-cat-icon">
                    <Icon name={cat.icono} size={22} stroke={1.5} />
                  </div>
                  <h3 className="ayuda-cat-title">{cat.titulo}</h3>
                  <p className="ayuda-cat-desc">{cat.descripcion}</p>
                  <span className="ayuda-cat-arrow" aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ayuda-contact-strip">
          <div className="container ayuda-contact-inner">
            <div className="ayuda-contact-copy">
              <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.contactEyebrow}</div>
              <p className="ayuda-contact-text">
                {t.contactText}
              </p>
            </div>
            <div className="ayuda-contact-actions">
              <Link href={lp(lang, t.contactHref)} className="btn btn-primary">
                {t.contactCta}
              </Link>
              <Link href={lp(lang, t.faqHref)} className="btn btn-on-dark">
                {t.faqCta}
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
