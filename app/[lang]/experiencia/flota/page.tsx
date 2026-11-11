import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/experiencia/flota/'

type EspecFila = { etiqueta: string; valor: string }
type Ventaja = { icono: string; titulo: string; descripcion: string }
type Relacionado = { label: string; href: string }

const es = {
  metaTitle: 'La flota — Cessna Grand Caravan EX | Aerus',
  metaDescription:
    'La flota de Aerus está compuesta por turbohélices Cessna 208B Grand Caravan EX. Conoce sus características, capacidad y por qué es ideal para las rutas regionales de México.',
  breadcrumbLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',
  breadcrumbSection: 'Experiencia',
  breadcrumbCurrent: 'La flota',
  heroEyebrow: 'Experiencia Aerus',
  heroIntro:
    'La turbohélice utilitaria más confiable del mundo. Nuestra flota de Cessna 208B Grand Caravan EX conecta el norte, centro y sureste de México con seguridad y puntualidad.',
  imageAlt: 'Flota Aerus — Cessna 208B Grand Caravan EX',
  specsTitle: 'Especificaciones técnicas',
  ventajasTitle: '¿Por qué el Grand Caravan EX?',
  sidebarTitle: 'Experiencia Aerus',
  ctaTitle: 'Reserva tu vuelo',
  ctaDesc: 'Viaja en la cabina más cómoda de las rutas regionales de México.',
  ctaButton: 'Ver vuelos',
  specs: [
    { etiqueta: 'Motor', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
    { etiqueta: 'Hélice', valor: 'McCauley 3-blade de paso variable, velocidad constante' },
    { etiqueta: 'Capacidad', valor: 'Hasta 12 pasajeros (configuración regular Aerus)' },
    { etiqueta: 'Velocidad de crucero', valor: '185 kts (343 km/h)' },
    { etiqueta: 'Altitud de vuelo', valor: 'Hasta 25,000 ft — por encima de la mayoría del mal tiempo' },
    { etiqueta: 'Autonomía', valor: '912 nm (1,689 km) con carga máxima' },
    { etiqueta: 'Cabina', valor: 'No presurizada — ideal para rutas regionales de corta distancia' },
    { etiqueta: 'Certificación', valor: 'DGAC México · FAA USA' },
  ] as EspecFila[],
  ventajas: [
    {
      icono: 'shield',
      titulo: 'Confiabilidad probada',
      descripcion:
        'El Grand Caravan EX es la turbohélice utilitaria más vendida de la historia. Con más de 2,600 unidades en servicio en todo el mundo, es sinónimo de solidez y facilidad de mantenimiento.',
    },
    {
      icono: 'plane-takeoff',
      titulo: 'Ideal para pistas cortas',
      descripcion:
        'Su diseño de ala alta y capacidad STOL (Short Take-Off and Landing) le permiten operar en aeropuertos regionales y pistas no pavimentadas, abriendo destinos inaccesibles para aviones de fuselaje ancho.',
    },
    {
      icono: 'check',
      titulo: 'Mantenimiento propio',
      descripcion:
        'Aerus opera su propio taller MRO autorizado para motores PT6A y hélices McCauley. La misma flota que vuela es la que mantenemos — ningún detalle pasa por alto.',
    },
    {
      icono: 'users',
      titulo: 'Cabina personal',
      descripcion:
        'Con capacidad para hasta 12 pasajeros, cada vuelo es prácticamente un charter privado. Sin pasillo central, sin filas para el baño, sin bebé llorando tres filas atrás.',
    },
  ] as Ventaja[],
  relacionados: [
    { label: 'Espera minutos, no horas', href: '/experiencia/proceso-agil/' },
    { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
    { label: 'Mantenimiento MRO', href: '/mro/' },
  ] as Relacionado[],
}

const en: typeof es = {
  metaTitle: 'Our Fleet — Cessna Grand Caravan EX | Aerus',
  metaDescription:
    'The Aerus fleet is made up of Cessna 208B Grand Caravan EX turboprops. Learn about their features, capacity and why they are ideal for regional routes across Mexico.',
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',
  breadcrumbSection: 'Experience',
  breadcrumbCurrent: 'Our fleet',
  heroEyebrow: 'The Aerus experience',
  heroIntro:
    'The world’s most reliable utility turboprop. Our fleet of Cessna 208B Grand Caravan EX aircraft connects northern, central and southeastern Mexico safely and on time.',
  imageAlt: 'Aerus fleet — Cessna 208B Grand Caravan EX',
  specsTitle: 'Technical specifications',
  ventajasTitle: 'Why the Grand Caravan EX?',
  sidebarTitle: 'The Aerus experience',
  ctaTitle: 'Book your flight',
  ctaDesc: 'Fly in the most comfortable cabin on Mexico’s regional routes.',
  ctaButton: 'See flights',
  specs: [
    { etiqueta: 'Engine', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
    { etiqueta: 'Propeller', valor: 'McCauley 3-blade, variable-pitch, constant-speed' },
    { etiqueta: 'Capacity', valor: 'Up to 12 passengers (standard Aerus configuration)' },
    { etiqueta: 'Cruise speed', valor: '185 kts (343 km/h)' },
    { etiqueta: 'Service ceiling', valor: 'Up to 25,000 ft — above most bad weather' },
    { etiqueta: 'Range', valor: '912 nm (1,689 km) at maximum payload' },
    { etiqueta: 'Cabin', valor: 'Unpressurized — ideal for short regional routes' },
    { etiqueta: 'Certification', valor: 'DGAC Mexico · FAA USA' },
  ],
  ventajas: [
    {
      icono: 'shield',
      titulo: 'Proven reliability',
      descripcion:
        'The Grand Caravan EX is the best-selling utility turboprop in history. With more than 2,600 aircraft in service worldwide, it is synonymous with durability and easy maintenance.',
    },
    {
      icono: 'plane-takeoff',
      titulo: 'Built for short runways',
      descripcion:
        'Its high-wing design and STOL (Short Take-Off and Landing) capability allow it to operate at regional airports and on unpaved runways, opening up destinations that wide-body aircraft can’t reach.',
    },
    {
      icono: 'check',
      titulo: 'In-house maintenance',
      descripcion:
        'Aerus operates its own MRO shop, authorized for PT6A engines and McCauley propellers. The same fleet we fly is the fleet we maintain — no detail is overlooked.',
    },
    {
      icono: 'users',
      titulo: 'A personal cabin',
      descripcion:
        'With room for up to 12 passengers, every flight feels practically like a private charter. No center aisle, no lines for the restroom, no crying baby three rows back.',
    },
  ],
  relacionados: [
    { label: 'Wait minutes, not hours', href: '/experiencia/proceso-agil/' },
    { label: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Group flights', href: '/experiencia/grupos/' },
    { label: 'MRO maintenance', href: '/mro/' },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/flota'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function FlotaPage({ params }: PageProps<'/[lang]/experiencia/flota'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.breadcrumbHome}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/experiencia/')}>{t.breadcrumbSection}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.breadcrumbCurrent}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Cessna Grand <span className="accent">Caravan EX</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.heroIntro}
            </p>
          </div>
        </section>

        <div className="flota-img-banner">
          <Image
            src="/flota-aerus.webp"
            alt={t.imageAlt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Especificaciones */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="plane" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Cessna 208B Grand Caravan EX</p>
                      <h2 className="docs-h2">{t.specsTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-specs-table">
                    {t.specs.map((s) => (
                      <div key={s.etiqueta} className="exp-spec-row">
                        <span className="exp-spec-etiqueta">{s.etiqueta}</span>
                        <span className="exp-spec-valor">{s.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ventajas */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>{t.ventajasTitle}</h2>
                  <div className="exp-ventajas-grid">
                    {t.ventajas.map((v) => (
                      <div key={v.titulo} className="exp-ventaja-card">
                        <div className="exp-ventaja-icon">
                          <Icon name={v.icono} size={18} stroke={1.5} />
                        </div>
                        <div>
                          <p className="exp-ventaja-titulo">{v.titulo}</p>
                          <p className="exp-ventaja-desc">{v.descripcion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.sidebarTitle}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map((r) => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <Link href={lp(lang, '/reservar/')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
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
