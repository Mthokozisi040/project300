import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="text-white py-16 px-8 text-center" style={{ backgroundColor: 'rgba(0, 47, 104, 1)' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Involved Today
        </h1>
        <p className="text-xl opacity-90 mb-8">
          Discover events and activities that challenge, inspire, and bring students together in exciting ways.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link 
            href="#" 
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 flex items-center backdrop-blur-md"
          >
            ✨ Boost Your Confidence
          </Link>
          <Link 
            href="#" 
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 flex items-center backdrop-blur-md"
          >
            ✨ Find Your Tribe
          </Link>
          <Link 
            href="#" 
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 flex items-center backdrop-blur-md"
          >
            ✨ Create And Showcase
          </Link>
          <Link 
            href="#" 
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 flex items-center backdrop-blur-md"
          >
            ✨ Get Recognized
          </Link>
        </div>

        <div className=" backdrop-blur-md inline-block px-8 py-2 text-lg mt-4" style={{ backgroundColor: 'rgba(0, 30, 67, 1)' }}>
          Learn skills. Get noticed. Make memories.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;