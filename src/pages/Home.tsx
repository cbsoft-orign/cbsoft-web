import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import workspaceImg from '../assets/images/about_workspace_1795619441269.jpg';
import { LaptopMockup } from '../components/Brand/LaptopMockup';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { IntroModal } from '../components/Modals/IntroModal';
import { CtaBanner } from '../components/Sections/CtaBanner';
import { ServiceIcon } from '../components/ServiceIcon';
import { COMPANY_INFO, VALUE_PROPOSITIONS, WHY_CHOOSE_CBSOFT } from '../data/company';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import { usePageSeo } from '../utils/seo';

export function Home() {
  const [introOpen, setIntroOpen] = useState(false);

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  usePageSeo({
    title: 'Cbsoft — Future is Now | Software & Digital Solutions',
    description:
      'Cbsoft builds innovative software, web platforms, mobile apps, UI/UX design, and IT consulting solutions that empower businesses and communities.',
    path: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      slogan: COMPANY_INFO.tagline,
      description: COMPANY_INFO.shortDescription,
    },
  });

  return (
    <>
      {/* Section A: Hero */}
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-24 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
                Welcome to Cbsoft
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
                Future is <span className="cbsoft-gradient-text">Now</span>
              </h1>
              <p className="mt-4 font-display text-xl font-semibold text-slate-100 sm:text-2xl">
                {COMPANY_INFO.brandMessage}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Cbsoft builds innovative software and technology solutions to empower people,
                businesses and communities.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 transition-all whitespace-nowrap"
                >
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIntroOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 whitespace-nowrap"
                >
                  <Play className="h-4 w-4 text-brand-electric" aria-hidden="true" />
                  Watch Our Introduction
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <LaptopMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Value Propositions Strip */}
      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8" aria-label="Core value propositions">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-navy-950/10 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPOSITIONS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-base font-bold text-navy-950">{item.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: About Preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-surface-light">
                <ResponsiveImage
                  src={workspaceImg}
                  alt="Cbsoft software engineering workspace and collaborative team"
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full min-h-[300px]"
                  fallbackTitle="Cbsoft Engineering Studio"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
                About Cbsoft
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                Innovating Today for a Smarter Tomorrow
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-body">
                Cbsoft is a forward-thinking technology team dedicated to delivering smart, reliable
                and scalable digital solutions. We believe in the power of technology to create
                opportunities and build a better future for everyone.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Build Innovative Solutions',
                  'Empower Communities',
                  'Create Opportunities',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all whitespace-nowrap"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Services Overview */}
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Our Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
              We transform ideas into powerful digital experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-primary/35 hover:shadow-lg hover:shadow-brand-primary/5"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-body">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Featured Products */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
                Product Portfolio
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                Solutions Built by Cbsoft
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors whitespace-nowrap"
            >
              Explore All Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-150 hover:border-brand-primary/35 hover:shadow-lg hover:shadow-brand-primary/5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy-950">
                  <ResponsiveImage
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    wrapperClassName="h-full w-full"
                    fallbackTitle={product.name}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                      <span>{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-brand-primary font-semibold">{product.status}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-navy-950">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-body">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section F: Why Choose Cbsoft */}
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Why Choose Cbsoft
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Built for Trust, Engineering Rigor, and Long-Term Impact
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {WHY_CHOOSE_CBSOFT.map((item, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={item.number}
                  className="grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12"
                >
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <span className="font-mono text-sm font-semibold text-brand-primary tabular-nums">
                      {item.number}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-navy-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-body">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={`rounded-xl bg-surface-light p-6 border border-slate-200/70 lg:col-span-5 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <p className="text-xs font-semibold tracking-wider text-ink-muted uppercase">
                      Client Outcome
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-navy-950">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section G: Call to Action */}
      <CtaBanner
        heading="Have an Idea? Let's Build Something Amazing."
        description="Whether you're starting a new project or looking to transform your business, Cbsoft is ready to help."
        primaryLabel="Start a Project"
        primaryTo="/contact?type=project"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />

      <IntroModal open={introOpen} onClose={() => setIntroOpen(false)} />
    </>
  );
}
