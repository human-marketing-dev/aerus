'use client'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { BUSCADOR_HTML } from './aerus-buscador/markup'
import { initBuscador } from './aerus-buscador/init'

// Buscador Aerus + Viva (sustituye al iframe de KIU).
//
// El código viene de components/aerus-buscador/aerus-buscador-embed.html, entregado por el
// equipo de Aerus; markup.ts e init.js se generan con `node scripts/extract-buscador.mjs`.
// Su script ya sigue el idioma del sitio (data-sync="page" observa <html lang>), así que
// este componente solo lo monta y mide su altura.
export default function BookingSearch() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    // El script asigna handlers y un MutationObserver: se inicializa una sola vez por nodo
    // (en desarrollo React monta los efectos dos veces).
    if (!root.dataset.ready) {
      root.dataset.ready = '1'
      initBuscador(root)
    }

    const ro = new ResizeObserver(([entry]) => {
      const h = Math.ceil(entry.borderBoxSize?.[0]?.blockSize ?? root.offsetHeight)
      if (h > 0) setHeight(h)
    })
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  // Publica el alto para que el hero coloque sus flechas por encima del buscador
  useEffect(() => {
    if (height == null) return
    const s = document.documentElement.style
    s.setProperty('--booking-widget-h', `${height}px`)
    return () => { s.removeProperty('--booking-widget-h') }
  }, [height])

  // Centrado sobre la unión hero / siguiente sección sin ocupar espacio (alto neto = 0)
  const bridgeStyle = height != null
    ? ({ '--booking-bridge-offset': `${-height / 2}px` } as CSSProperties)
    : undefined

  return (
    <div className="booking-bridge booking-bridge--widget booking-bridge--search" style={bridgeStyle}>
      <div
        ref={rootRef}
        id="aerus-buscador"
        data-sync="page"
        // El contenido lo gestiona el script del buscador, no React
        dangerouslySetInnerHTML={{ __html: BUSCADOR_HTML }}
        suppressHydrationWarning
      />
    </div>
  )
}
