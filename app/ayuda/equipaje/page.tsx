import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Equipaje | Aerus',
  description:
    'Conoce cuánto equipaje puedes llevar con Aerus según tu tarifa, dimensiones permitidas, artículos restringidos y política de equipaje especial.',
}

/* ── Data ───────────────────────────────────────────────────────────────── */

type CeldaEstado = 'incluido' | 'extra'

type TablaFila = {
  feature: string
  celdas: { texto: string; estado: CeldaEstado }[]
}

const TARIFAS_HEADER = ['Aerus Light', 'Aerus Business', 'Aerus Advantage']

const TABLA_FILAS: TablaFila[] = [
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
]

type InfoSeccion = {
  icono: string
  titulo: string
  subtitulo: string
  items: string[]
  nota?: string
}

const INFO_SECCIONES: InfoSeccion[] = [
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
]

/* ── Component ──────────────────────────────────────────────────────────── */

export default function EquipajePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="eq-hero">
          <div className="container eq-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Equipaje</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Ayuda</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Política de <span className="accent">equipaje</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Dimensiones, pesos y lo que incluye cada tarifa. Todo lo que necesitas saber antes de llegar al aeropuerto.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="eq-compare-section">
          <div className="container">
            <div className="eq-compare-eyebrow">
              <div className="eyebrow">Por tarifa</div>
              <h2 className="section-headline" style={{ fontSize: 32 }}>¿Qué incluye tu boleto?</h2>
            </div>

            {/* Desktop table */}
            <div className="eq-table-wrap" role="region" aria-label="Comparativa de equipaje por tarifa">
              <table className="eq-table">
                <thead>
                  <tr>
                    <th className="eq-th-label" scope="col"><span className="sr-only">Característica</span></th>
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
                  {TABLA_FILAS.map(fila => (
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
            <div className="eq-cards" aria-label="Equipaje por tarifa">
              {TARIFAS_HEADER.map((nombre, col) => (
                <div key={nombre} className={`eq-card${col === 2 ? ' eq-card-featured' : ''}`}>
                  <div className="eq-card-header">
                    <span className="eq-card-tag">{nombre.split(' ')[1]}</span>
                    <span className="eq-card-nombre">{nombre}</span>
                  </div>
                  <ul className="eq-card-list">
                    {TABLA_FILAS.map(fila => (
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
              Todos los pasajeros pueden llevar además 1 artículo personal (bolsa o mochila pequeña) sin costo en cualquier tarifa.
            </p>
          </div>
        </section>

        {/* Info sections */}
        <section className="section-pad eq-info-body">
          <div className="container">
            <div className="eq-info-sections">
              {INFO_SECCIONES.map((sec, i) => (
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
      <Newsletter/>
      <Footer />
    </>
  )
}
