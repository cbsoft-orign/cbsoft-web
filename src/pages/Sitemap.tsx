import { Link } from 'react-router-dom';
import { ArrowRight, FileCode2, Layers, Newspaper, Package, Compass } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import { usePageSeo } from '../utils/seo';

const CORE_PAGES = [
  {
    path: '/',
    title: 'Home',
    description: 'Overview of Cbsoft digital solutions, featured products, services, and engineering approach.',
  },
  {
    path: '/about',
    title: 'About Us',
    description: 'Our mission, vision, core values, leadership team, and software delivery methodology.',
  },
  {
    path: '/services',
    title: 'Services',
    description: 'Full catalog of web, mobile, custom software, UI/UX design, digital solutions, and IT consulting.',
  },
  {
    path: '/products',
    title: 'Products',
    description: 'Explore Noza AI, MediBot, AutoCut AI, ToolMora, IkoBuild, and UniMarket.',
  },
  {
    path: '/blog',
    title: 'Blog & Insights',
    description: 'Engineering articles on resilient web platforms, scalable architecture, and product design.',
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Start a project inquiry, request a technical consultation, or view frequently asked questions.',
  },
  {
    path: '/sitemap',
    title: 'Sitemap',
    description: 'Complete directory of all pages, services, products, and articles across Cbsoft.',
  },
];

export function Sitemap() {
  usePageSeo({
    title: 'Sitemap | Cbsoft — All Pages & Resources',
    description:
      'Browse the complete directory of Cbsoft pages, engineering services, software products, and blog articles.',
    path: '/sitemap',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Sitemap', item: '/sitemap' },
      ],
    },
  });

  const totalPages = CORE_PAGES.length + SERVICES.length + PRODUCTS.length + BLOG_POSTS.length;

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
              Site Directory
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Cbsoft Sitemap
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Direct navigation across all {totalPages} pages of the Cbsoft web platform, including
              core pages, service capabilities, product profiles, and engineering articles.
            </p>
            <div className="mt-6">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              >
                <FileCode2 className="h-4 w-4 text-brand-electric" aria-hidden="true" />
                View XML Sitemap (/sitemap.xml)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Core Pages */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-950">Core Pages</h2>
                  <p className="text-xs text-ink-muted">{CORE_PAGES.length} pages</p>
                </div>
              </div>
              <ul className="mt-6 divide-y divide-slate-100">
                {CORE_PAGES.map((page) => (
                  <li key={page.path} className="py-3.5 first:pt-0 last:pb-0">
                    <Link
                      to={page.path}
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <span className="font-display text-sm font-semibold text-navy-950 group-hover:text-brand-primary transition-colors">
                          {page.title}
                        </span>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                          {page.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-primary transition-colors"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-950">Service Pages</h2>
                  <p className="text-xs text-ink-muted">{SERVICES.length} specialized services</p>
                </div>
              </div>
              <ul className="mt-6 divide-y divide-slate-100">
                {SERVICES.map((service) => (
                  <li key={service.slug} className="py-3.5 first:pt-0 last:pb-0">
                    <Link
                      to={`/services/${service.slug}`}
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <span className="font-display text-sm font-semibold text-navy-950 group-hover:text-brand-primary transition-colors">
                          {service.title}
                        </span>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                          {service.shortDescription}
                        </p>
                      </div>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-primary transition-colors"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Package className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-950">Product Pages</h2>
                  <p className="text-xs text-ink-muted">{PRODUCTS.length} product profiles</p>
                </div>
              </div>
              <ul className="mt-6 divide-y divide-slate-100">
                {PRODUCTS.map((product) => (
                  <li key={product.slug} className="py-3.5 first:pt-0 last:pb-0">
                    <Link
                      to={`/products/${product.slug}`}
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-semibold text-navy-950 group-hover:text-brand-primary transition-colors">
                            {product.name}
                          </span>
                          <span className="font-mono text-[11px] text-ink-muted">
                            ({product.category})
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                          {product.shortDescription}
                        </p>
                      </div>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-primary transition-colors"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Posts */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-950">Blog Articles</h2>
                  <p className="text-xs text-ink-muted">{BLOG_POSTS.length} published articles</p>
                </div>
              </div>
              <ul className="mt-6 divide-y divide-slate-100">
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug} className="py-3.5 first:pt-0 last:pb-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <span className="font-display text-sm font-semibold text-navy-950 group-hover:text-brand-primary transition-colors">
                          {post.title}
                        </span>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                          {post.category} · {post.publishedAt}
                        </p>
                      </div>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-primary transition-colors"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
