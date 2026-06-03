import logodar from "../assets/logodar.jpeg";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { lang, t } = useLanguage();

  return (
    <div
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center"
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,#f5f9ff 50%)",
        fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.88) translateX(20px); }
          to   { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .hero-logo    { opacity:0; animation: fadeIn 1s 0.1s forwards; }
        .hero-badge   { opacity:0; animation: fadeUp 0.7s 0.3s forwards; }
        .hero-title   { opacity:0; animation: fadeUp 0.8s 0.5s forwards; }
        .hero-sub     { opacity:0; animation: fadeUp 0.8s 0.7s forwards; }
        .hero-divider { opacity:0; animation: fadeUp 0.8s 0.75s forwards; }
        .hero-cta     { opacity:0; animation: fadeUp 0.8s 0.9s forwards; }

        .logo-wrapper {
          position: relative; width: 180px; height: 180px;
          display: flex; align-items: center; justify-content: center;
        }
        .logo-spin {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1.5px dashed rgba(201,168,76,0.3);
          animation: rotateBorder 12s linear infinite;
        }
        .logo-ring-outer {
          position: absolute; inset: 8px; border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.2);
        }
        .logo-img {
          width: 130px; height: 130px; border-radius: 50%;
          object-fit: cover; border: 2px solid rgba(201,168,76,0.55);
          position: relative; z-index: 2;
        }
        .logo-glow {
          position: absolute; inset: 20px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
          z-index: 1;
        }
        .divider-line {
          width: 40px; height: 1px; background: rgba(201,168,76,0.5);
        }
        .divider-diamond {
          width: 5px; height: 5px; background: #C9A84C; transform: rotate(45deg);
        }
        .btn-primary:hover {
          background: #E8C96A !important; transform: translateY(-3px);
        }
        .btn-outline:hover {
          border-color: #C9A84C !important; color: #C9A84C !important;
          transform: translateY(-3px);
        }
      `}</style>

      {/* BG DECORATION */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "10%",
        width: 200, height: 200, borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.15)",
        pointerEvents: "none",
      }} />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 py-32">
        <div style={{
          display: "grid",
          gridTemplateColumns: lang === "ar" ? "1fr auto" : "auto 1fr",
          gap: "60px",
          alignItems: "center",
        }}>

          {/* TEXT */}
          <div>
            {/* BADGE */}
            <div className="hero-badge inline-flex items-center gap-2 mb-8"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "50px", padding: "5px 16px",
                fontSize: "13px", color: "#9A7535",
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#C9A84C", animation: "pulse 2s infinite", flexShrink: 0,
              }} />
              <span>{t("hero", "badge")}</span>
            </div>

            {/* TITLE */}
            <h1 className="hero-title font-bold"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.45, color: "#0B1A2E", marginBottom: "16px",
              }}
            >
              <span>{t("hero", "title1")} </span>
              <span style={{ color: "#C9A84C" }}>{t("hero", "title2")} </span>
              <span>{t("hero", "title3")}</span>
            </h1>

            {/* DIVIDER */}
            <div className="hero-divider flex items-center gap-3 mb-5">
              <div className="divider-line" />
              <div className="divider-diamond" />
              <div className="divider-line" />
            </div>

            {/* SUB */}
            <p className="hero-sub"
              style={{
                color: "rgba(11,26,46,0.6)", lineHeight: 2.1,
                marginBottom: "36px", fontSize: "16px", maxWidth: "380px",
              }}
            >
              {t("hero", "sub")}
            </p>

            {/* BUTTONS */}
            <div className="hero-cta flex gap-3 flex-wrap">
              <a href="#projects" className="btn-primary"
                style={{
                  background: "#C9A84C", color: "#0B1A2E",
                  padding: "13px 32px", borderRadius: "4px",
                  textDecoration: "none", display: "inline-block",
                  transition: "0.3s", fontWeight: 600,
                }}
              >
                {t("hero", "btn1")}
              </a>
              <a href="#contact" className="btn-outline"
                style={{
                  background: "transparent", color: "#0B1A2E",
                  border: "1px solid rgba(201,168,76,0.6)",
                  padding: "13px 32px", borderRadius: "4px",
                  textDecoration: "none", display: "inline-block", transition: "0.3s",
                }}
              >
                {t("hero", "btn2")}
              </a>
            </div>
          </div>

          {/* LOGO */}
          <div className="hero-logo hidden md:flex flex-col items-center gap-4"
            style={{ order: lang === "ar" ? 1 : -1 }}
          >
            <div className="logo-wrapper">
              <div className="logo-spin" />
              <div className="logo-ring-outer" />
              <div className="logo-glow" />
              <img src={logodar} alt="دار" className="logo-img" />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{
                color: "#C9A84C", letterSpacing: "5px",
                fontSize: "13px", fontWeight: 600, marginBottom: "3px",
              }}>DAR</p>
              <p style={{
                color: "rgba(11,26,46,0.4)", fontSize: "11px", letterSpacing: "2px",
              }}>
                {t("hero", "logoSub")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;