import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'model', text: t.ai.initial }]);
    }
  }, [t.ai.initial]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    const aiResponse = await sendMessageToGemini([...messages, userMsg], userMsg.text);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up origin-bottom-right">
          <div className="bg-zinc-800 p-4 flex justify-between items-center border-b border-zinc-700">
            <div className="flex items-center space-x-2">
              <Sparkles size={16} className="text-red-500" />
              <span className="font-bold text-sm tracking-wide">STUDIO AI ASSISTANT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={18} /></button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-gray-200 border border-zinc-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                  <Loader2 size={16} className="animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-black text-white text-sm px-4 py-2 rounded-full border border-zinc-700 focus:outline-none focus:border-red-500"
            />
            <button onClick={handleSend} disabled={isLoading} className="bg-white text-black p-2 rounded-full disabled:opacity-50">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-transform">
        {isOpen ? <X /> : <MessageSquare />}
      </button>
    </div>
  );
};

export default AiAssistant;