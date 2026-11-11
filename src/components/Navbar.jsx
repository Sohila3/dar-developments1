import { useState, useEffect, useRef } from "react";
import logo from "../assets/logodar.jpeg";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { pathname, hash } = useLocation();

  const menuBtnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const wasOpen = useRef(false);

  const ar = lang === "ar";

  /* اللغة على مستوى الصفحة (قارئات الشاشة + نطق الخطوط) */
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  /* قفل السكرول + زرار Escape */
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

  /* الفوكس: يروح لزرار الإغلاق وقت الفتح، ويرجع لزرار القائمة وقت الإغلاق */
  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus({ preventScroll: true });
      wasOpen.current = true;
    } else if (wasOpen.current) {
      menuBtnRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
    }
  }, [open]);

  /* ================= الروابط ================= */

  const mainLinks = [
    {
      key: "home",
      to: "/",
      hash: "",
      label: t("navbar", "home") || (ar ? "الرئيسية" : "Home"),
    },
    {
      key: "projects",
      to: "/#projects",
      hash: "#projects",
      label: t("navbar", "projects") || (ar ? "مشاريعنا" : "Projects"),
    },
    {
      key: "about",
      to: "/#about",
      hash: "#about",
      label: t("navbar", "about") || (ar ? "من نحن" : "About Us"),
    },
    {
      key: "contact",
      to: "/#contact",
      hash: "#contact",
      label: t("navbar", "contact") || (ar ? "تواصل معنا" : "Contact"),
    },
  ];

  const moreLinks = [
    { key: "Mission", to: "/#Mission", hash: "#Mission", label: t("navbar", "Mission") },
    { key: "faq", to: "/#faq", hash: "#faq", label: t("navbar", "FAQSection") },
    { key: "partners", to: "/#partners", hash: "#partners", label: t("navbar", "partners") },
  ];

  const isActive = (link) => {
    if (link.key === "home") return pathname === "/" && !hash;
    if (link.key === "projects" && pathname.startsWith("/projects/")) return true;
    return pathname === "/" && hash === link.hash;
  };

  /* لو المستخدم على نفس الرابط بالفعل، الراوتر مش بيعمل حاجة، فنسكرول بإيدينا */
  const handleLinkClick = (link) => (e) => {
    setOpen(false);

    if (pathname !== "/") return;

    if (link.key === "home" && !hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (link.hash && hash === link.hash) {
      e.preventDefault();
      document.querySelector(link.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Alexandria:wght@300;400;500;600;700&display=swap');

        .dar-navbar {
          --dar-nav-bg: rgba(11, 26, 46, .78);
          --dar-gold: #C9A84C;
          --dar-gold-light: #D7BC83;
          --dar-ivory: #F8F5EF;
        }

        /* ================= NAVBAR GLASS ================= */

        .dar-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 78px;
          z-index: 1000;

          background: var(--dar-nav-bg);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);

          border-bottom: 1px solid rgba(255, 255, 255, 0.10);

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
          gap: 16px;

          direction: ltr;
        }

        /* ================= FOCUS (موحد) ================= */

        .dar-navbar a:focus-visible,
        .dar-navbar button:focus-visible,
        .dar-sidebar a:focus-visible,
        .dar-sidebar button:focus-visible {
          outline: 2px solid var(--dar-gold-light);
          outline-offset: 3px;
        }

        .dar-sidebar a:focus-visible,
        .dar-sidebar button:focus-visible {
          outline-color: #8F6B32;
        }

        /* ================= LOGO ================= */

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
          color: var(--dar-ivory);

          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 6px;
        }

        /* ================= DESKTOP LINKS ================= */

        .dar-nav-links {
          display: none;
          flex: 1;
          justify-content: center;
          min-width: 0;
        }

        .dar-nav-links ul {
          display: flex;
          align-items: center;
          gap: 30px;

          list-style: none;
          margin: 0;
          padding: 0;
        }

        .dar-nav-link {
          position: relative;
          display: inline-block;

          padding: 8px 2px;

          color: rgba(248, 245, 239, .9);
          text-decoration: none;
          white-space: nowrap;

          font-family: ${ar ? "'Alexandria', sans-serif" : "'DM Sans', sans-serif"};
          font-size: ${ar ? "13.5px" : "13px"};
          font-weight: 500;
          letter-spacing: ${ar ? "0" : "1.2px"};

          transition: color .3s ease;
        }

        .dar-nav-link::after {
          content: "";
          position: absolute;
          left: 2px;
          right: 2px;
          bottom: 1px;

          height: 1.5px;
          background: var(--dar-gold-light);

          transform: scaleX(0);
          transform-origin: center;

          transition: transform .35s ease;
        }

        .dar-nav-link:hover {
          color: var(--dar-gold-light);
        }

        .dar-nav-link:hover::after,
        .dar-nav-link.is-active::after {
          transform: scaleX(1);
        }

        .dar-nav-link.is-active {
          color: var(--dar-gold-light);
        }

        @media (min-width: 1024px) {
          .dar-nav-links {
            display: flex;
          }
        }

        @media (min-width: 1024px) and (max-width: 1199px) {
          .dar-nav-inner {
            padding: 0 3.5%;
          }

          .dar-nav-links ul {
            gap: 20px;
          }

          .dar-nav-link {
            font-size: ${ar ? "12.5px" : "12px"};
            letter-spacing: ${ar ? "0" : ".8px"};
          }
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

          background: rgba(255, 255, 255, .04);
          border: 1px solid rgba(255, 255, 255, .34);

          padding: 9px 14px;

          color: white;
          cursor: pointer;

          transition: border-color .3s ease, background .3s ease;

          font-family: 'DM Sans', sans-serif;
        }

        .dar-lang-btn:hover {
          border-color: var(--dar-gold-light);
          background: rgba(255, 255, 255, .08);
        }

        .dar-lang-ar,
        .dar-lang-en {
          position: relative;
          color: rgba(255, 255, 255, .78);
          transition: color .3s ease;
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

        .dar-lang-ar.is-active,
        .dar-lang-en.is-active {
          color: var(--dar-gold-light);
        }

        .dar-lang-ar.is-active::after,
        .dar-lang-en.is-active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;

          height: 1.5px;
          background: var(--dar-gold-light);
        }

        .dar-lang-divider {
          width: 1px;
          height: 13px;

          background: rgba(255, 255, 255, .34);
        }

        /* ================= MENU BUTTON ================= */

        .dar-menu-btn {
          width: 43px;
          height: 43px;

          background: rgba(255, 255, 255, .04);
          border: 1px solid rgba(255, 255, 255, .34);

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
          border-color: var(--dar-gold-light);
          background: rgba(255, 255, 255, .08);
        }

        .dar-menu-btn span {
          width: 19px;
          height: 1.5px;

          background: var(--dar-ivory);

          transition: width .3s ease, background .3s ease;
        }

        .dar-menu-btn span:nth-child(2) {
          width: 13px;
          margin-left: 6px;
        }

        .dar-menu-btn:hover span {
          width: 19px;
          background: var(--dar-gold-light);
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
          border: 1px solid rgba(11, 26, 46, .25);

          color: #0B1A2E;
          font-size: 25px;
          font-weight: 300;

          cursor: pointer;

          transition: all .3s ease;
        }

        .dar-sidebar-close:hover {
          background: #0B1A2E;
          color: var(--dar-gold-light);
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
          color: #7A6232;

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

          color: #B89552;
          font-size: 15px;

          opacity: 0;
          transform: translate(-5px, 5px);

          transition: all .3s ease;
        }

        .dar-sidebar-link:hover,
        .dar-sidebar-link.is-active {
          color: #7A6232;
          padding-inline-start: 8px;
        }

        .dar-sidebar-link:hover::after,
        .dar-sidebar-link.is-active::after {
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

          color: #6F6F68;
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

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .dar-navbar *,
          .dar-navbar *::after,
          .dar-sidebar,
          .dar-sidebar *,
          .dar-sidebar *::after,
          .dar-menu-overlay {
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* ================= NAVBAR ================= */}

      <nav className="dar-navbar" aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
        <div className="dar-nav-inner">

          {/* LOGO */}

          <Link
            to="/"
            className="dar-nav-logo"
            aria-label={ar ? "دار للتطوير العقاري — الرئيسية" : "DAR Developments — Home"}
            onClick={handleLinkClick(mainLinks[0])}
          >
            <img src={logo} alt="" />
            <span>DAR</span>
          </Link>

          {/* DESKTOP LINKS */}

          <div className="dar-nav-links">
            <ul dir={ar ? "rtl" : "ltr"}>
              {mainLinks.map((link) => {
                const active = isActive(link);

                return (
                  <li key={link.key}>
                    <Link
                      to={link.to}
                      className={`dar-nav-link ${active ? "is-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                      onClick={handleLinkClick(link)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* LANGUAGE + MENU */}

          <div className="dar-nav-right">

            {/* LANGUAGE */}

            <button
              type="button"
              className="dar-lang-btn"
              onClick={toggleLang}
              lang={ar ? "en" : "ar"}
              aria-label={ar ? "Switch to English" : "التبديل إلى العربية"}
              title={ar ? "Switch to English" : "التبديل إلى العربية"}
            >
              <span
                className={`dar-lang-ar ${ar ? "is-active" : ""}`}
                lang="ar"
              >
                عربي
              </span>

              <span className="dar-lang-divider" aria-hidden="true" />

              <span
                className={`dar-lang-en ${!ar ? "is-active" : ""}`}
                lang="en"
              >
                EN
              </span>
            </button>

            {/* MENU */}

            <button
              type="button"
              ref={menuBtnRef}
              className="dar-menu-btn"
              onClick={() => setOpen(true)}
              aria-label={ar ? "فتح القائمة" : "Open menu"}
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
        aria-label={ar ? "القائمة" : "Menu"}
        aria-hidden={!open}
        inert={!open}
      >

        {/* HEADER */}

        <div className="dar-sidebar-header">

          <div className="dar-sidebar-brand">
            <img src={logo} alt="" />
            <span>DAR</span>
          </div>

          <button
            type="button"
            ref={closeBtnRef}
            className="dar-sidebar-close"
            onClick={() => setOpen(false)}
            aria-label={ar ? "إغلاق القائمة" : "Close menu"}
            tabIndex={open ? 0 : -1}
          >
            <span aria-hidden="true">×</span>
          </button>

        </div>

        {/* LINKS */}

        <div className="dar-sidebar-content">

          <span className="dar-sidebar-label">
            {ar ? "اكتشف دار" : "Discover DAR"}
          </span>

          {[...mainLinks.slice(0, 3), ...moreLinks, mainLinks[3]].map((link) => {
            const active = isActive(link);

            return (
              <Link
                key={link.key}
                to={link.to}
                className={`dar-sidebar-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={handleLinkClick(link)}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/#contact"
            className="dar-sidebar-contact"
            onClick={handleLinkClick(mainLinks[3])}
            tabIndex={open ? 0 : -1}
          >
            {ar ? "تواصل معنا" : "Contact Us"}
          </Link>

        </div>

        {/* FOOTER */}

        <div className="dar-sidebar-footer">
          <span>DAR DEVELOPMENTS</span>
          <div className="dar-sidebar-footer-line" aria-hidden="true" />
        </div>

      </aside>
    </>
  );
}

export default Navbar;