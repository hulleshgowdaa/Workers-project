import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Impact from './components/Impact';
import DemoPreview from './components/DemoPreview';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand-teal selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Impact />
        <DemoPreview />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
