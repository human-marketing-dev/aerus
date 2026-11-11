'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from './icons'
import { RUTAS_DATA } from '@/lib/rutas-data'
import { lp, parsePathname, type Lang } from '@/lib/i18n'

// TODO: frecuencias provisionales — confirmar con operaciones. Sin `frecuencia`, no se muestra.
type StripRoute = { slug: string; frecuencia?: { n: number; per: 'day' | 'week' } }
const STRIP_ROUTES_ALL: StripRoute[] = [
  { slug: 'monterrey-brownsville', frecuencia: { n: 2, per: 'day' } },
  { slug: 'monterrey-mcallen',     frecuencia: { n: 2, per: 'day' } },
  { slug: 'monterrey-piedras-negras' },
  { slug: 'cdmx-ciudad-victoria' },
  { slug: 'veracruz-villahermosa', frecuencia: { n: 9, per: 'week' } },
]
const STRIP_ROUTES = STRIP_ROUTES_ALL.filter(r => r.slug in RUTAS_DATA)  // ignora rutas sin página de detalle

const T = {
  es: {
    stripLabel: 'Rutas Aerus',
    direct: 'Ruta directa',
    perDay: 'vuelos diarios',
    perWeek: 'vuelos semanales',
    flight: 'de vuelo',
    seeRoute: 'Ver ruta →',
    close: 'Cerrar aviso de rutas',
    left: [
      { href: '/destinos/', label: 'Destinos' },
      { href: '/rutas/', label: 'Rutas' },
      { href: '/on-demand/', label: 'On Demand' },
      { href: '/on-demand/charter/', label: 'Charter' },
    ],
    right: [
      { href: '/ayuda/', label: 'Ayuda' },
      { href: '/mi-reserva/', label: 'Mi Reserva' },
      { href: '/check-in/', label: 'Check-in' },
    ],
    search: 'Buscar',
    book: 'Reservar',
    switchLabel: 'View this page in English',
  },
  en: {
    stripLabel: 'Aerus routes',
    direct: 'Direct route',
    perDay: 'daily flights',
    perWeek: 'weekly flights',
    flight: 'flight',
    seeRoute: 'See route →',
    close: 'Close routes notice',
    left: [
      { href: '/destinos/', label: 'Destinations' },
      { href: '/rutas/', label: 'Routes' },
      { href: '/on-demand/', label: 'On Demand' },
      { href: '/on-demand/charter/', label: 'Charter' },
    ],
    right: [
      { href: '/ayuda/', label: 'Help' },
      { href: '/mi-reserva/', label: 'My Booking' },
      { href: '/check-in/', label: 'Check-in' },
    ],
    search: 'Search',
    book: 'Book',
    switchLabel: 'Ver esta página en español',
  },
}

function formatDuracion(min: number) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`
}

function RouteStrip({ lang }: { lang: Lang }) {
  const t = T[lang]
  const [open, setOpen] = useState(true)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!open || paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % STRIP_ROUTES.length), 5000)
    return () => clearInterval(t)
  }, [open, paused])

  if (!open) return null

  const { slug, frecuencia } = STRIP_ROUTES[idx]
  const r = RUTAS_DATA[slug]

  return (
    <div className="notif-anchor">
    <div
      className="notif"
      role="region"
      aria-label={t.stripLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="notif-body" key={slug} aria-live="polite">
        <strong>{t.direct}</strong>
        <span className="dot"/>
        <span>{r.origen} ({r.iataOrigen}) → {r.destino} ({r.iataDestino})</span>
        <span className="dot"/>
        {frecuencia && (
          <>
            <span>{frecuencia.n} {frecuencia.per === 'day' ? t.perDay : t.perWeek}</span>
            <span className="dot"/>
          </>
        )}
        <span>{formatDuracion(r.duracionMin)} {t.flight}</span>
        <span className="dot"/>
        <Link href={lp(lang, `/rutas/${slug}/`)} className="notif-link">{t.seeRoute}</Link>
      </div>
      <button className="notif-close" onClick={() => setOpen(false)} aria-label={t.close}>
        <span aria-hidden="true">×</span>
      </button>
    </div>
    </div>
  )
}

export default function Nav({ lang }: { lang: Lang }) {
  const t = T[lang]
  // Se normaliza a la ruta canónica: el servidor ve la ruta interna (/en/destinos) y el
  // navegador la pública (/en/destinations); así ambos renderizan lo mismo.
  const { path } = parsePathname(usePathname())
  // Solo se marca el link más específico: en /on-demand/charter se activa "Charter", no "On Demand"
  const matches = (href: string) => {
    const h = href.replace(/\/$/, '')
    return path === h || path.startsWith(h + '/')
  }
  const activeHref = [...t.left, ...t.right]
    .map(i => i.href)
    .filter(matches)
    .sort((a, b) => b.length - a.length)[0]
  const active = (href: string) => (href === activeHref ? 'active' : '')
  const other: Lang = lang === 'es' ? 'en' : 'es'
  const langSwitch = (className: string) => (
    <Link
      href={lp(other, path === '/' ? '/' : path + '/')}
      hrefLang={other}
      className={className}
      aria-label={t.switchLabel}
    >
      <Icon name="globe" size={13}/>
      <span className={lang === 'es' ? 'on' : ''}>ES</span>
      <span aria-hidden="true">·</span>
      <span className={lang === 'en' ? 'on' : ''}>EN</span>
    </Link>
  )

  return (
    <>
      <nav className="nav">
        <div className="nav-group nav-left">
          {t.left.map(i => (
            <Link key={i.href} href={lp(lang, i.href)} className={active(i.href)}>
              {i.label}
            </Link>
          ))}
        </div>

        <Link href={lp(lang, '/')} className="brand">
          <img src="/logo-lockup-inverse.svg" alt="Aerus"/>
        </Link>

        <div className="nav-group nav-right">
          {t.right.map(i => (
            <Link key={i.href} href={lp(lang, i.href)} className={active(i.href)}>
              {i.label}
            </Link>
          ))}
          <div className="nav-vr"/>
          <button className="icon-btn" aria-label={t.search}><Icon name="search" size={15}/></button>
          {langSwitch('lang')}
          <Link href={lp(lang, '/reservar/')} className="login">
            <Icon name="plane-takeoff" size={14}/> {t.book}
          </Link>
        </div>
        {/* En móvil los grupos de links se ocultan; el selector de idioma queda junto al logo */}
        {langSwitch('lang lang-mobile')}
      </nav>
      <RouteStrip lang={lang}/>
    </>
  )
}
