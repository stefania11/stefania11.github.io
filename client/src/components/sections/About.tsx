import { content } from "@/data/content";
import { motion } from "framer-motion";

export default function About() {
  const { about } = content;
  
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 leading-relaxed text-gray-800">
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.infoBoxes.map((box, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: box.color }}>
                  {box.title}
                </h3>
                <ul className="space-y-2">
                  {box.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
