import { booleano, dato, definePage, enlace, icono, imagen, lista, parrafo, seccion, texto } from './_helpers'

// Página de inicio (home). Cada sección del home es un grupo de campos.
export const paginaInicio = definePage({
  name: 'paginaInicio',
  title: 'Inicio',
  groups: [
    { name: 'banners', title: 'Banners', default: true },
    { name: 'secciones', title: 'Secciones' },
    { name: 'pagos', title: 'Métodos de pago' },
  ],
  fields: [
    lista('banners', 'Banners del hero', 'banner', [
      imagen('imagen', 'Imagen de escritorio', { description: 'Recomendado 1920 × 1080 (16:9). El texto debe quedar en la franja central.' }),
      imagen('imagenMovil', 'Imagen para celular (opcional)', { optional: true, description: 'Recomendado 1080 × 1350. Si no se agrega, en celular se muestra la de escritorio completa.' }),
      imagen('imagenEn', 'Imagen de escritorio en inglés (opcional)', { optional: true, description: 'Solo si el banner tiene texto en la imagen y hay versión en inglés.' }),
      enlace('href', 'Enlace al hacer clic (opcional)', { optional: true }),
    ], { group: 'banners', itemTitle: 'href', description: 'Se muestran en el orden de la lista. Arrastra para reordenar.' }),

    seccion('experiencia', 'Por qué volar con Aerus', [
      imagen('foto', 'Foto'),
      dato('modelo', 'Modelo del avión (pie de foto)'),
      texto('caption', 'Pie de foto · detalle'),
      texto('eyebrow', 'Antetítulo'),
      texto('since', 'Texto a la derecha del antetítulo'),
      texto('linea1', 'Título · línea 1'),
      texto('linea2', 'Título · línea 2'),
      texto('linea3', 'Título · línea 3 (antes del resaltado)'),
      texto('acento', 'Título · palabra resaltada'),
      lista('stats', 'Datos destacados', 'dato', [
        texto('pre', 'Texto pequeño antes del número (opcional)', { optional: true }),
        texto('num', 'Número o frase grande'),
        texto('unit', 'Unidad (opcional)', { optional: true }),
        texto('label', 'Etiqueta (opcional)', { optional: true }),
        parrafo('sub', 'Descripción'),
      ], { itemTitle: 'num' }),
    ], { group: 'secciones', collapsed: true }),

    seccion('marca', 'Banner "Tu nueva forma de viajar"', [
      texto('texto', 'Texto del banner'),
    ], { group: 'secciones', collapsed: true }),

    seccion('tarifas', 'Tarifas', [
      texto('eyebrow', 'Antetítulo'),
      texto('titulo', 'Título (parte normal)'),
      texto('tituloAcento', 'Título (parte resaltada)'),
      parrafo('intro', 'Introducción'),
      texto('etiquetaTarifa', 'Etiqueta "TARIFA"'),
      texto('etiquetaDe', 'Etiqueta "DE" (TARIFA · 01 DE 03)'),
      texto('incluye', 'Título de la lista de beneficios'),
      texto('reservar', 'Botón reservar (se le agrega el nombre de la tarifa)'),
      enlace('reservarHref', 'Botón reservar · enlace'),
      texto('comparar', 'Botón comparar'),
      enlace('compararHref', 'Botón comparar · enlace'),
      lista('planes', 'Tarifas', 'plan', [
        texto('nombre', 'Nombre (p. ej. Light)'),
        icono('icono', 'Ícono de la pestaña'),
        texto('tagline', 'Frase corta'),
        parrafo('descripcion', 'Descripción'),
        lista('features', 'Beneficios', 'beneficio', [
          texto('nombre', 'Beneficio'),
          texto('detalle', 'Detalle'),
          icono('icono'),
          booleano('incluido', 'Incluido en esta tarifa'),
        ], { itemTitle: 'nombre' }),
      ], { itemTitle: 'nombre' }),
    ], { group: 'secciones', collapsed: true }),

    seccion('mapa', 'Mapa interactivo de rutas', [
      texto('eyebrow', 'Antetítulo'),
      texto('titulo', 'Título (parte normal)'),
      texto('tituloAcento', 'Título (parte resaltada)'),
      parrafo('intro', 'Introducción'),
      texto('statRutas', 'Dato · rutas directas'),
      texto('statDestinos', 'Dato · destinos'),
      texto('statIntl', 'Dato · internacionales'),
      texto('leyendaViva', 'Leyenda · codeshare Viva'),
      texto('leyendaExclusivo', 'Leyenda · destino exclusivo'),
      texto('verTodas', 'Botón ver todas las rutas'),
      enlace('verTodasHref', 'Botón ver todas · enlace'),
      texto('vuelosDirectos', 'Título del recuadro al elegir ciudad'),
      texto('porCiudad', 'Título de la lista por ciudad'),
      texto('otrasRutas', 'Nombre del grupo "Otras rutas"'),
    ], { group: 'secciones', collapsed: true, description: 'Las ciudades y rutas salen de Red de rutas.' }),

    seccion('espera', 'Espera minutos, no horas', [
      texto('eyebrow', 'Antetítulo'),
      texto('titulo', 'Título · inicio'),
      texto('tituloAcento', 'Título · parte resaltada'),
      texto('tituloFin', 'Título · final'),
      parrafo('lede', 'Texto introductorio'),
      lista('pasos', 'Pasos', 'paso', [
        texto('num', 'Número y nombre del paso'),
        texto('big', 'Número grande'),
        texto('unit', 'Unidad'),
        texto('title', 'Título'),
        parrafo('body', 'Texto'),
        texto('cta', 'Texto del enlace'),
        enlace('href', 'Enlace'),
      ], { itemTitle: 'title' }),
      texto('notaNegrita', 'Nota · parte en negrita'),
      parrafo('nota', 'Nota · texto'),
    ], { group: 'secciones', collapsed: true }),

    seccion('directos', 'Destinos directos', [
      texto('a', 'Título · línea 1'),
      texto('b', 'Título · línea 2'),
      parrafo('blurb', 'Texto', { description: '{n} se reemplaza por el número de rutas.' }),
      texto('activas', 'Etiqueta bajo el número'),
      texto('cta', 'Botón'),
      enlace('ctaHref', 'Botón · enlace'),
    ], { group: 'secciones', collapsed: true, description: 'La lista de rutas sale de Red de rutas.' }),

    seccion('servicios', 'Servicios adicionales', [
      texto('eyebrow', 'Antetítulo'),
      texto('titulo', 'Título (parte normal)'),
      texto('tituloAcento', 'Título (parte resaltada)'),
      texto('verTodos', 'Botón ver todos'),
      enlace('verTodosHref', 'Botón ver todos · enlace'),
      texto('verMas', 'Texto del enlace de cada tarjeta'),
      lista('items', 'Tarjetas', 'servicio', [
        dato('num', 'Número'),
        icono('icono'),
        texto('titulo', 'Título'),
        parrafo('texto', 'Texto'),
        texto('badge', 'Etiqueta (opcional)', { optional: true }),
        enlace('href', 'Enlace'),
      ], { itemTitle: 'titulo' }),
    ], { group: 'secciones', collapsed: true }),

    seccion('pagos', 'Métodos de pago', [
      texto('eyebrow', 'Antetítulo'),
      texto('titulo', 'Título (parte normal)'),
      texto('tituloAcento', 'Título (parte resaltada)'),
      texto('seguro', 'Texto de seguridad'),
      texto('problema', 'Texto de ayuda'),
      texto('soporte', 'Enlace de ayuda · texto'),
      enlace('soporteHref', 'Enlace de ayuda'),
      lista('grupos', 'Grupos de logos (cada uno es un carrusel)', 'grupo', [
        texto('titulo', 'Título'),
        texto('sub', 'Descripción'),
        icono('icono'),
        lista('marcas', 'Logos', 'marca', [
          dato('nombre', 'Nombre'),
          imagen('logo', 'Logo (blanco, fondo transparente)'),
        ], { itemTitle: 'nombre' }),
      ], { itemTitle: 'titulo' }),
    ], { group: 'pagos', description: 'También se muestra en la página Experiencia.' }),
  ],
})
