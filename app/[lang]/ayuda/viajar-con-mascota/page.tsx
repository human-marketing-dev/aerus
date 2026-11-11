import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/viajar-con-mascota/'

/* ── Data ───────────────────────────────────────────────────────────────── */

// Los `id` son anclas compartidas entre idiomas, por eso no se traducen.
type MascotaSeccion = {
  id: string
  icono: string
  titulo: string
  items: string[]
  nota?: string
}

const SECCIONES: Record<Lang, MascotaSeccion[]> = {
  es: [
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
  ],
  en: [
    {
      id: 'cabina',
      icono: 'plane',
      titulo: 'Pets in the cabin',
      items: [
        'Accepted animals: domestic dogs and cats only.',
        'Maximum weight: pet + carrier ≤ 8 kg total.',
        'Maximum carrier dimensions (soft-sided): 45 × 28 × 22 cm (length × width × height).',
        'The carrier must fit completely under the seat in front of you and stay there for the entire flight.',
        'Your pet may not leave the carrier at any time while on board the aircraft.',
        'Only 1 pet per passenger is allowed in the cabin.',
      ],
      nota: 'Puppies and kittens under 3 months old are not accepted in the cabin. Your pet should be used to staying inside its carrier.',
    },
    {
      id: 'bodega',
      icono: 'luggage',
      titulo: 'Checked pets (cargo hold)',
      items: [
        'For pets that exceed the cabin limit: weighing more than 8 kg or with a carrier that does not fit under the seat.',
        'Maximum weight: pet + carrier ≤ 45 kg total.',
        'An IATA-compliant hard-sided carrier is required, with ventilation on at least 3 sides, a secure latch and a lock.',
        'Your pet must be able to stand, turn around and lie down comfortably inside the carrier.',
        'Space is limited on each flight — book and confirm in advance.',
      ],
      nota: 'Travel in the hold is not recommended for elderly or sick pets, or in extreme heat. Aerus assumes no responsibility for the health of pets traveling in the hold.',
    },
    {
      id: 'precios',
      icono: 'cash',
      titulo: 'Reference prices',
      items: [
        'Pet in the cabin: $650 MXN per segment (plus VAT).',
        'Pet in the hold: $950 MXN per segment (plus VAT).',
        'The fee applies per pet and per segment (a round trip counts as 2 segments).',
        'Payment is made at the check-in counter; online payment is not currently available for this service.',
      ],
      nota: 'Reference prices are subject to change without notice. Confirm the current fee when you contact Aerus or at check-in.',
    },
    {
      id: 'documentacion',
      icono: 'shield',
      titulo: 'Required documents',
      items: [
        'A health certificate issued by a licensed veterinarian no more than 5 days before the flight.',
        'Up-to-date vaccination record: rabies, distemper and parvovirus (dogs); rabies and panleukopenia (cats).',
        'For flights to destinations in the United States: an official SENASICA (Mexican agricultural health authority) zoosanitary certificate and any import documents required by the destination country.',
        'All documents must be presented in original form at the check-in counter.',
      ],
    },
    {
      id: 'restricciones',
      icono: 'x',
      titulo: 'Restrictions',
      items: [
        'Brachycephalic (short-nosed) breeds are not accepted in the hold due to respiratory risk: English and French Bulldogs, Pugs, Boston Terriers, Boxers, Shih Tzus, Lhasa Apsos and their mixes.',
        'Maximum of 2 pets per flight in total (cabin and hold combined) — availability subject to confirmation at booking.',
        'Pets in heat, in advanced pregnancy, or showing visible signs of illness or aggression are not accepted.',
        'Wild, exotic or non-domestic cats or dogs are not accepted.',
        'On international flights, the destination country’s customs and health regulations take precedence over Aerus policy.',
      ],
      nota: 'Aerus reserves the right to deny boarding to any pet showing signs of severe stress or posing a risk to safety on board.',
    },
    {
      id: 'recomendaciones',
      icono: 'check',
      titulo: 'Tips',
      items: [
        'Get your pet used to the carrier several days before the trip: put their favorite blanket or toy inside so they associate it with something positive.',
        'Don’t feed your pet in the 4 hours before the flight to reduce motion sickness and discomfort.',
        'Arrive at the airport at least 30 minutes earlier than usual to complete the paperwork and weigh-in.',
        'Place an absorbent pad and a small amount of water inside the carrier.',
        'Don’t give your pet sedatives without first consulting your veterinarian — some medications can be dangerous in flight.',
      ],
    },
  ],
}

const RELACIONADOS: Record<Lang, { label: string; href: string }[]> = {
  es: [
    { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Tiempos de llegada', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Contacto', href: '/ayuda/contacto/' },
  ],
  en: [
    { label: 'Special assistance', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Travel documents', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Airport arrival times', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Contact', href: '/ayuda/contacto/' },
  ],
}

const es = {
  metaTitle: 'Viajar con mascota | Aerus',
  metaDescription:
    'Lleva a tu perro o gato en tu vuelo Aerus. Conoce los requisitos, dimensiones de transportadora, documentación y precios de referencia para viajar con mascota.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Viajar con mascota',
  eyebrow: 'Ayuda',
  titleA: 'Viajar con',
  titleB: 'mascota',
  intro:
    'Tu compañero de viaje es bienvenido a bordo. Aquí todo lo que necesitas saber para que el vuelo sea tranquilo para los dos.',
  serviceRefA: '¿Viajas con un ',
  serviceRefStrong: 'animal de servicio',
  serviceRefB: ' (perro guía o de asistencia médica)? Eso es diferente a viajar con mascota y tiene su propio proceso.',
  serviceRefLink: 'Consulta animales de servicio →',
  ctaTitle: '¿Tienes dudas sobre tu mascota?',
  ctaText:
    'Contáctanos con al menos 48 horas de anticipación para confirmar disponibilidad, revisar documentación y preparar todo para un vuelo sin sorpresas.',
  contactCta: 'Contactar a Aerus',
  onThisPage: 'En esta página',
  alsoInHelp: 'También en Ayuda',
}

const en: typeof es = {
  metaTitle: 'Traveling with Pets | Aerus',
  metaDescription:
    'Bring your dog or cat on your Aerus flight. Learn about requirements, carrier dimensions, documentation and reference prices for traveling with a pet.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Traveling with pets',
  eyebrow: 'Help',
  titleA: 'Traveling with',
  titleB: 'pets',
  intro:
    'Your travel companion is welcome on board. Here’s everything you need to know for a smooth flight for both of you.',
  serviceRefA: 'Traveling with a ',
  serviceRefStrong: 'service animal',
  serviceRefB: ' (guide dog or medical assistance dog)? That’s different from traveling with a pet and has its own process.',
  serviceRefLink: 'See service animals →',
  ctaTitle: 'Questions about your pet?',
  ctaText:
    'Contact us at least 48 hours in advance to confirm availability, review documents and get everything ready for a hassle-free flight.',
  contactCta: 'Contact Aerus',
  onThisPage: 'On this page',
  alsoInHelp: 'Also in Help',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/viajar-con-mascota'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default async function ViajarConMascotaPage({ params }: PageProps<'/[lang]/ayuda/viajar-con-mascota'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const secciones = SECCIONES[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="mascota-hero">
          <div className="container mascota-hero-inner">
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

        <section className="section-pad mascota-body">
          <div className="container">
            <div className="docs-layout">

              {/* Main content */}
              <div>
                {/* Animals-de-servicio cross-reference */}
                <div className="mascota-service-ref">
                  <Icon name="shield" size={15} className="mascota-service-ref-icon" />
                  <p>
                    {t.serviceRefA}<strong>{t.serviceRefStrong}</strong>{t.serviceRefB}{' '}
                    <Link href={lp(lang, '/ayuda/requerimientos-especiales/#animales-servicio')}>
                      {t.serviceRefLink}
                    </Link>
                  </p>
                </div>

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
                  <div className="docs-sidebar-title" style={{ marginBottom: 12, marginTop: 4 }}>
                    {t.alsoInHelp}
                  </div>
                  <ul className="docs-related-list">
                    {RELACIONADOS[lang].map((r) => (
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
