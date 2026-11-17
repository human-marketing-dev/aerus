import { defineField, defineType, type SlugSourceContext } from 'sanity'
import { requireLocales } from '../objects/locale'
import { apiVersion } from '../../env'

// Una ruta directa de Aerus entre dos destinos.
// Al publicarla aparece su página (/rutas/<origen>-<destino>) y se agrega sola al listado de
// rutas, al mapa interactivo, a "Destinos directos", a las conexiones de cada destino, al
// mapa del sitio, a sala de prensa y a Alianza con Viva. Al borrarla desaparece de todo.
export const ruta = defineType({
  name: 'ruta',
  title: 'Ruta',
  type: 'document',
  groups: [
    { name: 'contenido', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'origen',
      title: 'Origen',
      type: 'reference',
      to: [{ type: 'destino' }],
      group: 'contenido',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'destino',
      title: 'Destino',
      type: 'reference',
      to: [{ type: 'destino' }],
      group: 'contenido',
      validation: rule =>
        rule.required().custom((value, ctx) => {
          const origen = (ctx.document?.origen as { _ref?: string } | undefined)?._ref
          return value?._ref && value._ref === origen ? 'El destino no puede ser igual al origen' : true
        }),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      description: 'Se genera a partir de origen y destino (botón "Generate").',
      type: 'slug',
      group: 'contenido',
      options: {
        maxLength: 96,
        source: async (doc: Record<string, unknown>, ctx: SlugSourceContext) => {
          const ids = [doc.origen, doc.destino].map(r => (r as { _ref?: string } | undefined)?._ref)
          if (!ids[0] || !ids[1]) return ''
          const client = ctx.getClient({ apiVersion })
          const names: string[] = await client.fetch('*[_id in $ids]{_id, nombre}', { ids }).then(
            (rows: { _id: string; nombre: string }[]) => ids.map(id => rows.find(r => r._id === id)?.nombre ?? ''),
          )
          return names.join(' ')
        },
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'distanciaKm',
      title: 'Distancia (km)',
      type: 'number',
      group: 'contenido',
      validation: rule => rule.required().positive(),
    }),
    defineField({
      name: 'duracionMin',
      title: 'Duración del vuelo (minutos)',
      type: 'number',
      group: 'contenido',
      validation: rule => rule.required().positive().integer(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción de la ruta',
      type: 'localeText',
      group: 'contenido',
      validation: rule => requireLocales(rule),
    }),
    defineField({
      name: 'quienViaja',
      title: 'Quién viaja en esta ruta',
      type: 'localeText',
      group: 'contenido',
      validation: rule => requireLocales(rule),
    }),
    defineField({
      name: 'ventajaAerus',
      title: 'La ventaja de volar con Aerus',
      type: 'localeText',
      group: 'contenido',
      validation: rule => requireLocales(rule),
    }),
    defineField({
      name: 'faq',
      title: 'Preguntas frecuentes',
      type: 'array',
      group: 'contenido',
      of: [{ type: 'faqItem' }],
    }),
    defineField({
      name: 'relacionadas',
      title: 'Rutas relacionadas',
      description: 'Se muestran en la barra lateral ("Más rutas desde…").',
      type: 'array',
      group: 'contenido',
      of: [{ type: 'reference', to: [{ type: 'ruta' }] }],
    }),
    defineField({
      name: 'mostrarAlianzaViva',
      title: 'Mostrar enlace a "Alianza con Viva"',
      type: 'boolean',
      group: 'contenido',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: { o: 'origen.nombre', d: 'destino.nombre', oi: 'origen.iata', di: 'destino.iata', media: 'destino.imagen' },
    prepare: ({ o, d, oi, di, media }) => ({
      title: `${o ?? '?'} – ${d ?? '?'}`,
      subtitle: oi && di ? `${oi} → ${di}` : undefined,
      media,
    }),
  },
})
