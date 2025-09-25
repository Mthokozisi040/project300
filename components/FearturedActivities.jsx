"use client"
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import ActivityCard from "./ActivityCard";
import ActivityDetails from "./ActivityDetails";

const FeaturedActivities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      id: 1,
      course: "All students",
      title: "Soccer",
      location: "campus",
      description: "Connect with industry leaders and explore career opportunities",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      course: "All students", 
      title: "Tsonga Society",
      location: "campus",
      description: "Connect with industry leaders and explore career opportunities",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      course: "All students",
      title: "Choir", 
      location: "campus",
      description: "Connect with industry leaders and explore career opportunities",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      course: "All students",
      title: "Tennis",
      location: "online",
      description: "Hands-on machine learning and artificial intelligence training",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      course: "ALl students",
      title: "chess",
      location: "campus",
      description: "Build and program robots for competitive challenges",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      course: "ALl students",
      title: "Athletics",
      location: "hybrid",
      description: "Create user-centered design solutions in 5 days",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= activities.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, activities.length - 3) : prev - 3));
  };

  const visibleActivities = activities.slice(currentIndex, currentIndex + 3);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 mr-12 ml-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 mb-8 gap-4 px-2">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                
                
                {/* Featured activities with aligned star */}
                <span className="text-black-600 font-medium text-2xl whitespace-nowrap flex items-center">
                <BsStars className="mr-2 text-amber-300" size={20} />
                Featured activities
                </span>
            </div>
            
            <div className="flex gap-2 ml-auto">
                <button 
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                disabled={currentIndex === 0}
                >
                <FiArrowLeft size={20} className={currentIndex === 0 ? "text-gray-400" : "text-gray-600"} />
                </button>
                <button 
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                disabled={currentIndex + 3 >= activities.length}
                >
                <FiArrowRight size={20} className={currentIndex + 3 >= activities.length ? "text-gray-400" : "text-gray-600"} />
                </button>
            </div>
        </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visibleActivities.map((activity, index) => (
          <ActivityCard 
            key={activity.id} 
            activity={activity}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>

      {/* Activity Details Section */}
      <ActivityDetails />
    </div>
  );
};

export default FeaturedActivities;