import React from 'react'
import type { RefObject } from 'react';
import { PhotoSlot } from './photo-slot';
import type { ContactHandle } from './contact';
import { ArchitectureStack } from './architecture-stack';
import { CompareMatrix } from './compare-matrix';

interface PageITProps {
  contactRef: RefObject<ContactHandle | null>;
}

interface PillarProps {
  icon: string;
  title: string;
  body: string;
}

function Pillar({ icon, title, body }: PillarProps) {
  return (
    <article className="card">
      <span className="material-symbols-outlined" aria-hidden="true" style={{ color: '#818CF8', fontSize: 26 }}>{icon}</span>
      <h3 className="h-md" style={{ marginTop: 12 }}>{title}</h3>
      <p className="body" style={{ marginTop: 8, color: '#94A3B8', fontSize: 14 }}>{body}</p>
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
                tausenden Schulen), eine moderne, einheitliche Oberfläche darüber. Mit
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
                <a href="#architektur" className="btn outline-dark">Architektur ansehen</a>
              </div>
            </div>
            <PhotoSlot variant="stack" aspect="aspect-4-3" showMeta={false} />
          </div>
        </div>
      </section>

      {/* Architektur & Systemaufbau */}
      <section className="section" id="architektur">
        <div className="container">
          <div style={{ maxWidth: 740, marginBottom: 48 }}>
            <span className="eyebrow">Architektur &amp; Systemaufbau</span>
            <h2 className="h-headline h-on-dark">
              Eine generische App. Eine Middleware. Bewährte Basis darunter.
            </h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 640, color: '#94A3B8' }}>
              openschooldesk besteht aus zwei Bausteinen: einer <strong style={{ color: '#E2E8F0' }}>generischen
              App</strong> als einheitliche Oberfläche für Web und Mobile und einer
              <strong style={{ color: '#E2E8F0' }}> Middleware</strong>, die diese App über Single Sign-On und
              offene APIs mit den Systemen des Schulservers verbindet. Darunter bleibt
              alles, was Schulen ohnehin schon betreiben — wir ersetzen nichts, wir
              führen zusammen.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <ArchitectureStack />
          </div>

          <div className="grid-3">
            <Pillar
              icon="devices"
              title="Generische App"
              body="Eine Oberfläche für Web, iOS und Android aus einer Codebasis — nicht an ein einzelnes Backend gebunden, sondern über offene Schnittstellen angebunden."
            />
            <Pillar
              icon="hub"
              title="Middleware"
              body="Verbindet die App per SSO (OIDC/PKCE) und API-Proxy mit Kelvin, Nextcloud, Open-Xchange & Co. Access-Tokens bleiben server-seitig (httpOnly), keine Personendaten im Browser, keine Zweitdatenbank."
            />
            <Pillar
              icon="deployed_code"
              title="Betrieb"
              body="Läuft als Docker-Container on-premise neben dem Schulserver — keine Cloud-Pflicht, keine externen Abhängigkeiten. Deutscher Support vom Hersteller."
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
              Tools binden wir über dieselbe Middleware per SSO ein, statt eigene
              Insellösungen zu bauen. Schritt für Schritt wird aus vielen Werkzeugen
              eine durchgängige App.
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
    </>
  );
};
