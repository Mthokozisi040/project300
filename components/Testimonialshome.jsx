// components/Testimonials.js
import { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Testimonialshome = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials from backend API (which connects to Neon database)
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        // Changed port from 3000 to 3001 to match your backend
        const response = await fetch('http://localhost:3001/api/testimonials');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching testimonials:', err);
        
        // Fallback data if API fails
        setTestimonials([
          {
            id: 1,
            name: "David Lee",
            role: "Computer Science Student",
            quote: "The leadership program completely transformed my confidence and skills. I'm now leading my own project team!",
            rating: 5,
            avatar: "/images/testimonials/david-lee.jpg"
          },
          {
            id: 2,
            name: "Sarah Johnson",
            role: "Engineering Student",
            quote: "The research opportunities helped me secure an internship at a top tech company. Incredible experience!",
            rating: 5,
            avatar: "/images/testimonials/sarah-johnson.jpg"
          },
          {
            id: 3,
            name: "Michael Chen",
            role: "Business Student",
            quote: "The community service projects gave me real-world experience that complements my academic studies perfectly.",
            rating: 5,
            avatar: "/images/testimonials/michael-chen.jpg"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } w-5 h-5`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
            <div className="flex justify-center space-x-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm w-96">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && testimonials.length === 0) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-red-600 mb-4">
            <p>Unable to load testimonials: {error}</p>
            <p className="text-sm text-gray-600 mt-2">Please check if the backend server is running on port 3001</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HiLightningBolt className="text-blue-600 w-6 h-6 mr-2" />
            <span className="text-sm font-medium text-gray-600">
              Rated 4.9/5 by 500+ students
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Hear from students who have transformed their university experience through our activities
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-gray-900"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-gray-900"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-3"
                >
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Current testimonial */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff&size=150`}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4 object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff&size=150`;
                          }}
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role || testimonial.position}
                          </p>
                        </div>
                        <div className="ml-auto flex space-x-1">
                          {renderStars(testimonial.rating || 5)}
                        </div>
                      </div>
                      <blockquote className="text-gray-700 leading-relaxed italic">
                        "{testimonial.quote || testimonial.comment}"
                      </blockquote>
                    </div>

                    {/* Next testimonial preview */}
                    {testimonials[(currentIndex + 1) % testimonials.length] && (
                      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 opacity-75 hidden md:block">
                        <div className="flex items-center mb-6">
                          <img
                            src={testimonials[(currentIndex + 1) % testimonials.length].avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[(currentIndex + 1) % testimonials.length].name)}&background=6366f1&color=fff&size=150`}
                            alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[(currentIndex + 1) % testimonials.length].name)}&background=6366f1&color=fff&size=150`;
                            }}
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {testimonials[(currentIndex + 1) % testimonials.length].name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {testimonials[(currentIndex + 1) % testimonials.length].role || testimonials[(currentIndex + 1) % testimonials.length].position}
                            </p>
                          </div>
                          <div className="ml-auto flex space-x-1">
                            {renderStars(testimonials[(currentIndex + 1) % testimonials.length].rating || 5)}
                          </div>
                        </div>
                        <blockquote className="text-gray-700 leading-relaxed italic text-sm">
                          "{testimonials[(currentIndex + 1) % testimonials.length].quote || testimonials[(currentIndex + 1) % testimonials.length].comment}"
                        </blockquote>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialshome;