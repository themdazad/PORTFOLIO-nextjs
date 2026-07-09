import { NextResponse } from "next/server";
import { CHATBOT_PROMPT } from "./system_prompt";


const SYSTEM_INSTRUCTION = CHATBOT_PROMPT; // Use the imported system instruction

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is empty" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // --- Gemini 2.5 Flash Free API Endpoint Request ---
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          generationConfig: {
            temperature: 0.3, // Lower temperature forces strict structural alignment with the data
            maxOutputTokens: 250,
          },
        }),
      }
    );

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble retrieving that specific segment right now.";

    return NextResponse.json({ text: replyText });
  } catch (error) {
    console.error("Dynamic Chat Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}