import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mro/helices/'

const es = {
  metaTitle: 'Hélices — McCauley y Hartzell | Aerus MRO',
  metaDescription:
    'Balanceo, inspección y overhaul de hélices McCauley y Hartzell. Aerus MRO: centro de servicio certificado para hélices de aeronaves turbohélice.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  current: 'Hélices',
  titlePre: 'Hélices ',
  titleAccent: 'McCauley y Hartzell',
  intro:
    'Centro de servicio certificado. Balanceo, inspección y overhaul de hélices para aeronaves turbohélice conforme a los manuales de overhaul del fabricante.',
  serviciosSubtitle: 'Servicios de hélice',
  serviciosTitle: 'Qué realizamos',
  servicios: [
    {
      titulo: 'Inspección y diagnóstico',
      descripcion:
        'Inspección visual, dimensional y por líquidos penetrantes de palas, cubo y accesorios. Verificación de corrosión, daños por FOD (Foreign Object Damage) y estado del sistema de paso variable.',
    },
    {
      titulo: 'Overhaul conforme a TBO',
      descripcion:
        'Desarmado completo, limpieza, inspección de componentes, reparación o sustitución de piezas y rearmado conforme al Propeller Overhaul Manual de Hartzell o McCauley según corresponda.',
    },
    {
      titulo: 'Balanceo dinámico',
      descripcion:
        'Balanceo dinámico en campo con equipo especializado para reducir vibración y mejorar vida útil del motor y la célula. Recomendado tras cada overhaul o cambio de pala.',
    },
    {
      titulo: 'Reparación de palas',
      descripcion:
        'Reparación de bordes de ataque, parchado de grietas dentro de los límites del manual y tratamiento anticorrosivo. Evaluación de daños fuera de límites para posible devolución al fabricante.',
    },
    {
      titulo: 'Servicio del gobernador de hélice',
      descripcion:
        'Inspección, calibración y overhaul del gobernador de paso de hélice (Woodward y otros) según Manual de Overhaul del componente.',
    },
  ],
  marcasSubtitle: 'Marcas certificadas',
  marcasTitle: 'Hélices que atendemos',
  colMarca: 'Marca',
  colSeries: 'Series y aplicaciones',
  marcas: [
    { marca: 'McCauley', series: '3-blade (3AF32C87, series 3AF), usado en Cessna 208 Grand Caravan EX' },
    { marca: 'Hartzell', series: 'HC-B3TN, HC-C2YK y otras series — Cessna 208, King Air, Piper' },
  ],
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: '¿Necesitas servicio de hélice?',
  ctaDesc: 'Indícanos marca, modelo y horas actuales de tu hélice.',
  ctaButton: 'Solicitar cotización',
}

const en: typeof es = {
  metaTitle: 'Propellers — McCauley & Hartzell | Aerus MRO',
  metaDescription:
    'Balancing, inspection and overhaul of McCauley and Hartzell propellers. Aerus MRO: certified propeller service center for turboprop aircraft.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  current: 'Propellers',
  titlePre: 'McCauley & Hartzell ',
  titleAccent: 'propellers',
  intro:
    'Certified service center. Propeller balancing, inspection and overhaul for turboprop aircraft in accordance with the manufacturer’s overhaul manuals.',
  serviciosSubtitle: 'Propeller services',
  serviciosTitle: 'What we do',
  servicios: [
    {
      titulo: 'Inspection and diagnostics',
      descripcion:
        'Visual, dimensional and dye penetrant inspection of blades, hub and accessories. Checks for corrosion, FOD (foreign object damage) and the condition of the variable-pitch system.',
    },
    {
      titulo: 'Overhaul at TBO',
      descripcion:
        'Complete disassembly, cleaning, component inspection, repair or replacement of parts and reassembly per the Hartzell or McCauley Propeller Overhaul Manual, as applicable.',
    },
    {
      titulo: 'Dynamic balancing',
      descripcion:
        'On-wing dynamic balancing with specialized equipment to reduce vibration and extend engine and airframe service life. Recommended after every overhaul or blade change.',
    },
    {
      titulo: 'Blade repair',
      descripcion:
        'Leading-edge repair, crack repair within manual limits and corrosion treatment. Evaluation of out-of-limits damage for possible return to the manufacturer.',
    },
    {
      titulo: 'Propeller governor service',
      descripcion:
        'Inspection, calibration and overhaul of propeller pitch governors (Woodward and others) per the component overhaul manual.',
    },
  ],
  marcasSubtitle: 'Certified brands',
  marcasTitle: 'Propellers we service',
  colMarca: 'Brand',
  colSeries: 'Series and applications',
  marcas: [
    { marca: 'McCauley', series: '3-blade (3AF32C87, 3AF series), used on the Cessna 208 Grand Caravan EX' },
    { marca: 'Hartzell', series: 'HC-B3TN, HC-C2YK and other series — Cessna 208, King Air, Piper' },
  ],
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
    { label: 'Radios & instruments', href: '/mro/radios-instrumentos/' },
  ],
  ctaTitle: 'Need propeller service?',
  ctaDesc: 'Tell us your propeller’s make, model and current hours.',
  ctaButton: 'Request a quote',
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/helices'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function HelicesPage({ params }: PageProps<'/[lang]/mro/helices'>) {
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
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="swap" size={20} stroke={1.5} />
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

                <div>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.marcasSubtitle}</p>
                      <h2 className="docs-h2">{t.marcasTitle}</h2>
                    </div>
                  </div>
                  <div className="mro-modelos-table">
                    <div className="mro-modelos-header">
                      <span>{t.colMarca}</span>
                      <span>{t.colSeries}</span>
                    </div>
                    {t.marcas.map((m) => (
                      <div key={m.marca} className="mro-modelos-row">
                        <span className="mro-modelos-modelo">{m.marca}</span>
                        <span className="mro-modelos-aplicacion">{m.series}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
