import cover from "../assets/cover.png";
import logo from "../assets/logo.jpeg";

function Hero() {
  return (
    <div className="w-full">

      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden">

        {/* Background */}
        <img
          src={cover}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-6 bg-black/20 backdrop-blur-md">

          {/* LINKS */}
          <div className="flex gap-8 text-white text-sm uppercase font-medium">

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
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <h1 className="text-white text-2xl tracking-[6px] font-semibold">
              DAR
            </h1>
          </div>

        </nav>

        {/* HERO TEXT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            دار للاستثمار العقاري
          </h1>

          <p className="mt-6 text-gray-200 text-lg md:text-2xl">
            مستقبل عقاري يليق بطموحك
          </p>

        </div>

      </div>
    </div>
  );
}

export default Hero;