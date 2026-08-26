import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Facturación | Aerus',
  description:
    'Solicita la factura CFDI de tu vuelo Aerus en minutos. Ingresa tu número de reservación y datos fiscales en el portal de facturación electrónica.',
}

const PORTAL_URL =
  'https://servicios.sefactura.com.mx/FacturePos/pages/mov_tickets_40.jsp?sucursales=true&rfc=ARA900320NF4'

/* ── Data ───────────────────────────────────────────────────────────────── */

const PASOS = [
  {
    titulo: 'Ten a la mano tu información de vuelo',
    descripcion:
      'Necesitas tu código de reservación (localizador) o número de ticket. Lo encuentras en el correo de confirmación o en la sección Mi Vuelo de aerus.mx.',
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
]

const DATOS_NECESARIOS = [
  'RFC — 12 caracteres (personas morales) o 13 (personas físicas).',
  'Razón social o nombre completo, tal como aparece en la Constancia de Situación Fiscal.',
  'Régimen fiscal (ej. 601 General de Ley Personas Morales, 612 Personas Físicas con Actividad Empresarial).',
  'Uso de CFDI (ej. G03 Gastos en general, D01 Honorarios médicos, S01 Sin efectos fiscales).',
  'Código postal fiscal — el que aparece en tu Constancia, que puede diferir de tu dirección de correspondencia.',
]

const PREGUNTAS = [
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
]

/* ── Component ──────────────────────────────────────────────────────────── */

export default function FacturacionPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="fact-hero">
          <div className="container fact-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Facturación</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Ayuda</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Factura tu <span className="accent">vuelo</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Solicita tu CFDI en minutos a través del portal de facturación electrónica de Aerus.
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
                  <h2 className="docs-h2" style={{ marginBottom: 28 }}>Cómo facturar tu vuelo</h2>
                  <ol className="fact-steps">
                    {PASOS.map((paso, i) => (
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
                    <h2 className="docs-h2">Datos fiscales que necesitas</h2>
                  </div>
                  <ul className="docs-list">
                    {DATOS_NECESARIOS.map((dato, i) => (
                      <li key={i}>{dato}</li>
                    ))}
                  </ul>
                  <div className="docs-callout" style={{ marginTop: 20 }}>
                    <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                    <p>
                      La factura debe solicitarse dentro del mismo mes calendario en que se realizó el vuelo.
                      Aerus no puede emitir facturas por vuelos de períodos fiscales anteriores.
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>Preguntas comunes</h2>
                  <dl className="destino-faq">
                    {PREGUNTAS.map((item, i) => (
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
                  <p className="fact-portal-tag">Portal de facturación</p>
                  <h3 className="fact-portal-title">Factura tu vuelo en línea</h3>
                  <p className="fact-portal-desc">
                    Ingresa tu número de reservación y datos fiscales para recibir tu CFDI en minutos.
                  </p>

                  <a
                    href={PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary fact-portal-btn"
                  >
                    Facturar mi vuelo
                    <span className="fact-portal-btn-arr" aria-hidden="true">↗</span>
                  </a>

                  <div className="fact-portal-rfc-row">
                    <span className="fact-portal-rfc-label">RFC Aerus</span>
                    <span className="fact-portal-rfc-val">ARA900320NF4</span>
                  </div>

                  <p className="fact-portal-note">
                    El portal de facturación se abrirá en una nueva pestaña. Es operado por SeFactura bajo convenio con Aerus.
                  </p>
                </div>

                <div className="fact-sidebar-help">
                  <p className="fact-sidebar-help-text">¿Necesitas ayuda con tu factura?</p>
                  <Link href="/ayuda/contacto/" className="docs-related-link" style={{ borderBottom: 'none' }}>
                    <span>Contactar a Aerus</span>
                    <span className="docs-related-arr" aria-hidden="true">›</span>
                  </Link>
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
