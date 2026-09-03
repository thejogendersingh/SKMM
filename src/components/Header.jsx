import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#about', hasDropdown: false },
    { name: 'Countries', href: '#destinations', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: false },
    { name: 'Testimonials', href: '#testimonials', hasDropdown: false },
    { name: 'Contact Us', href: '#contact', hasDropdown: false },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 sticky top-0 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
      
      {/* ================= TOP BAR ================= */}
      <div className={`w-full bg-[#121935] text-white/90 border-b border-white/5 transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-[40px] lg:h-[46px] opacity-100'}`}>
        <div className="container mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center justify-between h-full px-4">
          
          {/* Left Side: Social Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[12px] font-medium text-white/60 tracking-wider">FOLLOW US:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#30AFFF] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" className="hover:text-[#30AFFF] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
              <a href="#" className="hover:text-[#30AFFF] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto h-full gap-4 lg:gap-6">
            {/* Email */}
            <a href="mailto:info@skmmconsultancy.com" className="flex items-center gap-2 group cursor-pointer h-full">
              <Mail size={14} className="text-[#30AFFF] group-hover:scale-110 transition-transform" />
              <span className="text-[12px] sm:text-[13px] font-medium group-hover:text-white transition-colors">info@skmmconsultancy.com</span>
            </a>

            {/* Phone */}
            <a href="tel:+919649637111" className="flex items-center gap-2 group cursor-pointer lg:bg-[#1a2342] lg:px-4 lg:h-full lg:border-l lg:border-r lg:border-white/5">
              <Phone size={14} className="text-[#30AFFF] group-hover:scale-110 transition-transform" />
              <span className="text-[12px] sm:text-[13px] font-bold group-hover:text-white transition-colors">+91 96496 37111</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md h-[70px]' : 'bg-white h-[70px] lg:h-[85px]'}`}>
        <div className="container mx-auto max-w-[1440px] flex items-center justify-between h-full px-4">
          
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2.5 group">
              <img src={logo} alt="SKMM Consultancy Logo" className={`w-auto aspect-square rounded-full object-cover transition-all duration-300 ${scrolled ? 'h-11' : 'h-12 lg:h-16'}`} />
              <div className="flex flex-col justify-center">
                <span className="text-[18px] lg:text-[22px] font-black text-[#121935] leading-none tracking-tight group-hover:text-[#1D4ED8] transition-colors">SKMM</span>
                <span className="text-[8.5px] lg:text-[10px] text-[#121935] font-extrabold tracking-[0.2em] mt-1">CONSULTANCY</span>
              </div>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="relative text-[14.5px] font-medium text-[#1e2433] hover:text-[#1D4ED8] transition-colors py-2 group flex items-center gap-1 capitalize"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-[#1D4ED8] transition-colors" />
                )}
                {/* Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/919649637111?text=Hello%20SKMM%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] text-white px-7 py-3 rounded-lg flex items-center justify-center font-bold text-[14px] shadow-[0_4px_15px_rgba(48,175,255,0.3)] hover:shadow-[0_8px_25px_rgba(48,175,255,0.4)] transition-all hover:-translate-y-0.5">
              <span className="relative z-10">Book Counselling</span>
              {/* Shine effect */}
              <div className="absolute inset-0 w-[200%] h-full bg-white/20 -skew-x-12 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="https://wa.me/919649637111?text=Hello%20SKMM%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF] text-white px-4 py-2 rounded flex items-center justify-center font-bold text-[12px] shadow-sm tracking-wide">
              Apply Now
            </a>
            <button 
              className="text-[#121935] hover:text-[#30AFFF] p-1.5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER OVERLAY ================= */}
      <div className={`
        fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] flex flex-col
        transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden
        ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
      `}>
        {/* Overlay Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <img src={logo} alt="SKMM Consultancy" className="h-10 w-auto aspect-square rounded-full object-cover" />
          <button 
            className="text-[#121935] bg-gray-100 hover:bg-gray-200 p-2.5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-8 gap-6 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[18px] font-semibold text-[#121935] hover:text-[#30AFFF] flex items-center justify-between transition-colors capitalize"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={20} className="text-gray-300" />}
            </a>
          ))}
        </div>
        
        {/* Mobile Contact Info */}
        <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100 space-y-4">
          <a href="tel:+919649637111" className="flex items-center gap-4 text-[#121935]">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1D4ED8]">
              <Phone size={18} />
            </div>
            <span className="font-bold text-[16px]">+91 96496 37111</span>
          </a>
          <a href="mailto:info@skmmconsultancy.com" className="flex items-center gap-4 text-[#121935]">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1D4ED8]">
              <Mail size={18} />
            </div>
            <span className="font-bold text-[16px]">info@skmmconsultancy.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
