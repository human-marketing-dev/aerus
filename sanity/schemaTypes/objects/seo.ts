import { defineField, defineType } from 'sanity'
import { requireLocales } from './locale'

// SEO de cada página: lo que ve Google y lo que aparece al compartir en redes.
// Obligatorio en todas las páginas para que ninguna se publique sin él.
export const seo = defineType({
  name: 'seo',
  title: 'SEO y redes sociales',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta título',
      description: 'Título en la pestaña del navegador y en los resultados de Google. Recomendado: máximo 60 caracteres.',
      type: 'localeString',
      validation: rule => requireLocales(rule, { max: 60 }),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta descripción',
      description: 'Resumen que aparece debajo del título en Google. Recomendado: máximo 160 caracteres.',
      type: 'localeText',
      validation: rule => requireLocales(rule, { max: 160 }),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen para compartir',
      description: 'Se muestra al compartir la página en WhatsApp, Facebook, LinkedIn, etc. Recomendado: 1200 × 630 px.',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required().error('Agrega una imagen para compartir'),
    }),
    defineField({
      name: 'noindex',
      title: 'Ocultar de Google',
      description: 'Actívalo solo si esta página no debe aparecer en buscadores.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
