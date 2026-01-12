"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function AiShowcase() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I am MR.APPSS AI. How can I boost your business today?" }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, { role: "user", text: "I need a high-conversion landing page." }]);
    }, 2000);

    const timer2 = setTimeout(() => {
        setMessages(prev => [...prev, { role: "ai", text: "Generating design concepts... Optimized for speed and SEO. 🚀" }]);
    }, 4000);

    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-sm font-medium">
                <Sparkles className="w-4 h-4" /> AI-Powered Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Intelligent Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">
                    Driven by AI
                </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
                We leverage cutting-edge Artificial Intelligence to optimize workflows, personalize user experiences, and predict market trends.
            </p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                Discover AI Services
            </button>
        </div>

        <div className="md:w-1/2 w-full">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand/20 rounded-lg">
                            <Bot className="w-6 h-6 text-brand-light" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">MR.APPSS Assistant</h3>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Online
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-6 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: msg.role === 'ai' ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className={`max-w-[80%] p-4 rounded-2xl ${
                                msg.role === 'ai' 
                                ? 'bg-white/10 text-white rounded-tl-none' 
                                : 'bg-brand text-white rounded-tr-none'
                            }`}>
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    {messages.length === 3 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                             <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                             <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                             <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                        </motion.div>
                    )}
                </div>

                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Ask anything..." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand transition-colors"
                        disabled
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand rounded-lg hover:bg-brand-light transition-colors">
                        <Send className="w-4 h-4 text-white" />
                    </button>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
