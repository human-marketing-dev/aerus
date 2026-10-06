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
            Mantente al día
            <span className="stroke">con Aerus.</span>
          </h2>
          <p>
            No te pierdas ninguna novedad. Suscríbete y entérate primero de nuestras nuevas rutas, destinos y noticias.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Tu correo electrónico"
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
            <li><Icon name="check" size={12} stroke={2.5}/> Nuevos destinos</li>
            <li><Icon name="check" size={12} stroke={2.5}/> Sin spam</li>
          </ul>
        </div>
        <div className="visual" aria-hidden="true">
          <div className="conn">
            <span>Tu nueva</span>
            <span className="solid">forma de viajar.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
