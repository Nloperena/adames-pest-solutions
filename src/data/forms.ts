import { site } from './site';

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  autocomplete?: string;
  options?: string[];
};

export const contactForm = {
  id: 'contact',
  title: 'Contact form',
  legacySource: 'Ninja Forms “Contact Form” on /contact-us/',
  integrationStatus: site.formIntegration.status,
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel', required: true, autocomplete: 'tel' },
    { name: 'message', label: 'Comments', type: 'textarea', required: true },
  ] satisfies FormField[],
};

export const estimateForm = {
  id: 'estimate',
  title: 'Request an estimate',
  legacySource: 'No working form on legacy /request-an-estimate/ — rebuilt as new UI',
  integrationStatus: site.formIntegration.status,
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel', required: true, autocomplete: 'tel' },
    {
      name: 'propertyType',
      label: 'Property type',
      type: 'select',
      required: true,
      options: ['Residential', 'Commercial', 'Not sure'],
    },
    {
      name: 'pestConcern',
      label: 'What are you dealing with?',
      type: 'text',
      required: true,
    },
    { name: 'message', label: 'Details', type: 'textarea', required: false },
  ] satisfies FormField[],
};

/**
 * Copy for form UI states.
 * Do not claim a lead was delivered while integration is pending.
 */
export const formCopy = {
  pendingBanner: site.formIntegration.message,
  pendingStatus: site.formIntegration.status,
  validationError: 'Please fix the highlighted fields and try again.',
  networkError:
    'Something went wrong while sending. Please call or email us directly so your request is not lost.',
  /**
   * Shown when the user attempts submit while backend is pending.
   * Intentionally does NOT say “thanks, we received your request.”
   */
  blockedSubmit:
    'This form is not connected to a live inbox or CRM yet. Please call or email us directly so your request is not lost.',
  /**
   * Only use after a real backend acknowledges the submission.
   */
  successWhenLive:
    'Thanks — your message was sent. We will follow up during business hours.',
  consent:
    'By sending this request you agree to be contacted about pest control services in Central Florida. We will not sell your information.',
} as const;
