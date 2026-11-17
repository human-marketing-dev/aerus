// Textos de la página "Equipaje" (/ayuda/equipaje).
// Se editan en Sanity (Páginas → Ayuda → Equipaje); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda-equipaje.ts.
import type { PageDefaults, PageSeo } from '@/lib/content'

export type CeldaEstado = 'incluido' | 'extra'

/** Columna de la tabla comparativa (una por tarifa). */
type Tarifa = { nombre: string; etiqueta: string; destacada: boolean }

/** Fila de la tabla: una celda por tarifa, en el mismo orden que `tarifas`. */
type TablaFila = {
  feature: string
  celdas: { texto: string; estado: CeldaEstado }[]
}

type InfoSeccion = {
  icono: string
  titulo: string
  subtitulo: string
  items: string[]
  /** Recuadro opcional al final de la sección ('' = sin nota) */
  nota?: string
}

export type AyudaEquipajeContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  compareEyebrow: string
  compareTitle: string
  tarifas: Tarifa[]
  filas: TablaFila[]
  compareNote: string
  secciones: InfoSeccion[]
}

const es: AyudaEquipajeContent = {
  seo: {
    metaTitle: 'Equipaje | Aerus',
    metaDescription:
      'Conoce cuánto equipaje puedes llevar con Aerus según tu tarifa, dimensiones permitidas, artículos restringidos y política de equipaje especial.',
  },
  crumb: 'Equipaje',
  eyebrow: 'Ayuda',
  titleA: 'Política de',
  titleB: 'equipaje',
  intro: 'Dimensiones, pesos y lo que incluye cada tarifa. Todo lo que necesitas saber antes de llegar al aeropuerto.',
  compareEyebrow: 'Por tarifa',
  compareTitle: '¿Qué incluye tu boleto?',
  tarifas: [
    { nombre: 'Aerus Light', etiqueta: 'Light', destacada: false },
    { nombre: 'Aerus Business', etiqueta: 'Business', destacada: false },
    { nombre: 'Aerus Advantage', etiqueta: 'Advantage', destacada: true },
  ],
  filas: [
    {
      feature: 'Equipaje de mano',
      celdas: [
        { texto: '1 pieza · hasta 10 kg', estado: 'incluido' },
        { texto: '1 pieza · hasta 10 kg', estado: 'incluido' },
        { texto: '1 pieza · hasta 10 kg', estado: 'incluido' },
      ],
    },
    {
      feature: 'Equipaje documentado',
      celdas: [
        { texto: 'Adicional con costo', estado: 'extra' },
        { texto: '1 maleta · hasta 23 kg', estado: 'incluido' },
        { texto: '2 maletas · hasta 23 kg c/u', estado: 'incluido' },
      ],
    },
  ],
  compareNote:
    'Todos los pasajeros pueden llevar además 1 artículo personal (bolsa o mochila pequeña) sin costo en cualquier tarifa.',
  secciones: [
    {
      icono: 'luggage',
      titulo: 'Artículo personal',
      subtitulo: 'Incluido en todas las tarifas',
      items: [
        'Dimensiones máximas: 40 × 30 × 15 cm.',
        'Puede ser bolsa de mano, mochila pequeña o portafolio.',
        'Debe caber completamente debajo del asiento frontal.',
        'Viaja contigo en cabina sin costo adicional en todas las tarifas.',
      ],
      nota: '',
    },
    {
      icono: 'luggage',
      titulo: 'Equipaje de mano',
      subtitulo: 'Incluido en todas las tarifas',
      items: [
        'Dimensiones máximas: 55 × 40 × 25 cm (alto × ancho × fondo), incluyendo ruedas y manijas.',
        'Peso máximo: 10 kg.',
        'Debe caber en el compartimento superior sin forzarlo.',
        'En vuelos con alta ocupación, Aerus puede solicitar que el equipaje de mano se documente sin costo.',
      ],
      nota: '',
    },
    {
      icono: 'luggage',
      titulo: 'Equipaje documentado',
      subtitulo: 'Incluido en Business y Advantage',
      items: [
        'Suma lineal máxima (largo + ancho + alto): 158 cm.',
        'Peso máximo por maleta: 23 kg.',
        'Sobrepeso (entre 23 y 32 kg): cargo adicional de $350 MXN por maleta.',
        'Maletas que excedan 32 kg o 158 cm lineales no son aceptadas como equipaje documentado estándar — contacta con anticipación.',
        'En tarifa Light puedes agregar equipaje documentado al momento de compra o en mostrador (costo más alto en aeropuerto).',
      ],
      nota: 'Aerus no se responsabiliza por objetos de valor, frágiles o perecederos incluidos en el equipaje documentado. Usa el equipaje de mano para laptops, medicamentos y documentos importantes.',
    },
    {
      icono: 'x',
      titulo: 'Artículos restringidos',
      subtitulo: 'Lo que no puedes llevar',
      items: [
        'Líquidos, aerosoles y geles en cabina: envases de máximo 100 ml, total 1 litro en bolsa transparente resellable. Medicamentos y fórmula infantil quedan exentos.',
        'Objetos punzocortantes (navajas, cutters, tijeras de punta) solo en equipaje documentado.',
        'Baterías de litio sueltas (powerbanks, baterías de repuesto): exclusivamente en equipaje de mano, máx. 100 Wh por unidad.',
        'Explosivos, materiales inflamables, gases comprimidos, venenos y materiales radiactivos: prohibidos en todo momento.',
        'Armas de fuego: solo documentadas con declaración previa y cumpliendo regulación de la SCT y autoridades migratorias.',
      ],
      nota: 'Esta lista es orientativa. Consulta siempre la regulación de la SCT y la AFAC para la lista completa de artículos prohibidos o restringidos.',
    },
    {
      icono: 'plane',
      titulo: 'Equipaje especial',
      subtitulo: 'Deportivo, musical y de gran tamaño',
      items: [
        'Instrumentos musicales pequeños (guitarra, violín): pueden viajar en cabina ocupando un asiento adicional con cargo equivalente a un boleto de equipaje.',
        'Equipo deportivo (tablas de surf, esquís, bicicletas, palos de golf): sujeto a disponibilidad y cargo adicional. Informa con al menos 48 horas de anticipación.',
        'Artículos frágiles o de alto valor: se recomienda embalaje adecuado y declaración de valor en mostrador. Aerus no cubre daños en artículos no declarados.',
        'Sillas de ruedas y equipos de movilidad: transportados sin cargo adicional. Contáctanos al reservar para confirmar disposiciones.',
      ],
      nota: 'Para equipaje especial o de gran formato, contáctanos con al menos 72 horas de anticipación para confirmar disponibilidad y tarifas aplicables.',
    },
  ],
}

const en: AyudaEquipajeContent = {
  seo: {
    metaTitle: 'Baggage | Aerus',
    metaDescription:
      'Find out how much baggage you can bring with Aerus based on your fare, allowed dimensions, restricted items and our special baggage policy.',
  },
  crumb: 'Baggage',
  eyebrow: 'Help',
  titleA: 'Baggage',
  titleB: 'policy',
  intro: 'Dimensions, weights and what each fare includes. Everything you need to know before you get to the airport.',
  compareEyebrow: 'By fare',
  compareTitle: 'What does your ticket include?',
  tarifas: [
    { nombre: 'Aerus Light', etiqueta: 'Light', destacada: false },
    { nombre: 'Aerus Business', etiqueta: 'Business', destacada: false },
    { nombre: 'Aerus Advantage', etiqueta: 'Advantage', destacada: true },
  ],
  filas: [
    {
      feature: 'Carry-on bag',
      celdas: [
        { texto: '1 piece · up to 10 kg', estado: 'incluido' },
        { texto: '1 piece · up to 10 kg', estado: 'incluido' },
        { texto: '1 piece · up to 10 kg', estado: 'incluido' },
      ],
    },
    {
      feature: 'Checked baggage',
      celdas: [
        { texto: 'Available for a fee', estado: 'extra' },
        { texto: '1 bag · up to 23 kg', estado: 'incluido' },
        { texto: '2 bags · up to 23 kg each', estado: 'incluido' },
      ],
    },
  ],
  compareNote:
    'All passengers may also bring 1 personal item (handbag or small backpack) free of charge on any fare.',
  secciones: [
    {
      icono: 'luggage',
      titulo: 'Personal item',
      subtitulo: 'Included with every fare',
      items: [
        'Maximum dimensions: 40 × 30 × 15 cm.',
        'It can be a handbag, small backpack or briefcase.',
        'It must fit completely under the seat in front of you.',
        'It travels with you in the cabin at no extra cost on every fare.',
      ],
      nota: '',
    },
    {
      icono: 'luggage',
      titulo: 'Carry-on bag',
      subtitulo: 'Included with every fare',
      items: [
        'Maximum dimensions: 55 × 40 × 25 cm (height × width × depth), including wheels and handles.',
        'Maximum weight: 10 kg.',
        'It must fit in the overhead bin without forcing it.',
        'On full flights, Aerus may ask that carry-on bags be checked free of charge.',
      ],
      nota: '',
    },
    {
      icono: 'luggage',
      titulo: 'Checked baggage',
      subtitulo: 'Included with Business and Advantage',
      items: [
        'Maximum linear dimensions (length + width + height): 158 cm.',
        'Maximum weight per bag: 23 kg.',
        'Overweight (between 23 and 32 kg): additional fee of $350 MXN per bag.',
        'Bags over 32 kg or 158 linear cm are not accepted as standard checked baggage — contact us in advance.',
        'With the Light fare, you can add checked baggage at the time of purchase or at the counter (higher fee at the airport).',
      ],
      nota: 'Aerus is not responsible for valuable, fragile or perishable items packed in checked baggage. Keep laptops, medication and important documents in your carry-on.',
    },
    {
      icono: 'x',
      titulo: 'Restricted items',
      subtitulo: 'What you can’t bring',
      items: [
        'Liquids, aerosols and gels in the cabin: containers of up to 100 ml, 1 liter total, in a clear resealable bag. Medication and baby formula are exempt.',
        'Sharp objects (knives, box cutters, pointed scissors) are allowed in checked baggage only.',
        'Loose lithium batteries (power banks, spare batteries): carry-on baggage only, max. 100 Wh per unit.',
        'Explosives, flammable materials, compressed gases, poisons and radioactive materials: prohibited at all times.',
        'Firearms: checked baggage only, with prior declaration and in compliance with SCT (Mexican Ministry of Communications and Transportation) and immigration regulations.',
      ],
      nota: 'This list is for guidance only. Always check SCT and AFAC (Mexican Federal Civil Aviation Agency) regulations for the complete list of prohibited and restricted items.',
    },
    {
      icono: 'plane',
      titulo: 'Special baggage',
      subtitulo: 'Sports, musical and oversized items',
      items: [
        'Small musical instruments (guitar, violin): may travel in the cabin in an extra seat, for a fee equivalent to a baggage ticket.',
        'Sports equipment (surfboards, skis, bicycles, golf clubs): subject to availability and an additional fee. Let us know at least 48 hours in advance.',
        'Fragile or high-value items: we recommend proper packaging and declaring their value at the counter. Aerus does not cover damage to undeclared items.',
        'Wheelchairs and mobility devices: carried at no extra charge. Contact us when you book to confirm arrangements.',
      ],
      nota: 'For special or oversized baggage, contact us at least 72 hours in advance to confirm availability and applicable fees.',
    },
  ],
}

const defaults: PageDefaults<AyudaEquipajeContent> = { es, en }
export default defaults
