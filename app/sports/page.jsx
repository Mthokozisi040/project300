"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import {
  FaSearch,
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SportsPage() {
  // State
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      text: "Hello! I'm your UMP assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [aiInput, setAiInput] = useState("");
  const messagesEndRef = useRef(null);

  // Slideshow images for sports
  const slides = [
    "url('gallery6soccer.jpg')",
    "url('INDEGENEOUS GAMES.jpeg')",
    "url('gallerynet2.jpg')",
    "url('pic25.jpg')",
    "url('netballhome.jpg')",
    "url('VOLLEYBALL.jpeg')",
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // FAQ questions for AI
  const faqQuestions = [
    "How do I apply for sports activities?",
    "Where can I find upcoming sports events?",
    "How do I contact sports department?",
    "What sports facilities are available?",
  ];

  // Fetch sports data from database
  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/api/sports");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setSportsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSportsData();
  }, []);

  // Filter sports
  const filteredSports = sportsData.filter((sport) => {
    const matchFilter = filter === "all" || sport.type === filter;
    const matchSearch =
      sport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sport.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  // AI Assistant functions
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("apply") || lowerMessage.includes("application"))
      return "To apply for sports activities, visit the 'Sports' section, select your preferred sport, and complete the registration form. Make sure to submit your medical clearance!";
    if (lowerMessage.includes("event") || lowerMessage.includes("calendar"))
      return "You can find all upcoming sports events in the 'Events' section. Check our sports calendar for tournaments, matches, and training schedules.";
    if (lowerMessage.includes("contact") || lowerMessage.includes("help"))
      return "For sports-related inquiries, contact the Sports Department at 013 002 0001 ext. 123 or email sports@ump.ac.za. Office hours are 8am-4pm weekdays.";
    if (lowerMessage.includes("sport") || lowerMessage.includes("club") || lowerMessage.includes("facility"))
      return "We offer various sports facilities including gym, swimming pool, tennis courts, and football fields. Check the sports categories to explore all available options.";
    if (lowerMessage.includes("faq") || lowerMessage.includes("question"))
      return "Our Sports FAQ section has answers to common questions about registration, facilities, and teams. Visit the sports office for more information.";
    return "I can help with information about sports registration, facilities, events, and teams. Try asking about these topics or visit our sports department for detailed information.";
  };

  const handleSendMessage = () => {
    if (aiInput.trim()) {
      const newUserMessage = { text: aiInput, isUser: true };
      setAiMessages((prev) => [...prev, newUserMessage]);
      setAiInput("");
      setTimeout(() => {
        const response = getBotResponse(aiInput);
        setAiMessages((prev) => [...prev, { text: response, isUser: false }]);
      }, 800);
    }
  };

  const handleFaqClick = (question) => {
    setAiMessages((prev) => [...prev, { text: question, isUser: true }]);
    setTimeout(() => {
      const response = getBotResponse(question);
      setAiMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages]);

  return (
    <>
      <Head>
        <title>Sports & Activities | University of Mpumalanga</title>
        <meta
          name="description"
          content="Explore sports and activities at University of Mpumalanga. Join teams, develop skills, and enhance your university experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      {/* Hero Slideshow Section - Same template as HeroHomepage */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: slide }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-30 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Choose Your Sport,<br />
            Fuel Your Passion!<br />
            Promoting Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
            From football to swimming, discover your perfect fit and join our winning teams.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('sports-content').scrollIntoView({ behavior: 'smooth' })}
              className="text-white px-6 py-3 rounded hover:bg-blue-800" 
              style={{ backgroundColor: 'rgba(0, 47, 104, 1)' }}
            >
              Explore Sports
            </button>
            <button 
              onClick={() => document.getElementById('sports-content').scrollIntoView({ behavior: 'smooth' })}
              className="border border-white text-white px-6 py-3 rounded hover:bg-gray-300 hover:text-gray-900"
            >
              Join Now
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Sports Content Section */}
      <main id="sports-content" className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search and Filter Section */}
          <div className="mb-12 text-center">
            <div className="mb-8 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search your sport..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["all", "team", "individual"].map((type) => (
                <button
                  key={type}
                  className={`px-6 py-3 rounded-full shadow-sm transition-colors text-lg font-medium ${
                    filter === type
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                  onClick={() => setFilter(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Sports
                </button>
              ))}
            </div>
          </div>

          {/* Sports Grid */}
          <div className="mt-12">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center">
                  <FaSpinner className="animate-spin text-blue-600 text-2xl mr-3" />
                  <span className="text-gray-600 text-lg">Loading sports data...</span>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-500 text-lg">Error loading sports: {error}</p>
                <p className="text-gray-600 mt-2">
                  Please try again later or contact support.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredSports.length > 0 ? (
                  filteredSports.map((sport, index) => (
                    <div
                      key={sport.id || index}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <img
                        src={sport.image}
                        className="w-full h-48 object-cover"
                        alt={sport.name}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {sport.name}
                        </h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            sport.type === "team"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {sport.type?.charAt(0).toUpperCase() +
                            sport.type?.slice(1)} Sport
                        </span>
                        <p className="text-gray-600 mt-3 mb-4 line-clamp-2">
                          {sport.description}
                        </p>
                        <a
                          href={sport.page}
                          className="inline-block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Join Now
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-600 text-xl">
                      No sports found matching your criteria.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Assistant */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsAIOpen(!isAIOpen)}
          className="w-16 h-16 rounded-full bg-[#27285C] text-white flex items-center justify-center shadow-lg hover:bg-[#1a1c42] transition-colors"
        >
          <FaRobot className="text-2xl" />
        </button>
        {isAIOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-[#27285C] text-white p-3 font-bold flex justify-between items-center">
              <span>UMP Sports Assistant</span>
              <button
                onClick={() => setIsAIOpen(false)}
                className="text-white"
              >
                <FaTimes />
              </button>
            </div>
            <div className="h-72 overflow-y-auto p-3 bg-gray-50">
              {aiMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                    msg.isUser
                      ? "ml-auto bg-blue-100 rounded-br-none"
                      : "mr-auto bg-[#27285C] text-white rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  {!msg.isUser && index === 0 && (
                    <div className="mt-2 space-y-2">
                      {faqQuestions.map((question, i) => (
                        <div
                          key={i}
                          className="p-2 text-sm bg-white bg-opacity-20 rounded cursor-pointer hover:bg-opacity-30 border border-white border-opacity-30"
                          onClick={() => handleFaqClick(question)}
                        >
                          {question}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-gray-200 flex">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about sports at UMP..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#27285C] text-white px-4 rounded-r-lg hover:bg-[#1a1c42] transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}