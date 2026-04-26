import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 w-full pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-xs">
          <span className="text-lg font-bold text-white mb-2 block font-['Inter']">openschooldesk</span>
          <p className="text-slate-400 text-sm mb-4">© 2026 openschooldesk. Made in Germany.</p>
          <div className="flex gap-4">
            <span className="text-indigo-400 material-symbols-outlined">terminal</span>
            <span className="text-indigo-400 material-symbols-outlined">public</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h5 className="text-white font-medium mb-4">Projekt</h5>
            <a className="block text-slate-400 hover:text-indigo-300 transition-colors text-sm" href="#">GitHub</a>
            <a className="block text-slate-400 hover:text-indigo-300 transition-colors text-sm" href="#">Lizenz</a>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-medium mb-4">Rechtliches</h5>
            <a className="block text-slate-400 hover:text-indigo-300 transition-colors text-sm" href="#">Datenschutz</a>
            <a className="block text-slate-400 hover:text-indigo-300 transition-colors text-sm" href="#">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
