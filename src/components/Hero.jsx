import { useEffect, useState } from "react";

import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";

import logo from "../assets/logo.jpeg";

function Hero() {

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

    <div className="w-full">

      {/* HERO */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* SLIDER IMAGES */}
        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt="DAR"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />

        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

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

            {/* MENU */}
            <button className="text-white text-3xl">
              ☰
            </button>

          </div>

        </nav>

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