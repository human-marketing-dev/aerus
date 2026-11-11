'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from './icons'
import BookingWidget from './BookingWidget'
import { lp, type Lang } from '@/lib/i18n'

// Cada banner trae toda su información (ruta, precio, etc.) dentro de la imagen.
// Medidas sugeridas: escritorio 1920 × 750 px, móvil 1080 × 1350 px.
// Deja libre la franja inferior: la barra de reservas se monta encima.
// Si llegan en 16:9 (1920 × 1080) también funcionan: se recortan ~165 px arriba y abajo,
// así que el texto debe quedar en la franja central. Sin imageMobile, en móvil el banner
// se muestra completo en 16:9 en lugar del formato vertical.
interface HeroSlide {
  id: string
  alt: Record<Lang, string>  // describe el texto del banner (lectores de pantalla y SEO)
  image?: string        // p. ej. '/hero/nlu-izt.webp'
  imageMobile?: string  // p. ej. '/hero/nlu-izt-movil.webp'
  href?: string         // ruta canónica (español) a la que lleva el banner al hacer clic
}

// TODO: banners de prueba — reemplazar por los definitivos (idealmente 1920 × 750 + versión móvil)
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'aerus-viva-piedras-negras',
    image: '/hero/aerus-viva-piedras-negras.jpg',
    href: '/destinos/piedras-negras/',
    alt: {
      es: 'Conectamos con todo México: Aerus + Viva. Da clic en Piedras Negras para consultar todas las combinaciones y rutas disponibles.',
      en: 'Connecting you with all of Mexico: Aerus + Viva. Click Piedras Negras to see all available routes and connections.',
    },
  },
  {
    id: 'mty-agu',
    image: '/hero/mty-agu.jpg',
    href: '/destinos/aguascalientes/',
    alt: { es: 'Ruta Monterrey (MTY) – Aguascalientes (AGU)', en: 'Route Monterrey (MTY) – Aguascalientes (AGU)' },
  },
  {
    id: 'pago-american-express',
    image: '/hero/pago-american-express.jpg',
    href: '/reservar/metodos-de-pago/',
    alt: {
      es: '¡Ahora puedes comprar tus boletos de manera fácil y segura pagando con American Express!',
      en: 'You can now buy your tickets easily and securely with American Express!',
    },
  },
  {
    id: 'mty-mfe',
    image: '/hero/mty-mfe.jpg',
    href: '/rutas/monterrey-mcallen/',
    alt: {
      es: 'Ruta Monterrey (MTY) – McAllen (MFE). Cruza la frontera más fácil, más rápido y sin complicaciones.',
      en: 'Route Monterrey (MTY) – McAllen (MFE). Cross the border easier, faster and hassle-free.',
    },
  },
  {
    id: 'nlu-cvm',
    image: '/hero/nlu-cvm.jpg',
    href: '/destinos/ciudad-victoria/',
    alt: {
      es: 'Ruta Ciudad de México (NLU) – Ciudad Victoria (CVM)',
      en: 'Route Mexico City (NLU) – Ciudad Victoria (CVM)',
    },
  },
]

const T = {
  es: {
    rt: 'Redondo', ow: 'Sencillo', md: 'Multidestino', points: '0 puntos Aerus',
    origin: 'Origen', originCity: 'Ciudad de México', swap: 'Cambiar origen y destino',
    dest: 'Destino', depart: 'Salida', departDate: 'Vie 6 jun',
    oneWay: 'Sólo ida', ret: 'Regreso', returnDate: 'Dom 15 jun',
    pax: 'Pasajeros & Clase', paxValue: '1 adulto · Light', search: 'Buscar vuelos',
    carousel: 'carrusel', highlights: 'Destacados', slide: 'diapositiva', of: 'de',
    sizes: 'Escritorio 1920 × 750 · Móvil 1080 × 1350', prev: 'Anterior', next: 'Siguiente',
  },
  en: {
    rt: 'Round trip', ow: 'One way', md: 'Multi-city', points: '0 Aerus points',
    origin: 'From', originCity: 'Mexico City', swap: 'Swap origin and destination',
    dest: 'To', depart: 'Departure', departDate: 'Fri, Jun 6',
    oneWay: 'One way only', ret: 'Return', returnDate: 'Sun, Jun 15',
    pax: 'Passengers & Class', paxValue: '1 adult · Light', search: 'Search flights',
    carousel: 'carousel', highlights: 'Highlights', slide: 'slide', of: 'of',
    sizes: 'Desktop 1920 × 750 · Mobile 1080 × 1350', prev: 'Previous', next: 'Next',
  },
}

// Buscador de vuelos: iframe de Kiusys (ver components/BookingWidget.tsx).
// Widget de reserva propio (maqueta anterior). Se conserva oculto por si se necesita de nuevo:
// cambia a true para volver a mostrarlo en lugar del iframe.
const SHOW_LEGACY_BOOKING_BAR = false

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

export default function Hero({ lang }: { lang: Lang }) {
  const t = T[lang]
  const [idx, setIdx] = useState(0)
  const [trip, setTrip] = useState('rt')
  const total = HERO_SLIDES.length
  const next = () => setIdx((idx + 1) % total)
  const prev = () => setIdx((idx - 1 + total) % total)

  return (
    <>
      <section
        className={
          'hero'
          + (SHOW_LEGACY_BOOKING_BAR ? '' : ' hero--full')
          + (HERO_SLIDES[idx].imageMobile ? '' : ' hero--wide-mobile')
        }
        id="vuelos"
        aria-roledescription={t.carousel}
        aria-label={t.highlights}
      >
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={'hero-slide' + (i === idx ? ' active' : '')}
            aria-hidden={i !== idx}
            aria-roledescription={t.slide}
            aria-label={`${i + 1} ${t.of} ${total}`}
          >
            {s.image && s.imageMobile ? (
              <picture>
                <source media="(max-width: 640px)" srcSet={s.imageMobile}/>
                <img src={s.image} alt={s.alt[lang]}/>
              </picture>
            ) : s.image ? (
              <Image src={s.image} alt={s.alt[lang]} fill sizes="100vw" preload={i === 0}/>
            ) : (
              <div className="hero-placeholder" role="img" aria-label={s.alt[lang]}>
                <Icon name="camera" size={22}/>
                <div className="hero-placeholder-title">Banner {String(i + 1).padStart(2, '0')} · {s.alt[lang]}</div>
                <div className="hero-placeholder-size">{t.sizes}</div>
              </div>
            )}
            {s.href && (
              <Link
                href={lp(lang, s.href)}
                className="hero-slide-link"
                aria-label={s.alt[lang]}
                tabIndex={i === idx ? 0 : -1}
              />
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
      ) : (
        <BookingWidget lang={lang}/>
      )}
    </>
  )
}
