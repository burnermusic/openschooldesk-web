import React from 'react';
import logoWordmark from '../assets/logo-wordmark.png';

export type Audience = 'teachers' | 'leadership' | 'it' | 'parents';

interface NavProps {
  audience: Audience;
  onChange: (next: Audience) => void;
  onCtaClick: () => void;
  dark: boolean;
}

const items: { id: Audience; label: string; icon: string }[] = [
  { id: 'teachers',   label: 'Für Lehrkräfte', icon: 'school' },
  { id: 'leadership', label: 'Schulleitung',   icon: 'supervisor_account' },
  { id: 'it',         label: 'IT & Träger',    icon: 'dns' },
  { id: 'parents',    label: 'Familien',       icon: 'family_restroom' },
];

export const Nav: React.FC<NavProps> = ({ audience, onChange, onCtaClick, dark }) => {
  return (
    <header className={`header${dark ? ' on-dark' : ''}`}>
      <div className="tagline-bar">
        100% Open Source · Bis ins Klassenzimmer. Keine Kompromisse.
      </div>
      <div className="container header-inner">
        <a
          href="#/"
          className="brand"
          onClick={(e) => { e.preventDefault(); onChange('teachers'); }}
        >
          <img src={logoWordmark} alt="openschooldesk" />
        </a>

        <div className="switcher" role="tablist" aria-label="Zielgruppe wählen">
          {items.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={audience === item.id}
              className={audience === item.id ? 'active' : ''}
              onClick={() => onChange(item.id)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="header-actions">
          <a
            href="#kontakt"
            className="header-cta"
            onClick={(e) => { e.preventDefault(); onCtaClick(); }}
          >
            Demo anfragen
          </a>
        </div>
      </div>
    </header>
  );
};
