import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/experiencia/seguro-de-cancelacion/'

type Pregunta = { pregunta: string; respuesta: string }
type Relacionado = { label: string; href: string }

const es = {
  metaTitle: 'Seguro de cancelación | Aerus',
  metaDescription:
    'Protege tu viaje con el seguro de cancelación Aerus. Cubre imprevistos médicos, emergencias familiares y causas de fuerza mayor. Agrégalo al reservar.',
  breadcrumbLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',
  breadcrumbSection: 'Experiencia',
  breadcrumbCurrent: 'Seguro de cancelación',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Seguro de ',
  heroTitleAccent: 'cancelación',
  heroIntro:
    'A veces la vida cambia de planes. El seguro de cancelación te devuelve el valor de tu boleto cuando un imprevisto justificado te impide viajar.',
  cubreSubtitulo: 'Causas aceptadas',
  cubreTitle: 'Qué cubre el seguro',
  noCubreSubtitulo: 'Causas excluidas',
  noCubreTitle: 'Qué no cubre el seguro',
  contratarTitle: 'Cómo contratarlo y usarlo',
  faqTitle: 'Preguntas frecuentes',
  ctaTitle: 'Agrega el seguro al reservar',
  ctaDesc: 'Disponible durante el proceso de compra del boleto.',
  ctaButton: 'Reservar con seguro',
  relacionadosTitle: 'Más información',
  cubre: [
    'Enfermedad o accidente del pasajero o familiar directo que impida realizar el viaje, con certificado médico.',
    'Fallecimiento del pasajero o de un familiar en primer grado de consanguinidad.',
    'Citatorio judicial o comparecencia obligatoria ante autoridad gubernamental.',
    'Pérdida involuntaria de empleo del pasajero titular (aplica para viajes de placer, no de negocios asignados).',
    'Daños graves a la propiedad del pasajero (incendio, inundación) que requieran su presencia inmediata.',
    'Emergencia climática o de fuerza mayor declarada por autoridad competente en el destino.',
  ],
  noCubre: [
    'Cancelaciones por decisión personal sin causa justificada.',
    'Cambios de plan o preferencias del pasajero.',
    'Condiciones preexistentes de salud no informadas al contratar el seguro.',
    'Cancelaciones realizadas con menos de 4 horas antes del vuelo (excepto emergencias médicas documentadas).',
    'Vuelos cancelados por Aerus por causas imputables a la aerolínea — estos se rigen por la política de reembolso estándar.',
  ],
  pasosContratar: [
    'Selecciona tu vuelo y agrega el seguro de cancelación durante el proceso de compra.',
    'Recibirás por correo la póliza y los términos y condiciones del seguro.',
    'Si necesitas cancelar, contáctanos antes de la fecha de tu vuelo adjuntando documentación que justifique la causa.',
    'Nuestro equipo evalúa la solicitud en 3-5 días hábiles y procesa el reembolso conforme a los términos de la póliza.',
  ],
  preguntas: [
    {
      pregunta: '¿Cuánto cuesta el seguro de cancelación?',
      respuesta: 'El costo varía según la tarifa y destino. Se calcula como un porcentaje del valor del boleto y se muestra durante el proceso de compra antes de confirmar el pago.',
    },
    {
      pregunta: '¿Puedo agregar el seguro después de comprar mi boleto?',
      respuesta: 'El seguro de cancelación debe contratarse en el momento de la compra del boleto. No puede agregarse de forma retroactiva.',
    },
    {
      pregunta: '¿Qué porcentaje del boleto recupero?',
      respuesta: 'Dependiendo de la causa y la documentación presentada, el reembolso puede ser del 100% del valor del boleto base, sin incluir tasas e impuestos aeroportuarios no reembolsables.',
    },
    {
      pregunta: '¿El seguro cubre también mi equipaje?',
      respuesta: 'No. El seguro de cancelación cubre únicamente el costo del boleto de avión. Para pérdida o daño de equipaje aplica la política de equipaje de Aerus conforme a la Ley de Aviación Civil.',
    },
  ] as Pregunta[],
  relacionados: [
    { label: 'Política de equipaje', href: '/ayuda/equipaje/' },
    { label: 'Preguntas frecuentes', href: '/ayuda/faq/' },
    { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
  ] as Relacionado[],
}

const en: typeof es = {
  metaTitle: 'Cancellation Insurance | Aerus',
  metaDescription:
    'Protect your trip with Aerus cancellation insurance. It covers medical emergencies, family emergencies and force majeure events. Add it when you book.',
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',
  breadcrumbSection: 'Experience',
  breadcrumbCurrent: 'Cancellation insurance',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Cancellation ',
  heroTitleAccent: 'insurance',
  heroIntro:
    'Sometimes life changes your plans. Cancellation insurance refunds the value of your ticket when a valid, unforeseen event keeps you from traveling.',
  cubreSubtitulo: 'Covered reasons',
  cubreTitle: 'What the insurance covers',
  noCubreSubtitulo: 'Excluded reasons',
  noCubreTitle: 'What the insurance doesn’t cover',
  contratarTitle: 'How to purchase and use it',
  faqTitle: 'Frequently asked questions',
  ctaTitle: 'Add insurance when you book',
  ctaDesc: 'Available during the ticket purchase process.',
  ctaButton: 'Book with insurance',
  relacionadosTitle: 'More information',
  cubre: [
    'Illness or injury of the passenger or an immediate family member that prevents travel, supported by a medical certificate.',
    'Death of the passenger or of a first-degree blood relative.',
    'Court summons or mandatory appearance before a government authority.',
    'Involuntary job loss of the primary passenger (applies to leisure travel, not assigned business travel).',
    'Serious damage to the passenger’s property (fire, flood) that requires their immediate presence.',
    'Weather emergency or force majeure event declared by the competent authority at the destination.',
  ],
  noCubre: [
    'Cancellations due to personal choice without a valid reason.',
    'Change of plans or passenger preferences.',
    'Pre-existing health conditions not disclosed when purchasing the insurance.',
    'Cancellations made less than 4 hours before the flight (except for documented medical emergencies).',
    'Flights canceled by Aerus for reasons attributable to the airline — these are governed by the standard refund policy.',
  ],
  pasosContratar: [
    'Select your flight and add cancellation insurance during checkout.',
    'You’ll receive the policy and the insurance terms and conditions by email.',
    'If you need to cancel, contact us before your flight date and attach documentation supporting the reason.',
    'Our team reviews the request within 3–5 business days and processes the refund in accordance with the policy terms.',
  ],
  preguntas: [
    {
      pregunta: 'How much does cancellation insurance cost?',
      respuesta: 'The cost varies by fare and destination. It is calculated as a percentage of the ticket price and is shown during checkout before you confirm payment.',
    },
    {
      pregunta: 'Can I add insurance after buying my ticket?',
      respuesta: 'Cancellation insurance must be purchased at the time you buy your ticket. It cannot be added retroactively.',
    },
    {
      pregunta: 'What percentage of my ticket will I get back?',
      respuesta: 'Depending on the reason and the documentation provided, the refund can be up to 100% of the base fare, excluding non-refundable airport fees and taxes.',
    },
    {
      pregunta: 'Does the insurance also cover my baggage?',
      respuesta: 'No. Cancellation insurance covers only the cost of your airline ticket. For lost or damaged baggage, the Aerus baggage policy applies in accordance with Mexico’s Civil Aviation Law (Ley de Aviación Civil).',
    },
  ],
  relacionados: [
    { label: 'Baggage policy', href: '/ayuda/equipaje/' },
    { label: 'FAQ', href: '/ayuda/faq/' },
    { label: 'Contact Aerus', href: '/ayuda/contacto/' },
  ],
}

const T: Record<Lang, typeof es> = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/experiencia/seguro-de-cancelacion'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function SeguroDeCancelacionPage({ params }: PageProps<'/[lang]/experiencia/seguro-de-cancelacion'>) {
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
                {/* Qué cubre */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="circle-check" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.cubreSubtitulo}</p>
                      <h2 className="docs-h2">{t.cubreTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.cubre.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>

                {/* Qué NO cubre */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="x-mark" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.noCubreSubtitulo}</p>
                      <h2 className="docs-h2">{t.noCubreTitle}</h2>
                    </div>
                  </div>
                  <ul className="docs-list exp-no-cubre-list">
                    {t.noCubre.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>

                {/* Cómo contratar */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>{t.contratarTitle}</h2>
                  <ol className="fact-steps">
                    {t.pasosContratar.map((paso, i) => (
                      <li key={i} className="fact-step">
                        <span className="fact-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="fact-step-body">
                          <p className="fact-step-desc">{paso}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 20 }}>{t.faqTitle}</h2>
                  <dl className="destino-faq">
                    {t.preguntas.map((p) => (
                      <div key={p.pregunta} className="destino-faq-item">
                        <dt className="destino-faq-q">{p.pregunta}</dt>
                        <dd className="destino-faq-a">{p.respuesta}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitle}</p>
                  <p className="mro-cta-sidebar-desc">{t.ctaDesc}</p>
                  <Link href={lp(lang, '/reservar/')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {t.ctaButton}
                  </Link>
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
