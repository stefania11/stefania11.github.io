:import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const featuredPosts = [
    {
      id: "post-1",
      title: "AI in the Physical World: How to Build Real-Time Multimodal Apps",
      date: "May 30, 2025",
      excerpt: "A guide to creating multimodal applications that bridge the digital and physical worlds with real-time capabilities.",
      coverImage: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*xx1clm4XX5a4rC-Rnw3nOg.png",
      slug: "ai-physical-world-multimodal-apps",
      externalUrl: "https://medium.com/@Stefania_druga/ai-in-the-physical-world-how-to-build-real-time-multimodal-apps-378c3d4f685d"
    },
    {
      id: "post-2",
      title: "Supercharge Your Scratch Projects: Introducing Cognimates Copilot",
      date: "February 20, 2024",
      excerpt: "An AI teammate for kids that helps children enhance their Scratch projects with artificial intelligence capabilities.",
      coverImage: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*cugpF125AeJd3ZYrJpHgkw.gif",
      slug: "cognimates-copilot",
      externalUrl: "https://medium.com/bits-and-behavior/supercharge-your-scratch-projects-introducing-cognimates-copilot-an-ai-teammate-for-kids-52e616e4096e"
    },
    {
      id: "post-2",
      title: "Empowering kids for a Future They'll Help Build: A Parents Handbook",
      date: "January 15, 2024",
      excerpt: "A guide for parents on how to prepare children for a future where they'll actively participate in shaping technology and society.",
      coverImage: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RgP4s7rea4cXZ5PEUJ50Eg.gif",
      slug: "parents-handbook",
      externalUrl: "https://medium.com/@Stefania_druga/empowering-kids-for-a-future-theyll-help-build-a-parents-handbook-f1f01ae38718"
    },
    {
      id: "post-3",
      title: "Multimodal AI: A Powerful Tool for Social Good",
      date: "April 19, 2024",
      excerpt: "Summary of my presentation at the Innovation Exchange on how multimodal AI can be leveraged for social impact and addressing real-world challenges.",
      coverImage: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1740&auto=format&fit=crop",
      slug: "multimodal-ai-social-good",
      externalUrl: "https://medium.com/@Stefania_druga/multimodal-ai-a-powerful-tool-for-social-good-694cbfb76699"
    },
    {
      id: "post-4",
      title: "Creativity is dead! Long live creativity.",
      date: "October 10, 2023",
      excerpt: "Musings from Creative Summit 2023 in Sweden on how generative AI is changing creative ecosystems and what this means for human creativity.",
      coverImage: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eIJaZVOGVy-lROagYIqPtw.jpeg",
      slug: "creativity-generative-ai",
      externalUrl: "https://medium.com/@Stefania_druga/creativity-is-dead-long-live-creativity-b0264814e544"
    },
    {
      id: "post-5",
      title: "How do children and parents learn about AI together?",
      date: "August 15, 2023",
      excerpt: "Exploring family as a Third Space for AI Literacies and how parents and children can collaboratively develop understanding of AI technologies.",
      coverImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1740&auto=format&fit=crop",
      slug: "family-ai-learning",
      externalUrl: "https://medium.com/@Stefania_druga/how-do-children-and-parents-learn-about-ai-together-5b2b6b6b6b6b"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50" id="blog">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="block">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href={post.externalUrl || `https://medium.com/@Stefania_druga`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 inline-flex items-center text-sm font-medium hover:text-blue-800"
                  >
                    Read on Medium
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
