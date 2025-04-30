import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Globe, Briefcase, GraduationCap, Award, Code, Heart } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState<string>("qualifications");
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const qualificationsContent = [
    "Multimodal AI",
    "Large Language Models applications.",
    "Program synthesis for computer-supported coding.",
    "Research on Creative AI applications.",
    "Extensive experience in building programming platforms for children.",
    "Teaching classes about creative learning and prototyping with AI."
  ];
  
  const awardsContent = [
    "NSF FMitF Grant for End-User Programming project, 2021",
    "Jacobs Foundation Grant for AI Literacy project, 2020",
    "Weizenbaum Research Fellow in Criticality of AI-based Systems Lab in Berlin, 2019",
    "Google Fellow, Google & NYU ITP, 2019",
    "LEGO Papert Fellow, MIT MediaLab, 2018",
    "Finalist of Ideas for Europe competition, EU, 2017",
    "Women to Watch in Science, Women at the frontier, 2016"
  ];
  
  const researchContent = [
    {
      title: "Research Scientist, Google Gemini",
      period: "January 2024 - Present",
      description: "Working on multimodal AI applications",
      link: "https://gemini.google.com"
    },
    {
      title: "Principal Researcher, Center of Applied AI Research U. Chicago",
      period: "July 2023 - January 2024",
      description: "Working on LLM applications for social impact",
      link: "https://www.chicagobooth.edu/research/center-for-applied-artificial-intelligence"
    },
    {
      title: "Research Intern, HAX Microsoft Research",
      period: "March 2023 - July 2023",
      description: "Working on novel LLM applications",
      link: "https://www.microsoft.com/en-us/research/group/hax-team"
    },
    {
      title: "Product Engineer, Fixie.ai",
      period: "December 2022 - March 2023",
      description: [
        "Help prototype new LLM platform for distributed specialized LLM agents",
        "Designed and ran user-studies to evaluate the platform",
        "Organized large-scale community events for prototyping and building LLM Agents"
      ],
      link: "https://fixie.ai"
    },
    {
      title: "AI Research Resident, X Moonshot Factory",
      period: "March 2022 – October 2022",
      description: "Build future developper tools with AI.",
      link: "https://x.company/"
    }
  ];
  
  const activeProjectsContent = [
    {
      title: "Cognimates",
      description: "AI education platform for children to train their own machine learning models. Users can also code smart games using their custom models.",
      link: "https://cognimates.me"
    },
    {
      title: "AI Literacy Playground",
      description: "Playground for AI explainability allowing users to classify custom datasets. Users may also identify anchors in images to support algorithms interpretability.",
      link: "http://aiplayground.me/"
    },
    {
      title: "TileCode",
      description: "TileCode is an app for designing, coding, and playing video games directly on low-cost arcade gaming handhelds. Our starting point are retro video games to be created via a set of visual rules.",
      link: "https://microsoft.github.io/tilecode/"
    }
  ];
  
  const educationContent = [
    {
      degree: "Ph.D­Information School",
      major: "Informatics",
      institution: "University of Washington",
      year: "2023",
      gpa: "3.9/4"
    },
    {
      degree: "Master of Science",
      major: "Media Arts and Science",
      institution: "Massachusetts Institute of Technology",
      year: "2018",
      gpa: "5/5"
    },
    {
      degree: "Master of Science",
      major: "Instructional Design",
      institution: "Technical University of Lisbon, Poitiers University, UNED Madrid",
      year: "2008",
      gpa: "5/5"
    },
    {
      degree: "Bachelor of Communication",
      major: "Public Relations & Communication",
      institution: "Polytechnic University of Timisoara",
      year: "2005",
      gpa: "5/5"
    }
  ];
  
  const professionalExperienceContent = [
    {
      title: "Creative AI Track Lead, MIT MediaLab Berlin",
      location: "Berlin, Germany",
      period: "Jun. 2018 – Jul. 2018",
      description: [
        "Designed and ran the machine learning for creative AI track, selected 10 participants from 300 applications.",
        "Organized a series of lectures, talks, and site­visits to partner organizations.",
        "Mentored students on their projects, documented and published final results."
      ],
      link: "http://berlin.media.mit.edu"
    },
    {
      title: "Co-founder, HacKIDemia",
      location: "Global",
      period: "Jan. 2012 – Nov. 2020",
      description: [
        "Overseeing HacKIDemia, a global organization for children STEM education.",
        "We are designing a 21st century curriculum by using latest technologies and scientific inventions.",
        "We trained local teams in 40 countries with 600 mentors and 10.000 children involved to date."
      ],
      link: "https://hackidemia.com"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-8 mt-4">
            <Link href="/">
              <motion.div
                className="inline-flex items-center text-lg font-medium cursor-pointer"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </motion.div>
            </Link>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <header className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">Stefania Druga</h1>
                <div className="flex justify-center items-center space-x-3 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    <span>stefania@hackidemia.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    <a href="https://stefania11.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline">stefania11.github.io</a>
                  </div>
                </div>
              </header>
              
              {/* Section Navigation */}
              <div className="flex overflow-x-auto mb-10 pb-2 -mx-2 px-2 gap-2">
                {[
                  { id: "qualifications", label: "Qualifications", icon: <Briefcase className="h-4 w-4 mr-2" /> },
                  { id: "awards", label: "Awards", icon: <Award className="h-4 w-4 mr-2" /> },
                  { id: "research", label: "Research", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
                  { id: "projects", label: "Projects", icon: <Code className="h-4 w-4 mr-2" /> },
                  { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
                  { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4 mr-2" /> }
                ].map((section) => (
                  <motion.button
                    key={section.id}
                    className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                      activeSection === section.id 
                        ? "bg-black text-white" 
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.icon}
                    {section.label}
                  </motion.button>
                ))}
              </div>
              
              {/* Qualifications Section */}
              {activeSection === "qualifications" && (
                <motion.section
                  key="qualifications"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Qualifications Summary
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                  </h2>
                  <ul className="space-y-3 mt-6">
                    {qualificationsContent.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="inline-block w-6 h-6 rounded-full bg-[#E0D6FF] flex-shrink-0 mr-3"></span>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              )}
              
              {/* Awards Section */}
              {activeSection === "awards" && (
                <motion.section
                  key="awards"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Awards
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C1F0DB]"></span>
                  </h2>
                  <ul className="space-y-3 mt-6">
                    {awardsContent.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="inline-block w-6 h-6 rounded-full bg-[#C1F0DB] flex-shrink-0 mr-3 flex items-center justify-center">
                          <Award className="h-3 w-3 text-gray-700" />
                        </span>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              )}
              
              {/* Research Experience Section */}
              {activeSection === "research" && (
                <motion.section
                  key="research"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Research Experience
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]"></span>
                  </h2>
                  <div className="space-y-8 mt-6">
                    {researchContent.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="border-l-4 border-[#E0D6FF] pl-6 py-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-600 mb-2">{item.period}</p>
                        {Array.isArray(item.description) ? (
                          <ul className="list-disc list-inside space-y-1 mb-2">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-2">{item.description}</p>
                        )}
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          {item.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
              
              {/* Active Projects Section */}
              {activeSection === "projects" && (
                <motion.section
                  key="projects"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Active Projects
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                  </h2>
                  <div className="grid gap-6 mt-6">
                    {activeProjectsContent.map((project, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-[#FFD6E0] mr-2"></span>
                          {project.title}
                        </h3>
                        <p className="mb-4">{project.description}</p>
                        <a 
                          href={project.link}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm"
                        >
                          Visit Project
                          <Globe className="ml-2 h-4 w-4" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
              
              {/* Education Section */}
              {activeSection === "education" && (
                <motion.section
                  key="education"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Education
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C1F0DB]"></span>
                  </h2>
                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Major</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {educationContent.map((edu, index) => (
                          <motion.tr 
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{edu.degree}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{edu.major}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{edu.institution}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{edu.year}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{edu.gpa}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.section>
              )}
              
              {/* Professional Experience Section */}
              {activeSection === "experience" && (
                <motion.section
                  key="experience"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Professional Experience
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]"></span>
                  </h2>
                  <div className="space-y-8 mt-6">
                    {professionalExperienceContent.map((exp, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex flex-wrap justify-between items-start mb-3">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm">{exp.period}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{exp.location}</p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-gray-700">{desc}</li>
                          ))}
                        </ul>
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-blue-600 hover:underline"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          {exp.link.replace(/^https?:\/\//, '')}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}