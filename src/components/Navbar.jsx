
import { useState, useEffect } from "react";
import logo from "../assets/logodar.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const ar = lang === "ar";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Alexandria:wght@300;400;500;600;700&display=swap');

        /* ================= NAVBAR GLASS ================= */

        .dar-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 78px;
          z-index: 1000;

          background: rgba(11, 26, 46, 0.10);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);

          border-bottom: 1px solid rgba(255, 255, 255, 0.08);

          transition: background .35s ease, height .35s ease;
        }

        .dar-nav-inner {
          height: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 6%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          direction: ltr;
        }

        /* ================= LOGO LEFT ================= */

        .dar-nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;

          text-decoration: none;
          flex-shrink: 0;
        }

        .dar-nav-logo img {
          width: 42px;
          height: 42px;

          object-fit: cover;
          border-radius: 50%;

          border: 1px solid rgba(201, 168, 76, .65);

          transition: transform .4s ease;
        }

        .dar-nav-logo:hover img {
          transform: rotate(-5deg) scale(1.04);
        }

        .dar-nav-logo span {
          color: #F8F5EF;

          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 6px;
        }

        /* ================= RIGHT CONTROLS ================= */

        .dar-nav-right {
          display: flex;
          align-items: center;
          gap: 18px;

          flex-shrink: 0;
        }

        /* ================= LANGUAGE ================= */

        .dar-lang-btn {
          display: flex;
          align-items: center;
          gap: 10px;

          background: rgba(255, 255, 255, .025);
          border: 1px solid rgba(255, 255, 255, .28);

          padding: 9px 14px;

          color: white;
          cursor: pointer;

          transition: border-color .3s ease, background .3s ease;

          font-family: 'DM Sans', sans-serif;
        }

        .dar-lang-btn:hover {
          border-color: #C9A84C;
          background: rgba(255, 255, 255, .06);
        }

        .dar-lang-ar {
          font-family: 'Alexandria', sans-serif;
          font-size: 12px;
        }

        .dar-lang-en {
          font-size: 11px;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .dar-lang-divider {
          width: 1px;
          height: 13px;

          background: rgba(255, 255, 255, .3);
        }

        /* ================= MENU BUTTON ================= */

        .dar-menu-btn {
          width: 43px;
          height: 43px;

          background: rgba(255, 255, 255, .025);
          border: 1px solid rgba(255, 255, 255, .28);

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;

          cursor: pointer;

          transition: border-color .3s ease, background .3s ease;

          flex-shrink: 0;
        }

        .dar-menu-btn:hover {
          border-color: #C9A84C;
          background: rgba(255, 255, 255, .06);
        }

        .dar-menu-btn span {
          width: 19px;
          height: 1.5px;

          background: #F8F5EF;

          transition: width .3s ease, background .3s ease;
        }

        .dar-menu-btn span:nth-child(2) {
          width: 13px;
          margin-left: 6px;
        }

        .dar-menu-btn:hover span {
          width: 19px;
          background: #C9A84C;
        }

        /* ================= OVERLAY ================= */

        .dar-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 1100;

          background: rgba(5, 12, 23, .58);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);

          opacity: 0;
          visibility: hidden;

          transition: opacity .35s ease, visibility .35s ease;
        }

        .dar-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* ================= SIDEBAR ================= */

        .dar-sidebar {
          position: fixed;
          top: 0;
          right: 0;

          width: min(420px, 88vw);
          height: 100%;
          height: 100dvh;

          z-index: 1200;

          background: #F8F6F1;

          display: flex;
          flex-direction: column;

          transform: translateX(100%);

          transition: transform .45s cubic-bezier(.77, 0, .175, 1);

          box-shadow: -20px 0 60px rgba(0, 0, 0, .12);
        }

        .dar-sidebar.active {
          transform: translateX(0);
        }

        .dar-sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 28px 35px;

          border-bottom: 1px solid rgba(11, 26, 46, .1);

          flex-shrink: 0;
        }

        .dar-sidebar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dar-sidebar-brand img {
          width: 40px;
          height: 40px;

          border-radius: 50%;
          object-fit: cover;

          border: 1px solid rgba(201, 168, 76, .5);
        }

        .dar-sidebar-brand span {
          color: #0B1A2E;

          font-family: 'DM Sans', sans-serif;
          letter-spacing: 5px;
          font-size: 15px;
          font-weight: 600;
        }

        .dar-sidebar-close {
          width: 38px;
          height: 38px;

          display: flex;
          justify-content: center;
          align-items: center;

          background: transparent;
          border: 1px solid rgba(11, 26, 46, .15);

          color: #0B1A2E;
          font-size: 25px;
          font-weight: 300;

          cursor: pointer;

          transition: all .3s ease;
        }

        .dar-sidebar-close:hover {
          background: #0B1A2E;
          color: #C9A84C;
          border-color: #0B1A2E;
        }

        /* ================= SIDEBAR LINKS ================= */

        .dar-sidebar-content {
          flex: 1;

          padding: 45px 35px;

          display: flex;
          flex-direction: column;

          overflow-y: auto;
          overscroll-behavior: contain;
        }

        .dar-sidebar-label {
          color: #9B8350;

          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;

          margin-bottom: 25px;
        }

        .dar-sidebar-link {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 17px 0;

          color: #0B1A2E;
          text-decoration: none;

          border-bottom: 1px solid rgba(11, 26, 46, .09);

          font-family: ${ar ? "'Alexandria', sans-serif" : "'DM Sans', sans-serif"};
          font-size: ${ar ? "16px" : "17px"};
          font-weight: 400;

          transition: color .3s ease, padding .3s ease;
        }

        .dar-sidebar-link::after {
          content: '↗';

          color: #C9A84C;
          font-size: 15px;

          opacity: 0;
          transform: translate(-5px, 5px);

          transition: all .3s ease;
        }

        .dar-sidebar-link:hover {
          color: #9B8350;
          padding-left: 8px;
        }

        .dar-sidebar-link:hover::after {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* ================= SIDEBAR CTA ================= */

        .dar-sidebar-contact {
          display: block;

          margin-top: 35px;
          padding: 16px 22px;

          background: #0B1A2E;
          color: #F8F6F1;

          text-decoration: none;
          text-align: center;

          font-family: 'Alexandria', sans-serif;
          font-size: 14px;

          transition: background .3s ease, color .3s ease;
        }

        .dar-sidebar-contact:hover {
          background: #C9A84C;
          color: #0B1A2E;
        }

        /* ================= SIDEBAR FOOTER ================= */

        .dar-sidebar-footer {
          padding: 25px 35px;

          border-top: 1px solid rgba(11, 26, 46, .1);

          display: flex;
          justify-content: space-between;
          align-items: center;

          flex-shrink: 0;
        }

        .dar-sidebar-footer span {
          font-family: 'DM Sans', sans-serif;

          color: #8A8A82;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .dar-sidebar-footer-line {
          width: 45px;
          height: 1px;

          background: #C9A84C;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .dar-nav-inner {
            padding: 0 4%;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .dar-navbar {
            height: 65px;

            background: rgba(11, 26, 46, .10);
            backdrop-filter: blur(16px) saturate(150%);
            -webkit-backdrop-filter: blur(16px) saturate(150%);
          }

          .dar-nav-inner {
            padding: 0 16px;
          }

          .dar-nav-logo {
            gap: 8px;
          }

          .dar-nav-logo img {
            width: 34px;
            height: 34px;
          }

          .dar-nav-logo span {
            font-size: 13px;
            letter-spacing: 4px;
          }

          .dar-nav-right {
            gap: 8px;
          }

          .dar-lang-btn {
            padding: 7px 9px;
            gap: 6px;
          }

          .dar-lang-ar {
            font-size: 10px;
          }

          .dar-lang-en {
            font-size: 10px;
            letter-spacing: 1px;
          }

          .dar-menu-btn {
            width: 36px;
            height: 36px;
            gap: 5px;
          }

          .dar-menu-btn span {
            width: 16px;
          }

          .dar-menu-btn span:nth-child(2) {
            width: 11px;
          }

          .dar-sidebar-header {
            padding: 22px 25px;
          }

          .dar-sidebar-content {
            padding: 35px 25px;
          }

          .dar-sidebar-footer {
            padding: 20px 25px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 380px) {
          .dar-nav-inner {
            padding: 0 10px;
          }

          .dar-nav-logo {
            gap: 5px;
          }

          .dar-nav-logo img {
            width: 29px;
            height: 29px;
          }

          .dar-nav-logo span {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .dar-nav-right {
            gap: 6px;
          }

          .dar-lang-btn {
            padding: 6px 7px;
            gap: 4px;
          }

          .dar-lang-ar {
            font-size: 9px;
          }

          .dar-lang-en {
            font-size: 9px;
            letter-spacing: .5px;
          }

          .dar-menu-btn {
            width: 32px;
            height: 32px;
            gap: 4px;
          }

          .dar-menu-btn span {
            width: 14px;
          }

          .dar-menu-btn span:nth-child(2) {
            width: 10px;
          }

          .dar-sidebar-header {
            padding: 18px 20px;
          }

          .dar-sidebar-content {
            padding: 28px 20px;
          }

          .dar-sidebar-footer {
            padding: 18px 20px;
          }
        }

        /* ================= VERY SMALL SCREENS ================= */

        @media (max-width: 320px) {
          .dar-nav-logo img {
            width: 26px;
            height: 26px;
          }

          .dar-nav-logo span {
            font-size: 10px;
            letter-spacing: 1px;
          }

          .dar-nav-right {
            gap: 4px;
          }

          .dar-lang-btn {
            padding: 5px;
            gap: 3px;
          }

          .dar-menu-btn {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      {/* ================= NAVBAR ================= */}

      <nav className="dar-navbar">
        <div className="dar-nav-inner">

          {/* LEFT - LOGO */}

          <Link to="/" className="dar-nav-logo">
            <img src={logo} alt="DAR Developments" />
            <span>DAR</span>
          </Link>

          {/* RIGHT - LANGUAGE + MENU */}

          <div className="dar-nav-right">

            {/* LANGUAGE */}

            <button
              className="dar-lang-btn"
              onClick={toggleLang}
              aria-label="Switch language"
            >
              <span
                className="dar-lang-ar"
                style={{
                  color:
                    lang === "ar"
                      ? "#C9A84C"
                      : "rgba(255,255,255,.6)",
                }}
              >
                عربي
              </span>

              <span className="dar-lang-divider" />

              <span
                className="dar-lang-en"
                style={{
                  color:
                    lang === "en"
                      ? "#C9A84C"
                      : "rgba(255,255,255,.6)",
                }}
              >
                EN
              </span>
            </button>

            {/* MENU */}

            <button
              className="dar-menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="dar-sidebar"
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}

      <div
        className={`dar-menu-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ================= SIDEBAR ================= */}

      <aside
        id="dar-sidebar"
        className={`dar-sidebar ${open ? "active" : ""}`}
        dir={ar ? "rtl" : "ltr"}
        aria-hidden={!open}
        inert={!open}
      >

        {/* HEADER */}

        <div className="dar-sidebar-header">

          <div className="dar-sidebar-brand">
            <img src={logo} alt="DAR Logo" />
            <span>DAR</span>
          </div>

          <button
            className="dar-sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
          >
            ×
          </button>

        </div>

        {/* LINKS */}

        <div className="dar-sidebar-content">

          <span className="dar-sidebar-label">
            {ar ? "اكتشف دار" : "Discover DAR"}
          </span>

          <Link
            to="/"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "home")}
          </Link>

          <a
            href="/#about"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "about")}
          </a>

          <a
            href="/#Mission"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "Mission")}
          </a>

          <a
            href="/#faq"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "FAQSection")}
          </a>

          <a
            href="/#projects"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "projects")}
          </a>

          <a
            href="/#partners"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "partners")}
          </a>

          <a
            href="/#contact"
            className="dar-sidebar-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {t("navbar", "contact")}
          </a>

          <a
            href="/#contact"
            className="dar-sidebar-contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {ar ? "تواصل معنا" : "Contact Us"}
          </a>

        </div>

        {/* FOOTER */}

        <div className="dar-sidebar-footer">
          <span>DAR DEVELOPMENTS</span>
          <div className="dar-sidebar-footer-line" />
        </div>

      </aside>
    </>
  );
}

export default Navbar;
