import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#08080E] text-white pt-32 pb-64 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="inline-block px-4 py-1 mb-8 border border-slate-800 rounded-full bg-slate-900/50">
          <span className="text-label-sm font-label-sm text-indigo-400 uppercase">Open Source · DSGVO-konform · AGPLv3</span>
        </div>
        <h1 className="font-display-xl text-display-xl md:text-7xl mb-8 max-w-4xl">
          Endlich. Die Schulapp, die alle vereint.
        </h1>
        <p className="font-body-lg text-body-lg text-slate-400 max-w-2xl mb-12">
          Die Open-Source-Alternative zu teurer Schulverwaltungs-Software. Eine einheitliche Oberfläche für Lehrkräfte – gebaut auf UCS@school, integriert mit den Tools die Schulen bereits nutzen.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="px-8 py-4 bg-[#4F46E5] text-white rounded-[6px] font-semibold hover:bg-indigo-700 transition-colors" href="#">GitHub ansehen</a>
          <a className="px-8 py-4 border border-slate-700 text-white rounded-[6px] font-semibold hover:bg-slate-800 transition-colors" href="#">Demo anfragen</a>
        </div>
      </div>
      {/* Floating Dashboard Preview */}
      <div className="mt-24 max-w-6xl mx-auto px-6">
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video">
          <img
            alt="A high-end, minimalist 3D isometric visualization of openschooldesk connecting various school tools."
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARCobdCeR7hy6lOLOhRCvi6o3IqF8VcCfn837RG-jgjzrI9XVjg5shvCn9YcXwfgVFAYS2u1ri3RfL_MUDYTnfWO19sS76cdjB7Cu2dXiDheah8H_jh2xgltY6KjAuQkv2uz59eMd3ZHCneTBOHlWvNpgWot6PbGdndPi1UDhsx_ifXYwyhAE5hjOBhTX7P9Z81a0k6weKlHqNTqEp2XGBfhqjFfn0yoLRuzz0tSM-obTe2-De4bFAN4lZUV-qG3f0iyDeSxBO3vac"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080E] via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
