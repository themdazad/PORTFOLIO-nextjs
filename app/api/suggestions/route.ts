import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Simple initialization in one place
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { rating, text } = await req.json();

    // Agar text khali hai ya rating nahi hai, toh seedhe empty array return karo
    if (!text || text.trim() === '' || rating === undefined) {
      return NextResponse.json({ suggestions: [] });
    }

    // Direct Gemini integration
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
You are an AI writing assistant helping users write authentic feedback for software projects.

The user has started writing a review.

Rating: ${rating}/5
Current review:
"${text}"

Your job is to suggest how the user could continue or improve their review.

Rules:
- Generate EXACTLY 3 suggestions.
- Each suggestion should naturally continue or improve the user's current text.
- Match the tone implied by the rating.
- Suggestions should sound like they were written by a real user, not an AI.
- Focus on aspects such as UI/UX, performance, animations, responsiveness, usability, AI features, reliability, code quality, accessibility, or overall experience.
- Do not repeat the user's existing words.
- Keep each suggestion under 30 words.
- Make every suggestion different.
- Do not use quotation marks.
- Do not use emojis.
- Do not number the suggestions.
- Return ONLY a valid JSON array of strings.

Example:
User:
"The UI feels"

Output:
[
  "modern and incredibly polished.",
  "smooth across every interaction.",
  "clean while remaining highly intuitive."
]
`,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const suggestions = JSON.parse(response.text || '[]');
    return NextResponse.json({ suggestions });

  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ suggestions: [] }, { status: 500 });
  }
}