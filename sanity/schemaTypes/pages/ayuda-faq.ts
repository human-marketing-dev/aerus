import { defineArrayMember, defineField } from 'sanity'
import { definePage, lista, parrafo, texto } from './_helpers'
import { encabezadoAyuda, gruposAyuda } from './_ayuda'

export const paginaAyudaFaq = definePage({
  name: 'paginaAyudaFaq',
  title: 'Preguntas frecuentes',
  groups: gruposAyuda({ name: 'preguntas', title: 'Preguntas' }),
  fields: [
    ...encabezadoAyuda(),
    defineField({
      name: 'categorias',
      title: 'Categorías de preguntas',
      description: 'Cada categoría agrupa sus preguntas bajo un título. Puedes agregar, quitar o reordenar categorías y preguntas. ' +
        'Todas las preguntas se publican también para Google (datos estructurados FAQ).',
      type: 'array',
      group: 'preguntas',
      of: [defineArrayMember({
        type: 'object',
        name: 'categoriaFaq',
        fields: [
          texto('categoria', 'Nombre de la categoría'),
          lista('items', 'Preguntas', 'preguntaFaq', [
            texto('pregunta', 'Pregunta'),
            parrafo('respuesta', 'Respuesta'),
          ], { itemTitle: 'pregunta' }),
        ],
        preview: { select: { title: 'categoria.es' } },
      })],
    }),
  ],
})
