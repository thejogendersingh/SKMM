import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, Clock, PhoneCall } from 'lucide-react';
import logo from '../assets/logo.webp';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#about', hasDropdown: false },
    { name: 'Countries', href: '#destinations', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: false },
    { name: 'Testimonials', href: '#testimonials', hasDropdown: false },
    { name: 'Contact Us', href: '#contact', hasDropdown: false },
  ];

  return (
    <>
      <header className="sticky top-0 w-full z-[100] bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        
        {/* ================= DESKTOP HEADER (lg and up) ================= */}
        <div className="hidden lg:flex mx-auto max-w-[1440px] h-[130px] relative">
          
          {/* LEFT: LOGO */}
          <div className="w-[240px] h-full flex items-center justify-center bg-white z-20 shrink-0">
            <a href="#home" className="h-full flex items-center justify-center py-2 px-2 w-full">
              <img src={logo} alt="Eduway India Logo" className="max-h-[120px] w-auto object-contain scale-[1.15]" />
            </a>
          </div>

          {/* RIGHT: TWO-TIER LAYOUT */}
          <div className="flex-1 flex flex-col h-full bg-white relative z-10 w-full">
            
            {/* TIER 1: TOP BAR */}
            <div 
              className="flex h-[50px] bg-[#021333] text-white items-center justify-between px-8 w-full"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 45px 100%)', marginLeft: '10px', paddingLeft: '80px' }}
            >
              {/* Social Icons */}
              <div className="flex items-center gap-2 pr-6">
                 <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#021333] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
                 <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#021333] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                 <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#021333] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                 <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#021333] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              </div>

              {/* Dividers & Contact Info */}
              <div className="flex flex-1 items-center justify-between pl-6 border-l border-white/30 h-[70%]">
                
                {/* Phone */}
                <a href="tel:+919672854110" className="flex items-center gap-3 px-2 xl:px-4 hover:text-gray-300 transition-colors">
                   <Phone size={24} strokeWidth={2} className="rotate-[260deg]" />
                   <div className="flex flex-col justify-center text-left">
                      <span className="text-[11px] font-medium text-white leading-none mb-1 mt-0.5">Call Us</span>
                      <span className="text-[14px] font-bold leading-none tracking-wide">+91 96728 54110</span>
                   </div>
                </a>

                <div className="w-[1px] h-full bg-white/30"></div>

                {/* Email */}
                <a href="mailto:eduwayconsultancy@gmail.com" className="flex items-center gap-3 px-2 xl:px-4 hover:text-gray-300 transition-colors">
                   <Mail size={24} strokeWidth={2} />
                   <div className="flex flex-col justify-center text-left">
                      <span className="text-[11px] font-medium text-white leading-none mb-1 mt-0.5">Email Us</span>
                      <span className="text-[14px] font-bold leading-none">eduwayconsultancy@gmail.com</span>
                   </div>
                </a>

                <div className="w-[1px] h-full bg-white/30"></div>

                {/* Business Hrs */}
                <div className="flex items-center gap-3 pl-2 xl:pl-4">
                   <Clock size={24} strokeWidth={2} />
                   <div className="flex flex-col justify-center text-left">
                      <span className="text-[11px] font-medium text-white leading-none mb-1 mt-0.5">Business Hrs</span>
                      <span className="text-[14px] font-bold leading-none">Mon-Sun: 24 Hours</span>
                   </div>
                </div>

              </div>
            </div>

            {/* TIER 2: MAIN NAVIGATION */}
            <div className="flex-1 flex items-center justify-between lg:justify-between px-4 lg:px-8">
              
              <nav className="flex items-center gap-10 xl:gap-14 ml-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-[#021333] font-medium text-[15px] hover:text-[#A51318] transition-colors flex items-center gap-1.5"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} strokeWidth={2.5} />}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <a href="https://wa.me/919672854110" target="_blank" rel="noopener noreferrer" className="bg-[#A51318] hover:bg-[#8B0F13] text-white px-7 py-2.5 rounded text-[15px] font-medium transition-colors shadow-sm">
                  Apply Now
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* ================= MOBILE HEADER (below lg) ================= */}
        <div className="flex flex-col lg:hidden w-full">
          {/* Mobile Top Bar */}
          <div className="bg-[#021333] text-white flex items-center justify-between px-4 py-2.5 text-[12px] font-medium">
             <a href="tel:+919672854110" className="flex items-center gap-2">
                <PhoneCall size={14} /> +91 96728 54110
             </a>
             <a href="mailto:eduwayconsultancy@gmail.com" className="flex items-center gap-2">
                <Mail size={14} /> Email Us
             </a>
          </div>
          
          {/* Mobile Main Bar */}
          <div className="flex items-center justify-between px-4 h-[85px] bg-white border-b border-gray-100">
            <a href="#home" className="flex items-center h-full py-2">
              <img src={logo} alt="Eduway India Logo" className="max-h-[70px] w-auto object-contain scale-[1.15]" />
            </a>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/919672854110" className="bg-[#A51318] hover:bg-[#8B0F13] transition-colors text-white px-4 py-2 rounded font-medium text-[13px] shadow-sm">Apply</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#021333] p-1"><Menu size={28} /></button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER OVERLAY ================= */}
      <div className={`
        fixed inset-0 bg-[#FFFFFF] z-[200] flex flex-col
        transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Overlay Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100 h-[85px]">
          <div className="flex items-center h-full py-2">
            <img src={logo} alt="Eduway India" className="max-h-[70px] w-auto object-contain scale-[1.15]" />
          </div>
          <button 
            className="text-[#021333] bg-gray-50 hover:bg-gray-100 p-2.5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-8 py-8 gap-6 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[18px] font-satoshi font-bold text-[#021333] hover:text-[#A51318] flex items-center justify-between transition-colors capitalize border-b border-gray-50 pb-4"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={20} className="text-gray-300" />}
            </a>
          ))}
        </div>
        
        {/* Mobile Contact Info */}
        <div className="mt-auto p-8 bg-[#FAF7F5] border-t border-gray-100 space-y-6">
          <a href="tel:+919672854110" className="flex items-center gap-4 text-[#021333]">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A51318]">
              <Phone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</span>
              <span className="font-satoshi font-bold text-[16px]">+91 96728 54110</span>
            </div>
          </a>
          <a href="mailto:eduwayconsultancy@gmail.com" className="flex items-center gap-4 text-[#021333]">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A51318]">
              <Mail size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</span>
              <span className="font-satoshi font-bold text-[15px]">eduwayconsultancy@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
