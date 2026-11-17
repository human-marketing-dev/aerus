# Sanity (CMS) en el sitio de Aerus

El contenido editable vive en Sanity (proyecto `ucpf0jle`, dataset `production`).
El panel de edición está dentro del sitio: **/studio**.

## Qué se edita hoy en Sanity

- **Red de rutas → Destinos**: cada destino es una ciudad del mapa. Al publicar uno aparece su
  página (`/destinos/<slug>`), su card y su punto en el mapa interactivo.
- **Red de rutas → Rutas**: cada ruta enlaza dos destinos. Al publicarla aparece su página
  (`/rutas/<slug>`) y se agrega sola al listado de rutas, al mapa interactivo, a "Destinos
  directos", a las conexiones de cada destino, al mapa del sitio, a sala de prensa y a Alianza
  con Viva. Al borrarla desaparece de todo.
- **Redirects**: para URLs que ya no existen (p. ej. una ruta borrada).

Todos los textos se capturan en español e inglés, y todas las páginas piden su SEO
(meta título, meta descripción, imagen para compartir).

El código que lee este contenido está en `lib/red.ts`; los esquemas en `sanity/schemaTypes/`.

- **Páginas**: todos los textos, imágenes y SEO de cada página fija, más la configuración
  general (menú, aviso de rutas, footer, redes, boletín, SEO por defecto). Inicio y
  Configuración general tienen ES/EN lado a lado; el resto tiene una versión **Español**
  (completa) y una **English** (solo textos). Detalle en `content/README.md`.

> **Límite del plan gratuito:** 2,000 atributos por dataset; hoy se usan ~1,430. Ver
> `content/README.md` antes de agregar páginas grandes.

## Variables de entorno

| Variable | Dónde | Para qué |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | local y servidor | `ucpf0jle` |
| `NEXT_PUBLIC_SANITY_DATASET` | local y servidor | `production` |
| `SANITY_API_READ_TOKEN` | local y servidor | token **Viewer**: vista previa de borradores |
| `SANITY_REVALIDATE_SECRET` | local y servidor | secreto del webhook (mismo valor en Sanity) |
| `SANITY_API_WRITE_TOKEN` | solo local | token **Editor**: scripts de migración. No va en el servidor |

## Configuración en sanity.io/manage (una vez por ambiente)

1. **API → CORS origins**: agregar el dominio del sitio (p. ej. `https://devhmkt24.xyz`, luego
   el dominio final) con **Allow credentials** activado. Sin esto `/studio` no conecta.
2. **API → Webhooks → Create webhook** (uno por dominio):
   - URL: `https://<dominio>/api/revalidate`
   - Dataset: `production` · Trigger on: Create, Update, Delete
   - Filter: **vacío** (cualquier contenido publicado regenera el sitio; así no hay que editar
     el webhook cada vez que se agrega un tipo de contenido)
   - HTTP method: POST · Secret: el valor de `SANITY_REVALIDATE_SECRET`
   - Drafts: desactivado (solo contenido publicado)

## Cómo se actualiza el sitio

- Al **publicar** en Sanity, el webhook regenera las páginas (en su siguiente visita). No hace
  falta rebuild ni reiniciar.
- Destinos y rutas **nuevos** se generan en su primera visita.
- La herramienta **Vista previa** del panel muestra los borradores sobre el sitio real antes de
  publicar.
