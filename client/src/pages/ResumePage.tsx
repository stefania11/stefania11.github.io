import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Globe, Briefcase, GraduationCap, Award, Code, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ResumePage() {
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
    "ASU GSV Summit's 2025 Leading Women in AI, 2025",
    "NSF FMitF Grant for End-User Programming project, 2021",
    "Jacobs Foundation Grant for AI Literacy project, 2020",
    "Weizenbaum Research Fellow in Criticality of AI-based Systems Lab in Berlin, 2019",
    "Google Fellow, Google & NYU ITP, 2019",
    "LEGO Papert Fellow, MIT MediaLab, 2018",
    "Finalist of Ideas for Europe competition, EU, 2017",
    "Women to Watch in Science, Women at the frontier, 2016"
  ];
  
  const languagesContent = [
    "Romanian",
    "English",
    "French",
    "Spanish",
    "Italian",
    "Portuguese"
  ];
  
  const passionsContent = [
    "Trail running and ashtanga yoga",
    "Reading science fiction books"
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
      title: "ChemBuddy: Multimodal AI Chemistry Assistant",
      description: "An AI-powered learning companion that combines computer vision, voice interaction, and sensor data to help students understand chemistry concepts through real-time experiment analysis.",
      link: "https://chembuddy.ai"
    },
    {
      title: "MathMind Platform",
      description: "An interactive multimodal AI system designed to detect algebraic misconceptions directly from images of student work, provide targeted conceptual feedback, and generate personalized practice exercises enhanced with visual representations.",
      link: "https://mathmind.edu"
    },
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

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 print:bg-white print:pt-2">
        <div className="container mx-auto px-6 md:px-16 print:px-0">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8 print:shadow-none print:p-0">
              {/* Top navigation bar with Back and Print buttons */}
              <div className="flex justify-between items-center mb-10 print:hidden">
                <Link href="/">
                  <motion.div
                    className="inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    whileHover={{ x: -5 }}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                  </motion.div>
                </Link>
                
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePrint();
                  }}
                  className="inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4" />
                  </svg>
                  Print Resume
                </a>
              </div>
              
              {/* Header with name and contact info */}
              <header className="text-center mb-8 print:mb-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">Stefania Druga</h1>
                <div className="flex justify-center items-center flex-wrap gap-3 text-gray-600">
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
              
              {/* Section Navigation - Centered */}
              <div className="flex justify-center overflow-x-auto mb-10 pb-2 gap-2 print:hidden">
                {[
                  { id: "qualifications", label: "Qualifications", icon: <Briefcase className="h-4 w-4 mr-2" /> },
                  { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
                  { id: "awards", label: "Awards", icon: <Award className="h-4 w-4 mr-2" /> },
                  { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4 mr-2" /> },
                  { id: "projects", label: "Projects", icon: <Code className="h-4 w-4 mr-2" /> },
                  { id: "languages", label: "Languages", icon: <Globe className="h-4 w-4 mr-2" /> },
                  { id: "passions", label: "Passions", icon: <Heart className="h-4 w-4 mr-2" /> }
                ].map((section) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center whitespace-nowrap px-4 py-2 rounded-full transition-colors bg-gray-100 hover:bg-gray-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.icon}
                    {section.label}
                  </motion.a>
                ))}
              </div>
              
              {/* Awards Section - Moved to the top */}
              <motion.section
                id="awards"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
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
              
              {/* Qualifications Section */}
              <motion.section
                id="qualifications"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
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
              
              {/* Education Section - Moved right after Qualifications */}
              <motion.section
                id="education"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
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
              
              {/* Experience Section (Combined Research and Professional) */}
              <motion.section
                id="experience"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Experience
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]"></span>
                </h2>
                <div className="space-y-8 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Research Experience</h3>
                  {researchContent.map((item, index) => (
                    <motion.div 
                      key={`research-${index}`}
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
                        className="text-blue-600 hover:underline flex items-center print:text-black"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        {item.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </motion.div>
                  ))}
                  
                  <h3 className="text-xl font-semibold mb-4 mt-12">Professional Experience</h3>
                  {professionalExperienceContent.map((exp, index) => (
                    <motion.div 
                      key={`professional-${index}`}
                      className="border-l-4 border-[#FFD6E0] pl-6 py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="text-gray-600">
                          <div className="flex items-center md:justify-end">
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center md:justify-end">
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 mb-2">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline flex items-center print:text-black"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        {exp.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
              
              {/* Active Projects Section */}
              <motion.section
                id="projects"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Active Projects
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                </h2>
                <div className="grid gap-6 mt-6">
                  {activeProjectsContent.map((project, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow print:border-0 print:shadow-none print:p-3"
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
                        className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm print:bg-white print:text-black print:border print:border-black"
                      >
                        Visit Project
                        <Globe className="ml-2 h-4 w-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
              
              {/* Languages Section */}
              <motion.section
                id="languages"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Languages
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]"></span>
                </h2>
                <ul className="space-y-3 mt-6">
                  {languagesContent.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-[#E0D6FF] flex-shrink-0 mr-3 flex items-center justify-center">
                        <Globe className="h-3 w-3 text-gray-700" />
                      </span>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              {/* Passions Section */}
              <motion.section
                id="passions"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Passions
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                </h2>
                <ul className="space-y-3 mt-6">
                  {passionsContent.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-[#FFD6E0] flex-shrink-0 mr-3 flex items-center justify-center">
                        {index === 0 ? 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11.5v.5"></path><path d="m18 5.5-1.5-1"></path><path d="m18 5.5 1.5-1"></path><path d="M18 5v.5"></path><path d="M12.5 7.5a1 1 0 0 0-1-1 1 1 0 0 0-3-2c-2 0-3 3-3 3 0 1.7 1.3 3 3 3 .24 0 .5-1 1-1a1 1 0 0 0 3-2Z"></path><path d="M20 10c2 3-2 6-2 6"></path><path d="m11 15-3-2"></path><path d="m13 15.5 2.5-2"></path><path d="M11 13v8"></path><path d="m14 18-3-3-3 3"></path><path d="M6 9c0 2 2 3 3 3"></path></svg> :
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3v1a2 2 0 0 0 2 2h6"></path><path d="M10 12v-1a2 2 0 0 1 2-2h6"></path><path d="M18 21v-1a2 2 0 0 0-2-2h-6"></path><path d="M18 12v-1a2 2 0 0 0-2-2h-6"></path><path d="M4 16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h0a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h0Z"></path><path d="M4 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h0Z"></path></svg>
                        }
                      </span>
                      {index === 1 ? (
                        <span className="text-lg">
                          <a 
                            href="https://www.goodreads.com/user/show/10667897-stefania" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:underline flex items-center print:text-black"
                          >
                            {item}
                          </a>
                        </span>
                      ) : (
                        <span className="text-lg">{item}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}