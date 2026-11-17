import Image from 'next/image'
import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import { getPage, type Img } from '@/lib/content'
import inicio from '@/content/pages/inicio'

// Sección "Métodos de pago" (home y Experiencia). Contenido: Sanity → Inicio → Métodos de pago.
// Lee su contenido por su cuenta para poder usarse en cualquier página.

type Marca = { nombre: string; logo: Img }

function LogoTiles({ marcas, hidden }: { marcas: Marca[]; hidden?: boolean }) {
  return (
    <div style={{ display: 'contents' }} aria-hidden={hidden || undefined}>
      {marcas.map(b => (
        <div key={b.nombre} className="pagos-logo-tile" title={hidden ? undefined : b.nombre}>
          <Image src={b.logo.src} alt={hidden ? '' : b.logo.alt || b.nombre} width={280} height={120}/>
        </div>
      ))}
    </div>
  )
}

export default async function Pagos({ lang }: { lang: Lang }) {
  const { pagos: t } = await getPage('paginaInicio', lang, inicio)
  return (
    <section className="pagos section-pad">
      <div className="container inner">
        <div className="header">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="section-headline" style={{ color: '#fff' }}>
              {t.titulo}<em style={{ fontStyle: 'italic' }}>{t.tituloAcento}</em>
            </h2>
          </div>
        </div>

        <div className="pagos-rows">
          {t.grupos.map((g, i) => (
            <div key={g.titulo}>
              <div className="pagos-row-head">
                <h3 className="pagos-row-title"><Icon name={g.icono} size={14}/> {g.titulo}</h3>
                <p className="pagos-row-sub">{g.sub}</p>
              </div>
              {/* Los carruseles alternan dirección */}
              <div className={`pagos-marquee${i % 2 ? ' pagos-marquee--reverse' : ''}`}>
                {/* La lista va duplicada para que el loop sea continuo; la copia se oculta a lectores de pantalla */}
                <div
                  className="pagos-track"
                  style={{ '--pagos-dur': `${g.marcas.length * 4.5}s` } as React.CSSProperties}
                >
                  <LogoTiles marcas={g.marcas}/>
                  <LogoTiles marcas={g.marcas} hidden/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-row">
          <div className="secure">
            <Icon name="lock" size={14}/>
            {t.seguro}
          </div>
          <div>
            {t.problema}{' '}
            <Link href={lp(lang, t.soporteHref)} style={{ color: 'var(--aerus-spring-green)', textDecoration: 'underline' }}>
              {t.soporte}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
