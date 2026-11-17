import 'server-only'
import { redirect, permanentRedirect } from 'next/navigation'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

const REDIRECT_QUERY = defineQuery(`*[_type == "redirect" && desde in $paths][0]{ hacia, permanente }`)

/**
 * Si en Sanity hay un redirect para esta URL pública, redirige; si no, no hace nada.
 * Se llama en las páginas dinámicas (destinos, rutas) antes de responder 404.
 */
export async function redirectIfConfigured(publicPath: string) {
  const clean = publicPath.replace(/\/+$/, '') || '/'
  const { data } = await sanityFetch({
    query: REDIRECT_QUERY,
    params: { paths: [clean, `${clean}/`] },
    perspective: 'published',
    stega: false,
  })
  const r = data as { hacia?: string; permanente?: boolean } | null
  if (!r?.hacia) return
  if (r.permanente === false) redirect(r.hacia)
  permanentRedirect(r.hacia)
}
