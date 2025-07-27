"use client"
import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to Fat to Fitness Gym! How can I help you today?", sender: 'bot', timestamp: new Date() }
  ]);

  const whatsappNumber = "+971565565003";

  // Animation effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Create WhatsApp link
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');

    // Clear input
    setMessage('');

    // Add bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I've redirected you to WhatsApp! I'll respond there shortly.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // WhatsApp Logo SVG Component
  const WhatsAppIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
    </svg>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button with WhatsApp Logo */}
      {!isOpen && (
        <div className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
          
          <button
            onClick={toggleChat}
            className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <WhatsAppIcon size={28} />
          </button>
          
          {/* Floating message bubble */}
          <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap animate-bounce">
            💬 Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Chat Popup  */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col transform transition-all duration-300 animate-in slide-in-from-bottom-5 zoom-in-95">
          {/* Header  */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Gym Logo */}
              <div className="bg-white bg-opacity-20 rounded-full p-2 flex items-center justify-center">
                <img 
                  src="/color-logo.png" 
                  alt="Fat to Fitness Gym Logo" 
                  className="w-8 h-8 object-contain rounded-full"
                  onError={(e) => {
                    // Fallback to WhatsApp icon if logo fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div style={{ display: 'none' }}>
                  <WhatsAppIcon size={20} />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">Fat to Fitness Gym</h3>
                </div>
                <p className="text-xs opacity-90 flex items-center">
                  <span className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></span>
                  Online now
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages with smooth scrolling */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} transform transition-all duration-300`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInMessage 0.3s ease-out forwards'
                }}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-green-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md border'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Input Section */}
          <div className="p-4 bg-white border-t rounded-b-2xl">
            <div className="flex space-x-3 items-end">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 bg-gray-50"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className={`rounded-full p-3 transition-all duration-200 transform ${
                  message.trim() 
                    ? 'bg-green-500 hover:bg-green-600 text-white hover:scale-105 active:scale-95' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInMessage {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;