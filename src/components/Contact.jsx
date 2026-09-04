import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-primaryNavy relative border-t border-highlightBlue/20">
      <div className="container mx-auto px-4 max-w-[1440px] relative z-10">
        <div className="text-center mb-14">
          <span className="font-extrabold tracking-widest text-[11px] uppercase mb-2 block text-[12px] sm:text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF]">
            GET IN TOUCH
          </span>
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-4 tracking-tight leading-tight text-white">
            Let's Discuss Your MBBS Journey
          </h2>
          <p className="text-sm text-lightBlueGrey leading-relaxed font-medium max-w-2xl mx-auto">
            Reach out to us for a free profile assessment and career counselling session. Our experts are ready to guide you towards the right medical university.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-premiumBlue rounded-lg p-8 md:p-10 text-pureWhite shadow-xl h-full relative overflow-hidden border border-highlightBlue/30"
            >
              {/* Decorative blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-highlightBlue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <h3 className="text-2xl font-medium mb-8 relative z-10 text-pureWhite">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <a href="tel:+919649637111" className="flex items-start gap-4 hover:text-highlightBlue transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primaryNavy flex items-center justify-center shrink-0 text-pureWhite border border-highlightBlue/20 shadow-inner">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-iceWhite/70 mb-1 font-semibold uppercase tracking-wider">Phone / WhatsApp</p>
                    <p className="font-bold text-[15px] text-pureWhite">+91 96496 37111</p>
                  </div>
                </a>
                
                <a href="mailto:skmmconsultancy@gmail.com" className="flex items-start gap-4 hover:text-highlightBlue transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primaryNavy flex items-center justify-center shrink-0 text-pureWhite border border-highlightBlue/20 shadow-inner">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-iceWhite/70 mb-1 font-semibold uppercase tracking-wider">Email Address</p>
                    <p className="font-bold text-[15px] text-pureWhite">skmmconsultancy@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primaryNavy flex items-center justify-center shrink-0 text-pureWhite border border-highlightBlue/20 shadow-inner">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-iceWhite/70 mb-1 font-semibold uppercase tracking-wider">Office Address</p>
                    <p className="font-medium text-[13px] leading-relaxed text-pureWhite">
                      Rajasthan HMO, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-highlightBlue/20 relative z-10">
                <p className="text-[10px] text-iceWhite/70 mb-4 font-semibold uppercase tracking-wider">Follow Us</p>
                <div className="flex gap-4">
                  {/* Social media placeholders */}
                  {[1, 2, 3, 4].map((i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-primaryNavy flex items-center justify-center hover:bg-highlightBlue text-pureWhite transition-colors border border-highlightBlue/20 shadow-inner">
                      <span className="sr-only">Social Media</span>
                      <div className="w-4 h-4 bg-current rounded-sm"></div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-premiumBlue rounded-lg p-8 md:p-10 shadow-xl border border-highlightBlue/30 h-full"
            >
              <h3 className="text-xl font-medium text-pureWhite mb-8">Request Free Counselling</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] shadow-inner placeholder:text-lightBlueGrey/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">Mobile Number *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] shadow-inner placeholder:text-lightBlueGrey/50" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] shadow-inner placeholder:text-lightBlueGrey/50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">City</label>
                    <input type="text" id="city" className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] shadow-inner placeholder:text-lightBlueGrey/50" placeholder="Your City" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="neet" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">NEET Score (Expected/Actual)</label>
                    <input type="number" id="neet" className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] shadow-inner placeholder:text-lightBlueGrey/50" placeholder="e.g. 450" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">Preferred Country</label>
                    <select id="country" className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] appearance-none shadow-inner">
                      <option value="">Select a country</option>
                      <option value="Russia">Russia</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-iceWhite/80 mb-2 uppercase tracking-wider">Your Message / Query</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-highlightBlue/20 focus:ring-2 focus:ring-highlightBlue focus:border-highlightBlue transition-all outline-none bg-primaryNavy font-medium text-pureWhite text-[13px] resize-none shadow-inner placeholder:text-lightBlueGrey/50" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full py-3.5 rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 transition-all shadow-md mt-2 ${
                    formStatus === 'success' ? 'bg-emerald-500 text-pureWhite shadow-emerald-500/20' : 
                    formStatus === 'submitting' ? 'bg-primaryNavy/50 text-pureWhite cursor-not-allowed shadow-none' : 
                    'bg-highlightBlue text-pureWhite hover:bg-pureWhite hover:text-primaryNavy shadow-highlightBlue/20'
                  }`}
                >
                  {formStatus === 'success' ? (
                    'Request Submitted Successfully!'
                  ) : formStatus === 'submitting' ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Request <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;



