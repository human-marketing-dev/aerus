import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/on-demand/'

const es = {
  metaTitle: 'On Demand | Aerus',
  metaDescription:
    'Soluciones de vuelo para empresas. Aerus Charter para grupos y eventos, Aerus Flight Pass para viajeros frecuentes y cuentas corporativas para equipos que vuelan de forma recurrente.',
  eyebrow: 'Para empresas',
  titleA: 'Vuelos corporativos ',
  titleAccent: 'sin tiempos muertos',
  intro:
    'Aerus ofrece soluciones de aviación para empresas que necesitan moverse con eficiencia en las rutas regionales de México. Charter, pases de vuelo y cuentas corporativas — adaptados a cómo opera tu empresa.',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Aerus Charter',
      desc: 'Avión exclusivo para tu grupo o evento. Tú defines el destino, la fecha y el horario. Hasta 12 pasajeros por vuelo.',
      href: '/on-demand/charter/',
      cta: 'Conocer charter',
    },
    {
      icono: 'ticket',
      titulo: 'Aerus Flight Pass',
      desc: 'Bloque de vuelos prepagados para empleados que viajan en rutas Aerus con frecuencia. Precio fijo, factura a la empresa.',
      href: '/on-demand/flight-pass/',
      cta: 'Conocer Flight Pass',
    },
    {
      icono: 'users',
      titulo: 'Cuenta empresarial',
      desc: 'Acuerdo de servicio continuo para empresas con necesidades de viaje recurrente. Gestor de cuenta dedicado, facturación mensual y reporte de viajes.',
      href: '/on-demand/empresas/',
      cta: 'Ver solución empresarial',
    },
  ],
  ventajasTitulo: 'Por qué las empresas eligen Aerus',
  ventajas: [
    { icono: 'clock',   texto: 'Check-in en minutos, no en horas' },
    { icono: 'plane',   texto: 'Vuelos directos sin conexiones' },
    { icono: 'shield',  texto: 'Flota propia con mantenimiento certificado DGAC' },
    { icono: 'users',   texto: 'Cabina privada de hasta 12 pasajeros' },
    { icono: 'mail',    texto: 'Facturación directa a razón social' },
    { icono: 'support', texto: 'Atención personalizada antes y durante el vuelo' },
  ],
  ctaEyebrow: '¿Listo para empezar?',
  ctaTitulo: 'Hablemos de tu necesidad de vuelo',
  ctaCharter: 'Solicitar cotización charter',
  ctaContacto: 'Contactar Aerus',
}

const en: typeof es = {
  metaTitle: 'On Demand | Aerus',
  metaDescription:
    'Flight solutions for businesses. Aerus Charter for groups and events, Aerus Flight Pass for frequent travelers, and corporate accounts for teams that fly on a regular basis.',
  eyebrow: 'For business',
  titleA: 'Corporate travel ',
  titleAccent: 'without the downtime',
  intro:
    'Aerus offers aviation solutions for companies that need to move efficiently across Mexico’s regional routes. Charter flights, flight passes and corporate accounts — tailored to the way your business operates.',
  servicios: [
    {
      icono: 'plane',
      titulo: 'Aerus Charter',
      desc: 'A private aircraft for your group or event. You choose the destination, date and time. Up to 12 passengers per flight.',
      href: '/on-demand/charter/',
      cta: 'Explore charter',
    },
    {
      icono: 'ticket',
      titulo: 'Aerus Flight Pass',
      desc: 'A block of prepaid flights for employees who travel Aerus routes frequently. Fixed pricing, invoiced to your company.',
      href: '/on-demand/flight-pass/',
      cta: 'Explore Flight Pass',
    },
    {
      icono: 'users',
      titulo: 'Business account',
      desc: 'An ongoing service agreement for companies with recurring travel needs. Dedicated account manager, monthly invoicing and travel reporting.',
      href: '/on-demand/empresas/',
      cta: 'See business solutions',
    },
  ],
  ventajasTitulo: 'Why companies choose Aerus',
  ventajas: [
    { icono: 'clock',   texto: 'Check-in in minutes, not hours' },
    { icono: 'plane',   texto: 'Nonstop flights, no connections' },
    { icono: 'shield',  texto: 'Our own fleet with DGAC-certified maintenance' },
    { icono: 'users',   texto: 'Private cabin for up to 12 passengers' },
    { icono: 'mail',    texto: 'Invoicing issued directly to your legal entity' },
    { icono: 'support', texto: 'Personalized service before and during your flight' },
  ],
  ctaEyebrow: 'Ready to get started?',
  ctaTitulo: 'Let’s talk about your travel needs',
  ctaCharter: 'Request a charter quote',
  ctaContacto: 'Contact Aerus',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function OnDemandPage({ params }: PageProps<'/[lang]/on-demand'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        {/* Hero */}
        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="corp-servicios-section">
          <div className="container">
            <div className="corp-servicios-grid">
              {t.servicios.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="corp-servicio-card">
                  <div className="corp-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="corp-servicio-titulo">{s.titulo}</p>
                  <p className="corp-servicio-desc">{s.desc}</p>
                  <span className="corp-servicio-arr">
                    {s.cta} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas strip */}
        <section className="corp-ventajas-section">
          <div className="container corp-ventajas-inner">
            <p className="corp-ventajas-titulo">{t.ventajasTitulo}</p>
            <div className="corp-ventajas-grid">
              {t.ventajas.map((v) => (
                <div key={v.texto} className="corp-ventaja-item">
                  <Icon name={v.icono} size={16} stroke={1.5} className="corp-ventaja-icon" />
                  <span className="corp-ventaja-texto">{v.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="corp-cta-section">
          <div className="container corp-cta-inner">
            <div>
              <p className="corp-cta-eyebrow">{t.ctaEyebrow}</p>
              <p className="corp-cta-titulo">{t.ctaTitulo}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href={lp(lang, '/on-demand/charter/cotizar/')} className="btn btn-primary">
                {t.ctaCharter}
              </Link>
              <Link href={lp(lang, '/ayuda/contacto/')} className="btn btn-on-dark">
                {t.ctaContacto}
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
