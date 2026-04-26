import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-section-gap bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-label-sm font-label-sm text-indigo-600 uppercase tracking-widest block mb-4">Das Problem</span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900">Kennen Sie das?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="p-10 bg-[#FFFBF5] border-l-4 border-amber-400 border-r border-t border-b border-slate-100 rounded-lg">
            <span className="material-symbols-outlined text-amber-600 mb-6 text-3xl">key</span>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">7 verschiedene Logins</h3>
            <p className="text-slate-600 font-body-md">Lehrkräfte jonglieren täglich mit Passwörtern für verschiedene Plattformen, die nicht miteinander sprechen.</p>
          </div>
          <div className="p-10 bg-[#FFFBF5] border-l-4 border-amber-400 border-r border-t border-b border-slate-100 rounded-lg">
            <span className="material-symbols-outlined text-amber-600 mb-6 text-3xl">broken_image</span>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">Kein durchgängiger Workflow</h3>
            <p className="text-slate-600 font-body-md">Daten müssen manuell kopiert werden. Fehleranfälligkeit und Frustration im Schulalltag sind die Folge.</p>
          </div>
          <div className="p-10 bg-[#FFFBF5] border-l-4 border-amber-400 border-r border-t border-b border-slate-100 rounded-lg">
            <span className="material-symbols-outlined text-amber-600 mb-6 text-3xl">lock_clock</span>
            <h3 className="font-headline-md text-headline-md text-slate-900 mb-4">Proprietäre Abhängigkeiten</h3>
            <p className="text-slate-600 font-body-md">Lock-in Effekte durch teure Lizenzen, die Anpassungen und Innovationen im Keim ersticken.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
