import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/legal/cookies/'

type CookieRow = {
  nombre: string
  tipo: string
  duracion: string
  proposito: string
}

const T = {
  es: {
    metaTitle: 'Política de cookies | Aerus',
    metaDescription:
      'Conoce qué cookies usa aerus.mx, para qué sirven y cómo puedes gestionarlas desde tu navegador.',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    title: 'Política de cookies',
    meta: 'Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025',
    sections: [
      { id: 'que-son',    label: '1. ¿Qué son las cookies?' },
      { id: 'tipos',      label: '2. Tipos de cookies que usamos' },
      { id: 'terceros',   label: '3. Cookies de terceros' },
      { id: 'gestion',    label: '4. Cómo gestionar las cookies' },
      { id: 'cambios',    label: '5. Cambios a esta política' },
    ],
    tableHeader: { cookie: 'Cookie', tipo: 'Tipo', duracion: 'Duración', proposito: 'Propósito' },
    cookiesPropias: [
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
    ] as CookieRow[],
    cookiesTerceros: [
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
    ] as CookieRow[],
    tocTitle: 'Contenido',
    otherTitle: 'Otros documentos legales',
    otherDocs: [
      { label: 'Términos y condiciones',  href: '/legal/terminos-y-condiciones/' },
      { label: 'Aviso de privacidad',     href: '/legal/aviso-de-privacidad/' },
    ],
  },
  en: {
    metaTitle: 'Cookie Policy | Aerus',
    metaDescription:
      'Learn which cookies aerus.mx uses, what they are for and how you can manage them from your browser.',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    title: 'Cookie Policy',
    meta: 'Aerotransportes Rafilher, S.A. de C.V. · Last updated: August 2025',
    sections: [
      { id: 'que-son',    label: '1. What are cookies?' },
      { id: 'tipos',      label: '2. Types of cookies we use' },
      { id: 'terceros',   label: '3. Third-party cookies' },
      { id: 'gestion',    label: '4. How to manage cookies' },
      { id: 'cambios',    label: '5. Changes to this policy' },
    ],
    tableHeader: { cookie: 'Cookie', tipo: 'Type', duracion: 'Duration', proposito: 'Purpose' },
    cookiesPropias: [
      {
        nombre: 'aerus_session',
        tipo: 'Strictly necessary',
        duracion: 'Session',
        proposito: 'Keeps the session active while browsing and during the booking process.',
      },
      {
        nombre: 'aerus_lang',
        tipo: 'Preferences',
        duracion: '12 months',
        proposito: 'Remembers the user’s preferred language.',
      },
      {
        nombre: 'aerus_cookie_consent',
        tipo: 'Strictly necessary',
        duracion: '12 months',
        proposito: 'Stores the user’s response to the cookie consent banner.',
      },
    ] as CookieRow[],
    cookiesTerceros: [
      {
        nombre: '_ga, _ga_*',
        tipo: 'Analytics',
        duracion: '2 years / 13 months',
        proposito: 'Google Analytics. Counts visits and analyzes user behavior in anonymized form.',
      },
      {
        nombre: '_fbp',
        tipo: 'Marketing',
        duracion: '3 months',
        proposito: 'Meta Pixel (Facebook). Measures the effectiveness of advertising campaigns.',
      },
    ] as CookieRow[],
    tocTitle: 'Contents',
    otherTitle: 'Other legal documents',
    otherDocs: [
      { label: 'Terms and conditions',  href: '/legal/terminos-y-condiciones/' },
      { label: 'Privacy notice',        href: '/legal/aviso-de-privacidad/' },
    ],
  },
}

function CookieTable({ rows, lang }: { rows: CookieRow[]; lang: Lang }) {
  const h = T[lang].tableHeader
  return (
    <div className="legal-cookie-table">
      <div className="legal-cookie-header">
        <span>{h.cookie}</span>
        <span>{h.tipo}</span>
        <span>{h.duracion}</span>
        <span>{h.proposito}</span>
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

function BodyEs({ lang }: { lang: Lang }) {
  const COOKIES_PROPIAS = T[lang].cookiesPropias
  const COOKIES_TERCEROS = T[lang].cookiesTerceros
  return (
    <>
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
        <CookieTable rows={COOKIES_PROPIAS} lang={lang} />
      </section>

      <section id="terceros" className="legal-section">
        <h2>3. Cookies de terceros</h2>
        <p>Algunos servicios integrados en aerus.mx depositan sus propias cookies. Aerus no controla estas cookies; el uso que cada proveedor hace de los datos está sujeto a sus propias políticas de privacidad.</p>
        <CookieTable rows={COOKIES_TERCEROS} lang={lang} />
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
    </>
  )
}

function BodyEn({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <>
      <div className="docs-callout" style={{ marginTop: 0, marginBottom: 32 }}>
        <p>This English translation is provided for convenience only. In case of discrepancy, the Spanish version prevails.</p>
      </div>

      <section id="que-son" className="legal-section">
        <h2>1. What are cookies?</h2>
        <p>Cookies are small text files that a website places on the user’s device when the user visits it. They allow the website to remember information between visits —such as preferences or the state of a session— and are widely used to make websites work, or work more efficiently, as well as to provide information to the website’s owners.</p>
        <p>The aerus.mx website uses its own cookies and third-party cookies for the purposes described below.</p>
      </section>

      <section id="tipos" className="legal-section">
        <h2>2. Types of cookies we use</h2>

        <h3>Strictly necessary cookies</h3>
        <p>These are essential for the basic operation of the website. Without them it is not possible to browse properly or complete a reservation. They do not require the user’s consent.</p>

        <h3>Preference cookies</h3>
        <p>These allow the website to remember the user’s choices (such as language) in order to offer a more personalized experience.</p>

        <h3>Analytics cookies</h3>
        <p>These help us understand how visitors interact with the website: most visited pages, time spent on the site and navigation paths. The data is collected in anonymized or aggregated form.</p>

        <h3>Marketing cookies</h3>
        <p>These are used to measure the effectiveness of advertising campaigns and, where applicable, to display relevant ads on other platforms.</p>

        <p style={{ marginTop: 24, marginBottom: 12, fontWeight: 500 }}>First-party cookies on aerus.mx:</p>
        <CookieTable rows={t.cookiesPropias} lang={lang} />
      </section>

      <section id="terceros" className="legal-section">
        <h2>3. Third-party cookies</h2>
        <p>Some services integrated into aerus.mx place their own cookies. Aerus does not control these cookies; each provider’s use of the data is subject to its own privacy policy.</p>
        <CookieTable rows={t.cookiesTerceros} lang={lang} />
        <ul style={{ marginTop: 16 }}>
          <li>Google Analytics privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
          <li>Meta data policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
        </ul>
      </section>

      <section id="gestion" className="legal-section">
        <h2>4. How to manage cookies</h2>
        <p>You can set your browser to accept, reject or delete cookies at any time. Please note that rejecting cookies other than strictly necessary ones may affect some features of the website.</p>
        <p>Instructions for the most common browsers:</p>
        <ul>
          <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data.</li>
          <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
          <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data.</li>
        </ul>
        <p>To withdraw the consent given for non-essential cookies, you can do so from the cookie banner available in the website footer or by writing to <a href="mailto:privacidad@aerus.mx">privacidad@aerus.mx</a>.</p>
      </section>

      <section id="cambios" className="legal-section">
        <h2>5. Changes to this policy</h2>
        <p>Aerus may update this Cookie Policy to reflect changes in the technologies used or in applicable regulations. Any changes will be published on this page with the corresponding update date. We recommend that you review this policy periodically.</p>
      </section>
    </>
  )
}

const BODY = { es: BodyEs, en: BodyEn }

export async function generateMetadata({ params }: PageProps<'/[lang]/legal/cookies'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

export default async function CookiesPage({ params }: PageProps<'/[lang]/legal/cookies'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const Body = BODY[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="legal-hero">
          <div className="container">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{t.title}</span>
            </nav>
            <h1 className="legal-titulo">{t.title}</h1>
            <p className="legal-meta">
              {t.meta}
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">

              <article className="legal-content">
                <Body lang={lang} />
              </article>

              <aside className="legal-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">{t.tocTitle}</p>
                  <ul className="legal-toc">
                    {t.sections.map(s => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="legal-toc-link">{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="docs-sidebar-card" style={{ marginTop: 16 }}>
                  <p className="docs-sidebar-card-title">{t.otherTitle}</p>
                  <ul className="docs-related-list">
                    {t.otherDocs.map(r => (
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
