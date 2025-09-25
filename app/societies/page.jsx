"use client"
import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaChevronDown, FaRobot, FaTimes, FaPaperPlane, FaFacebook, FaInstagram } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AIAssistant from '@/components/AIAssistant';

export default function SocietiesPage() {

  
  // Societies filtering state
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideshowInterval = useRef(null);
  
  // AI Assistant state
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { text: "Hello! I'm your UMP assistant. How can I help you today?", isUser: false }
  ]);
  const [aiInput, setAiInput] = useState('');
  const messagesEndRef = useRef(null);

  // Societies data
  const societiesData = [
    {
      name: "Debate Society",
      type: "Cultural & Language",
      description: "It promotes academic dialogues and engagements amongst students. Also accords student with opportunities to represent the University in national and international debating competitions.",
      image: "/debate.avif",
      page: "/societies/debate"
    },
    {
      name: "Drama Society",
      type: "Creative & Performing Arts",
      description: "To educate and portray societal issues within and outside the borders of the University of Mpumalanga. To entertain and create a holistic atmosphere for all students at the University of Mpumalanga.",
      image: "/drama.webp",
      page: "/societies/drama"
    },
    {
      name: "Thrive Student Society",
      type: "Social Impact & Volunteering",
      description: "To help UMP students thrive spiritually, physically, emotionally, academically and personally while at university.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      page: "/societies/thrive"
    },
    {
      name: "ICT Leaders Network",
      type: "Pre-Professional",
      description: "To create a collaborative community where students learn emerging technologies beyond the classroom, work on innovative projects together, and discovering career opportunities.",
      image: "/ict.avif",
      page: "/societies/ict"
    }
  ];

  // Slideshow images
  const slideshowImages = [
    "/sGBV.jpg",
    "/umpAfrica.jpg",
    "/Image S.jpg"
  ];

  // FAQ questions for AI
  const faqQuestions = [
    "How do I apply for activities?",
    "Where can I find upcoming events?",
    "How do I contact student services?",
    "What sports clubs are available?"
  ];

  // Filter societies based on selected filter and search term
  const filteredSocieties = societiesData.filter(society => {
    const matchFilter = filter === 'all' || society.type === filter;
    const matchSearch = society.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      society.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  // Slideshow functions
  const startAutoSlide = () => {
    slideshowInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideshowImages.length);
    }, 3000);
  };

  const goToSlide = (index) => {
    clearInterval(slideshowInterval.current);
    setCurrentSlide(index);
    startAutoSlide();
  };

  const getSlideClass = (index) => {
    const position = (index - currentSlide + slideshowImages.length) % slideshowImages.length;
    
    if (position === 0) return 'w-full h-72 md:h-80 object-cover rounded-xl shadow-lg transform scale-105 z-10';
    if (position === 1 || position === slideshowImages.length - 1) return 'w-36 h-48 object-cover rounded-lg opacity-70 z-0';
    return 'hidden';
  };

  // AI Assistant functions
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('apply') || lowerMessage.includes('application')) {
      return "To apply for activities, visit the 'Activities' section, select your preferred activity, and complete the online form. Make sure to submit before the deadline!";
    } else if (lowerMessage.includes('event') || lowerMessage.includes('calendar')) {
      return "You can find all upcoming events in the 'Events' section of our website. It's updated regularly with dates, times, and locations.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('help')) {
      return "For assistance, you can contact Student Services at 013 002 0001 or email info@ump.ac.za. Our office hours are 8am-4pm weekdays.";
    } else if (lowerMessage.includes('sport') || lowerMessage.includes('club')) {
      return "We offer various sports clubs and societies. Check the 'Category' dropdown menu to explore all available options.";
    } else if (lowerMessage.includes('faq') || lowerMessage.includes('question')) {
      return "Our FAQ section has answers to common questions. You can find it in the main navigation menu.";
    } else {
      return "I can help with information about applications, events, sports clubs, and more. Try asking about these topics or visit our website sections for detailed information.";
    }
  };

  const handleSendMessage = () => {
    if (aiInput.trim()) {
      const newUserMessage = { text: aiInput, isUser: true };
      setAiMessages(prev => [...prev, newUserMessage]);
      setAiInput('');
      
      setTimeout(() => {
        const response = getBotResponse(aiInput);
        setAiMessages(prev => [...prev, { text: response, isUser: false }]);
      }, 800);
    }
  };

  const handleFaqClick = (question) => {
    setAiMessages(prev => [...prev, { text: question, isUser: true }]);
    
    setTimeout(() => {
      const response = getBotResponse(question);
      setAiMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 800);
  };

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiMessages]);

  // Initialize slideshow
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideshowInterval.current);
  }, []);

  return (
    <>
      
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex-1">
              <div className="mb-8 md:mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 leading-tight">
                  Choose Your Societies,<br />Fuel Your Passion!
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  The future belongs to those who believe in the beauty of their dreams.<br />Find Your Fit
                </p>
              </div>
              
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search your Societies..."
                  className="w-full px-6 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  className={`px-5 py-2 rounded-full shadow-sm ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button
                  className={`px-5 py-2 rounded-full shadow-sm ${filter === 'Cultural & Language' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setFilter('Cultural & Language')}
                >
                  Cultural & Language
                </button>
                <button
                  className={`px-5 py-2 rounded-full shadow-sm ${filter === 'Creative & Performing Arts' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setFilter('Creative & Performing Arts')}
                >
                  Creative & Performing Arts
                </button>
                <button
                  className={`px-5 py-2 rounded-full shadow-sm ${filter === 'Social Impact & Volunteering' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setFilter('Social Impact & Volunteering')}
                >
                  Social Impact & Volunteering
                </button>
                <button
                  className={`px-5 py-2 rounded-full shadow-sm ${filter === 'Pre-Professional' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setFilter('Pre-Professional')}
                >
                  Pre-Professional
                </button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-start pt-12 md:pt-16">
              {/* Slideshow */}
              <div className="relative w-full max-w-4xl mx-auto overflow-hidden flex items-center justify-center h-80">
                <div className="flex items-center gap-4 transition-transform duration-500 ease-in-out">
                  {slideshowImages.map((img, index) => (
                    <img 
                      key={index}
                      src={img}
                      className={getSlideClass(index)}
                      alt={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-blue-900 bg-opacity-70'}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Societies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4">
            {filteredSocieties.length > 0 ? (
              filteredSocieties.map((society, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <img src={society.image} className="w-full h-40 object-cover" alt={society.name} />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{society.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                      society.type === 'Cultural & Language' ? 'bg-blue-100 text-blue-800' : 
                      society.type === 'Creative & Performing Arts' ? 'bg-purple-100 text-purple-800' :
                      society.type === 'Social Impact & Volunteering' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {society.type}
                    </span>
                    <p className="text-gray-600 text-sm mt-2 mb-4">{society.description}</p>
                    <a href={society.page} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                      Join Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-600">No societies found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Assistant 
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
                  className={`mb-3 p-3 rounded-lg max-w-[80%] ${msg.isUser ? 'ml-auto bg-blue-100 rounded-br-none' : 'mr-auto bg-[#27285C] text-white rounded-bl-none'}`}
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
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
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
      </div>*/}
      <AIAssistant/>

      {/* Footer */}
      <Footer/>
    </>
  );
}