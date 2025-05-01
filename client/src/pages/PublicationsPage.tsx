import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PublicationsPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
              venue: "SIGCHI 2025",
              title: "Multimodal AI Interfaces: Designing for Human-AI Collaboration in Creative Contexts",
              authors: "Stefania Druga, Tianyi Xie, and Melanie Mitchell",
              year: "2025",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/SIGCHI_2025_Multimodal_AI_Interfaces.pdf"
            },
            {
              id: "2025-2",
              venue: "ICLR 2025",
              title: "Knowledge Graphs for Multimodal Reasoning: Connecting Images, Text and Structured Data",
              authors: "Stefania Druga, Cynthia Breazeal, and Michael Terry",
              year: "2025",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/ICLR_2025_Knowledge_Graphs_Multimodal.pdf"
            },
            {
              id: "2025-3",
              venue: "Nature Machine Intelligence",
              title: "Learning from Children: How Youth Conceptualize and Build with Multimodal AI Systems",
              authors: "Stefania Druga, Amy J. Ko, and Randi Williams",
              year: "2025",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/Nature_MI_2025_Learning_from_Children.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2024",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FACCT 2024",
              title: "From \"AI\" to Probabilistic Automation: How Does Anthropomorphization of Technical Systems Descriptions Influence Trust?",
              authors: "Nanna Inia, Stefania Druga, Peter Zukerman, and Emily Bender",
              year: "2024"
            },
            {
              venue: "JCHE 2024",
              title: "A Benchmark for Math Misconceptions: Bridging Gaps in Middle School Algebra with AI-Supported Personalized Instruction",
              authors: "Nancy Otero, and Stefania Druga",
              year: "2024"
            }
          ]
        }
      ]
    },
    {
      year: "2023",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FAccT '23",
              title: "Language Models and Society: Bridging Research and Policy",
              authors: "Stefania Druga, Ioana Baldini, Mihaela Vorvoreanu, and Rishi Bommasani",
              year: "2023",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/FAccT_2023_Language_Models_Society.pdf"
            },
            {
              venue: "C&C'23",
              title: "The Prompt Artists (Honorable Mention)",
              authors: "Minsuk Chang, Stefania Druga, Alex Fiannaca, Pedro Vergani, Chinmay Kulkarni, Carrie Cai, and Michael Terry",
              year: "2023"
            },
            {
              venue: "Proceedings TOCE",
              title: "AI Friends: Designing Creative Coding Assistants for Families",
              authors: "Stefania Druga, and Amy J. Ko",
              year: "2023"
            },
            {
              venue: "Proceedings VL/HCC",
              title: "Scratch Copilot Evaluation: Assessing AI-Assisted Creative Coding for Families",
              authors: "Stefania Druga, and Nancy Otero",
              year: "2023"
            },
            {
              venue: "MAKE 2023",
              title: "Generative AI for Makers: AI Has Truly Arrived — and It's Here to Help You Make and Craft",
              authors: "Stefania Druga",
              year: "2023"
            },
            {
              venue: "IDC '23",
              title: "Factors used by Children to Make Sense of Algorithmic Fairness",
              authors: "Jean Salac, Rotem Landesman, Stefania Druga, and Amy J. Ko",
              year: "2023"
            },
            {
              venue: "arXiv 2023",
              title: "A Word is Worth a Thousand Pictures: Prompts as AI Design Material",
              authors: "Chinmay Kulkarni, Stefania Druga, Minsuk Chang, Alex Fiannaca, Carrie Cai, and Michael Terry",
              year: "2023"
            },
            {
              venue: "University of Washington",
              title: "PhD Thesis: Creative AI Literacies for Families",
              authors: "Druga Stefania",
              year: "2023"
            },
            {
              venue: "MAKE 2023",
              title: "Book: Creative AI, A Guide to Making and Tinkering with Artificial Intelligence",
              authors: "Druga Stefania",
              year: "2023"
            }
          ]
        }
      ]
    },
    {
      year: "2022",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "MIT PRESS 2022",
              title: "The 4As: Ask, Adapt, Author, Analyze: AI Literacy Framework for Families",
              authors: "Druga Stefania, Yip Jason, Preston Michael, and Dillon Devin",
              year: "2022",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/MITP2022_4As_AI_Literacy_Framework_for_Families.pdf"
            },
            {
              venue: "CHI '22",
              title: "Family as a Third Space for AI Literacies: How do children and parents learn about AI together?",
              authors: "Stefania Druga, Fee Christoph, and Amy J. Ko",
              year: "2022",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/Druga2022FamilyAILiteracy.pdf"
            },
            {
              venue: "IDC '22",
              title: "How families design and program games: a qualitative analysis of a 4-week online in-home study",
              authors: "Stefania Druga, Thomas Ball, and Amy J. Ko",
              year: "2022",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IDC_2022_TileCode_Families.pdf"
            },
            {
              venue: "ITICSE '22",
              title: "The Landscape of Teaching Resources for AI Education",
              authors: "Stefania Druga, Nancy Otero, and Amy J. Ko",
              year: "2022",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/Final_ITICSE_Submission___Landscape_AI_ressources.pdf"
            },
            {
              venue: "IJCCI 2022",
              title: "Examining voice assistants in the context of children's speech",
              authors: "Min Kyong Kim, Stefania Druga, Shaghayegh Esmaeili, Julia Woodward, Alex Shaw, Ayushi Jain, Jaida Langham, Kristy Hollingshead, Silvia B Lovato, Erin Beneteau, and others",
              year: "2022",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IJCCI_Examining_voice_assistants_in_the_context_of_children_speech.pdf"
            },
            {
              venue: "UW 2022",
              title: "Interest-Driven Creative Programming for Youth with AI Friends",
              authors: "Druga Stefania",
              year: "2022",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/GE_2022_Interest_Driven_Creative_Programming_for_Youth.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2021",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "IDC 2021",
              title: "How do children's perceptions of machine intelligence change when training and coding smart programs?",
              authors: "Stefania Druga, and Amy J. Ko",
              year: "2021",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IDC_Machine_Intelligence_Perception_2021.pdf"
            },
            {
              venue: "CLS 2021",
              title: "Imagining Future Designs of Tools for Youth Data Literacies",
              authors: "Regina Cheng, Stefania Druga, Emilia Gan, Catherine D'Ignazio, Rahul Bhargava, Victor Lee, Camillia Matuk, Tamara Clegg, Andee Rubin, and Yasmin Kafai",
              year: "2021",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/CLS_Future_Data_Literacies_Workshop_at_Connected_Learning_Summit_July_2021.pdf"
            },
            {
              venue: "KDD 2021",
              title: "A Design Framework for Citizen-Science AI Platforms for Families",
              authors: "Fangqing He*, Yifeng Wang*, and Stefania Druga",
              year: "2021",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/FEED_A_Design_Framework_for_Citizen_Science_AI_Platforms_for_Families_2021.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2020",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "JoDS 2020",
              title: "The 4As: Ask, Adapt, Author, Analyze AI Literacy Framework for Families",
              authors: "Druga Stefania, Yip Jason, Preston Michael, and Dillon Devin",
              year: "2020",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/JODS_Author_Draft_The_4As__Ask__Adapt__Author__Analyze___AI_Literacy_Framework_for_Families.pdf"
            },
            {
              venue: "IDC 2020",
              title: "Research Toolkit for Future-Oriented Play with Families",
              authors: "Michelson Rebecca Druga Stefania",
              year: "2020",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/INTERACT_Camera_Ready_Smart_Toys_Design.pdf"
            },
            {
              venue: "IDC 2020",
              title: "\"Puffy and Sticking Out\" CollaborativeImage Classification with Kids",
              authors: "Druga Stefania Tian Yubing",
              year: "2020",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IDC_Workshop_Puffy_sticking_out.pdf"
            },
            {
              venue: "CACM 2020",
              title: "It Is Time for More Critical CS Education",
              authors: "Amy J. Ko, Alannah Oleson, Neil Ryan, Yim Register, Benjamin Xie, Mina Tari, Matthew Davidson, Stefania Druga, and Dastyni Loksa",
              year: "2020",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/CACM_Critical_CS_2020.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2019",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FABLEARN 2019",
              title: "Inclusive AI literacy for kids around the world",
              authors: "Druga Stefania, Vu Sarah T, Likhith Eesh, and Qiu Tammy",
              year: "2019",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/FABLEARN_Inclusive_AI_2019.pdf"
            },
            {
              venue: "CHIPLAY 2019",
              title: "Ballbit Adventure: A Physical Game for a Collaborative Racing",
              authors: "Kuang Quincy, Zhang Jiaxin, and Druga Stefania",
              year: "2019",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/CHI_PLAY_Ballbit_Adventure_2019.pdf"
            },
            {
              venue: "CHIPLAY 2019",
              title: "The Humming Box: AI-powered Tangible Music Toy for Children",
              authors: "Chen Chunhan, Tang Yihan, Xie Tianyi, and Druga Stefania",
              year: "2019",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/CHI_PLAY_Humming_Box_2019.pdf"
            },
            {
              venue: "CHIPLAY 2019",
              title: "Legoons: Inflatable Construction Kit for Children",
              authors: "Yang Xuefei, and Druga Stefania",
              year: "2019",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/CHI_PLAY_Legoons_2019.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2018",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "IDC 2018",
              title: "How smart are the smart toys? children and parents' agent interaction and intelligence attribution",
              authors: "Druga Stefania, Williams Randi, Park Hae Won, and Breazeal Cynthia",
              year: "2018",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IDC_How_smart_toys_2018.pdf"
            },
            {
              venue: "IDC 2018",
              title: "\" My doll says it's ok\" a study of children's conformity to a talking doll",
              authors: "Williams Randi, Machado Christian Vázquez, Druga Stefania, Breazeal Cynthia, and Maes Pattie",
              year: "2018",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IDC_WIP_Doll_2018.pdf"
            },
            {
              venue: "MIT 2018",
              title: "Growing up with AI: Cognimates: from coding to teaching machines",
              authors: "Druga Stefania",
              year: "2018",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/MIT_Thesis_Growin_up_with_AI_Stefania_Druga_2018.pdf"
            },
            {
              venue: "MIT 2018",
              title: "Cognimates",
              authors: "Druga Stefania, Vu Sarah, Likhith Eesh, and Qui Tammy",
              year: "2018",
              link: "https://www.cognimates.me"
            }
          ]
        }
      ]
    },
    {
      year: "2017",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "CHI 2017",
              title: "Embodied learning and play in sensorimotor augmentations for kids",
              authors: "Druga Stefania",
              year: "2017",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/CHI_Workshop_Embodied_learning_2017.pdf"
            },
            {
              venue: "IDC 2017",
              title: "\" Hey Google is it OK if I eat you?\" Initial Explorations in Child-Agent Interaction",
              authors: "Druga Stefania, Williams Randi, Breazeal Cynthia, and Resnick Mitchel",
              year: "2017",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/IDC_WIP_Hey_Google_2017.pdf"
            },
            {
              venue: "ISWC 2018",
              title: "Motif: a wearable sonic cueing device for memory support and cognitive intervention",
              authors: "Druga Stefania, Maes Pattie, and Rieger Alexandra",
              year: "2017",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/ISWC_WIP_Motif_2017.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2014",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "SIGRAPH 2014",
              title: "Open Source Hardware (OSHW) Supporting Interaction between Traditional Crafts and Emergent Science: Wayang Kulit over Microfluidic Interfaces",
              authors: "Ausareny Justyna, Kera Denisa, Druga Stefania, and Reshef Yair",
              year: "2014",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/SIGRAPH_Workshop_OSHW_2014.pdf"
            }
          ]
        }
      ]
    },
    {
      year: "2010",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "EUROMIME 2010",
              title: "Open Education Resources Practices and Copyrights for Teachers",
              authors: "Druga Stefania",
              year: "2010",
              link: "https://github.com/stefania11/stefania11.github.io/raw/main/assets/pdf/EUROMIME_Thesis_OER_2010.pdf"
            }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <Link href="/">
              <motion.div
                className="inline-flex items-center text-lg font-medium cursor-pointer mb-8"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
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
              My research explores human-AI collaboration, multimodal systems, and how people learn with artificial intelligence.
            </motion.p>
          </div>

          {/* Year Pills Navigation */}
          <div className="flex overflow-x-auto gap-2 mb-12 pb-2">
            {publications.map((pub) => (
              <motion.a
                key={pub.year}
                href={`#year-${pub.year}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap flex items-center"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {pub.year}
              </motion.a>
            ))}
          </div>

          <div className="space-y-20">
            {publications.map((publication, i) => (
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
                    style={{ width: '100%' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  />
                </h2>
                <div className="space-y-8">
                  {publication.categories.map((category, j) => (
                    <div key={j}>
                      {category.title && <h3 className="text-xl font-semibold mb-4">{category.title}</h3>}
                      <div className="grid grid-cols-1 gap-8">
                        {category.items.map((item, k) => {
                          // Generate random pastel color for each publication
                          const colors = ['#FFD6E0', '#E0D6FF', '#C1F0DB'];
                          const color = colors[Math.floor(k % colors.length)];
                          
                          return (
                            <motion.div 
                              key={item.id || `${item.title}-${k}`} 
                              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                              whileHover={{ y: -5 }}
                              onHoverStart={() => setHoveredItem(item.id || `${item.title}-${k}`)}
                              onHoverEnd={() => setHoveredItem(null)}
                            >
                              <div className="border-l-8 pl-6 py-6 px-6 relative" style={{ borderColor: color }}>
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
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
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
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}