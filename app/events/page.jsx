"use client"
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import { FiArrowRight } from "react-icons/fi";
import Testimonials from '@/components/Testimonials';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Page = () => {
  // State for hero slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "event-bg.jpg",
    "event-bg2.jpg",
    "event-bg3.jpg"
  ];

  // State for events display
  const [showAllEvents, setShowAllEvents] = useState(false);
  const allEvents = [
    {
      id: 1,
      title: "Africa Day",
      category: "Culture",
      location: "Multipurpose Hall",
      description: "Experience diverse performances and food from around the world.",
      date: "Tue 13 Mar 2025",
      image: "event1.jpg"
    },
    {
      id: 2,
      title: "Tech Symposium",
      category: "Technology",
      location: "Engineering Building",
      description: "Learn about the latest innovations in tech from industry leaders.",
      date: "Wed 14 Mar 2025",
      image: "event2.jpg"
    },
    {
      id: 3,
      title: "Art Exhibition",
      category: "Arts",
      location: "Fine Arts Gallery",
      description: "Showcase of student artwork from various disciplines.",
      date: "Thu 15 Mar 2025",
      image: "event3.jpg"
    },
    {
      id: 4,
      title: "Sports Day",
      category: "Sports",
      location: "University Stadium",
      description: "Annual inter-department sports competition.",
      date: "Fri 16 Mar 2025",
      image: "event4.jpg"
    },
    {
      id: 5,
      title: "Career Fair",
      category: "Professional",
      location: "Student Center",
      description: "Connect with potential employers and explore career opportunities.",
      date: "Mon 19 Mar 2025",
      image: "event5.jpg"
    },
    {
      id: 6,
      title: "Music Festival",
      category: "Entertainment",
      location: "Main Quad",
      description: "Live performances from student bands and guest artists.",
      date: "Tue 20 Mar 2025",
      image: "event6.jpg"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">

        {/* Hero Section with Slideshow */}
        <section className="relative h-screen overflow-hidden">
          {/* Slideshow Images */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-8 py-30 flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Explore Exciting <br />
              Events and Activities <br />
              Today
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
              Discover a vibrant array of co-curricular activities designed to enhance your university experience.
            </p>
            <div className="flex gap-4">
              <Link href="/signup" className="text-white px-6 py-3 rounded hover:bg-blue-800" style={{ backgroundColor: 'rgba(0, 47, 104, 1)' }}>
                Sign Up
              </Link>
              <Link href="/about" className="border border-white text-white px-6 py-3 rounded hover:bg-gray-300 hover:text-gray-900">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              <p className="text-gray-600">Join us for exciting activities and networking opportunities.</p>
            </div>
            <button 
              onClick={() => setShowAllEvents(!showAllEvents)} 
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              {showAllEvents ? 'Show Less' : 'View All'}
            </button>
          </div>

          {/* Events Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allEvents.slice(0, showAllEvents ? allEvents.length : 3).map((event) => (
              <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="bg-gray-300 h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <span className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">{event.category}</span>
                    <span>@ {event.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{event.date}</span>
                    <Link href={`/events/${event.id}`} className="text-blue-700 flex items-center gap-1 hover:underline">
                      View Event <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Highlights */}
        <section className="relative bg-white h-screen flex items-center">
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-black">
            <h1 className="text-4xl md:text-7xl font-normal mb-6 leading-tight">
              Join Exciting University&nbsp;
              <br />
              Events!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Register now to stay updated on co‑curricular activities and events tailored just for you!
            </p>
            <div className="flex gap-4 items-center ml-75">
              <Link href="/signup" className="text-white px-6 py-3 rounded hover:bg-blue-800" style={{ backgroundColor: 'rgba(0, 47, 104, 1)' }}>
                Sign Up
              </Link>
              <Link href="/about" className="border border-yellow text-black px-6 py-3 rounded hover:bg-gray-300 hover:text-gray-900">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <Testimonials/>

        {/* Timeline section */}
        <section className="relative mt-10 py-7 flex items-center mb-16">
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-black">
            <h1 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">
              Upcoming Events and &nbsp;
              <br />
              Activities Timeline
            </h1>
            <p className="">
              Register now to stay updated on co‑curricular activities and events tailored just for you!
            </p>
          </div>  
        </section>

        <Timeline style={{ marginTop: 50 }}/>

        {/* Contact form */}
        <ContactForm/>

        {/* FAQ section */}
        <FAQSection/>

        {/* Footer section */}
        <Footer/>
      </main>
    </div>
  )
}

export default Page