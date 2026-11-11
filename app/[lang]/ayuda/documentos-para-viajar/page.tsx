import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/documentos-para-viajar/'

type Seccion = {
  icono: string
  titulo: string
  subtitulo: string
  items: string[]
  nota?: string
}

const SECCIONES: Record<Lang, Seccion[]> = {
  es: [
    {
      icono: 'shield',
      titulo: 'Vuelos nacionales',
      subtitulo: 'Dentro de México',
      items: [
        'Identificación oficial vigente con fotografía: credencial del INE/IFE, pasaporte mexicano o cédula profesional.',
        'Los documentos deben estar en buen estado: legibles, sin perforaciones, tachaduras ni deterioro excesivo.',
        'Para menores de edad: acta de nacimiento o cualquier documento oficial que acredite su identidad y edad.',
      ],
      nota: 'La aerolínea puede negar el abordaje si la identificación está vencida, deteriorada o no coincide con los datos del boleto.',
    },
    {
      icono: 'globe',
      titulo: 'Vuelos internacionales',
      subtitulo: 'Hacia Estados Unidos y otros destinos',
      items: [
        'Pasaporte vigente mexicano o del país de residencia. Se recomienda al menos 6 meses de vigencia restante.',
        'Visa americana (B1/B2) vigente para ingresar a Texas (McAllen, Brownsville). Verifica si eres elegible para el programa de exención de visa (ESTA).',
        'En caso de tener doble nacionalidad, verifica con la embajada cuál pasaporte debes presentar.',
        'Revisa los requisitos específicos del país de destino con anticipación en el portal de la embajada correspondiente.',
      ],
      nota: 'Los requisitos migratorios pueden cambiar. Aerus recomienda verificar la información oficial antes de viajar.',
    },
    {
      icono: 'users',
      titulo: 'Menores de edad',
      subtitulo: 'Niños y adolescentes',
      items: [
        'Viajando con ambos padres o tutores legales: documento de identidad vigente del menor (acta de nacimiento, CURP o pasaporte).',
        'Viajando con uno de los padres: carta responsiva notariada o apostillada del padre o madre ausente que autorice el viaje.',
        'Viajando solos: permiso notariado de ambos padres, identificación del menor y datos de contacto de quien los recibirá en el destino.',
        'Menores bajo tutela legal: presentar documento oficial que acredite la guarda y custodia.',
      ],
      nota: 'Contáctanos con al menos 72 horas de anticipación si un menor viajará solo o con uno de sus tutores, para confirmar la documentación exacta requerida.',
    },
    {
      icono: 'check',
      titulo: 'Recomendaciones generales',
      subtitulo: 'Para todos los viajeros',
      items: [
        'Verifica la vigencia de tus documentos al menos una semana antes del viaje.',
        'Ten tus documentos listos y accesibles al llegar al aeropuerto para agilizar el proceso de check-in.',
        'Guarda copias digitales de tus documentos en tu correo electrónico o en la nube como respaldo.',
        'Si vas a viajar al extranjero, infórmate sobre las regulaciones de aduana del país de destino para evitar inconvenientes.',
      ],
    },
  ],
  en: [
    {
      icono: 'shield',
      titulo: 'Domestic flights',
      subtitulo: 'Within Mexico',
      items: [
        'Valid government-issued photo ID: INE/IFE voter ID card, Mexican passport or cédula profesional (Mexican professional license).',
        'Documents must be in good condition: legible, with no holes, markings or excessive wear.',
        'For minors: birth certificate or any official document that proves their identity and age.',
      ],
      nota: 'The airline may deny boarding if your ID is expired, damaged or does not match the information on your ticket.',
    },
    {
      icono: 'globe',
      titulo: 'International flights',
      subtitulo: 'To the United States and other destinations',
      items: [
        'Valid Mexican passport or passport from your country of residence. We recommend at least 6 months of remaining validity.',
        'Valid U.S. visa (B1/B2) to enter Texas (McAllen, Brownsville). Check whether you are eligible for the Visa Waiver Program (ESTA).',
        'If you hold dual citizenship, check with the embassy which passport you should present.',
        'Review your destination country’s specific requirements well in advance on the relevant embassy’s website.',
      ],
      nota: 'Immigration requirements may change. Aerus recommends checking official sources before you travel.',
    },
    {
      icono: 'users',
      titulo: 'Minors',
      subtitulo: 'Children and teens',
      items: [
        'Traveling with both parents or legal guardians: the minor’s valid ID (birth certificate, CURP or passport).',
        'Traveling with one parent: a notarized or apostilled letter of consent from the absent parent authorizing the trip.',
        'Traveling alone: notarized permission from both parents, the minor’s ID, and contact details for the person who will pick them up at the destination.',
        'Minors under legal guardianship: an official document proving guardianship and custody.',
      ],
      nota: 'Contact us at least 72 hours in advance if a minor will travel alone or with only one guardian, so we can confirm the exact documentation required.',
    },
    {
      icono: 'check',
      titulo: 'General recommendations',
      subtitulo: 'For all travelers',
      items: [
        'Check that your documents are valid at least one week before your trip.',
        'Keep your documents ready and easy to reach when you arrive at the airport to speed up check-in.',
        'Save digital copies of your documents in your email or in the cloud as a backup.',
        'If you are traveling abroad, read up on your destination country’s customs regulations to avoid any issues.',
      ],
    },
  ],
}

const RELACIONADOS: Record<Lang, { label: string; href: string }[]> = {
  es: [
    { label: 'Preguntas frecuentes', href: '/ayuda/faq/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Viajar con mascota', href: '/ayuda/viajar-con-mascota/' },
  ],
  en: [
    { label: 'Frequently asked questions', href: '/ayuda/faq/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Airport arrival times', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Special assistance', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Traveling with pets', href: '/ayuda/viajar-con-mascota/' },
  ],
}

const es = {
  metaTitle: 'Documentos para viajar | Aerus',
  metaDescription:
    'Conoce qué documentos necesitas para volar con Aerus: identificaciones válidas, requisitos para vuelos internacionales y permisos para menores de edad.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Documentos para viajar',
  eyebrow: 'Ayuda',
  titleA: 'Documentos para',
  titleB: 'viajar',
  intro: 'Todo lo que necesitas saber sobre identificaciones, visas y permisos para volar con Aerus.',
  sidebarTitle: 'Más en Ayuda',
  sidebarCta: '¿Tienes una pregunta específica sobre tu documentación?',
  contactCta: 'Contactar a Aerus',
}

const en: typeof es = {
  metaTitle: 'Travel Documents | Aerus',
  metaDescription:
    'Find out which documents you need to fly with Aerus: valid IDs, requirements for international flights and travel permits for minors.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Travel documents',
  eyebrow: 'Help',
  titleA: 'Travel',
  titleB: 'documents',
  intro: 'Everything you need to know about IDs, visas and permits to fly with Aerus.',
  sidebarTitle: 'More in Help',
  sidebarCta: 'Have a specific question about your documents?',
  contactCta: 'Contact Aerus',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/documentos-para-viajar'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

export default async function DocumentosPage({ params }: PageProps<'/[lang]/ayuda/documentos-para-viajar'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="docs-hero">
          <div className="container docs-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{t.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.current}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="section-pad docs-body">
          <div className="container">
            <div className="docs-layout">
              <div className="docs-content">
                {SECCIONES[lang].map((sec, i) => (
                  <div key={i} className="docs-section">
                    <div className="docs-section-header">
                      <div className="docs-section-icon">
                        <Icon name={sec.icono} size={20} stroke={1.5} />
                      </div>
                      <div>
                        <p className="docs-subtitulo">{sec.subtitulo}</p>
                        <h2 className="docs-h2">{sec.titulo}</h2>
                      </div>
                    </div>
                    <ul className="docs-list">
                      {sec.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    {sec.nota && (
                      <div className="docs-callout">
                        <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                        <p>{sec.nota}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <h3 className="docs-sidebar-title">{t.sidebarTitle}</h3>
                  <ul className="docs-related-list">
                    {RELACIONADOS[lang].map(r => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="docs-sidebar-cta">
                    <p className="docs-sidebar-cta-text">
                      {t.sidebarCta}
                    </p>
                    <Link href={lp(lang, '/ayuda/contacto/')} className="btn btn-primary docs-sidebar-btn">
                      {t.contactCta}
                    </Link>
                  </div>
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
