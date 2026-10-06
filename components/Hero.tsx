'use client'
import { useState } from 'react'
import { Icon } from './icons'

// Cada banner trae toda su información (ruta, precio, etc.) dentro de la imagen.
// Medidas sugeridas: escritorio 1920 × 750 px, móvil 1080 × 1350 px.
// Deja libre la franja inferior: la barra de reservas se monta encima.
interface HeroSlide {
  id: string
  alt: string           // describe el texto del banner (lectores de pantalla y SEO)
  image?: string        // p. ej. '/hero/nlu-izt.webp'
  imageMobile?: string  // p. ej. '/hero/nlu-izt-movil.webp'
}

// TODO: agregar image / imageMobile y ajustar alt al texto real de cada banner
const HERO_SLIDES: HeroSlide[] = [
  { id: 'nlu-izt', alt: 'Nueva ruta Aeropuerto Felipe Ángeles (NLU) – Ixtepec (IZT)' },
  { id: 'mty-bjx', alt: 'Ruta Monterrey (MTY) – Guanajuato (BJX)' },
  { id: 'mex-cun', alt: 'Ruta Ciudad de México (MEX) – Cancún (CUN)' },
  { id: 'mty-mid', alt: 'Ruta Monterrey (MTY) – Mérida (MID)' },
  { id: 'ver-vsa', alt: 'Ruta Veracruz (VER) – Villahermosa (VSA)' },
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
  const total = HERO_SLIDES.length
  const next = () => setIdx((idx + 1) % total)
  const prev = () => setIdx((idx - 1 + total) % total)

  return (
    <>
      <section className="hero" id="vuelos" aria-roledescription="carrusel" aria-label="Destacados">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={'hero-slide' + (i === idx ? ' active' : '')}
            aria-hidden={i !== idx}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${total}`}
          >
            {s.image ? (
              <picture>
                {s.imageMobile && <source media="(max-width: 640px)" srcSet={s.imageMobile}/>}
                <img src={s.image} alt={s.alt}/>
              </picture>
            ) : (
              <div className="hero-placeholder" role="img" aria-label={s.alt}>
                <Icon name="camera" size={22}/>
                <div className="hero-placeholder-title">Banner {String(i + 1).padStart(2, '0')} · {s.alt}</div>
                <div className="hero-placeholder-size">Escritorio 1920 × 750 · Móvil 1080 × 1350</div>
              </div>
            )}
          </div>
        ))}

        <div className="hero-controls">
          <div className="slider-controls">
            <div className="pagination">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={'dot' + (i === idx ? ' active' : '')}
                  onClick={() => setIdx(i)}
                  aria-label={`Banner ${i + 1}`}
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
