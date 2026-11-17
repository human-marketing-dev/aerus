// Textos de la página "Política de cookies" (/legal/cookies).
// Se editan en Sanity (Páginas → Legales → Política de cookies); esto es el respaldo y la fuente
// de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/cookies.ts.
//
// Cada sección puede llevar, después de su cuerpo, una tabla de cookies (con un título opcional
// encima) y más texto debajo de la tabla (`cuerpoFinal`). Si `cookies` está vacía no hay tabla.
import type { PageDefaults } from '@/lib/content'
import { h3, p, rt, ul, type PTBlock } from '@/content/richtext'
import { AVISO_TRADUCCION_EN, type LegalBase, type SeccionLegal } from './_legal'

export type CookieRow = {
  nombre: string
  tipo: string
  duracion: string
  proposito: string
}

export type SeccionCookies = SeccionLegal & {
  tablaTitulo?: string
  cookies?: CookieRow[]
  cuerpoFinal?: PTBlock[]
}

export type CookiesContent = LegalBase<SeccionCookies> & {
  tableHeader: { cookie: string; tipo: string; duracion: string; proposito: string }
}

const sinTabla = { tablaTitulo: '', cookies: [] as CookieRow[], cuerpoFinal: [] as PTBlock[] }

const es: CookiesContent = {
  seo: {
    metaTitle: 'Política de cookies | Aerus',
    metaDescription:
      'Conoce qué cookies usa aerus.mx, para qué sirven y cómo puedes gestionarlas desde tu navegador.',
  },
  title: 'Política de cookies',
  meta: 'Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025',
  avisoTraduccion: '',
  tableHeader: { cookie: 'Cookie', tipo: 'Tipo', duracion: 'Duración', proposito: 'Propósito' },
  secciones: [
    {
      ancla: 'que-son',
      indice: '1. ¿Qué son las cookies?',
      titulo: '1. ¿Qué son las cookies?',
      cuerpo: rt(
        p('Las cookies son pequeños archivos de texto que un sitio web deposita en el dispositivo del usuario cuando lo visita. Permiten que el sitio recuerde información entre visitas —como preferencias o el estado de una sesión— y son ampliamente utilizadas para hacer funcionar los sitios web o hacerlo de forma más eficiente, así como para proporcionar información a los propietarios del sitio.'),
        p('El sitio aerus.mx utiliza cookies propias y de terceros para las finalidades descritas a continuación.'),
      ),
      ...sinTabla,
    },
    {
      ancla: 'tipos',
      indice: '2. Tipos de cookies que usamos',
      titulo: '2. Tipos de cookies que usamos',
      cuerpo: rt(
        h3('Cookies estrictamente necesarias'),
        p('Son imprescindibles para el funcionamiento básico del sitio. Sin ellas no es posible navegar correctamente ni completar una reservación. No requieren consentimiento del usuario.'),
        h3('Cookies de preferencias'),
        p('Permiten recordar las elecciones del usuario (como el idioma) para ofrecer una experiencia más personalizada.'),
        h3('Cookies analíticas'),
        p('Nos ayudan a entender cómo los visitantes interactúan con el sitio: páginas más visitadas, tiempo de permanencia, rutas de navegación. Los datos se recopilan de forma anonimizada o agregada.'),
        h3('Cookies de marketing'),
        p('Se utilizan para medir la efectividad de campañas publicitarias y, en su caso, mostrar anuncios relevantes en otras plataformas.'),
      ),
      tablaTitulo: 'Cookies propias de aerus.mx:',
      cookies: [
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
      ],
      cuerpoFinal: [],
    },
    {
      ancla: 'terceros',
      indice: '3. Cookies de terceros',
      titulo: '3. Cookies de terceros',
      cuerpo: rt(
        p('Algunos servicios integrados en aerus.mx depositan sus propias cookies. Aerus no controla estas cookies; el uso que cada proveedor hace de los datos está sujeto a sus propias políticas de privacidad.'),
      ),
      tablaTitulo: '',
      cookies: [
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
      ],
      cuerpoFinal: rt(
        ul(
          'Política de privacidad de Google Analytics: [policies.google.com/privacy](https://policies.google.com/privacy)',
          'Política de datos de Meta: [facebook.com/privacy/policy](https://www.facebook.com/privacy/policy)',
        ),
      ),
    },
    {
      ancla: 'gestion',
      indice: '4. Cómo gestionar las cookies',
      titulo: '4. Cómo gestionar las cookies',
      cuerpo: rt(
        p('Puede configurar su navegador para aceptar, rechazar o eliminar cookies en cualquier momento. Tenga en cuenta que rechazar cookies distintas a las estrictamente necesarias puede afectar algunas funcionalidades del sitio.'),
        p('Instrucciones para los navegadores más comunes:'),
        ul(
          '**Google Chrome:** Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.',
          '**Mozilla Firefox:** Opciones → Privacidad y seguridad → Cookies y datos del sitio.',
          '**Safari:** Preferencias → Privacidad → Gestionar datos del sitio web.',
          '**Microsoft Edge:** Configuración → Cookies y permisos del sitio → Cookies y datos del sitio.',
        ),
        p('Para revocar el consentimiento otorgado a cookies no esenciales, puede hacerlo desde el banner de cookies disponible en el pie de página del sitio o escribiendo a [privacidad@aerus.mx](mailto:privacidad@aerus.mx).'),
      ),
      ...sinTabla,
    },
    {
      ancla: 'cambios',
      indice: '5. Cambios a esta política',
      titulo: '5. Cambios a esta política',
      cuerpo: rt(
        p('Aerus puede actualizar esta Política de Cookies para reflejar cambios en las tecnologías utilizadas o en la normativa aplicable. Cualquier modificación será publicada en esta página con la fecha de actualización correspondiente. Se recomienda revisar esta política periódicamente.'),
      ),
      ...sinTabla,
    },
  ],
  tocTitle: 'Contenido',
  otherTitle: 'Otros documentos legales',
  otherDocs: [
    { label: 'Términos y condiciones', href: '/legal/terminos-y-condiciones/' },
    { label: 'Aviso de privacidad', href: '/legal/aviso-de-privacidad/' },
  ],
}

const en: CookiesContent = {
  seo: {
    metaTitle: 'Cookie Policy | Aerus',
    metaDescription:
      'Learn which cookies aerus.mx uses, what they are for and how you can manage them from your browser.',
  },
  title: 'Cookie Policy',
  meta: 'Aerotransportes Rafilher, S.A. de C.V. · Last updated: August 2025',
  avisoTraduccion: AVISO_TRADUCCION_EN,
  tableHeader: { cookie: 'Cookie', tipo: 'Type', duracion: 'Duration', proposito: 'Purpose' },
  secciones: [
    {
      ancla: 'que-son',
      indice: '1. What are cookies?',
      titulo: '1. What are cookies?',
      cuerpo: rt(
        p('Cookies are small text files that a website places on the user’s device when the user visits it. They allow the website to remember information between visits —such as preferences or the state of a session— and are widely used to make websites work, or work more efficiently, as well as to provide information to the website’s owners.'),
        p('The aerus.mx website uses its own cookies and third-party cookies for the purposes described below.'),
      ),
      ...sinTabla,
    },
    {
      ancla: 'tipos',
      indice: '2. Types of cookies we use',
      titulo: '2. Types of cookies we use',
      cuerpo: rt(
        h3('Strictly necessary cookies'),
        p('These are essential for the basic operation of the website. Without them it is not possible to browse properly or complete a reservation. They do not require the user’s consent.'),
        h3('Preference cookies'),
        p('These allow the website to remember the user’s choices (such as language) in order to offer a more personalized experience.'),
        h3('Analytics cookies'),
        p('These help us understand how visitors interact with the website: most visited pages, time spent on the site and navigation paths. The data is collected in anonymized or aggregated form.'),
        h3('Marketing cookies'),
        p('These are used to measure the effectiveness of advertising campaigns and, where applicable, to display relevant ads on other platforms.'),
      ),
      tablaTitulo: 'First-party cookies on aerus.mx:',
      cookies: [
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
      ],
      cuerpoFinal: [],
    },
    {
      ancla: 'terceros',
      indice: '3. Third-party cookies',
      titulo: '3. Third-party cookies',
      cuerpo: rt(
        p('Some services integrated into aerus.mx place their own cookies. Aerus does not control these cookies; each provider’s use of the data is subject to its own privacy policy.'),
      ),
      tablaTitulo: '',
      cookies: [
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
      ],
      cuerpoFinal: rt(
        ul(
          'Google Analytics privacy policy: [policies.google.com/privacy](https://policies.google.com/privacy)',
          'Meta data policy: [facebook.com/privacy/policy](https://www.facebook.com/privacy/policy)',
        ),
      ),
    },
    {
      ancla: 'gestion',
      indice: '4. How to manage cookies',
      titulo: '4. How to manage cookies',
      cuerpo: rt(
        p('You can set your browser to accept, reject or delete cookies at any time. Please note that rejecting cookies other than strictly necessary ones may affect some features of the website.'),
        p('Instructions for the most common browsers:'),
        ul(
          '**Google Chrome:** Settings → Privacy and security → Cookies and other site data.',
          '**Mozilla Firefox:** Settings → Privacy & Security → Cookies and Site Data.',
          '**Safari:** Preferences → Privacy → Manage Website Data.',
          '**Microsoft Edge:** Settings → Cookies and site permissions → Cookies and site data.',
        ),
        p('To withdraw the consent given for non-essential cookies, you can do so from the cookie banner available in the website footer or by writing to [privacidad@aerus.mx](mailto:privacidad@aerus.mx).'),
      ),
      ...sinTabla,
    },
    {
      ancla: 'cambios',
      indice: '5. Changes to this policy',
      titulo: '5. Changes to this policy',
      cuerpo: rt(
        p('Aerus may update this Cookie Policy to reflect changes in the technologies used or in applicable regulations. Any changes will be published on this page with the corresponding update date. We recommend that you review this policy periodically.'),
      ),
      ...sinTabla,
    },
  ],
  tocTitle: 'Contents',
  otherTitle: 'Other legal documents',
  otherDocs: [
    { label: 'Terms and conditions', href: '/legal/terminos-y-condiciones/' },
    { label: 'Privacy notice', href: '/legal/aviso-de-privacidad/' },
  ],
}

const defaults: PageDefaults<CookiesContent> = { es, en }
export default defaults
