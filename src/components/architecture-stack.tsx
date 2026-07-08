import React from 'react';

/**
 * Systemaufbau als Ebenen-Diagramm: oben unsere zwei Bausteine
 * (generische App + Middleware), darunter die bewährte Open-Source-Basis
 * des Schulservers. Ersetzt die früheren Code-Schnipsel durch eine klare
 * Architektur-Darstellung.
 */

interface Layer {
  label: string;
  items: string[];
  kind: 'ours' | 'base';
}

const layers: Layer[] = [
  { label: 'Oberfläche', kind: 'ours', items: ['openschooldesk Web-Portal', 'openschooldesk App · iOS & Android'] },
  { label: 'Middleware', kind: 'ours', items: ['Single Sign-On · OIDC / PKCE', 'API-Proxy · Kelvin & Co.', 'Tokens server-seitig'] },
  { label: 'Schul-Anwendungen', kind: 'base', items: ['Nextcloud · Dateien', 'Open-Xchange · Kalender', 'Moodle · LMS', 'Veyon · Klassenraum', 'opsi · Clients'] },
  { label: 'Identität & Verzeichnis', kind: 'base', items: ['UCS@school · LDAP', 'Keycloak · OIDC', 'Kelvin · REST API'] },
  { label: 'Infrastruktur', kind: 'base', items: ['Proxmox VE · Hypervisor', 'OPNsense · Firewall', 'Nubus · Provisioning'] },
];

export const ArchitectureStack: React.FC = () => {
  return (
    <div className="archstack">
      <div className="archstack-tag archstack-tag-ours">Das bauen wir</div>
      {layers.map((l) => (
        <React.Fragment key={l.label}>
          {l.label === 'Schul-Anwendungen' && (
            <div className="archstack-tag archstack-tag-base">Bewährte Open-Source-Basis · Schulserver</div>
          )}
          <div className={`archrow ${l.kind}`}>
            <div className="archrow-label">{l.label}</div>
            <div className="archrow-items">
              {l.items.map((item) => (
                <span key={item} className="archpill">{item}</span>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
