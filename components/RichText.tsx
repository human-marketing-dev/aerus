import Link from 'next/link'
import { PortableText, type PortableTextComponents } from 'next-sanity'
import { lp, type Lang } from '@/lib/i18n'
import type { PTBlock } from '@/content/richtext'

// Muestra texto enriquecido de Sanity (campo "Texto enriquecido"). Los enlaces internos
// (/ayuda/…) se convierten a la URL del idioma; los externos abren en pestaña nueva.
// `components` permite ajustar las etiquetas/clases de cada página.
export default function RichText({
  value,
  lang,
  components,
}: {
  value: PTBlock[] | unknown[] | undefined
  lang: Lang
  components?: PortableTextComponents
}) {
  if (!value?.length) return null
  const base: PortableTextComponents = {
    marks: {
      link: ({ value: mark, children }) => {
        const href: string = mark?.href ?? '#'
        if (href.startsWith('/')) return <Link href={lp(lang, href)}>{children}</Link>
        const external = /^https?:\/\//.test(href)
        return (
          <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {children}
          </a>
        )
      },
    },
  }
  return (
    <PortableText
      value={value as never}
      components={{ ...base, ...components, marks: { ...base.marks, ...components?.marks } }}
    />
  )
}
