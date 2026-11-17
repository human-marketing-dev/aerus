import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos, getRouteLinks } from '@/lib/red'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLang, lp, type Lang } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults, { type MapaSitioContent, type Status } from '@/content/pages/mapa-del-sitio'

const PATH = '/mapa-del-sitio/'

// Orden de la leyenda de estatus
const STATUSES: Status[] = ['gris', 'amarillo', 'naranja', 'azul', 'verde']

type SitemapEntry = {
  label: string
  href: string
  status?: Status
  children?: SitemapEntry[]
}

export async function generateMetadata({ params }: PageProps<'/[lang]/mapa-del-sitio'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaMapaSitio', lang, defaults)
  // Esta página nunca se indexa, sin importar lo que diga su SEO en Sanity
  return { ...seoMetadata(t.seo, lang, PATH), robots: { index: false } }
}

/** Builds the tree with canonical (Spanish) hrefs; EntryItem localizes them with lp(). */
async function buildSections(lang: Lang, t: MapaSitioContent): Promise<{ title: string; entries: SitemapEntry[] }[]> {
  const destinos = await getAllDestinos(lang)
  // [etiqueta, slug] de cada ruta de la red
  const rutas: [string, string][] = (await getRouteLinks(lang)).map(r => [`${r.origen} – ${r.destino}`, r.slug])

  return [
    {
      title: t.secMain,
      entries: [
        { label: t.home, href: '/', status: 'azul' },
        {
          label: t.book,
          href: '/reservar/',
          status: 'gris',
          children: [
            { label: t.fares, href: '/reservar/tarifas/', status: 'gris' },
            { label: t.payment, href: '/reservar/metodos-de-pago/', status: 'gris' },
          ],
        },
        { label: t.checkin, href: '/check-in/', status: 'gris' },
        { label: t.myBooking, href: '/mi-reserva/', status: 'gris' },
      ],
    },
    {
      title: t.secDestinations,
      entries: [
        {
          label: t.destinationsIndex,
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
      title: t.secRoutes,
      entries: [
        {
          label: t.routesIndex,
          href: '/rutas/',
          status: 'azul',
          children: [
            ...rutas.map(([label, slug]) => ({ label, href: `/rutas/${slug}/`, status: 'azul' as Status })),
            { label: t.viva, href: '/rutas/alianza-viva/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: t.secOnDemand,
      entries: [
        {
          label: t.onDemand,
          href: '/on-demand/',
          status: 'azul',
          children: [
            {
              label: t.charter,
              href: '/on-demand/charter/',
              status: 'azul',
              children: [
                { label: t.charterQuote, href: '/on-demand/charter/cotizar/', status: 'azul' },
              ],
            },
            {
              label: t.flightPass,
              href: '/on-demand/flight-pass/',
              status: 'azul',
              children: [
                { label: t.flightPassContact, href: '/on-demand/flight-pass/contacto/', status: 'azul' },
              ],
            },
            { label: t.business, href: '/on-demand/empresas/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: t.secExperience,
      entries: [
        {
          label: t.experience,
          href: '/experiencia/',
          status: 'azul',
          children: [
            { label: t.fastProcess, href: '/experiencia/proceso-agil/', status: 'azul' },
            { label: t.fleet, href: '/experiencia/flota/', status: 'azul' },
            { label: t.travelAssistance, href: '/experiencia/asistencia-de-viaje/', status: 'azul' },
            { label: t.cancellationInsurance, href: '/experiencia/seguro-de-cancelacion/', status: 'azul' },
            { label: t.groups, href: '/experiencia/grupos/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: t.secBlog,
      entries: [
        {
          label: t.blog,
          href: '/blog/',
          status: 'azul',
          children: t.blogPosts.map(p => ({ label: p.label, href: `/blog/${p.slug}/`, status: 'azul' as Status })),
        },
      ],
    },
    {
      title: t.secAbout,
      entries: [
        {
          label: t.about,
          href: '/nosotros/',
          status: 'azul',
          children: [
            { label: t.press, href: '/nosotros/prensa/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: t.secMro,
      entries: [
        {
          label: t.mro,
          href: '/mro/',
          status: 'azul',
          children: [
            { label: t.mroCapabilities, href: '/mro/capacidades/', status: 'azul' },
            { label: t.mroPt6a, href: '/mro/motores-pt6a/', status: 'azul' },
            { label: t.mroPropellers, href: '/mro/helices/', status: 'azul' },
            { label: t.mroAccessories, href: '/mro/accesorios-planeadores/', status: 'azul' },
            { label: t.mroRadios, href: '/mro/radios-instrumentos/', status: 'azul' },
            { label: t.mroQuote, href: '/mro/cotizacion/', status: 'azul' },
          ],
        },
      ],
    },
    {
      title: t.secLegal,
      entries: [
        { label: t.terms, href: '/legal/terminos-y-condiciones/', status: 'azul' },
        { label: t.privacy, href: '/legal/aviso-de-privacidad/', status: 'azul' },
        { label: t.cookies, href: '/legal/cookies/', status: 'azul' },
      ],
    },
    {
      title: t.secHelp,
      entries: [
        {
          label: t.helpCenter,
          href: '/ayuda/',
          status: 'azul',
          children: [
            { label: t.faq, href: '/ayuda/faq/', status: 'azul' },
            { label: t.travelDocs, href: '/ayuda/documentos-para-viajar/', status: 'azul' },
            { label: t.baggage, href: '/ayuda/equipaje/', status: 'azul' },
            { label: t.airportTimes, href: '/ayuda/tiempos-aeropuerto/', status: 'azul' },
            { label: t.specialAssistance, href: '/ayuda/requerimientos-especiales/', status: 'azul' },
            { label: t.pets, href: '/ayuda/viajar-con-mascota/', status: 'azul' },
            { label: t.invoicing, href: '/ayuda/facturacion/', status: 'azul' },
            { label: t.contact, href: '/ayuda/contacto/', status: 'azul' },
          ],
        },
      ],
    },
  ]
}

export default async function MapaDelSitioPage({ params }: PageProps<'/[lang]/mapa-del-sitio'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaMapaSitio', lang, defaults)
  const sections = await buildSections(lang, t)

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="sitemap-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.title}
            </h1>
          </div>
        </section>

        <section className="sitemap-body">
          <div className="container sitemap-tree">

            <div className="sitemap-legend" role="note" aria-label={t.legendLabel}>
              {STATUSES.map(status => (
                <span key={status} className="sitemap-legend-item">
                  <span className={`sitemap-dot sitemap-dot--${status}`} aria-hidden="true" />
                  {t.status[status]}
                </span>
              ))}
            </div>

            {sections.map(sec => (
              <div key={sec.title} className="sitemap-section">
                <p className="sitemap-section-title">{sec.title}</p>
                <ul className="sitemap-list">
                  {sec.entries.map(entry => (
                    <EntryItem key={entry.href} entry={entry} lang={lang} statusLabels={t.status} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}

function EntryItem({ entry, lang, statusLabels, depth = 0 }: {
  entry: SitemapEntry
  lang: Lang
  statusLabels: Record<Status, string>
  depth?: number
}) {
  const href = lp(lang, entry.href)
  return (
    <li className="sitemap-item">
      <Link href={href} className="sitemap-link">
        {entry.status && (
          <span
            className={`sitemap-dot sitemap-dot--${entry.status}`}
            title={statusLabels[entry.status]}
            aria-label={statusLabels[entry.status]}
          />
        )}
        <span className="sitemap-link-label">{entry.label}</span>
        <span className="sitemap-link-url">{href}</span>
      </Link>
      {entry.children && entry.children.length > 0 && (
        <ul className={depth === 0 ? 'sitemap-children' : 'sitemap-grandchildren'}>
          {entry.children.map(child => (
            <EntryItem key={child.href} entry={child} lang={lang} statusLabels={statusLabels} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}
