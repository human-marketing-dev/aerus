// Textos e imágenes del inicio (home). Se editan en Sanity (Páginas → Inicio → Inicio);
// esto es el respaldo y la fuente de la carga inicial. Claves = campos de
// sanity/schemaTypes/pages/inicio.ts.
import type { Img, PageDefaults, PageSeo } from '@/lib/content'

export type InicioContent = {
  seo: PageSeo
  banners: { imagen: Img; imagenMovil: Img | null; imagenEn: Img | null; href: string }[]
  experiencia: {
    foto: Img; modelo: string; caption: string; eyebrow: string; since: string
    linea1: string; linea2: string; linea3: string; acento: string
    stats: { pre: string; num: string; unit: string; label: string; sub: string }[]
  }
  marca: { texto: string }
  tarifas: {
    eyebrow: string; titulo: string; tituloAcento: string; intro: string
    etiquetaTarifa: string; etiquetaDe: string; incluye: string
    reservar: string; reservarHref: string; comparar: string; compararHref: string
    planes: {
      nombre: string; icono: string; tagline: string; descripcion: string
      features: { nombre: string; detalle: string; icono: string; incluido: boolean }[]
    }[]
  }
  mapa: {
    eyebrow: string; titulo: string; tituloAcento: string; intro: string
    statRutas: string; statDestinos: string; statIntl: string
    leyendaViva: string; leyendaExclusivo: string
    verTodas: string; verTodasHref: string; vuelosDirectos: string; porCiudad: string; otrasRutas: string
  }
  espera: {
    eyebrow: string; titulo: string; tituloAcento: string; tituloFin: string; lede: string
    pasos: { num: string; big: string; unit: string; title: string; body: string; cta: string; href: string }[]
    notaNegrita: string; nota: string
  }
  directos: { a: string; b: string; blurb: string; activas: string; cta: string; ctaHref: string }
  servicios: {
    eyebrow: string; titulo: string; tituloAcento: string; verTodos: string; verTodosHref: string; verMas: string
    items: { num: string; icono: string; titulo: string; texto: string; badge: string; href: string }[]
  }
  pagos: {
    eyebrow: string; titulo: string; tituloAcento: string
    seguro: string; problema: string; soporte: string; soporteHref: string
    grupos: { titulo: string; sub: string; icono: string; marcas: { nombre: string; logo: Img }[] }[]
  }
}

const es: InicioContent = {
  seo: {
    metaTitle: 'Aerus · Descubre el futuro',
    metaDescription: 'Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.',
  },
  banners: [
    {
      imagen: {
        src: '/hero/aerus-viva-piedras-negras.jpg',
        alt: 'Conectamos con todo México: Aerus + Viva. Da clic en Piedras Negras para consultar todas las combinaciones y rutas disponibles.',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/destinos/piedras-negras/',
    },
    {
      imagen: {
        src: '/hero/mty-agu.jpg',
        alt: 'Ruta Monterrey (MTY) – Aguascalientes (AGU)',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/destinos/aguascalientes/',
    },
    {
      imagen: {
        src: '/hero/pago-american-express.jpg',
        alt: '¡Ahora puedes comprar tus boletos de manera fácil y segura pagando con American Express!',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/reservar/metodos-de-pago/',
    },
    {
      imagen: {
        src: '/hero/mty-mfe.jpg',
        alt: 'Ruta Monterrey (MTY) – McAllen (MFE). Cruza la frontera más fácil, más rápido y sin complicaciones.',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/rutas/monterrey-mcallen/',
    },
    {
      imagen: {
        src: '/hero/nlu-cvm.jpg',
        alt: 'Ruta Ciudad de México (NLU) – Ciudad Victoria (CVM)',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/destinos/ciudad-victoria/',
    },
  ],
  experiencia: {
    foto: {
      src: '/imagen-aerus-home-avion.webp',
      alt: 'Cessna Grand Caravan EX — Aerus',
    },
    modelo: 'Cessna Grand Caravan EX',
    caption: 'XA-RFF · Garmin G1000 NXi · 12 asientos',
    eyebrow: 'Por qué volar con Aerus',
    since: 'Aerolínea regional · Desde 2023',
    linea1: 'Una experiencia',
    linea2: 'diseñada para',
    linea3: 'tu ',
    acento: 'tiempo.',
    stats: [
      {
        pre: '',
        num: '40',
        unit: 'min',
        label: 'Preséntate hasta 40 minutos antes de tu vuelo',
        sub: '1.er lugar en velocidad de embarque en México.',
      },
      {
        pre: 'menos de',
        num: '3',
        unit: 'años',
        label: 'Flota Cessna Grand Caravan EX',
        sub: 'Ideal para el mercado regional. Antigüedad promedio menor a 3 años.',
      },
      {
        pre: '',
        num: 'Destinos exclusivos',
        unit: '',
        label: '',
        sub: 'Destinos donde las aerolíneas grandes no operan.',
      },
      {
        pre: '',
        num: '+97%',
        unit: '',
        label: 'Puntualidad superior al 97%',
        sub: 'Sostenida tres años consecutivos.',
      },
    ],
  },
  marca: {
    texto: 'TU NUEVA FORMA DE VIAJAR',
  },
  tarifas: {
    eyebrow: 'Tarifas Aerus',
    titulo: 'Nos acoplamos a ',
    tituloAcento: 'tus necesidades.',
    intro: 'En Aerus contamos con tres modalidades de tarifas aéreas para que elijas la que mejor se adapte a tu viaje — ya sea de negocios o placer. Compáralas y vuela como prefieras.',
    etiquetaTarifa: 'TARIFA',
    etiquetaDe: 'DE',
    incluye: 'Lo que incluye',
    reservar: 'Reservar Aerus',
    reservarHref: '/reservar/',
    comparar: 'Comparar todas',
    compararHref: '/reservar/tarifas/',
    planes: [
      {
        nombre: 'Light',
        icono: 'plane',
        tagline: 'Para quien viaja ligero',
        descripcion: 'La tarifa más conveniente para vuelos cortos sin equipaje documentado. Ideal para escapadas de fin de semana o viajes de trabajo express.',
        features: [
          {
            nombre: 'Equipaje de mano',
            detalle: '1 pieza · hasta 10kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Equipaje documentado',
            detalle: 'Adicional con costo',
            icono: 'luggage',
            incluido: false,
          },
          {
            nombre: 'Selección de asiento',
            detalle: 'Estándar al hacer check-in',
            icono: 'chair',
            incluido: false,
          },
          {
            nombre: 'Cambio de vuelo',
            detalle: 'Con cargo + diferencia tarifaria',
            icono: 'swap',
            incluido: false,
          },
          {
            nombre: 'Web check-in',
            detalle: 'Hasta 72hrs antes del vuelo',
            icono: 'globe',
            incluido: true,
          },
        ],
      },
      {
        nombre: 'Business',
        icono: 'luggage',
        tagline: 'El equilibrio ideal',
        descripcion: 'Tarifa balanceada con equipaje documentado y selección anticipada de asiento. Perfecta para viajes de placer o turismo familiar.',
        features: [
          {
            nombre: 'Equipaje de mano',
            detalle: '1 pieza · hasta 10kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Equipaje documentado',
            detalle: '1 maleta · hasta 23kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Selección de asiento',
            detalle: 'Estándar o ventana',
            icono: 'chair',
            incluido: true,
          },
          {
            nombre: 'Cambio de vuelo',
            detalle: 'Sin penalidad · 1 cambio',
            icono: 'swap',
            incluido: true,
          },
          {
            nombre: 'Web check-in prioritario',
            detalle: 'Hasta 72hrs antes',
            icono: 'globe',
            incluido: true,
          },
        ],
      },
      {
        nombre: 'Advantage',
        icono: 'shield',
        tagline: 'Flexibilidad total',
        descripcion: 'Para viajeros de negocios que requieren máxima flexibilidad. Cambios sin penalidad, asiento preferente y prioridad en todo el viaje.',
        features: [
          {
            nombre: 'Equipaje de mano',
            detalle: '1 pieza · hasta 10kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Equipaje documentado',
            detalle: '2 maletas · hasta 23kg c/u',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Asiento Preferente',
            detalle: 'Primera fila o pasillo',
            icono: 'chair',
            incluido: true,
          },
          {
            nombre: 'Cambios ilimitados',
            detalle: 'Sin penalidad ni diferencia*',
            icono: 'swap',
            incluido: true,
          },
          {
            nombre: 'Abordaje prioritario',
            detalle: 'Grupo 1 · Sala VIP en MTY',
            icono: 'shield',
            incluido: true,
          },
        ],
      },
    ],
  },
  mapa: {
    eyebrow: 'Red Interactiva',
    titulo: 'Explora tu próxima ',
    tituloAcento: 'conexión.',
    intro: 'Toca cualquier destino para ver todas sus rutas directas.',
    statRutas: 'Rutas directas',
    statDestinos: 'Destinos',
    statIntl: 'Internacionales',
    leyendaViva: 'Codeshare Viva + Aerus',
    leyendaExclusivo: 'Destino exclusivo Aerus',
    verTodas: 'Ver todas las rutas',
    verTodasHref: '/rutas/',
    vuelosDirectos: 'Vuelos directos',
    porCiudad: 'Vuelos directos por ciudad',
    otrasRutas: 'Otras rutas',
  },
  espera: {
    eyebrow: 'Procesos eficientes',
    titulo: 'Espera ',
    tituloAcento: 'minutos,',
    tituloFin: ' no horas.',
    lede: 'Con Aerus optimizas tu tiempo. Nuestros procedimientos de check-in, abordaje y despegue son ágiles, porque sabemos que tu día no debería estar esperando en una sala.',
    pasos: [
      {
        num: '01 · Check-in',
        big: '40',
        unit: 'min antes',
        title: 'Tu check-in más ágil',
        body: 'Puedes realizarlo en mostrador con al menos 40 minutos para vuelos nacionales previos a la salida del vuelo o si prefieres en nuestra página Web hasta 72 horas antes.',
        cta: 'Obtén tu web check-in',
        href: '/check-in/',
      },
      {
        num: '02 · Sala de espera',
        big: '30',
        unit: 'min antes',
        title: 'Llega 30 minutos antes',
        body: 'Te solicitamos llegar a la sala de última espera con tu pase de abordar con al menos treinta minutos de anticipación a la salida de tu vuelo. Aplica únicamente para vuelos nacionales.',
        cta: 'Cómo llegar al aeropuerto',
        href: '/ayuda/tiempos-aeropuerto/',
      },
      {
        num: '03 · Abordaje',
        big: '0',
        unit: 'filas',
        title: 'Abordaje eficiente',
        body: 'Subes a bordo en minutos, sin filas ni esperas innecesarias. Nuestros aviones son nuevos y confortables, y el abordaje es rápido y directo.',
        cta: 'Conoce nuestra flota',
        href: '/experiencia/flota/',
      },
    ],
    notaNegrita: '*Vuelos internacionales:',
    nota: 'para rutas internacionales debes presentarte en mostradores con al menos 1 hora previa a la salida del vuelo. Aplica para todas las clases tarifarias.',
  },
  directos: {
    a: 'Destinos',
    b: 'Directos',
    blurb: '{n} conexiones directas, sin escalas innecesarias. Llega antes, descansa más y vive el destino — no la sala de espera.',
    activas: 'Rutas directas activas',
    cta: 'Encuentra tu vuelo directo',
    ctaHref: '/rutas/',
  },
  servicios: {
    eyebrow: 'Servicios adicionales',
    titulo: 'Servicios pensados para ',
    tituloAcento: 'acompañarte.',
    verTodos: 'Ver todos los servicios',
    verTodosHref: '/experiencia/',
    verMas: 'Ver más',
    items: [
      {
        num: '01',
        icono: 'swap',
        titulo: 'Cambio de vuelo',
        texto: 'Si necesitas cambiar tu vuelo, puedes hacerlo con el Área de Atención a Clientes, cubriendo el pago por diferencia tarifaria y la penalidad correspondiente.',
        badge: '',
        href: '/ayuda/faq/',
      },
      {
        num: '02',
        icono: 'shield',
        titulo: 'Asistencia de viaje',
        texto: 'Viaja tranquilo y sin preocupaciones con nuestra cobertura especial que te protege en todo momento del viaje.',
        badge: '',
        href: '/experiencia/asistencia-de-viaje/',
      },
      {
        num: '03',
        icono: 'circle-check',
        titulo: 'Seguro de cancelación',
        texto: 'Beneficios exclusivos que te respaldan si necesitas cancelar tu vuelo por imprevistos. Incluye reembolso parcial y reprogramación.',
        badge: '',
        href: '/experiencia/seguro-de-cancelacion/',
      },
      {
        num: '04',
        icono: 'users',
        titulo: 'Grupos',
        texto: 'Si viajas con más de diez pasajeros, esta opción te permite obtener beneficios exclusivos: tarifas preferenciales, equipaje adicional y atención personalizada.',
        badge: '10+ pasajeros',
        href: '/experiencia/grupos/',
      },
    ],
  },
  pagos: {
    eyebrow: 'Métodos de pago',
    titulo: 'Paga como tú ',
    tituloAcento: 'prefieras.',
    seguro: 'Conexión segura · PCI DSS · Certificado SSL · 3D Secure activado.',
    problema: '¿Problemas con tu pago?',
    soporte: 'Atención a clientes 24/7 →',
    soporteHref: '/ayuda/contacto/',
    grupos: [
      {
        titulo: 'Tarjetas y bancos',
        sub: 'Crédito y débito · 3, 6, 9 y 12 MSI con tarjetas participantes',
        icono: 'credit-card',
        marcas: [
          {
            nombre: 'Visa',
            logo: {
              src: '/logos/visa-logo-blanco.webp',
              alt: 'Visa',
            },
          },
          {
            nombre: 'Mastercard',
            logo: {
              src: '/logos/mastercard-logo-blanco.webp',
              alt: 'Mastercard',
            },
          },
          {
            nombre: 'American Express',
            logo: {
              src: '/logos/american-express-logo-blanco.webp',
              alt: 'American Express',
            },
          },
          {
            nombre: 'Carnet',
            logo: {
              src: '/logos/carnet-logo-blanco.webp',
              alt: 'Carnet',
            },
          },
          {
            nombre: 'BBVA',
            logo: {
              src: '/logos/bbva-logo-blanco.webp',
              alt: 'BBVA',
            },
          },
          {
            nombre: 'Citibanamex',
            logo: {
              src: '/logos/banamex-logo-blanco.webp',
              alt: 'Citibanamex',
            },
          },
          {
            nombre: 'Banorte',
            logo: {
              src: '/logos/banorte-logo-blanco.webp',
              alt: 'Banorte',
            },
          },
          {
            nombre: 'Santander',
            logo: {
              src: '/logos/santander-logo-blanco.webp',
              alt: 'Santander',
            },
          },
          {
            nombre: 'BanRegio',
            logo: {
              src: '/logos/banregio-logo-blanco.webp',
              alt: 'BanRegio',
            },
          },
          {
            nombre: 'Inbursa',
            logo: {
              src: '/logos/inbursa-logo-blanco.webp',
              alt: 'Inbursa',
            },
          },
          {
            nombre: 'Scotiabank',
            logo: {
              src: '/logos/scotiabank-logo-blanco.webp',
              alt: 'Scotiabank',
            },
          },
          {
            nombre: 'HSBC',
            logo: {
              src: '/logos/hsbc-logo-blanco.webp',
              alt: 'HSBC',
            },
          },
          {
            nombre: 'Banco Azteca',
            logo: {
              src: '/logos/banco-azteca-logo-blanco.webp',
              alt: 'Banco Azteca',
            },
          },
          {
            nombre: 'Afirme',
            logo: {
              src: '/logos/afirme-logo-blanco.webp',
              alt: 'Afirme',
            },
          },
          {
            nombre: 'Invex',
            logo: {
              src: '/logos/invex-logo-blanco.webp',
              alt: 'Invex',
            },
          },
        ],
      },
      {
        titulo: 'Efectivo y transferencias',
        sub: 'Paga en más de 25,000 puntos de servicio en todo México',
        icono: 'cash',
        marcas: [
          {
            nombre: 'OXXO',
            logo: {
              src: '/logos/oxxo-logo-blanco.webp',
              alt: 'OXXO',
            },
          },
          {
            nombre: '7-Eleven',
            logo: {
              src: '/logos/7-eleven-logo-blanco.webp',
              alt: '7-Eleven',
            },
          },
          {
            nombre: 'Walmart',
            logo: {
              src: '/logos/walmart-logo-blanco.webp',
              alt: 'Walmart',
            },
          },
          {
            nombre: 'Sam\'s Club',
            logo: {
              src: '/logos/sams-club-logo-blanco.webp',
              alt: 'Sam\'s Club',
            },
          },
          {
            nombre: 'Farmacias del Ahorro',
            logo: {
              src: '/logos/farmacias-del-ahorro-logo-blanco.webp',
              alt: 'Farmacias del Ahorro',
            },
          },
          {
            nombre: 'Extra',
            logo: {
              src: '/logos/extra-logo-blanco.webp',
              alt: 'Extra',
            },
          },
          {
            nombre: 'Circle K',
            logo: {
              src: '/logos/circle-k-logo-blanco.webp',
              alt: 'Circle K',
            },
          },
          {
            nombre: 'Waldo\'s',
            logo: {
              src: '/logos/waldos-logo-blanco.webp',
              alt: 'Waldo\'s',
            },
          },
          {
            nombre: 'Bodega Aurrera',
            logo: {
              src: '/logos/bodega-aurrera-logo-blanco.webp',
              alt: 'Bodega Aurrera',
            },
          },
          {
            nombre: 'PayCash',
            logo: {
              src: '/logos/pay-cash-logo-blanco.webp',
              alt: 'PayCash',
            },
          },
          {
            nombre: 'SPEI',
            logo: {
              src: '/logos/spei-logo-blanco.webp',
              alt: 'SPEI',
            },
          },
        ],
      },
    ],
  },
}

const en: InicioContent = {
  seo: {
    metaTitle: 'Aerus · Discover the future',
    metaDescription: 'A Mexican airline focused on agility, flexibility and innovation. Reimagine the new way to travel.',
  },
  banners: [
    {
      imagen: {
        src: '/hero/aerus-viva-piedras-negras.jpg',
        alt: 'Connecting you with all of Mexico: Aerus + Viva. Click Piedras Negras to see all available routes and connections.',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/destinos/piedras-negras/',
    },
    {
      imagen: {
        src: '/hero/mty-agu.jpg',
        alt: 'Route Monterrey (MTY) – Aguascalientes (AGU)',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/destinos/aguascalientes/',
    },
    {
      imagen: {
        src: '/hero/pago-american-express.jpg',
        alt: 'You can now buy your tickets easily and securely with American Express!',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/reservar/metodos-de-pago/',
    },
    {
      imagen: {
        src: '/hero/mty-mfe.jpg',
        alt: 'Route Monterrey (MTY) – McAllen (MFE). Cross the border easier, faster and hassle-free.',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/rutas/monterrey-mcallen/',
    },
    {
      imagen: {
        src: '/hero/nlu-cvm.jpg',
        alt: 'Route Mexico City (NLU) – Ciudad Victoria (CVM)',
      },
      imagenMovil: null,
      imagenEn: null,
      href: '/destinos/ciudad-victoria/',
    },
  ],
  experiencia: {
    foto: {
      src: '/imagen-aerus-home-avion.webp',
      alt: 'Cessna Grand Caravan EX — Aerus',
    },
    modelo: 'Cessna Grand Caravan EX',
    caption: 'XA-RFF · Garmin G1000 NXi · 12 seats',
    eyebrow: 'Why fly Aerus',
    since: 'Regional airline · Since 2023',
    linea1: 'An experience',
    linea2: 'designed around',
    linea3: 'your ',
    acento: 'time.',
    stats: [
      {
        pre: '',
        num: '40',
        unit: 'min',
        label: 'Arrive as little as 40 minutes before your flight',
        sub: 'No. 1 in boarding speed in Mexico.',
      },
      {
        pre: 'under',
        num: '3',
        unit: 'years',
        label: 'Cessna Grand Caravan EX fleet',
        sub: 'Built for regional travel. Average fleet age under 3 years.',
      },
      {
        pre: '',
        num: 'Exclusive destinations',
        unit: '',
        label: '',
        sub: 'Places the big airlines don’t fly to.',
      },
      {
        pre: '',
        num: '+97%',
        unit: '',
        label: 'On-time performance above 97%',
        sub: 'Sustained for three consecutive years.',
      },
    ],
  },
  marca: {
    texto: 'YOUR NEW WAY TO TRAVEL',
  },
  tarifas: {
    eyebrow: 'Aerus fares',
    titulo: 'We adapt to ',
    tituloAcento: 'your needs.',
    intro: 'Aerus offers three fare options so you can choose the one that best fits your trip — business or leisure. Compare them and fly your way.',
    etiquetaTarifa: 'FARE',
    etiquetaDe: 'OF',
    incluye: 'What’s included',
    reservar: 'Book Aerus',
    reservarHref: '/reservar/',
    comparar: 'Compare all fares',
    compararHref: '/reservar/tarifas/',
    planes: [
      {
        nombre: 'Light',
        icono: 'plane',
        tagline: 'For those who travel light',
        descripcion: 'Our best-value fare for short flights without checked baggage. Ideal for weekend getaways or quick business trips.',
        features: [
          {
            nombre: 'Carry-on bag',
            detalle: '1 piece · up to 10 kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Checked baggage',
            detalle: 'Available for a fee',
            icono: 'luggage',
            incluido: false,
          },
          {
            nombre: 'Seat selection',
            detalle: 'Standard, assigned at check-in',
            icono: 'chair',
            incluido: false,
          },
          {
            nombre: 'Flight changes',
            detalle: 'Change fee + fare difference',
            icono: 'swap',
            incluido: false,
          },
          {
            nombre: 'Web check-in',
            detalle: 'Up to 72 hrs before your flight',
            icono: 'globe',
            incluido: true,
          },
        ],
      },
      {
        nombre: 'Business',
        icono: 'luggage',
        tagline: 'The perfect balance',
        descripcion: 'A balanced fare with checked baggage and advance seat selection. Perfect for leisure trips or family travel.',
        features: [
          {
            nombre: 'Carry-on bag',
            detalle: '1 piece · up to 10 kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Checked baggage',
            detalle: '1 bag · up to 23 kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Seat selection',
            detalle: 'Standard or window',
            icono: 'chair',
            incluido: true,
          },
          {
            nombre: 'Flight changes',
            detalle: 'No change fee · 1 change',
            icono: 'swap',
            incluido: true,
          },
          {
            nombre: 'Priority web check-in',
            detalle: 'Up to 72 hrs before',
            icono: 'globe',
            incluido: true,
          },
        ],
      },
      {
        nombre: 'Advantage',
        icono: 'shield',
        tagline: 'Total flexibility',
        descripcion: 'For business travelers who need maximum flexibility. Free changes, preferred seating and priority throughout your journey.',
        features: [
          {
            nombre: 'Carry-on bag',
            detalle: '1 piece · up to 10 kg',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Checked baggage',
            detalle: '2 bags · up to 23 kg each',
            icono: 'luggage',
            incluido: true,
          },
          {
            nombre: 'Preferred seating',
            detalle: 'First row or aisle',
            icono: 'chair',
            incluido: true,
          },
          {
            nombre: 'Unlimited changes',
            detalle: 'No change fee or fare difference*',
            icono: 'swap',
            incluido: true,
          },
          {
            nombre: 'Priority boarding',
            detalle: 'Group 1 · VIP lounge at MTY',
            icono: 'shield',
            incluido: true,
          },
        ],
      },
    ],
  },
  mapa: {
    eyebrow: 'Interactive network',
    titulo: 'Explore your next ',
    tituloAcento: 'connection.',
    intro: 'Tap any destination to see all of its direct routes.',
    statRutas: 'Direct routes',
    statDestinos: 'Destinations',
    statIntl: 'International',
    leyendaViva: 'Viva + Aerus codeshare',
    leyendaExclusivo: 'Aerus-exclusive destination',
    verTodas: 'See all routes',
    verTodasHref: '/rutas/',
    vuelosDirectos: 'Direct flights',
    porCiudad: 'Direct flights by city',
    otrasRutas: 'Other routes',
  },
  espera: {
    eyebrow: 'Efficient processes',
    titulo: 'Wait ',
    tituloAcento: 'minutes,',
    tituloFin: ' not hours.',
    lede: 'Aerus makes the most of your time. Our check-in, boarding and departure processes are fast, because your day shouldn’t be spent waiting in a lounge.',
    pasos: [
      {
        num: '01 · Check-in',
        big: '40',
        unit: 'min before',
        title: 'Faster check-in',
        body: 'Check in at the counter at least 40 minutes before departure for domestic flights, or online up to 72 hours before your flight.',
        cta: 'Check in online',
        href: '/check-in/',
      },
      {
        num: '02 · Gate',
        big: '30',
        unit: 'min before',
        title: 'Be at the gate 30 minutes early',
        body: 'Please be at the boarding gate with your boarding pass at least thirty minutes before your flight departs. Applies to domestic flights only.',
        cta: 'Getting to the airport',
        href: '/ayuda/tiempos-aeropuerto/',
      },
      {
        num: '03 · Boarding',
        big: '0',
        unit: 'lines',
        title: 'Effortless boarding',
        body: 'You’re on board in minutes, with no lines or unnecessary waiting. Our aircraft are new and comfortable, and boarding is quick and direct.',
        cta: 'Meet our fleet',
        href: '/experiencia/flota/',
      },
    ],
    notaNegrita: '*International flights:',
    nota: 'for international routes, please check in at the counter at least 1 hour before departure. Applies to all fare classes.',
  },
  directos: {
    a: 'Direct',
    b: 'Flights',
    blurb: '{n} direct connections, no unnecessary layovers. Arrive sooner, rest more and enjoy your destination — not the departure lounge.',
    activas: 'Active direct routes',
    cta: 'Find your direct flight',
    ctaHref: '/rutas/',
  },
  servicios: {
    eyebrow: 'Additional services',
    titulo: 'Services designed to ',
    tituloAcento: 'travel with you.',
    verTodos: 'See all services',
    verTodosHref: '/experiencia/',
    verMas: 'Learn more',
    items: [
      {
        num: '01',
        icono: 'swap',
        titulo: 'Flight changes',
        texto: 'Need to change your flight? Our Customer Service team can help — you only cover the fare difference and the applicable change fee.',
        badge: '',
        href: '/ayuda/faq/',
      },
      {
        num: '02',
        icono: 'shield',
        titulo: 'Travel assistance',
        texto: 'Travel with peace of mind thanks to special coverage that protects you at every stage of your trip.',
        badge: '',
        href: '/experiencia/asistencia-de-viaje/',
      },
      {
        num: '03',
        icono: 'circle-check',
        titulo: 'Cancellation insurance',
        texto: 'Exclusive benefits that back you up if you need to cancel your flight for unforeseen reasons. Includes partial refund and rebooking.',
        badge: '',
        href: '/experiencia/seguro-de-cancelacion/',
      },
      {
        num: '04',
        icono: 'users',
        titulo: 'Groups',
        texto: 'Traveling with more than ten passengers? Get exclusive benefits: preferential fares, extra baggage and personalized service.',
        badge: '10+ passengers',
        href: '/experiencia/grupos/',
      },
    ],
  },
  pagos: {
    eyebrow: 'Payment methods',
    titulo: 'Pay the way ',
    tituloAcento: 'you prefer.',
    seguro: 'Secure connection · PCI DSS · SSL certificate · 3D Secure enabled.',
    problema: 'Having trouble with your payment?',
    soporte: '24/7 customer service →',
    soporteHref: '/ayuda/contacto/',
    grupos: [
      {
        titulo: 'Cards and banks',
        sub: 'Credit and debit · 3, 6, 9 and 12 interest-free monthly installments with participating Mexican cards',
        icono: 'credit-card',
        marcas: [
          {
            nombre: 'Visa',
            logo: {
              src: '/logos/visa-logo-blanco.webp',
              alt: 'Visa',
            },
          },
          {
            nombre: 'Mastercard',
            logo: {
              src: '/logos/mastercard-logo-blanco.webp',
              alt: 'Mastercard',
            },
          },
          {
            nombre: 'American Express',
            logo: {
              src: '/logos/american-express-logo-blanco.webp',
              alt: 'American Express',
            },
          },
          {
            nombre: 'Carnet',
            logo: {
              src: '/logos/carnet-logo-blanco.webp',
              alt: 'Carnet',
            },
          },
          {
            nombre: 'BBVA',
            logo: {
              src: '/logos/bbva-logo-blanco.webp',
              alt: 'BBVA',
            },
          },
          {
            nombre: 'Citibanamex',
            logo: {
              src: '/logos/banamex-logo-blanco.webp',
              alt: 'Citibanamex',
            },
          },
          {
            nombre: 'Banorte',
            logo: {
              src: '/logos/banorte-logo-blanco.webp',
              alt: 'Banorte',
            },
          },
          {
            nombre: 'Santander',
            logo: {
              src: '/logos/santander-logo-blanco.webp',
              alt: 'Santander',
            },
          },
          {
            nombre: 'BanRegio',
            logo: {
              src: '/logos/banregio-logo-blanco.webp',
              alt: 'BanRegio',
            },
          },
          {
            nombre: 'Inbursa',
            logo: {
              src: '/logos/inbursa-logo-blanco.webp',
              alt: 'Inbursa',
            },
          },
          {
            nombre: 'Scotiabank',
            logo: {
              src: '/logos/scotiabank-logo-blanco.webp',
              alt: 'Scotiabank',
            },
          },
          {
            nombre: 'HSBC',
            logo: {
              src: '/logos/hsbc-logo-blanco.webp',
              alt: 'HSBC',
            },
          },
          {
            nombre: 'Banco Azteca',
            logo: {
              src: '/logos/banco-azteca-logo-blanco.webp',
              alt: 'Banco Azteca',
            },
          },
          {
            nombre: 'Afirme',
            logo: {
              src: '/logos/afirme-logo-blanco.webp',
              alt: 'Afirme',
            },
          },
          {
            nombre: 'Invex',
            logo: {
              src: '/logos/invex-logo-blanco.webp',
              alt: 'Invex',
            },
          },
        ],
      },
      {
        titulo: 'Cash and bank transfers',
        sub: 'Pay at more than 25,000 locations across Mexico',
        icono: 'cash',
        marcas: [
          {
            nombre: 'OXXO',
            logo: {
              src: '/logos/oxxo-logo-blanco.webp',
              alt: 'OXXO',
            },
          },
          {
            nombre: '7-Eleven',
            logo: {
              src: '/logos/7-eleven-logo-blanco.webp',
              alt: '7-Eleven',
            },
          },
          {
            nombre: 'Walmart',
            logo: {
              src: '/logos/walmart-logo-blanco.webp',
              alt: 'Walmart',
            },
          },
          {
            nombre: 'Sam\'s Club',
            logo: {
              src: '/logos/sams-club-logo-blanco.webp',
              alt: 'Sam\'s Club',
            },
          },
          {
            nombre: 'Farmacias del Ahorro',
            logo: {
              src: '/logos/farmacias-del-ahorro-logo-blanco.webp',
              alt: 'Farmacias del Ahorro',
            },
          },
          {
            nombre: 'Extra',
            logo: {
              src: '/logos/extra-logo-blanco.webp',
              alt: 'Extra',
            },
          },
          {
            nombre: 'Circle K',
            logo: {
              src: '/logos/circle-k-logo-blanco.webp',
              alt: 'Circle K',
            },
          },
          {
            nombre: 'Waldo\'s',
            logo: {
              src: '/logos/waldos-logo-blanco.webp',
              alt: 'Waldo\'s',
            },
          },
          {
            nombre: 'Bodega Aurrera',
            logo: {
              src: '/logos/bodega-aurrera-logo-blanco.webp',
              alt: 'Bodega Aurrera',
            },
          },
          {
            nombre: 'PayCash',
            logo: {
              src: '/logos/pay-cash-logo-blanco.webp',
              alt: 'PayCash',
            },
          },
          {
            nombre: 'SPEI',
            logo: {
              src: '/logos/spei-logo-blanco.webp',
              alt: 'SPEI',
            },
          },
        ],
      },
    ],
  },
}

const defaults: PageDefaults<InicioContent> = { es, en }
export default defaults
