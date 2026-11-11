import type { NextConfig } from "next";

const REMOVED_ROUTES = ['monterrey-laredo', 'cancun-cozumel', 'cancun-chetumal']
const REMOVED_DESTINOS = ['laredo', 'morelia', 'uruapan', 'minatitlan', 'ciudad-ixtepec', 'ciudad-del-carmen']

const nextConfig: NextConfig = {
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
