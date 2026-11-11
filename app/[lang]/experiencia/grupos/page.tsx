import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/experiencia/grupos/'

type Tipo = { icono: string; titulo: string; descripcion: string }
type Paso = { titulo: string; descripcion: string }
type Relacionado = { label: string; href: string }

const es = {
  metaTitle: 'Vuelos para grupos | Aerus',
  metaDescription:
    'Viaja en grupo con Aerus. Coordinamos vuelos para equipos deportivos, grupos corporativos, familiares y cualquier conjunto de 8 pasajeros o más. Solicita tu cotización.',
  breadcrumbLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',
  breadcrumbSection: 'Experiencia',
  breadcrumbCurrent: 'Vuelos para grupos',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Vuelos para ',
  heroTitleAccent: 'grupos',
  heroIntro:
    '¿Viajan 8 o más personas? Aerus coordina el vuelo para que tu grupo llegue junto, a tiempo y sin el caos de reservar asientos uno por uno.',
  tiposSubtitulo: 'Para quién es',
  tiposTitle: 'Tipos de grupos que atendemos',
  beneficiosSubtitulo: 'Qué incluye',
  beneficiosTitle: 'Beneficios del vuelo grupal',
  pasosTitle: 'Cómo funciona',
  ctaTitle: '¿Cuántos viajan?',
  ctaDesc: 'Escríbenos con los datos del grupo y te respondemos en 24 horas con disponibilidad y tarifas.',
  ctaButton: 'Escribir a grupos@aerus.mx',
  relacionadosTitle: 'También puede interesarte',
  tipos: [
    {
      icono: 'users',
      titulo: 'Grupos corporativos',
      descripcion: 'Traslado de equipos de trabajo, directivos o delegaciones a reuniones y eventos de negocio. Factura a razón social de la empresa.',
    },
    {
      icono: 'plane',
      titulo: 'Equipos deportivos',
      descripcion: 'Vuelos coordinados para equipos, cuerpos técnicos y staff. Gestión de equipaje especial (implementos deportivos) incluida en la coordinación.',
    },
    {
      icono: 'ticket',
      titulo: 'Grupos turísticos y familiares',
      descripcion: 'Reuniones familiares, bodas, quinceaños o excursiones. Organizamos la logística para que el grupo vuele junto y a tiempo.',
    },
    {
      icono: 'shield',
      titulo: 'Grupos académicos',
      descripcion: 'Viajes escolares, delegaciones universitarias y grupos de investigación. Coordinación con responsables del grupo y documentación requerida para menores.',
    },
  ] as Tipo[],
  beneficios: [
    'Asientos asignados juntos en el mismo vuelo.',
    'Coordinación directa con un agente Aerus durante todo el proceso.',
    'Posibilidad de facturar a nombre de empresa u organización.',
    'Gestión de requerimientos especiales del grupo (dietas, movilidad, menores).',
    'Flexibilidad en cambios de fecha con mínimo 72 horas de anticipación.',
    'Opción de vuelo exclusivo (charter) para grupos que requieran mayor privacidad o logística.',
  ],
  pasos: [
    {
      titulo: 'Cuéntanos de tu grupo',
      descripcion: 'Envíanos el número de pasajeros, origen, destino, fecha(s) tentativa(s) y tipo de grupo. Mientras más detalles, más precisa será la propuesta.',
    },
    {
      titulo: 'Recibe tu propuesta en 24 horas',
      descripcion: 'Nuestro equipo revisa disponibilidad y te envía una propuesta de vuelo con tarifas de grupo, opciones de fecha y condiciones de pago.',
    },
    {
      titulo: 'Confirma y gestiona los pasajeros',
      descripcion: 'Al confirmar, te pedimos la lista de pasajeros con nombre completo e identificación. El pago puede hacerse en bloque o por pasajero según se acuerde.',
    },
    {
      titulo: 'El día del vuelo, nosotros te esperamos',
      descripcion: 'Asignamos un agente en aeropuerto para recibir al grupo, agilizar el check-in y coordinar el abordaje. Tu grupo viaja junto, sin complicaciones.',
    },
  ] as Paso[],
  relacionados: [
    { label: 'On Demand — charter', href: '/on-demand/charter/' },
    { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
  ] as Relacionado[],
}

const en: typeof es = {
  metaTitle: 'Group Flights | Aerus',
  metaDescription:
    'Travel as a group with Aerus. We coordinate flights for sports teams, corporate groups, families and any party of 8 or more passengers. Request a quote.',
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',
  breadcrumbSection: 'Experience',
  breadcrumbCurrent: 'Group flights',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Group ',
  heroTitleAccent: 'flights',
  heroIntro:
    'Traveling with 8 or more people? Aerus coordinates the flight so your group arrives together, on time and without the hassle of booking seats one by one.',
  tiposSubtitulo: 'Who it’s for',
  tiposTitle: 'Groups we serve',
  beneficiosSubtitulo: 'What’s included',
  beneficiosTitle: 'Group travel benefits',
  pasosTitle: 'How it works',
  ctaTitle: 'How many are traveling?',
  ctaDesc: 'Send us your group details and we’ll reply within 24 hours with availability and fares.',
  ctaButton: 'Email grupos@aerus.mx',
  relacionadosTitle: 'You may also like',
  tipos: [
    {
      icono: 'users',
      titulo: 'Corporate groups',
      descripcion: 'Transportation for work teams, executives or delegations to business meetings and events. Invoices can be issued to your company’s legal name.',
    },
    {
      icono: 'plane',
      titulo: 'Sports teams',
      descripcion: 'Coordinated flights for players, coaching staff and support personnel. Handling of special baggage (sports equipment) is included.',
    },
    {
      icono: 'ticket',
      titulo: 'Leisure and family groups',
      descripcion: 'Family reunions, weddings, quinceañeras or excursions. We organize the logistics so your group flies together and on time.',
    },
    {
      icono: 'shield',
      titulo: 'Academic groups',
      descripcion: 'School trips, university delegations and research groups. We coordinate with group leaders and handle the documentation required for minors.',
    },
  ],
  beneficios: [
    'Seats assigned together on the same flight.',
    'Direct coordination with an Aerus agent throughout the entire process.',
    'Option to invoice under a company or organization name.',
    'Handling of the group’s special requirements (dietary needs, mobility, minors).',
    'Flexible date changes with at least 72 hours’ notice.',
    'Exclusive (charter) flight option for groups that need more privacy or custom logistics.',
  ],
  pasos: [
    {
      titulo: 'Tell us about your group',
      descripcion: 'Send us the number of passengers, origin, destination, tentative date(s) and type of group. The more details you share, the more accurate your proposal will be.',
    },
    {
      titulo: 'Get your proposal within 24 hours',
      descripcion: 'Our team checks availability and sends you a flight proposal with group fares, date options and payment terms.',
    },
    {
      titulo: 'Confirm and manage your passengers',
      descripcion: 'Once you confirm, we’ll ask for the passenger list with full names and ID. Payment can be made as a single block or per passenger, as agreed.',
    },
    {
      titulo: 'On the day of the flight, we’ll be waiting',
      descripcion: 'We assign an airport agent to welcome your group, speed up check-in and coordinate boarding. Your group travels together, hassle-free.',
    },
  ],
  relacionados: [
    { label: 'On Demand — charter', href: '/on-demand/charter/' },
    { label: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Contact Aerus', href: '/ayuda/contacto/' },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/grupos'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function GruposPage({ params }: PageProps<'/[lang]/experiencia/grupos'>) {
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
              {t.heroTitlePre}<span className="accent">{t.heroTitleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.heroIntro}
            </p>
          </div>
        </section>

        <section className="exp-body">
          <div className="container">
            <div className="docs-layout">

              <div>
                {/* Tipos de grupo */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.tiposSubtitulo}</p>
                      <h2 className="docs-h2">{t.tiposTitle}</h2>
                    </div>
                  </div>
                  <div className="exp-grupos-tipos-grid">
                    {t.tipos.map((tipo) => (
                      <div key={tipo.titulo} className="exp-grupos-tipo-card">
                        <div className="exp-grupos-tipo-icon">
                          <Icon name={tipo.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="exp-grupos-tipo-titulo">{tipo.titulo}</p>
                        <p className="exp-grupos-tipo-desc">{tipo.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header" style={{ marginBottom: 20 }}>
                    <div className="docs-section-icon">
                      <Icon name="check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.beneficiosSubtitulo}</p>
                      <h2 className="docs-h2">{t.beneficiosTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.beneficios.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>

                {/* Proceso */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.pasosTitle}</h2>
                  <ol className="fact-steps">
                    {t.pasos.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-title">{paso.titulo}</p>
                          <p className="fact-step-desc">{paso.descripcion}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <a
                    href="mailto:grupos@aerus.mx"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaButton}
                  </a>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitle}</p>
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
