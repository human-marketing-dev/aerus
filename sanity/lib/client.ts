import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  // Sin "stega": el sitio compara textos (nombres de ciudades, slugs) y los usa en atributos;
  // los caracteres invisibles de stega romperían esa lógica.
  stega: false,
})
