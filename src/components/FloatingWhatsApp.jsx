import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Show after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          className="fixed bottom-6 left-6 z-[60] flex items-end"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute bottom-16 left-0 bg-white text-navy-900 text-sm font-semibold py-2 px-4 rounded-lg shadow-lg border border-gray-100 whitespace-nowrap flex items-center gap-3 mb-2"
              >
                Need Help? Chat with us!
                <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-gray-700">
                  <X size={14} />
                </button>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://wa.me/919649637111?text=Hi%20SKMM%20Consultancy%2C%20I%20am%20interested%20in%20MBBS%20Abroad%20admission%20and%20would%20like%20to%20get%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all hover:bg-[#1ebd5b]"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={30} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;



