import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Viajar con mascota | Aerus',
  description:
    'Lleva a tu perro o gato en tu vuelo Aerus. Conoce los requisitos, dimensiones de transportadora, documentación y precios de referencia para viajar con mascota.',
}

/* ── Data ───────────────────────────────────────────────────────────────── */

type MascotaSeccion = {
  id: string
  icono: string
  titulo: string
  items: string[]
  nota?: string
}

const SECCIONES: MascotaSeccion[] = [
  {
    id: 'cabina',
    icono: 'plane',
    titulo: 'Mascota en cabina',
    items: [
      'Animales aceptados: perros y gatos domésticos únicamente.',
      'Peso máximo: mascota + transportadora ≤ 8 kg en total.',
      'Dimensiones máximas de la transportadora (flexible/blanda): 45 × 28 × 22 cm (largo × ancho × alto).',
      'La transportadora debe caber completamente bajo el asiento frente a ti y permanecer ahí durante todo el vuelo.',
      'Tu mascota no puede salir de la transportadora en ningún momento dentro de la aeronave.',
      'Solo se permite 1 mascota en cabina por pasajero.',
    ],
    nota: 'Cachorros y gatitos menores de 3 meses no son aceptados en cabina. La mascota debe estar acostumbrada a permanecer dentro de la transportadora.',
  },
  {
    id: 'bodega',
    icono: 'luggage',
    titulo: 'Mascota documentada (bodega)',
    items: [
      'Para mascotas que superen el límite de cabina: peso mayor a 8 kg o transportadora que no quepa bajo el asiento.',
      'Peso máximo: mascota + transportadora ≤ 45 kg en total.',
      'Se requiere transportadora rígida homologada IATA con ventilación en al menos 3 lados, cierre de seguridad y chapa.',
      'La mascota debe poder pararse, girar y tenderse cómodamente dentro de la transportadora.',
      'Disponibilidad limitada por vuelo — reserva y confirma con anticipación.',
    ],
    nota: 'No se recomienda el transporte en bodega para mascotas de edad avanzada, enfermas o en condiciones de calor extremo. Aerus no asume responsabilidad por el estado de salud de mascotas en bodega.',
  },
  {
    id: 'precios',
    icono: 'cash',
    titulo: 'Precios de referencia',
    items: [
      'Mascota en cabina: $650 MXN por trayecto (más IVA).',
      'Mascota en bodega: $950 MXN por trayecto (más IVA).',
      'El cargo aplica por mascota y por trayecto (un vuelo de ida + vuelta son 2 trayectos).',
      'El pago se realiza en el mostrador de check-in; actualmente no está disponible el pago en línea para este servicio.',
    ],
    nota: 'Precios de referencia sujetos a cambio sin previo aviso. Confirma el costo vigente al contactar a Aerus o al momento del check-in.',
  },
  {
    id: 'documentacion',
    icono: 'shield',
    titulo: 'Documentación requerida',
    items: [
      'Certificado de salud emitido por médico veterinario certificado, con antigüedad no mayor a 5 días antes del vuelo.',
      'Carnet de vacunas vigentes: rabia, moquillo y parvovirus (perros); rabia y panleucopenia (gatos).',
      'Para vuelos hacia destinos en Estados Unidos: certificado zoosanitario oficial del SENASICA y documentación de importación del país de destino.',
      'Todos los documentos deben presentarse en original en el mostrador de check-in.',
    ],
  },
  {
    id: 'restricciones',
    icono: 'x',
    titulo: 'Restricciones',
    items: [
      'Razas braquicéfalas (nariz achatada) no son aceptadas en bodega por riesgo respiratorio: Bulldog Inglés y Francés, Pug, Boston Terrier, Boxer, Shih Tzu, Lhasa Apso y sus cruces.',
      'Máximo 2 mascotas por vuelo en total (entre cabina y bodega combinados) — disponibilidad sujeta a confirmación al reservar.',
      'No se aceptan mascotas en celo, preñadas en estado avanzado ni con signos visibles de enfermedad o agresividad.',
      'Gatos o perros silvestres, exóticos o no domésticos no son aceptados.',
      'En vuelos internacionales, las regulaciones de aduana y sanidad del país de destino prevalecen sobre la política Aerus.',
    ],
    nota: 'Aerus se reserva el derecho de negar el embarque a cualquier mascota que presente signos de estrés severo o que represente un riesgo para la seguridad a bordo.',
  },
  {
    id: 'recomendaciones',
    icono: 'check',
    titulo: 'Recomendaciones',
    items: [
      'Habitúa a tu mascota a la transportadora varios días antes del viaje: coloca su cobija o juguete favorito dentro para asociarla con algo positivo.',
      'No alimentes a tu mascota en las 4 horas previas al vuelo para reducir mareos y malestar.',
      'Llega al aeropuerto con al menos 30 minutos adicionales de anticipación para completar la documentación y el pesaje.',
      'Incluye una almohadilla absorbente y una pequeña cantidad de agua dentro de la transportadora.',
      'No administres sedantes sin consultar previamente con tu veterinario — algunos medicamentos pueden ser peligrosos en vuelo.',
    ],
  },
]

const RELACIONADOS = [
  { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
  { label: 'Equipaje', href: '/ayuda/equipaje/' },
  { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
  { label: 'Tiempos de llegada', href: '/ayuda/tiempos-aeropuerto/' },
  { label: 'Contacto', href: '/ayuda/contacto/' },
]

/* ── Component ──────────────────────────────────────────────────────────── */

export default function ViajarConMascotaPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mascota-hero">
          <div className="container mascota-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Viajar con mascota</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Ayuda</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Viajar con <span className="accent">mascota</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Tu compañero de viaje es bienvenido a bordo. Aquí todo lo que necesitas saber para que el vuelo sea tranquilo para los dos.
            </p>
          </div>
        </section>

        <section className="section-pad mascota-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div>
                {/* Animals-de-servicio cross-reference */}
                <div className="mascota-service-ref">
                  <Icon name="shield" size={15} className="mascota-service-ref-icon" />
                  <p>
                    ¿Viajas con un <strong>animal de servicio</strong> (perro guía o de asistencia médica)?
                    Eso es diferente a viajar con mascota y tiene su propio proceso.{' '}
                    <Link href="/ayuda/requerimientos-especiales/#animales-servicio">
                      Consulta animales de servicio →
                    </Link>
                  </p>
                </div>

                {SECCIONES.map((sec) => (
                  <div
                    id={sec.id}
                    key={sec.id}
                    className="docs-section req-section"
                  >
                    <div className="docs-section-header">
                      <div className="docs-section-icon">
                        <Icon name={sec.icono} size={20} stroke={1.5} />
                      </div>
                      <h2 className="docs-h2">{sec.titulo}</h2>
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

                {/* Bottom CTA */}
                <div className="req-cta-card">
                  <div className="req-cta-icon">
                    <Icon name="phone" size={22} stroke={1.5} />
                  </div>
                  <div className="req-cta-body">
                    <h3 className="req-cta-title">¿Tienes dudas sobre tu mascota?</h3>
                    <p className="req-cta-text">
                      Contáctanos con al menos 48 horas de anticipación para confirmar disponibilidad,
                      revisar documentación y preparar todo para un vuelo sin sorpresas.
                    </p>
                    <Link href="/ayuda/contacto/" className="btn btn-primary">
                      Contactar a Aerus
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <h3 className="docs-sidebar-title">En esta página</h3>
                  <ul className="req-nav-list">
                    {SECCIONES.map((sec) => (
                      <li key={sec.id}>
                        <a href={`#${sec.id}`} className="req-nav-link">
                          {sec.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="docs-sidebar-title" style={{ marginBottom: 12, marginTop: 4 }}>
                    También en Ayuda
                  </div>
                  <ul className="docs-related-list">
                    {RELACIONADOS.map((r) => (
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
