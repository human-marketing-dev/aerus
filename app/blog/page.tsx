import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, formatFecha } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog | Aerus',
  description:
    'Descubre destinos, conoce la historia de Aerus y encuentra todo lo que necesitas saber sobre volar con la aerolínea regional de México.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  const destinos = posts.filter(p => p.categoria === 'Destinos')
  const aerus    = posts.filter(p => p.categoria === 'Aerus')

  return (
    <>
      <Nav />
      <main>

        <section className="blog-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Aerus</div>
            <h1 className="blog-hero-headline">Blog</h1>
            <p className="blog-hero-intro">
              Destinos, rutas y noticias de la aerolínea regional de México.
            </p>
          </div>
        </section>

        <section className="blog-body">
          <div className="container">

            {destinos.length > 0 && (
              <div className="blog-group">
                <p className="blog-group-label">Destinos</p>
                <div className="blog-grid">
                  {destinos.map(post => (
                    <article key={post.slug} className="blog-card">
                      <div className="blog-card-meta">
                        <span className="blog-card-cat blog-card-cat--destinos">{post.categoria}</span>
                        <time className="blog-card-fecha" dateTime={post.fecha}>
                          {formatFecha(post.fecha)}
                        </time>
                      </div>
                      <h2 className="blog-card-titulo">{post.titulo}</h2>
                      <p className="blog-card-extracto">{post.extracto}</p>
                      <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                        Leer artículo
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {aerus.length > 0 && (
              <div className="blog-group">
                <p className="blog-group-label">Aerus</p>
                <div className="blog-grid">
                  {aerus.map(post => (
                    <article key={post.slug} className="blog-card">
                      <div className="blog-card-meta">
                        <span className="blog-card-cat blog-card-cat--aerus">{post.categoria}</span>
                        <time className="blog-card-fecha" dateTime={post.fecha}>
                          {formatFecha(post.fecha)}
                        </time>
                      </div>
                      <h2 className="blog-card-titulo">{post.titulo}</h2>
                      <p className="blog-card-extracto">{post.extracto}</p>
                      <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                        Leer artículo
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
