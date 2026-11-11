import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/legal/aviso-de-privacidad/'

const T = {
  es: {
    metaTitle: 'Aviso de privacidad | Aerus',
    metaDescription:
      'Aviso de privacidad de Aerotransportes Rafilher, S.A. de C.V. Conoce cómo tratamos tus datos personales conforme a la LFPDPPP.',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    title: 'Aviso de privacidad',
    meta: 'Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025',
    sections: [
      { id: 'responsable',   label: '1. Responsable del tratamiento' },
      { id: 'datos',         label: '2. Datos personales recabados' },
      { id: 'finalidades',   label: '3. Finalidades del tratamiento' },
      { id: 'transferencias', label: '4. Transferencias de datos' },
      { id: 'arco',          label: '5. Derechos ARCO' },
      { id: 'cookies',       label: '6. Uso de cookies' },
      { id: 'cambios',       label: '7. Cambios al aviso' },
    ],
    tocTitle: 'Contenido',
    otherTitle: 'Otros documentos legales',
    otherDocs: [
      { label: 'Términos y condiciones', href: '/legal/terminos-y-condiciones/' },
      { label: 'Política de cookies',    href: '/legal/cookies/' },
    ],
    contactTitle: 'Contacto de privacidad',
    contactDesc: 'Para ejercer derechos ARCO o presentar una queja:',
  },
  en: {
    metaTitle: 'Privacy Notice | Aerus',
    metaDescription:
      'Privacy notice of Aerotransportes Rafilher, S.A. de C.V. Learn how we process your personal data under the LFPDPPP (Mexican Federal Law on the Protection of Personal Data Held by Private Parties).',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    title: 'Privacy Notice',
    meta: 'Aerotransportes Rafilher, S.A. de C.V. · Last updated: August 2025',
    sections: [
      { id: 'responsable',   label: '1. Data controller' },
      { id: 'datos',         label: '2. Personal data collected' },
      { id: 'finalidades',   label: '3. Purposes of processing' },
      { id: 'transferencias', label: '4. Data transfers' },
      { id: 'arco',          label: '5. ARCO rights' },
      { id: 'cookies',       label: '6. Use of cookies' },
      { id: 'cambios',       label: '7. Changes to this notice' },
    ],
    tocTitle: 'Contents',
    otherTitle: 'Other legal documents',
    otherDocs: [
      { label: 'Terms and conditions', href: '/legal/terminos-y-condiciones/' },
      { label: 'Cookie policy',        href: '/legal/cookies/' },
    ],
    contactTitle: 'Privacy contact',
    contactDesc: 'To exercise your ARCO rights or file a complaint:',
  },
}

function BodyEs({ lang }: { lang: Lang }) {
  return (
    <>
      <section id="responsable" className="legal-section">
        <h2>1. Responsable del tratamiento de datos personales</h2>
        <p>Aerotransportes Rafilher, S.A. de C.V., con nombre comercial <strong>Aerus</strong>, con domicilio en Monterrey, Nuevo León, México, es responsable del tratamiento de sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.</p>
        <p>Para ejercer sus derechos o presentar dudas sobre el tratamiento de sus datos, puede contactarnos en <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a>.</p>
      </section>

      <section id="datos" className="legal-section">
        <h2>2. Datos personales que recabamos</h2>
        <p>Aerus recaba los datos personales necesarios para la prestación del servicio de transporte aéreo. Dependiendo del servicio contratado, podemos solicitar:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> nombre completo, fecha de nacimiento, número de pasaporte o documento de identidad oficial, nacionalidad.</li>
          <li><strong>Datos de contacto:</strong> correo electrónico, número telefónico.</li>
          <li><strong>Datos de pago:</strong> información necesaria para procesar el cobro del boleto (gestionada por el procesador de pagos designado; Aerus no almacena datos de tarjetas).</li>
          <li><strong>Datos de viaje:</strong> rutas, fechas, preferencias de asiento y requerimientos especiales (p. ej., necesidades médicas que afecten el abordaje).</li>
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de dispositivo y comportamiento de navegación en el sitio aerus.mx (ver sección de Cookies).</li>
        </ul>
        <p>No recabamos datos personales sensibles, salvo los requerimientos médicos estrictamente necesarios para garantizar la seguridad del pasajero durante el vuelo.</p>
      </section>

      <section id="finalidades" className="legal-section">
        <h2>3. Finalidades del tratamiento</h2>
        <p>Los datos personales que recabamos son utilizados para las siguientes <strong>finalidades primarias</strong> (necesarias para la relación contractual):</p>
        <ul>
          <li>Procesar y confirmar reservaciones de vuelo.</li>
          <li>Emitir boletos y documentación de viaje.</li>
          <li>Gestionar cambios, cancelaciones y reembolsos.</li>
          <li>Cumplir con requisitos de autoridades aeronáuticas y migratorias.</li>
          <li>Enviar notificaciones relacionadas con el vuelo (cambios de horario, confirmaciones, recordatorios).</li>
          <li>Facturación y atención a reclamaciones.</li>
        </ul>
        <p>Adicionalmente, con su consentimiento, podemos utilizar sus datos para <strong>finalidades secundarias</strong>:</p>
        <ul>
          <li>Envío de comunicaciones comerciales sobre promociones, nuevas rutas y servicios de Aerus.</li>
          <li>Estudios estadísticos de mercado y mejora de la experiencia del pasajero.</li>
        </ul>
        <p>Si no desea que sus datos sean utilizados para finalidades secundarias, puede manifestarlo en cualquier momento escribiendo a <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a>. La negativa no afectará la prestación del servicio contratado.</p>
      </section>

      <section id="transferencias" className="legal-section">
        <h2>4. Transferencias de datos personales</h2>
        <p>Aerus podrá transferir sus datos personales, sin requerir su consentimiento, a las siguientes entidades:</p>
        <ul>
          <li>Autoridades aeronáuticas, migratorias y de seguridad nacional (AFAC, INM, etc.) cuando así lo exija la legislación aplicable.</li>
          <li>Proveedores de servicios relacionados con la operación del vuelo (aeropuertos, servicios de rampa, handling).</li>
          <li>Procesadores de pago para gestionar las transacciones económicas.</li>
        </ul>
        <p>Cualquier otra transferencia que no esté contemplada en la ley requerirá su consentimiento expreso. Aerus no vende datos personales a terceros.</p>
      </section>

      <section id="arco" className="legal-section">
        <h2>5. Derechos ARCO y mecanismo para ejercerlos</h2>
        <p>Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, deberá enviar una solicitud a <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a> con la siguiente información:</p>
        <ul>
          <li>Nombre completo y copia de documento de identidad oficial.</li>
          <li>Descripción clara del derecho que desea ejercer.</li>
          <li>Cualquier documento o información que facilite la localización de los datos.</li>
        </ul>
        <p>Aerus dará respuesta a su solicitud en un plazo no mayor a <strong>20 días hábiles</strong> a partir de su recepción. En caso de ser procedente, la respuesta se hará efectiva en los 15 días hábiles siguientes.</p>
        <p>Usted también podrá revocar en cualquier momento el consentimiento otorgado para el tratamiento de sus datos, siguiendo el mismo procedimiento. La revocación no tendrá efectos retroactivos sobre los tratamientos ya realizados.</p>
      </section>

      <section id="cookies" className="legal-section">
        <h2>6. Uso de cookies y tecnologías de rastreo</h2>
        <p>El sitio aerus.mx utiliza cookies y tecnologías similares para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenidos. Puede consultar el detalle completo en nuestra <Link href={lp(lang, '/legal/cookies/')}>Política de Cookies</Link>.</p>
        <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, algunas funcionalidades del sitio pueden no estar disponibles si las cookies están deshabilitadas.</p>
      </section>

      <section id="cambios" className="legal-section">
        <h2>7. Cambios al aviso de privacidad</h2>
        <p>Aerus se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en aerus.mx con indicación de la fecha de actualización. Se recomienda revisarlo periódicamente. El uso continuado del sitio o de los servicios de Aerus tras la publicación de cambios implica la aceptación del aviso actualizado.</p>
      </section>
    </>
  )
}

function BodyEn({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="docs-callout" style={{ marginTop: 0, marginBottom: 32 }}>
        <p>This English translation is provided for convenience only. In case of discrepancy, the Spanish version prevails.</p>
      </div>

      <section id="responsable" className="legal-section">
        <h2>1. Party responsible for processing personal data</h2>
        <p>Aerotransportes Rafilher, S.A. de C.V., doing business as <strong>Aerus</strong>, with its address in Monterrey, Nuevo León, Mexico, is responsible for the processing of your personal data, in accordance with the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (Mexican Federal Law on the Protection of Personal Data Held by Private Parties, “LFPDPPP”) and its Regulations.</p>
        <p>To exercise your rights or to submit questions about the processing of your data, you may contact us at <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a>.</p>
      </section>

      <section id="datos" className="legal-section">
        <h2>2. Personal data we collect</h2>
        <p>Aerus collects the personal data necessary to provide air transportation services. Depending on the service contracted, we may request:</p>
        <ul>
          <li><strong>Identification data:</strong> full name, date of birth, passport number or official identity document, nationality.</li>
          <li><strong>Contact data:</strong> email address, telephone number.</li>
          <li><strong>Payment data:</strong> information necessary to process payment for the ticket (handled by the designated payment processor; Aerus does not store card data).</li>
          <li><strong>Travel data:</strong> routes, dates, seat preferences and special requirements (e.g., medical needs that affect boarding).</li>
          <li><strong>Browsing data:</strong> IP address, device type and browsing behavior on the aerus.mx website (see the Cookies section).</li>
        </ul>
        <p>We do not collect sensitive personal data, except for medical requirements strictly necessary to ensure passenger safety during the flight.</p>
      </section>

      <section id="finalidades" className="legal-section">
        <h2>3. Purposes of processing</h2>
        <p>The personal data we collect is used for the following <strong>primary purposes</strong> (necessary for the contractual relationship):</p>
        <ul>
          <li>Processing and confirming flight reservations.</li>
          <li>Issuing tickets and travel documents.</li>
          <li>Managing changes, cancellations and refunds.</li>
          <li>Complying with the requirements of aviation and immigration authorities.</li>
          <li>Sending flight-related notifications (schedule changes, confirmations, reminders).</li>
          <li>Invoicing and handling of claims.</li>
        </ul>
        <p>Additionally, with your consent, we may use your data for <strong>secondary purposes</strong>:</p>
        <ul>
          <li>Sending commercial communications about promotions, new routes and Aerus services.</li>
          <li>Statistical market research and improvement of the passenger experience.</li>
        </ul>
        <p>If you do not want your data to be used for secondary purposes, you may say so at any time by writing to <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a>. Refusal will not affect the provision of the contracted service.</p>
      </section>

      <section id="transferencias" className="legal-section">
        <h2>4. Transfers of personal data</h2>
        <p>Aerus may transfer your personal data, without requiring your consent, to the following entities:</p>
        <ul>
          <li>Aviation, immigration and national security authorities (AFAC, INM, etc.) when required by applicable law.</li>
          <li>Providers of services related to flight operations (airports, ramp services, handling).</li>
          <li>Payment processors, to manage financial transactions.</li>
        </ul>
        <p>Any other transfer not provided for by law will require your express consent. Aerus does not sell personal data to third parties.</p>
      </section>

      <section id="arco" className="legal-section">
        <h2>5. ARCO rights and how to exercise them</h2>
        <p>You have the right to <strong>Access, Rectify, Cancel or Oppose</strong> (ARCO rights) the processing of your personal data. To exercise these rights, you must send a request to <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a> including the following information:</p>
        <ul>
          <li>Full name and a copy of an official identity document.</li>
          <li>A clear description of the right you wish to exercise.</li>
          <li>Any document or information that helps locate the data.</li>
        </ul>
        <p>Aerus will respond to your request within no more than <strong>20 business days</strong> from its receipt. If the request is granted, the response will be carried out within the following 15 business days.</p>
        <p>You may also revoke, at any time, the consent you have given for the processing of your data by following the same procedure. Revocation will not have retroactive effect on processing already carried out.</p>
      </section>

      <section id="cookies" className="legal-section">
        <h2>6. Use of cookies and tracking technologies</h2>
        <p>The aerus.mx website uses cookies and similar technologies to improve the browsing experience, analyze traffic and personalize content. You can find full details in our <Link href={lp(lang, '/legal/cookies/')}>Cookie Policy</Link>.</p>
        <p>You can set your browser to reject all cookies or to alert you when a cookie is sent. However, some features of the website may not be available if cookies are disabled.</p>
      </section>

      <section id="cambios" className="legal-section">
        <h2>7. Changes to the privacy notice</h2>
        <p>Aerus reserves the right to modify this Privacy Notice at any time. Changes will be published on aerus.mx indicating the date of the update. We recommend that you review it periodically. Continued use of the website or of Aerus services after changes are published constitutes acceptance of the updated notice.</p>
      </section>
    </>
  )
}

const BODY = { es: BodyEs, en: BodyEn }

export async function generateMetadata({ params }: PageProps<'/[lang]/legal/aviso-de-privacidad'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function AvisoPrivacidadPage({ params }: PageProps<'/[lang]/legal/aviso-de-privacidad'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const Body = BODY[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="legal-hero">
          <div className="container">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.title}</span>
            </nav>
            <h1 className="legal-titulo">{t.title}</h1>
            <p className="legal-meta">
              {t.meta}
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">

              <article className="legal-content">
                <Body lang={lang} />
              </article>

              <aside className="legal-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.tocTitle}</p>
                  <ul className="legal-toc">
                    {t.sections.map(s => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="legal-toc-link">{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.otherTitle}</p>
                  <ul className="docs-related-list">
                    {t.otherDocs.map(r => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.contactTitle}</p>
                  <p style={{ font: '400 13px/1.6 var(--font-body)', color: 'var(--forest-500)', marginBottom: 12 }}>
                    {t.contactDesc}
                  </p>
                  <a
                    href="mailto:privacidad@aerus.mx"
                    style={{ font: '500 13px/1 var(--font-display)', color: 'var(--aerus-deep-forest)', textDecoration: 'none' }}
                  >
                    privacidad@aerus.mx
                  </a>
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
