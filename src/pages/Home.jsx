import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Installments from "../components/Installments";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="w-full overflow-hidden">

      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Installments />
      <Partners />
      <Contact />

    </div>
  );
}

export default Home;