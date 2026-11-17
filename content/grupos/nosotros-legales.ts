// Páginas del grupo "nosotros-legales" registradas en Sanity (ver content/registry.ts)
import type { PageEntry } from '../page-entry'
import { paginaNosotros } from '@/sanity/schemaTypes/pages/nosotros'
import { paginaPrensa } from '@/sanity/schemaTypes/pages/prensa'
import { paginaPrivacidad } from '@/sanity/schemaTypes/pages/aviso-de-privacidad'
import { paginaCookies } from '@/sanity/schemaTypes/pages/cookies'
import { paginaTerminos } from '@/sanity/schemaTypes/pages/terminos-y-condiciones'
import nosotros from '../pages/nosotros'
import prensa from '../pages/prensa'
import avisoPrivacidad from '../pages/aviso-de-privacidad'
import cookies from '../pages/cookies'
import terminos from '../pages/terminos-y-condiciones'

export const paginas: PageEntry[] = [
  { schema: paginaNosotros, defaults: nosotros, path: '/nosotros/', seccion: 'Nosotros' },
  { schema: paginaPrensa, defaults: prensa, path: '/nosotros/prensa/', seccion: 'Nosotros' },
  { schema: paginaPrivacidad, defaults: avisoPrivacidad, path: '/legal/aviso-de-privacidad/', seccion: 'Legales' },
  { schema: paginaCookies, defaults: cookies, path: '/legal/cookies/', seccion: 'Legales' },
  { schema: paginaTerminos, defaults: terminos, path: '/legal/terminos-y-condiciones/', seccion: 'Legales' },
]
