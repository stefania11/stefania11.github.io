import { scrollToSection } from "@/lib/scroll-to-section";
import { Twitter, Linkedin, Github, BookOpen } from "lucide-react";

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", ariaLabel: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", ariaLabel: "GitHub" },
    { icon: <BookOpen className="w-5 h-5" />, href: "https://medium.com", ariaLabel: "Medium" },
  ];

  const navItems = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "projects", label: "Projects" },
    { id: "talks", label: "Talks" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="py-12 px-6 md:px-16 bg-black text-white print:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Stefania Druga</h2>
            <p className="text-gray-400">AI Education Researcher</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="transition-colors duration-300 hover:text-[#FFD6E0]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-colors duration-300 hover:border-[#C1F0DB] hover:text-[#C1F0DB]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stefania Druga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
