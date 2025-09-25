"use client";

import { useState } from 'react';
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { FaSearch, FaChevronDown, FaFacebook, FaInstagram, FaTrophy, FaHandsHelping, FaUsers, FaPalette, FaStar } from 'react-icons/fa';

export default function CoCurricularActivities() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Co-Curricular Activities | University of Mpumalanga</title>
        <meta name="description" content="University of Mpumalanga Co-Curricular Activities Portal - Enrich your student life through sports, arts, leadership, and volunteering opportunities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative  bg-gradient-to-r from-[#003366] to-[#145da0] text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            UMP Co-Curricular Activities Background
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Discover opportunities to enrich your university experience beyond the classroom
          </p>

        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Welcome Section */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 mb-20">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Enhance Your University Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're thrilled to have you here! Explore the wide variety of activities and clubs available
                to enrich your student life at the University of Mpumalanga. Whether you're into sports,
                arts, leadership, or volunteering — there's something for everyone!
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-blue-600 mb-2 text-xl"><FaTrophy /></div>
                  <h3 className="font-semibold text-gray-800">Sports & Fitness</h3>
                  <p className="text-sm text-gray-600 mt-1">Teams, fitness programs, and health challenges</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-purple-600 mb-2 text-xl"><FaPalette /></div>
                  <h3 className="font-semibold text-gray-800">Arts & Culture</h3>
                  <p className="text-sm text-gray-600 mt-1">Music, dance, drama, and cultural events</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-green-600 mb-2 text-xl"><FaUsers /></div>
                  <h3 className="font-semibold text-gray-800">Leadership & Clubs</h3>
                  <p className="text-sm text-gray-600 mt-1">Student councils, societies, and workshops</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-red-600 mb-2 text-xl"><FaHandsHelping /></div>
                  <h3 className="font-semibold text-gray-800">Volunteering</h3>
                  <p className="text-sm text-gray-600 mt-1">Outreach, environmental, and service programs</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-96 flex-shrink-0 order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg mx-auto md:mx-0">
              <img
                src="/roro.jpg"
                alt="Students engaged in co-curricular activities"
                className="w-full h-80 object-cover"
              />
            </div>
          </section>

          {/* Core Values Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">These fundamental principles guide our approach to student development and community building at UMP</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The University commits itself to uphold the highest standards of excellence in all its actions, functions and services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  At all times and in all situations the actions and interactions of the University will be characterised by undeviating honesty and utmost fairness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-yellow-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Diversity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Diversity is valued and celebrated in unlocking a range of interactions, and enhancing exposure to diverse cultures and perspectives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaboration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As an engaged institution UMP will actively seek out opportunities for collaboration with all its stakeholders.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Adaptability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UMP acknowledges our ever changing knowledge contexts and therefore the need to promote and foster adaptability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-cyan-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Relevance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UMP endorses the need for its academic programmes and research activities to respond to its context.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-indigo-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Inspiration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UMP values inspiration that allows and encourages others to be more and do more than what at first seems possible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-orange-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Community</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building strong connections between students, staff, and the wider community through engagement and service.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section - Grid Version */}
<section className="bg-white rounded-2xl py-16 px-6 mb-16 shadow-sm border border-gray-100">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">Dedicated professionals committed to enhancing your student experience</p>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
      <div className="w-32 h-32 rounded-full bg-gray-200 mb-5 overflow-hidden border-4 border-white shadow-md">
        <img 
          src="/slide2.jpg" 
          alt="Mr Prosper Chiloane" 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">Mr Prosper Chiloane</h3>
      <p className="text-gray-600 mb-3 text-sm text-center">SRC President</p>
      <a href="mailto:srcpresident@ump.ac.za" className="text-blue-600 hover:underline text-sm">
        srcpresident@ump.ac.za
      </a>
    </div>
    
    <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
      <div className="w-32 h-32 rounded-full bg-gray-200 mb-5 overflow-hidden border-4 border-white shadow-md">
        <img 
          src="/ict.avif" 
          alt="Mr Hendry Matonsi" 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">Mr Hendry Matonsi</h3>
      <p className="text-gray-600 mb-3 text-sm text-center">Sports & Recreation Officer</p>
      <a href="mailto:hendry.matonsi@ump.ac.za" className="text-blue-600 hover:underline text-sm">
        hendry.matonsi@ump.ac.za
      </a>
    </div>
    
    <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
      <div className="w-32 h-32 rounded-full bg-gray-200 mb-5 overflow-hidden border-4 border-white shadow-md">
        <img 
          src="/ict.avif" 
          alt="Ms Lebohang Sithole" 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">Ms Lebohang Sithole</h3>
      <p className="text-gray-600 mb-3 text-sm text-center">Student Development Officer</p>
      <a href="mailto:lebohang.sithole@ump.ac.za" className="text-blue-600 hover:underline text-sm">
        lebohang.sithole@ump.ac.za
      </a>
    </div>

    <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
      <div className="w-32 h-32 rounded-full bg-gray-200 mb-5 overflow-hidden border-4 border-white shadow-md">
        <img 
          src="/ict.avif" 
          alt="Mr Mokoatala" 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">Mr Mokoatala</h3>
      <p className="text-gray-600 mb-3 text-sm text-center">SRC Representative</p>
      <a href="mailto:mokoatala@ump.ac.za" className="text-blue-600 hover:underline text-sm">
        mokoatala@ump.ac.za
      </a>
    </div>
  </div>
</section>

          {/* Call to Action 
          <section className="bg-gradient-to-r from-[#003366] to-[#145da0] rounded-2xl p-10 text-center text-white mb-16 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join one of our many clubs and activities to make the most of your university experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#003366] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300">
                Browse Activities
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#003366] transition-all duration-300">
                Contact Us
              </button>
            </div>
          </section>*/}
        </div>
      </main>

      <Footer />
    </div>
  );
}