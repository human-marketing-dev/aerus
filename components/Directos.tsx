import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import { getRoutes } from '@/lib/red'
import type { InicioContent } from '@/content/pages/inicio'

// Las rutas vienen de la red de rutas en Sanity (documentos "ruta")



// Sección "Destinos directos" del home. Textos: Sanity → Inicio; rutas: Red de rutas.
export default async function Directos({ lang, t }: { lang: Lang; t: InicioContent['directos'] }) {
  const DIRECT_ROUTES = await getRoutes(lang)
  const N = DIRECT_ROUTES.length
  const half = Math.ceil(DIRECT_ROUTES.length / 2)
  const col1 = DIRECT_ROUTES.slice(0, half)
  const col2 = DIRECT_ROUTES.slice(half)

  return (
    <section className="directos section-pad">
      <Icon name="x-deco" size={56} className="x tl"/>
      <Icon name="x-deco" size={56} className="x bl"/>
      <Icon name="x-deco" size={56} className="x tr"/>
      <Icon name="x-deco" size={56} className="x br"/>
      <div className="container grid">
        <div className="left">
          <div className="logo-wrap">
            <span>Aerus</span>
            <img src="/logo-symbol-forest.svg" alt=""/>
          </div>
          <div className="plate">
            <Icon name="plane-takeoff" size={28}/>
            <div className="text">
              <span className="a">{t.a}</span>
              <span className="b">{t.b}</span>
            </div>
          </div>
          <div className="blurb">{t.blurb.replace('{n}', String(N))}</div>
          <div className="count">{N}</div>
          <div>{t.activas}</div>
        </div>
        <div>
          <div className="routes-tables" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="table">
              {col1.map((r, i) => (
                <div className="row" key={i}>
                  <div className="from">{r[0]}</div>
                  <div className="arr"><Icon name="arrow-right" size={20}/></div>
                  <div className="to">{r[1]}</div>
                </div>
              ))}
            </div>
            <div className="table">
              {col2.map((r, i) => (
                <div className="row" key={i}>
                  <div className="from">{r[0]}</div>
                  <div className="arr"><Icon name="arrow-right" size={20}/></div>
                  <div className="to">{r[1]}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
            <Link href={lp(lang, t.ctaHref)} className="btn" style={{ background: 'var(--aerus-deep-forest)', color: 'var(--aerus-spring-green)' }}>
              {t.cta} <span className="ar"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
