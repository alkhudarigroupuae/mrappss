"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content: "MR.APPS transformed our outdated platform into a cutting-edge mobile experience. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Johnson",
    role: "CTO, TechFlow",
    image: "/avatars/avatar1.png" // Placeholder
  },
  {
    content: "The team delivered our project ahead of schedule and beyond our expectations. The AI integration they built has increased our efficiency by 40%.",
    author: "Michael Chen",
    role: "Founder, DataSphere",
    image: "/avatars/avatar2.png" // Placeholder
  },
  {
    content: "Professional, innovative, and reliable. Working with MR.APPS felt like having an in-house tech team that truly cared about our success.",
    author: "Elena Rodriguez",
    role: "Product Manager, InnovateX",
    image: "/avatars/avatar3.png" // Placeholder
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Trusted by <span className="text-brand-light">Innovators</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative hover:border-brand-light/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-brand-light/20 absolute top-8 right-8" />
              
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
