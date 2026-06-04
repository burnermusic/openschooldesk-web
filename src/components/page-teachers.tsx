import React from 'react'
import type { RefObject } from 'react';
import { PhotoSlot } from './photo-slot';
import type { ContactHandle } from './contact';

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
                Endlich mehr Zeit für das, worauf es ankommt: Unterricht.
              </h1>
              <p className="body-lg" style={{ maxWidth: 480, marginTop: 20 }}>
                Eine einheitliche Oberfläche für Ihre Schule – gebaut auf bewährter
                Open-Source-Software. Sicher, DSGVO-konform, sofort einsatzbereit.
              </p>
              <div className="ctas">
                <button
                  className="btn primary"
                  onClick={() => contactRef.current?.focus()}
                >
                  Für meine Schule anfragen
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
                <a href="#tag" className="btn warm">Ein typischer Schultag</a>
              </div>
            </div>
            <PhotoSlot variant="school" aspect="aspect-4-3" />
          </div>
        </div>
      </section>

      {/* Story strip — "Ein typischer Schultag" */}
      <section className="section" id="tag">
        <div className="container">
          <div style={{ maxWidth: 700, marginBottom: 56 }}>
            <span className="eyebrow">Ein typischer Schultag</span>
            <h2 className="h-headline">
              Vom Morgenkaffee bis zur letzten Stunde — alles greifbar.
            </h2>
          </div>
          <div className="grid-3">
            <article className="card card-warm">
              <PhotoSlot variant="desk" aspect="aspect-4-3" showMeta={false} />
              <h3 className="h-md" style={{ marginTop: 20 }}>Morgens · 07:45</h3>
              <p className="body" style={{ marginTop: 8 }}>
                Ein Login. Stundenplan, Materialien, Vertretungen, Klassenbuch – alles
                schon offen, wenn der erste Kaffee fertig ist.
              </p>
            </article>
            <article className="card card-warm">
              <PhotoSlot variant="classroom" aspect="aspect-4-3" showMeta={false} />
              <h3 className="h-md" style={{ marginTop: 20 }}>Im Unterricht · 10:20</h3>
              <p className="body" style={{ marginTop: 8 }}>
                Klassenraum aus der Cloud starten, Aufgabe verteilen, Bildschirme im
                Blick behalten – ohne dass Schülerinnen und Schüler sich neu einloggen
                müssen.
              </p>
            </article>
            <article className="card card-warm">
              <PhotoSlot variant="students" aspect="aspect-4-3" showMeta={false} />
              <h3 className="h-md" style={{ marginTop: 20 }}>Nachmittags · 15:30</h3>
              <p className="body" style={{ marginTop: 8 }}>
                Korrekturen, Elternnachrichten, nächste Woche planen. Geht von
                zuhause genauso wie aus dem Lehrerzimmer.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ maxWidth: 700, marginBottom: 56 }}>
            <span className="eyebrow warm">Aus den Lehrerzimmern</span>
            <h2 className="h-headline">
              „Die App muss zu uns kommen, nicht wir zur App."
            </h2>
          </div>
          <div className="grid-3">
            <article className="card-quote">
              <p className="quote-text">
                „Drei Wochen ohne Passwort-Reset. Vorher war das ein wöchentliches Ritual."
              </p>
              <div className="quote-attr">
                <div className="quote-avatar" />
                <div>
                  <div className="quote-name">Frau Müller</div>
                  <div className="quote-role">Lehrkraft · IGS Bremen</div>
                </div>
              </div>
            </article>
            <article className="card-quote">
              <p className="quote-text">
                „Endlich kann ich mich auf die Klasse konzentrieren, nicht auf die Technik."
              </p>
              <div className="quote-attr">
                <div className="quote-avatar" style={{ background: 'linear-gradient(135deg, #FDE68A, #FCA5A5)' }} />
                <div>
                  <div className="quote-name">Herr Bauer</div>
                  <div className="quote-role">Klassenlehrer · Gymnasium Hannover</div>
                </div>
              </div>
            </article>
            <article className="card-quote">
              <p className="quote-text">
                „Datenschutz war für uns nie verhandelbar. Das Gefühl ist neu."
              </p>
              <div className="quote-attr">
                <div className="quote-avatar" style={{ background: 'linear-gradient(135deg, #A7F3D0, #C7D2FE)' }} />
                <div>
                  <div className="quote-name">Frau Hartmann</div>
                  <div className="quote-role">Fachschaftsleiterin · Realschule Köln</div>
                </div>
              </div>
            </article>
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
