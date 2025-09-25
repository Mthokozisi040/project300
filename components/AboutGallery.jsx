import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AboutGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "2024 Campus Tennis Tournament"
    },
    {
      img: "https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Strategy Analysis Session"
    },
    {
      img: "https://images.unsplash.com/photo-1543092587-d8b8feaf4f1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Competitive Match in Progress"
    },
    {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Expert Coaching Available"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
      <div className="flex-1 min-w-[300px]">
        <h2 className="text-3xl font-bold mb-5 text-gray-800">Chess Championship</h2>
        <div className="bg-blue-900/90 text-white p-5 rounded-lg shadow-md mb-5">
          <p className="mb-4">
            The UMP Tennis Championship is a prestigious event that brings together the brightest minds from across campus. This intellectually stimulating competition is open to players of all skill levels, from beginners to experienced tournament players. Participants will have the opportunity to enhance their strategic thinking, problem-solving abilities, and decision-making skills in a friendly yet competitive environment.
          </p>
          <p className="mb-4">
            The championship follows standard FIDE rules with time controls appropriate for university play. We provide tournament-grade chess sets, clocks, and a comfortable playing environment. Players are expected to bring their focus and sportsmanship. Whether you're joining for fun or aiming for the championship title, this event offers valuable experience and the chance to meet fellow chess enthusiasts.
          </p>
          <p>
            The university will provide all necessary equipment including chess boards, pieces, and clocks. Participants should bring their own notation sheets if they wish to record their games. We encourage players to study basic chess strategies beforehand, though coaching sessions will be available for beginners throughout the tournament.
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-[300px] relative rounded-xl overflow-hidden shadow-xl">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'block' : 'hidden'} h-[400px]`}
          >
            <img 
              src={slide.img} 
              alt={slide.caption} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
              {slide.caption}
            </div>
          </div>
        ))}

        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white bg-black/30 hover:bg-black/50 rounded-r"
        >
          <FaChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white bg-black/30 hover:bg-black/50 rounded-l"
        >
          <FaChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;