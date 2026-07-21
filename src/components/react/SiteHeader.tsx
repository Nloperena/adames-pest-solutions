import { useEffect, useId, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { headerNavCompact } from '../../data/navigation';
import {
  businessName,
  primaryPhone,
  primaryPhoneHref,
  site,
} from '../../data/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__bar container">
        <a className="site-header__logo" href="/" aria-label={`${businessName()} home`}>
          <img
            src={site.logo.src}
            alt={site.logo.alt}
            width={180}
            height={90}
            decoding="async"
          />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {headerNavCompact.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--blue site-header__phone" href={primaryPhoneHref()}>
            {primaryPhone()}
          </a>
          <button type="button" className="btn site-header__cta" data-open-contact="estimate">
            {site.cta.estimateLabel}
          </button>
          <a
            className="site-header__call-icon"
            href={primaryPhoneHref()}
            aria-label={`Call ${businessName()} at ${primaryPhone()}`}
          >
            <Phone size={20} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={`site-header__drawer${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul>
            {headerNavCompact.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                data-open-contact="estimate"
                onClick={() => setOpen(false)}
              >
                {site.cta.estimateLabel}
              </button>
            </li>
          </ul>
          <div className="site-header__drawer-actions">
            <button type="button" className="btn btn--block" data-open-contact="estimate">
              {site.cta.estimateLabel}
            </button>
            <a className="btn btn--blue btn--block" href={primaryPhoneHref()}>
              Call {primaryPhone()}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
