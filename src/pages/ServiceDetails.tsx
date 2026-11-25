import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { CtaBanner } from '../components/Sections/CtaBanner';
import { FaqAccordion } from '../components/Sections/FaqAccordion';
import { ServiceIcon } from '../components/ServiceIcon';
import { PRODUCTS } from '../data/products';
import { getServiceBySlug } from '../data/services';
import { usePageSeo } from '../utils/seo';
import { NotFound } from './NotFound';

export function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  usePageSeo({
    title: service ? `${service.title} | Cbsoft Services` : 'Service Not Found | Cbsoft',
    description: service
      ? service.shortDescription
      : 'The requested Cbsoft service page could not be found.',
    path: service ? `/services/${service.slug}` : '/services',
    structuredData: service
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            provider: { '@type': 'Organization', name: 'Cbsoft' },
            description: service.detailedDescription,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: `/services/${service.slug}`,
              },
            ],
          },
        ]
      : undefined,
  });

  if (!service) {
    return <NotFound />;
  }

  const relatedProducts = PRODUCTS.filter((p) =>
    service.relatedProductSlugs.includes(p.slug)
  );

  return (
    <>
      {/* 1. Service-specific hero */}
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Services
          </Link>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-electric">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {service.heroSubtitle}
              </p>
            </div>

            <Link
              to={`/contact?type=project&service=${service.slug}`}
              className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all whitespace-nowrap shrink-0"
            >
              Request {service.shortTitle}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2 & 3. Detailed Description + Problems Solved */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
                Service Overview
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy-950">
                How Cbsoft Delivers {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-body sm:text-lg">
                {service.detailedDescription}
              </p>

              {/* 4. Features and capabilities */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-950">
                Features &amp; Capabilities
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-surface-light p-4 text-sm text-ink-body"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-8">
              {/* Problems solved */}
              <div className="rounded-2xl border border-slate-200 bg-surface-light p-7">
                <h3 className="font-display text-xl font-bold text-navy-950">
                  Challenges We Solve
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.problemsSolved.map((problem) => (
                    <li key={problem} className="flex items-start gap-3 text-sm text-ink-body">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta"
                        aria-hidden="true"
                      />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Technologies used */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h3 className="font-display text-xl font-bold text-navy-950">
                  Technologies &amp; Stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
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

      {/* 6. Development Process */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Execution Blueprint
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-950">
              Our {service.shortTitle} Process
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="font-mono text-sm font-bold text-brand-primary tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-body">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
                  Related Work
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-navy-950">
                  Related Products &amp; Solutions
                </h2>
              </div>
              <Link
                to="/products"
                className="text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors whitespace-nowrap"
              >
                All Products →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-12 hover:border-brand-primary/40 transition-colors"
                >
                  <div className="aspect-[4/3] sm:col-span-5 sm:aspect-auto bg-navy-950">
                    <ResponsiveImage
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                      fallbackTitle={product.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:col-span-7">
                    <div>
                      <p className="text-xs font-medium text-ink-muted">
                        {product.category} · {product.status}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy-950 group-hover:text-brand-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-ink-body">{product.shortDescription}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                      View Product <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQs */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy-950">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CtaBanner
        heading={`Ready to Launch Your ${service.shortTitle} Project?`}
        description="Share your goals and technical context with our team for a structured scope and timeline proposal."
        primaryLabel={`Request ${service.shortTitle}`}
        primaryTo={`/contact?type=project&service=${service.slug}`}
        secondaryLabel="Explore Other Services"
        secondaryTo="/services"
      />
    </>
  );
}
