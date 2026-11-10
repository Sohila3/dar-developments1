import { Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";
import AboutMore from "./pages/AboutMore";
import ScrollToTop from "./components/ScrollToTop";
import SocialSidebar from "./components/SocialSidebar";

import ProjectElwroodPage from "./pages/ProjectElwroodPage";
import ProjectLandmarkPage from "./pages/ProjectLandmarkPage";
import ProjectDamacPage from "./pages/ProjectDamacPage";
import ProjectPalm2Page from "./pages/ProjectPalm2Page";

function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />

      {/* Fixed Social Media Icons */}
      <SocialSidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-more" element={<AboutMore />} />
        <Route path="/projects/elwrood" element={<ProjectElwroodPage />} />
        <Route path="/projects/landmark" element={<ProjectLandmarkPage />} />
        <Route path="/projects/damac" element={<ProjectDamacPage />} />
        <Route path="/projects/palm2" element={<ProjectPalm2Page />} />

        {/* أي رابط غلط يرجع للرئيسية ويصلّح الرابط في المتصفح */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;