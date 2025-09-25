import { FaShieldAlt, FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="bg-blue-900 text-white py-6 rounded-lg mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg">University Co-Curricular Activities Portal</p>
        </header>

        <div className="text-right italic text-gray-600 mb-6">
          Last Updated: June 10, 2025
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          <Section title="1. Introduction">
            <p>
              This Privacy Policy explains how [University Name] ("we", "us", or "our") collects, uses, and protects your personal information when you use our Co-Curricular Activities Portal. By accessing this website, you agree to the terms of this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>When you register for activities, we may collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Personal identification (name, student ID, contact details)</li>
              <li>Academic information (faculty, year of study)</li>
              <li>Activity preferences and participation history</li>
              <li>Technical data (IP address, browser type, usage patterns)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>Your data helps us to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Process activity registrations and manage participation</li>
              <li>Communicate about events and opportunities</li>
              <li>Improve our services and website functionality</li>
              <li>Generate anonymized reports for university administration</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing">
            <p>We may share information with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>University departments for administrative purposes</li>
              <li>Activity leaders/clubs for event coordination</li>
              <li>Third-party service providers under confidentiality agreements</li>
            </ul>
            <p className="mt-3">We never sell your personal data to external marketers.</p>
          </Section>

          <Section title="5. Your Rights">
            <p>You can:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to your personal data</li>
              <li>Update or correct inaccurate information</li>
              <li>Withdraw consent for non-essential communications</li>
              <li>Request deletion of data (subject to legal requirements)</li>
            </ul>
            <p className="mt-3 flex items-center">
              <FaEnvelope className="mr-2 text-blue-600" />
              Contact <a href="mailto:privacy@university.edu" className="text-blue-600 hover:underline ml-1">privacy@university.edu</a> for requests.
            </p>
          </Section>

          <Section title="6. Security Measures">
            <p>We implement:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>SSL encryption for data transmission</li>
              <li>Role-based access controls</li>
              <li>Regular security audits</li>
            </ul>
          </Section>

          <Section title="7. Cookies & Tracking">
            <p>We use essential cookies for website functionality. Optional analytics cookies may be declined via our cookie banner.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>Updates will be posted here with a revised "Last Updated" date. Significant changes will be notified via university email.</p>
          </Section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-600">
          <p>&copy; 2023 [University Name]. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/" className="flex items-center text-blue-600 hover:underline">
              <FaHome className="mr-1" /> Return to Homepage
            </a>
            <a href="/contact" className="flex items-center text-blue-600 hover:underline">
              <FaPhone className="mr-1" /> Contact Us
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
}