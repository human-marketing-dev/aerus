export default function RoutesMap() {
  return (
    <section className="routes-map" id="destinos">
      <div className="rm-copy">
        <div className="rm-copy-inner">
          <div className="eyebrow">Red de Rutas</div>
          <h2 className="section-headline rm-headline">
            Explora y crea <span className="em">nuevos vínculos.</span>
          </h2>
          <p className="section-intro rm-intro">
            Conectamos 21 destinos en México y el sur de Estados Unidos con una flota de aviones nuevos y rutas pensadas para ahorrarte tiempo. Cada vuelo es un nuevo vínculo.
          </p>
          <div className="rm-stats">
            <div className="rm-stat"><div className="n">21</div><div className="l">Destinos directos</div></div>
            <div className="rm-stat"><div className="n">3</div><div className="l">Hubs principales</div></div>
            <div className="rm-stat"><div className="n">4</div><div className="l">Rutas internacionales</div></div>
          </div>
          <div className="rm-cta">
            <button className="btn btn-primary">Ver todas las rutas <span className="ar"></span></button>
          </div>
        </div>
      </div>
      <div className="rm-map">
        <img src="/red-de-rutas-mapa-aerus.jpg" alt="Mapa de la red de rutas Aerus en México"/>
      </div>
    </section>
  )
}
