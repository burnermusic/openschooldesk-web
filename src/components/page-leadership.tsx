import React from 'react'
import type { RefObject } from 'react';

import type { ContactHandle } from './contact';
import heroLeadership from '../assets/hero-leadership.jpg';

interface PageLeadershipProps {
  contactRef: RefObject<ContactHandle | null>;
}

const compareRows: [string, string, string][] = [
  ['Logins für Lehrkräfte',          'Bis zu 7 Systeme',       '1 — Single Sign-On'],
  ['Datenhoheit',                     'Verteilt auf Anbieter',  'Bei Schule oder Träger'],
  ['Lizenzkosten',                    'Pro Nutzer · pro Jahr',  '0 € — AGPLv3'],
  ['Anpassbar an Schulwirklichkeit',  'Eingeschränkt',          'Vollständig'],
  ['Lock-in beim Wechsel',            'Datenformat proprietär', 'Offene Standards'],
];

function CompareTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #F1E9DA', textAlign: 'left', background: '#FDFBF7' }}>
          <th style={{ padding: '18px 24px', fontWeight: 600, color: '#0F172A', width: '40%' }} />
          <th style={{ padding: '18px 24px', fontWeight: 600, color: '#64748B', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Heute · proprietär
          </th>
          <th style={{ padding: '18px 24px', fontWeight: 600, color: '#4F46E5', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Mit openschooldesk
          </th>
        </tr>
      </thead>
      <tbody>
        {compareRows.map((row, i) => (
          <tr key={i} style={{ borderBottom: i < compareRows.length - 1 ? '1px solid #F1E9DA' : 'none' }}>
            <td style={{ padding: '18px 24px', fontWeight: 600, color: '#0F172A' }}>{row[0]}</td>
            <td style={{ padding: '18px 24px', color: '#94A3B8' }}>{row[1]}</td>
            <td style={{ padding: '18px 24px', color: '#0F172A', fontWeight: 500 }}>
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
                style={{ color: '#4F46E5', fontSize: 18, marginRight: 8, verticalAlign: '-3px' }}
              >
                check
              </span>
              {row[2]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const PageLeadership: React.FC<PageLeadershipProps> = ({ contactRef }) => {
  return (
    <>
      <section className="hero-warm">
        <div className="container">
          <div className="hero-split">
            <div>
              <span className="eyebrow">Für Schulleitung</span>
              <h1 className="h-display">Eine Entscheidung. Für alle. Für Jahre.</h1>
              <p className="body-lg" style={{ maxWidth: 480, marginTop: 20 }}>
                Schluss mit zehn Verträgen, fünf Logins und drei Datenschutzvereinbarungen.
                openschooldesk bündelt, was Ihre Schule braucht — unter einer Oberfläche,
                unter Ihrer Kontrolle.
              </p>
              <div className="ctas">
                <button
                  className="btn primary"
                  onClick={() => contactRef.current?.focus()}
                >
                  Termin vereinbaren
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
                <a href="#pillars" className="btn warm">Die drei Säulen</a>
              </div>
            </div>
            <div className="photo-slot aspect-4-3">
              <img
                src={heroLeadership}
                alt="Schulleiterin mit Tablet und digitalem Klassenbuch"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section" id="pillars">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <span className="eyebrow">Die drei Säulen</span>
            <h2 className="h-headline">
              Souveränität, Kosten, Pädagogik — in dieser Reihenfolge.
            </h2>
          </div>
          <div className="grid-3">
            <article className="card card-warm">
              <div className="chip chip-primary" style={{ marginBottom: 16 }}>Souveränität</div>
              <h3 className="h-md">Ihre Daten bleiben bei Ihnen.</h3>
              <p className="body" style={{ marginTop: 12 }}>
                On-Premise oder beim Schulträger gehostet. Kein US-Cloud-Provider, keine
                Telemetrie, keine Drittanbieter-Skripte. DSGVO ist hier kein Häkchen,
                sondern das Fundament.
              </p>
            </article>
            <article className="card card-warm">
              <div className="chip chip-warm" style={{ marginBottom: 16 }}>Kosten</div>
              <h3 className="h-md">Keine Lizenzgebühren pro Schüler.</h3>
              <p className="body" style={{ marginTop: 12 }}>
                AGPLv3 lizenziert. Sie zahlen für Betrieb und Support — nie für die
                Software. Planungssicherheit über Haushaltsjahre hinweg, ohne Lock-in.
              </p>
            </article>
            <article className="card card-warm">
              <div className="chip chip-primary" style={{ marginBottom: 16 }}>Pädagogik</div>
              <h3 className="h-md">Erfunden für den Schulalltag.</h3>
              <p className="body" style={{ marginTop: 12 }}>
                Vom Klassenbuch bis zum digitalen Schulhof — gebaut mit Lehrkräften,
                nicht für sie. Was nicht im Unterricht hilft, gibt es hier nicht.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <span className="eyebrow warm">Im Vergleich</span>
            <h2 className="h-headline">Was Sie heute haben — und was Sie haben könnten.</h2>
          </div>
          <div style={{ background: '#fff', border: '1px solid #F1E9DA', borderRadius: 16, overflow: 'hidden' }}>
            <CompareTable />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section">
        <div className="container">
          <article className="card-quote" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', padding: 48 }}>
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
              style={{ color: '#C7D2FE', fontSize: 36, marginBottom: 16 }}
            >
              format_quote
            </span>
            <p className="quote-text" style={{ fontSize: 26, lineHeight: 1.4 }}>
              „Wir haben sieben Verträge gekündigt. Unser IT-Budget ist nicht kleiner —
              aber endlich tut es das, wofür es da ist."
            </p>
            <div className="quote-attr" style={{ justifyContent: 'center', marginTop: 24 }}>
              <div className="quote-avatar" style={{ background: 'linear-gradient(135deg, #C7D2FE, #FECACA)' }} />
              <div style={{ textAlign: 'left' }}>
                <div className="quote-name">Dr. Schmitt</div>
                <div className="quote-role">Schulleiter · Gesamtschule Münster</div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
