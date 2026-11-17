import { defineField, defineType } from 'sanity'
import { requireLocales } from './locale'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'Pregunta frecuente',
  type: 'object',
  fields: [
    defineField({
      name: 'pregunta',
      title: 'Pregunta',
      type: 'localeString',
      validation: rule => requireLocales(rule),
    }),
    defineField({
      name: 'respuesta',
      title: 'Respuesta',
      type: 'localeText',
      validation: rule => requireLocales(rule),
    }),
  ],
  preview: {
    select: { title: 'pregunta.es', subtitle: 'respuesta.es' },
  },
})
