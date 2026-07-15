"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star } from 'lucide-react';

export default function Feedbackform() {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Agar user ne rating nahi di ya text bahut chota hai, toh call mat karo
    if (feedback.trim().length < 4 || rating === 0) {
      setSuggestions([]);
      return;
    }

    // Debounce Mechanism: User ke typing rokne ke 500ms baad hi API hit hogi
    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating, text: feedback }),
        });
        
        if (response.ok) {
          const data = await response.json();
          setSuggestions(data.suggestions || []);
        }
      } catch (error) {
        console.error('Failed to fetch AI suggestions:', error);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    // Agar user firse type karta hai, toh pichla timeout cancel ho jayega
    return () => clearTimeout(delayDebounceFn);
  }, [feedback, rating]);

  const handleSuggestionClick = (suggestion: string): void => {
    // Selection par content replace hoga
    setFeedback(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="mx-auto bg-[#F0F4F9] dark:bg-neutral-950 p-1.5 rounded-[28px] shadow-2xl border border-neutral-200/50 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="bg-white dark:bg-neutral-900 rounded-[22px] p-6 space-y-6">
        
        {/* Header Block (A) */}
        <div className="max-w-md mx-auto text-center mb-8">
            <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
              Leave your feedback
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Tested this project? Start typing custom feedback to trigger context-aware AI completions!
            </p>
          </div>

       

        {/* Rating Selector (C) - Restored original 1-5 Star Selection with premium hover */}
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Give rating
          </p>
          <div className="flex justify-center gap-2.5">
            {([1, 2, 3, 4, 5] as const).map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="text-4xl transition-transform active:scale-90 hover:scale-110 duration-200 cursor-pointer"
              >
                {star <= rating ?  <Star className='text-white rounded-full bg-yellow-400 p-1'/> : <Star/>}
              </button>
            ))}
          </div>
        </div>

        {/* AI Quick Suggestions Horizontal Strip */}
        <div className="min-h-[42px] flex flex-col justify-end">
          {suggestions.length > 0 && (
            <div className="animate-fade-in space-y-1.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-[#2B76E9] dark:text-blue-400 uppercase tracking-wider">
                  ✨ AI SUGGESTIONS
                </p>
                {isLoading && (
                  <div className="text-[10px] text-[#2B76E9] dark:text-blue-400 flex items-center gap-1 font-medium animate-pulse">
                    <span className="w-1 h-1 rounded-full bg-[#4285F4] dark:bg-blue-500 animate-ping"></span>
                    Thinking...
                  </div>
                )}
              </div>
              
              {/* Horizontal Scrollable Row */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="whitespace-nowrap shrink-0 text-xs text-neutral-700 dark:text-neutral-300 bg-[#EBF3FE]/80 dark:bg-blue-950/30 hover:bg-[#D3E3FD] dark:hover:bg-blue-900/50 border border-[#D3E3FD] dark:border-blue-900/40 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer shadow-3xs"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Textarea Block (E) */}
        <div className="space-y-2">
          <label htmlFor="feedback" className="block text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Additional Feedback
          </label>
          <div className="relative">
            <textarea
              id="feedback"
              rows={4}
              value={feedback}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFeedback(e.target.value)}
              placeholder={rating > 0 ? "Write your comment here." : "Please select a rating first..."}
              disabled={rating === 0}
              className="w-full p-3.5 border border-neutral-300 dark:border-neutral-700 bg-transparent dark:text-neutral-100 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#4285F4] dark:focus:ring-blue-600 disabled:bg-neutral-50 dark:disabled:bg-neutral-950/50 transition-all duration-350 resize-none text-sm placeholder:text-neutral-400"
            />
            {/* Dynamic Character Count */}
            <div className="text-right text-[11px] text-neutral-400 mt-1">
              {feedback.length}/100
            </div>
          </div>
        </div>

        {/* Action Button (F) */}
        <button
          type="button"
          disabled={rating === 0 || feedback.trim() === ''}
          className="w-full bg-[#4285F4] hover:bg-[#3572D6] dark:bg-blue-600 dark:hover:bg-blue-700 text-white disabled:bg-[#D3E3FD] dark:disabled:bg-neutral-800 disabled:text-[#041E49]/50 dark:disabled:text-neutral-600 font-bold py-3 rounded-xl transition-all duration-250 cursor-pointer shadow-sm text-sm"
        >
          Submit Feedback
        </button>

      </div>
    </div>
  );
}