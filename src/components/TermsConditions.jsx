import React, { useEffect } from 'react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A1424] mb-8 border-b pb-4">Terms and Conditions</h1>
        
        <div className="prose prose-slate max-w-none text-gray-700 space-y-6">
          <p>
            Welcome to Eduway India. By accessing our website and utilizing our services, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">1. Scope of Services</h2>
          <p>
            Eduway India acts as an educational consultant, providing guidance, counseling, and assistance for students seeking admission to MBBS programs in medical universities abroad. We facilitate the application, visa, and travel processes but do not guarantee admission, which is solely at the discretion of the respective universities.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">2. User Responsibilities</h2>
          <p>
            As a student or guardian using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, authentic, and up-to-date information and documents.</li>
            <li>Ensure that you meet all eligibility criteria (such as NEET qualification and age limits) required by the Medical Council of India (NMC) and the foreign university.</li>
            <li>Adhere to the deadlines for document submission and fee payments to avoid application rejection.</li>
          </ul>
          <p>
            Eduway India is not responsible for any rejection or delay caused by the submission of forged, incorrect, or delayed documents.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">3. Fees and Payments</h2>
          <p>
            Our consultancy fees cover the services outlined in your service agreement (e.g., counseling, document translation, visa processing).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consultancy fees are non-refundable once the application process has been initiated.</li>
            <li>University tuition fees, hostel fees, and official government visa fees are separate and must be paid directly to the respective institutions or authorities unless stated otherwise.</li>
            <li>Eduway India is not liable for changes in university fee structures or currency exchange rate fluctuations.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">4. Admission and Visa Decisions</h2>
          <p>
            While we provide expert guidance to maximize your chances of success, the final decision regarding university admission and visa approval rests entirely with the university administration and the respective country's embassy. Eduway India cannot be held legally or financially liable for visa rejections or admission denials beyond our control.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">5. Travel and Accommodation</h2>
          <p>
            We may assist in booking flights and arranging initial hostel accommodations. However, we are not responsible for flight cancellations, delays, or issues arising with third-party service providers. Students are expected to adhere to the rules and regulations of their university hostels and host countries.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">6. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Eduway India and is protected by copyright laws. Unauthorized use or reproduction of this material is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall Eduway India, its directors, or employees be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our services or website, including but not limited to loss of time, money, or academic opportunities.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">8. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Rajasthan, India.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">9. Amendments</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time without prior notice. Continued use of our services after any such changes constitutes your consent to such changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
