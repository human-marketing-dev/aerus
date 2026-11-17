// Textos de la página "Términos y condiciones" (/legal/terminos-y-condiciones).
// Se editan en Sanity (Páginas → Legales → Términos y condiciones); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/terminos-y-condiciones.ts.
import type { PageDefaults } from '@/lib/content'
import { p, rt, ul } from '@/content/richtext'
import { AVISO_TRADUCCION_EN, type LegalBase } from './_legal'

export type TerminosContent = LegalBase

const es: TerminosContent = {
  seo: {
    metaTitle: 'Términos y condiciones | Aerus',
    metaDescription:
      'Condiciones generales de uso de los servicios de transporte aéreo de Aerus (Aerotransportes Rafilher, S.A. de C.V.).',
  },
  title: 'Términos y condiciones',
  meta: 'Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025',
  avisoTraduccion: '',
  secciones: [
    {
      ancla: 'objeto',
      indice: '1. Objeto y aceptación',
      titulo: '1. Objeto y aceptación',
      cuerpo: rt(
        p('Los presentes Términos y Condiciones regulan el uso del sitio web aerus.mx y la contratación de los servicios de transporte aéreo ofrecidos por Aerotransportes Rafilher, S.A. de C.V. (en adelante **"Aerus"**), con domicilio en Monterrey, Nuevo León, México.'),
        p('Al realizar una reservación, adquirir un boleto o utilizar los servicios de Aerus, el pasajero manifiesta su conformidad plena con estos términos. Si no está de acuerdo con alguna disposición, deberá abstenerse de contratar los servicios.'),
      ),
    },
    {
      ancla: 'definiciones',
      indice: '2. Definiciones',
      titulo: '2. Definiciones',
      cuerpo: rt(
        ul(
          '**Aerus:** Aerotransportes Rafilher, S.A. de C.V., operadora de los vuelos bajo la concesión otorgada por la AFAC.',
          '**Pasajero:** Toda persona que adquiere un boleto o utiliza los servicios de transporte aéreo de Aerus.',
          '**Boleto:** Documento físico o electrónico que acredita el derecho del pasajero a abordar un vuelo en las condiciones pactadas.',
          '**Tarifa:** Precio publicado por Aerus para cada ruta y clase de servicio, sujeto a disponibilidad.',
          '**Vuelo regular:** Servicio de transporte aéreo operado conforme a itinerario publicado.',
          '**Vuelo chárter:** Servicio de transporte aéreo bajo contrato específico, fuera del itinerario regular.',
        ),
      ),
    },
    {
      ancla: 'reservaciones',
      indice: '3. Reservaciones y tarifas',
      titulo: '3. Reservaciones y tarifas',
      cuerpo: rt(
        p('Las reservaciones pueden realizarse a través del sitio web oficial, el centro de atención telefónica o los canales autorizados por Aerus. La reservación queda confirmada una vez recibido el comprobante de pago correspondiente.'),
        p('Las tarifas se expresan en pesos mexicanos e incluyen los impuestos y cargos aplicables conforme a la legislación vigente. Aerus se reserva el derecho de modificar tarifas antes de que se confirme la reservación; una vez emitido el boleto, el precio queda fijo.'),
        p('Los boletos son personales e intransferibles. El nombre del pasajero debe coincidir exactamente con el documento de identidad presentado al momento del abordaje.'),
      ),
    },
    {
      ancla: 'cancelaciones',
      indice: '4. Cancelaciones y cambios',
      titulo: '4. Cancelaciones y cambios',
      cuerpo: rt(
        p('El pasajero podrá solicitar cambios de fecha, horario o ruta sujeto a disponibilidad y a la política tarifaria del boleto adquirido. Las solicitudes de cambio deben realizarse con un mínimo de **24 horas** antes de la salida del vuelo.'),
        p('Las cancelaciones y reembolsos se procesarán conforme a la tarifa contratada y a la Ley de Aviación Civil y los lineamientos de la PROFECO. Los boletos promocionales o de tarifa mínima pueden estar sujetos a cargos de cancelación o no ser reembolsables.'),
        p('En caso de cancelación o retraso significativo imputable a Aerus, el pasajero tendrá derecho a las compensaciones establecidas en la normativa aeronáutica mexicana vigente.'),
      ),
    },
    {
      ancla: 'equipaje',
      indice: '5. Equipaje',
      titulo: '5. Equipaje',
      cuerpo: rt(
        p('Dada la naturaleza de la aeronave utilizada por Aerus (Cessna 208B Grand Caravan EX, capacidad de 9 pasajeros), el espacio de carga es limitado. Las condiciones de equipaje aplicables son:'),
        ul(
          '**Equipaje de mano:** Una pieza de hasta 5 kg por pasajero, con dimensiones que permitan su ubicación en el espacio habilitado a bordo.',
          '**Equipaje documentado:** Sujeto a disponibilidad de carga según el peso de la aeronave en cada vuelo. Aerus comunicará al pasajero los límites aplicables al confirmar la reservación.',
          '**Artículos prohibidos:** Quedan prohibidos a bordo todos los artículos listados por la AFAC y la legislación internacional aplicable.',
        ),
        p('Aerus no se hace responsable por daños a equipaje frágil, perecedero o insuficientemente embalado.'),
      ),
    },
    {
      ancla: 'pasajeros',
      indice: '6. Derechos y obligaciones del pasajero',
      titulo: '6. Derechos y obligaciones del pasajero',
      cuerpo: rt(
        p('El pasajero tiene derecho a recibir el servicio en las condiciones pactadas, a ser informado oportunamente sobre cambios en el itinerario y a recibir atención digna en todo momento.'),
        p('Son obligaciones del pasajero: presentarse en el aeropuerto con la anticipación indicada por Aerus (mínimo 45 minutos antes de la salida), portar documentación de identidad válida, cumplir con las instrucciones del personal de vuelo y no introducir a bordo objetos o sustancias prohibidas.'),
        p('Aerus se reserva el derecho de negar el abordaje a pasajeros que se presenten en estado de ebriedad, bajo efecto de sustancias prohibidas o que representen un riesgo para la seguridad del vuelo.'),
      ),
    },
    {
      ancla: 'responsabilidad',
      indice: '7. Limitación de responsabilidad',
      titulo: '7. Limitación de responsabilidad',
      cuerpo: rt(
        p('La responsabilidad de Aerus por muerte o lesiones corporales, destrucción o pérdida de equipaje y retrasos está sujeta a los límites establecidos por la Ley de Aviación Civil, el Código de Comercio y los convenios internacionales aplicables.'),
        p('Aerus no será responsable por retrasos causados por condiciones meteorológicas adversas, decisiones de autoridades de aviación civil, restricciones de espacio aéreo u otras causas de fuerza mayor.'),
        p('El contenido del sitio web aerus.mx se proporciona con carácter informativo. Aerus no garantiza que la información esté libre de errores y se reserva el derecho de actualizarla sin previo aviso.'),
      ),
    },
    {
      ancla: 'propiedad',
      indice: '8. Propiedad intelectual',
      titulo: '8. Propiedad intelectual',
      cuerpo: rt(
        p('El nombre "Aerus", el logotipo, los diseños, textos, imágenes y demás elementos del sitio web son propiedad de Aerotransportes Rafilher, S.A. de C.V. o de sus licenciantes y están protegidos por la legislación mexicana en materia de propiedad intelectual.'),
        p('Queda prohibida cualquier reproducción, distribución o uso con fines comerciales sin autorización expresa y por escrito de Aerus.'),
      ),
    },
    {
      ancla: 'ley',
      indice: '9. Ley aplicable y jurisdicción',
      titulo: '9. Ley aplicable y jurisdicción',
      cuerpo: rt(
        p('Los presentes Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o aplicación, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Monterrey, Nuevo León, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.'),
        p('Para dudas o aclaraciones, el pasajero puede dirigirse a [contacto@aerus.mx](mailto:contacto@aerus.mx).'),
      ),
    },
  ],
  tocTitle: 'Contenido',
  otherTitle: 'Otros documentos legales',
  otherDocs: [
    { label: 'Aviso de privacidad', href: '/legal/aviso-de-privacidad/' },
    { label: 'Política de cookies', href: '/legal/cookies/' },
  ],
}

const en: TerminosContent = {
  seo: {
    metaTitle: 'Terms and Conditions | Aerus',
    metaDescription:
      'General terms of use for the air transportation services of Aerus (Aerotransportes Rafilher, S.A. de C.V.).',
  },
  title: 'Terms and Conditions',
  meta: 'Aerotransportes Rafilher, S.A. de C.V. · Last updated: August 2025',
  avisoTraduccion: AVISO_TRADUCCION_EN,
  secciones: [
    {
      ancla: 'objeto',
      indice: '1. Purpose and acceptance',
      titulo: '1. Purpose and acceptance',
      cuerpo: rt(
        p('These Terms and Conditions govern the use of the aerus.mx website and the purchase of the air transportation services offered by Aerotransportes Rafilher, S.A. de C.V. (hereinafter **"Aerus"**), with its address in Monterrey, Nuevo León, Mexico.'),
        p('By making a reservation, purchasing a ticket or using the services of Aerus, the passenger expresses full agreement with these terms. If the passenger does not agree with any provision, the passenger must refrain from purchasing the services.'),
      ),
    },
    {
      ancla: 'definiciones',
      indice: '2. Definitions',
      titulo: '2. Definitions',
      cuerpo: rt(
        ul(
          '**Aerus:** Aerotransportes Rafilher, S.A. de C.V., operator of the flights under the concession granted by the AFAC (Agencia Federal de Aviación Civil, Mexico’s Federal Civil Aviation Agency).',
          '**Passenger:** Any person who purchases a ticket or uses the air transportation services of Aerus.',
          '**Ticket:** Physical or electronic document that evidences the passenger’s right to board a flight under the agreed conditions.',
          '**Fare:** Price published by Aerus for each route and class of service, subject to availability.',
          '**Scheduled flight:** Air transportation service operated according to a published schedule.',
          '**Charter flight:** Air transportation service under a specific contract, outside the regular schedule.',
        ),
      ),
    },
    {
      ancla: 'reservaciones',
      indice: '3. Reservations and fares',
      titulo: '3. Reservations and fares',
      cuerpo: rt(
        p('Reservations may be made through the official website, the call center or the channels authorized by Aerus. The reservation is confirmed once the corresponding proof of payment has been received.'),
        p('Fares are expressed in Mexican pesos and include the applicable taxes and charges in accordance with current legislation. Aerus reserves the right to modify fares before the reservation is confirmed; once the ticket has been issued, the price is fixed.'),
        p('Tickets are personal and non-transferable. The passenger’s name must exactly match the identity document presented at boarding.'),
      ),
    },
    {
      ancla: 'cancelaciones',
      indice: '4. Cancellations and changes',
      titulo: '4. Cancellations and changes',
      cuerpo: rt(
        p('The passenger may request changes of date, time or route, subject to availability and to the fare policy of the ticket purchased. Change requests must be made at least **24 hours** before the flight’s departure.'),
        p('Cancellations and refunds will be processed in accordance with the fare purchased, the Ley de Aviación Civil (Mexican Civil Aviation Law) and the guidelines of PROFECO (Procuraduría Federal del Consumidor, Mexico’s Federal Consumer Protection Agency). Promotional or lowest-fare tickets may be subject to cancellation charges or may be non-refundable.'),
        p('In the event of a cancellation or significant delay attributable to Aerus, the passenger will be entitled to the compensation established in current Mexican aviation regulations.'),
      ),
    },
    {
      ancla: 'equipaje',
      indice: '5. Baggage',
      titulo: '5. Baggage',
      cuerpo: rt(
        p('Given the nature of the aircraft used by Aerus (Cessna 208B Grand Caravan EX, with a capacity of 9 passengers), cargo space is limited. The applicable baggage conditions are:'),
        ul(
          '**Carry-on baggage:** One piece of up to 5 kg per passenger, with dimensions that allow it to be stowed in the space provided on board.',
          '**Checked baggage:** Subject to cargo availability based on the aircraft’s weight on each flight. Aerus will inform the passenger of the applicable limits when confirming the reservation.',
          '**Prohibited items:** All items listed by the AFAC and by applicable international legislation are prohibited on board.',
        ),
        p('Aerus is not responsible for damage to fragile, perishable or insufficiently packed baggage.'),
      ),
    },
    {
      ancla: 'pasajeros',
      indice: '6. Passenger rights and obligations',
      titulo: '6. Passenger rights and obligations',
      cuerpo: rt(
        p('The passenger has the right to receive the service under the agreed conditions, to be informed in a timely manner of changes to the schedule and to receive dignified treatment at all times.'),
        p('The passenger’s obligations are: to arrive at the airport with the advance time indicated by Aerus (at least 45 minutes before departure), to carry valid identity documents, to follow the instructions of the flight crew and not to bring prohibited objects or substances on board.'),
        p('Aerus reserves the right to deny boarding to passengers who are intoxicated, under the influence of prohibited substances or who pose a risk to the safety of the flight.'),
      ),
    },
    {
      ancla: 'responsabilidad',
      indice: '7. Limitation of liability',
      titulo: '7. Limitation of liability',
      cuerpo: rt(
        p('The liability of Aerus for death or bodily injury, destruction or loss of baggage and delays is subject to the limits established by the Ley de Aviación Civil (Mexican Civil Aviation Law), the Código de Comercio (Mexican Commercial Code) and the applicable international conventions.'),
        p('Aerus will not be liable for delays caused by adverse weather conditions, decisions of civil aviation authorities, airspace restrictions or other force majeure events.'),
        p('The content of the aerus.mx website is provided for informational purposes. Aerus does not guarantee that the information is free of errors and reserves the right to update it without prior notice.'),
      ),
    },
    {
      ancla: 'propiedad',
      indice: '8. Intellectual property',
      titulo: '8. Intellectual property',
      cuerpo: rt(
        p('The name "Aerus", the logo, designs, texts, images and other elements of the website are the property of Aerotransportes Rafilher, S.A. de C.V. or its licensors and are protected by Mexican intellectual property law.'),
        p('Any reproduction, distribution or use for commercial purposes without the express written authorization of Aerus is prohibited.'),
      ),
    },
    {
      ancla: 'ley',
      indice: '9. Governing law and jurisdiction',
      titulo: '9. Governing law and jurisdiction',
      cuerpo: rt(
        p('These Terms and Conditions are governed by the laws of the United Mexican States. For any dispute arising from their interpretation or application, the parties submit to the jurisdiction of the competent courts of the city of Monterrey, Nuevo León, expressly waiving any other jurisdiction to which they may be entitled.'),
        p('For questions or clarifications, the passenger may write to [contacto@aerus.mx](mailto:contacto@aerus.mx).'),
      ),
    },
  ],
  tocTitle: 'Contents',
  otherTitle: 'Other legal documents',
  otherDocs: [
    { label: 'Privacy notice', href: '/legal/aviso-de-privacidad/' },
    { label: 'Cookie policy', href: '/legal/cookies/' },
  ],
}

const defaults: PageDefaults<TerminosContent> = { es, en }
export default defaults
