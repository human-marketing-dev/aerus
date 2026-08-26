import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Seguro de cancelación | Aerus',
  description:
    'Protege tu viaje con el seguro de cancelación Aerus. Cubre imprevistos médicos, emergencias familiares y causas de fuerza mayor. Agrégalo al reservar.',
}

const CUBRE = [
  'Enfermedad o accidente del pasajero o familiar directo que impida realizar el viaje, con certificado médico.',
  'Fallecimiento del pasajero o de un familiar en primer grado de consanguinidad.',
  'Citatorio judicial o comparecencia obligatoria ante autoridad gubernamental.',
  'Pérdida involuntaria de empleo del pasajero titular (aplica para viajes de placer, no de negocios asignados).',
  'Daños graves a la propiedad del pasajero (incendio, inundación) que requieran su presencia inmediata.',
  'Emergencia climática o de fuerza mayor declarada por autoridad competente en el destino.',
]

const NO_CUBRE = [
  'Cancelaciones por decisión personal sin causa justificada.',
  'Cambios de plan o preferencias del pasajero.',
  'Condiciones preexistentes de salud no informadas al contratar el seguro.',
  'Cancelaciones realizadas con menos de 4 horas antes del vuelo (excepto emergencias médicas documentadas).',
  'Vuelos cancelados por Aerus por causas imputables a la aerolínea — estos se rigen por la política de reembolso estándar.',
]

const PASOS_CONTRATAR = [
  'Selecciona tu vuelo y agrega el seguro de cancelación durante el proceso de compra.',
  'Recibirás por correo la póliza y los términos y condiciones del seguro.',
  'Si necesitas cancelar, contáctanos antes de la fecha de tu vuelo adjuntando documentación que justifique la causa.',
  'Nuestro equipo evalúa la solicitud en 3-5 días hábiles y procesa el reembolso conforme a los términos de la póliza.',
]

const PREGUNTAS = [
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
]

export default function SeguroDeCancelacionPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/experiencia/">Experiencia</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Seguro de cancelación</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Experiencia Aerus</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Seguro de <span className="accent">cancelación</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              A veces la vida cambia de planes. El seguro de cancelación te devuelve el valor de tu boleto cuando un imprevisto justificado te impide viajar.
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
                      <p className="docs-subtitulo">Causas aceptadas</p>
                      <h2 className="docs-h2">Qué cubre el seguro</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {CUBRE.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>

                {/* Qué NO cubre */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name="x-mark" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Causas excluidas</p>
                      <h2 className="docs-h2">Qué no cubre el seguro</h2>
                    </div>
                  </div>
                  <ul className="docs-list exp-no-cubre-list">
                    {NO_CUBRE.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>

                {/* Cómo contratar */}
                <div className="docs-section" style={{ paddingBottom: 36, marginBottom: 36 }}>
                  <h2 className="docs-h2" style={{ marginBottom: 24 }}>Cómo contratarlo y usarlo</h2>
                  <ol className="fact-steps">
                    {PASOS_CONTRATAR.map((paso, i) => (
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
                  <h2 className="docs-h2" style={{ marginBottom: 20 }}>Preguntas frecuentes</h2>
                  <dl className="destino-faq">
                    {PREGUNTAS.map((p) => (
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
                  <p className="mro-cta-sidebar-titulo">Agrega el seguro al reservar</p>
                  <p className="mro-cta-sidebar-desc">Disponible durante el proceso de compra del boleto.</p>
                  <Link href="/reservar/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Reservar con seguro
                  </Link>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Más información</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Política de equipaje', href: '/ayuda/equipaje/' },
                      { label: 'Preguntas frecuentes', href: '/ayuda/faq/' },
                      { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
                    ].map((r) => (
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
      <Newsletter/>
      <Footer />
    </>
  )
}
