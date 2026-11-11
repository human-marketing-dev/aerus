import type { Lang } from './i18n'
import { DESTINOS_EN } from './destinos-mock.en'
import { getRoutes } from './red-de-rutas'

export interface Destino {
  nombre: string
  slug: string
  iata: string
  descripcion: string
  imagen: string         // URL or /public path — empty string triggers gradient fallback
  rutas: string[]        // ciudades con vuelo directo — se calculan de lib/red-de-rutas.ts
  hub: boolean
  esInternacional: boolean
}

/** Datos editables de un destino; `rutas` no se captura: se deriva de la red de rutas. */
export type DestinoData = Omit<Destino, 'rutas'>

export const DESTINOS: DestinoData[] = [
  // ── Hubs ──────────────────────────────────────────────────────────────
  {
    nombre: 'Monterrey',
    slug: 'monterrey',
    iata: 'MTY',
    descripcion:
      'Capital industrial del norte de México y hub principal de la red Aerus. Con salidas frecuentes desde el aeropuerto internacional Mariano Escobedo, conecta el noreste con destinos nacionales e internacionales.',
    imagen: '',
    hub: true,
    esInternacional: false,
  },
  {
    nombre: 'CDMX',
    slug: 'cdmx',
    iata: 'NLU',
    descripcion:
      'El hub metropolitano de la red conecta la capital del país con los destinos regionales de mayor demanda. Operaciones desde el Aeropuerto Internacional Felipe Ángeles (AIFA).',
    imagen: '',
    hub: true,
    esInternacional: false,
  },
  {
    nombre: 'Villahermosa',
    slug: 'villahermosa',
    iata: 'VSA',
    descripcion:
      'Capital de Tabasco, hub de la red Aerus y puerta de entrada al sur-sureste. Conectada con Veracruz y Mérida dentro del corredor del Golfo y la Península de Yucatán.',
    imagen: '',
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
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Mérida',
    slug: 'merida',
    iata: 'MID',
    descripcion:
      'Capital de Yucatán y ciudad con una de las economías de mayor crecimiento en el sureste. Conectada con Villahermosa para facilitar los viajes regionales en la Península.',
    imagen: '',
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
    hub: false,
    esInternacional: true,
  },
  {
    nombre: 'Piedras Negras',
    slug: 'piedras-negras',
    iata: 'PDS',
    descripcion:
      'Ciudad fronteriza de Coahuila frente a Eagle Pass, Texas. Vuelo directo desde Monterrey para atender la demanda de la industria maquiladora de la región.',
    imagen: '',
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
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Tampico',
    slug: 'tampico',
    iata: 'TAM',
    descripcion:
      'Puerto histórico en la desembocadura del río Pánuco con una economía petrolera consolidada. Vuelos directos a CDMX, Monterrey y Veracruz.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Veracruz',
    slug: 'veracruz',
    iata: 'VER',
    descripcion:
      'Puerto estratégico en el Golfo de México. Vuelos directos a Tampico y Villahermosa para conectar el litoral del Golfo de norte a sur.',
    imagen: '',
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
    hub: false,
    esInternacional: true,
  },
]

const DESTINOS_BY_LANG: Record<Lang, DestinoData[]> = {
  es: DESTINOS,
  en: DESTINOS_EN,
}

/** Ciudades con vuelo directo a `nombre`, según la red de rutas (orden alfabético). */
function conexiones(nombre: string): string[] {
  const set = new Set<string>()
  for (const [a, b] of getRoutes()) {
    if (a === nombre) set.add(b)
    else if (b === nombre) set.add(a)
  }
  return [...set].sort((x, y) => x.localeCompare(y, 'es'))
}

export function getAllDestinos(lang: Lang = 'es'): Destino[] {
  return DESTINOS_BY_LANG[lang].map(d => ({ ...d, rutas: conexiones(d.nombre) }))
}

export function getDestino(slug: string, lang: Lang = 'es'): Destino | null {
  return getAllDestinos(lang).find(d => d.slug === slug) ?? null
}
