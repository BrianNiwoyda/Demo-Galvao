
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-light font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;