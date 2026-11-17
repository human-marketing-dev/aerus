// Páginas del grupo "reservar-experiencia" registradas en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaExperiencia } from '@/sanity/schemaTypes/pages/experiencia'
import { paginaAsistenciaViaje } from '@/sanity/schemaTypes/pages/experiencia-asistencia-viaje'
import { paginaFlota } from '@/sanity/schemaTypes/pages/experiencia-flota'
import { paginaGrupos } from '@/sanity/schemaTypes/pages/experiencia-grupos'
import { paginaProcesoAgil } from '@/sanity/schemaTypes/pages/experiencia-proceso-agil'
import { paginaSeguroCancelacion } from '@/sanity/schemaTypes/pages/experiencia-seguro-cancelacion'
import {
  paginaCheckIn, paginaMetodosPago, paginaMiReserva, paginaReservar, paginaTarifas,
} from '@/sanity/schemaTypes/pages/reservar'
import experiencia from '../pages/experiencia'
import asistenciaViaje from '../pages/experiencia-asistencia-viaje'
import flota from '../pages/experiencia-flota'
import grupos from '../pages/experiencia-grupos'
import procesoAgil from '../pages/experiencia-proceso-agil'
import seguroCancelacion from '../pages/experiencia-seguro-cancelacion'
import reservar from '../pages/reservar'
import metodosPago from '../pages/reservar-metodos-pago'
import tarifas from '../pages/reservar-tarifas'
import checkIn from '../pages/check-in'
import miReserva from '../pages/mi-reserva'

export const paginas: PageEntry[] = [
  // Reservar
  { schema: paginaReservar, defaults: reservar, path: '/reservar/', seccion: 'Reservar' },
  { schema: paginaMetodosPago, defaults: metodosPago, path: '/reservar/metodos-de-pago/', seccion: 'Reservar' },
  { schema: paginaTarifas, defaults: tarifas, path: '/reservar/tarifas/', seccion: 'Reservar' },
  { schema: paginaCheckIn, defaults: checkIn, path: '/check-in/', seccion: 'Reservar' },
  { schema: paginaMiReserva, defaults: miReserva, path: '/mi-reserva/', seccion: 'Reservar' },

  // Experiencia
  { schema: paginaExperiencia, defaults: experiencia, path: '/experiencia/', seccion: 'Experiencia' },
  { schema: paginaProcesoAgil, defaults: procesoAgil, path: '/experiencia/proceso-agil/', seccion: 'Experiencia' },
  { schema: paginaFlota, defaults: flota, path: '/experiencia/flota/', seccion: 'Experiencia' },
  { schema: paginaAsistenciaViaje, defaults: asistenciaViaje, path: '/experiencia/asistencia-de-viaje/', seccion: 'Experiencia' },
  { schema: paginaSeguroCancelacion, defaults: seguroCancelacion, path: '/experiencia/seguro-de-cancelacion/', seccion: 'Experiencia' },
  { schema: paginaGrupos, defaults: grupos, path: '/experiencia/grupos/', seccion: 'Experiencia' },
]
