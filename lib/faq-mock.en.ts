import type { FaqCategoria } from './faq-mock'

// Versión en inglés de FAQ_CATEGORIAS (lib/faq-mock.ts). Mantener el mismo orden y contenido.
export const FAQ_CATEGORIAS_EN: FaqCategoria[] = [
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
]
