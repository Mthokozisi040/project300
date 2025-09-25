import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AboutGallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: '/galleryRugby1.jpg', caption: '2024 Campus Rugby Tournament' },
    { img: '/galleryRugby6.jpg', caption: 'Strategy Analysis Session' },
    { img: '/galleryRugby2.jpg', caption: 'Competitive Match in Progress' },
    { img: '/galleryRugby3.jpg', caption: 'Expert Coaching Available' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
      <div className="flex-1 min-w-[300px]">
        <h2 className="text-3xl font-bold mb-5">Rugby</h2>
        <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
          The UMP Rugby is a prestigious event that brings together the brightest minds from across campus. This intellectually stimulating competition is open to players of all skill levels, from beginners to experienced tournament players. Participants will have the opportunity to enhance their strategic thinking, problem-solving abilities, and decision-making skills in a friendly yet competitive environment.
        </p>
        <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
          The championship follows standard FIDE rules with time controls appropriate for university play. We provide tournament-grade chess sets, clocks, and a comfortable playing environment. Players are expected to bring their focus and sportsmanship. Whether you're joining for fun or aiming for the championship title, this event offers valuable experience and the chance to meet fellow chess enthusiasts.
        </p>
        <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
          The university will provide all necessary equipment including chess boards, pieces, and clocks. Participants should bring their own notation sheets if they wish to record their games. We encourage players to study basic chess strategies beforehand, though coaching sessions will be available for beginners throughout the tournament.
        </p>
      </div>

      <div className="flex-1 min-w-[300px] relative rounded-xl overflow-hidden shadow-xl">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`w-full h-[400px] transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
          >
            <img src={slide.img} alt={slide.caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              {slide.caption}
            </div>
          </div>
        ))}
        
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white bg-black bg-opacity-30 rounded-r hover:bg-opacity-80 transition-all"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white bg-black bg-opacity-30 rounded-l hover:bg-opacity-80 transition-all"
        >
          <FaChevronRight className="text-xl" />
        </button>
        
        <div className="absolute bottom-3 left-0 right-0 text-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'} transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}