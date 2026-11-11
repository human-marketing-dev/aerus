import Image from 'next/image'
import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'

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

const T = {
  es: {
    rows: [
      { id: 'cards', label: 'Tarjetas y bancos', sub: 'Crédito y débito · 3, 6, 9 y 12 MSI con tarjetas participantes' },
      { id: 'cash', label: 'Efectivo y transferencias', sub: 'Paga en más de 25,000 puntos de servicio en todo México' },
    ],
    eyebrow: 'Métodos de pago',
    headline: ['Paga como tú ', 'prefieras.'],
    secure: 'Conexión segura · PCI DSS · Certificado SSL · 3D Secure activado.',
    problem: '¿Problemas con tu pago?',
    support: 'Atención a clientes 24/7 →',
  },
  en: {
    rows: [
      { id: 'cards', label: 'Cards and banks', sub: 'Credit and debit · 3, 6, 9 and 12 interest-free monthly installments with participating Mexican cards' },
      { id: 'cash', label: 'Cash and bank transfers', sub: 'Pay at more than 25,000 locations across Mexico' },
    ],
    eyebrow: 'Payment methods',
    headline: ['Pay the way ', 'you prefer.'],
    secure: 'Secure connection · PCI DSS · SSL certificate · 3D Secure enabled.',
    problem: 'Having trouble with your payment?',
    support: '24/7 customer service →',
  },
}

const ROWS_META = {
  cards: { icon: 'credit-card', brands: CARDS, reverse: false },
  cash:  { icon: 'cash',        brands: CASH,  reverse: true  },
} as const

function LogoTiles({ brands, hidden }: { brands: readonly Brand[]; hidden?: boolean }) {
  return (
    <div style={{ display: 'contents' }} aria-hidden={hidden || undefined}>
      {brands.map(b => (
        <div key={b.name} className="pagos-logo-tile" title={hidden ? undefined : b.name}>
          <Image src={b.logo} alt={hidden ? '' : b.name} width={280} height={120}/>
        </div>
      ))}
    </div>
  )
}

export default function Pagos({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <section className="pagos section-pad">
      <div className="container inner">
        <div className="header">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="section-headline" style={{ color: '#fff' }}>
              {t.headline[0]}<em style={{ fontStyle: 'italic' }}>{t.headline[1]}</em>
            </h2>
          </div>
        </div>

        <div className="pagos-rows">
          {t.rows.map(r => {
            const row = { ...r, ...ROWS_META[r.id as keyof typeof ROWS_META] }
            return (
            <div key={row.id}>
              <div className="pagos-row-head">
                <h3 className="pagos-row-title"><Icon name={row.icon} size={14}/> {row.label}</h3>
                <p className="pagos-row-sub">{row.sub}</p>
              </div>
              <div className={`pagos-marquee${row.reverse ? ' pagos-marquee--reverse' : ''}`}>
                {/* La lista va duplicada para que el loop sea continuo; la copia se oculta a lectores de pantalla */}
                <div
                  className="pagos-track"
                  style={{ '--pagos-dur': `${row.brands.length * 4.5}s` } as React.CSSProperties}
                >
                  <LogoTiles brands={row.brands}/>
                  <LogoTiles brands={row.brands} hidden/>
                </div>
              </div>
            </div>
            )
          })}
        </div>
        <div className="footer-row">
          <div className="secure">
            <Icon name="lock" size={14}/>
            {t.secure}
          </div>
          <div>
            {t.problem}{' '}
            <Link href={lp(lang, '/ayuda/contacto/')} style={{ color: 'var(--aerus-spring-green)', textDecoration: 'underline' }}>
              {t.support}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
