import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import { getConfig } from '@/lib/config'

// Footer del sitio. Textos, enlaces, teléfonos y redes: Sanity → Configuración general.
export default async function Footer({ lang }: { lang: Lang }) {
  const { footer: t, redes } = await getConfig(lang)
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="brand">
            <img src="/logo-lockup-inverse.svg" alt="Aerus"/>
            <p>{t.tagline}</p>
            <div className="socials">
              {redes.map(s => (
                <a key={s.href} href={s.href} aria-label={s.nombre} target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icono} size={16}/>
                </a>
              ))}
            </div>
          </div>
          {t.columnas.map(col => (
            <div key={col.titulo}>
              <h5>{col.titulo}</h5>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}><Link href={lp(lang, l.href)}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="contacts">
          {t.contactos.map(c => (
            <div key={c.valor} className="item">
              <div className="ico"><Icon name={c.icono} size={16}/></div>
              <div>
                <div className="lab">{c.etiqueta}</div>
                <div className="val">{c.valor}</div>
                <div className="sub">{c.detalle}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div>{t.derechos}</div>
          <div className="legal">
            {t.legales.map(l => (
              <Link key={l.href} href={lp(lang, l.href)}>{l.label}</Link>
            ))}
          </div>
          <div className="address">{t.direccion}</div>
        </div>
      </div>
    </footer>
  )
}
