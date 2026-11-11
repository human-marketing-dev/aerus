import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/facturacion/'

const PORTAL_URL =
  'https://servicios.sefactura.com.mx/FacturePos/pages/mov_tickets_40.jsp?sucursales=true&rfc=ARA900320NF4'

/* ── Data ───────────────────────────────────────────────────────────────── */

type Paso = { titulo: string; descripcion: string }
type Pregunta = { pregunta: string; respuesta: string }

const PASOS: Record<Lang, Paso[]> = {
  es: [
    {
      titulo: 'Ten a la mano tu información de vuelo',
      descripcion:
        'Necesitas tu código de reservación (localizador) o número de ticket. Lo encuentras en el correo de confirmación o en la sección Mi Reserva de aerus.mx.',
    },
    {
      titulo: 'Ingresa al portal de facturación',
      descripcion:
        'Haz clic en el botón "Facturar mi vuelo" en esta página. Serás redirigido al sistema de facturación electrónica de Aerus operado por SeFactura.',
    },
    {
      titulo: 'Captura tus datos fiscales',
      descripcion:
        'Ingresa RFC, razón social, régimen fiscal, uso de CFDI y código postal fiscal tal como aparecen en tu Constancia de Situación Fiscal emitida por el SAT.',
    },
    {
      titulo: 'Recibe tu CFDI por correo',
      descripcion:
        'En minutos recibirás tu factura en formato PDF y XML al correo que registres en el portal. Guarda ambos archivos para tus registros contables.',
    },
  ],
  en: [
    {
      titulo: 'Have your flight information handy',
      descripcion:
        'You’ll need your booking code (record locator) or ticket number. You can find it in your confirmation email or in the My Booking section of aerus.mx.',
    },
    {
      titulo: 'Go to the invoicing portal',
      descripcion:
        'Click the "Invoice my flight" button on this page. You’ll be redirected to the Aerus electronic invoicing system, operated by SeFactura.',
    },
    {
      titulo: 'Enter your tax information',
      descripcion:
        'Enter your RFC, legal name, tax regime, CFDI use and tax ZIP code exactly as they appear on your Constancia de Situación Fiscal (tax status certificate) issued by the SAT.',
    },
    {
      titulo: 'Receive your CFDI by email',
      descripcion:
        'Within minutes you’ll receive your invoice in PDF and XML format at the email address you enter in the portal. Keep both files for your accounting records.',
    },
  ],
}

const DATOS_NECESARIOS: Record<Lang, string[]> = {
  es: [
    'RFC — 12 caracteres (personas morales) o 13 (personas físicas).',
    'Razón social o nombre completo, tal como aparece en la Constancia de Situación Fiscal.',
    'Régimen fiscal (ej. 601 General de Ley Personas Morales, 612 Personas Físicas con Actividad Empresarial).',
    'Uso de CFDI (ej. G03 Gastos en general, D01 Honorarios médicos, S01 Sin efectos fiscales).',
    'Código postal fiscal — el que aparece en tu Constancia, que puede diferir de tu dirección de correspondencia.',
  ],
  en: [
    'RFC (Mexican tax ID) — 12 characters (companies) or 13 (individuals).',
    'Legal name or full name, exactly as it appears on your Constancia de Situación Fiscal (tax status certificate).',
    'Tax regime (e.g. 601 General de Ley Personas Morales, 612 Personas Físicas con Actividad Empresarial).',
    'CFDI use (e.g. G03 Gastos en general, D01 Honorarios médicos, S01 Sin efectos fiscales).',
    'Tax ZIP code — the one shown on your Constancia, which may differ from your mailing address.',
  ],
}

const PREGUNTAS: Record<Lang, Pregunta[]> = {
  es: [
    {
      pregunta: '¿Puedo facturar un vuelo de un mes anterior?',
      respuesta:
        'No. Por disposición del SAT, los CFDI deben emitirse dentro del mismo mes calendario en que se realizó el servicio. Si tu vuelo fue en octubre, debes solicitar la factura en octubre.',
    },
    {
      pregunta: '¿Puedo cancelar o corregir una factura ya emitida?',
      respuesta:
        'Sí, dentro de los plazos que establece el SAT. Para solicitar la cancelación de una factura contáctanos indicando el folio fiscal (UUID) y el motivo. Las correcciones requieren emitir una nota de crédito y una nueva factura.',
    },
    {
      pregunta: '¿Qué hago si no recibí mi factura por correo?',
      respuesta:
        'Primero revisa tu carpeta de spam o correo no deseado. Si no está ahí, puedes reingresar al portal con tu número de reservación para reenviarla. Si el problema persiste, contáctanos y te apoyamos.',
    },
    {
      pregunta: '¿La factura incluye todos los cargos de mi boleto?',
      respuesta:
        'La factura incluye el valor del boleto y los servicios adquiridos en la misma transacción (equipaje, selección de asiento). Los cargos pagados en transacciones separadas pueden requerir una solicitud de factura independiente.',
    },
  ],
  en: [
    {
      pregunta: 'Can I get an invoice for a flight from a previous month?',
      respuesta:
        'No. Under SAT rules, CFDIs must be issued within the same calendar month in which the service took place. If your flight was in October, you must request your invoice in October.',
    },
    {
      pregunta: 'Can I cancel or correct an invoice that has already been issued?',
      respuesta:
        'Yes, within the time limits set by the SAT. To request an invoice cancellation, contact us with the folio fiscal (UUID) and the reason. Corrections require issuing a credit note and a new invoice.',
    },
    {
      pregunta: 'What should I do if I didn’t receive my invoice by email?',
      respuesta:
        'First, check your spam or junk folder. If it’s not there, you can go back to the portal with your confirmation number to resend it. If the problem persists, contact us and we’ll help you.',
    },
    {
      pregunta: 'Does the invoice include all the charges on my ticket?',
      respuesta:
        'The invoice includes the ticket price and any services purchased in the same transaction (baggage, seat selection). Charges paid in separate transactions may require a separate invoice request.',
    },
  ],
}

const es = {
  metaTitle: 'Facturación | Aerus',
  metaDescription:
    'Solicita la factura CFDI de tu vuelo Aerus en minutos. Ingresa tu número de reservación y datos fiscales en el portal de facturación electrónica.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Facturación',
  eyebrow: 'Ayuda',
  titleA: 'Factura tu',
  titleB: 'vuelo',
  intro: 'Solicita tu CFDI en minutos a través del portal de facturación electrónica de Aerus.',
  stepsTitle: 'Cómo facturar tu vuelo',
  dataTitle: 'Datos fiscales que necesitas',
  dataNoteA: 'La factura debe solicitarse dentro del mismo mes calendario en que se realizó el vuelo.',
  dataNoteB: 'Aerus no puede emitir facturas por vuelos de períodos fiscales anteriores.',
  faqTitle: 'Preguntas comunes',
  portalTag: 'Portal de facturación',
  portalTitle: 'Factura tu vuelo en línea',
  portalDesc: 'Ingresa tu número de reservación y datos fiscales para recibir tu CFDI en minutos.',
  portalBtn: 'Facturar mi vuelo',
  rfcLabel: 'RFC Aerus',
  portalNote:
    'El portal de facturación se abrirá en una nueva pestaña. Es operado por SeFactura bajo convenio con Aerus.',
  helpText: '¿Necesitas ayuda con tu factura?',
  contactCta: 'Contactar a Aerus',
}

const en: typeof es = {
  metaTitle: 'Invoicing | Aerus',
  metaDescription:
    'Request a CFDI (Mexican electronic invoice) for your Aerus flight in minutes. Enter your confirmation number and tax information in the e-invoicing portal.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Invoicing',
  eyebrow: 'Help',
  titleA: 'Invoice your',
  titleB: 'flight',
  intro: 'Request your CFDI (Mexican electronic invoice) in minutes through the Aerus e-invoicing portal.',
  stepsTitle: 'How to invoice your flight',
  dataTitle: 'Tax information you’ll need',
  dataNoteA: 'Invoices must be requested within the same calendar month in which the flight took place.',
  dataNoteB: 'Aerus cannot issue invoices for flights from previous tax periods.',
  faqTitle: 'Common questions',
  portalTag: 'Invoicing portal',
  portalTitle: 'Invoice your flight online',
  portalDesc: 'Enter your confirmation number and tax information to receive your CFDI in minutes.',
  portalBtn: 'Invoice my flight',
  rfcLabel: 'Aerus RFC',
  portalNote:
    'The invoicing portal will open in a new tab. It is operated by SeFactura under an agreement with Aerus.',
  helpText: 'Need help with your invoice?',
  contactCta: 'Contact Aerus',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/facturacion'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default async function FacturacionPage({ params }: PageProps<'/[lang]/ayuda/facturacion'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="fact-hero">
          <div className="container fact-hero-inner">
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

        <section className="section-pad fact-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div className="fact-content">

                {/* Steps */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>{t.stepsTitle}</h2>
                  <ol className="fact-steps">
                    {PASOS[lang].map((paso, i) => (
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

                {/* Data required */}
                <div className="docs-section" style={{ paddingBottom: 40, marginBottom: 40 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="lock" size={20} stroke={1.5} />
                    </div>
                    <h2 className="docs-h2">{t.dataTitle}</h2>
                  </div>
                  <ul className="docs-list">
                    {DATOS_NECESARIOS[lang].map((dato, i) => (
                      <li key={i}>{dato}</li>
                    ))}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>
                      {t.dataNoteA}{' '}
                      {t.dataNoteB}
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>{t.faqTitle}</h2>
                  <dl className="destino-faq">
                    {PREGUNTAS[lang].map((item, i) => (
                      <div key={i} className="destino-faq-item">
                        <dt className="destino-faq-q">{item.pregunta}</dt>
                        <dd className="destino-faq-a">{item.respuesta}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

              </div>

              {/* Sidebar — portal CTA */}
              <aside className="fact-sidebar">
                <div className="fact-portal-card">
                  <p className="fact-portal-tag">{t.portalTag}</p>
                  <h3 className="fact-portal-title">{t.portalTitle}</h3>
                  <p className="fact-portal-desc">
                    {t.portalDesc}
                  </p>

                  <a
                    href={PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary fact-portal-btn"
                  >
                    {t.portalBtn}
                    <span className="fact-portal-btn-arr" aria-hidden="true">↗</span>
                  </a>

                  <div className="fact-portal-rfc-row">
                    <span className="fact-portal-rfc-label">{t.rfcLabel}</span>
                    <span className="fact-portal-rfc-val">ARA900320NF4</span>
                  </div>

                  <p className="fact-portal-note">
                    {t.portalNote}
                  </p>
                </div>

                <div className="fact-sidebar-help">
                  <p className="fact-sidebar-help-text">{t.helpText}</p>
                  <Link href={lp(lang, '/ayuda/contacto/')} className="docs-related-link" style={{ borderBottom: 'none' }}>
                    <span>{t.contactCta}</span>
                    <span className="docs-related-arr" aria-hidden="true">›</span>
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
