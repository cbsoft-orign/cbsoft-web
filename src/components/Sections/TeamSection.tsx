import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS, type TeamMember } from '../../data/team';
import { ResponsiveImage } from '../Media/ResponsiveImage';
import { GitHubIcon, LinkedInIcon } from '../SocialIcons';

interface TeamSectionProps {
  showAboutLink?: boolean;
  background?: 'white' | 'light';
}

export function TeamSection({
  showAboutLink = true,
  background = 'white',
}: TeamSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeMember, setActiveMember] = useState<TeamMember>(TEAM_MEMBERS[0]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(node);

    // Safety fallback so content is never stuck hidden
    const fallbackTimer = window.setTimeout(() => setHasEntered(true), 600);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  const bgClass = background === 'light' ? 'bg-surface-light' : 'bg-white';

  return (
    <section ref={sectionRef} className={`${bgClass} py-20 sm:py-24`} aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Leadership &amp; Engineers
            </p>
            <h2
              id="team-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
            >
              Meet the Team Behind Cbsoft
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              A multidisciplinary team of architects, designers, and engineers dedicated to building
              dependable digital solutions.
            </p>
          </div>

          {showAboutLink && (
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors whitespace-nowrap shrink-0"
            >
              About Our Culture
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Animated Team Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => {
            const isSelected = activeMember.id === member.id;
            return (
              <article
                key={member.id}
                style={hasEntered ? { animationDelay: `${index * 90}ms` } : undefined}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/10 ${
                  hasEntered ? 'animate-team-reveal' : 'opacity-100'
                } ${
                  isSelected
                    ? 'border-brand-primary/60 shadow-lg shadow-brand-primary/10'
                    : 'border-slate-200 hover:border-brand-primary/40'
                }`}
              >
                {/* Animated top accent bar */}
                <div
                  className={`h-1 w-full transition-opacity duration-300 cbsoft-gradient ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                />

                {/* Portrait Image */}
                <button
                  type="button"
                  onClick={() => setActiveMember(member)}
                  className="relative aspect-square w-full overflow-hidden bg-navy-950 text-left focus-visible:outline-none"
                  aria-label={`Select ${member.fullName}, ${member.role}`}
                >
                  <ResponsiveImage
                    src={member.photoUrl}
                    alt={`${member.fullName} — ${member.role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    wrapperClassName="h-full w-full"
                    fallbackTitle={member.fullName}
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/60 via-navy-950/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                    aria-hidden="true"
                  />
                </button>

                {/* Member Info: Name, Role, About */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-950 transition-colors group-hover:text-brand-primary">
                      <button
                        type="button"
                        onClick={() => setActiveMember(member)}
                        className="text-left focus-visible:outline-none"
                      >
                        {member.fullName}
                      </button>
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-brand-primary">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-body">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveMember(member)}
                      className={`text-xs font-semibold transition-colors ${
                        isSelected
                          ? 'text-brand-magenta'
                          : 'text-ink-muted hover:text-brand-primary'
                      }`}
                    >
                      {isSelected ? 'Spotlight Active' : 'View Focus'}
                    </button>

                    <div className="flex items-center gap-2.5">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Animated Spotlight Bar */}
        <div
          key={activeMember.id}
          className="animate-spotlight-in mt-8 flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-navy-950 p-6 text-white sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-navy-900">
              <ResponsiveImage
                src={activeMember.photoUrl}
                alt={activeMember.fullName}
                className="h-full w-full object-cover object-top"
                wrapperClassName="h-full w-full"
                fallbackTitle={activeMember.initials}
              />
            </div>
            <div>
              <p className="text-xs font-medium text-brand-electric">
                Team Spotlight · {activeMember.role}
              </p>
              <h3 className="mt-0.5 font-display text-xl font-bold text-white">
                {activeMember.fullName}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Focus: {activeMember.focusAreas.join(' · ')}
              </p>
            </div>
          </div>

          <Link
            to="/contact?type=project"
            className="cbsoft-gradient cbsoft-gradient-hover inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all whitespace-nowrap shrink-0"
          >
            Work With Our Team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
