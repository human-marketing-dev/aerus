import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/nosotros/'

const T = {
  es: {
    metaTitle: 'Nosotros | Aerus',
    metaDescription:
      'Aerus conecta el México regional. Conoce nuestra historia, misión y lo que nos hace diferentes: rutas directas, flota propia y mantenimiento aeronáutico certificado.',
    heroEyebrow: 'La aerolínea',
    heroHeadline: (
      <>
        Conectamos el México<br />
        que las grandes<br />
        <em>no alcanzan</em>
      </>
    ),
    heroIntro:
      'Aerus es la aerolínea regional de México. Operamos rutas directas a destinos que el mercado masivo ignora, con aeronaves turbohélice diseñadas para llegar donde otros no llegan.',
    heroRule: 'Aerolínea regional · Aviación de turbohélice · México',
    missionLabel: 'Nuestra misión',
    missionQuote: (
      <>
        &quot;Volar no debería ser un privilegio de las{' '}
        <em>ciudades grandes.</em>&quot;
      </>
    ),
    stats: [
      { num: '7',    suffix: '',  label: 'Rutas directas activas' },
      { num: '10',   suffix: '+', label: 'Destinos conectados' },
      { num: '9',    suffix: '',  label: 'Pasajeros por vuelo' },
      { num: 'DGAC', suffix: '',  label: 'Centro de mantenimiento certificado' },
    ],
    historiaEyebrow: 'Nuestra historia',
    historiaTitulo: 'Una aerolínea construida para el México que se mueve entre regiones',
    historiaBody: [
      'Aerus nació con una premisa clara: las rutas regionales de México merecen una aerolínea que las tome en serio. Las grandes líneas concentran sus operaciones en los aeropuertos internacionales, dejando a millones de mexicanos atrapados en conexiones largas o carreteras de horas para cubrir distancias que el avión resuelve en cuarenta minutos.',
      'Elegimos el Cessna Grand Caravan EX — una aeronave turbohélice diseñada exactamente para este tipo de operación: pistas cortas, aeropuertos regionales, rutas directas sin hubear por el centro del país. Nuestros pilotos conocen cada tramo. Nuestro centro de mantenimiento en tierra cuida cada motor y cada hélice.',
      'No somos una aerolínea de bajo costo que recortó servicio. Somos una aerolínea regional que decidió operar bien en el espacio donde los grandes no quieren competir.',
    ],
    pullquote: (
      <>
        No somos más pequeños,<br />
        somos más<br />
        <em>específicos.</em>
      </>
    ),
    pullattr: 'Aerus — Aviación regional',
    valoresTitulo: 'Lo que nos define',
    valores: [
      {
        num: '01',
        titulo: 'Rutas que',
        acento: 'importan',
        desc: 'Servimos conexiones que las grandes líneas ignoran. Cada ruta Aerus une dos puntos que el mercado masivo dejó sin solución directa — y las operamos con la misma disciplina que las mejores aerolíneas del mundo.',
      },
      {
        num: '02',
        titulo: 'Taller',
        acento: 'propio',
        desc: 'Operamos y mantenemos nuestras propias aeronaves. Centro MRO aprobado por la DGAC, autorizado por Pratt & Whitney Canada. No subcontratamos lo que determina la seguridad de cada vuelo.',
      },
      {
        num: '03',
        titulo: 'Escala',
        acento: 'humana',
        desc: 'Máximo 12 pasajeros por vuelo. El equipo te conoce, hay alguien en tierra antes de que llegues, el check-in dura minutos. La aviación regional debería sentirse así de personal.',
      },
    ],
    flotaLabel: 'La flota',
    flotaSpecs: 'Motor PT6A-114A · 675 SHP · 12 pasajeros · 185 kts · 25,000 ft',
    flotaLink: 'Ver especificaciones',
    ctaEyebrow: 'Vuela con nosotros',
    ctaTitulo: '¿Listo para el primer vuelo?',
    ctaReservar: 'Reservar vuelo',
    ctaRutas: 'Ver rutas',
  },
  en: {
    metaTitle: 'About Us | Aerus',
    metaDescription:
      'Aerus connects regional Mexico. Learn about our story, our mission and what sets us apart: direct routes, our own fleet and certified aircraft maintenance.',
    heroEyebrow: 'The airline',
    heroHeadline: (
      <>
        We connect the Mexico<br />
        the big airlines<br />
        <em>don’t reach</em>
      </>
    ),
    heroIntro:
      'Aerus is Mexico’s regional airline. We fly direct routes to destinations the mass market overlooks, with turboprop aircraft designed to go where others don’t.',
    heroRule: 'Regional airline · Turboprop aviation · Mexico',
    missionLabel: 'Our mission',
    missionQuote: (
      <>
        &quot;Flying shouldn’t be a privilege reserved for{' '}
        <em>big cities.</em>&quot;
      </>
    ),
    stats: [
      { num: '7',    suffix: '',  label: 'Active direct routes' },
      { num: '10',   suffix: '+', label: 'Destinations connected' },
      { num: '9',    suffix: '',  label: 'Passengers per flight' },
      { num: 'DGAC', suffix: '',  label: 'Certified maintenance center' },
    ],
    historiaEyebrow: 'Our story',
    historiaTitulo: 'An airline built for a Mexico that travels between regions',
    historiaBody: [
      'Aerus was founded on a clear premise: Mexico’s regional routes deserve an airline that takes them seriously. The big carriers concentrate their operations at international airports, leaving millions of Mexicans stuck with long connections or hours-long drives to cover distances a plane can fly in forty minutes.',
      'We chose the Cessna Grand Caravan EX — a turboprop aircraft designed for exactly this kind of operation: short runways, regional airports and direct routes with no hub connection through central Mexico. Our pilots know every leg. Our ground maintenance center looks after every engine and every propeller.',
      'We are not a low-cost airline that cut back on service. We are a regional airline that chose to operate well in the space where the big players don’t want to compete.',
    ],
    pullquote: (
      <>
        We’re not smaller,<br />
        we’re more<br />
        <em>focused.</em>
      </>
    ),
    pullattr: 'Aerus — Regional aviation',
    valoresTitulo: 'What defines us',
    valores: [
      {
        num: '01',
        titulo: 'Routes that',
        acento: 'matter',
        desc: 'We serve connections the big airlines ignore. Every Aerus route links two points the mass market left without a direct option — and we operate them with the same discipline as the world’s best airlines.',
      },
      {
        num: '02',
        titulo: 'In-house',
        acento: 'maintenance',
        desc: 'We operate and maintain our own aircraft. Our MRO center is approved by the DGAC and authorized by Pratt & Whitney Canada. We don’t outsource what determines the safety of every flight.',
      },
      {
        num: '03',
        titulo: 'Human',
        acento: 'scale',
        desc: 'A maximum of 12 passengers per flight. The crew knows you, someone is on the ground before you arrive, and check-in takes minutes. Regional aviation should feel this personal.',
      },
    ],
    flotaLabel: 'The fleet',
    flotaSpecs: 'PT6A-114A engine · 675 SHP · 12 passengers · 185 kts · 25,000 ft',
    flotaLink: 'View specifications',
    ctaEyebrow: 'Fly with us',
    ctaTitulo: 'Ready for your first flight?',
    ctaReservar: 'Book a flight',
    ctaRutas: 'See routes',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/nosotros'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function NosotrosPage({ params }: PageProps<'/[lang]/nosotros'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* ── Hero ── */}
        <section className="nos-hero">
          <div className="nos-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.heroEyebrow}</div>
            <h1 className="nos-hero-headline">
              {t.heroHeadline}
            </h1>
            <p className="nos-hero-intro">
              {t.heroIntro}
            </p>
            <div className="nos-hero-rule">
              <span className="nos-hero-rule-line" />
              <span className="nos-hero-rule-text">{t.heroRule}</span>
            </div>
          </div>
        </section>

        {/* ── Declaración ── */}
        <section className="nos-declaracion">
          <div className="nos-declaracion-inner">
            <p className="nos-declaracion-label">{t.missionLabel}</p>
            <blockquote className="nos-declaracion-quote">
              {t.missionQuote}
            </blockquote>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="nos-stats">
          <div className="nos-stats-grid">
            {t.stats.map((s) => (
              <div key={s.label} className="nos-stat">
                <div className="nos-stat-num">
                  {s.num}<span>{s.suffix}</span>
                </div>
                <p className="nos-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Historia ── */}
        <section className="nos-historia">
          <div className="nos-historia-inner">
            <div className="nos-historia-texto">
              <p className="nos-historia-eyebrow">{t.historiaEyebrow}</p>
              <h2 className="nos-historia-titulo">
                {t.historiaTitulo}
              </h2>
              <div className="nos-historia-body">
                {t.historiaBody.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <aside className="nos-historia-aside">
              <blockquote className="nos-historia-pullquote">
                {t.pullquote}
              </blockquote>
              <p className="nos-historia-pullattr">{t.pullattr}</p>
            </aside>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="nos-valores">
          <div className="nos-valores-inner">
            <div className="nos-valores-header">
              <p className="nos-valores-titulo">{t.valoresTitulo}</p>
            </div>
            <div className="nos-valores-grid">
              {t.valores.map((v) => (
                <div key={v.num} className="nos-valor">
                  <span className="nos-valor-num" aria-hidden="true">{v.num}</span>
                  <p className="nos-valor-titulo">
                    {v.titulo}{' '}
                    <span className="nos-valor-titulo-accent">{v.acento}</span>
                  </p>
                  <p className="nos-valor-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Flota ── */}
        <section className="nos-flota-strip">
          <div className="nos-flota-inner">
            <div className="nos-flota-text">
              <p className="nos-flota-label">{t.flotaLabel}</p>
              <p className="nos-flota-nombre">Cessna Grand Caravan EX</p>
              <p className="nos-flota-specs">
                {t.flotaSpecs}
              </p>
            </div>
            <Link href={lp(lang, '/experiencia/flota/')} className="nos-flota-link">
              {t.flotaLink} <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="nos-cta">
          <div className="nos-cta-inner">
            <div className="nos-cta-texto">
              <p className="nos-cta-eyebrow">{t.ctaEyebrow}</p>
              <p className="nos-cta-titulo">{t.ctaTitulo}</p>
            </div>
            <div className="nos-cta-actions">
              <Link href={lp(lang, '/reservar/')} className="btn btn-inverse">
                {t.ctaReservar}
              </Link>
              <Link href={lp(lang, '/rutas/')} className="btn btn-outline">
                {t.ctaRutas}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
