import { useState } from 'react';
import { submitChatIntake, type ChatIntakePrefill } from '../../lib/chat-api';
import { businessName } from '../../data/site';

type Props = {
  sessionId: string | null;
  siteKey?: string;
  prefill?: ChatIntakePrefill;
  onSuccess: (message: string) => void;
  onError: (error: string) => void;
};

export function ChatIntakeForm({
  sessionId,
  siteKey = 'adames',
  prefill,
  onSuccess,
  onError,
}: Props) {
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    const fd = new FormData(form);
    if (fd.get('_hp')) return;

    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const company = String(fd.get('company') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    if (!name || !email) {
      onError('Name and email are required.');
      setSending(false);
      return;
    }

    try {
      const result = await submitChatIntake({
        sessionId,
        siteKey,
        name,
        email,
        company: company || undefined,
        message: message || undefined,
      });
      onSuccess(result.message);
      form.reset();
    } catch {
      onError('Could not send your details. Try again or use the contact page.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form id="chat-intake" className="site-chat-intake" onSubmit={(e) => void onSubmit(e)}>
      <p className="site-chat-intake-title">Send your details to {businessName()}</p>
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="site-chat-hp"
      />
      <label className="site-chat-intake-label">
        Name
        <input
          name="name"
          type="text"
          required
          maxLength={80}
          defaultValue={prefill?.name ?? ''}
          className="site-chat-intake-input"
          placeholder="Your name"
        />
      </label>
      <label className="site-chat-intake-label">
        Email
        <input
          name="email"
          type="email"
          required
          maxLength={120}
          defaultValue={prefill?.email ?? ''}
          className="site-chat-intake-input"
          placeholder="you@email.com"
        />
      </label>
      <label className="site-chat-intake-label">
        Property / business <span className="site-chat-intake-optional">optional</span>
        <input
          name="company"
          type="text"
          maxLength={80}
          defaultValue={prefill?.company ?? ''}
          className="site-chat-intake-input"
          placeholder="Home or business name"
        />
      </label>
      <label className="site-chat-intake-label">
        What are you dealing with? <span className="site-chat-intake-optional">optional</span>
        <textarea
          name="message"
          rows={2}
          maxLength={400}
          defaultValue={prefill?.message ?? ''}
          className="site-chat-intake-input site-chat-intake-textarea"
          placeholder="Ants, rodents, termites…"
        />
      </label>
      <button type="submit" disabled={sending} className="site-chat-intake-submit">
        {sending ? 'Sending…' : `Send to ${businessName()}`}
      </button>
    </form>
  );
}
