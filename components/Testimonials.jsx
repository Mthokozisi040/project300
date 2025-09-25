"use client";
import { useState } from "react";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("contact"); // "contact" or "testimonial"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "",
    rating: 5
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const endpoint = activeTab === "contact" 
        ? "http://localhost:3001/api/contact" 
        : "http://localhost:3001/api/testimonials";
      
      const payload = activeTab === "contact" 
        ? {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }
        : {
            name: formData.name,
            role: formData.role,
            quote: formData.message,
            rating: formData.rating
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit ${activeTab === "contact" ? "contact form" : "testimonial"}`);
      }

      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        role: "",
        rating: 5
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Love to hear from you, Get in touch <span className="text-blue-600">💬</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have a question or want to share your experience? We'd love to hear from you.
            </p>
            
            {/* Tab Selector */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setActiveTab("contact")}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeTab === "contact" 
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Contact Us
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("testimonial")}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeTab === "testimonial" 
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Share Your Story
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form Section */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {activeTab === "contact" ? "Send us a message" : "Share your experience"}
                </h2>
                
                {submitted ? (
                  <div className="bg-green-50 p-4 rounded-lg text-green-800 mb-6">
                    <p>
                      {activeTab === "contact" 
                        ? "Thank you for your message! We'll get back to you soon." 
                        : "Thank you for your testimonial! It will be reviewed before publishing."}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-green-600 hover:text-green-800 underline"
                    >
                      Submit another
                    </button>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="bg-red-50 p-3 rounded-lg text-red-800 mb-6">
                        {error}
                      </div>
                    )}
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                          placeholder=" "
                          required
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                          placeholder=" "
                          required={activeTab === "contact"}
                        />
                        <label 
                          htmlFor="email" 
                          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                        >
                          Email address {activeTab === "contact" && "*"}
                        </label>
                      </div>

                      {activeTab === "testimonial" && (
                        <div className="relative">
                          <input
                            type="text"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                          />
                          <label 
                            htmlFor="role" 
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                          >
                            Your role/position
                          </label>
                        </div>
                      )}

                      {activeTab === "contact" && (
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                          />
                          <label 
                            htmlFor="phone" 
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                          >
                            Phone number (optional)
                          </label>
                        </div>
                      )}

                      {activeTab === "testimonial" && (
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">
                            Rating
                          </label>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => handleRatingChange(star)}
                                className="text-2xl focus:outline-none"
                              >
                                <FaStar className={star <= formData.rating ? 'text-yellow-500' : 'text-gray-300'} />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                          placeholder=" "
                          required
                        ></textarea>
                        <label 
                          htmlFor="message" 
                          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                        >
                          {activeTab === "contact" ? "Write your message" : "Share your experience"}
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50"
                      >
                        {submitting 
                          ? "Submitting..." 
                          : activeTab === "contact" 
                            ? "Send message" 
                            : "Share your story"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="lg:w-1/2 flex items-center">
              <div className="bg-blue-600 p-8 rounded-xl shadow-md w-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-white mb-6">
                  "I found my community and grew creatively through these activities. The support system here is incredible!"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="v8285_761.png"
                    alt="Devon Lane"
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium text-white">Devon Lane</p>
                    <p className="text-white">Student: Art club</p>
                  </div>
                </div>
                
                {activeTab === "testimonial" && (
                  <div className="mt-6 pt-4 border-t border-blue-500">
                    <p className="text-white text-sm">
                      Share your own experience to help other students discover the value of campus activities!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;