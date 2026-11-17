# Páginas editables en Sanity

Cada página fija del sitio se edita en `/studio` → **Páginas**, con todos sus textos, imágenes,
listas y su SEO. Hay dos formas de guardar los idiomas (campo `modo` en `content/grupos/*.ts`):

| Modo | Cómo se ve en el panel | Se usa en |
|---|---|---|
| `porIdioma` (por defecto) | Dos documentos: **Español** (completo: textos, imágenes, enlaces, íconos, orden de las listas) y **English** (solo textos y textos alternativos; lo demás se toma de español). IDs `<nombre>-es` / `<nombre>-en`. | Casi todas las páginas |
| `bilingue` | Un documento con ES/EN lado a lado en cada campo. ID `<nombre>`. | Inicio y Configuración general (lo que se edita seguido) |

**Por qué:** el plan gratuito de Sanity permite 2,000 "atributos" (rutas de campo distintas en
todo el dataset). Un texto bilingüe lado a lado cuesta ~4; en `porIdioma` cuesta 1 (los dos
documentos comparten rutas). Con el sitio completo se usan ~1,430. Antes de agregar páginas
grandes en modo `bilingue`, revisar el conteo (Sanity → API → Usage, o el endpoint
`/data/stats/production`).

El esquema de cada página se escribe siempre en formato bilingüe con los helpers; para las páginas
`porIdioma` se convierte solo (`sanity/schemaTypes/pages/_porIdioma.ts`). `getPage` detecta el
formato guardado y arma el inglés con los textos en inglés + imágenes/enlaces/datos de español.

## Piezas de una página

| Archivo | Qué es |
|---|---|
| `content/pages/<pagina>.ts` | Textos actuales de la página (`es` y `en`, misma forma) + su tipo TS. Son el **respaldo** (si a un campo le falta contenido en Sanity, se usa este) y la **carga inicial**. |
| `sanity/schemaTypes/pages/<pagina>.ts` | Esquema del documento en Sanity, con los helpers de `_helpers.ts`. **Los nombres de los campos son iguales a las claves del archivo de contenido.** |
| `content/grupos/<grupo>.ts` | Registro de las páginas del grupo: `{ schema, defaults, path, seccion }`. |
| `app/[lang]/…/page.tsx` | Lee su contenido con `await getPage('<nombreDelEsquema>', lang, defaults)`. Recibe la misma forma que el archivo de contenido. |

Ejemplo completo: **Alianza con Viva** (`content/pages/alianza-viva.ts`,
`sanity/schemaTypes/pages/alianza-viva.ts`, `content/grupos/rutas-destinos.ts`,
`app/[lang]/rutas/alianza-viva/page.tsx`).

## Reglas

- **Qué va a Sanity:** todo lo que ve el visitante como contenido de la página: títulos, textos,
  listas de tarjetas/pasos/FAQ, botones y sus enlaces, imágenes, tablas, datos de contacto.
- **Qué se queda en código** (en un objeto `UI` pequeño en la página): textos genéricos de
  interfaz que se repiten en todo el sitio — "Inicio" y "Ruta de navegación" del breadcrumb,
  etiquetas de accesibilidad (aria), y textos con lógica (plurales, conteos) que no tiene sentido
  editar. Si una frase lleva un número variable simple, preferir un marcador `{n}` en el texto
  editable y reemplazarlo en la página.
- **SEO:** el archivo de contenido trae `seo: { metaTitle, metaDescription }` (antes `metaTitle` /
  `metaDescription` sueltos). El esquema lo agrega solo (`definePage`). En la página:
  `generateMetadata` → `seoMetadata(t.seo, lang, PATH)` (de `@/lib/seo`).
- **Enlaces:** se guardan como ruta canónica en español (`/ayuda/contacto/`) y en la página se
  pasan por `lp(lang, href)`. Campo con `enlace(...)`.
- **Imágenes:** en el archivo de contenido `{ src: '/archivo-en-public.webp', alt: '…' }`; en el
  esquema `imagen(...)`; en la página llega `{ src, alt, position }` (usar `position` como
  `objectPosition`/`backgroundPosition`).
- **Íconos:** `icono('icono')` (lista de `components/icon-names.ts`).
- **Texto largo con formato** (legales): `textoEnriquecido(...)`; en el archivo de contenido se
  escribe con `rt(h2('…'), p('… **negrita** [enlace](/ruta/)'), ul('…', '…'))` de
  `content/richtext.ts`; en la página `<RichText value={t.campo} lang={lang} components={…} />`.
- **Referencias a destinos/rutas** de la red: campo `reference`; en el archivo de contenido
  `{ slug: 'monterrey', nombre: 'Monterrey', iata: 'MTY' }`; `getPage` las resuelve.
- **Nombres de campos** en español o inglés da igual, pero **títulos y descripciones del esquema
  en español claro** (los ve el cliente), agrupados por sección con `group` o `seccion(...)`.
- **No cambiar el diseño** (clases CSS, estructura del markup). La página debe verse idéntica.

## Cargar los textos a Sanity

```bash
npx tsx --env-file=.env.local scripts/seed-pages.ts --only=paginaX        # simulación + advertencias
npx tsx --env-file=.env.local scripts/seed-pages.ts --only=paginaX --write # crea el documento
```

La simulación avisa si una clave del contenido no está en el esquema (o al revés), si las listas
tienen distinto número de elementos en ES y EN, o si falta una imagen en `public/`.
Sin `--force` nunca sobrescribe un documento que ya existe (para no pisar ediciones del cliente).
Para páginas `porIdioma` crea los dos documentos (`-es` completo, `-en` solo textos).
