import React from 'react';

/**
 * Kernaussage-Grafik: EINE App-Oberfläche (iPhone) vorne, dahinter die
 * bewährten Open-Source-Anwendungen. Pfeile verbinden jede App-Sektion mit
 * dem System, das sie im Hintergrund bereitstellt:
 *   Dateien  → Nextcloud
 *   Kalender → Open-Xchange
 *   Klassen  → UCS@school
 *
 * Bewusst als einzelnes, skalierbares SVG (responsive, gestochen scharf).
 * Echte App-Screenshots können später als <image> in den Screen gelegt werden.
 */

const NEXTCLOUD = '#0082C9';
const OX = '#1D6FB8';
const UCS = '#E2001A';

interface Row {
  y: number;
  label: string;
  sub: string;
  color: string;
  tint: string;
  icon: React.ReactNode;
}

interface Card {
  y: number;
  name: string;
  role: string;
  color: string;
}

const ROW_H = 52;
const rows: Row[] = [
  {
    y: 108, label: 'Dateien', sub: 'Persönliche Ablage & Gruppen', color: NEXTCLOUD, tint: '#E6F3FA',
    icon: <path d="M-8 -6 h5 l2 2 h9 v10 h-16 Z" fill="#fff" />,
  },
  {
    y: 172, label: 'Kalender', sub: 'Termine, Ferien & Klausuren', color: OX, tint: '#E8F1FB',
    icon: (
      <g fill="none" stroke="#fff" strokeWidth="1.6">
        <rect x="-8" y="-7" width="16" height="15" rx="2" />
        <line x1="-8" y1="-2" x2="8" y2="-2" />
        <line x1="-3" y1="-10" x2="-3" y2="-4" />
        <line x1="3" y1="-10" x2="3" y2="-4" />
      </g>
    ),
  },
  {
    y: 236, label: 'Klassen', sub: 'Schüler, Lehrkräfte & Rollen', color: UCS, tint: '#FCE9EA',
    icon: (
      <g fill="#fff">
        <polygon points="0,-8 10,-3 0,2 -10,-3" />
        <path d="M-6 -1 v5 a6 3 0 0 0 12 0 v-5" fill="none" stroke="#fff" strokeWidth="1.6" />
      </g>
    ),
  },
];

const cards: Card[] = [
  { y: 64, name: 'Nextcloud', role: 'Dateien, Gruppenordner & Freigaben', color: NEXTCLOUD },
  { y: 186, name: 'Open-Xchange', role: 'Kalender, Termine & Kontakte', color: OX },
  { y: 308, name: 'UCS@school', role: 'Identitäten, Klassen & Provisionierung', color: UCS },
];

const CARD_X = 556;
const CARD_W = 330;
const CARD_H = 98;
const ROW_RIGHT = 226;

export const AppBridge: React.FC = () => {
  return (
    <div className="app-bridge">
      <svg viewBox="0 0 900 460" role="img" aria-label="Die openschooldesk-App vorne, dahinter Nextcloud, Open-Xchange und UCS@school, verbunden durch Pfeile.">
        <defs>
          {[['ncl', NEXTCLOUD], ['ox', OX], ['ucs', UCS]].map(([id, c]) => (
            <marker key={id} id={`arrow-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 Z" fill={c} />
            </marker>
          ))}
        </defs>

        {/* Spaltenüberschriften */}
        <text x="145" y="30" textAnchor="middle" className="ab-cap">Eine App</text>
        <text x={CARD_X + CARD_W / 2} y="30" textAnchor="middle" className="ab-cap">Bewährte Open-Source-Basis</text>

        {/* Verbindungs-Pfeile (hinter Karten & Telefon) */}
        {rows.map((row, i) => {
          const card = cards[i];
          const y1 = row.y + ROW_H / 2;
          const y2 = card.y + CARD_H / 2;
          const midX = (ROW_RIGHT + CARD_X) / 2;
          const markerId = ['ncl', 'ox', 'ucs'][i];
          return (
            <path
              key={row.label}
              d={`M ${ROW_RIGHT} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${CARD_X - 10} ${y2}`}
              fill="none"
              stroke={row.color}
              strokeWidth="2.5"
              strokeOpacity="0.85"
              markerEnd={`url(#arrow-${markerId})`}
            />
          );
        })}

        {/* Telefon */}
        <rect x="40" y="48" width="210" height="380" rx="32" fill="#0F172A" />
        <rect x="52" y="64" width="186" height="348" rx="22" fill="#FFFFFF" />
        <rect x="122" y="72" width="46" height="6" rx="3" fill="#0F172A" />
        <text x="145" y="98" textAnchor="middle" className="ab-brand">openschooldesk</text>

        {rows.map((row) => (
          <g key={`r-${row.label}`}>
            <rect x="64" y={row.y} width="162" height={ROW_H} rx="12" fill={row.tint} />
            <rect x="74" y={row.y + 10} width="32" height="32" rx="9" fill={row.color} />
            <g transform={`translate(90 ${row.y + 26})`}>{row.icon}</g>
            <text x="116" y={row.y + 23} className="ab-row-label">{row.label}</text>
            <text x="116" y={row.y + 39} className="ab-row-sub">{row.sub}</text>
          </g>
        ))}

        {/* Untere Navigationsleiste */}
        <rect x="64" y="360" width="162" height="42" rx="12" fill="#F1F5F9" />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={88 + i * 29} cy="381" r="4" fill={i < 3 ? '#4F46E5' : '#CBD5E1'} />
        ))}

        {/* Backend-Karten */}
        {cards.map((card) => (
          <g key={`c-${card.name}`}>
            <rect x={CARD_X} y={card.y} width={CARD_W} height={CARD_H} rx="16" fill="#fff" stroke="#E2E8F0" />
            <rect x={CARD_X} y={card.y} width="6" height={CARD_H} fill={card.color} />
            <rect x={CARD_X} y={card.y} width="16" height={CARD_H} fill={card.color} fillOpacity="0.08" />
            <text x={CARD_X + 34} y={card.y + 40} className="ab-card-name">{card.name}</text>
            <text x={CARD_X + 34} y={card.y + 66} className="ab-card-role">{card.role}</text>
            <text x={CARD_X + CARD_W - 18} y={card.y + 26} textAnchor="end" className="ab-card-tag">OPEN SOURCE</text>
          </g>
        ))}
      </svg>
    </div>
  );
};
