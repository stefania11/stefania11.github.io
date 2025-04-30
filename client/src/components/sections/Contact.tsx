import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, BookOpen } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to a server
      console.log("Form data:", data);
      
      // Simulate successful submission
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5" />, 
      text: "contact@stefaniadruga.com", 
      href: "mailto:contact@stefaniadruga.com",
      color: "#FFD6E0"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      text: "University of Washington, Seattle, WA", 
      href: undefined,
      color: "#C1F0DB"
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      text: "+1 (206) 555-0123", 
      href: "tel:+12065550123",
      color: "#E0D6FF"
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", ariaLabel: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", ariaLabel: "GitHub" },
    { icon: <BookOpen className="w-5 h-5" />, href: "https://medium.com", ariaLabel: "Medium" },
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Contact
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-lg mb-8">
              I'm always interested in new research collaborations, speaking opportunities, 
              or discussions about AI education and family learning.
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className={`w-10 h-10 rounded-full bg-[${item.color}] flex items-center justify-center mr-4`}
                  >
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="hover:underline">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#FFD6E0] transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 focus:ring-2 focus:ring-[#E0D6FF]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="border-gray-300 focus:ring-2 focus:ring-[#E0D6FF]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-300 focus:ring-2 focus:ring-[#E0D6FF]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          className="border-gray-300 focus:ring-2 focus:ring-[#E0D6FF]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
