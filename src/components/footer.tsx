import React from 'react';
import logoWordmark from '../assets/logo-wordmark.png';

interface FooterProps {
  deep?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ deep = false }) => {
  return (
    <footer className={`footer${deep ? ' on-deep' : ''}`}>
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logoWordmark} alt="openschooldesk" />
          <p>Eine Schulapp, die alle vereint. Open Source, DSGVO-konform, gebaut für den Schulalltag.</p>
          <p style={{ fontSize: 12, color: deep ? '#64748B' : '#94A3B8' }}>
            © 2026 openschooldesk · Made in Germany · AGPLv3
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h5>Für Schulen</h5>
            <a href="#/">Lehrkräfte</a>
            <a href="#/leitung">Schulleitung</a>
            <a href="#/eltern">Eltern</a>
          </div>
          <div className="footer-col">
            <h5>Für Träger &amp; IT</h5>
            <a href="#/it">Stack-Architektur</a>
            <a href="/blog/">Blog</a>
            <a href="/ueber-uns/">Über uns</a>
          </div>
          <div className="footer-col">
            <h5>Rechtliches</h5>
            <a href="/datenschutz/">Datenschutz</a>
            <a href="/impressum/">Impressum</a>
            <a href="https://www.gnu.org/licenses/agpl-3.0.de.html" target="_blank" rel="noopener">Lizenz (AGPLv3)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
