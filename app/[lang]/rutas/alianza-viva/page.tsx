import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'
import { getRoutes } from '@/lib/red-de-rutas'
import { slugify } from '@/lib/route-utils'

const PATH = '/rutas/alianza-viva/'

const T = {
  es: {
    metaTitle: 'Alianza con Viva | Aerus',
    metaDescription:
      'Combina tu vuelo regional Aerus con la red nacional e internacional de Viva. Más destinos, una sola experiencia.',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    routes: 'Rutas',
    crumb: 'Alianza con Viva',
    eyebrow: 'Red ampliada',
    titleA: 'Alianza con ',
    intro:
      'Tu vuelo regional con Aerus conecta con la red nacional e internacional de Viva. Más destinos desde las ciudades que ya servimos.',
    howSub: 'El esquema',
    howTitle: 'Cómo funcionan las conexiones',
    hubsSub: 'Puntos de conexión',
    hubsTitle: 'Hubs donde conectas',
    hubRoutesLabel: 'Rutas Aerus que conectan aquí:',
    benefitsSub: 'Ventajas',
    benefitsTitle: 'Por qué usar la conexión',
    helpTitle: '¿Necesitas ayuda con tu conexión?',
    helpDesc:
      'Nuestro equipo te orienta sobre la mejor combinación de vuelos para llegar a tu destino final.',
    helpCta: 'Contactar Aerus',
    aerusRoutes: 'Rutas Aerus',
    comoFunciona: [
      {
        titulo: 'Reserva tu vuelo Aerus',
        desc: 'Selecciona tu ruta regional de origen y reserva tu vuelo con Aerus normalmente.',
      },
      {
        titulo: 'Conecta con Viva',
        desc: 'En el aeropuerto de conexión, continúa tu viaje con Viva hacia tu destino final.',
      },
      {
        titulo: 'Llega a más destinos',
        desc: 'La red combinada te da acceso a destinos nacionales e internacionales que Aerus no cubre directamente.',
      },
    ],
    beneficios: [
      'Acceso a la red nacional e internacional de Viva desde tus rutas regionales Aerus.',
      'Conexiones coordinadas para minimizar el tiempo de escala.',
      'Una sola experiencia de servicio — el mismo estándar Aerus en la etapa regional.',
      'Ideal para viajeros del norte y sureste de México que necesitan conectar con los grandes hubs.',
    ],
    hubs: [
      {
        ciudad: 'Monterrey',
        iata: 'MTY',
        desc: 'Hub principal del noreste. Desde MTY conectas con la red Viva hacia CDMX, Cancún, Los Cabos y más.',
      },
      {
        ciudad: 'CDMX',
        iata: 'NLU',
        desc: 'Hub del centro del país. Desde el Aeropuerto Internacional Felipe Ángeles (AIFA) conectas con la red Viva hacia destinos nacionales e internacionales.',
      },
      {
        ciudad: 'Villahermosa',
        iata: 'VSA',
        desc: 'Hub del sureste. Desde VSA conectas con la red Viva hacia el centro y el norte del país.',
      },
    ],
  },
  en: {
    metaTitle: 'Our alliance with Viva | Aerus',
    metaDescription:
      'Combine your Aerus regional flight with Viva’s domestic and international network. More destinations, one seamless experience.',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    routes: 'Routes',
    crumb: 'Viva alliance',
    eyebrow: 'Extended network',
    titleA: 'Our alliance with ',
    intro:
      'Your Aerus regional flight connects with Viva’s domestic and international network. More destinations from the cities we already serve.',
    howSub: 'How it works',
    howTitle: 'How connections work',
    hubsSub: 'Connection points',
    hubsTitle: 'Where you connect',
    hubRoutesLabel: 'Aerus routes that connect here:',
    benefitsSub: 'Benefits',
    benefitsTitle: 'Why connect with Viva',
    helpTitle: 'Need help with your connection?',
    helpDesc:
      'Our team can help you find the best flight combination to reach your final destination.',
    helpCta: 'Contact Aerus',
    aerusRoutes: 'Aerus routes',
    comoFunciona: [
      {
        titulo: 'Book your Aerus flight',
        desc: 'Choose your regional departure route and book your Aerus flight as usual.',
      },
      {
        titulo: 'Connect with Viva',
        desc: 'At the connecting airport, continue your trip with Viva to your final destination.',
      },
      {
        titulo: 'Reach more destinations',
        desc: 'The combined network gives you access to domestic and international destinations that Aerus doesn’t serve directly.',
      },
    ],
    beneficios: [
      'Access to Viva’s domestic and international network from your Aerus regional routes.',
      'Coordinated connections to minimize layover time.',
      'One consistent service experience — the same Aerus standard on the regional leg.',
      'Ideal for travelers in northern and southeastern Mexico who need to connect with the major hubs.',
    ],
    hubs: [
      {
        ciudad: 'Monterrey',
        iata: 'MTY',
        desc: 'Main hub in the northeast. From MTY you connect with the Viva network to CDMX, Cancún, Los Cabos and more.',
      },
      {
        ciudad: 'CDMX',
        iata: 'NLU',
        desc: 'Hub for central Mexico. From Felipe Ángeles International Airport (AIFA) you connect with the Viva network to domestic and international destinations.',
      },
      {
        ciudad: 'Villahermosa',
        iata: 'VSA',
        desc: 'Southeast hub. From VSA you connect with the Viva network to central and northern Mexico.',
      },
    ],
  },
}

// Rutas Aerus y ciudades que conectan en cada hub: se derivan de la red de rutas
const RUTAS_AERUS = getRoutes().map(([a, b]) => ({
  label: `${a} – ${b}`,
  href: `/rutas/${slugify(a)}-${slugify(b)}/`,
}))
const rutasDesde = (ciudad: string) =>
  getRoutes()
    .flatMap(([a, b]) => (a === ciudad ? [b] : b === ciudad ? [a] : []))
    .sort((x, y) => x.localeCompare(y, 'es'))

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas/alianza-viva'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function AlianzaVivaPage({ params }: PageProps<'/[lang]/rutas/alianza-viva'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* Hero */}
        <section className="viva-hero">
          <div className="container viva-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/rutas/')}>{t.routes}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">Viva</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="viva-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Cómo funciona */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="swap" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.howSub}</p>
                      <h2 className="docs-h2">{t.howTitle}</h2>
                    </div>
                  </div>
                  <ol className="fact-steps">
                    {t.comoFunciona.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Hubs de conexión */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="pin" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.hubsSub}</p>
                      <h2 className="docs-h2">{t.hubsTitle}</h2>
                    </div>
                  </div>
                  <div className="viva-hubs-grid">
                    {t.hubs.map(h => (
                      <div key={h.iata} className="viva-hub-card">
                        <div className="viva-hub-header">
                          <span className="viva-hub-iata">{h.iata}</span>
                          <p className="viva-hub-ciudad">{h.ciudad}</p>
                        </div>
                        <p className="viva-hub-desc">{h.desc}</p>
                        <div className="viva-hub-rutas">
                          <p className="viva-hub-rutas-label">{t.hubRoutesLabel}</p>
                          <div className="viva-hub-chips">
                            {rutasDesde(h.ciudad).map(dest => (
                              <span key={dest} className="viva-hub-chip">{dest}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.benefitsSub}</p>
                      <h2 className="docs-h2">{t.benefitsTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.beneficios.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.helpTitle}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.helpDesc}
                  </p>
                  <Link
                    href={lp(lang, '/ayuda/contacto/')}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.helpCta}
                  </Link>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.aerusRoutes}</p>
                  <ul className="docs-related-list">
                    {RUTAS_AERUS.map(r => (
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
