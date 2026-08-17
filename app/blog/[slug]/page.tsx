import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPost, getAllPosts, formatFecha, type ContentBlock } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.titulo} | Blog Aerus`,
    description: post.extracto,
  }
}

function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.tipo === 'h2') return <h2 className="blog-post-h2">{block.texto}</h2>
  if (block.tipo === 'h3') return <h3 className="blog-post-h3">{block.texto}</h3>
  if (block.tipo === 'p')  return <p className="blog-post-p">{block.texto}</p>
  if (block.tipo === 'list') {
    return (
      <ul className="blog-post-list">
        {block.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  return null
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related  = allPosts.filter(p => p.slug !== slug && p.categoria === post.categoria).slice(0, 3)
  const others   = allPosts.filter(p => p.slug !== slug && p.categoria !== post.categoria).slice(0, 2)
  const sidebar  = related.length ? related : others

  return (
    <>
      <Nav />
      <main>

        <section className="blog-post-hero">
          <div className="container blog-post-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/blog/">Blog</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{post.categoria}</span>
            </nav>
            <span className={`blog-card-cat blog-card-cat--${post.categoria.toLowerCase()}`}
              style={{ marginBottom: 16, display: 'inline-block' }}>
              {post.categoria}
            </span>
            <h1 className="blog-post-titulo">{post.titulo}</h1>
            <time className="blog-post-fecha" dateTime={post.fecha}>
              {formatFecha(post.fecha)}
            </time>
          </div>
        </section>

        <section className="blog-post-body">
          <div className="container">
            <div className="blog-post-layout">

              <article className="blog-post-content">
                <p className="blog-post-extracto">{post.extracto}</p>
                {post.contenido.map((block, i) => (
                  <RenderBlock key={i} block={block} />
                ))}
              </article>

              <aside className="blog-post-sidebar">
                <div className="docs-sidebar-card">
                  <p className="docs-sidebar-card-title">
                    {post.categoria === 'Destinos' ? 'Más destinos' : 'Más de Aerus'}
                  </p>
                  <ul className="docs-related-list">
                    {sidebar.map(p => (
                      <li key={p.slug}>
                        <Link href={`/blog/${p.slug}/`} className="docs-related-link">
                          <span>{p.titulo}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {post.categoria === 'Destinos' && (
                  <div className="mro-cta-sidebar" style={{ marginTop: 16 }}>
                    <p className="mro-cta-sidebar-titulo">¿Listo para volar?</p>
                    <p className="mro-cta-sidebar-desc">Reserva tu vuelo directo con Aerus.</p>
                    <Link
                      href="/rutas/"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                    >
                      Ver rutas disponibles
                    </Link>
                  </div>
                )}

                {post.categoria === 'Aerus' && (
                  <div className="mro-cta-sidebar" style={{ marginTop: 16 }}>
                    <p className="mro-cta-sidebar-titulo">Conoce Aerus</p>
                    <p className="mro-cta-sidebar-desc">La aerolínea regional de México.</p>
                    <Link
                      href="/nosotros/"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                    >
                      Quiénes somos
                    </Link>
                  </div>
                )}

                <div style={{ marginTop: 16 }}>
                  <Link href="/blog/" className="docs-related-link" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>← Volver al blog</span>
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
