"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Rocket } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Rocket },
  { label: "Projects Delivered", value: "100+", icon: Trophy },
  { label: "Happy Clients", value: "50+", icon: Users },
];

export default function About() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-brand-light uppercase bg-brand/10 rounded-full">
              About MR.APPS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              We Don&apos;t Just Write Code, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-300">
                We Engineer Success.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At MR.APPS, we are a team of passionate developers, designers, and strategists dedicated to transforming complex challenges into elegant digital solutions. From intuitive mobile apps to robust enterprise platforms, we build technology that drives growth.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Custom Mobile & Web Application Development",
                "Enterprise-Grade Security & Scalability",
                "User-Centric UI/UX Design",
                "24/7 Dedicated Support & Maintenance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-light shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                {/* Abstract Tech Visual since we don't have a team photo yet */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-purple-900/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                         {/* Grid Pattern */}
                         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                         
                         {/* Floating Elements */}
                         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
                         <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-700" />
                    </div>
                </div>
                
                {/* Code Snippet Overlay */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                        <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                        <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
