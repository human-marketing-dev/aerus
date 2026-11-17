import { defineField, defineType, type Rule } from 'sanity'

// Campos bilingües: cada texto se captura en español y en inglés, lado a lado.
// Las traducciones se escriben a mano (no hay traducción automática).

export const LANGS = [
  { id: 'es', title: 'Español' },
  { id: 'en', title: 'English' },
] as const

/** Texto corto (una línea) en ES / EN. */
export const localeString = defineType({
  name: 'localeString',
  title: 'Texto (ES / EN)',
  type: 'object',
  options: { columns: 2 },
  fields: LANGS.map(l => defineField({ name: l.id, title: l.title, type: 'string' })),
})

/** Texto largo (párrafo) en ES / EN. */
export const localeText = defineType({
  name: 'localeText',
  title: 'Párrafo (ES / EN)',
  type: 'object',
  fields: LANGS.map(l => defineField({ name: l.id, title: l.title, type: 'text', rows: 4 })),
})

type LocaleValue = { es?: string; en?: string } | undefined

/**
 * Validación para campos bilingües obligatorios: exige los dos idiomas (error, no deja publicar)
 * y, opcionalmente, avisa si el texto es muy largo (advertencia, sí deja publicar).
 * Uso: `validation: rule => requireLocales(rule, { max: 60 })`
 */
export function requireLocales(rule: Rule, opts: { max?: number } = {}) {
  const rules = [
    rule.custom((value: LocaleValue) => {
      const missing = LANGS.filter(l => !value?.[l.id]?.trim()).map(l => l.title)
      return missing.length ? `Falta el texto en: ${missing.join(' y ')}` : true
    }),
  ]
  if (opts.max) {
    const max = opts.max
    rules.push(
      rule.custom((value: LocaleValue) => {
        const long = LANGS.filter(l => (value?.[l.id]?.length ?? 0) > max).map(l => l.title)
        return long.length
          ? `Recomendado: máximo ${max} caracteres (${long.join(', ')}); Google podría cortarlo`
          : true
      }).warning(),
    )
  }
  return rules
}
