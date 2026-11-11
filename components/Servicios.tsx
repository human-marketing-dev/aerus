import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'

type Servicio = { num: string; icon: string; title: string; body: string; badge: string | null; href: string }

const T: Record<Lang, {
  items: Servicio[]
  eyebrow: string
  headline: [string, string]
  all: string
  more: string
}> = {
  es: {
    items: [
      { num: '01', icon: 'swap', title: 'Cambio de vuelo', href: '/ayuda/faq/', badge: null,
        body: 'Si necesitas cambiar tu vuelo, puedes hacerlo con el Área de Atención a Clientes, cubriendo el pago por diferencia tarifaria y la penalidad correspondiente.' },
      { num: '02', icon: 'shield', title: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/', badge: null,
        body: 'Viaja tranquilo y sin preocupaciones con nuestra cobertura especial que te protege en todo momento del viaje.' },
      { num: '03', icon: 'circle-check', title: 'Seguro de cancelación', href: '/experiencia/seguro-de-cancelacion/', badge: null,
        body: 'Beneficios exclusivos que te respaldan si necesitas cancelar tu vuelo por imprevistos. Incluye reembolso parcial y reprogramación.' },
      { num: '04', icon: 'users', title: 'Grupos', href: '/experiencia/grupos/', badge: '10+ pasajeros',
        body: 'Si viajas con más de diez pasajeros, esta opción te permite obtener beneficios exclusivos: tarifas preferenciales, equipaje adicional y atención personalizada.' },
    ],
    eyebrow: 'Servicios adicionales',
    headline: ['Servicios pensados para ', 'acompañarte.'],
    all: 'Ver todos los servicios',
    more: 'Ver más',
  },
  en: {
    items: [
      { num: '01', icon: 'swap', title: 'Flight changes', href: '/ayuda/faq/', badge: null,
        body: 'Need to change your flight? Our Customer Service team can help — you only cover the fare difference and the applicable change fee.' },
      { num: '02', icon: 'shield', title: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/', badge: null,
        body: 'Travel with peace of mind thanks to special coverage that protects you at every stage of your trip.' },
      { num: '03', icon: 'circle-check', title: 'Cancellation insurance', href: '/experiencia/seguro-de-cancelacion/', badge: null,
        body: 'Exclusive benefits that back you up if you need to cancel your flight for unforeseen reasons. Includes partial refund and rebooking.' },
      { num: '04', icon: 'users', title: 'Groups', href: '/experiencia/grupos/', badge: '10+ passengers',
        body: 'Traveling with more than ten passengers? Get exclusive benefits: preferential fares, extra baggage and personalized service.' },
    ],
    eyebrow: 'Additional services',
    headline: ['Services designed to ', 'travel with you.'],
    all: 'See all services',
    more: 'Learn more',
  },
}

export default function Servicios({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <section className="servicios section-pad" id="servicios">
      <div className="container">
        <div className="header" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'end' }}>
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="section-headline" style={{ marginTop: 24 }}>
              {t.headline[0]}<span className="accent">{t.headline[1]}</span>
            </h2>
          </div>
          <Link href={lp(lang, '/experiencia/')} className="btn btn-outline">{t.all} <span className="ar"></span></Link>
        </div>
        <div className="grid">
          {t.items.map(s => (
            <div className="servicio" key={s.num}>
              <span className="num">{s.num}</span>
              <div className="icon"><Icon name={s.icon} size={22} stroke={1.8}/></div>
              {s.badge && <span className="badge">{s.badge}</span>}
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <Link href={lp(lang, s.href)} className="footer-link">{t.more} <span className="ar"></span></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
