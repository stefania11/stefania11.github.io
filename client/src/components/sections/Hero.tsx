import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-16 min-h-screen flex items-center relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB] bg-clip-text text-transparent">
                Stefania
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8">
              I research how people learn with and about artificial intelligence and computational making.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="bg-black text-white px-8 py-3 rounded-full transition"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
              </motion.a>
              <motion.a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("research");
                }}
                className="border border-black px-8 py-3 rounded-full transition"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                View my research
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB] rounded-lg blur-md opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <div 
                className="w-full h-full relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#FFD6E0]/10 after:via-transparent after:to-[#C1F0DB]/10"
              >
                <img 
                  src="/blossom_headshot.jpg" 
                  alt="Stefania Druga with cherry blossoms" 
                  className="w-full h-full object-cover mix-blend-normal"
                  style={{ 
                    filter: "contrast(1.1) brightness(1.05)",
                    opacity: 0.95,
                    objectPosition: "left center" 
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown 
          className="h-8 w-8 cursor-pointer"
          onClick={() => scrollToSection("about")}
        />
      </motion.div>
    </section>
  );
}
