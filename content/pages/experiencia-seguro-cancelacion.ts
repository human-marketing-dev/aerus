// Textos de la página "Seguro de cancelación" (/experiencia/seguro-de-cancelacion).
// Se editan en Sanity (Páginas → Experiencia → Seguro de cancelación); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que sanity/schemaTypes/pages/experiencia-seguro-cancelacion.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Pregunta = { pregunta: string; respuesta: string }
type Relacionado = { label: string; href: string }

export type SeguroCancelacionContent = {
  seo: PageSeo
  crumb: string
  heroEyebrow: string
  heroTitlePre: string
  heroTitleAccent: string
  heroIntro: string
  cubreSubtitulo: string
  cubreTitle: string
  cubre: string[]
  noCubreSubtitulo: string
  noCubreTitle: string
  noCubre: string[]
  contratarTitle: string
  pasosContratar: string[]
  faqTitle: string
  preguntas: Pregunta[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
  relacionadosTitle: string
  relacionados: Relacionado[]
}

const es: SeguroCancelacionContent = {
  seo: {
    metaTitle: 'Seguro de cancelación | Aerus',
    metaDescription:
      'Protege tu viaje con el seguro de cancelación Aerus. Cubre imprevistos médicos, emergencias familiares y causas de fuerza mayor. Agrégalo al reservar.',
  },
  crumb: 'Seguro de cancelación',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Seguro de ',
  heroTitleAccent: 'cancelación',
  heroIntro:
    'A veces la vida cambia de planes. El seguro de cancelación te devuelve el valor de tu boleto cuando un imprevisto justificado te impide viajar.',
  cubreSubtitulo: 'Causas aceptadas',
  cubreTitle: 'Qué cubre el seguro',
  cubre: [
    'Enfermedad o accidente del pasajero o familiar directo que impida realizar el viaje, con certificado médico.',
    'Fallecimiento del pasajero o de un familiar en primer grado de consanguinidad.',
    'Citatorio judicial o comparecencia obligatoria ante autoridad gubernamental.',
    'Pérdida involuntaria de empleo del pasajero titular (aplica para viajes de placer, no de negocios asignados).',
    'Daños graves a la propiedad del pasajero (incendio, inundación) que requieran su presencia inmediata.',
    'Emergencia climática o de fuerza mayor declarada por autoridad competente en el destino.',
  ],
  noCubreSubtitulo: 'Causas excluidas',
  noCubreTitle: 'Qué no cubre el seguro',
  noCubre: [
    'Cancelaciones por decisión personal sin causa justificada.',
    'Cambios de plan o preferencias del pasajero.',
    'Condiciones preexistentes de salud no informadas al contratar el seguro.',
    'Cancelaciones realizadas con menos de 4 horas antes del vuelo (excepto emergencias médicas documentadas).',
    'Vuelos cancelados por Aerus por causas imputables a la aerolínea — estos se rigen por la política de reembolso estándar.',
  ],
  contratarTitle: 'Cómo contratarlo y usarlo',
  pasosContratar: [
    'Selecciona tu vuelo y agrega el seguro de cancelación durante el proceso de compra.',
    'Recibirás por correo la póliza y los términos y condiciones del seguro.',
    'Si necesitas cancelar, contáctanos antes de la fecha de tu vuelo adjuntando documentación que justifique la causa.',
    'Nuestro equipo evalúa la solicitud en 3-5 días hábiles y procesa el reembolso conforme a los términos de la póliza.',
  ],
  faqTitle: 'Preguntas frecuentes',
  preguntas: [
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
  ],
  ctaTitle: 'Agrega el seguro al reservar',
  ctaDesc: 'Disponible durante el proceso de compra del boleto.',
  ctaButton: 'Reservar con seguro',
  ctaHref: '/reservar/',
  relacionadosTitle: 'Más información',
  relacionados: [
    { label: 'Política de equipaje', href: '/ayuda/equipaje/' },
    { label: 'Preguntas frecuentes', href: '/ayuda/faq/' },
    { label: 'Contacto Aerus', href: '/ayuda/contacto/' },
  ],
}

const en: SeguroCancelacionContent = {
  seo: {
    metaTitle: 'Cancellation Insurance | Aerus',
    metaDescription:
      'Protect your trip with Aerus cancellation insurance. It covers medical emergencies, family emergencies and force majeure events. Add it when you book.',
  },
  crumb: 'Cancellation insurance',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Cancellation ',
  heroTitleAccent: 'insurance',
  heroIntro:
    'Sometimes life changes your plans. Cancellation insurance refunds the value of your ticket when a valid, unforeseen event keeps you from traveling.',
  cubreSubtitulo: 'Covered reasons',
  cubreTitle: 'What the insurance covers',
  cubre: [
    'Illness or injury of the passenger or an immediate family member that prevents travel, supported by a medical certificate.',
    'Death of the passenger or of a first-degree blood relative.',
    'Court summons or mandatory appearance before a government authority.',
    'Involuntary job loss of the primary passenger (applies to leisure travel, not assigned business travel).',
    'Serious damage to the passenger’s property (fire, flood) that requires their immediate presence.',
    'Weather emergency or force majeure event declared by the competent authority at the destination.',
  ],
  noCubreSubtitulo: 'Excluded reasons',
  noCubreTitle: 'What the insurance doesn’t cover',
  noCubre: [
    'Cancellations due to personal choice without a valid reason.',
    'Change of plans or passenger preferences.',
    'Pre-existing health conditions not disclosed when purchasing the insurance.',
    'Cancellations made less than 4 hours before the flight (except for documented medical emergencies).',
    'Flights canceled by Aerus for reasons attributable to the airline — these are governed by the standard refund policy.',
  ],
  contratarTitle: 'How to purchase and use it',
  pasosContratar: [
    'Select your flight and add cancellation insurance during checkout.',
    'You’ll receive the policy and the insurance terms and conditions by email.',
    'If you need to cancel, contact us before your flight date and attach documentation supporting the reason.',
    'Our team reviews the request within 3–5 business days and processes the refund in accordance with the policy terms.',
  ],
  faqTitle: 'Frequently asked questions',
  preguntas: [
    {
      pregunta: 'How much does cancellation insurance cost?',
      respuesta: 'The cost varies by fare and destination. It is calculated as a percentage of the ticket price and is shown during checkout before you confirm payment.',
    },
    {
      pregunta: 'Can I add insurance after buying my ticket?',
      respuesta: 'Cancellation insurance must be purchased at the time you buy your ticket. It cannot be added retroactively.',
    },
    {
      pregunta: 'What percentage of my ticket will I get back?',
      respuesta: 'Depending on the reason and the documentation provided, the refund can be up to 100% of the base fare, excluding non-refundable airport fees and taxes.',
    },
    {
      pregunta: 'Does the insurance also cover my baggage?',
      respuesta: 'No. Cancellation insurance covers only the cost of your airline ticket. For lost or damaged baggage, the Aerus baggage policy applies in accordance with Mexico’s Civil Aviation Law (Ley de Aviación Civil).',
    },
  ],
  ctaTitle: 'Add insurance when you book',
  ctaDesc: 'Available during the ticket purchase process.',
  ctaButton: 'Book with insurance',
  ctaHref: '/reservar/',
  relacionadosTitle: 'More information',
  relacionados: [
    { label: 'Baggage policy', href: '/ayuda/equipaje/' },
    { label: 'FAQ', href: '/ayuda/faq/' },
    { label: 'Contact Aerus', href: '/ayuda/contacto/' },
  ],
}

const defaults: PageDefaults<SeguroCancelacionContent> = { es, en }
export default defaults
