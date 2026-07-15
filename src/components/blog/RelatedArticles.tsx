import Link from 'next/link';

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-6 bg-vert rounded-full" />
        <h2 className="text-2xl font-bold text-foreground">Articles connexes</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group relative flex flex-col bg-surface border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-vert/30 hover:shadow-lg hover:shadow-vert/5 hover:-translate-y-0.5"
          >
            {/* Read Time Badge */}
            <div className="flex items-center gap-1.5 mb-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-xs text-muted font-medium">{article.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-white mb-2 leading-snug group-hover:text-vert transition-colors duration-200">
              {article.title}
            </h3>

            {/* Excerpt - truncated to 2 lines */}
            <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-6">
              {article.excerpt}
            </p>

            {/* Spacer to push arrow to bottom */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-vert font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Lire l&apos;article
              </span>

              {/* Arrow Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-vert/15 transition-all duration-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:text-vert transition-colors duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
