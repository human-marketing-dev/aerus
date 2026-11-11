import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mro/capacidades/'

const es = {
  metaTitle: 'Capacidades y certificaciones | Aerus MRO',
  metaDescription:
    'Aerus MRO cuenta con aprobación DGAC para el mantenimiento de aeronaves turbohélice. Conoce nuestras capacidades, tipos de aeronave admitidos y el alcance de nuestro taller.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  current: 'Capacidades y certificaciones',
  titlePre: 'Capacidades y ',
  titleAccent: 'certificaciones',
  intro:
    'Taller aprobado DGAC. Conoce qué aeronaves atendemos, qué trabajos realizamos y bajo qué aprobaciones operamos.',
  certSubtitle: 'Aprobaciones vigentes',
  certTitle: 'Certificaciones',
  certificaciones: [
    {
      nombre: 'AMO DGAC México',
      descripcion: 'Organización de Mantenimiento Aprobada por la Dirección General de Aeronáutica Civil de México.',
    },
    {
      nombre: 'Pratt & Whitney Canada Authorized Service Center',
      descripcion: 'Centro de servicio autorizado para motores de la familia PT6A de Pratt & Whitney Canada.',
    },
    {
      nombre: 'Hartzell Propeller Certified Service Center',
      descripcion: 'Centro certificado para inspección, overhaul y reparación de hélices Hartzell.',
    },
    {
      nombre: 'McCauley Authorized Service',
      descripcion: 'Servicio autorizado para hélices McCauley serie 3-blade usadas en la familia Cessna 208.',
    },
  ],
  aeronavesSubtitle: 'Tipos aprobados',
  aeronavesTitle: 'Aeronaves que atendemos',
  aeronaves: [
    'Cessna 208 Caravan / Grand Caravan EX',
    'Cessna 208B Grand Caravan',
    'Cessna 182 / 172 (inspecciones y accesorios)',
    'Beechcraft King Air (accesorios y sistemas)',
    'Piper PA-31 Navajo (radios e instrumentos)',
    'Planeadores Cessna (serie 182 y derivados)',
  ],
  aeronavesCallout:
    '¿Tu aeronave no está en la lista? Contáctanos — podemos evaluar la solicitud de mantenimiento conforme a nuestra aprobación AMO.',
  alcanceSubtitle: 'Qué hacemos',
  alcanceTitle: 'Alcance de trabajo',
  alcance: [
    { titulo: 'Mantenimiento de línea', descripcion: 'Revisiones periódicas, cambio de componentes con vida limitada y mantenimiento programado en escala de horas de vuelo.' },
    { titulo: 'Mantenimiento de base (MX Base)', descripcion: 'Inspecciones mayores: 100 horas, 200 horas, anuales y bienales. Apertura y cierre de aeronave conforme al AMM del fabricante.' },
    { titulo: 'Overhaul de motores y hélices', descripcion: 'Desarmado, inspección, reparación y rearmado conforme a manuales de overhaul Pratt & Whitney Canada y Hartzell/McCauley.' },
    { titulo: 'Modificaciones y STC', descripcion: 'Instalación de modificaciones aprobadas por STC (Supplemental Type Certificate). Consultar disponibilidad por tipo de aeronave.' },
    { titulo: 'Aviónica y sistemas', descripcion: 'Instalación, calibración y mantenimiento de sistemas de navegación, radios y paneles de instrumentos.' },
  ],
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas mantenimiento?',
  ctaDesc: 'Cuéntanos de tu aeronave y te mandamos una propuesta en 24 horas.',
  ctaButton: 'Solicitar cotización',
}

const en: typeof es = {
  metaTitle: 'Capabilities & Certifications | Aerus MRO',
  metaDescription:
    'Aerus MRO holds DGAC approval for turboprop aircraft maintenance. Learn about our capabilities, supported aircraft types and the scope of our shop.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  current: 'Capabilities & certifications',
  titlePre: 'Capabilities & ',
  titleAccent: 'certifications',
  intro:
    'A DGAC-approved repair station. See which aircraft we support, what work we perform and the approvals we operate under.',
  certSubtitle: 'Current approvals',
  certTitle: 'Certifications',
  certificaciones: [
    {
      nombre: 'DGAC Mexico AMO',
      descripcion: 'Approved Maintenance Organization certified by Mexico’s Directorate General of Civil Aviation (DGAC).',
    },
    {
      nombre: 'Pratt & Whitney Canada Authorized Service Center',
      descripcion: 'Authorized service center for Pratt & Whitney Canada PT6A-family engines.',
    },
    {
      nombre: 'Hartzell Propeller Certified Service Center',
      descripcion: 'Certified center for inspection, overhaul and repair of Hartzell propellers.',
    },
    {
      nombre: 'McCauley Authorized Service',
      descripcion: 'Authorized service for McCauley 3-blade propellers used on the Cessna 208 family.',
    },
  ],
  aeronavesSubtitle: 'Approved types',
  aeronavesTitle: 'Aircraft we support',
  aeronaves: [
    'Cessna 208 Caravan / Grand Caravan EX',
    'Cessna 208B Grand Caravan',
    'Cessna 182 / 172 (inspections and accessories)',
    'Beechcraft King Air (accessories and systems)',
    'Piper PA-31 Navajo (radios and instruments)',
    'Cessna gliders (182 series and derivatives)',
  ],
  aeronavesCallout:
    'Don’t see your aircraft on the list? Contact us — we can evaluate your maintenance request under our AMO approval.',
  alcanceSubtitle: 'What we do',
  alcanceTitle: 'Scope of work',
  alcance: [
    { titulo: 'Line maintenance', descripcion: 'Periodic checks, replacement of life-limited components and scheduled maintenance based on flight-hour intervals.' },
    { titulo: 'Base maintenance (MX Base)', descripcion: 'Heavy inspections: 100-hour, 200-hour, annual and biennial. Aircraft opening and closing per the manufacturer’s AMM.' },
    { titulo: 'Engine and propeller overhaul', descripcion: 'Disassembly, inspection, repair and reassembly per Pratt & Whitney Canada and Hartzell/McCauley overhaul manuals.' },
    { titulo: 'Modifications & STCs', descripcion: 'Installation of modifications approved under an STC (Supplemental Type Certificate). Availability varies by aircraft type.' },
    { titulo: 'Avionics & systems', descripcion: 'Installation, calibration and maintenance of navigation systems, radios and instrument panels.' },
  ],
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need maintenance?',
  ctaDesc: 'Tell us about your aircraft and we will send you a proposal within 24 hours.',
  ctaButton: 'Request a quote',
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/capacidades'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function CapacidadesPage({ params }: PageProps<'/[lang]/mro/capacidades'>) {
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
                {/* Certificaciones */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="shield" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.certSubtitle}</p>
                      <h2 className="docs-h2">{t.certTitle}</h2>
                    </div>
                  </div>
                  <div className="mro-cert-list">
                    {t.certificaciones.map((c) => (
                      <div key={c.nombre} className="mro-cert-item">
                        <p className="mro-cert-nombre">{c.nombre}</p>
                        <p className="mro-cert-desc">{c.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aeronaves admitidas */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.aeronavesSubtitle}</p>
                      <h2 className="docs-h2">{t.aeronavesTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.aeronaves.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 16 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>{t.aeronavesCallout}</p>
                  </div>
                </div>

                {/* Alcance */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.alcanceSubtitle}</p>
                      <h2 className="docs-h2">{t.alcanceTitle}</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {t.alcance.map((item) => (
                      <div key={item.titulo} className="destino-faq-item">
                        <dt className="destino-faq-q">{item.titulo}</dt>
                        <dd className="destino-faq-a">{item.descripcion}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.otrosTitle}</p>
                  <ul className="docs-related-list">
                    {t.otros.map((o) => (
                      <li key={o.href}>
                        <Link href={lp(lang, o.href)} className="docs-related-link">
                          <span>{o.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <Link href={lp(lang, '/mro/cotizacion/')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {t.ctaButton}
                  </Link>
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
