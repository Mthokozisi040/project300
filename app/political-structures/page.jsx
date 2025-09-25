"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaRobot,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PoliticalStructuresPage() {
  // Parties filtering state
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowInterval = useRef(null);
 
  // AI Assistant state
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      text: "Hello! I'm your UMP assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [aiInput, setAiInput] = useState("");
  const messagesEndRef = useRef(null);

  // Parties data
  const partiesData = [
    {
      name: "South African Students Congress (SASCO)",
      type: "student",
      description: "Advocates for student rights and transformation in higher education.",
      image: "/sasco pic.jpg",
      page: "/political-structures/sasco",
    },
    {
      name: "Economic Freedom Fighters Student Command (EFFSC)",
      type: "student",
      description: "Promotes economic freedom and student activism on campus.",
      image: "/eff.jpg",
      page: "/political-structures/eff",
    },
    {
      name: "Student Representative Council (SRC)",
      type: "student",
      description: "The official student governance body representing all students at UMP.",
      image: "/srcpic.jpg",
      page: "/political-structures/src",
    },
  ];

  // Slideshow images
  const slideshowImages = [
    "/holder.jpg",
    "/sasco pic.jpg",
    "/eff.jpg",
    "/slide1.jpg"
  ];

  // FAQ questions for AI
  const faqQuestions = [
    "How do I apply for activities?",
    "Where can I find upcoming events?",
    "How do I contact student services?",
    "What sports clubs are available?",
  ];

  // Filter parties based on selected filter and search term
  const filteredParties = partiesData.filter((party) => {
    const matchFilter = filter === "all" || party.type === filter;
    const matchSearch =
      party.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      party.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  // Slideshow functions
  useEffect(() => {
    slideshowInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(slideshowInterval.current);
  }, [slideshowImages.length]);

  const goToSlide = (index) => {
    clearInterval(slideshowInterval.current);
    setCurrentSlide(index);
    slideshowInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
  };

  // AI Assistant functions
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("apply") || lowerMessage.includes("application")) {
      return "To apply for activities, visit the 'Activities' section, select your preferred activity, and complete the online form. Make sure to submit before the deadline!";
    } else if (lowerMessage.includes("event") || lowerMessage.includes("calendar")) {
      return "You can find all upcoming events in the 'Events' section of our website. It's updated regularly with dates, times, and locations.";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("help")) {
      return "For assistance, you can contact Student Services at 013 002 0001 or email info@ump.ac.za. Our office hours are 8am-4pm weekdays.";
    } else if (lowerMessage.includes("sport") || lowerMessage.includes("club")) {
      return "We offer various sports clubs and societies. Check the 'Category' dropdown menu to explore all available options.";
    } else if (lowerMessage.includes("faq") || lowerMessage.includes("question")) {
      return "Our FAQ section has answers to common questions. You can find it in the main navigation menu.";
    } else {
      return "I can help with information about applications, events, sports clubs, and more. Try asking about these topics or visit our website sections for detailed information.";
    }
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

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex-1">
              <div className="mb-8 md:mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 leading-tight">
                  Choose Your Political Party,<br />Shape Your Future!
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  Explore campus political organizations.<br />Find Your Voice
                </p>
              </div>

              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Political Party..."
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors pl-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  className={`px-5 py-2 rounded-full shadow-sm ${
                    filter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-800"
                  }`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-start pt-12 md:pt-16">
              <div className="relative w-full max-w-4xl mx-auto h-80 overflow-hidden rounded-xl">
                {/* Slideshow container */}
                <div className="relative w-full h-full">
                  {slideshowImages.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {filteredParties.length > 0 ? (
              filteredParties.map((party, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 mx-auto w-80"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={party.image}
                      alt={party.name}
                      fill
                      style={{ objectFit: "cover" }} 
                      className="rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{party.name}</h3>
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      {party.type.charAt(0).toUpperCase() + party.type.slice(1)}
                    </span>
                    <p className="text-gray-600 text-xs mt-2 mb-3">{party.description}</p>
                    <button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                      onClick={() => window.open(party.page, "_blank")}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                {searchTerm.trim() !== "" ? (
                  <>
                    <p className="text-gray-600 mb-2">
                      Political party "<strong>{searchTerm}</strong>" is not available.
                    </p>
                    <p className="text-gray-400 text-sm">Available parties: SASCO, EFF, and SRC</p>
                  </>
                ) : (
                  <p className="text-gray-600">No political parties found matching your criteria.</p>
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
              <span>UMP Assistant</span>
              <button onClick={() => setIsAIOpen(false)} className="text-white">
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
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything about UMP..."
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