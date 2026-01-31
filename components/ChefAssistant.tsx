
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ChefHat, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Theme } from '../types';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ChefAssistant: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Bonjour! I am Chef Andre. Ask me anything about our Creole menu, ingredients, or cooking philosophy!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are Chef Andre, the legendary head chef of French Quarter Bistro. You are an expert in Creole, Cajun, and Caribbean cuisine. You are warm, hospitable, and speak with a slight NOLA accent. You love explaining 'The Trinity' (onions, celery, peppers), the importance of a dark roux, and our signature Jambalaya. Keep answers concise, helpful, and charming.",
          temperature: 0.7,
        },
      });

      const botText = response.text || "I apologize, my roux must be burning! Let me try that again.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Forgive me, my connection to the kitchen is a bit spotty right now. How else can I help?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className={`w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden border ${theme === Theme.DARK ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-200'} transition-colors flex flex-col h-[500px]`}>
          {/* Header */}
          <div className="bg-amber-500 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <ChefHat size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ask Chef Andre</h3>
                <p className="text-xs text-amber-100 flex items-center">
                  <Sparkles size={10} className="mr-1" /> AI Powered Assistant
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-amber-500 text-white rounded-tr-none' 
                    : theme === Theme.DARK 
                      ? 'bg-zinc-800 text-gray-200 rounded-tl-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`px-4 py-2 rounded-2xl text-sm rounded-tl-none ${theme === Theme.DARK ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${theme === Theme.DARK ? 'border-zinc-800' : 'border-gray-100'}`}>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our food..."
                className={`flex-grow text-sm px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  theme === Theme.DARK ? 'bg-zinc-800 text-white placeholder-gray-500 border-zinc-700' : 'bg-gray-100 text-gray-900 border-gray-200'
                }`}
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center space-x-2"
        >
          <MessageSquare size={24} />
          <span className="hidden md:inline font-bold">Ask Chef Andre</span>
        </button>
      )}
    </div>
  );
};

export default ChefAssistant;
