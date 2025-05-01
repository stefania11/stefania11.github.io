import { useState, useEffect } from "react";
import { Link } from "wouter";
import { scrollToSection } from "@/lib/scroll-to-section";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "news", label: "News" },
    { id: "projects", label: "Projects" },
    { id: "talks", label: "Talks" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`py-6 px-6 md:px-16 fixed top-0 left-0 w-full z-40 transition-all duration-300 print:hidden ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold"
        >
          <span className="font-bold">Stefania Druga</span>
        </Link>
        
        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm relative nav-link hover:text-gray-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <Link 
            href="/publications" 
            className="text-sm relative nav-link hover:text-gray-600 transition-colors"
          >
            Publications
          </Link>
          <Link 
            href="/resume" 
            className="text-sm relative nav-link hover:text-gray-600 transition-colors"
          >
            Resume
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white py-4 px-6 shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="py-2 px-4 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Link 
                href="/publications" 
                className="py-2 px-4 hover:bg-gray-50 rounded-md transition-colors"
              >
                Publications
              </Link>
              <Link 
                href="/resume" 
                className="py-2 px-4 hover:bg-gray-50 rounded-md transition-colors"
              >
                Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
