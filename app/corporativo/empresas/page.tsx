import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Soluciones para empresas | Aerus',
  description:
    'Cuenta corporativa Aerus para empresas con viajes recurrentes. Gestor de cuenta dedicado, facturación mensual, reporte de viajes y acuerdos de servicio a medida.',
}

const SOLUCIONES = [
  {
    icono: 'support',
    titulo: 'Gestor de cuenta dedicado',
    desc: 'Un contacto exclusivo en Aerus que conoce tus rutas, tus empleados frecuentes y las particularidades de tu empresa.',
  },
  {
    icono: 'mail',
    titulo: 'Facturación mensual consolidada',
    desc: 'Todos los vuelos del período en una sola factura. Desglose por empleado, ruta y fecha listo para el área de finanzas.',
  },
  {
    icono: 'shield',
    titulo: 'Reportes de viaje',
    desc: 'Acceso a reporte mensual de actividad: vuelos realizados, rutas más usadas, cancelaciones y patrones de viaje del equipo.',
  },
  {
    icono: 'calendar',
    titulo: 'Tarifas preferenciales',
    desc: 'Acuerdos de precio basados en el volumen de viajes de la empresa. A mayor recurrencia, mejores condiciones tarifarias.',
  },
  {
    icono: 'users',
    titulo: 'Administración de viajeros',
    desc: 'Alta y gestión de empleados autorizados, perfiles de viajero frecuente y preferencias documentadas para cada miembro del equipo.',
  },
  {
    icono: 'clock',
    titulo: 'Política de cambios flexible',
    desc: 'Cambios de fecha y nombre sin costo adicional con la anticipación establecida en el acuerdo corporativo.',
  },
]

const PARA_QUIEN = [
  'Empresas industriales del noreste con empleados que viajan a la frontera norte frecuentemente',
  'Operadoras y contratistas del sector energético en el corredor Veracruz–Villahermosa',
  'Despachos y firmas con clientes en múltiples destinos de la red Aerus',
  'Grupos empresariales con necesidad de trasladar equipos entre ciudades regionales',
  'Instituciones gubernamentales o académicas con viajes recurrentes en rutas Aerus',
]

export default function EmpresasPage() {
  return (
    <>
      <Nav />
      <main>

        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/corporativo/">Corporativo</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Cuenta empresarial</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Corporativo</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Cuenta <span className="accent">empresarial</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Para empresas que vuelan Aerus de forma recurrente. Un acuerdo de servicio
              a la medida con gestor dedicado, facturación mensual y condiciones preferenciales.
            </p>
          </div>
        </section>

        <section className="corp-body">
          <div className="container">
            <div className="docs-layout">
              <div>

                {/* Soluciones */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 24 }}>
                    <div className="docs-section-icon">
                      <Icon name="shield" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">El servicio</p>
                      <h2 className="docs-h2">Qué incluye la cuenta empresarial</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {SOLUCIONES.map((s) => (
                      <div key={s.titulo} className="corp-uso-card">
                        <div className="corp-uso-icon">
                          <Icon name={s.icono} size={18} stroke={1.5} />
                        </div>
                        <p className="corp-uso-titulo">{s.titulo}</p>
                        <p className="corp-uso-desc">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Para quién */}
                <div className="docs-section" style={{ marginBottom: 44 }}>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="users" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">Perfil de cliente</p>
                      <h2 className="docs-h2">¿Para qué tipo de empresa es?</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {PARA_QUIEN.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>

                {/* Diferencia con Flight Pass */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="ticket" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">¿Cuál elegir?</p>
                      <h2 className="docs-h2">Cuenta empresarial vs Flight Pass</h2>
                    </div>
                  </div>
                  <div className="corp-compare-table">
                    <div className="corp-compare-header">
                      <span />
                      <span>Cuenta empresarial</span>
                      <span>Flight Pass</span>
                    </div>
                    {[
                      { aspecto: 'Volumen de vuelos', empresa: 'Alto — acuerdo anual', pass: 'Medio — bloques mensuales' },
                      { aspecto: 'Precio', empresa: 'Tarifa negociada por acuerdo', pass: 'Precio fijo por vuelo prepagado' },
                      { aspecto: 'Facturación', empresa: 'Mensual consolidada', pass: 'Mensual consolidada' },
                      { aspecto: 'Gestor dedicado', empresa: '✓', pass: '✓' },
                      { aspecto: 'Reportes', empresa: 'Detallado + analítica', pass: 'Básico' },
                      { aspecto: 'Empleados cubiertos', empresa: 'Toda la empresa', pass: 'Empleados asignados' },
                    ].map((row) => (
                      <div key={row.aspecto} className="corp-compare-row">
                        <span className="corp-compare-aspecto">{row.aspecto}</span>
                        <span className="corp-compare-val">{row.empresa}</span>
                        <span className="corp-compare-val">{row.pass}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <aside className="docs-sidebar">
                <div className="mro-cta-sidebar">
                  <p className="mro-cta-sidebar-titulo">¿Quieres saber más?</p>
                  <p className="mro-cta-sidebar-desc">
                    Contáctanos y un ejecutivo de cuentas te llama para entender tu necesidad y diseñar una propuesta.
                  </p>
                  <a
                    href="mailto:corporativo@aerus.mx"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    Escribir a corporativo@aerus.mx
                  </a>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Otras soluciones</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Aerus Charter',      href: '/corporativo/charter/' },
                      { label: 'Aerus Flight Pass',  href: '/corporativo/flight-pass/' },
                      { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
                      { label: 'Red de rutas',       href: '/rutas/' },
                    ].map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
