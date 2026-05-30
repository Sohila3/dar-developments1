import { useEffect, useState } from "react";

import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";

import logo from "../assets/logo.jpeg";

function Hero() {

  const [menuOpen, setMenuOpen] = useState(false);

  const images = [cover1, cover2, cover3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div id="home" className="w-full">

      {/* HERO */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* SLIDER IMAGES */}
        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt="DAR"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 pointer-events-none ${
              currentImage === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />

        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-[999] bg-black/20 backdrop-blur-md">

          <div className="flex items-center justify-between px-6 md:px-12 py-4">

            {/* LANG */}
            <div className="flex items-center gap-3 text-white text-sm font-medium z-[1000] relative">

              <button>عربي</button>

              <span>|</span>

              <button>English</button>

            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 z-[1000]">

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
              className="text-white text-3xl relative z-[1000]"
            >
              ☰
            </button>

          </div>

        </nav>

        {/* OVERLAY SIDEBAR */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-[1000]"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[1001] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* CLOSE */}
          <div className="flex justify-end p-5">

            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-[#1E3A5F]"
            >
              ×
            </button>

          </div>

          {/* LINKS */}
          <div
            className="flex flex-col items-end gap-6 px-8 pt-6 text-[#1E3A5F] text-lg font-semibold"
            dir="rtl"
          >

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700 transition"
            >
              الرئيسية
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700 transition"
            >
              عن دار
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700 transition"
            >
              مشاريعنا
            </a>

            <a
              href="#partners"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700 transition"
            >
              شركاء النجاح
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700 transition"
            >
              تواصل معنا
            </a>

          </div>

        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">

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