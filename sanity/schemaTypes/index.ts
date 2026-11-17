import { localeString, localeText } from './objects/locale'
import { seo } from './objects/seo'
import { faqItem } from './objects/faqItem'
import { imagen } from './objects/imagen'
import { localeBlock } from './objects/localeBlock'
import { destino } from './documents/destino'
import { ruta } from './documents/ruta'
import { redirect } from './documents/redirect'
import { STUDIO_SCHEMAS } from '../../content/registry'
import { imagenTexto, seoPorIdioma } from './objects/porIdioma'

export const schemaTypes = [
  // objetos reutilizables
  localeString, localeText, localeBlock, seo, faqItem, imagen, imagenTexto, seoPorIdioma,
  // documentos
  destino, ruta, redirect,
  // páginas fijas (una por página; ver content/registry.ts)
  ...STUDIO_SCHEMAS,
]
