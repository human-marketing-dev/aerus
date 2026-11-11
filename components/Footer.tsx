import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import { SOCIAL_LINKS } from '@/lib/social'

type Col = { title: string; links: { href: string; label: string }[] }

const T: Record<Lang, {
  tagline: string
  cols: Col[]
  contacts: { lab: string; val: string; sub: string; icon: string }[]
  rights: string
  legal: { href: string; label: string }[]
  address: string
}> = {
  es: {
    tagline: 'Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.',
    cols: [
      { title: 'Volar', links: [
        { href: '/reservar/', label: 'Reservar vuelo' },
        { href: '/reservar/tarifas/', label: 'Tarifas y familias' },
        { href: '/check-in/', label: 'Web check-in' },
        { href: '/mi-reserva/', label: 'Mi Reserva' },
        { href: '/mi-reserva/', label: 'Cambios y cancelaciones' },
      ]},
      { title: 'Destinos y rutas', links: [
        { href: '/destinos/', label: 'Destinos' },
        { href: '/rutas/', label: 'Rutas' },
        { href: '/rutas/alianza-viva/', label: 'Alianza con Viva' },
      ]},
      { title: 'On Demand', links: [
        { href: '/on-demand/', label: 'On Demand' },
        { href: '/on-demand/charter/', label: 'Aerus Charter' },
        { href: '/on-demand/flight-pass/', label: 'Aerus Flight Pass' },
        { href: '/on-demand/empresas/', label: 'Soluciones para empresas' },
      ]},
      { title: 'La aerolínea', links: [
        { href: '/experiencia/', label: 'Experiencia Aerus' },
        { href: '/nosotros/', label: 'Nosotros' },
        { href: '/nosotros/prensa/', label: 'Sala de prensa' },
        { href: '/mro/', label: 'MRO' },
        { href: '/mro/capacidades/', label: 'Capacidades y certificaciones' },
      ]},
      { title: 'Ayuda', links: [
        { href: '/ayuda/', label: 'Centro de ayuda' },
        { href: '/ayuda/faq/', label: 'Preguntas frecuentes' },
        { href: '/ayuda/documentos-para-viajar/', label: 'Documentos para viajar' },
        { href: '/ayuda/equipaje/', label: 'Equipaje' },
        { href: '/ayuda/requerimientos-especiales/', label: 'Requerimientos especiales' },
        { href: '/ayuda/viajar-con-mascota/', label: 'Viajar con mascota' },
        { href: '/ayuda/facturacion/', label: 'Facturación' },
        { href: '/ayuda/contacto/', label: 'Contacto' },
      ]},
    ],
    contacts: [
      { icon: 'phone', lab: 'México', val: '+52 (812) 682·3501', sub: 'Lun–Dom · 06:00 – 22:00 hrs' },
      { icon: 'phone', lab: 'Estados Unidos', val: '+1 (866) 691·0179', sub: 'Llamada gratuita desde EE. UU.' },
      { icon: 'bot', lab: 'Asistente IA · 24 hrs', val: '+52 (814) 170·1702', sub: 'WhatsApp y SMS · todos los días' },
    ],
    rights: '© 2026 Aerus. Todos los derechos reservados. Descubre el futuro™',
    legal: [
      { href: '/legal/terminos-y-condiciones/', label: 'Términos' },
      { href: '/legal/aviso-de-privacidad/', label: 'Privacidad' },
      { href: '/legal/cookies/', label: 'Cookies' },
    ],
    address: 'Aeropuerto Internacional de Monterrey, N.L. · Carretera Miguel Alemán, Km 24, Apodaca, Nuevo León · C.P. 66600',
  },
  en: {
    tagline: 'A Mexican airline focused on agility, flexibility and innovation. Reimagine the new way to travel.',
    cols: [
      { title: 'Fly', links: [
        { href: '/reservar/', label: 'Book a flight' },
        { href: '/reservar/tarifas/', label: 'Fares and fare families' },
        { href: '/check-in/', label: 'Web check-in' },
        { href: '/mi-reserva/', label: 'My Booking' },
        { href: '/mi-reserva/', label: 'Changes and cancellations' },
      ]},
      { title: 'Destinations and routes', links: [
        { href: '/destinos/', label: 'Destinations' },
        { href: '/rutas/', label: 'Routes' },
        { href: '/rutas/alianza-viva/', label: 'Viva alliance' },
      ]},
      { title: 'On Demand', links: [
        { href: '/on-demand/', label: 'On Demand' },
        { href: '/on-demand/charter/', label: 'Aerus Charter' },
        { href: '/on-demand/flight-pass/', label: 'Aerus Flight Pass' },
        { href: '/on-demand/empresas/', label: 'Business solutions' },
      ]},
      { title: 'The airline', links: [
        { href: '/experiencia/', label: 'The Aerus experience' },
        { href: '/nosotros/', label: 'About us' },
        { href: '/nosotros/prensa/', label: 'Press room' },
        { href: '/mro/', label: 'MRO' },
        { href: '/mro/capacidades/', label: 'Capabilities and certifications' },
      ]},
      { title: 'Help', links: [
        { href: '/ayuda/', label: 'Help center' },
        { href: '/ayuda/faq/', label: 'FAQ' },
        { href: '/ayuda/documentos-para-viajar/', label: 'Travel documents' },
        { href: '/ayuda/equipaje/', label: 'Baggage' },
        { href: '/ayuda/requerimientos-especiales/', label: 'Special assistance' },
        { href: '/ayuda/viajar-con-mascota/', label: 'Traveling with pets' },
        { href: '/ayuda/facturacion/', label: 'Invoicing' },
        { href: '/ayuda/contacto/', label: 'Contact' },
      ]},
    ],
    contacts: [
      { icon: 'phone', lab: 'Mexico', val: '+52 (812) 682·3501', sub: 'Mon–Sun · 6:00 am – 10:00 pm' },
      { icon: 'phone', lab: 'United States', val: '+1 (866) 691·0179', sub: 'Toll-free from the U.S.' },
      { icon: 'bot', lab: 'AI assistant · 24/7', val: '+52 (814) 170·1702', sub: 'WhatsApp and SMS · every day' },
    ],
    rights: '© 2026 Aerus. All rights reserved. Discover the future™',
    legal: [
      { href: '/legal/terminos-y-condiciones/', label: 'Terms' },
      { href: '/legal/aviso-de-privacidad/', label: 'Privacy' },
      { href: '/legal/cookies/', label: 'Cookies' },
    ],
    address: 'Monterrey International Airport, N.L. · Carretera Miguel Alemán, Km 24, Apodaca, Nuevo León · ZIP 66600, Mexico',
  },
}

export default function Footer({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="brand">
            <img src="/logo-lockup-inverse.svg" alt="Aerus"/>
            <p>{t.tagline}</p>
            <div className="socials">
              {SOCIAL_LINKS.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icon} size={16}/>
                </a>
              ))}
            </div>
          </div>
          {t.cols.map(col => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}><Link href={lp(lang, l.href)}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="contacts">
          {t.contacts.map(c => (
            <div key={c.val} className="item">
              <div className="ico"><Icon name={c.icon} size={16}/></div>
              <div>
                <div className="lab">{c.lab}</div>
                <div className="val">{c.val}</div>
                <div className="sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div>{t.rights}</div>
          <div className="legal">
            {t.legal.map(l => (
              <Link key={l.href} href={lp(lang, l.href)}>{l.label}</Link>
            ))}
          </div>
          <div className="address">{t.address}</div>
        </div>
      </div>
    </footer>
  )
}
