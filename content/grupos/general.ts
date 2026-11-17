// Configuración general del sitio registrada en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { configuracion } from '@/sanity/schemaTypes/pages/configuracion'
import configuracionDefaults from '../pages/configuracion'

export const paginas: PageEntry[] = [
  { schema: configuracion, defaults: configuracionDefaults, path: null, seccion: 'General', modo: 'bilingue' },
]
