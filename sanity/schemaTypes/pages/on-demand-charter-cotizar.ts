import { definePage, listaTextos, parrafo, texto } from './_helpers'
import { GRUPOS, camposEncabezado, camposRelacionados, campoAsunto, campoEmail, campoHorario, campoTelefono } from './on-demand-comun'

export const paginaCharterCotizar = definePage({
  name: 'paginaCharterCotizar',
  title: 'Charter · Cotizar',
  groups: GRUPOS,
  fields: [
    ...camposEncabezado('Solicita tu '),

    texto('datosSub', 'Datos · antetítulo', { group: 'contenido' }),
    texto('datosTitulo', 'Datos · título', { group: 'contenido' }),
    parrafo('datosIntro', 'Datos · texto antes de la lista', { group: 'contenido' }),
    listaTextos('datos', 'Datos · lista', { group: 'contenido' }),

    texto('tiemposSub', 'Tiempos de respuesta · antetítulo', { group: 'contenido' }),
    texto('tiemposTitulo', 'Tiempos de respuesta · título', { group: 'contenido' }),
    parrafo('tiemposA', 'Tiempos de respuesta · texto antes de la negrita', {
      group: 'contenido',
      description: 'El recuadro se arma así: este texto + texto en negrita + texto después. Cuida los espacios entre partes.',
    }),
    texto('tiemposStrong', 'Tiempos de respuesta · texto en negrita', { group: 'contenido' }),
    parrafo('tiemposB', 'Tiempos de respuesta · texto después de la negrita', { group: 'contenido' }),

    texto('propuestaSub', 'Propuesta · antetítulo', { group: 'contenido' }),
    texto('propuestaTitulo', 'Propuesta · título', { group: 'contenido' }),
    parrafo('propuestaTexto', 'Propuesta · texto', { group: 'contenido' }),

    texto('ctaTitulo', 'Contacto · título', { group: 'lateral' }),
    parrafo('ctaDesc', 'Contacto · texto', { group: 'lateral' }),
    campoEmail(),
    campoAsunto(),
    campoTelefono(),
    campoHorario(),

    ...camposRelacionados(),
  ],
})
