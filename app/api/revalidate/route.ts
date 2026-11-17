// Webhook de Sanity: al publicar, despublicar o borrar contenido, Sanity llama a esta URL y el
// sitio vuelve a generar sus páginas con el contenido nuevo (sin rebuild ni reinicio).
// Configuración en sanity.io/manage → API → Webhooks (ver README de Sanity en el proyecto).
import { revalidatePath } from 'next/cache'
import { NextResponse, type NextRequest } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ message: 'Falta SANITY_REVALIDATE_SECRET' }, { status: 500 })
  }
  // Valida la firma del webhook y espera a que el contenido nuevo esté disponible en la API
  const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret, true)
  if (!isValidSignature) {
    return NextResponse.json({ message: 'Firma inválida' }, { status: 401 })
  }
  // El contenido de la red (destinos/rutas) aparece en muchas páginas: se regenera todo el sitio.
  // Las páginas se vuelven a generar en su siguiente visita.
  revalidatePath('/', 'layout')
  return NextResponse.json({ revalidated: true, type: body?._type ?? null })
}
