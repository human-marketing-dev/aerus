'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from './icons'
import BookingWidget from './BookingWidget'
import BookingSearch from './BookingSearch'
import { lp, type Lang } from '@/lib/i18n'
import type { InicioContent } from '@/content/pages/inicio'

// Banners del hero: Sanity → Inicio → Banners (imagen de escritorio, imagen de celular
// opcional, imagen en inglés opcional, enlace). Cada banner trae su información dentro de la
// imagen. Medidas sugeridas: escritorio 1920 × 1080 (texto en la franja central) y celular
// 1080 × 1350. Sin imagen de celular, en celular el banner se muestra completo en 16:9.
export type HeroBanner = InicioContent['banners'][number]

const T = {
  es: {
    rt: 'Redondo', ow: 'Sencillo', md: 'Multidestino', points: '0 puntos Aerus',
    origin: 'Origen', originCity: 'Ciudad de México', swap: 'Cambiar origen y destino',
    dest: 'Destino', depart: 'Salida', departDate: 'Vie 6 jun',
    oneWay: 'Sólo ida', ret: 'Regreso', returnDate: 'Dom 15 jun',
    pax: 'Pasajeros & Clase', paxValue: '1 adulto · Light', search: 'Buscar vuelos',
    carousel: 'carrusel', highlights: 'Destacados', slide: 'diapositiva', of: 'de',
    prev: 'Anterior', next: 'Siguiente',
  },
  en: {
    rt: 'Round trip', ow: 'One way', md: 'Multi-city', points: '0 Aerus points',
    origin: 'From', originCity: 'Mexico City', swap: 'Swap origin and destination',
    dest: 'To', depart: 'Departure', departDate: 'Fri, Jun 6',
    oneWay: 'One way only', ret: 'Return', returnDate: 'Sun, Jun 15',
    pax: 'Passengers & Class', paxValue: '1 adult · Light', search: 'Search flights',
    carousel: 'carousel', highlights: 'Highlights', slide: 'slide', of: 'of',
    prev: 'Previous', next: 'Next',
  },
}

// Buscador de vuelos del hero. Las versiones anteriores se conservan por si se necesitan:
//   'search' → buscador Aerus + Viva (components/BookingSearch.tsx) — el actual
//   'kiu'    → iframe del motor de KIU (components/BookingWidget.tsx)
//   'legacy' → maqueta original del sitio (BookingBar, abajo)
const BOOKING_MODE = 'search' as 'search' | 'kiu' | 'legacy'
const SHOW_LEGACY_BOOKING_BAR = BOOKING_MODE === 'legacy'

interface BookingBarProps {
  lang: Lang
  trip: string
  setTrip: (t: string) => void
}

function BookingBar({ lang, trip, setTrip }: BookingBarProps) {
  const t = T[lang]
  return (
    <div className="booking-h">
      <div className="booking-h-tabs">
        <button className={trip === 'rt' ? 'active' : ''} onClick={() => setTrip('rt')}>
          {t.rt}
        </button>
        <button className={trip === 'ow' ? 'active' : ''} onClick={() => setTrip('ow')}>
          {t.ow}
        </button>
        <button className={trip === 'md' ? 'active' : ''} onClick={() => setTrip('md')}>
          {t.md}
        </button>
        <div className="booking-h-tabs-right">
          <Icon name="ticket" size={12}/> {t.points}
        </div>
      </div>

      <div className="booking-h-row">
        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="plane-takeoff" size={11}/> {t.origin}</div>
          <div className="booking-h-value">{t.originCity} <span className="booking-h-code">NLU</span></div>
        </div>

        <button className="booking-h-swap" aria-label={t.swap}>
          <Icon name="arrows-swap" size={14}/>
        </button>

        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="pin" size={11}/> {t.dest}</div>
          <div className="booking-h-value">Ciudad Victoria <span className="booking-h-code">CVM</span></div>
        </div>

        <div className="booking-h-sep"/>

        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="calendar" size={11}/> {t.depart}</div>
          <div className="booking-h-value">{t.departDate}</div>
        </div>

        <div className="booking-h-sep"/>

        <div className="booking-h-field" style={{ opacity: trip === 'ow' ? 0.4 : 1 }}>
          <div className="booking-h-label"><Icon name="calendar" size={11}/> {trip === 'ow' ? t.oneWay : t.ret}</div>
          <div className="booking-h-value">{trip === 'ow' ? '—' : t.returnDate}</div>
        </div>

        <div className="booking-h-sep"/>

        <div className="booking-h-field">
          <div className="booking-h-label"><Icon name="users" size={11}/> {t.pax}</div>
          <div className="booking-h-value">{t.paxValue}</div>
        </div>

        <button className="booking-h-submit">
          {t.search} <span className="ar"/>
        </button>
      </div>
    </div>
  )
}

export default function Hero({ lang, banners }: { lang: Lang; banners: HeroBanner[] }) {
  const t = T[lang]
  const [idx, setIdx] = useState(0)
  const [trip, setTrip] = useState('rt')
  // En inglés se usa la imagen en inglés si la hay
  const slides = banners.map(b => ({
    imagen: (lang === 'en' && b.imagenEn) || b.imagen,
    movil: b.imagenMovil,
    href: b.href,
  }))
  const total = slides.length
  const next = () => setIdx((idx + 1) % total)
  const prev = () => setIdx((idx - 1 + total) % total)

  return (
    <>
      <section
        className={
          'hero'
          + (SHOW_LEGACY_BOOKING_BAR ? '' : ' hero--full')
          + (slides[idx]?.movil ? '' : ' hero--wide-mobile')
        }
        id="vuelos"
        aria-roledescription={t.carousel}
        aria-label={t.highlights}
      >
        {slides.map((s, i) => (
          <div
            key={s.imagen.src + i}
            className={'hero-slide' + (i === idx ? ' active' : '')}
            aria-hidden={i !== idx}
            aria-roledescription={t.slide}
            aria-label={`${i + 1} ${t.of} ${total}`}
          >
            {s.movil ? (
              <picture>
                <source media="(max-width: 640px)" srcSet={s.movil.src}/>
                <img src={s.imagen.src} alt={s.imagen.alt} style={{ objectPosition: s.imagen.position }}/>
              </picture>
            ) : (
              <Image
                src={s.imagen.src}
                alt={s.imagen.alt}
                fill
                sizes="100vw"
                preload={i === 0}
                style={s.imagen.position ? { objectPosition: s.imagen.position } : undefined}
              />
            )}
            {s.href && (
              <Link
                href={lp(lang, s.href)}
                className="hero-slide-link"
                aria-label={s.imagen.alt}
                tabIndex={i === idx ? 0 : -1}
              />
            )}
          </div>
        ))}

        <div className="hero-controls">
          <div className="slider-controls">
            <div className="pagination">
              {slides.map((_, i) => (
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
              <button onClick={prev} aria-label={t.prev}><Icon name="arrow-left" size={18}/></button>
              <button onClick={next} aria-label={t.next}><Icon name="arrow-right" size={18}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal booking bar — straddles hero / next section */}
      {SHOW_LEGACY_BOOKING_BAR ? (
        <div className="booking-bridge">
          <BookingBar lang={lang} trip={trip} setTrip={setTrip}/>
        </div>
      ) : BOOKING_MODE === 'kiu' ? (
        <BookingWidget lang={lang}/>
      ) : (
        <BookingSearch/>
      )}
    </>
  )
}
