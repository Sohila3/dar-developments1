import { useState } from "react";
import logo from "../assets/logodar.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] bg-black/20 backdrop-blur-md">
        <div className="relative flex items-center justify-between h-full px-6 md:px-12">

          {/* LANG TOGGLE */}
          <button
            onClick={toggleLang}
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.35)",
              color: "#C9A84C",
              borderRadius: "50px",
              padding: "5px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.3s",
              letterSpacing: "1px",
            }}
            onMouseEnter={e => e.target.style.background = "rgba(201,168,76,0.2)"}
            onMouseLeave={e => e.target.style.background = "rgba(201,168,76,0.1)"}
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>

          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 z-[101]">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-white tracking-[4px] font-semibold">DAR</h1>
          </div>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="text-white text-3xl relative z-[101]"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[200]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 h-full w-[300px] bg-white z-[300] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : lang === "ar" ? "translate-x-full" : "-translate-x-full"
        }`}
        style={{ right: lang === "ar" ? 0 : "auto", left: lang === "en" ? 0 : "auto" }}
      >
        {/* CLOSE */}
        <div className={`flex p-5 ${lang === "ar" ? "justify-end" : "justify-start"}`}>
          <button onClick={() => setOpen(false)} className="text-3xl text-[#1E3A5F]">
            ×
          </button>
        </div>

        {/* LINKS */}
        <div
          className="flex flex-col gap-6 px-8 text-[#1E3A5F] text-lg font-semibold"
          style={{
            alignItems: lang === "ar" ? "flex-end" : "flex-start",
            direction: lang === "ar" ? "rtl" : "ltr",
          }}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            {t("navbar", "home")}
          </Link>
          <a href="/#about" onClick={() => setOpen(false)}>
            {t("navbar", "about")}
          </a>
          <a href="/#projects" onClick={() => setOpen(false)}>
            {t("navbar", "projects")}
          </a>
          <a href="/#partners" onClick={() => setOpen(false)}>
            {t("navbar", "partners")}
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            {t("navbar", "contact")}
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;