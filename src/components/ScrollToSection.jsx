import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }
  }, [location]);

  return null;
}

export default ScrollToSection;