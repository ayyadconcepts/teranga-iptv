import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog IPTV Sénégal — Guides, Tutos et Conseils',
  description:
    'Guides complets, tutoriels et conseils sur l\'IPTV au Sénégal. Comment installer, configurer et profiter de votre abonnement IPTV. Articles rédigés par des experts.',
  alternates: {
    canonical: 'https://terangaiptv.com/blog',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <article className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-vert/10 px-4 py-1.5 text-xs font-bold text-vert uppercase tracking-wider border border-vert/20">
            <span className="h-1.5 w-1.5 rounded-full bg-vert" />
            Blog IPTV Sénégal
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Guides, tutos et conseils IPTV
          </h1>
          <p className="text-muted-light text-base sm:text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur l&apos;IPTV au Sénégal : installation, configuration, dépannage et bons plans. Des articles rédigés pour les débutants comme pour les experts.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl bg-surface border border-white/10 overflow-hidden transition-all hover:border-vert/30 hover:-translate-y-1"
              >
                {/* Card header accent */}
                <div className="h-1 bg-gradient-to-r from-vert to-cyan-500" />

                <div className="flex flex-1 flex-col p-6">
                  {/* Meta */}
                  <div className="mb-4 flex items-center gap-3 text-xs text-muted-light">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-lg font-bold text-white group-hover:text-vert transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-6 text-sm text-muted-light line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-sm font-medium text-vert">
                    Lire l&apos;article
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
