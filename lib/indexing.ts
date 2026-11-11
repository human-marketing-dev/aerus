// Indexación del sitio en buscadores.
//
// Mientras el sitio no esté lanzado, se bloquea todo: robots.txt (app/robots.ts),
// meta robots noindex (app/[lang]/layout.tsx) y cabecera X-Robots-Tag (next.config.ts).
//
// Para lanzar: definir SITE_INDEXABLE=true en las variables de entorno de producción
// y volver a hacer deploy. No hay que tocar código.
export const SITE_INDEXABLE = process.env.SITE_INDEXABLE === 'true'
