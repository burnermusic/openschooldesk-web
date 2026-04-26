import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-section-gap bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline-lg text-headline-lg text-slate-900 mb-16 text-center">Was openschooldesk kann</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="p-8 border border-slate-200 rounded-lg group hover:border-indigo-600 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-indigo-600 group-hover:text-white">login</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">SSO Login</h3>
            <p className="text-slate-600 text-sm">Zentrale Authentifizierung für alle angebundenen Dienste mit einem Klick.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg group hover:border-indigo-600 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-indigo-600 group-hover:text-white">hub</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">Offene Architektur</h3>
            <p className="text-slate-600 text-sm">Plugin-System für einfache Erweiterung und Anbindung lokaler Dienste.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg group hover:border-indigo-600 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-indigo-600 group-hover:text-white">security</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">DSGVO by Design</h3>
            <p className="text-slate-600 text-sm">Datensparsame Architektur ohne externe Tracker oder Cloud-Zwang.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg group hover:border-indigo-600 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-indigo-600 group-hover:text-white">code</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">Wirklich Open Source</h3>
            <p className="text-slate-600 text-sm">AGPLv3 lizenziert. Kein Open Core, kein falsches Versprechen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
