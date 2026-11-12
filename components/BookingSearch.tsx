'use client'
import { useEffect, useRef } from 'react'
import { BUSCADOR_HTML } from './aerus-buscador/markup'
import { initBuscador } from './aerus-buscador/init'

// Buscador Aerus + Viva (sustituye al iframe de KIU).
//
// El código viene de components/aerus-buscador/aerus-buscador-embed.html, entregado por el
// equipo de Aerus; markup.ts e init.js se generan con `node scripts/extract-buscador.mjs`.
// Su script ya sigue el idioma del sitio (data-sync="page" observa <html lang>), así que
// este componente solo lo monta y mide su altura.
//
// IMPORTANTE: el contenido del buscador lo maneja su propio script, no React.
// - React 19 compara `dangerouslySetInnerHTML` por identidad: si el objeto se crea en cada
//   render, reescribe el innerHTML y borra lo que el script llenó (ciudades, fechas, idioma).
//   Por eso el objeto se define una sola vez, aquí afuera.
// - La altura se escribe directo en el estilo (sin setState) para que este componente no
//   vuelva a renderizar nunca después de montarse.
const INNER_HTML = { __html: BUSCADOR_HTML }

export default function BookingSearch() {
  const bridgeRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const bridge = bridgeRef.current
    if (!root || !bridge) return
    // El script asigna handlers y un MutationObserver: se inicializa una sola vez por nodo
    // (en desarrollo React monta los efectos dos veces).
    if (!root.dataset.ready) {
      root.dataset.ready = '1'
      initBuscador(root)
    }

    const docStyle = document.documentElement.style
    const apply = (h: number) => {
      if (h <= 0) return
      // Centrado sobre la unión hero / siguiente sección sin ocupar espacio (alto neto = 0)
      bridge.style.setProperty('--booking-bridge-offset', `${-h / 2}px`)
      // Para que el hero coloque sus flechas por encima del buscador
      docStyle.setProperty('--booking-widget-h', `${h}px`)
    }
    const ro = new ResizeObserver(([entry]) => {
      apply(Math.ceil(entry.borderBoxSize?.[0]?.blockSize ?? root.offsetHeight))
    })
    ro.observe(root)
    return () => {
      ro.disconnect()
      docStyle.removeProperty('--booking-widget-h')
    }
  }, [])

  return (
    <div ref={bridgeRef} className="booking-bridge booking-bridge--widget booking-bridge--search">
      <div
        ref={rootRef}
        id="aerus-buscador"
        data-sync="page"
        dangerouslySetInnerHTML={INNER_HTML}
        suppressHydrationWarning
      />
    </div>
  )
}
