/** Nexrena CRM / chat API base URL */
export const NEXRENA_API_URL =
  (import.meta.env.PUBLIC_API_URL as string | undefined)?.trim() || 'https://api.nexrena.com';

/** Registered site key in nexrena-api `SITES` */
export const ADAMES_SITE_KEY = 'adames';
