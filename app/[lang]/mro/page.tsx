import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/mro/'

type Servicio = { icono: string; titulo: string; descripcion: string; href: string }

const es = {
  metaTitle: 'MRO — Mantenimiento aeronáutico | Aerus',
  metaDescription:
    'Centro de mantenimiento aeronáutico Aerus. Especialistas en motores PT6A, hélices McCauley y Hartzell, aviónica y accesorios de aeronaves turbohélice. Aprobado DGAC.',
  titlePre: 'Mantenimiento ',
  titleAccent: 'aeronáutico',
  intro:
    'Centro autorizado DGAC especializado en aeronaves turbohélice. Motores PT6A, hélices, aviónica y sistemas completos — mantenemos lo que vuela.',
  verMas: 'Ver más',
  credsLabel: 'Aprobaciones',
  creds: [
    '✦ DGAC AMO Aprobado',
    '✦ Pratt & Whitney Canada Authorized',
    '✦ Hartzell Propeller Certified',
    '✦ McCauley Service Center',
  ],
  servicios: [
    {
      icono: 'shield',
      titulo: 'Capacidades y certificaciones',
      descripcion: 'Nuestras aprobaciones DGAC, tipos de aeronave admitidos y el alcance completo de nuestro taller.',
      href: '/mro/capacidades/',
    },
    {
      icono: 'plane',
      titulo: 'Motores PT6A',
      descripcion: 'Inspección, mantenimiento y overhaul de motores Pratt & Whitney Canada serie PT6A.',
      href: '/mro/motores-pt6a/',
    },
    {
      icono: 'swap',
      titulo: 'Hélices',
      descripcion: 'Balanceo, inspección y overhaul de hélices McCauley y Hartzell.',
      href: '/mro/helices/',
    },
    {
      icono: 'check',
      titulo: 'Accesorios y planeadores',
      descripcion: 'Mantenimiento de accesorios de aeronave y servicio especializado en planeadores Cessna.',
      href: '/mro/accesorios-planeadores/',
    },
    {
      icono: 'wifi',
      titulo: 'Radios e instrumentos',
      descripcion: 'Aviónica, radios, GPS y mantenimiento de instrumentos de vuelo.',
      href: '/mro/radios-instrumentos/',
    },
    {
      icono: 'mail',
      titulo: 'Solicitar cotización',
      descripcion: 'Cuéntanos tu necesidad de mantenimiento y te preparamos una propuesta en 24 horas.',
      href: '/mro/cotizacion/',
    },
  ] as Servicio[],
}

const en: typeof es = {
  metaTitle: 'MRO — Aircraft Maintenance | Aerus',
  metaDescription:
    'Aerus aircraft maintenance center. Specialists in PT6A engines, McCauley and Hartzell propellers, avionics and turboprop aircraft accessories. DGAC approved.',
  titlePre: 'Aircraft ',
  titleAccent: 'maintenance',
  intro:
    'A DGAC-approved repair station specializing in turboprop aircraft. PT6A engines, propellers, avionics and complete systems — we maintain what flies.',
  verMas: 'Learn more',
  credsLabel: 'Approvals',
  creds: [
    '✦ DGAC Approved AMO',
    '✦ Pratt & Whitney Canada Authorized',
    '✦ Hartzell Propeller Certified',
    '✦ McCauley Service Center',
  ],
  servicios: [
    {
      icono: 'shield',
      titulo: 'Capabilities & certifications',
      descripcion: 'Our DGAC approvals, supported aircraft types and the full scope of our shop.',
      href: '/mro/capacidades/',
    },
    {
      icono: 'plane',
      titulo: 'PT6A engines',
      descripcion: 'Inspection, maintenance and overhaul of Pratt & Whitney Canada PT6A-series engines.',
      href: '/mro/motores-pt6a/',
    },
    {
      icono: 'swap',
      titulo: 'Propellers',
      descripcion: 'Balancing, inspection and overhaul of McCauley and Hartzell propellers.',
      href: '/mro/helices/',
    },
    {
      icono: 'check',
      titulo: 'Accessories & gliders',
      descripcion: 'Aircraft accessory maintenance and specialized service for Cessna gliders.',
      href: '/mro/accesorios-planeadores/',
    },
    {
      icono: 'wifi',
      titulo: 'Radios & instruments',
      descripcion: 'Avionics, radios, GPS and flight instrument maintenance.',
      href: '/mro/radios-instrumentos/',
    },
    {
      icono: 'mail',
      titulo: 'Request a quote',
      descripcion: 'Tell us what maintenance you need and we will prepare a proposal within 24 hours.',
      href: '/mro/cotizacion/',
    },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/mro'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function MroPage({ params }: PageProps<'/[lang]/mro'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="mro-hero">
          <div className="container mro-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus MRO</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titlePre}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="mro-servicios-section">
          <div className="container">
            <div className="mro-servicios-grid">
              {t.servicios.map((s) => (
                <Link key={s.href} href={lp(lang, s.href)} className="mro-servicio-card">
                  <div className="mro-servicio-icon">
                    <Icon name={s.icono} size={22} stroke={1.5} />
                  </div>
                  <p className="mro-servicio-titulo">{s.titulo}</p>
                  <p className="mro-servicio-desc">{s.descripcion}</p>
                  <span className="mro-servicio-arr" aria-hidden="true">
                    {t.verMas} <Icon name="arrow-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mro-creds-strip">
          <div className="container mro-creds-inner">
            <span className="mro-creds-label">{t.credsLabel}</span>
            <div className="mro-creds-list">
              {t.creds.map((c) => (
                <span key={c} className="mro-cred-item">{c}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
