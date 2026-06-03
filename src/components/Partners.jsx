import { useLanguage } from "../context/LanguageContext";

function Partners() {
  const { lang, t } = useLanguage();

  return (
    <div
      id="partners"
      className="w-full py-24 px-6 md:px-16"
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,#f5f9ff 50%)",
        fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerCard {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        .partners-title { opacity:0; animation: fadeUp 0.7s 0.15s forwards; }
        .partners-sub   { opacity:0; animation: fadeUp 0.7s 0.35s forwards; }
        .partners-grid  { opacity:0; animation: fadeUp 0.7s 0.55s forwards; }

        .partner-card {
          position: relative;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 10px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all .4s ease;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .partner-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(201,168,76,0.07) 50%, transparent 70%);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity .3s ease;
        }
        .partner-card:hover {
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1), 0 0 20px rgba(201,168,76,0.08);
        }
        .partner-card:hover::before {
          opacity: 1;
          animation: shimmerCard 1.2s linear infinite;
        }
        .partner-label {
          color: rgba(11,26,46,0.3);
          font-size: 13px;
          letter-spacing: 1px;
          transition: color .3s ease;
          position: relative;
          z-index: 1;
        }
        .partner-card:hover .partner-label { color: rgba(201,168,76,0.8); }
        .section-line {
          width: 50px; height: 2px;
          background: linear-gradient(90deg, #C9A84C, #E8C96A);
          margin: 12px auto 0;
          border-radius: 2px;
        }
      `}</style>

      {/* TITLE */}
      <div className="text-center mb-16 partners-title">
        <div style={{
          display: "inline-flex", alignItems: "center",
          gap: "8px", marginBottom: "14px",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#C9A84C", display: "inline-block",
            animation: "pulse 2s infinite",
          }} />
          <span style={{ fontSize: "12px", color: "#9A7535", letterSpacing: "1.5px" }}>
            {t("partners", "label")}
          </span>
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 700, color: "#0B1A2E",
          lineHeight: 1.4, marginBottom: "4px",
        }}>
          {t("partners", "title1")}
          <span style={{ color: "#C9A84C" }}>{t("partners", "title2")}</span>
        </h2>
        <div className="section-line" />
      </div>

      {/* SUBTITLE */}
      <p className="partners-sub" style={{
        textAlign: "center",
        color: "rgba(11,26,46,0.55)",
        fontSize: "clamp(14px, 1.6vw, 16px)",
        lineHeight: 2, maxWidth: "580px", margin: "0 auto 56px",
      }}>
        {t("partners", "subtitle")}
      </p>

      {/* LOGOS GRID */}
      <div
        className="partners-grid max-w-5xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {[1, 2, 3, 4].map((item, i) => (
          <div key={i} className="partner-card">
            <span className="partner-label">Partner Logo</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Partners;