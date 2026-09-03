import React, { useState } from 'react';
import { MapPin, Phone, Mail, Video, Camera, Globe, Briefcase, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-[#121935] text-white pt-16 pb-0 relative overflow-hidden font-sans border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px] mb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-10">
          
          {/* Brand & Contact Col */}
          <div className="lg:w-[35%] flex flex-col">
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">SMMM CONSULTANCY</h3>
            <p className="text-gray-300 text-[13px] leading-relaxed mb-6 font-medium">
              Established in 2013, SMMM Consultancy has helped thousands of aspiring medical students take the first step toward their dream of becoming successful doctors through trusted MBBS abroad guidance and support.
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-0.5 shrink-0" />
                <span className="text-[13px] text-gray-300 font-medium leading-snug">
                  Rajasthan HMO, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <span className="text-[13px] text-gray-300 font-medium">9811696553</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <span className="text-[13px] text-gray-300 font-medium">9810805080</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <span className="text-[13px] text-gray-300 font-medium">support@smmmconsultancy.com</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-[#30AFFF] rounded-md flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors"><Video size={16} /></a>
              <a href="#" className="w-8 h-8 bg-[#30AFFF] rounded-md flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors"><Camera size={16} /></a>
              <a href="#" className="w-8 h-8 bg-[#30AFFF] rounded-md flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors"><Globe size={16} /></a>
              <a href="#" className="w-8 h-8 bg-[#30AFFF] rounded-md flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors"><Briefcase size={16} /></a>
              <a href="#" className="w-8 h-8 bg-[#30AFFF] rounded-md flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors"><MessageCircle size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-[20%]">
            <h4 className="text-[16px] font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Blog', 'Disclaimer', 'Testimonial', 'Privacy Policy', 'Terms and Conditions'].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors text-[13px] font-medium flex items-center gap-2">
                    <span className="text-gray-400 font-bold">»</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-[11px] font-medium mt-10">
              &copy; {new Date().getFullYear()} SMMM Consultancy<br/>All Rights Reserved
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[40%]">
            <h4 className="text-[16px] font-bold mb-6 text-white tracking-wide">Contact Us Completely Free</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" required placeholder="Name*" className="w-full sm:w-1/2 bg-white text-gray-900 text-[13px] px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-[#30AFFF]" />
                <input type="tel" required placeholder="Mobile Number*" className="w-full sm:w-1/2 bg-white text-gray-900 text-[13px] px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-[#30AFFF]" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Email" className="w-full sm:w-1/2 bg-white text-gray-900 text-[13px] px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-[#30AFFF]" />
                <input type="text" placeholder="NEET Score" className="w-full sm:w-1/2 bg-white text-gray-900 text-[13px] px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-[#30AFFF]" />
              </div>
              <input type="text" placeholder="City" className="w-full bg-white text-gray-900 text-[13px] px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-[#30AFFF]" />
              <textarea placeholder="Message" rows="3" className="w-full bg-white text-gray-900 text-[13px] px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#30AFFF]"></textarea>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full text-white font-bold py-3 text-[13px] uppercase tracking-wider rounded transition-colors mt-1 ${
                  formStatus === 'success' ? 'bg-emerald-500 hover:bg-emerald-600' :
                  formStatus === 'submitting' ? 'bg-gray-500 cursor-not-allowed' :
                  'bg-[#30AFFF] hover:bg-[#0284c7]'
                }`}
              >
                {formStatus === 'success' ? 'Request Submitted!' : formStatus === 'submitting' ? 'Submitting...' : 'SUBMIT'}
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0b1228] py-5 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 max-w-[1300px] flex flex-col md:flex-row justify-center items-center text-center">
          <p className="text-gray-400 font-medium text-[13px]">
            &copy; {new Date().getFullYear()} SMMM Consultancy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



