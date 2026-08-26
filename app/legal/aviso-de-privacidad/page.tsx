import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de privacidad | Aerus',
  description:
    'Aviso de privacidad de Aerotransportes Rafilher, S.A. de C.V. Conoce cómo tratamos tus datos personales conforme a la LFPDPPP.',
}

const SECTIONS = [
  { id: 'responsable',   label: '1. Responsable del tratamiento' },
  { id: 'datos',         label: '2. Datos personales recabados' },
  { id: 'finalidades',   label: '3. Finalidades del tratamiento' },
  { id: 'transferencias', label: '4. Transferencias de datos' },
  { id: 'arco',          label: '5. Derechos ARCO' },
  { id: 'cookies',       label: '6. Uso de cookies' },
  { id: 'cambios',       label: '7. Cambios al aviso' },
]

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Nav />
      <main>

        <section className="legal-hero">
          <div className="container">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Aviso de privacidad</span>
            </nav>
            <h1 className="legal-titulo">Aviso de privacidad</h1>
            <p className="legal-meta">
              Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">

              <article className="legal-content">

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
                  <p>El sitio aerus.mx utiliza cookies y tecnologías similares para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenidos. Puede consultar el detalle completo en nuestra <Link href="/legal/cookies/">Política de Cookies</Link>.</p>
                  <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, algunas funcionalidades del sitio pueden no estar disponibles si las cookies están deshabilitadas.</p>
                </section>

                <section id="cambios" className="legal-section">
                  <h2>7. Cambios al aviso de privacidad</h2>
                  <p>Aerus se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en aerus.mx con indicación de la fecha de actualización. Se recomienda revisarlo periódicamente. El uso continuado del sitio o de los servicios de Aerus tras la publicación de cambios implica la aceptación del aviso actualizado.</p>
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
                      { label: 'Términos y condiciones', href: '/legal/terminos-y-condiciones/' },
                      { label: 'Política de cookies',    href: '/legal/cookies/' },
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
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Contacto de privacidad</p>
                  <p style={{ font: '400 13px/1.6 var(--font-body)', color: 'var(--forest-500)', marginBottom: 12 }}>
                    Para ejercer derechos ARCO o presentar una queja:
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
      <Newsletter/>
      <Footer />
    </>
  )
}
