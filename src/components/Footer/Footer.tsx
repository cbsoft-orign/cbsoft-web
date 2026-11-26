import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../../assets/logocbsoft.jpeg';
import { COMPANY_INFO, CONTACT_DETAILS, SOCIAL_LINKS } from '../../data/company';
import { PRODUCTS } from '../../data/products';
import { SERVICES } from '../../data/services';
import { GitHubIcon, LinkedInIcon, XSocialIcon } from '../SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                <img src={logoImg} alt="Cbsoft logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold text-white">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-xs font-medium text-brand-electric">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              {COMPANY_INFO.shortDescription}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((social) => {
                const icon =
                  social.platform === 'GitHub' ? (
                    <GitHubIcon className="h-4 w-4" />
                  ) : social.platform === 'LinkedIn' ? (
                    <LinkedInIcon className="h-4 w-4" />
                  ) : (
                    <XSocialIcon className="h-4 w-4" />
                  );

                if (!social.url) {
                  return (
                    <Link
                      key={social.platform}
                      to="/contact"
                      title={`${social.platform} (${social.handle})`}
                      aria-label={`${social.platform} — configure URL in company data`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-navy-900 text-slate-400 hover:border-brand-electric/50 hover:text-white transition-colors"
                    >
                      {icon}
                    </Link>
                  );
                }

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Cbsoft on ${social.platform}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-navy-900 text-slate-300 hover:border-brand-electric hover:text-white transition-colors"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?type=project"
                  className="font-semibold text-brand-electric hover:text-white transition-colors"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Contact */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="font-display text-sm font-semibold text-white">Products</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {PRODUCTS.map((product) => (
                  <li key={product.slug}>
                    <Link
                      to={`/products/${product.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-electric shrink-0" aria-hidden="true" />
                <span>{CONTACT_DETAILS[0].value}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-electric shrink-0" aria-hidden="true" />
                <span>{CONTACT_DETAILS[1].value}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-electric shrink-0" aria-hidden="true" />
                <span>{CONTACT_DETAILS[2].value}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              XML Sitemap
            </a>
            <span>{COMPANY_INFO.brandMessage}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
