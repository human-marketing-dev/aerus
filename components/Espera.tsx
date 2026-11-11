import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'

type Step = { num: string; big: string; unit: string; title: string; body: string; cta: string; href: string }

const T: Record<Lang, {
  steps: Step[]
  eyebrow: string
  headline: [string, string, string]
  lede: string
  noteStrong: string
  note: string
}> = {
  es: {
    steps: [
      {
        num: '01 · Check-in', big: '40', unit: 'min antes', title: 'Tu check-in más ágil',
        body: 'Puedes realizarlo en mostrador con al menos 40 minutos para vuelos nacionales previos a la salida del vuelo o si prefieres en nuestra página Web hasta 72 horas antes.',
        cta: 'Obtén tu web check-in', href: '/check-in/',
      },
      {
        num: '02 · Sala de espera', big: '30', unit: 'min antes', title: 'Llega 30 minutos antes',
        body: 'Te solicitamos llegar a la sala de última espera con tu pase de abordar con al menos treinta minutos de anticipación a la salida de tu vuelo. Aplica únicamente para vuelos nacionales.',
        cta: 'Cómo llegar al aeropuerto', href: '/ayuda/tiempos-aeropuerto/',
      },
      {
        num: '03 · Abordaje', big: '0', unit: 'filas', title: 'Abordaje eficiente',
        body: 'Subes a bordo en minutos, sin filas ni esperas innecesarias. Nuestros aviones son nuevos y confortables, y el abordaje es rápido y directo.',
        cta: 'Conoce nuestra flota', href: '/experiencia/flota/',
      },
    ],
    eyebrow: 'Procesos eficientes',
    headline: ['Espera ', 'minutos,', ' no horas.'],
    lede: 'Con Aerus optimizas tu tiempo. Nuestros procedimientos de check-in, abordaje y despegue son ágiles, porque sabemos que tu día no debería estar esperando en una sala.',
    noteStrong: '*Vuelos internacionales:',
    note: 'para rutas internacionales debes presentarte en mostradores con al menos 1 hora previa a la salida del vuelo. Aplica para todas las clases tarifarias.',
  },
  en: {
    steps: [
      {
        num: '01 · Check-in', big: '40', unit: 'min before', title: 'Faster check-in',
        body: 'Check in at the counter at least 40 minutes before departure for domestic flights, or online up to 72 hours before your flight.',
        cta: 'Check in online', href: '/check-in/',
      },
      {
        num: '02 · Gate', big: '30', unit: 'min before', title: 'Be at the gate 30 minutes early',
        body: 'Please be at the boarding gate with your boarding pass at least thirty minutes before your flight departs. Applies to domestic flights only.',
        cta: 'Getting to the airport', href: '/ayuda/tiempos-aeropuerto/',
      },
      {
        num: '03 · Boarding', big: '0', unit: 'lines', title: 'Effortless boarding',
        body: 'You’re on board in minutes, with no lines or unnecessary waiting. Our aircraft are new and comfortable, and boarding is quick and direct.',
        cta: 'Meet our fleet', href: '/experiencia/flota/',
      },
    ],
    eyebrow: 'Efficient processes',
    headline: ['Wait ', 'minutes,', ' not hours.'],
    lede: 'Aerus makes the most of your time. Our check-in, boarding and departure processes are fast, because your day shouldn’t be spent waiting in a lounge.',
    noteStrong: '*International flights:',
    note: 'for international routes, please check in at the counter at least 1 hour before departure. Applies to all fare classes.',
  },
}

export default function Espera({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <section className="espera section-pad">
      <div className="container inner">
        <div className="header">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="section-headline" style={{ marginTop: 28, color: '#fff' }}>
              {t.headline[0]}<span className="accent" style={{ fontStyle: 'italic' }}>{t.headline[1]}</span>{t.headline[2]}
            </h2>
          </div>
          <div className="lede">{t.lede}</div>
        </div>
        <div className="timeline">
          <div className="dotrail">
            {t.steps.map((_, i) => <div key={i} className="knob"></div>)}
          </div>
          {t.steps.map((s, i) => (
            <div key={i} className="step">
              <div className="num">{s.num}</div>
              <div className="big">
                {s.big} <span className="unit">{s.unit}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <Link href={lp(lang, s.href)} className="arrow-link">{s.cta} <Icon name="arrow-right" size={14}/></Link>
            </div>
          ))}
        </div>
        <div className="note">
          <strong>{t.noteStrong}</strong> {t.note}
        </div>
      </div>
    </section>
  )
}
