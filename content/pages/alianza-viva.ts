// Textos de la página "Alianza con Viva" (/rutas/alianza-viva).
// Se editan en Sanity (Páginas → Alianza con Viva); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/alianza-viva.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Hub = { destino: { nombre: string; iata: string; slug: string }; desc: string }

export type AlianzaVivaContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  howSub: string
  howTitle: string
  comoFunciona: { titulo: string; desc: string }[]
  hubsSub: string
  hubsTitle: string
  hubRoutesLabel: string
  hubs: Hub[]
  benefitsSub: string
  benefitsTitle: string
  beneficios: string[]
  helpTitle: string
  helpDesc: string
  helpCta: string
  helpHref: string
  aerusRoutes: string
}

const MTY = { nombre: 'Monterrey', iata: 'MTY', slug: 'monterrey' }
const CDMX = { nombre: 'CDMX', iata: 'NLU', slug: 'cdmx' }
const VSA = { nombre: 'Villahermosa', iata: 'VSA', slug: 'villahermosa' }

const es: AlianzaVivaContent = {
  seo: {
    metaTitle: 'Alianza con Viva | Aerus',
    metaDescription:
      'Combina tu vuelo regional Aerus con la red nacional e internacional de Viva. Más destinos, una sola experiencia.',
  },
  crumb: 'Alianza con Viva',
  eyebrow: 'Red ampliada',
  titleA: 'Alianza con ',
  titleAccent: 'Viva',
  intro:
    'Tu vuelo regional con Aerus conecta con la red nacional e internacional de Viva. Más destinos desde las ciudades que ya servimos.',
  howSub: 'El esquema',
  howTitle: 'Cómo funcionan las conexiones',
  comoFunciona: [
    { titulo: 'Reserva tu vuelo Aerus', desc: 'Selecciona tu ruta regional de origen y reserva tu vuelo con Aerus normalmente.' },
    { titulo: 'Conecta con Viva', desc: 'En el aeropuerto de conexión, continúa tu viaje con Viva hacia tu destino final.' },
    { titulo: 'Llega a más destinos', desc: 'La red combinada te da acceso a destinos nacionales e internacionales que Aerus no cubre directamente.' },
  ],
  hubsSub: 'Puntos de conexión',
  hubsTitle: 'Hubs donde conectas',
  hubRoutesLabel: 'Rutas Aerus que conectan aquí:',
  hubs: [
    { destino: MTY, desc: 'Hub principal del noreste. Desde MTY conectas con la red Viva hacia CDMX, Cancún, Los Cabos y más.' },
    { destino: CDMX, desc: 'Hub del centro del país. Desde el Aeropuerto Internacional Felipe Ángeles (AIFA) conectas con la red Viva hacia destinos nacionales e internacionales.' },
    { destino: VSA, desc: 'Hub del sureste. Desde VSA conectas con la red Viva hacia el centro y el norte del país.' },
  ],
  benefitsSub: 'Ventajas',
  benefitsTitle: 'Por qué usar la conexión',
  beneficios: [
    'Acceso a la red nacional e internacional de Viva desde tus rutas regionales Aerus.',
    'Conexiones coordinadas para minimizar el tiempo de escala.',
    'Una sola experiencia de servicio — el mismo estándar Aerus en la etapa regional.',
    'Ideal para viajeros del norte y sureste de México que necesitan conectar con los grandes hubs.',
  ],
  helpTitle: '¿Necesitas ayuda con tu conexión?',
  helpDesc: 'Nuestro equipo te orienta sobre la mejor combinación de vuelos para llegar a tu destino final.',
  helpCta: 'Contactar Aerus',
  helpHref: '/ayuda/contacto/',
  aerusRoutes: 'Rutas Aerus',
}

const en: AlianzaVivaContent = {
  seo: {
    metaTitle: 'Our alliance with Viva | Aerus',
    metaDescription:
      'Combine your Aerus regional flight with Viva’s domestic and international network. More destinations, one seamless experience.',
  },
  crumb: 'Viva alliance',
  eyebrow: 'Extended network',
  titleA: 'Our alliance with ',
  titleAccent: 'Viva',
  intro:
    'Your Aerus regional flight connects with Viva’s domestic and international network. More destinations from the cities we already serve.',
  howSub: 'How it works',
  howTitle: 'How connections work',
  comoFunciona: [
    { titulo: 'Book your Aerus flight', desc: 'Choose your regional departure route and book your Aerus flight as usual.' },
    { titulo: 'Connect with Viva', desc: 'At the connecting airport, continue your trip with Viva to your final destination.' },
    { titulo: 'Reach more destinations', desc: 'The combined network gives you access to domestic and international destinations that Aerus doesn’t serve directly.' },
  ],
  hubsSub: 'Connection points',
  hubsTitle: 'Where you connect',
  hubRoutesLabel: 'Aerus routes that connect here:',
  hubs: [
    { destino: MTY, desc: 'Main hub in the northeast. From MTY you connect with the Viva network to CDMX, Cancún, Los Cabos and more.' },
    { destino: CDMX, desc: 'Hub for central Mexico. From Felipe Ángeles International Airport (AIFA) you connect with the Viva network to domestic and international destinations.' },
    { destino: VSA, desc: 'Southeast hub. From VSA you connect with the Viva network to central and northern Mexico.' },
  ],
  benefitsSub: 'Benefits',
  benefitsTitle: 'Why connect with Viva',
  beneficios: [
    'Access to Viva’s domestic and international network from your Aerus regional routes.',
    'Coordinated connections to minimize layover time.',
    'One consistent service experience — the same Aerus standard on the regional leg.',
    'Ideal for travelers in northern and southeastern Mexico who need to connect with the major hubs.',
  ],
  helpTitle: 'Need help with your connection?',
  helpDesc: 'Our team can help you find the best flight combination to reach your final destination.',
  helpCta: 'Contact Aerus',
  helpHref: '/ayuda/contacto/',
  aerusRoutes: 'Aerus routes',
}

const defaults: PageDefaults<AlianzaVivaContent> = { es, en }
export default defaults
