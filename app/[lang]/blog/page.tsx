import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, formatFecha, type BlogPost } from '@/lib/blog-data'
import { alternates, isLang, lp, type Lang } from '@/lib/i18n'

const PATH = '/blog/'

const T = {
  es: {
    metaTitle: 'Blog | Aerus',
    metaDescription:
      'Descubre destinos, conoce la historia de Aerus y encuentra todo lo que necesitas saber sobre volar con la aerolínea regional de México.',
    eyebrow: 'Aerus',
    title: 'Blog',
    intro: 'Destinos, rutas y noticias de la aerolínea regional de México.',
    groupDestinos: 'Destinos',
    groupAerus: 'Aerus',
    readMore: 'Leer artículo',
  },
  en: {
    metaTitle: 'Blog | Aerus',
    metaDescription:
      'Discover destinations, learn about Aerus’s story and find everything you need to know about flying with Mexico’s regional airline.',
    eyebrow: 'Aerus',
    title: 'Blog',
    intro: 'Destinations, routes and news from Mexico’s regional airline.',
    groupDestinos: 'Destinations',
    groupAerus: 'Aerus',
    readMore: 'Read article',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/blog'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: T[lang].metaTitle,
    description: T[lang].metaDescription,
    alternates: alternates(lang, PATH),
  }
}

function PostCard({ post, lang }: { post: BlogPost; lang: Lang }) {
  return (
    <article className="blog-card">
      <div className="blog-card-meta">
        <span className={`blog-card-cat blog-card-cat--${post.grupo}`}>{post.categoria}</span>
        <time className="blog-card-fecha" dateTime={post.fecha}>
          {formatFecha(post.fecha, lang)}
        </time>
      </div>
      <h2 className="blog-card-titulo">{post.titulo}</h2>
      <p className="blog-card-extracto">{post.extracto}</p>
      <Link href={lp(lang, `/blog/${post.slug}/`)} className="blog-card-link">
        {T[lang].readMore}
        <span aria-hidden="true"> →</span>
      </Link>
    </article>
  )
}

export default async function BlogPage({ params }: PageProps<'/[lang]/blog'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  const posts = getAllPosts(lang)

  const destinos = posts.filter(p => p.grupo === 'destinos')
  const aerus    = posts.filter(p => p.grupo === 'aerus')

  return (
    <>
      <Nav lang={lang} />
      <main>

        <section className="blog-hero">
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.eyebrow}</div>
            <h1 className="blog-hero-headline">{t.title}</h1>
            <p className="blog-hero-intro">
              {t.intro}
            </p>
          </div>
        </section>

        <section className="blog-body">
          <div className="container">

            {destinos.length > 0 && (
              <div className="blog-group">
                <p className="blog-group-label">{t.groupDestinos}</p>
                <div className="blog-grid">
                  {destinos.map(post => (
                    <PostCard key={post.slug} post={post} lang={lang} />
                  ))}
                </div>
              </div>
            )}

            {aerus.length > 0 && (
              <div className="blog-group">
                <p className="blog-group-label">{t.groupAerus}</p>
                <div className="blog-grid">
                  {aerus.map(post => (
                    <PostCard key={post.slug} post={post} lang={lang} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
