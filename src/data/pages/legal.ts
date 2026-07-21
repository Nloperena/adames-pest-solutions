import { businessName, primaryEmail, primaryPhone } from '../site';

export const privacyPage = {
  seo: {
    title: `Privacy Policy | ${businessName()}`,
    description: `How ${businessName()} handles contact and estimate information submitted through this website.`,
  },
  h1: 'Privacy policy',
  body: [
    `${businessName()} (“we,” “us”) operates adamespestsolutions.com. This page explains how we handle information you submit through our website forms and chat.`,
    'When you request an estimate, send a contact message, or use the on-site chat intake, we collect the details you provide — typically your name, email address, phone number, property or business details, and a description of the pest concern.',
    'We use that information to respond to your inquiry, schedule inspections, and follow up on service. Form and chat submissions are processed through our CRM partner so our office can manage leads.',
    'We do not sell your personal information. We may share it with service providers who help us operate the site and CRM, solely as needed to handle your request.',
    `Questions about this policy or your information? Email ${primaryEmail()} or call ${primaryPhone()}.`,
    'We may update this policy as our practices change. The current version is always posted on this page.',
  ],
} as const;

export const termsPage = {
  seo: {
    title: `Terms of Service | ${businessName()}`,
    description: `Website terms for using ${businessName()} online properties and requesting service.`,
  },
  h1: 'Terms of service',
  body: [
    `By using adamespestsolutions.com, you agree to these terms. If you do not agree, please do not use the site.`,
    'Website content is for general information about our pest control services in Central Florida. It is not a guarantee of results for any specific property. Inspections and written estimates govern actual work.',
    'You agree to provide accurate contact details when submitting forms or chat requests. Submitting a request does not create a service contract until we confirm scheduling and scope with you.',
    'All site text, graphics, and branding are owned by Adames Pest Solutions, Inc. or used with permission. You may not copy or reuse them for commercial purposes without written consent.',
    'The site is provided as-is. We work to keep it available and accurate, but we are not liable for temporary outages, third-party service interruptions, or decisions made solely from website content without an inspection.',
    `For questions about these terms or to discuss service, contact ${primaryEmail()} or ${primaryPhone()}.`,
  ],
} as const;
