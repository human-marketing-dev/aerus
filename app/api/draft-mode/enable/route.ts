// Activa la vista previa (modo borrador). Lo llama el panel de Sanity (herramienta "Vista previa");
// valida que la petición venga del panel antes de activarlo.
import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { client } from '@/sanity/lib/client'

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
})
