import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // ← جديد

import Home from "./pages/Home";
import AboutMore from "./pages/AboutMore";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToSection from "./components/ScrollToSection";
import ProjectElwroodPage from "./pages/ProjectElwroodPage";
import ProjectLandmarkPage from "./pages/ProjectLandmarkPage";
import ProjectDamacPage from "./pages/ProjectDamacPage";

function App() {
  return (
    <LanguageProvider>  {/* ← لف كل حاجة بيه */}
      <ScrollToTop />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-more" element={<AboutMore />} />
        <Route path="/projects/elwrood" element={<ProjectElwroodPage />} />
        <Route path="/projects/landmark" element={<ProjectLandmarkPage />} />
        <Route path="/projects/damac" element={<ProjectDamacPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;