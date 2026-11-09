
import { useEffect, useRef } from "react";
import aboutImg from "../assets/about-us.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Reveal animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-visible");
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Subtle image parallax
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        const movement = (progress - 0.5) * 24;

        section.style.setProperty("--about-parallax", `${movement}px`);
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
          --about-parallax: 0px;

          width: 100%;
          padding: 110px 24px;
          background: linear-gradient(
            180deg,
            #F4F7FA 0%,
            #FFFFFF 100%
          );
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        /* =========================
           BACKGROUND DETAILS
        ========================= */

        .dar-about::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(201,168,76,.07) 0%,
            rgba(201,168,76,0) 70%
          );
          top: -180px;
          ${ar ? "left: -160px;" : "right: -160px;"}
          pointer-events: none;
          z-index: -1;
        }

        .dar-about-container {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: clamp(40px, 7vw, 100px);
        }

        /* =========================
           TEXT CONTENT
        ========================= */

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

          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
          transition-delay: .15s;
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
          0%, 100% {
            transform: scale(.8);
            opacity: .35;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .dar-about-heading {
          font-size: clamp(34px, 4.2vw, 58px);
          font-weight: 800;
          line-height: 1.3;
          color: #10243D;
          margin: 0 0 18px;
          letter-spacing: -1px;

          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity .9s ease,
            transform .9s cubic-bezier(.2,.8,.2,1);
          transition-delay: .3s;
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
          ${ar ? "right: 0;" : "left: 0;"}
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            #C9A84C,
            #E8C96A,
            transparent
          );
          transition: width 1s cubic-bezier(.2,.8,.2,1);
          transition-delay: 1.1s;
        }

        .dar-about-line {
          width: 50px;
          height: 2px;
          background: linear-gradient(
            90deg,
            #C9A84C,
            #E8C96A
          );
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;

          transform: scaleX(0);
          transform-origin: ${ar ? "right" : "left"};
          transition: transform .8s cubic-bezier(.2,.8,.2,1);
          transition-delay: .55s;
        }

        .dar-about-line::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #fff;
          transform: translateX(0);
          transition: transform .8s ease;
          transition-delay: .7s;
        }

        .dar-about-paragraph {
          color: #667487;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 2.1;
          margin: 0 0 18px;
          max-width: 520px;

          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .dar-about-paragraph:nth-of-type(1) {
          transition-delay: .65s;
        }

        .dar-about-paragraph:nth-of-type(2) {
          transition-delay: .8s;
        }

        /* =========================
           READ MORE
        ========================= */

        .dar-about-link-wrap {
          margin-top: 20px;

          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
          transition-delay: .95s;
        }

        .dar-about-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #10243D;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition:
            color .3s ease,
            gap .3s ease;
          padding-bottom: 8px;
          border-bottom: 1px solid #C9A84C;
          position: relative;
        }

        .dar-about-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #10243D;
          transition: width .35s ease;
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

        .dar-about-link:hover::after {
          width: 100%;
        }

        .dar-about-link:hover .dar-about-link-arrow {
          transform: translateX(${ar ? "-5px" : "5px"});
        }

        /* =========================
           IMAGE COLUMN
        ========================= */

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

          clip-path: inset(100% 0 0 0);
          transition: clip-path 1.2s cubic-bezier(.77,0,.175,1);
          transition-delay: .15s;
        }

        .dar-about-image-frame img {
          width: 100%;
          height: 108%;
          object-fit: cover;
          display: block;

          transform:
            scale(1.13)
            translateY(var(--about-parallax, 0px));

          transition:
            transform 1.5s cubic-bezier(.2,.8,.2,1);
        }

        .dar-about-image-frame:hover img {
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
            transparent 55%,
            rgba(11,26,46,.22) 100%
          );
          pointer-events: none;
          opacity: 0;
          transition: opacity 1s ease;
          transition-delay: .8s;
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

          opacity: 0;
          transform: translate(-12px, 12px);
          transition:
            opacity 1s ease,
            transform 1s cubic-bezier(.2,.8,.2,1);
          transition-delay: .65s;
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

          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.8,.2,1);
          transition-delay: 1s;
        }

        .dar-about-image-caption span {
          color: #E8C96A;
        }

        .dar-about-number {
          position: absolute;
          top: 24px;
          ${ar ? "right: 0;" : "left: 0;"}
          font-size: 12px;
          letter-spacing: 3px;
          color: #9A7535;
          font-weight: 700;

          opacity: 0;
          transform: translateY(15px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.8,.2,1);
          transition-delay: .45s;
        }

        /* =========================
           VISIBLE STATE
        ========================= */

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
          clip-path: inset(0 0 0 0);
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

        /* =========================
           TABLET
        ========================= */

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

          .dar-about-image-caption {
            left: 20px;
            bottom: 22px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

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

          .dar-about-image-caption {
            font-size: 9px;
            letter-spacing: 2px;
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

        /* =========================
           REDUCED MOTION
        ========================= */

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
          ref={imageRef}
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
