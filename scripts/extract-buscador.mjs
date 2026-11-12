// Convierte el buscador entregado como HTML (components/aerus-buscador/aerus-buscador-embed.html)
// en los dos archivos que usa el componente de React:
//   components/aerus-buscador/markup.ts  → estilos + HTML del bloque #aerus-buscador
//   components/aerus-buscador/init.js    → el script, como función initBuscador(root)
//
// Cuando manden una versión nueva del buscador: reemplazar el .html y correr
//   node scripts/extract-buscador.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'components', 'aerus-buscador')
const html = readFileSync(join(DIR, 'aerus-buscador-embed.html'), 'utf8')

const block = html.match(/<!-- =+ Buscador Aerus \+ Viva - inicio =+ -->([\s\S]*?)<!-- =+ Buscador Aerus \+ Viva - fin =+ -->/)
if (!block) throw new Error('No se encontraron los comentarios de inicio / fin del buscador')

const root = block[1].match(/<div id="aerus-buscador"[^>]*>([\s\S]*)<\/div>\s*<script>([\s\S]*?)<\/script>\s*$/)
if (!root) throw new Error('Estructura inesperada: se esperaba <div id="aerus-buscador">…</div><script>…</script>')
const [, inner, script] = root

// Ajustes de contenido acordados con el cliente (la aerolínea se llama solo "Viva").
// Si el buscador nuevo ya los trae, estos reemplazos simplemente no hacen nada.
const TEXT_FIXES = [
  ['Te llevamos a Viva Aerobus', 'Te llevamos a Viva'],
  ['We are taking you to Viva Aerobus', 'We are taking you to Viva'],
]

if (inner.includes('`') || inner.includes('${')) throw new Error('El HTML contiene ` o ${ y no cabe en un template string')
writeFileSync(join(DIR, 'markup.ts'),
  '// GENERADO por scripts/extract-buscador.mjs a partir de aerus-buscador-embed.html — no editar a mano.\n' +
  'export const BUSCADOR_HTML = String.raw`' + inner.trim() + '`\n')

const body = script.trim()
  .replace(/^\(function\(\)\{/, '')
  .replace(/\}\)\(\);?$/, '')
  .replace("root=document.getElementById('aerus-buscador')", 'root=rootEl')
if (!body.includes('root=rootEl')) throw new Error("No se encontró root=document.getElementById('aerus-buscador') en el script")

let js = body
for (const [from, to] of TEXT_FIXES) js = js.split(from).join(to)

writeFileSync(join(DIR, 'init.js'),
  '/* eslint-disable */\n' +
  '// @ts-nocheck\n' +
  '// GENERADO por scripts/extract-buscador.mjs a partir de aerus-buscador-embed.html — no editar a mano.\n' +
  '// Es el script original del buscador, envuelto en una función que recibe el contenedor.\n' +
  'export function initBuscador(rootEl) {\n' + js + '\n}\n')

console.log('markup.ts e init.js generados en', DIR)
