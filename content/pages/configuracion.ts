// Configuración general del sitio: menú, aviso de rutas, footer, redes sociales, boletín y
// SEO por defecto. Se edita en Sanity (Páginas → General → Configuración general).
import type { PageDefaults, PageSeo } from '@/lib/content'

export type Enlace = { label: string; href: string }

export type ConfiguracionContent = {
  /** SEO por defecto del sitio (páginas sin SEO propio) */
  seo: PageSeo
  menu: { izquierda: Enlace[]; derecha: Enlace[]; reservar: string; reservarHref: string }
  aviso: {
    titulo: string; porDia: string; porSemana: string; deVuelo: string; verRuta: string
    rutas: { ruta: { slug: string }; frecuencia: number | null; periodo: 'day' | 'week' | null }[]
  }
  footer: {
    tagline: string
    columnas: { titulo: string; links: Enlace[] }[]
    contactos: { icono: string; etiqueta: string; valor: string; detalle: string }[]
    derechos: string
    legales: Enlace[]
    direccion: string
  }
  redes: { nombre: string; icono: string; href: string }[]
  boletin: {
    eyebrow: string; titulo: string; tituloContorno: string; texto: string; email: string
    enviar: string; gracias: string; beneficios: string[]; visual1: string; visual2: string
  }
}

const es: ConfiguracionContent = {
  seo: {
    metaTitle: 'Aerus · Descubre el futuro',
    metaDescription: 'Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.',
  },
  menu: {
    izquierda: [
      {
        label: 'Destinos',
        href: '/destinos/',
      },
      {
        label: 'Rutas',
        href: '/rutas/',
      },
      {
        label: 'On Demand',
        href: '/on-demand/',
      },
      {
        label: 'Charter',
        href: '/on-demand/charter/',
      },
    ],
    derecha: [
      {
        label: 'Ayuda',
        href: '/ayuda/',
      },
      {
        label: 'Mi Reserva',
        href: '/mi-reserva/',
      },
      {
        label: 'Check-in',
        href: '/check-in/',
      },
    ],
    reservar: 'Reservar',
    reservarHref: '/reservar/',
  },
  aviso: {
    titulo: 'Ruta directa',
    porDia: 'vuelos diarios',
    porSemana: 'vuelos semanales',
    deVuelo: 'de vuelo',
    verRuta: 'Ver ruta →',
    rutas: [
      {
        ruta: {
          slug: 'monterrey-brownsville',
        },
        frecuencia: 2,
        periodo: 'day',
      },
      {
        ruta: {
          slug: 'monterrey-mcallen',
        },
        frecuencia: 2,
        periodo: 'day',
      },
      {
        ruta: {
          slug: 'monterrey-piedras-negras',
        },
        frecuencia: null,
        periodo: null,
      },
      {
        ruta: {
          slug: 'cdmx-ciudad-victoria',
        },
        frecuencia: null,
        periodo: null,
      },
      {
        ruta: {
          slug: 'veracruz-villahermosa',
        },
        frecuencia: 9,
        periodo: 'week',
      },
    ],
  },
  footer: {
    tagline: 'Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.',
    columnas: [
      {
        titulo: 'Volar',
        links: [
          {
            label: 'Reservar vuelo',
            href: '/reservar/',
          },
          {
            label: 'Tarifas y familias',
            href: '/reservar/tarifas/',
          },
          {
            label: 'Web check-in',
            href: '/check-in/',
          },
          {
            label: 'Mi Reserva',
            href: '/mi-reserva/',
          },
          {
            label: 'Cambios y cancelaciones',
            href: '/mi-reserva/',
          },
        ],
      },
      {
        titulo: 'Destinos y rutas',
        links: [
          {
            label: 'Destinos',
            href: '/destinos/',
          },
          {
            label: 'Rutas',
            href: '/rutas/',
          },
          {
            label: 'Alianza con Viva',
            href: '/rutas/alianza-viva/',
          },
        ],
      },
      {
        titulo: 'On Demand',
        links: [
          {
            label: 'On Demand',
            href: '/on-demand/',
          },
          {
            label: 'Aerus Charter',
            href: '/on-demand/charter/',
          },
          {
            label: 'Aerus Flight Pass',
            href: '/on-demand/flight-pass/',
          },
          {
            label: 'Soluciones para empresas',
            href: '/on-demand/empresas/',
          },
        ],
      },
      {
        titulo: 'La aerolínea',
        links: [
          {
            label: 'Experiencia Aerus',
            href: '/experiencia/',
          },
          {
            label: 'Nosotros',
            href: '/nosotros/',
          },
          {
            label: 'Sala de prensa',
            href: '/nosotros/prensa/',
          },
          {
            label: 'MRO',
            href: '/mro/',
          },
          {
            label: 'Capacidades y certificaciones',
            href: '/mro/capacidades/',
          },
        ],
      },
      {
        titulo: 'Ayuda',
        links: [
          {
            label: 'Centro de ayuda',
            href: '/ayuda/',
          },
          {
            label: 'Preguntas frecuentes',
            href: '/ayuda/faq/',
          },
          {
            label: 'Documentos para viajar',
            href: '/ayuda/documentos-para-viajar/',
          },
          {
            label: 'Equipaje',
            href: '/ayuda/equipaje/',
          },
          {
            label: 'Requerimientos especiales',
            href: '/ayuda/requerimientos-especiales/',
          },
          {
            label: 'Viajar con mascota',
            href: '/ayuda/viajar-con-mascota/',
          },
          {
            label: 'Facturación',
            href: '/ayuda/facturacion/',
          },
          {
            label: 'Contacto',
            href: '/ayuda/contacto/',
          },
        ],
      },
    ],
    contactos: [
      {
        icono: 'phone',
        etiqueta: 'México',
        valor: '+52 (812) 682·3501',
        detalle: 'Lun–Dom · 06:00 – 22:00 hrs',
      },
      {
        icono: 'phone',
        etiqueta: 'Estados Unidos',
        valor: '+1 (866) 691·0179',
        detalle: 'Llamada gratuita desde EE. UU.',
      },
      {
        icono: 'bot',
        etiqueta: 'Asistente IA · 24 hrs',
        valor: '+52 (814) 170·1702',
        detalle: 'WhatsApp y SMS · todos los días',
      },
    ],
    derechos: '© 2026 Aerus. Todos los derechos reservados. Descubre el futuro™',
    legales: [
      {
        label: 'Términos',
        href: '/legal/terminos-y-condiciones/',
      },
      {
        label: 'Privacidad',
        href: '/legal/aviso-de-privacidad/',
      },
      {
        label: 'Cookies',
        href: '/legal/cookies/',
      },
    ],
    direccion: 'Aeropuerto Internacional de Monterrey, N.L. · Carretera Miguel Alemán, Km 24, Apodaca, Nuevo León · C.P. 66600',
  },
  redes: [
    {
      nombre: 'Instagram',
      icono: 'ig',
      href: 'https://www.instagram.com/flyaerus/',
    },
    {
      nombre: 'Facebook',
      icono: 'fb',
      href: 'https://www.facebook.com/FlyAerus/',
    },
    {
      nombre: 'TikTok',
      icono: 'tiktok',
      href: 'https://www.tiktok.com/@flyaerus',
    },
    {
      nombre: 'YouTube',
      icono: 'youtube',
      href: 'https://www.youtube.com/channel/UCoPKL1pq8k1Q_ajdFTbWr9w',
    },
    {
      nombre: 'LinkedIn',
      icono: 'in',
      href: 'https://www.linkedin.com/company/flyaerus/',
    },
    {
      nombre: 'X',
      icono: 'x-twitter',
      href: 'https://x.com/FlyAerus',
    },
  ],
  boletin: {
    eyebrow: 'Boletín Aerus',
    titulo: 'Mantente al día',
    tituloContorno: 'con Aerus.',
    texto: 'No te pierdas ninguna novedad. Suscríbete y entérate primero de nuestras nuevas rutas, destinos y noticias.',
    email: 'Tu correo electrónico',
    enviar: 'Suscríbete',
    gracias: '¡Gracias!',
    beneficios: [
      'Nuevas rutas',
      'Nuevos destinos',
      'Sin spam',
    ],
    visual1: 'Tu nueva',
    visual2: 'forma de viajar.',
  },
}

const en: ConfiguracionContent = {
  seo: {
    metaTitle: 'Aerus · Discover the future',
    metaDescription: 'A Mexican airline focused on agility, flexibility and innovation. Reimagine the new way to travel.',
  },
  menu: {
    izquierda: [
      {
        label: 'Destinations',
        href: '/destinos/',
      },
      {
        label: 'Routes',
        href: '/rutas/',
      },
      {
        label: 'On Demand',
        href: '/on-demand/',
      },
      {
        label: 'Charter',
        href: '/on-demand/charter/',
      },
    ],
    derecha: [
      {
        label: 'Help',
        href: '/ayuda/',
      },
      {
        label: 'My Booking',
        href: '/mi-reserva/',
      },
      {
        label: 'Check-in',
        href: '/check-in/',
      },
    ],
    reservar: 'Book',
    reservarHref: '/reservar/',
  },
  aviso: {
    titulo: 'Direct route',
    porDia: 'daily flights',
    porSemana: 'weekly flights',
    deVuelo: 'flight',
    verRuta: 'See route →',
    rutas: [
      {
        ruta: {
          slug: 'monterrey-brownsville',
        },
        frecuencia: 2,
        periodo: 'day',
      },
      {
        ruta: {
          slug: 'monterrey-mcallen',
        },
        frecuencia: 2,
        periodo: 'day',
      },
      {
        ruta: {
          slug: 'monterrey-piedras-negras',
        },
        frecuencia: null,
        periodo: null,
      },
      {
        ruta: {
          slug: 'cdmx-ciudad-victoria',
        },
        frecuencia: null,
        periodo: null,
      },
      {
        ruta: {
          slug: 'veracruz-villahermosa',
        },
        frecuencia: 9,
        periodo: 'week',
      },
    ],
  },
  footer: {
    tagline: 'A Mexican airline focused on agility, flexibility and innovation. Reimagine the new way to travel.',
    columnas: [
      {
        titulo: 'Fly',
        links: [
          {
            label: 'Book a flight',
            href: '/reservar/',
          },
          {
            label: 'Fares and fare families',
            href: '/reservar/tarifas/',
          },
          {
            label: 'Web check-in',
            href: '/check-in/',
          },
          {
            label: 'My Booking',
            href: '/mi-reserva/',
          },
          {
            label: 'Changes and cancellations',
            href: '/mi-reserva/',
          },
        ],
      },
      {
        titulo: 'Destinations and routes',
        links: [
          {
            label: 'Destinations',
            href: '/destinos/',
          },
          {
            label: 'Routes',
            href: '/rutas/',
          },
          {
            label: 'Viva alliance',
            href: '/rutas/alianza-viva/',
          },
        ],
      },
      {
        titulo: 'On Demand',
        links: [
          {
            label: 'On Demand',
            href: '/on-demand/',
          },
          {
            label: 'Aerus Charter',
            href: '/on-demand/charter/',
          },
          {
            label: 'Aerus Flight Pass',
            href: '/on-demand/flight-pass/',
          },
          {
            label: 'Business solutions',
            href: '/on-demand/empresas/',
          },
        ],
      },
      {
        titulo: 'The airline',
        links: [
          {
            label: 'The Aerus experience',
            href: '/experiencia/',
          },
          {
            label: 'About us',
            href: '/nosotros/',
          },
          {
            label: 'Press room',
            href: '/nosotros/prensa/',
          },
          {
            label: 'MRO',
            href: '/mro/',
          },
          {
            label: 'Capabilities and certifications',
            href: '/mro/capacidades/',
          },
        ],
      },
      {
        titulo: 'Help',
        links: [
          {
            label: 'Help center',
            href: '/ayuda/',
          },
          {
            label: 'FAQ',
            href: '/ayuda/faq/',
          },
          {
            label: 'Travel documents',
            href: '/ayuda/documentos-para-viajar/',
          },
          {
            label: 'Baggage',
            href: '/ayuda/equipaje/',
          },
          {
            label: 'Special assistance',
            href: '/ayuda/requerimientos-especiales/',
          },
          {
            label: 'Traveling with pets',
            href: '/ayuda/viajar-con-mascota/',
          },
          {
            label: 'Invoicing',
            href: '/ayuda/facturacion/',
          },
          {
            label: 'Contact',
            href: '/ayuda/contacto/',
          },
        ],
      },
    ],
    contactos: [
      {
        icono: 'phone',
        etiqueta: 'Mexico',
        valor: '+52 (812) 682·3501',
        detalle: 'Mon–Sun · 6:00 am – 10:00 pm',
      },
      {
        icono: 'phone',
        etiqueta: 'United States',
        valor: '+1 (866) 691·0179',
        detalle: 'Toll-free from the U.S.',
      },
      {
        icono: 'bot',
        etiqueta: 'AI assistant · 24/7',
        valor: '+52 (814) 170·1702',
        detalle: 'WhatsApp and SMS · every day',
      },
    ],
    derechos: '© 2026 Aerus. All rights reserved. Discover the future™',
    legales: [
      {
        label: 'Terms',
        href: '/legal/terminos-y-condiciones/',
      },
      {
        label: 'Privacy',
        href: '/legal/aviso-de-privacidad/',
      },
      {
        label: 'Cookies',
        href: '/legal/cookies/',
      },
    ],
    direccion: 'Monterrey International Airport, N.L. · Carretera Miguel Alemán, Km 24, Apodaca, Nuevo León · ZIP 66600, Mexico',
  },
  redes: [
    {
      nombre: 'Instagram',
      icono: 'ig',
      href: 'https://www.instagram.com/flyaerus/',
    },
    {
      nombre: 'Facebook',
      icono: 'fb',
      href: 'https://www.facebook.com/FlyAerus/',
    },
    {
      nombre: 'TikTok',
      icono: 'tiktok',
      href: 'https://www.tiktok.com/@flyaerus',
    },
    {
      nombre: 'YouTube',
      icono: 'youtube',
      href: 'https://www.youtube.com/channel/UCoPKL1pq8k1Q_ajdFTbWr9w',
    },
    {
      nombre: 'LinkedIn',
      icono: 'in',
      href: 'https://www.linkedin.com/company/flyaerus/',
    },
    {
      nombre: 'X',
      icono: 'x-twitter',
      href: 'https://x.com/FlyAerus',
    },
  ],
  boletin: {
    eyebrow: 'Aerus newsletter',
    titulo: 'Stay up to date',
    tituloContorno: 'with Aerus.',
    texto: 'Never miss an update. Subscribe and be the first to hear about our new routes, destinations and news.',
    email: 'Your email address',
    enviar: 'Subscribe',
    gracias: 'Thank you!',
    beneficios: [
      'New routes',
      'New destinations',
      'No spam',
    ],
    visual1: 'Your new',
    visual2: 'way to travel.',
  },
}

const defaults: PageDefaults<ConfiguracionContent> = { es, en }
export default defaults
