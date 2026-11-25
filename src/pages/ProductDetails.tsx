import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Users } from 'lucide-react';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { CtaBanner } from '../components/Sections/CtaBanner';
import { getProductBySlug } from '../data/products';
import { usePageSeo } from '../utils/seo';
import { NotFound } from './NotFound';

export function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  usePageSeo({
    title: product ? `${product.name} | Cbsoft Products` : 'Product Not Found | Cbsoft',
    description: product
      ? product.shortDescription
      : 'The requested Cbsoft product page could not be found.',
    path: product ? `/products/${product.slug}` : '/products',
    structuredData: product
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
            {
              '@type': 'ListItem',
              position: 3,
              name: product.name,
              item: `/products/${product.slug}`,
            },
          ],
        }
      : undefined,
  });

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Products
          </Link>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-slate-300">
                <span>{product.category}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="font-semibold text-brand-electric">{product.status}</span>
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {product.introduction}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?type=project"
                  className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all whitespace-nowrap"
                >
                  Request Product Demo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {product.externalUrl && (
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors whitespace-nowrap"
                  >
                    Visit Product
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-2xl">
                <ResponsiveImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full w-full"
                  priority
                  fallbackTitle={product.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-10">
              <div>
                <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
                  Problem Being Solved
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                  Why We Built {product.name}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-body">
                  {product.problemSolved}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950">Key Features</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-surface-light p-4 text-sm text-ink-body"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h3 className="font-display text-lg font-bold text-navy-950">Product Overview</h3>
                <dl className="mt-4 divide-y divide-slate-100 text-sm">
                  <div className="flex justify-between py-3">
                    <dt className="text-ink-muted">Category</dt>
                    <dd className="font-semibold text-navy-950">{product.category}</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-ink-muted">Status</dt>
                    <dd className="font-semibold text-brand-primary">{product.status}</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-ink-muted">Public URL</dt>
                    <dd className="font-medium text-ink-body">
                      {product.externalUrl ? 'Available' : 'In preparation'}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-surface-light p-7">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy-950">
                  <Users className="h-5 w-5 text-brand-primary" aria-hidden="true" />
                  Target Users
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-body">
                  {product.targetUsers.map((userGroup) => (
                    <li key={userGroup} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                        aria-hidden="true"
                      />
                      <span>{userGroup}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h3 className="font-display text-lg font-bold text-navy-950">Technologies Used</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-surface-light px-3 py-1.5 font-mono text-xs font-medium text-navy-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading={`Interested in ${product.name}?`}
        description="Get in touch with Cbsoft to discuss early access, customization, or a tailored implementation for your organization."
        primaryLabel="Contact Our Team"
        primaryTo="/contact?type=project"
        secondaryLabel="Back to Products"
        secondaryTo="/products"
      />
    </>
  );
}
