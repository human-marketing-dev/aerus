import { definePage, enlace, icono, lista, parrafo, texto } from './_helpers'
import { encabezadoExperiencia, gruposExperiencia, listaRelacionados } from './_experiencia'

export const paginaAsistenciaViaje = definePage({
  name: 'paginaAsistenciaViaje',
  title: 'Asistencia de viaje',
  groups: gruposExperiencia({ name: 'servicios', title: 'Servicios de asistencia' }),
  fields: [
    ...encabezadoExperiencia(),

    // Servicios
    texto('serviciosSubtitulo', 'Servicios · antetítulo', { group: 'servicios' }),
    texto('serviciosTitle', 'Servicios · título', { group: 'servicios' }),
    lista('servicios', 'Tarjetas de servicios', 'servicioAsistencia', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'servicios', itemTitle: 'titulo' }),
    parrafo('callout', 'Aviso destacado · texto', {
      group: 'servicios',
      description: 'Recuadro con bandera debajo de las tarjetas.',
    }),
    texto('calloutLink', 'Aviso destacado · texto del enlace', { group: 'servicios' }),
    enlace('calloutHref', 'Aviso destacado · enlace', { group: 'servicios' }),

    // Barra lateral
    texto('canalesTitle', 'Canales de atención · título', { group: 'lateral' }),
    lista('canales', 'Canales de atención', 'canal', [
      icono('icono'),
      texto('label', 'Nombre del canal', { description: 'P. ej. "México", "WhatsApp IA".' }),
      texto('detalle', 'Detalle', { description: 'Número, horario o correo que se muestra.' }),
      enlace('href', 'Enlace', { description: 'tel:+52…, mailto:…, https://wa.me/… o una ruta del sitio.' }),
    ], { group: 'lateral', itemTitle: 'label' }),
    texto('relacionadosTitle', 'Tarjeta de enlaces · título', { group: 'lateral' }),
    listaRelacionados('relacionados', 'Tarjeta de enlaces · enlaces'),
  ],
})
