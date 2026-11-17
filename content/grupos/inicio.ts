// Página de inicio registrada en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaInicio } from '@/sanity/schemaTypes/pages/inicio'
import inicio from '../pages/inicio'

export const paginas: PageEntry[] = [
  { schema: paginaInicio, defaults: inicio, path: '/', seccion: 'Inicio', modo: 'bilingue' },
]
