
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
      className={`dar-partners ${ar ? "is-ar" : "is-en"}`}
      dir={ar ? "rtl" : "ltr"}
    >
      <style>{`
        .dar-partners {
          --partner-navy: #10243D;
          --partner-gold: #B89552;
          --partner-gold-light: #D7BC83;
          --partner-ivory: #F8F6F1;
          --partner-muted: #788391;

          position: relative;
          overflow: hidden;
          padding: 120px 24px;
          background:
            radial-gradient(
              ellipse at 85% 15%,
              rgba(184,149,82,.06),
              transparent 40%
            ),
            linear-gradient(180deg, #FFFFFF 0%, var(--partner-ivory) 100%);
          color: var(--partner-navy);
          isolation: isolate;
        }

        .dar-partners *,
        .dar-partners *::before,
        .dar-partners *::after {
          box-sizing: border-box;
        }

        .dar-partners-container {
          max-width: 1380px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* BACKGROUND TYPOGRAPHY */

        .dar-partners-bg-text {
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-family: "DM Sans", sans-serif;
          font-size: clamp(100px, 20vw, 280px);
          font-weight: 700;
          letter-spacing: -10px;
          color: rgba(16,36,61,.022);
          pointer-events: none;
          user-select: none;
          z-index: -1;
        }

        /* HEADER */

        .dar-partners-header {
          text-align: center;
          margin-bottom: 25px;
          animation: partnerFadeUp .9s cubic-bezier(.22,.61,.36,1) both;
        }

        .dar-partners-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: var(--partner-gold);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        .dar-partners-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--partner-gold);
        }

        .dar-partners-title {
          color: var(--partner-navy);
          font-size: clamp(34px, 5vw, 65px);
          font-weight: 800;
          line-height: 1.5;
          margin: 0;
          letter-spacing: -.6px;
        }

        .dar-partners-title span {
          display: inline-block;
          position: relative;
          color: var(--partner-gold);
          margin-inline-start: 10px;
        }

        .dar-partners-title span::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 7px;
          background: rgba(184,149,82,.12);
          z-index: -1;
        }

        .dar-partners-divider {
          width: 55px;
          height: 2px;
          margin: 25px auto;
          background: linear-gradient(
            90deg,
            var(--partner-gold),
            var(--partner-gold-light)
          );
        }

        .dar-partners-subtitle {
          max-width: 680px;
          margin: 0 auto 70px;
          text-align: center;
          color: var(--partner-muted);
          font-size: clamp(13px, 1.5vw, 15px);
          line-height: 2.2;
          animation: partnerFadeUp .9s .15s cubic-bezier(.22,.61,.36,1) both;
        }

        /* PARTNERS SHOWCASE */

        .dar-partners-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          max-width: 1200px;
          margin: auto;
          gap: 20px;
        }

        .dar-partner-card {
          position: relative;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 35px;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(16,36,61,.075);
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(16,36,61,.025);

          transition:
            transform 1.1s cubic-bezier(.22,.61,.36,1),
            box-shadow 1.1s cubic-bezier(.22,.61,.36,1),
            border-color 1.1s cubic-bezier(.22,.61,.36,1),
            background 1.1s cubic-bezier(.22,.61,.36,1);

          animation: partnerFadeUp .9s cubic-bezier(.22,.61,.36,1) both;
        }

        /* GOLD ACCENT */

        .dar-partner-card::before {
          content: "";
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--partner-gold),
            var(--partner-gold-light),
            transparent
          );
          transform: scaleX(.15);
          opacity: 0;
          transition:
            transform 1.1s cubic-bezier(.22,.61,.36,1),
            opacity 1.1s cubic-bezier(.22,.61,.36,1);
        }

        /* CORNER DETAIL */

        .dar-partner-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          inset-inline-end: 0;
          width: 35px;
          height: 35px;
          border-inline-end: 1px solid rgba(184,149,82,.25);
          border-bottom: 1px solid rgba(184,149,82,.25);
          opacity: .5;
          transition:
            width 1s cubic-bezier(.22,.61,.36,1),
            height 1s cubic-bezier(.22,.61,.36,1),
            opacity 1s ease;
        }

        .dar-partner-card:hover {
          transform: translateY(-7px);
          background: #FFFFFF;
          border-color: rgba(184,149,82,.3);
          box-shadow:
            0 28px 65px rgba(16,36,61,.07),
            0 5px 20px rgba(184,149,82,.035);
        }

        .dar-partner-card:hover::before {
          transform: scaleX(1);
          opacity: 1;
        }

        .dar-partner-card:hover::after {
          width: 55px;
          height: 55px;
          opacity: 1;
        }

        /* LOGO */

        .dar-partner-logo {
          width: 100%;
          max-width: 190px;
          max-height: 105px;
          object-fit: contain;
          display: block;
          filter: grayscale(12%);
          opacity: .85;

          transition:
            transform 1.2s cubic-bezier(.22,.61,.36,1),
            opacity 1.2s cubic-bezier(.22,.61,.36,1),
            filter 1.2s cubic-bezier(.22,.61,.36,1);
        }

        .dar-partner-card:hover .dar-partner-logo {
          transform: scale(1.055);
          filter: grayscale(0%);
          opacity: 1;
        }

        /* NUMBER */

        .dar-partner-number {
          position: absolute;
          bottom: 17px;
          inset-inline-start: 20px;
          color: rgba(16,36,61,.25);
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          transition: color 1s ease;
        }

        .dar-partner-card:hover .dar-partner-number {
          color: var(--partner-gold);
        }

        /* BOTTOM SIGNATURE */

        .dar-partners-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 55px;
          color: rgba(16,36,61,.42);
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-align: center;
          animation: partnerFadeUp 1s .45s both;
        }

        .dar-partners-bottom-line {
          width: 40px;
          height: 1px;
          background: rgba(184,149,82,.6);
        }

        .dar-partners-bottom span:nth-child(2) {
          color: var(--partner-gold);
        }

        /* ANIMATION */

        @keyframes partnerFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .dar-partners-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 750px;
            gap: 22px;
          }

          .dar-partner-card {
            height: 200px;
          }
        }

        @media (max-width: 600px) {
          .dar-partners {
            padding: 85px 20px;
          }

          .dar-partners-title {
            font-size: 35px;
          }

          .dar-partners-subtitle {
            margin-bottom: 45px;
            font-size: 12px;
          }

          .dar-partners-grid {
            gap: 14px;
          }

          .dar-partner-card {
            height: 155px;
            padding: 20px;
          }

          .dar-partner-logo {
            max-width: 145px;
            max-height: 75px;
          }

          .dar-partner-number {
            bottom: 12px;
            inset-inline-start: 12px;
            font-size: 8px;
          }

          .dar-partners-bottom {
            margin-top: 38px;
            font-size: 8px;
            letter-spacing: 1.5px;
            gap: 10px;
          }

          .dar-partners-bottom-line {
            width: 25px;
          }

          .dar-partners-bg-text {
            font-size: 100px;
            letter-spacing: -5px;
          }
        }

        @media (max-width: 360px) {
          .dar-partners-grid {
            grid-template-columns: 1fr;
            max-width: 260px;
          }

          .dar-partner-card {
            height: 165px;
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

      <div className="dar-partners-bg-text" aria-hidden="true">
        PARTNERS
      </div>

      <div className="dar-partners-container">

        {/* HEADER */}

        <header className="dar-partners-header">
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
        </header>

        {/* SUBTITLE */}

        <p className="dar-partners-subtitle">
          {t("partners", "subtitle")}
        </p>

        {/* PARTNERS */}

        <div className="dar-partners-grid">
          {partners.map((partner, i) => (
            <article
              className="dar-partner-card"
              key={partner.name}
              style={{ animationDelay: `${i * 0.16}s` }}
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
            </article>
          ))}
        </div>

        {/* SIGNATURE */}

        <div className="dar-partners-bottom">
          <span className="dar-partners-bottom-line" />
          <span>✦</span>
          {ar ? "شركاء النجاح" : "PARTNERS IN EXCELLENCE"}
          <span>✦</span>
          <span className="dar-partners-bottom-line" />
        </div>

      </div>
    </section>
  );
}

export default Partners;
