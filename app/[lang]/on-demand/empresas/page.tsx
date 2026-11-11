import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/on-demand/empresas/'

const es = {
  metaTitle: 'Soluciones para empresas | Aerus',
  metaDescription:
    'Cuenta corporativa Aerus para empresas con viajes recurrentes. Gestor de cuenta dedicado, facturación mensual, reporte de viajes y acuerdos de servicio a medida.',
  breadcrumbLabel: 'Ruta de navegación',
  inicio: 'Inicio',
  breadcrumbActual: 'Cuenta empresarial',
  titleA: 'Cuenta ',
  titleAccent: 'empresarial',
  intro:
    'Para empresas que vuelan Aerus de forma recurrente. Un acuerdo de servicio a la medida con gestor dedicado, facturación mensual y condiciones preferenciales.',
  solucionesSub: 'El servicio',
  solucionesTitulo: 'Qué incluye la cuenta empresarial',
  soluciones: [
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
  ],
  paraQuienSub: 'Perfil de cliente',
  paraQuienTitulo: '¿Para qué tipo de empresa es?',
  paraQuien: [
    'Empresas industriales del noreste con empleados que viajan a la frontera norte frecuentemente',
    'Operadoras y contratistas del sector energético en el corredor Veracruz–Villahermosa',
    'Despachos y firmas con clientes en múltiples destinos de la red Aerus',
    'Grupos empresariales con necesidad de trasladar equipos entre ciudades regionales',
    'Instituciones gubernamentales o académicas con viajes recurrentes en rutas Aerus',
  ],
  compararSub: '¿Cuál elegir?',
  compararTitulo: 'Cuenta empresarial vs Flight Pass',
  colEmpresa: 'Cuenta empresarial',
  colPass: 'Flight Pass',
  comparar: [
    { aspecto: 'Volumen de vuelos', empresa: 'Alto — acuerdo anual', pass: 'Medio — bloques mensuales' },
    { aspecto: 'Precio', empresa: 'Tarifa negociada por acuerdo', pass: 'Precio fijo por vuelo prepagado' },
    { aspecto: 'Facturación', empresa: 'Mensual consolidada', pass: 'Mensual consolidada' },
    { aspecto: 'Gestor dedicado', empresa: '✓', pass: '✓' },
    { aspecto: 'Reportes', empresa: 'Detallado + analítica', pass: 'Básico' },
    { aspecto: 'Empleados cubiertos', empresa: 'Toda la empresa', pass: 'Empleados asignados' },
  ],
  ctaTitulo: '¿Quieres saber más?',
  ctaDesc: 'Contáctanos y un ejecutivo de cuentas te llama para entender tu necesidad y diseñar una propuesta.',
  ctaBtn: 'Escribir a corporativo@aerus.mx',
  relacionadosTitulo: 'Otras soluciones',
  relacionados: [
    { label: 'Aerus Charter',      href: '/on-demand/charter/' },
    { label: 'Aerus Flight Pass',  href: '/on-demand/flight-pass/' },
    { label: 'Vuelos para grupos', href: '/experiencia/grupos/' },
    { label: 'Red de rutas',       href: '/rutas/' },
  ],
}

const en: typeof es = {
  metaTitle: 'Business Solutions | Aerus',
  metaDescription:
    'Aerus corporate accounts for companies with recurring travel. A dedicated account manager, monthly invoicing, travel reporting and tailored service agreements.',
  breadcrumbLabel: 'Breadcrumb',
  inicio: 'Home',
  breadcrumbActual: 'Business account',
  titleA: 'Business ',
  titleAccent: 'account',
  intro:
    'For companies that fly Aerus on a regular basis. A tailored service agreement with a dedicated account manager, monthly invoicing and preferred terms.',
  solucionesSub: 'The service',
  solucionesTitulo: 'What the business account includes',
  soluciones: [
    {
      icono: 'support',
      titulo: 'Dedicated account manager',
      desc: 'A single point of contact at Aerus who knows your routes, your frequent travelers and the specifics of your business.',
    },
    {
      icono: 'mail',
      titulo: 'Consolidated monthly invoicing',
      desc: 'Every flight in the billing period on a single invoice, broken down by employee, route and date — ready for your finance team.',
    },
    {
      icono: 'shield',
      titulo: 'Travel reports',
      desc: 'Access to a monthly activity report: flights taken, most-used routes, cancellations and your team’s travel patterns.',
    },
    {
      icono: 'calendar',
      titulo: 'Preferred fares',
      desc: 'Pricing agreements based on your company’s travel volume. The more often you fly, the better your fare terms.',
    },
    {
      icono: 'users',
      titulo: 'Traveler management',
      desc: 'Enrollment and management of authorized employees, frequent traveler profiles and documented preferences for each team member.',
    },
    {
      icono: 'clock',
      titulo: 'Flexible change policy',
      desc: 'Date and name changes at no extra cost, with the advance notice set out in your corporate agreement.',
    },
  ],
  paraQuienSub: 'Client profile',
  paraQuienTitulo: 'What kind of company is it for?',
  paraQuien: [
    'Industrial companies in northeastern Mexico whose employees travel frequently to the northern border',
    'Energy-sector operators and contractors along the Veracruz–Villahermosa corridor',
    'Law, accounting and consulting firms with clients in multiple destinations across the Aerus network',
    'Business groups that need to move teams between regional cities',
    'Government and academic institutions with recurring travel on Aerus routes',
  ],
  compararSub: 'Which one is right for you?',
  compararTitulo: 'Business account vs. Flight Pass',
  colEmpresa: 'Business account',
  colPass: 'Flight Pass',
  comparar: [
    { aspecto: 'Flight volume', empresa: 'High — annual agreement', pass: 'Medium — monthly blocks' },
    { aspecto: 'Pricing', empresa: 'Negotiated fare per agreement', pass: 'Fixed price per prepaid flight' },
    { aspecto: 'Invoicing', empresa: 'Consolidated monthly', pass: 'Consolidated monthly' },
    { aspecto: 'Dedicated manager', empresa: '✓', pass: '✓' },
    { aspecto: 'Reporting', empresa: 'Detailed + analytics', pass: 'Basic' },
    { aspecto: 'Employees covered', empresa: 'Entire company', pass: 'Assigned employees' },
  ],
  ctaTitulo: 'Want to learn more?',
  ctaDesc: 'Get in touch and an account executive will call you to understand your needs and put together a proposal.',
  ctaBtn: 'Email corporativo@aerus.mx',
  relacionadosTitulo: 'Other solutions',
  relacionados: [
    { label: 'Aerus Charter',      href: '/on-demand/charter/' },
    { label: 'Aerus Flight Pass',  href: '/on-demand/flight-pass/' },
    { label: 'Group travel',       href: '/experiencia/grupos/' },
    { label: 'Route network',      href: '/rutas/' },
  ],
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/on-demand/empresas'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function EmpresasPage({ params }: PageProps<'/[lang]/on-demand/empresas'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="corp-hero">
          <div className="container corp-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.inicio}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/on-demand/')}>On Demand</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.breadcrumbActual}</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>On Demand</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t.intro}
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
                      <p className="docs-subtitulo">{t.solucionesSub}</p>
                      <h2 className="docs-h2">{t.solucionesTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-usos-grid">
                    {t.soluciones.map((s) => (
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
                      <p className="docs-subtitulo">{t.paraQuienSub}</p>
                      <h2 className="docs-h2">{t.paraQuienTitulo}</h2>
                    </div>
                  </div>
                  <ul className="docs-list">
                    {t.paraQuien.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>

                {/* Diferencia con Flight Pass */}
                <div>
                  <div className="docs-section-header" style={{ marginBottom: 16 }}>
                    <div className="docs-section-icon">
                      <Icon name="ticket" size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="docs-subtitulo">{t.compararSub}</p>
                      <h2 className="docs-h2">{t.compararTitulo}</h2>
                    </div>
                  </div>
                  <div className="corp-compare-table">
                    <div className="corp-compare-header">
                      <span />
                      <span>{t.colEmpresa}</span>
                      <span>{t.colPass}</span>
                    </div>
                    {t.comparar.map((row) => (
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
                  <p className="mro-cta-sidebar-titulo">{t.ctaTitulo}</p>
                  <p className="mro-cta-sidebar-desc">
                    {t.ctaDesc}
                  </p>
                  <a
                    href="mailto:corporativo@aerus.mx"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {t.ctaBtn}
                  </a>
                </div>

                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.relacionadosTitulo}</p>
                  <ul className="docs-related-list">
                    {t.relacionados.map((r) => (
                      <li key={r.href}>
                        <Link href={lp(lang, r.href)} className="docs-related-link">
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
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
