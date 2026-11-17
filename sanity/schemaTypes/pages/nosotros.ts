import { dato, definePage, enlace, lista, listaParrafos, parrafo, texto } from './_helpers'

const SALTO = 'Escribe cada renglón en su propia línea (Enter para cortar renglón).'

export const paginaNosotros = definePage({
  name: 'paginaNosotros',
  title: 'Nosotros',
  groups: [
    { name: 'portada', title: 'Portada y misión', default: true },
    { name: 'historia', title: 'Historia y valores' },
    { name: 'flota', title: 'Flota y llamado final' },
  ],
  fields: [
    // Portada
    texto('heroEyebrow', 'Portada · antetítulo', { group: 'portada' }),
    parrafo('heroHeadline', 'Portada · título (parte normal)', { group: 'portada', description: `${SALTO} Ej.: "Conectamos el México" / "que las grandes".` }),
    texto('heroHeadlineAccent', 'Portada · título (último renglón, en cursiva verde)', { group: 'portada', description: 'Ej.: "no alcanzan".' }),
    parrafo('heroIntro', 'Portada · introducción', { group: 'portada' }),
    texto('heroRule', 'Portada · línea inferior', { group: 'portada', description: 'Texto pequeño junto a la línea, p. ej. "Aerolínea regional · Aviación de turbohélice · México".' }),

    // Misión
    texto('missionLabel', 'Misión · antetítulo', { group: 'portada' }),
    parrafo('missionQuote', 'Misión · frase (parte normal)', { group: 'portada', description: 'Las comillas se ponen solas. Ej.: "Volar no debería ser un privilegio de las".' }),
    texto('missionQuoteAccent', 'Misión · frase (final en cursiva)', { group: 'portada', description: 'Ej.: "ciudades grandes."' }),

    // Cifras
    lista('stats', 'Cifras', 'cifra', [
      dato('num', 'Número o sigla', { description: 'Ej.: 7, 10, DGAC.' }),
      dato('suffix', 'Sufijo (opcional)', { optional: true, description: 'Se muestra pequeño junto al número, p. ej. "+".' }),
      texto('label', 'Descripción'),
    ], { group: 'portada', itemTitle: 'label' }),

    // Historia
    texto('historiaEyebrow', 'Historia · antetítulo', { group: 'historia' }),
    parrafo('historiaTitulo', 'Historia · título', { group: 'historia' }),
    listaParrafos('historiaBody', 'Historia · párrafos', { group: 'historia' }),
    parrafo('pullquote', 'Cita destacada (parte normal)', { group: 'historia', description: `${SALTO} Ej.: "No somos más pequeños," / "somos más".` }),
    texto('pullquoteAccent', 'Cita destacada (último renglón, en cursiva)', { group: 'historia', description: 'Ej.: "específicos."' }),
    texto('pullattr', 'Cita destacada · firma', { group: 'historia' }),

    // Valores
    texto('valoresTitulo', 'Valores · título', { group: 'historia' }),
    lista('valores', 'Valores', 'valor', [
      dato('num', 'Número', { description: 'Ej.: 01.' }),
      texto('titulo', 'Título (parte normal)'),
      texto('acento', 'Título (parte resaltada)'),
      parrafo('desc', 'Descripción'),
    ], { group: 'historia', itemTitle: 'titulo' }),

    // Flota
    texto('flotaLabel', 'Flota · antetítulo', { group: 'flota' }),
    dato('flotaNombre', 'Flota · nombre de la aeronave', { group: 'flota' }),
    texto('flotaSpecs', 'Flota · especificaciones', { group: 'flota' }),
    texto('flotaLink', 'Flota · texto del enlace', { group: 'flota' }),
    enlace('flotaHref', 'Flota · enlace', { group: 'flota' }),

    // Llamado final
    texto('ctaEyebrow', 'Llamado final · antetítulo', { group: 'flota' }),
    texto('ctaTitulo', 'Llamado final · título', { group: 'flota' }),
    texto('ctaReservar', 'Llamado final · botón principal', { group: 'flota' }),
    enlace('ctaReservarHref', 'Llamado final · enlace del botón principal', { group: 'flota' }),
    texto('ctaRutas', 'Llamado final · botón secundario', { group: 'flota' }),
    enlace('ctaRutasHref', 'Llamado final · enlace del botón secundario', { group: 'flota' }),
  ],
})
