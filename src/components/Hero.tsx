"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Rocket, Globe } from "lucide-react";
import BackgroundEffect from "./BackgroundEffect";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Dynamic Background */}
      <BackgroundEffect />
      
      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,91,150,0.15),transparent_70%)] z-0" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/30 rounded-full bg-cyan-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Next-Gen Digital Solutions
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
            We Build The <br />
            <span className="relative inline-block">
                <span className="absolute -inset-1 blur-2xl bg-brand-light/30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-brand-light via-white to-cyan-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Future
                </span>
            </span>
          </h1>

          {/* Subheadline - Clear Value Proposition */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light">
            Merging <strong className="text-white font-semibold">Elite Design</strong> with <strong className="text-white font-semibold">Intelligent Code</strong>. 
            We craft high-performance <span className="text-brand-light">Websites</span> & <span className="text-brand-light">Mobile Apps</span> that feel like magic.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact" passHref>
                <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 text-lg font-bold text-black bg-white rounded-full transition-all overflow-hidden"
                >
                <span className="relative z-10 flex items-center gap-2">
                    Start Your Project <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                </motion.button>
            </Link>

            <Link href="/projects" passHref>
                <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-bold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                View Portfolio <ArrowRight className="w-5 h-5" />
                </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating 3D-style Elements (CSS only) */}
        <div className="absolute top-1/4 left-10 hidden lg:block animate-float-slow opacity-60">
            <div className="relative w-20 h-20 flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl rotate-12 shadow-2xl">
                <Code className="w-10 h-10 text-brand-light" />
                <div className="absolute -inset-1 bg-brand-light/20 blur-xl -z-10" />
            </div>
        </div>
        
        <div className="absolute bottom-1/4 right-10 hidden lg:block animate-float-delayed opacity-60">
            <div className="relative w-24 h-24 flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl -rotate-12 shadow-2xl">
                <Smartphone className="w-12 h-12 text-white" />
                <div className="absolute -inset-1 bg-white/20 blur-xl -z-10" />
            </div>
        </div>

         <div className="absolute top-1/3 right-1/4 hidden lg:block animate-float opacity-30 pointer-events-none -z-10">
            <Globe className="w-64 h-64 text-brand-dark/20" />
        </div>
      </div>
    </div>
  );
}
