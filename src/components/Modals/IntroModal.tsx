import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import logoImg from '../../assets/logocbsoft.jpeg';
import { COMPANY_INFO } from '../../data/company';

interface IntroModalProps {
  open: boolean;
  onClose: () => void;
}

export function IntroModal({ open, onClose }: IntroModalProps) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbsoft-intro-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient header */}
        <div className="cbsoft-hero-bg relative px-6 py-6 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close introduction dialog"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-md">
              <img src={logoImg} alt="Cbsoft logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-brand-electric uppercase">
                Company Introduction
              </p>
              <h2 id="cbsoft-intro-title" className="mt-1 text-2xl font-bold text-white">
                {COMPANY_INFO.name} — {COMPANY_INFO.tagline}
              </h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-7">
          <div>
            <h3 className="text-lg font-semibold text-navy-950">
              {COMPANY_INFO.brandMessage}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-body sm:text-base">
              {COMPANY_INFO.shortDescription} Our engineering, design, and advisory practices work
              together to turn ambitious ideas into dependable web, mobile, and custom software
              platforms.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {COMPANY_INFO.approach.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-surface-light p-4"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold text-brand-primary tabular-nums">
                    {item.step}
                  </span>
                  <span className="font-display text-sm font-semibold text-navy-950">
                    {item.title}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <Link
              to="/services"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-deep transition-colors"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-ink-body hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <Link
                to="/contact?type=project"
                onClick={onClose}
                className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
