import logodar from "../assets/logodar.jpeg";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { lang, t } = useLanguage();

  return (
    <div
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center"
      style={{
        background: "linear-gradient(160deg, #ffffff 0%, #f0f6ff 60%, #e8f0fb 100%)",
        fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Montserrat:wght@400;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes drawLine {
          from { width: 0; }
          to   { width: 50px; }
        }

        .hero-logo    { opacity:0; animation: fadeIn 1s 0.1s forwards; }
        .hero-badge   { opacity:0; animation: fadeUp 0.7s 0.3s forwards; }
        .hero-title   { opacity:0; animation: fadeUp 0.8s 0.5s forwards; }
        .hero-sub     { opacity:0; animation: fadeUp 0.8s 0.7s forwards; }
        .hero-divider { opacity:0; animation: fadeUp 0.6s 0.75s forwards; }
        .hero-cta     { opacity:0; animation: fadeUp 0.8s 0.9s forwards; }
        .hero-trust   { opacity:0; animation: fadeUp 0.8s 1.1s forwards; }

        .logo-wrapper {
          position: relative; width: 210px; height: 210px;
          display: flex; align-items: center; justify-content: center;
          animation: floatLogo 4s ease-in-out infinite;
        }
        .logo-spin {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1.5px dashed rgba(201,168,76,0.5);
          animation: rotateBorder 10s linear infinite;
        }
        .logo-ring-outer {
          position: absolute; inset: 10px; border-radius: 50%;
          border: 1px solid rgba(30,58,95,0.12);
        }
        .logo-img {
          width: 148px; height: 148px; border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(201,168,76,0.7);
          position: relative; z-index: 2;
          box-shadow: 0 8px 40px rgba(30,58,95,0.18);
        }
        .logo-glow {
          position: absolute; inset: 20px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
          z-index: 1;
        }

        .gold-title {
          background: linear-gradient(90deg, #C9A84C, #E8C96A, #C9A84C);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 4s linear infinite;
        }

        .divider-line {
          height: 1px; background: rgba(201,168,76,0.5);
          animation: drawLine 1s 0.75s both;
        }
        .divider-diamond {
          width: 6px; height: 6px; background: #C9A84C;
          transform: rotate(45deg); flex-shrink: 0;
        }

        .btn-primary {
          transition: all .35s ease !important;
        }
        .btn-primary:hover {
          background: #1a3356 !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 30px rgba(30,58,95,0.3) !important;
        }
        .btn-outline {
          transition: all .35s ease !important;
        }
        .btn-outline:hover {
          background: rgba(201,168,76,0.08) !important;
          border-color: #C9A84C !important;
          color: #9A7535 !important;
          transform: translateY(-3px) !important;
        }

        .trust-item {
          display: flex; flex-direction: column;
          align-items: center; gap: 4px;
          padding: 0 20px;
        }
        .trust-item + .trust-item {
          border-right: 1px solid rgba(30,58,95,0.12);
        }
        .trust-num {
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 800; color: #1E3A5F; line-height: 1;
        }
        .trust-lbl {
          font-size: 12px; color: rgba(30,58,95,0.55);
          white-space: nowrap;
        }
      `}</style>

      {/* BG SHAPES */}
      <div style={{
        position: "absolute", top: "-80px",
        right: lang === "ar" ? "auto" : "-80px",
        left: lang === "ar" ? "-80px" : "auto",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,58,95,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%",
        left: lang === "ar" ? "auto" : "5%",
        right: lang === "ar" ? "5%" : "auto",
        width: 240, height: 240, borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.18)",
        pointerEvents: "none",
      }} />
      <svg style={{
        position: "absolute", inset: 0, width: "100%",
        height: "100%", pointerEvents: "none", opacity: 0.4,
      }} viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(30,58,95,0.07)" />
          </pattern>
        </defs>
        <rect width="1200" height="900" fill="url(#dots)" />
      </svg>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 py-32">
        <div style={{
          display: "grid",
          gridTemplateColumns: lang === "ar" ? "1fr auto" : "auto 1fr",
          gap: "72px",
          alignItems: "center",
        }}>

          {/* TEXT */}
          <div>

            {/* BADGE */}
            <div className="hero-badge inline-flex items-center gap-2 mb-8" style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "50px", padding: "6px 18px",
              fontSize: "13px", color: "#9A7535", letterSpacing: "1px",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#C9A84C", animation: "pulse 2s infinite", flexShrink: 0,
              }} />
              <span>{t("hero", "badge")}</span>
            </div>

            {/* TITLE */}
            <h1 className="hero-title font-bold" style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              lineHeight: 1.3, color: "#1E3A5F", marginBottom: "20px",
            }}>
              <span>{t("hero", "title1")} </span>
              <span className="gold-title">{t("hero", "title2")}</span>
              {t("hero", "title3") && <span> {t("hero", "title3")}</span>}
            </h1>

            {/* DIVIDER */}
            <div className="hero-divider flex items-center gap-3 mb-6">
              <div className="divider-line" style={{ width: "50px" }} />
              <div className="divider-diamond" />
              <div className="divider-line" style={{ width: "50px" }} />
            </div>

            {/* SUB */}
            <p className="hero-sub" style={{
              color: "rgba(30,58,95,0.65)",
              lineHeight: 2.1, marginBottom: "40px",
              fontSize: "clamp(16px, 2vw, 20px)",
              maxWidth: "420px", fontWeight: 400,
            }}>
              {t("hero", "sub")}
            </p>

            {/* BUTTONS */}
            <div className="hero-cta flex gap-3 flex-wrap" style={{ marginBottom: "48px" }}>
              <a href="#projects" className="btn-primary" style={{
                background: "#1E3A5F", color: "white",
                padding: "15px 36px", borderRadius: "4px",
                textDecoration: "none", display: "inline-block",
                fontWeight: 700, fontSize: "15px",
                fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
              }}>
                {t("hero", "btn1")}
              </a>
              <a href="#contact" className="btn-outline" style={{
                background: "transparent", color: "#1E3A5F",
                border: "1.5px solid rgba(201,168,76,0.55)",
                padding: "15px 36px", borderRadius: "4px",
                textDecoration: "none", display: "inline-block",
                fontSize: "15px", fontWeight: 600,
                fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
              }}>
                {t("hero", "btn2")}
              </a>
            </div>

            {/* TRUST BAR */}
            <div className="hero-trust flex" style={{
              direction: "rtl",
              borderTop: "1px solid rgba(30,58,95,0.1)",
              paddingTop: "24px",
            }}>
              {[
                { num: "+100", lbl: lang === "ar" ? "وحدة سُلِّمت" : "Units Delivered" },
                { num: "98%",  lbl: lang === "ar" ? "رضا العملاء"  : "Client Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="trust-item" style={{
                  borderRight: i > 0 ? "1px solid rgba(30,58,95,0.12)" : "none",
                  borderLeft: i === 0 ? "none" : undefined,
                }}>
                  <span className="trust-num">{s.num}</span>
                  <span className="trust-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>

          </div>

          {/* LOGO */}
          <div
            className="hero-logo hidden md:flex flex-col items-center gap-4"
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
                color: "#C9A84C", letterSpacing: "6px",
                fontSize: "14px", fontWeight: 700, marginBottom: "4px",
              }}>
                DAR
              </p>
              <p style={{ color: "rgba(30,58,95,0.4)", fontSize: "11px", letterSpacing: "2px" }}>
                {t("hero", "logoSub")}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM GOLD LINE */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg,transparent,#C9A84C,#E8C96A,#C9A84C,transparent)",
      }} />

    </div>
  );
}

export default Hero;