import { useState } from "react";
import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function Projects() {
  const { projects } = content;
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Projects
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "order-2 md:order-1" : ""}>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-gray-800 mb-6">{project.description}</p>
                <div className="flex flex-wrap space-x-4 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`bg-[${tag.color}] px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={project.link}
                  className="inline-block bg-black text-white px-6 py-2 rounded-full transform transition"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.a>
              </div>
              
              <motion.div 
                className={`group ${index % 2 === 0 ? "order-1 md:order-2" : ""}`}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative">
                  <motion.div 
                    className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur-md opacity-50 transition duration-1000`}
                    animate={{ 
                      opacity: hoveredProject === index ? 0.8 : 0.5,
                    }}
                  />
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
