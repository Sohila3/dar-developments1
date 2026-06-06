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

        .nav-contact-btn {
          background: #C9A84C;
          color: #1E3A5F;
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
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .nav-contact-btn:hover {
          background: #E8C96A;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(201,168,76,0.35);
        }

        .lang-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 4px;
          padding: 6px 14px;
          cursor: pointer;
          transition: all .3s ease;
          overflow: hidden;
        }
        .lang-btn:hover {
          border-color: #C9A84C;
        }
        .lang-ar {
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 13px;
          font-weight: 600;
          transition: all .3s ease;
        }
        .lang-en {
          font-family: 'Georgia', serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          transition: all .3s ease;
        }
        .lang-active { color: #C9A84C; }
        .lang-inactive { color: rgba(255,255,255,0.35); }
        .lang-divider {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.25);
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
          transition: all .3s ease;
          margin-top: 8px;
        }
        .sidebar-contact-btn:hover {
          background: #C9A84C;
          color: #1E3A5F;
        }
      `}</style>

      {/* NAVBAR */}
      <nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "72px",
    zIndex: 100,
    background: "rgba(30,58,95,0.15)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",

    direction: "ltr", // 👈 أهم سطر
  }}
>
        <div style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 32px",
        }}>

          {/* LEFT — LANG TOGGLE */}
          <button className="lang-btn" onClick={toggleLang}>
            <span
                  className={`lang-ar ${lang === "ar" ? "lang-active" : "lang-inactive"}`}
                  style={{
                          color: lang === "ar" ? "#D4AF37" : "#0A192F",
                          transition: "0.3s",
                          }}
              >
                   عربي  
             </span>

            <span className="lang-divider" />

            <span
                  className={`lang-en ${lang === "en" ? "lang-active" : "lang-inactive"}`}
                  style={{
                          color: lang === "en" ? "#D4AF37" : "#0A192F",
                          transition: "0.3s",
                          }}
             >
                  EN
             </span>
          </button>

          {/* CENTER — LOGO */}
          <div style={{
            position: "absolute", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", alignItems: "center", gap: "10px",
            zIndex: 101,
          }}>
            <img src={logo} alt="logo" style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "1.5px solid rgba(201,168,76,0.4)",
            }} />
            <span style={{
              color: "white",
              letterSpacing: "5px",
              fontWeight: 600,
              fontSize: "15px",
            }}>
              DAR
            </span>
          </div>

          {/* RIGHT — CONTACT + MENU */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="/#contact" className="nav-contact-btn">
              {lang === "ar" ? "تواصل معنا" : "Contact Us"}
            </a>
            <button
              onClick={() => setOpen(true)}
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.35)",
                borderRadius: "4px",
                padding: "7px 10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                transition: "border-color .3s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", width: "20px", height: "2px",
                  background: "white", borderRadius: "2px",
                }} />
              ))}
            </button>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          style={{
            position: "fixed", inset: 0,
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
    width: "300px",
    background: "white",
    zIndex: 300,
    boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
    transition: "transform .3s ease",

    right: 0,
    left: "auto",

    transform: open ? "translateX(0)" : "translateX(100%)",

    display: "flex",
    flexDirection: "column",
  }}
>
        {/* SIDEBAR HEADER */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          borderBottom: "1px solid rgba(30,58,95,0.08)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={logo} alt="logo" style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1.5px solid rgba(201,168,76,0.4)",
            }} />
            <span style={{
              color: "#1E3A5F", letterSpacing: "4px",
              fontWeight: 700, fontSize: "14px",
            }}>
              DAR
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none", border: "none",
              fontSize: "24px", color: "#1E3A5F",
              cursor: "pointer", lineHeight: 1,
            }}
          >
            {"×"}
          </button>
        </div>

        {/* SIDEBAR LINKS */}
        <div style={{
          flex: 1,
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          textAlign: lang === "ar" ? "right" : "left"
        }}>
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

          {/* CONTACT BTN */}
          
          <a href="/#contact"
            className="sidebar-contact-btn"
            onClick={() => setOpen(false)}
          >
            {lang === "ar" ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>

        {/* SIDEBAR FOOTER */}
        <div style={{
          padding: "16px 24px",
          borderTop: "1px solid rgba(30,58,95,0.08)",
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{
            width: "40px", height: "2px",
            background: "linear-gradient(90deg,#1E3A5F,#C9A84C)",
            borderRadius: "2px",
          }} />
        </div>

      </div>
    </>
  );
}

export default Navbar;