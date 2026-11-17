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
import defaults from '@/content/pages/on-demand'

const PATH = '/on-demand/'

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaOnDemand', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function OnDemandPage({ params }: PageProps<'/[lang]/on-demand'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaOnDemand', lang, defaults)

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* Hero */}
        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="corp-servicios-section">
          <div className="container">
            <div className="corp-servicios-grid">
              {t.servicios.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="corp-servicio-card">
                  <div className="corp-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="corp-servicio-titulo">{s.titulo}</p>
                  <p className="corp-servicio-desc">{s.desc}</p>
                  <span className="corp-servicio-arr">
                    {s.cta} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas strip */}
        <section className="corp-ventajas-section">
          <div className="container corp-ventajas-inner">
            <p className="corp-ventajas-titulo">{t.ventajasTitulo}</p>
            <div className="corp-ventajas-grid">
              {t.ventajas.map((v) => (
                <div key={v.texto} className="corp-ventaja-item">
                  <Icon name={v.icono} size={16} stroke={1.5} className="corp-ventaja-icon" />
                  <span className="corp-ventaja-texto">{v.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="corp-cta-section">
          <div className="container corp-cta-inner">
            <div>
              <p className="corp-cta-eyebrow">{t.ctaEyebrow}</p>
              <p className="corp-cta-titulo">{t.ctaTitulo}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href={lp(lang, t.ctaCharterHref)} className="btn btn-primary">
                {t.ctaCharter}
              </Link>
              <Link href={lp(lang, t.ctaContactoHref)} className="btn btn-on-dark">
                {t.ctaContacto}
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
