import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-page min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Solutions />
      <Projects />
      <TechStack />
      <WhyWorkWithMe />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
