import { useState } from "react";

import cover from "../assets/cover.png";
import logo from "../assets/logo.jpeg";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={cover}
          alt="دار للاستثمار العقاري"
          className="
            absolute inset-0 w-full h-full
            object-cover
            object-[60%_center] md:object-center
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 md:px-12 py-4">

            {/* LANG */}
            <div className="flex items-center gap-3 text-white text-sm font-medium">
              <button>عربي</button>
              <span>|</span>
              <button>English</button>
            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
              <img
                src={logo}
                alt="DAR Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <h1 className="text-white text-xl md:text-2xl tracking-[4px] font-semibold">
                DAR
              </h1>
            </div>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-3xl"
            >
              ☰
            </button>

          </div>
        </nav>

        {/* SIDEBAR */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="flex justify-end p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-[#1E3A5F]"
            >
              ×
            </button>
          </div>

          <div
            className="flex flex-col items-end gap-6 px-8 pt-6 text-[#1E3A5F] text-lg font-semibold"
            dir="rtl"
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>الرئيسية</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>عن دار</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>مشاريعنا</a>
            <a href="#partners" onClick={() => setMenuOpen(false)}>شركاء النجاح</a>
            <a href="#join" onClick={() => setMenuOpen(false)}>انضم إلينا</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-white text-3xl md:text-7xl font-bold leading-tight">
            دار للاستثمار العقاري
          </h1>

          <p className="mt-4 md:mt-6 text-gray-200 text-base md:text-2xl">
            مستقبل عقاري يليق بطموحك
          </p>

        </div>

      </div>
    </div>
  );
}

export default Hero;