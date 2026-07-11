import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { CHATBOT_PROMPT } from "./system_prompt";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Update links here with your actual platform URLs
const SOCIAL_LINKS: Record<string, string> = {
  linkedin: "https://linkedin.com/in/themdazad",
  github: "https://github.com/themdazad",
  instagram: "https://instagram.com/themdazad",
};

const socialNavigationTool: any = {
  functionDeclarations: [
    {
      name: "openSocialMediaAccount",
      description: "Call this function when the user explicitly asks to visit, open, view, or check Azad's social media links like LinkedIn, Instagram or GitHub.",
      parameters: {
        type: "OBJECT",
        properties: {
          platform: {
            type: "STRING",
            description: "The name of the platform requested by the user. Supported values: 'linkedin', 'github', 'instagram', 'all'.",
          },
        },
        required: ["platform"],
      },
    },
  ],
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is empty" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: CHATBOT_PROMPT,
        temperature: 0.3,
        maxOutputTokens: 250,
        tools: [socialNavigationTool],
      },
    });

    const functionCalls = response.functionCalls;

    if (functionCalls && functionCalls.length > 0) {
      const args = functionCalls[0].args as { platform?: string };
      const platform = (args.platform || "all").toLowerCase();

      // Gather the precise URL targets to hand off to the browser
      const urlsToOpen = platform === "all"
        ? Object.values(SOCIAL_LINKS)
        : SOCIAL_LINKS[platform] ? [SOCIAL_LINKS[platform]] : [];

      return NextResponse.json({
        action: "trigger_navigation",
        urls: urlsToOpen,
        text: platform === "all"
          ? "Opening all of Azad's social handles in new tabs 🚀"
          : `Opening Azad's ${platform} profile for you right away! ✨`,
      });
    }

    return NextResponse.json({ text: response.text || "" });

  } catch (error) {
    console.error("Dynamic Chat Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}