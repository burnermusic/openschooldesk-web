import React from 'react';

/**
 * Plattform-Leiste: macht auf jeder Seite sichtbar, dass openschooldesk
 * plattformübergreifend läuft (iOS, Android, Windows, macOS).
 * Monochrome, dezente Glyphen für einen seriösen Gesamteindruck.
 */

const Apple = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
    <path fill="currentColor" d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.75.87-1.98 1.54-3.08 1.45-.14-1.1.42-2.27 1.08-3 .74-.82 2.03-1.44 3.12-1.45zM20.5 17.3c-.6 1.38-.9 2-1.67 3.22-1.08 1.7-2.6 3.82-4.48 3.83-1.67.02-2.1-1.1-4.37-1.08-2.27.01-2.74 1.1-4.4 1.09-1.9-.02-3.34-1.93-4.42-3.63C-1.1 17.9-.6 12.3 2.3 9.6c1.02-.96 2.4-1.56 3.87-1.56 1.72 0 2.8 1.1 4.22 1.1 1.37 0 2.2-1.1 4.2-1.1 1.3 0 2.68.71 3.66 1.94-3.22 1.76-2.7 6.36.55 7.32z" />
  </svg>
);

const Android = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
    <path fill="currentColor" d="M6 18a1 1 0 0 0 1 1h1v3.5a1.5 1.5 0 0 0 3 0V19h2v3.5a1.5 1.5 0 0 0 3 0V19h1a1 1 0 0 0 1-1V9H6v9zM3.5 9A1.5 1.5 0 0 0 2 10.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 3.5 9zm17 0a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 20.5 9zM15.5 3.6l1.3-1.3a.5.5 0 0 0-.7-.7l-1.5 1.5A5.9 5.9 0 0 0 12 2.5c-.9 0-1.77.2-2.55.56L7.92 1.6a.5.5 0 1 0-.7.7l1.28 1.29A5.5 5.5 0 0 0 6 8h12a5.5 5.5 0 0 0-2.5-4.4zM9.5 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
  </svg>
);

const Windows = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path fill="currentColor" d="M3 5.4 10.5 4.3v7.2H3V5.4zM11.5 4.1 21 2.8v8.7h-9.5V4.1zM3 12.5h7.5v7.2L3 18.6v-6.1zM11.5 12.5H21v8.7l-9.5-1.3v-7.4z" />
  </svg>
);

const items = [
  { Icon: Apple, label: 'iOS' },
  { Icon: Android, label: 'Android' },
  { Icon: Windows, label: 'Windows' },
  { Icon: Apple, label: 'macOS' },
];

export const PlatformBar: React.FC = () => {
  return (
    <section className="platform-bar">
      <div className="container platform-inner">
        <span className="platform-label">Eine App. Alle Geräte.</span>
        <div className="platform-logos">
          {items.map(({ Icon, label }) => (
            <span key={label} className="platform-item">
              <Icon />
              {label}
            </span>
          ))}
        </div>
        <span className="platform-note">Plattformübergreifend – native Apps &amp; im Browser.</span>
      </div>
    </section>
  );
};
