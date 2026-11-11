'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'

type Feature = { name: string; sub: string; icon: string; state: 'yes' | 'no' }
type Tarifa = { id: string; name: string; tagline: string; description: string; features: Feature[] }

const TARIFAS: Record<Lang, Tarifa[]> = {
  es: [
    {
      id: 'light',
      name: 'Light',
      tagline: 'Para quien viaja ligero',
      description: 'La tarifa más conveniente para vuelos cortos sin equipaje documentado. Ideal para escapadas de fin de semana o viajes de trabajo express.',
      features: [
        { name: 'Equipaje de mano', sub: '1 pieza · hasta 10kg', icon: 'luggage', state: 'yes' },
        { name: 'Equipaje documentado', sub: 'Adicional con costo', icon: 'luggage', state: 'no' },
        { name: 'Selección de asiento', sub: 'Estándar al hacer check-in', icon: 'chair', state: 'no' },
        { name: 'Cambio de vuelo', sub: 'Con cargo + diferencia tarifaria', icon: 'swap', state: 'no' },
        { name: 'Web check-in', sub: 'Hasta 72hrs antes del vuelo', icon: 'globe', state: 'yes' },
      ],
    },
    {
      id: 'business',
      name: 'Business',
      tagline: 'El equilibrio ideal',
      description: 'Tarifa balanceada con equipaje documentado y selección anticipada de asiento. Perfecta para viajes de placer o turismo familiar.',
      features: [
        { name: 'Equipaje de mano', sub: '1 pieza · hasta 10kg', icon: 'luggage', state: 'yes' },
        { name: 'Equipaje documentado', sub: '1 maleta · hasta 23kg', icon: 'luggage', state: 'yes' },
        { name: 'Selección de asiento', sub: 'Estándar o ventana', icon: 'chair', state: 'yes' },
        { name: 'Cambio de vuelo', sub: 'Sin penalidad · 1 cambio', icon: 'swap', state: 'yes' },
        { name: 'Web check-in prioritario', sub: 'Hasta 72hrs antes', icon: 'globe', state: 'yes' },
      ],
    },
    {
      id: 'advantage',
      name: 'Advantage',
      tagline: 'Flexibilidad total',
      description: 'Para viajeros de negocios que requieren máxima flexibilidad. Cambios sin penalidad, asiento preferente y prioridad en todo el viaje.',
      features: [
        { name: 'Equipaje de mano', sub: '1 pieza · hasta 10kg', icon: 'luggage', state: 'yes' },
        { name: 'Equipaje documentado', sub: '2 maletas · hasta 23kg c/u', icon: 'luggage', state: 'yes' },
        { name: 'Asiento Preferente', sub: 'Primera fila o pasillo', icon: 'chair', state: 'yes' },
        { name: 'Cambios ilimitados', sub: 'Sin penalidad ni diferencia*', icon: 'swap', state: 'yes' },
        { name: 'Abordaje prioritario', sub: 'Grupo 1 · Sala VIP en MTY', icon: 'shield', state: 'yes' },
      ],
    },
  ],
  en: [
    {
      id: 'light',
      name: 'Light',
      tagline: 'For those who travel light',
      description: 'Our best-value fare for short flights without checked baggage. Ideal for weekend getaways or quick business trips.',
      features: [
        { name: 'Carry-on bag', sub: '1 piece · up to 10 kg', icon: 'luggage', state: 'yes' },
        { name: 'Checked baggage', sub: 'Available for a fee', icon: 'luggage', state: 'no' },
        { name: 'Seat selection', sub: 'Standard, assigned at check-in', icon: 'chair', state: 'no' },
        { name: 'Flight changes', sub: 'Change fee + fare difference', icon: 'swap', state: 'no' },
        { name: 'Web check-in', sub: 'Up to 72 hrs before your flight', icon: 'globe', state: 'yes' },
      ],
    },
    {
      id: 'business',
      name: 'Business',
      tagline: 'The perfect balance',
      description: 'A balanced fare with checked baggage and advance seat selection. Perfect for leisure trips or family travel.',
      features: [
        { name: 'Carry-on bag', sub: '1 piece · up to 10 kg', icon: 'luggage', state: 'yes' },
        { name: 'Checked baggage', sub: '1 bag · up to 23 kg', icon: 'luggage', state: 'yes' },
        { name: 'Seat selection', sub: 'Standard or window', icon: 'chair', state: 'yes' },
        { name: 'Flight changes', sub: 'No change fee · 1 change', icon: 'swap', state: 'yes' },
        { name: 'Priority web check-in', sub: 'Up to 72 hrs before', icon: 'globe', state: 'yes' },
      ],
    },
    {
      id: 'advantage',
      name: 'Advantage',
      tagline: 'Total flexibility',
      description: 'For business travelers who need maximum flexibility. Free changes, preferred seating and priority throughout your journey.',
      features: [
        { name: 'Carry-on bag', sub: '1 piece · up to 10 kg', icon: 'luggage', state: 'yes' },
        { name: 'Checked baggage', sub: '2 bags · up to 23 kg each', icon: 'luggage', state: 'yes' },
        { name: 'Preferred seating', sub: 'First row or aisle', icon: 'chair', state: 'yes' },
        { name: 'Unlimited changes', sub: 'No change fee or fare difference*', icon: 'swap', state: 'yes' },
        { name: 'Priority boarding', sub: 'Group 1 · VIP lounge at MTY', icon: 'shield', state: 'yes' },
      ],
    },
  ],
}

const T = {
  es: {
    eyebrow: 'Tarifas Aerus',
    headline: ['Nos acoplamos a ', 'tus necesidades.'],
    intro: 'En Aerus contamos con tres modalidades de tarifas aéreas para que elijas la que mejor se adapte a tu viaje — ya sea de negocios o placer. Compáralas y vuela como prefieras.',
    fare: 'TARIFA', of: 'DE',
    includes: 'Lo que incluye',
    book: 'Reservar Aerus',
    compare: 'Comparar todas',
  },
  en: {
    eyebrow: 'Aerus fares',
    headline: ['We adapt to ', 'your needs.'],
    intro: 'Aerus offers three fare options so you can choose the one that best fits your trip — business or leisure. Compare them and fly your way.',
    fare: 'FARE', of: 'OF',
    includes: 'What’s included',
    book: 'Book Aerus',
    compare: 'Compare all fares',
  },
}

export default function Tarifas({ lang }: { lang: Lang }) {
  const tr = T[lang]
  const tarifas = TARIFAS[lang]
  const [active, setActive] = useState('business')
  const t = tarifas.find(t => t.id === active)!

  const stateIcon = (s: Feature['state']) => {
    if (s === 'yes') return <span className="check"><Icon name="check" size={14} stroke={2.5}/></span>
    return <span className="check no"><Icon name="x" size={12} stroke={2}/></span>
  }

  return (
    <section className="tarifas section-pad" id="tarifas">
      <div className="container">
        <div className="header">
          <div>
            <div className="eyebrow">{tr.eyebrow}</div>
            <h2 className="section-headline" style={{ marginTop: 24 }}>
              {tr.headline[0]}<span className="accent">{tr.headline[1]}</span>
            </h2>
            <p className="section-intro">{tr.intro}</p>
          </div>
        </div>
        <div className="tab-bar">
          {tarifas.map(t => (
            <button key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)}>
              <Icon name={t.id === 'light' ? 'plane' : t.id === 'business' ? 'luggage' : 'shield'} size={14}/>
              Aerus {t.name}
            </button>
          ))}
        </div>
        <div className="panel">
          <div className="visual">
            <div className="topline">
              <div className="ticker">{tr.fare} · {String(tarifas.findIndex(x => x.id === active) + 1).padStart(2,'0')} {tr.of} 03</div>
              <img src="/logo-symbol-green.svg" alt="" style={{ height: 28 }}/>
            </div>
            <div>
              <div className="bigname">
                <span>Aerus</span>
                <strong>{t.name}</strong>
              </div>
              <div style={{ marginTop: 24, fontSize: 18, fontWeight: 500, color: '#A4FFCC', letterSpacing: '0.04em' }}>
                {t.tagline}
              </div>
              <div className="desc" style={{ marginTop: 16 }}>{t.description}</div>
            </div>
          </div>
          <div className="features">
            <h3>{tr.includes}</h3>
            {t.features.map((f, i) => (
              <div key={i} className="feat-row">
                <div className="ico"><Icon name={f.icon} size={20}/></div>
                <div className="body">
                  <div className="name">{f.name}</div>
                  <div className="sub">{f.sub}</div>
                </div>
                {stateIcon(f.state)}
              </div>
            ))}
            <div className="cta-row">
              <Link href={lp(lang, '/reservar/')} className="btn btn-primary">{tr.book} {t.name} <span className="ar"></span></Link>
              <Link href={lp(lang, '/reservar/tarifas/')} className="btn btn-outline">{tr.compare}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
