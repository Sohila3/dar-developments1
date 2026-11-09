import { useState } from "react";
import logo from "../assets/logodar.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        .dar-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          z-index: 100;
          background: rgba(11,26,46,0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(201,168,76,0.18);
          direction: ltr;
        }

        .dar-nav-inner {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          height: 100%;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .dar-nav-left {
          justify-self: start;
          min-width: 0;
        }

        .dar-nav-logo {
          justify-self: center;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
        }

        .dar-nav-logo img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(201,168,76,0.5);
          object-fit: cover;
          flex-shrink: 0;
        }

        .dar-nav-logo span {
          color: white;
          letter-spacing: 5px;
          font-weight: 600;
          font-size: 15px;
        }

        .dar-nav-right {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .nav-contact-btn {
          background: #C9A84C;
          color: #0B1A2E;
          border: none;
          border-radius: 4px;
          padding: 8px 20px;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Noto Naskh Arabic', serif;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all .3s ease;
          white-space: nowrap;
        }

        .nav-contact-btn:hover {
          background: #E8C96A;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(201,168,76,0.35);
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          transition: border-color .3s ease;
          white-space: nowrap;
        }

        .lang-btn:hover { border-color: #C9A84C; }

        .lang-ar {
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 13px;
          font-weight: 600;
        }

        .lang-en {
          font-family: Georgia, serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
        }

        .lang-divider {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.25);
        }

        .dar-menu-btn {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 4px;
          padding: 7px 9px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: border-color .3s ease;
        }

        .dar-menu-btn:hover { border-color: #C9A84C; }

        .dar-menu-btn span {
          display: block;
          width: 20px;
          height: 2px;
          background: white;
          border-radius: 2px;
        }

        .sidebar-link {
          color: #1E3A5F;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Noto Naskh Arabic', serif;
          padding: 12px 0;
          border-bottom: 1px solid rgba(30,58,95,0.08);
          width: 100%;
          transition: color .25s ease, padding .25s ease;
          display: block;
        }

        .sidebar-link:hover {
          color: #C9A84C;
          padding-right: 8px;
        }

        .sidebar-contact-btn {
          background: #1E3A5F;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 13px 24px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Noto Naskh Arabic', serif;
          cursor: pointer;
          text-decoration: none;
          display: block;
          text-align: center;
          margin-top: 8px;
        }

        .sidebar-contact-btn:hover {
          background: #C9A84C;
          color: #1E3A5F;
        }

        /* ——— MOBILE ——— */
        @media (max-width: 600px) {
          .dar-navbar { height: 60px; }

          .dar-nav-inner { padding: 0 12px; }

          .dar-nav-logo { gap: 7px; }

          .dar-nav-logo img {
            width: 32px;
            height: 32px;
          }

          .dar-nav-logo span {
            font-size: 13px;
            letter-spacing: 3px;
          }

          .lang-btn {
            gap: 4px;
            padding: 5px 8px;
          }

          .lang-ar { font-size: 11px; }
          .lang-en { font-size: 10px; letter-spacing: 1px; }
          .lang-divider { height: 10px; }

          .dar-menu-btn { padding: 6px 7px; }
          .dar-menu-btn span { width: 17px; }

          .nav-contact-btn { display: none; }
        }

        /* ——— VERY SMALL PHONES ——— */
        @media (max-width: 360px) {
          .dar-nav-inner { padding: 0 8px; }
          .dar-nav-logo img { width: 28px; height: 28px; }
          .dar-nav-logo span { font-size: 11px; letter-spacing: 2px; }
          .lang-btn { padding: 4px 6px; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="dar-navbar">
        <div className="dar-nav-inner">

          {/* LEFT — LANGUAGE */}
          <div className="dar-nav-left">
            <button className="lang-btn" onClick={toggleLang} aria-label="Switch language">
              <span
                className="lang-ar"
                style={{ color: lang === "ar" ? "#D4AF37" : "rgba(255,255,255,0.6)" }}
              >
                عربي
              </span>
              <span className="lang-divider" />
              <span
                className="lang-en"
                style={{ color: lang === "en" ? "#D4AF37" : "rgba(255,255,255,0.6)" }}
              >
                EN
              </span>
            </button>
          </div>

          {/* CENTER — LOGO */}
          <Link to="/" className="dar-nav-logo" style={{ textDecoration: "none" }}>
            <img src={logo} alt="DAR Logo" />
            <span>DAR</span>
          </Link>

          {/* RIGHT — CTA + MENU */}
          <div className="dar-nav-right">
            <a href="/#contact" className="nav-contact-btn">
              {lang === "ar" ? "تواصل معنا" : "Contact Us"}
            </a>

            <button
              className="dar-menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} />
              ))}
            </button>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 200,
          }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          height: "100%",
          width: "min(300px, 85vw)",
          background: "white",
          zIndex: 300,
          boxShadow: open ? "-8px 0 40px rgba(0,0,0,0.15)" : "none",
          transition: "transform .3s ease",
          right: 0,
          left: "auto",
          transform: open ? "translateX(0)" : "translateX(100%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* SIDEBAR HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(30,58,95,0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1.5px solid rgba(201,168,76,0.4)",
              }}
            />
            <span
              style={{
                color: "#1E3A5F",
                letterSpacing: "4px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              DAR
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              color: "#1E3A5F",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* SIDEBAR LINKS */}
        <div
          style={{
            flex: 1,
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            textAlign: lang === "ar" ? "right" : "left",
            overflowY: "auto",
          }}
        >
          <Link to="/" className="sidebar-link" onClick={() => setOpen(false)}>
            {t("navbar", "home")}
          </Link>

          <a href="/#about" className="sidebar-link" onClick={() => setOpen(false)}>
            {t("navbar", "about")}
          </a>

          <a href="/#projects" className="sidebar-link" onClick={() => setOpen(false)}>
            {t("navbar", "projects")}
          </a>

          <a href="/#partners" className="sidebar-link" onClick={() => setOpen(false)}>
            {t("navbar", "partners")}
          </a>

          <a href="/#contact" className="sidebar-link" onClick={() => setOpen(false)}>
            {t("navbar", "contact")}
          </a>

          <a
            href="/#contact"
            className="sidebar-contact-btn"
            onClick={() => setOpen(false)}
          >
            {lang === "ar" ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>

        {/* SIDEBAR FOOTER */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid rgba(30,58,95,0.08)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "linear-gradient(90deg,#1E3A5F,#C9A84C)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;