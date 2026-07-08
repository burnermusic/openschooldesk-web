import React from 'react'
import type { RefObject } from 'react';

import type { ContactHandle } from './contact';
import heroTeacher from '../assets/hero-teacher.jpg';
import { CompareMatrix } from './compare-matrix';
import { AppBridge } from './app-bridge';

interface PageTeachersProps {
  contactRef: RefObject<ContactHandle | null>;
}

export const PageTeachers: React.FC<PageTeachersProps> = ({ contactRef }) => {
  return (
    <>
      {/* Hero — warm split with school photo slot */}
      <section className="hero-warm">
        <div className="container">
          <div className="hero-split">
            <div>
              <span className="eyebrow">Für Lehrkräfte</span>
              <h1 className="h-display">
                Die erste Open-Source-App für Ihren Schulserver.
              </h1>
              <p className="body-lg" style={{ maxWidth: 480, marginTop: 20 }}>
                Eine Oberfläche für alles, was Ihre Schule schon hat: Dateien, Kalender,
                Klassen – ein Login statt zehn. openschooldesk legt die App-Schicht auf
                bewährte Open-Source-Systeme, die an tausenden Schulen laufen.
              </p>
              <div className="ctas">
                <button
                  className="btn primary"
                  onClick={() => contactRef.current?.focus()}
                >
                  Für meine Schule anfragen
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
                <a href="#prinzip" className="btn warm">So funktioniert es</a>
              </div>
            </div>
            <div className="photo-slot aspect-4-3">
              <img
                src={heroTeacher}
                alt="Lehrkraft mit Tablet im Klassenraum"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prinzip: eine App vorne, Open-Source-Systeme dahinter */}
      <section className="section" id="prinzip">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <span className="eyebrow">Das Prinzip</span>
            <h2 className="h-headline">
              Eine Oberfläche. Dahinter die Systeme, die Ihre Schule schon nutzt.
            </h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 620 }}>
              openschooldesk erfindet nichts neu, was es schon gibt. Jede Funktion in
              der App greift auf eine bewährte Open-Source-Anwendung zu – ohne dass Sie
              sich zehnmal anmelden oder zehn Systeme kennen müssen.
            </p>
          </div>
          <AppBridge />
          <p className="body" style={{ marginTop: 40, textAlign: 'center', fontSize: 14, color: '#64748B' }}>
            Quelloffen unter <strong style={{ color: '#0F172A' }}>AGPLv3</strong> – keine Lizenzgebühren pro Nutzer,
            kein Lock-in. Öffentliche Mittel verdienen quelloffenen Code.
          </p>
        </div>
      </section>

      {/* Vergleich */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ maxWidth: 700, marginBottom: 40 }}>
            <span className="eyebrow warm">Im Vergleich</span>
            <h2 className="h-headline">
              Wie openschooldesk gegen den Markt steht.
            </h2>
          </div>
          <div style={{ background: '#fff', border: '1px solid #F1E9DA', borderRadius: 16, overflow: 'hidden' }}>
            <CompareMatrix />
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="section-tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h-headline" style={{ maxWidth: 720, margin: '0 auto 24px' }}>
            Zeigen Sie es Ihrer Schulleitung.
          </h2>
          <p className="body-lg muted-2" style={{ maxWidth: 540, margin: '0 auto 32px' }}>
            Wir kommen vorbei, zeigen die App live und beantworten die Fragen, die im
            Lehrerzimmer wirklich aufkommen.
          </p>
          <button
            className="btn primary"
            onClick={() => contactRef.current?.focus()}
          >
            Demo für mein Kollegium{' '}
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </section>
    </>
  );
};
