// Páginas del grupo "ayuda" registradas en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaAyuda } from '@/sanity/schemaTypes/pages/ayuda'
import { paginaAyudaContacto } from '@/sanity/schemaTypes/pages/ayuda-contacto'
import { paginaAyudaDocumentos } from '@/sanity/schemaTypes/pages/ayuda-documentos'
import { paginaAyudaEquipaje } from '@/sanity/schemaTypes/pages/ayuda-equipaje'
import { paginaAyudaFacturacion } from '@/sanity/schemaTypes/pages/ayuda-facturacion'
import { paginaAyudaFaq } from '@/sanity/schemaTypes/pages/ayuda-faq'
import { paginaAyudaRequerimientos } from '@/sanity/schemaTypes/pages/ayuda-requerimientos'
import { paginaAyudaTiempos } from '@/sanity/schemaTypes/pages/ayuda-tiempos'
import { paginaAyudaMascotas } from '@/sanity/schemaTypes/pages/ayuda-mascotas'
import ayuda from '../pages/ayuda'
import ayudaContacto from '../pages/ayuda-contacto'
import ayudaDocumentos from '../pages/ayuda-documentos'
import ayudaEquipaje from '../pages/ayuda-equipaje'
import ayudaFacturacion from '../pages/ayuda-facturacion'
import ayudaFaq from '../pages/ayuda-faq'
import ayudaRequerimientos from '../pages/ayuda-requerimientos'
import ayudaTiempos from '../pages/ayuda-tiempos'
import ayudaMascotas from '../pages/ayuda-mascotas'

const seccion = 'Ayuda'

export const paginas: PageEntry[] = [
  { schema: paginaAyuda, defaults: ayuda, path: '/ayuda/', seccion },
  { schema: paginaAyudaFaq, defaults: ayudaFaq, path: '/ayuda/faq/', seccion },
  { schema: paginaAyudaDocumentos, defaults: ayudaDocumentos, path: '/ayuda/documentos-para-viajar/', seccion },
  { schema: paginaAyudaEquipaje, defaults: ayudaEquipaje, path: '/ayuda/equipaje/', seccion },
  { schema: paginaAyudaTiempos, defaults: ayudaTiempos, path: '/ayuda/tiempos-aeropuerto/', seccion },
  { schema: paginaAyudaRequerimientos, defaults: ayudaRequerimientos, path: '/ayuda/requerimientos-especiales/', seccion },
  { schema: paginaAyudaMascotas, defaults: ayudaMascotas, path: '/ayuda/viajar-con-mascota/', seccion },
  { schema: paginaAyudaFacturacion, defaults: ayudaFacturacion, path: '/ayuda/facturacion/', seccion },
  { schema: paginaAyudaContacto, defaults: ayudaContacto, path: '/ayuda/contacto/', seccion },
]
