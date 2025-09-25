'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of background images for the slideshow
  const slides = [
    "url('/uni.png')",
    "url('/umpAfrica.jpg')",
    "url('/discover.jpg')",
    "url('/pic25.jpg')",
    "url('/choir.jpg')",
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: slide }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-30 flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Level Up Your UMP Life <br />
          Beyond the Classroom <br />
          Promoting Excellence
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
          Explore a variety of clubs and organizations that align with your interests and aspirations.
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroHomepage;