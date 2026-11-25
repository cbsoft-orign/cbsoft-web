import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageSeo } from '../utils/seo';

export function NotFound() {
  usePageSeo({
    title: 'Page Not Found | Cbsoft',
    description: 'The requested page could not be found on Cbsoft.',
    path: '/404',
  });

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-16 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-sm font-semibold text-brand-electric">404</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-slate-300">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Return Home
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-950 hover:bg-surface-light transition-colors"
            >
              Browse Services
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-950 hover:bg-surface-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
