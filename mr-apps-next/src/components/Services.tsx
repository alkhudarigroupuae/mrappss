"use client";

import { motion } from "framer-motion";
import { Palette, Smartphone, Monitor, Cpu, Server, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Blazing fast, SEO-optimized web applications built with Next.js and React.",
    icon: <Monitor className="w-8 h-8 text-cyan-400" />,
    color: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    delay: 0
  },
  {
    title: "Mobile Apps",
    desc: "Native iOS & Android apps that provide fluid, engaging user experiences.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    color: "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]",
    delay: 0.1
  },
  {
    title: "AI Integration",
    desc: "Enhance your apps with intelligent chatbots, recommendation engines, and automation.",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    color: "group-hover:shadow-[0_0_40px_rgba(192,132,252,0.2)]",
    delay: 0.2
  },
  {
    title: "Backend Systems",
    desc: "Robust, scalable server architectures handling millions of requests securely.",
    icon: <Server className="w-8 h-8 text-green-400" />,
    color: "group-hover:shadow-[0_0_40px_rgba(74,222,128,0.2)]",
    delay: 0.3
  },
  {
    title: "UI/UX Design",
    desc: "Award-winning interfaces that merge aesthetics with intuitive usability.",
    icon: <Palette className="w-8 h-8 text-pink-400" />,
    color: "group-hover:shadow-[0_0_40px_rgba(244,114,182,0.2)]",
    delay: 0.4
  },
  {
    title: "Cyber Security",
    desc: "Protecting your digital assets with advanced encryption and security protocols.",
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    color: "group-hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]",
    delay: 0.5
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-black relative z-10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-brand-light uppercase bg-brand/10 rounded-full">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-300">Digital Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We don&apos;t just write code. We architect platforms that scale, perform, and dominate your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-2xl border border-white/5 bg-[#050505] overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-2 ${service.color}`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-x-0 top-0 h-px bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit backdrop-blur-md border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
