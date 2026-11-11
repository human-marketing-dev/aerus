// English copy for the destination pages. Same order, slugs and shape as DESTINOS in ./destinos-mock.ts.
// `nombre` keeps the same city names as the Spanish version (the pages use them to resolve
// nombre → slug for interlinks, and `rutas` is derived from lib/red-de-rutas.ts by name),
// so only `descripcion` is translated.
import type { DestinoData } from './destinos-mock'

export const DESTINOS_EN: DestinoData[] = [
  // ── Hubs ──────────────────────────────────────────────────────────────
  {
    nombre: 'Monterrey',
    slug: 'monterrey',
    iata: 'MTY',
    descripcion:
      'The industrial capital of northern Mexico and the main hub of the Aerus network. With frequent departures from Mariano Escobedo International Airport, it connects the northeast with domestic and international destinations.',
    imagen: '',
    hub: true,
    esInternacional: false,
  },
  {
    nombre: 'CDMX',
    slug: 'cdmx',
    iata: 'NLU',
    descripcion:
      'The network’s metropolitan hub connects Mexico’s capital with the highest-demand regional destinations. Operations from Felipe Ángeles International Airport (AIFA).',
    imagen: '',
    hub: true,
    esInternacional: false,
  },
  {
    nombre: 'Villahermosa',
    slug: 'villahermosa',
    iata: 'VSA',
    descripcion:
      'The capital of Tabasco, an Aerus network hub and the gateway to Mexico’s south-southeast. Connected with Veracruz and Mérida along the Gulf corridor and the Yucatán Peninsula.',
    imagen: '',
    hub: true,
    esInternacional: false,
  },

  // ── Domestic destinations ─────────────────────────────────────────────
  {
    nombre: 'Aguascalientes',
    slug: 'aguascalientes',
    iata: 'AGU',
    descripcion:
      'A city in the heart of the Bajío region with a growing manufacturing and automotive industry. Direct flight to Monterrey, connecting to Aerus’s northern network.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Ciudad Victoria',
    slug: 'ciudad-victoria',
    iata: 'CVM',
    descripcion:
      'The capital of Tamaulipas, with an economy built on agribusiness and light manufacturing. Direct flights to Mexico City at the frequency the region demands.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Durango',
    slug: 'durango',
    iata: 'DGO',
    descripcion:
      'A colonial city in the north with deep roots in mining and forestry. Direct connection with Monterrey for business and leisure travelers in the state of Durango.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Mérida',
    slug: 'merida',
    iata: 'MID',
    descripcion:
      'The capital of Yucatán and one of the fastest-growing economies in the southeast. Connected with Villahermosa to make regional travel across the Peninsula easier.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'McAllen',
    slug: 'mcallen',
    iata: 'MFE',
    descripcion:
      'The retail and medical center of the Rio Grande Valley in Texas. Direct flight from Monterrey for passengers crossing into the southern United States.',
    imagen: '',
    hub: false,
    esInternacional: true,
  },
  {
    nombre: 'Piedras Negras',
    slug: 'piedras-negras',
    iata: 'PDS',
    descripcion:
      'A border city in Coahuila across from Eagle Pass, Texas. Direct flight from Monterrey serving the region’s maquiladora industry.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'San Luis Potosí',
    slug: 'san-luis-potosi',
    iata: 'SLP',
    descripcion:
      'An industrial hub of the Bajío with a strong automotive and logistics presence. Direct connection to Monterrey for frequent travelers on the north–central corridor.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Tampico',
    slug: 'tampico',
    iata: 'TAM',
    descripcion:
      'A historic port at the mouth of the Pánuco River with a well-established oil economy. Direct flights to CDMX, Monterrey and Veracruz.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },
  {
    nombre: 'Veracruz',
    slug: 'veracruz',
    iata: 'VER',
    descripcion:
      'A strategic port on the Gulf of Mexico. Direct flights to Tampico and Villahermosa connect the Gulf coast from north to south.',
    imagen: '',
    hub: false,
    esInternacional: false,
  },

  // ── International destinations ────────────────────────────────────────
  {
    nombre: 'Brownsville',
    slug: 'brownsville',
    iata: 'BRO',
    descripcion:
      'A coastal city at the southern tip of Texas, across from Matamoros. Direct flight from Monterrey for passengers along the northeastern border corridor.',
    imagen: '',
    hub: false,
    esInternacional: true,
  },
]
