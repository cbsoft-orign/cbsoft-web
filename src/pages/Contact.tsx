import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { FaqAccordion } from '../components/Sections/FaqAccordion';
import { CONTACT_DETAILS, CONTACT_FAQS, SOCIAL_LINKS } from '../data/company';
import { SERVICES } from '../data/services';
import { usePageSeo } from '../utils/seo';

type InquiryType = 'general' | 'project';

interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  service: string;
  budget: string;
  message: string;
  website: string; // honeypot
}

interface SubmissionFeedback {
  kind: 'webhook' | 'local_dev' | 'error';
  message: string;
  referenceId?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BUDGET_OPTIONS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'To be discussed',
];

export function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isProjectParam = searchParams.get('type') === 'project';
  const serviceParam = searchParams.get('service') || '';

  const matchedService = SERVICES.find((s) => s.slug === serviceParam);

  const [inquiryType, setInquiryType] = useState<InquiryType>(
    isProjectParam ? 'project' : 'general'
  );

  const [form, setForm] = useState<ContactFormValues>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: isProjectParam
      ? matchedService
        ? `Project Inquiry — ${matchedService.title}`
        : 'New Project Inquiry'
      : '',
    service: matchedService ? matchedService.title : isProjectParam ? SERVICES[0].title : 'General Inquiry',
    budget: '',
    message: '',
    website: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<SubmissionFeedback | null>(null);

  useEffect(() => {
    const nextType: InquiryType = searchParams.get('type') === 'project' ? 'project' : 'general';
    const nextServiceParam = searchParams.get('service') || '';
    const nextMatched = SERVICES.find((s) => s.slug === nextServiceParam);

    setInquiryType(nextType);
    if (nextType === 'project') {
      setForm((prev) => ({
        ...prev,
        subject:
          prev.subject && !prev.subject.startsWith('New Project Inquiry')
            ? prev.subject
            : nextMatched
              ? `Project Inquiry — ${nextMatched.title}`
              : 'New Project Inquiry',
        service: nextMatched ? nextMatched.title : prev.service === 'General Inquiry' ? SERVICES[0].title : prev.service,
      }));
    }
  }, [searchParams]);

  usePageSeo({
    title: 'Contact Cbsoft | Start Your Software or Digital Project',
    description:
      'Have an idea, question, or project in mind? Contact the Cbsoft team for web development, mobile apps, software engineering, and IT consulting.',
    path: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: '/contact' },
      ],
    },
  });

  function switchInquiryMode(mode: InquiryType) {
    setInquiryType(mode);
    setFeedback(null);
    if (mode === 'project') {
      setSearchParams({ type: 'project' });
      setForm((prev) => ({
        ...prev,
        subject: prev.subject.trim() ? prev.subject : 'New Project Inquiry',
        service: prev.service === 'General Inquiry' ? SERVICES[0].title : prev.service,
      }));
    } else {
      setSearchParams({});
      setForm((prev) => ({
        ...prev,
        subject: prev.subject === 'New Project Inquiry' ? '' : prev.subject,
      }));
    }
  }

  function validateClient(values: ContactFormValues): Record<string, string> {
    const errors: Record<string, string> = {};
    if (values.fullName.trim().length < 2) {
      errors.fullName = 'Full name is required (at least 2 characters).';
    }
    if (!EMAIL_RE.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (values.subject.trim().length < 3) {
      errors.subject = 'Please enter a subject for your inquiry.';
    }
    if (!values.service) {
      errors.service = 'Please select a service or inquiry category.';
    }
    if (values.message.trim().length < 15) {
      errors.message = 'Please share at least 15 characters describing your inquiry.';
    }
    return errors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFeedback(null);

    const errors = validateClient(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          inquiryType,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setFeedback({
          kind: 'error',
          message: data.error || 'Could not submit your inquiry. Please verify your entries.',
        });
        return;
      }

      setFeedback({
        kind: data.mode === 'webhook' ? 'webhook' : 'local_dev',
        message: data.message,
        referenceId: data.referenceId,
      });

      setForm({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: inquiryType === 'project' ? 'New Project Inquiry' : '',
        service: inquiryType === 'project' ? SERVICES[0].title : 'General Inquiry',
        budget: '',
        message: '',
        website: '',
      });
      setFieldErrors({});
    } catch {
      setFeedback({
        kind: 'error',
        message: 'Network error while submitting the form. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
              {inquiryType === 'project' ? 'Start a Project' : 'Contact Us'}
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let&apos;s Talk About Your Next Project.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Have an idea, question, or project in mind? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left column: Contact Info & Integration Adapter Notice */}
            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-surface-light p-7">
                <h2 className="font-display text-xl font-bold text-navy-950">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Centralized company details are editable in{' '}
                  <code className="font-mono text-xs">src/data/company.ts</code>.
                </p>

                <div className="mt-6 space-y-5">
                  {CONTACT_DETAILS.map((detail) => {
                    const Icon =
                      detail.label.includes('Email')
                        ? Mail
                        : detail.label.includes('Phone')
                          ? Phone
                          : MapPin;
                    return (
                      <div key={detail.label} className="flex items-start gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                            {detail.label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-navy-950">
                            {detail.value}
                          </p>
                          <p className="mt-0.5 text-xs text-ink-muted">{detail.helper}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h2 className="font-display text-lg font-bold text-navy-950">Social Channels</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.platform} className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-navy-950">{social.platform}</span>
                      {social.url ? (
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-brand-primary hover:text-brand-magenta transition-colors"
                        >
                          {social.handle} →
                        </a>
                      ) : (
                        <span className="text-xs text-ink-muted">{social.handle}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submission Architecture Note */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h2 className="flex items-center gap-2 font-display text-base font-bold text-navy-950">
                  <Info className="h-4 w-4 text-brand-primary" aria-hidden="true" />
                  Submission Integration Mode
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  This form posts to <code className="font-mono">POST /api/contact</code> with
                  server-side validation and honeypot spam protection. Configure{' '}
                  <code className="font-mono">CONTACT_WEBHOOK_URL</code> in your environment to
                  forward inquiries to an external email or CRM service; when unset, submissions run
                  in validated local development mode.
                </p>
              </div>
            </aside>

            {/* Right column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                {/* Inquiry Type Switcher */}
                <div
                  className="mb-6 inline-flex rounded-xl border border-slate-200 bg-surface-light p-1"
                  role="tablist"
                  aria-label="Inquiry type"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={inquiryType === 'general'}
                    onClick={() => switchInquiryMode('general')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      inquiryType === 'general'
                        ? 'bg-white text-navy-950 shadow-sm'
                        : 'text-ink-muted hover:text-navy-950'
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={inquiryType === 'project'}
                    onClick={() => switchInquiryMode('project')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      inquiryType === 'project'
                        ? 'cbsoft-gradient text-white shadow-sm'
                        : 'text-ink-muted hover:text-navy-950'
                    }`}
                  >
                    Project Inquiry
                  </button>
                </div>

                {feedback && (
                  <div
                    role="status"
                    className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                      feedback.kind === 'error'
                        ? 'border-red-200 bg-red-50 text-red-900'
                        : feedback.kind === 'webhook'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                          : 'border-brand-primary/25 bg-surface-light text-navy-950'
                    }`}
                  >
                    {feedback.kind === 'error' ? (
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                    ) : feedback.kind === 'webhook' ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                    )}
                    <div>
                      <p className="font-semibold">
                        {feedback.kind === 'error'
                          ? 'Submission Error'
                          : feedback.kind === 'webhook'
                            ? 'Inquiry Delivered'
                            : 'Validated in Local Development Mode'}
                      </p>
                      <p className="mt-1 leading-relaxed">{feedback.message}</p>
                      {feedback.referenceId && (
                        <p className="mt-1 font-mono text-xs text-ink-muted">
                          Reference ID: {feedback.referenceId}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field hidden from human users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-navy-950">
                        Full Name <span className="text-brand-magenta">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Jane Doe"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-950">
                        Email Address <span className="text-brand-magenta">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@company.com"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-950">
                        Phone Number <span className="text-xs font-normal text-ink-muted">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-navy-950">
                        Company / Organization{' '}
                        <span className="text-xs font-normal text-ink-muted">(optional)</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Organization name"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy-950">
                      Subject <span className="text-brand-magenta">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can Cbsoft help?"
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.subject}</p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-navy-950">
                        Service Interested In <span className="text-brand-magenta">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        {SERVICES.map((svc) => (
                          <option key={svc.slug} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.service && (
                        <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.service}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-navy-950">
                        Project Budget{' '}
                        <span className="text-xs font-normal text-ink-muted">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-950 focus:border-brand-primary"
                      >
                        <option value="">Select estimated range</option>
                        {BUDGET_OPTIONS.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-950">
                      Message <span className="text-brand-magenta">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={
                        inquiryType === 'project'
                          ? 'Describe your project idea, timeline, and key goals...'
                          : 'Share your question or inquiry details...'
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy-950 focus:border-brand-primary"
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="cbsoft-gradient cbsoft-gradient-hover inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-surface-light py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy-950">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={CONTACT_FAQS} />
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-navy-950">
                Looking for Technical Architecture Advice First?
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Explore our IT Consulting service to plan scope, stack, and budget before building.
              </p>
            </div>
            <Link
              to="/services/it-consulting"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-surface-light transition-colors whitespace-nowrap"
            >
              IT Consulting
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
