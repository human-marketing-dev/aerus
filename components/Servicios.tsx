import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import type { InicioContent } from '@/content/pages/inicio'



// Sección "Servicios adicionales" del home. Contenido: Sanity → Inicio → Secciones.
export default function Servicios({ lang, t }: { lang: Lang; t: InicioContent['servicios'] }) {
  return (
    <section className="servicios section-pad" id="servicios">
      <div className="container">
        <div className="header" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'end' }}>
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="section-headline" style={{ marginTop: 24 }}>
              {t.titulo}<span className="accent">{t.tituloAcento}</span>
            </h2>
          </div>
          <Link href={lp(lang, t.verTodosHref)} className="btn btn-outline">{t.verTodos} <span className="ar"></span></Link>
        </div>
        <div className="grid">
          {t.items.map(s => (
            <div className="servicio" key={s.num}>
              <span className="num">{s.num}</span>
              <div className="icon"><Icon name={s.icono} size={22} stroke={1.8}/></div>
              {s.badge && <span className="badge">{s.badge}</span>}
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <Link href={lp(lang, s.href)} className="footer-link">{t.verMas} <span className="ar"></span></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
