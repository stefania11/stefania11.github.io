import { motion } from "framer-motion";
import { content } from "@/data/content";
import { ExternalLink } from "lucide-react";

export default function Talks() {
  const { talks } = content;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <div className="py-20 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Talks
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]"></span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {talks.map((talk, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              variants={itemVariants}
            >
              <div className="aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={talk.image} 
                  alt={talk.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{talk.title}</h3>
              <p className="text-gray-800 mb-3">{talk.venue}, {talk.year}</p>
              <p className="mb-4">{talk.description}</p>
              <a 
                href={talk.link} 
                className="inline-flex items-center text-[#FFD6E0] hover:underline font-medium"
              >
                Watch talk <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
