import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaQuestionCircle } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm your UMP assistant. How can I help you today?", 
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base for the AI assistant
  const knowledgeBase = {
    "sports": {
      questions: [
        "What sports are available?",
        "How do I join a sports team?",
        "When are sports practices?"
      ],
      answers: [
        "We offer football, rugby, tennis, and track & field. You can see all available sports on the Sports page.",
        "You can join a sports team by clicking the 'Join Now' button on the specific sport's card.",
        "Practice schedules vary by sport. Please contact the specific sports club for their practice times."
      ]
    },
    "societies": {
      questions: [
        "What societies can I join?",
        "How do I start a new society?",
        "When do societies meet?"
      ],
      answers: [
        "We have Debate Society, Drama Society, ICT Leaders Network and more. Check the Societies page for full list.",
        "To start a new society, you need at least 10 interested students and a faculty advisor. Contact student services for details.",
        "Meeting times vary by society. Check with each society for their schedule."
      ]
    },
    "politics": {
      questions: [
        "What political parties are on campus?",
        "How do I join a political party?",
        "Can I start my own political group?"
      ],
      answers: [
        "We currently have SASCO and EFFSC as registered student political organizations.",
        "You can join by clicking the 'Join Now' button on the party's card to access their membership form.",
        "Yes, you can start a new political group with at least 15 members and approval from student governance."
      ]
    },
    "general": {
      questions: [
        "How do I contact student services?",
        "Where is the student center?",
        "What are the library hours?"
      ],
      answers: [
        "You can contact student services at 013 002 0001 or email info@ump.ac.za.",
        "The student center is located next to the main cafeteria on both campuses.",
        "Library hours are 8am-8pm weekdays and 9am-2pm on weekends during term time."
      ]
    }
  };

  // Predefined FAQ questions
  const faqQuestions = [
    ...knowledgeBase.sports.questions,
    ...knowledgeBase.societies.questions,
    ...knowledgeBase.politics.questions,
    ...knowledgeBase.general.questions
  ];

  // Function to find the best answer
  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Check sports questions
    for (let i = 0; i < knowledgeBase.sports.questions.length; i++) {
      if (lowerQuestion.includes(knowledgeBase.sports.questions[i].toLowerCase())) {
        return knowledgeBase.sports.answers[i];
      }
    }
    
    // Check societies questions
    for (let i = 0; i < knowledgeBase.societies.questions.length; i++) {
      if (lowerQuestion.includes(knowledgeBase.societies.questions[i].toLowerCase())) {
        return knowledgeBase.societies.answers[i];
      }
    }
    
    // Check politics questions
    for (let i = 0; i < knowledgeBase.politics.questions.length; i++) {
      if (lowerQuestion.includes(knowledgeBase.politics.questions[i].toLowerCase())) {
        return knowledgeBase.politics.answers[i];
      }
    }
    
    // Check general questions
    for (let i = 0; i < knowledgeBase.general.questions.length; i++) {
      if (lowerQuestion.includes(knowledgeBase.general.questions[i].toLowerCase())) {
        return knowledgeBase.general.answers[i];
      }
    }
    
    // Default response if no match found
    return "I'm sorry, I don't have information about that. You can try rephrasing your question or contact student services at 013 002 0001 for assistance.";
  };

  // Add a new message to the chat
  const addMessage = (text, isUser) => {
    setMessages(prev => [...prev, { 
      text, 
      isUser, 
      timestamp: new Date() 
    }]);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = inputValue.trim();
      addMessage(userMessage, true);
      setInputValue('');
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        const response = findAnswer(userMessage);
        addMessage(response, false);
        setIsLoading(false);
      }, 800);
    }
  };

  // Handle clicking on a FAQ question
  const handleFaqClick = (question) => {
    addMessage(question, true);
    setIsLoading(true);
    
    setTimeout(() => {
      const response = findAnswer(question);
      addMessage(response, false);
      setIsLoading(false);
    }, 800);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle keyboard input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#27285C] text-white flex items-center justify-center shadow-lg hover:bg-[#1a1c42] transition-colors"
      >
        <FaRobot className="text-2xl" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-[#27285C] text-white p-3 font-bold flex justify-between items-center">
            <span>UMP Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes />
            </button>
          </div>
          
          <div className="h-72 overflow-y-auto p-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 p-3 rounded-lg max-w-[80%] ${msg.isUser ? 'ml-auto bg-blue-100 rounded-br-none' : 'mr-auto bg-[#27285C] text-white rounded-bl-none'}`}
              >
                {msg.text}
                <div className={`text-xs mt-1 ${msg.isUser ? 'text-blue-800' : 'text-gray-300'}`}>
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-[#27285C] text-white rounded-bl-none p-3 max-w-[80%]">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* FAQ Suggestions */}
          {messages.length <= 1 && (
            <div className="px-3 pb-2">
              <h4 className="text-xs font-semibold text-gray-500 mb-1">TRY ASKING:</h4>
              <div className="grid grid-cols-2 gap-2">
                {faqQuestions.slice(0, 4).map((question, i) => (
                  <button
                    key={i}
                    onClick={() => handleFaqClick(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded text-left truncate"
                    title={question}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about UMP..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-[#27285C] text-white px-4 rounded-r-lg hover:bg-[#1a1c42] transition-colors disabled:opacity-50"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;