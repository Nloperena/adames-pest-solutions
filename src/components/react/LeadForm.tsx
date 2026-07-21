import { useEffect, useMemo, useState } from 'react';
import {
  contactForm,
  estimateForm,
  formCopy,
  type FormField,
} from '../../data/forms';
import {
  businessName,
  primaryEmail,
  primaryEmailHref,
  primaryPhone,
  primaryPhoneHref,
} from '../../data/site';
import { submitToNexrenaForms } from '../../lib/nexrenaFormSubmit';

type FormKind = 'contact' | 'estimate';

type Props = {
  kind: FormKind;
  idPrefix?: string;
};

type Values = Record<string, string>;
type Errors = Record<string, string>;

function getDefinition(kind: FormKind) {
  return kind === 'contact' ? contactForm : estimateForm;
}

function validate(fields: FormField[], values: Values): Errors {
  const errors: Errors = {};
  for (const field of fields) {
    const value = (values[field.name] ?? '').trim();
    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`;
      continue;
    }
    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field.name] = 'Enter a valid email address.';
    }
    if (field.type === 'tel' && value && value.replace(/\D/g, '').length < 10) {
      errors[field.name] = 'Enter a valid phone number.';
    }
  }
  return errors;
}

function buildMessage(kind: FormKind, values: Values): string {
  if (kind === 'contact') {
    return (values.message ?? '').trim();
  }

  const parts = [
    values.message?.trim() || 'Estimate request from website.',
    values.propertyType ? `Property type: ${values.propertyType}` : '',
    values.pestConcern ? `Pest concern: ${values.pestConcern}` : '',
  ].filter(Boolean);

  return parts.join('\n');
}

export default function LeadForm({ kind, idPrefix = '' }: Props) {
  const definition = useMemo(() => getDefinition(kind), [kind]);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setValues({});
    setErrors({});
    setSuccess(false);
    setSubmitError(null);
  }, [kind]);

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const nextErrors = validate(definition.fields, values);
    setErrors(nextErrors);
    setSubmitError(null);
    setSuccess(false);

    if (Object.keys(nextErrors).length > 0) return;

    // Honeypot filled → pretend success, do not send
    if (values.website?.trim()) {
      setSuccess(true);
      setValues({});
      return;
    }

    setSubmitting(true);
    try {
      await submitToNexrenaForms({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone?.trim(),
        message: buildMessage(kind, values),
        formName: kind,
        propertyType: values.propertyType?.trim(),
        pestConcern: values.pestConcern?.trim(),
      });
      setSuccess(true);
      setValues({});
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Could not send your request right now.';
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="lead-form">
      <div className="lead-form__banner" role="status">
        Your message is delivered to the {businessName()} office during business hours.
      </div>

      {success ? (
        <div className="lead-form__success" role="status">
          <p>
            Thanks — your request was sent. Someone from {businessName()} will follow up soon.
          </p>
          <p>
            Need help faster? Call{' '}
            <a href={primaryPhoneHref()}>{primaryPhone()}</a> or email{' '}
            <a href={primaryEmailHref()}>{primaryEmail()}</a>.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="lead-form__hp"
            value={values.website ?? ''}
            onChange={(e) => setValues((prev) => ({ ...prev, website: e.target.value }))}
          />

          {definition.fields.map((field) => {
            const id = `${idPrefix}${definition.id}-${field.name}`;
            const error = errors[field.name];
            return (
              <div className="lead-form__field" key={field.name}>
                <label htmlFor={id}>
                  {field.label}
                  {field.required ? <span aria-hidden="true"> *</span> : null}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={id}
                    name={field.name}
                    rows={5}
                    required={field.required}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                    value={values[field.name] ?? ''}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.name]: e.target.value }))
                    }
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={id}
                    name={field.name}
                    required={field.required}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                    value={values[field.name] ?? ''}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.name]: e.target.value }))
                    }
                  >
                    <option value="">Select…</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={id}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autocomplete}
                    required={field.required}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                    value={values[field.name] ?? ''}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.name]: e.target.value }))
                    }
                  />
                )}
                {error ? (
                  <p className="lead-form__error" id={`${id}-error`}>
                    {error}
                  </p>
                ) : null}
              </div>
            );
          })}

          <p className="lead-form__consent">{formCopy.consent}</p>

          {submitError ? (
            <div className="lead-form__blocked" role="alert">
              <p>{submitError}</p>
              <p>
                Please call <a href={primaryPhoneHref()}>{primaryPhone()}</a> or email{' '}
                <a href={primaryEmailHref()}>{primaryEmail()}</a> so your request is not lost.
              </p>
            </div>
          ) : null}

          <button className="btn" type="submit" disabled={submitting}>
            {submitting
              ? 'Sending…'
              : kind === 'estimate'
                ? 'Request estimate'
                : 'Send message'}
          </button>
        </form>
      )}
    </div>
  );
}
