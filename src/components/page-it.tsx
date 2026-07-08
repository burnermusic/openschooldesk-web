import React from 'react'
import type { RefObject } from 'react';
import { PhotoSlot } from './photo-slot';
import type { ContactHandle } from './contact';
import { LayerDiagram } from './layer-diagram';
import { CompareMatrix } from './compare-matrix';
import { AppBridge } from './app-bridge';

interface PageITProps {
  contactRef: RefObject<ContactHandle | null>;
}

interface StackLayerProps {
  title: string;
  items: string[];
  note: string;
}

function StackLayer({ title, items, note }: StackLayerProps) {
  return (
    <article className="card">
      <h3 className="h-md">{title}</h3>
      <p className="body" style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>{note}</p>
      <div className="stack" style={{ marginTop: 20 }}>
        {items.map((item) => (
          <span key={item} className="stack-badge">{item}</span>
        ))}
      </div>
    </article>
  );
}

export const PageIT: React.FC<PageITProps> = ({ contactRef: _contactRef }) => {
  return (
    <>
      <section className="hero-dark">
        <div className="container">
          <div className="hero-split">
            <div>
              <span className="chip chip-dark" style={{ marginBottom: 16 }}>
                Open Source · Deutscher Support · On-Prem-fähig
              </span>
              <span className="chip chip-beta" style={{ marginBottom: 24, marginLeft: 8 }}>
                Beta
              </span>
              <h1 className="h-display h-on-dark">
                Die App für euren Schulserver.
              </h1>
              <p className="body-lg" style={{ color: '#94A3B8', maxWidth: 520, marginTop: 20 }}>
                openschooldesk ist keine Schulserver-Distribution — wir bauen die
                App-Schicht obendrauf. Bewährte Basis (u. a. UCS@school, im Einsatz an
                tausenden Schulen), eine moderne, einheitliche UX darüber. Mit
                deutschem Support vom Hersteller, integriert in hochsichere
                Umgebungen, auch On-Premise.
              </p>
              <p className="body" style={{ color: '#64748B', fontSize: 14, marginTop: 12, maxWidth: 520 }}>
                Aktuell im Beta-Status: Kernfunktionen laufen produktiv im Pilot,
                der Funktionsumfang wächst kontinuierlich.
              </p>
              <div className="ctas">
                <a href="#github" className="btn primary">
                  <span className="material-symbols-outlined" aria-hidden="true">code</span>
                  GitHub ansehen
                </a>
                <a href="#stack" className="btn outline-dark">Stack-Architektur</a>
              </div>
              <div className="term" style={{ marginTop: 32, maxWidth: 540 }}>
                <div><span className="comment"># App-Server als Docker-Container – neben dem Schulserver</span></div>
                <div>
                  <span className="prompt">$ </span>
                  <span className="cmd">docker compose up -d</span>
                </div>
                <div><span className="ok">✓ openschooldesk-app</span>{'  '}<span className="comment">Next.js · Node</span></div>
                <div><span className="ok">✓ nginx</span>{'  '}<span className="comment">Reverse-Proxy · TLS</span></div>
                <div><span className="comment">→ On-Premise, keine Cloud-Pflicht, keine externen Abhängigkeiten</span></div>
              </div>
            </div>
            <PhotoSlot variant="stack" aspect="aspect-4-3" showMeta={false} />
          </div>
        </div>
      </section>

      {/* Stack: fremde Basis vs. eigene App */}
      <section className="section" id="stack">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <span className="eyebrow">Fremde Basis, eigene App</span>
            <h2 className="h-headline h-on-dark">Der Schulserver ist nicht unser Produkt. Die App davor schon.</h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 620, color: '#94A3B8' }}>
              openschooldesk ist kein Fork und kein UCS-Produkt. Wir setzen als
              eigenständige App auf bewährter Schulserver-Infrastruktur auf — und
              konzentrieren uns als Software-Firma vollständig auf das, was darüber
              liegt: die Oberfläche, die Lehrkräfte, Schüler und Eltern tatsächlich
              benutzen.
            </p>
          </div>

          <div style={{ marginBottom: 56 }}>
            <AppBridge />
          </div>

          <div style={{ marginBottom: 40, maxWidth: 560 }}>
            <LayerDiagram />
          </div>

          <div className="grid-2">
            <StackLayer
              title="Was wir nicht erfunden haben"
              items={['UCS@school', 'Proxmox VE', 'Keycloak (OIDC)', 'OPNsense']}
              note="Fremde, bewährte Basis — im Einsatz an tausenden Schulen"
            />
            <StackLayer
              title="Was wir bauen"
              items={['openschooldesk App', 'Kelvin-Integration', 'Nextcloud · Open-Xchange', 'SSO zu weiteren Anwendungen']}
              note="Die App-Schicht — eine Oberfläche statt zehn Logins"
            />
          </div>
        </div>
      </section>

      {/* Wachsendes Ökosystem */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Wachsendes Ökosystem</span>
            <h2 className="h-headline">Eine App, die mitwächst.</h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 620 }}>
              Nextcloud und Open-Xchange sind bereits sauber integriert — ein Login,
              eine Oberfläche, kein Bruch im Nutzererlebnis. Weitere pädagogische
              Tools binden wir per SSO ein, statt eigene Insellösungen zu bauen.
              Schritt für Schritt wird aus vielen Werkzeugen eine durchgängige App.
            </p>
            <div className="stack" style={{ marginTop: 24 }}>
              <span className="stack-badge">Nextcloud</span>
              <span className="stack-badge">Open-Xchange</span>
              <span className="stack-badge">SSO · weitere Anwendungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lizenz & Unabhängigkeit */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Keine Lizenzgebühren, keine Abhängigkeiten</span>
            <h2 className="h-headline h-on-dark">Quelloffen, nach dem Public-Money-Public-Code-Prinzip.</h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 620, color: '#94A3B8' }}>
              AGPLv3 lizenziert — öffentliche Mittel verdienen quelloffenen Code.
              Keine Lizenzgebühren pro Nutzer, kein Lock-in bei einem einzelnen
              Anbieter. Eigene Kundenanpassungen sind jederzeit möglich, ohne den
              Quellcode zu verlassen.
            </p>
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <span className="eyebrow">Im Vergleich</span>
            <h2 className="h-headline">Wie openschooldesk gegen den Markt steht.</h2>
          </div>
          <div style={{ background: '#fff', border: '1px solid #F1E9DA', borderRadius: 16, overflow: 'hidden' }}>
            <CompareMatrix compact />
          </div>
        </div>
      </section>

      {/* Kelvin API */}
      <section className="section section-alt">
        <div className="container">
          <div className="split split-tight">
            <div>
              <span className="eyebrow">Kelvin API</span>
              <h2 className="h-headline">Native Extension. Kein Replikat.</h2>
              <p className="body" style={{ marginTop: 20 }}>
                openschooldesk ist API-Client, nicht Datensilo. Tokens bleiben
                server-seitig (httpOnly), jede Anfrage geht über den Server-Proxy.
                Keine PII im Browser, keine Replikation, kein eigenes Backend, das
                gewartet werden muss.
              </p>
              <div className="stack" style={{ marginTop: 24 }}>
                <span className="stack-badge">Next.js 14</span>
                <span className="stack-badge">NextAuth v5</span>
                <span className="stack-badge">Kelvin v1</span>
                <span className="stack-badge">PKCE</span>
                <span className="stack-badge">TypeScript strict</span>
              </div>
            </div>
            <div className="card">
              <h3 className="h-md">So fließen die Daten</h3>
              <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 14 }}>
                <li className="body" style={{ display: 'flex', gap: 10 }}>
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ color: '#4F46E5', fontSize: 20 }}>lock</span>
                  Anmeldung per Single Sign-On (Keycloak / OIDC, PKCE) – Zugangsdaten verlassen den Schulserver nie.
                </li>
                <li className="body" style={{ display: 'flex', gap: 10 }}>
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ color: '#4F46E5', fontSize: 20 }}>dns</span>
                  Alle Kelvin-Aufrufe laufen über den App-Server als Proxy – Access-Tokens bleiben in httpOnly-Cookies.
                </li>
                <li className="body" style={{ display: 'flex', gap: 10 }}>
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ color: '#4F46E5', fontSize: 20 }}>visibility_off</span>
                  Im Browser landen nur die angezeigten Daten – keine Personendaten auf Vorrat, keine Zweitdatenbank.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
