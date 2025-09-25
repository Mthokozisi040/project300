import { useState, useEffect } from 'react';

export default function HeroSlideshow  () {
  const slides = [
    {
      id: 1,
      title: "Get Involved Today",
      description: "Discover events and activities that challenge, inspire, and bring students together in exciting ways.",
      image: "/images/hero view all.jpg"
    },
    {
      id: 2,
      title: "Join Our Sports Teams",
      description: "Compete, stay active, and be part of our winning teams across various sports.",
      image: "/images/Rugby.jpeg"
    },
    {
      id: 3,
      title: "Express Your Creativity",
      description: "Participate in our diverse cultural and artistic societies to showcase your talents.",
      image: "/images/drama.webp"
    },
    {
      id: 4,
      title: "Make Your Voice Heard",
      description: "Engage with student political organizations and contribute to campus governance.",
      image: "/images/politics images/sasco pic.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center text-center bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`
          }}
        >
          <div className="max-w-4xl px-5 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h1>
            <p className="text-xl md:text-2xl text-white mb-6 drop-shadow-lg">{slide.description}</p>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

