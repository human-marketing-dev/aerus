import 'server-only'
import { defineLive } from 'next-sanity/live'
import { client } from './client'

// Token de solo lectura: permite leer borradores en la vista previa (modo borrador).
// Fuera de la vista previa nunca se envía al navegador.
const token = process.env.SANITY_API_READ_TOKEN
if (!token) throw new Error('Falta SANITY_API_READ_TOKEN en las variables de entorno')

// sanityFetch: consulta con caché y etiquetas; en modo borrador lee los borradores.
// SanityLive: refresca el contenido cuando se publica algo (va en el layout).
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
