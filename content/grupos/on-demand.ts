// Páginas del grupo "on-demand" registradas en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaOnDemand } from '@/sanity/schemaTypes/pages/on-demand'
import { paginaCharter } from '@/sanity/schemaTypes/pages/on-demand-charter'
import { paginaCharterCotizar } from '@/sanity/schemaTypes/pages/on-demand-charter-cotizar'
import { paginaEmpresas } from '@/sanity/schemaTypes/pages/on-demand-empresas'
import { paginaFlightPass } from '@/sanity/schemaTypes/pages/on-demand-flight-pass'
import { paginaFlightPassContacto } from '@/sanity/schemaTypes/pages/on-demand-flight-pass-contacto'
import onDemand from '../pages/on-demand'
import charter from '../pages/on-demand-charter'
import charterCotizar from '../pages/on-demand-charter-cotizar'
import empresas from '../pages/on-demand-empresas'
import flightPass from '../pages/on-demand-flight-pass'
import flightPassContacto from '../pages/on-demand-flight-pass-contacto'

export const paginas: PageEntry[] = [
  { schema: paginaOnDemand, defaults: onDemand, path: '/on-demand/', seccion: 'On Demand' },
  { schema: paginaCharter, defaults: charter, path: '/on-demand/charter/', seccion: 'On Demand' },
  { schema: paginaCharterCotizar, defaults: charterCotizar, path: '/on-demand/charter/cotizar/', seccion: 'On Demand' },
  { schema: paginaEmpresas, defaults: empresas, path: '/on-demand/empresas/', seccion: 'On Demand' },
  { schema: paginaFlightPass, defaults: flightPass, path: '/on-demand/flight-pass/', seccion: 'On Demand' },
  { schema: paginaFlightPassContacto, defaults: flightPassContacto, path: '/on-demand/flight-pass/contacto/', seccion: 'On Demand' },
]
