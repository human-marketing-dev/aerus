// Textos de la página "Viajar con mascota" (/ayuda/viajar-con-mascota).
// Se editan en Sanity (Páginas → Ayuda → Viajar con mascota); esto es el respaldo y la fuente de
// la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda-mascotas.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

// Las `ancla` son identificadores compartidos entre idiomas, por eso no se traducen.
type MascotaSeccion = {
  ancla: string
  icono: string
  titulo: string
  items: string[]
  /** Recuadro opcional al final de la sección ('' = sin nota) */
  nota?: string
}

export type AyudaMascotasContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  serviceRefA: string
  serviceRefStrong: string
  serviceRefB: string
  serviceRefLink: string
  serviceRefHref: string
  secciones: MascotaSeccion[]
  ctaTitle: string
  ctaText: string
  contactCta: string
  contactHref: string
  onThisPage: string
  alsoInHelp: string
  relacionados: { label: string; href: string }[]
}

const es: AyudaMascotasContent = {
  seo: {
    metaTitle: 'Viajar con mascota | Aerus',
    metaDescription:
      'Lleva a tu perro o gato en tu vuelo Aerus. Conoce los requisitos, dimensiones de transportadora, documentación y precios de referencia para viajar con mascota.',
  },
  crumb: 'Viajar con mascota',
  eyebrow: 'Ayuda',
  titleA: 'Viajar con',
  titleB: 'mascota',
  intro:
    'Tu compañero de viaje es bienvenido a bordo. Aquí todo lo que necesitas saber para que el vuelo sea tranquilo para los dos.',
  serviceRefA: '¿Viajas con un ',
  serviceRefStrong: 'animal de servicio',
  serviceRefB: ' (perro guía o de asistencia médica)? Eso es diferente a viajar con mascota y tiene su propio proceso.',
  serviceRefLink: 'Consulta animales de servicio →',
  serviceRefHref: '/ayuda/requerimientos-especiales/#animales-servicio',
  secciones: [
    {
      ancla: 'cabina',
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
      ancla: 'bodega',
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
      ancla: 'precios',
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
      ancla: 'documentacion',
      icono: 'shield',
      titulo: 'Documentación requerida',
      items: [
        'Certificado de salud emitido por médico veterinario certificado, con antigüedad no mayor a 5 días antes del vuelo.',
        'Carnet de vacunas vigentes: rabia, moquillo y parvovirus (perros); rabia y panleucopenia (gatos).',
        'Para vuelos hacia destinos en Estados Unidos: certificado zoosanitario oficial del SENASICA y documentación de importación del país de destino.',
        'Todos los documentos deben presentarse en original en el mostrador de check-in.',
      ],
      nota: '',
    },
    {
      ancla: 'restricciones',
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
      ancla: 'recomendaciones',
      icono: 'check',
      titulo: 'Recomendaciones',
      items: [
        'Habitúa a tu mascota a la transportadora varios días antes del viaje: coloca su cobija o juguete favorito dentro para asociarla con algo positivo.',
        'No alimentes a tu mascota en las 4 horas previas al vuelo para reducir mareos y malestar.',
        'Llega al aeropuerto con al menos 30 minutos adicionales de anticipación para completar la documentación y el pesaje.',
        'Incluye una almohadilla absorbente y una pequeña cantidad de agua dentro de la transportadora.',
        'No administres sedantes sin consultar previamente con tu veterinario — algunos medicamentos pueden ser peligrosos en vuelo.',
      ],
      nota: '',
    },
  ],
  ctaTitle: '¿Tienes dudas sobre tu mascota?',
  ctaText:
    'Contáctanos con al menos 48 horas de anticipación para confirmar disponibilidad, revisar documentación y preparar todo para un vuelo sin sorpresas.',
  contactCta: 'Contactar a Aerus',
  contactHref: '/ayuda/contacto/',
  onThisPage: 'En esta página',
  alsoInHelp: 'También en Ayuda',
  relacionados: [
    { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Equipaje', href: '/ayuda/equipaje/' },
    { label: 'Documentos para viajar', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Tiempos de llegada', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Contacto', href: '/ayuda/contacto/' },
  ],
}

const en: AyudaMascotasContent = {
  seo: {
    metaTitle: 'Traveling with Pets | Aerus',
    metaDescription:
      'Bring your dog or cat on your Aerus flight. Learn about requirements, carrier dimensions, documentation and reference prices for traveling with a pet.',
  },
  crumb: 'Traveling with pets',
  eyebrow: 'Help',
  titleA: 'Traveling with',
  titleB: 'pets',
  intro:
    'Your travel companion is welcome on board. Here’s everything you need to know for a smooth flight for both of you.',
  serviceRefA: 'Traveling with a ',
  serviceRefStrong: 'service animal',
  serviceRefB: ' (guide dog or medical assistance dog)? That’s different from traveling with a pet and has its own process.',
  serviceRefLink: 'See service animals →',
  serviceRefHref: '/ayuda/requerimientos-especiales/#animales-servicio',
  secciones: [
    {
      ancla: 'cabina',
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
      ancla: 'bodega',
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
      ancla: 'precios',
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
      ancla: 'documentacion',
      icono: 'shield',
      titulo: 'Required documents',
      items: [
        'A health certificate issued by a licensed veterinarian no more than 5 days before the flight.',
        'Up-to-date vaccination record: rabies, distemper and parvovirus (dogs); rabies and panleukopenia (cats).',
        'For flights to destinations in the United States: an official SENASICA (Mexican agricultural health authority) zoosanitary certificate and any import documents required by the destination country.',
        'All documents must be presented in original form at the check-in counter.',
      ],
      nota: '',
    },
    {
      ancla: 'restricciones',
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
      ancla: 'recomendaciones',
      icono: 'check',
      titulo: 'Tips',
      items: [
        'Get your pet used to the carrier several days before the trip: put their favorite blanket or toy inside so they associate it with something positive.',
        'Don’t feed your pet in the 4 hours before the flight to reduce motion sickness and discomfort.',
        'Arrive at the airport at least 30 minutes earlier than usual to complete the paperwork and weigh-in.',
        'Place an absorbent pad and a small amount of water inside the carrier.',
        'Don’t give your pet sedatives without first consulting your veterinarian — some medications can be dangerous in flight.',
      ],
      nota: '',
    },
  ],
  ctaTitle: 'Questions about your pet?',
  ctaText:
    'Contact us at least 48 hours in advance to confirm availability, review documents and get everything ready for a hassle-free flight.',
  contactCta: 'Contact Aerus',
  contactHref: '/ayuda/contacto/',
  onThisPage: 'On this page',
  alsoInHelp: 'Also in Help',
  relacionados: [
    { label: 'Special assistance', href: '/ayuda/requerimientos-especiales/' },
    { label: 'Baggage', href: '/ayuda/equipaje/' },
    { label: 'Travel documents', href: '/ayuda/documentos-para-viajar/' },
    { label: 'Airport arrival times', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Contact', href: '/ayuda/contacto/' },
  ],
}

const defaults: PageDefaults<AyudaMascotasContent> = { es, en }
export default defaults
