import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share, User, Tag, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SiSubstack } from "react-icons/si";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock blog post data - in a real app, you would fetch this from a CMS or API
  // based on the slug parameter
  const blogPosts = [
    {
      id: "post-1",
      title: "Building Intuitive Multimodal AI Interfaces for Education",
      date: "May 15, 2025",
      author: "Stefania Druga",
      content: `
        <p class="mb-4">Multimodal AI interfaces have the potential to revolutionize how we teach and learn by engaging multiple senses simultaneously. In educational settings, these interfaces can help students grasp complex concepts more intuitively by combining visual, auditory, and interactive elements.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Multimodality Matters in Education</h2>
        
        <p class="mb-4">Different students learn in different ways. Some are visual learners who understand concepts better through images and diagrams. Others are auditory learners who benefit from verbal explanations. And some are kinesthetic learners who need hands-on experiences to fully grasp new ideas.</p>
        
        <p class="mb-4">Multimodal AI interfaces address these varying learning styles by presenting information in multiple formats simultaneously. This approach doesn't just accommodate different learning preferences—it actively strengthens connections between different types of understanding.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
        
        <p class="mb-4">Here are some examples of how multimodal AI interfaces are being used in educational settings:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Interactive science simulations</strong> that combine visual models with verbal explanations and allow students to manipulate variables.</li>
          <li class="mb-2"><strong>Language learning apps</strong> that use speech recognition, text, and images to create immersive learning experiences.</li>
          <li class="mb-2"><strong>Math tutoring systems</strong> that provide step-by-step visual and verbal guidance, adapting to each student's pace and learning style.</li>
        </ul>
        
        <p class="mb-4">One project I've been working on involves using multimodal AI to help children learn programming concepts. By combining visual block-based programming with natural language instructions and interactive feedback, we've created an environment where children can learn computational thinking in a way that feels intuitive and engaging.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Challenges and Considerations</h2>
        
        <p class="mb-4">Despite their potential, multimodal AI interfaces in education face several challenges:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Cognitive load:</strong> Too much information across multiple modalities can overwhelm learners.</li>
          <li class="mb-2"><strong>Accessibility:</strong> Interfaces must be designed to be accessible to students with various abilities.</li>
          <li class="mb-2"><strong>Technical requirements:</strong> Schools with limited technological resources may struggle to implement these solutions.</li>
        </ul>
        
        <p class="mb-4">As we continue to develop and refine multimodal AI interfaces for education, it's essential to keep these considerations in mind and conduct thorough testing with diverse groups of students.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
        
        <p class="mb-4">The future of multimodal AI in education looks promising. As technologies like natural language processing, computer vision, and speech recognition continue to advance, we can expect even more sophisticated and personalized learning experiences.</p>
        
        <p class="mb-4">The key will be creating interfaces that don't just use multiple modalities for their own sake, but thoughtfully integrate them to support meaningful learning experiences that are accessible to all students.</p>
      `,
      coverImage: "/assets/images/blog/multimodal-ai-education.jpg",
      tags: ["AI Education", "Multimodal AI"],
      slug: "multimodal-ai-education"
    },
    {
      id: "post-2",
      title: "The Future of AI Research: Trends to Watch in 2025",
      date: "April 22, 2025",
      author: "Stefania Druga",
      content: `
        <p class="mb-4">As we move through 2025, several key trends are emerging in AI research that will likely shape both academic inquiry and industry applications in the coming years.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">1. Multimodal Foundation Models</h2>
        
        <p class="mb-4">While large language models dominated the AI landscape in previous years, we're now seeing the rise of truly multimodal foundation models that can process and generate across text, images, audio, and video simultaneously. These models are showing remarkable capabilities in understanding context across modalities and generating cohesive, creative outputs that blend different media types.</p>
        
        <p class="mb-4">Research directions to watch include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Models that can reason across modalities rather than just process them independently</li>
          <li class="mb-2">Integration of physical world understanding through robotics applications</li>
          <li class="mb-2">More efficient architectures that reduce the massive computational requirements</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">2. AI for Scientific Discovery</h2>
        
        <p class="mb-4">AI systems are increasingly being applied to accelerate scientific discovery across fields including materials science, drug discovery, and fundamental physics. What's particularly exciting is the emergence of AI systems that can not just predict outcomes but suggest novel hypotheses and experimental designs.</p>
        
        <p class="mb-4">Recent breakthroughs have shown AI systems that can:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Design new molecules with specific properties</li>
          <li class="mb-2">Identify patterns in astronomical data that human scientists missed</li>
          <li class="mb-2">Generate and test scientific hypotheses in automated labs</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">3. Interpretable and Trustworthy AI</h2>
        
        <p class="mb-4">As AI systems become more complex and are deployed in increasingly sensitive domains, the need for interpretability and trustworthiness has never been greater. Research in this area is moving beyond simple explanations of individual predictions to more comprehensive approaches to understanding model behavior.</p>
        
        <p class="mb-4">Key developments include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">New mathematical frameworks for proving properties of neural networks</li>
          <li class="mb-2">Techniques for evaluating model robustness across diverse contexts</li>
          <li class="mb-2">Methods for detecting and mitigating bias in complex systems</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">4. AI for Sustainability</h2>
        
        <p class="mb-4">With increasing awareness of climate change and environmental challenges, AI research is focusing more on sustainability applications. This includes both using AI to address environmental problems and making AI itself more environmentally friendly.</p>
        
        <p class="mb-4">Notable research directions include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Climate modeling and prediction at unprecedented scales</li>
          <li class="mb-2">Optimization of energy systems and smart grids</li>
          <li class="mb-2">More energy-efficient AI training and inference techniques</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">5. Human-AI Collaboration</h2>
        
        <p class="mb-4">Rather than viewing AI as either a tool or a replacement for human work, research is increasingly focusing on how humans and AI can work together effectively, leveraging the strengths of both.</p>
        
        <p class="mb-4">Exciting developments in this space include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">AI systems that can adapt to individual human work styles and preferences</li>
          <li class="mb-2">Collaborative interfaces that make AI capabilities more accessible to non-experts</li>
          <li class="mb-2">Studies on how AI affects human skill development and creativity</li>
        </ul>
        
        <p class="mb-4">As these research trends continue to develop, we can expect to see increasingly sophisticated AI applications that address complex real-world problems while working harmoniously with human users.</p>
      `,
      coverImage: "/assets/images/blog/ai-research-trends.jpg",
      tags: ["AI Research", "Industry Insights"],
      slug: "ai-research-trends-2025"
    },
    {
      id: "post-3",
      title: "Tutorial: Creating AI-Enhanced Learning Activities for Children",
      date: "March 8, 2025",
      author: "Stefania Druga",
      content: `
        <p class="mb-4">AI tools offer exciting new possibilities for creating engaging learning activities for children. In this tutorial, I'll walk through the process of designing educational experiences that thoughtfully incorporate AI while promoting creativity and critical thinking.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 1: Define Your Learning Objectives</h2>
        
        <p class="mb-4">Before incorporating any technology, start by clearly defining what you want children to learn. Consider:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Specific knowledge or skills you want to develop</li>
          <li class="mb-2">Age-appropriate learning goals</li>
          <li class="mb-2">How you'll measure or observe progress</li>
        </ul>
        
        <p class="mb-4">For this tutorial, let's say our objective is to help 8-10 year olds develop storytelling skills while learning about different ecosystems.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 2: Choose Appropriate AI Tools</h2>
        
        <p class="mb-4">Many AI tools are available, but not all are suitable for children. Look for:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Age-appropriate content and safety features</li>
          <li class="mb-2">Intuitive interfaces that children can navigate</li>
          <li class="mb-2">Tools that complement rather than replace creative thinking</li>
        </ul>
        
        <p class="mb-4">For our example, we might use:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">A child-friendly text-to-image generator for creating ecosystem visuals</li>
          <li class="mb-2">A simple AI assistant that can answer questions about animals and plants</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 3: Design the Activity Structure</h2>
        
        <p class="mb-4">Create a clear structure that integrates AI tools as part of a broader learning experience:</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Example Activity: "Ecosystem Storytellers"</h3>
        
        <ol class="list-decimal pl-6 mb-4">
          <li class="mb-2">
            <strong>Introduction (15 minutes):</strong> Show children pictures of different ecosystems (desert, rainforest, ocean) and discuss the plants and animals that live there.
          </li>
          <li class="mb-2">
            <strong>Research Phase (20 minutes):</strong> Children use the AI assistant to learn about an ecosystem of their choice, asking questions like "What animals live in the rainforest?" or "How do plants survive in the desert?"
          </li>
          <li class="mb-2">
            <strong>Story Planning (15 minutes):</strong> Children create a story outline featuring animals from their chosen ecosystem, deciding on characters and a simple plot.
          </li>
          <li class="mb-2">
            <strong>Illustration Creation (20 minutes):</strong> Using the text-to-image generator, children create illustrations for their story by describing scenes from their ecosystem.
          </li>
          <li class="mb-2">
            <strong>Storytelling (25 minutes):</strong> Children finalize their stories and share them with the group.
          </li>
          <li class="mb-2">
            <strong>Reflection (15 minutes):</strong> Discuss what children learned about ecosystems and how the AI tools helped their creative process.
          </li>
        </ol>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 4: Prepare Supporting Materials</h2>
        
        <p class="mb-4">Create resources to guide the activity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Simple instructions for using the AI tools</li>
          <li class="mb-2">Ecosystem fact sheets as backup information</li>
          <li class="mb-2">Story planning templates</li>
          <li class="mb-2">Questions to guide reflection</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 5: Facilitate the Learning Experience</h2>
        
        <p class="mb-4">When running the activity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Model how to use the AI tools appropriately</li>
          <li class="mb-2">Encourage children to think critically about AI-generated information</li>
          <li class="mb-2">Provide support when needed, but allow for exploration</li>
          <li class="mb-2">Emphasize that AI is a tool to enhance creativity, not replace it</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 6: Assess and Iterate</h2>
        
        <p class="mb-4">After running the activity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Observe which parts of the activity engaged children most</li>
          <li class="mb-2">Note any challenges children faced with the AI tools</li>
          <li class="mb-2">Gather feedback from children about their experience</li>
          <li class="mb-2">Refine the activity based on your observations</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Tips for Success</h2>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Balance screen time</strong> with hands-on activities</li>
          <li class="mb-2"><strong>Discuss AI literacy</strong> as part of the activity</li>
          <li class="mb-2"><strong>Have non-digital alternatives</strong> ready in case of technical issues</li>
          <li class="mb-2"><strong>Focus on the learning objectives</strong> rather than the technology</li>
        </ul>
        
        <p class="mb-4">By thoughtfully incorporating AI tools into learning activities, we can create engaging experiences that help children develop important skills while also learning to interact with AI in productive ways.</p>
      `,
      coverImage: "/assets/images/blog/ai-learning-activities.jpg",
      tags: ["Tutorials", "AI Education"],
      slug: "ai-learning-activities-tutorial"
    }
  ];
  
  // Find the blog post that matches the current slug
  const currentPost = blogPosts.find(post => post.slug === slug);
  
  // If no matching post is found, show a "not found" message
  if (!currentPost) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog">
              <a className="inline-flex items-center text-blue-600 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Blog Posts
              </a>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  // Find related posts based on tags (excluding the current post)
  const relatedPosts = blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 2);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Cover Image */}
        <div className="relative h-[40vh] md:h-[50vh] bg-gray-100">
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ 
              backgroundImage: `url(${currentPost.coverImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-16 relative h-full flex items-end pb-12">
            <div className="text-white max-w-2xl">
              <Link href="/blog">
                <a className="inline-flex items-center text-white opacity-80 hover:opacity-100 mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Blog Posts
                </a>
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {currentPost.title}
              </h1>
              <div className="flex flex-wrap items-center text-sm opacity-80">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  <User className="w-4 h-4 mr-1" />
                  <span>{currentPost.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="bg-gray-50 py-6 border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center mb-4 md:mb-0">
                <SiSubstack className="w-5 h-5 mr-2 text-gray-700" />
                <span className="text-gray-700 font-medium">Enjoy this post? Subscribe for updates:</span>
              </div>
              <a 
                href="https://stefaniadruga.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe to Newsletter
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="py-12 px-6 md:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Article Content */}
              <div className="lg:w-2/3">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                </article>
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.map(tag => (
                      <Link href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
                        <a className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                          {tag}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8">
                  <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                    <Share className="w-4 h-4 mr-2" />
                    Share this post
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z" />
                      </svg>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href={`mailto:?subject=${encodeURIComponent(currentPost.title)}&body=${encodeURIComponent(window.location.href)}`}
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 mt-12 lg:mt-0">
                {/* Author Info */}
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                  <p className="text-gray-600 mb-4">
                    Stefania Druga is a researcher and educator specializing in AI education, 
                    child-computer interaction, and creative computing. Her work focuses on 
                    making AI more accessible and understandable for learners of all ages.
                  </p>
                  <a 
                    href="https://linkedin.com/in/stefania-druga" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 inline-flex items-center text-sm font-medium"
                  >
                    View Profile
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </a>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map(post => (
                        <Link href={`/blog/${post.slug}`} key={post.id}>
                          <a className="block group">
                            <div className="flex items-start">
                              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                <div 
                                  className="w-full h-full bg-center bg-cover"
                                  style={{ 
                                    backgroundImage: `url(${post.coverImage})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                  }}
                                />
                              </div>
                              <div className="ml-4">
                                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                  {post.title}
                                </h4>
                                <div className="text-sm text-gray-500 mt-1">
                                  {post.date}
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Newsletter Signup (Sidebar version) */}
                <div className="bg-gray-800 text-white p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <SiSubstack className="w-6 h-6 mr-3 text-gray-300" />
                    <h3 className="text-lg font-semibold">Subscribe to Updates</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Get new blog posts and updates delivered directly to your inbox.
                  </p>
                  <a 
                    href="https://stefaniadruga.substack.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors w-full justify-center"
                  >
                    Subscribe to Newsletter
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
