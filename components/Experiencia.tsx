const STATS = [
  {
    num: '40',
    unit: 'min',
    label: 'Check-in y abordaje exprés',
    sub: '1.er lugar en velocidad de embarque en México.',
  },
  {
    num: '7',
    unit: '',
    label: 'Aeronaves — flota más joven',
    sub: 'Cessna Grand Caravan EX. Solo 2 años de antigüedad promedio.',
  },
  {
    num: '95%',
    unit: '',
    label: 'Rutas exclusivas',
    sub: 'Destinos donde las aerolíneas grandes no operan.',
  },
  {
    num: '97.2%',
    unit: '',
    label: 'Cumplimiento de vuelos',
    sub: '+120,000 pasajeros. Tres años consecutivos.',
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
                {s.num}<span className="exp-unit">{s.unit}</span>
              </div>
              <div className="exp-label">{s.label}</div>
              <div className="exp-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="exp-certs">
          <span className="cert-tag">AOC · AFAC</span>
          <span className="cert-tag">Part 129 · FAA</span>
          <span className="cert-tag">MRO Certificado</span>
        </div>
      </div>
    </section>
  )
}
