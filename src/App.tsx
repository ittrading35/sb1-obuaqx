import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Trading from './components/Trading';
import Performance from './components/Performance';
import License from './components/License';
import AiAnimation from './components/AiAnimation';
import Affiliate from './components/Affiliate';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <AiAnimation />
      <Stats />
      <Features />
      <Trading />
      <Performance />
      <Pricing />
      <License />
      <Affiliate />
      <Footer />
    </div>
  );
}

export default App;