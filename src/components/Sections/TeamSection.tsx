import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/team';
import { GitHubIcon, XSocialIcon } from '../SocialIcons';

interface TeamSectionProps {
  showAboutLink?: boolean;
  background?: 'white' | 'light';
}

export function TeamSection({
  showAboutLink = true,
  background = 'white',
}: TeamSectionProps) {
  const bgClass = background === 'light' ? 'bg-surface-light' : 'bg-white';

  return (
    <section className={`${bgClass} py-20 sm:py-24`} aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-primary uppercase">
              Our Team
            </p>
            <h2
              id="team-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
            >
              Meet the Team Behind Cbsoft
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              A focused team of builders, designers, and analysts committed to delivering practical,
              high-impact digital solutions.
            </p>
          </div>

          {showAboutLink && (
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-magenta transition-colors whitespace-nowrap shrink-0"
            >
              About Our Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
            >
              <div>
                <div className="flex items-center gap-3.5">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={`${member.fullName} — ${member.role}`}
                      className="h-12 w-12 shrink-0 rounded-xl object-cover object-top border border-slate-200"
                    />
                  ) : (
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 font-display text-sm font-bold tracking-wide text-white"
                      aria-hidden="true"
                    >
                      {member.initials}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold leading-snug text-navy-950">
                      {member.fullName}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-brand-primary">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-body">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4">
                <a
                  href={`mailto:${member.email}`}
                  title={`Email ${member.fullName} (${member.email})`}
                  aria-label={`Email ${member.fullName}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-navy-950 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Email</span>
                </a>

                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${member.fullName} on GitHub`}
                  aria-label={`${member.fullName} GitHub`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-navy-950 transition-colors"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={member.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${member.fullName} on X`}
                  aria-label={`${member.fullName} on X`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-navy-950 transition-colors"
                >
                  <XSocialIcon className="h-3.5 w-3.5" />
                  <span>X</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
