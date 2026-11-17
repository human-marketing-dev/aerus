// Ayuda para escribir texto enriquecido (Portable Text) en los archivos de contenido, que luego
// se carga a Sanity como campo "Texto enriquecido".
//
//   rt(
//     h2('Responsable del tratamiento'),
//     p('Aerus, con domicilio en **Monterrey**, es responsable… Ver [contacto](/ayuda/contacto/).'),
//     ul('Primer punto', 'Segundo punto con **negrita**'),
//   )
//
// En línea se admite **negrita**, *cursiva* y [texto](enlace).

export type PTSpan = { _type: 'span'; _key: string; text: string; marks: string[] }
export type PTBlock = {
  _type: 'block'
  _key: string
  style: 'normal' | 'h2' | 'h3'
  listItem?: 'bullet' | 'number'
  level?: number
  markDefs: { _type: 'link'; _key: string; href: string }[]
  children: PTSpan[]
}

let n = 0
const k = () => `b${(n++).toString(36)}`

function inline(text: string): Pick<PTBlock, 'children' | 'markDefs'> {
  const markDefs: PTBlock['markDefs'] = []
  const children: PTSpan[] = []
  // Tokens: [texto](href) | **negrita** | *cursiva*
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) children.push({ _type: 'span', _key: k(), text: text.slice(last, m.index), marks: [] })
    if (m[1]) {
      const key = k()
      markDefs.push({ _type: 'link', _key: key, href: m[2] })
      children.push({ _type: 'span', _key: k(), text: m[1], marks: [key] })
    } else if (m[3]) {
      children.push({ _type: 'span', _key: k(), text: m[3], marks: ['strong'] })
    } else if (m[4]) {
      children.push({ _type: 'span', _key: k(), text: m[4], marks: ['em'] })
    }
    last = re.lastIndex
  }
  if (last < text.length || !children.length) children.push({ _type: 'span', _key: k(), text: text.slice(last), marks: [] })
  return { children, markDefs }
}

const block = (style: PTBlock['style'], text: string, list?: PTBlock['listItem']): PTBlock => ({
  _type: 'block', _key: k(), style, ...(list ? { listItem: list, level: 1 } : {}), ...inline(text),
})

export const p = (text: string) => [block('normal', text)]
export const h2 = (text: string) => [block('h2', text)]
export const h3 = (text: string) => [block('h3', text)]
export const ul = (...items: string[]) => items.map(i => block('normal', i, 'bullet'))
export const ol = (...items: string[]) => items.map(i => block('normal', i, 'number'))
/** Junta bloques en un solo valor de texto enriquecido. */
export const rt = (...parts: PTBlock[][]): PTBlock[] => parts.flat()
