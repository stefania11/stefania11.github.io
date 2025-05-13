import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  FileText,
  Users,
  Filter,
  X,
  Check
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { scrollToSection } from "@/lib/scroll-to-section";

export default function PublicationsPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Define publication tags/categories
  const tags = [
    {
      name: "AI Education",
      color: "rgba(255, 214, 224, 0.5)",
    },
    {
      name: "AI Literacy",
      color: "rgba(224, 214, 255, 0.5)",
    },
    { 
      name: "Multimodal AI", 
      color: "rgba(193, 240, 219, 0.5)" 
    },
    {
      name: "Child-AI Interaction",
      color: "rgba(255, 224, 176, 0.5)",
    },
    {
      name: "Creative Computing",
      color: "rgba(176, 224, 255, 0.5)",
    },
  ];

  // Map publications to tags (this would be better directly in the data model)
  const publicationTags: Record<string, string[]> = {
    "2025-1": ["AI Education", "Creative Computing"],
    "2025-2": ["Multimodal AI", "AI Education"],
    "2025-3": ["AI Education", "Multimodal AI"],
    // 2024 publications
    "FACCT '24": ["AI Literacy"],
    "JCHE '24": ["AI Education", "Multimodal AI"],
    // 2023 publications
    "FAccT '23": ["AI Literacy"],
    "C&C'23": ["Creative Computing", "AI Literacy"],
    "Arxiv '23'": ["AI Education", "Creative Computing"],
    "VL/HCC '23'": ["Creative Computing", "AI Education"],
    "MAKE '23": ["Creative Computing", "AI Education"],
    "IDC '23": ["Child-AI Interaction", "AI Literacy"],
    "arXiv '23": ["Creative Computing", "AI Literacy"],
    "UW '23'": ["AI Education", "AI Literacy", "Child-AI Interaction"],
    // 2022 publications
    "MIT PRESS '22": ["AI Literacy"],
    "CHI '22": ["AI Education", "AI Literacy", "Child-AI Interaction"],
    "IDC '22": ["Creative Computing", "Child-AI Interaction"],
    "ITICSE '22": ["AI Education"],
    "IJCCI '22": ["Child-AI Interaction"],
    "UW '22": ["AI Education", "Creative Computing"],
    // 2021 publications
    "IDC '21": ["Child-AI Interaction", "AI Education"],
    "CLS '21": ["AI Education"],
    "KDD '21": ["AI Literacy", "Child-AI Interaction"],
    // 2020 publications
    "JoDS '20": ["AI Literacy"],
    "IDC '20": ["Child-AI Interaction", "Creative Computing"],
    "CACM '20": ["AI Education"],
    // 2019 publications
    "FABLEARN '19": ["AI Education", "AI Literacy"],
    "CHIPLAY '19": ["Creative Computing", "Child-AI Interaction"],
    // 2018 publications
    "IDC '18": ["Child-AI Interaction"],
    "MIT '18": ["AI Education", "Creative Computing", "Child-AI Interaction"],
    // 2017 publications
    "CHI '17": ["Child-AI Interaction"],
    "IDC '17": ["Child-AI Interaction"],
    "ISWC '18": ["Multimodal AI"],
    // 2014 publications
    "SIGRAPH '14": ["Creative Computing"],
    // 2010 publications
    "EUROMIME '10": ["AI Education"]
  };

  // Function to check if a publication belongs to the active tag
  const publicationMatchesActiveTag = (pub: any) => {
    if (!activeTag) return true; // Show all if no tag selected
    
    // Get publication identifier - either id or venue
    const pubId = pub.id || pub.venue;
    
    // Check if this publication has tags mapped
    if (publicationTags[pubId]) {
      return publicationTags[pubId].includes(activeTag);
    }
    return false;
  };

  // Handle tag click
  const handleTagClick = (tagName: string) => {
    if (activeTag === tagName) {
      setActiveTag(null); // Clicking active tag removes the filter
    } else {
      setActiveTag(tagName);
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  type Publication = {
    year: string;
    categories: {
      title: string;
      items: {
        venue: string;
        title: string;
        authors: string;
        link?: string;
        year?: string;
        id?: string;
      }[];
    }[];
  };

  const publications: Publication[] = [
    {
      year: "2025",
      categories: [
        {
          title: "",
          items: [
            {
              id: "2025-1",
              venue: "IDC '25",
              title:
                "Cognimates Copilot: Supporting Children's Creative AI Learning and Coding",
              authors: "Druga Stefania and Amy J. Ko",
              year: "2025",
              link: "https://arxiv.org/abs/2505.03867",
            },
            {
              id: "2025-2",
              venue: "UIST '25",
              title:
                "ChemBuddy: An AI-Powered Multimodal Chemistry Lab Assistant Addressing Misconceptions in Middle-School Science",
              authors: "Stefania Druga",
              year: "2025",
            },
            {
              id: "2025-3",
              venue: "UIST '25",
              title:
                "MathMind: AI-Powered Misconception Detection for Middle School Algebra Learning",
              authors: "Stefania Druga",
              year: "2025",
            },
          ],
        },
      ],
    },
    {
      year: "2024",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FACCT '24",
              title:
                'From "AI" to Probabilistic Automation: How Does Anthropomorphization of Technical Systems Descriptions Influence Trust?',
              authors:
                "Nanna Inia, Stefania Druga, Peter Zukerman, and Emily Bender",
              year: "2024",
              link: "https://faculty.washington.edu/ebender/papers/From_AI_to_Probabilistic_Automation_PREPRINT.pdf",
            },
            {
              venue: "JCHE '24",
              title:
                "A Benchmark for Math Misconceptions: Bridging Gaps in Middle School Algebra with AI-Supported Personalized Instruction",
              authors: "Nancy Otero, and Stefania Druga",
              year: "2024",
              link: "https://arxiv.org/abs/2412.03765",
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FAccT '23",
              title:
                "Language Models and Society: Bridging Research and Policy",
              authors:
                "Stefania Druga, Ioana Baldini, Mihaela Vorvoreanu, and Rishi Bommasani",
              year: "2023",
              link: "/pdf/FAccT_2023_Language_Models_Society.pdf",
            },
            {
              venue: "C&C'23",
              title: "The Prompt Artists (Honorable Mention)",
              authors:
                "Minsuk Chang, Stefania Druga, Alex Fiannaca, Pedro Vergani, Chinmay Kulkarni, Carrie Cai, and Michael Terry",
              year: "2023",
              link: "https://arxiv.org/pdf/2303.12253",
            },
            {
              venue: "Arxiv '23'",
              title:
                "AI Friends: Designing Creative Coding Assistants for Families",
              authors: "Stefania Druga, and Amy J. Ko",
              year: "2023",
              link: "https://arxiv.org/pdf/2303.12253.pdf",
            },
            {
              venue: "VL/HCC '23'",
              title:
                "Scratch Copilot Evaluation: Assessing AI-Assisted Creative Coding for Families",
              authors: "Stefania Druga, and Nancy Otero",
              year: "2023",
              link: "http://arxiv.org/abs/2305.10417",
            },
            {
              venue: "MAKE '23",
              title:
                "Generative AI for Makers: AI Has Truly Arrived — and It's Here to Help You Make and Craft",
              authors: "Stefania Druga",
              year: "2023",
              link: "https://makezine.com/article/craft/fine-art/generative-ai-for-makers-ai-has-truly-arrived-and-its-here-to-help-you-make-and-craft/",
            },
            {
              venue: "IDC '23",
              title:
                "Factors used by Children to Make Sense of Algorithmic Fairness",
              authors:
                "Jean Salac, Rotem Landesman, Stefania Druga, and Amy J. Ko",
              year: "2023",
              link: "/pdf/IDC2023_Children_Sensemaking_Algo_Fairness.pdf",
            },
            {
              venue: "arXiv '23",
              title:
                "A Word is Worth a Thousand Pictures: Prompts as AI Design Material",
              authors:
                "Chinmay Kulkarni, Stefania Druga, Minsuk Chang, Alex Fiannaca, Carrie Cai, and Michael Terry",
              year: "2023",
              link: "https://arxiv.org/pdf/2303.12647.pdf",
            },
            {
              venue: "UW '23'",
              title: "PhD Thesis: Creative AI Literacies for Families",
              authors: "Druga Stefania",
              year: "2023",
            },
            {
              venue: "MAKE '23",
              title:
                "Book: Creative AI, A Guide to Making and Tinkering with Artificial Intelligence",
              authors: "Druga Stefania",
              year: "2023",
              link: "https://digital.lib.washington.edu/researchworks/items/03853bd4-b257-4fe8-8158-b08032c5efd8",
            },
          ],
        },
      ],
    },
    {
      year: "2022",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "MIT PRESS '22",
              title:
                "The 4As: Ask, Adapt, Author, Analyze: AI Literacy Framework for Families",
              authors:
                "Druga Stefania, Yip Jason, Preston Michael, and Dillon Devin",
              year: "2022",
              link: "/pdf/MITP2022_4As_AI_Literacy_Framework_for_Families.pdf",
            },
            {
              venue: "CHI '22",
              title:
                "Family as a Third Space for AI Literacies: How do children and parents learn about AI together?",
              authors: "Stefania Druga, Fee Christoph, and Amy J. Ko",
              year: "2022",
              link: "/pdf/Druga2022FamilyAILiteracy.pdf",
            },
            {
              venue: "IDC '22",
              title:
                "How families design and program games: a qualitative analysis of a 4-week online in-home study",
              authors: "Stefania Druga, Thomas Ball, and Amy J. Ko",
              year: "2022",
              link: "/pdf/IDC_2022_TileCode_Families.pdf",
            },
            {
              venue: "ITICSE '22",
              title: "The Landscape of Teaching Resources for AI Education",
              authors: "Stefania Druga, Nancy Otero, and Amy J. Ko",
              year: "2022",
              link: "/pdf/Final_ITICSE_Submission___Landscape_AI_ressources.pdf",
            },
            {
              venue: "IJCCI '22",
              title:
                "Examining voice assistants in the context of children's speech",
              authors:
                "Min Kyong Kim, Stefania Druga, Shaghayegh Esmaeili, Julia Woodward, Alex Shaw, Ayushi Jain, Jaida Langham, Kristy Hollingshead, Silvia B Lovato, Erin Beneteau, and others",
              year: "2022",
              link: "/pdf/IJCCI_Examining_voice_assistants_in_the_context_of_children_speech.pdf",
            },
            {
              venue: "UW '22",
              title:
                "Interest-Driven Creative Programming for Youth with AI Friends",
              authors: "Druga Stefania",
              year: "2022",
              link: "/pdf/GE_2022_Interest_Driven_Creative_Programming_for_Youth.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2021",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "IDC '21",
              title:
                "How do children's perceptions of machine intelligence change when training and coding smart programs?",
              authors: "Stefania Druga, and Amy J. Ko",
              year: "2021",
              link: "/pdf/IDC_Machine_Intelligence_Perception_2021.pdf",
            },
            {
              venue: "CLS '21",
              title:
                "Imagining Future Designs of Tools for Youth Data Literacies",
              authors:
                "Regina Cheng, Stefania Druga, Emilia Gan, Catherine D'Ignazio, Rahul Bhargava, Victor Lee, Camillia Matuk, Tamara Clegg, Andee Rubin, and Yasmin Kafai",
              year: "2021",
              link: "/pdf/CLS_Future_Data_Literacies_Workshop_at_Connected_Learning_Summit_July_2021.pdf",
            },
            {
              venue: "KDD '21",
              title:
                "A Design Framework for Citizen-Science AI Platforms for Families",
              authors: "Fangqing He*, Yifeng Wang*, and Stefania Druga",
              year: "2021",
              link: "/pdf/FEED_A_Design_Framework_for_Citizen_Science_AI_Platforms_for_Families_2021.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2020",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "JoDS '20",
              title:
                "The 4As: Ask, Adapt, Author, Analyze AI Literacy Framework for Families",
              authors:
                "Druga Stefania, Yip Jason, Preston Michael, and Dillon Devin",
              year: "2020",
              link: "/pdf/JODS_Author_Draft_The_4As__Ask__Adapt__Author__Analyze___AI_Literacy_Framework_for_Families.pdf",
            },
            {
              venue: "IDC '20",
              title: "Research Toolkit for Future-Oriented Play with Families",
              authors: "Michelson Rebecca Druga Stefania",
              year: "2020",
              link: "/pdf/INTERACT_Camera_Ready_Smart_Toys_Design.pdf",
            },
            {
              venue: "IDC '20",
              title:
                '"Puffy and Sticking Out" CollaborativeImage Classification with Kids',
              authors: "Druga Stefania Tian Yubing",
              year: "2020",
              link: "/pdf/IDC_Workshop_Puffy_sticking_out.pdf",
            },
            {
              venue: "CACM '20",
              title: "It Is Time for More Critical CS Education",
              authors:
                "Amy J. Ko, Alannah Oleson, Neil Ryan, Yim Register, Benjamin Xie, Mina Tari, Matthew Davidson, Stefania Druga, and Dastyni Loksa",
              year: "2020",
              link: "/pdf/CACM_Critical_CS_2020.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2019",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FABLEARN '19",
              title: "Inclusive AI literacy for kids around the world",
              authors:
                "Druga Stefania, Vu Sarah T, Likhith Eesh, and Qiu Tammy",
              year: "2019",
              link: "/pdf/FABLEARN_Inclusive_AI_2019.pdf",
            },
            {
              venue: "CHIPLAY '19",
              title:
                "Ballbit Adventure: A Physical Game for a Collaborative Racing",
              authors: "Kuang Quincy, Zhang Jiaxin, and Druga Stefania",
              year: "2019",
              link: "/pdf/CHI_PLAY_Ballbit_Adventure_2019.pdf",
            },
            {
              venue: "CHIPLAY '19",
              title:
                "The Humming Box: AI-powered Tangible Music Toy for Children",
              authors:
                "Chen Chunhan, Tang Yihan, Xie Tianyi, and Druga Stefania",
              year: "2019",
              link: "/pdf/CHI_PLAY_Humming_Box_2019.pdf",
            },
            {
              venue: "CHIPLAY '19",
              title: "Legoons: Inflatable Construction Kit for Children",
              authors: "Yang Xuefei, and Druga Stefania",
              year: "2019",
              link: "/pdf/CHI_PLAY_Legoons_2019.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2018",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "IDC '18",
              title:
                "How smart are the smart toys? children and parents' agent interaction and intelligence attribution",
              authors:
                "Druga Stefania, Williams Randi, Park Hae Won, and Breazeal Cynthia",
              year: "2018",
              link: "/pdf/IDC_How_smart_toys_2018.pdf",
            },
            {
              venue: "IDC '18",
              title:
                "\" My doll says it's ok\" a study of children's conformity to a talking doll",
              authors:
                "Williams Randi, Machado Christian Vázquez, Druga Stefania, Breazeal Cynthia, and Maes Pattie",
              year: "2018",
              link: "/pdf/IDC_WIP_Doll_2018.pdf",
            },
            {
              venue: "MIT '18",
              title:
                "Growing up with AI: Cognimates: from coding to teaching machines",
              authors: "Druga Stefania",
              year: "2018",
              link: "/pdf/MIT_Thesis_Growin_up_with_AI_Stefania_Druga_2018.pdf",
            },
            {
              venue: "MIT '18",
              title: "Cognimates",
              authors: "Druga Stefania, Vu Sarah, Likhith Eesh, and Qui Tammy",
              year: "2018",
              link: "https://www.cognimates.me",
            },
          ],
        },
      ],
    },
    {
      year: "2017",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "CHI '17",
              title:
                "Embodied learning and play in sensorimotor augmentations for kids",
              authors: "Druga Stefania",
              year: "2017",
              link: "/pdf/CHI_Workshop_Embodied_learning_2017.pdf",
            },
            {
              venue: "IDC '17",
              title:
                '"Hey Google is it OK if I eat you?" Initial Explorations in Child-Agent Interaction',
              authors:
                "Druga Stefania, Williams Randi, Breazeal Cynthia, and Resnick Mitchel",
              year: "2017",
              link: "/pdf/IDC_WIP_Hey_Google_2017.pdf",
            },
            {
              venue: "ISWC '18",
              title:
                "Motif: a wearable sonic cueing device for memory support and cognitive intervention",
              authors: "Druga Stefania, Maes Pattie, and Rieger Alexandra",
              year: "2017",
              link: "/pdf/ISWC_WIP_Motif_2017.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2014",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "SIGRAPH '14",
              title:
                "Open Source Hardware (OSHW) Supporting Interaction between Traditional Crafts and Emergent Science: Wayang Kulit over Microfluidic Interfaces",
              authors:
                "Ausareny Justyna, Kera Denisa, Druga Stefania, and Reshef Yair",
              year: "2014",
              link: "/pdf/SIGRAPH_Workshop_OSHW_2014.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2010",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "EUROMIME '10",
              title:
                "Open Education Resources Practices and Copyrights for Teachers",
              authors: "Druga Stefania",
              year: "2010",
              link: "/pdf/EUROMIME_Thesis_OER_2010.pdf",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <Link href="/">
              <motion.div
                className="inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 mb-8"
                whileHover={{ x: -5 }}
                onClick={(e) => {
                  // Allow default navigation to home page
                  // No need to preventDefault here
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </motion.div>
            </Link>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Publications
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-[#FFD6E0] mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <motion.p
              className="text-xl text-gray-700 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My research explores human-AI collaboration, multimodal systems,
              and how people learn with artificial intelligence.
            </motion.p>
          </div>

          {/* Topic Tags Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 pb-2">
            {tags.map((topic) => (
              <motion.button
                key={topic.name}
                onClick={() => handleTagClick(topic.name)}
                className={`px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center ${activeTag === topic.name ? 'ring-2 ring-offset-2 ring-gray-900' : ''}`}
                style={{ backgroundColor: topic.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {topic.name}
                {activeTag === topic.name && (
                  <Check className="ml-2 h-4 w-4" />
                )}
              </motion.button>
            ))}
            {activeTag && (
              <motion.button
                onClick={() => setActiveTag(null)}
                className="px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Clear Filter <X className="ml-2 h-4 w-4" />
              </motion.button>
            )}
          </div>
          
          {activeTag && (
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg">Showing publications tagged with <span className="font-semibold">{activeTag}</span></p>
            </motion.div>
          )}

          <div className="space-y-20">
            {publications.map((publication, i) => {
              // Check if any items in this year match the active tag
              const hasMatchingItems = !activeTag || publication.categories.some(category => 
                category.items.some(item => publicationMatchesActiveTag(item))
              );
              
              // Skip rendering this year if no matching items
              if (!hasMatchingItems) return null;
              
              return (
                <motion.div
                  key={publication.year}
                  id={`year-${publication.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="scroll-mt-32"
                >
                  <h2 className="text-3xl font-bold mb-8 relative inline-block">
                    {publication.year}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB]"
                      style={{ width: "100%" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    />
                  </h2>
                  <div className="space-y-8">
                    {publication.categories.map((category, j) => {
                      // Filter items based on active tag
                      const filteredItems = category.items.filter(item => publicationMatchesActiveTag(item));
                      
                      // Skip rendering this category if no matching items
                      if (filteredItems.length === 0) return null;
                      
                      return (
                        <div key={j}>
                          {category.title && (
                            <h3 className="text-xl font-semibold mb-4">
                              {category.title}
                            </h3>
                          )}
                          <div className="grid grid-cols-1 gap-8">
                            {filteredItems.map((item, k) => {
                              // Generate random pastel color for each publication
                              const colors = ["#FFD6E0", "#E0D6FF", "#C1F0DB"];
                              const color = colors[Math.floor(k % colors.length)];

                              return (
                            <motion.div
                              key={item.id || `${item.title}-${k}`}
                              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                              whileHover={{ y: -5 }}
                              onHoverStart={() =>
                                setHoveredItem(item.id || `${item.title}-${k}`)
                              }
                              onHoverEnd={() => setHoveredItem(null)}
                            >
                              <div
                                className="border-l-8 pl-6 py-6 px-6 relative"
                                style={{ borderColor: color }}
                              >
                                <div className="flex flex-col md:flex-row md:items-start">
                                  <div className="md:w-1/5 mb-4 md:mb-0">
                                    <span
                                      className="px-3 py-1 rounded-full text-sm font-medium inline-flex items-center"
                                      style={{ backgroundColor: `${color}40` }}
                                    >
                                      <FileText className="w-3 h-3 mr-1" />
                                      {item.venue}
                                    </span>
                                  </div>
                                  <div className="md:w-4/5">
                                    <h3 className="text-xl font-bold mb-3">
                                      {item.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 flex items-start">
                                      <Users className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                                      {item.authors}
                                    </p>
                                    {item.link && (
                                      <motion.a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                        whileHover={{ x: 5 }}
                                      >
                                        Read Paper
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                      </motion.a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )})}
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
