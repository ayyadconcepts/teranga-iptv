import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticleBySlug, getRelatedArticles } from '@/lib/blog';
import { generateFAQJsonLd } from '@/lib/jsonld';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogCTA from '@/components/blog/BlogCTA';
import RelatedArticles from '@/components/blog/RelatedArticles';
import FAQSection from '@/components/FAQSection';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `https://terangaiptv.com/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      locale: 'fr_SN',
      siteName: 'IPTV Sénégal',
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.relatedSlugs);
  const faqItems = article.faq.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'IPTV Sénégal',
      url: 'https://terangaiptv.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IPTV Sénégal',
      url: 'https://terangaiptv.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://terangaiptv.com/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(faqItems)),
        }}
      />

      <div className="bg-background min-h-screen">
        {/* Breadcrumb */}
        <nav className="border-b border-border" aria-label="Breadcrumb">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <ol className="flex items-center gap-2 text-sm text-muted-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <header className="py-12 sm:py-16 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-sm text-muted-light">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime} de lecture
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </header>

        {/* Content with TOC sidebar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="flex gap-10">
            {/* TOC - Left sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <TableOfContents
                sections={article.sections.map((s) => ({
                  id: s.id,
                  title: s.title,
                }))}
              />
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              {/* Article sections */}
              {article.sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                  <div
                    className="prose-blog text-gray-300 text-[15px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />

                  {/* Insert CTA after the 3rd section */}
                  {idx === 2 && <BlogCTA />}
                </section>
              ))}

              {/* Final CTA */}
              <BlogCTA />

              {/* FAQ */}
              <div className="mt-16">
                <FAQSection faqs={faqItems} title="Questions fréquentes" />
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-16">
                  <RelatedArticles
                    articles={relatedArticles.map((a) => ({
                      slug: a.slug,
                      title: a.title,
                      excerpt: a.excerpt,
                      readTime: a.readTime,
                    }))}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
