'use client'
import { useEffect, useRef } from 'react'
import { BUSCADOR_HTML } from './aerus-buscador/markup'
import { initBuscador } from './aerus-buscador/init'
import { load, restore, save } from './aerus-buscador/persist'

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
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    // El script asigna handlers y un MutationObserver: se inicializa una sola vez por nodo
    // (en desarrollo React monta los efectos dos veces).
    if (!root.dataset.ready) {
      root.dataset.ready = '1'
      initBuscador(root)
      const saved = load()
      if (saved) restore(root, saved)
    }

    // Guardar después de que el script procese cada cambio (sus handlers corren primero)
    const onInteract = () => setTimeout(() => save(root), 0)
    root.addEventListener('change', onInteract)
    root.addEventListener('click', onInteract)

    const docStyle = document.documentElement.style
    // El alto real se publica en --booking-widget-h: con él, el CSS coloca el buscador al
    // final del hero y las flechas del slider por encima (ver globals.css).
    const apply = (h: number) => {
      if (h > 0) docStyle.setProperty('--booking-widget-h', `${h}px`)
    }
    const ro = new ResizeObserver(([entry]) => {
      apply(Math.ceil(entry.borderBoxSize?.[0]?.blockSize ?? root.offsetHeight))
    })
    ro.observe(root)
    return () => {
      save(root)
      root.removeEventListener('change', onInteract)
      root.removeEventListener('click', onInteract)
      ro.disconnect()
      docStyle.removeProperty('--booking-widget-h')
    }
  }, [])

  return (
    <div className="booking-bridge booking-bridge--widget booking-bridge--search">
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
