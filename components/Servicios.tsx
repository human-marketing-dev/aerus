import { Icon } from './icons'

const SERVICIOS_DATA = [
  {
    num: '01',
    icon: 'swap',
    title: 'Cambio de vuelo',
    body: 'Si necesitas cambiar tu vuelo, puedes hacerlo con el Área de Atención a Clientes, cubriendo el pago por diferencia tarifaria y la penalidad correspondiente.',
    badge: null,
  },
  {
    num: '02',
    icon: 'shield',
    title: 'Asistencia de viaje',
    body: 'Viaja tranquilo y sin preocupaciones con nuestra cobertura especial que te protege en todo momento del viaje.',
    badge: 'Desde $149 MXN',
  },
  {
    num: '03',
    icon: 'circle-check',
    title: 'Seguro de cancelación',
    body: 'Beneficios exclusivos que te respaldan si necesitas cancelar tu vuelo por imprevistos. Incluye reembolso parcial y reprogramación.',
    badge: 'Desde $999 MXN',
  },
  {
    num: '04',
    icon: 'users',
    title: 'Grupos',
    body: 'Si viajas con más de diez pasajeros, esta opción te permite obtener beneficios exclusivos: tarifas preferenciales, equipaje adicional y atención personalizada.',
    badge: '10+ pasajeros',
  },
]

export default function Servicios() {
  return (
    <section className="servicios section-pad" id="servicios">
      <div className="container">
        <div className="header" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'end' }}>
          <div>
            <div className="eyebrow">Servicios adicionales</div>
            <h2 className="section-headline" style={{ marginTop: 24 }}>
              Servicios pensados para <span className="accent">acompañarte.</span>
            </h2>
          </div>
          <button className="btn btn-outline">Ver todos los servicios <span className="ar"></span></button>
        </div>
        <div className="grid">
          {SERVICIOS_DATA.map(s => (
            <div className="servicio" key={s.num}>
              <span className="num">{s.num}</span>
              <div className="icon"><Icon name={s.icon} size={22} stroke={1.8}/></div>
              {s.badge && <span className="badge">{s.badge}</span>}
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a href="#" className="footer-link">Ver más <span className="ar"></span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
