import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import { getAllDestinos } from '@/lib/destinos-mock'
import { getRoutes } from '@/lib/red-de-rutas'
import { slugify } from '@/lib/route-utils'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mapa-del-sitio/'

type Status = 'verde' | 'azul' | 'naranja' | 'amarillo' | 'gris'

type SitemapEntry = {
  label: string
  href: string
  status?: Status
  children?: SitemapEntry[]
}

const T = {
  es: {
    metaTitle: 'Mapa del sitio | Aerus',
    title: 'Mapa del sitio',
    legendLabel: 'Leyenda de estatus',
    status: {
      gris:     'Por definir',
      amarillo: 'Info lista',
      naranja:  'En construcción',
      azul:     'Construida',
      verde:    'Aprobada',
    } satisfies Record<Status, string>,
    secMain: 'Tareas principales',
    home: 'Inicio',
    book: 'Reservar',
    fares: 'Tarifas y familias',
    payment: 'Métodos de pago',
    checkin: 'Check-in',
    myBooking: 'Mi Reserva',
    secDestinations: 'Destinos',
    destinationsIndex: 'Destinos (índice)',
    secRoutes: 'Rutas',
    routesIndex: 'Rutas (índice)',
    viva: 'Alianza con Viva',
    secOnDemand: 'On Demand',
    onDemand: 'On Demand',
    charter: 'Aerus Charter',
    charterQuote: 'Cotizar charter',
    flightPass: 'Aerus Flight Pass',
    flightPassContact: 'Contacto Flight Pass',
    business: 'Soluciones para empresas',
    secExperience: 'Experiencia',
    experience: 'Experiencia Aerus',
    fastProcess: 'Espera minutos, no horas',
    fleet: 'La flota',
    travelAssistance: 'Asistencia de viaje',
    cancellationInsurance: 'Seguro de cancelación',
    groups: 'Vuelos para grupos',
    secBlog: 'Blog',
    blog: 'Blog',
    blogPosts: [
      { label: '¡Con Aerus llega a los mejores lugares caribeños!', slug: 'grand-costa-maya' },
      { label: '¡Aerus: Tu guía para unas vacaciones inolvidables!', slug: 'cancun-vacaciones-inolvidables' },
      { label: 'El paraíso a solo un vuelo de distancia', slug: 'descubre-cozumel' },
      { label: '¿Quiénes somos?', slug: 'quienes-somos' },
      { label: 'Más cerca de ti', slug: 'nace-aerus' },
    ],
    secAbout: 'Nosotros',
    about: 'Nosotros',
    press: 'Sala de prensa',
    secMro: 'MRO — Mantenimiento aeronáutico',
    mro: 'MRO',
    mroCapabilities: 'Capacidades y certificaciones',
    mroPt6a: 'Motores PT6A',
    mroPropellers: 'Hélices',
    mroAccessories: 'Accesorios y planeadores',
    mroRadios: 'Radios e instrumentos',
    mroQuote: 'Solicitar cotización',
    secLegal: 'Legal',
    terms: 'Términos y condiciones',
    privacy: 'Aviso de privacidad',
    cookies: 'Política de cookies',
    secHelp: 'Ayuda',
    helpCenter: 'Centro de ayuda',
    faq: 'Preguntas frecuentes',
    travelDocs: 'Documentos para viajar',
    baggage: 'Equipaje',
    airportTimes: 'Tiempos de llegada al aeropuerto',
    specialAssistance: 'Requerimientos especiales',
    pets: 'Viajar con mascota',
    invoicing: 'Facturación',
    contact: 'Contacto',
  },
  en: {
    metaTitle: 'Site map | Aerus',
    title: 'Site map',
    legendLabel: 'Status legend',
    status: {
      gris:     'To be defined',
      amarillo: 'Content ready',
      naranja:  'In progress',
      azul:     'Built',
      verde:    'Approved',
    } satisfies Record<Status, string>,
    secMain: 'Main tasks',
    home: 'Home',
    book: 'Book',
    fares: 'Fares and fare families',
    payment: 'Payment methods',
    checkin: 'Check-in',
    myBooking: 'My Booking',
    secDestinations: 'Destinations',
    destinationsIndex: 'Destinations (index)',
    secRoutes: 'Routes',
    routesIndex: 'Routes (index)',
    viva: 'Viva alliance',
    secOnDemand: 'On Demand',
    onDemand: 'On Demand',
    charter: 'Aerus Charter',
    charterQuote: 'Request a charter quote',
    flightPass: 'Aerus Flight Pass',
    flightPassContact: 'Flight Pass contact',
    business: 'Business solutions',
    secExperience: 'Experience',
    experience: 'The Aerus experience',
    fastProcess: 'Wait minutes, not hours',
    fleet: 'The fleet',
    travelAssistance: 'Travel assistance',
    cancellationInsurance: 'Cancellation insurance',
    groups: 'Group flights',
    secBlog: 'Blog',
    blog: 'Blog',
    blogPosts: [
      { label: 'Reach the best Caribbean spots with Aerus!', slug: 'grand-costa-maya' },
      { label: 'Aerus: your guide to an unforgettable vacation!', slug: 'cancun-vacaciones-inolvidables' },
      { label: 'Paradise, just one flight away', slug: 'descubre-cozumel' },
      { label: 'Who we are', slug: 'quienes-somos' },
      { label: 'Closer to you', slug: 'nace-aerus' },
    ],
    secAbout: 'About us',
    about: 'About us',
    press: 'Press room',
    secMro: 'MRO — Aircraft maintenance',
    mro: 'MRO',
    mroCapabilities: 'Capabilities and certifications',
    mroPt6a: 'PT6A engines',
    mroPropellers: 'Propellers',
    mroAccessories: 'Accessories and airframes',
    mroRadios: 'Radios and instruments',
    mroQuote: 'Request a quote',
    secLegal: 'Legal',
    terms: 'Terms and conditions',
    privacy: 'Privacy notice',
    cookies: 'Cookie policy',
    secHelp: 'Help',
    helpCenter: 'Help center',
    faq: 'Frequently asked questions',
    travelDocs: 'Travel documents',
    baggage: 'Baggage',
    airportTimes: 'Airport arrival times',
    specialAssistance: 'Special assistance',
    pets: 'Traveling with pets',
    invoicing: 'Invoicing',
    contact: 'Contact',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/mapa-del-sitio'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    robots: { index: false },
    alternates: alternates(lang, PATH),
  }
}

/** Builds the tree with canonical (Spanish) hrefs; EntryItem localizes them with lp(). */
function buildSections(lang: Lang): { title: string; entries: SitemapEntry[] }[] {
  const t = T[lang]
  const destinos = getAllDestinos(lang)
  // [etiqueta, slug] de cada ruta de la red
  const rutas: [string, string][] = getRoutes().map(([a, b]) => [`${a} – ${b}`, `${slugify(a)}-${slugify(b)}`])

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
  const t = T[lang]
  const sections = buildSections(lang)

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="sitemap-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.title}
            </h1>
          </div>
        </section>

        <section className="sitemap-body">
          <div className="container sitemap-tree">

            <div className="sitemap-legend" role="note" aria-label={t.legendLabel}>
              {(Object.entries(t.status) as [Status, string][]).map(([status, label]) => (
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
                    <EntryItem key={entry.href} entry={entry} lang={lang} />
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

function EntryItem({ entry, lang, depth = 0 }: { entry: SitemapEntry; lang: Lang; depth?: number }) {
  const href = lp(lang, entry.href)
  const statusLabels = T[lang].status
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
            <EntryItem key={child.href} entry={child} lang={lang} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}
