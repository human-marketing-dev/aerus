'use client'
import { useState } from 'react'
import { Icon } from './icons'

interface Brand { name: string; display: string; sub?: string; bg: string; fg: string }

const CARDS: Brand[] = [
  { name: 'Visa',         display: 'VISA',        bg: '#1434CB', fg: '#fff' },
  { name: 'Mastercard',   display: 'Mastercard',   bg: '#252525', fg: '#fff' },
  { name: 'AMEX',         display: 'AMEX',         bg: '#2E77BC', fg: '#fff' },
  { name: 'Carnet',       display: 'CARNET',       bg: '#B30000', fg: '#fff' },
  { name: 'BBVA',         display: 'BBVA',         bg: '#004A96', fg: '#fff' },
  { name: 'Citibanamex',  display: 'Citibanamex',  bg: '#003B75', fg: '#fff' },
  { name: 'Banorte',      display: 'Banorte',      bg: '#C8102E', fg: '#fff' },
  { name: 'Santander',    display: 'Santander',    bg: '#EC0000', fg: '#fff' },
  { name: 'BanRegio',     display: 'banregio',     bg: '#00529B', fg: '#fff' },
  { name: 'Inbursa',      display: 'INBURSA',      bg: '#003082', fg: '#fff' },
  { name: 'Scotiabank',   display: 'Scotiabank',   bg: '#EC111A', fg: '#fff' },
  { name: 'HSBC',         display: 'HSBC',         bg: '#DB0011', fg: '#fff' },
  { name: 'Banco Azteca', display: 'Azteca',       sub: 'banco', bg: '#F7941D', fg: '#fff' },
  { name: 'Afirme',       display: 'Afirme',       bg: '#005BAA', fg: '#fff' },
  { name: 'Invex',        display: 'INVEX',        bg: '#1B3F8F', fg: '#fff' },
  { name: 'SPEI',         display: 'SPEI',         sub: 'transferencia', bg: '#007D59', fg: '#fff' },
]

const CASH: Brand[] = [
  { name: 'OXXO',                 display: 'OXXO',       bg: '#DA0020', fg: '#fff' },
  { name: '7-Eleven',             display: '7-Eleven',   bg: '#006400', fg: '#fff' },
  { name: 'Walmart',              display: 'Walmart',    bg: '#0071CE', fg: '#fff' },
  { name: "Sam's Club",           display: "Sam's Club", bg: '#003087', fg: '#fff' },
  { name: 'Farmacias del Ahorro', display: 'del Ahorro', sub: 'farmacias', bg: '#C41230', fg: '#fff' },
  { name: 'Extra',                display: 'Extra',      bg: '#0057A8', fg: '#fff' },
  { name: 'Circle K',             display: 'Circle K',   bg: '#CC0000', fg: '#fff' },
  { name: "Waldo's",              display: "Waldo's",    bg: '#FF6B00', fg: '#fff' },
  { name: 'Bodega Aurrera',       display: 'Aurrera',    sub: 'bodega', bg: '#004490', fg: '#fff' },
  { name: 'Tiendas K',            display: 'Tiendas K',  bg: '#B30000', fg: '#fff' },
  { name: 'PayCash',              display: 'PayCash',    bg: '#00A86B', fg: '#fff' },
  { name: 'SPEI',                 display: 'SPEI',       sub: 'transferencia', bg: '#007D59', fg: '#fff' },
]

const TABS: { id: string; label: string; icon: string; sub: string; brands: Brand[] }[] = [
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

        <div className={`logos logos-${tab}`}>
          {current.brands.map(b => (
            <div
              key={b.name}
              className="logo-tile"
              title={b.name}
              style={{ background: b.bg, color: b.fg }}
            >
              {b.sub && <span className="brand-sub">{b.sub}</span>}
              <span className="brand-name">{b.display}</span>
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
