// Textos de la página "Facturación" (/ayuda/facturacion).
// Se editan en Sanity (Páginas → Ayuda → Facturación); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda-facturacion.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Paso = { titulo: string; descripcion: string }
type Pregunta = { pregunta: string; respuesta: string }

export type AyudaFacturacionContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  stepsTitle: string
  pasos: Paso[]
  dataTitle: string
  datosNecesarios: string[]
  dataNote: string
  faqTitle: string
  preguntas: Pregunta[]
  portalTag: string
  portalTitle: string
  portalDesc: string
  portalBtn: string
  portalUrl: string
  rfcLabel: string
  rfc: string
  portalNote: string
  helpText: string
  contactCta: string
  contactHref: string
}

const es: AyudaFacturacionContent = {
  seo: {
    metaTitle: 'Facturación | Aerus',
    metaDescription:
      'Solicita la factura CFDI de tu vuelo Aerus en minutos. Ingresa tu número de reservación y datos fiscales en el portal de facturación electrónica.',
  },
  crumb: 'Facturación',
  eyebrow: 'Ayuda',
  titleA: 'Factura tu',
  titleB: 'vuelo',
  intro: 'Solicita tu CFDI en minutos a través del portal de facturación electrónica de Aerus.',
  stepsTitle: 'Cómo facturar tu vuelo',
  pasos: [
    {
      titulo: 'Ten a la mano tu información de vuelo',
      descripcion:
        'Necesitas tu código de reservación (localizador) o número de ticket. Lo encuentras en el correo de confirmación o en la sección Mi Reserva de aerus.mx.',
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
  ],
  dataTitle: 'Datos fiscales que necesitas',
  datosNecesarios: [
    'RFC — 12 caracteres (personas morales) o 13 (personas físicas).',
    'Razón social o nombre completo, tal como aparece en la Constancia de Situación Fiscal.',
    'Régimen fiscal (ej. 601 General de Ley Personas Morales, 612 Personas Físicas con Actividad Empresarial).',
    'Uso de CFDI (ej. G03 Gastos en general, D01 Honorarios médicos, S01 Sin efectos fiscales).',
    'Código postal fiscal — el que aparece en tu Constancia, que puede diferir de tu dirección de correspondencia.',
  ],
  dataNote:
    'La factura debe solicitarse dentro del mismo mes calendario en que se realizó el vuelo. Aerus no puede emitir facturas por vuelos de períodos fiscales anteriores.',
  faqTitle: 'Preguntas comunes',
  preguntas: [
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
  ],
  portalTag: 'Portal de facturación',
  portalTitle: 'Factura tu vuelo en línea',
  portalDesc: 'Ingresa tu número de reservación y datos fiscales para recibir tu CFDI en minutos.',
  portalBtn: 'Facturar mi vuelo',
  portalUrl:
    'https://servicios.sefactura.com.mx/FacturePos/pages/mov_tickets_40.jsp?sucursales=true&rfc=ARA900320NF4',
  rfcLabel: 'RFC Aerus',
  rfc: 'ARA900320NF4',
  portalNote:
    'El portal de facturación se abrirá en una nueva pestaña. Es operado por SeFactura bajo convenio con Aerus.',
  helpText: '¿Necesitas ayuda con tu factura?',
  contactCta: 'Contactar a Aerus',
  contactHref: '/ayuda/contacto/',
}

const en: AyudaFacturacionContent = {
  seo: {
    metaTitle: 'Invoicing | Aerus',
    metaDescription:
      'Request a CFDI (Mexican electronic invoice) for your Aerus flight in minutes. Enter your confirmation number and tax information in the e-invoicing portal.',
  },
  crumb: 'Invoicing',
  eyebrow: 'Help',
  titleA: 'Invoice your',
  titleB: 'flight',
  intro: 'Request your CFDI (Mexican electronic invoice) in minutes through the Aerus e-invoicing portal.',
  stepsTitle: 'How to invoice your flight',
  pasos: [
    {
      titulo: 'Have your flight information handy',
      descripcion:
        'You’ll need your booking code (record locator) or ticket number. You can find it in your confirmation email or in the My Booking section of aerus.mx.',
    },
    {
      titulo: 'Go to the invoicing portal',
      descripcion:
        'Click the "Invoice my flight" button on this page. You’ll be redirected to the Aerus electronic invoicing system, operated by SeFactura.',
    },
    {
      titulo: 'Enter your tax information',
      descripcion:
        'Enter your RFC, legal name, tax regime, CFDI use and tax ZIP code exactly as they appear on your Constancia de Situación Fiscal (tax status certificate) issued by the SAT.',
    },
    {
      titulo: 'Receive your CFDI by email',
      descripcion:
        'Within minutes you’ll receive your invoice in PDF and XML format at the email address you enter in the portal. Keep both files for your accounting records.',
    },
  ],
  dataTitle: 'Tax information you’ll need',
  datosNecesarios: [
    'RFC (Mexican tax ID) — 12 characters (companies) or 13 (individuals).',
    'Legal name or full name, exactly as it appears on your Constancia de Situación Fiscal (tax status certificate).',
    'Tax regime (e.g. 601 General de Ley Personas Morales, 612 Personas Físicas con Actividad Empresarial).',
    'CFDI use (e.g. G03 Gastos en general, D01 Honorarios médicos, S01 Sin efectos fiscales).',
    'Tax ZIP code — the one shown on your Constancia, which may differ from your mailing address.',
  ],
  dataNote:
    'Invoices must be requested within the same calendar month in which the flight took place. Aerus cannot issue invoices for flights from previous tax periods.',
  faqTitle: 'Common questions',
  preguntas: [
    {
      pregunta: 'Can I get an invoice for a flight from a previous month?',
      respuesta:
        'No. Under SAT rules, CFDIs must be issued within the same calendar month in which the service took place. If your flight was in October, you must request your invoice in October.',
    },
    {
      pregunta: 'Can I cancel or correct an invoice that has already been issued?',
      respuesta:
        'Yes, within the time limits set by the SAT. To request an invoice cancellation, contact us with the folio fiscal (UUID) and the reason. Corrections require issuing a credit note and a new invoice.',
    },
    {
      pregunta: 'What should I do if I didn’t receive my invoice by email?',
      respuesta:
        'First, check your spam or junk folder. If it’s not there, you can go back to the portal with your confirmation number to resend it. If the problem persists, contact us and we’ll help you.',
    },
    {
      pregunta: 'Does the invoice include all the charges on my ticket?',
      respuesta:
        'The invoice includes the ticket price and any services purchased in the same transaction (baggage, seat selection). Charges paid in separate transactions may require a separate invoice request.',
    },
  ],
  portalTag: 'Invoicing portal',
  portalTitle: 'Invoice your flight online',
  portalDesc: 'Enter your confirmation number and tax information to receive your CFDI in minutes.',
  portalBtn: 'Invoice my flight',
  portalUrl:
    'https://servicios.sefactura.com.mx/FacturePos/pages/mov_tickets_40.jsp?sucursales=true&rfc=ARA900320NF4',
  rfcLabel: 'Aerus RFC',
  rfc: 'ARA900320NF4',
  portalNote:
    'The invoicing portal will open in a new tab. It is operated by SeFactura under an agreement with Aerus.',
  helpText: 'Need help with your invoice?',
  contactCta: 'Contact Aerus',
  contactHref: '/ayuda/contacto/',
}

const defaults: PageDefaults<AyudaFacturacionContent> = { es, en }
export default defaults
