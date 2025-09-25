"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaInfoCircle } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AIAssistant from '@/components/AIAssistant';

export default function TermsAndConditions() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="bg-blue-900 text-white py-6 rounded-lg mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
            <p className="text-lg">University Of Mpumalanga Co-Curricular Activities Portal</p>
          </header>

          <div className="text-right italic text-gray-600 mb-6">
            Last Updated: June 10, 2025
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            <Section title="1. Acceptance of Terms">
              <p>By accessing and using the University Of Mpumalanga Co-Curricular Activities Portal ("co-curricularactivities.co.za"), you agree to comply with these Terms and Conditions. If you do not agree, you may not use this service.</p>
            </Section>

            <Section title="2. Eligibility">
              <ol className="list-decimal pl-5 space-y-2">
                <li>You must be a currently enrolled student at University Of Mpumalanga with a valid student ID.</li>
                <li>Some activities may have additional eligibility requirements (e.g., skill levels, academic standing).</li>
              </ol>
            </Section>

            <Section title="3. Registration and Accounts">
              <ol className="list-decimal pl-5 space-y-2">
                <li>You must provide accurate information during registration.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>The university reserves the right to suspend accounts for misconduct.</li>
              </ol>
            </Section>

            <Section title="4. Activity Participation">
              <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-2">4.1 General Rules</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Attendance may be recorded for credit-bearing activities.</li>
                <li>Participants must follow all activity-specific rules and codes of conduct.</li>
              </ol>

              <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-2">4.2 Fees and Payments</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Some activities may require fees (clearly stated during registration).</li>
                <li>Refund policies vary by activity and are non-negotiable.</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <div className="flex items-start">
                  <FaInfoCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Important:</strong> High-risk activities (e.g., sports, outdoor adventures) may require additional waivers.
                  </div>
                </div>
              </div>
            </Section>

            <Section title="5. Code of Conduct">
              <p>All participants must adhere to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The University Student Code of Conduct</li>
                <li>Anti-discrimination and harassment policies</li>
                <li>Respect for facilities and equipment</li>
              </ul>
              <p className="mt-3">Violations may result in removal from activities and disciplinary action.</p>
            </Section>

            <Section title="6. Intellectual Property">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Content created in university-sponsored activities may be used for promotional purposes.</li>
                <li>Course-related activity outputs remain subject to academic integrity policies.</li>
              </ol>
            </Section>

            <Section title="7. Limitation of Liability">
              <ol className="list-decimal pl-5 space-y-2">
                <li>The university is not liable for personal injury during activities, except where proven negligent.</li>
                <li>Participants are responsible for their personal belongings.</li>
                <li>We reserve the right to cancel/modify activities due to unforeseen circumstances.</li>
              </ol>
            </Section>

            <Section title="8. Privacy">
              <p>Your use of the Portal is subject to our <a href="/Public/privacy-policy.html" className="text-blue-600 hover:underline">Privacy Policy</a>. Personal data will be handled in accordance with university policies and applicable laws.</p>
            </Section>

            <Section title="9. Modifications">
              <p>The university may update these Terms at any time. Continued use constitutes acceptance of the revised Terms.</p>
            </Section>

            <Section title="10. Governing Law">
              <p>These Terms shall be governed by the laws of [Country/State]. Disputes will be resolved through university mediation processes.</p>
            </Section>
          </div>

          
        </div>

      </div>
      <AIAssistant/>
      <Footer/>
    </>

  );
}

// Reusable Section Component
function Section({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
}