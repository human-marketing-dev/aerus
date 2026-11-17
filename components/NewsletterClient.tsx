'use client'
import { useState } from 'react'
import { Icon } from './icons'
import type { ConfiguracionContent } from '@/content/pages/configuracion'

// Parte de cliente del boletín; los textos llegan de components/Newsletter.tsx (Sanity).
export default function NewsletterClient({ t }: { t: ConfiguracionContent['boletin'] }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <section className="cta-newsletter section-pad">
      <Icon name="x-deco" size={80} className="x a"/>
      <div className="container inner">
        <div>
          <div className="eyebrow" style={{ marginBottom: 32 }}>{t.eyebrow}</div>
          <h2>
            {t.titulo}
            <span className="stroke">{t.tituloContorno}</span>
          </h2>
          <p>{t.texto}</p>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <input
              type="email"
              placeholder={t.email}
              aria-label={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {sent ? t.gracias : t.enviar} <Icon name="arrow-right" size={14}/>
            </button>
          </form>
          <ul className="perks">
            {t.beneficios.map(p => (
              <li key={p}><Icon name="check" size={12} stroke={2.5}/> {p}</li>
            ))}
          </ul>
        </div>
        <div className="visual" aria-hidden="true">
          <div className="conn">
            <span>{t.visual1}</span>
            <span className="solid">{t.visual2}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
