import { definePage, listaTextos, parrafo, texto } from './_helpers'
import { GRUPOS, camposEncabezado, camposRelacionados, campoAsunto, campoEmail, campoHorario, campoTelefono } from './on-demand-comun'

export const paginaFlightPassContacto = definePage({
  name: 'paginaFlightPassContacto',
  title: 'Flight Pass · Contacto',
  groups: GRUPOS,
  fields: [
    ...camposEncabezado('Solicitar '),

    texto('datosSub', 'Datos · antetítulo', { group: 'contenido' }),
    texto('datosTitulo', 'Datos · título', { group: 'contenido' }),
    parrafo('datosIntro', 'Datos · texto antes de la lista', { group: 'contenido' }),
    listaTextos('datos', 'Datos · lista', { group: 'contenido' }),

    texto('siguienteSub', 'Siguiente paso · antetítulo', { group: 'contenido' }),
    texto('siguienteTitulo', 'Siguiente paso · título', { group: 'contenido' }),
    parrafo('siguienteA', 'Siguiente paso · texto antes de la negrita', {
      group: 'contenido',
      description: 'El recuadro se arma así: este texto + texto en negrita + texto después. Cuida los espacios entre partes.',
    }),
    texto('siguienteStrong', 'Siguiente paso · texto en negrita', { group: 'contenido' }),
    parrafo('siguienteB', 'Siguiente paso · texto después de la negrita', { group: 'contenido' }),

    texto('ctaTitulo', 'Contacto · título', { group: 'lateral' }),
    parrafo('ctaDesc', 'Contacto · texto', { group: 'lateral' }),
    campoEmail(),
    campoAsunto(),
    campoTelefono(),
    campoHorario(),

    ...camposRelacionados(),
  ],
})
