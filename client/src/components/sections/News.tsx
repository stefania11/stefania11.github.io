import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, Sparkles, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "AI Engineer Summit Talk Reaches 38K+ Views",
      date: "April 2023",
      description: "My talk on Next-gen AI Engineers at the AI Engineer Summit has reached over 38,000 views on YouTube.",
      icon: <Youtube className="w-5 h-5" />,
      link: "https://www.youtube.com/watch?v=ySYLsoAhXmg",
      thumbnail: "https://i.ytimg.com/vi/ySYLsoAhXmg/maxresdefault.jpg",
      color: "#FFD6E0"
    },
    {
      id: 2,
      title: "Joined Google DeepMind as Research Scientist",
      date: "January 2023",
      description: "I've joined Google DeepMind as a Research Scientist focusing on novel multimodal AI applications.",
      icon: <Sparkles className="w-5 h-5" />,
      link: null,
      color: "#E0D6FF"
    },
    {
      id: 3,
      title: "Awarded MIT TR35 Innovator Under 35",
      date: "June 2022",
      description: "Honored to be recognized as one of MIT Technology Review's 35 Innovators Under 35 for my work on AI education.",
      icon: <Award className="w-5 h-5" />,
      link: "https://www.technologyreview.com/innovators-under-35/",
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
                      <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          asChild
                          className="mt-2 bg-black hover:bg-gray-800 text-white"
                        >
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            Learn More
                          </a>
                        </Button>
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