
import aboutImg from "../assets/about-us.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  return (
    <section
      id="about"
      className="dar-about"
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Noto Naskh Arabic', serif"
          : "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        .dar-about {
          width: 100%;
          padding: 110px 24px;
          background: linear-gradient(180deg, #F4F7FA 0%, #FFFFFF 100%);
          overflow: hidden;
          position: relative;
        }

        .dar-about-container {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: clamp(40px, 7vw, 100px);
        }

        .dar-about-content {
          flex: 1 1 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dar-about-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 26px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #9A7535;
          text-transform: uppercase;
        }

        .dar-about-dot {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dar-about-heading {
          font-size: clamp(34px, 4.2vw, 58px);
          font-weight: 800;
          line-height: 1.3;
          color: #10243D;
          margin: 0 0 18px;
          letter-spacing: -1px;
        }

        .dar-about-heading span {
          color: #B8953F;
        }

        .dar-about-line {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #C9A84C, #E8C96A);
          margin-bottom: 28px;
        }

        .dar-about-paragraph {
          color: #667487;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 2.1;
          margin: 0 0 18px;
          max-width: 520px;
        }

        .dar-about-link-wrap {
          margin-top: 20px;
        }

        .dar-about-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #10243D;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all .3s ease;
          padding-bottom: 8px;
          border-bottom: 1px solid #C9A84C;
        }

        .dar-about-link-arrow {
          color: #B8953F;
          font-size: 19px;
          transition: transform .3s ease;
        }

        .dar-about-link:hover {
          color: #B8953F;
          gap: 18px;
        }

        .dar-about-link:hover .dar-about-link-arrow {
          transform: translateX(${ar ? "-5px" : "5px"});
        }

        .dar-about-image-column {
          flex: 1.1 1 500px;
          min-width: 0;
          position: relative;
          padding: 0 15px 15px 0;
        }

        .dar-about-image-frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 4.5;
          background: #E8EDF3;
          border: 1px solid rgba(201,168,76,.25);
        }

        .dar-about-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .dar-about-image-frame:hover img {
          transform: scale(1.045);
        }

        .dar-about-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 55%,
            rgba(11,26,46,.22) 100%
          );
          pointer-events: none;
        }

        .dar-about-image-border {
          position: absolute;
          top: 15px;
          right: 0;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(201,168,76,.55);
          z-index: 0;
          pointer-events: none;
        }

        .dar-about-image-caption {
          position: absolute;
          bottom: 30px;
          left: 30px;
          z-index: 2;
          color: #fff;
          font-size: 10px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .dar-about-image-caption span {
          color: #E8C96A;
        }

        .dar-about-number {
          position: absolute;
          top: 24px;
          left: 0;
          font-size: 12px;
          letter-spacing: 3px;
          color: #9A7535;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .dar-about {
            padding: 80px 24px;
          }

          .dar-about-container {
            gap: 45px;
          }

          .dar-about-heading {
            font-size: clamp(32px, 5vw, 46px);
          }
        }

        @media (max-width: 767px) {
          .dar-about {
            padding: 70px 22px;
          }

          .dar-about-container {
            flex-direction: column;
            gap: 50px;
          }

          .dar-about-content {
            flex: unset;
            width: 100%;
          }

          .dar-about-image-column {
            flex: unset;
            width: 100%;
            max-width: 520px;
            margin: auto;
          }

          .dar-about-image-frame {
            aspect-ratio: 4 / 4.3;
          }

          .dar-about-heading {
            font-size: clamp(34px, 9vw, 48px);
          }

          .dar-about-paragraph {
            font-size: 14px;
          }

          .dar-about-number {
            top: 0;
          }
        }
      `}</style>

      <div className="dar-about-container">

        {/* TEXT CONTENT */}
        <div
          className="dar-about-content"
          style={{
            order: ar ? 1 : 2,
            textAlign: ar ? "right" : "left",
          }}
        >

          {/* EYEBROW */}
          <div
            className="dar-about-label"
            style={{
              alignSelf: ar ? "flex-end" : "flex-start",
            }}
          >
            <span className="dar-about-dot" />
            <span>{t("about", "label")}</span>
          </div>

          {/* HEADING */}
          <h2 className="dar-about-heading">
            {t("about", "title1")}
            <span>{t("about", "title2")}</span>
          </h2>

          {/* GOLD ACCENT */}
          <div
            className="dar-about-line"
            style={{
              alignSelf: ar ? "flex-end" : "flex-start",
            }}
          />

          {/* DESCRIPTION */}
          <p className="dar-about-paragraph">
            {t("about", "p1")}
          </p>

          <p className="dar-about-paragraph">
            {t("about", "p2")}
          </p>

          {/* READ MORE */}
          <div
            className="dar-about-link-wrap"
            style={{
              alignSelf: ar ? "flex-end" : "flex-start",
            }}
          >
            <Link to="/about-more" className="dar-about-link">
              {t("about", "link")}

              <span className="dar-about-link-arrow">
                {ar ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>

        {/* IMAGE CONTENT */}
        <div
          className="dar-about-image-column"
          style={{
            order: ar ? 2 : 1,
          }}
        >
          <div className="dar-about-number">
            01 / ABOUT DAR
          </div>

          <div className="dar-about-image-frame">
            <img
              src={aboutImg}
              alt={ar ? "عن دار للتطوير العقاري" : "About DAR Developments"}
            />

            {/* IMAGE CAPTION */}
            <div className="dar-about-image-caption">
              DAR <span>—</span> DEVELOPMENTS
            </div>
          </div>

          <div className="dar-about-image-border" />
        </div>

      </div>
    </section>
  );
}

export default About;
