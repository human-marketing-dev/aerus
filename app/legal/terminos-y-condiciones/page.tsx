import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y condiciones | Aerus',
  description:
    'Condiciones generales de uso de los servicios de transporte aéreo de Aerus (Aerotransportes Rafilher, S.A. de C.V.).',
}

const SECTIONS = [
  { id: 'objeto',        label: '1. Objeto y aceptación' },
  { id: 'definiciones',  label: '2. Definiciones' },
  { id: 'reservaciones', label: '3. Reservaciones y tarifas' },
  { id: 'cancelaciones', label: '4. Cancelaciones y cambios' },
  { id: 'equipaje',      label: '5. Equipaje' },
  { id: 'pasajeros',     label: '6. Derechos y obligaciones del pasajero' },
  { id: 'responsabilidad', label: '7. Limitación de responsabilidad' },
  { id: 'propiedad',     label: '8. Propiedad intelectual' },
  { id: 'ley',           label: '9. Ley aplicable y jurisdicción' },
]

export default function TerminosPage() {
  return (
    <>
      <Nav />
      <main>

        <section className="legal-hero">
          <div className="container">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Términos y condiciones</span>
            </nav>
            <h1 className="legal-titulo">Términos y condiciones</h1>
            <p className="legal-meta">
              Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">

              <article className="legal-content">

                <section id="objeto" className="legal-section">
                  <h2>1. Objeto y aceptación</h2>
                  <p>Los presentes Términos y Condiciones regulan el uso del sitio web aerus.mx y la contratación de los servicios de transporte aéreo ofrecidos por Aerotransportes Rafilher, S.A. de C.V. (en adelante <strong>"Aerus"</strong>), con domicilio en Monterrey, Nuevo León, México.</p>
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
                  <p>El nombre "Aerus", el logotipo, los diseños, textos, imágenes y demás elementos del sitio web son propiedad de Aerotransportes Rafilher, S.A. de C.V. o de sus licenciantes y están protegidos por la legislación mexicana en materia de propiedad intelectual.</p>
                  <p>Queda prohibida cualquier reproducción, distribución o uso con fines comerciales sin autorización expresa y por escrito de Aerus.</p>
                </section>

                <section id="ley" className="legal-section">
                  <h2>9. Ley aplicable y jurisdicción</h2>
                  <p>Los presentes Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o aplicación, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Monterrey, Nuevo León, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>
                  <p>Para dudas o aclaraciones, el pasajero puede dirigirse a <a href="mailto:contacto@aerus.mx">contacto@aerus.mx</a>.</p>
                </section>

              </article>

              <aside className="legal-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">Contenido</p>
                  <ul className="legal-toc">
                    {SECTIONS.map(s => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="legal-toc-link">{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Otros documentos legales</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Aviso de privacidad', href: '/legal/aviso-de-privacidad/' },
                      { label: 'Política de cookies',  href: '/legal/cookies/' },
                    ].map(r => (
                      <li key={r.href}>
                        <Link href={r.href} className="docs-related-link">
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
      <Footer />
    </>
  )
}
