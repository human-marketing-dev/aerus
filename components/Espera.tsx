import { Icon } from './icons'

const steps = [
  {
    num: '01 · Check-in',
    big: '40',
    unit: 'min antes',
    title: 'Tu check-in más ágil',
    body: 'Puedes realizarlo en mostrador con al menos 40 minutos para vuelos nacionales previos a la salida del vuelo o si prefieres en nuestra página Web hasta 72 horas antes.',
    cta: 'Obtén tu web check-in',
  },
  {
    num: '02 · Sala de espera',
    big: '30',
    unit: 'min antes',
    title: 'Llega 30 minutos antes',
    body: 'Te solicitamos llegar a la sala de última espera con tu pase de abordar con al menos treinta minutos de anticipación a la salida de tu vuelo. Aplica únicamente para vuelos nacionales.',
    cta: 'Cómo llegar al aeropuerto',
  },
  {
    num: '03 · Abordaje',
    big: '9–12',
    unit: 'asientos',
    title: 'Abordaje eficiente',
    body: 'Contamos con aviones de nueve y doce asientos, nuevos y confortables, lo que permite un abordaje rápido y eficiente. Sin filas eternas, sin espera innecesaria.',
    cta: 'Conoce nuestra flota',
  },
]

export default function Espera() {
  return (
    <section className="espera section-pad">
      <div className="container inner">
        <div className="header">
          <div>
            <div className="eyebrow">Procesos eficientes</div>
            <h2 className="section-headline" style={{ marginTop: 28, color: '#fff' }}>
              Espera <span className="accent" style={{ fontStyle: 'italic' }}>minutos,</span> no horas.
            </h2>
          </div>
          <div className="lede">
            Con Aerus optimizas tu tiempo. Nuestros procedimientos de check-in, abordaje y despegue son ágiles, porque sabemos que tu día no debería estar esperando en una sala.
          </div>
        </div>
        <div className="timeline">
          <div className="dotrail">
            {steps.map((_, i) => <div key={i} className="knob"></div>)}
          </div>
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="num">{s.num}</div>
              <div className="big">
                {s.big} <span className="unit">{s.unit}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a href="#" className="arrow-link">{s.cta} <Icon name="arrow-right" size={14}/></a>
            </div>
          ))}
        </div>
        <div className="note">
          <strong>*Vuelos internacionales:</strong> para rutas internacionales debes presentarte en mostradores con al menos 1 hora previa a la salida del vuelo. Aplica para todas las clases tarifarias.
        </div>
      </div>
    </section>
  )
}
