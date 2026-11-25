import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CtaBanner } from '../components/Sections/CtaBanner';
import { ServiceIcon } from '../components/ServiceIcon';
import { SERVICES } from '../data/services';
import { usePageSeo } from '../utils/seo';

export function Services() {
  usePageSeo({
    title: 'Services | Cbsoft — Web, Mobile, Software, UI/UX & IT Consulting',
    description:
      'Explore Cbsoft technology services including web development, mobile apps, custom software, UI/UX design, digital solutions, and IT consulting.',
    path: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
      ],
    },
  });

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
              Services
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Technology Solutions Designed for Growth.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              We combine creativity, technical expertise, and strategic thinking to deliver
              solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <article
                key={service.slug}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-150 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-ink-muted tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-bold text-navy-950">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-body">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                      Core Focus
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-body">
                      {service.capabilities.slice(0, 2).join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/contact?type=project&service=${service.slug}`}
                    className="text-xs font-semibold text-ink-muted hover:text-navy-950 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Not Sure Which Solution Fits Best?"
        description="Tell us what your team is trying to accomplish and we will recommend a practical technical path forward."
        primaryLabel="Book a Consultation"
        primaryTo="/contact?type=project"
        secondaryLabel="View Our Products"
        secondaryTo="/products"
      />
    </>
  );
}
