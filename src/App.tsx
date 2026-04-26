import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
