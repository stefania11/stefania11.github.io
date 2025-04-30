import { content } from "@/data/content";

export default function About() {
  const { about } = content;
  
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          About Me
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {about.infoBoxes.map((box, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className={`text-xl font-bold mb-3 text-[${box.color}]`}>{box.title}</h3>
                <ul className="space-y-3">
                  {box.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
