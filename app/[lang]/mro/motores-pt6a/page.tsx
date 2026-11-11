import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mro/motores-pt6a/'

const es = {
  metaTitle: 'Motores PT6A | Aerus MRO',
  metaDescription:
    'Mantenimiento, inspección y overhaul de motores Pratt & Whitney Canada serie PT6A. Centro de servicio autorizado Aerus MRO, aprobado DGAC.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  current: 'Motores PT6A',
  titlePre: 'Motores ',
  titleAccent: 'PT6A',
  intro:
    'Centro de servicio autorizado Pratt & Whitney Canada. Inspeccionamos, mantenemos y hacemos overhaul de motores PT6A conforme al EOM del fabricante.',
  serviciosSubtitle: 'Qué hacemos',
  serviciosTitle: 'Servicios de motor',
  servicios: [
    {
      titulo: 'Inspección de sección caliente (HSI)',
      descripcion:
        'Apertura del módulo de potencia para inspección visual, dimensional y por partículas magnéticas de los componentes de la sección de combustión, turbinas y accesorios de gas caliente. Incluye sustitución de piezas con vida limitada conforme a la lista del fabricante.',
    },
    {
      titulo: 'Overhaul completo (TBO)',
      descripcion:
        'Desarmado completo hasta componente, limpieza, inspección dimensional y de grietas, reparación o sustitución de partes, rearmado y prueba de aceptación conforme al Engine Overhaul Manual (EOM) de Pratt & Whitney Canada.',
    },
    {
      titulo: 'Mantenimiento de línea y 100 horas',
      descripcion:
        'Cambios de aceite, filtros, bujías de ignición, inspección visual de boroscopio y revisión de accesorios conforme al Aircraft Maintenance Manual (AMM) en los intervalos programados.',
    },
    {
      titulo: 'Servicio de accesorios del motor',
      descripcion:
        'Mantenimiento del grupo de accesorios: bomba de combustible, bomba de aceite, unidad de control de combustible (FCU), gobernador de hélice y alternadores — realizados conforme a los manuales del componente.',
    },
    {
      titulo: 'Diagnóstico y troubleshooting',
      descripcion:
        'Análisis espectral de aceite (SOAP), lectura de datos del motor (chip detector, temperatura ITT, torque) y diagnóstico por boroscopio para determinar el estado del motor sin apertura mayor.',
    },
  ],
  modelosSubtitle: 'Modelos con aprobación',
  modelosTitle: 'Variantes PT6A que atendemos',
  colModelo: 'Modelo',
  colAplicacion: 'Aeronave de aplicación',
  modelos: [
    { modelo: 'PT6A-114A', aplicacion: 'Cessna 208B Grand Caravan EX' },
    { modelo: 'PT6A-135A', aplicacion: 'Cessna 208B Super Cargomaster' },
    { modelo: 'PT6A-34', aplicacion: 'Piper PA-31T Cheyenne' },
    { modelo: 'PT6A-60A', aplicacion: 'Beechcraft King Air C90' },
  ],
  modelosCallout:
    '¿Tienes un PT6A de otra variante? Contáctanos para verificar si tu motor está dentro del alcance de nuestra aprobación AMO.',
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas servicio de motor?',
  ctaDesc: 'Dinos el modelo de tu PT6A, las horas actuales y el tipo de mantenimiento requerido.',
  ctaButton: 'Solicitar cotización',
}

const en: typeof es = {
  metaTitle: 'PT6A Engines | Aerus MRO',
  metaDescription:
    'Maintenance, inspection and overhaul of Pratt & Whitney Canada PT6A-series engines. Aerus MRO authorized service center, DGAC approved.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  current: 'PT6A engines',
  titlePre: 'PT6A ',
  titleAccent: 'engines',
  intro:
    'Pratt & Whitney Canada authorized service center. We inspect, maintain and overhaul PT6A engines in accordance with the manufacturer’s EOM.',
  serviciosSubtitle: 'What we do',
  serviciosTitle: 'Engine services',
  servicios: [
    {
      titulo: 'Hot section inspection (HSI)',
      descripcion:
        'Separation of the power section for visual, dimensional and magnetic particle inspection of combustion section, turbine and hot gas path components. Includes replacement of life-limited parts per the manufacturer’s list.',
    },
    {
      titulo: 'Full overhaul (TBO)',
      descripcion:
        'Complete teardown to component level, cleaning, dimensional and crack inspection, repair or replacement of parts, reassembly and acceptance testing per the Pratt & Whitney Canada Engine Overhaul Manual (EOM).',
    },
    {
      titulo: 'Line maintenance and 100-hour inspections',
      descripcion:
        'Oil and filter changes, igniter plugs, borescope inspection and accessory checks per the Aircraft Maintenance Manual (AMM) at scheduled intervals.',
    },
    {
      titulo: 'Engine accessory service',
      descripcion:
        'Maintenance of the accessory group: fuel pump, oil pump, fuel control unit (FCU), propeller governor and alternators — performed per the applicable component manuals.',
    },
    {
      titulo: 'Diagnostics and troubleshooting',
      descripcion:
        'Spectrometric oil analysis (SOAP), engine data review (chip detector, ITT, torque) and borescope diagnostics to assess engine condition without a major teardown.',
    },
  ],
  modelosSubtitle: 'Approved models',
  modelosTitle: 'PT6A variants we support',
  colModelo: 'Model',
  colAplicacion: 'Aircraft application',
  modelos: [
    { modelo: 'PT6A-114A', aplicacion: 'Cessna 208B Grand Caravan EX' },
    { modelo: 'PT6A-135A', aplicacion: 'Cessna 208B Super Cargomaster' },
    { modelo: 'PT6A-34', aplicacion: 'Piper PA-31T Cheyenne' },
    { modelo: 'PT6A-60A', aplicacion: 'Beechcraft King Air C90' },
  ],
  modelosCallout:
    'Have a different PT6A variant? Contact us to confirm whether your engine falls within the scope of our AMO approval.',
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need engine service?',
  ctaDesc: 'Tell us your PT6A model, current hours and the type of maintenance required.',
  ctaButton: 'Request a quote',
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/motores-pt6a'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function MotoresPt6aPage({ params }: PageProps<'/[lang]/mro/motores-pt6a'>) {
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
                {/* Servicios */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.serviciosSubtitle}</p>
                      <h2 className="docs-h2">{t.serviciosTitle}</h2>
                    </div>
                  </div>
                  <dl className="destino-faq">
                    {t.servicios.map((s) => (
                      <div key={s.titulo} className="destino-faq-item">
                        <dt className="destino-faq-q">{s.titulo}</dt>
                        <dd className="destino-faq-a">{s.descripcion}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Modelos admitidos */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.modelosSubtitle}</p>
                      <h2 className="docs-h2">{t.modelosTitle}</h2>
                    </div>
                  </div>
                  <div className="mro-modelos-table">
                    <div className="mro-modelos-header">
                      <span>{t.colModelo}</span>
                      <span>{t.colAplicacion}</span>
                    </div>
                    {t.modelos.map((m) => (
                      <div key={m.modelo} className="mro-modelos-row">
                        <span className="mro-modelos-modelo">{m.modelo}</span>
                        <span className="mro-modelos-aplicacion">{m.aplicacion}</span>
                      </div>
                    ))}
                  </div>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>{t.modelosCallout}</p>
                  </div>
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
