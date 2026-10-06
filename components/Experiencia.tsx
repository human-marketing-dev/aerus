const STATS = [
  {
    num: '40',
    unit: 'min',
    label: 'Preséntate hasta 40 minutos antes de tu vuelo',
    sub: '1.er lugar en velocidad de embarque en México.',
  },
  {
    pre: 'menos de',
    num: '3',
    unit: 'años',
    label: 'Flota Cessna Grand Caravan EX',
    sub: 'Ideal para el mercado regional. Antigüedad promedio menor a 3 años.',
  },
  {
    num: 'Destinos exclusivos',
    unit: '',
    label: '',
    sub: 'Destinos donde las aerolíneas grandes no operan.',
  },
  {
    num: '+97%',
    unit: '',
    label: 'Puntualidad superior al 97%',
    sub: 'Sostenida tres años consecutivos.',
  },
]

export default function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="exp-photo">
        <img
          src="/avion-aerus-lado (1).webp"
          alt="Cessna Grand Caravan EX — Aerus"
        />
        <div className="exp-photo-caption">
          <span className="exp-model">Cessna Grand Caravan EX</span>
          <span className="exp-reg">XA-RFF · Garmin G1000 NXi · 9–12 asientos</span>
        </div>
      </div>

      <div className="exp-content">
        <div className="exp-top">
          <div className="eyebrow">Por qué volar con Aerus</div>
          <span className="exp-since">Aerolínea regional · Desde 2023</span>
        </div>

        <h2 className="section-headline exp-headline">
          Una experiencia<br/>
          diseñada para<br/>
          tu <em>tiempo.</em>
        </h2>

        <div className="exp-stats">
          {STATS.map((s, i) => (
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
