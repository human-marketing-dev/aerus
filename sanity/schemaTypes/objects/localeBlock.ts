import { defineArrayMember, defineField, defineType } from 'sanity'
import { LANGS } from './locale'

// Texto enriquecido (títulos, párrafos, listas, negritas, enlaces) en ES / EN.
// Se usa para contenido largo como los legales.
export const blockContent = defineArrayMember({
  type: 'block',
  styles: [
    { title: 'Párrafo', value: 'normal' },
    { title: 'Título', value: 'h2' },
    { title: 'Subtítulo', value: 'h3' },
  ],
  lists: [
    { title: 'Viñetas', value: 'bullet' },
    { title: 'Numerada', value: 'number' },
  ],
  marks: {
    decorators: [
      { title: 'Negrita', value: 'strong' },
      { title: 'Cursiva', value: 'em' },
    ],
    annotations: [
      {
        name: 'link',
        title: 'Enlace',
        type: 'object',
        fields: [
          defineField({
            name: 'href',
            title: 'Enlace',
            description: 'Ruta del sitio en español (p. ej. /ayuda/contacto/) o URL completa / mailto: / tel:',
            type: 'string',
          }),
        ],
      },
    ],
  },
})

export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Texto enriquecido (ES / EN)',
  type: 'object',
  fields: LANGS.map(l => defineField({ name: l.id, title: l.title, type: 'array', of: [blockContent] })),
})
