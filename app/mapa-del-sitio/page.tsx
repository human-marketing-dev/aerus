import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllDestinos } from '@/lib/destinos-mock'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa del sitio | Aerus',
  robots: { index: false },
}

type Status = 'verde' | 'azul' | 'naranja' | 'amarillo' | 'gris'

type SitemapEntry = {
  label: string
  href: string
  status?: Status
  children?: SitemapEntry[]
}

const STATUS_LABELS: Record<Status, string> = {
  gris:     'Por definir',
  amarillo: 'Info lista',
  naranja:  'En construcción',
  azul:     'Construida',
  verde:    'Aprobada',
}

export default function MapaDelSitioPage() {
  const destinos = getAllDestinos()

  const sections: { title: string; entries: SitemapEntry[] }[] = [
    {
      title: 'Tareas principales',
      entries: [
        { label: 'Inicio', href: '/', status: 'azul' },
        {
          label: 'Reservar',
          href: '/reservar/',
          status: 'gris',
          children: [
            { label: 'Tarifas y familias', href: '/reservar/tarifas/', status: 'gris' },
            { label: 'Métodos de pago', href: '/reservar/metodos-de-pago/', status: 'gris' },
          ],
        },
        { label: 'Check-in', href: '/check-in/', status: 'gris' },
        { label: 'Mi vuelo', href: '/mi-vuelo/', status: 'gris' },
      ],
    },
    {
      title: 'Destinos',
      entries: [
        {
          label: 'Destinos (índice)',
          href: '/destinos/',
          status: 'naranja',
          children: destinos.map(d => ({
            label: d.nombre,
            href: `/destinos/${d.slug}/`,
            status: 'naranja' as Status,
          })),
        },
      ],
    },
    {
      title: 'Rutas',
      entries: [
        {
          label: 'Rutas (índice)',
          href: '/rutas/',
          status: 'naranja',
          children: [
            { label: 'Monterrey – Brownsville', href: '/rutas/monterrey-brownsville/', status: 'naranja' },
            { label: 'Monterrey – Laredo', href: '/rutas/monterrey-laredo/', status: 'naranja' },
            { label: 'Monterrey – McAllen', href: '/rutas/monterrey-mcallen/', status: 'naranja' },
            { label: 'Monterrey – Durango', href: '/rutas/monterrey-durango/', status: 'naranja' },
            { label: 'Cancún – Cozumel', href: '/rutas/cancun-cozumel/', status: 'naranja' },
            { label: 'Cancún – Chetumal', href: '/rutas/cancun-chetumal/', status: 'naranja' },
            { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/', status: 'naranja' },
            { label: 'Conexiones Viva Aerobus', href: '/rutas/conexiones-viva-aerobus/', status: 'naranja' },
          ],
        },
      ],
    },
    {
      title: 'Corporativo',
      entries: [
        {
          label: 'Corporativo',
          href: '/corporativo/',
          status: 'amarillo',
          children: [
            {
              label: 'Aerus Charter',
              href: '/corporativo/charter/',
              status: 'amarillo',
              children: [
                { label: 'Cotizar charter', href: '/corporativo/charter/cotizar/', status: 'gris' },
              ],
            },
            {
              label: 'Aerus Flight Pass',
              href: '/corporativo/flight-pass/',
              status: 'amarillo',
              children: [
                { label: 'Contacto Flight Pass', href: '/corporativo/flight-pass/contacto/', status: 'gris' },
              ],
            },
            { label: 'Soluciones para empresas', href: '/corporativo/empresas/', status: 'gris' },
          ],
        },
      ],
    },
    {
      title: 'Experiencia',
      entries: [
        {
          label: 'Experiencia Aerus',
          href: '/experiencia/',
          status: 'azul',
          children: [
            { label: 'Espera minutos, no horas', href: '/experiencia/proceso-agil/', status: 'azul' },
            { label: 'La flota', href: '/experiencia/flota/', status: 'azul' },
            { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/', status: 'azul' },
            { label: 'Seguro de cancelación', href: '/experiencia/seguro-de-cancelacion/', status: 'azul' },
            { label: 'Vuelos para grupos', href: '/experiencia/grupos/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: 'Nosotros',
      entries: [
        {
          label: 'Nosotros',
          href: '/nosotros/',
          status: 'gris',
          children: [
            { label: 'Sala de prensa', href: '/nosotros/prensa/', status: 'gris' },
          ],
        },
      ],
    },
    {
      title: 'MRO — Mantenimiento aeronáutico',
      entries: [
        {
          label: 'MRO',
          href: '/mro/',
          status: 'azul',
          children: [
            { label: 'Capacidades y certificaciones', href: '/mro/capacidades/', status: 'azul' },
            { label: 'Motores PT6A', href: '/mro/motores-pt6a/', status: 'azul' },
            { label: 'Hélices', href: '/mro/helices/', status: 'azul' },
            { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/', status: 'azul' },
            { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/', status: 'azul' },
            { label: 'Solicitar cotización', href: '/mro/cotizacion/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: 'Ayuda',
      entries: [
        {
          label: 'Centro de ayuda',
          href: '/ayuda/',
          status: 'azul',
          children: [
            { label: 'Preguntas frecuentes', href: '/ayuda/faq/', status: 'azul' },
            { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/', status: 'azul' },
            { label: 'Equipaje', href: '/ayuda/equipaje/', status: 'azul' },
            { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/', status: 'azul' },
            { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/', status: 'azul' },
            { label: 'Viajar con mascota', href: '/ayuda/viajar-con-mascota/', status: 'azul' },
            { label: 'Facturación', href: '/ayuda/facturacion/', status: 'azul' },
            { label: 'Contacto', href: '/ayuda/contacto/', status: 'azul' },
          ],
        },
      ],
    },
  ]

  return (
    <>
      <Nav />
      <main>
        <section className="sitemap-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Mapa del sitio
            </h1>
          </div>
        </section>

        <section className="sitemap-body">
          <div className="container sitemap-tree">

            <div className="sitemap-legend" role="note" aria-label="Leyenda de estatus">
              {(Object.entries(STATUS_LABELS) as [Status, string][]).map(([status, label]) => (
                <span key={status} className="sitemap-legend-item">
                  <span className={`sitemap-dot sitemap-dot--${status}`} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            {sections.map(sec => (
              <div key={sec.title} className="sitemap-section">
                <p className="sitemap-section-title">{sec.title}</p>
                <ul className="sitemap-list">
                  {sec.entries.map(entry => (
                    <EntryItem key={entry.href} entry={entry} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function EntryItem({ entry, depth = 0 }: { entry: SitemapEntry; depth?: number }) {
  return (
    <li className="sitemap-item">
      <Link href={entry.href} className="sitemap-link">
        {entry.status && (
          <span
            className={`sitemap-dot sitemap-dot--${entry.status}`}
            title={STATUS_LABELS[entry.status]}
            aria-label={STATUS_LABELS[entry.status]}
          />
        )}
        <span className="sitemap-link-label">{entry.label}</span>
        <span className="sitemap-link-url">{entry.href}</span>
      </Link>
      {entry.children && entry.children.length > 0 && (
        <ul className={depth === 0 ? 'sitemap-children' : 'sitemap-grandchildren'}>
          {entry.children.map(child => (
            <EntryItem key={child.href} entry={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}
