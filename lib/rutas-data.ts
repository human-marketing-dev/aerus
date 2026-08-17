export interface RutaData {
  slug: string
  label: string
  origen: string
  destino: string
  iataOrigen: string
  iataDestino: string
  aeropuertoOrigen: string
  aeropuertoDestino: string
  distanciaKm: number
  duracionMin: number
  descripcion: string
  quienViaja: string
  ventajaAerus: string
  esInternacional: boolean
  faq: { q: string; a: string }[]
  conectadas: { label: string; href: string }[]
}

export const RUTAS_DATA: Record<string, RutaData> = {
  'monterrey-brownsville': {
    slug: 'monterrey-brownsville',
    label: 'Monterrey – Brownsville',
    origen: 'Monterrey',
    destino: 'Brownsville',
    iataOrigen: 'MTY',
    iataDestino: 'BRO',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Brownsville South Padre Island International Airport',
    distanciaKm: 175,
    duracionMin: 40,
    descripcion:
      'Ruta directa entre el hub industrial de Monterrey y el sur de Texas. Brownsville es el punto de cruce fronterizo que conecta con Matamoros y el corredor logístico del noreste.',
    quienViaja:
      'Ejecutivos del sector maquilador, profesionales de comercio exterior y familias del corredor fronterizo que prefieren llegar sin pasar horas en los puentes internacionales.',
    ventajaAerus:
      'El cruce terrestre Matamoros–Brownsville puede tomar de 1 a 3 horas según el tráfico en el puente. Con Aerus, Monterrey a Brownsville son 40 minutos en avión y aterrizas directo del lado americano.',
    esInternacional: true,
    faq: [
      {
        q: '¿Necesito pasaporte para volar Monterrey–Brownsville?',
        a: 'Sí. Es una ruta internacional México–Estados Unidos. Necesitas pasaporte vigente y, si aplica, visa americana o autorización ESTA. Consulta los requisitos completos en nuestra página de documentos para viajar.',
      },
      {
        q: '¿Hay trámites migratorios en el vuelo?',
        a: 'Sí. Al llegar a Brownsville pasas por inmigración y aduana de Estados Unidos. Te recomendamos llegar al aeropuerto de Monterrey con suficiente anticipación para completar los documentos de salida.',
      },
      {
        q: '¿Cuánto equipaje puedo llevar?',
        a: 'Consulta nuestra política de equipaje en /ayuda/equipaje/. Por tratarse de una ruta internacional, los límites de peso y dimensiones aplican según tu tarifa.',
      },
      {
        q: '¿La ruta opera todo el año?',
        a: 'La ruta Monterrey–Brownsville opera de forma regular. Consulta disponibilidad y fechas concretas en el motor de reservas.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Laredo',  href: '/rutas/monterrey-laredo/' },
      { label: 'Monterrey – McAllen', href: '/rutas/monterrey-mcallen/' },
      { label: 'Monterrey – Durango', href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-laredo': {
    slug: 'monterrey-laredo',
    label: 'Monterrey – Laredo',
    origen: 'Monterrey',
    destino: 'Laredo',
    iataOrigen: 'MTY',
    iataDestino: 'LRD',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Laredo International Airport',
    distanciaKm: 230,
    duracionMin: 50,
    descripcion:
      'El cruce comercial más activo entre México y Estados Unidos. Laredo mueve el mayor volumen de comercio bilateral del país — y esta ruta conecta directamente con Monterrey, el polo industrial del noreste.',
    quienViaja:
      'Directivos de logística, agentes aduanales, representantes de empresas con operaciones a ambos lados de la frontera y ejecutivos de manufactura que recorren el corredor Monterrey–Laredo con frecuencia.',
    ventajaAerus:
      'El trayecto por carretera entre Monterrey y Laredo bordea las 2.5 horas sin tráfico — más el tiempo en el puente internacional. El vuelo directo de Aerus lo resuelve en 50 minutos puerta a puerta.',
    esInternacional: true,
    faq: [
      {
        q: '¿Necesito pasaporte para volar Monterrey–Laredo?',
        a: 'Sí. Es ruta internacional. Necesitas pasaporte vigente y visa americana o autorización ESTA según tu nacionalidad.',
      },
      {
        q: '¿El aeropuerto de Laredo tiene servicio a otras ciudades de Texas?',
        a: 'Laredo International Airport ofrece conexiones domésticas a Dallas y Houston a través de otras aerolíneas. Aerus opera el segmento Monterrey–Laredo.',
      },
      {
        q: '¿Puedo llevar mercancía en esta ruta?',
        a: 'El equipaje documentado sigue la política estándar de Aerus. Para carga comercial, contacta a nuestro equipo en prensa@aerus.mx para orientación.',
      },
      {
        q: '¿Con cuánto tiempo debo llegar al aeropuerto?',
        a: 'Para rutas internacionales recomendamos llegar 90 minutos antes de la salida. Consulta nuestra guía de tiempos en /ayuda/tiempos-aeropuerto/.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Brownsville', href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – McAllen',     href: '/rutas/monterrey-mcallen/' },
      { label: 'Monterrey – Durango',     href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-mcallen': {
    slug: 'monterrey-mcallen',
    label: 'Monterrey – McAllen',
    origen: 'Monterrey',
    destino: 'McAllen',
    iataOrigen: 'MTY',
    iataDestino: 'MFE',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'McAllen Miller International Airport',
    distanciaKm: 255,
    duracionMin: 55,
    descripcion:
      'McAllen es el centro médico, comercial y de servicios del Valle del Río Grande en Texas. Esta ruta conecta directamente con Monterrey para los miles de regiomontanos que viajan al sur de Texas por salud, negocios o compras.',
    quienViaja:
      'Pacientes y acompañantes que buscan atención médica en el Valle del Río Grande, ejecutivos de empresas con operaciones en ambos lados, y familias que combinan trámites y compras.',
    ventajaAerus:
      'Monterrey a McAllen por carretera toma alrededor de 3 horas más el tiempo en el puente Reynosa–Hidalgo. El vuelo directo son 55 minutos — sin tráfico, sin cola en el puente, sin estacionamiento.',
    esInternacional: true,
    faq: [
      {
        q: '¿Necesito pasaporte para volar a McAllen?',
        a: 'Sí. Es ruta internacional México–Estados Unidos. Necesitas pasaporte vigente y visa o autorización ESTA. Más información en /ayuda/documentos-para-viajar/.',
      },
      {
        q: '¿McAllen tiene hospitales especializados cerca del aeropuerto?',
        a: 'El área médica del McAllen Medical Center y varios hospitales especializados están a corta distancia del aeropuerto. Esta es una de las razones más comunes por las que los pasajeros eligen esta ruta.',
      },
      {
        q: '¿Puedo llevar medicamentos en el equipaje?',
        a: 'Los medicamentos permitidos pueden transportarse con su prescripción médica. Consulta la guía de equipaje de Aerus y las regulaciones de la TSA americana para importación de medicamentos.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto?',
        a: 'Para vuelos internacionales recomendamos 90 minutos de anticipación. Ver guía completa en /ayuda/tiempos-aeropuerto/.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Brownsville', href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – Laredo',      href: '/rutas/monterrey-laredo/' },
      { label: 'Monterrey – Durango',     href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-durango': {
    slug: 'monterrey-durango',
    label: 'Monterrey – Durango',
    origen: 'Monterrey',
    destino: 'Durango',
    iataOrigen: 'MTY',
    iataDestino: 'DGO',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Aeropuerto Internacional Guadalupe Victoria',
    distanciaKm: 460,
    duracionMin: 70,
    descripcion:
      'La Sierra Madre Occidental separa Monterrey y Durango con una de las carreteras más espectaculares — y más largas — del norte de México. El vuelo directo elimina las 5-6 horas de carretera y conecta en 70 minutos el hub industrial del noreste con la capital minera y forestal de Durango.',
    quienViaja:
      'Ejecutivos de la industria minera y forestal, funcionarios de gobierno, profesionales que trabajan en ambas ciudades y turistas que visitan las sierras y el estado de Durango.',
    ventajaAerus:
      'La carretera Durango–Mazatlán (antes llamada "El Espinazo del Diablo") es la única conexión terrestre directa y tarda entre 5 y 6 horas en condiciones normales. El vuelo directo son 70 minutos — sin montaña, sin neblina, sin la sierra.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Monterrey–Durango?',
        a: 'La carretera entre Monterrey y Durango cruza la Sierra Madre Occidental con tramos de alta montaña, curvas y condiciones variables según la temporada. El vuelo directo de Aerus tarda 70 minutos y lleva exactamente al mismo destino sin el desgaste del camino.',
      },
      {
        q: '¿En qué aeropuerto llego a Durango?',
        a: 'El Aeropuerto Internacional Guadalupe Victoria (DGO) está a unos 20 minutos del centro de la ciudad de Durango.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto de Monterrey?',
        a: 'Para vuelos nacionales recomendamos llegar 60-90 minutos antes. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
      {
        q: '¿Aerus opera esta ruta en temporada de lluvias?',
        a: 'La ruta opera durante todo el año. El Cessna Grand Caravan EX vuela hasta 25,000 pies, lo que permite operar por encima de gran parte de la actividad meteorológica regional.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Brownsville', href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – Laredo',      href: '/rutas/monterrey-laredo/' },
      { label: 'Monterrey – McAllen',     href: '/rutas/monterrey-mcallen/' },
    ],
  },

  'cancun-cozumel': {
    slug: 'cancun-cozumel',
    label: 'Cancún – Cozumel',
    origen: 'Cancún',
    destino: 'Cozumel',
    iataOrigen: 'CUN',
    iataDestino: 'CZM',
    aeropuertoOrigen: 'Aeropuerto Internacional de Cancún',
    aeropuertoDestino: 'Aeropuerto Internacional de Cozumel',
    distanciaKm: 45,
    duracionMin: 20,
    descripcion:
      'Cozumel es una isla en el Caribe mexicano conocida por sus arrecifes de coral, buceo de clase mundial y el Parque Nacional marino que la rodea. Esta ruta conecta Cancún directamente con la isla en 20 minutos, sin ferry, sin tiempo de espera en el muelle.',
    quienViaja:
      'Turistas de aventura y buceo, visitantes del Caribe que combinan Cancún y Cozumel en un mismo viaje, residentes de la isla que viajan al continente, y viajeros en tránsito por Cancún.',
    ventajaAerus:
      'El ferry Cancún–Cozumel no existe como ruta directa — la opción marítima implica ir a Playa del Carmen primero y luego tomar el barco (45–90 minutos de trayecto más traslado). El vuelo de Aerus son 20 minutos puerta a puerta.',
    esInternacional: false,
    faq: [
      {
        q: '¿Cuánto tarda el vuelo Cancún–Cozumel?',
        a: 'El vuelo directo dura aproximadamente 20 minutos. Es una de las rutas más cortas de la red Aerus, y una de las más eficientes comparada con las alternativas terrestres y marítimas.',
      },
      {
        q: '¿Hay alternativa marítima a este vuelo?',
        a: 'La ruta directa en ferry no existe. Para ir en barco a Cozumel hay que trasladarse primero a Playa del Carmen (1 hora desde Cancún) y luego tomar el ferry (45 min). El vuelo directo de Aerus es la opción más rápida.',
      },
      {
        q: '¿Puedo llevar equipo de buceo en el vuelo?',
        a: 'El equipo de buceo ligero (reguladores, máscara, aletas) puede documentarse según la política de equipaje de Aerus. Para equipo voluminoso o tanques, contáctanos antes de viajar.',
      },
      {
        q: '¿El aeropuerto de Cozumel está cerca de los arrecifes?',
        a: 'El Aeropuerto Internacional de Cozumel está en el norte de la isla, a pocos minutos de los principales sitios de buceo y hoteles del litoral.',
      },
    ],
    conectadas: [
      { label: 'Cancún – Chetumal', href: '/rutas/cancun-chetumal/' },
    ],
  },

  'cancun-chetumal': {
    slug: 'cancun-chetumal',
    label: 'Cancún – Chetumal',
    origen: 'Cancún',
    destino: 'Chetumal',
    iataOrigen: 'CUN',
    iataDestino: 'CTM',
    aeropuertoOrigen: 'Aeropuerto Internacional de Cancún',
    aeropuertoDestino: 'Aeropuerto Internacional de Chetumal',
    distanciaKm: 355,
    duracionMin: 65,
    descripcion:
      'Chetumal es la capital de Quintana Roo y la puerta de entrada a Belice. Esta ruta conecta directamente con Cancún, el principal hub de la Península de Yucatán, para atender la demanda de funcionarios de gobierno, empresarios y viajeros del sur del estado.',
    quienViaja:
      'Funcionarios y servidores públicos que viajan entre la capital estatal y el polo turístico, empresarios del corredor Chetumal–Cancún, y viajeros internacionales en tránsito hacia Belice.',
    ventajaAerus:
      'La carretera Cancún–Chetumal bordea las 4 horas en condiciones normales. El vuelo directo de Aerus lo resuelve en 65 minutos, con llegada directa al aeropuerto de Chetumal.',
    esInternacional: false,
    faq: [
      {
        q: '¿Desde Chetumal puedo continuar a Belice?',
        a: 'Chetumal tiene conexión terrestre directa con Belice a través del Puente de las Américas. El aeropuerto de Chetumal está a pocos minutos del cruce fronterizo.',
      },
      {
        q: '¿Cuánto tarda el vuelo Cancún–Chetumal?',
        a: 'El vuelo directo tarda aproximadamente 65 minutos. Por carretera el trayecto es de 3.5 a 4 horas.',
      },
      {
        q: '¿El aeropuerto de Chetumal tiene conexiones a otras ciudades?',
        a: 'Aerus opera la ruta Cancún–Chetumal. Para conexiones adicionales, consulta las opciones disponibles en el motor de reservas o contacta a nuestro equipo.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto de Cancún?',
        a: 'Para vuelos nacionales recomendamos 60-90 minutos antes de la salida. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
    ],
    conectadas: [
      { label: 'Cancún – Cozumel', href: '/rutas/cancun-cozumel/' },
    ],
  },

  'veracruz-villahermosa': {
    slug: 'veracruz-villahermosa',
    label: 'Veracruz – Villahermosa',
    origen: 'Veracruz',
    destino: 'Villahermosa',
    iataOrigen: 'VER',
    iataDestino: 'VSA',
    aeropuertoOrigen: 'Aeropuerto Internacional General Heriberto Jara',
    aeropuertoDestino: 'Aeropuerto Internacional Carlos Rovirosa Pérez',
    distanciaKm: 340,
    duracionMin: 60,
    descripcion:
      'El corredor del Golfo de México une dos de las ciudades más importantes del sector energético del país. Veracruz y Villahermosa son nodos clave de la industria petrolera nacional — y esta ruta las conecta directamente en una hora.',
    quienViaja:
      'Ejecutivos y técnicos del sector energético (Pemex, CFE y proveedores), funcionarios de gobierno estatal, profesionales de la industria petroquímica y viajeros del corredor sureste.',
    ventajaAerus:
      'Por carretera, Veracruz–Villahermosa son entre 4 y 5 horas cruzando terreno tropical con tráfico de carga pesada. El vuelo directo de Aerus son 60 minutos de puerta a puerta.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué es importante esta ruta para el sector energético?',
        a: 'Veracruz y Villahermosa son dos de los principales centros de operación de Pemex en el Golfo de México. La ruta permite a los profesionales del sector moverse entre ambas ciudades en el mismo día sin gastar medio día en carretera.',
      },
      {
        q: '¿En qué aeropuerto llego a Villahermosa?',
        a: 'El Aeropuerto Internacional Carlos Rovirosa Pérez (VSA) está ubicado en el norte de Villahermosa, a unos 20 minutos del centro de la ciudad.',
      },
      {
        q: '¿Cuánto equipaje puedo llevar?',
        a: 'Consulta la política completa en /ayuda/equipaje/. El Cessna Grand Caravan EX tiene capacidad de bodega para equipaje de todos los pasajeros.',
      },
      {
        q: '¿La ruta opera en temporada de lluvias?',
        a: 'Sí, la ruta opera durante todo el año. El Cessna Grand Caravan EX está diseñado para operar en condiciones meteorológicas variables propias de la región del Golfo.',
      },
    ],
    conectadas: [
      { label: 'Conexiones Viva Aerobus', href: '/rutas/conexiones-viva-aerobus/' },
    ],
  },
}

export function getRuta(slug: string): RutaData | null {
  return RUTAS_DATA[slug] ?? null
}

export function getAllRutas(): RutaData[] {
  return Object.values(RUTAS_DATA)
}
