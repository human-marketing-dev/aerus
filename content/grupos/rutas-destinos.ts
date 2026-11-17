// Páginas del grupo "rutas-destinos" registradas en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaAlianzaViva } from '@/sanity/schemaTypes/pages/alianza-viva'
import { paginaDestinos } from '@/sanity/schemaTypes/pages/destinos'
import { paginaRutas } from '@/sanity/schemaTypes/pages/rutas'
import { plantillaDestino } from '@/sanity/schemaTypes/pages/plantilla-destino'
import { plantillaRuta } from '@/sanity/schemaTypes/pages/plantilla-ruta'
import { paginaMapaSitio } from '@/sanity/schemaTypes/pages/mapa-del-sitio'
import alianzaViva from '../pages/alianza-viva'
import destinos from '../pages/destinos'
import rutas from '../pages/rutas'
import plantillaDestinoTextos from '../pages/plantilla-destino'
import plantillaRutaTextos from '../pages/plantilla-ruta'
import mapaDelSitio from '../pages/mapa-del-sitio'

export const paginas: PageEntry[] = [
  { schema: paginaDestinos, defaults: destinos, path: '/destinos/', seccion: 'Rutas y destinos' },
  { schema: plantillaDestino, defaults: plantillaDestinoTextos, path: null, seccion: 'Rutas y destinos' },
  { schema: paginaRutas, defaults: rutas, path: '/rutas/', seccion: 'Rutas y destinos' },
  { schema: plantillaRuta, defaults: plantillaRutaTextos, path: null, seccion: 'Rutas y destinos' },
  { schema: paginaAlianzaViva, defaults: alianzaViva, path: '/rutas/alianza-viva/', seccion: 'Rutas y destinos' },
  { schema: paginaMapaSitio, defaults: mapaDelSitio, path: '/mapa-del-sitio/', seccion: 'Rutas y destinos' },
]
