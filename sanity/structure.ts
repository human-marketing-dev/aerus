import type { StructureResolver } from 'sanity/structure'
import { PAGES, SECCIONES, docIds, esPorIdioma } from '../content/registry'

// Menú del panel de edición
export const structure: StructureResolver = S => {
  // Páginas bilingües (ES/EN lado a lado): un documento que se abre directo.
  // Páginas "por idioma": dos documentos, Español (completo) e English (solo textos).
  const pageItem = (p: (typeof PAGES)[number]) => {
    const title = p.schema.title ?? p.schema.name
    const ids = docIds(p)
    if (!esPorIdioma(p)) {
      return S.listItem().id(p.schema.name).title(title)
        .child(S.document().schemaType(p.schema.name).documentId(ids.es).title(title))
    }
    return S.listItem().id(p.schema.name).title(title).child(
      S.list().title(title).items([
        S.listItem().id(ids.es).title('Español')
          .child(S.document().schemaType(p.schema.name).documentId(ids.es).title(`${title} · Español`)
            .initialValueTemplate(`${p.schema.name}-es`)),
        S.listItem().id(ids.en).title('English (solo textos)')
          .child(S.document().schemaType(p.schema.name).documentId(ids.en).title(`${title} · English`)
            .initialValueTemplate(`${p.schema.name}-en`)),
      ]),
    )
  }

  const secciones = SECCIONES.filter(s => PAGES.some(p => p.seccion === s))

  return S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items(
              secciones.map(sec =>
                S.listItem()
                  .title(sec)
                  .child(S.list().title(sec).items(PAGES.filter(p => p.seccion === sec).map(pageItem))),
              ),
            ),
        ),
      S.listItem()
        .title('Red de rutas')
        .child(
          S.list()
            .title('Red de rutas')
            .items([
              S.documentTypeListItem('destino').title('Destinos'),
              S.documentTypeListItem('ruta').title('Rutas'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('redirect').title('Redirects'),
    ])
}
