import React from 'react'
import type { RefObject } from 'react';

import type { ContactHandle } from './contact';

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

export const PageLeadership: React.FC<PageLeadershipProps> = ({ contactRef: _contactRef }) => {
  return (
    <>
      {/* Three pillars */}
      <section className="section section-first" id="pillars">
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
                AGPLv3 lizenziert, nach dem Public-Money-Public-Code-Prinzip. Sie
                zahlen für Betrieb und Support — nie für die Software. Eigene
                Kundenanpassungen sind jederzeit möglich, ohne Lock-in bei einem
                einzelnen Anbieter.
              </p>
            </article>
            <article className="card card-warm">
              <div className="chip chip-primary" style={{ marginBottom: 16 }}>Letzte Meile</div>
              <h3 className="h-md">Eine App, kein Tool-Wirrwarr.</h3>
              <p className="body" style={{ marginTop: 12 }}>
                Wir sind eine Software-Firma, die sich auf die App konzentriert —
                Nextcloud, Open-Xchange und über SSO sämtliche weitere Anwendungen
                sind bereits integriert. Eine Oberfläche statt zehn Insellösungen.
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

    </>
  );
};
