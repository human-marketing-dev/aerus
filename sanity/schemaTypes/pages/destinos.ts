import { definePage, parrafo, texto } from './_helpers'

const N = '{n} se reemplaza por el número.'

export const paginaDestinos = definePage({
  name: 'paginaDestinos',
  title: 'Destinos (listado)',
  groups: [{ name: 'contenido', title: 'Contenido', default: true }],
  fields: [
    texto('eyebrow', 'Antetítulo', { group: 'contenido' }),
    texto('title', 'Título', { group: 'contenido' }),
    parrafo('intro', 'Introducción', { group: 'contenido' }),

    texto('statDestinations', 'Cifras · texto junto al número de destinos', { group: 'contenido', description: 'Ej.: "destinos" (se muestra "12 destinos").' }),
    texto('statHubs', 'Cifras · texto junto al número de hubs', { group: 'contenido' }),
    texto('statIntlOne', 'Cifras · destinos internacionales (cuando es 1)', { group: 'contenido', description: 'Se muestra después del número, p. ej. "1 internacional".' }),
    texto('statIntlOther', 'Cifras · destinos internacionales (varios)', { group: 'contenido', description: 'Se muestra después del número, p. ej. "3 internacionales".' }),

    texto('hubsEyebrow', 'Hubs · antetítulo', { group: 'contenido' }),
    texto('hubBadge', 'Etiqueta "Hub" en las tarjetas', { group: 'contenido' }),
    texto('directRoutesOne', 'Número de rutas directas (cuando es 1)', { group: 'contenido', description: `${N} Ej.: "{n} ruta directa".` }),
    texto('directRoutesOther', 'Número de rutas directas (varias)', { group: 'contenido', description: `${N} Ej.: "{n} rutas directas".` }),
    texto('seeFlights', 'Hubs · texto del enlace de cada tarjeta', { group: 'contenido' }),

    texto('allEyebrow', 'Resto de destinos · antetítulo', { group: 'contenido' }),
    texto('destinationCountOne', 'Resto de destinos · conteo (cuando es 1)', { group: 'contenido', description: `${N} Ej.: "{n} destino".` }),
    texto('destinationCountOther', 'Resto de destinos · conteo (varios)', { group: 'contenido', description: `${N} Ej.: "{n} destinos".` }),
    texto('intlBadge', 'Etiqueta de destino internacional', { group: 'contenido' }),
  ],
})
