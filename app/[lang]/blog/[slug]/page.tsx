import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPost, getAllPosts, formatFecha, type ContentBlock } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import { alternates, isLang, lp } from '@/lib/i18n'

const T = {
  es: {
    metaSuffix: 'Blog Aerus',
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    blog: 'Blog',
    moreDestinos: 'Más destinos',
    moreAerus: 'Más de Aerus',
    ctaDestinosTitle: '¿Listo para volar?',
    ctaDestinosDesc: 'Reserva tu vuelo directo con Aerus.',
    ctaDestinosBtn: 'Ver rutas disponibles',
    ctaAerusTitle: 'Conoce Aerus',
    ctaAerusDesc: 'La aerolínea regional de México.',
    ctaAerusBtn: 'Quiénes somos',
    back: '← Volver al blog',
  },
  en: {
    metaSuffix: 'Aerus Blog',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    blog: 'Blog',
    moreDestinos: 'More destinations',
    moreAerus: 'More from Aerus',
    ctaDestinosTitle: 'Ready to fly?',
    ctaDestinosDesc: 'Book your direct flight with Aerus.',
    ctaDestinosBtn: 'See available routes',
    ctaAerusTitle: 'Get to know Aerus',
    ctaAerusDesc: 'Mexico’s regional airline.',
    ctaAerusBtn: 'About us',
    back: '← Back to the blog',
  },
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/blog/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLang(lang)) return {}
  const post = getPost(slug, lang)
  if (!post) return {}
  return {
    title: `${post.titulo} | ${T[lang].metaSuffix}`,
    description: post.extracto,
    alternates: alternates(lang, `/blog/${slug}/`),
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

export default async function BlogPostPage({ params }: PageProps<'/[lang]/blog/[slug]'>) {
  const { lang, slug } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const post = getPost(slug, lang)
  if (!post) notFound()

  const allPosts = getAllPosts(lang)
  const related  = allPosts.filter(p => p.slug !== slug && p.grupo === post.grupo).slice(0, 3)
  const others   = allPosts.filter(p => p.slug !== slug && p.grupo !== post.grupo).slice(0, 2)
  const sidebar  = related.length ? related : others

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="blog-post-hero">
          <div className="container blog-post-hero-inner">
            <nav className="destino-breadcrumb" aria-label={t.breadcrumbLabel}>
              <Link href={lp(lang, '/')}>{t.home}</Link>
              <span aria-hidden="true"> › </span>
              <Link href={lp(lang, '/blog/')}>{t.blog}</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">{post.categoria}</span>
            </nav>
            <span className={`blog-card-cat blog-card-cat--${post.grupo}`}
              style={{ marginBottom: 16, display: 'inline-block' }}>
              {post.categoria}
            </span>
            <h1 className="blog-post-titulo">{post.titulo}</h1>
            <time className="blog-post-fecha" dateTime={post.fecha}>
              {formatFecha(post.fecha, lang)}
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
                    {post.grupo === 'destinos' ? t.moreDestinos : t.moreAerus}
                  </p>
                  <ul className="docs-related-list">
                    {sidebar.map(p => (
                      <li key={p.slug}>
                        <Link href={lp(lang, `/blog/${p.slug}/`)} className="docs-related-link">
                          <span>{p.titulo}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {post.grupo === 'destinos' && (
                  <div className="mro-cta-sidebar" style={{ marginTop: 16 }}>
                    <p className="mro-cta-sidebar-titulo">{t.ctaDestinosTitle}</p>
                    <p className="mro-cta-sidebar-desc">{t.ctaDestinosDesc}</p>
                    <Link
                      href={lp(lang, '/rutas/')}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                    >
                      {t.ctaDestinosBtn}
                    </Link>
                  </div>
                )}

                {post.grupo === 'aerus' && (
                  <div className="mro-cta-sidebar" style={{ marginTop: 16 }}>
                    <p className="mro-cta-sidebar-titulo">{t.ctaAerusTitle}</p>
                    <p className="mro-cta-sidebar-desc">{t.ctaAerusDesc}</p>
                    <Link
                      href={lp(lang, '/nosotros/')}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                    >
                      {t.ctaAerusBtn}
                    </Link>
                  </div>
                )}

                <div style={{ marginTop: 16 }}>
                  <Link href={lp(lang, '/blog/')} className="docs-related-link" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{t.back}</span>
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
