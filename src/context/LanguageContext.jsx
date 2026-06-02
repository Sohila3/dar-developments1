import { createContext, useContext, useState } from "react";
import translations from "../translations/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  const toggleLang = () => setLang(prev => prev === "ar" ? "en" : "ar");

  const t = (section, key) => translations[section]?.[key]?.[lang] || "";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}