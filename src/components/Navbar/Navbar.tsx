import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoImg from '../../assets/logocbsoft.jpeg';
import { SERVICES } from '../../data/services';
import { ServiceIcon } from '../ServiceIcon';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const isServicesActive = pathname === '/services' || pathname.startsWith('/services/');

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
      isActive
        ? 'text-brand-primary font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-brand-primary after:to-brand-magenta'
        : 'text-ink-body hover:text-brand-primary'
    }`;

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-lg shadow-navy-950/10 backdrop-blur-md sm:px-6">
          {/* Zone 1: Brand logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 whitespace-nowrap"
            aria-label="Cbsoft Home"
          >
            <img
              src={logoImg}
              alt="Cbsoft logo"
              className="h-10 w-10 object-contain rounded-lg"
            />
            <span className="font-display text-lg font-bold tracking-tight text-navy-950">
              Cbsoft
            </span>
          </Link>

          {/* Zone 2: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`relative inline-flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isServicesActive
                    ? 'text-brand-primary font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-brand-primary after:to-brand-magenta'
                    : 'text-ink-body hover:text-brand-primary'
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-150 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen && (
                <div
                  role="menu"
                  aria-label="Cbsoft Services"
                  className="absolute left-0 top-full pt-2 w-80"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-navy-950/15">
                    <Link
                      to="/services"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="mb-1 flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-brand-primary hover:bg-surface-light transition-colors"
                    >
                      <span>All Services Overview</span>
                      <span>→</span>
                    </Link>
                    <div className="my-1 h-px bg-slate-100" />
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                          pathname === `/services/${service.slug}`
                            ? 'bg-surface-light text-brand-primary'
                            : 'text-ink-body hover:bg-surface-light hover:text-navy-950'
                        }`}
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                          <ServiceIcon name={service.icon} className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold leading-tight">
                            {service.title}
                          </span>
                          <span className="mt-0.5 block line-clamp-1 text-xs text-ink-muted">
                            {service.shortDescription}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Zone 3: Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact?type=project"
              className="hidden sm:inline-flex items-center justify-center rounded-xl cbsoft-gradient cbsoft-gradient-hover px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              Get Started
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy-950 hover:bg-surface-light lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-navy-950/15 lg:hidden"
          >
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                  pathname === '/' ? 'bg-surface-light text-brand-primary font-semibold' : 'text-ink-body'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                  pathname === '/about' ? 'bg-surface-light text-brand-primary font-semibold' : 'text-ink-body'
                }`}
              >
                About
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  aria-expanded={mobileServicesOpen}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                    isServicesActive ? 'bg-surface-light text-brand-primary font-semibold' : 'text-ink-body'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-1 ml-3 flex flex-col space-y-1 border-l border-slate-200 pl-3">
                    <Link
                      to="/services"
                      className="rounded-lg px-3 py-2 text-xs font-semibold text-brand-primary"
                    >
                      All Services Overview
                    </Link>
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className={`rounded-lg px-3 py-2 text-sm ${
                          pathname === `/services/${service.slug}`
                            ? 'bg-surface-light font-semibold text-brand-primary'
                            : 'text-ink-body'
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/products"
                className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                  pathname.startsWith('/products')
                    ? 'bg-surface-light text-brand-primary font-semibold'
                    : 'text-ink-body'
                }`}
              >
                Products
              </Link>
              <Link
                to="/blog"
                className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                  pathname.startsWith('/blog')
                    ? 'bg-surface-light text-brand-primary font-semibold'
                    : 'text-ink-body'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                  pathname === '/contact'
                    ? 'bg-surface-light text-brand-primary font-semibold'
                    : 'text-ink-body'
                }`}
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link
                  to="/contact?type=project"
                  className="cbsoft-gradient flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
