import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const phone = e.target.elements[1].value;
    const email = e.target.elements[2].value;
    const neet = e.target.elements[3].value;
    const city = e.target.elements[4].value;
    const message = e.target.elements[5].value;
    const text = `Hello SKMM Consultancy,\nI have an enquiry from the website.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNEET Score: ${neet}\nCity: ${city}\nMessage: ${message}`;
    window.open(`https://wa.me/919649637111?text=${encodeURIComponent(text)}`, '_blank');
    e.target.reset();
  };

  return (
    <footer id="contact" className="bg-[#121935] text-white pt-16 pb-0 relative overflow-hidden font-sans border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px] mb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-10">
          
          {/* Brand & Contact Col */}
          <div className="lg:w-[35%] flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SKMM Consultancy Logo" className="h-12 w-auto aspect-square rounded-full object-cover" />
              <div className="flex flex-col justify-center">
                <span className="text-[20px] font-black text-white leading-none tracking-tight">SKMM</span>
                <span className="text-[9px] text-[#30AFFF] font-bold tracking-widest mt-0.5">CONSULTANCY</span>
              </div>
            </div>
            <p className="text-gray-300 text-[13px] leading-relaxed mb-6 font-medium">
              Established in 2021, SMMM Consultancy has helped over 1000 aspiring medical students take the first step toward their dream of becoming successful doctors through trusted MBBS abroad guidance and support.
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <span className="text-[13px] text-gray-300 font-medium">+91 96496 37111</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <span className="text-[13px] text-gray-300 font-medium">support@smmmconsultancy.com</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] rounded-md flex items-center justify-center text-white hover:from-[#1D4ED8] hover:to-[#2563EB] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] rounded-md flex items-center justify-center text-white hover:from-[#1D4ED8] hover:to-[#2563EB] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] rounded-md flex items-center justify-center text-white hover:from-[#1D4ED8] hover:to-[#2563EB] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-[20%]">
            <h4 className="text-[16px] font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Testimonial', 'Privacy Policy', 'Terms and Conditions'].map((link) => (
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
                className="w-full text-white font-bold py-3 text-[13px] uppercase tracking-wider rounded transition-colors mt-1 bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] hover:from-[#1D4ED8] hover:to-[#2563EB]"
              >
                SUBMIT
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



