import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "./prompt";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is empty" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Call Google's official developer endpoint directly
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 300, // Keeps the responses fast and saves your free quota tokens
          },
        }),
      }
    );

    const data = await response.json();
    
    // Parse out the clean text string returned from Gemini
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't parse that response.";

    return NextResponse.json({ text: replyText });
  } catch (error) {
    console.error("Free API Chat error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}