import { Twitter, Linkedin, Github, BookOpen } from "lucide-react";
import { SiSubstack } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/stefania_druga", ariaLabel: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/stefania-druga", ariaLabel: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/stefania11", ariaLabel: "GitHub" },
    { icon: <BookOpen className="w-5 h-5" />, href: "https://medium.com/@stefania_druga", ariaLabel: "Medium" },
    { icon: <SiSubstack className="w-5 h-5" />, href: "https://stefaniadruga.substack.com/", ariaLabel: "Substack" },
  ];

  return (
    <footer className="py-10 px-6 md:px-16 bg-gray-100 text-gray-800 print:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ 
                  backgroundColor: index % 3 === 0 ? 'rgba(255, 214, 224, 0.5)' : 
                                 index % 3 === 1 ? 'rgba(224, 214, 255, 0.5)' : 
                                 'rgba(193, 240, 219, 0.5)' 
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-4 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Stefania Druga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
