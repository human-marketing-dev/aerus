// Datos de la sección "Red de rutas" (mapa interactivo del home).
//
// Por ahora son estáticos. Antes se leían de un Google Sheet; la idea es moverlos a Sanity.
// Cuando eso pase, basta con que getCities() / getRoutes() lean del CMS con la misma forma.
//
// Coordenadas tomadas del Sheet "ciudades" (nov 2026). ldx/ldy/anchor colocan la etiqueta:
// hubs y ciudades con Viva llevan anillos alrededor del punto (hasta ~15px), así que sus
// etiquetas van más separadas.

export interface City {
  lat: number
  lon: number
  label: string
  slug: string     // URL-safe identifier derived from the city name
  hub?: boolean
  intl?: boolean   // destino internacional (cuenta para la estadística del mapa)
  ldx: number      // SVG label offset x (pixels from city centre)
  ldy: number      // SVG label offset y
  anchor: 'start' | 'middle' | 'end'
}

const CITIES: Record<string, City> = {
  'CDMX':            { label: 'CDMX',            slug: 'cdmx',            lat: 19.4363, lon: -99.0721,  hub: true,  ldx: 0,   ldy: 24,  anchor: 'middle' },
  'Monterrey':       { label: 'Monterrey',       slug: 'monterrey',       lat: 25.7785, lon: -100.107,  hub: true,  ldx: -14, ldy: -14, anchor: 'end' },
  'Villahermosa':    { label: 'Villahermosa',    slug: 'villahermosa',    lat: 17.997,  lon: -92.8174,  hub: true,  ldx: 0,   ldy: 24,  anchor: 'middle' },
  'Aguascalientes':  { label: 'Aguascalientes',  slug: 'aguascalientes',  lat: 21.7056, lon: -102.318,  ldx: -10, ldy: 4,   anchor: 'end' },
  'Brownsville':     { label: 'Brownsville',     slug: 'brownsville',     lat: 25.9068, lon: -97.4259,  intl: true, ldx: 10, ldy: 10, anchor: 'start' },
  'Ciudad Victoria': { label: 'Ciudad Victoria', slug: 'ciudad-victoria', lat: 23.7369, lon: -99.1691,  ldx: 10,  ldy: 0,   anchor: 'start' },
  'Durango':         { label: 'Durango',         slug: 'durango',         lat: 24.1242, lon: -104.528,  ldx: -10, ldy: 0,   anchor: 'end' },
  'McAllen':         { label: 'McAllen',         slug: 'mcallen',         lat: 26.1758, lon: -98.2386,  intl: true, ldx: 0,   ldy: -15, anchor: 'middle' },
  'Piedras Negras':  { label: 'Piedras Negras',  slug: 'piedras-negras',  lat: 28.6274, lon: -100.535,  ldx: 10,  ldy: 0,   anchor: 'start' },
  'Mérida':          { label: 'Mérida',          slug: 'merida',          lat: 20.937,  lon: -89.6577,  ldx: 10,  ldy: 0,   anchor: 'start' },
  'San Luis Potosí': { label: 'San Luis Potosí', slug: 'san-luis-potosi', lat: 22.2543, lon: -100.931,  ldx: -10, ldy: -4,  anchor: 'end' },
  'Tampico':         { label: 'Tampico',         slug: 'tampico',         lat: 22.2963, lon: -97.8659,  ldx: 10,  ldy: 0,   anchor: 'start' },
  'Veracruz':        { label: 'Veracruz',        slug: 'veracruz',        lat: 19.1459, lon: -96.1873,  ldx: 16,  ldy: 0,   anchor: 'start' },
}

const ROUTES: [string, string][] = [
  ['CDMX', 'Ciudad Victoria'],
  ['CDMX', 'Tampico'],
  ['Monterrey', 'Aguascalientes'],
  ['Monterrey', 'Brownsville'],
  ['Monterrey', 'Durango'],
  ['Monterrey', 'McAllen'],
  ['Monterrey', 'Piedras Negras'],
  ['Monterrey', 'San Luis Potosí'],
  ['Monterrey', 'Tampico'],
  ['Veracruz', 'Tampico'],
  ['Veracruz', 'Villahermosa'],
  ['Villahermosa', 'Mérida'],
]

export function getCities(): Record<string, City> {
  return CITIES
}

export function getRoutes(): [string, string][] {
  return ROUTES
}
