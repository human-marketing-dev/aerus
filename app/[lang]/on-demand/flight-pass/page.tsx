import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/on-demand/flight-pass/'

const es = {
  metaTitle: 'Aerus Flight Pass | Aerus',
  metaDescription:
    'Bloque de vuelos prepagados para empresas. Precio fijo por vuelo, factura a razón social, prioridad en reservación y gestor de cuenta dedicado.',
  breadcrumbLabel: 'Ruta de navegación',
  inicio: 'Inicio',
  intro:
    'Vuelos prepagados para empresas cuyos empleados viajan en rutas Aerus de forma recurrente. Precio fijo, factura mensual y prioridad en cada reservación.',
  beneficiosSub: 'Ventajas del pase',
  beneficiosTitulo: 'Qué incluye el Flight Pass',
  beneficios: [
    {
      icono: 'cash',
      titulo: 'Precio fijo por vuelo',
      desc: 'Tu empresa conoce exactamente el costo de cada vuelo antes de que el empleado viaje. Sin sorpresas en la liquidación.',
    },
    {
      icono: 'calendar',
      titulo: 'Prioridad en reservación',
      desc: 'Los titulares de Flight Pass tienen acceso preferente en rutas con alta demanda y cambios de fecha sin cargo adicional.',
    },
    {
      icono: 'mail',
      titulo: 'Factura a la empresa',
      desc: 'Un solo proceso de facturación mensual para todos los viajes del período. Compatible con los procesos contables de tu área de finanzas.',
    },
    {
      icono: 'support',
      titulo: 'Gestor de cuenta dedicado',
      desc: 'Un contacto directo en Aerus que conoce las rutas y necesidades de tu empresa. Disponible para cambios, ajustes y consultas.',
    },
    {
      icono: 'shield',
      titulo: 'Control de viajes',
      desc: 'Reporte mensual de vuelos por empleado, ruta y fecha. Información lista para conciliación con viáticos y gastos de viaje.',
    },
    {
      icono: 'users',
      titulo: 'Multi-empleado',
      desc: 'El Flight Pass puede asignarse a uno o varios empleados dentro de la misma cuenta. Ideal para equipos con rutas fijas.',
    },
  ],
  pasosTitulo: 'Cómo funciona',
  pasos: [
    {
      titulo: 'Define tus rutas',
      desc: 'Cuéntanos qué rutas vuelan tus empleados con mayor frecuencia y cuántos viajes al mes manejan en promedio.',
    },
    {
      titulo: 'Recibe tu propuesta de paquete',
      desc: 'Diseñamos un paquete a la medida de tu volumen. El precio por vuelo disminuye según el tamaño del bloque contratado.',
    },
    {
      titulo: 'Activa el Flight Pass',
      desc: 'Firmamos el convenio corporativo y activamos los accesos. Tus empleados pueden reservar desde ese momento.',
    },
    {
      titulo: 'Vuelas, nosotros facturamos',
      desc: 'Al cierre del período recibes la factura consolidada con el detalle de todos los vuelos realizados.',
    },
  ],
  faqTitulo: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Cuántos vuelos incluye un Flight Pass?',
      a: 'El número de vuelos se define según las necesidades de la empresa. Ofrecemos paquetes desde 10 vuelos mensuales. Contáctanos para una propuesta personalizada.',
    },
    {
      q: '¿Los vuelos del Flight Pass tienen fecha de vencimiento?',
      a: 'Los bloques de vuelo tienen una vigencia definida en el convenio. Los vuelos no utilizados dentro del período pueden prorratearse según las condiciones del acuerdo.',
    },
    {
      q: '¿Puede un empleado usar el Flight Pass para rutas fuera de la red Aerus?',
      a: 'El Flight Pass aplica exclusivamente a las rutas operadas por Aerus. Para conexiones adicionales a través de Viva, consulta nuestra sección Alianza con Viva.',
    },
    {
      q: '¿Se puede transferir un vuelo a otro empleado?',
      a: 'Sí, con un mínimo de 24 horas de anticipación. El gestor de cuenta puede hacer el cambio de nombre sin cargo adicional.',
    },
  ],
  ctaTitulo: '¿Tu empresa vuela Aerus?',
  ctaDesc: 'Cuéntanos cuántos vuelos manejan al mes y te preparamos una propuesta de Flight Pass.',
  ctaBtn: 'Solicitar información',
  relacionadosTitulo: 'También puede interesarte',
  relacionados: [
    { label: 'Aerus Charter',         href: '/on-demand/charter/' },
    { label: 'Cuenta empresarial',    href: '/on-demand/empresas/' },
    { label: 'Red de rutas',          href: '/rutas/' },
    { label: 'Alianza con Viva',      href: '/rutas/alianza-viva/' },
  ],
  contactoTag: 'Contacto corporativo',
  contactoTitulo: 'Equipo Empresas',
  horario: 'Lun–Vie · 08:00–18:00 h',
}

const en: typeof es = {
  metaTitle: 'Aerus Flight Pass | Aerus',
  metaDescription:
    'A block of prepaid flights for businesses. Fixed price per flight, invoices issued to your legal entity, priority booking and a dedicated account manager.',
  breadcrumbLabel: 'Breadcrumb',
  inicio: 'Home',
  intro:
    'Prepaid flights for companies whose employees travel Aerus routes on a regular basis. Fixed pricing, monthly invoicing and priority on every booking.',
  beneficiosSub: 'Pass benefits',
  beneficiosTitulo: 'What the Flight Pass includes',
  beneficios: [
    {
      icono: 'cash',
      titulo: 'Fixed price per flight',
      desc: 'Your company knows the exact cost of every flight before the employee travels. No surprises when it’s time to settle expenses.',
    },
    {
      icono: 'calendar',
      titulo: 'Priority booking',
      desc: 'Flight Pass holders get preferred access on high-demand routes, plus date changes at no extra charge.',
    },
    {
      icono: 'mail',
      titulo: 'Invoiced to your company',
      desc: 'A single monthly invoicing process for all trips in the period, compatible with your finance team’s accounting workflows.',
    },
    {
      icono: 'support',
      titulo: 'Dedicated account manager',
      desc: 'A direct contact at Aerus who knows your company’s routes and needs. Available for changes, adjustments and questions.',
    },
    {
      icono: 'shield',
      titulo: 'Travel oversight',
      desc: 'Monthly flight report by employee, route and date — ready to reconcile against per diems and travel expenses.',
    },
    {
      icono: 'users',
      titulo: 'Multiple employees',
      desc: 'A Flight Pass can be assigned to one or more employees under the same account. Ideal for teams that fly the same routes.',
    },
  ],
  pasosTitulo: 'How it works',
  pasos: [
    {
      titulo: 'Define your routes',
      desc: 'Tell us which routes your employees fly most often and how many trips they take per month on average.',
    },
    {
      titulo: 'Get your package proposal',
      desc: 'We design a package tailored to your volume. The price per flight goes down as the size of the block increases.',
    },
    {
      titulo: 'Activate your Flight Pass',
      desc: 'We sign the corporate agreement and activate access. Your employees can start booking right away.',
    },
    {
      titulo: 'You fly, we invoice',
      desc: 'At the end of each period, you receive a consolidated invoice detailing every flight taken.',
    },
  ],
  faqTitulo: 'Frequently asked questions',
  faq: [
    {
      q: 'How many flights does a Flight Pass include?',
      a: 'The number of flights is based on your company’s needs. We offer packages starting at 10 flights per month. Contact us for a customized proposal.',
    },
    {
      q: 'Do Flight Pass flights expire?',
      a: 'Flight blocks are valid for the term set out in the agreement. Flights not used within the period may be prorated according to the terms of the agreement.',
    },
    {
      q: 'Can an employee use the Flight Pass on routes outside the Aerus network?',
      a: 'The Flight Pass applies only to routes operated by Aerus. For additional connections through Viva, see our Viva alliance section.',
    },
    {
      q: 'Can a flight be transferred to another employee?',
      a: 'Yes, with at least 24 hours’ notice. Your account manager can make the name change at no extra charge.',
    },
  ],
  ctaTitulo: 'Does your company fly Aerus?',
  ctaDesc: 'Tell us how many flights your team takes each month and we’ll prepare a Flight Pass proposal for you.',
  ctaBtn: 'Request information',
  relacionadosTitulo: 'You may also be interested in',
  relacionados: [
    { label: 'Aerus Charter',         href: '/on-demand/charter/' },
    { label: 'Business account',      href: '/on-demand/empresas/' },
    { label: 'Route network',         href: '/rutas/' },
    { label: 'Viva alliance',         href: '/rutas/alianza-viva/' },
  ],
  contactoTag: 'Corporate contact',
  contactoTitulo: 'Business Team',
  horario: 'Mon–Fri · 8:00 a.m.–6:00 p.m.',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/flight-pass'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function FlightPassPage({ params }: PageProps<'/[lang]/on-demand/flight-pass'>) {
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
              <span aria-current="page">Aerus Flight Pass</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>On Demand</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Aerus <span className="accent">Flight Pass</span>
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

                {/* Beneficios */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="ticket" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.beneficiosSub}</p>
                      <h2 className="docs-h2">{t.beneficiosTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {t.beneficios.map((b) => (
                      <div key={b.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={b.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{b.titulo}</p>
                        <p className="corp-uso-desc">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cómo funciona */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitulo}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((p, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{p.titulo}</p>
                          <p className="fact-step-desc">{p.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 20 }}>{t.faqTitulo}</h2>
                  <dl className="destino-faq">
                    {t.faq.map((f) => (
                      <div key={f.q} className="destino-faq-item">
                        <dt className="destino-faq-q">{f.q}</dt>
                        <dd className="destino-faq-a">{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.ctaDesc}
                  </p>
                  <Link
                    href={lp(lang, '/on-demand/flight-pass/contacto/')}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaBtn}
                  </Link>
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

                <div className="mro-contact-card" style={{ marginTop: 16 }}>
                  <p className="mro-contact-card-tag">{t.contactoTag}</p>
                  <p className="mro-contact-card-title">{t.contactoTitulo}</p>
                  <div className="mro-contact-row">
                    <Icon name="mail" size={14} stroke={1.5} />
                    <a href="mailto:corporativo@aerus.mx">corporativo@aerus.mx</a>
                  </div>
                  <p className="mro-contact-horario">{t.horario}</p>
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
