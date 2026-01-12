"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

// Subset of projects for the homepage
const projects = [
  {
    title: "Alhashimy_Discount",
    category: "Mobile App",
    image: null,
    description: "An application dedicated to the sale of all kinds of supplies and products.",
    tags: ["Mobile App", "E-commerce", "Flutter"]
  },
  {
    title: "Miaruba Jewelry",
    category: "E-Commerce / Design",
    image: null,
    imageFit: "contain",
    description: "Your perfect choice is to design a more beautiful and elegant jewelry website that expresses your personality.",
    tags: ["Luxury", "E-commerce", "Design"]
  },
  {
    title: "Butchers Restaurant",
    category: "Restaurant Website",
    image: null,
    description: "A type of restaurant that specializes in serving high-quality steaks and other meat dishes.",
    tags: ["Restaurant", "Food", "Design"]
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-brand-light uppercase bg-brand/10 rounded-full">
                Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-300">Works</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              A glimpse into the digital solutions we&apos;ve crafted for our partners.
            </p>
          </div>
          
          <Link href="/projects" className="group flex items-center gap-2 text-white font-semibold hover:text-brand-light transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-brand-light/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
            >
              {/* Image Area */}
              <div className="relative h-64 bg-gray-900 overflow-hidden">
                 {project.image ? (
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className={`${project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
                    />
                 ) : (
                    <>
                        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-110 transition-transform duration-500`} />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-4xl">
                            {project.category.split(' ')[0]}
                        </div>
                    </>
                 )}
                 
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <Link href="/projects" className="p-3 bg-white text-black rounded-full hover:bg-brand-light transition-colors">
                        <ExternalLink size={24} />
                    </Link>
                 </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-brand-light uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-light transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-colors">
                View All Projects
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}
