import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Requerimientos especiales | Aerus',
  description:
    'Asistencia para pasajeros con movilidad reducida, discapacidad, embarazo, menores no acompañados, adultos mayores y condiciones médicas. Vuela con Aerus con total comodidad.',
}

/* ── Data ───────────────────────────────────────────────────────────────── */

type ReqSeccion = {
  id: string
  icono: string
  titulo: string
  items: string[]
  nota?: string
}

const SECCIONES: ReqSeccion[] = [
  {
    id: 'movilidad',
    icono: 'support',
    titulo: 'Movilidad reducida y silla de ruedas',
    items: [
      'Aerus ofrece asistencia en silla de ruedas desde tu llegada al aeropuerto hasta el abordaje, vuelo y descenso en destino.',
      'Notifica tu requerimiento al menos 48 horas antes del vuelo para garantizar disponibilidad de equipo y personal.',
      'Las sillas de ruedas manuales y eléctricas se transportan sin cargo adicional en bodega.',
      'Informa si tu silla es plegable o motorizada, ya que esto determina cómo se maneja en bodega.',
      'Personal capacitado te acompañará en el proceso de registro, controles de seguridad y abordaje.',
    ],
    nota: 'Para sillas de ruedas eléctricas con batería de litio, es obligatorio notificar con al menos 72 horas de anticipación para cumplir regulaciones de seguridad de la AFAC.',
  },
  {
    id: 'discapacidad',
    icono: 'users',
    titulo: 'Pasajeros con discapacidad',
    items: [
      'Aerus cuenta con personal capacitado para asistir a pasajeros con discapacidad visual, auditiva, cognitiva y física.',
      'Comunica tu necesidad específica al momento de reservar o al menos 48 horas antes de tu vuelo.',
      'Disponemos de asientos prioritarios en la parte delantera de la cabina para facilitar el acceso y la salida.',
      'Si requieres asistencia para abordar o bajar del avión, el personal de tierra te acompañará desde la sala de espera.',
      'Las ayudas técnicas (bastones, muletas, andaderas) viajan en cabina o bodega sin cargo según su tamaño.',
    ],
  },
  {
    id: 'animales-servicio',
    icono: 'shield',
    titulo: 'Animales de servicio',
    items: [
      'Los animales de servicio certificados (perros guía, perros de alerta médica, perros de asistencia motriz) viajan en cabina sin cargo adicional.',
      'Documentación requerida: certificado de entrenamiento emitido por organización reconocida, carnet de vacunas vigente e identificación con foto del animal.',
      'El animal debe permanecer en el suelo frente a tu asiento durante todo el vuelo, sin ocupar un asiento.',
      'Los animales de soporte emocional (ESA) no califican bajo esta categoría — consulta nuestra página de viajar con mascota para opciones disponibles.',
    ],
    nota: 'Notifica tu animal de servicio con al menos 48 horas de anticipación para confirmar espacio disponible y preparar la documentación.',
  },
  {
    id: 'embarazo',
    icono: 'user',
    titulo: 'Mujeres embarazadas',
    items: [
      'Hasta la semana 27 de gestación: pueden volar sin restricciones ni documentación adicional.',
      'Semana 28 a 35: se requiere certificado médico vigente (no mayor a 7 días antes del vuelo) que indique semanas de gestación, ausencia de complicaciones y autorización para volar.',
      'A partir de la semana 36: no se permite el embarque en vuelos Aerus.',
      'Para embarazos múltiples (gemelos, trillizos), las restricciones aplican a partir de la semana 32.',
      'Se recomienda solicitar asiento junto al pasillo para mayor comodidad durante el vuelo.',
    ],
    nota: 'Estas políticas son orientativas y pueden ajustarse según evaluación médica. Consulta con tu médico tratante antes de reservar y comunica tu estado al equipo de Aerus.',
  },
  {
    id: 'adultos-mayores',
    icono: 'users',
    titulo: 'Adultos mayores',
    items: [
      'Aerus ofrece asistencia preferencial a pasajeros mayores de 65 años durante el registro, controles de seguridad y abordaje.',
      'Puedes solicitar ayuda con el equipaje de mano o el desplazamiento entre puertas de abordaje.',
      'Asientos con mayor espacio para piernas están disponibles en las primeras filas — solicítalos durante el check-in.',
      'Si requieres silla de ruedas o asistencia adicional, notifícalo con al menos 48 horas de anticipación.',
      'Para necesidades médicas (oxígeno, equipo de monitoreo), consulta la sección de condiciones médicas en esta página.',
    ],
  },
  {
    id: 'menores-no-acompanados',
    icono: 'users',
    titulo: 'Menores no acompañados',
    items: [
      'El servicio de Menor No Acompañado (MNA) aplica para niños de 5 a 14 años que viajan sin un adulto responsable.',
      'El servicio debe solicitarse obligatoriamente al momento de comprar el boleto; tiene un cargo adicional de $350 MXN por trayecto.',
      'Un adulto responsable debe acompañar al menor hasta la puerta de abordaje, y otro adulto designado debe recibirlo a la salida en el destino.',
      'Personal de Aerus acompañará al menor durante toda la estadía en tierra y durante el vuelo.',
      'Documentación requerida: formulario MNA firmado por ambos padres o tutores, e identificación oficial de quienes entregan y reciben al menor.',
    ],
    nota: 'Niños menores de 5 años no pueden viajar solos bajo ninguna circunstancia. Adolescentes de 15 años en adelante viajan bajo las mismas condiciones que adultos.',
  },
  {
    id: 'condiciones-medicas',
    icono: 'shield',
    titulo: 'Condiciones médicas y alergias',
    items: [
      'Oxígeno suplementario: si lo requieres durante el vuelo, notifica con al menos 72 horas de anticipación. Aerus puede proveerlo previa evaluación y con cargo adicional.',
      'Equipos médicos portátiles (CPAP, BIPAP, nebulizadores): deben operar con batería propia aprobada; informa con 48 horas mínimo.',
      'Alergias severas (por ejemplo, a cacahuates): notifica al reservar para que el personal tome medidas preventivas a bordo.',
      'Marcapasos u otros dispositivos implantados: informa al personal de seguridad antes de pasar los controles del aeropuerto.',
      'Necesidades dietéticas especiales: solicítalas con anticipación al momento de tu reservación para que el servicio a bordo pueda atenderte.',
    ],
    nota: 'Aerus no cuenta con servicio médico a bordo. Lleva tus medicamentos, recetas y documentación médica relevante en tu equipaje de mano, no en bodega.',
  },
]

/* ── Component ──────────────────────────────────────────────────────────── */

export default function RequerimientosEspecialesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="req-hero">
          <div className="container req-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Requerimientos especiales</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Ayuda</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Requerimientos <span className="accent">especiales</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Aerus busca que todos los pasajeros viajen cómodos y seguros. Cuéntanos lo que necesitas y lo preparamos con anticipación.
            </p>
          </div>
        </section>

        <section className="section-pad req-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div>
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
                    <h3 className="req-cta-title">¿Necesitas coordinar asistencia especial?</h3>
                    <p className="req-cta-text">
                      Nuestro equipo está disponible para orientarte y preparar todo lo necesario para tu vuelo. Te recomendamos contactarnos con al menos 48 horas de anticipación.
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
                  <div className="docs-sidebar-cta">
                    <p className="docs-sidebar-cta-text">
                      Coordina tu asistencia con al menos 48 horas de anticipación.
                    </p>
                    <Link href="/ayuda/contacto/" className="btn btn-primary docs-sidebar-btn">
                      Contactar
                    </Link>
                  </div>
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
