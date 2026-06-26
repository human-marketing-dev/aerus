const REVIEWS = [
  {
    name: 'Carlos Medina',
    initials: 'CM',
    role: 'Director comercial · Monterrey',
    route: 'Monterrey → Brownsville',
    photoColor: '#C9DEDE',
    text: 'Llegué al aeropuerto 38 minutos antes y salí antes de lo que hubiera tardado en hacer check-in con otra aerolínea. Puntual, cómodo y sin complicaciones. Ya no puedo usar otra línea para mis viajes al norte.',
  },
  {
    name: 'Sofía Villanueva',
    initials: 'SV',
    role: 'Directora de operaciones · Veracruz',
    route: 'Veracruz → Villahermosa',
    photoColor: '#D6FC8A',
    text: 'Por fin una ruta directa que nadie más ofrece. Antes tenía que conectar en CDMX y perdía medio día. Con Aerus hago el viaje en menos de una hora. Increíble lo que cambia tener la ruta correcta.',
  },
  {
    name: 'Arturo Bañuelos',
    initials: 'AB',
    role: 'Empresario · Monterrey',
    route: 'Monterrey → Laredo',
    photoColor: '#A4FFCC',
    text: 'Adquirí el Flight Pass y fue la mejor inversión del año. Vuelo cuando lo necesito sin pagar por separado. Diana me dio seguimiento personalizado desde el primer día — ese nivel de servicio no lo da nadie.',
  },
]

function Stars() {
  return <div className="rev-stars" aria-label="5 estrellas">★★★★★</div>
}

export default function Reviews() {
  return (
    <section className="reviews section-pad" id="resenas">
      <div className="container">
        <div className="reviews-header">
          <p className="eyebrow">Experiencias reales</p>
          <h2 className="section-headline">
            Lo que dicen quienes ya<br/>
            <span className="accent">volaron con nosotros.</span>
          </h2>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rev-card">
              <div className="rev-photo" style={{ background: r.photoColor }} aria-hidden="true"/>
              <div className="rev-card-body">
              <Stars/>
              <p className="rev-text">"{r.text}"</p>
              <div className="rev-author">
                <div className="rev-avatar">{r.initials}</div>
                <div>
                  <div className="rev-name">{r.name}</div>
                  <div className="rev-meta">{r.role}</div>
                  <div className="rev-route">{r.route}</div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-foot">
          <div className="reviews-aggregate">
            <span className="agg-score">5.0</span>
            <div>
              <div className="agg-stars">★★★★★</div>
              <div className="agg-label">Calificación promedio · Reseñas verificadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
