import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-900 flex items-center gap-2 font-['Work_Sans'] tracking-tight">
          <span className="text-indigo-600 material-symbols-outlined">school</span>
          <span>openschooldesk</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-indigo-600 border-b-2 border-indigo-600 pb-1 font-body-md font-semibold" href="#">GitHub</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-body-md font-semibold" href="#">Kontakt</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
