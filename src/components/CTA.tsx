import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-section-gap bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-headline-lg text-4xl mb-8">Gebaut mit der Community. Für die Schule.</h2>
        <div className="flex justify-center gap-4">
          <a className="px-8 py-4 bg-[#4F46E5] text-white rounded-[6px] font-semibold hover:bg-indigo-700 transition-colors" href="#">GitHub ansehen</a>
          <a className="px-8 py-4 border border-slate-700 text-white rounded-[6px] font-semibold hover:bg-slate-800 transition-colors" href="#">Zur Dokumentation</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
