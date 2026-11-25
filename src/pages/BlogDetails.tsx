import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Copy, Share2 } from 'lucide-react';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { BLOG_POSTS, getBlogPostBySlug } from '../data/blog';
import { usePageSeo } from '../utils/seo';
import { NotFound } from './NotFound';

export function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);
  const [copied, setCopied] = useState(false);

  usePageSeo({
    title: post ? `${post.title} | Cbsoft Blog` : 'Article Not Found | Cbsoft',
    description: post ? post.excerpt : 'The requested blog article could not be found.',
    path: post ? `/blog/${post.slug}` : '/blog',
    type: 'article',
    structuredData: post
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { '@type': 'Organization', name: post.author },
            publisher: { '@type': 'Organization', name: 'Cbsoft' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `/blog/${post.slug}`,
              },
            ],
          },
        ]
      : undefined,
  });

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>

          <p className="mt-6 text-xs sm:text-sm font-medium text-slate-300">
            <span className="font-semibold text-brand-electric">{post.category}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{post.publishedAt}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </p>

          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 text-sm text-slate-300">
            By <span className="font-semibold text-white">{post.author}</span> · {post.authorRole}
          </div>
        </div>
      </section>

      <article className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-navy-950">
            <ResponsiveImage
              src={post.coverImage}
              alt={post.coverAlt}
              className="h-full w-full object-cover"
              wrapperClassName="h-full w-full"
              priority
              fallbackTitle={post.title}
            />
          </div>

          <p className="mt-8 text-lg font-medium leading-relaxed text-navy-950 sm:text-xl">
            {post.excerpt}
          </p>

          <div className="mt-8 space-y-8 border-t border-slate-200 pt-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold text-navy-950">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((para) => (
                    <p key={para} className="text-base leading-relaxed text-ink-body">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Social Share & Back Navigation */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-b border-slate-200 py-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950">
                <Share2 className="h-4 w-4 text-brand-primary" aria-hidden="true" />
                Share article:
              </span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-ink-body hover:bg-surface-light transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    Link Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    Copy Link
                  </>
                )}
              </button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-ink-body hover:bg-surface-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-ink-body hover:bg-surface-light transition-colors"
              >
                X / Twitter
              </a>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-navy-950">Related Articles</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-primary/35 transition-colors"
                >
                  <p className="text-xs font-medium text-ink-muted">
                    <span className="font-semibold text-brand-primary">{related.category}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>{related.readingTime}</span>
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy-950 group-hover:text-brand-primary transition-colors">
                    {related.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Read Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
