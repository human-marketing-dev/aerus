'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Icon } from './icons'

interface Brand {
  name: string
  logo: string
}

const CARDS: Brand[] = [
  { name: 'Visa',          logo: '/logos/visa-logo-blanco.webp' },
  { name: 'Mastercard',    logo: '/logos/mastercard-logo-blanco.webp' },
  { name: 'American Express', logo: '/logos/american-express-logo-blanco.webp' },
  { name: 'Carnet',        logo: '/logos/carnet-logo-blanco.webp' },
  { name: 'BBVA',          logo: '/logos/bbva-logo-blanco.webp' },
  { name: 'Citibanamex',   logo: '/logos/banamex-logo-blanco.webp' },
  { name: 'Banorte',       logo: '/logos/banorte-logo-blanco.webp' },
  { name: 'Santander',     logo: '/logos/santander-logo-blanco.webp' },
  { name: 'BanRegio',      logo: '/logos/banregio-logo-blanco.webp' },
  { name: 'Inbursa',       logo: '/logos/inbursa-logo-blanco.webp' },
  { name: 'Scotiabank',    logo: '/logos/scotiabank-logo-blanco.webp' },
  { name: 'HSBC',          logo: '/logos/hsbc-logo-blanco.webp' },
  { name: 'Banco Azteca',  logo: '/logos/banco-azteca-logo-blanco.webp' },
  { name: 'Afirme',        logo: '/logos/afirme-logo-blanco.webp' },
  { name: 'Invex',         logo: '/logos/invex-logo-blanco.webp' },
  { name: 'SPEI',          logo: '/logos/spei-logo-blanco.webp' },
]

const CASH: Brand[] = [
  { name: 'OXXO',                  logo: '/logos/oxxo-logo-blanco.webp' },
  { name: '7-Eleven',              logo: '/logos/7-eleven-logo-blanco.webp' },
  { name: 'Walmart',               logo: '/logos/walmart-logo-blanco.webp' },
  { name: "Sam's Club",            logo: '/logos/sams-club-logo-blanco.webp' },
  { name: 'Farmacias del Ahorro',  logo: '/logos/farmacias-del-ahorro-logo-blanco.webp' },
  { name: 'Extra',                 logo: '/logos/extra-logo-blanco.webp' },
  { name: 'Circle K',              logo: '/logos/circle-k-logo-blanco.webp' },
  { name: "Waldo's",               logo: '/logos/waldos-logo-blanco.webp' },
  { name: 'Bodega Aurrera',        logo: '/logos/bodega-aurrera-logo-blanco.webp' },
  { name: 'PayCash',               logo: '/logos/pay-cash-logo-blanco.webp' },
  { name: 'SPEI',                  logo: '/logos/spei-logo-blanco.webp' },
]

const TABS = [
  {
    id: 'cards',
    label: 'Tarjetas',
    icon: 'credit-card',
    sub: 'Crédito y débito · 3, 6, 9 y 12 MSI con tarjetas participantes',
    brands: CARDS,
  },
  {
    id: 'cash',
    label: 'Efectivo y transferencias',
    icon: 'cash',
    sub: 'Paga en más de 25,000 puntos de servicio en todo México',
    brands: CASH,
  },
]

export default function Pagos() {
  const [tab, setTab] = useState('cards')
  const current = TABS.find(t => t.id === tab)!

  return (
    <section className="pagos section-pad">
      <div className="container inner">
        <div className="header">
          <div>
            <div className="eyebrow">Métodos de pago</div>
            <h2 className="section-headline" style={{ color: '#fff' }}>
              Paga como tú <em style={{ fontStyle: 'italic' }}>prefieras.</em>
            </h2>
          </div>
          <div className="tabs">
            {TABS.map(t => (
              <button key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => setTab(t.id)}>
                <Icon name={t.icon} size={14}/> {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 28, color: 'rgba(255,255,255,0.6)', font: '400 14px/1.5 var(--font-body)' }}>
          {current.sub}
        </div>

        <div className={`pagos-logos-grid pagos-logos-grid--${tab}`}>
          {current.brands.map(b => (
            <div key={b.name} className="pagos-logo-tile" title={b.name}>
              <Image
                src={b.logo}
                alt={b.name}
                width={280}
                height={120}
                style={{ objectFit: 'contain', objectPosition: 'center', maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          ))}
        </div>

        <div className="footer-row">
          <div className="secure">
            <Icon name="lock" size={14}/>
            Conexión segura · PCI DSS · Certificado SSL · 3D Secure activado.
          </div>
          <div>
            ¿Problemas con tu pago?{' '}
            <a href="#" style={{ color: 'var(--aerus-spring-green)', textDecoration: 'underline' }}>
              Atención a clientes 24/7 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
