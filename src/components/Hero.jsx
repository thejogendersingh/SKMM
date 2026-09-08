import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const countries = [
    { name: 'Russia', flagUrl: 'https://flagcdn.com/w40/ru.png' },
    { name: 'Georgia', flagUrl: 'https://flagcdn.com/w40/ge.png' },
    { name: 'Kazakhstan', flagUrl: 'https://flagcdn.com/w40/kz.png' },
    { name: 'Uzbekistan', flagUrl: 'https://flagcdn.com/w40/uz.png' },
    { name: 'Kyrgyzstan', flagUrl: 'https://flagcdn.com/w40/kg.png' }
  ];

  return (
    <section id="home" className="pt-10 pb-14 lg:pt-14 lg:pb-24 relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      ></div>

      {/* Red Theme Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-red-50/90 z-0"></div>
      
      {/* Soft abstract shape for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          
          {/* Left Column: Text & Country Pills */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            
            <h1 className="text-4xl sm:text-4xl lg:text-[40px] font-bold text-[#0A1424] leading-[1.3] mb-4">
              Secure Your MBBS Seat in Top Global Medical Universities
            </h1>
            
            <p className="text-[#0A1424] text-[16px] sm:text-[17px] mb-6 font-medium opacity-90 leading-relaxed">
              Transform your dream into reality with our 100% transparent admission process and end-to-end guidance. <strong className="font-extrabold text-[#D00012] bg-white/50 px-2 py-0.5 rounded ml-1 inline-block mt-1 sm:mt-0">2026 Admissions Now Open!</strong>
            </p>
            
            {/* Country Pills Grid (3 on top, 2 on bottom) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-[500px] mb-8">
              {countries.map((country, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded px-3 py-2.5 flex items-center gap-2.5  border-[1.5px] border-red-200 hover:border-red-400 transition-colors cursor-default">
                  <img src={country.flagUrl} alt={`${country.name} flag`} className="w-[22px] h-auto rounded-[2px] " />
                  <span className="text-[13px] font-bold text-[#0A1424] whitespace-nowrap">{country.name}</span>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="https://wa.me/919649637111?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B00010] to-[#E00018] text-white rounded-md font-bold text-[14px] transition-all hover:-translate-y-0.5">
                Book Free Counselling Now
                <ArrowRight size={15} />
              </a>
              <a href="https://wa.me/919649637111?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center flex items-center justify-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm text-[#0A1424] border border-[#0A1424]/20 rounded-md font-bold text-[14px] hover:bg-white/80 hover:border-[#0A1424]/40 transition-all">
                Apply Now
                <ArrowRight size={15} />
              </a>
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div className="w-full lg:w-[36%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] bg-white rounded-lg  border border-red-100 p-6 sm:p-7">
              <h3 className="text-lg font-medium text-[#0A1424] mb-5">
                Get one on one Free Counselling
              </h3>

              <form className="flex flex-col gap-3.5" onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.elements[0].value;
                const email = e.target.elements[1].value;
                const phone = e.target.elements[2].value;
                const country = e.target.elements[3].value;
                const text = `Hello Eduway India,\nI would like to book a free counselling session.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}`;
                window.open(`https://wa.me/919649637111?text=${encodeURIComponent(text)}`, '_blank');
                e.target.reset();
              }}>
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name *" 
                    className="w-full bg-[#f8fafc] border border-transparent text-[#0A1424] text-[14px] rounded px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address *" 
                    className="w-full bg-[#f8fafc] border border-transparent text-[#0A1424] text-[14px] rounded px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <input 
                    type="tel" 
                    required
                    placeholder="Mobile Number *" 
                    className="w-full bg-[#f8fafc] border border-transparent text-[#0A1424] text-[14px] rounded px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <select required className="w-full bg-[#f8fafc] border border-transparent text-[#0A1424] text-[14px] rounded px-4 py-2.5 focus:outline-none focus:border-[#D00012] focus:bg-white transition-all cursor-pointer appearance-none">
                    <option value="">Select MBBS Abroad Country *</option>
                    <option value="russia">Russia</option>
                    <option value="georgia">Georgia</option>
                    <option value="kazakhstan">Kazakhstan</option>
                    <option value="uzbekistan">Uzbekistan</option>
                    <option value="kyrgyzstan">Kyrgyzstan</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#B00010] to-[#E00018] text-white rounded-md py-3 font-bold text-[14px] mt-2 transition-all hover:-translate-y-0.5"
                >
                  Book Free Counselling
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;



