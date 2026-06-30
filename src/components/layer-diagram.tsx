import React from 'react';

export const LayerDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramm: openschooldesk als App-Schicht über dem Schulserver">
      <rect x="0" y="0" width="560" height="320" rx="16" fill="#0F172A" />

      {/* App layer */}
      <rect x="32" y="36" width="496" height="108" rx="12" fill="#4F46E5" />
      <text x="56" y="70" fontFamily="Work Sans, sans-serif" fontSize="20" fontWeight="700" fill="#fff">openschooldesk — die App</text>
      <text x="56" y="96" fontFamily="Inter, sans-serif" fontSize="13" fill="#E0E7FF">Klassenbuch · Nextcloud · Open-Xchange</text>
      <text x="56" y="116" fontFamily="Inter, sans-serif" fontSize="13" fill="#E0E7FF">SSO zu weiteren Anwendungen</text>
      <text x="468" y="128" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#C7D2FE" textAnchor="end">DAS BAUEN WIR</text>

      {/* connector */}
      <line x1="280" y1="144" x2="280" y2="180" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
      <polygon points="280,186 274,176 286,176" fill="#64748B" />
      <text x="296" y="168" fontFamily="Inter, sans-serif" fontSize="12" fill="#94A3B8">eine App, ein Login</text>

      {/* Base layer */}
      <rect x="32" y="192" width="496" height="92" rx="12" fill="#1E293B" stroke="#334155" />
      <text x="56" y="222" fontFamily="Work Sans, sans-serif" fontSize="18" fontWeight="700" fill="#fff">Schulserver (u. a. UCS@school)</text>
      <text x="56" y="246" fontFamily="Inter, sans-serif" fontSize="13" fill="#94A3B8">Identität · Verzeichnis · Infrastruktur</text>
      <text x="56" y="265" fontFamily="Inter, sans-serif" fontSize="13" fill="#94A3B8">im Einsatz an tausenden Schulen</text>
      <text x="468" y="276" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#64748B" textAnchor="end">DARAUF SETZEN WIR AUF</text>
    </svg>
  );
};
