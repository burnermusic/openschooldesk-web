import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="py-section-gap bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-label-sm font-label-sm text-indigo-600 uppercase tracking-widest block mb-4">Die Lösung</span>
            <h2 className="font-display-xl text-headline-lg md:text-display-xl text-slate-900 mb-6">Eine Anmeldung. Alles an einem Ort.</h2>
            <p className="text-body-lg font-body-lg text-slate-600 mb-12">
              openschooldesk verbindet was zusammengehört — ohne eigenes Backend, ohne neue Datensilos. Reine API-Integration mit UCS@school.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-indigo-600 mt-1">check_circle</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Nahtlose UCS@school Integration</h4>
                  <p className="text-slate-500">Nutzt bestehende Identitätsmanagement-Systeme ohne Replikation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-indigo-600 mt-1">check_circle</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Modulare Widget-Architektur</h4>
                  <p className="text-slate-500">Integrieren Sie Moodle, Nextcloud oder BigBlueButton in einem Dashboard.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-indigo-600 mt-1">check_circle</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Fokus auf User Experience</h4>
                  <p className="text-slate-500">Reduziert kognitive Last durch ein einheitliches, ruhiges Interface.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <img
                alt="Mockup der openschooldesk-Oberfläche, die verschiedene Schul-Anwendungen in einem Dashboard integriert"
                className="rounded-lg w-full grayscale-[50%]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx_JbxBk9ZaE6l69z89UDg9Jgd5kWwuSIoWPL4_R_jytAPZs2SirTNA-jj6hYE12KnfNiofXDmgUzsJ-Aqe8xnEvt2UzQwCtOBsijG_xU5dshmSbFnA_72tLg8hBTdROEgqiNONRmp5ZNrDI1o1Ul92QpOn2Fg0Ayf2aHApMqhuzq8_C7CeOXnLMezjrSwTm6RZOwfmFjoqnhbPIB8xztDSbJ6ib8CsXUhOpDtXs7jNfVNfQ1XYbDpnvjvfa2Ionav1rDlM4XreOSH"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
