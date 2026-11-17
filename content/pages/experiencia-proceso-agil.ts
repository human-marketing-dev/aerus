// Textos de la página "Espera minutos, no horas" (/experiencia/proceso-agil).
// Se editan en Sanity (Páginas → Experiencia → Espera minutos, no horas); esto es el respaldo y la
// fuente de la carga inicial. Mismas claves que sanity/schemaTypes/pages/experiencia-proceso-agil.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

type Comparacion = { aspecto: string; grande: string; aerus: string }
type Paso = { icono: string; paso: string; titulo: string; descripcion: string }
type Relacionado = { label: string; href: string }

export type ProcesoAgilContent = {
  seo: PageSeo
  crumb: string
  heroEyebrow: string
  heroTitlePre: string
  heroTitleAccent: string
  heroIntro: string
  comparacionSubtitulo: string
  comparacionTitle: string
  colGrande: string
  colAerus: string
  comparacion: Comparacion[]
  pasosSubtitulo: string
  pasosTitle: string
  pasos: Paso[]
  relacionadosTitle: string
  relacionados: Relacionado[]
  ctaTitle: string
  ctaDesc: string
  ctaButton: string
  ctaHref: string
}

const es: ProcesoAgilContent = {
  seo: {
    metaTitle: 'Espera minutos, no horas | Aerus',
    metaDescription:
      'En Aerus llegas al aeropuerto 90 minutos antes, no 3 horas. Terminales regionales más ágiles, menos filas y un proceso de abordaje diseñado para ir al grano.',
  },
  crumb: 'Espera minutos, no horas',
  heroEyebrow: 'Experiencia Aerus',
  heroTitlePre: 'Espera minutos, ',
  heroTitleAccent: 'no horas',
  heroIntro:
    'Las aerolíneas grandes te piden llegar 3 horas antes. En Aerus, 90 minutos son suficientes. Terminales regionales más ágiles, filas cortas y abordaje directo.',
  comparacionSubtitulo: 'Aerus vs. aerolíneas tradicionales',
  comparacionTitle: '¿Cuánto tiempo te ahorra Aerus?',
  colGrande: 'Aerolínea grande',
  colAerus: 'Aerus',
  comparacion: [
    { aspecto: 'Llegada recomendada', grande: '3 horas antes', aerus: '90 minutos antes' },
    { aspecto: 'Tiempo en fila de check-in', grande: '30–60 min', aerus: '5–10 min' },
    { aspecto: 'Controles de seguridad', grande: 'Terminal internacional masiva', aerus: 'Terminal regional con menos afluencia' },
    { aspecto: 'Sala de espera', grande: 'Cientos de pasajeros', aerus: 'Ambiente tranquilo, vuelo pequeño' },
    { aspecto: 'Abordaje', grande: 'Por grupos, 30–45 min', aerus: 'Directo, 10 min' },
    { aspecto: 'Llegada y salida del avión', grande: 'Puerta de manga, esperas', aerus: 'Acceso directo a pista en muchos destinos' },
  ],
  pasosSubtitulo: 'Tu día de vuelo',
  pasosTitle: 'El proceso paso a paso',
  pasos: [
    {
      icono: 'calendar',
      paso: '90 min antes',
      titulo: 'Llega al aeropuerto',
      descripcion: 'En vuelos nacionales Aerus basta llegar 90 minutos antes. Para vuelos internacionales (Texas) recomendamos 2:30 horas por los trámites migratorios.',
    },
    {
      icono: 'user',
      paso: 'Check-in',
      titulo: 'Documenta en minutos',
      descripcion: 'El mostrador Aerus tiene filas cortas. Si ya hiciste tu check-in en línea, puedes ir directo a documentar equipaje o a controles de seguridad si viajas solo con equipaje de mano.',
    },
    {
      icono: 'shield',
      paso: 'Seguridad',
      titulo: 'Controles ágiles',
      descripcion: 'Las terminales regionales tienen menos flujo de personas. El proceso de revisión de seguridad suele tomar menos de 10 minutos.',
    },
    {
      icono: 'plane-takeoff',
      paso: 'Abordaje',
      titulo: 'Directamente al avión',
      descripcion: 'El Cessna Grand Caravan EX aborda a todos los pasajeros desde la pista o puerta en un proceso que dura alrededor de 10 minutos. Sin manga, sin grupos, sin espera.',
    },
  ],
  relacionadosTitle: 'También puede interesarte',
  relacionados: [
    { label: 'La flota', href: '/experiencia/flota/' },
    { label: 'Asistencia de viaje', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Check-in en línea', href: '/check-in/' },
  ],
  ctaTitle: '¿Listo para volar?',
  ctaDesc: 'Reserva tu vuelo y disfruta un proceso sin filas largas.',
  ctaButton: 'Reservar vuelo',
  ctaHref: '/reservar/',
}

const en: ProcesoAgilContent = {
  seo: {
    metaTitle: 'Wait Minutes, Not Hours | Aerus',
    metaDescription:
      'With Aerus, you arrive at the airport 90 minutes before your flight, not 3 hours. Faster regional terminals, shorter lines and a boarding process designed to get you on your way.',
  },
  crumb: 'Wait minutes, not hours',
  heroEyebrow: 'The Aerus experience',
  heroTitlePre: 'Wait minutes, ',
  heroTitleAccent: 'not hours',
  heroIntro:
    'Big airlines ask you to arrive 3 hours early. With Aerus, 90 minutes is enough. Faster regional terminals, short lines and direct boarding.',
  comparacionSubtitulo: 'Aerus vs. traditional airlines',
  comparacionTitle: 'How much time does Aerus save you?',
  colGrande: 'Major airline',
  colAerus: 'Aerus',
  comparacion: [
    { aspecto: 'Recommended arrival', grande: '3 hours before', aerus: '90 minutes before' },
    { aspecto: 'Check-in line wait', grande: '30–60 min', aerus: '5–10 min' },
    { aspecto: 'Security screening', grande: 'Massive international terminal', aerus: 'Regional terminal with fewer travelers' },
    { aspecto: 'Waiting area', grande: 'Hundreds of passengers', aerus: 'Calm atmosphere, small flight' },
    { aspecto: 'Boarding', grande: 'By group, 30–45 min', aerus: 'Direct, 10 min' },
    { aspecto: 'Boarding and deplaning', grande: 'Jet bridge gate, waiting', aerus: 'Direct ramp access at many destinations' },
  ],
  pasosSubtitulo: 'Your travel day',
  pasosTitle: 'The process, step by step',
  pasos: [
    {
      icono: 'calendar',
      paso: '90 min before',
      titulo: 'Arrive at the airport',
      descripcion: 'On Aerus domestic flights, arriving 90 minutes early is enough. For international flights (Texas), we recommend 2 hours 30 minutes to allow time for immigration procedures.',
    },
    {
      icono: 'user',
      paso: 'Check-in',
      titulo: 'Check in within minutes',
      descripcion: 'Lines at the Aerus counter are short. If you already checked in online, you can go straight to bag drop — or directly to security if you’re only traveling with a carry-on.',
    },
    {
      icono: 'shield',
      paso: 'Security',
      titulo: 'Fast screening',
      descripcion: 'Regional terminals have less foot traffic. Security screening usually takes less than 10 minutes.',
    },
    {
      icono: 'plane-takeoff',
      paso: 'Boarding',
      titulo: 'Straight to the aircraft',
      descripcion: 'The Cessna Grand Caravan EX boards all passengers from the ramp or gate in about 10 minutes. No jet bridge, no boarding groups, no waiting.',
    },
  ],
  relacionadosTitle: 'You may also like',
  relacionados: [
    { label: 'Our fleet', href: '/experiencia/flota/' },
    { label: 'Travel assistance', href: '/experiencia/asistencia-de-viaje/' },
    { label: 'Airport arrival times', href: '/ayuda/tiempos-aeropuerto/' },
    { label: 'Online check-in', href: '/check-in/' },
  ],
  ctaTitle: 'Ready to fly?',
  ctaDesc: 'Book your flight and enjoy a process without long lines.',
  ctaButton: 'Book a flight',
  ctaHref: '/reservar/',
}

const defaults: PageDefaults<ProcesoAgilContent> = { es, en }
export default defaults
