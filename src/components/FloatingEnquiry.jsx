import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const FloatingEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasOpened = sessionStorage.getItem('enquiryAutoOpened');
    if (!hasOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('enquiryAutoOpened', 'true');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

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
        <div className="bg-white w-[300px]  rounded-tl-2xl rounded-bl-2xl border-l border-b border-t border-gray-200 overflow-hidden relative">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#B00010] to-[#E00018] p-5 text-white relative flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=150" alt="Student Support" className="w-12 h-12 rounded-full object-cover  border-2 border-white/20 shrink-0" />
            <div>
              <h3 className="font-bold text-[16px] leading-tight mb-0.5 ">Expert Counselling</h3>
              <p className="text-[11.5px] text-red-50 leading-tight">Get instant guidance for your MBBS admission.</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors bg-black/10 rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>

          {/* Form */}
          <form className="p-5 flex flex-col gap-4" onSubmit={(e) => { 
    e.preventDefault(); 
    const name = e.target.fullName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const dest = e.target.destination.value;
    const text = `Hello Eduway India,\nI have an enquiry.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDestination: ${dest}`;
    window.open(`https://wa.me/919649637111?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  }}>
            <div>
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name" 
                required
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all"
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                required
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all"
              />
            </div>
            <div>
              <select name="destination" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all cursor-pointer">
                <option value="">Select Destination</option>
                <option value="russia">MBBS in Russia</option>
                <option value="kazakhstan">MBBS in Kazakhstan</option>
                <option value="georgia">MBBS in Georgia</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#B00010] to-[#E00018] text-white rounded-lg py-3 font-bold text-[14px] flex items-center justify-center gap-2 hover:from-[#B00010] hover:to-[#2563EB] transition-colors  #D00012]/30 mt-2"
            >
              Submit <Send size={16} />
            </button>
          </form>
        </div>

        {/* Floating Tab (Visible when closed, attached to the left side of the panel) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-20 -left-[40px] w-[40px] h-[120px] bg-gradient-to-b from-[#B00010] to-[#E00018] rounded-l-lg  flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span 
            className="font-bold tracking-wider uppercase text-[13px] whitespace-nowrap text-white"
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
