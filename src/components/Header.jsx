import React, { useState } from 'react';
import { Menu, X, Phone, Clock, ChevronDown, Mail, MapPin, Search } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: true },
    { name: 'About Us', href: '#about', hasDropdown: true },
    { name: 'Countries', href: '#destinations', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Testimonials', href: '#testimonials', hasDropdown: true },
    { name: 'Contact Us', href: '#contact', hasDropdown: true },
  ];

  return (
    <header className="w-full relative z-50 shadow-sm flex flex-col">
      
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-[#1e2433] text-pureWhite">
        <div className="container mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center justify-between min-h-[40px] lg:h-[50px] px-4 lg:pl-4 lg:pr-0 py-2 lg:py-0">
          
          {/* Left Side: Social Icons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-5">
            {[
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            ].map((icon, idx) => (
              <a key={idx} href="#" className="flex items-center justify-center text-pureWhite hover:text-[#30AFFF] transition-colors">
                {icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center lg:items-stretch justify-between w-full lg:w-auto h-full gap-4 lg:gap-8">
            {/* Email */}
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Mail size={14} className="text-[#30AFFF]" />
              <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-pureWhite">info@skmmconsultancy.com</span>
            </div>

            {/* Address (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-2">
              <MapPin size={16} className="text-[#30AFFF]" />
              <span className="text-[14px] font-medium text-pureWhite">Rajasthan HMO, India</span>
            </div>

            {/* Phone Block */}
            <div className="flex items-center lg:bg-[#30AFFF] lg:justify-center lg:px-6 gap-1.5 lg:gap-2 lg:ml-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>
              <span className="font-bold text-[13px] sm:text-[14px] lg:text-[16px] tracking-wide">+91 96496 37111</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="w-full bg-pureWhite border-b border-lightBlueGrey">
        <div className="container mx-auto max-w-[1440px] flex items-center justify-between h-[80px] px-4">
          
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="SKMM Consultancy Logo" className="h-16 sm:h-[76px] w-auto object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-[20px] font-black text-primaryNavy leading-none tracking-tight">SKMM</span>
                <span className="text-[9px] text-[#30AFFF] font-bold tracking-widest mt-0.5">CONSULTANCY</span>
              </div>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[15px] font-bold text-[#334155] hover:text-[#30AFFF] transition-colors flex items-center gap-1 group"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="text-[#64748b] group-hover:text-[#30AFFF] transition-colors" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] text-white px-6 py-2.5 rounded-md flex items-center justify-center transition-all shadow-[0_4px_15px_rgba(48,175,255,0.3)] font-bold text-[14px] hover:shadow-[0_6px_20px_rgba(48,175,255,0.4)] hover:-translate-y-0.5">
              Book Counselling
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-primaryNavy hover:text-[#30AFFF] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER OVERLAY ================= */}
      <div className={`
        fixed inset-0 top-[80px] bg-pureWhite z-40 flex flex-col p-6 gap-6
        transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto border-t border-lightBlueGrey
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-bold text-deepSlate hover:text-[#30AFFF] flex items-center justify-between border-b border-lightBlueGrey pb-4 transition-colors"
          >
            {link.name}
            {link.hasDropdown && <ChevronDown size={16} className="text-coolGrey" />}
          </a>
        ))}
        
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-3 text-deepSlate">
            <Phone size={18} className="text-[#30AFFF]" />
            <span className="font-medium text-[15px]">+91 96496 37111</span>
          </div>
          <div className="flex items-center gap-3 text-deepSlate">
            <Mail size={18} className="text-[#30AFFF]" />
            <span className="font-medium text-[15px]">info@skmmconsultancy.com</span>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;



