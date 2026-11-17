import { definePage, icono, lista, listaTextos, parrafo, texto } from './_helpers'
import { ctaLateral, encabezadoExperiencia, gruposExperiencia, listaRelacionados } from './_experiencia'

export const paginaGrupos = definePage({
  name: 'paginaGrupos',
  title: 'Vuelos para grupos',
  groups: gruposExperiencia(
    { name: 'tipos', title: 'Tipos de grupo' },
    { name: 'beneficios', title: 'Beneficios' },
    { name: 'pasos', title: 'Cómo funciona' },
  ),
  fields: [
    ...encabezadoExperiencia(),

    // Tipos de grupo
    texto('tiposSubtitulo', 'Tipos de grupo · antetítulo', { group: 'tipos' }),
    texto('tiposTitle', 'Tipos de grupo · título', { group: 'tipos' }),
    lista('tipos', 'Tarjetas de tipos de grupo', 'tipoGrupo', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'tipos', itemTitle: 'titulo' }),

    // Beneficios
    texto('beneficiosSubtitulo', 'Beneficios · antetítulo', { group: 'beneficios' }),
    texto('beneficiosTitle', 'Beneficios · título', { group: 'beneficios' }),
    listaTextos('beneficios', 'Beneficios (viñetas)', { group: 'beneficios' }),

    // Cómo funciona
    texto('pasosTitle', 'Cómo funciona · título', { group: 'pasos' }),
    lista('pasos', 'Pasos', 'pasoGrupo', [
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'pasos', itemTitle: 'titulo', description: 'Se numeran solos en el orden de la lista.' }),

    // Barra lateral
    ...ctaLateral('Tarjeta de contacto'),
    texto('relacionadosTitle', 'Tarjeta de enlaces · título', { group: 'lateral' }),
    listaRelacionados('relacionados', 'Tarjeta de enlaces · enlaces'),
  ],
})
