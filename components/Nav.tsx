'use client'
import { useState } from 'react'
import { Icon } from './icons'

export default function Nav() {
  const [active, setActive] = useState('vuelos')

  const left = [
    { id: 'vuelos', label: 'Vuelos' },
    { id: 'destinos', label: 'Destinos' },
    { id: 'tarifas', label: 'Tarifas' },
  ]
  const right = [
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'ayuda', label: 'Ayuda' },
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
            <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'active' : ''} onClick={() => setActive(i.id)}>
              {i.label}
            </a>
          ))}
        </div>

        <a href="#" className="brand">
          <img src="/logo-lockup-inverse.svg" alt="Aerus"/>
        </a>

        <div className="nav-group nav-right">
          {right.map(i => (
            <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'active' : ''} onClick={() => setActive(i.id)}>
              {i.label}
            </a>
          ))}
          <div className="nav-vr"/>
          <button className="icon-btn" aria-label="Buscar"><Icon name="search" size={15}/></button>
          <button className="lang"><Icon name="globe" size={13}/> ES · MXN</button>
          <button className="login"><Icon name="user" size={14}/> Mi cuenta</button>
        </div>
      </nav>
    </>
  )
}
