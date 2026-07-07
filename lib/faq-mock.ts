export interface FaqItem {
  pregunta: string
  respuesta: string
}

export interface FaqCategoria {
  categoria: string
  items: FaqItem[]
}

export const FAQ_CATEGORIAS: FaqCategoria[] = [
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
          'Tu boleto electrónico (e-ticket) se envía de inmediato al correo que registraste durante la compra. Revisa tu carpeta de spam si no lo encuentras en los primeros minutos. También puedes consultarlo en Mi Vuelo con tu número de reservación.',
      },
    ],
  },
  {
    categoria: 'Cambios y cancelaciones',
    items: [
      {
        pregunta: '¿Puedo cambiar la fecha de mi vuelo?',
        respuesta:
          'Sí, puedes cambiar la fecha de tu vuelo con al menos 24 horas de anticipación. El cambio está sujeto a disponibilidad y puede aplicar una diferencia de tarifa según la fecha nueva que elijas. Gestiona tu cambio en Mi Vuelo o comunícate con nosotros.',
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
]
