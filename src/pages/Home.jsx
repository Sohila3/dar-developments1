
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Partners from "../components/Partners";
import FAQSection from "../components/FAQSection";
import Projects from "../components/Projects";
import Installments from "../components/Installments";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="w-full">

      <Navbar />

      <Hero />
      <About />
      <Mission />
      <Partners />      
      <FAQSection />
      <Projects />
      <Installments />
      <Contact />

    </div>
  );
}

export default Home;
