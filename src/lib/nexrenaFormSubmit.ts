import { ADAMES_SITE_KEY, NEXRENA_API_URL } from './nexrena-api';

export type AdamesFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  formName: 'contact' | 'estimate';
  propertyType?: string;
  pestConcern?: string;
  pageUrl?: string;
  /** Honeypot — if filled, API treats as spam success */
  website?: string;
};

export async function submitToNexrenaForms(payload: AdamesFormPayload): Promise<void> {
  const res = await fetch(`${NEXRENA_API_URL}/api/forms/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Site-Key': ADAMES_SITE_KEY,
    },
    body: JSON.stringify({
      siteKey: ADAMES_SITE_KEY,
      name: payload.name,
      email: payload.email,
      phone: payload.phone || undefined,
      message: payload.message,
      formName: payload.formName,
      propertyType: payload.propertyType || undefined,
      pestConcern: payload.pestConcern || undefined,
      pageUrl: payload.pageUrl || (typeof window !== 'undefined' ? window.location.href : undefined),
      website: payload.website || undefined,
      formSecret: import.meta.env.PUBLIC_ADAMES_FORM_SECRET as string | undefined,
    }),
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? 'Submission failed');
  }
}
