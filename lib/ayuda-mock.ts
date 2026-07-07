export interface AyudaCategoria {
  titulo: string
  slug: string
  descripcion: string
  icono: string
}

export const AYUDA_CATEGORIAS: AyudaCategoria[] = [
  {
    titulo: 'Preguntas frecuentes',
    slug: 'faq',
    descripcion: 'Reservas, cambios, cancelaciones y más respondidas.',
    icono: 'ticket',
  },
  {
    titulo: 'Documentos para viajar',
    slug: 'documentos-para-viajar',
    descripcion: 'Identificación y documentos requeridos según tu destino.',
    icono: 'shield',
  },
  {
    titulo: 'Equipaje',
    slug: 'equipaje',
    descripcion: 'Políticas de equipaje de mano y documentado.',
    icono: 'luggage',
  },
  {
    titulo: 'Tiempos de llegada al aeropuerto',
    slug: 'tiempos-aeropuerto',
    descripcion: 'Con cuánta anticipación presentarte antes de tu vuelo.',
    icono: 'clock',
  },
  {
    titulo: 'Requerimientos especiales',
    slug: 'requerimientos-especiales',
    descripcion: 'Asistencia, movilidad reducida y necesidades especiales.',
    icono: 'support',
  },
  {
    titulo: 'Viajar con mascota',
    slug: 'viajar-con-mascota',
    descripcion: 'Requisitos y políticas para llevar a tu mascota a bordo.',
    icono: 'plane',
  },
  {
    titulo: 'Facturación',
    slug: 'facturacion',
    descripcion: 'Solicita y descarga la factura de tus vuelos.',
    icono: 'cash',
  },
  {
    titulo: 'Contacto',
    slug: 'contacto',
    descripcion: 'Habla con nosotros por teléfono, WhatsApp o correo.',
    icono: 'phone',
  },
]
