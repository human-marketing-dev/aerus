// Textos de la página "Preguntas frecuentes" (/ayuda/faq).
// Se editan en Sanity (Páginas → Ayuda → Preguntas frecuentes); esto es el respaldo y la fuente de
// la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda-faq.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type FaqItem = { pregunta: string; respuesta: string }
export type FaqCategoria = { categoria: string; items: FaqItem[] }

export type AyudaFaqContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  categorias: FaqCategoria[]
}

const es: AyudaFaqContent = {
  seo: {
    metaTitle: 'Preguntas Frecuentes | Aerus',
    metaDescription:
      'Respuestas a las preguntas más comunes sobre reservas, equipaje, cambios, abordaje y pagos con Aerus.',
  },
  crumb: 'Preguntas frecuentes',
  eyebrow: 'Ayuda',
  titleA: 'Preguntas',
  titleB: 'frecuentes',
  intro: 'Encuentra respuestas a las dudas más comunes sobre vuelos, equipaje, pagos y más.',
  categorias: [
    {
      categoria: 'Reservas y boletos',
      items: [
        {
          pregunta: '¿Cómo compro un boleto con Aerus?',
          respuesta:
            'Puedes comprar tu boleto en aerus.mx seleccionando origen, destino y fecha. El proceso toma menos de 5 minutos y recibirás confirmación inmediata por correo electrónico con tu itinerario completo.',
        },
        {
          pregunta: '¿Puedo reservar por teléfono?',
          respuesta:
            'Sí. Nuestro centro de atención en México (+52 812 682-3501) y en Estados Unidos (+1 866 691-0179) está disponible de lunes a domingo de 06:00 a 22:00 hrs para ayudarte con tu reservación.',
        },
        {
          pregunta: '¿Cómo recibo mi boleto después de comprar?',
          respuesta:
            'Tu boleto electrónico (e-ticket) se envía de inmediato al correo que registraste durante la compra. Revisa tu carpeta de spam si no lo encuentras en los primeros minutos. También puedes consultarlo en Mi Reserva con tu número de reservación.',
        },
      ],
    },
    {
      categoria: 'Cambios y cancelaciones',
      items: [
        {
          pregunta: '¿Puedo cambiar la fecha de mi vuelo?',
          respuesta:
            'Sí, puedes cambiar la fecha de tu vuelo con al menos 24 horas de anticipación. El cambio está sujeto a disponibilidad y puede aplicar una diferencia de tarifa según la fecha nueva que elijas. Gestiona tu cambio en Mi Reserva o comunícate con nosotros.',
        },
        {
          pregunta: '¿Qué pasa si cancelo mi vuelo?',
          respuesta:
            'Si cancelas con más de 24 horas de anticipación, puedes recibir un crédito de viaje válido por 12 meses aplicable a cualquier vuelo Aerus. Las cancelaciones dentro de las 24 horas previas al vuelo no generan crédito. Consulta la política completa según la tarifa de tu boleto.',
        },
        {
          pregunta: '¿Aerus reembolsa boletos?',
          respuesta:
            'Los reembolsos en la forma de pago original aplican únicamente en tarifas flexibles o cuando Aerus cancela el vuelo. En los demás casos, el valor del boleto se convierte en crédito de viaje que puedes usar en futuras compras.',
        },
      ],
    },
    {
      categoria: 'Equipaje',
      items: [
        {
          pregunta: '¿Cuánto equipaje puedo llevar?',
          respuesta:
            'Todos los boletos incluyen 1 artículo personal (bolsa o mochila, máx. 40×35×20 cm) sin costo. El equipaje de mano (hasta 10 kg, 55×40×25 cm) y el equipaje documentado (hasta 23 kg) se incluyen o se adquieren por separado según la tarifa que hayas seleccionado.',
        },
        {
          pregunta: '¿Cuánto cuesta documentar equipaje adicional?',
          respuesta:
            'La primera maleta documentada tiene un costo desde $350 MXN si la agregas al comprar tu boleto, o $500 MXN al pagar en el mostrador del aeropuerto. Una segunda maleta cuesta desde $600 MXN. Los precios pueden variar según la ruta y la temporada.',
        },
      ],
    },
    {
      categoria: 'Aeropuerto y abordaje',
      items: [
        {
          pregunta: '¿Con cuánta anticipación debo llegar al aeropuerto?',
          respuesta:
            'Recomendamos presentarte al menos 90 minutos antes en vuelos nacionales y 2 horas antes en vuelos internacionales. La puerta de abordaje cierra 20 minutos antes de la salida programada; después de ese momento no se permite el abordaje.',
        },
        {
          pregunta: '¿Cómo hago mi check-in?',
          respuesta:
            'Puedes hacer check-in en línea desde 24 horas y hasta 1 hora antes de tu vuelo en aerus.mx/check-in. También puedes hacerlo en los mostradores del aeropuerto. El check-in en línea te permite seleccionar tu asiento sin costo adicional.',
        },
        {
          pregunta: '¿Qué documentos necesito para volar?',
          respuesta:
            'En vuelos nacionales es suficiente tu credencial del INE o pasaporte vigente. Para vuelos internacionales necesitas pasaporte vigente y, en algunos destinos, visa vigente. Los menores que viajan solos o con uno de sus padres requieren documentación adicional; contáctanos para más detalles.',
        },
      ],
    },
    {
      categoria: 'Pagos y facturación',
      items: [
        {
          pregunta: '¿Qué métodos de pago aceptan?',
          respuesta:
            'Aceptamos tarjetas de crédito y débito Visa, Mastercard y American Express, transferencias SPEI, pagos en efectivo vía OXXO Pay y PayPal. Algunos bancos participantes permiten el pago a meses sin intereses en compras elegibles.',
        },
        {
          pregunta: '¿Cómo obtengo la factura de mi vuelo?',
          respuesta:
            'Solicita tu factura en aerus.mx/ayuda/facturacion ingresando tu número de reservación y los datos fiscales (RFC). Puedes solicitarla dentro de los 30 días naturales siguientes a la fecha de vuelo.',
        },
        {
          pregunta: '¿Puedo pagar en mensualidades?',
          respuesta:
            'Sí, ofrecemos meses sin intereses con tarjetas Banamex, BBVA, Santander, HSBC y Citibanamex en compras superiores a $1,500 MXN. La disponibilidad de plazos varía por banco y está sujeta a las promociones vigentes al momento de la compra.',
        },
      ],
    },
  ],
}

const en: AyudaFaqContent = {
  seo: {
    metaTitle: 'Frequently Asked Questions | Aerus',
    metaDescription:
      'Answers to the most common questions about bookings, baggage, changes, boarding and payments with Aerus.',
  },
  crumb: 'Frequently asked questions',
  eyebrow: 'Help',
  titleA: 'Frequently asked',
  titleB: 'questions',
  intro: 'Find answers to the most common questions about flights, baggage, payments and more.',
  categorias: [
    {
      categoria: 'Bookings and tickets',
      items: [
        {
          pregunta: 'How do I buy a ticket with Aerus?',
          respuesta:
            'You can buy your ticket at aerus.mx by selecting your origin, destination and date. The process takes less than 5 minutes, and you will receive instant email confirmation with your full itinerary.',
        },
        {
          pregunta: 'Can I book by phone?',
          respuesta:
            'Yes. Our customer service centers in Mexico (+52 812 682-3501) and the United States (+1 866 691-0179) are available Monday through Sunday, 6:00 am to 10:00 pm, to help you with your booking.',
        },
        {
          pregunta: 'How do I receive my ticket after purchase?',
          respuesta:
            'Your electronic ticket (e-ticket) is sent immediately to the email address you provided at purchase. If you do not see it within a few minutes, check your spam folder. You can also look it up in My Booking with your confirmation number.',
        },
      ],
    },
    {
      categoria: 'Changes and cancellations',
      items: [
        {
          pregunta: 'Can I change the date of my flight?',
          respuesta:
            'Yes, you can change your flight date at least 24 hours before departure. Changes are subject to availability, and a fare difference may apply depending on the new date you choose. Manage your change in My Booking or contact us.',
        },
        {
          pregunta: 'What happens if I cancel my flight?',
          respuesta:
            'If you cancel more than 24 hours before departure, you may receive a travel credit valid for 12 months toward any Aerus flight. Cancellations within 24 hours of the flight do not earn a credit. Check the full policy for your ticket’s fare.',
        },
        {
          pregunta: 'Does Aerus refund tickets?',
          respuesta:
            'Refunds to the original form of payment apply only to flexible fares or when Aerus cancels the flight. In all other cases, the ticket value is converted into a travel credit you can use on future purchases.',
        },
      ],
    },
    {
      categoria: 'Baggage',
      items: [
        {
          pregunta: 'How much baggage can I bring?',
          respuesta:
            'Every ticket includes 1 personal item (bag or backpack, max. 40×35×20 cm) at no cost. Carry-on baggage (up to 10 kg, 55×40×25 cm) and checked baggage (up to 23 kg) are either included or purchased separately, depending on the fare you selected.',
        },
        {
          pregunta: 'How much does it cost to check an additional bag?',
          respuesta:
            'The first checked bag costs from $350 MXN if you add it when you buy your ticket, or $500 MXN if you pay at the airport counter. A second bag costs from $600 MXN. Prices may vary by route and season.',
        },
      ],
    },
    {
      categoria: 'Airport and boarding',
      items: [
        {
          pregunta: 'How early should I arrive at the airport?',
          respuesta:
            'We recommend arriving at least 90 minutes before domestic flights and 2 hours before international flights. The boarding gate closes 20 minutes before scheduled departure; boarding is not permitted after that time.',
        },
        {
          pregunta: 'How do I check in?',
          respuesta:
            'You can check in online from 24 hours up to 1 hour before your flight at aerus.mx/en/check-in. You can also check in at the airport counters. Online check-in lets you choose your seat at no extra cost.',
        },
        {
          pregunta: 'What documents do I need to fly?',
          respuesta:
            'For domestic flights, your INE voter ID card (Mexican official ID) or a valid passport is sufficient. For international flights you need a valid passport and, for some destinations, a valid visa. Minors traveling alone or with only one parent require additional documentation; contact us for details.',
        },
      ],
    },
    {
      categoria: 'Payments and invoicing',
      items: [
        {
          pregunta: 'What payment methods do you accept?',
          respuesta:
            'We accept Visa, Mastercard and American Express credit and debit cards, SPEI bank transfers, cash payments through OXXO Pay, and PayPal. Some participating banks offer interest-free monthly installments on eligible purchases.',
        },
        {
          pregunta: 'How do I get an invoice for my flight?',
          respuesta:
            'Request your invoice at aerus.mx/en/help/invoicing by entering your confirmation number and tax information (RFC, Mexican tax ID). You can request it within 30 calendar days after your flight date.',
        },
        {
          pregunta: 'Can I pay in monthly installments?',
          respuesta:
            'Yes, we offer interest-free monthly installments with Banamex, BBVA, Santander, HSBC and Citibanamex cards on purchases over $1,500 MXN. Available terms vary by bank and are subject to the promotions in effect at the time of purchase.',
        },
      ],
    },
  ],
}

const defaults: PageDefaults<AyudaFaqContent> = { es, en }
export default defaults
