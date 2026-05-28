import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JoinUsPage from "./pages/JoinUsPage";
import AboutMore from "./pages/AboutMore";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/join-us" element={<JoinUsPage />} />

      <Route path="/about-more" element={<AboutMore />} />

    </Routes>

  );
}

export default App;