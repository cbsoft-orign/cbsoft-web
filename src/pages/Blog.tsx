import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategory } from '../data/blog';
import { usePageSeo } from '../utils/seo';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  usePageSeo({
    title: 'Blog | Cbsoft — Insights, Ideas & Innovation',
    description:
      'Read articles from the Cbsoft team on software engineering, scalable architecture, UI/UX design, and digital transformation.',
    path: '/blog',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
      ],
    },
  });

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost =
    selectedCategory === 'All' && !searchQuery.trim()
      ? filteredPosts.find((p) => p.featured) || filteredPosts[0]
      : null;

  const listPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
              Cbsoft Blog
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Insights, Ideas &amp; Innovation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Engineering notes, architecture perspectives, and digital product insights from the
              Cbsoft team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Category Controls */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-surface-light p-1.5"
              role="tablist"
              aria-label="Filter articles by category"
            >
              {BLOG_CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                      isSelected
                        ? 'cbsoft-gradient text-white shadow-sm'
                        : 'text-ink-body hover:bg-white hover:text-navy-950'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search blog articles"
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-950 placeholder:text-ink-muted focus:border-brand-primary"
              />
            </div>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <article className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-12">
              <div className="aspect-[16/10] lg:aspect-auto lg:col-span-6 bg-navy-950">
                <ResponsiveImage
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverAlt}
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full w-full"
                  priority
                  fallbackTitle={featuredPost.title}
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-6 lg:p-10">
                <p className="text-xs font-medium text-ink-muted">
                  <span className="font-semibold text-brand-primary">Featured</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{featuredPost.category}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{featuredPost.publishedAt}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{featuredPost.readingTime}</span>
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-body">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all whitespace-nowrap"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-surface-light p-10 text-center">
              <h2 className="font-display text-xl font-bold text-navy-950">
                No matching articles found
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Try clearing your search term or switching back to all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-5 rounded-xl bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {listPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-brand-primary/35 hover:shadow-lg hover:shadow-brand-primary/5"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-navy-950">
                    <ResponsiveImage
                      src={post.coverImage}
                      alt={post.coverAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      wrapperClassName="h-full w-full"
                      fallbackTitle={post.title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-medium text-ink-muted">
                        <span className="font-semibold text-brand-primary">{post.category}</span>
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        <span>{post.publishedAt}</span>
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        <span>{post.readingTime}</span>
                      </p>
                      <h2 className="mt-2 font-display text-xl font-bold text-navy-950">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="hover:text-brand-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-body">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                      <span className="font-medium text-ink-muted">{post.author}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-brand-primary hover:text-brand-magenta transition-colors"
                      >
                        Read
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
