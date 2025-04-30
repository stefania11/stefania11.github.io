import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobile();
  
  useEffect(() => {
    if (isMobile) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isMobile, isVisible]);
  
  if (isMobile || !isVisible) return null;
  
  return (
    <motion.div
      className="fixed w-16 h-16 rounded-full bg-[#E0D6FF] mix-blend-difference pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 32,
        y: mousePosition.y - 32,
      }}
      transition={{
        type: "spring",
        mass: 0.5,
        damping: 20,
        stiffness: 100,
      }}
    />
  );
}
