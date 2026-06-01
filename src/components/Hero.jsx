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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        .hero-badge { opacity:0; animation: fadeUp 0.7s 0.2s forwards; }
        .hero-title { opacity:0; animation: fadeUp 0.8s 0.45s forwards; }
        .hero-sub   { opacity:0; animation: fadeUp 0.8s 0.65s forwards; }
        .hero-cta   { opacity:0; animation: fadeUp 0.8s 0.85s forwards; }

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

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto w-full px-8 md:px-16 py-32">

        {/* BADGE */}
        <div className="hero-badge inline-flex items-center gap-2 mb-6"
          style={{
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.35)",
            borderRadius: "50px",
            padding: "5px 16px",
            fontSize: "13px",
            color: "#E8C96A",
          }}
        >
          <span style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#C9A84C",
            animation: "pulse 2s infinite",
          }} />
          <span>دار للاستثمار العقاري</span>
        </div>

        {/* TITLE */}
        <h1 className="hero-title font-bold"
          style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            lineHeight: 1.4,
            color: "#FAF6EE",
            marginBottom: "14px",
          }}
        >
          <span>ثق بنا في بناء </span>
          <span style={{ color: "#C9A84C" }}>مستقبلك العقاري</span>
        </h1>

        {/* SUB */}
        <p className="hero-sub"
          style={{
            color: "rgba(250,246,238,0.62)",
            lineHeight: 2,
            marginBottom: "34px",
          }}
        >
          شريكك الموثوق في اختيار العقارات الأمثل
        </p>

        {/* BUTTONS (FIXED HERE 🔥) */}
        <div className="hero-cta flex gap-3 flex-wrap">

          <a
            href="#projects"
            className="btn-primary"
            style={{
              background: "#C9A84C",
              color: "#0B1A2E",
              padding: "13px 30px",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
              transition: "0.3s",
            }}
          >
            استعرض مشاريعنا
          </a>

          <a
            href="#contact"
            className="btn-outline"
            style={{
              background: "transparent",
              color: "#FAF6EE",
              border: "1px solid rgba(201,168,76,0.4)",
              padding: "13px 30px",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
              transition: "0.3s",
            }}
          >
            تواصل معنا
          </a>

        </div>

      </div>
    </div>
  );
}

export default Hero;