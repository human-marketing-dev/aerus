import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Sala de prensa | Aerus',
  description:
    'Kit de prensa, datos clave y contacto para medios de comunicación. Logotipos, información de flota y datos de la aerolínea regional Aerus.',
}

const FACT_SHEET = [
  { label: 'Nombre comercial',   valor: 'Aerus' },
  { label: 'Tipo de operación',  valor: 'Aerolínea regional — aviación de turbohélice' },
  { label: 'Flota',              valor: 'Cessna 208B Grand Caravan EX' },
  { label: 'Motor',              valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
  { label: 'Hélice',             valor: 'McCauley 3 palas' },
  { label: 'Capacidad',          valor: '9 pasajeros por vuelo' },
  { label: 'Velocidad crucero',  valor: '182 nudos (337 km/h)' },
  { label: 'Techo de servicio',  valor: '25,000 pies' },
  { label: 'Rutas directas',     valor: '7 rutas activas' },
  { label: 'Destinos',           valor: '10+ destinos en México y frontera norte' },
  { label: 'Mantenimiento',      valor: 'Centro MRO propio, aprobado DGAC, autorizado Pratt & Whitney Canada' },
  { label: 'Certificaciones MRO', valor: 'DGAC AMO · P&WC Authorized · Hartzell Certified · McCauley Service Center' },
]

const KIT_ITEMS = [
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
]

const RUTAS = [
  'Monterrey – Brownsville',
  'Monterrey – Laredo',
  'Monterrey – McAllen',
  'Monterrey – Durango',
  'Cancún – Cozumel',
  'Cancún – Chetumal',
  'Veracruz – Villahermosa',
]

export default function PrensaPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section className="prensa-hero">
          <div className="container prensa-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/nosotros/">Nosotros</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Sala de prensa</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Nosotros</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Sala de <span className="accent">prensa</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Recursos para medios de comunicación: datos de la aerolínea, kit de marca
              y contacto directo con el equipo de comunicación.
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
                      <p className="docs-subtitulo">Datos para medios</p>
                      <h2 className="docs-h2">Fact sheet Aerus</h2>
                    </div>
                  </div>
                  <table className="prensa-fact-table">
                    <tbody>
                      {FACT_SHEET.map((f) => (
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
                      <p className="docs-subtitulo">Red de rutas</p>
                      <h2 className="docs-h2">Rutas directas activas</h2>
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
                    Red en expansión. Consultar disponibilidad actual en{' '}
                    <Link href="/rutas/">aerus.mx/rutas</Link>.
                  </p>
                </div>

                {/* Kit de prensa */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="luggage" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Descargables</p>
                      <h2 className="docs-h2">Kit de prensa</h2>
                    </div>
                  </div>
                  <div className="prensa-kit-grid">
                    {KIT_ITEMS.map((k) => (
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
                    Para solicitar el kit completo o material adicional escríbenos a{' '}
                    <a href="mailto:prensa@aerus.mx">prensa@aerus.mx</a>.
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="prensa-contacto-card">
                  <p className="prensa-contacto-tag">Contacto de medios</p>
                  <p className="prensa-contacto-titulo">Comunicación Aerus</p>
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
                    Lunes a viernes · 09:00 – 18:00 h (CST)
                  </p>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Más sobre Aerus</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Quiénes somos',       href: '/nosotros/' },
                      { label: 'La flota',             href: '/experiencia/flota/' },
                      { label: 'Red de rutas',         href: '/rutas/' },
                      { label: 'MRO — Mantenimiento',  href: '/mro/' },
                    ].map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="docs-related-link">
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
      <Footer />
    </>
  )
}
