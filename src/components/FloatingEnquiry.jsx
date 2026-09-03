import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const FloatingEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay when open (only on mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-[90] backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Sliding Container */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '100%', y: '-50%' }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed top-1/2 right-0 z-[100] flex items-start"
      >
        {/* Form Panel */}
        <div className="bg-white w-[300px] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] rounded-bl-2xl border-l border-b border-t border-gray-200 overflow-hidden relative">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] p-4 text-white relative">
            <h3 className="font-bold text-lg">Enquiry Now</h3>
            <p className="text-[13px] text-blue-100 mt-1 leading-tight">Fill the form and we'll get back to you instantly.</p>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form className="p-5 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all"
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all"
              />
            </div>
            <div>
              <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all cursor-pointer">
                <option value="">Select Destination</option>
                <option value="russia">MBBS in Russia</option>
                <option value="kazakhstan">MBBS in Kazakhstan</option>
                <option value="georgia">MBBS in Georgia</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#30AFFF] text-white rounded-lg py-3 font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#1D4ED8] transition-colors shadow-md shadow-[#30AFFF]/30 mt-2"
            >
              Submit <Send size={16} />
            </button>
          </form>
        </div>

        {/* Floating Tab (Visible when closed, attached to the left side of the panel) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-10 -left-[42px] w-[42px] h-[130px] bg-gradient-to-b from-[#1D4ED8] to-[#30AFFF] rounded-l-lg shadow-[-5px_0_15px_rgba(48,175,255,0.3)] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span 
            className="text-white font-bold tracking-wider uppercase text-[14px] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Enquiry Now
          </span>
        </button>

      </motion.div>
    </>
  );
};

export default FloatingEnquiry;
