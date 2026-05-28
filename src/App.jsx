import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMore from "./pages/AboutMore";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-more" element={<AboutMore />} />
      </Routes>
    </>
  );
}

export default App;