// Textos de la página "MRO · Inicio" (/mro).
// Se editan en Sanity (Páginas → MRO · Inicio); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/mro.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

/** Enlace de las listas "Otros servicios MRO" de la barra lateral. */
export type EnlaceMro = { label: string; href: string }
/** Elemento con título y descripción (servicios, sistemas, alcance…). */
export type ItemMro = { titulo: string; descripcion: string }

type Servicio = { icono: string; titulo: string; descripcion: string; href: string }

export type MroContent = {
  seo: PageSeo
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  verMas: string
  servicios: Servicio[]
  credsLabel: string
  creds: string[]
}

const es: MroContent = {
  seo: {
    metaTitle: 'MRO — Mantenimiento aeronáutico | Aerus',
    metaDescription:
      'Centro de mantenimiento aeronáutico Aerus. Especialistas en motores PT6A, hélices McCauley y Hartzell, aviónica y accesorios de aeronaves turbohélice. Aprobado DGAC.',
  },
  eyebrow: 'Aerus MRO',
  titlePre: 'Mantenimiento ',
  titleAccent: 'aeronáutico',
  intro:
    'Centro autorizado DGAC especializado en aeronaves turbohélice. Motores PT6A, hélices, aviónica y sistemas completos — mantenemos lo que vuela.',
  verMas: 'Ver más',
  servicios: [
    {
      icono: 'shield',
      titulo: 'Capacidades y certificaciones',
      descripcion: 'Nuestras aprobaciones DGAC, tipos de aeronave admitidos y el alcance completo de nuestro taller.',
      href: '/mro/capacidades/',
    },
    {
      icono: 'plane',
      titulo: 'Motores PT6A',
      descripcion: 'Inspección, mantenimiento y overhaul de motores Pratt & Whitney Canada serie PT6A.',
      href: '/mro/motores-pt6a/',
    },
    {
      icono: 'swap',
      titulo: 'Hélices',
      descripcion: 'Balanceo, inspección y overhaul de hélices McCauley y Hartzell.',
      href: '/mro/helices/',
    },
    {
      icono: 'check',
      titulo: 'Accesorios y planeadores',
      descripcion: 'Mantenimiento de accesorios de aeronave y servicio especializado en planeadores Cessna.',
      href: '/mro/accesorios-planeadores/',
    },
    {
      icono: 'wifi',
      titulo: 'Radios e instrumentos',
      descripcion: 'Aviónica, radios, GPS y mantenimiento de instrumentos de vuelo.',
      href: '/mro/radios-instrumentos/',
    },
    {
      icono: 'mail',
      titulo: 'Solicitar cotización',
      descripcion: 'Cuéntanos tu necesidad de mantenimiento y te preparamos una propuesta en 24 horas.',
      href: '/mro/cotizacion/',
    },
  ],
  credsLabel: 'Aprobaciones',
  // En la página se muestran con "✦ " delante
  creds: [
    'DGAC AMO Aprobado',
    'Pratt & Whitney Canada Authorized',
    'Hartzell Propeller Certified',
    'McCauley Service Center',
  ],
}

const en: MroContent = {
  seo: {
    metaTitle: 'MRO — Aircraft Maintenance | Aerus',
    metaDescription:
      'Aerus aircraft maintenance center. Specialists in PT6A engines, McCauley and Hartzell propellers, avionics and turboprop aircraft accessories. DGAC approved.',
  },
  eyebrow: 'Aerus MRO',
  titlePre: 'Aircraft ',
  titleAccent: 'maintenance',
  intro:
    'A DGAC-approved repair station specializing in turboprop aircraft. PT6A engines, propellers, avionics and complete systems — we maintain what flies.',
  verMas: 'Learn more',
  servicios: [
    {
      icono: 'shield',
      titulo: 'Capabilities & certifications',
      descripcion: 'Our DGAC approvals, supported aircraft types and the full scope of our shop.',
      href: '/mro/capacidades/',
    },
    {
      icono: 'plane',
      titulo: 'PT6A engines',
      descripcion: 'Inspection, maintenance and overhaul of Pratt & Whitney Canada PT6A-series engines.',
      href: '/mro/motores-pt6a/',
    },
    {
      icono: 'swap',
      titulo: 'Propellers',
      descripcion: 'Balancing, inspection and overhaul of McCauley and Hartzell propellers.',
      href: '/mro/helices/',
    },
    {
      icono: 'check',
      titulo: 'Accessories & gliders',
      descripcion: 'Aircraft accessory maintenance and specialized service for Cessna gliders.',
      href: '/mro/accesorios-planeadores/',
    },
    {
      icono: 'wifi',
      titulo: 'Radios & instruments',
      descripcion: 'Avionics, radios, GPS and flight instrument maintenance.',
      href: '/mro/radios-instrumentos/',
    },
    {
      icono: 'mail',
      titulo: 'Request a quote',
      descripcion: 'Tell us what maintenance you need and we will prepare a proposal within 24 hours.',
      href: '/mro/cotizacion/',
    },
  ],
  credsLabel: 'Approvals',
  creds: [
    'DGAC Approved AMO',
    'Pratt & Whitney Canada Authorized',
    'Hartzell Propeller Certified',
    'McCauley Service Center',
  ],
}

const defaults: PageDefaults<MroContent> = { es, en }
export default defaults
