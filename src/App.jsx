import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrackRecord from './components/TrackRecord';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Destinations from './components/Destinations';
import Universities from './components/Universities';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingEnquiry from './components/FloatingEnquiry';

function App() {
  return (
    <div className="font-sans text-charcoal bg-ivoryWhite w-full overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <TrackRecord />
        <About />
        <Destinations />
        <Universities />
        <Process />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <FloatingEnquiry />
    </div>
  );
}

export default App;
