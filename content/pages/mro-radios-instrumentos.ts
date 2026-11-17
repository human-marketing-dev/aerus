// Textos de la página "MRO · Radios e instrumentos" (/mro/radios-instrumentos).
// Se editan en Sanity (Páginas → MRO · Radios e instrumentos); esto es el respaldo y la fuente
// de la carga inicial. Mismas claves que sanity/schemaTypes/pages/mro-radios-instrumentos.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'
import type { EnlaceMro, ItemMro } from './mro'

export type MroRadiosContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titlePre: string
  titleAccent: string
  intro: string
  serviciosSubtitle: string
  serviciosTitle: string
  servicios: ItemMro[]
  marcasSubtitle: string
  marcasTitle: string
  marcas: string[]
  marcasCallout: string
  otrosTitle: string
  otros: EnlaceMro[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: MroRadiosContent = {
  seo: {
    metaTitle: 'Radios e instrumentos | Aerus MRO',
    metaDescription:
      'Mantenimiento, instalación y calibración de aviónica, radios y sistemas de navegación. Aerus MRO: taller de instrumentos aprobado DGAC.',
  },
  crumb: 'Radios e instrumentos',
  eyebrow: 'Aerus MRO',
  titlePre: 'Radios e ',
  titleAccent: 'instrumentos',
  intro:
    'Aviónica moderna mantenida con estándares de fábrica. Navegación, comunicaciones, transpondedor ADS-B, piloto automático e instrumentos de vuelo.',
  serviciosSubtitle: 'Aviónica y navegación',
  serviciosTitle: 'Servicios',
  servicios: [
    {
      titulo: 'Radios VHF / COM',
      descripcion:
        'Mantenimiento, diagnóstico y sustitución de radios COM VHF. Verificación de frecuencias, modulación y potencia de salida conforme a los estándares ICAO Annex 10.',
    },
    {
      titulo: 'Sistemas de navegación VOR / ILS / GPS',
      descripcion:
        'Calibración y mantenimiento de receptores VOR/LOC/GS e ILS. Instalación y actualización de bases de datos de navegadores GPS (Garmin, Avidyne). Verificación de precisión conforme a los manuales del fabricante.',
    },
    {
      titulo: 'Transpondedor ADS-B',
      descripcion:
        'Inspección, prueba de bianuales (prueba de altímetro y transpondedor requerida por DGAC) e instalación de equipos ADS-B Out para cumplimiento reglamentario.',
    },
    {
      titulo: 'Instrumentos de vuelo',
      descripcion:
        'Mantenimiento y calibración de altímetros, variómetros, velocímetros y horizontes artificiales. Verificación de instrumentos pitot-estáticos conforme a los requerimientos de aeronavegabilidad.',
    },
    {
      titulo: 'Piloto automático',
      descripcion:
        'Inspección, diagnóstico y ajuste de sistemas de piloto automático (S-TEC, Garmin GFC). Revisión de servos, engagement y desconexión de emergencia.',
    },
    {
      titulo: 'Sistema de audio e intercomunicador',
      descripcion:
        'Mantenimiento de paneles de audio (Garmin GMA, PS Engineering), intercomunicadores y sistema de cabina. Prueba de integración con radios COM.',
    },
  ],
  marcasSubtitle: 'Equipos admitidos',
  marcasTitle: 'Marcas que atendemos',
  marcas: [
    'Garmin (G1000, GTN, GTR, GNS series)',
    'Avidyne (IFD, EX series)',
    'S-TEC (piloto automático)',
    'BendixKing (KX, KI, KN series)',
    'Honeywell / AlliedSignal (instrumentos)',
    'Shadin / PS Engineering (audio, datos de motor)',
  ],
  marcasCallout:
    'Para instalaciones nuevas o modificaciones de aviónica se requiere aprobación previa de ingeniería. Contáctanos con el modelo de equipo y tipo de aeronave para verificar viabilidad.',
  otrosTitle: 'Otros servicios MRO',
  otros: [
    { label: 'Capacidades y certificaciones', href: '/mro/capacidades/' },
    { label: 'Motores PT6A', href: '/mro/motores-pt6a/' },
    { label: 'Hélices', href: '/mro/helices/' },
    { label: 'Accesorios y planeadores', href: '/mro/accesorios-planeadores/' },
  ],
  ctaTitle: '¿Necesitas servicio de aviónica?',
  ctaDesc: 'Comparte marca, modelo de equipo y tipo de aeronave para iniciar la cotización.',
  ctaButton: 'Solicitar cotización',
  ctaHref: '/mro/cotizacion/',
}

const en: MroRadiosContent = {
  seo: {
    metaTitle: 'Radios & Instruments | Aerus MRO',
    metaDescription:
      'Avionics, radio and navigation system maintenance, installation and calibration. Aerus MRO: DGAC-approved instrument shop.',
  },
  crumb: 'Radios & instruments',
  eyebrow: 'Aerus MRO',
  titlePre: 'Radios & ',
  titleAccent: 'instruments',
  intro:
    'Modern avionics maintained to factory standards. Navigation, communications, ADS-B transponders, autopilots and flight instruments.',
  serviciosSubtitle: 'Avionics & navigation',
  serviciosTitle: 'Services',
  servicios: [
    {
      titulo: 'VHF / COM radios',
      descripcion:
        'Maintenance, troubleshooting and replacement of VHF COM radios. Frequency, modulation and output power checks per ICAO Annex 10 standards.',
    },
    {
      titulo: 'VOR / ILS / GPS navigation systems',
      descripcion:
        'Calibration and maintenance of VOR/LOC/GS and ILS receivers. Installation and database updates for GPS navigators (Garmin, Avidyne). Accuracy checks per the manufacturer’s manuals.',
    },
    {
      titulo: 'ADS-B transponders',
      descripcion:
        'Inspection, biennial altimeter and transponder checks (required by DGAC) and ADS-B Out installations for regulatory compliance.',
    },
    {
      titulo: 'Flight instruments',
      descripcion:
        'Maintenance and calibration of altimeters, vertical speed indicators, airspeed indicators and attitude indicators. Pitot-static system checks per airworthiness requirements.',
    },
    {
      titulo: 'Autopilot',
      descripcion:
        'Inspection, troubleshooting and adjustment of autopilot systems (S-TEC, Garmin GFC). Servo checks, engagement and emergency disconnect testing.',
    },
    {
      titulo: 'Audio and intercom systems',
      descripcion:
        'Maintenance of audio panels (Garmin GMA, PS Engineering), intercoms and cabin systems. Integration testing with COM radios.',
    },
  ],
  marcasSubtitle: 'Supported equipment',
  marcasTitle: 'Brands we service',
  marcas: [
    'Garmin (G1000, GTN, GTR, GNS series)',
    'Avidyne (IFD, EX series)',
    'S-TEC (autopilots)',
    'BendixKing (KX, KI, KN series)',
    'Honeywell / AlliedSignal (instruments)',
    'Shadin / PS Engineering (audio, engine data)',
  ],
  marcasCallout:
    'New avionics installations or modifications require prior engineering approval. Contact us with the equipment model and aircraft type to confirm feasibility.',
  otrosTitle: 'Other MRO services',
  otros: [
    { label: 'Capabilities & certifications', href: '/mro/capacidades/' },
    { label: 'PT6A engines', href: '/mro/motores-pt6a/' },
    { label: 'Propellers', href: '/mro/helices/' },
    { label: 'Accessories & gliders', href: '/mro/accesorios-planeadores/' },
  ],
  ctaTitle: 'Need avionics service?',
  ctaDesc: 'Share the brand, equipment model and aircraft type to start your quote.',
  ctaButton: 'Request a quote',
  ctaHref: '/mro/cotizacion/',
}

const defaults: PageDefaults<MroRadiosContent> = { es, en }
export default defaults
