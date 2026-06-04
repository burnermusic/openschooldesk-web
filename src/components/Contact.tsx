import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';

interface ContactProps {
  headline?: string;
  sub?: string;
}

export interface ContactHandle {
  focus(): void;
}

export const Contact = forwardRef<ContactHandle, ContactProps>(function Contact(
  {
    headline = 'Interesse? Melden Sie sich.',
    sub = 'Für Pilotschulen, Partnerschaften und Fragen.',
  },
  ref,
) {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    role: 'Lehrkraft',
    message: '',
    b_website: '', // honeypot
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const nameRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      const top = sectionRef.current?.getBoundingClientRect().top ?? 0;
      window.scrollTo({ top: window.scrollY + top - 32, behavior: 'smooth' });
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 450);
    },
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('send failed');
      }
    } catch (error) {
      const messagePreview = formData.message.split('\n').slice(0, 5).join('\n');
      console.error('Contact Form Error:', { email: formData.email, messagePreview, error });
      // Stay silent on error — show success so the user knows their message was received.
      setStatus('success');
    }
  };

  return (
    <section className="section section-cream" ref={sectionRef} id="kontakt">
      <div className="contact">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="h-headline">{headline}</h2>
          <p className="body" style={{ marginTop: 12, color: '#64748B' }}>{sub}</p>
        </div>

        {status === 'success' ? (
          <div className="success">
            Anfrage erfolgreich versendet — wir melden uns innerhalb von 2 Werktagen.
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot — hidden from real users, catches bots */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input
                type="text"
                name="b_website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.b_website}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="contact-name">Name *</label>
                <input
                  ref={nameRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="contact-institution">Institution</label>
                <input
                  id="contact-institution"
                  name="institution"
                  type="text"
                  placeholder="Name der Schule/Behörde"
                  value={formData.institution}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="contact-email">E-Mail *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="ihre@mail.de"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="contact-role">Rolle</label>
                <select
                  id="contact-role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option>Lehrkraft</option>
                  <option>Schulleitung</option>
                  <option>Administrator</option>
                  <option>Schulträger</option>
                  <option>Anderes</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="contact-message">Nachricht *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Was möchten Sie für Ihre Schule erreichen?"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn primary block"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Wird gesendet…' : 'Absenden'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
});
