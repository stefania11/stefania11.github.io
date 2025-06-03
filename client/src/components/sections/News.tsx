import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function News() {
  interface NewsItem {
    id: number;
    title: string;
    date: string;
    description: string;
    icon: React.ReactNode;
    link: string | null;
    color: string;
    thumbnail?: string;
  }

  const newsItems: NewsItem[] = [
    {
      id: 0,
      title: "AI Co-Scientist Talk at AIE World Fair 2025",
      date: "June 2025",
      description: "Talk on Real-time AI Co-Scientist at AIE World Fair 2025",
      icon: <Sparkles className="w-5 h-5" />,
      link: "https://www.ai.engineer/schedule",
      color: "#C1F0DB",
    },
    {
      id: 1,
      title: "Keynote at Seoul Meta Week 2025",
      date: "June 2025",
      description:
        "Keynote on the future of multimodal AI applications at Seoul Meta Week",
      icon: <Sparkles className="w-5 h-5" />,
      link: "https://seoulmetaweek.com/",
      color: "#E0D6FF",
    },
    {
      id: 2,
      title: "Scratch AI Copilot Paper IDC 2025",
      date: "June 2025",
      description:
        "Scratch AI Copilot Paper accepted at ACM IDC 2025 conference in Iceland",
      icon: <Sparkles className="w-5 h-5" />,
      link: "https://idc.acm.org/2025/",
      color: "#FFD6E0",
    },
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

                <div
                  className={`flex-1 p-6 ${!item.thumbnail ? "md:flex md:items-center" : ""}`}
                >
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
                      <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
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
