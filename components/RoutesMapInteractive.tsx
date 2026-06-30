'use client'
import { useState } from 'react'

interface City {
  x: number
  y: number
  label: string
  hub?: boolean
  ldx: number
  ldy: number
  anchor: 'start' | 'middle' | 'end'
}

// Cities where VivaAerobus and Aerus share routes
const VIVA = new Set(['Monterrey', 'CDMX', 'Veracruz', 'Villahermosa'])

const CITIES: Record<string, City> = {
  'CDMX':              { x: 354, y: 458, label: 'CDMX',             hub: true, ldx: 0,   ldy: 17,  anchor: 'middle' },
  'Ciudad Victoria':   { x: 353, y: 271, label: 'Cd. Victoria',                ldx: 10,  ldy: 0,   anchor: 'start'  },
  'Ciudad Ixtepec':    { x: 536, y: 583, label: 'Cd. Ixtepec',                ldx: 0,   ldy: -11, anchor: 'middle' },
  'Tampico':           { x: 411, y: 335, label: 'Tampico',                      ldx: 10,  ldy: 0,   anchor: 'start'  },
  'Ciudad del Carmen': { x: 683, y: 492, label: 'Cd. del Carmen',              ldx: 10,  ldy: 0,   anchor: 'start'  },
  'Minatitlán':        { x: 560, y: 520, label: 'Minatitlán',                  ldx: 0,   ldy: -11, anchor: 'middle' },
  'Monterrey':         { x: 301, y: 187, label: 'Monterrey',         hub: true, ldx: -10, ldy: 0,   anchor: 'end'    },
  'Aguascalientes':    { x: 212, y: 352, label: 'Aguascalientes',              ldx: -10, ldy: 0,   anchor: 'end'    },
  'Brownsville':       { x: 428, y: 178, label: 'Brownsville TX',              ldx: 10,  ldy: 0,   anchor: 'start'  },
  'Durango':           { x: 105, y: 259, label: 'Durango',                      ldx: -10, ldy: 0,   anchor: 'end'    },
  'McAllen':           { x: 395, y: 165, label: 'McAllen TX',                  ldx: 0,   ldy: -11, anchor: 'middle' },
  'Laredo':            { x: 337, y: 108, label: 'Laredo TX',                   ldx: -10, ldy: 0,   anchor: 'end'    },
  'Piedras Negras':    { x: 292, y: 56,  label: 'Piedras Negras',              ldx: 10,  ldy: 0,   anchor: 'start'  },
  'San Luis Potosí':   { x: 271, y: 340, label: 'S.L. Potosí',                ldx: -10, ldy: 0,   anchor: 'end'    },
  'Morelia':           { x: 262, y: 446, label: 'Morelia',                      ldx: -10, ldy: 0,   anchor: 'end'    },
  'Uruapan':           { x: 222, y: 459, label: 'Uruapan',                      ldx: -10, ldy: 15,  anchor: 'end'    },
  'Veracruz':          { x: 489, y: 469, label: 'Veracruz',          hub: true, ldx: 10,  ldy: 0,   anchor: 'start'  },
  'Villahermosa':      { x: 634, y: 520, label: 'Villahermosa',                ldx: 0,   ldy: 15,  anchor: 'middle' },
  'Mérida':            { x: 782, y: 391, label: 'Mérida',                       ldx: 10,  ldy: 0,   anchor: 'start'  },
}

const ROUTES: [string, string][] = [
  ['CDMX', 'Ciudad Victoria'],
  ['CDMX', 'Ciudad Ixtepec'],
  ['CDMX', 'Tampico'],
  ['Ciudad del Carmen', 'Minatitlán'],
  ['Ciudad del Carmen', 'Veracruz'],
  ['Minatitlán', 'Veracruz'],
  ['Minatitlán', 'Villahermosa'],
  ['Monterrey', 'Aguascalientes'],
  ['Monterrey', 'Brownsville'],
  ['Monterrey', 'Durango'],
  ['Monterrey', 'McAllen'],
  ['Monterrey', 'Laredo'],
  ['Monterrey', 'Piedras Negras'],
  ['Monterrey', 'San Luis Potosí'],
  ['Monterrey', 'Tampico'],
  ['Morelia', 'CDMX'],
  ['Morelia', 'Uruapan'],
  ['Veracruz', 'CDMX'],
  ['Veracruz', 'Tampico'],
  ['Veracruz', 'Villahermosa'],
  ['Villahermosa', 'Mérida'],
]

// Simplified polygon of Mexico's land area within the SVG coordinate space.
// Coordinate system: x = (107 - lon°W) / 20 * 900 ; y = (30 - lat°N) / 15 * 650
// Goes clockwise: US border (top) → Gulf Coast (right) → Yucatan → South border → Pacific coast (left)
const MEXICO_OUTLINE = [
  // Northern border / US-Mexico border (Rio Grande) going east
  [0, 0], [27, 10], [113, 22], [185, 17],
  [292, 56], [337, 108], [390, 165], [428, 178],
  // Gulf Coast going south
  [428, 240], [411, 335], [437, 390], [455, 433],
  [489, 469], [531, 498], [567, 516],
  // Campeche / Yucatan west coast
  [683, 492], [734, 477], [743, 433], [783, 391],
  // Northern Yucatan coast going NE (clips at right edge near Cancún)
  [819, 368], [856, 372], [896, 381],
  [900, 381], [900, 420],
  // East / Caribbean coast of Yucatan going south
  [878, 425], [878, 455], [842, 498],
  // Southern border (Guatemala / Belize) going west
  [810, 520], [743, 563], [675, 585], [630, 600],
  [540, 607], [450, 600], [383, 607],
  // Pacific coast going northwest
  [338, 585], [260, 555], [180, 515],
  [122, 472], [81, 407], [68, 347], [27, 295],
  // Left edge going up to start (Sierra Madre / Sonora coast off-screen)
  [0, 250],
].map(([x, y]) => `${x},${y}`).join(' ')

function getConnections(city: string): string[] {
  const set = new Set<string>()
  for (const [a, b] of ROUTES) {
    if (a === city) set.add(b)
    else if (b === city) set.add(a)
  }
  return [...set]
}

function arcPath(from: string, to: string): string {
  const c1 = CITIES[from]
  const c2 = CITIES[to]
  const dx = c2.x - c1.x
  const dy = c2.y - c1.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  const mx = (c1.x + c2.x) / 2
  const my = (c1.y + c2.y) / 2
  const curve = dist * 0.2
  const px = (-dy / dist) * curve
  const py = (dx / dist) * curve
  return `M ${c1.x} ${c1.y} Q ${Math.round(mx + px)} ${Math.round(my + py)} ${c2.x} ${c2.y}`
}

export default function RoutesMapInteractive() {
  const [activeCity, setActiveCity] = useState<string | null>(null)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  const focusCity = hoveredCity || activeCity
  const connections = focusCity ? getConnections(focusCity) : []

  function toggleCity(name: string) {
    setActiveCity(prev => (prev === name ? null : name))
  }

  function routeClass(a: string, b: string) {
    if (!focusCity) return 'rmi-route rmi-route--default'
    if (a === focusCity || b === focusCity) return 'rmi-route rmi-route--hi'
    return 'rmi-route rmi-route--dim'
  }

  function nodeState(name: string) {
    if (!focusCity) return ''
    if (name === focusCity) return 'rmi-node--focus'
    if (connections.includes(name)) return 'rmi-node--connected'
    return 'rmi-node--dim'
  }

  return (
    <section className="rmi" id="mapa-interactivo">
      <div className="rmi-inner">
        <div className="rmi-copy">
          <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Red Interactiva</div>
          <h2 className="section-headline rmi-headline">
            Explora tu próxima <span className="em">conexión.</span>
          </h2>
          <p className="section-intro rmi-intro">
            Toca cualquier destino para ver todas sus rutas directas.
          </p>

          <div className="rmi-stats">
            <div><span className="rmi-n">21</span><span className="rmi-l">Rutas directas</span></div>
            <div><span className="rmi-n">19</span><span className="rmi-l">Destinos</span></div>
            <div><span className="rmi-n">4</span><span className="rmi-l">Internacionales</span></div>
          </div>

          <div className="rmi-legend">
            <div className="rmi-legend-item">
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
                <circle cx="8" cy="8" r="4" fill="var(--aerus-spring-green)" />
                <circle cx="8" cy="8" r="7" fill="none" stroke="#FF7A40" strokeWidth="1.5" />
              </svg>
              Codeshare VivaAerobus + Aerus
            </div>
            <div className="rmi-legend-item">
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
                <circle cx="8" cy="8" r="4" fill="var(--aerus-spring-green)" />
              </svg>
              Destino exclusivo Aerus
            </div>
          </div>

          <div className="rmi-cta">
            <button className="btn btn-primary">
              Ver todas las rutas <span className="ar"></span>
            </button>
          </div>
        </div>

        <div className="rmi-map">
          {focusCity && (
            <div className="rmi-overlay">
              <div className="rmi-overlay-city">
                {CITIES[focusCity]?.label ?? focusCity}
                {VIVA.has(focusCity) && <span className="rmi-viva-badge">+ VivaAerobus</span>}
              </div>
              <div className="rmi-overlay-label">Vuelos directos</div>
              <ul className="rmi-overlay-list">
                {connections.map(c => (
                  <li key={c}>
                    <span className="rmi-arr">→</span>
                    {CITIES[c]?.label ?? c}
                    {VIVA.has(c) && <span className="rmi-viva-tag">V</span>}
                  </li>
                ))}
              </ul>
              {activeCity && (
                <button className="rmi-reset" onClick={() => setActiveCity(null)}>
                  Ver todas las rutas
                </button>
              )}
            </div>
          )}
          <svg
            viewBox="0 0 900 650"
            className="rmi-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mapa interactivo de rutas Aerus"
          >
            {/* Mexico land silhouette */}
            <polygon
              points={MEXICO_OUTLINE}
              fill="rgba(174,248,33,0.05)"
              stroke="rgba(174,248,33,0.2)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Route arcs */}
            {ROUTES.map(([a, b], i) => (
              <path
                key={`r-${i}`}
                d={arcPath(a, b)}
                className={routeClass(a, b)}
              />
            ))}

            {/* City nodes */}
            {Object.entries(CITIES).map(([name, city]) => {
              const r = city.hub ? 7 : 5
              const isViva = VIVA.has(name)
              const state = nodeState(name)
              return (
                <g key={name} className={`rmi-node ${state}${isViva ? ' rmi-node--viva' : ''}`}>
                  {/* Pulse ring for hub cities */}
                  {city.hub && (
                    <circle cx={city.x} cy={city.y} r={r + 8} className="rmi-pulse" pointerEvents="none" />
                  )}
                  {/* VivaAerobus codeshare ring */}
                  {isViva && (
                    <circle cx={city.x} cy={city.y} r={r + 5} className="rmi-viva-ring" pointerEvents="none" />
                  )}
                  {/* Hover halo */}
                  <circle cx={city.x} cy={city.y} r={r + 4} className="rmi-halo" pointerEvents="none" />
                  {/* Main dot */}
                  <circle cx={city.x} cy={city.y} r={r} className="rmi-dot" pointerEvents="none" />
                  {/* Label */}
                  <text
                    x={city.x + city.ldx}
                    y={city.y + city.ldy}
                    textAnchor={city.anchor}
                    dominantBaseline="middle"
                    className="rmi-label"
                    pointerEvents="none"
                  >
                    {city.label}
                  </text>
                  {/* Transparent hit zone — sole event target, prevents child flicker */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={22}
                    fill="transparent"
                    stroke="none"
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleCity(name)}
                    onMouseEnter={() => setHoveredCity(name)}
                    onMouseLeave={() => setHoveredCity(null)}
                  />
                </g>
              )
            })}
          </svg>
        </div>
      </div>
    </section>
  )
}
