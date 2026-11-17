import { defineField, defineType } from 'sanity'

// Redirige una URL que ya no existe (p. ej. una ruta o destino eliminado o renombrado)
// para que los enlaces viejos y los resultados de Google no terminen en error 404.
export const redirect = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    defineField({
      name: 'desde',
      title: 'Desde (URL anterior)',
      description: 'Solo la ruta, sin el dominio. Ejemplos: /rutas/monterrey-laredo  ·  /en/routes/monterrey-laredo',
      type: 'string',
      validation: rule =>
        rule.required().custom(v =>
          typeof v === 'string' && v.startsWith('/') && !v.includes('://') && !v.includes(' ')
            ? true
            : 'Debe empezar con / y no incluir el dominio ni espacios',
        ),
    }),
    defineField({
      name: 'hacia',
      title: 'Hacia (URL nueva)',
      description: 'Ruta del sitio (/rutas) o URL completa (https://…).',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'permanente',
      title: 'Permanente',
      description: 'Déjalo activado salvo que el cambio sea temporal.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'desde', subtitle: 'hacia' },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `→ ${subtitle}` }),
  },
})
