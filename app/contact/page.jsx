"use client";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div>
      {/**Navbar */}
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 mt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Love to hear from you, Get in touch <span className="text-blue-600">💬</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS and gives the blocks.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form Section */}
            <div className="lg:w-1/2">
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

            {/* Testimonial Section */}
            <div className="lg:w-1/2 flex items-center">
              <div className="bg-blue-600 p-8 rounded-xl shadow-md w-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-white mb-6">
                  “I found my community and grew creatively through these activities.”
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Footer */}
      <Footer/>
    </div>
  );
}