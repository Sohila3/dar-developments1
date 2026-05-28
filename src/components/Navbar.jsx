import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>

      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-md">

        <div className="flex items-center justify-between px-6 md:px-12 py-4">

          {/* LANG */}
          <div className="flex items-center gap-3 text-white text-sm">
            <button>عربي</button>
            <span>|</span>
            <button>English</button>
          </div>

          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            <img src={logo} className="w-10 h-10 rounded-full" alt="logo" />
            <h1 className="text-white tracking-[4px]">DAR</h1>
          </div>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="text-white text-3xl"
          >
            ☰
          </button>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* CLOSE */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-[#1E3A5F]"
          >
            ×
          </button>
        </div>

        {/* LINKS */}
        <div
          className="flex flex-col items-end gap-6 px-8 text-[#1E3A5F] text-lg font-semibold"
          dir="rtl"
        >

          <Link to="/" onClick={() => setOpen(false)}>
            الرئيسية
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            عن دار
          </Link>

          <Link to="/about-more" onClick={() => setOpen(false)}>
            التفاصيل
          </Link>

          <a href="#projects" onClick={() => setOpen(false)}>
            مشاريعنا
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            تواصل معنا
          </a>

        </div>

      </div>
    </>
  );
}

export default Navbar;