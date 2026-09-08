import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A1424] mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-gray-700 space-y-6">
          <p>
            At Eduway India, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect the personal information of our students, parents, and website visitors seeking guidance for MBBS admissions abroad.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you interact with us for admission counseling, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Details:</strong> Name, age, gender, date of birth, and nationality.</li>
            <li><strong>Contact Information:</strong> Phone number and physical address.</li>
            <li><strong>Academic Records:</strong> NEET scores, 10th/12th mark sheets, and previous educational history required for university applications.</li>
            <li><strong>Financial Information:</strong> Payment details (processed securely) for consultancy fees or university application fees.</li>
            <li><strong>Document Copies:</strong> Passports, photographs, and medical certificates required for visas and admissions.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use your data strictly to facilitate your educational journey. This includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing your applications to medical universities abroad.</li>
            <li>Assisting with visa processing, travel arrangements, and accommodation.</li>
            <li>Communicating important updates regarding your admission status.</li>
            <li>Improving our counseling services and website user experience.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">3. Data Sharing and Third Parties</h2>
          <p>
            Eduway India does not sell, rent, or trade your personal information. We only share necessary details with authorized entities involved in your admission process:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Universities:</strong> To process your official admission letter.</li>
            <li><strong>Government Bodies/Embassies:</strong> For visa processing and immigration clearance.</li>
            <li><strong>Service Providers:</strong> For flight bookings or hostel accommodations, strictly with your consent.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement robust security measures to protect your physical documents and digital data against unauthorized access, alteration, or disclosure. All sensitive academic and personal documents are handled with strict confidentiality.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">5. Cookies and Tracking</h2>
          <p>
            Our website may use cookies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can choose to disable cookies through your browser settings, though this may affect some website functionalities.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">6. Your Rights</h2>
          <p>
            You have the right to request access to the personal information we hold about you. You may also request corrections to any inaccurate data or ask for the deletion of your data once the admission process is complete, subject to legal and regulatory requirements.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">7. Changes to This Policy</h2>
          <p>
            Eduway India reserves the right to update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly.
          </p>

          <h2 className="text-xl font-bold text-[#0A1424] mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact our counseling team using the phone number provided on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
