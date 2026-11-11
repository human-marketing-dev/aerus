import type { Lang } from './i18n'
import { RUTAS_DATA_EN } from './rutas-data.en'

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
  'cdmx-ciudad-victoria': {
    slug: 'cdmx-ciudad-victoria',
    label: 'CDMX – Ciudad Victoria',
    origen: 'CDMX',
    destino: 'Ciudad Victoria',
    iataOrigen: 'NLU',
    iataDestino: 'CVM',
    aeropuertoOrigen: 'Aeropuerto Internacional Felipe Ángeles',
    aeropuertoDestino: 'Aeropuerto Internacional General Pedro José Méndez',
    distanciaKm: 480,
    duracionMin: 95,
    descripcion:
      'Ciudad Victoria es la capital de Tamaulipas y el centro administrativo, educativo y agrícola del estado. Esta ruta la conecta directamente con la Ciudad de México desde el Aeropuerto Internacional Felipe Ángeles (AIFA), sin escalas ni conexiones intermedias.',
    quienViaja:
      'Funcionarios de gobierno estatal y federal, académicos y estudiantes, productores del sector agropecuario y citrícola, y profesionales que necesitan resolver trámites o reuniones en la capital del país sin perder días en carretera.',
    ventajaAerus:
      'Por carretera, la Ciudad de México y Ciudad Victoria están a aproximadamente 8 horas o más de distancia, según la ruta y el tráfico. El vuelo directo de Aerus desde el AIFA tarda alrededor de 1 hora 35 minutos.',
    esInternacional: false,
    faq: [
      {
        q: '¿Desde qué aeropuerto sale el vuelo en la Ciudad de México?',
        a: 'Los vuelos de Aerus en la Ciudad de México operan desde el Aeropuerto Internacional Felipe Ángeles (NLU), ubicado en el Estado de México, al norte de la capital. Considera el tiempo de traslado al aeropuerto al planear tu viaje.',
      },
      {
        q: '¿En qué aeropuerto llego a Ciudad Victoria?',
        a: 'Llegas al Aeropuerto Internacional General Pedro José Méndez (CVM), que da servicio a Ciudad Victoria y a la región centro de Tamaulipas.',
      },
      {
        q: '¿Qué documentos necesito para volar?',
        a: 'Es una ruta nacional: basta con una identificación oficial vigente con fotografía. Consulta los detalles en /ayuda/documentos-para-viajar/.',
      },
      {
        q: '¿Con cuánto tiempo debo llegar al aeropuerto?',
        a: 'Para vuelos nacionales recomendamos llegar 60-90 minutos antes de la salida. En el AIFA, considera además el tiempo de traslado desde tu punto de partida. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
    ],
    conectadas: [
      { label: 'CDMX – Tampico',   href: '/rutas/cdmx-tampico/' },
      { label: 'Alianza con Viva', href: '/rutas/alianza-viva/' },
    ],
  },

  'cdmx-tampico': {
    slug: 'cdmx-tampico',
    label: 'CDMX – Tampico',
    origen: 'CDMX',
    destino: 'Tampico',
    iataOrigen: 'NLU',
    iataDestino: 'TAM',
    aeropuertoOrigen: 'Aeropuerto Internacional Felipe Ángeles',
    aeropuertoDestino: 'Aeropuerto Internacional General Francisco Javier Mina',
    distanciaKm: 340,
    duracionMin: 65,
    descripcion:
      'Tampico es el principal puerto del sur de Tamaulipas y, junto con Ciudad Madero y Altamira, forma una de las zonas industriales y petroquímicas más relevantes del Golfo de México. Esta ruta la conecta directamente con la Ciudad de México desde el AIFA.',
    quienViaja:
      'Ejecutivos y técnicos de la industria petroquímica y portuaria, proveedores del corredor industrial de Altamira, funcionarios de gobierno y familias de la zona conurbada que viajan con frecuencia a la capital.',
    ventajaAerus:
      'El trayecto por carretera entre la Ciudad de México y Tampico toma aproximadamente 6 a 7 horas, con tramos de montaña en la Sierra Madre Oriental. El vuelo directo de Aerus desde el AIFA son alrededor de 65 minutos.',
    esInternacional: false,
    faq: [
      {
        q: '¿Desde qué aeropuerto sale el vuelo en la Ciudad de México?',
        a: 'Los vuelos de Aerus en la Ciudad de México operan desde el Aeropuerto Internacional Felipe Ángeles (NLU), ubicado en el Estado de México, al norte de la capital. Considera el tiempo de traslado al aeropuerto al planear tu viaje.',
      },
      {
        q: '¿En qué aeropuerto llego a Tampico?',
        a: 'Llegas al Aeropuerto Internacional General Francisco Javier Mina (TAM), que da servicio a Tampico, Ciudad Madero y Altamira.',
      },
      {
        q: '¿Cuánto equipaje puedo llevar?',
        a: 'Consulta nuestra política de equipaje en /ayuda/equipaje/. Los límites de peso y dimensiones aplican según tu tarifa.',
      },
      {
        q: '¿La ruta opera todo el año?',
        a: 'La ruta CDMX–Tampico opera de forma regular. Consulta disponibilidad y fechas concretas en el motor de reservas.',
      },
    ],
    conectadas: [
      { label: 'CDMX – Ciudad Victoria', href: '/rutas/cdmx-ciudad-victoria/' },
      { label: 'Alianza con Viva',       href: '/rutas/alianza-viva/' },
    ],
  },

  'monterrey-aguascalientes': {
    slug: 'monterrey-aguascalientes',
    label: 'Monterrey – Aguascalientes',
    origen: 'Monterrey',
    destino: 'Aguascalientes',
    iataOrigen: 'MTY',
    iataDestino: 'AGU',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Aeropuerto Internacional Jesús Terán Peredo',
    distanciaKm: 505,
    duracionMin: 100,
    descripcion:
      'Aguascalientes es uno de los polos automotrices y de manufactura más importantes del centro del país. Esta ruta conecta directamente el hub industrial de Monterrey con la ciudad y su cadena de proveeduría, sin pasar por la Ciudad de México.',
    quienViaja:
      'Ejecutivos y técnicos de la industria automotriz y de autopartes, proveedores con operaciones en ambas ciudades, profesionales de logística y visitantes de la Feria Nacional de San Marcos.',
    ventajaAerus:
      'Por carretera, Monterrey–Aguascalientes son aproximadamente 6 a 7 horas pasando por Saltillo y Zacatecas. El vuelo directo de Aerus lo resuelve en alrededor de 1 hora 40 minutos, sin escalas.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Monterrey–Aguascalientes?',
        a: 'Son aproximadamente 6 a 7 horas de carretera en cada sentido. Con el vuelo directo de Aerus puedes atender reuniones en Aguascalientes sin dedicar jornadas completas al traslado.',
      },
      {
        q: '¿En qué aeropuerto llego a Aguascalientes?',
        a: 'El Aeropuerto Internacional Jesús Terán Peredo (AGU) está al sur de la ciudad, a unos 30 minutos del centro según el tráfico.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto de Monterrey?',
        a: 'Para vuelos nacionales recomendamos llegar 60-90 minutos antes. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
      {
        q: '¿Puedo usar esta ruta para ir a la Feria de San Marcos?',
        a: 'Sí. La feria se celebra cada año entre abril y mayo y es temporada de alta demanda, así que te recomendamos reservar con anticipación y consultar disponibilidad en el motor de reservas.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – San Luis Potosí', href: '/rutas/monterrey-san-luis-potosi/' },
      { label: 'Monterrey – Durango',         href: '/rutas/monterrey-durango/' },
      { label: 'Monterrey – Tampico',         href: '/rutas/monterrey-tampico/' },
    ],
  },

  'monterrey-brownsville': {
    slug: 'monterrey-brownsville',
    label: 'Monterrey – Brownsville',
    origen: 'Monterrey',
    destino: 'Brownsville',
    iataOrigen: 'MTY',
    iataDestino: 'BRO',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Brownsville South Padre Island International Airport',
    distanciaKm: 270,
    duracionMin: 50,
    descripcion:
      'Ruta directa entre el hub industrial de Monterrey y el sur de Texas. Brownsville es el punto de cruce fronterizo que conecta con Matamoros y el corredor logístico del noreste.',
    quienViaja:
      'Ejecutivos del sector maquilador, profesionales de comercio exterior y familias del corredor fronterizo que prefieren llegar sin pasar horas en los puentes internacionales.',
    ventajaAerus:
      'El cruce terrestre Matamoros–Brownsville puede tomar de 1 a 3 horas según el tráfico en el puente. Con Aerus, Monterrey a Brownsville son 50 minutos en avión y aterrizas directo del lado americano.',
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
      { label: 'Monterrey – McAllen',        href: '/rutas/monterrey-mcallen/' },
      { label: 'Monterrey – Piedras Negras', href: '/rutas/monterrey-piedras-negras/' },
      { label: 'Monterrey – Durango',        href: '/rutas/monterrey-durango/' },
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
    distanciaKm: 480,
    duracionMin: 95,
    descripcion:
      'Entre Monterrey y Durango hay casi 600 km de carretera a través del desierto del norte, pasando por Saltillo y Torreón. El vuelo directo elimina aproximadamente 7 horas de manejo y conecta en 95 minutos el hub industrial del noreste con la capital minera y forestal de Durango.',
    quienViaja:
      'Ejecutivos de la industria minera y forestal, funcionarios de gobierno, profesionales que trabajan en ambas ciudades y turistas que visitan las sierras y el estado de Durango.',
    ventajaAerus:
      'Por carretera, Monterrey–Durango toma aproximadamente 7 horas o más vía Saltillo y Torreón, con tramos largos de tráfico pesado. El vuelo directo son 95 minutos — sin casetas, sin cansancio y sin perder el día en el camino.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Monterrey–Durango?',
        a: 'El trayecto por carretera entre Monterrey y Durango es de casi 600 km y toma aproximadamente 7 horas o más. El vuelo directo de Aerus tarda 95 minutos y lleva exactamente al mismo destino sin el desgaste del camino.',
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
      { label: 'Monterrey – Brownsville',    href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – Aguascalientes', href: '/rutas/monterrey-aguascalientes/' },
      { label: 'Monterrey – McAllen',        href: '/rutas/monterrey-mcallen/' },
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
    distanciaKm: 190,
    duracionMin: 35,
    descripcion:
      'McAllen es el centro médico, comercial y de servicios del Valle del Río Grande en Texas. Esta ruta conecta directamente con Monterrey para los miles de regiomontanos que viajan al sur de Texas por salud, negocios o compras.',
    quienViaja:
      'Pacientes y acompañantes que buscan atención médica en el Valle del Río Grande, ejecutivos de empresas con operaciones en ambos lados, y familias que combinan trámites y compras.',
    ventajaAerus:
      'Monterrey a McAllen por carretera toma alrededor de 3 horas más el tiempo en el puente Reynosa–Hidalgo. El vuelo directo son 35 minutos — sin tráfico, sin cola en el puente, sin estacionamiento.',
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
      { label: 'Monterrey – Brownsville',    href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – Piedras Negras', href: '/rutas/monterrey-piedras-negras/' },
      { label: 'Monterrey – Durango',        href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-piedras-negras': {
    slug: 'monterrey-piedras-negras',
    label: 'Monterrey – Piedras Negras',
    origen: 'Monterrey',
    destino: 'Piedras Negras',
    iataOrigen: 'MTY',
    iataDestino: 'PDS',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Aeropuerto Internacional de Piedras Negras',
    distanciaKm: 320,
    duracionMin: 60,
    descripcion:
      'Piedras Negras es la principal ciudad fronteriza del norte de Coahuila, frente a Eagle Pass, Texas, y puerta de entrada a la Región Carbonífera. Esta ruta nacional la conecta directamente con Monterrey en alrededor de una hora.',
    quienViaja:
      'Ejecutivos de la industria maquiladora y minera, profesionales de comercio exterior y agentes aduanales, y familias del norte de Coahuila que viajan a Monterrey por negocios, salud o estudios.',
    ventajaAerus:
      'Por carretera, Monterrey–Piedras Negras son aproximadamente 4 a 5 horas. El vuelo directo de Aerus son alrededor de 60 minutos y, al ser una ruta nacional, no hay trámites migratorios.',
    esInternacional: false,
    faq: [
      {
        q: '¿Necesito pasaporte para volar Monterrey–Piedras Negras?',
        a: 'No. Es una ruta nacional dentro de México, por lo que basta con una identificación oficial vigente. Si después vas a cruzar a Eagle Pass, Texas, necesitarás los documentos que exige Estados Unidos para ingresar.',
      },
      {
        q: '¿En qué aeropuerto llego a Piedras Negras?',
        a: 'Llegas al Aeropuerto Internacional de Piedras Negras (PDS), que da servicio a la ciudad y al norte de Coahuila.',
      },
      {
        q: '¿Cuánto equipaje puedo llevar?',
        a: 'Consulta nuestra política de equipaje en /ayuda/equipaje/. Los límites de peso y dimensiones aplican según tu tarifa.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto de Monterrey?',
        a: 'Para vuelos nacionales recomendamos llegar 60-90 minutos antes. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – McAllen',         href: '/rutas/monterrey-mcallen/' },
      { label: 'Monterrey – Brownsville',     href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – San Luis Potosí', href: '/rutas/monterrey-san-luis-potosi/' },
    ],
  },

  'monterrey-san-luis-potosi': {
    slug: 'monterrey-san-luis-potosi',
    label: 'Monterrey – San Luis Potosí',
    origen: 'Monterrey',
    destino: 'San Luis Potosí',
    iataOrigen: 'MTY',
    iataDestino: 'SLP',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Aeropuerto Internacional Ponciano Arriaga',
    distanciaKm: 400,
    duracionMin: 75,
    descripcion:
      'San Luis Potosí es un nodo logístico y automotriz en el cruce de los principales corredores carreteros del país, entre el Bajío y el noreste. Esta ruta lo conecta directamente con Monterrey en alrededor de 1 hora 15 minutos.',
    quienViaja:
      'Ejecutivos y técnicos de la industria automotriz y de manufactura, operadores logísticos, funcionarios de gobierno y viajeros que visitan la Huasteca Potosina o el altiplano del estado.',
    ventajaAerus:
      'Por carretera, Monterrey–San Luis Potosí son aproximadamente 5 a 6 horas, con tráfico pesado de carga en buena parte del trayecto. El vuelo directo de Aerus tarda alrededor de 1 hora 15 minutos.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Monterrey–San Luis Potosí?',
        a: 'El trayecto terrestre ronda las 5 a 6 horas y comparte carretera con uno de los corredores de carga más transitados del país. El vuelo directo reduce el traslado a alrededor de 1 hora 15 minutos.',
      },
      {
        q: '¿En qué aeropuerto llego a San Luis Potosí?',
        a: 'Llegas al Aeropuerto Internacional Ponciano Arriaga (SLP), que da servicio a la capital potosina y a su zona industrial.',
      },
      {
        q: '¿Qué documentos necesito para volar?',
        a: 'Es una ruta nacional: basta con una identificación oficial vigente con fotografía. Consulta los detalles en /ayuda/documentos-para-viajar/.',
      },
      {
        q: '¿La ruta opera todo el año?',
        a: 'La ruta Monterrey–San Luis Potosí opera de forma regular. Consulta disponibilidad y fechas concretas en el motor de reservas.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Aguascalientes', href: '/rutas/monterrey-aguascalientes/' },
      { label: 'Monterrey – Tampico',        href: '/rutas/monterrey-tampico/' },
      { label: 'Monterrey – Durango',        href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-tampico': {
    slug: 'monterrey-tampico',
    label: 'Monterrey – Tampico',
    origen: 'Monterrey',
    destino: 'Tampico',
    iataOrigen: 'MTY',
    iataDestino: 'TAM',
    aeropuertoOrigen: 'Aeropuerto Internacional Mariano Escobedo',
    aeropuertoDestino: 'Aeropuerto Internacional General Francisco Javier Mina',
    distanciaKm: 450,
    duracionMin: 85,
    descripcion:
      'Tampico, Ciudad Madero y Altamira forman la zona metropolitana más importante del sur de Tamaulipas, con actividad portuaria, petroquímica y turística en la costa del Golfo. Esta ruta la conecta directamente con Monterrey en alrededor de 1 hora 25 minutos.',
    quienViaja:
      'Ejecutivos y técnicos de la industria petroquímica y portuaria, proveedores con operaciones en Monterrey y Altamira, y familias regiomontanas que visitan las playas de Ciudad Madero.',
    ventajaAerus:
      'Por carretera, Monterrey–Tampico son aproximadamente 6 horas o más pasando por Ciudad Victoria. El vuelo directo de Aerus lo resuelve en alrededor de 1 hora 25 minutos.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Monterrey–Tampico?',
        a: 'Son aproximadamente 6 horas o más de carretera en cada sentido. Con el vuelo directo ahorras la mayor parte de ese tiempo y llegas descansado a tus reuniones o a la costa.',
      },
      {
        q: '¿En qué aeropuerto llego a Tampico?',
        a: 'Llegas al Aeropuerto Internacional General Francisco Javier Mina (TAM), que da servicio a Tampico, Ciudad Madero y Altamira.',
      },
      {
        q: '¿Cuánto equipaje puedo llevar?',
        a: 'Consulta nuestra política de equipaje en /ayuda/equipaje/. Los límites de peso y dimensiones aplican según tu tarifa.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto de Monterrey?',
        a: 'Para vuelos nacionales recomendamos llegar 60-90 minutos antes. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – San Luis Potosí', href: '/rutas/monterrey-san-luis-potosi/' },
      { label: 'Monterrey – Aguascalientes',  href: '/rutas/monterrey-aguascalientes/' },
      { label: 'Monterrey – McAllen',         href: '/rutas/monterrey-mcallen/' },
    ],
  },

  'veracruz-tampico': {
    slug: 'veracruz-tampico',
    label: 'Veracruz – Tampico',
    origen: 'Veracruz',
    destino: 'Tampico',
    iataOrigen: 'VER',
    iataDestino: 'TAM',
    aeropuertoOrigen: 'Aeropuerto Internacional General Heriberto Jara',
    aeropuertoDestino: 'Aeropuerto Internacional General Francisco Javier Mina',
    distanciaKm: 390,
    duracionMin: 75,
    descripcion:
      'El corredor costero del Golfo de México une dos de los puertos con más historia del país. Veracruz y Tampico comparten actividad portuaria, energética y comercial — y esta ruta las conecta directamente en alrededor de 1 hora 15 minutos.',
    quienViaja:
      'Profesionales del sector portuario y logístico, ejecutivos y técnicos de la industria energética y petroquímica, funcionarios de gobierno y viajeros que recorren la costa del Golfo.',
    ventajaAerus:
      'Por carretera, Veracruz–Tampico son aproximadamente 7 horas o más por la costa, pasando por Poza Rica y Tuxpan. El vuelo directo de Aerus tarda alrededor de 1 hora 15 minutos.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Veracruz–Tampico?',
        a: 'El trayecto terrestre ronda las 7 horas o más, con tráfico de carga en varios tramos. El vuelo directo reduce el viaje a alrededor de 1 hora 15 minutos.',
      },
      {
        q: '¿Desde qué aeropuerto salgo en Veracruz?',
        a: 'Los vuelos salen del Aeropuerto Internacional General Heriberto Jara (VER), que da servicio al puerto de Veracruz y a Boca del Río.',
      },
      {
        q: '¿En qué aeropuerto llego a Tampico?',
        a: 'Llegas al Aeropuerto Internacional General Francisco Javier Mina (TAM), que da servicio a Tampico, Ciudad Madero y Altamira.',
      },
      {
        q: '¿Con cuánto tiempo llego al aeropuerto?',
        a: 'Para vuelos nacionales recomendamos llegar 60-90 minutos antes de la salida. Consulta /ayuda/tiempos-aeropuerto/ para la guía completa.',
      },
    ],
    conectadas: [
      { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/' },
      { label: 'Alianza con Viva',        href: '/rutas/alianza-viva/' },
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
    distanciaKm: 375,
    duracionMin: 75,
    descripcion:
      'El corredor del Golfo de México une dos de las ciudades más importantes del sector energético del país. Veracruz y Villahermosa son nodos clave de la industria petrolera nacional — y esta ruta las conecta directamente en una hora.',
    quienViaja:
      'Ejecutivos y técnicos del sector energético (Pemex, CFE y proveedores), funcionarios de gobierno estatal, profesionales de la industria petroquímica y viajeros del corredor sureste.',
    ventajaAerus:
      'Por carretera, Veracruz–Villahermosa son entre 4 y 5 horas cruzando terreno tropical con tráfico de carga pesada. El vuelo directo de Aerus son 75 minutos.',
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
      { label: 'Veracruz – Tampico', href: '/rutas/veracruz-tampico/' },
      { label: 'Alianza con Viva',   href: '/rutas/alianza-viva/' },
    ],
  },

  'villahermosa-merida': {
    slug: 'villahermosa-merida',
    label: 'Villahermosa – Mérida',
    origen: 'Villahermosa',
    destino: 'Mérida',
    iataOrigen: 'VSA',
    iataDestino: 'MID',
    aeropuertoOrigen: 'Aeropuerto Internacional Carlos Rovirosa Pérez',
    aeropuertoDestino: 'Aeropuerto Internacional Manuel Crescencio Rejón',
    distanciaKm: 465,
    duracionMin: 90,
    descripcion:
      'Villahermosa, capital de Tabasco y hub de Aerus en el sureste, se conecta directamente con Mérida, capital de Yucatán y principal centro de servicios, salud y educación de la península. La ruta une ambas ciudades en alrededor de 1 hora y media.',
    quienViaja:
      'Profesionales del sector energético, empresarios con operaciones en el sureste, pacientes que buscan atención médica especializada en Mérida, estudiantes y turistas que visitan la península de Yucatán.',
    ventajaAerus:
      'Por carretera, Villahermosa–Mérida son aproximadamente 7 horas o más cruzando Tabasco y Campeche. El vuelo directo de Aerus lo resuelve en alrededor de 1 hora y media.',
    esInternacional: false,
    faq: [
      {
        q: '¿Por qué conviene volar en lugar de manejar Villahermosa–Mérida?',
        a: 'El trayecto terrestre ronda las 7 horas o más y atraviesa tres estados. El vuelo directo reduce el viaje a alrededor de 1 hora y media y te deja directo en Mérida.',
      },
      {
        q: '¿En qué aeropuerto llego a Mérida?',
        a: 'El Aeropuerto Internacional Manuel Crescencio Rejón (MID) está al sur de Mérida, a unos 20 minutos del centro según el tráfico.',
      },
      {
        q: '¿Cuánto equipaje puedo llevar?',
        a: 'Consulta nuestra política de equipaje en /ayuda/equipaje/. Los límites de peso y dimensiones aplican según tu tarifa.',
      },
      {
        q: '¿La ruta opera todo el año?',
        a: 'La ruta Villahermosa–Mérida opera de forma regular. Consulta disponibilidad y fechas concretas en el motor de reservas.',
      },
    ],
    conectadas: [
      { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/' },
      { label: 'Alianza con Viva',        href: '/rutas/alianza-viva/' },
    ],
  },
}

const RUTAS_BY_LANG: Record<Lang, Record<string, RutaData>> = {
  es: RUTAS_DATA,
  en: RUTAS_DATA_EN,
}

export function getRuta(slug: string, lang: Lang = 'es'): RutaData | null {
  return RUTAS_BY_LANG[lang][slug] ?? null
}

export function getAllRutas(lang: Lang = 'es'): RutaData[] {
  return Object.values(RUTAS_BY_LANG[lang])
}
