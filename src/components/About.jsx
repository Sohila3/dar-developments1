
import { useEffect, useRef } from "react";
import aboutVideo from "../assets/Dar.mp4";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";
  const sectionRef = useRef(null);

  // Reveal animation - safe fallback
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-visible");
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Video parallax
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress =
          (windowHeight - rect.top) /
          (windowHeight + rect.height);

        section.style.setProperty(
          "--about-parallax",
          `${(progress - 0.5) * 20}px`
        );
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Features and inspirational messages
  const features = [
    {
      id: "service",
      titleAr: "خدمة عملاء استثنائية",
      titleEn: "Exceptional Customer Service",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 12a8 8 0 0 1 16 0" />
          <path d="M4 12v5a2 2 0 0 0 2 2h2v-7H4Z" />
          <path d="M20 12v5a2 2 0 0 1-2 2h-2v-7h4Z" />
          <path d="M16 19a4 4 0 0 1-4 3" />
        </svg>
      ),
    },
    {
      id: "payment",
      titleAr: "مرونة في الدفع",
      titleEn: "Flexible Payment",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </svg>
      ),
    },
    {
      id: "options",
      titleAr: "خيارات تناسب طموحاتك",
      titleEn: "Options That Fit Your Vision",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      id: "investment",
      titleAr: "استثمار لمستقبل أفضل",
      titleEn: "Invest in a Better Future",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
          <path d="m8.5 12 2.5 2.5 5-5" />
        </svg>
      ),
    },
    {
      id: "design",
      titleAr: "تصاميم تلهمك",
      titleEn: "Designs That Inspire",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="m12 3 2.3 5.7L20 11l-5.7 2.3L12 19l-2.3-5.7L4 11l5.7-2.3L12 3Z" />
          <path d="m19 15 1.2 2.8L23 19l-2.8 1.2L19 23l-1.2-2.8L15 19l2.8-1.2L19 15Z" />
        </svg>
      ),
    },
    {
      id: "vision",
      titleAr: "رؤيتك تبدأ من هنا",
      titleEn: "Your Vision Starts Here",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: "dream",
      titleAr: "حوّل أحلامك إلى واقع",
      titleEn: "Turn Your Dreams Into Reality",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
          <path d="m5.6 5.6 2.1 2.1" />
          <path d="m16.3 16.3 2.1 2.1" />
          <path d="m18.4 5.6-2.1 2.1" />
          <path d="m7.7 16.3-2.1 2.1" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      id: "future",
      titleAr: "مستقبلك يستحق الأفضل",
      titleEn: "Your Future Deserves the Best",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="m5 5 14 14" />
          <path d="M19 5 5 19" />
          <circle cx="12" cy="12" r="7" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`dar-about ${ar ? "dar-about-ar" : "dar-about-en"}`}
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Noto Naskh Arabic', serif"
          : "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        .dar-about {
          --about-parallax: 0px;
          width: 100%;
          padding: 100px 24px 65px;
          background: linear-gradient(180deg,#F4F7FA 0%,#FFFFFF 100%);
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        .dar-about::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(201,168,76,.07) 0%,
            rgba(201,168,76,0) 70%);
          top: -180px;
          ${ar ? "left:-160px;" : "right:-160px;"}
          pointer-events: none;
          z-index: -1;
        }

        .dar-about-container {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: clamp(40px,7vw,100px);
        }

        .dar-about-content {
          flex: 1 1 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* TEXT */

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
          opacity: 1;
          transform: none;
          transition: opacity .8s ease,transform .8s ease;
        }

        .dar-about-dot {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
        }

        .dar-about-dot::after {
          content: "";
          position: absolute;
          inset: -5px;
          border: 1px solid rgba(201,168,76,.5);
          border-radius: 50%;
          animation: darDotPulse 2.5s ease-in-out infinite;
        }

        @keyframes darDotPulse {
          0%,100% { transform:scale(.8);opacity:.35; }
          50% { transform:scale(1.5);opacity:0; }
        }

        .dar-about-heading {
          font-size: clamp(34px,4.2vw,58px);
          font-weight: 800;
          line-height: 1.3;
          color: #10243D;
          margin: 0 0 18px;
          letter-spacing: -1px;
          opacity: 1;
          transform: none;
          transition: opacity .9s ease,transform .9s ease;
        }

        .dar-about-heading span {
          color: #B8953F;
          display: inline-block;
          position: relative;
        }

        .dar-about-heading span::after {
          content: "";
          position: absolute;
          bottom: -5px;
          ${ar ? "right:0;" : "left:0;"}
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,#C9A84C,#E8C96A,transparent);
          transition: width 1s ease;
          transition-delay: 1.1s;
        }

        .dar-about-line {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg,#C9A84C,#E8C96A);
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;
          transform: scaleX(0);
          transform-origin: ${ar ? "right" : "left"};
          transition: transform .8s ease;
          transition-delay: .55s;
        }

        .dar-about-line::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #fff;
          transition: transform .8s ease;
          transition-delay: .7s;
        }

        .dar-about-paragraph {
          color: #667487;
          font-size: clamp(14px,1.3vw,16px);
          line-height: 2.1;
          margin: 0 0 18px;
          max-width: 520px;
          opacity: 1;
          transform: none;
          transition: opacity .8s ease,transform .8s ease;
        }

        .dar-about-link-wrap {
          margin-top: 20px;
          opacity: 1;
          transform: none;
          transition: opacity .8s ease,transform .8s ease;
        }

        .dar-about-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #10243D;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          padding-bottom: 8px;
          border-bottom: 1px solid #C9A84C;
          transition: color .3s ease,gap .3s ease;
        }

        .dar-about-link:hover {
          color: #B8953F;
          gap: 18px;
        }

        .dar-about-link-arrow {
          color: #B8953F;
          font-size: 19px;
          transition: transform .3s ease;
        }

        .dar-about-link:hover .dar-about-link-arrow {
          transform: translateX(${ar ? "-5px" : "5px"});
        }

        /* VIDEO */

        .dar-about-image-column {
          flex: 1.1 1 500px;
          min-width: 0;
          position: relative;
          padding: 0 15px 15px 0;
        }

        .dar-about-image-frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/4.5;
          background: #E8EDF3;
          border: 1px solid rgba(201,168,76,.25);
          clip-path: inset(0);
          transition: clip-path 1.2s cubic-bezier(.77,0,.175,1);
        }

        .dar-about-video {
          width: 100%;
          height: 108%;
          object-fit: cover;
          display: block;
          transform: scale(1.13) translateY(var(--about-parallax,0px));
          transition: transform 1.5s ease;
        }

        .dar-about-image-frame:hover .dar-about-video {
          transform: scale(1.055) translateY(var(--about-parallax,0px));
        }

        .dar-about-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,transparent 55%,rgba(11,26,46,.28));
          pointer-events: none;
          opacity: 1;
          transition: opacity 1s ease;
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
          opacity: 1;
          transform: translate(0,0);
          transition: opacity 1s ease,transform 1s ease;
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
          opacity: 1;
          transform: none;
          transition: opacity .7s ease,transform .7s ease;
        }

        .dar-about-image-caption span {
          color: #E8C96A;
        }

        .dar-about-number {
          position: absolute;
          top: 24px;
          ${ar ? "right:0;" : "left:0;"}
          font-size: 12px;
          letter-spacing: 3px;
          color: #9A7535;
          font-weight: 700;
          opacity: 1;
          transform: none;
          transition: opacity .7s ease,transform .7s ease;
        }

        /* REVEAL */

        .dar-about.is-visible .dar-about-label,
        .dar-about.is-visible .dar-about-heading,
        .dar-about.is-visible .dar-about-paragraph,
        .dar-about.is-visible .dar-about-link-wrap,
        .dar-about.is-visible .dar-about-number,
        .dar-about.is-visible .dar-about-image-caption {
          opacity: 1;
          transform: translateY(0);
        }

        .dar-about.is-visible .dar-about-heading span::after {
          width: 100%;
        }

        .dar-about.is-visible .dar-about-line {
          transform: scaleX(1);
        }

        .dar-about.is-visible .dar-about-line::after {
          transform: translateX(${ar ? "-100%" : "100%"});
        }

        .dar-about.is-visible .dar-about-image-frame {
          clip-path: inset(0);
        }

        .dar-about.is-visible .dar-about-video {
          transform: scale(1) translateY(var(--about-parallax,0px));
        }

        .dar-about.is-visible .dar-about-image-border {
          opacity: 1;
          transform: translate(0,0);
        }

        /* INFINITE TICKER */

        .dar-about-features {
          max-width: 1250px;
          margin: 65px auto 0;
          padding: 20px 0;
          border-top: 1px solid rgba(16,36,61,.10);
          border-bottom: 1px solid rgba(16,36,61,.10);
          overflow: hidden;
          position: relative;
          direction: ltr;
        }

        .dar-about-features-track {
          display: flex;
          width: max-content;
          align-items: center;
          will-change: transform;
          animation: darFeaturesLTR 35s linear infinite;
        }

        .dar-about-features:hover .dar-about-features-track {
          animation-play-state: paused;
        }

        .dar-about-features-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .dar-about-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 30px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .dar-about-feature-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #B8953F;
          background: rgba(201,168,76,.09);
          border: 1px solid rgba(201,168,76,.20);
          border-radius: 50%;
          transition: background .3s ease,color .3s ease,transform .3s ease;
        }

        .dar-about-feature-icon svg {
          width: 19px;
          height: 19px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .dar-about-feature:hover .dar-about-feature-icon {
          background: #10243D;
          color: #E8C96A;
          transform: translateY(-2px);
        }

        .dar-about-feature-text {
          color: #43546A;
          font-size: 13px;
          font-weight: 600;
        }

        .dar-about-feature-separator {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: .7;
          margin-inline-start: 12px;
        }

        /* Seamless ticker */
        @keyframes darFeaturesLTR {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* TABLET */

        @media (max-width:900px) {
          .dar-about {
            padding: 80px 24px 55px;
          }

          .dar-about-container {
            gap: 45px;
          }

          .dar-about-heading {
            font-size: clamp(32px,5vw,46px);
          }

          .dar-about-image-caption {
            left: 20px;
            bottom: 22px;
          }

          .dar-about-features {
            margin-top: 50px;
          }

          .dar-about-feature {
            padding: 0 25px;
          }
        }

        /* MOBILE */

        @media (max-width:767px) {
          .dar-about {
            padding: 70px 22px 45px;
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
            aspect-ratio: 4/4.3;
          }

          .dar-about-heading {
            font-size: clamp(34px,9vw,48px);
          }

          .dar-about-paragraph {
            font-size: 14px;
          }

          .dar-about-number {
            top: 0;
          }

          .dar-about-image-caption {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .dar-about-image-frame:hover .dar-about-video {
            transform: scale(1) translateY(var(--about-parallax,0px));
          }

          .dar-about-features {
            margin-top: 45px;
            padding: 16px 0;
          }

          .dar-about-feature {
            gap: 9px;
            padding: 0 20px;
          }

          .dar-about-feature-icon {
            width: 34px;
            height: 34px;
          }

          .dar-about-feature-icon svg {
            width: 17px;
            height: 17px;
          }

          .dar-about-feature-text {
            font-size: 12px;
          }

          .dar-about-features-track {
            animation-duration: 27s;
          }
        }

        @media (max-width:380px) {
          .dar-about {
            padding: 60px 18px 40px;
          }

          .dar-about-container {
            gap: 40px;
          }

          .dar-about-heading {
            font-size: 32px;
          }

          .dar-about-image-caption {
            left: 15px;
            bottom: 18px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion:reduce) {
          .dar-about *,
          .dar-about *::before,
          .dar-about *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            transition-delay: 0ms !important;
          }

          .dar-about .dar-about-label,
          .dar-about .dar-about-heading,
          .dar-about .dar-about-paragraph,
          .dar-about .dar-about-link-wrap,
          .dar-about .dar-about-number,
          .dar-about .dar-about-image-caption,
          .dar-about .dar-about-image-border {
            opacity: 1;
            transform: none;
          }

          .dar-about .dar-about-image-frame {
            clip-path: inset(0);
          }

          .dar-about .dar-about-line {
            transform: scaleX(1);
          }

          .dar-about .dar-about-heading span::after {
            width: 100%;
          }

          .dar-about .dar-about-features-track {
            animation: none;
          }
        }
      `}</style>

      {/* MAIN ABOUT CONTENT */}

      <div className="dar-about-container">

        <div
          className="dar-about-content"
          style={{
            order: ar ? 1 : 2,
            textAlign: ar ? "right" : "left",
          }}
        >
          <div
            className="dar-about-label"
            style={{
              alignSelf: ar ? "flex-end" : "flex-start",
            }}
          >
            <span className="dar-about-dot" />
            <span>{t("about", "label")}</span>
          </div>

          <h2 className="dar-about-heading">
            {t("about", "title1")}
            <span>{t("about", "title2")}</span>
          </h2>

          <div
            className="dar-about-line"
            style={{
              alignSelf: ar ? "flex-end" : "flex-start",
            }}
          />

          <p className="dar-about-paragraph">
            {t("about", "p1")}
          </p>

          <p className="dar-about-paragraph">
            {t("about", "p2")}
          </p>

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

        {/* VIDEO */}

        <div
          className="dar-about-image-column"
          style={{ order: ar ? 2 : 1 }}
        >
          <div className="dar-about-number">
            01 / ABOUT DAR
          </div>

          <div className="dar-about-image-frame">
            <video
              className="dar-about-video"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className="dar-about-image-caption">
              DAR <span>—</span> DEVELOPMENTS
            </div>
          </div>

          <div className="dar-about-image-border" />
        </div>

      </div>

      {/* CONTINUOUS INFINITE TICKER */}

      <div className="dar-about-features">
        <div className="dar-about-features-track">

          {[0, 1].map((group) => (
            <div
              className="dar-about-features-group"
              key={group}
              aria-hidden={group === 1 ? "true" : undefined}
            >
              {features.map((feature) => (
                <div
                  className="dar-about-feature"
                  key={feature.id}
                >
                  <span className="dar-about-feature-icon">
                    {feature.icon}
                  </span>

                  <span className="dar-about-feature-text">
                    {ar ? feature.titleAr : feature.titleEn}
                  </span>

                  <span className="dar-about-feature-separator" />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default About;
