export type BlogPost = {
  slug: string
  titulo: string
  fecha: string       // ISO date
  categoria: string
  extracto: string
  contenido: ContentBlock[]
}

export type ContentBlock =
  | { tipo: 'p';    texto: string }
  | { tipo: 'h2';   texto: string }
  | { tipo: 'h3';   texto: string }
  | { tipo: 'list'; items: string[] }

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'grand-costa-maya',
    titulo: '¡Con Aerus llega a los mejores lugares caribeños!',
    fecha: '2023-07-15',
    categoria: 'Destinos',
    extracto:
      'Grand Costa Maya, en el sur de Quintana Roo, es un paraíso para los amantes de la aventura, la historia y la cultura: Chetumal, Bacalar y Mahahual te esperan.',
    contenido: [
      {
        tipo: 'h2',
        texto: 'Grand Costa Maya',
      },
      {
        tipo: 'p',
        texto:
          'En la parte sur de Quintana Roo se encuentra Grand Costa Maya, una región que abarca los destinos de Chetumal, Bacalar y Mahahual. Esta zona del Caribe Mexicano es un paraíso para los amantes de la aventura, la historia y la cultura. Sus paisajes exuberantes, sistemas de lagunas, playas de oleaje suave y un rico patrimonio arqueológico la convierten en el destino ideal para quienes buscan tranquilidad y una conexión profunda con la historia y la naturaleza.',
      },
      {
        tipo: 'h2',
        texto: 'Chetumal',
      },
      {
        tipo: 'p',
        texto:
          'Capital de Quintana Roo y puerta de entrada a Grand Costa Maya, Chetumal es un verdadero tesoro de cultura e historia. La ciudad está decorada con monumentos y museos que reflejan su legado, y en sus alrededores se encuentran impresionantes sitios arqueológicos y paisajes naturales únicos como Calderitas, Laguna Milagros y el impactante cenote Cocodrilo Dorado en La Unión. Estos lugares ofrecen actividades como deportes acuáticos, rappel, observación de aves, senderismo y una gastronomía deliciosa. Además, el Río Hondo, que marca la frontera natural entre México y Belice, enriquece el entorno con una exuberante flora y fauna, alimentando manantiales, cenotes y lagunas a lo largo de su recorrido.',
      },
      {
        tipo: 'h2',
        texto: 'Mahahual',
      },
      {
        tipo: 'p',
        texto:
          'Mahahual es un encantador destino que sirve como puerta de entrada a la Reserva de la Biósfera Banco Chinchorro, la mayor zona arrecifal de México y parte del Sistema Arrecifal Mesoamericano, la segunda barrera de coral más grande del mundo. Este ecosistema es un tesoro submarino, hogar de innumerables especies marinas y de más de 69 barcos naufragados entre los siglos XVI y XX, que hoy fungen como museos submarinos. Mahahual es ideal para el buceo y el esnórquel, permitiendo descubrir un mundo sumergido lleno de historia y vida marina. Muy cerca se encuentra Xcalak, uno de los últimos rincones vírgenes de México, perfecto para la pesca deportiva —especialmente la pesca con mosca—, así como para explorar sus manglares en kayak o lancha.',
      },
      {
        tipo: 'h2',
        texto: 'Bacalar: La Laguna de los Siete Colores',
      },
      {
        tipo: 'p',
        texto:
          'A solo una hora de Mahahual, Bacalar deslumbra con su famosa Laguna de los Siete Colores, reconocida por sus aguas que varían en tonos turquesa. Aquí se puede practicar kayak, paddleboard, esnórquel o disfrutar de un paseo en lancha o en los pintorescos pontones. El Fuerte de San Felipe, sede del Museo de la Piratería, brinda una mirada fascinante a la historia de Bacalar y su vínculo con los piratas.',
      },
      {
        tipo: 'h2',
        texto: 'Tesoros arqueológicos',
      },
      {
        tipo: 'p',
        texto:
          'El sur del Caribe Mexicano transporta a una época en la que esta región fue un centro de poder del mundo maya:',
      },
      {
        tipo: 'list',
        items: [
          'Chacchobén: A solo 70 km de Chetumal, es uno de los asentamientos más grandes de la Región de los Lagos, destacando el Gran Basamento y el Grupo II, donde se encuentra la estructura más alta.',
          'Kohunlich: A 69 km al oeste de Chetumal, es famoso por el Templo de los Mascarones, con esculturas dedicadas al dios solar Kinich Ahau, una de las deidades más importantes del panteón maya.',
          'Dzibanché: Uno de los sitios más extensos y relevantes, alberga templos icónicos como el Templo de los Cormoranes y el Templo de los Dinteles.',
          'Kinichná: Ubicado al norte de Dzibanché, destaca por su monumental Acrópolis de tres niveles.',
          'Oxtankah: El sitio prehispánico más importante de la Bahía de Chetumal, combina vestigios mayas con una singular capilla española.',
          'Ixchabal: Uno de los más recientes descubrimientos arqueológicos abiertos al público en el sur de Quintana Roo. Su entorno selvático y estructuras en exploración ofrecen una experiencia auténtica y cercana al pasado maya, ideal para quienes buscan un contacto más íntimo con la historia antigua.',
        ],
      },
    ],
  },

  {
    slug: 'cancun-vacaciones-inolvidables',
    titulo: '¡Aerus: Tu guía para unas vacaciones inolvidables!',
    fecha: '2023-06-20',
    categoria: 'Destinos',
    extracto:
      'Cancún es uno de los destinos más vibrantes del Caribe Mexicano: playas de arena blanca, vida nocturna de talla mundial y una infraestructura turística de primer nivel.',
    contenido: [
      {
        tipo: 'p',
        texto:
          'Cancún es uno de los destinos más vibrantes del Caribe Mexicano, famoso por sus playas de arena blanca y mar color turquesa que parece sacado de una postal. Cada rincón ofrece una imagen inolvidable: desde amaneceres frente al mar hasta tardes relajadas bajo una palapa con vista infinita al océano.',
      },
      {
        tipo: 'p',
        texto:
          'Pero Cancún no solo brilla de día. Al caer la noche, la ciudad se transforma en un epicentro de entretenimiento. Su vida nocturna es reconocida a nivel internacional, con bares, clubes, espectáculos en vivo y beach clubs que garantizan noches inolvidables. Ya sea que busques un ambiente elegante frente al mar o una fiesta que dure hasta el amanecer, aquí lo encontrarás.',
      },
      {
        tipo: 'p',
        texto:
          'La infraestructura turística es de primer nivel, con hoteles de todas las categorías, experiencias gastronómicas para todos los gustos y actividades acuáticas que van desde paddle board hasta snorkel en el Museo Subacuático de Arte (MUSA). Déjate envolver por la energía única de este destino y descubre por qué Cancún es sinónimo de placer, fiesta y belleza natural en su máxima expresión.',
      },
    ],
  },

  {
    slug: 'descubre-cozumel',
    titulo: 'El paraíso a solo un vuelo de distancia con Aerus',
    fecha: '2023-08-10',
    categoria: 'Destinos',
    extracto:
      'A tan solo unos minutos desde Cancún, Cozumel te espera con aguas cristalinas, arrecifes de fama mundial y la tranquilidad que solo una isla puede ofrecer.',
    contenido: [
      {
        tipo: 'h2',
        texto: 'Descubre Cozumel',
      },
      {
        tipo: 'p',
        texto:
          'A tan solo unos minutos desde Cancún, Cozumel te espera con todo su esplendor caribeño. Gracias al vuelo directo de Aerus, explorar esta isla mágica es más fácil y rápido que nunca. Ideal para escapadas de fin de semana o para extender tus vacaciones por el Caribe Mexicano, este puente aéreo conecta dos joyas del Caribe en un trayecto cómodo y eficiente.',
      },
      {
        tipo: 'p',
        texto:
          'Cozumel es sinónimo de aguas cristalinas, arrecifes de fama mundial y una tranquilidad que invita a desconectar. Ya sea que busques bucear en el Parque Nacional Arrecifes de Cozumel, recorrer la costa en bicicleta o simplemente relajarte en una hamaca frente al mar, aquí encontrarás el equilibrio perfecto entre aventura y descanso.',
      },
      {
        tipo: 'p',
        texto:
          'Además, la isla ofrece una rica herencia cultural, deliciosa gastronomía local y una cálida hospitalidad que hace que cada visita sea memorable. Viajar entre Cancún y Cozumel con Aerus no solo te ahorra tiempo: te abre la puerta a una experiencia única.',
      },
    ],
  },

  {
    slug: 'quienes-somos',
    titulo: '¿Quiénes somos?',
    fecha: '2023-03-01',
    categoria: 'Aerus',
    extracto:
      'Aerus es la aerolínea regional mexicana que inicia operaciones en el noreste de México en el primer trimestre de 2023. Conoce nuestra historia y nuestros planes de expansión.',
    contenido: [
      {
        tipo: 'p',
        texto:
          'Aerus es una aerolínea regional mexicana que inicia operaciones en el noreste de México en el primer trimestre de 2023, cubriendo rutas nacionales y posteriormente internacionales. Para 2030, planea cubrir el 100% del territorio nacional con vuelos domésticos y ofrecer una variedad de vuelos internacionales.',
      },
      {
        tipo: 'p',
        texto:
          'Aerus es el nombre comercial de la empresa Aerotransportes Rafilher, S.A. de C.V., la cual fue fundada en marzo de 1990, brindando servicio de taxi aéreo nacional e internacional. En mayo de 2022 recibió, de parte de la AFAC, la concesión para operar vuelos regulares de itinerario.',
      },
      {
        tipo: 'p',
        texto:
          'Aerus forma parte de un grupo empresarial líder, originario de San Luis Potosí, con más de 80 años de experiencia.',
      },
    ],
  },

  {
    slug: 'nace-aerus',
    titulo: 'Más cerca de ti',
    fecha: '2023-01-20',
    categoria: 'Aerus',
    extracto:
      'Nace la aerolínea Aerus: con 32 años de experiencia como taxi aéreo, conectará las regiones de México sin transporte aéreo. Las primeras rutas: Tamaulipas, Veracruz y Texas.',
    contenido: [
      {
        tipo: 'p',
        texto:
          'Nace la aerolínea Aerus, con 32 años de experiencia como taxi aéreo, y ofrece empleo a los ex trabajadores de la extinta Aeromar. Este año iniciará operaciones la nueva aerolínea Aerotransportes Rafilher S.A. de C.V., con el nombre comercial Aerus, propiedad de un empresario de San Luis Potosí, que promete conectar a las regiones del país sin transporte aéreo con aviones de hasta 19 plazas, con base en Monterrey.',
      },
      {
        tipo: 'h2',
        texto: 'Primeras rutas',
      },
      {
        tipo: 'list',
        items: ['Tamaulipas', 'Veracruz', 'Texas, Estados Unidos'],
      },
      {
        tipo: 'h2',
        texto: 'Expansión planificada',
      },
      {
        tipo: 'p',
        texto:
          'Con el tiempo esperan consolidarse y ampliar las rutas con operaciones en otros puntos de México, Estados Unidos y del resto del continente americano:',
      },
      {
        tipo: 'list',
        items: [
          'Baja California',
          'Sonora',
          'Sinaloa',
          'Yucatán',
          'Oaxaca',
          'Cancún',
          'Chetumal',
          'California',
          'Arizona',
          'Nevada',
          'Centroamérica',
        ],
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  )
}

export function getPost(slug: string): BlogPost | null {
  return BLOG_POSTS.find(p => p.slug === slug) ?? null
}

export function formatFecha(iso: string): string {
  return new Date(iso).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
