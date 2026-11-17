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
import defaults from '@/content/pages/mro'

const PATH = '/mro/'

export async function generateMetadata({ params }: PageProps<'/[lang]/mro'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaMro', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function MroPage({ params }: PageProps<'/[lang]/mro'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaMro', lang, defaults)

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="mro-hero">
          <div className="container mro-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titlePre}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="mro-servicios-section">
          <div className="container">
            <div className="mro-servicios-grid">
              {t.servicios.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="mro-servicio-card">
                  <div className="mro-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="mro-servicio-titulo">{s.titulo}</p>
                  <p className="mro-servicio-desc">{s.descripcion}</p>
                  <span className="mro-servicio-arr" aria-hidden="true">
                    {t.verMas} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mro-creds-strip">
          <div className="container mro-creds-inner">
            <span className="mro-creds-label">{t.credsLabel}</span>
            <div className="mro-creds-list">
              {t.creds.map((c) => (
                <span key={c} className="mro-cred-item">{`✦ ${c}`}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
