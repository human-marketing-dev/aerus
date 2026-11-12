'use client'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Lang } from '@/lib/i18n'

// Buscador de vuelos de Kiusys embebido en iframe.
//
// Hoy apunta a STAGE. Para producción define NEXT_PUBLIC_BOOKING_WIDGET_URL en el entorno
// (p. ej. https://<dominio-prod>/v3/booking/widget?carrier=zv); `embed` y `lang` se agregan solos.
//
// Se usa la ruta /booking/widget (layout de widget) y no /booking, que es la página completa.
// Con embed=1 el widget habla con esta página por postMessage (protocolo "kiu:*", v1):
//   widget → host  kiu:widget-ready     al montar; respondemos con kiu:host-hello (viewport/dispositivo)
//   widget → host  kiu:widget-extent    { flow, overhang }: alto del contenido y de popups (calendario)
//   widget → host  kiu:widget-overlay   { open }: pide pantalla completa para un modal
//   host → widget  kiu:host-overlay-stage { top, left }: posición original del iframe en el viewport
//   widget → host  kiu:widget-navigate  { url }: al buscar, navegar a resultados
const WIDGET_URL =
  process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL ?? 'https://ecommerce-stage.kiusys.net/v3/booking/widget?carrier=zv'
const PROTOCOL_VERSION = 1

function widgetSrc(lang: Lang) {
  const u = new URL(WIDGET_URL)
  u.searchParams.set('embed', '1')
  u.searchParams.set('lang', lang)
  return u.toString()
}

function viewportInfo() {
  const w = window.innerWidth
  if (w < 768) return { viewport: 'mobile', device: 'm' } as const
  if (w < 1180) return { viewport: 'desktop', device: 't' } as const
  return { viewport: 'desktop', device: 'd' } as const
}

function px(n: unknown) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0 ? Math.ceil(n) : 0
}

type Extent = { flow: number; overhang: number }
type Stage = { top: number; left: number }

export default function BookingWidget({ lang }: { lang: Lang }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [extent, setExtent] = useState<Extent | null>(null)
  const [overlay, setOverlay] = useState<Stage | null>(null)
  const src = widgetSrc(lang)
  const origin = new URL(src).origin

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const post = (msg: Record<string, unknown>) =>
      iframe.contentWindow?.postMessage({ ...msg, v: PROTOCOL_VERSION }, origin)
    const hello = () => post({ type: 'kiu:host-hello', ...viewportInfo() })

    let viewport = viewportInfo().viewport

    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframe.contentWindow || e.origin !== origin) return
      const d = e.data
      if (typeof d !== 'object' || d === null || d.v !== PROTOCOL_VERSION) return

      switch (d.type) {
        case 'kiu:widget-ready':
          hello()
          break
        case 'kiu:widget-extent': {
          const flow = px(d.flow)
          if (flow > 0) setExtent({ flow, overhang: px(d.overhang) })
          break
        }
        case 'kiu:widget-overlay':
          if (d.open) {
            const r = iframe.getBoundingClientRect()
            setOverlay({ top: r.top, left: r.left })
            // Esperar a que el iframe ya esté a pantalla completa antes de avisar
            requestAnimationFrame(() => post({ type: 'kiu:host-overlay-stage', top: r.top, left: r.left }))
          } else {
            setOverlay(null)
          }
          break
        case 'kiu:widget-navigate': {
          if (typeof d.url !== 'string') break
          const url = new URL(d.url, origin)
          // Solo navegamos dentro del dominio del motor de reservas
          if (url.origin === origin) window.location.assign(url.href)
          break
        }
      }
    }

    const onResize = () => {
      const next = viewportInfo().viewport
      if (next !== viewport) {
        viewport = next
        // El widget solo reporta su alto en escritorio; en móvil se usa la altura de CSS
        if (next === 'mobile') setExtent(null)
      }
      hello()
    }

    window.addEventListener('message', onMessage)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('message', onMessage)
      window.removeEventListener('resize', onResize)
    }
  }, [origin])

  // Publica el alto del buscador para que el hero coloque sus flechas por encima
  useEffect(() => {
    const root = document.documentElement.style
    if (extent) root.setProperty('--booking-widget-h', `${extent.flow}px`)
    else root.removeProperty('--booking-widget-h')
    return () => { root.removeProperty('--booking-widget-h') }
  }, [extent])

  // La tarjeta mide solo el contenido (flow); el iframe crece hacia abajo lo que necesiten
  // los popups (overhang) sin empujar el resto de la página.
  const cardStyle: CSSProperties | undefined = extent ? { height: extent.flow } : undefined
  const iframeStyle: CSSProperties | undefined = overlay
    ? { position: 'fixed', inset: 0, width: '100vw', height: '100dvh', zIndex: 1000, borderRadius: 0 }
    : extent
      ? { height: extent.flow + extent.overhang }
      : undefined

  return (
    <div className="booking-bridge booking-bridge--widget">
    <div
      className={`booking-iframe-wrap${extent ? ' is-measured' : ''}${overlay ? ' is-overlay' : ''}`}
      style={cardStyle}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={lang === 'es' ? 'Buscador de vuelos Aerus' : 'Aerus flight search'}
        className="booking-iframe"
        style={iframeStyle}
        allow="payment"
      />
    </div>
    </div>
  )
}
