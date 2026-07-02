export interface Destino {
  nombre: string
  slug: string
  iata: string
  descripcion: string
  imagen: string         // URL or /public path — empty string triggers gradient fallback
  rutas: string[]        // display names of directly-connected cities
  hub: boolean
  esInternacional: boolean
}

export const DESTINOS: Destino[] = [
  // ── Hubs ──────────────────────────────────────────────────────────────
  {
    nombre: 'Monterrey',
    slug: 'monterrey',
    iata: 'MTY',
    descripcion:
      'Capital industrial del norte de México y hub principal de la red Aerus. Con salidas frecuentes desde el aeropuerto internacional Mariano Escobedo, conecta el noreste con destinos nacionales e internacionales.',
    imagen: '',
    rutas: ['Aguascalientes', 'Brownsville', 'Durango', 'McAllen', 'Laredo', 'Piedras Negras', 'San Luis Potosí', 'Tampico'],
    hub: true,
    esInternacional: false,
  },
  {
    nombre: 'CDMX',
    slug: 'cdmx',
    iata: 'MEX',
    descripcion:
      'El hub metropolitano de la red conecta la capital del país con los destinos regionales de mayor demanda. Operaciones desde el Aeropuerto Internacional de la Ciudad de México.',
    imagen: '',
    rutas: ['Ciudad Victoria', 'Ciudad Ixtepec', 'Tampico', 'Morelia', 'Veracruz'],
    hub: true,
    esInternacional: false,
  },
  {
    nombre: 'Veracruz',
    slug: 'veracruz',
    iata: 'VER',
    descripcion:
      'Hub portuario estratégico en el Golfo de México. Punto de conexión natural entre la capital, el norte industrial y el sureste del país.',
    imagen: '',
    rutas: ['Ciudad del Carmen', 'Minatitlán', 'CDMX', 'Tampico', 'Villahermosa'],
    hub: true,
    esInternacional: false,
  },

  // ── Destinos nacionales ───────────────────────────────────────────────
  {
    nombre: 'Aguascalientes',
    slug: 'aguascalientes',
    iata: 'AGU',
    descripcion:
      'Ciudad en el corazón del Bajío con una creciente industria manufacturera y automotriz. Vuelo directo a Monterrey con conexión hacia la red norteña de Aerus.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Ciudad del Carmen',
    slug: 'ciudad-del-carmen',
    iata: 'CME',
    descripcion:
      'Isla petrolera en el Golfo de México y nodo energético del sureste. Conectada directamente con Veracruz y Minatitlán dentro de la red Aerus.',
    imagen: '',
    rutas: ['Minatitlán', 'Veracruz'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Ciudad Ixtepec',
    slug: 'ciudad-ixtepec',
    iata: 'IZT',
    descripcion:
      'Puerta de entrada al Istmo de Tehuantepec en Oaxaca. Vuelo directo a la CDMX para conectar esta región con el resto del país.',
    imagen: '',
    rutas: ['CDMX'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Ciudad Victoria',
    slug: 'ciudad-victoria',
    iata: 'CVM',
    descripcion:
      'Capital de Tamaulipas con una economía basada en agroindustria y manufactura ligera. Vuelo directo a la CDMX con la frecuencia que la región demanda.',
    imagen: '',
    rutas: ['CDMX'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Durango',
    slug: 'durango',
    iata: 'DGO',
    descripcion:
      'Ciudad colonial del norte con vocación minera y forestal. Conexión directa con Monterrey para viajeros de negocio y turismo en el estado de Durango.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Laredo',
    slug: 'laredo',
    iata: 'LRD',
    descripcion:
      'El cruce fronterizo más activo entre México y Estados Unidos, ubicado en Texas. Vuelo directo desde Monterrey para ejecutivos y visitantes frecuentes de la frontera.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: true,
  },
  {
    nombre: 'Mérida',
    slug: 'merida',
    iata: 'MID',
    descripcion:
      'Capital de Yucatán y ciudad con una de las economías de mayor crecimiento en el sureste. Conectada con Villahermosa para facilitar los viajes regionales en la Península.',
    imagen: '',
    rutas: ['Villahermosa'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'McAllen',
    slug: 'mcallen',
    iata: 'MFE',
    descripcion:
      'Centro comercial y médico del Valle del Río Grande en Texas. Vuelo directo desde Monterrey para pasajeros que cruzan la frontera sur de Estados Unidos.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: true,
  },
  {
    nombre: 'Minatitlán',
    slug: 'minatitlan',
    iata: 'MTT',
    descripcion:
      'Ciudad industrial del sur de Veracruz con importante actividad petroquímica. Conectada con Ciudad del Carmen, Veracruz y Villahermosa dentro del corredor del Golfo.',
    imagen: '',
    rutas: ['Ciudad del Carmen', 'Veracruz', 'Villahermosa'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Morelia',
    slug: 'morelia',
    iata: 'MLM',
    descripcion:
      'Capital de Michoacán y ciudad Patrimonio de la Humanidad. Vuelos directos a la CDMX y a Uruapan para conectar la región centro-occidente del país.',
    imagen: '',
    rutas: ['CDMX', 'Uruapan'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Piedras Negras',
    slug: 'piedras-negras',
    iata: 'PDS',
    descripcion:
      'Ciudad fronteriza de Coahuila frente a Eagle Pass, Texas. Vuelo directo desde Monterrey para atender la demanda de la industria maquiladora de la región.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'San Luis Potosí',
    slug: 'san-luis-potosi',
    iata: 'SLP',
    descripcion:
      'Nodo industrial del Bajío con fuerte presencia del sector automotriz y logístico. Conexión directa a Monterrey para viajeros frecuentes del corredor norte-centro.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Tampico',
    slug: 'tampico',
    iata: 'TAM',
    descripcion:
      'Puerto histórico en la desembocadura del río Pánuco con una economía petrolera consolidada. Vuelos directos a los tres hubs de la red — CDMX, Monterrey y Veracruz.',
    imagen: '',
    rutas: ['CDMX', 'Monterrey', 'Veracruz'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Uruapan',
    slug: 'uruapan',
    iata: 'UPN',
    descripcion:
      'Ciudad aguacatera de Michoacán rodeada de bosques y barrancas. Vuelo regional directo a Morelia para completar la conexión con la capital del estado.',
    imagen: '',
    rutas: ['Morelia'],
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Villahermosa',
    slug: 'villahermosa',
    iata: 'VSA',
    descripcion:
      'Capital de Tabasco y puerta de entrada al sur-sureste. Conectada con Minatitlán, Veracruz y Mérida dentro del corredor del Golfo y la Península de Yucatán.',
    imagen: '',
    rutas: ['Minatitlán', 'Veracruz', 'Mérida'],
    hub: false,
    esInternacional: false,
  },

  // ── Destinos internacionales ──────────────────────────────────────────
  {
    nombre: 'Brownsville',
    slug: 'brownsville',
    iata: 'BRO',
    descripcion:
      'Ciudad costera en el extremo sur de Texas, frente a Matamoros. Vuelo directo desde Monterrey para pasajeros del corredor fronterizo noreste.',
    imagen: '',
    rutas: ['Monterrey'],
    hub: false,
    esInternacional: true,
  },
]

export function getAllDestinos(): Destino[] {
  return DESTINOS
}

export function getDestino(slug: string): Destino | null {
  return DESTINOS.find(d => d.slug === slug) ?? null
}
