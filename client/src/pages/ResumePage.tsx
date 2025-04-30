import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-8">
          <motion.div
            className="inline-flex items-center text-lg hover:underline cursor-pointer"
            whileHover={{ x: -5 }}
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Stefania Druga</h1>
            <p className="text-xl text-gray-600">Research Scientist at Google DeepMind</p>
            <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-600">
              <span>contact@stefaniadruga.com</span>
              <span>•</span>
              <a href="https://stefania11.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline">stefania11.github.io</a>
            </div>
          </header>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Education</h2>
            <div className="grid gap-6">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Ph.D. in Computer Science</h3>
                  <span className="text-gray-600">2019 - 2023</span>
                </div>
                <p className="text-gray-800">University of Washington, Seattle</p>
                <p className="text-gray-600 mt-1">Human-Centered AI Group</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">M.S. in Media Arts and Sciences</h3>
                  <span className="text-gray-600">2016 - 2018</span>
                </div>
                <p className="text-gray-800">Massachusetts Institute of Technology, Media Lab</p>
                <p className="text-gray-600 mt-1">Personal Robots Group</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">B.S. in Computer Science</h3>
                  <span className="text-gray-600">2008 - 2012</span>
                </div>
                <p className="text-gray-800">Technical University of Cluj-Napoca</p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Experience</h2>
            <div className="grid gap-8">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Research Scientist</h3>
                  <span className="text-gray-600">2023 - Present</span>
                </div>
                <p className="text-gray-800">Google DeepMind</p>
                <p className="text-gray-600 mt-1">Working on novel multimodal AI applications.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Research Assistant</h3>
                  <span className="text-gray-600">2019 - 2023</span>
                </div>
                <p className="text-gray-800">University of Washington</p>
                <p className="text-gray-600 mt-1">Human-Centered AI Group, working on AI literacy tools and platforms for children and families.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Research Assistant</h3>
                  <span className="text-gray-600">2016 - 2018</span>
                </div>
                <p className="text-gray-800">MIT Media Lab</p>
                <p className="text-gray-600 mt-1">Personal Robots Group, researching how children interact with and learn about AI systems.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Founder</h3>
                  <span className="text-gray-600">2015 - Present</span>
                </div>
                <p className="text-gray-800">Cognimates</p>
                <p className="text-gray-600 mt-1">Created the first open-source platform for K12 AI Education, enabling children to learn about and create with AI technologies.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Founder</h3>
                  <span className="text-gray-600">2012 - Present</span>
                </div>
                <p className="text-gray-800">HacKIDemia</p>
                <p className="text-gray-600 mt-1">Founded a global organization that brings hands-on STEM workshops to children around the world.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Technical</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  <li>Machine Learning / AI</li>
                  <li>Python, JavaScript, React</li>
                  <li>Data Analysis</li>
                  <li>UX Research and Design</li>
                  <li>UI Development</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  <li>Research Methodology</li>
                  <li>Public Speaking</li>
                  <li>Workshop Facilitation</li>
                  <li>Project Management</li>
                  <li>Scientific Writing</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Selected Publications</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-bold">Growing up with AI: How do children learn about AI? (2022)</p>
                <p className="text-gray-600">IMX Conference</p>
              </li>
              <li>
                <p className="font-bold">Research Priorities for Artificial Intelligence in Global Childhood Development (2022)</p>
                <p className="text-gray-600">IEEE Pervasive Computing</p>
              </li>
              <li>
                <p className="font-bold">TalkingTree: A Case Study on Designing for Agency with Generative AI in Education (2022)</p>
                <p className="text-gray-600">CSCW Conference</p>
              </li>
              <li>
                <p className="font-bold">How do children's perceptions of machine intelligence change when training & coding smart programs? (2021)</p>
                <p className="text-gray-600">IDC Conference</p>
              </li>
              <li>
                <p className="font-bold">Learning with Friends: Designing Social Robot Learning Companions for Young Children (2021)</p>
                <p className="text-gray-600">CSCL Conference</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}