import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Talks from "@/components/sections/Talks";
import Publications from "@/components/sections/Publications";
import CursorFollower from "@/components/ui/cursor-follower";
import { useSectionVisibility } from "@/hooks/use-section-visibility";

export default function HomePage() {
  const { registerSection } = useSectionVisibility();

  useEffect(() => {
    // Set title
    document.title = "Stefania Druga | Portfolio";
  }, []);

  return (
    <>
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <section id="news" ref={registerSection} className="section-fade">
          <News />
        </section>
        <section id="about" ref={registerSection} className="section-fade">
          <About />
        </section>
        <section id="projects" ref={registerSection} className="section-fade">
          <Projects />
        </section>
        <section id="talks" ref={registerSection} className="section-fade">
          <Talks />
        </section>
      </main>
      <Footer />
    </>
  );
}
