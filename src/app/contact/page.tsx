"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import BackgroundEffect from "@/components/BackgroundEffect";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      <BackgroundEffect />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold mb-6"
            >
                Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-300">Something Great</span>
            </motion.h1>
            <p className="text-gray-400 text-xl">
                Have a project in mind? We&apos;d love to hear from you.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-brand/20 text-brand-light">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Us</p>
                                    <p className="text-lg font-semibold">contact@mr-appss.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-brand/20 text-brand-light">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Call Us</p>
                                    <p className="text-lg font-semibold">+971 52 692 3031</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-brand/20 text-brand-light">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Visit Us</p>
                                    <p className="text-lg font-semibold">Damascus - Syria</p>
                                    <p className="text-lg font-semibold">Dubai - UAE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-400">We&apos;ll get back to you shortly.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-brand-light hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                                        <input 
                                            type="text" 
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-brand-light focus:ring-1 focus:ring-brand-light outline-none transition-all text-white"
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={e => setFormState({...formState, name: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-brand-light focus:ring-1 focus:ring-brand-light outline-none transition-all text-white"
                                            placeholder="john@example.com"
                                            value={formState.email}
                                            onChange={e => setFormState({...formState, email: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                        <textarea 
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-brand-light focus:ring-1 focus:ring-brand-light outline-none transition-all text-white resize-none"
                                            placeholder="Tell us about your project..."
                                            value={formState.message}
                                            onChange={e => setFormState({...formState, message: e.target.value})}
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full py-4 mt-2 font-bold text-white bg-gradient-to-r from-brand to-cyan-500 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && <Send size={18} />}
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
      </div>
    </main>
  );
}
