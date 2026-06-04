import React, { useState, useEffect, useRef } from 'react';
import { Nav, type Audience } from './components/nav';
import { Contact, type ContactHandle } from './components/contact';
import { Footer } from './components/footer';
import { PageTeachers } from './components/page-teachers';
import { PageLeadership } from './components/page-leadership';
import { PageIT } from './components/page-it';
import { PageParents } from './components/page-parents';

function parseAudienceFromHash(): Audience {
  const hash = (window.location.hash || '#/').replace(/^#\/?/, '');
  if (hash.startsWith('leitung')) return 'leadership';
  if (hash.startsWith('it'))      return 'it';
  if (hash.startsWith('eltern'))  return 'parents';
  return 'teachers';
}

function audienceToHash(a: Audience): string {
  const map: Record<Audience, string> = {
    teachers:   '/',
    leadership: '/leitung',
    it:         '/it',
    parents:    '/eltern',
  };
  return map[a] ?? '/';
}

const contactCopy: Record<Audience, { headline: string; sub: string }> = {
  teachers: {
    headline: 'Demo für mein Kollegium',
    sub:      'Wir kommen vorbei, zeigen die App live, beantworten Fragen aus dem Lehrerzimmer.',
  },
  leadership: {
    headline: 'Termin für die Schulleitung',
    sub:      '60 Minuten. Souveränität, Kosten, Pädagogik — konkret an Ihrer Schule durchgesprochen.',
  },
  it: {
    headline: 'Stack-Demo für IT & Träger',
    sub:      'Architektur, Provisionierung, Kelvin-Integration. Ingenieur zu Ingenieur.',
  },
  parents: {
    headline: 'Info-Mail für unsere Schule',
    sub:      'Wir schicken Ihnen die wichtigsten Infos in einer Mail, die Sie an die Schulleitung weiterleiten können.',
  },
};

const App: React.FC = () => {
  const [audience, setAudience] = useState<Audience>(parseAudienceFromHash);
  const contactRef = useRef<ContactHandle>(null);

  useEffect(() => {
    const onHash = () => setAudience(parseAudienceFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleAudienceChange = (next: Audience) => {
    window.location.hash = audienceToHash(next);
    setAudience(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaClick = () => contactRef.current?.focus();

  const isDark = audience === 'it';
  const copy = contactCopy[audience];

  const PageComponent = {
    teachers:   PageTeachers,
    leadership: PageLeadership,
    it:         PageIT,
    parents:    PageParents,
  }[audience];

  return (
    <div className={`shell${isDark ? ' shell-dark' : ''}`}>
      <Nav
        audience={audience}
        onChange={handleAudienceChange}
        onCtaClick={handleCtaClick}
        dark={isDark}
      />
      <main>
        <PageComponent contactRef={contactRef} />
        <Contact ref={contactRef} headline={copy.headline} sub={copy.sub} />
      </main>
      <Footer deep={isDark} />
    </div>
  );
};

export default App;
