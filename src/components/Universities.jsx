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
  { country: "Kyrgyzstan", code: "KG", name: "Kyrgyz National University", city: "Bishkek", tuition: "$4,500", hostel: "$800", package: "$5,300", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/%D0%93%D0%97_%D0%9A%D0%9D%D0%A3.jpg"  },
  { country: "Kyrgyzstan", code: "KG", name: "Kyrgyz State Medical Academy", city: "Bishkek", tuition: "$4,200", hostel: "$600", package: "$4,800", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kyrgyzstan", code: "KG", name: "Avicenna International Medical University", city: "Bishkek", tuition: "$4,000", hostel: "$800", package: "$4,800", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kyrgyzstan", code: "KG", name: "Jalal-Abad State University", city: "Jalal-Abad", tuition: "$4,000", hostel: "$600", package: "$4,600", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kyrgyzstan", code: "KG", name: "Asian Medical University", city: "Kant", tuition: "$3,000", hostel: "$500", package: "$3,500", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kyrgyzstan", code: "KG", name: "Kyrgyz Russian Slavic University", city: "Bishkek", tuition: "$5,400", hostel: "$600", package: "$6,000", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kyrgyzstan", code: "KG", name: "Osh State Medical University", city: "Osh", tuition: "$3,500", hostel: "$700", package: "$4,200", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kyrgyzstan", code: "KG", name: "International School of Medicine", city: "Bishkek", tuition: "$5,000", hostel: "$1,000", package: "$6,000", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
  
  // Kazakhstan
  { country: "Kazakhstan", code: "KZ", name: "West Kazakh Medical University", city: "Aktobe", tuition: "$4,200", hostel: "$500", package: "$4,700", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kazakhstan", code: "KZ", name: "Shokan Ualikhanov Kokshetau University", city: "Kokshetau", tuition: "$4,300", hostel: "$600", package: "$4,900", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kazakhstan", code: "KZ", name: "Kazakh National Medical University", city: "Almaty", tuition: "$6,300", hostel: "$1,200", package: "$7,500", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Main_building%2C_Kazak_National_Medical_University.jpg/500px-Main_building%2C_Kazak_National_Medical_University.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"  },
  { country: "Kazakhstan", code: "KZ", name: "South Kazakhstan Medical University", city: "Shymkent", tuition: "$4,000", hostel: "$700", package: "$4,700", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kazakhstan", code: "KZ", name: "Al-Farabi Kazakh National University", city: "Almaty", tuition: "$4,800", hostel: "$800", package: "$5,600", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kazakhstan", code: "KZ", name: "Astana Medical University", city: "Nur Sultan", tuition: "$4,500", hostel: "$800", package: "$5,300", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kazakhstan", code: "KZ", name: "International Medical School", city: "Almaty", tuition: "$3,900", hostel: "$700–1,000", package: "$4,600–4,900", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"  },
  { country: "Kazakhstan", code: "KZ", name: "Semey State Medical University", city: "Semey", tuition: "$3,800", hostel: "$800", package: "$4,600", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400"  },
  
  // Russia
  { country: "Russia", code: "RU", name: "Immanuel Kant Baltic Federal University", city: "Kaliningrad", tuition: "$3,800", hostel: "$151", package: "$3,951", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"  },
  { country: "Russia", code: "RU", name: "Tver State Medical University", city: "Tver", tuition: "$4,500", hostel: "$190", package: "$4,690", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Russia", code: "RU", name: "Chechen State Medical University", city: "Grozny", tuition: "$2,500", hostel: "$530", package: "$3,030", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
  { country: "Russia", code: "RU", name: "Ivanovo State Medical Academy", city: "Ivanovo", tuition: "$3,200", hostel: "$250", package: "$3,450", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"  },
  { country: "Russia", code: "RU", name: "Bashkir State Medical University", city: "Ufa", tuition: "$6,200", hostel: "$180", package: "$6,380", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400"  },
  { country: "Russia", code: "RU", name: "Kazan Federal University", city: "Kazan", tuition: "$6,000", hostel: "$150", package: "$6,150", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"  },
  
  // Uzbekistan
  { country: "Uzbekistan", code: "UZ", name: "Tashkent Medical Academy", city: "Tashkent", tuition: "$3,500", hostel: "$500", package: "$4,000", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Uzbekistan", code: "UZ", name: "Fergana Medical Institute of Public Health", city: "Fergana", tuition: "$3,500", hostel: "$700", package: "$4,200", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
  { country: "Uzbekistan", code: "UZ", name: "Samarkand State Medical University", city: "Samarkand", tuition: "$3,800", hostel: "$500", package: "$4,300", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"  },
  { country: "Uzbekistan", code: "UZ", name: "Bukhara State Medical Institute", city: "Bukhara", tuition: "$3,800", hostel: "$500", package: "$4,300", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400"  },
  { country: "Uzbekistan", code: "UZ", name: "Andijan State Medical Institute", city: "Andijan", tuition: "$3,200", hostel: "$700", package: "$3,900", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"  },
  
  // Georgia
  { country: "Georgia", code: "GE", name: "Kutaisi University (UNIK)", city: "Kutaisi", tuition: "$4,000", hostel: "$2,500", package: "$6,500", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Georgia", code: "GE", name: "Caucasus International University", city: "Tbilisi", tuition: "$6,000", hostel: "$2,500", package: "$8,500", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
  { country: "Georgia", code: "GE", name: "Tbilisi State Medical University", city: "Tbilisi", tuition: "$7,000", hostel: "$2,500", package: "$9,500", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"  },
  { country: "Georgia", code: "GE", name: "Geomedi Medical University", city: "Tbilisi", tuition: "$5,500", hostel: "$3,000", package: "$8,500", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=400"  },
  { country: "Georgia", code: "GE", name: "Batumi Shota Rustaveli State University", city: "Batumi", tuition: "$4,000", hostel: "$2,500", package: "$6,500", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=400"  },
  { country: "Georgia", code: "GE", name: "East European University", city: "Tbilisi", tuition: "$5,500", hostel: "$2,800", package: "$8,300", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"  },
  { country: "Georgia", code: "GE", name: "University of Georgia", city: "Athens", tuition: "$5,500", hostel: "$1,500", package: "$7,000", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"  },
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
          <span className="text-[12px] sm:text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2 block">
            OUR PARTNERS
          </span>
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium mb-3 md:mb-4 tracking-tight text-gray-900">
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
                ? 'bg-[#121935] text-white shadow-md' 
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
            className="absolute -left-4 md:-left-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#30AFFF] transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
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
                className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-slate-200"
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
                  <div className="absolute top-4 right-4 bg-[#22c55e] text-white text-[13px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md tracking-wide">
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
                <h3 className="text-[18px] font-medium text-[#121935] mb-2 leading-tight">
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
                      <MapPin size={15} strokeWidth={2} className="text-blue-500" />
                      <span className="text-[13px] font-medium">City</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#121935]">{uni.city}</span>
                  </div>
                  
                  {/* Tuition Fees */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <GraduationCap size={15} strokeWidth={2} className="text-purple-500" />
                      <span className="text-[13px] font-medium">Tuition/yr</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#121935]">{uni.tuition}</span>
                  </div>

                  {/* Hostel */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <Building size={15} strokeWidth={2} className="text-amber-500" />
                      <span className="text-[13px] font-medium">Hostel/yr</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#121935]">{uni.hostel}</span>
                  </div>

                  {/* Total Package */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                      <Banknote size={15} strokeWidth={2} className="text-emerald-500" />
                      <span className="text-[13px] font-medium">Package/yr</span>
                    </div>
                    <span className="text-[15px] font-semibold text-[#121935]">{uni.package}</span>
                  </div>
                </div>
                
                {/* Apply Button - Our theme color */}
                <a href="https://wa.me/919649637111?text=Hello%20SKMM%20Consultancy,%20I%20want%20to%20know%20more%20about%20MBBS%20admission." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-[#121935] text-white py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#1e2433] transition-colors shadow-sm shrink-0">
                  Apply to This University
                </a>
              </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#30AFFF] transition-colors opacity-0 group-hover:opacity-100"
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
                ? 'bg-[#30AFFF] w-4 opacity-80' 
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
