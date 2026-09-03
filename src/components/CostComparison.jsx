import React from 'react';
import { motion } from 'framer-motion';

const CostComparison = () => {
  const costs = [
    { country: "Kyrgyzstan", tuition: "₹2L - ₹3.5L", living: "₹1L - ₹1.5L", duration: "5 Years", total: "₹12L - ₹20L" },
    { country: "Kazakhstan", tuition: "₹2.5L - ₹4L", living: "₹1L - ₹1.5L", duration: "5 Years", total: "₹15L - ₹25L" },
    { country: "Uzbekistan", tuition: "₹2.5L - ₹4L", living: "₹1L - ₹1.5L", duration: "5 Years", total: "₹14L - ₹22L" },
    { country: "Russia", tuition: "₹2.5L - ₹5L", living: "₹1.2L - ₹2L", duration: "6 Years", total: "₹18L - ₹35L" },
    { country: "Georgia", tuition: "₹3.5L - ₹6L", living: "₹1.5L - ₹2.5L", duration: "6 Years", total: "₹25L - ₹40L" },
  ];

  return (
    <section className="section-padding bg-offWhite">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Understand the Cost of MBBS Abroad</h2>
          <p className="section-subtitle">A transparent breakdown of approximate yearly expenses to help you plan your budget effectively.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {costs.map((cost, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-4 pb-4 border-b border-gray-100 flex items-center justify-between">
                {cost.country}
                <span className="text-xs bg-blue-50 text-medicalBlue px-2 py-1 rounded-md">{cost.duration}</span>
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Indicative Tuition / Yr</span>
                  <span className="font-semibold text-gray-800">{cost.tuition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Living & Hostel / Yr</span>
                  <span className="font-semibold text-gray-800">{cost.living}</span>
                </div>
              </div>
              
              <div className="bg-navy-900 text-white p-3 rounded-lg flex justify-between items-center">
                <span className="text-xs font-medium text-blue-200">Est. Total Range</span>
                <span className="font-bold text-lg">{cost.total}</span>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primaryRed to-red-900 rounded-lg p-6 shadow-md text-white flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-bold mb-3">Need Exact Fee Details?</h3>
            <p className="text-sm text-red-100 mb-6">Get the latest fee structures of top universities directly to your WhatsApp.</p>
            <a href="#contact" className="bg-white text-primaryRed px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
              Get Latest Fee Details
            </a>
          </motion.div>
        </div>
        
        <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto">
          *All figures are indicative approximations in INR. Actual fees vary significantly by university and are subject to currency exchange rate fluctuations.
        </p>
      </div>
    </section>
  );
};

export default CostComparison;



