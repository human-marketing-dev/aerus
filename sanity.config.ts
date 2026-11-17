'use client'
// Configuración del panel de edición (Sanity Studio), montado en /studio.
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { resolve } from './sanity/presentation'
import { PAGE_TYPES, PAGES, esPorIdioma } from './content/registry'

export default defineConfig({
  name: 'aerus',
  title: 'Aerus',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Las páginas fijas no se crean desde "+ Crear": ya existen una por página
    templates: templates => [
      ...templates.filter(t => !PAGE_TYPES.has(t.schemaType)),
      // Páginas "por idioma": cada documento sabe su idioma
      ...PAGES.filter(esPorIdioma).flatMap(p => (['es', 'en'] as const).map(idioma => ({
        id: `${p.schema.name}-${idioma}`,
        title: `${p.schema.title} (${idioma})`,
        schemaType: p.schema.name,
        value: { idioma },
      }))),
    ],
  },
  document: {
    // En las páginas fijas no se permite duplicar ni borrar
    actions: (actions, ctx) =>
      PAGE_TYPES.has(ctx.schemaType)
        ? actions.filter(a => a.action && !['duplicate', 'delete'].includes(a.action))
        : actions,
  },
  plugins: [
    structureTool({ title: 'Contenido', structure }),
    presentationTool({
      title: 'Vista previa',
      resolve,
      previewUrl: { previewMode: { enable: '/api/draft-mode/enable' } },
    }),
    // Consultas GROQ de prueba (útil para desarrollo)
    visionTool({ defaultApiVersion: apiVersion, title: 'Consultas' }),
  ],
})
