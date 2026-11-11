import type { NextConfig } from "next";
import { SITE_INDEXABLE } from "./lib/indexing";

const REMOVED_ROUTES = ['monterrey-laredo', 'cancun-cozumel', 'cancun-chetumal']
const REMOVED_DESTINOS = ['laredo', 'morelia', 'uruapan', 'minatitlan', 'ciudad-ixtepec', 'ciudad-del-carmen']

const nextConfig: NextConfig = {
  // Sitio aún no lanzado: cabecera noindex en todas las respuestas (ver lib/indexing.ts)
  async headers() {
    if (SITE_INDEXABLE) return []
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
  },
  async redirects() {
    return [
      // Rutas renombradas — mantener los enlaces viejos funcionando
      { source: '/corporativo', destination: '/on-demand', permanent: true },
      { source: '/corporativo/:path*', destination: '/on-demand/:path*', permanent: true },
      { source: '/mi-vuelo', destination: '/mi-reserva', permanent: true },
      { source: '/rutas/conexiones-viva-aerobus', destination: '/rutas/alianza-viva', permanent: true },

      // Rutas y destinos que salieron de la red (nov 2026) → listado correspondiente
      ...REMOVED_ROUTES.flatMap(slug => [
        { source: `/rutas/${slug}`, destination: '/rutas', permanent: true },
        { source: `/en/routes/${slug}`, destination: '/en/routes', permanent: true },
      ]),
      ...REMOVED_DESTINOS.flatMap(slug => [
        { source: `/destinos/${slug}`, destination: '/destinos', permanent: true },
        { source: `/en/destinations/${slug}`, destination: '/en/destinations', permanent: true },
      ]),
    ]
  },
};

export default nextConfig;
