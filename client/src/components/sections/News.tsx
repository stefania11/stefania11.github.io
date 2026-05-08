import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Cpu, Microscope, Sparkles, Users } from "lucide-react";

export default function News() {
  interface NewsItem {
    id: number;
    title: string;
    date: string;
    description: string;
    icon: ReactNode;
    link: string | null;
    color: string;
    thumbnail?: string;
  }

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Keynote on Future of Education with AI in the Nordics",
      date: "April 2026",
      description:
        "Shared ideas on the future of education with AI with 500 teachers at TekForstå 2026 in Denmark, a Nordic conference on making technology understanding accessible in schools.",
      icon: <Sparkles className="w-5 h-5" />,
      link: "https://konference.tekforstaa.dk/",
      color: "#C1F0DB"
    },
    {
      id: 2,
      title: "Keynote on the Future of Science with AI in New Zealand",
      date: "September 2026",
      description:
        "Speaking at Tech Summit New Zealand on AI tools that help scientists prototype, reason, and collaborate across research workflows.",
      icon: <Microscope className="w-5 h-5" />,
      link: "https://techsummit.nz/",
      color: "#E0D6FF"
    },
    {
      id: 3,
      title: "Sovereign AI Governance in Japan",
      date: "May 15-17, 2026",
      description:
        "Speaking at AI Engineer Singapore on sovereign AI governance in Japan and how countries are shaping responsible AI infrastructure and policy.",
      icon: <Cpu className="w-5 h-5" />,
      link: "https://www.ai.engineer/singapore",
      color: "#FFD6E0"
    },
    {
      id: 4,
      title: "Haus der Kunst Panel on Technological Kinship",
      date: "October 16, 2026",
      description:
        "Joining Haus der Kunst in Munich for a panel discussion on technological kinship, AI literacy, children's agency, and more participatory AI futures.",
      icon: <Users className="w-5 h-5" />,
      link: null,
      color: "#C1F0DB"
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
