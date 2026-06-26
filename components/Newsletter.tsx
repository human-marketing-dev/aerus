'use client'
import { useState } from 'react'
import { Icon } from './icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <section className="cta-newsletter section-pad">
      <Icon name="x-deco" size={80} className="x a"/>
      <div className="container inner">
        <div>
          <div className="eyebrow" style={{ marginBottom: 32 }}>Boletín Aerus</div>
          <h2>
            No te pierdas
            <span className="stroke">una oferta.</span>
          </h2>
          <p>
            Suscríbete y recibe primero nuestras nuevas rutas, tarifas promocionales y experiencias exclusivas para miembros.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {sent ? '¡Gracias!' : 'Suscríbete'} <Icon name="arrow-right" size={14}/>
            </button>
          </form>
          <ul className="perks">
            <li><Icon name="check" size={12} stroke={2.5}/> Nuevas rutas</li>
            <li><Icon name="check" size={12} stroke={2.5}/> Tarifas promocionales</li>
            <li><Icon name="check" size={12} stroke={2.5}/> Sin spam</li>
          </ul>
        </div>
        <div className="visual" aria-hidden="true">
          <div className="conn">
            <span>Descubre</span>
            <span className="solid">el futuro.</span>
          </div>
          <div className="meta">Programa Aerus Vital — Próximamente</div>
        </div>
      </div>
    </section>
  )
}
