
import { useEffect, useRef } from "react";
import aboutImg from "../assets/about-us.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const sectionRef = useRef(null);

  // Reveal animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Subtle image parallax
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let ticking = false;

    const updateParallax = () => {
      if (reducedMotion.matches) {
        section.style.setProperty("--about-parallax", "0px");
        ticking = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) /
        (window.innerHeight + rect.height);

      const movement = (progress - 0.5) * 18;

      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        section.style.setProperty(
          "--about-parallax",
          `${movement}px`
        );
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`dar-about ${ar ? "dar-about-ar" : "dar-about-en"}`}
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Alexandria', sans-serif"
          : "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        /* =====================================
           DAR ABOUT - LUXURY EDITORIAL
        ===================================== */

        .dar-about {
          --about-parallax: 0px;

          position: relative;
          width: 100%;
          padding: clamp(85px, 10vw, 145px) 24px;
          background: linear-gradient(
            180deg,
            #F8F6F1 0%,
            #F8F6F1 65%,
            #F2EEE6 100%
          );
          overflow: hidden;
          isolation: isolate;
        }

        .dar-about *,
        .dar-about *::before,
        .dar-about *::after {
          box-sizing: border-box;
        }

        /* =====================================
           BACKGROUND DECORATION
        ===================================== */

        .dar-about::before {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(184,149,82,.09) 0%,
            rgba(184,149,82,.035) 35%,
            transparent 72%
          );
          top: -240px;
          ${ar ? "left: -200px;" : "right: -200px;"}
          pointer-events: none;
          z-index: -1;
        }

        .dar-about::after {
          content: "DAR";
          position: absolute;
          bottom: -100px;
          ${ar ? "left: -35px;" : "right: -35px;"}
          font-family: "Playfair Display", serif;
          font-size: clamp(180px, 28vw, 380px);
          font-weight: 700;
          letter-spacing: -20px;
          line-height: 1;
          color: rgba(16,36,61,.025);
          pointer-events: none;
          z-index: -1;
          user-select: none;
        }

        .dar-about-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: clamp(45px, 8vw, 115px);
          position: relative;
          z-index: 1;
        }

        /* =====================================
           CONTENT
        ===================================== */

        .dar-about-content {
          flex: 1 1 480px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dar-about-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #8D6B34;
          text-transform: uppercase;

          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
          transition-delay: .1s;
        }

        .dar-about-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #B89552;
          flex-shrink: 0;
          position: relative;
        }

        .dar-about-dot::after {
          content: "";
          position: absolute;
          inset: -5px;
          border: 1px solid rgba(184,149,82,.5);
          border-radius: 50%;
          animation: darAboutPulse 2.5s ease-in-out infinite;
        }

        @keyframes darAboutPulse {
          0%, 100% {
            transform: scale(.8);
            opacity: .35;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* =====================================
           HEADING
        ===================================== */

        .dar-about-heading {
          font-family: inherit;
          font-size: clamp(36px, 4.1vw, 60px);
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -.8px;
          color: #10243D;
          margin: 0 0 24px;

          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity .9s ease,
            transform .9s cubic-bezier(.2,.8,.2,1);
          transition-delay: .25s;
        }

        .dar-about-heading span {
          color: #B89552;
          display: inline-block;
          position: relative;
          margin-inline-start: 8px;
        }

        .dar-about-heading span::after {
          content: "";
          position: absolute;
          bottom: -6px;
          ${ar ? "right: 0;" : "left: 0;"}
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            #B89552,
            #D7BC83,
            transparent
          );
          transition: width 1s cubic-bezier(.2,.8,.2,1);
          transition-delay: 1s;
        }

        /* =====================================
           GOLD DIVIDER
        ===================================== */

        .dar-about-line {
          width: 65px;
          height: 2px;
          background: linear-gradient(
            90deg,
            #B89552,
            #D7BC83
          );
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;

          transform: scaleX(0);
          transform-origin: ${ar ? "right" : "left"};
          transition: transform .8s cubic-bezier(.2,.8,.2,1);
          transition-delay: .45s;
        }

        .dar-about-line::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #F8F6F1;
          transform: translateX(0);
          transition: transform .8s ease;
          transition-delay: .6s;
        }

        /* =====================================
           PARAGRAPHS
        ===================================== */

        .dar-about-paragraph {
          color: #777B80;
          font-size: clamp(14px, 1.15vw, 16px);
          font-weight: 400;
          line-height: 2.15;
          margin: 0 0 18px;
          max-width: 540px;

          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .dar-about-paragraph:nth-of-type(1) {
          transition-delay: .6s;
        }

        .dar-about-paragraph:nth-of-type(2) {
          transition-delay: .75s;
        }

        /* =====================================
           READ MORE
        ===================================== */

        .dar-about-link-wrap {
          margin-top: 24px;

          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
          transition-delay: .9s;
        }

        .dar-about-link {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: #10243D;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(184,149,82,.6);
          position: relative;
          transition:
            color .3s ease,
            gap .3s ease;
        }

        .dar-about-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          ${ar ? "right: 0;" : "left: 0;"}
          width: 0;
          height: 1px;
          background: #10243D;
          transition: width .35s ease;
        }

        .dar-about-link-arrow {
          color: #B89552;
          font-size: 20px;
          line-height: 1;
          transition: transform .3s ease;
        }

        .dar-about-link:hover {
          color: #B89552;
          gap: 19px;
        }

        .dar-about-link:hover::after {
          width: 100%;
        }

        .dar-about-link:hover .dar-about-link-arrow {
          transform: translateX(${ar ? "-5px" : "5px"});
        }

        /* =====================================
           IMAGE
        ===================================== */

        .dar-about-image-column {
          flex: 1.05 1 540px;
          min-width: 0;
          position: relative;
          padding: 0 18px 18px 0;
        }

        .dar-about-en .dar-about-image-column {
          padding: 0 18px 18px 0;
        }

        .dar-about-ar .dar-about-image-column {
          padding: 0 0 18px 18px;
        }

        .dar-about-image-frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 4.5;
          background: #E9E4DA;
          border: 1px solid rgba(184,149,82,.25);

          clip-path: inset(100% 0 0 0);
          transition: clip-path 1.2s cubic-bezier(.77,0,.175,1);
          transition-delay: .1s;
        }

        .dar-about-image-frame img {
          width: 100%;
          height: 110%;
          object-fit: cover;
          object-position: center;
          display: block;

          transform:
            scale(1.12)
            translateY(var(--about-parallax, 0px));

          transition:
            transform 1.5s cubic-bezier(.2,.8,.2,1),
            filter .8s ease;
          filter: saturate(.88);
        }

        .dar-about-image-frame:hover img {
          filter: saturate(1);
          transform:
            scale(1.055)
            translateY(var(--about-parallax, 0px));
        }

        .dar-about-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 45%,
            rgba(16,36,61,.04) 65%,
            rgba(16,36,61,.35) 100%
          );
          pointer-events: none;
          opacity: 0;
          transition: opacity 1s ease;
          transition-delay: .7s;
        }

        /* FRAME */

        .dar-about-image-border {
          position: absolute;
          top: 18px;
          ${ar ? "left: 0;" : "right: 0;"}
          width: 100%;
          height: 100%;
          border: 1px solid rgba(184,149,82,.55);
          z-index: 0;
          pointer-events: none;

          opacity: 0;
          transform: translate(${ar ? "12px" : "-12px"}, 12px);
          transition:
            opacity 1s ease,
            transform 1s cubic-bezier(.2,.8,.2,1);
          transition-delay: .6s;
        }

        /* IMAGE CAPTION */

        .dar-about-image-caption {
          position: absolute;
          bottom: 28px;
          ${ar ? "right: 28px;" : "left: 28px;"}
          z-index: 2;
          color: #fff;
          font-size: 10px;
          letter-spacing: 3px;
          font-weight: 700;

          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.8,.2,1);
          transition-delay: .9s;
        }

        .dar-about-image-caption span {
          color: #D7BC83;
        }

        /* IMAGE NUMBER */

        .dar-about-number {
          position: absolute;
          top: 24px;
          ${ar ? "right: 0;" : "left: 0;"}
          font-size: 10px;
          letter-spacing: 3px;
          color: #8D6B34;
          font-weight: 700;

          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.8,.2,1);
          transition-delay: .4s;
        }

        /* =====================================
           REVEAL STATE
        ===================================== */

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
          transform: translateX(${ar ? "100%" : "-100%"});
        }

        .dar-about.is-visible .dar-about-image-frame {
          clip-path: inset(0);
        }

        .dar-about.is-visible .dar-about-image-frame img {
          transform:
            scale(1)
            translateY(var(--about-parallax, 0px));
        }

        .dar-about.is-visible .dar-about-image-frame::after {
          opacity: 1;
        }

        .dar-about.is-visible .dar-about-image-border {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1000px) {
          .dar-about-container {
            gap: 55px;
          }

          .dar-about-heading {
            font-size: clamp(34px, 5vw, 48px);
          }

          .dar-about-image-caption {
            bottom: 22px;
            ${ar ? "right: 20px;" : "left: 20px;"}
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 767px) {
          .dar-about {
            padding: 75px 22px;
          }

          .dar-about-container {
            flex-direction: column;
            gap: 48px;
          }

          .dar-about-content {
            flex: unset;
            width: 100%;
          }

          .dar-about-heading {
            font-size: clamp(34px, 8.5vw, 48px);
            line-height: 1.45;
          }

          .dar-about-paragraph {
            font-size: 14px;
            line-height: 2;
          }

          .dar-about-image-column {
            flex: unset;
            width: 100%;
            max-width: 540px;
            margin: auto;
          }

          .dar-about-image-frame {
            aspect-ratio: 4 / 4.35;
          }

          .dar-about-number {
            top: 0;
          }

          .dar-about-image-caption {
            font-size: 9px;
            letter-spacing: 2px;
            bottom: 20px;
          }

          .dar-about-image-frame:hover img {
            transform:
              scale(1)
              translateY(var(--about-parallax, 0px));
          }
        }

        @media (max-width: 380px) {
          .dar-about {
            padding: 60px 18px;
          }

          .dar-about-container {
            gap: 38px;
          }

          .dar-about-heading {
            font-size: 32px;
          }

          .dar-about-image-caption {
            bottom: 16px;
            ${ar ? "right: 15px;" : "left: 15px;"}
          }
        }

        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (prefers-reduced-motion: reduce) {
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
              alt={
                ar
                  ? "عن دار للتطوير العقاري"
                  : "About DAR Developments"
              }
            />

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
