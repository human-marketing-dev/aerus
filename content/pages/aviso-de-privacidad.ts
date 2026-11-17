// Textos de la página "Aviso de privacidad" (/legal/aviso-de-privacidad).
// Se editan en Sanity (Páginas → Legales → Aviso de privacidad); esto es el respaldo y la fuente
// de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/aviso-de-privacidad.ts.
import type { PageDefaults } from '@/lib/content'
import { p, rt, ul } from '@/content/richtext'
import { AVISO_TRADUCCION_EN, type LegalBase } from './_legal'

export type AvisoPrivacidadContent = LegalBase & {
  contactTitle: string
  contactDesc: string
  contactEmail: string
}

const es: AvisoPrivacidadContent = {
  seo: {
    metaTitle: 'Aviso de privacidad | Aerus',
    metaDescription:
      'Aviso de privacidad de Aerotransportes Rafilher, S.A. de C.V. Conoce cómo tratamos tus datos personales conforme a la LFPDPPP.',
  },
  title: 'Aviso de privacidad',
  meta: 'Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025',
  avisoTraduccion: '',
  secciones: [
    {
      ancla: 'responsable',
      indice: '1. Responsable del tratamiento',
      titulo: '1. Responsable del tratamiento de datos personales',
      cuerpo: rt(
        p('Aerotransportes Rafilher, S.A. de C.V., con nombre comercial **Aerus**, con domicilio en Monterrey, Nuevo León, México, es responsable del tratamiento de sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.'),
        p('Para ejercer sus derechos o presentar dudas sobre el tratamiento de sus datos, puede contactarnos en [privacidad@aerus.mx](mailto:privacidad@aerus.mx).'),
      ),
    },
    {
      ancla: 'datos',
      indice: '2. Datos personales recabados',
      titulo: '2. Datos personales que recabamos',
      cuerpo: rt(
        p('Aerus recaba los datos personales necesarios para la prestación del servicio de transporte aéreo. Dependiendo del servicio contratado, podemos solicitar:'),
        ul(
          '**Datos de identificación:** nombre completo, fecha de nacimiento, número de pasaporte o documento de identidad oficial, nacionalidad.',
          '**Datos de contacto:** correo electrónico, número telefónico.',
          '**Datos de pago:** información necesaria para procesar el cobro del boleto (gestionada por el procesador de pagos designado; Aerus no almacena datos de tarjetas).',
          '**Datos de viaje:** rutas, fechas, preferencias de asiento y requerimientos especiales (p. ej., necesidades médicas que afecten el abordaje).',
          '**Datos de navegación:** dirección IP, tipo de dispositivo y comportamiento de navegación en el sitio aerus.mx (ver sección de Cookies).',
        ),
        p('No recabamos datos personales sensibles, salvo los requerimientos médicos estrictamente necesarios para garantizar la seguridad del pasajero durante el vuelo.'),
      ),
    },
    {
      ancla: 'finalidades',
      indice: '3. Finalidades del tratamiento',
      titulo: '3. Finalidades del tratamiento',
      cuerpo: rt(
        p('Los datos personales que recabamos son utilizados para las siguientes **finalidades primarias** (necesarias para la relación contractual):'),
        ul(
          'Procesar y confirmar reservaciones de vuelo.',
          'Emitir boletos y documentación de viaje.',
          'Gestionar cambios, cancelaciones y reembolsos.',
          'Cumplir con requisitos de autoridades aeronáuticas y migratorias.',
          'Enviar notificaciones relacionadas con el vuelo (cambios de horario, confirmaciones, recordatorios).',
          'Facturación y atención a reclamaciones.',
        ),
        p('Adicionalmente, con su consentimiento, podemos utilizar sus datos para **finalidades secundarias**:'),
        ul(
          'Envío de comunicaciones comerciales sobre promociones, nuevas rutas y servicios de Aerus.',
          'Estudios estadísticos de mercado y mejora de la experiencia del pasajero.',
        ),
        p('Si no desea que sus datos sean utilizados para finalidades secundarias, puede manifestarlo en cualquier momento escribiendo a [privacidad@aerus.mx](mailto:privacidad@aerus.mx). La negativa no afectará la prestación del servicio contratado.'),
      ),
    },
    {
      ancla: 'transferencias',
      indice: '4. Transferencias de datos',
      titulo: '4. Transferencias de datos personales',
      cuerpo: rt(
        p('Aerus podrá transferir sus datos personales, sin requerir su consentimiento, a las siguientes entidades:'),
        ul(
          'Autoridades aeronáuticas, migratorias y de seguridad nacional (AFAC, INM, etc.) cuando así lo exija la legislación aplicable.',
          'Proveedores de servicios relacionados con la operación del vuelo (aeropuertos, servicios de rampa, handling).',
          'Procesadores de pago para gestionar las transacciones económicas.',
        ),
        p('Cualquier otra transferencia que no esté contemplada en la ley requerirá su consentimiento expreso. Aerus no vende datos personales a terceros.'),
      ),
    },
    {
      ancla: 'arco',
      indice: '5. Derechos ARCO',
      titulo: '5. Derechos ARCO y mecanismo para ejercerlos',
      cuerpo: rt(
        p('Usted tiene derecho a **Acceder, Rectificar, Cancelar u Oponerse** (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, deberá enviar una solicitud a [privacidad@aerus.mx](mailto:privacidad@aerus.mx) con la siguiente información:'),
        ul(
          'Nombre completo y copia de documento de identidad oficial.',
          'Descripción clara del derecho que desea ejercer.',
          'Cualquier documento o información que facilite la localización de los datos.',
        ),
        p('Aerus dará respuesta a su solicitud en un plazo no mayor a **20 días hábiles** a partir de su recepción. En caso de ser procedente, la respuesta se hará efectiva en los 15 días hábiles siguientes.'),
        p('Usted también podrá revocar en cualquier momento el consentimiento otorgado para el tratamiento de sus datos, siguiendo el mismo procedimiento. La revocación no tendrá efectos retroactivos sobre los tratamientos ya realizados.'),
      ),
    },
    {
      ancla: 'cookies',
      indice: '6. Uso de cookies',
      titulo: '6. Uso de cookies y tecnologías de rastreo',
      cuerpo: rt(
        p('El sitio aerus.mx utiliza cookies y tecnologías similares para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenidos. Puede consultar el detalle completo en nuestra [Política de Cookies](/legal/cookies/).'),
        p('Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, algunas funcionalidades del sitio pueden no estar disponibles si las cookies están deshabilitadas.'),
      ),
    },
    {
      ancla: 'cambios',
      indice: '7. Cambios al aviso',
      titulo: '7. Cambios al aviso de privacidad',
      cuerpo: rt(
        p('Aerus se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en aerus.mx con indicación de la fecha de actualización. Se recomienda revisarlo periódicamente. El uso continuado del sitio o de los servicios de Aerus tras la publicación de cambios implica la aceptación del aviso actualizado.'),
      ),
    },
  ],
  tocTitle: 'Contenido',
  otherTitle: 'Otros documentos legales',
  otherDocs: [
    { label: 'Términos y condiciones', href: '/legal/terminos-y-condiciones/' },
    { label: 'Política de cookies', href: '/legal/cookies/' },
  ],
  contactTitle: 'Contacto de privacidad',
  contactDesc: 'Para ejercer derechos ARCO o presentar una queja:',
  contactEmail: 'privacidad@aerus.mx',
}

const en: AvisoPrivacidadContent = {
  seo: {
    metaTitle: 'Privacy Notice | Aerus',
    metaDescription:
      'Privacy notice of Aerotransportes Rafilher, S.A. de C.V. Learn how we process your personal data under the LFPDPPP (Mexican Federal Law on the Protection of Personal Data Held by Private Parties).',
  },
  title: 'Privacy Notice',
  meta: 'Aerotransportes Rafilher, S.A. de C.V. · Last updated: August 2025',
  avisoTraduccion: AVISO_TRADUCCION_EN,
  secciones: [
    {
      ancla: 'responsable',
      indice: '1. Data controller',
      titulo: '1. Party responsible for processing personal data',
      cuerpo: rt(
        p('Aerotransportes Rafilher, S.A. de C.V., doing business as **Aerus**, with its address in Monterrey, Nuevo León, Mexico, is responsible for the processing of your personal data, in accordance with the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (Mexican Federal Law on the Protection of Personal Data Held by Private Parties, “LFPDPPP”) and its Regulations.'),
        p('To exercise your rights or to submit questions about the processing of your data, you may contact us at [privacidad@aerus.mx](mailto:privacidad@aerus.mx).'),
      ),
    },
    {
      ancla: 'datos',
      indice: '2. Personal data collected',
      titulo: '2. Personal data we collect',
      cuerpo: rt(
        p('Aerus collects the personal data necessary to provide air transportation services. Depending on the service contracted, we may request:'),
        ul(
          '**Identification data:** full name, date of birth, passport number or official identity document, nationality.',
          '**Contact data:** email address, telephone number.',
          '**Payment data:** information necessary to process payment for the ticket (handled by the designated payment processor; Aerus does not store card data).',
          '**Travel data:** routes, dates, seat preferences and special requirements (e.g., medical needs that affect boarding).',
          '**Browsing data:** IP address, device type and browsing behavior on the aerus.mx website (see the Cookies section).',
        ),
        p('We do not collect sensitive personal data, except for medical requirements strictly necessary to ensure passenger safety during the flight.'),
      ),
    },
    {
      ancla: 'finalidades',
      indice: '3. Purposes of processing',
      titulo: '3. Purposes of processing',
      cuerpo: rt(
        p('The personal data we collect is used for the following **primary purposes** (necessary for the contractual relationship):'),
        ul(
          'Processing and confirming flight reservations.',
          'Issuing tickets and travel documents.',
          'Managing changes, cancellations and refunds.',
          'Complying with the requirements of aviation and immigration authorities.',
          'Sending flight-related notifications (schedule changes, confirmations, reminders).',
          'Invoicing and handling of claims.',
        ),
        p('Additionally, with your consent, we may use your data for **secondary purposes**:'),
        ul(
          'Sending commercial communications about promotions, new routes and Aerus services.',
          'Statistical market research and improvement of the passenger experience.',
        ),
        p('If you do not want your data to be used for secondary purposes, you may say so at any time by writing to [privacidad@aerus.mx](mailto:privacidad@aerus.mx). Refusal will not affect the provision of the contracted service.'),
      ),
    },
    {
      ancla: 'transferencias',
      indice: '4. Data transfers',
      titulo: '4. Transfers of personal data',
      cuerpo: rt(
        p('Aerus may transfer your personal data, without requiring your consent, to the following entities:'),
        ul(
          'Aviation, immigration and national security authorities (AFAC, INM, etc.) when required by applicable law.',
          'Providers of services related to flight operations (airports, ramp services, handling).',
          'Payment processors, to manage financial transactions.',
        ),
        p('Any other transfer not provided for by law will require your express consent. Aerus does not sell personal data to third parties.'),
      ),
    },
    {
      ancla: 'arco',
      indice: '5. ARCO rights',
      titulo: '5. ARCO rights and how to exercise them',
      cuerpo: rt(
        p('You have the right to **Access, Rectify, Cancel or Oppose** (ARCO rights) the processing of your personal data. To exercise these rights, you must send a request to [privacidad@aerus.mx](mailto:privacidad@aerus.mx) including the following information:'),
        ul(
          'Full name and a copy of an official identity document.',
          'A clear description of the right you wish to exercise.',
          'Any document or information that helps locate the data.',
        ),
        p('Aerus will respond to your request within no more than **20 business days** from its receipt. If the request is granted, the response will be carried out within the following 15 business days.'),
        p('You may also revoke, at any time, the consent you have given for the processing of your data by following the same procedure. Revocation will not have retroactive effect on processing already carried out.'),
      ),
    },
    {
      ancla: 'cookies',
      indice: '6. Use of cookies',
      titulo: '6. Use of cookies and tracking technologies',
      cuerpo: rt(
        p('The aerus.mx website uses cookies and similar technologies to improve the browsing experience, analyze traffic and personalize content. You can find full details in our [Cookie Policy](/legal/cookies/).'),
        p('You can set your browser to reject all cookies or to alert you when a cookie is sent. However, some features of the website may not be available if cookies are disabled.'),
      ),
    },
    {
      ancla: 'cambios',
      indice: '7. Changes to this notice',
      titulo: '7. Changes to the privacy notice',
      cuerpo: rt(
        p('Aerus reserves the right to modify this Privacy Notice at any time. Changes will be published on aerus.mx indicating the date of the update. We recommend that you review it periodically. Continued use of the website or of Aerus services after changes are published constitutes acceptance of the updated notice.'),
      ),
    },
  ],
  tocTitle: 'Contents',
  otherTitle: 'Other legal documents',
  otherDocs: [
    { label: 'Terms and conditions', href: '/legal/terminos-y-condiciones/' },
    { label: 'Cookie policy', href: '/legal/cookies/' },
  ],
  contactTitle: 'Privacy contact',
  contactDesc: 'To exercise your ARCO rights or file a complaint:',
  contactEmail: 'privacidad@aerus.mx',
}

const defaults: PageDefaults<AvisoPrivacidadContent> = { es, en }
export default defaults
