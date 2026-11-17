import { definePage, icono, lista, listaTextos, parrafo, texto } from './_helpers'
import { GRUPOS, camposEncabezado, camposRelacionados, campoEmail } from './on-demand-comun'

export const paginaEmpresas = definePage({
  name: 'paginaEmpresas',
  title: 'Cuenta empresarial',
  groups: GRUPOS,
  fields: [
    ...camposEncabezado('Cuenta '),

    texto('solucionesSub', 'Qué incluye · antetítulo', { group: 'contenido' }),
    texto('solucionesTitulo', 'Qué incluye · título', { group: 'contenido' }),
    lista('soluciones', 'Qué incluye (tarjetas)', 'solucion', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('paraQuienSub', 'Para quién es · antetítulo', { group: 'contenido' }),
    texto('paraQuienTitulo', 'Para quién es · título', { group: 'contenido' }),
    listaTextos('paraQuien', 'Para quién es · lista', { group: 'contenido' }),

    texto('compararSub', 'Comparativa · antetítulo', { group: 'contenido' }),
    texto('compararTitulo', 'Comparativa · título', { group: 'contenido' }),
    texto('colEmpresa', 'Comparativa · encabezado columna 1', { group: 'contenido' }),
    texto('colPass', 'Comparativa · encabezado columna 2', { group: 'contenido' }),
    lista('comparar', 'Comparativa · filas', 'fila', [
      texto('aspecto', 'Aspecto'),
      texto('empresa', 'Valor columna 1 (Cuenta empresarial)'),
      texto('pass', 'Valor columna 2 (Flight Pass)'),
    ], { group: 'contenido', itemTitle: 'aspecto' }),

    texto('ctaTitulo', 'Contacto · título', { group: 'lateral' }),
    parrafo('ctaDesc', 'Contacto · texto', { group: 'lateral' }),
    texto('ctaBtn', 'Contacto · texto del botón', {
      group: 'lateral',
      description: 'Escribe {email} donde va el correo; se reemplaza por el "Correo de contacto".',
    }),
    campoEmail({ description: 'El botón abre el correo del visitante con esta dirección.' }),

    ...camposRelacionados(),
  ],
})
