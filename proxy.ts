import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { canonicalToEnglish, englishToCanonical } from '@/lib/i18n'

// URLs públicas → rutas internas en app/[lang]/ (ver lib/i18n.ts)
//
//   /destinos/monterrey            → /es/destinos/monterrey   (rewrite)
//   /en/destinations/monterrey     → /en/destinos/monterrey   (rewrite)
//   /en/destinos/monterrey         → /en/destinations/monterrey (redirect al slug en inglés)
//   /es/destinos                   → /destinos                 (redirect: español no lleva prefijo)
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  if (clean === '/es' || clean.startsWith('/es/')) {
    url.pathname = clean.slice(3) || '/'
    return NextResponse.redirect(url, 308)
  }

  if (clean === '/en' || clean.startsWith('/en/')) {
    const publicPath = clean.slice(3) || '/'
    const canonical = englishToCanonical(publicPath)
    const expected = canonicalToEnglish(canonical)
    if (expected !== publicPath) {
      url.pathname = expected === '/' ? '/en' : `/en${expected}`
      return NextResponse.redirect(url, 308)
    }
    url.pathname = canonical === '/' ? '/en' : `/en${canonical}`
    return NextResponse.rewrite(url)
  }

  url.pathname = clean === '/' ? '/es' : `/es${clean}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Todo excepto internos de Next, API y archivos estáticos (cualquier ruta con extensión)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
