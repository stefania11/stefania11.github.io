import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function Research() {
  const { research } = content;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <div className="py-20 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Research
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#C1F0DB]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {research.projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-800 mb-4">{project.description}</p>
                <a href={project.link} className="text-[#C1F0DB] hover:underline font-medium">Read more →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
