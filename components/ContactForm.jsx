"use client";

import { useState } from 'react';
import { FaStar, FaPhoneAlt } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    acceptTerms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-gray-700">We've received your message and will get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
  <div className="w-full max-w-2xl mx-auto"> {/* Reduced max-width for better centering */}
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Love to hear from you, Get in touch <span className="text-blue-600">💬</span>
      </h1>
      {/*<p className="text-lg text-gray-600">
        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS and gives the blocks.
      </p>*/}
    </div>

    {/* Contact Form Section - Now centered */}
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>

      <form className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
          >
            Your name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
          >
            Email address
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            id="phone"
            className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
          >
            Phone number
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            rows="4"
            className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
          >
            Write your message
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
        >
          Send message
        </button>
      </form>
    </div>
  </div>
</div>
  );
}