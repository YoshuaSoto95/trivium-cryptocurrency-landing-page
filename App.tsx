import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Roadmap from './components/Roadmap';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Roadmap />
        {/* Placeholder sections for navigation */}
        <section id="ecosystem" className="min-h-screen flex items-center justify-center snap-start">
          <h2 className="text-4xl font-bold">Ecosystem Section</h2>
        </section>
        <section id="partners" className="min-h-screen flex items-center justify-center snap-start">
          <h2 className="text-4xl font-bold">Partners Section</h2>
        </section>
        <section id="community" className="min-h-screen flex items-center justify-center snap-start">
          <h2 className="text-4xl font-bold">Community Section</h2>
        </section>
      </main>
    </div>
  );
};

export default App;