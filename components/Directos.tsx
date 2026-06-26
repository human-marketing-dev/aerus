import { Icon } from './icons'

const DIRECT_ROUTES: [string, string][] = [
  ['CDMX', 'Ciudad Victoria'],
  ['CDMX', 'Ciudad Ixtepec'],
  ['CDMX', 'Tampico'],
  ['Ciudad del Carmen', 'Minatitlán'],
  ['Ciudad del Carmen', 'Veracruz'],
  ['Minatitlán', 'Veracruz'],
  ['Minatitlán', 'Villahermosa'],
  ['Monterrey', 'Aguascalientes'],
  ['Monterrey', 'Brownsville'],
  ['Monterrey', 'Durango'],
  ['Monterrey', 'McAllen'],
  ['Monterrey', 'Laredo'],
  ['Monterrey', 'Piedras Negras'],
  ['Monterrey', 'San Luis Potosí'],
  ['Monterrey', 'Tampico'],
  ['Morelia', 'CDMX'],
  ['Morelia', 'Uruapan'],
  ['Veracruz', 'CDMX'],
  ['Veracruz', 'Tampico'],
  ['Veracruz', 'Villahermosa'],
  ['Villahermosa', 'Mérida'],
]

export default function Directos() {
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
              <span className="a">Destinos</span>
              <span className="b">Directos</span>
            </div>
          </div>
          <div className="blurb">
            21 conexiones directas, sin escalas innecesarias. Llega antes, descansa más y vive el destino — no la sala de espera.
          </div>
          <div className="count">21</div>
          <div>Rutas directas activas</div>
        </div>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
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
            <button className="btn" style={{ background: 'var(--aerus-deep-forest)', color: 'var(--aerus-spring-green)' }}>
              Encuentra tu vuelo directo <span className="ar"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
