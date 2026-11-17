import { defineType } from 'sanity'
import { parrafo, seccion, texto } from './_helpers'

// Plantilla: textos comunes a TODAS las páginas de destino. No lleva SEO propio (el SEO de cada
// destino está en su documento de "Red de rutas → Destinos"), por eso no usa definePage.

const NOMBRE = '{nombre} se reemplaza por el nombre del destino.'
const N = '{n} se reemplaza por el número de rutas directas.'

export const plantillaDestino = defineType({
  name: 'plantillaDestino',
  title: 'Plantilla · Página de destino',
  type: 'document',
  description: 'Textos que se repiten en la página de cada destino. La descripción, foto, rutas y SEO de cada destino se editan en Red de rutas → Destinos.',
  groups: [
    { name: 'contenido', title: 'Contenido', default: true },
    { name: 'faq', title: 'Preguntas frecuentes' },
  ],
  fields: [
    texto('hubBadge', 'Etiqueta "Hub"', { group: 'contenido', description: 'Se muestra solo en los destinos marcados como hub.' }),
    texto('intlBadge', 'Etiqueta de destino internacional', { group: 'contenido' }),
    texto('h1', 'Título principal', { group: 'contenido', description: `${NOMBRE} Ej.: "Vuelos directos a {nombre}".` }),
    texto('routeLabelOne', 'Número de rutas directas (cuando es 1)', { group: 'contenido', description: `${N} Ej.: "{n} ruta directa".` }),
    texto('routeLabelOther', 'Número de rutas directas (varias)', { group: 'contenido', description: `${N} Ej.: "{n} rutas directas".` }),
    texto('andMore', 'Texto "y N más" (después de las 3 primeras ciudades)', { group: 'contenido', description: '{n} se reemplaza por el número de ciudades que no se listan. Ej.: "y {n} más".' }),
    texto('routesFrom', 'Título de la lista de rutas directas', { group: 'contenido', description: `${NOMBRE} Ej.: "Rutas directas desde {nombre}".` }),
    texto('sidebarLabel', 'Barra lateral · texto', { group: 'contenido', description: `${NOMBRE} Ej.: "Vuela directo a {nombre} con Aerus".` }),
    texto('searchFlights', 'Barra lateral · texto del botón', { group: 'contenido' }),

    texto('faq', 'Título de las preguntas frecuentes', { group: 'faq' }),
    seccion('faqDirecto', 'Pregunta: ¿vuela directo?', [
      texto('q', 'Pregunta', { description: NOMBRE }),
      parrafo('aOne', 'Respuesta (cuando tiene 1 ruta)', { description: `${NOMBRE} ${N}` }),
      parrafo('aOther', 'Respuesta (cuando tiene varias rutas)', { description: `${NOMBRE} ${N}` }),
    ], { group: 'faq', description: 'Se muestra en todos los destinos.' }),
    seccion('faqCiudades', 'Pregunta: ¿desde qué ciudades?', [
      texto('q', 'Pregunta', { description: NOMBRE }),
      parrafo('a', 'Respuesta', { description: `${NOMBRE} {ciudades} se reemplaza por la lista de ciudades con vuelo directo, separadas por coma.` }),
    ], { group: 'faq', description: 'Se muestra en todos los destinos.' }),
    seccion('faqInternacional', 'Pregunta: ¿es internacional?', [
      texto('q', 'Pregunta', { description: NOMBRE }),
      parrafo('a', 'Respuesta', { description: NOMBRE }),
    ], { group: 'faq', description: 'Se muestra solo en los destinos internacionales.' }),
    seccion('faqHub', 'Pregunta: ¿es hub?', [
      texto('q', 'Pregunta', { description: NOMBRE }),
      parrafo('a', 'Respuesta', { description: NOMBRE }),
    ], { group: 'faq', description: 'Se muestra solo en los destinos que son hub.' }),
  ],
  preview: { prepare: () => ({ title: 'Plantilla · Página de destino' }) },
})
