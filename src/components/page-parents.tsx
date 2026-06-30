import React from 'react'
import type { RefObject } from 'react';
import dsgvoLock from '../assets/dsgvo-lock.jpg';
import heroParents from '../assets/hero-parents.jpg';
import type { ContactHandle } from './contact';

interface PageParentsProps {
  contactRef: RefObject<ContactHandle | null>;
}

interface FeatureBlockProps {
  icon: string;
  title: string;
  body: string;
}

function FeatureBlock({ icon, title, body }: FeatureBlockProps) {
  return (
    <div className="card card-warm" style={{ textAlign: 'left' }}>
      <div
        style={{
          width: 44, height: 44, borderRadius: 12,
          background: '#EEF2FF', display: 'flex',
          alignItems: 'center', justifyContent: 'center', marginBottom: 16,
        }}
      >
        <span className="material-symbols-outlined" style={{ color: '#4F46E5' }} aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className="h-md" style={{ fontSize: 18 }}>{title}</h3>
      <p className="body" style={{ fontSize: 14, marginTop: 6 }}>{body}</p>
    </div>
  );
}

function ChecklistRow({ text }: { text: string }) {
  return (
    <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', listStyle: 'none' }}>
      <span
        className="material-symbols-outlined"
        aria-hidden="true"
        style={{ color: '#059669', fontSize: 22, lineHeight: 1.3 }}
      >
        check_circle
      </span>
      <span className="body" style={{ color: '#0F172A' }}>{text}</span>
    </li>
  );
}

export const PageParents: React.FC<PageParentsProps> = ({ contactRef }) => {
  return (
    <>
      <section className="hero-warm">
        <div className="container">
          <div className="hero-split">
            <div>
              <span className="eyebrow warm">Für Familien</span>
              <h1 className="h-display">
                Eine App. Damit Sie wissen, was an der Schule Ihres Kindes passiert.
              </h1>
              <p className="body-lg" style={{ maxWidth: 480, marginTop: 20 }}>
                Stundenplan, Krankmeldung, Elternbriefe, Klassenchat — übersichtlich,
                auf einem Bildschirm, ohne dass Ihre Daten an Werbenetzwerke wandern.
              </p>
              <div className="ctas">
                <button
                  className="btn primary"
                  onClick={() => contactRef.current?.focus()}
                >
                  Für unsere Schule anfragen
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
                <a href="#was" className="btn warm">Was Sie als Eltern sehen</a>
              </div>
            </div>
            <div className="photo-slot aspect-4-3">
              <img
                src={heroParents}
                alt="Mutter liest Schulnachrichten auf dem Smartphone"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What parents see */}
      <section className="section" id="was">
        <div className="container">
          <div style={{ maxWidth: 700, marginBottom: 56 }}>
            <span className="eyebrow">Was Sie sehen</span>
            <h2 className="h-headline">
              Alles Wichtige aus dem Schulalltag — auf einen Blick.
            </h2>
          </div>
          <div className="grid-4">
            <FeatureBlock
              icon="schedule"
              title="Stundenplan"
              body="Aktueller Plan inkl. Vertretungen. Push-Mitteilung bei Änderungen."
            />
            <FeatureBlock
              icon="sick"
              title="Krankmeldung"
              body="In zwei Klicks abgemeldet. Mit Datum, Grund und Dauer."
            />
            <FeatureBlock
              icon="mail"
              title="Elternbriefe"
              body="Alle Mitteilungen der Schule digital. Mit Lesebestätigung."
            />
            <FeatureBlock
              icon="chat"
              title="Klassenchat"
              body="Direkter Draht zur Lehrkraft. Werbefrei, DSGVO-konform."
            />
          </div>
        </div>
      </section>

      {/* Data reassurance */}
      <section className="section section-cream">
        <div className="container">
          <div className="split split-tight">
            <div className="photo-slot aspect-4-3">
              <img
                src={dsgvoLock}
                alt="EU-Schloss als Symbol für DSGVO-Datenschutz"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <span className="eyebrow warm">Datenschutz, ehrlich.</span>
              <h2 className="h-headline">
                Was wir nicht tun — und warum das wichtig ist.
              </h2>
              <ul style={{ marginTop: 24 }}>
                <ChecklistRow text="Keine Werbung. Nirgends." />
                <ChecklistRow text={'Keine Weitergabe an Dritte. Auch nicht an „Partner“.'} />
                <ChecklistRow text="Daten bleiben in Deutschland, bei der Schule oder beim Schulträger." />
                <ChecklistRow text="Quelltext öffentlich. Jeder kann prüfen, was die App tut." />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h2 className="h-headline">Unsere Schule hat openschooldesk noch nicht?</h2>
          <p className="body-lg muted-2" style={{ marginTop: 16, marginBottom: 32 }}>
            Sprechen Sie die Schulleitung oder den Elternbeirat an. Wir schicken Ihnen
            gerne eine Info-Mail, die Sie weiterleiten können.
          </p>
          <button
            className="btn primary"
            onClick={() => contactRef.current?.focus()}
          >
            Info-Mail anfordern{' '}
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </section>
    </>
  );
};
