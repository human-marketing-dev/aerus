import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllDestinos } from '@/lib/destinos-mock'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa del sitio | Aerus',
  robots: { index: false },
}

type SitemapEntry = {
  label: string
  href: string
  children?: SitemapEntry[]
}

export default function MapaDelSitioPage() {
  const destinos = getAllDestinos()

  const sections: { title: string; entries: SitemapEntry[] }[] = [
    {
      title: 'Tareas principales',
      entries: [
        { label: 'Inicio', href: '/' },
        {
          label: 'Reservar',
          href: '/reservar/',
          children: [
            { label: 'Tarifas y familias', href: '/reservar/tarifas/' },
            { label: 'Métodos de pago', href: '/reservar/metodos-de-pago/' },
          ],
        },
        { label: 'Check-in', href: '/check-in/' },
        { label: 'Mi vuelo', href: '/mi-vuelo/' },
      ],
    },
    {
      title: 'Destinos',
      entries: [
        {
          label: 'Destinos (índice)',
          href: '/destinos/',
          children: destinos.map(d => ({
            label: d.nombre,
            href: `/destinos/${d.slug}/`,
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
          children: [
            { label: 'Monterrey – Brownsville', href: '/rutas/monterrey-brownsville/' },
            { label: 'Monterrey – Laredo', href: '/rutas/monterrey-laredo/' },
            { label: 'Monterrey – McAllen', href: '/rutas/monterrey-mcallen/' },
            { label: 'Monterrey – Durango', href: '/rutas/monterrey-durango/' },
            { label: 'Cancún – Cozumel', href: '/rutas/cancun-cozumel/' },
            { label: 'Cancún – Chetumal', href: '/rutas/cancun-chetumal/' },
            { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/' },
            { label: 'Conexiones Viva Aerobus', href: '/rutas/conexiones-viva-aerobus/' },
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
          children: [
            {
              label: 'Aerus Charter',
              href: '/corporativo/charter/',
              children: [
                { label: 'Cotizar charter', href: '/corporativo/charter/cotizar/' },
              ],
            },
            {
              label: 'Aerus Flight Pass',
              href: '/corporativo/flight-pass/',
              children: [
                { label: 'Contacto Flight Pass', href: '/corporativo/flight-pass/contacto/' },
              ],
            },
            { label: 'Soluciones para empresas', href: '/corporativo/empresas/' },
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
          children: [
            { label: 'Espera minutos, no horas', href: '/experiencia/proceso-agil/' },
            { label: 'La flota', href: '/experiencia/flota/' },
            { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
            { label: 'Seguro de cancelación', href: '/experiencia/seguro-de-cancelacion/' },
            { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
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
          children: [
            { label: 'Sala de prensa', href: '/nosotros/prensa/' },
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
          children: [
            { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
            { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
            { label: 'Hélices', href: '/mro/helices/' },
            { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
            { label: 'Radios e instrumentos', href: '/mro/radios-instrumentos/' },
            { label: 'Solicitar cotización', href: '/mro/cotizacion/' },
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
          children: [
            { label: 'Preguntas frecuentes', href: '/ayuda/faq/' },
            { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
            { label: 'Equipaje', href: '/ayuda/equipaje/' },
            { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/' },
            { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
            { label: 'Viajar con mascota', href: '/ayuda/viajar-con-mascota/' },
            { label: 'Facturación', href: '/ayuda/facturacion/' },
            { label: 'Contacto', href: '/ayuda/contacto/' },
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
        {entry.label}
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
