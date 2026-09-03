import React, { useState, useEffect } from 'react';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="font-sans text-charcoal bg-ivoryWhite w-full overflow-x-hidden">
      <Header />
      
      {currentPage === 'home' && (
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
      )}

      {currentPage === 'privacy' && <PrivacyPolicy />}
      {currentPage === 'terms' && <TermsConditions />}

      <Footer />
      <FloatingEnquiry />
    </div>
  );
}

export default App;
