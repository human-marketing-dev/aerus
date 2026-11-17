import NavClient, { type StripItem } from './NavClient'
import { getRutasBySlug } from '@/lib/red'
import { getConfig } from '@/lib/config'
import type { Lang } from '@/lib/i18n'

// Header del sitio. Menú y aviso de rutas: Sanity → Configuración general.
// Los datos de cada ruta del aviso (ciudades, IATA, duración) salen de la red de rutas.
export default async function Nav({ lang }: { lang: Lang }) {
  const [{ menu, aviso }, rutas] = await Promise.all([getConfig(lang), getRutasBySlug(lang)])
  // Se ignoran las rutas que ya no existen en la red
  const strip: StripItem[] = aviso.rutas.flatMap(s => {
    const r = s.ruta?.slug ? rutas.get(s.ruta.slug) : undefined
    return r
      ? [{
          slug: r.slug,
          origen: r.origen,
          iataOrigen: r.iataOrigen,
          destino: r.destino,
          iataDestino: r.iataDestino,
          duracionMin: r.duracionMin,
          frecuencia: s.frecuencia && s.periodo ? { n: s.frecuencia, per: s.periodo } : undefined,
        }]
      : []
  })
  return <NavClient lang={lang} strip={strip} texts={{ menu, aviso }} />
}
