import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Publications() {
  // Feature recent publications
  const recentPublications = [
    {
      title: "From \"AI\" to Probabilistic Automation: How Does Anthropomorphization of Technical Systems Descriptions Influence Trust?",
      venue: "FAccT 2024",
      authors: "Nanna Inia, Stefania Druga, Peter Zukerman, and Emily Bender"
    },
    {
      title: "A Benchmark for Math Misconceptions: Bridging Gaps in Middle School Algebra with AI-Supported Personalized Instruction",
      venue: "JCHE 2024",
      authors: "Nancy Otero, and Stefania Druga"
    },
    {
      title: "Language Models and Society: Bridging Research and Policy",
      venue: "FAccT 2023",
      authors: "Stefania Druga, Ioana Baldini, Mihaela Vorvoreanu, and Rishi Bommasani"
    }
  ];
  
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50" id="publications">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              Publications
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#C1F0DB]"></span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              My research explores how people learn with and about artificial intelligence and computational making.
            </p>
          </div>
          <Link href="/publications">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Publications <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPublications.map((publication, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-2">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-sm font-medium text-gray-600">{publication.venue}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 flex-grow">{publication.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{publication.authors}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
