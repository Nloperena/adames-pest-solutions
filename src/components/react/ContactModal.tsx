import { useEffect, useId, useRef, useState } from 'react';
import { Phone, X } from 'lucide-react';
import LeadForm from './LeadForm';
import {
  CONTACT_MODAL_CLOSE_EVENT,
  CONTACT_MODAL_EVENT,
  CONTACT_MODAL_OPENING_EVENT,
  kindFromTarget,
  type ContactModalDetail,
  type ContactModalKind,
} from '../../lib/contact-modal';
import {
  businessName,
  primaryPhone,
  primaryPhoneHref,
  site,
} from '../../data/site';

const COPY: Record<ContactModalKind, { title: string; lead: string; hash: string }> = {
  estimate: {
    title: 'Free estimate',
    lead: 'Tell us the pest and your St. Cloud / Central Florida address. We follow up during business hours.',
    hash: '#estimate',
  },
  contact: {
    title: 'Contact us',
    lead: 'Send a quick message - or call if you need help faster.',
    hash: '#contact',
  },
};

export default function ContactModal() {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<ContactModalKind>('estimate');
  const [visible, setVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);

  function show(next: ContactModalKind) {
    window.dispatchEvent(
      new CustomEvent(CONTACT_MODAL_OPENING_EVENT, { detail: { kind: next } }),
    );
    setKind(next);
    setFormKey((k) => k + 1);
    setOpen(true);
    requestAnimationFrame(() => setVisible(true));
    const { hash } = COPY[next];
    if (window.location.hash !== hash) {
      history.pushState({ contactModal: next }, '', hash);
    }
  }

  function hide() {
    setVisible(false);
    window.setTimeout(() => setOpen(false), 280);
    if (window.location.hash === '#contact' || window.location.hash === '#estimate') {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  }

  useEffect(() => {
    const onOpen = (event: Event) => {
      const detail = (event as CustomEvent<ContactModalDetail>).detail;
      show(detail?.kind ?? 'estimate');
    };
    const onClose = () => hide();
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('[data-open-contact]');
      if (!target) return;
      event.preventDefault();
      show(kindFromTarget(target.getAttribute('data-open-contact')));
    };
    const onPop = () => {
      if (window.location.hash === '#contact') show('contact');
      else if (window.location.hash === '#estimate') show('estimate');
      else hide();
    };

    window.addEventListener(CONTACT_MODAL_EVENT, onOpen);
    window.addEventListener(CONTACT_MODAL_CLOSE_EVENT, onClose);
    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPop);

    if (window.location.hash === '#contact') show('contact');
    if (window.location.hash === '#estimate') show('estimate');

    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT, onOpen);
      window.removeEventListener(CONTACT_MODAL_CLOSE_EVENT, onClose);
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hide();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!open) return null;

  const copy = COPY[kind];

  return (
    <div
      className={`contact-modal${visible ? ' is-visible' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="contact-modal__scrim"
        aria-label="Close estimate form"
        onClick={hide}
      />
      <div className="contact-modal__page" ref={panelRef}>
        <header className="contact-modal__top">
          <div className="contact-modal__top-inner container">
            <a className="contact-modal__brand" href="/" aria-label={`${businessName()} home`}>
              <img src={site.logo.src} alt="" width={120} height={79} decoding="async" />
              <span>{businessName()}</span>
            </a>
            <div className="contact-modal__top-actions">
              <a className="btn btn--blue" href={primaryPhoneHref()}>
                <Phone size={18} aria-hidden="true" />
                Call {primaryPhone()}
              </a>
              <button
                ref={closeRef}
                type="button"
                className="contact-modal__close"
                onClick={hide}
                aria-label="Close contact form"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        <div className="contact-modal__body container">
          <h2 id={titleId} className="contact-modal__title">
            {copy.title}
          </h2>
          <p className="contact-modal__lead">
            {copy.lead} Prefer the phone?{' '}
            <a href={primaryPhoneHref()}>Call {primaryPhone()}</a>.
          </p>

          <LeadForm key={`${kind}-${formKey}`} kind={kind} idPrefix="modal" compact />
        </div>
      </div>
    </div>
  );
}
