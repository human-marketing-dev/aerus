import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/legal/terminos-y-condiciones/'

const T = {
  es: {
    metaTitle: 'Términos y condiciones | Aerus',
    metaDescription:
      'Condiciones generales de uso de los servicios de transporte aéreo de Aerus (Aerotransportes Rafilher, S.A. de C.V.).',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    title: 'Términos y condiciones',
    meta: 'Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025',
    sections: [
      { id: 'objeto',        label: '1. Objeto y aceptación' },
      { id: 'definiciones',  label: '2. Definiciones' },
      { id: 'reservaciones', label: '3. Reservaciones y tarifas' },
      { id: 'cancelaciones', label: '4. Cancelaciones y cambios' },
      { id: 'equipaje',      label: '5. Equipaje' },
      { id: 'pasajeros',     label: '6. Derechos y obligaciones del pasajero' },
      { id: 'responsabilidad', label: '7. Limitación de responsabilidad' },
      { id: 'propiedad',     label: '8. Propiedad intelectual' },
      { id: 'ley',           label: '9. Ley aplicable y jurisdicción' },
    ],
    tocTitle: 'Contenido',
    otherTitle: 'Otros documentos legales',
    otherDocs: [
      { label: 'Aviso de privacidad', href: '/legal/aviso-de-privacidad/' },
      { label: 'Política de cookies',  href: '/legal/cookies/' },
    ],
  },
  en: {
    metaTitle: 'Terms and Conditions | Aerus',
    metaDescription:
      'General terms of use for the air transportation services of Aerus (Aerotransportes Rafilher, S.A. de C.V.).',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    title: 'Terms and Conditions',
    meta: 'Aerotransportes Rafilher, S.A. de C.V. · Last updated: August 2025',
    sections: [
      { id: 'objeto',        label: '1. Purpose and acceptance' },
      { id: 'definiciones',  label: '2. Definitions' },
      { id: 'reservaciones', label: '3. Reservations and fares' },
      { id: 'cancelaciones', label: '4. Cancellations and changes' },
      { id: 'equipaje',      label: '5. Baggage' },
      { id: 'pasajeros',     label: '6. Passenger rights and obligations' },
      { id: 'responsabilidad', label: '7. Limitation of liability' },
      { id: 'propiedad',     label: '8. Intellectual property' },
      { id: 'ley',           label: '9. Governing law and jurisdiction' },
    ],
    tocTitle: 'Contents',
    otherTitle: 'Other legal documents',
    otherDocs: [
      { label: 'Privacy notice', href: '/legal/aviso-de-privacidad/' },
      { label: 'Cookie policy',  href: '/legal/cookies/' },
    ],
  },
}

function BodyEs() {
  return (
    <>
      <section id="objeto" className="legal-section">
        <h2>1. Objeto y aceptación</h2>
        <p>Los presentes Términos y Condiciones regulan el uso del sitio web aerus.mx y la contratación de los servicios de transporte aéreo ofrecidos por Aerotransportes Rafilher, S.A. de C.V. (en adelante <strong>&quot;Aerus&quot;</strong>), con domicilio en Monterrey, Nuevo León, México.</p>
        <p>Al realizar una reservación, adquirir un boleto o utilizar los servicios de Aerus, el pasajero manifiesta su conformidad plena con estos términos. Si no está de acuerdo con alguna disposición, deberá abstenerse de contratar los servicios.</p>
      </section>

      <section id="definiciones" className="legal-section">
        <h2>2. Definiciones</h2>
        <ul>
          <li><strong>Aerus:</strong> Aerotransportes Rafilher, S.A. de C.V., operadora de los vuelos bajo la concesión otorgada por la AFAC.</li>
          <li><strong>Pasajero:</strong> Toda persona que adquiere un boleto o utiliza los servicios de transporte aéreo de Aerus.</li>
          <li><strong>Boleto:</strong> Documento físico o electrónico que acredita el derecho del pasajero a abordar un vuelo en las condiciones pactadas.</li>
          <li><strong>Tarifa:</strong> Precio publicado por Aerus para cada ruta y clase de servicio, sujeto a disponibilidad.</li>
          <li><strong>Vuelo regular:</strong> Servicio de transporte aéreo operado conforme a itinerario publicado.</li>
          <li><strong>Vuelo chárter:</strong> Servicio de transporte aéreo bajo contrato específico, fuera del itinerario regular.</li>
        </ul>
      </section>

      <section id="reservaciones" className="legal-section">
        <h2>3. Reservaciones y tarifas</h2>
        <p>Las reservaciones pueden realizarse a través del sitio web oficial, el centro de atención telefónica o los canales autorizados por Aerus. La reservación queda confirmada una vez recibido el comprobante de pago correspondiente.</p>
        <p>Las tarifas se expresan en pesos mexicanos e incluyen los impuestos y cargos aplicables conforme a la legislación vigente. Aerus se reserva el derecho de modificar tarifas antes de que se confirme la reservación; una vez emitido el boleto, el precio queda fijo.</p>
        <p>Los boletos son personales e intransferibles. El nombre del pasajero debe coincidir exactamente con el documento de identidad presentado al momento del abordaje.</p>
      </section>

      <section id="cancelaciones" className="legal-section">
        <h2>4. Cancelaciones y cambios</h2>
        <p>El pasajero podrá solicitar cambios de fecha, horario o ruta sujeto a disponibilidad y a la política tarifaria del boleto adquirido. Las solicitudes de cambio deben realizarse con un mínimo de <strong>24 horas</strong> antes de la salida del vuelo.</p>
        <p>Las cancelaciones y reembolsos se procesarán conforme a la tarifa contratada y a la Ley de Aviación Civil y los lineamientos de la PROFECO. Los boletos promocionales o de tarifa mínima pueden estar sujetos a cargos de cancelación o no ser reembolsables.</p>
        <p>En caso de cancelación o retraso significativo imputable a Aerus, el pasajero tendrá derecho a las compensaciones establecidas en la normativa aeronáutica mexicana vigente.</p>
      </section>

      <section id="equipaje" className="legal-section">
        <h2>5. Equipaje</h2>
        <p>Dada la naturaleza de la aeronave utilizada por Aerus (Cessna 208B Grand Caravan EX, capacidad de 9 pasajeros), el espacio de carga es limitado. Las condiciones de equipaje aplicables son:</p>
        <ul>
          <li><strong>Equipaje de mano:</strong> Una pieza de hasta 5 kg por pasajero, con dimensiones que permitan su ubicación en el espacio habilitado a bordo.</li>
          <li><strong>Equipaje documentado:</strong> Sujeto a disponibilidad de carga según el peso de la aeronave en cada vuelo. Aerus comunicará al pasajero los límites aplicables al confirmar la reservación.</li>
          <li><strong>Artículos prohibidos:</strong> Quedan prohibidos a bordo todos los artículos listados por la AFAC y la legislación internacional aplicable.</li>
        </ul>
        <p>Aerus no se hace responsable por daños a equipaje frágil, perecedero o insuficientemente embalado.</p>
      </section>

      <section id="pasajeros" className="legal-section">
        <h2>6. Derechos y obligaciones del pasajero</h2>
        <p>El pasajero tiene derecho a recibir el servicio en las condiciones pactadas, a ser informado oportunamente sobre cambios en el itinerario y a recibir atención digna en todo momento.</p>
        <p>Son obligaciones del pasajero: presentarse en el aeropuerto con la anticipación indicada por Aerus (mínimo 45 minutos antes de la salida), portar documentación de identidad válida, cumplir con las instrucciones del personal de vuelo y no introducir a bordo objetos o sustancias prohibidas.</p>
        <p>Aerus se reserva el derecho de negar el abordaje a pasajeros que se presenten en estado de ebriedad, bajo efecto de sustancias prohibidas o que representen un riesgo para la seguridad del vuelo.</p>
      </section>

      <section id="responsabilidad" className="legal-section">
        <h2>7. Limitación de responsabilidad</h2>
        <p>La responsabilidad de Aerus por muerte o lesiones corporales, destrucción o pérdida de equipaje y retrasos está sujeta a los límites establecidos por la Ley de Aviación Civil, el Código de Comercio y los convenios internacionales aplicables.</p>
        <p>Aerus no será responsable por retrasos causados por condiciones meteorológicas adversas, decisiones de autoridades de aviación civil, restricciones de espacio aéreo u otras causas de fuerza mayor.</p>
        <p>El contenido del sitio web aerus.mx se proporciona con carácter informativo. Aerus no garantiza que la información esté libre de errores y se reserva el derecho de actualizarla sin previo aviso.</p>
      </section>

      <section id="propiedad" className="legal-section">
        <h2>8. Propiedad intelectual</h2>
        <p>El nombre &quot;Aerus&quot;, el logotipo, los diseños, textos, imágenes y demás elementos del sitio web son propiedad de Aerotransportes Rafilher, S.A. de C.V. o de sus licenciantes y están protegidos por la legislación mexicana en materia de propiedad intelectual.</p>
        <p>Queda prohibida cualquier reproducción, distribución o uso con fines comerciales sin autorización expresa y por escrito de Aerus.</p>
      </section>

      <section id="ley" className="legal-section">
        <h2>9. Ley aplicable y jurisdicción</h2>
        <p>Los presentes Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o aplicación, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Monterrey, Nuevo León, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>
        <p>Para dudas o aclaraciones, el pasajero puede dirigirse a <a href="mailto:contacto@aerus.mx">contacto@aerus.mx</a>.</p>
      </section>
    </>
  )
}

function BodyEn() {
  return (
    <>
      <div className="docs-callout" style={{ marginTop: 0, marginBottom: 32 }}>
        <p>This English translation is provided for convenience only. In case of discrepancy, the Spanish version prevails.</p>
      </div>

      <section id="objeto" className="legal-section">
        <h2>1. Purpose and acceptance</h2>
        <p>These Terms and Conditions govern the use of the aerus.mx website and the purchase of the air transportation services offered by Aerotransportes Rafilher, S.A. de C.V. (hereinafter <strong>&quot;Aerus&quot;</strong>), with its address in Monterrey, Nuevo León, Mexico.</p>
        <p>By making a reservation, purchasing a ticket or using the services of Aerus, the passenger expresses full agreement with these terms. If the passenger does not agree with any provision, the passenger must refrain from purchasing the services.</p>
      </section>

      <section id="definiciones" className="legal-section">
        <h2>2. Definitions</h2>
        <ul>
          <li><strong>Aerus:</strong> Aerotransportes Rafilher, S.A. de C.V., operator of the flights under the concession granted by the AFAC (Agencia Federal de Aviación Civil, Mexico’s Federal Civil Aviation Agency).</li>
          <li><strong>Passenger:</strong> Any person who purchases a ticket or uses the air transportation services of Aerus.</li>
          <li><strong>Ticket:</strong> Physical or electronic document that evidences the passenger’s right to board a flight under the agreed conditions.</li>
          <li><strong>Fare:</strong> Price published by Aerus for each route and class of service, subject to availability.</li>
          <li><strong>Scheduled flight:</strong> Air transportation service operated according to a published schedule.</li>
          <li><strong>Charter flight:</strong> Air transportation service under a specific contract, outside the regular schedule.</li>
        </ul>
      </section>

      <section id="reservaciones" className="legal-section">
        <h2>3. Reservations and fares</h2>
        <p>Reservations may be made through the official website, the call center or the channels authorized by Aerus. The reservation is confirmed once the corresponding proof of payment has been received.</p>
        <p>Fares are expressed in Mexican pesos and include the applicable taxes and charges in accordance with current legislation. Aerus reserves the right to modify fares before the reservation is confirmed; once the ticket has been issued, the price is fixed.</p>
        <p>Tickets are personal and non-transferable. The passenger’s name must exactly match the identity document presented at boarding.</p>
      </section>

      <section id="cancelaciones" className="legal-section">
        <h2>4. Cancellations and changes</h2>
        <p>The passenger may request changes of date, time or route, subject to availability and to the fare policy of the ticket purchased. Change requests must be made at least <strong>24 hours</strong> before the flight’s departure.</p>
        <p>Cancellations and refunds will be processed in accordance with the fare purchased, the Ley de Aviación Civil (Mexican Civil Aviation Law) and the guidelines of PROFECO (Procuraduría Federal del Consumidor, Mexico’s Federal Consumer Protection Agency). Promotional or lowest-fare tickets may be subject to cancellation charges or may be non-refundable.</p>
        <p>In the event of a cancellation or significant delay attributable to Aerus, the passenger will be entitled to the compensation established in current Mexican aviation regulations.</p>
      </section>

      <section id="equipaje" className="legal-section">
        <h2>5. Baggage</h2>
        <p>Given the nature of the aircraft used by Aerus (Cessna 208B Grand Caravan EX, with a capacity of 9 passengers), cargo space is limited. The applicable baggage conditions are:</p>
        <ul>
          <li><strong>Carry-on baggage:</strong> One piece of up to 5 kg per passenger, with dimensions that allow it to be stowed in the space provided on board.</li>
          <li><strong>Checked baggage:</strong> Subject to cargo availability based on the aircraft’s weight on each flight. Aerus will inform the passenger of the applicable limits when confirming the reservation.</li>
          <li><strong>Prohibited items:</strong> All items listed by the AFAC and by applicable international legislation are prohibited on board.</li>
        </ul>
        <p>Aerus is not responsible for damage to fragile, perishable or insufficiently packed baggage.</p>
      </section>

      <section id="pasajeros" className="legal-section">
        <h2>6. Passenger rights and obligations</h2>
        <p>The passenger has the right to receive the service under the agreed conditions, to be informed in a timely manner of changes to the schedule and to receive dignified treatment at all times.</p>
        <p>The passenger’s obligations are: to arrive at the airport with the advance time indicated by Aerus (at least 45 minutes before departure), to carry valid identity documents, to follow the instructions of the flight crew and not to bring prohibited objects or substances on board.</p>
        <p>Aerus reserves the right to deny boarding to passengers who are intoxicated, under the influence of prohibited substances or who pose a risk to the safety of the flight.</p>
      </section>

      <section id="responsabilidad" className="legal-section">
        <h2>7. Limitation of liability</h2>
        <p>The liability of Aerus for death or bodily injury, destruction or loss of baggage and delays is subject to the limits established by the Ley de Aviación Civil (Mexican Civil Aviation Law), the Código de Comercio (Mexican Commercial Code) and the applicable international conventions.</p>
        <p>Aerus will not be liable for delays caused by adverse weather conditions, decisions of civil aviation authorities, airspace restrictions or other force majeure events.</p>
        <p>The content of the aerus.mx website is provided for informational purposes. Aerus does not guarantee that the information is free of errors and reserves the right to update it without prior notice.</p>
      </section>

      <section id="propiedad" className="legal-section">
        <h2>8. Intellectual property</h2>
        <p>The name &quot;Aerus&quot;, the logo, designs, texts, images and other elements of the website are the property of Aerotransportes Rafilher, S.A. de C.V. or its licensors and are protected by Mexican intellectual property law.</p>
        <p>Any reproduction, distribution or use for commercial purposes without the express written authorization of Aerus is prohibited.</p>
      </section>

      <section id="ley" className="legal-section">
        <h2>9. Governing law and jurisdiction</h2>
        <p>These Terms and Conditions are governed by the laws of the United Mexican States. For any dispute arising from their interpretation or application, the parties submit to the jurisdiction of the competent courts of the city of Monterrey, Nuevo León, expressly waiving any other jurisdiction to which they may be entitled.</p>
        <p>For questions or clarifications, the passenger may write to <a href="mailto:contacto@aerus.mx">contacto@aerus.mx</a>.</p>
      </section>
    </>
  )
}

const BODY = { es: BodyEs, en: BodyEn }

export async function generateMetadata({ params }: PageProps<'/[lang]/legal/terminos-y-condiciones'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function TerminosPage({ params }: PageProps<'/[lang]/legal/terminos-y-condiciones'>) {
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
                <Body />
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
