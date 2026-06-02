import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMore from "./pages/AboutMore";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToSection from "./components/ScrollToSection";

import ProjectElwroodPage from "./pages/ProjectElwroodPage";
import ProjectLandmarkPage from "./pages/ProjectLandmarkPage";
import ProjectDamacPage from "./pages/ProjectDamacPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToSection />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT PAGE */}
        <Route path="/about-more" element={<AboutMore />} />

        {/* PROJECTS */}
        <Route path="/projects/elwrood" element={<ProjectElwroodPage />} />
        <Route path="/projects/landmark" element={<ProjectLandmarkPage />} />
        <Route path="/projects/damac" element={<ProjectDamacPage />} />

        {/* CATCH-ALL - أي مسار غير معروف يرجع للـ Home */}
        <Route path="*" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;