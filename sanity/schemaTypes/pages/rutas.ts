import { definePage, enlace, parrafo, texto } from './_helpers'

export const paginaRutas = definePage({
  name: 'paginaRutas',
  title: 'Rutas (listado)',
  groups: [{ name: 'contenido', title: 'Contenido', default: true }],
  fields: [
    texto('eyebrow', 'Antetítulo', { group: 'contenido' }),
    texto('titleA', 'Título (parte normal)', { group: 'contenido', description: 'Ej.: "Rutas " (con espacio al final).' }),
    texto('titleAccent', 'Título (parte resaltada en verde)', { group: 'contenido' }),
    parrafo('intro', 'Introducción', { group: 'contenido', description: '{n} se reemplaza por el número total de rutas directas.' }),

    texto('statDirect', 'Cifras · texto junto al total de rutas', { group: 'contenido', description: 'Se muestra después del número, p. ej. "14 rutas directas".' }),
    texto('statIntl', 'Cifras · texto junto a las rutas internacionales', { group: 'contenido' }),
    texto('statDomestic', 'Cifras · texto junto a las rutas nacionales', { group: 'contenido' }),

    texto('domestic', 'Título de la sección de rutas nacionales', { group: 'contenido' }),
    texto('international', 'Título de la sección de rutas internacionales', { group: 'contenido' }),
    texto('intlBadge', 'Etiqueta de ruta internacional en las tarjetas', { group: 'contenido' }),
    texto('seeRoute', 'Texto del enlace de cada tarjeta de ruta', { group: 'contenido' }),

    texto('vivaLabel', 'Alianza con Viva · antetítulo', { group: 'contenido' }),
    texto('vivaTitle', 'Alianza con Viva · título', { group: 'contenido' }),
    parrafo('vivaDesc', 'Alianza con Viva · texto', { group: 'contenido' }),
    texto('vivaCta', 'Alianza con Viva · texto del botón', { group: 'contenido' }),
    enlace('vivaHref', 'Alianza con Viva · enlace del botón', { group: 'contenido' }),
  ],
})
