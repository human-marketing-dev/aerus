// Textos de la página "Sala de prensa" (/nosotros/prensa).
// Se editan en Sanity (Páginas → Nosotros → Sala de prensa); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/prensa.ts.
//
// La lista de rutas activas sale de la red de rutas; en el fact sheet, {rutas} se reemplaza por
// cuántas rutas activas hay.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { IconName } from '@/components/icon-names'

export type PrensaContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleAccent: string
  intro: string
  factSub: string
  factTitle: string
  factSheet: { label: string; valor: string }[]
  rutasSub: string
  rutasTitle: string
  rutasNota: string
  kitSub: string
  kitTitle: string
  kitItems: { icono: IconName; titulo: string; desc: string; etiqueta: string }[]
  kitCallout: string
  contactTag: string
  contactTitle: string
  contactEmail: string
  contactPhone: string
  contactHours: string
  moreTitle: string
  moreLinks: { label: string; href: string }[]
}

const es: PrensaContent = {
  seo: {
    metaTitle: 'Sala de prensa | Aerus',
    metaDescription:
      'Kit de prensa, datos clave y contacto para medios de comunicación. Logotipos, información de flota y datos de la aerolínea regional Aerus.',
  },
  crumb: 'Sala de prensa',
  eyebrow: 'Nosotros',
  titleA: 'Sala de',
  titleAccent: 'prensa',
  intro:
    'Recursos para medios de comunicación: datos de la aerolínea, kit de marca y contacto directo con el equipo de comunicación.',
  factSub: 'Datos para medios',
  factTitle: 'Fact sheet Aerus',
  factSheet: [
    { label: 'Nombre comercial', valor: 'Aerus' },
    { label: 'Tipo de operación', valor: 'Aerolínea regional — aviación de turbohélice' },
    { label: 'Flota', valor: 'Cessna 208B Grand Caravan EX' },
    { label: 'Motor', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
    { label: 'Hélice', valor: 'McCauley 3 palas' },
    { label: 'Capacidad', valor: '12 pasajeros por vuelo' },
    { label: 'Velocidad crucero', valor: '185 nudos (343 km/h)' },
    { label: 'Techo de servicio', valor: '25,000 pies' },
    { label: 'Rutas directas', valor: '{rutas} rutas activas' },
    { label: 'Destinos', valor: '10+ destinos en México y frontera norte' },
    { label: 'Mantenimiento', valor: 'Centro MRO propio, aprobado DGAC, autorizado Pratt & Whitney Canada' },
    { label: 'Certificaciones MRO', valor: 'DGAC AMO · P&WC Authorized · Hartzell Certified · McCauley Service Center' },
  ],
  rutasSub: 'Red de rutas',
  rutasTitle: 'Rutas directas activas',
  rutasNota: 'Red en expansión. Consultar disponibilidad actual en',
  kitSub: 'Descargables',
  kitTitle: 'Kit de prensa',
  kitItems: [
    {
      icono: 'plane',
      titulo: 'Logotipos',
      desc: 'Versiones en SVG y PNG sobre fondo claro y oscuro. Incluye variante horizontal, ícono y combinación.',
      etiqueta: 'SVG · PNG',
    },
    {
      icono: 'shield',
      titulo: 'Paleta y tipografía',
      desc: 'Colores oficiales con valores HEX, RGB y CMYK. Tipografía Space Grotesk con guías de uso.',
      etiqueta: 'PDF · ASE',
    },
    {
      icono: 'camera',
      titulo: 'Fotografía de flota',
      desc: 'Imágenes en alta resolución del Cessna Grand Caravan EX — exterior, cabina y operación en rampa.',
      etiqueta: 'JPG · 300 dpi',
    },
    {
      icono: 'globe',
      titulo: 'Mapa de rutas',
      desc: 'Infografía actualizada con la red de rutas Aerus en formato editable y listo para publicación.',
      etiqueta: 'SVG · PDF',
    },
  ],
  kitCallout: 'Para solicitar el kit completo o material adicional escríbenos a',
  contactTag: 'Contacto de medios',
  contactTitle: 'Comunicación Aerus',
  contactEmail: 'prensa@aerus.mx',
  contactPhone: '+52 812 682 3501',
  contactHours: 'Lunes a viernes · 09:00 – 18:00 h (CST)',
  moreTitle: 'Más sobre Aerus',
  moreLinks: [
    { label: 'Quiénes somos', href: '/nosotros/' },
    { label: 'La flota', href: '/experiencia/flota/' },
    { label: 'Red de rutas', href: '/rutas/' },
    { label: 'MRO — Mantenimiento', href: '/mro/' },
  ],
}

const en: PrensaContent = {
  seo: {
    metaTitle: 'Press Room | Aerus',
    metaDescription:
      'Press kit, key facts and media contact. Logos, fleet information and facts about Aerus, Mexico’s regional airline.',
  },
  crumb: 'Press room',
  eyebrow: 'About us',
  titleA: 'Press',
  titleAccent: 'room',
  intro:
    'Resources for the media: airline facts, brand kit and direct contact with our communications team.',
  factSub: 'Media facts',
  factTitle: 'Aerus fact sheet',
  factSheet: [
    { label: 'Trade name', valor: 'Aerus' },
    { label: 'Type of operation', valor: 'Regional airline — turboprop aviation' },
    { label: 'Fleet', valor: 'Cessna 208B Grand Caravan EX' },
    { label: 'Engine', valor: 'Pratt & Whitney Canada PT6A-114A (675 SHP)' },
    { label: 'Propeller', valor: 'McCauley 3-blade' },
    { label: 'Capacity', valor: '12 passengers per flight' },
    { label: 'Cruise speed', valor: '185 knots (343 km/h)' },
    { label: 'Service ceiling', valor: '25,000 ft' },
    { label: 'Direct routes', valor: '{rutas} active routes' },
    { label: 'Destinations', valor: '10+ destinations in Mexico and along the northern border' },
    { label: 'Maintenance', valor: 'In-house MRO center, DGAC-approved, Pratt & Whitney Canada authorized' },
    { label: 'MRO certifications', valor: 'DGAC AMO · P&WC Authorized · Hartzell Certified · McCauley Service Center' },
  ],
  rutasSub: 'Route network',
  rutasTitle: 'Active direct routes',
  rutasNota: 'Our network is growing. Check current availability at',
  kitSub: 'Downloads',
  kitTitle: 'Press kit',
  kitItems: [
    {
      icono: 'plane',
      titulo: 'Logos',
      desc: 'SVG and PNG versions for light and dark backgrounds. Includes horizontal, icon and combined lockups.',
      etiqueta: 'SVG · PNG',
    },
    {
      icono: 'shield',
      titulo: 'Color palette and typography',
      desc: 'Official colors with HEX, RGB and CMYK values. Space Grotesk typeface with usage guidelines.',
      etiqueta: 'PDF · ASE',
    },
    {
      icono: 'camera',
      titulo: 'Fleet photography',
      desc: 'High-resolution images of the Cessna Grand Caravan EX — exterior, cabin and ramp operations.',
      etiqueta: 'JPG · 300 dpi',
    },
    {
      icono: 'globe',
      titulo: 'Route map',
      desc: 'Up-to-date infographic of the Aerus route network, editable and ready for publication.',
      etiqueta: 'SVG · PDF',
    },
  ],
  kitCallout: 'To request the full kit or additional materials, email us at',
  contactTag: 'Media contact',
  contactTitle: 'Aerus Communications',
  contactEmail: 'prensa@aerus.mx',
  contactPhone: '+52 812 682 3501',
  contactHours: 'Monday to Friday · 9:00 a.m. – 6:00 p.m. (CST)',
  moreTitle: 'More about Aerus',
  moreLinks: [
    { label: 'About us', href: '/nosotros/' },
    { label: 'Our fleet', href: '/experiencia/flota/' },
    { label: 'Route network', href: '/rutas/' },
    { label: 'MRO — Maintenance', href: '/mro/' },
  ],
}

const defaults: PageDefaults<PrensaContent> = { es, en }
export default defaults
