import { primaryEmail, primaryEmailHref, primaryPhone, primaryPhoneHref, businessName } from '../../data/site';

type Props = {
  kind: 'contact' | 'estimate';
  compact?: boolean;
};

export default function FormSuccess({ kind, compact = false }: Props) {
  const title = kind === 'estimate' ? 'Estimate request sent' : 'Message sent';

  return (
    <div
      className={`form-success${compact ? ' form-success--compact' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="form-success__burst" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="form-success__mark" aria-hidden="true">
        <svg viewBox="0 0 72 72" className="form-success__svg">
          <circle className="form-success__ring" cx="36" cy="36" r="32" />
          <path className="form-success__check" d="M22 37.5 L31.5 47 L51 26" />
        </svg>
      </div>

      <p className="form-success__eyebrow">You&apos;re all set</p>
      <h3 className="form-success__title">{title}</h3>
      <p className="form-success__body">
        Thanks - someone from {businessName()} will follow up during business hours.
      </p>

      <div className="form-success__next">
        <p>Need help faster?</p>
        <a className="btn btn--blue btn--block" href={primaryPhoneHref()}>
          Call {primaryPhone()}
        </a>
        <a className="form-success__email" href={primaryEmailHref()}>
          Or email {primaryEmail()}
        </a>
      </div>
    </div>
  );
}
