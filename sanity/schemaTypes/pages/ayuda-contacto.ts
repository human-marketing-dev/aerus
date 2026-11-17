import { booleano, dato, definePage, enlace, icono, lista, parrafo, texto } from './_helpers'
import { encabezadoAyuda, gruposAyuda } from './_ayuda'

export const paginaAyudaContacto = definePage({
  name: 'paginaAyudaContacto',
  title: 'Contacto',
  groups: gruposAyuda(
    { name: 'canales', title: 'Canales de contacto' },
    { name: 'redes', title: 'Redes sociales' },
    { name: 'horarios', title: 'Horarios' },
  ),
  fields: [
    ...encabezadoAyuda(),

    lista('canales', 'Canales de contacto', 'canalContacto', [
      icono('icono'),
      texto('label', 'Nombre del canal', { description: 'P. ej. "México" o "Correo electrónico".' }),
      dato('valor', 'Teléfono, número o correo', { description: 'Tal como se muestra en la tarjeta.' }),
      texto('detalle', 'Detalle', { description: 'Horario o tiempo de respuesta.' }),
      enlace('href', 'Enlace del botón', {
        description: 'tel:+528126823501 · mailto:correo@aerus.mx · https://wa.me/… (los enlaces https:// se abren en una pestaña nueva).',
      }),
      texto('cta', 'Texto del botón'),
      booleano('destacado', 'Destacar tarjeta', { description: 'Muestra la tarjeta resaltada con botón verde.' }),
    ], { group: 'canales', itemTitle: 'label', description: 'Tarjetas de contacto. Puedes agregar, quitar o reordenar.' }),

    texto('socialEyebrow', 'Antetítulo', { group: 'redes' }),
    texto('socialTitle', 'Título', { group: 'redes' }),
    parrafo('socialDesc', 'Texto', {
      group: 'redes',
      description: 'Los enlaces a las redes sociales son los mismos del pie de página y se administran en el código del sitio.',
    }),

    texto('hoursEyebrow', 'Antetítulo', { group: 'horarios' }),
    texto('hoursTitle', 'Título', { group: 'horarios' }),
    lista('horarios', 'Tabla de horarios', 'filaHorario', [
      texto('dias', 'Días / canal'),
      texto('horas', 'Horario'),
    ], { group: 'horarios', itemTitle: 'dias' }),
    parrafo('specialNote', 'Nota destacada', { group: 'horarios', description: 'Recuadro con bandera debajo de la tabla.' }),
  ],
})
