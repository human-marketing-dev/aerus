import { defineType } from 'sanity'
import { dato, enlace, lista, parrafo, texto } from './_helpers'

// Plantilla: textos comunes a TODAS las páginas de ruta. No lleva SEO propio (el SEO de cada
// ruta está en su documento de "Red de rutas → Rutas"), por eso no usa definePage.

const OD = '{origen} y {destino} se reemplazan por las ciudades de la ruta.'
const DUR = '{duracion} se reemplaza por la duración estimada (p. ej. "1h 10min").'
const FRASE = 'La frase se arma así: [texto antes] [enlace] [texto después].'

export const plantillaRuta = defineType({
  name: 'plantillaRuta',
  title: 'Plantilla · Página de ruta',
  type: 'document',
  description: 'Textos que se repiten en la página de cada ruta. La descripción, preguntas frecuentes, aeropuertos y SEO de cada ruta se editan en Red de rutas → Rutas.',
  groups: [
    { name: 'encabezado', title: 'Encabezado', default: true },
    { name: 'cuerpo', title: 'Cuerpo' },
    { name: 'lateral', title: 'Barra lateral' },
  ],
  fields: [
    // Encabezado y cifras
    texto('h1', 'Título principal', { group: 'encabezado', description: `${OD} Ej.: "Vuelos {origen} – {destino}".` }),
    texto('flightTime', 'Etiqueta de duración', { group: 'encabezado', description: `${DUR} Ej.: "~{duracion} de vuelo".` }),
    texto('directFlight', 'Etiqueta "Vuelo directo"', { group: 'encabezado' }),
    texto('international', 'Etiqueta de ruta internacional', { group: 'encabezado', description: 'Se muestra solo en las rutas internacionales.' }),
    texto('statDuration', 'Cifras · texto bajo la duración', { group: 'encabezado' }),
    texto('statDistance', 'Cifras · texto bajo la distancia', { group: 'encabezado' }),
    texto('statDirect', 'Cifras · "Directo"', { group: 'encabezado' }),
    texto('statNonstop', 'Cifras · texto bajo "Directo"', { group: 'encabezado' }),
    dato('statCapacity', 'Cifras · capacidad del avión', { group: 'encabezado', description: 'Igual en los dos idiomas. Ej.: "12 pax".' }),
    dato('statAircraft', 'Cifras · modelo del avión', { group: 'encabezado', description: 'Igual en los dos idiomas.' }),

    // Cuerpo
    texto('passengerProfile', 'Quién viaja · antetítulo', { group: 'cuerpo' }),
    texto('whoTravels', 'Quién viaja · título', { group: 'cuerpo' }),
    texto('whyAerus', 'Ventaja Aerus · antetítulo', { group: 'cuerpo' }),
    texto('difference', 'Ventaja Aerus · título', { group: 'cuerpo' }),
    texto('flightInfo', 'Aeropuertos · antetítulo', { group: 'cuerpo' }),
    texto('airports', 'Aeropuertos · título', { group: 'cuerpo' }),
    texto('origin', 'Aeropuertos · etiqueta "Origen"', { group: 'cuerpo' }),
    texto('destination', 'Aeropuertos · etiqueta "Destino"', { group: 'cuerpo' }),
    texto('beforeYouFly', 'Información práctica · antetítulo', { group: 'cuerpo' }),
    texto('practicalInfo', 'Información práctica · título', { group: 'cuerpo' }),
    texto('docsA', 'Documentos · texto antes del enlace', { group: 'cuerpo', description: `Solo en rutas internacionales. ${FRASE}` }),
    texto('docsLink', 'Documentos · texto del enlace', { group: 'cuerpo' }),
    enlace('docsHref', 'Documentos · enlace', { group: 'cuerpo' }),
    texto('docsB', 'Documentos · texto después del enlace', { group: 'cuerpo' }),
    texto('timesA', 'Tiempos de llegada · texto antes del enlace', { group: 'cuerpo', description: FRASE }),
    texto('timesLink', 'Tiempos de llegada · texto del enlace', { group: 'cuerpo' }),
    enlace('timesHref', 'Tiempos de llegada · enlace', { group: 'cuerpo' }),
    texto('timesB', 'Tiempos de llegada · texto después del enlace', { group: 'cuerpo' }),
    texto('bagA', 'Equipaje · texto antes del enlace', { group: 'cuerpo', description: FRASE }),
    texto('bagLink', 'Equipaje · texto del enlace', { group: 'cuerpo' }),
    enlace('bagHref', 'Equipaje · enlace', { group: 'cuerpo' }),
    texto('bagB', 'Equipaje · texto después del enlace', { group: 'cuerpo' }),
    texto('assistA', 'Asistencia especial · texto antes del enlace', { group: 'cuerpo', description: 'La frase termina con el enlace y un punto.' }),
    texto('assistLink', 'Asistencia especial · texto del enlace', { group: 'cuerpo' }),
    enlace('assistHref', 'Asistencia especial · enlace', { group: 'cuerpo' }),
    texto('faq', 'Título de las preguntas frecuentes', { group: 'cuerpo', description: 'Las preguntas de cada ruta se editan en su documento de la red de rutas.' }),

    // Barra lateral
    texto('ready', 'Reservar · título', { group: 'lateral' }),
    parrafo('readyDesc', 'Reservar · texto', { group: 'lateral', description: `${OD} ${DUR}` }),
    texto('book', 'Reservar · texto del botón', { group: 'lateral' }),
    enlace('bookHref', 'Reservar · enlace del botón', { group: 'lateral' }),
    texto('moreFrom', 'Título de "más rutas"', { group: 'lateral', description: '{origen} se reemplaza por la ciudad de origen. Las rutas listadas son las "relacionadas" de cada ruta.' }),
    texto('related', 'Título de "también puede interesarte"', { group: 'lateral' }),
    lista('relacionados', 'También puede interesarte · enlaces', 'enlaceRelacionado', [
      texto('label', 'Texto'),
      enlace('href', 'Enlace'),
    ], { group: 'lateral', itemTitle: 'label' }),
  ],
  preview: { prepare: () => ({ title: 'Plantilla · Página de ruta' }) },
})
