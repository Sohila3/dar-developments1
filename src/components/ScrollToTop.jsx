import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirstLoad = useRef(true);

  // يمنع المتصفح من استرجاع مكان السكرول القديم
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // أول فتح للموقع: ابدأ من فوق دايماً، حتى لو الرابط فيه #projects
    if (isFirstLoad.current) {
      isFirstLoad.current = false;

      if (hash) {
        window.history.replaceState(null, "", pathname);
      }

      window.scrollTo(0, 0);
      return;
    }

    // التنقل جوه الموقع (مثلاً زرار "العودة للمشاريع" رابطه /#projects)
    if (hash) {
      const go = () => document.querySelector(hash)?.scrollIntoView();
      go();
      const timer = setTimeout(go, 150); // لو القسم لسه ما ظهرش
      return () => clearTimeout(timer);
    }

    // أي صفحة جديدة تفتح من فوق
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}