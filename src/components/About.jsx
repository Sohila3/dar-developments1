import aboutImg from "../assets/about-us.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { lang, t } = useLanguage();

  return (
    <div
      id="about"
      className="w-full py-24 px-6 md:px-16"
      style={{
        background: "#f8fbff",
        fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

        .about-img-wrap {
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(201,168,76,0.25);
        }
        .about-img-wrap img { transition: transform .7s ease; }
        .about-img-wrap:hover img { transform: scale(1.04); }

        .about-link {
          color: #9A7535;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap .3s ease, color .3s ease;
          text-decoration: none;
        }
        .about-link:hover { color: #C9A84C; gap: 10px; }
      `}</style>

      <div
        className="max-w-6xl mx-auto"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          gap: "48px",
        }}
      >
        {/* TEXT */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: lang === "ar" ? "right" : "left",
            order: lang === "ar" ? 1 : 2,
          }}
        >
          {/* LABEL */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              alignSelf: lang === "ar" ? "flex-end" : "flex-start",
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#C9A84C", display: "inline-block",
            }} />
            <span style={{ fontSize: "12px", color: "#9A7535", letterSpacing: "1.5px" }}>
              {t("about", "label")}
            </span>
          </div>

          {/* TITLE */}
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 700, color: "#0B1A2E",
            lineHeight: 1.4, marginBottom: "8px",
          }}>
            {t("about", "title1")}
            <span style={{ color: "#C9A84C" }}>{t("about", "title2")}</span>
          </h2>

          {/* GOLD LINE */}
          <div style={{
            width: "50px", height: "2px",
            background: "linear-gradient(90deg,#C9A84C,#E8C96A)",
            marginBottom: "24px",
            alignSelf: lang === "ar" ? "flex-end" : "flex-start",
          }} />

          {/* PARAGRAPHS */}
          <p style={{
            color: "#4A4A4A",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            lineHeight: 2, marginBottom: "16px",
          }}>
            {t("about", "p1")}
          </p>

          <p style={{
            color: "#4A4A4A",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            lineHeight: 2, marginBottom: "32px",
          }}>
            {t("about", "p2")}
          </p>

          {/* LINK */}
          <div style={{ alignSelf: lang === "ar" ? "flex-end" : "flex-start" }}>
            <Link to="/about-more" className="about-link">
              {t("about", "link")}
              <span style={{ fontSize: "18px", lineHeight: 1 }}>
                {lang === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="about-img-wrap"
          style={{ flex: "1.3 1 300px", order: lang === "ar" ? 2 : 1 }}
        >
          <img
            src={aboutImg}
            alt="about us"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;