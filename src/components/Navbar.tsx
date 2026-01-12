"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
            {/* Logo Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
                 <Image 
                    src="/logo.svg" 
                    alt="MR.APPSS Logo" 
                    fill 
                    className="object-contain"
                 />
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter">Mr Apps</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-brand-light transition-colors">Home</Link>
            <Link href="/projects" className="text-sm font-medium text-gray-300 hover:text-brand-light transition-colors">Projects</Link>
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-brand-light transition-colors">Services</Link>
            <Link href="/contact" className="px-5 py-2 text-sm font-bold text-white bg-brand rounded-full hover:bg-brand-light transition-all shadow-[0_0_15px_rgba(0,91,150,0.5)]">
                Get Started
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-light">Home</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-light">Projects</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-light">Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full py-3 mt-4 text-center font-bold text-white bg-brand rounded-xl">
                Get Started
            </Link>
        </motion.div>
      )}
    </nav>
  );
}
