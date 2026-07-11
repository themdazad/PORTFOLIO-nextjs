"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, CornerDownLeft } from "lucide-react";
import gsap from "gsap";

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
      text: "Hello! How can I help you today?" 
    },
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // GSAP: Window Drop-down and Pop-up animation
  useEffect(() => {
    if (!windowRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        windowRef.current,
        { opacity: 0, scale: 0.92, y: 30, pointerEvents: "none" },
        { 
          opacity: 1, 
          scale: 1, 
          y: -16, 
          pointerEvents: "auto",
          duration: 0.35, 
          ease: "power3.out" 
        }
      );
    } else {
      gsap.to(windowRef.current, {
        opacity: 0,
        scale: 0.94,
        y: 20,
        pointerEvents: "none",
        duration: 0.25,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  // GSAP: Micro-interactions for Floating Action Button
  const handleFABHover = () => {
    if (!isOpen) {
      gsap.to(fabRef.current, { scale: 1.06, y: -2, duration: 0.2, ease: "power2.out" });
      gsap.to(".custom-star-mesh", { rotate: 12, duration: 0.3, ease: "power1.out" });
    }
  };

  const handleFABLeave = () => {
    gsap.to(fabRef.current, { scale: 1, y: 0, duration: 0.2, ease: "power2.inOut" });
    gsap.to(".custom-star-mesh", { rotate: 0, duration: 0.3, ease: "power1.out" });
  };

  // HANDLER: Sends standard payload and hooks up actual tab redirects
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

      // --- CRITICAL FIX: Intercept the navigation command and trigger the browser action ---
      if (data.action === "trigger_navigation" && Array.isArray(data.urls)) {
        data.urls.forEach((url: string) => {
          window.open(url, "_blank", "noopener,noreferrer");
        });
      }

      if (data.text) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.text }]);
      } else {
        setMessages((prev) => [...prev, { sender: "ai", text: "Something went wrong." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Network error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 font-sans antialiased `}>
      
      {/* 1. Floating Action Button (FAB) */}
      <button
        ref={fabRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleFABHover}
        onMouseLeave={handleFABLeave}
        className="w-14 h-14 rounded-full bg-gradient-to-b from-[#4285F4] to-[#2B76E9] text-white flex items-center justify-center shadow-[0_8px_32px_rgba(66,133,244,0.4)] cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <div className="custom-star-mesh flex items-center justify-center">
            <svg 
              className="w-7 h-7 fill-current text-white animate-pulse" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L14.85 8.65L21.5 11.5L14.85 14.35L12 21L9.15 14.35L2.5 11.5L9.15 8.65L12 2Z" />
              <path d="M19 3L19.71 4.71L21.43 5.43L19.71 6.14L19 7.86L18.29 6.14L16.57 5.43L18.29 4.71L19 3Z" opacity="0.8" />
              <path d="M5 17L5.5 18.2L16.7 18.7L15.5 19.2L15 20.4L14.5 19.2L13.3 18.7L14.5 18.2L15 17Z" opacity="0.6" />
            </svg>
          </div>
        )}
      </button>

      {/* 2. macOS Glassmorphic Panel Window */}
      <div
        ref={windowRef}
        style={{ opacity: 0, scale: 0.92, pointerEvents: "none" }}
        className="absolute bottom-16 right-0 w-[330px] md:w-[380px] h-[530px] flex flex-col overflow-hidden rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.4)] transition-colors duration-300
          bg-white/70 dark:bg-neutral-900/75 backdrop-blur-xl 
          border border-white/40 dark:border-neutral-800/80"
      >
        {/* macOS Top Header Bar */}
        <div className="p-3 flex items-center justify-between select-none bg-neutral-100/50 dark:bg-neutral-950/40 border-b border-neutral-200/50 dark:border-neutral-800/50">
          <div className="font-mono text-[11px] tracking-wide flex items-center gap-1.5 bg-neutral-200/50 dark:bg-neutral-900/60 px-3 py-1 rounded-md border border-neutral-300/30 dark:border-neutral-800/40 text-neutral-600 dark:text-neutral-400">
            <span>@themdazad:</span>
            <span className="text-blue-500 dark:text-indigo-400">~/assistant</span>
          </div>
        </div>

        {/* Chat Messages Dynamic Stream Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800 scrollbar-track-transparent">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[83%] px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm tracking-wide transition-colors duration-200 ${
                  msg.sender === "user"
                    ? "bg-gradient-to-b from-blue-500 to-blue-600 dark:from-indigo-500 dark:to-indigo-600 text-white rounded-2xl rounded-tr-sm"
                    : "bg-white/80 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-100 rounded-2xl rounded-tl-sm border border-neutral-200/60 dark:border-neutral-800/60"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Active Typing Wave Loader */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/80 dark:bg-neutral-900/90 border border-neutral-200/60 dark:border-neutral-800/60 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Command Line Form Bar */}
        <form 
          onSubmit={handleSendMessage} 
          className="p-3 bg-neutral-100/40 dark:bg-neutral-950/40 border-t border-neutral-200/50 dark:border-neutral-900 flex gap-2 items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me something..."
            className="flex-1 bg-white/60 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 dark:focus:border-neutral-700 placeholder-neutral-400 dark:placeholder-neutral-600 transition-colors font-mono"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 disabled:opacity-30 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[11px] font-mono tracking-tight transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>enter</span>
            <CornerDownLeft className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
          </button>
        </form>

      </div>
    </div>
  );
};