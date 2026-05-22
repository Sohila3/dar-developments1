import cover from "../assets/cover.png";
import logo from "../assets/logo.jpeg";

function Hero() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={cover}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 md:px-12 py-4 md:py-6 bg-black/20 backdrop-blur-md gap-4">

          {/* LINKS */}
          <div className="flex flex-wrap gap-4 md:gap-8 text-white text-xs md:text-sm uppercase font-medium">

            <a href="#about" className="hover:text-gray-300 transition">
              About Us
            </a>

            <a href="#projects" className="hover:text-gray-300 transition">
              Projects
            </a>

            <a href="#services" className="hover:text-gray-300 transition">
              Service
            </a>

            <a href="#contact" className="hover:text-gray-300 transition">
              Contact Us
            </a>

          </div>

          {/* LOGO */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />
            <h1 className="text-white text-lg md:text-2xl tracking-[4px] md:tracking-[6px] font-semibold">
              DAR
            </h1>
          </div>

        </nav>

        {/* HERO TEXT */}
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