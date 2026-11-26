import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { CtaBanner } from '../components/Sections/CtaBanner';
import { PRODUCT_CATEGORIES, PRODUCTS, type ProductCategory } from '../data/products';
import { usePageSeo } from '../utils/seo';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<'All Products' | ProductCategory>(
    'All Products'
  );

  usePageSeo({
    title: 'Products & Digital Innovations | Cbsoft',
    description:
      'Discover web applications, mobile platforms, developer software tools, and digital solutions built by Cbsoft.',
    path: '/products',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
      ],
    },
  });

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All Products') return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
              Products
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Our Products &amp; Digital Innovations
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Discover the digital solutions developed by our team to solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div
            className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-surface-light p-2"
            role="tablist"
            aria-label="Filter products by category"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap ${
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

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-surface-light p-10 text-center">
              <p className="font-display text-lg font-bold text-navy-950">
                No products listed in this category yet.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All Products')}
                className="mt-4 rounded-xl bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.slug}
                  className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b border-slate-100 bg-surface-light">
                    <ResponsiveImage
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                      fallbackTitle={product.name}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <span>{product.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-brand-primary">{product.status}</span>
                      </div>

                      <h2 className="mt-2 font-display text-xl font-bold text-navy-950">
                        {product.name}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink-body">
                        {product.shortDescription}
                      </p>

                      <p className="mt-4 font-mono text-xs text-ink-muted">
                        {product.technologies.slice(0, 4).join(' · ')}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <Link
                        to={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors whitespace-nowrap"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      {product.externalUrl && (
                        <a
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-navy-950 transition-colors whitespace-nowrap"
                        >
                          Visit
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        heading="Want a Custom Product Built for Your Team?"
        description="Cbsoft partners with organizations to design, engineer, and launch custom web and mobile products."
        primaryLabel="Start a Project"
        primaryTo="/contact?type=project"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </>
  );
}
