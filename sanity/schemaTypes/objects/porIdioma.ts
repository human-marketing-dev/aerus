import { defineField, defineType } from 'sanity'

// Tipos para las páginas guardadas como "un documento por idioma" (ver pages/_porIdioma.ts).

const enIngles = ({ document }: { document?: unknown }) => (document as { idioma?: string } | undefined)?.idioma === 'en'

/** Imagen con texto alternativo (de un solo idioma). */
export const imagenTexto = defineType({
  name: 'imagenTexto',
  title: 'Imagen',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      description: 'Describe la imagen (lo leen los lectores de pantalla y Google).',
      type: 'string',
    }),
  ],
})

/** SEO de una página (de un solo idioma). */
export const seoPorIdioma = defineType({
  name: 'seoPorIdioma',
  title: 'SEO y redes sociales',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta título',
      description: 'Título en la pestaña del navegador y en Google. Recomendado: máximo 60 caracteres.',
      type: 'string',
      validation: rule => [
        rule.required().error('Falta el meta título'),
        rule.max(60).warning('Recomendado: máximo 60 caracteres; Google podría cortarlo'),
      ],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta descripción',
      description: 'Resumen que aparece debajo del título en Google. Recomendado: máximo 160 caracteres.',
      type: 'text',
      rows: 3,
      validation: rule => [
        rule.required().error('Falta la meta descripción'),
        rule.max(160).warning('Recomendado: máximo 160 caracteres; Google podría cortarlo'),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen para compartir',
      description: 'Se muestra al compartir la página en WhatsApp, Facebook, LinkedIn, etc. Recomendado: 1200 × 630 px.',
      type: 'image',
      options: { hotspot: true },
      hidden: enIngles,
      validation: rule => rule.custom((v, ctx) =>
        (ctx.document as { idioma?: string } | undefined)?.idioma === 'en' || v ? true : 'Agrega una imagen para compartir'),
    }),
    defineField({
      name: 'noindex',
      title: 'Ocultar de Google',
      description: 'Actívalo solo si esta página no debe aparecer en buscadores.',
      type: 'boolean',
      initialValue: false,
      hidden: enIngles,
    }),
  ],
})
