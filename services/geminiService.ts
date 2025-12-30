import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const apiKey = process.env.API_KEY || '';

// System instruction to give the AI context about the studio
const SYSTEM_INSTRUCTION = `
You are 'Artie', the AI assistant for THEART DANCE STUDIO.
The studio is located in Seoul, South Korea.
Tone: Cool, energetic, professional, and helpful. 

Key Information:
- Classes: Hip-hop, K-Pop, Contemporary, Popping, Jazz.
- Pricing: Single class (35,000 KRW), 10-class pack (300,000 KRW).
- Opening Hours: Mon-Fri 1pm - 11pm, Sat-Sun 12pm - 10pm.
- Contact: info@theartdance.com
- We welcome beginners to professionals.
- We have a "Global One" program for international students.

Keep answers concise (under 3 sentences) unless asked for a detailed schedule.
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact the front desk.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Create a chat session
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I didn't catch that beat. Could you ask again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm having trouble connecting to the studio server right now.";
  }
};