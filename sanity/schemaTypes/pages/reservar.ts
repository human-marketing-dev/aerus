import { definePage, parrafo, texto } from './_helpers'

// Páginas de la sección Reservar que por ahora solo muestran un aviso de "próximamente"
// (Reservar, Métodos de pago, Tarifas, Check-in, Mi reserva). Todas tienen los mismos campos.
const paginaProximamente = (name: string, title: string) =>
  definePage({
    name,
    title,
    groups: [{ name: 'contenido', title: 'Contenido', default: true }],
    fields: [
      texto('eyebrow', 'Antetítulo', { group: 'contenido', description: 'Texto pequeño sobre el título.' }),
      texto('title', 'Título', { group: 'contenido' }),
      parrafo('wip', 'Aviso', {
        group: 'contenido',
        description: 'Mensaje que se muestra mientras la página está en construcción.',
      }),
    ],
  })

export const paginaReservar = paginaProximamente('paginaReservar', 'Reservar')
export const paginaMetodosPago = paginaProximamente('paginaMetodosPago', 'Métodos de pago')
export const paginaTarifas = paginaProximamente('paginaTarifas', 'Tarifas y familias')
export const paginaCheckIn = paginaProximamente('paginaCheckIn', 'Check-in')
export const paginaMiReserva = paginaProximamente('paginaMiReserva', 'Mi reserva')
