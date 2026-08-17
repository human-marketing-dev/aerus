import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de cookies | Aerus',
  description:
    'Conoce qué cookies usa aerus.mx, para qué sirven y cómo puedes gestionarlas desde tu navegador.',
}

const SECTIONS = [
  { id: 'que-son',    label: '1. ¿Qué son las cookies?' },
  { id: 'tipos',      label: '2. Tipos de cookies que usamos' },
  { id: 'terceros',   label: '3. Cookies de terceros' },
  { id: 'gestion',    label: '4. Cómo gestionar las cookies' },
  { id: 'cambios',    label: '5. Cambios a esta política' },
]

type CookieRow = {
  nombre: string
  tipo: string
  duracion: string
  proposito: string
}

const COOKIES_PROPIAS: CookieRow[] = [
  {
    nombre: 'aerus_session',
    tipo: 'Estrictamente necesaria',
    duracion: 'Sesión',
    proposito: 'Mantiene la sesión activa durante la navegación y el proceso de reservación.',
  },
  {
    nombre: 'aerus_lang',
    tipo: 'Preferencias',
    duracion: '12 meses',
    proposito: 'Recuerda el idioma preferido del usuario.',
  },
  {
    nombre: 'aerus_cookie_consent',
    tipo: 'Estrictamente necesaria',
    duracion: '12 meses',
    proposito: 'Almacena la respuesta del usuario al banner de consentimiento de cookies.',
  },
]

const COOKIES_TERCEROS: CookieRow[] = [
  {
    nombre: '_ga, _ga_*',
    tipo: 'Analítica',
    duracion: '2 años / 13 meses',
    proposito: 'Google Analytics. Permite contar visitas y analizar el comportamiento de los usuarios de forma anonimizada.',
  },
  {
    nombre: '_fbp',
    tipo: 'Marketing',
    duracion: '3 meses',
    proposito: 'Meta Pixel (Facebook). Permite medir la efectividad de campañas publicitarias.',
  },
]

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div className="legal-cookie-table">
      <div className="legal-cookie-header">
        <span>Cookie</span>
        <span>Tipo</span>
        <span>Duración</span>
        <span>Propósito</span>
      </div>
      {rows.map(row => (
        <div key={row.nombre} className="legal-cookie-row">
          <span className="legal-cookie-name">{row.nombre}</span>
          <span>{row.tipo}</span>
          <span>{row.duracion}</span>
          <span>{row.proposito}</span>
        </div>
      ))}
    </div>
  )
}

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main>

        <section className="legal-hero">
          <div className="container">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Política de cookies</span>
            </nav>
            <h1 className="legal-titulo">Política de cookies</h1>
            <p className="legal-meta">
              Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">

              <article className="legal-content">

                <section id="que-son" className="legal-section">
                  <h2>1. ¿Qué son las cookies?</h2>
                  <p>Las cookies son pequeños archivos de texto que un sitio web deposita en el dispositivo del usuario cuando lo visita. Permiten que el sitio recuerde información entre visitas —como preferencias o el estado de una sesión— y son ampliamente utilizadas para hacer funcionar los sitios web o hacerlo de forma más eficiente, así como para proporcionar información a los propietarios del sitio.</p>
                  <p>El sitio aerus.mx utiliza cookies propias y de terceros para las finalidades descritas a continuación.</p>
                </section>

                <section id="tipos" className="legal-section">
                  <h2>2. Tipos de cookies que usamos</h2>

                  <h3>Cookies estrictamente necesarias</h3>
                  <p>Son imprescindibles para el funcionamiento básico del sitio. Sin ellas no es posible navegar correctamente ni completar una reservación. No requieren consentimiento del usuario.</p>

                  <h3>Cookies de preferencias</h3>
                  <p>Permiten recordar las elecciones del usuario (como el idioma) para ofrecer una experiencia más personalizada.</p>

                  <h3>Cookies analíticas</h3>
                  <p>Nos ayudan a entender cómo los visitantes interactúan con el sitio: páginas más visitadas, tiempo de permanencia, rutas de navegación. Los datos se recopilan de forma anonimizada o agregada.</p>

                  <h3>Cookies de marketing</h3>
                  <p>Se utilizan para medir la efectividad de campañas publicitarias y, en su caso, mostrar anuncios relevantes en otras plataformas.</p>

                  <p style={{ marginTop: 24, marginBottom: 12, fontWeight: 500 }}>Cookies propias de aerus.mx:</p>
                  <CookieTable rows={COOKIES_PROPIAS} />
                </section>

                <section id="terceros" className="legal-section">
                  <h2>3. Cookies de terceros</h2>
                  <p>Algunos servicios integrados en aerus.mx depositan sus propias cookies. Aerus no controla estas cookies; el uso que cada proveedor hace de los datos está sujeto a sus propias políticas de privacidad.</p>
                  <CookieTable rows={COOKIES_TERCEROS} />
                  <ul style={{ marginTop: 16 }}>
                    <li>Política de privacidad de Google Analytics: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                    <li>Política de datos de Meta: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
                  </ul>
                </section>

                <section id="gestion" className="legal-section">
                  <h2>4. Cómo gestionar las cookies</h2>
                  <p>Puede configurar su navegador para aceptar, rechazar o eliminar cookies en cualquier momento. Tenga en cuenta que rechazar cookies distintas a las estrictamente necesarias puede afectar algunas funcionalidades del sitio.</p>
                  <p>Instrucciones para los navegadores más comunes:</p>
                  <ul>
                    <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
                    <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio.</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web.</li>
                    <li><strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies y datos del sitio.</li>
                  </ul>
                  <p>Para revocar el consentimiento otorgado a cookies no esenciales, puede hacerlo desde el banner de cookies disponible en el pie de página del sitio o escribiendo a <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a>.</p>
                </section>

                <section id="cambios" className="legal-section">
                  <h2>5. Cambios a esta política</h2>
                  <p>Aerus puede actualizar esta Política de Cookies para reflejar cambios en las tecnologías utilizadas o en la normativa aplicable. Cualquier modificación será publicada en esta página con la fecha de actualización correspondiente. Se recomienda revisar esta política periódicamente.</p>
                </section>

              </article>

              <aside className="legal-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">Contenido</p>
                  <ul className="legal-toc">
                    {SECTIONS.map(s => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="legal-toc-link">{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">Otros documentos legales</p>
                  <ul className="docs-related-list">
                    {[
                      { label: 'Términos y condiciones',  href: '/legal/terminos-y-condiciones/' },
                      { label: 'Aviso de privacidad',     href: '/legal/aviso-de-privacidad/' },
                    ].map(r => (
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
      <Footer />
    </>
  )
}
