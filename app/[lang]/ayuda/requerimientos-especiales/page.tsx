import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/requerimientos-especiales/'

/* ── Data ───────────────────────────────────────────────────────────────── */

// Los `id` son anclas compartidas entre idiomas (p. ej. viajar-con-mascota enlaza a
// #animales-servicio), por eso no se traducen.
type ReqSeccion = {
  id: string
  icono: string
  titulo: string
  items: string[]
  nota?: string
}

const SECCIONES: Record<Lang, ReqSeccion[]> = {
  es: [
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
  ],
  en: [
    {
      id: 'movilidad',
      icono: 'support',
      titulo: 'Reduced mobility and wheelchairs',
      items: [
        'Aerus offers wheelchair assistance from the moment you arrive at the airport through boarding, the flight and deplaning at your destination.',
        'Let us know about your needs at least 48 hours before your flight to ensure equipment and staff are available.',
        'Manual and electric wheelchairs are carried in the hold at no extra charge.',
        'Tell us whether your wheelchair is foldable or motorized, as this determines how it is handled in the hold.',
        'Trained staff will accompany you through check-in, security screening and boarding.',
      ],
      nota: 'For electric wheelchairs with lithium batteries, you must notify us at least 72 hours in advance to comply with AFAC (Mexican Federal Civil Aviation Agency) safety regulations.',
    },
    {
      id: 'discapacidad',
      icono: 'users',
      titulo: 'Passengers with disabilities',
      items: [
        'Aerus has trained staff to assist passengers with visual, hearing, cognitive and physical disabilities.',
        'Tell us about your specific needs when you book or at least 48 hours before your flight.',
        'Priority seats are available at the front of the cabin for easier boarding and deplaning.',
        'If you need help boarding or leaving the aircraft, ground staff will accompany you from the departure lounge.',
        'Mobility aids (canes, crutches, walkers) travel in the cabin or the hold free of charge, depending on their size.',
      ],
    },
    {
      id: 'animales-servicio',
      icono: 'shield',
      titulo: 'Service animals',
      items: [
        'Certified service animals (guide dogs, medical alert dogs, mobility assistance dogs) travel in the cabin at no extra charge.',
        'Required documentation: a training certificate issued by a recognized organization, an up-to-date vaccination record and photo ID for the animal.',
        'The animal must remain on the floor in front of your seat for the entire flight and may not occupy a seat.',
        'Emotional support animals (ESAs) do not qualify under this category — see our traveling with pets page for available options.',
      ],
      nota: 'Let us know about your service animal at least 48 hours in advance so we can confirm space and prepare the paperwork.',
    },
    {
      id: 'embarazo',
      icono: 'user',
      titulo: 'Pregnant passengers',
      items: [
        'Up to week 27 of pregnancy: you may fly with no restrictions or additional documentation.',
        'Weeks 28 to 35: a current medical certificate (issued no more than 7 days before the flight) is required, stating the weeks of pregnancy, the absence of complications and clearance to fly.',
        'From week 36 onward: boarding is not permitted on Aerus flights.',
        'For multiple pregnancies (twins, triplets), restrictions apply from week 32.',
        'We recommend requesting an aisle seat for greater comfort during the flight.',
      ],
      nota: 'These policies are for guidance and may be adjusted based on medical evaluation. Consult your doctor before booking and let the Aerus team know about your condition.',
    },
    {
      id: 'adultos-mayores',
      icono: 'users',
      titulo: 'Senior travelers',
      items: [
        'Aerus offers priority assistance to passengers over 65 during check-in, security screening and boarding.',
        'You can request help with your carry-on bag or getting between boarding gates.',
        'Seats with extra legroom are available in the first rows — request them at check-in.',
        'If you need a wheelchair or additional assistance, let us know at least 48 hours in advance.',
        'For medical needs (oxygen, monitoring equipment), see the medical conditions section on this page.',
      ],
    },
    {
      id: 'menores-no-acompanados',
      icono: 'users',
      titulo: 'Unaccompanied minors',
      items: [
        'The Unaccompanied Minor (UM) service applies to children ages 5 to 14 traveling without a responsible adult.',
        'The service must be requested when you purchase the ticket and carries an additional fee of $350 MXN per segment.',
        'A responsible adult must accompany the minor to the boarding gate, and another designated adult must pick them up at the destination.',
        'Aerus staff will accompany the minor throughout their time on the ground and during the flight.',
        'Required documentation: a UM form signed by both parents or guardians, and official ID for the adults dropping off and picking up the minor.',
      ],
      nota: 'Children under 5 may not travel alone under any circumstances. Teens 15 and older travel under the same conditions as adults.',
    },
    {
      id: 'condiciones-medicas',
      icono: 'shield',
      titulo: 'Medical conditions and allergies',
      items: [
        'Supplemental oxygen: if you need it during the flight, notify us at least 72 hours in advance. Aerus may provide it following an evaluation and for an additional fee.',
        'Portable medical devices (CPAP, BiPAP, nebulizers): must run on their own approved battery; let us know at least 48 hours in advance.',
        'Severe allergies (for example, to peanuts): let us know when you book so the crew can take preventive measures on board.',
        'Pacemakers or other implanted devices: inform security staff before going through airport screening.',
        'Special dietary needs: request them in advance when you book so our onboard service can accommodate you.',
      ],
      nota: 'Aerus does not provide onboard medical services. Carry your medication, prescriptions and relevant medical documents in your carry-on bag, not in checked baggage.',
    },
  ],
}

const es = {
  metaTitle: 'Requerimientos especiales | Aerus',
  metaDescription:
    'Asistencia para pasajeros con movilidad reducida, discapacidad, embarazo, menores no acompañados, adultos mayores y condiciones médicas. Vuela con Aerus con total comodidad.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Requerimientos especiales',
  eyebrow: 'Ayuda',
  titleA: 'Requerimientos',
  titleB: 'especiales',
  intro:
    'Aerus busca que todos los pasajeros viajen cómodos y seguros. Cuéntanos lo que necesitas y lo preparamos con anticipación.',
  ctaTitle: '¿Necesitas coordinar asistencia especial?',
  ctaText:
    'Nuestro equipo está disponible para orientarte y preparar todo lo necesario para tu vuelo. Te recomendamos contactarnos con al menos 48 horas de anticipación.',
  contactCta: 'Contactar a Aerus',
  onThisPage: 'En esta página',
  sidebarCta: 'Coordina tu asistencia con al menos 48 horas de anticipación.',
  sidebarBtn: 'Contactar',
}

const en: typeof es = {
  metaTitle: 'Special Assistance | Aerus',
  metaDescription:
    'Assistance for passengers with reduced mobility, disabilities, pregnancy, unaccompanied minors, seniors and medical conditions. Fly with Aerus in complete comfort.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Special assistance',
  eyebrow: 'Help',
  titleA: 'Special',
  titleB: 'assistance',
  intro:
    'At Aerus, we want every passenger to travel comfortably and safely. Tell us what you need and we’ll have it ready in advance.',
  ctaTitle: 'Need to arrange special assistance?',
  ctaText:
    'Our team is here to guide you and prepare everything you need for your flight. We recommend contacting us at least 48 hours in advance.',
  contactCta: 'Contact Aerus',
  onThisPage: 'On this page',
  sidebarCta: 'Arrange your assistance at least 48 hours in advance.',
  sidebarBtn: 'Contact us',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/requerimientos-especiales'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default async function RequerimientosEspecialesPage({ params }: PageProps<'/[lang]/ayuda/requerimientos-especiales'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const secciones = SECCIONES[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="req-hero">
          <div className="container req-hero-inner">
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

        <section className="section-pad req-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div>
                {secciones.map((sec) => (
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
                    <h3 className="req-cta-title">{t.ctaTitle}</h3>
                    <p className="req-cta-text">
                      {t.ctaText}
                    </p>
                    <Link href={lp(lang, '/ayuda/contacto/')} className="btn btn-primary">
                      {t.contactCta}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <h3 className="docs-sidebar-title">{t.onThisPage}</h3>
                  <ul className="req-nav-list">
                    {secciones.map((sec) => (
                      <li key={sec.id}>
                        <a href={`#${sec.id}`} className="req-nav-link">
                          {sec.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="docs-sidebar-cta">
                    <p className="docs-sidebar-cta-text">
                      {t.sidebarCta}
                    </p>
                    <Link href={lp(lang, '/ayuda/contacto/')} className="btn btn-primary docs-sidebar-btn">
                      {t.sidebarBtn}
                    </Link>
                  </div>
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
