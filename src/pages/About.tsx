import { ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';
import workspaceImg from '../assets/images/about_workspace_1795619441269.jpg';
import { ResponsiveImage } from '../components/Media/ResponsiveImage';
import { CtaBanner } from '../components/Sections/CtaBanner';
import { COMPANY_INFO } from '../data/company';
import { TEAM_MEMBERS } from '../data/team';
import { usePageSeo } from '../utils/seo';

export function About() {
  usePageSeo({
    title: 'About Cbsoft — Who We Are, Mission, Vision & Team',
    description:
      'Learn about Cbsoft, our mission, vision, engineering values, collaborative approach, and the technology team building digital solutions.',
    path: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: '/about' },
      ],
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="cbsoft-hero-bg -mt-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-brand-electric uppercase">
              About Us
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Who We Are
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-slate-200 sm:text-2xl">
              Technology. Innovation. Possibilities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {COMPANY_INFO.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
                Our Identity
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                Engineering Digital Foundations That Last
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-body">
                Cbsoft was formed around a straightforward conviction: thoughtful software and clean
                digital architecture unlock real economic and community opportunities. Rather than
                chasing short-lived trends, our team focuses on building reliable web platforms,
                mobile applications, custom software, and human-centered interfaces.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-body">
                From early architecture consulting to production deployment and long-term support,
                we act as a dedicated technical partner for startups, enterprises, and public
                initiatives.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-surface-light">
                <ResponsiveImage
                  src={workspaceImg}
                  alt="Cbsoft technology workspace and development team"
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full min-h-[280px]"
                  fallbackTitle="Cbsoft Technology Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-xs font-semibold tracking-wider text-brand-primary uppercase">
                Our Mission
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-950">
                Purpose-Driven Engineering
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-body">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-xs font-semibold tracking-wider text-brand-magenta uppercase">
                Our Vision
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-950">
                Trusted Technology Partnership
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-body">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Core Principles
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {COMPANY_INFO.values.map((val, index) => (
              <div
                key={val.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="font-mono text-xs font-semibold text-brand-primary tabular-nums">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-950">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-body">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Leadership & Roles
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Team role profiles below use editable placeholder data stored in{' '}
              <code className="font-mono text-xs">src/data/team.ts</code> and can be updated with
              member photographs and profile links without modifying page components.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <div className="flex items-center gap-4">
                    {member.photoUrl ? (
                      <ResponsiveImage
                        src={member.photoUrl}
                        alt={member.fullName}
                        className="h-14 w-14 rounded-full object-cover border border-slate-200"
                        wrapperClassName="h-14 w-14 rounded-full"
                        fallbackTitle={member.initials}
                      />
                    ) : (
                      <div className="cbsoft-gradient flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white">
                        {member.initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold text-navy-950">
                        {member.fullName}
                      </h3>
                      <p className="text-xs font-medium text-brand-primary">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-body">{member.bio}</p>
                </div>

                {(member.linkedinUrl || member.githubUrl || member.websiteUrl) && (
                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.fullName} LinkedIn`}
                        className="text-ink-muted hover:text-brand-primary transition-colors"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                    )}
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.fullName} GitHub`}
                        className="text-ink-muted hover:text-brand-primary transition-colors"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {member.websiteUrl && (
                      <a
                        href={member.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.fullName} Portfolio`}
                        className="text-ink-muted hover:text-brand-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Delivery Process
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
              Our Approach
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY_INFO.approach.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="font-mono text-sm font-bold text-brand-primary tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Let's Create Something Great Together."
        description="Ready to explore how Cbsoft can support your next web, mobile, or custom software initiative?"
        primaryLabel="Start a Project"
        primaryTo="/contact?type=project"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
