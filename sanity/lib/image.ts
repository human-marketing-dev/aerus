import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

/** URL de una imagen de Sanity, optimizada (formato automático) al ancho indicado. */
export function imageUrl(source: SanityImageSource, width: number) {
  return builder.image(source).width(width).auto('format').quality(75).fit('max').url()
}

type WithHotspot = { hotspot?: { x?: number; y?: number } }

/** Posición CSS (background-position / object-position) según el punto de interés marcado en Sanity. */
export function imagePosition(image: WithHotspot | null | undefined) {
  const h = image?.hotspot
  return h?.x != null && h?.y != null ? `${Math.round(h.x * 100)}% ${Math.round(h.y * 100)}%` : 'center'
}
