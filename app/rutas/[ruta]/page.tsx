import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Confirmed routes — expand as network grows
const RUTAS: Record<string, { label: string; origen: string; destino: string }> = {
  'monterrey-brownsville': { label: 'Monterrey – Brownsville', origen: 'Monterrey', destino: 'Brownsville' },
  'monterrey-laredo':      { label: 'Monterrey – Laredo',      origen: 'Monterrey', destino: 'Laredo' },
  'monterrey-mcallen':     { label: 'Monterrey – McAllen',     origen: 'Monterrey', destino: 'McAllen' },
  'monterrey-durango':     { label: 'Monterrey – Durango',     origen: 'Monterrey', destino: 'Durango' },
  'cancun-cozumel':        { label: 'Cancún – Cozumel',        origen: 'Cancún',    destino: 'Cozumel' },
  'cancun-chetumal':       { label: 'Cancún – Chetumal',       origen: 'Cancún',    destino: 'Chetumal' },
  'veracruz-villahermosa': { label: 'Veracruz – Villahermosa', origen: 'Veracruz',  destino: 'Villahermosa' },
}

export function generateStaticParams() {
  return Object.keys(RUTAS).map(ruta => ({ ruta }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ruta: string }>
}): Promise<Metadata> {
  const { ruta } = await params
  const r = RUTAS[ruta]
  if (!r) return {}
  return { title: `Vuelos ${r.label} | Aerus` }
}

export default async function RutaPage({
  params,
}: {
  params: Promise<{ ruta: string }>
}) {
  const { ruta } = await params
  const r = RUTAS[ruta]
  if (!r) notFound()

  return (
    <>
      <Nav />
      <main>
        <section className="pg-wip">
          <div className="container">
            <div className="eyebrow">Rutas directas</div>
            <h1 className="section-headline">Vuelos {r.origen} a {r.destino}</h1>
            <p className="pg-wip-note">Esta página estará disponible próximamente.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
