import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Equipaje | Aerus' }

export default function EquipajePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pg-wip">
          <div className="container">
            <div className="eyebrow">Ayuda</div>
            <h1 className="section-headline">Equipaje</h1>
            <p className="pg-wip-note">Esta página estará disponible próximamente.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
