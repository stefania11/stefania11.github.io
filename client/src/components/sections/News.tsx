import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, Sparkles, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function News() {
  interface NewsItem {
    id: number;
    title: string;
    date: string;
    description: string;
    icon: React.ReactNode;
    link: string | null;
    color: string;
    thumbnail?: string;
  }

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Keynote at Infobip Shift Miami 2025",
      date: "May 2025",
      description: "Excited to attend #InfobipShift Miami (May 5-7)! I'll be giving a keynote talk on 'The Future of Multimodal AI Applications'. Join me May 6th at 10:00 AM to explore AI that sees, hears & interacts in real-time.",
      icon: <Sparkles className="w-5 h-5" />,
      link: "https://shift.infobip.com/us/schedule/",
      color: "#FFD6E0"
    },
    {
      id: 2,
      title: "AI Engineering Summit Talk in NYC",
      date: "April 2025",
      description: "My talk on 'Reimagining AI Experiences' at the AI Engineering Summit in New York has reached over 39,000 views! In this presentation, I explore how we can create more intuitive and responsive AI systems that adapt to human needs.",
      icon: <Youtube className="w-5 h-5" />,
      link: "https://www.youtube.com/watch?v=ySYLsoAhXmg&t=1s",
      color: "#C1F0DB"
    },
    {
      id: 3,
      title: "ASU GSV Summit's 2025 Leading Women in AI",
      date: "April 2025",
      description: "Honored to be recognized as one of THE AI SHOW @asugsvsummit's 2025 Leading Women in AI. Recent studies show 70% of generative AI users are from Gen Z, making Critical AI literacy skills crucial for youth.",
      icon: <Award className="w-5 h-5" />,
      link: "https://asugsvsummit.com/show/women-ai-in-edu",
      color: "#E0D6FF"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Latest News
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]"></span>
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {newsItems.map((item) => (
            <motion.div 
              key={item.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                {item.thumbnail && (
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                
                <div className={`flex-1 p-6 ${!item.thumbnail ? 'md:flex md:items-center' : ''}`}>
                  <div className="w-full">
                    <div className="flex items-center mb-2">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3`}
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-gray-600">{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    
                    {item.link && (
                      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 text-gray-500 hover:text-gray-700 text-sm inline-flex items-center transition-colors"
                        >
                          Read more
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}