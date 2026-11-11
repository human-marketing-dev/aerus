import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Pagos from '@/components/Pagos'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/experiencia/'

type Paso = { num: string; titulo: string; desc: string }
type ServicioAdicional = { icono: string; titulo: string; desc: string; href: string }
type Servicio = { icono: string; titulo: string; descripcion: string; href: string }

const es = {
  metaTitle: 'Experiencia Aerus | Aerus',
  metaDescription:
    'Volar con Aerus es diferente. Espera minutos, no horas. Conoce nuestra flota, asistencia de viaje, seguro de cancelación y opciones para grupos.',
  heroEyebrow: 'Volar diferente',
  heroTitlePre: 'La experiencia ',
  heroTitlePost: '',
  heroIntro:
    'Las aerolíneas grandes te hacen esperar. Nosotros no. Descubre qué hace diferente volar con Aerus en cada etapa de tu viaje.',
  conocerMas: 'Conocer más',
  procesosEyebrow: 'Sin filas, sin esperas',
  procesosTitle: 'Del carro a la pista ',
  procesosTitleEm: 'en minutos',
  procesosCta: 'Ver el proceso completo',
  adicionalesEyebrow: 'Más que un vuelo',
  adicionalesTitle: 'Servicios adicionales',
  saberMas: 'Saber más',
  pasos: [
    {
      num: '01',
      titulo: 'Llega 45 minutos antes',
      desc: 'Olvídate de las 2 horas de anticipación. En terminales regionales el proceso es más ágil y tú llegas más descansado.',
    },
    {
      num: '02',
      titulo: 'Check-in express',
      desc: 'Mostrador dedicado, sin filas interminables. En minutos tienes tu pase de abordar y tu equipaje despachado.',
    },
    {
      num: '03',
      titulo: 'Abordaje directo',
      desc: 'Caminatas cortas hasta la aeronave. Sin autobuses, sin pasillos infinitos. Subes directo desde la terminal.',
    },
    {
      num: '04',
      titulo: 'Despegue puntual',
      desc: 'Operamos en aeropuertos con menos tráfico aéreo. Menos congestión, más puntualidad en cada vuelo.',
    },
  ] as Paso[],
  serviciosAdicionales: [
    {
      icono: 'shield',
      titulo: 'Seguro de cancelación',
      desc: 'Protege tu inversión ante imprevistos. Agrega el seguro al reservar y recupera el valor de tu boleto si necesitas cancelar.',
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'support',
      titulo: 'Asistencia de viaje 24/7',
      desc: 'Atención personalizada en todo momento. Si algo cambia, hay alguien disponible para ayudarte a resolverlo.',
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'users',
      titulo: 'Vuelos para grupos',
      desc: 'Familias, equipos corporativos o grupos de turismo. Coordinamos toda la logística desde la reservación.',
      href: '/experiencia/grupos/',
    },
    {
      icono: 'plane',
      titulo: 'Vuelo chárter privado',
      desc: 'Toda la aeronave para ti. Define la ruta, el horario y los pasajeros. Ideal para empresas y eventos especiales.',
      href: '/on-demand/charter/',
    },
  ] as ServicioAdicional[],
  servicios: [
    {
      icono: 'clock',
      titulo: 'Espera minutos, no horas',
      descripcion: 'Terminales regionales con menos filas y más tiempo para ti. Check-in rápido, abordaje directo, sin colas de una hora.',
      href: '/experiencia/proceso-agil/',
    },
    {
      icono: 'plane',
      titulo: 'La flota',
      descripcion: 'Turbohélices Cessna Grand Caravan EX. Cómodos, confiables y perfectos para las rutas regionales de México.',
      href: '/experiencia/flota/',
    },
    {
      icono: 'support',
      titulo: 'Asistencia de viaje',
      descripcion: 'Seguimiento de tu vuelo, atención personalizada y soporte en caso de cambios o imprevistos. Siempre hay alguien para ayudarte.',
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'shield',
      titulo: 'Seguro de cancelación',
      descripcion: 'Protege tu viaje contra imprevistos. Agrega el seguro al reservar y viaja tranquilo sabiendo que tienes respaldo.',
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'users',
      titulo: 'Vuelos para grupos',
      descripcion: 'Equipos, empresas o familias numerosas. Coordinamos la logística de tu grupo desde la reservación hasta el aterrizaje.',
      href: '/experiencia/grupos/',
    },
  ] as Servicio[],
}

const en: typeof es = {
  metaTitle: 'The Aerus Experience | Aerus',
  metaDescription:
    'Flying with Aerus is different. Wait minutes, not hours. Discover our fleet, travel assistance, cancellation insurance and group travel options.',
  heroEyebrow: 'A different way to fly',
  heroTitlePre: 'The ',
  heroTitlePost: ' experience',
  heroIntro:
    "Big airlines keep you waiting. We don't. Discover what makes flying with Aerus different at every stage of your trip.",
  conocerMas: 'Learn more',
  procesosEyebrow: 'No lines, no waiting',
  procesosTitle: 'From curb to runway ',
  procesosTitleEm: 'in minutes',
  procesosCta: 'See the full process',
  adicionalesEyebrow: 'More than a flight',
  adicionalesTitle: 'Additional services',
  saberMas: 'Learn more',
  pasos: [
    {
      num: '01',
      titulo: 'Arrive 45 minutes early',
      desc: 'Forget arriving 2 hours ahead. Regional terminals move faster, so you arrive more relaxed.',
    },
    {
      num: '02',
      titulo: 'Express check-in',
      desc: 'A dedicated counter with no endless lines. In minutes you have your boarding pass and your bags are checked.',
    },
    {
      num: '03',
      titulo: 'Direct boarding',
      desc: 'A short walk to the aircraft. No shuttle buses, no endless corridors. You board straight from the terminal.',
    },
    {
      num: '04',
      titulo: 'On-time departure',
      desc: 'We operate at airports with less air traffic. Less congestion means better on-time performance on every flight.',
    },
  ],
  serviciosAdicionales: [
    {
      icono: 'shield',
      titulo: 'Cancellation insurance',
      desc: 'Protect your purchase against the unexpected. Add insurance when you book and get your ticket value back if you need to cancel.',
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'support',
      titulo: '24/7 travel assistance',
      desc: 'Personalized support at every moment. If something changes, someone is always available to help you sort it out.',
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'users',
      titulo: 'Group flights',
      desc: 'Families, corporate teams or tour groups. We coordinate all the logistics, starting from your booking.',
      href: '/experiencia/grupos/',
    },
    {
      icono: 'plane',
      titulo: 'Private charter flight',
      desc: 'The entire aircraft is yours. Choose the route, the schedule and the passengers. Ideal for companies and special events.',
      href: '/on-demand/charter/',
    },
  ],
  servicios: [
    {
      icono: 'clock',
      titulo: 'Wait minutes, not hours',
      descripcion: 'Regional terminals with shorter lines and more time for you. Fast check-in, direct boarding, no hour-long queues.',
      href: '/experiencia/proceso-agil/',
    },
    {
      icono: 'plane',
      titulo: 'The fleet',
      descripcion: 'Cessna Grand Caravan EX turboprops. Comfortable, reliable and perfect for regional routes across Mexico.',
      href: '/experiencia/flota/',
    },
    {
      icono: 'support',
      titulo: 'Travel assistance',
      descripcion: "Flight tracking, personalized service and support if plans change or something unexpected happens. There's always someone to help.",
      href: '/experiencia/asistencia-de-viaje/',
    },
    {
      icono: 'shield',
      titulo: 'Cancellation insurance',
      descripcion: "Protect your trip against the unexpected. Add insurance when you book and travel with peace of mind knowing you're covered.",
      href: '/experiencia/seguro-de-cancelacion/',
    },
    {
      icono: 'users',
      titulo: 'Group flights',
      descripcion: 'Teams, companies or large families. We coordinate your group’s logistics from booking to landing.',
      href: '/experiencia/grupos/',
    },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function ExperienciaPage({ params }: PageProps<'/[lang]/experiencia'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.heroTitlePre}<span className="accent">Aerus</span>{t.heroTitlePost}
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.heroIntro}
            </p>
          </div>
        </section>

        <section className="exp-servicios-section">
          <div className="container">
            <div className="exp-servicios-grid">
              {t.servicios.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="exp-servicio-card">
                  <div className="exp-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="exp-servicio-titulo">{s.titulo}</p>
                  <p className="exp-servicio-desc">{s.descripcion}</p>
                  <span className="exp-servicio-arr" aria-hidden="true">
                    {t.conocerMas} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Procesos eficientes ── */}
        <section className="exp-procesos-section">
          <div className="container">
            <div className="exp-procesos-header">
              <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.procesosEyebrow}</div>
              <h2 className="section-headline" style={{ color: 'var(--aerus-white)', margin: '12px 0 0' }}>
                {t.procesosTitle}<em>{t.procesosTitleEm}</em>
              </h2>
            </div>
            <div className="exp-procesos-pasos-grid">
              {t.pasos.map((p) => (
                <div key={p.num} className="exp-paso">
                  <span className="exp-paso-num">{p.num}</span>
                  <p className="exp-paso-titulo">{p.titulo}</p>
                  <p className="exp-paso-desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="exp-procesos-cta">
              <Link href={lp(lang, '/experiencia/proceso-agil/')} className="btn btn-on-dark">
                {t.procesosCta} <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Servicios adicionales ── */}
        <section className="exp-adicionales-section">
          <div className="container">
            <div className="exp-adicionales-header">
              <div className="eyebrow">{t.adicionalesEyebrow}</div>
              <h2 className="section-headline" style={{ margin: '12px 0 0' }}>{t.adicionalesTitle}</h2>
            </div>
            <div className="exp-adicionales-grid">
              {t.serviciosAdicionales.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="exp-adicional-card">
                  <div className="exp-adicional-icon">
                    <Icon name={s.icono} size={20} stroke={1.5} />
                  </div>
                  <p className="exp-adicional-titulo">{s.titulo}</p>
                  <p className="exp-adicional-desc">{s.desc}</p>
                  <span className="exp-adicional-arr">
                    {t.saberMas} <Icon name="arrow-right" size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Métodos de pago ── */}
        <Pagos lang={lang} />

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
