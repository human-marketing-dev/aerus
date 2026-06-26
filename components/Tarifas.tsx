'use client'
import { useState } from 'react'
import { Icon } from './icons'

const TARIFAS = [
  {
    id: 'light',
    name: 'Light',
    tagline: 'Para quien viaja ligero',
    price: 1240,
    description: 'La tarifa más conveniente para vuelos cortos sin equipaje documentado. Ideal para escapadas de fin de semana o viajes de trabajo express.',
    features: [
      { name: 'Equipaje de mano', sub: '1 pieza · hasta 10kg', icon: 'luggage', state: 'yes' },
      { name: 'Equipaje documentado', sub: 'Adicional con costo', icon: 'luggage', state: 'no' },
      { name: 'Selección de asiento', sub: 'Estándar al hacer check-in', icon: 'chair', state: 'no' },
      { name: 'Cambio de vuelo', sub: 'Con cargo + diferencia tarifaria', icon: 'swap', state: 'no' },
      { name: 'Web check-in', sub: 'Hasta 72hrs antes del vuelo', icon: 'globe', state: 'yes' },
      { name: 'Puntos Aerus', sub: 'Acumula 1× por kilómetro', icon: 'ticket', state: 'extra' },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'El equilibrio ideal',
    price: 1690,
    description: 'Tarifa balanceada con equipaje documentado y selección anticipada de asiento. Perfecta para viajes de placer o turismo familiar.',
    features: [
      { name: 'Equipaje de mano', sub: '1 pieza · hasta 10kg', icon: 'luggage', state: 'yes' },
      { name: 'Equipaje documentado', sub: '1 maleta · hasta 23kg', icon: 'luggage', state: 'yes' },
      { name: 'Selección de asiento', sub: 'Estándar o ventana', icon: 'chair', state: 'yes' },
      { name: 'Cambio de vuelo', sub: 'Sin penalidad · 1 cambio', icon: 'swap', state: 'yes' },
      { name: 'Web check-in prioritario', sub: 'Hasta 72hrs antes', icon: 'globe', state: 'yes' },
      { name: 'Puntos Aerus', sub: 'Acumula 1.5× por kilómetro', icon: 'ticket', state: 'yes' },
    ],
  },
  {
    id: 'advantage',
    name: 'Advantage',
    tagline: 'Flexibilidad total',
    price: 2390,
    description: 'Para viajeros de negocios que requieren máxima flexibilidad. Cambios sin penalidad, asiento preferente y prioridad en todo el viaje.',
    features: [
      { name: 'Equipaje de mano', sub: '1 pieza · hasta 10kg', icon: 'luggage', state: 'yes' },
      { name: 'Equipaje documentado', sub: '2 maletas · hasta 23kg c/u', icon: 'luggage', state: 'yes' },
      { name: 'Asiento Preferente', sub: 'Primera fila o pasillo', icon: 'chair', state: 'yes' },
      { name: 'Cambios ilimitados', sub: 'Sin penalidad ni diferencia*', icon: 'swap', state: 'yes' },
      { name: 'Abordaje prioritario', sub: 'Grupo 1 · Sala VIP en MTY', icon: 'shield', state: 'yes' },
      { name: 'Puntos Aerus', sub: 'Acumula 2× por kilómetro', icon: 'ticket', state: 'yes' },
    ],
  },
]

export default function Tarifas() {
  const [active, setActive] = useState('business')
  const t = TARIFAS.find(t => t.id === active)!

  const stateIcon = (s: string) => {
    if (s === 'yes') return <span className="check"><Icon name="check" size={14} stroke={2.5}/></span>
    if (s === 'no') return <span className="check no"><Icon name="x" size={12} stroke={2}/></span>
    return <span className="check extra">Bonus</span>
  }

  return (
    <section className="tarifas section-pad" id="tarifas">
      <div className="container">
        <div className="header">
          <div>
            <div className="eyebrow">Tarifas Aerus</div>
            <h2 className="section-headline" style={{ marginTop: 24 }}>
              Nos acoplamos a <span className="accent">tus necesidades.</span>
            </h2>
            <p className="section-intro">
              En Aerus contamos con tres modalidades de tarifas aéreas para que elijas la que mejor se adapte a tu viaje — ya sea de negocios o placer. Compáralas y vuela como prefieras.
            </p>
          </div>
        </div>
        <div className="tab-bar">
          {TARIFAS.map(t => (
            <button key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)}>
              <Icon name={t.id === 'light' ? 'plane' : t.id === 'business' ? 'luggage' : 'shield'} size={14}/>
              Aerus {t.name}
            </button>
          ))}
        </div>
        <div className="panel">
          <div className="visual">
            <div className="topline">
              <div className="ticker">TARIFA · {String(TARIFAS.findIndex(x => x.id === active) + 1).padStart(2,'0')} DE 03</div>
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
            <div>
              <div className="price-line">Sencillo desde</div>
              <div className="price-amt">
                ${t.price.toLocaleString('es-MX')} <small>MXN</small>
              </div>
            </div>
          </div>
          <div className="features">
            <h3>Lo que incluye</h3>
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
              <button className="btn btn-primary">Reservar Aerus {t.name} <span className="ar"></span></button>
              <button className="btn btn-outline">Comparar todas</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
