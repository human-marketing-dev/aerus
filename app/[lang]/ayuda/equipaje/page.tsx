import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/ayuda/equipaje/'

/* ── Data ───────────────────────────────────────────────────────────────── */

type CeldaEstado = 'incluido' | 'extra'

type TablaFila = {
  feature: string
  celdas: { texto: string; estado: CeldaEstado }[]
}

const TARIFAS_HEADER = ['Aerus Light', 'Aerus Business', 'Aerus Advantage']

const TABLA_FILAS: Record<Lang, TablaFila[]> = {
  es: [
    {
      feature: 'Equipaje de mano',
      celdas: [
        { texto: '1 pieza · hasta 10 kg', estado: 'incluido' },
        { texto: '1 pieza · hasta 10 kg', estado: 'incluido' },
        { texto: '1 pieza · hasta 10 kg', estado: 'incluido' },
      ],
    },
    {
      feature: 'Equipaje documentado',
      celdas: [
        { texto: 'Adicional con costo', estado: 'extra' },
        { texto: '1 maleta · hasta 23 kg', estado: 'incluido' },
        { texto: '2 maletas · hasta 23 kg c/u', estado: 'incluido' },
      ],
    },
  ],
  en: [
    {
      feature: 'Carry-on bag',
      celdas: [
        { texto: '1 piece · up to 10 kg', estado: 'incluido' },
        { texto: '1 piece · up to 10 kg', estado: 'incluido' },
        { texto: '1 piece · up to 10 kg', estado: 'incluido' },
      ],
    },
    {
      feature: 'Checked baggage',
      celdas: [
        { texto: 'Available for a fee', estado: 'extra' },
        { texto: '1 bag · up to 23 kg', estado: 'incluido' },
        { texto: '2 bags · up to 23 kg each', estado: 'incluido' },
      ],
    },
  ],
}

type InfoSeccion = {
  icono: string
  titulo: string
  subtitulo: string
  items: string[]
  nota?: string
}

const INFO_SECCIONES: Record<Lang, InfoSeccion[]> = {
  es: [
    {
      icono: 'luggage',
      titulo: 'Artículo personal',
      subtitulo: 'Incluido en todas las tarifas',
      items: [
        'Dimensiones máximas: 40 × 30 × 15 cm.',
        'Puede ser bolsa de mano, mochila pequeña o portafolio.',
        'Debe caber completamente debajo del asiento frontal.',
        'Viaja contigo en cabina sin costo adicional en todas las tarifas.',
      ],
    },
    {
      icono: 'luggage',
      titulo: 'Equipaje de mano',
      subtitulo: 'Incluido en todas las tarifas',
      items: [
        'Dimensiones máximas: 55 × 40 × 25 cm (alto × ancho × fondo), incluyendo ruedas y manijas.',
        'Peso máximo: 10 kg.',
        'Debe caber en el compartimento superior sin forzarlo.',
        'En vuelos con alta ocupación, Aerus puede solicitar que el equipaje de mano se documente sin costo.',
      ],
    },
    {
      icono: 'luggage',
      titulo: 'Equipaje documentado',
      subtitulo: 'Incluido en Business y Advantage',
      items: [
        'Suma lineal máxima (largo + ancho + alto): 158 cm.',
        'Peso máximo por maleta: 23 kg.',
        'Sobrepeso (entre 23 y 32 kg): cargo adicional de $350 MXN por maleta.',
        'Maletas que excedan 32 kg o 158 cm lineales no son aceptadas como equipaje documentado estándar — contacta con anticipación.',
        'En tarifa Light puedes agregar equipaje documentado al momento de compra o en mostrador (costo más alto en aeropuerto).',
      ],
      nota: 'Aerus no se responsabiliza por objetos de valor, frágiles o perecederos incluidos en el equipaje documentado. Usa el equipaje de mano para laptops, medicamentos y documentos importantes.',
    },
    {
      icono: 'x',
      titulo: 'Artículos restringidos',
      subtitulo: 'Lo que no puedes llevar',
      items: [
        'Líquidos, aerosoles y geles en cabina: envases de máximo 100 ml, total 1 litro en bolsa transparente resellable. Medicamentos y fórmula infantil quedan exentos.',
        'Objetos punzocortantes (navajas, cutters, tijeras de punta) solo en equipaje documentado.',
        'Baterías de litio sueltas (powerbanks, baterías de repuesto): exclusivamente en equipaje de mano, máx. 100 Wh por unidad.',
        'Explosivos, materiales inflamables, gases comprimidos, venenos y materiales radiactivos: prohibidos en todo momento.',
        'Armas de fuego: solo documentadas con declaración previa y cumpliendo regulación de la SCT y autoridades migratorias.',
      ],
      nota: 'Esta lista es orientativa. Consulta siempre la regulación de la SCT y la AFAC para la lista completa de artículos prohibidos o restringidos.',
    },
    {
      icono: 'plane',
      titulo: 'Equipaje especial',
      subtitulo: 'Deportivo, musical y de gran tamaño',
      items: [
        'Instrumentos musicales pequeños (guitarra, violín): pueden viajar en cabina ocupando un asiento adicional con cargo equivalente a un boleto de equipaje.',
        'Equipo deportivo (tablas de surf, esquís, bicicletas, palos de golf): sujeto a disponibilidad y cargo adicional. Informa con al menos 48 horas de anticipación.',
        'Artículos frágiles o de alto valor: se recomienda embalaje adecuado y declaración de valor en mostrador. Aerus no cubre daños en artículos no declarados.',
        'Sillas de ruedas y equipos de movilidad: transportados sin cargo adicional. Contáctanos al reservar para confirmar disposiciones.',
      ],
      nota: 'Para equipaje especial o de gran formato, contáctanos con al menos 72 horas de anticipación para confirmar disponibilidad y tarifas aplicables.',
    },
  ],
  en: [
    {
      icono: 'luggage',
      titulo: 'Personal item',
      subtitulo: 'Included with every fare',
      items: [
        'Maximum dimensions: 40 × 30 × 15 cm.',
        'It can be a handbag, small backpack or briefcase.',
        'It must fit completely under the seat in front of you.',
        'It travels with you in the cabin at no extra cost on every fare.',
      ],
    },
    {
      icono: 'luggage',
      titulo: 'Carry-on bag',
      subtitulo: 'Included with every fare',
      items: [
        'Maximum dimensions: 55 × 40 × 25 cm (height × width × depth), including wheels and handles.',
        'Maximum weight: 10 kg.',
        'It must fit in the overhead bin without forcing it.',
        'On full flights, Aerus may ask that carry-on bags be checked free of charge.',
      ],
    },
    {
      icono: 'luggage',
      titulo: 'Checked baggage',
      subtitulo: 'Included with Business and Advantage',
      items: [
        'Maximum linear dimensions (length + width + height): 158 cm.',
        'Maximum weight per bag: 23 kg.',
        'Overweight (between 23 and 32 kg): additional fee of $350 MXN per bag.',
        'Bags over 32 kg or 158 linear cm are not accepted as standard checked baggage — contact us in advance.',
        'With the Light fare, you can add checked baggage at the time of purchase or at the counter (higher fee at the airport).',
      ],
      nota: 'Aerus is not responsible for valuable, fragile or perishable items packed in checked baggage. Keep laptops, medication and important documents in your carry-on.',
    },
    {
      icono: 'x',
      titulo: 'Restricted items',
      subtitulo: 'What you can’t bring',
      items: [
        'Liquids, aerosols and gels in the cabin: containers of up to 100 ml, 1 liter total, in a clear resealable bag. Medication and baby formula are exempt.',
        'Sharp objects (knives, box cutters, pointed scissors) are allowed in checked baggage only.',
        'Loose lithium batteries (power banks, spare batteries): carry-on baggage only, max. 100 Wh per unit.',
        'Explosives, flammable materials, compressed gases, poisons and radioactive materials: prohibited at all times.',
        'Firearms: checked baggage only, with prior declaration and in compliance with SCT (Mexican Ministry of Communications and Transportation) and immigration regulations.',
      ],
      nota: 'This list is for guidance only. Always check SCT and AFAC (Mexican Federal Civil Aviation Agency) regulations for the complete list of prohibited and restricted items.',
    },
    {
      icono: 'plane',
      titulo: 'Special baggage',
      subtitulo: 'Sports, musical and oversized items',
      items: [
        'Small musical instruments (guitar, violin): may travel in the cabin in an extra seat, for a fee equivalent to a baggage ticket.',
        'Sports equipment (surfboards, skis, bicycles, golf clubs): subject to availability and an additional fee. Let us know at least 48 hours in advance.',
        'Fragile or high-value items: we recommend proper packaging and declaring their value at the counter. Aerus does not cover damage to undeclared items.',
        'Wheelchairs and mobility devices: carried at no extra charge. Contact us when you book to confirm arrangements.',
      ],
      nota: 'For special or oversized baggage, contact us at least 72 hours in advance to confirm availability and applicable fees.',
    },
  ],
}

const es = {
  metaTitle: 'Equipaje | Aerus',
  metaDescription:
    'Conoce cuánto equipaje puedes llevar con Aerus según tu tarifa, dimensiones permitidas, artículos restringidos y política de equipaje especial.',
  breadcrumbLabel: 'Ruta de navegación',
  home: 'Inicio',
  help: 'Ayuda',
  current: 'Equipaje',
  eyebrow: 'Ayuda',
  titleA: 'Política de',
  titleB: 'equipaje',
  intro: 'Dimensiones, pesos y lo que incluye cada tarifa. Todo lo que necesitas saber antes de llegar al aeropuerto.',
  compareEyebrow: 'Por tarifa',
  compareTitle: '¿Qué incluye tu boleto?',
  tableLabel: 'Comparativa de equipaje por tarifa',
  featureCol: 'Característica',
  cardsLabel: 'Equipaje por tarifa',
  compareNote:
    'Todos los pasajeros pueden llevar además 1 artículo personal (bolsa o mochila pequeña) sin costo en cualquier tarifa.',
}

const en: typeof es = {
  metaTitle: 'Baggage | Aerus',
  metaDescription:
    'Find out how much baggage you can bring with Aerus based on your fare, allowed dimensions, restricted items and our special baggage policy.',
  breadcrumbLabel: 'Breadcrumb',
  home: 'Home',
  help: 'Help',
  current: 'Baggage',
  eyebrow: 'Help',
  titleA: 'Baggage',
  titleB: 'policy',
  intro: 'Dimensions, weights and what each fare includes. Everything you need to know before you get to the airport.',
  compareEyebrow: 'By fare',
  compareTitle: 'What does your ticket include?',
  tableLabel: 'Baggage comparison by fare',
  featureCol: 'Feature',
  cardsLabel: 'Baggage by fare',
  compareNote:
    'All passengers may also bring 1 personal item (handbag or small backpack) free of charge on any fare.',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda/equipaje'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default async function EquipajePage({ params }: PageProps<'/[lang]/ayuda/equipaje'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const filas = TABLA_FILAS[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        {/* Hero */}
        <section className="eq-hero">
          <div className="container eq-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/ayuda/')}>{t.help}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.current}</span>
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
            <div className="eq-table-wrap" role="region" aria-label={t.tableLabel}>
              <table className="eq-table">
                <thead>
                  <tr>
                    <th className="eq-th-label" scope="col"><span className="sr-only">{t.featureCol}</span></th>
                    {TARIFAS_HEADER.map((nombre, i) => (
                      <th
                        key={nombre}
                        className={`eq-th${i === 2 ? ' eq-th-featured' : ''}`}
                        scope="col"
                      >
                        <span className="eq-th-tag">{nombre.split(' ')[1]}</span>
                        <span className="eq-th-name">{nombre}</span>
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
                          className={`eq-td eq-td-${celda.estado}${i === 2 ? ' eq-td-featured' : ''}`}
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
            <div className="eq-cards" aria-label={t.cardsLabel}>
              {TARIFAS_HEADER.map((nombre, col) => (
                <div key={nombre} className={`eq-card${col === 2 ? ' eq-card-featured' : ''}`}>
                  <div className="eq-card-header">
                    <span className="eq-card-tag">{nombre.split(' ')[1]}</span>
                    <span className="eq-card-nombre">{nombre}</span>
                  </div>
                  <ul className="eq-card-list">
                    {filas.map(fila => (
                      <li key={fila.feature} className={`eq-card-item eq-card-item--${fila.celdas[col].estado}`}>
                        <span className="eq-card-feature">{fila.feature}</span>
                        <span className="eq-card-valor">{fila.celdas[col].texto}</span>
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
              {INFO_SECCIONES[lang].map((sec, i) => (
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
