import type { InicioContent } from '@/content/pages/inicio'



// Sección "Por qué volar con Aerus" del home. Contenido: Sanity → Inicio → Secciones.
export default function Experiencia({ t }: { t: InicioContent['experiencia'] }) {
  return (
    <section className="experiencia" id="experiencia">
      <div className="exp-photo">
        <img src={t.foto.src} alt={t.foto.alt} style={t.foto.position ? { objectPosition: t.foto.position } : undefined}/>
        <div className="exp-photo-caption">
          <span className="exp-model">{t.modelo}</span>
          <span className="exp-reg">{t.caption}</span>
        </div>
      </div>

      <div className="exp-content">
        <div className="exp-top">
          <div className="eyebrow">{t.eyebrow}</div>
          <span className="exp-since">{t.since}</span>
        </div>

        <h2 className="section-headline exp-headline">
          {t.linea1}<br/>
          {t.linea2}<br/>
          {t.linea3}<em>{t.acento}</em>
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
