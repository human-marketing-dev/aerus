// Configuración pública del proyecto de Sanity (no son secretos).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
// Fecha de la versión de la API de Sanity con la que se escribió el código (no cambiarla sin probar)
export const apiVersion = '2025-10-01'

if (!projectId) {
  throw new Error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID en las variables de entorno')
}
