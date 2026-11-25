import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  heading: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CtaBanner({
  heading,
  description,
  primaryLabel = 'Start a Project',
  primaryTo = '/contact?type=project',
  secondaryLabel = 'Contact Us',
  secondaryTo = '/contact',
}: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="cbsoft-hero-bg relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={primaryTo}
                className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all whitespace-nowrap"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors whitespace-nowrap"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
