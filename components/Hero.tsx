'use client'
import { useState } from 'react'
import { Icon } from './icons'

const HERO_ROUTES = [
  {
    id: 'nlu-izt',
    isNew: true,
    fromCode: 'NLU', toCode: 'IZT',
    fromCity: 'Aeropuerto Felipe Ángeles', fromSub: 'Ciudad de México',
    toCity: 'Ixtepec', toSub: 'Oaxaca',
    duration: '1h 35min', frequency: '5× semana',
    price: 1890,
    perks: 'Vuelo directo · Equipaje de mano incluido · Sin escalas',
  },
  {
    id: 'mty-bjx',
    fromCode: 'MTY', toCode: 'BJX',
    fromCity: 'Monterrey', fromSub: 'Nuevo León',
    toCity: 'Guanajuato', toSub: 'El Bajío',
    duration: '1h 15min', frequency: 'Diario',
    price: 1450,
    perks: 'Sin escalas · Conexión en menos de 60 min · 9 frecuencias semanales',
  },
  {
    id: 'cdmx-cun',
    fromCode: 'MEX', toCode: 'CUN',
    fromCity: 'Ciudad de México', fromSub: 'AICM',
    toCity: 'Cancún', toSub: 'Quintana Roo',
    duration: '2h 10min', frequency: 'Diario',
    price: 2240,
    perks: 'Equipaje de mano · Asientos confortables · Vuelo directo',
  },
  {
    id: 'mty-mid',
    fromCode: 'MTY', toCode: 'MID',
    fromCity: 'Monterrey', fromSub: 'Nuevo León',
    toCity: 'Mérida', toSub: 'Yucatán',
    duration: '1h 55min', frequency: '4× semana',
    price: 1990,
    perks: 'Conexión directa · Sin escalas · Tarifa promocional',
  },
  {
    id: 'ver-vsa',
    fromCode: 'VER', toCode: 'VSA',
    fromCity: 'Veracruz', fromSub: 'Veracruz',
    toCity: 'Villahermosa', toSub: 'Tabasco',
    duration: '55 min', frequency: 'Diario',
    price: 1240,
    perks: 'Vuelo express · Sin escalas · Tarifa más baja',
  },
]

interface BookingBarProps {
  trip: string
  setTrip: (t: string) => void
}

function BookingBar({ trip, setTrip }: BookingBarProps) {
  return (
    <div className="booking-h">
      <div className="booking-h-tabs">
        <button className={trip === 'rt' ? 'active' : ''} onClick={() => setTrip('rt')}>
          Redondo
        </button>
        <button className={trip === 'ow' ? 'active' : ''} onClick={() => setTrip('ow')}>
          Sencillo
        </button>
        <button className={trip === 'md' ? 'active' : ''} onClick={() => setTrip('md')}>
          Multidestino
        </button>
        <div className="booking-h-tabs-right">
          <Icon name="ticket" size={12}/> 0 puntos Aerus
        </div>
      </div>

      <div className="booking-h-row">
        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="plane-takeoff" size={11}/> Origen</div>
          <div className="booking-h-value">Ciudad de México <span className="booking-h-code">NLU</span></div>
        </div>

        <button className="booking-h-swap" aria-label="Cambiar origen y destino">
          <Icon name="arrows-swap" size={14}/>
        </button>

        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="pin" size={11}/> Destino</div>
          <div className="booking-h-value">Ixtepec <span className="booking-h-code">IZT</span></div>
        </div>

        <div className="booking-h-sep"/>

        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="calendar" size={11}/> Salida</div>
          <div className="booking-h-value">Vie 6 jun</div>
        </div>

        <div className="booking-h-sep"/>

        <div className="booking-h-field" style={{ opacity: trip === 'ow' ? 0.4 : 1 }}>
          <div className="booking-h-label"><Icon name="calendar" size={11}/> {trip === 'ow' ? 'Sólo ida' : 'Regreso'}</div>
          <div className="booking-h-value">{trip === 'ow' ? '—' : 'Dom 15 jun'}</div>
        </div>

        <div className="booking-h-sep"/>

        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="users" size={11}/> Pasajeros & Clase</div>
          <div className="booking-h-value">1 adulto · Light</div>
        </div>

        <button className="booking-h-submit">
          Buscar vuelos <span className="ar"/>
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [trip, setTrip] = useState('rt')
  const r = HERO_ROUTES[idx]
  const total = HERO_ROUTES.length
  const next = () => setIdx((idx + 1) % total)
  const prev = () => setIdx((idx - 1 + total) % total)

  return (
    <>
      <section className="hero" id="vuelos">
        <div className="texture"/>
        <div className="hero-inner">
          <div className="hero-eyebrow-row">
            {r.isNew && (
              <span className="new-route-tag">
                <Icon name="plane" size={12}/> Nueva ruta
              </span>
            )}
            <div className="eyebrow-route">{r.frequency} · {r.duration}</div>
          </div>

          <div className="route-codes">
            <span>{r.fromCode}</span>
            <span className="arrow-line"/>
            <span>{r.toCode}</span>
          </div>

          <div className="route-cities">
            <div className="city">
              <div className="label">Sale de</div>
              <div className="name">
                {r.fromCity}<br/>
                <span style={{ opacity: 0.55, fontSize: 14 }}>{r.fromSub}</span>
              </div>
            </div>
            <div className="sep"/>
            <div className="city">
              <div className="label">Llega a</div>
              <div className="name">
                {r.toCity}<br/>
                <span style={{ opacity: 0.55, fontSize: 14 }}>{r.toSub}</span>
              </div>
            </div>
          </div>

          <div className="price-row">
            <div>
              <div className="from">Sencillo desde</div>
              <div className="price">
                ${r.price.toLocaleString('es-MX')}
                <span className="currency"> MXN</span>
              </div>
            </div>
            <div className="perks">{r.perks}</div>
          </div>

          <div className="slider-controls">
            <div className="pagination">
              {HERO_ROUTES.map((_, i) => (
                <button
                  key={i}
                  className={'dot' + (i === idx ? ' active' : '')}
                  onClick={() => setIdx(i)}
                  aria-label={`Ruta ${i + 1}`}
                />
              ))}
            </div>
            <div className="counter">
              <strong>{String(idx + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
            </div>
            <div className="nav-arrows">
              <button onClick={prev} aria-label="Anterior"><Icon name="arrow-left" size={18}/></button>
              <button onClick={next} aria-label="Siguiente"><Icon name="arrow-right" size={18}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal booking bar — straddles hero / next section */}
      <div className="booking-bridge">
        <BookingBar trip={trip} setTrip={setTrip}/>
      </div>
    </>
  )
}
