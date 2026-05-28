import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-md">

      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        {/* LEFT - LANG */}
        <div className="flex items-center gap-3 text-white text-sm">
          <button>عربي</button>
          <span>|</span>
          <button>English</button>
        </div>

        {/* CENTER - LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <img src={logo} className="w-10 h-10 rounded-full" />
          <h1 className="text-white tracking-[4px]">DAR</h1>
        </div>

        {/* RIGHT - MENU */}
        <div className="text-white text-3xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;