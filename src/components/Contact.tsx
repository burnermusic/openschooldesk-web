import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-section-gap bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display-xl text-headline-lg md:text-display-xl text-slate-900 mb-4">Interesse? Melden Sie sich.</h2>
          <p className="text-slate-500">Für Pilotschulen, Partnerschaften und Fragen.</p>
        </div>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-slate-500 uppercase">Name</label>
              <input className="w-full border-slate-200 focus:ring-indigo-600 focus:border-indigo-600 rounded-[6px] bg-white p-4" placeholder="Vor- und Nachname" type="text" />
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-slate-500 uppercase">Institution</label>
              <input className="w-full border-slate-200 focus:ring-indigo-600 focus:border-indigo-600 rounded-[6px] bg-white p-4" placeholder="Name der Schule/Behörde" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-slate-500 uppercase">E-Mail</label>
              <input className="w-full border-slate-200 focus:ring-indigo-600 focus:border-indigo-600 rounded-[6px] bg-white p-4" placeholder="ihre@mail.de" type="email" />
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-slate-500 uppercase">Rolle</label>
              <select className="w-full border-slate-200 focus:ring-indigo-600 focus:border-indigo-600 rounded-[6px] bg-white p-4">
                <option>Lehrkraft</option>
                <option>Schulleitung</option>
                <option>Administrator</option>
                <option>Schulträger</option>
                <option>Anderes</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label-sm text-label-sm text-slate-500 uppercase">Nachricht</label>
            <textarea className="w-full border-slate-200 focus:ring-indigo-600 focus:border-indigo-600 rounded-[6px] bg-white p-4" placeholder="Wie können wir Ihnen helfen?" rows={5}></textarea>
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-[6px] hover:bg-indigo-700 transition-colors" type="submit">Absenden</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
