import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mro/cotizacion/'

const es = {
  metaTitle: 'Solicitar cotización MRO | Aerus',
  metaDescription:
    'Solicita una cotización de mantenimiento aeronáutico a Aerus MRO. Comparte los datos de tu aeronave y el servicio requerido — te respondemos en 24 horas.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  current: 'Solicitar cotización',
  titlePre: 'Solicitar ',
  titleAccent: 'cotización',
  intro:
    'Cuéntanos qué necesita tu aeronave. Nuestro equipo técnico evalúa el trabajo y te responde con una propuesta formal en menos de 24 horas hábiles.',
  pasosTitle: 'Cómo solicitar tu cotización',
  pasos: [
    {
      titulo: 'Identifica el servicio que necesitas',
      descripcion:
        'Revisa nuestra sección de servicios MRO: motores PT6A, hélices, accesorios, radios e instrumentos. Si no estás seguro, indícanos los síntomas o el mantenimiento programado próximo y nuestro equipo técnico te orientará.',
    },
    {
      titulo: 'Reúne los datos de tu aeronave',
      descripcion:
        'Para preparar la cotización necesitamos: fabricante, modelo y serie de la aeronave; matrícula (registro N- o XB-); total de horas de vuelo y horas desde el último overhaul del componente a revisar.',
    },
    {
      titulo: 'Contáctanos por teléfono o correo',
      descripcion:
        'Envíanos los datos al correo mro@aerus.mx o llámanos al número de MRO. Nuestro equipo técnico revisará la información, confirmará si el trabajo está dentro de nuestro alcance AMO y preparará la propuesta.',
    },
    {
      titulo: 'Recibe tu cotización en 24 horas',
      descripcion:
        'Te enviamos una propuesta formal con alcance de trabajo, tiempo estimado de entrega y costo. Si aceptas, coordinamos la recepción de la aeronave o el componente en nuestras instalaciones.',
    },
  ],
  datosSubtitle: 'Qué necesitamos saber',
  datosTitle: 'Datos de la aeronave',
  datos: [
    'Fabricante, modelo y serie de la aeronave (ej. Cessna 208B Grand Caravan EX)',
    'Registro de la aeronave (matrícula XB- o N-)',
    'Total de horas de vuelo (TTSN)',
    'Horas desde el último overhaul del componente (SMOH)',
    'Descripción del servicio requerido o síntomas observados',
    'Fecha tentativa de ingreso al taller',
  ],
  urgente:
    'Si tu aeronave requiere atención urgente o presentó una falla en vuelo, comunícate directamente por teléfono para atención prioritaria.',
  contactTag: 'Contacto MRO',
  contactTitle: 'Escríbenos o llámanos',
  horario: 'Lun–Vie · 08:00–18:00 hrs',
  serviciosTitle: 'Servicios MRO',
  servicios: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
}

const en: typeof es = {
  metaTitle: 'Request an MRO Quote | Aerus',
  metaDescription:
    'Request an aircraft maintenance quote from Aerus MRO. Share your aircraft details and the service you need — we will get back to you within 24 hours.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  current: 'Request a quote',
  titlePre: 'Request a ',
  titleAccent: 'quote',
  intro:
    'Tell us what your aircraft needs. Our technical team will evaluate the work and send you a formal proposal in less than 24 business hours.',
  pasosTitle: 'How to request your quote',
  pasos: [
    {
      titulo: 'Identify the service you need',
      descripcion:
        'Browse our MRO services: PT6A engines, propellers, accessories, radios and instruments. If you are not sure, describe the symptoms or your next scheduled maintenance and our technical team will advise you.',
    },
    {
      titulo: 'Gather your aircraft details',
      descripcion:
        'To prepare the quote we need: aircraft manufacturer, model and serial number; registration (N- or XB- tail number); total flight hours and hours since the last overhaul of the component to be serviced.',
    },
    {
      titulo: 'Contact us by phone or email',
      descripcion:
        'Send the details to mro@aerus.mx or call our MRO line. Our technical team will review the information, confirm the work falls within our AMO scope and prepare the proposal.',
    },
    {
      titulo: 'Receive your quote within 24 hours',
      descripcion:
        'We send you a formal proposal with the scope of work, estimated turnaround time and cost. Once you accept, we coordinate the induction of the aircraft or component at our facility.',
    },
  ],
  datosSubtitle: 'What we need to know',
  datosTitle: 'Aircraft details',
  datos: [
    'Aircraft manufacturer, model and serial number (e.g. Cessna 208B Grand Caravan EX)',
    'Aircraft registration (XB- or N- tail number)',
    'Total time since new (TTSN)',
    'Hours since the component’s last overhaul (SMOH)',
    'Description of the required service or observed symptoms',
    'Tentative shop induction date',
  ],
  urgente:
    'If your aircraft needs urgent attention (AOG) or experienced an in-flight failure, call us directly for priority support.',
  contactTag: 'MRO contact',
  contactTitle: 'Email or call us',
  horario: 'Mon–Fri · 8:00 am – 6:00 pm',
  serviciosTitle: 'MRO services',
  servicios: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/cotizacion'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function CotizacionMroPage({ params }: PageProps<'/[lang]/mro/cotizacion'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="mro-hero">
          <div className="container mro-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/mro/')}>MRO</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.current}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titlePre}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="mro-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Pasos */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitle}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.descripcion}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Datos necesarios */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.datosSubtitle}</p>
                      <h2 className="docs-h2">{t.datosTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.datos.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>{t.urgente}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar — contacto */}
              <aside className="docs-sidebar">
                <div className="mro-contact-card">
                  <p className="mro-contact-card-tag">{t.contactTag}</p>
                  <h3 className="mro-contact-card-title">{t.contactTitle}</h3>

                  <a href="mailto:mro@aerus.mx" className="mro-contact-row">
                    <Icon name="mail" size={16} stroke={1.5} />
                    <span>mro@aerus.mx</span>
                  </a>
                  <a href="tel:+528126823501" className="mro-contact-row">
                    <Icon name="phone" size={16} stroke={1.5} />
                    <span>+52 (812) 682·3501</span>
                  </a>

                  <p className="mro-contact-horario">{t.horario}</p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.serviciosTitle}</p>
                  <ul className="docs-related-list">
                    {t.servicios.map((o) => (
                      <li key={o.href}>
                        <Link href={lp(lang, o.href)} className="docs-related-link">
                          <span>{o.label}</span>
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
