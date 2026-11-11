import type { Lang } from '@/lib/i18n'

type Stat = { pre?: string; num: string; unit: string; label: string; sub: string }

const T: Record<Lang, {
  stats: Stat[]
  photoAlt: string
  caption: string
  eyebrow: string
  since: string
  headline: [string, string, string, string]
}> = {
  es: {
    stats: [
      { num: '40', unit: 'min', label: 'Preséntate hasta 40 minutos antes de tu vuelo', sub: '1.er lugar en velocidad de embarque en México.' },
      { pre: 'menos de', num: '3', unit: 'años', label: 'Flota Cessna Grand Caravan EX', sub: 'Ideal para el mercado regional. Antigüedad promedio menor a 3 años.' },
      { num: 'Destinos exclusivos', unit: '', label: '', sub: 'Destinos donde las aerolíneas grandes no operan.' },
      { num: '+97%', unit: '', label: 'Puntualidad superior al 97%', sub: 'Sostenida tres años consecutivos.' },
    ],
    photoAlt: 'Cessna Grand Caravan EX — Aerus',
    caption: 'XA-RFF · Garmin G1000 NXi · 12 asientos',
    eyebrow: 'Por qué volar con Aerus',
    since: 'Aerolínea regional · Desde 2023',
    headline: ['Una experiencia', 'diseñada para', 'tu ', 'tiempo.'],
  },
  en: {
    stats: [
      { num: '40', unit: 'min', label: 'Arrive as little as 40 minutes before your flight', sub: 'No. 1 in boarding speed in Mexico.' },
      { pre: 'under', num: '3', unit: 'years', label: 'Cessna Grand Caravan EX fleet', sub: 'Built for regional travel. Average fleet age under 3 years.' },
      { num: 'Exclusive destinations', unit: '', label: '', sub: 'Places the big airlines don’t fly to.' },
      { num: '+97%', unit: '', label: 'On-time performance above 97%', sub: 'Sustained for three consecutive years.' },
    ],
    photoAlt: 'Cessna Grand Caravan EX — Aerus',
    caption: 'XA-RFF · Garmin G1000 NXi · 12 seats',
    eyebrow: 'Why fly Aerus',
    since: 'Regional airline · Since 2023',
    headline: ['An experience', 'designed around', 'your ', 'time.'],
  },
}

export default function Experiencia({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <section className="experiencia" id="experiencia">
      <div className="exp-photo">
        <img src="/imagen-aerus-home-avion.webp" alt={t.photoAlt}/>
        <div className="exp-photo-caption">
          <span className="exp-model">Cessna Grand Caravan EX</span>
          <span className="exp-reg">{t.caption}</span>
        </div>
      </div>

      <div className="exp-content">
        <div className="exp-top">
          <div className="eyebrow">{t.eyebrow}</div>
          <span className="exp-since">{t.since}</span>
        </div>

        <h2 className="section-headline exp-headline">
          {t.headline[0]}<br/>
          {t.headline[1]}<br/>
          {t.headline[2]}<em>{t.headline[3]}</em>
        </h2>

        <div className="exp-stats">
          {t.stats.map((s, i) => (
            <div key={i} className="exp-stat">
              <div className="exp-big">
                {s.pre && <span className="exp-unit">{s.pre}</span>}
                {s.num}<span className="exp-unit">{s.unit}</span>
              </div>
              {s.label && <div className="exp-label">{s.label}</div>}
              <div className="exp-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
