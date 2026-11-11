
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import heroEnglish from "../assets/hero (2).png";
import heroArabic from "../assets/hero (3).jpeg";

const TICKER = [
  { labelAr: "دار داماك", labelEn: "DAR DAMAC", to: "/projects/damac" },
  { labelAr: "دار لاند مارك", labelEn: "DAR LANDMARK", to: "/projects/landmark" },
  { labelAr: "دار الورود", labelEn: "DAR ELWROOD", to: "/projects/elwrood" },
  { labelAr: "بالم 2", labelEn: "PALM 2", to: "/projects/palm2" },
];

function Hero() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const heroImage = ar ? heroArabic : heroEnglish;

  return (
    <div
      id="home"
      style={{
        fontFamily: ar
          ? "'Alexandria', sans-serif"
          : "'DM Sans', sans-serif",
        direction: ar ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        :root {
          --dar-navy: #10243D;
          --dar-gold: #B89552;
          --dar-gold-light: #F0D69A;
        }

        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes heroTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* HERO */

        .dar-hero {
          position: relative;
          width: 100%;
          height: 88vh;
          height: 88svh;
          min-height: 600px;
          max-height: 1000px;
          overflow: hidden;
          background: #14212b;
          animation: heroFadeIn 1s ease both;
        }

        .dar-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* HERO BUTTONS */

        .dar-hero-actions {
          position: absolute;
          z-index: 5;
          bottom: 32px;
          left: 10%;
          display: flex;
          align-items: center;
          gap: 14px;
          direction: ltr;
        }

        .dar-hero[dir="rtl"] .dar-hero-actions {
          left: auto;
          right: 10%;
        }

        .dar-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 25px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: all .3s ease;
        }

        .dar-hero-btn-primary {
          color: var(--dar-navy);
          background: var(--dar-gold-light);
          border: 1px solid var(--dar-gold-light);
        }

        .dar-hero-btn-primary:hover {
          background: #fff;
          border-color: #fff;
          transform: translateY(-2px);
        }

        .dar-hero-btn-secondary {
          color: #fff;
          background: rgba(16,36,61,.35);
          border: 1px solid rgba(255,255,255,.65);
          backdrop-filter: blur(8px);
        }

        .dar-hero-btn-secondary:hover {
          color: var(--dar-navy);
          background: #fff;
          border-color: #fff;
          transform: translateY(-2px);
        }

        /* TICKER */

        .dar-hero-ticker {
          height: 44px;
          background: var(--dar-navy);
          overflow: hidden;
          display: flex;
          align-items: center;
          direction: ltr;
          border-top: 1px solid rgba(184,149,82,.3);
        }

        .dar-hero-ticker-track {
          display: flex;
          flex-direction: row;
          width: max-content;
          animation: heroTicker 42s linear infinite;
        }

        .dar-hero-ticker:hover .dar-hero-ticker-track,
        .dar-hero-ticker:focus-within .dar-hero-ticker-track {
          animation-play-state: paused;
        }

        .dar-hero-ticker-group {
          display: flex;
          flex-direction: row;
          flex-shrink: 0;
        }

        .dar-hero-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          padding: 0 22px;
        }

        .dar-hero-ticker-item a {
          color: var(--dar-gold-light);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-decoration: none;
          white-space: nowrap;
          transition: color .3s;
        }

        .dar-hero-ticker-item a:hover {
          color: white;
        }

        .dar-hero-ticker-item i {
          font-size: 7px;
          color: var(--dar-gold);
          font-style: normal;
        }

        /* MOBILE */

        @media (max-width: 767px) {
          .dar-hero {
            height: auto;
            min-height: 0;
            max-height: none;
            aspect-ratio: 4 / 5;
          }

          .dar-hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .dar-hero-actions {
            left: 8%;
            right: 8%;
            bottom: 18px;
            gap: 8px;
            flex-wrap: wrap;
          }

          .dar-hero[dir="rtl"] .dar-hero-actions {
            left: 8%;
            right: 8%;
          }

          .dar-hero-btn {
            min-height: 42px;
            padding: 0 13px;
            font-size: 10px;
          }

          .dar-hero-ticker {
            height: 40px;
          }

          .dar-hero-ticker-item {
            padding: 0 15px;
            gap: 15px;
          }

          .dar-hero-ticker-item a {
            font-size: 9px;
          }
        }

        @media (max-width: 380px) {
          .dar-hero-actions {
            gap: 7px;
          }

          .dar-hero-btn {
            padding: 0 10px;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dar-hero,
          .dar-hero-ticker-track {
            animation: none !important;
          }
        }
      `}</style>

      {/* HERO IMAGE */}
      <section className="dar-hero" dir={ar ? "rtl" : "ltr"}>
        <img
          src={heroImage}
          alt={
            ar
              ? "دار للتطوير العقاري - مشروعات دار"
              : "DAR Developments - Residential Projects"
          }
          className="dar-hero-image"
          fetchPriority="high"
        />

        {/* HERO BUTTONS */}
        <div className="dar-hero-actions">
          <a
            href="#projects"
            className="dar-hero-btn dar-hero-btn-primary"
          >
            {ar ? "استكشف مشاريعنا" : "Explore Our Projects"}
          </a>

          <a
            href="#contact"
            className="dar-hero-btn dar-hero-btn-secondary"
          >
            {ar ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>
      </section>

      {/* PROJECT TICKER */}
      <div
        className="dar-hero-ticker"
        aria-label={ar ? "مشاريع دار" : "DAR projects"}
      >
        <div className="dar-hero-ticker-track">
          {[0, 1].map((g) => (
            <div
              className="dar-hero-ticker-group"
              key={g}
              aria-hidden={g === 1}
            >
              {[...TICKER, ...TICKER, ...TICKER].map((p, i) => (
                <span className="dar-hero-ticker-item" key={i}>
                  <Link
                    to={p.to}
                    tabIndex={g === 1 ? -1 : 0}
                  >
                    {ar ? p.labelAr : p.labelEn}
                  </Link>
                  <i aria-hidden="true">◆</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
