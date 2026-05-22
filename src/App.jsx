import Hero from "./components/Hero";
import Installments from "./components/Installments";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">

      {/* HERO */}
      <Hero />

      {/* INSTALLMENTS BANNER */}
      <Installments />

      {/* ABOUT */}
      <About />

      {/* PROJECTS */}
      <Projects />

      {/* SERVICES */}
      <Services />

      {/* CONTACT */}
      <Contact />

    </div>
  );
}

export default App;