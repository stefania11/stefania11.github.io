import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ChemBuddy: Multimodal AI Chemistry Assistant",
      description: "An AI-powered learning companion that combines computer vision, voice interaction, and sensor data to help students understand chemistry concepts through real-time experiment analysis.",
      image: "/chembuddy_overview.png",
      link: "#",
      tags: [
        { name: "Multimodal AI", color: "#FFD6E0" },
        { name: "Computer Vision", color: "#E0D6FF" },
        { name: "Education", color: "#C1F0DB" }
      ],
      gradient: "from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB]"
    },
    {
      id: 2,
      title: "Cognimates",
      description: "An AI education platform that enables children to create with and learn about artificial intelligence through creative coding, training custom models, and building smart projects.",
      image: "/cognimates_image.png",
      link: "https://cognimates.me",
      tags: [
        { name: "AI Education", color: "#FFD6E0" },
        { name: "Creative Coding", color: "#E0D6FF" },
        { name: "Child-Computer Interaction", color: "#C1F0DB" }
      ],
      gradient: "from-[#E0D6FF] via-[#C1F0DB] to-[#FFD6E0]"
    },
    {
      id: 3,
      title: "Google Home Gemini Extension",
      description: "Led the development of Google Home's Gemini Extension, bringing multimodal AI capabilities to smart home devices, enabling users to interact with their homes through natural language and visual inputs.",
      image: "/google_home_gemini.png",
      link: "https://home.google.com/gemini/",
      tags: [
        { name: "Gemini AI", color: "#C1F0DB" }, 
        { name: "Smart Home", color: "#FFD6E0" },
        { name: "Multimodal Interaction", color: "#E0D6FF" }
      ],
      gradient: "from-[#C1F0DB] via-[#FFD6E0] to-[#E0D6FF]"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Projects
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "order-2 md:order-1" : ""}>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-gray-800 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: tag.color }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-2 rounded-full transform transition"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.a>
              </div>
              
              <motion.div 
                className={`group ${index % 2 === 0 ? "order-1 md:order-2" : ""}`}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute -inset-1 rounded-lg blur-md opacity-50 transition duration-1000"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${project.gradient.split(" ").join(", ").replace(/from-\[|\]|via-\[|to-\[/g, "")})` 
                    }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 0.8 : 0.5,
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
