import 'server-only'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import { slugify } from './route-utils'

export interface City {
  lat: number
  lon: number
  label: string
  slug: string  // URL-safe identifier derived from the city name
  hub?: boolean
  ldx: number  // SVG label offset x (pixels from city centre)
  ldy: number  // SVG label offset y
  anchor: 'start' | 'middle' | 'end'
}

function makeDoc(): GoogleSpreadsheet {
  const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })
  return new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth)
}

export async function getCities(): Promise<Record<string, City>> {
  const doc = makeDoc()
  await doc.loadInfo()

  const sheet = doc.sheetsByTitle['ciudades']
  if (!sheet) throw new Error('Sheet tab "ciudades" not found')

  const rows = await sheet.getRows()
  const cities: Record<string, City> = {}

  for (const row of rows) {
    const ciudad = (row.get('ciudad') ?? '').toString().trim()
    const latStr = (row.get('lat') ?? '').toString().trim()
    const lonStr = (row.get('lon') ?? '').toString().trim()

    if (!ciudad || !latStr || !lonStr) continue

    const lat = parseFloat(latStr)
    const lon = parseFloat(lonStr) // negative (west), stored as-is
    if (isNaN(lat) || isNaN(lon)) continue

    const hubRaw = (row.get('hub') ?? '').toString().trim().toLowerCase()
    const hub = hubRaw === 'sí' || hubRaw === 'si' ? true : undefined

    const ldxRaw = (row.get('anclaje_x') ?? '').toString().trim()
    const ldyRaw = (row.get('anclaje_y') ?? '').toString().trim()
    const ldx = ldxRaw !== '' ? parseFloat(ldxRaw) || 0 : 0
    const ldy = ldyRaw !== '' ? parseFloat(ldyRaw) || 0 : 0

    const ancRaw = (row.get('alineacion') ?? '').toString().trim()
    const anchor: City['anchor'] =
      ancRaw === 'start' || ancRaw === 'end' ? ancRaw : 'middle'

    cities[ciudad] = { lat, lon, label: ciudad, slug: slugify(ciudad), hub, ldx, ldy, anchor }
  }

  return cities
}

export async function getRoutes(): Promise<[string, string][]> {
  const doc = makeDoc()
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]
  const rows = await sheet.getRows()
  const routes: [string, string][] = []

  for (const row of rows) {
    const activa = (row.get('activa') ?? '').toString().trim().toLowerCase()
    if (activa !== 'sí' && activa !== 'si') continue

    const origen = (row.get('origen') ?? '').toString().trim()
    const destino = (row.get('destino') ?? '').toString().trim()

    if (!origen || !destino) continue

    routes.push([origen, destino])
  }

  return routes
}
