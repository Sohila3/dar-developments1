import logodar from "../assets/logodar.jpeg";

function Hero() {
  return (
    <div
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center"
      style={{
        background: "#0B1A2E",
        fontFamily: "'Noto Naskh Arabic', serif",
        direction: "rtl",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh Arabic:wght@400;500;600;700&display=swap');

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

        .hero-logo   { opacity:0; animation: fadeIn 1s 0.1s forwards; }
        .hero-badge  { opacity:0; animation: fadeUp 0.7s 0.3s forwards; }
        .hero-title  { opacity:0; animation: fadeUp 0.8s 0.5s forwards; }
        .hero-sub    { opacity:0; animation: fadeUp 0.8s 0.7s forwards; }
        .hero-divider{ opacity:0; animation: fadeUp 0.8s 0.75s forwards; }
        .hero-cta    { opacity:0; animation: fadeUp 0.8s 0.9s forwards; }

        .logo-wrapper {
          position: relative;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-spin {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px dashed rgba(201,168,76,0.3);
          animation: rotateBorder 12s linear infinite;
        }

        .logo-ring-outer {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.2);
        }

        .logo-img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(201,168,76,0.55);
          position: relative;
          z-index: 2;
        }

        .logo-glow {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
          z-index: 1;
        }

        .divider-line {
          width: 40px;
          height: 1px;
          background: rgba(201,168,76,0.5);
        }
        .divider-diamond {
          width: 5px;
          height: 5px;
          background: #C9A84C;
          transform: rotate(45deg);
        }

        .btn-primary:hover {
          background: #E8C96A !important;
          transform: translateY(-3px);
        }
        .btn-outline:hover {
          border-color: #C9A84C !important;
          color: #C9A84C !important;
          transform: translateY(-3px);
        }
      `}</style>

      {/* BG DECORATION */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "10%",
        width: 200, height: 200, borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.07)",
        pointerEvents: "none",
      }} />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 py-32">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
        }}>

          {/* LEFT — TEXT */}
          <div>

            {/* BADGE */}
            <div className="hero-badge inline-flex items-center gap-2 mb-8"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "50px",
                padding: "5px 16px",
                fontSize: "13px",
                color: "#E8C96A",
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#C9A84C",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }} />
              <span>دار للاستثمار العقاري</span>
            </div>

            {/* TITLE */}
            <h1 className="hero-title font-bold"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.45,
                color: "#FAF6EE",
                marginBottom: "16px",
              }}
            >
              <span>عقار </span>
              <span style={{ color: "#C9A84C" }}>يستحق </span>
              <span>الاستثمار</span>
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
                color: "rgba(250,246,238,0.58)",
                lineHeight: 2.1,
                marginBottom: "36px",
                fontSize: "16px",
                maxWidth: "380px",
              }}
            >
              ثق بنا في بناء مستقبلك — نقدم لك أفضل فرص الاستثمار العقاري بخبرة وموثوقية
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
                استعرض مشاريعنا
              </a>
              <a href="#contact" className="btn-outline"
                style={{
                  background: "transparent", color: "#FAF6EE",
                  border: "1px solid rgba(201,168,76,0.4)",
                  padding: "13px 32px", borderRadius: "4px",
                  textDecoration: "none", display: "inline-block", transition: "0.3s",
                }}
              >
                تواصل معنا
              </a>
            </div>

          </div>

          {/* RIGHT — LOGO */}
          <div className="hero-logo hidden md:flex flex-col items-center gap-4">

            <div className="logo-wrapper">
              <div className="logo-spin" />
              <div className="logo-ring-outer" />
              <div className="logo-glow" />
              <img src={logodar} alt="دار" className="logo-img" />
            </div>

            {/* COMPANY NAME UNDER LOGO */}
            <div style={{ textAlign: "center" }}>
              <p style={{
                color: "#C9A84C",
                letterSpacing: "5px",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "3px",
              }}>DAR</p>
              <p style={{
                color: "rgba(250,246,238,0.4)",
                fontSize: "11px",
                letterSpacing: "2px",
              }}>للاستثمار العقاري</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;