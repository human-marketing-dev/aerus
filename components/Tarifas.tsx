'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import type { InicioContent } from '@/content/pages/inicio'

// Sección "Tarifas" del home. Contenido: Sanity → Inicio → Secciones → Tarifas.
export default function Tarifas({ lang, t: tr }: { lang: Lang; t: InicioContent['tarifas'] }) {
  const tarifas = tr.planes
  // Pestaña abierta al cargar: la de en medio (Business en la configuración actual)
  const [active, setActive] = useState(Math.min(1, Math.max(0, tarifas.length - 1)))
  const t = tarifas[active] ?? tarifas[0]
  if (!t) return null

  const stateIcon = (incluido: boolean) =>
    incluido
      ? <span className="check"><Icon name="check" size={14} stroke={2.5}/></span>
      : <span className="check no"><Icon name="x" size={12} stroke={2}/></span>

  return (
    <section className="tarifas section-pad" id="tarifas">
      <div className="container">
        <div className="header">
          <div>
            <div className="eyebrow">{tr.eyebrow}</div>
            <h2 className="section-headline" style={{ marginTop: 24 }}>
              {tr.titulo}<span className="accent">{tr.tituloAcento}</span>
            </h2>
            <p className="section-intro">{tr.intro}</p>
          </div>
        </div>
        <div className="tab-bar">
          {tarifas.map((p, i) => (
            <button key={p.nombre} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>
              <Icon name={p.icono} size={14}/>
              Aerus {p.nombre}
            </button>
          ))}
        </div>
        <div className="panel">
          <div className="visual">
            <div className="topline">
              <div className="ticker">
                {tr.etiquetaTarifa} · {String(active + 1).padStart(2, '0')} {tr.etiquetaDe} {String(tarifas.length).padStart(2, '0')}
              </div>
              <img src="/logo-symbol-green.svg" alt="" style={{ height: 28 }}/>
            </div>
            <div>
              <div className="bigname">
                <span>Aerus</span>
                <strong>{t.nombre}</strong>
              </div>
              <div style={{ marginTop: 24, fontSize: 18, fontWeight: 500, color: '#A4FFCC', letterSpacing: '0.04em' }}>
                {t.tagline}
              </div>
              <div className="desc" style={{ marginTop: 16 }}>{t.descripcion}</div>
            </div>
          </div>
          <div className="features">
            <h3>{tr.incluye}</h3>
            {t.features.map((f, i) => (
              <div key={i} className="feat-row">
                <div className="ico"><Icon name={f.icono} size={20}/></div>
                <div className="body">
                  <div className="name">{f.nombre}</div>
                  <div className="sub">{f.detalle}</div>
                </div>
                {stateIcon(f.incluido)}
              </div>
            ))}
            <div className="cta-row">
              <Link href={lp(lang, tr.reservarHref)} className="btn btn-primary">{tr.reservar} {t.nombre} <span className="ar"></span></Link>
              <Link href={lp(lang, tr.compararHref)} className="btn btn-outline">{tr.comparar}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
