export type ContactModalKind = 'contact' | 'estimate';

export const CONTACT_MODAL_EVENT = 'adames:open-contact';
export const CONTACT_MODAL_CLOSE_EVENT = 'adames:close-contact';

export type ContactModalDetail = {
  kind?: ContactModalKind;
};

export function openContactModal(kind: ContactModalKind = 'estimate') {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<ContactModalDetail>(CONTACT_MODAL_EVENT, {
      detail: { kind },
    }),
  );
}

export function closeContactModal() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONTACT_MODAL_CLOSE_EVENT));
}

export function kindFromTarget(value: string | null | undefined): ContactModalKind {
  return value === 'contact' ? 'contact' : 'estimate';
}
