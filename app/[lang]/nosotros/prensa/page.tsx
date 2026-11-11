import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp } from '@/lib/i18n'
import { getRoutes } from '@/lib/red-de-rutas'

const PATH = '/nosotros/prensa/'

// Rutas activas: se toman de la red de rutas
const RUTAS = getRoutes().map(([a, b]) => `${a} – ${b}`)

const T = {
  es: {
    metaTitle: 'Sala de prensa | Aerus',
    metaDescription:
      'Kit de prensa, datos clave y contacto para medios de comunicación. Logotipos, información de flota y datos de la aerolínea regional Aerus.',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    nosotros: 'Nosotros',
    current: 'Sala de prensa',
    eyebrow: 'Nosotros',
    titleA: 'Sala de',
    titleAccent: 'prensa',
    intro:
      'Recursos para medios de comunicación: datos de la aerolínea, kit de marca y contacto directo con el equipo de comunicación.',
    factSub: 'Datos para medios',
    factTitle: 'Fact sheet Aerus',
    factSheet: [
      { label: 'Nombre comercial',   valor: 'Aerus' },
      { label: 'Tipo de operación',  valor: 'Aerolínea regional — aviación de turbohélice' },
      { label: 'Flota',              valor: 'Cessna 208B Grand Caravan EX' },
      { label: 'Motor',              valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
      { label: 'Hélice',             valor: 'McCauley 3 palas' },
      { label: 'Capacidad',          valor: '12 pasajeros por vuelo' },
      { label: 'Velocidad crucero',  valor: '185 nudos (343 km/h)' },
      { label: 'Techo de servicio',  valor: '25,000 pies' },
      { label: 'Rutas directas',     valor: `${RUTAS.length} rutas activas` },
      { label: 'Destinos',           valor: '10+ destinos en México y frontera norte' },
      { label: 'Mantenimiento',      valor: 'Centro MRO propio, aprobado DGAC, autorizado Pratt & Whitney Canada' },
      { label: 'Certificaciones MRO', valor: 'DGAC AMO · P&WC Authorized · Hartzell Certified · McCauley Service Center' },
    ],
    rutasSub: 'Red de rutas',
    rutasTitle: 'Rutas directas activas',
    rutasNota: 'Red en expansión. Consultar disponibilidad actual en',
    kitSub: 'Descargables',
    kitTitle: 'Kit de prensa',
    kitItems: [
      {
        icono: 'plane',
        titulo: 'Logotipos',
        desc: 'Versiones en SVG y PNG sobre fondo claro y oscuro. Incluye variante horizontal, ícono y combinación.',
        etiqueta: 'SVG · PNG',
      },
      {
        icono: 'shield',
        titulo: 'Paleta y tipografía',
        desc: 'Colores oficiales con valores HEX, RGB y CMYK. Tipografía Space Grotesk con guías de uso.',
        etiqueta: 'PDF · ASE',
      },
      {
        icono: 'camera',
        titulo: 'Fotografía de flota',
        desc: 'Imágenes en alta resolución del Cessna Grand Caravan EX — exterior, cabina y operación en rampa.',
        etiqueta: 'JPG · 300 dpi',
      },
      {
        icono: 'globe',
        titulo: 'Mapa de rutas',
        desc: 'Infografía actualizada con la red de rutas Aerus en formato editable y listo para publicación.',
        etiqueta: 'SVG · PDF',
      },
    ],
    kitCallout: 'Para solicitar el kit completo o material adicional escríbenos a',
    contactTag: 'Contacto de medios',
    contactTitle: 'Comunicación Aerus',
    contactHours: 'Lunes a viernes · 09:00 – 18:00 h (CST)',
    moreTitle: 'Más sobre Aerus',
    moreLinks: [
      { label: 'Quiénes somos',       href: '/nosotros/' },
      { label: 'La flota',             href: '/experiencia/flota/' },
      { label: 'Red de rutas',         href: '/rutas/' },
      { label: 'MRO — Mantenimiento',  href: '/mro/' },
    ],
  },
  en: {
    metaTitle: 'Press Room | Aerus',
    metaDescription:
      'Press kit, key facts and media contact. Logos, fleet information and facts about Aerus, Mexico’s regional airline.',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    nosotros: 'About us',
    current: 'Press room',
    eyebrow: 'About us',
    titleA: 'Press',
    titleAccent: 'room',
    intro:
      'Resources for the media: airline facts, brand kit and direct contact with our communications team.',
    factSub: 'Media facts',
    factTitle: 'Aerus fact sheet',
    factSheet: [
      { label: 'Trade name',          valor: 'Aerus' },
      { label: 'Type of operation',   valor: 'Regional airline — turboprop aviation' },
      { label: 'Fleet',               valor: 'Cessna 208B Grand Caravan EX' },
      { label: 'Engine',              valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
      { label: 'Propeller',           valor: 'McCauley 3-blade' },
      { label: 'Capacity',            valor: '12 passengers per flight' },
      { label: 'Cruise speed',        valor: '185 knots (343 km/h)' },
      { label: 'Service ceiling',     valor: '25,000 ft' },
      { label: 'Direct routes',       valor: `${RUTAS.length} active routes` },
      { label: 'Destinations',        valor: '10+ destinations in Mexico and along the northern border' },
      { label: 'Maintenance',         valor: 'In-house MRO center, DGAC-approved, Pratt & Whitney Canada authorized' },
      { label: 'MRO certifications',  valor: 'DGAC AMO · P&WC Authorized · Hartzell Certified · McCauley Service Center' },
    ],
    rutasSub: 'Route network',
    rutasTitle: 'Active direct routes',
    rutasNota: 'Our network is growing. Check current availability at',
    kitSub: 'Downloads',
    kitTitle: 'Press kit',
    kitItems: [
      {
        icono: 'plane',
        titulo: 'Logos',
        desc: 'SVG and PNG versions for light and dark backgrounds. Includes horizontal, icon and combined lockups.',
        etiqueta: 'SVG · PNG',
      },
      {
        icono: 'shield',
        titulo: 'Color palette and typography',
        desc: 'Official colors with HEX, RGB and CMYK values. Space Grotesk typeface with usage guidelines.',
        etiqueta: 'PDF · ASE',
      },
      {
        icono: 'camera',
        titulo: 'Fleet photography',
        desc: 'High-resolution images of the Cessna Grand Caravan EX — exterior, cabin and ramp operations.',
        etiqueta: 'JPG · 300 dpi',
      },
      {
        icono: 'globe',
        titulo: 'Route map',
        desc: 'Up-to-date infographic of the Aerus route network, editable and ready for publication.',
        etiqueta: 'SVG · PDF',
      },
    ],
    kitCallout: 'To request the full kit or additional materials, email us at',
    contactTag: 'Media contact',
    contactTitle: 'Aerus Communications',
    contactHours: 'Monday to Friday · 9:00 a.m. – 6:00 p.m. (CST)',
    moreTitle: 'More about Aerus',
    moreLinks: [
      { label: 'About us',             href: '/nosotros/' },
      { label: 'Our fleet',            href: '/experiencia/flota/' },
      { label: 'Route network',        href: '/rutas/' },
      { label: 'MRO — Maintenance',    href: '/mro/' },
    ],
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/nosotros/prensa'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function PrensaPage({ params }: PageProps<'/[lang]/nosotros/prensa'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const rutasHref = lp(lang, '/rutas/')

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* Hero */}
        <section className="prensa-hero">
          <div className="container prensa-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/nosotros/')}>{t.nosotros}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.current}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="prensa-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Fact sheet */}
                <div className="docs-section" style={{ marginBottom: 48 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.factSub}</p>
                      <h2 className="docs-h2">{t.factTitle}</h2>
                    </div>
                  </div>
                  <table className="prensa-fact-table">
                    <tbody>
                      {t.factSheet.map((f) => (
                        <tr key={f.label} className="prensa-fact-row">
                          <td className="prensa-fact-label">{f.label}</td>
                          <td className="prensa-fact-valor">{f.valor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Rutas activas */}
                <div className="docs-section" style={{ marginBottom: 48 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="pin" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.rutasSub}</p>
                      <h2 className="docs-h2">{t.rutasTitle}</h2>
                    </div>
                  </div>
                  <ul className="prensa-rutas-list">
                    {RUTAS.map((r) => (
                      <li key={r} className="prensa-ruta-item">
                        <span className="prensa-ruta-dot" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="prensa-rutas-nota">
                    {t.rutasNota}{' '}
                    <Link href={rutasHref}>aerus.mx{rutasHref.replace(/\/$/, '')}</Link>.
                  </p>
                </div>

                {/* Kit de prensa */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="luggage" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.kitSub}</p>
                      <h2 className="docs-h2">{t.kitTitle}</h2>
                    </div>
                  </div>
                  <div className="prensa-kit-grid">
                    {t.kitItems.map((k) => (
                      <div key={k.titulo} className="prensa-kit-card">
                        <div className="prensa-kit-icon">
                          <Icon name={k.icono} size={18} stroke={1.5} />
                        </div>
                        <div className="prensa-kit-body">
                          <p className="prensa-kit-titulo">{k.titulo}</p>
                          <p className="prensa-kit-desc">{k.desc}</p>
                          <span className="prensa-kit-tag">{k.etiqueta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    {t.kitCallout}{' '}
                    <a href="mailto:prensa@aerus.mx">prensa@aerus.mx</a>.
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="prensa-contacto-card">
                  <p className="prensa-contacto-tag">{t.contactTag}</p>
                  <p className="prensa-contacto-titulo">{t.contactTitle}</p>
                  <div className="prensa-contacto-rows">
                    <a href="mailto:prensa@aerus.mx" className="prensa-contacto-row">
                      <Icon name="mail" size={15} stroke={1.5} />
                      <span>prensa@aerus.mx</span>
                    </a>
                    <a href="tel:+528126823501" className="prensa-contacto-row">
                      <Icon name="phone" size={15} stroke={1.5} />
                      <span>+52 812 682 3501</span>
                    </a>
                  </div>
                  <p className="prensa-contacto-horario">
                    {t.contactHours}
                  </p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.moreTitle}</p>
                  <ul className="docs-related-list">
                    {t.moreLinks.map((r) => (
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
