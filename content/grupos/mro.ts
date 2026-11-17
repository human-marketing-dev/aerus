// Páginas del grupo "mro" registradas en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaMro } from '@/sanity/schemaTypes/pages/mro'
import { paginaMroAccesorios } from '@/sanity/schemaTypes/pages/mro-accesorios-planeadores'
import { paginaMroCapacidades } from '@/sanity/schemaTypes/pages/mro-capacidades'
import { paginaMroCotizacion } from '@/sanity/schemaTypes/pages/mro-cotizacion'
import { paginaMroHelices } from '@/sanity/schemaTypes/pages/mro-helices'
import { paginaMroMotores } from '@/sanity/schemaTypes/pages/mro-motores-pt6a'
import { paginaMroRadios } from '@/sanity/schemaTypes/pages/mro-radios-instrumentos'
import mro from '../pages/mro'
import mroAccesorios from '../pages/mro-accesorios-planeadores'
import mroCapacidades from '../pages/mro-capacidades'
import mroCotizacion from '../pages/mro-cotizacion'
import mroHelices from '../pages/mro-helices'
import mroMotores from '../pages/mro-motores-pt6a'
import mroRadios from '../pages/mro-radios-instrumentos'

export const paginas: PageEntry[] = [
  { schema: paginaMro, defaults: mro, path: '/mro/', seccion: 'MRO' },
  { schema: paginaMroCapacidades, defaults: mroCapacidades, path: '/mro/capacidades/', seccion: 'MRO' },
  { schema: paginaMroMotores, defaults: mroMotores, path: '/mro/motores-pt6a/', seccion: 'MRO' },
  { schema: paginaMroHelices, defaults: mroHelices, path: '/mro/helices/', seccion: 'MRO' },
  { schema: paginaMroAccesorios, defaults: mroAccesorios, path: '/mro/accesorios-planeadores/', seccion: 'MRO' },
  { schema: paginaMroRadios, defaults: mroRadios, path: '/mro/radios-instrumentos/', seccion: 'MRO' },
  { schema: paginaMroCotizacion, defaults: mroCotizacion, path: '/mro/cotizacion/', seccion: 'MRO' },
]
