'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from './icons'

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
      <div className="notif">
        <strong>Nueva ruta</strong>
        <span className="dot"/>
        Felipe Ángeles (NLU) ⇄ Ixtepec (IZT)
        <span className="dot"/>
        Desde <strong>$1,890 MXN</strong>
        <span className="dot"/>
        <a href="#" style={{ textDecoration: 'underline', fontWeight: 700 }}>Reservar →</a>
      </div>
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
    </>
  )
}
