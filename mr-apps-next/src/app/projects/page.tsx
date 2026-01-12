"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundEffect from "@/components/BackgroundEffect";
import { ExternalLink } from "lucide-react";

// Real data from mr-appss.com/projects
const projects = [
  {
    title: "Alhashimy_Discount",
    category: "Mobile App",
    image: null,
    description: "An application dedicated to the sale of all kinds of supplies and products.",
    tags: ["Mobile App", "E-commerce", "Flutter"],
    link: "#"
  },
  {
    title: "Portfolio",
    category: "Web Development",
    image: null, // Placeholder
    description: "A business portfolio that includes an overview of the businessman and his works.",
    tags: ["React", "Portfolio", "Personal Branding"],
    link: "#"
  },
  {
    title: "Services Website",
    category: "Service Platform",
    image: null, // Placeholder
    description: "Gasoline filling service, Car wash, Change the battery, Delivery and reservation of gasoline.",
    tags: ["Web App", "Services", "Booking System"],
    link: "#"
  },
  {
    title: "Comprehensive Services",
    category: "Tourism Platform",
    image: null, // Placeholder
    description: "A website that provides a variety of tourism services, including hotel reservations, delivery services, and tourist trips.",
    tags: ["Tourism", "Booking", "Next.js"],
    link: "#"
  },
  {
    title: "Online Tool Store",
    category: "E-Commerce",
    image: null, // Placeholder
    description: "Your best choice to buy all the tools you need in your life through the specialized store.",
    tags: ["E-commerce", "Retail", "Web Shop"],
    link: "#"
  },
  {
    title: "Butchers Restaurant",
    category: "Restaurant Website",
    image: null,
    description: "A type of restaurant that specializes in serving high-quality steaks and other meat dishes.",
    tags: ["Restaurant", "Food", "Design"],
    link: "#"
  },
  {
    title: "Miaruba Jewelry",
    category: "E-Commerce / Design",
    image: null,
    imageFit: "contain",
    description: "Your perfect choice is to design a more beautiful and elegant jewelry website that expresses your personality.",
    tags: ["Luxury", "E-commerce", "Design"],
    link: "#"
  },
  {
    title: "Marketing Specialist",
    category: "Professional Services",
    image: null, // Reuse placeholder
    description: "Helping in developing the marketing process, providing advice, keeping up with everything new.",
    tags: ["Marketing", "Consulting", "Blog"],
    link: "#"
  },
  {
    title: "Cosmetics Application",
    category: "Mobile App",
    image: null, // Reuse placeholder
    description: "Your ultimate destination for accessing a wide range of pharmaceutical products, including skincare and hair care.",
    tags: ["Mobile App", "Cosmetics", "E-commerce"],
    link: "#"
  },
  {
    title: "Elite Services",
    category: "Tourism Website",
    image: null, // Please upload the correct logo to public/ folder
    imageFit: "contain",
    description: "Providing our clients with a range of tourism services, prioritizing your comfort and trust.",
    tags: ["Tourism", "Travel", "Corporate"],
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      <BackgroundEffect />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-300">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-xl"
          >
            A showcase of digital products that redefine industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#050505] border border-white/10 rounded-2xl overflow-hidden hover:border-brand-light/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
            >
              {/* Image Area */}
              <div className="relative h-64 bg-gray-900 overflow-hidden">
                 {project.image ? (
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className={`${// @ts-expect-error ImageFit property is dynamic
                        project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
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
                    <button className="p-3 bg-white text-black rounded-full hover:bg-brand-light transition-colors">
                        <ExternalLink size={24} />
                    </button>
                 </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-brand-light uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors whitespace-nowrap truncate tracking-tight">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
                
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
      </div>
    </main>
  );
}
