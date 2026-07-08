"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: "ai", 
      text: "Hi! I&apos;m Azad &apos; s AI assistant. Ask me anything about his projects, skills, or experience!" 
    },
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Jab bhi naya message aaye, chat screen automatically scroll ho jaye down
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();

      if (data.text) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.text }]);
      } else {
        setMessages((prev) => [...prev, { sender: "ai", text: "Something went wrong. Please try again." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Network error. Connection check kijiye." + error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. Floating Action Button (FAB) */}
      {/* 1. Floating Action Button (FAB) with AI Star Icon */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="w-14 h-14 rounded-full bg-[#4285F4] hover:bg-[#2B76E9] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95"
>
  {isOpen ? (
    // Close Icon (Jab chat open ho)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    // Premium AI Star / Sparkle Icon (Jab chat closed ho)
    <svg 
      className="w-7 h-7 fill-current text-white animate-pulse" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L14.85 8.65L21.5 11.5L14.85 14.35L12 21L9.15 14.35L2.5 11.5L9.15 8.65L12 2Z" />
      <path d="M19 3L19.71 4.71L21.43 5.43L19.71 6.14L19 7.86L18.29 6.14L16.57 5.43L18.29 4.71L19 3Z" opacity="0.8" />
      <path d="M5 17L5.5 18.2L16.7 18.7L15.5 19.2L15 20.4L14.5 19.2L13.3 18.7L14.5 18.2L15 17Z" opacity="0.6" />
    </svg>
  )}
</button>

      {/* 2. Chat Window Popup */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[320px] md:w-[380px] h-[480px] bg-[#0A0A0A] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header Bar */}
          <div className="p-4 bg-[#141414] border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-medium text-sm">Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xs">
              Hide
            </button>
          </div>

          {/* Messages Container Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#4285F4] text-white rounded-tr-none shadow-md"
                      : "bg-[#161616] text-gray-200 rounded-tl-none border border-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading / Typing Animation indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#161616] text-gray-400 px-4 py-2.5 rounded-2xl rounded-tl-none border border-gray-800 text-xs flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Action Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#141414] border-t border-gray-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something about Azad..."
              className="flex-1 bg-[#0A0A0A] border border-gray-800 text-white rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#4285F4] placeholder-gray-600 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#4285F4] hover:bg-[#2B76E9] disabled:opacity-30 disabled:hover:bg-[#4285F4] text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
            >
              Send
            </button>
          </form>

        </div>
      )}
    </div>
  );
};