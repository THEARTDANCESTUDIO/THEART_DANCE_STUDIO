
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const apiKey = process.env.API_KEY || '';

// System instruction to give the AI context about the studio
const SYSTEM_INSTRUCTION = `
You are 'Artie', the AI assistant for THEART DANCE STUDIO.
The studio is located in Seoul, South Korea.
Tone: Cool, energetic, professional, and helpful. 

Class Tiers & Pricing:
1. Hobby Class (취미반): 150,000 KRW per month (8 sessions, twice a week). Perfect for those dancing for fun or fitness.
2. Pre-Professional Class (예비전문반): 250,000 KRW per month. For students who have a serious interest in improving their dance skills significantly.
3. Professional Class (전문반): 350,000 KRW per month. This class focuses on professional growth, including participating in events, outdoor filming (videos), and major competitions.

Key Information:
- Genres: Hip-hop, K-Pop, Contemporary, Popping, Jazz.
- Opening Hours: Mon-Fri 1pm - 11pm, Sat-Sun 12pm - 10pm.
- Contact: info@theartdance.com
- Location: Seoul, South Korea.
- Programs: Includes "Global One" for international students.

Guidelines:
- If asked about prices, explain the difference between the three tiers.
- Keep answers concise (under 3 sentences) unless the user asks for more detail.
- You can use emojis to stay friendly and energetic.
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
