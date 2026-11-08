
import { useLanguage } from "../context/LanguageContext";
import chemas from "../assets/chemas.png";
import elmazlom from "../assets/elmazlom.png";
import elswedy from "../assets/elswedy.png";
import jotun from "../assets/jotun.png";

function Partners() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const partners = [
    { logo: chemas, name: "CHEMAS" },
    { logo: elmazlom, name: "ELMAZLOM" },
    { logo: elswedy, name: "ELSWEDY" },
    { logo: jotun, name: "JOTUN" },
  ];

  return (
    <section
      id="partners"
      className="dar-partners"
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Noto Naskh Arabic', serif"
          : "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        @keyframes partnersFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dar-partners {
          position: relative;
          overflow: hidden;
          padding: 110px 24px;
          background: linear-gradient(180deg, #FFFFFF 0%, #F4F7FA 100%);
        }

        .dar-partners-container {
          max-width: 1350px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .dar-partners-header {
          text-align: center;
          margin-bottom: 25px;
          animation: partnersFadeUp .8s ease both;
        }

        .dar-partners-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #9A7535;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          margin-bottom: 18px;
        }

        .dar-partners-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9A84C;
        }

        .dar-partners-title {
          color: #10243D;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.4;
          margin: 0;
        }

        .dar-partners-title span {
          color: #B8953F;
        }

        .dar-partners-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #C9A84C, #E8C96A);
          margin: 22px auto;
        }

        .dar-partners-subtitle {
          max-width: 650px;
          margin: 0 auto 65px;
          text-align: center;
          color: #7B8797;
          font-size: clamp(13px, 1.5vw, 15px);
          line-height: 2.2;
          animation: partnersFadeUp .8s .15s ease both;
        }

        /* PARTNER GRID */

        .dar-partners-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          max-width: 1150px;
          margin: auto;
        }

        .dar-partner-card {
          position: relative;
          height: 185px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          border: 1px solid rgba(201,168,76,.20);
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(16,36,61,.035);
          transition: transform .45s ease,
                      box-shadow .45s ease,
                      border-color .45s ease;
          animation: partnersFadeUp .8s ease both;
        }

        /* GOLD TOP LINE */

        .dar-partner-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
          transform: scaleX(0);
          transition: transform .45s ease;
        }

        .dar-partner-card:hover {
          transform: translateY(-8px);
          border-color: rgba(201,168,76,.5);
          box-shadow: 0 25px 55px rgba(16,36,61,.09),
                      0 0 25px rgba(201,168,76,.08);
        }

        .dar-partner-card:hover::before {
          transform: scaleX(1);
        }

        .dar-partner-logo {
          width: 100%;
          max-width: 175px;
          max-height: 95px;
          object-fit: contain;
          display: block;
          transition: transform .5s ease;
        }

        .dar-partner-card:hover .dar-partner-logo {
          transform: scale(1.08);
        }

        .dar-partner-number {
          position: absolute;
          bottom: 12px;
          left: 15px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: rgba(16,36,61,.22);
        }

        .dar-partners-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 45px;
          color: #9AA5B3;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .dar-partners-bottom-line {
          width: 35px;
          height: 1px;
          background: rgba(201,168,76,.6);
        }

        @media (max-width: 900px) {
          .dar-partners-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 650px;
            gap: 20px;
          }

          .dar-partner-card {
            height: 170px;
          }
        }

        @media (max-width: 600px) {
          .dar-partners {
            padding: 80px 20px;
          }

          .dar-partners-subtitle {
            margin-bottom: 40px;
          }

          .dar-partners-grid {
            gap: 14px;
          }

          .dar-partner-card {
            height: 135px;
            padding: 20px;
          }

          .dar-partner-logo {
            max-height: 70px;
          }

          .dar-partner-number {
            font-size: 8px;
            bottom: 8px;
            left: 10px;
          }

          .dar-partners-bottom {
            font-size: 8px;
            letter-spacing: 1px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dar-partners *,
          .dar-partners *::before,
          .dar-partners *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="dar-partners-container">

        {/* HEADER */}

        <div className="dar-partners-header">
          <div className="dar-partners-eyebrow">
            <span className="dar-partners-dot" />
            {t("partners", "label")}
            <span className="dar-partners-dot" />
          </div>

          <h2 className="dar-partners-title">
            {t("partners", "title1")}
            <span>{t("partners", "title2")}</span>
          </h2>

          <div className="dar-partners-divider" />
        </div>

        {/* SUBTITLE */}

        <p className="dar-partners-subtitle">
          {t("partners", "subtitle")}
        </p>

        {/* LOGOS */}

        <div className="dar-partners-grid">
          {partners.map((partner, i) => (
            <div
              className="dar-partner-card"
              key={partner.name}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="dar-partner-logo"
                loading="lazy"
              />

              <span className="dar-partner-number">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM DECORATION */}

        <div className="dar-partners-bottom">
          <span className="dar-partners-bottom-line" />
          {ar ? "شركاء النجاح" : "PARTNERS IN EXCELLENCE"}
          <span className="dar-partners-bottom-line" />
        </div>

      </div>
    </section>
  );
}

export default Partners;
