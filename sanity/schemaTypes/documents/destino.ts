import { defineField, defineType } from 'sanity'
import { requireLocales } from '../objects/locale'

// Un destino es también una ciudad del mapa de "Red de rutas".
// Al publicar un destino aparece su página (/destinos/<slug>) y su card; las rutas se
// enlazan a destinos, así que sus conexiones se calculan solas.
export const destino = defineType({
  name: 'destino',
  title: 'Destino',
  type: 'document',
  groups: [
    { name: 'contenido', title: 'Contenido', default: true },
    { name: 'mapa', title: 'Mapa interactivo' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la ciudad',
      description: 'Igual en español e inglés (p. ej. "Monterrey", "CDMX").',
      type: 'string',
      group: 'contenido',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      description: 'Se genera a partir del nombre. Si la cambias después de publicar, agrega un redirect desde la URL anterior.',
      type: 'slug',
      group: 'contenido',
      options: { source: 'nombre', maxLength: 64 },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'iata',
      title: 'Código IATA del aeropuerto',
      description: 'Tres letras, p. ej. MTY.',
      type: 'string',
      group: 'contenido',
      validation: rule => rule.required().uppercase().length(3),
    }),
    defineField({
      name: 'aeropuerto',
      title: 'Nombre del aeropuerto',
      type: 'localeString',
      group: 'contenido',
      validation: rule => requireLocales(rule),
    }),
    defineField({
      name: 'hub',
      title: 'Es hub de la red',
      description: 'Los hubs aparecen destacados en la página de destinos y con anillo en el mapa.',
      type: 'boolean',
      group: 'contenido',
      initialValue: false,
    }),
    defineField({
      name: 'esInternacional',
      title: 'Es destino internacional',
      type: 'boolean',
      group: 'contenido',
      initialValue: false,
    }),
    defineField({
      name: 'conViva',
      title: 'Conexión con Viva',
      description: 'Marca la ciudad en el mapa como punto de conexión con la red de Viva.',
      type: 'boolean',
      group: 'contenido',
      initialValue: false,
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      description: 'Opcional. Número menor = aparece antes (se usa para ordenar los hubs).',
      type: 'number',
      group: 'contenido',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'localeText',
      group: 'contenido',
      validation: rule => requireLocales(rule),
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      description: 'Foto de la card y del encabezado del destino. Marca el punto de interés para que el recorte no lo corte.',
      type: 'image',
      group: 'contenido',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    // ── Mapa ──────────────────────────────────────────────────────────────
    defineField({
      name: 'lat',
      title: 'Latitud',
      type: 'number',
      group: 'mapa',
      validation: rule => rule.required().min(-90).max(90),
    }),
    defineField({
      name: 'lon',
      title: 'Longitud',
      description: 'Negativa al oeste (México y EE. UU.).',
      type: 'number',
      group: 'mapa',
      validation: rule => rule.required().min(-180).max(180),
    }),
    defineField({
      name: 'etiqueta',
      title: 'Posición del nombre en el mapa',
      description: 'Desplazamiento en píxeles desde el punto. Ajústalo si el nombre se encima con otro.',
      type: 'object',
      group: 'mapa',
      options: { columns: 3 },
      fields: [
        defineField({ name: 'x', title: 'Horizontal', type: 'number', initialValue: 10 }),
        defineField({ name: 'y', title: 'Vertical', type: 'number', initialValue: 0 }),
        defineField({
          name: 'alineacion',
          title: 'Alineación',
          type: 'string',
          initialValue: 'start',
          options: {
            list: [
              { title: 'A la derecha del punto', value: 'start' },
              { title: 'Centrado', value: 'middle' },
              { title: 'A la izquierda del punto', value: 'end' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: rule => rule.required(),
    }),
  ],
  orderings: [
    { title: 'Nombre', name: 'nombre', by: [{ field: 'nombre', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'nombre', iata: 'iata', hub: 'hub', media: 'imagen' },
    prepare: ({ title, iata, hub, media }) => ({
      title,
      subtitle: [iata, hub ? 'Hub' : null].filter(Boolean).join(' · '),
      media,
    }),
  },
})
