import Link from 'next/link'
import { Icon } from './icons'
import { lp, type Lang } from '@/lib/i18n'
import type { InicioContent } from '@/content/pages/inicio'



// Sección "Espera minutos, no horas" del home. Contenido: Sanity → Inicio → Secciones.
export default function Espera({ lang, t }: { lang: Lang; t: InicioContent['espera'] }) {
  return (
    <section className="espera section-pad">
      <div className="container inner">
        <div className="header">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="section-headline" style={{ marginTop: 28, color: '#fff' }}>
              {t.titulo}<span className="accent" style={{ fontStyle: 'italic' }}>{t.tituloAcento}</span>{t.tituloFin}
            </h2>
          </div>
          <div className="lede">{t.lede}</div>
        </div>
        <div className="timeline">
          <div className="dotrail">
            {t.pasos.map((_, i) => <div key={i} className="knob"></div>)}
          </div>
          {t.pasos.map((s, i) => (
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
          <strong>{t.notaNegrita}</strong> {t.nota}
        </div>
      </div>
    </section>
  )
}
