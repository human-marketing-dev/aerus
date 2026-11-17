import { defineField } from 'sanity'
import { definePage, enlace, lista, listaTextos, parrafo, texto } from './_helpers'

export const paginaAlianzaViva = definePage({
  name: 'paginaAlianzaViva',
  title: 'Alianza con Viva',
  groups: [{ name: 'contenido', title: 'Contenido', default: true }],
  fields: [
    texto('crumb', 'Nombre en el breadcrumb', { group: 'contenido' }),
    texto('eyebrow', 'Antetítulo', { group: 'contenido' }),
    texto('titleA', 'Título (parte normal)', { group: 'contenido', description: 'Ej.: "Alianza con "' }),
    texto('titleAccent', 'Título (parte resaltada en verde)', { group: 'contenido' }),
    parrafo('intro', 'Introducción', { group: 'contenido' }),

    texto('howSub', 'Cómo funciona · antetítulo', { group: 'contenido' }),
    texto('howTitle', 'Cómo funciona · título', { group: 'contenido' }),
    lista('comoFunciona', 'Cómo funciona · pasos', 'paso', [
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('hubsSub', 'Hubs · antetítulo', { group: 'contenido' }),
    texto('hubsTitle', 'Hubs · título', { group: 'contenido' }),
    texto('hubRoutesLabel', 'Hubs · texto antes de las rutas', { group: 'contenido' }),
    defineField({
      name: 'hubs',
      title: 'Hubs de conexión',
      description: 'Elige el destino; su nombre, código y rutas Aerus se toman de la red de rutas.',
      type: 'array',
      group: 'contenido',
      of: [{
        type: 'object',
        name: 'hub',
        fields: [
          defineField({ name: 'destino', title: 'Destino', type: 'reference', to: [{ type: 'destino' }], validation: r => r.required() }),
          parrafo('desc', 'Descripción'),
        ],
        preview: { select: { title: 'destino.nombre', subtitle: 'destino.iata' } },
      }],
    }),

    texto('benefitsSub', 'Ventajas · antetítulo', { group: 'contenido' }),
    texto('benefitsTitle', 'Ventajas · título', { group: 'contenido' }),
    listaTextos('beneficios', 'Ventajas', { group: 'contenido' }),

    texto('helpTitle', 'Ayuda · título', { group: 'contenido' }),
    parrafo('helpDesc', 'Ayuda · texto', { group: 'contenido' }),
    texto('helpCta', 'Ayuda · texto del botón', { group: 'contenido' }),
    enlace('helpHref', 'Ayuda · enlace del botón', { group: 'contenido' }),
    texto('aerusRoutes', 'Título de la lista de rutas Aerus', { group: 'contenido' }),
  ],
})
