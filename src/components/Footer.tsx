import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                    <Image 
                        src="/logo.svg" 
                        alt="MR.APPSS Logo" 
                        fill 
                        className="object-contain"
                    />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tighter">Mr Apps</h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. From mobile apps to AI integration, we build the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-brand-light transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-light transition-colors text-sm">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-brand-light transition-colors text-sm">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-light transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-light shrink-0" />
                <span>contact@mr-appss.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-light shrink-0" />
                <span>+971 52 692 3031</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-light shrink-0" />
                <span>Damascus - Syria</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-light shrink-0" />
                <span>Dubai - UAE</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand hover:text-white text-gray-400 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand hover:text-white text-gray-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand hover:text-white text-gray-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand hover:text-white text-gray-400 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mr Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
