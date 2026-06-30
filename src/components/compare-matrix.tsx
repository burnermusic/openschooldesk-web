import React from 'react';

interface MatrixRow {
  aspect: string;
  microsoft: string;
  iserv: string;
  sdui: string;
  openschooldesk: string;
}

const rows: MatrixRow[] = [
  { aspect: 'Open Source',            microsoft: 'Nein',            iserv: 'Nein',                  sdui: 'Nein',                 openschooldesk: 'Ja — AGPLv3, voller Quellcode' },
  { aspect: 'Datenstandort / Hosting', microsoft: 'US-Hyperscaler-Cloud', iserv: 'Cloud oder On-Prem (Anbieter)', sdui: 'Cloud (Anbieter-gehostet)', openschooldesk: 'On-Prem oder beim Schulträger — frei wählbar' },
  { aspect: 'Herstellerabhängigkeit', microsoft: 'Hoch — proprietäres Ökosystem', iserv: 'Mittel — proprietäre Plattform', sdui: 'Mittel — proprietäre App', openschooldesk: 'Keine — offener Code, jederzeit wechselbar' },
  { aspect: 'Lizenzkosten',           microsoft: 'Pro Nutzer / Jahr', iserv: 'Pro Schule / Jahr',     sdui: 'Pro Nutzer / Jahr',     openschooldesk: '0 € Lizenzkosten (AGPLv3)' },
  { aspect: 'Public Money Public Code', microsoft: 'Nein', iserv: 'Nein', sdui: 'Nein', openschooldesk: 'Ja — und eigene Kundenanpassungen jederzeit möglich' },
  { aspect: 'DSGVO-Tiefe',            microsoft: 'Vertraglich (AVV)', iserv: 'Vertraglich (AVV)',     sdui: 'Vertraglich (AVV)',     openschooldesk: 'Strukturell — Daten bleiben physisch bei Schule/Träger' },
  { aspect: 'Anpassbarkeit',          microsoft: 'Eingeschränkt (Standard-Suite)', iserv: 'Eingeschränkt (vorgegebene Module)', sdui: 'Eingeschränkt (Fokus Kommunikation)', openschooldesk: 'Vollständig — Code einsehbar & erweiterbar' },
  { aspect: 'Support',                microsoft: 'International', iserv: 'Deutscher Anbieter',    sdui: 'Deutscher Anbieter',    openschooldesk: 'Deutscher Support vom Hersteller' },
];

interface CompareMatrixProps {
  compact?: boolean;
}

export const CompareMatrix: React.FC<CompareMatrixProps> = ({ compact = false }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: compact ? 13 : 14, minWidth: 760 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #F1E9DA', textAlign: 'left', background: '#FDFBF7' }}>
            <th style={{ padding: '16px 20px', fontWeight: 600, color: '#0F172A', width: '22%' }} />
            <th style={{ padding: '16px 20px', fontWeight: 600, color: '#64748B', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Microsoft 365 Edu
            </th>
            <th style={{ padding: '16px 20px', fontWeight: 600, color: '#64748B', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              IServ
            </th>
            <th style={{ padding: '16px 20px', fontWeight: 600, color: '#64748B', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Sdui
            </th>
            <th style={{ padding: '16px 20px', fontWeight: 600, color: '#4F46E5', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              openschooldesk
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.aspect} style={{ borderBottom: i < rows.length - 1 ? '1px solid #F1E9DA' : 'none' }}>
              <td style={{ padding: '16px 20px', fontWeight: 600, color: '#0F172A' }}>{row.aspect}</td>
              <td style={{ padding: '16px 20px', color: '#94A3B8' }}>{row.microsoft}</td>
              <td style={{ padding: '16px 20px', color: '#94A3B8' }}>{row.iserv}</td>
              <td style={{ padding: '16px 20px', color: '#94A3B8' }}>{row.sdui}</td>
              <td style={{ padding: '16px 20px', color: '#0F172A', fontWeight: 500 }}>
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                  style={{ color: '#4F46E5', fontSize: 18, marginRight: 8, verticalAlign: '-3px' }}
                >
                  check
                </span>
                {row.openschooldesk}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
