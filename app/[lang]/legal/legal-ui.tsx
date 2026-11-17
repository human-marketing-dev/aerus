// Piezas comunes de las páginas legales (no es una ruta: solo lo importan los page.tsx de /legal).
import type { PortableTextComponents } from 'next-sanity'

// Textos genéricos de interfaz (no se editan en Sanity)
export const UI = {
  es: { breadcrumbLabel: 'Ruta de navegación', home: 'Inicio' },
  en: { breadcrumbLabel: 'Breadcrumb', home: 'Home' },
}

// Texto enriquecido de las secciones legales: mismas etiquetas que el documento original
// (los estilos vienen de .legal-section h2 / h3 / p / ul / li en globals.css)
export const LEGAL_RT: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
}

/** Recuadro con la nota de traducción (solo si tiene texto). */
export function AvisoTraduccion({ texto }: { texto?: string }) {
  if (!texto?.trim()) return null
  return (
    <div className="docs-callout" style={{ marginTop: 0, marginBottom: 32 }}>
      <p>{texto}</p>
    </div>
  )
}
