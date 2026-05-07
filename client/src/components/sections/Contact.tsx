import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "stefania [a] hackidemia dot com",
      href: undefined,
      color: "#FFD6E0",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Tokyo, Japan",
      href: undefined,
      color: "#C1F0DB",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Contact
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-lg mb-8">
              I'm always interested in new research collaborations, speaking
              opportunities, or discussions about AI education and family
              learning.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-[${item.color}] flex items-center justify-center mr-5`}
                  >
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="hover:underline text-lg">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-lg">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
