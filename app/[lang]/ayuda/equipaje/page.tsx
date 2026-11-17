import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { isLang, lp } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/ayuda-equipaje'

const PATH = '/ayuda/equipaje/'

// Textos genéricos de interfaz (no se editan en Sanity)
const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio', help: 'Ayuda',
    tableLabel: 'Comparativa de equipaje por tarifa', featureCol: 'Característica', cardsLabel: 'Equipaje por tarifa' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home', help: 'Help',
    tableLabel: 'Baggage comparison by fare', featureCol: 'Feature', cardsLabel: 'Baggage by fare' },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/equipaje'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaAyudaEquipaje', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function EquipajePage({ params }: PageProps<'/[lang]/ayuda/equipaje'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaAyudaEquipaje', lang, defaults)
  const ui = UI[lang]
  const { tarifas, filas } = t

  return (
    <>
      <Nav lang={lang} />
      <main>
        {/* Hero */}
        <section className="eq-hero">
          <div className="container eq-hero-inner">
            <nav className="destino-breadcrumb" aria-label={ui.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{ui.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{ui.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA} <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t.intro}
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="eq-compare-section">
          <div className="container">
            <div className="eq-compare-eyebrow">
              <div className="eyebrow">{t.compareEyebrow}</div>
              <h2 className="section-headline" style={{ fontSize: 32 }}>{t.compareTitle}</h2>
            </div>

            {/* Desktop table */}
            <div className="eq-table-wrap" role="region" aria-label={ui.tableLabel}>
              <table className="eq-table">
                <thead>
                  <tr>
                    <th className="eq-th-label" scope="col"><span className="sr-only">{ui.featureCol}</span></th>
                    {tarifas.map(tarifa => (
                      <th
                        key={tarifa.nombre}
                        className={`eq-th${tarifa.destacada ? ' eq-th-featured' : ''}`}
                        scope="col"
                      >
                        <span className="eq-th-tag">{tarifa.etiqueta}</span>
                        <span className="eq-th-name">{tarifa.nombre}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filas.map(fila => (
                    <tr key={fila.feature} className="eq-row">
                      <td className="eq-td-label">{fila.feature}</td>
                      {fila.celdas.map((celda, i) => (
                        <td
                          key={i}
                          className={`eq-td eq-td-${celda.estado}${tarifas[i]?.destacada ? ' eq-td-featured' : ''}`}
                        >
                          <span className={`eq-cell-dot eq-cell-dot--${celda.estado}`} aria-hidden="true" />
                          <span className="eq-cell-text">{celda.texto}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="eq-cards" aria-label={ui.cardsLabel}>
              {tarifas.map((tarifa, col) => (
                <div key={tarifa.nombre} className={`eq-card${tarifa.destacada ? ' eq-card-featured' : ''}`}>
                  <div className="eq-card-header">
                    <span className="eq-card-tag">{tarifa.etiqueta}</span>
                    <span className="eq-card-nombre">{tarifa.nombre}</span>
                  </div>
                  <ul className="eq-card-list">
                    {filas.map(fila => (
                      <li key={fila.feature} className={`eq-card-item eq-card-item--${fila.celdas[col]?.estado}`}>
                        <span className="eq-card-feature">{fila.feature}</span>
                        <span className="eq-card-valor">{fila.celdas[col]?.texto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="eq-compare-note">
              {t.compareNote}
            </p>
          </div>
        </section>

        {/* Info sections */}
        <section className="section-pad eq-info-body">
          <div className="container">
            <div className="eq-info-sections">
              {t.secciones.map((sec, i) => (
                <div key={i} className="docs-section">
                  <div className="docs-section-header">
                    <div className="docs-section-icon">
                      <Icon name={sec.icono} size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{sec.subtitulo}</p>
                      <h2 className="docs-h2">{sec.titulo}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {sec.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  {sec.nota && (
                    <div className="docs-callout">
                      <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                      <p>{sec.nota}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
