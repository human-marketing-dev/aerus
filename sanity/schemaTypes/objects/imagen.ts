import { defineField, defineType } from 'sanity'
import { requireLocales } from './locale'

// Imagen con texto alternativo en ES / EN y punto de interés (hotspot) para los recortes.
export const imagen = defineType({
  name: 'imagen',
  title: 'Imagen',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      description: 'Describe la imagen (lo leen los lectores de pantalla y Google).',
      type: 'localeString',
      validation: rule => requireLocales(rule),
    }),
  ],
})
