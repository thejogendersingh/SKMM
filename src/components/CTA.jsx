import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primaryRed rounded-full blur-[100px] opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-6 leading-tight text-white">
            Ready to Take the First Step Toward Your <span className="text-primaryRed">MBBS Dream?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Talk to SKMM Consultancy and get personalized guidance for your MBBS abroad journey. Let's make it happen together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/919649637111?text=Hello%20SKMM%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-primaryRed text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-all shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2 group">
              Get Free Counselling
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/919649637111?text=Hi%20SKMM%20Consultancy%2C%20I%20am%20ready%20to%20start%20my%20MBBS%20journey."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1ebd5b] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;



