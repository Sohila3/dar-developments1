import { useState } from "react";
import logo from "../assets/logodar.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] bg-black/20 backdrop-blur-md">
        <div className="relative flex items-center justify-between h-full px-6 md:px-12">

          {/* LANG (مقفول مؤقتًا) */}
          <div className="flex items-center gap-3 text-white text-sm">
            <span className="text-[#C9A84C]">عربي</span>
          </div>

          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 z-[101]">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-white tracking-[4px] font-semibold">
              DAR
            </h1>
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
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[300] shadow-2xl transition-transform duration-300 ${
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

        {/* LINKS (ARABIC ONLY) */}
        <div
          className="flex flex-col items-end gap-6 px-8 text-[#1E3A5F] text-lg font-semibold"
          dir="rtl"
        >
          <Link to="/" onClick={() => setOpen(false)}>الرئيسية</Link>

          <a href="/#about" onClick={() => setOpen(false)}>
            عن دار
          </a>

          <a href="/#projects" onClick={() => setOpen(false)}>
            مشاريعنا
          </a>

          <a href="/#partners" onClick={() => setOpen(false)}>
            شركاء النجاح
          </a>

          <a href="/#contact" onClick={() => setOpen(false)}>
            تواصل معنا
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;