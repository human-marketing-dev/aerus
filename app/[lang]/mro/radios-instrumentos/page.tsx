import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mro/radios-instrumentos/'

const es = {
  metaTitle: 'Radios e instrumentos | Aerus MRO',
  metaDescription:
    'Mantenimiento, instalación y calibración de aviónica, radios y sistemas de navegación. Aerus MRO: taller de instrumentos aprobado DGAC.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  current: 'Radios e instrumentos',
  titlePre: 'Radios e ',
  titleAccent: 'instrumentos',
  intro:
    'Aviónica moderna mantenida con estándares de fábrica. Navegación, comunicaciones, transpondedor ADS-B, piloto automático e instrumentos de vuelo.',
  serviciosSubtitle: 'Aviónica y navegación',
  serviciosTitle: 'Servicios',
  servicios: [
    {
      titulo: 'Radios VHF / COM',
      descripcion:
        'Mantenimiento, diagnóstico y sustitución de radios COM VHF. Verificación de frecuencias, modulación y potencia de salida conforme a los estándares ICAO Annex 10.',
    },
    {
      titulo: 'Sistemas de navegación VOR / ILS / GPS',
      descripcion:
        'Calibración y mantenimiento de receptores VOR/LOC/GS e ILS. Instalación y actualización de bases de datos de navegadores GPS (Garmin, Avidyne). Verificación de precisión conforme a los manuales del fabricante.',
    },
    {
      titulo: 'Transpondedor ADS-B',
      descripcion:
        'Inspección, prueba de bianuales (prueba de altímetro y transpondedor requerida por DGAC) e instalación de equipos ADS-B Out para cumplimiento reglamentario.',
    },
    {
      titulo: 'Instrumentos de vuelo',
      descripcion:
        'Mantenimiento y calibración de altímetros, variómetros, velocímetros y horizontes artificiales. Verificación de instrumentos pitot-estáticos conforme a los requerimientos de aeronavegabilidad.',
    },
    {
      titulo: 'Piloto automático',
      descripcion:
        'Inspección, diagnóstico y ajuste de sistemas de piloto automático (S-TEC, Garmin GFC). Revisión de servos, engagement y desconexión de emergencia.',
    },
    {
      titulo: 'Sistema de audio e intercomunicador',
      descripcion:
        'Mantenimiento de paneles de audio (Garmin GMA, PS Engineering), intercomunicadores y sistema de cabina. Prueba de integración con radios COM.',
    },
  ],
  marcasSubtitle: 'Equipos admitidos',
  marcasTitle: 'Marcas que atendemos',
  marcas: [
    'Garmin (G1000, GTN, GTR, GNS series)',
    'Avidyne (IFD, EX series)',
    'S-TEC (piloto automático)',
    'BendixKing (KX, KI, KN series)',
    'Honeywell / AlliedSignal (instrumentos)',
    'Shadin / PS Engineering (audio, datos de motor)',
  ],
  marcasCallout:
    'Para instalaciones nuevas o modificaciones de aviónica se requiere aprobación previa de ingeniería. Contáctanos con el modelo de equipo y tipo de aeronave para verificar viabilidad.',
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
  ],
  ctaTitle: '¿Necesitas servicio de aviónica?',
  ctaDesc: 'Comparte marca, modelo de equipo y tipo de aeronave para iniciar la cotización.',
  ctaButton: 'Solicitar cotización',
}

const en: typeof es = {
  metaTitle: 'Radios & Instruments | Aerus MRO',
  metaDescription:
    'Avionics, radio and navigation system maintenance, installation and calibration. Aerus MRO: DGAC-approved instrument shop.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  current: 'Radios & instruments',
  titlePre: 'Radios & ',
  titleAccent: 'instruments',
  intro:
    'Modern avionics maintained to factory standards. Navigation, communications, ADS-B transponders, autopilots and flight instruments.',
  serviciosSubtitle: 'Avionics & navigation',
  serviciosTitle: 'Services',
  servicios: [
    {
      titulo: 'VHF / COM radios',
      descripcion:
        'Maintenance, troubleshooting and replacement of VHF COM radios. Frequency, modulation and output power checks per ICAO Annex 10 standards.',
    },
    {
      titulo: 'VOR / ILS / GPS navigation systems',
      descripcion:
        'Calibration and maintenance of VOR/LOC/GS and ILS receivers. Installation and database updates for GPS navigators (Garmin, Avidyne). Accuracy checks per the manufacturer’s manuals.',
    },
    {
      titulo: 'ADS-B transponders',
      descripcion:
        'Inspection, biennial altimeter and transponder checks (required by DGAC) and ADS-B Out installations for regulatory compliance.',
    },
    {
      titulo: 'Flight instruments',
      descripcion:
        'Maintenance and calibration of altimeters, vertical speed indicators, airspeed indicators and attitude indicators. Pitot-static system checks per airworthiness requirements.',
    },
    {
      titulo: 'Autopilot',
      descripcion:
        'Inspection, troubleshooting and adjustment of autopilot systems (S-TEC, Garmin GFC). Servo checks, engagement and emergency disconnect testing.',
    },
    {
      titulo: 'Audio and intercom systems',
      descripcion:
        'Maintenance of audio panels (Garmin GMA, PS Engineering), intercoms and cabin systems. Integration testing with COM radios.',
    },
  ],
  marcasSubtitle: 'Supported equipment',
  marcasTitle: 'Brands we service',
  marcas: [
    'Garmin (G1000, GTN, GTR, GNS series)',
    'Avidyne (IFD, EX series)',
    'S-TEC (autopilots)',
    'BendixKing (KX, KI, KN series)',
    'Honeywell / AlliedSignal (instruments)',
    'Shadin / PS Engineering (audio, engine data)',
  ],
  marcasCallout:
    'New avionics installations or modifications require prior engineering approval. Contact us with the equipment model and aircraft type to confirm feasibility.',
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
  ],
  ctaTitle: 'Need avionics service?',
  ctaDesc: 'Share the brand, equipment model and aircraft type to start your quote.',
  ctaButton: 'Request a quote',
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/mro/radios-instrumentos'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function RadiosInstrumentosPage({ params }: PageProps<'/[lang]/mro/radios-instrumentos'>) {
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
                      <Icon name="wifi" size={20} stroke={1.5} />
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
                  <ul className="docs-list">
                    {t.marcas.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 16 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>{t.marcasCallout}</p>
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
