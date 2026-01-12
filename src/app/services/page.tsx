"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, Monitor, Code, ShoppingBag, ShieldCheck, 
  Briefcase, Globe, Server, Users, Database, 
  Headphones, Settings, PenTool, Type, Lock, Cloud, HardDrive, Palette
} from "lucide-react";
import BackgroundEffect from "@/components/BackgroundEffect";

const services = [
  {
    title: "Mobile App Development",
    desc: "Develop mobile applications that run seamlessly on multiple platforms like iOS and Android using frameworks like React Native or Flutter.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-blue-500/20 to-blue-500/0",
    iconColor: "text-blue-400"
  },
  {
    title: "Web Development",
    desc: "Design and develop responsive, scalable, and user-friendly web applications using modern technologies.",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-cyan-500/20 to-cyan-500/0",
    iconColor: "text-cyan-400"
  },
  {
    title: "Custom Software Development",
    desc: "Build tailored software solutions to meet specific business needs, including CRM systems, ERP solutions, and custom enterprise applications.",
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-500/20 to-purple-500/0",
    iconColor: "text-purple-400"
  },
  {
    title: "E-commerce Development",
    desc: "Develop feature-rich e-commerce platforms and online marketplaces with secure payment gateways, inventory management, and CRM integration.",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "from-pink-500/20 to-pink-500/0",
    iconColor: "text-pink-400"
  },
  {
    title: "Quality Assurance and Testing",
    desc: "Conduct thorough testing and quality assurance processes to ensure the reliability, performance, and security of software applications.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "from-green-500/20 to-green-500/0",
    iconColor: "text-green-400"
  },
  {
    title: "Consulting and Strategy",
    desc: "Provide strategic consulting services to help businesses identify technology opportunities, define roadmaps, and align IT initiatives with business goals.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-yellow-500/20 to-yellow-500/0",
    iconColor: "text-yellow-400"
  },
  {
    title: "Domain Reserve",
    desc: "We offer domain reservation services, allowing you to secure your desired website address on the internet.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-indigo-500/20 to-indigo-500/0",
    iconColor: "text-indigo-400"
  },
  {
    title: "Web Hosting",
    desc: "Our web hosting services provide you with the necessary infrastructure to make your website accessible on the internet.",
    icon: <Server className="w-8 h-8" />,
    color: "from-teal-500/20 to-teal-500/0",
    iconColor: "text-teal-400"
  },
  {
    title: "Reseller",
    desc: "Become a reseller and leverage our services to sell domains, web hosting, and other related products to your own clients.",
    icon: <Users className="w-8 h-8" />,
    color: "from-orange-500/20 to-orange-500/0",
    iconColor: "text-orange-400"
  },
  {
    title: "Servers Booking",
    desc: "It allows companies to manage hosting server reservations efficiently.",
    icon: <HardDrive className="w-8 h-8" />,
    color: "from-red-500/20 to-red-500/0",
    iconColor: "text-red-400"
  },
  {
    title: "Technical Support",
    desc: "We offer comprehensive technical support services to assist you with any issues or inquiries related to our products and services.",
    icon: <Headphones className="w-8 h-8" />,
    color: "from-lime-500/20 to-lime-500/0",
    iconColor: "text-lime-400"
  },
  {
    title: "VPS Server Management",
    desc: "Get the flexibility and control of a dedicated server with our VPS hosting solutions, tailored to your specific needs.",
    icon: <Settings className="w-8 h-8" />,
    color: "from-slate-500/20 to-slate-500/0",
    iconColor: "text-slate-400"
  },
  {
    title: "Build a Visual Identity",
    desc: "We help businesses establish a strong and cohesive visual identity through logo design, branding, and graphic design services.",
    icon: <PenTool className="w-8 h-8" />,
    color: "from-rose-500/20 to-rose-500/0",
    iconColor: "text-rose-400"
  },
  {
    title: "Typographical Designs",
    desc: "Our typographical design services focus on creating visually appealing and impactful designs using typography.",
    icon: <Type className="w-8 h-8" />,
    color: "from-fuchsia-500/20 to-fuchsia-500/0",
    iconColor: "text-fuchsia-400"
  },
  {
    title: "UI/UX Design",
    desc: "Create intuitive, engaging, and aesthetically pleasing user interfaces and experiences for web and mobile applications.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-violet-500/20 to-violet-500/0",
    iconColor: "text-violet-400"
  },
  {
    title: "Cyber Security Solutions",
    desc: "Protect your digital assets with advanced security protocols, penetration testing, and risk assessment.",
    icon: <Lock className="w-8 h-8" />,
    color: "from-red-600/20 to-red-600/0",
    iconColor: "text-red-500"
  },
  {
    title: "Data Base",
    desc: "Design, implement, and maintain robust, scalable database architectures for your data-driven applications.",
    icon: <Database className="w-8 h-8" />,
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400"
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure services, including migration, deployment, and management on AWS, Azure, or Google Cloud.",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-sky-500/20 to-sky-500/0",
    iconColor: "text-sky-400"
  }
];

export default function ServicesPage() {
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-300">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-xl"
          >
            Comprehensive digital solutions tailored to elevate your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`group p-8 rounded-2xl border border-white/10 bg-gradient-to-b ${service.color} backdrop-blur-sm hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform ${service.iconColor}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-light transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
