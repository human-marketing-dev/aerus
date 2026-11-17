'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from './icons'
import { lp, parsePathname, type Lang } from '@/lib/i18n'
import type { ConfiguracionContent } from '@/content/pages/configuracion'

export type NavTexts = { menu: ConfiguracionContent['menu']; aviso: ConfiguracionContent['aviso'] }

// Parte de cliente del header. Los datos del aviso de rutas los consulta components/Nav.tsx
// (servidor) y llegan ya listos en `strip`.
export type StripItem = {
  slug: string
  origen: string
  iataOrigen: string
  destino: string
  iataDestino: string
  duracionMin: number
  frecuencia?: { n: number; per: 'day' | 'week' }
}

// Textos genéricos de interfaz (accesibilidad, selector de idioma): se quedan en código
const UI = {
  es: { stripLabel: 'Rutas Aerus', close: 'Cerrar aviso de rutas', search: 'Buscar', switchLabel: 'View this page in English' },
  en: { stripLabel: 'Aerus routes', close: 'Close routes notice', search: 'Search', switchLabel: 'Ver esta página en español' },
}

function formatDuracion(min: number) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`
}

function RouteStrip({ lang, strip, aviso }: { lang: Lang; strip: StripItem[]; aviso: NavTexts['aviso'] }) {
  const t = { ...UI[lang], direct: aviso.titulo, perDay: aviso.porDia, perWeek: aviso.porSemana, flight: aviso.deVuelo, seeRoute: aviso.verRuta }
  const [open, setOpen] = useState(true)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!open || paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % strip.length), 5000)
    return () => clearInterval(t)
  }, [open, paused, strip.length])

  if (!open || strip.length === 0) return null

  const r = strip[idx % strip.length]
  const { slug, frecuencia } = r

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

export default function NavClient({ lang, strip, texts }: { lang: Lang; strip: StripItem[]; texts: NavTexts }) {
  const t = { ...UI[lang], left: texts.menu.izquierda, right: texts.menu.derecha, book: texts.menu.reservar }
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
          <Link href={lp(lang, texts.menu.reservarHref)} className="login">
            <Icon name="plane-takeoff" size={14}/> {t.book}
          </Link>
        </div>
        {/* En móvil los grupos de links se ocultan; el selector de idioma queda junto al logo */}
        {langSwitch('lang lang-mobile')}
      </nav>
      <RouteStrip lang={lang} strip={strip} aviso={texts.aviso}/>
    </>
  )
}
