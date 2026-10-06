'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from './icons'
import { RUTAS_DATA } from '@/lib/rutas-data'

// TODO: frecuencias provisionales — confirmar con operaciones
const STRIP_ROUTES = [
  { slug: 'monterrey-brownsville', frecuencia: '2 vuelos diarios' },
  { slug: 'monterrey-laredo',      frecuencia: '3 vuelos diarios' },
  { slug: 'monterrey-mcallen',     frecuencia: '2 vuelos diarios' },
  { slug: 'cancun-cozumel',        frecuencia: '4 vuelos diarios' },
  { slug: 'veracruz-villahermosa', frecuencia: '9 vuelos semanales' },
]

function formatDuracion(min: number) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`
}

function RouteStrip() {
  const [open, setOpen] = useState(true)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!open || paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % STRIP_ROUTES.length), 5000)
    return () => clearInterval(t)
  }, [open, paused])

  if (!open) return null

  const { slug, frecuencia } = STRIP_ROUTES[idx]
  const r = RUTAS_DATA[slug]

  return (
    <div
      className="notif"
      role="region"
      aria-label="Rutas Aerus"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="notif-body" key={slug} aria-live="polite">
        <strong>Ruta directa</strong>
        <span className="dot"/>
        <span>{r.origen} ({r.iataOrigen}) → {r.destino} ({r.iataDestino})</span>
        <span className="dot"/>
        <span>{frecuencia}</span>
        <span className="dot"/>
        <span>{formatDuracion(r.duracionMin)} de vuelo</span>
        <span className="dot"/>
        <Link href={`/rutas/${slug}/`} className="notif-link">Ver ruta →</Link>
      </div>
      <button className="notif-close" onClick={() => setOpen(false)} aria-label="Cerrar aviso de rutas">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const active = (href: string) =>
    pathname === href || pathname.startsWith(href) ? 'active' : ''

  const left = [
    { href: '/destinos/', label: 'Destinos' },
    { href: '/rutas/', label: 'Rutas' },
    { href: '/corporativo/', label: 'Corporativo' },
  ]
  const right = [
    { href: '/ayuda/', label: 'Ayuda' },
    { href: '/mi-vuelo/', label: 'Mi vuelo' },
    { href: '/check-in/', label: 'Check-in' },
  ]

  return (
    <>
      <nav className="nav">
        <div className="nav-group nav-left">
          {left.map(i => (
            <Link key={i.href} href={i.href} className={active(i.href)}>
              {i.label}
            </Link>
          ))}
        </div>

        <Link href="/" className="brand">
          <img src="/logo-lockup-inverse.svg" alt="Aerus"/>
        </Link>

        <div className="nav-group nav-right">
          {right.map(i => (
            <Link key={i.href} href={i.href} className={active(i.href)}>
              {i.label}
            </Link>
          ))}
          <div className="nav-vr"/>
          <button className="icon-btn" aria-label="Buscar"><Icon name="search" size={15}/></button>
          <button className="lang"><Icon name="globe" size={13}/> ES · MXN</button>
          <Link href="/reservar/" className="login">
            <Icon name="plane-takeoff" size={14}/> Reservar
          </Link>
        </div>
      </nav>
      <RouteStrip/>
    </>
  )
}
