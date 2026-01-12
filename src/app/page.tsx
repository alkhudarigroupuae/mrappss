import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AiShowcase from "@/components/AiShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500/30">
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <AiShowcase />
      <Testimonials />
    </main>
  );
}
