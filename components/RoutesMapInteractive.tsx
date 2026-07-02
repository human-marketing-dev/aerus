'use client'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, useMapContext } from 'react-simple-maps'
import type { City } from '@/lib/routes'

// TODO: move to a 'codeshare' column in the ciudades sheet if needed later
const VIVA = new Set(['Monterrey', 'CDMX', 'Veracruz', 'Villahermosa'])

// ── Map viewport ─────────────────────────────────────────────────────────────
// Adjust MAP_CENTER and MAP_SCALE to reframe the viewport.
// MAP_CENTER is [lon, lat] — the geographic point that appears at dead center.
// MAP_SCALE controls zoom: higher = more zoomed in.
const MAP_CENTER: [number, number] = [-100, 24]
const MAP_SCALE  = 1450
const MAP_WIDTH  = 900
const MAP_HEIGHT = 620

// SVG x-coordinate to start clipping from the left.
// Hides small oceanic islands west of Baja California (e.g. Guadalupe Island).
const MAP_CLIP_LEFT = 40

// US states visible in the viewport (rest are filtered out at render time)
const US_BORDER_STATES = new Set(['Texas', 'New Mexico', 'Arizona', 'California'])

// ── Helpers ───────────────────────────────────────────────────────────────────

// Round to 4 decimal places so server and client produce identical SVG attribute
// strings. d3-geo can return slightly different float64 values across environments
// (Node.js vs browser JIT), causing React hydration mismatches.
const R = (n: number) => Math.round(n * 1e4) / 1e4

function getConnections(city: string, routes: [string, string][]): string[] {
  const set = new Set<string>()
  for (const [a, b] of routes) {
    if (a === city) set.add(b)
    else if (b === city) set.add(a)
  }
  return [...set]
}

// Quadratic Bézier arc in SVG coordinates — same curvature logic as before
function projectedArc(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1, dy = y2 - y1
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist === 0) return ''
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2
  const curve = dist * 0.2
  const bx = (-dy / dist) * curve
  const by = (dx / dist) * curve
  return `M ${x1} ${y1} Q ${Math.round(mx + bx)} ${Math.round(my + by)} ${x2} ${y2}`
}

// ── Sub-components (must render inside <ComposableMap>) ───────────────────────

interface RoutesLayerProps {
  routes: [string, string][]
  cities: Record<string, City>
  routeClass: (a: string, b: string) => string
}

function RoutesLayer({ routes, cities, routeClass }: RoutesLayerProps) {
  const { projection } = useMapContext()
  return (
    <>
      {routes.map(([a, b], i) => {
        const ca = cities[a], cb = cities[b]
        if (!ca || !cb) return null
        const p1 = projection([ca.lon, ca.lat])
        const p2 = projection([cb.lon, cb.lat])
        if (!p1 || !p2) return null
        const d = projectedArc(R(p1[0]), R(p1[1]), R(p2[0]), R(p2[1]))
        return <path key={i} d={d} className={routeClass(a, b)} />
      })}
    </>
  )
}

interface CitiesLayerProps {
  cities: Record<string, City>
  nodeState: (name: string) => string
  toggleCity: (name: string) => void
  setHoveredCity: (name: string | null) => void
}

function CitiesLayer({ cities, nodeState, toggleCity, setHoveredCity }: CitiesLayerProps) {
  const { projection } = useMapContext()
  return (
    <>
      {Object.entries(cities).map(([name, city]) => {
        const p = projection([city.lon, city.lat])
        if (!p) return null
        const [cx, cy] = [R(p[0]), R(p[1])]
        const r = city.hub ? 7 : 5
        const isViva = VIVA.has(name)
        const state = nodeState(name)
        return (
          <g key={name} className={`rmi-node ${state}${isViva ? ' rmi-node--viva' : ''}`}>
            {city.hub && (
              <circle cx={cx} cy={cy} r={r + 8} className="rmi-pulse" pointerEvents="none" />
            )}
            {isViva && (
              <circle cx={cx} cy={cy} r={r + 5} className="rmi-viva-ring" pointerEvents="none" />
            )}
            <circle cx={cx} cy={cy} r={r + 4} className="rmi-halo" pointerEvents="none" />
            <circle cx={cx} cy={cy} r={r} className="rmi-dot" pointerEvents="none" />
            <text
              x={cx + city.ldx}
              y={cy + city.ldy}
              textAnchor={city.anchor}
              dominantBaseline="middle"
              className="rmi-label"
              pointerEvents="none"
            >
              {city.label}
            </text>
            {/* Transparent hit zone — sole event target on desktop; hidden via CSS on mobile */}
            <circle
              cx={cx} cy={cy} r={22}
              fill="transparent" stroke="none"
              className="rmi-hit-zone"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleCity(name)}
              onMouseEnter={() => setHoveredCity(name)}
              onMouseLeave={() => setHoveredCity(null)}
            />
          </g>
        )
      })}
    </>
  )
}

// ── Destination list — accordion + chips (mobile only, hidden on desktop via CSS) ──

interface DestinationListProps {
  cities: Record<string, City>
  routes: [string, string][]
}

function DestinationList({ cities, routes }: DestinationListProps) {
  const [open, setOpen] = useState<Set<string>>(new Set())

  function toggle(id: string) {
    setOpen(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // Hub rows: derived from cities data — never hardcoded
  const hubKeys = Object.entries(cities)
    .filter(([, c]) => c.hub)
    .map(([k]) => k)
    .sort((a, b) => cities[a].label.localeCompare(cities[b].label, 'es'))
  const hubSet = new Set(hubKeys)

  // "Otras rutas": routes where NEITHER endpoint is a hub
  // (hub↔non-hub routes already appear inside each hub's chip list)
  const otrasRoutes = routes.filter(([a, b]) => !hubSet.has(a) && !hubSet.has(b))
  const otrasOpen = open.has('__otras__')

  return (
    <div className="rmi-destinations">
      <p className="rmi-destinations-label">Vuelos directos por ciudad</p>

      {hubKeys.map(hub => {
        const conns = getConnections(hub, routes)
        if (conns.length === 0) return null
        const isOpen = open.has(hub)
        return (
          <div key={hub} className="rmi-dest-row">
            <button className="rmi-dest-trigger" aria-expanded={isOpen} onClick={() => toggle(hub)}>
              <span className="rmi-dest-trigger-left">
                <span className="rmi-dest-hub-dot" aria-hidden="true" />
                <span className="rmi-dest-name">{cities[hub].label}</span>
                {VIVA.has(hub) && <span className="rmi-viva-tag" aria-label="Codeshare VivaAerobus">V</span>}
              </span>
              <span className="rmi-dest-meta" aria-hidden="true">
                <span className="rmi-dest-count">{conns.length}</span>
                <span className="rmi-dest-chevron">›</span>
              </span>
            </button>
            {isOpen && (
              <div className="rmi-dest-chips">
                {conns.map(c => (
                  <span key={c} className={`rmi-dest-chip${VIVA.has(c) ? ' rmi-dest-chip--viva' : ''}`}>
                    {cities[c]?.label ?? c}
                    {VIVA.has(c) && <span className="rmi-viva-tag" aria-label="Codeshare VivaAerobus">V</span>}
                  </span>
                ))}
              </div>
            )}
          </div>
        )
      })}

      {otrasRoutes.length > 0 && (
        <div className="rmi-dest-row">
          <button className="rmi-dest-trigger" aria-expanded={otrasOpen} onClick={() => toggle('__otras__')}>
            <span className="rmi-dest-trigger-left">
              <span className="rmi-dest-name rmi-dest-name--otras">Otras rutas</span>
            </span>
            <span className="rmi-dest-meta" aria-hidden="true">
              <span className="rmi-dest-count">{otrasRoutes.length}</span>
              <span className="rmi-dest-chevron">›</span>
            </span>
          </button>
          {otrasOpen && (
            <div className="rmi-dest-chips">
              {otrasRoutes.map(([a, b], i) => {
                const isViva = VIVA.has(a) || VIVA.has(b)
                return (
                  <span key={i} className={`rmi-dest-chip${isViva ? ' rmi-dest-chip--viva' : ''}`}>
                    {cities[a]?.label ?? a} – {cities[b]?.label ?? b}
                    {isViva && <span className="rmi-viva-tag" aria-label="Codeshare VivaAerobus">V</span>}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

interface Props {
  cities: Record<string, City>
  routes: [string, string][]
}

export default function RoutesMapInteractive({ cities, routes }: Props) {
  const [activeCity, setActiveCity] = useState<string | null>(null)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  const focusCity = hoveredCity || activeCity
  const connections = focusCity ? getConnections(focusCity, routes) : []

  const totalRoutes = routes.length
  const totalDestinos = new Set(routes.flat()).size
  // TODO: derive from data once the Sheet has a way to flag international cities
  const totalInternacionales = 4

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
            <div><span className="rmi-n">{totalRoutes}</span><span className="rmi-l">Rutas directas</span></div>
            <div><span className="rmi-n">{totalDestinos}</span><span className="rmi-l">Destinos</span></div>
            <div><span className="rmi-n">{totalInternacionales}</span><span className="rmi-l">Internacionales</span></div>
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
                {cities[focusCity]?.label ?? focusCity}
                {VIVA.has(focusCity) && <span className="rmi-viva-badge">+ VivaAerobus</span>}
              </div>
              <div className="rmi-overlay-label">Vuelos directos</div>
              <ul className="rmi-overlay-list">
                {connections.map(c => (
                  <li key={c}>
                    <span className="rmi-arr">→</span>
                    {cities[c]?.label ?? c}
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

          {/*
            MAP_CENTER and MAP_SCALE are the two knobs to adjust framing.
            - center: [lon, lat] of the geographic point at SVG center
            - scale: zoom level (increase to zoom in, decrease to zoom out)
          */}
          <ComposableMap
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            projection="geoMercator"
            projectionConfig={{ center: MAP_CENTER, scale: MAP_SCALE }}
            className="rmi-svg"
          >
            <defs>
              {/* Clip rect that starts MAP_CLIP_LEFT px in from the left edge,
                  hiding small oceanic islands west of Baja California. */}
              <clipPath id="rmi-bounds">
                <rect x={MAP_CLIP_LEFT} y={0} width={MAP_WIDTH - MAP_CLIP_LEFT} height={MAP_HEIGHT} />
              </clipPath>
            </defs>

            <g clipPath="url(#rmi-bounds)">
              {/* Mexican state outlines */}
              <Geographies geography="/maps/mexico-states.json">
                {({ geographies }) => geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className="rmi-state-mx"
                    tabIndex={-1}
                    style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                  />
                ))}
              </Geographies>

              {/* Southern US states (Texas, NM, AZ, CA) */}
              <Geographies geography="/maps/us-states.json">
                {({ geographies }) => geographies
                  .filter(geo => US_BORDER_STATES.has(geo.properties.name as string))
                  .map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className="rmi-state-us"
                      tabIndex={-1}
                      style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                    />
                  ))}
              </Geographies>

              {/* Route arcs — projected via useMapContext() */}
              <RoutesLayer routes={routes} cities={cities} routeClass={routeClass} />

              {/* City nodes — projected via useMapContext() */}
              <CitiesLayer
                cities={cities}
                nodeState={nodeState}
                toggleCity={toggleCity}
                setHoveredCity={setHoveredCity}
              />
            </g>
          </ComposableMap>
        </div>

        <DestinationList cities={cities} routes={routes} />
      </div>
    </section>
  )
}
