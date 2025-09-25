import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are there any academic credits for attendance?",
      answer: "It will depend on the event. Not all events will be credited academically, but we will provide exposure and recognition for all participating students."
    },
    {
      question: "Will there be refreshments?",
      answer: "Yes, refreshments and light catering will be provided during events. We will have a selection of snacks and beverages available to keep you energized throughout the session."
    },
    {
      question: "How will I receive notifications?",
      answer: "Notifications will be sent via email and through the university app. First-year students will receive tailored notifications related to their courses. Ensure your contact information is up to date."
    },
    {
      question: "Can I change my application?",
      answer: "Yes, you can modify your application until the submission deadline. Log into your account and navigate to your applications. Make the necessary changes and resubmit."
    },
    {
      question: "Who can I contact?",
      answer: "For any inquiries, please reach out to the student services office. They can assist you with any questions regarding activities and events. Contact details are available on our website."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">FAQs</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about co-curricular activities and upcoming events at our university.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h2>
              <span className="ml-4 text-gray-500">
                {activeIndex === index ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/*<div className="mt-20 text-center mb-20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Contact us and ask your prefered questions.</p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
          Contact
        </Link>
      </div>*/}
    </div>
  );
}