import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'

const DIRECT_ROUTES: [string, string][] = [
  ['CDMX', 'Ciudad Victoria'],
  ['CDMX', 'Tampico'],
  ['Monterrey', 'Aguascalientes'],
  ['Monterrey', 'Brownsville'],
  ['Monterrey', 'Durango'],
  ['Monterrey', 'McAllen'],
  ['Monterrey', 'Piedras Negras'],
  ['Monterrey', 'San Luis Potosí'],
  ['Monterrey', 'Tampico'],
  ['Veracruz', 'Tampico'],
  ['Veracruz', 'Villahermosa'],
  ['Villahermosa', 'Mérida'],
]
const N = DIRECT_ROUTES.length

const T = {
  es: {
    a: 'Destinos', b: 'Directos',
    blurb: `${N} conexiones directas, sin escalas innecesarias. Llega antes, descansa más y vive el destino — no la sala de espera.`,
    active: 'Rutas directas activas',
    cta: 'Encuentra tu vuelo directo',
  },
  en: {
    a: 'Direct', b: 'Flights',
    blurb: `${N} direct connections, no unnecessary layovers. Arrive sooner, rest more and enjoy your destination — not the departure lounge.`,
    active: 'Active direct routes',
    cta: 'Find your direct flight',
  },
}


export default function Directos({ lang }: { lang: Lang }) {
  const t = T[lang]
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
          <div className="blurb">{t.blurb}</div>
          <div className="count">{N}</div>
          <div>{t.active}</div>
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
            <Link href={lp(lang, '/rutas/')} className="btn" style={{ background: 'var(--aerus-deep-forest)', color: 'var(--aerus-spring-green)' }}>
              {t.cta} <span className="ar"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
