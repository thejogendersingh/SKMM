import React, { useState, useEffect, useRef } from 'react';
import { Trophy, MapPin, Building, Banknote, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import imgRussia from '../assets/Kremlin Moscow.jpg';
import imgKazakhstan from '../assets/Astana,Kazakistan.jpg';
import imgGeorgia from '../assets/Terry College Of Business _ University of Georgia.jpg';
import imgUzbekistan from '../assets/samarkand, uzbekistan.jpg';
import imgKyrgyzstan from '../assets/Kyrgyzstan - Victory Square, Bishkek.jpg';

const countryImages = {
  Russia: imgRussia,
  Kazakhstan: imgKazakhstan,
  Georgia: imgGeorgia,
  Uzbekistan: imgUzbekistan,
  Kyrgyzstan: imgKyrgyzstan
};

const universityData = [
  // Kyrgyzstan
  { country: "Kyrgyzstan", code: "KG", name: "Kyrgyz National University", city: "Bishkek", tuition: "$4,500", hostel: "$800", package: "$5,300", image: "https://images.pexels.com/photos/36899861/pexels-photo-36899861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "Kyrgyz State Medical Academy", city: "Bishkek", tuition: "$4,200", hostel: "$600", package: "$4,800", image: "https://images.pexels.com/photos/26201392/pexels-photo-26201392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "Avicenna International Medical University", city: "Bishkek", tuition: "$4,000", hostel: "$800", package: "$4,800", image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "Jalal-Abad State University", city: "Jalal-Abad", tuition: "$4,000", hostel: "$600", package: "$4,600", image: "https://images.pexels.com/photos/37943850/pexels-photo-37943850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "Asian Medical University", city: "Kant", tuition: "$3,000", hostel: "$500", package: "$3,500", image: "https://images.pexels.com/photos/11823081/pexels-photo-11823081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "Kyrgyz Russian Slavic University", city: "Bishkek", tuition: "$5,400", hostel: "$600", package: "$6,000", image: "https://images.pexels.com/photos/20200756/pexels-photo-20200756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "Osh State Medical University", city: "Osh", tuition: "$3,500", hostel: "$700", package: "$4,200", image: "https://images.pexels.com/photos/5147366/pexels-photo-5147366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kyrgyzstan", code: "KG", name: "International School of Medicine", city: "Bishkek", tuition: "$5,000", hostel: "$1,000", package: "$6,000", image: "https://images.pexels.com/photos/29704450/pexels-photo-29704450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  
  // Kazakhstan
  { country: "Kazakhstan", code: "KZ", name: "West Kazakh Medical University", city: "Aktobe", tuition: "$4,200", hostel: "$500", package: "$4,700", image: "https://images.pexels.com/photos/15811869/pexels-photo-15811869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "Shokan Ualikhanov Kokshetau University", city: "Kokshetau", tuition: "$4,300", hostel: "$600", package: "$4,900", image: "https://images.pexels.com/photos/35491213/pexels-photo-35491213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "Kazakh National Medical University", city: "Almaty", tuition: "$6,300", hostel: "$1,200", package: "$7,500", image: "https://images.pexels.com/photos/32666778/pexels-photo-32666778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "South Kazakhstan Medical University", city: "Shymkent", tuition: "$4,000", hostel: "$700", package: "$4,700", image: "https://images.pexels.com/photos/24304639/pexels-photo-24304639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "Al-Farabi Kazakh National University", city: "Almaty", tuition: "$4,800", hostel: "$800", package: "$5,600", image: "https://images.pexels.com/photos/18587790/pexels-photo-18587790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "Astana Medical University", city: "Nur Sultan", tuition: "$4,500", hostel: "$800", package: "$5,300", image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "International Medical School", city: "Almaty", tuition: "$3,900", hostel: "$700–1,000", package: "$4,600–4,900", image: "https://images.pexels.com/photos/11964415/pexels-photo-11964415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Kazakhstan", code: "KZ", name: "Semey State Medical University", city: "Semey", tuition: "$3,800", hostel: "$800", package: "$4,600", image: "https://images.pexels.com/photos/15688799/pexels-photo-15688799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  
  // Russia
  { country: "Russia", code: "RU", name: "Immanuel Kant Baltic Federal University", city: "Kaliningrad", tuition: "$3,800", hostel: "$151", package: "$3,951", image: "https://images.pexels.com/photos/39289023/pexels-photo-39289023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Russia", code: "RU", name: "Tver State Medical University", city: "Tver", tuition: "$4,500", hostel: "$190", package: "$4,690", image: "https://images.pexels.com/photos/24366455/pexels-photo-24366455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Russia", code: "RU", name: "Chechen State Medical University", city: "Grozny", tuition: "$2,500", hostel: "$530", package: "$3,030", image: "https://images.pexels.com/photos/2570062/pexels-photo-2570062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Russia", code: "RU", name: "Ivanovo State Medical Academy", city: "Ivanovo", tuition: "$3,200", hostel: "$250", package: "$3,450", image: "https://images.pexels.com/photos/5759484/pexels-photo-5759484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Russia", code: "RU", name: "Bashkir State Medical University", city: "Ufa", tuition: "$6,200", hostel: "$180", package: "$6,380", image: "https://images.pexels.com/photos/39112883/pexels-photo-39112883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Russia", code: "RU", name: "Kazan Federal University", city: "Kazan", tuition: "$6,000", hostel: "$150", package: "$6,150", image: "https://images.pexels.com/photos/6284805/pexels-photo-6284805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  
  // Uzbekistan
  { country: "Uzbekistan", code: "UZ", name: "Tashkent Medical Academy", city: "Tashkent", tuition: "$3,500", hostel: "$500", package: "$4,000", image: "https://images.pexels.com/photos/39198219/pexels-photo-39198219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Uzbekistan", code: "UZ", name: "Fergana Medical Institute of Public Health", city: "Fergana", tuition: "$3,500", hostel: "$700", package: "$4,200", image: "https://images.pexels.com/photos/7710853/pexels-photo-7710853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Uzbekistan", code: "UZ", name: "Samarkand State Medical University", city: "Samarkand", tuition: "$3,800", hostel: "$500", package: "$4,300", image: "https://images.pexels.com/photos/28932304/pexels-photo-28932304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Uzbekistan", code: "UZ", name: "Bukhara State Medical Institute", city: "Bukhara", tuition: "$3,800", hostel: "$500", package: "$4,300", image: "https://images.pexels.com/photos/37978086/pexels-photo-37978086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Uzbekistan", code: "UZ", name: "Andijan State Medical Institute", city: "Andijan", tuition: "$3,200", hostel: "$700", package: "$3,900", image: "https://images.pexels.com/photos/18145424/pexels-photo-18145424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  
  // Georgia
  { country: "Georgia", code: "GE", name: "Kutaisi University (UNIK)", city: "Kutaisi", tuition: "$4,000", hostel: "$2,500", package: "$6,500", image: "https://images.pexels.com/photos/39257926/pexels-photo-39257926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Georgia", code: "GE", name: "Caucasus International University", city: "Tbilisi", tuition: "$6,000", hostel: "$2,500", package: "$8,500", image: "https://images.pexels.com/photos/18145422/pexels-photo-18145422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Georgia", code: "GE", name: "Tbilisi State Medical University", city: "Tbilisi", tuition: "$7,000", hostel: "$2,500", package: "$9,500", image: "https://images.pexels.com/photos/32021787/pexels-photo-32021787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Georgia", code: "GE", name: "Geomedi Medical University", city: "Tbilisi", tuition: "$5,500", hostel: "$3,000", package: "$8,500", image: "https://images.pexels.com/photos/2305096/pexels-photo-2305096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Georgia", code: "GE", name: "Batumi Shota Rustaveli State University", city: "Batumi", tuition: "$4,000", hostel: "$2,500", package: "$6,500", image: "https://images.pexels.com/photos/36709136/pexels-photo-36709136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Georgia", code: "GE", name: "East European University", city: "Tbilisi", tuition: "$5,500", hostel: "$2,800", package: "$8,300", image: "https://images.pexels.com/photos/11064203/pexels-photo-11064203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
  { country: "Georgia", code: "GE", name: "University of Georgia", city: "Athens", tuition: "$5,500", hostel: "$1,500", package: "$7,000", image: "https://images.pexels.com/photos/37818239/pexels-photo-37818239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  },
];

const countriesList = ["Russia", "Georgia", "Uzbekistan", "Kazakhstan", "Kyrgyzstan"];

const Universities = () => {
  const [activeTab, setActiveTab] = useState("Russia");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const filteredUniversities = universityData.filter(uni => uni.country === activeTab);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.firstChild?.clientWidth || clientWidth;
        const gap = 24; // 1.5rem (gap-6)
        const scrollAmount = cardWidth + gap;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      }
    }, 7000); // Slower auto-scroll (7 seconds)

    return () => clearInterval(interval);
  }, [activeTab]);

  // Track active dot
  useEffect(() => {
    setActiveIndex(0); // Reset on tab change
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.firstChild?.clientWidth || clientWidth;
        const gap = 24;
        const totalCardWidth = cardWidth + gap;
        const currentIndex = Math.round(scrollLeft / totalCardWidth);
        setActiveIndex(currentIndex);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeTab]);

  const scrollToDot = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.clientWidth || scrollRef.current.clientWidth;
      const gap = 24;
      scrollRef.current.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-10 md:py-14 bg-slate-100 overflow-hidden relative font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest mb-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#B00010] to-[#E00018]">
            OUR PARTNERS
          </span>
          <h2 className="section-title">
            Our Exclusive Study MBBS Abroad Partners
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
          {countriesList.map((country) => (
            <button
              key={country}
              onClick={() => setActiveTab(country)}
              className={`px-6 py-2.5 rounded-full font-bold text-[15px] transition-all duration-300 ${
                activeTab === country 
                ? 'bg-[#0A1424] text-white ' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Arrow Left */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full  border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#D00012] transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Scroll View */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredUniversities.map((uni, idx) => (
              <div 
                key={idx}
                className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start bg-white rounded-lg overflow-hidden   transition-all duration-300 flex flex-col border border-slate-200"
              >
                <div className="relative h-[220px] w-full shrink-0">
                  <img 
                    src={uni.image || countryImages[uni.country]} 
                    alt={uni.country} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                  
                  {/* NMC Approved Badge */}
                  <div className="absolute top-4 right-4 bg-[#22c55e] text-white text-[13px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5  tracking-wide">
                    <Trophy size={14} strokeWidth={2.5} /> NMC Approved
                  </div>

                  {/* Country Overlay */}
                  <div className="absolute bottom-4 left-5 flex items-end gap-3">
                    <div className="text-5xl font-black text-white/90 leading-none tracking-tighter">
                      {uni.code}
                    </div>
                    <div className="flex flex-col pb-0.5">
                      <span className="text-xl font-bold text-white leading-tight">{uni.country}</span>
                      <span className="text-[14px] text-white/80 font-medium">Partner</span>
                    </div>
                  </div>
                </div>
              {/* Content Body - Outer box matches Destinations, Inner layout matches image */}
              <div className="p-5 flex-1 flex flex-col bg-white">
                
                {/* Title */}
                <h3 className="text-[18px] font-medium text-[#0A1424] mb-2 leading-tight">
                  {uni.name}
                </h3>
                
                {/* Description (Matching the visual weight of the reference image text) */}
                <p className="text-[14px] text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {uni.name} offers an internationally recognized MBBS program with modern teaching methods, experienced faculty, and a supportive learning environment for international students.
                </p>
                
                {/* Info Grid - matching reference structural layout exactly but with our colors */}
                <div className="grid grid-cols-2 gap-3 mb-6 shrink-0 mt-auto">
                  {/* City */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <MapPin size={15} strokeWidth={2} className="text-red-600" />
                      <span className="text-[13px] font-medium">City</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#0A1424]">{uni.city}</span>
                  </div>
                  
                  {/* Tuition Fees */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <GraduationCap size={15} strokeWidth={2} className="text-purple-500" />
                      <span className="text-[13px] font-medium">Tuition/yr</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#0A1424]">{uni.tuition}</span>
                  </div>

                  {/* Hostel */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <Building size={15} strokeWidth={2} className="text-amber-500" />
                      <span className="text-[13px] font-medium">Hostel/yr</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#0A1424]">{uni.hostel}</span>
                  </div>

                  {/* Total Package */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <Banknote size={15} strokeWidth={2} className="text-emerald-500" />
                      <span className="text-[13px] font-medium">Package/yr</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#0A1424]">{uni.package}</span>
                  </div>
                </div>
                
                {/* Apply Button - Our theme color */}
                <a href="https://wa.me/919672854110?text=Hello%20Eduway India%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-[#0A1424] text-white py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#0A1424] transition-colors  shrink-0">
                  Apply to This University
                </a>
              </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full  border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#D00012] transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredUniversities.map((_, dot) => (
            <button 
              key={dot} 
              onClick={() => scrollToDot(dot)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === dot 
                ? 'bg-[#D00012] w-4 opacity-80' 
                : 'bg-gray-200 w-2 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Universities;
