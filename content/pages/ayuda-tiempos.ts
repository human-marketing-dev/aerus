// Textos de la página "Tiempos de llegada al aeropuerto" (/ayuda/tiempos-aeropuerto).
// Se editan en Sanity (Páginas → Ayuda → Tiempos de llegada al aeropuerto); esto es el respaldo y
// la fuente de la carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda-tiempos.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Fase = { label: string; valor: string }

type TiempoCard = {
  tipo: string
  subtitulo: string
  destacado: boolean
  /** Tiempo de llegada recomendado (número grande de la tarjeta) */
  llegada: string
  fases: Fase[]
  /** Nota opcional al pie de la tarjeta ('' = sin nota) */
  nota?: string
}

/** Recomendación: texto y, opcionalmente, un enlace al final ('' = sin enlace). */
type Recomendacion = { texto: string; linkLabel?: string; linkHref?: string }

export type AyudaTiemposContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  tarjetas: TiempoCard[]
  beforeFlight: string
  departure: string
  generalNote: string
  tipsEyebrow: string
  tipsTitle: string
  recomendaciones: Recomendacion[]
}

const es: AyudaTiemposContent = {
  seo: {
    metaTitle: 'Tiempos de llegada al aeropuerto | Aerus',
    metaDescription:
      'Entérate con cuánta anticipación debes llegar al aeropuerto para tu vuelo Aerus. Tiempos recomendados para vuelos nacionales e internacionales.',
  },
  crumb: 'Tiempos de llegada al aeropuerto',
  eyebrow: 'Ayuda',
  titleA: 'Tiempos de llegada al',
  titleB: 'aeropuerto',
  intro: 'Llegar a tiempo es parte del vuelo. Aquí los tiempos recomendados para que no se te vaya el avión.',
  tarjetas: [
    {
      tipo: 'Nacional',
      subtitulo: 'Vuelos dentro de México',
      destacado: false,
      llegada: '1h 30 min',
      fases: [
        { label: 'Cierre de mostrador', valor: '45 min antes' },
        { label: 'Cierre de puerta', valor: '20 min antes' },
      ],
      nota: '',
    },
    {
      tipo: 'Internacional',
      subtitulo: 'Vuelos a EE. UU. (Texas)',
      destacado: true,
      llegada: '2h 30 min',
      fases: [
        { label: 'Cierre de mostrador', valor: '60 min antes' },
        { label: 'Cierre de puerta', valor: '20 min antes' },
      ],
      nota: 'Los vuelos internacionales requieren trámites migratorios y de aduana. Llegar con suficiente anticipación es especialmente importante.',
    },
  ],
  beforeFlight: 'antes de tu vuelo',
  departure: 'Salida del vuelo',
  generalNote: 'Los tiempos son contados hacia atrás desde la hora de salida programada del vuelo.',
  tipsEyebrow: 'Recomendaciones',
  tipsTitle: 'Llega con margen de tiempo',
  recomendaciones: [
    { texto: 'En temporada alta (Semana Santa, verano y diciembre) agrega al menos 30 minutos adicionales a los tiempos indicados.', linkLabel: '', linkHref: '' },
    { texto: 'Considera el tiempo de traslado hasta el aeropuerto, tráfico, estacionamiento y llegada con transporte público.', linkLabel: '', linkHref: '' },
    { texto: 'Haz tu check-in en línea desde 24 horas antes para reducir el tiempo en mostrador y poder ir directo a controles de seguridad.', linkLabel: '', linkHref: '' },
    {
      texto: 'Ten tu identificación y documentos de viaje listos antes de llegar a los filtros de seguridad.',
      linkLabel: 'Ver documentos requeridos →',
      linkHref: '/ayuda/documentos-para-viajar/',
    },
    { texto: 'Si viajas con mascota, equipaje especial o requerimientos de asistencia, presenta 30 minutos adicionales a los tiempos indicados.', linkLabel: '', linkHref: '' },
  ],
}

const en: AyudaTiemposContent = {
  seo: {
    metaTitle: 'Airport Arrival Times | Aerus',
    metaDescription:
      'Find out how early you should arrive at the airport for your Aerus flight. Recommended times for domestic and international flights.',
  },
  crumb: 'Airport arrival times',
  eyebrow: 'Help',
  titleA: 'Airport arrival',
  titleB: 'times',
  intro: 'Getting there on time is part of the trip. Here are our recommended times so you don’t miss your flight.',
  tarjetas: [
    {
      tipo: 'Domestic',
      subtitulo: 'Flights within Mexico',
      destacado: false,
      llegada: '1h 30 min',
      fases: [
        { label: 'Check-in counter closes', valor: '45 min before' },
        { label: 'Gate closes', valor: '20 min before' },
      ],
      nota: '',
    },
    {
      tipo: 'International',
      subtitulo: 'Flights to the U.S. (Texas)',
      destacado: true,
      llegada: '2h 30 min',
      fases: [
        { label: 'Check-in counter closes', valor: '60 min before' },
        { label: 'Gate closes', valor: '20 min before' },
      ],
      nota: 'International flights require immigration and customs procedures, so arriving with plenty of time to spare is especially important.',
    },
  ],
  beforeFlight: 'before your flight',
  departure: 'Flight departure',
  generalNote: 'Times are counted back from the flight’s scheduled departure time.',
  tipsEyebrow: 'Recommendations',
  tipsTitle: 'Leave yourself extra time',
  recomendaciones: [
    { texto: 'During peak season (Easter week, summer and December), add at least 30 extra minutes to the times shown.', linkLabel: '', linkHref: '' },
    { texto: 'Allow time to get to the airport, including traffic, parking or arriving by public transportation.', linkLabel: '', linkHref: '' },
    { texto: 'Check in online starting 24 hours before your flight to spend less time at the counter and go straight to security screening.', linkLabel: '', linkHref: '' },
    {
      texto: 'Have your ID and travel documents ready before you reach the security checkpoint.',
      linkLabel: 'See required documents →',
      linkHref: '/ayuda/documentos-para-viajar/',
    },
    { texto: 'If you’re traveling with a pet, special baggage or assistance needs, arrive 30 minutes earlier than the times shown.', linkLabel: '', linkHref: '' },
  ],
}

const defaults: PageDefaults<AyudaTiemposContent> = { es, en }
export default defaults
