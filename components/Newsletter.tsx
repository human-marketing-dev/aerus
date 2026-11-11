'use client'
import { useState } from 'react'
import { Icon } from './icons'
import type { Lang } from '@/lib/i18n'

const T = {
  es: {
    eyebrow: 'Boletín Aerus',
    title: 'Mantente al día',
    titleStroke: 'con Aerus.',
    body: 'No te pierdas ninguna novedad. Suscríbete y entérate primero de nuestras nuevas rutas, destinos y noticias.',
    email: 'Tu correo electrónico',
    submit: 'Suscríbete',
    thanks: '¡Gracias!',
    perks: ['Nuevas rutas', 'Nuevos destinos', 'Sin spam'],
    visual: ['Tu nueva', 'forma de viajar.'],
  },
  en: {
    eyebrow: 'Aerus newsletter',
    title: 'Stay up to date',
    titleStroke: 'with Aerus.',
    body: 'Never miss an update. Subscribe and be the first to hear about our new routes, destinations and news.',
    email: 'Your email address',
    submit: 'Subscribe',
    thanks: 'Thank you!',
    perks: ['New routes', 'New destinations', 'No spam'],
    visual: ['Your new', 'way to travel.'],
  },
}

export default function Newsletter({ lang }: { lang: Lang }) {
  const t = T[lang]
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <section className="cta-newsletter section-pad">
      <Icon name="x-deco" size={80} className="x a"/>
      <div className="container inner">
        <div>
          <div className="eyebrow" style={{ marginBottom: 32 }}>{t.eyebrow}</div>
          <h2>
            {t.title}
            <span className="stroke">{t.titleStroke}</span>
          </h2>
          <p>{t.body}</p>
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
              {sent ? t.thanks : t.submit} <Icon name="arrow-right" size={14}/>
            </button>
          </form>
          <ul className="perks">
            {t.perks.map(p => (
              <li key={p}><Icon name="check" size={12} stroke={2.5}/> {p}</li>
            ))}
          </ul>
        </div>
        <div className="visual" aria-hidden="true">
          <div className="conn">
            <span>{t.visual[0]}</span>
            <span className="solid">{t.visual[1]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
