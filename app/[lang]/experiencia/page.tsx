import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Pagos from '@/components/Pagos'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/experiencia'

const PATH = '/experiencia/'

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaExperiencia', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function ExperienciaPage({ params }: PageProps<'/[lang]/experiencia'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaExperiencia', lang, defaults)

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.heroTitlePre}<span className="accent">{t.heroTitleAccent}</span>{t.heroTitlePost}
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.heroIntro}
            </p>
          </div>
        </section>

        <section className="exp-servicios-section">
          <div className="container">
            <div className="exp-servicios-grid">
              {t.servicios.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="exp-servicio-card">
                  <div className="exp-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="exp-servicio-titulo">{s.titulo}</p>
                  <p className="exp-servicio-desc">{s.descripcion}</p>
                  <span className="exp-servicio-arr" aria-hidden="true">
                    {t.conocerMas} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Procesos eficientes ── */}
        <section className="exp-procesos-section">
          <div className="container">
            <div className="exp-procesos-header">
              <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.procesosEyebrow}</div>
              <h2 className="section-headline" style={{ color: 'var(--aerus-white)', margin: '12px 0 0' }}>
                {t.procesosTitle}<em>{t.procesosTitleEm}</em>
              </h2>
            </div>
            <div className="exp-procesos-pasos-grid">
              {t.pasos.map((p) => (
                <div key={p.num} className="exp-paso">
                  <span className="exp-paso-num">{p.num}</span>
                  <p className="exp-paso-titulo">{p.titulo}</p>
                  <p className="exp-paso-desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="exp-procesos-cta">
              <Link href={lp(lang, t.procesosCtaHref)} className="btn btn-on-dark">
                {t.procesosCta} <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Servicios adicionales ── */}
        <section className="exp-adicionales-section">
          <div className="container">
            <div className="exp-adicionales-header">
              <div className="eyebrow">{t.adicionalesEyebrow}</div>
              <h2 className="section-headline" style={{ margin: '12px 0 0' }}>{t.adicionalesTitle}</h2>
            </div>
            <div className="exp-adicionales-grid">
              {t.serviciosAdicionales.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="exp-adicional-card">
                  <div className="exp-adicional-icon">
                    <Icon name={s.icono} size={20} stroke={1.5} />
                  </div>
                  <p className="exp-adicional-titulo">{s.titulo}</p>
                  <p className="exp-adicional-desc">{s.desc}</p>
                  <span className="exp-adicional-arr">
                    {t.saberMas} <Icon name="arrow-right" size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Métodos de pago ── */}
        <Pagos lang={lang} />

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
