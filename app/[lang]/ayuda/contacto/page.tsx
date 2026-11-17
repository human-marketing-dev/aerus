import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { getConfig } from '@/lib/config'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/ayuda-contacto'

const PATH = '/ayuda/contacto/'


// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/contacto'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaContacto', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function ContactoPage({ params }: PageProps<'/[lang]/ayuda/contacto'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyudaContacto', lang, defaults)
  // Redes oficiales: Sanity → Configuración general → Redes sociales (las mismas del footer)
  const REDES = (await getConfig(lang)).redes
  const ui = UI[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="contact-hero">
          <div className="container contact-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{ui.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              {t.eyebrow}
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        {/* Channel cards */}
        <section className="section-pad contact-channels-section">
          <div className="container">
            <div className="contact-channels-grid">
              {t.canales.map((canal) => {
                // Los enlaces web (WhatsApp) se abren en otra pestaña; tel: y mailto: no
                const externo = /^https?:\/\//.test(canal.href)
                return (
                  <div
                    key={canal.href}
                    className={`contact-card${canal.destacado ? ' contact-card--destacado' : ''}`}
                  >
                    <div className="contact-card-icon">
                      <Icon name={canal.icono} size={22} stroke={1.5} />
                    </div>
                    <p className="contact-card-label">{canal.label}</p>
                    <p className="contact-card-valor">{canal.valor}</p>
                    <p className="contact-card-detalle">{canal.detalle}</p>
                    <a
                      href={canal.href}
                      className={`btn ${canal.destacado ? 'btn-primary' : 'btn-outline'} contact-card-cta`}
                      {...(externo
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {canal.cta}
                      {externo && (
                        <span aria-hidden="true" style={{ fontSize: 14 }}> ↗</span>
                      )}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Social + Hours */}
        <section className="contact-lower-section">
          <div className="container">
            <div className="contact-lower-grid">

              {/* Social media */}
              <div className="contact-social-card">
                <div className="eyebrow contact-card-eyebrow">{t.socialEyebrow}</div>
                <h2 className="contact-lower-title">{t.socialTitle}</h2>
                <p className="contact-lower-desc">
                  {t.socialDesc}
                </p>
                <div className="contact-social-links">
                  {REDES.map((red) => (
                    <a
                      key={red.nombre}
                      href={red.href}
                      className="contact-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={red.nombre}
                    >
                      <Icon name={red.icono} size={18} stroke={1.5} />
                      <span>{red.nombre}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="contact-hours-card">
                <div className="eyebrow contact-card-eyebrow">{t.hoursEyebrow}</div>
                <h2 className="contact-lower-title">{t.hoursTitle}</h2>
                <table className="contact-hours-table">
                  <tbody>
                    {t.horarios.map((h) => (
                      <tr key={h.dias} className="contact-hours-row">
                        <td className="contact-hours-dias">{h.dias}</td>
                        <td className="contact-hours-horas">{h.horas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="docs-callout" style={{ marginTop: 24 }}>
                  <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                  <p>
                    {t.specialNote}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
