import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const legalLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/contact', label: 'Contact' },
];

const homeLinks = [
  { to: '/#problem', label: '01 / The Split' },
  { to: '/#stations', label: '02 / The System' },
  { to: '/#ranks', label: '03 / The Record' },
  { to: '/#roster', label: '04 / The Riders' },
];

export default function Nav({ variant = 'legal', ctaLabel = 'Get the app', ctaTo = '/#roll' }) {
  return (
    <nav className="nav" data-nav>
      <div className="nav__progress-track">
        <div className="nav__progress" data-progress />
      </div>
      <div className="nav__bar">
        <Link className="nav__brand" to="/" aria-label="Convyo — home">
          <Logo gradientId="nav-pin" />
          <span className="wordmark">
            CONV<i>Y</i>O
          </span>
        </Link>

        <div className="nav__links" {...(variant === 'home' ? { 'data-scrollspy': true } : {})}>
          {variant === 'home'
            ? homeLinks.map((link) => (
                <a key={link.to} href={link.to}>
                  {link.label}
                </a>
              ))
            : legalLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {link.label}
                </NavLink>
              ))}
        </div>

        <button
          className="nav__toggle"
          data-nav-toggle
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M0 1h16M0 6h16M0 11h16" />
          </svg>
          Menu
        </button>

        {ctaTo.startsWith('/#') ? (
          <a className="nav__cta" href={ctaTo}>
            {ctaLabel}
          </a>
        ) : (
          <Link className="nav__cta" to={ctaTo}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </nav>
  );
}
