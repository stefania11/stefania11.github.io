import { motion } from "framer-motion";
import { content } from "@/data/content";
import { FileText, ExternalLink } from "lucide-react";

export default function Publications() {
  const { publications } = content;
  
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Publications
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#C1F0DB]"></span>
        </h2>
        
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                  <p className="text-gray-800 mb-3">{publication.venue} {publication.year}</p>
                  <p className="mb-4">{publication.authors}</p>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`bg-[${tag.color}] px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <motion.a 
                    href={publication.abstractLink} 
                    className="inline-flex items-center px-4 py-2 border border-black rounded-full hover:bg-gray-50 transition"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Abstract
                  </motion.a>
                  <motion.a 
                    href={publication.pdfLink} 
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    PDF
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
