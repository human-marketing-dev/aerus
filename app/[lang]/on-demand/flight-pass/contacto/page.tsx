import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/on-demand/flight-pass/contacto/'

const es = {
  metaTitle: 'Contacto Flight Pass | Aerus',
  metaDescription:
    'Solicita información sobre el Aerus Flight Pass para tu empresa. Nuestro equipo corporativo te prepara una propuesta personalizada.',
  breadcrumbLabel: 'Ruta de navegación',
  inicio: 'Inicio',
  breadcrumbActual: 'Contacto',
  titleA: 'Solicitar ',
  titleAccent: 'información',
  intro:
    'Cuéntanos sobre tu empresa y el volumen de viajes de tu equipo. Un ejecutivo de cuentas Aerus te prepara una propuesta de Flight Pass en 24 horas.',
  datosSub: 'Qué incluir en tu mensaje',
  datosTitulo: 'Información para la propuesta',
  datosIntro: 'Con estos datos podemos diseñar un Flight Pass ajustado al perfil de viaje real de tu empresa:',
  datos: [
    'Nombre de la empresa y giro',
    'Rutas que utilizan tus empleados con mayor frecuencia',
    'Número aproximado de vuelos al mes',
    'Número de empleados que viajarían bajo el Flight Pass',
    'Nombre y cargo del responsable de viajes corporativos',
  ],
  siguienteSub: 'El siguiente paso',
  siguienteTitulo: 'Qué pasa después',
  siguienteA: 'Al recibir tu mensaje, un ejecutivo de cuentas Aerus te contactará dentro de',
  siguienteStrong: ' 24 horas hábiles',
  siguienteB:
    ' para agendar una llamada breve, entender tu necesidad con más detalle y enviarte una propuesta de paquete personalizada.',
  ctaTitulo: 'Contáctanos',
  ctaDesc: 'Escríbenos con los datos de tu empresa y te respondemos en 24 horas.',
  mailSubject: 'Información Flight Pass',
  horario: 'Lunes a viernes · 08:00–18:00 h CST',
  relacionadosTitulo: 'Antes de contactar',
  relacionados: [
    { label: 'Qué incluye el Flight Pass', href: '/on-demand/flight-pass/' },
    { label: 'Cuenta empresarial',         href: '/on-demand/empresas/' },
    { label: 'Red de rutas',               href: '/rutas/' },
  ],
}

const en: typeof es = {
  metaTitle: 'Flight Pass Contact | Aerus',
  metaDescription:
    'Request information about the Aerus Flight Pass for your company. Our corporate team will prepare a customized proposal for you.',
  breadcrumbLabel: 'Breadcrumb',
  inicio: 'Home',
  breadcrumbActual: 'Contact',
  titleA: 'Request ',
  titleAccent: 'information',
  intro:
    'Tell us about your company and your team’s travel volume. An Aerus account executive will prepare a Flight Pass proposal for you within 24 hours.',
  datosSub: 'What to include in your message',
  datosTitulo: 'Information for your proposal',
  datosIntro: 'With these details, we can design a Flight Pass that fits your company’s actual travel profile:',
  datos: [
    'Company name and industry',
    'Routes your employees fly most often',
    'Approximate number of flights per month',
    'Number of employees who would travel under the Flight Pass',
    'Name and title of the person responsible for corporate travel',
  ],
  siguienteSub: 'Next step',
  siguienteTitulo: 'What happens next',
  siguienteA: 'Once we receive your message, an Aerus account executive will contact you within',
  siguienteStrong: ' 24 business hours',
  siguienteB:
    ' to schedule a short call, learn more about your needs and send you a customized package proposal.',
  ctaTitulo: 'Contact us',
  ctaDesc: 'Email us your company details and we’ll get back to you within 24 hours.',
  mailSubject: 'Flight Pass information',
  horario: 'Monday to Friday · 8:00 a.m.–6:00 p.m. CST',
  relacionadosTitulo: 'Before you reach out',
  relacionados: [
    { label: 'What the Flight Pass includes', href: '/on-demand/flight-pass/' },
    { label: 'Business account',              href: '/on-demand/empresas/' },
    { label: 'Route network',                 href: '/rutas/' },
  ],
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/flight-pass/contacto'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function FlightPassContactoPage({ params }: PageProps<'/[lang]/on-demand/flight-pass/contacto'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.inicio}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/on-demand/')}>On Demand</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/on-demand/flight-pass/')}>Aerus Flight Pass</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.breadcrumbActual}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus Flight Pass</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                <div className="docs-section" style={{ marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="mail" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.datosSub}</p>
                      <h2 className="docs-h2">{t.datosTitulo}</h2>
                    </div>
                  </div>
                  <p style={{ font: '400 15px/1.7 var(--font-body)', color: 'var(--forest-600)', marginBottom: 20 }}>
                    {t.datosIntro}
                  </p>
                  <ul className="docs-list">
                    {t.datos.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="support" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.siguienteSub}</p>
                      <h2 className="docs-h2">{t.siguienteTitulo}</h2>
                    </div>
                  </div>
                  <div className="docs-callout">
                    {t.siguienteA}<strong>{t.siguienteStrong}</strong>{t.siguienteB}
                  </div>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <a
                    href={`mailto:corporativo@aerus.mx?subject=${t.mailSubject}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 10 }}
                  >
                    <Icon name="mail" size={15} stroke={1.5} />
                    corporativo@aerus.mx
                  </a>
                  <a
                    href="tel:+528126823501"
                    className="btn btn-on-dark"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    <Icon name="phone" size={15} stroke={1.5} />
                    +52 812 682 3501
                  </a>
                  <p style={{ font: '400 12px/1.4 var(--font-body)', color: 'rgba(255,255,255,0.30)', marginTop: 14 }}>
                    {t.horario}
                  </p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitulo}</p>
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
