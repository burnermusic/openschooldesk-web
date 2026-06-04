import React from 'react'
import type { RefObject } from 'react';
import { PhotoSlot } from './photo-slot';
import type { ContactHandle } from './contact';

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
              <span className="chip chip-dark" style={{ marginBottom: 24 }}>
                Open Source · DSGVO · AGPLv3
              </span>
              <h1 className="h-display h-on-dark">
                Eine Zeile. Die ganze Schule digital.
              </h1>
              <p className="body-lg" style={{ color: '#94A3B8', maxWidth: 520, marginTop: 20 }}>
                Proxmox · OPNsense · UCS@school · Nextcloud · Moodle · Veyon · opsi —
                vollständig konfiguriert, integriert, bereit. Bekannte Komponenten,
                sinnvoll verbunden.
              </p>
              <div className="ctas">
                <a href="#github" className="btn primary">
                  <span className="material-symbols-outlined" aria-hidden="true">code</span>
                  GitHub ansehen
                </a>
                <a href="#stack" className="btn outline-dark">Stack-Architektur</a>
              </div>
              <div className="term" style={{ marginTop: 32, maxWidth: 540 }}>
                <div>
                  <span className="prompt">$ </span>
                  <span className="cmd">curl -sSL get.openschooldesk.org | bash</span>
                  {'  '}
                  <span className="comment"># alles in einem Schritt</span>
                </div>
                <div>
                  <span className="comment">→ provisioniert Hypervisor · Identitäten · Apps · Clients</span>
                </div>
                <div>
                  <span className="ok">✓ 247 Clients erreichbar</span>
                  {' · '}
                  <span className="comment">8m 14s</span>
                </div>
              </div>
            </div>
            <PhotoSlot variant="stack" aspect="aspect-4-3" showMeta={false} />
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section" id="stack">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <span className="eyebrow">Der Stack</span>
            <h2 className="h-headline h-on-dark">Nichts neu erfunden. Alles richtig zusammengesetzt.</h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 620, color: '#94A3B8' }}>
              Wir bauen keine Software, die es schon gibt. Wir integrieren bewährte
              Open-Source-Komponenten unter einer Identität, einer Oberfläche und einem
              Provisionierungs-Skript.
            </p>
          </div>
          <div className="grid-3">
            <StackLayer
              title="Infrastruktur"
              items={['Proxmox VE', 'OPNsense', 'Nubus']}
              note="Hypervisor · Firewall · Service-Provisionierung"
            />
            <StackLayer
              title="Identität & Apps"
              items={['UCS@school', 'Keycloak (OIDC)', 'Nextcloud · Moodle']}
              note="LDAP · SSO · Files · Lernplattform"
            />
            <StackLayer
              title="Schul-Anwendungen"
              items={['Veyon', 'opsi', 'Talk · Calendar']}
              note="Klassenraum · Client-Management · Kommunikation"
            />
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
            <div className="term">
              <div><span className="comment"># app/api/kelvin/[...path]/route.ts</span></div>
              <div><span style={{ color: '#C7D2FE' }}>export async function</span> <span className="cmd">GET</span>(request{'{'}{'}'})</div>
              <div>{'  '}<span style={{ color: '#C7D2FE' }}>const</span> session = <span style={{ color: '#C7D2FE' }}>await</span> auth();</div>
              <div>{'  '}<span style={{ color: '#C7D2FE' }}>if</span> (!session?.accessToken)</div>
              <div>{'    '}<span style={{ color: '#C7D2FE' }}>return</span> Response.json(...);</div>
              <div>{'  '}<span className="comment">// inject server-side</span></div>
              <div>{'  '}<span className="cmd">fetch</span>(KELVIN + path, {'{'} headers {'}'});</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
