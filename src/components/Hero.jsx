
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import palm1 from "../assets/palm1.jpeg";
import palm3 from "../assets/palm3.jpeg";
import palm5 from "../assets/palm5.jpeg";
import palm6 from "../assets/palm6.jpeg";
import palm8 from "../assets/palm8.jpeg";

const SLIDES = [palm5, palm1, palm3, palm6, palm8];
const SLIDE_MS = 5500;

const TICKER = [
  { label: "DAR DAMAC", to: "/projects/damac" },
  { label: "DAR LANDMARK", to: "/projects/landmark" },
  { label: "DAR ELWROOD", to: "/projects/elwrood" },
  { label: "PALM 2", to: "/projects/palm2" },
];

function Hero() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const slidesRef = useRef(null);

  const [{ active }, setSlide] = useState({ active: 0, prev: -1 });

  const goTo = (i) => {
    setSlide((s) =>
      i === s.active ? s : { active: i, prev: s.active }
    );
  };

  // Autoplay
  useEffect(() => {
    const id = setTimeout(() => {
      setSlide((s) => ({
        active: (s.active + 1) % SLIDES.length,
        prev: s.active,
      }));
    }, SLIDE_MS);

    return () => clearTimeout(id);
  }, [active]);

  // Desktop parallax
  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;

    const onScroll = () => {
      if (window.innerWidth < 768) {
        el.style.transform = "";
        return;
      }

      el.style.transform = `translateY(${Math.min(window.scrollY, 400) * 0.04}px) scale(1.08)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copy = ar
    ? {
        eyebrow: "دار للتطوير العقاري",
        line1: "نصنع ملامح",
        line2: "المستقبل.",
        sub: "نبني مساحات، نصنع قيمة، ونرسم ملامح المستقبل.",
        btn1: "استكشف مشاريعنا",
        btn2: "تواصل معنا",
        cardTag: "المشروع المميز",
        cardTitle: "بالم 2",
        cardLoc: "كورنيش بلازا — طنطا",
        cardCta: "اكتشف المشروع",
        trusted: "موثوقون لدى",
        families: "عائلة وأكثر",
        arrow: "←",
      }
    : {
        eyebrow: "DAR DEVELOPMENTS — TANTA",
        line1: "WE SHAPE",
        line2: "THE FUTURE.",
        sub: "Building spaces. Creating lasting value. Shaping tomorrow.",
        btn1: "Explore Projects",
        btn2: "Contact Us",
        cardTag: "FEATURED PROJECT",
        cardTitle: "Palm 2",
        cardLoc: "Corniche Plaza — Tanta",
        cardCta: "Discover the project",
        trusted: "Trusted by",
        families: "Families",
        arrow: "→",
      };

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
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        :root {
          --dar-ivory: #F8F6F1;
          --dar-navy: #10243D;
          --dar-gold: #B89552;
          --dar-gold-light: #D7BC83;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.09); }
        }

        @keyframes heroProgress {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes heroTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .dar-hero {
          position: relative;
          width: 100%;
          height: 88vh;
          height: 88svh;
          min-height: 650px;
          max-height: 1000px;
          overflow: hidden;
          background: #14212b;
          color: white;
        }

        /* BACKGROUND SLIDER */

        .dar-hero-slides {
          position: absolute;
          inset: 0;
          overflow: hidden;
          will-change: transform;
        }

        .dar-hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 1.3s ease;
        }

        .dar-hero-slide.active {
          opacity: 1;
          animation: heroZoom 7s ease-out both;
        }

    
.dar-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      90deg,
      rgba(5, 14, 23, 0.96) 0%,
      rgba(5, 14, 23, 0.82) 32%,
      rgba(5, 14, 23, 0.52) 58%,
      rgba(5, 14, 23, 0.16) 100%
    ),
    linear-gradient(
      0deg,
      rgba(5, 14, 23, 0.82) 0%,
      rgba(5, 14, 23, 0.08) 55%,
      rgba(5, 14, 23, 0.20) 100%
    );
}


        /* HERO CONTENT */

        .dar-hero-content {
          position: absolute;
          z-index: 2;
          top: 46%;;
          left: 7%;
          transform: translateY(-50%);
          width: min(570px, 48%);
          text-align: left;
          animation: heroFadeUp 1s .2s both;
        }

        .dar-hero[dir="rtl"] .dar-hero-content {
          left: auto;
          right: 7%;
          text-align: right;
        }

        .dar-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--dar-gold-light);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .dar-hero[dir="rtl"] .dar-hero-eyebrow {
          letter-spacing: 1px;
        }

        .dar-hero-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--dar-gold);
        }

        .dar-hero-title {
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-size: clamp(55px, 6.4vw, 90px);
          line-height: 1.03;
          font-weight: 500;
          letter-spacing: -2px;
          color: #fff;
        }

        .dar-hero-title span {
          display: block;
          color: var(--dar-gold-light);
        }

        .dar-hero-title.ar {
          font-family: 'Alexandria', sans-serif;
          font-size: clamp(38px, 5.2vw, 68px);
          line-height: 1.55;
          letter-spacing: 0;
          font-weight: 500;
        }

        .dar-hero-description {
          margin: 20px 0 35px;
          max-width: 390px;
          font-size: 14px;
          line-height: 2;
          color: rgba(255,255,255,.78);
          font-weight: 300;
        }

        .dar-hero[dir="rtl"] .dar-hero-description {
          margin-right: 0;
          margin-left: auto;
        }

        /* BUTTONS */

        .dar-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .dar-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 0;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          transition: color .3s;
        }

        .dar-hero-primary:hover {
          color: var(--dar-gold-light);
        }

        .dar-hero-round {
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--dar-ivory);
          color: var(--dar-navy);
          border-radius: 50%;
          font-size: 22px;
          transition: transform .3s, background .3s;
          flex-shrink: 0;
        }

        .dar-hero-primary:hover .dar-hero-round {
          transform: translateX(5px);
          background: var(--dar-gold-light);
        }

        .dar-hero[dir="rtl"] .dar-hero-primary:hover .dar-hero-round {
          transform: translateX(-5px);
        }

        .dar-hero-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border: 1px solid rgba(255,255,255,.35);
          color: white;
          text-decoration: none;
          font-size: 11px;
          transition: all .3s;
        }

        .dar-hero-secondary:hover {
          background: white;
          color: var(--dar-navy);
          border-color: white;
        }

        /* FEATURED PROJECT */

        .dar-hero-card {
          position: absolute;
          z-index: 3;
          bottom: 85px;
          right: 7%;
          width: 265px;
          padding: 23px;
          color: white;
          background: rgba(12,25,37,.55);
          border: 1px solid rgba(255,255,255,.2);
          backdrop-filter: blur(12px);
          text-decoration: none;
          transition: background .3s, transform .3s;
          animation: heroFadeUp 1s .7s both;
        }

        .dar-hero[dir="rtl"] .dar-hero-card {
          right: auto;
          left: 7%;
        }

        .dar-hero-card:hover {
          background: rgba(12,25,37,.8);
          transform: translateY(-4px);
        }

        .dar-hero-card-tag {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--dar-gold-light);
          font-size: 9px;
          letter-spacing: 2px;
          margin-bottom: 13px;
        }

        .dar-hero-card-tag::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--dar-gold-light);
        }

        .dar-hero-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 500;
          margin: 0;
        }

        .dar-hero-card-location {
          font-size: 11px;
          color: rgba(255,255,255,.7);
          margin: 8px 0 20px;
        }

        .dar-hero-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,.2);
          font-size: 11px;
        }

        .dar-hero-card-footer span:last-child {
          color: var(--dar-gold-light);
          font-size: 18px;
        }

        /* SLIDER */

        .dar-hero-slider {
          position: absolute;
          z-index: 4;
          bottom: 32px;
          left: 7%;
          display: flex;
          align-items: center;
          gap: 16px;
          direction: ltr;
        }

        .dar-hero-number {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          color: white;
          white-space: nowrap;
        }

        .dar-hero-segments {
          display: flex;
          gap: 5px;
        }

        .dar-hero-segment {
          width: 30px;
          height: 18px;
          padding: 0;
          display: flex;
          align-items: center;
          background: transparent;
          border: 0;
          cursor: pointer;
        }

        .dar-hero-segment::before {
          content: "";
          position: absolute;
          width: 30px;
          height: 1px;
          background: rgba(255,255,255,.35);
        }

        .dar-hero-segment span {
          position: relative;
          height: 1px;
          width: 0;
          background: var(--dar-gold-light);
        }

        .dar-hero-segment span.done {
          width: 100%;
        }

        .dar-hero-segment span.run {
          animation: heroProgress ${SLIDE_MS}ms linear forwards;
        }

        .dar-hero-arrows {
          display: flex;
          gap: 8px;
        }

        .dar-hero-arrow {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 1px solid rgba(255,255,255,.3);
          background: transparent;
          border-radius: 50%;
          font-size: 16px;
          cursor: pointer;
          transition: all .3s;
        }

        .dar-hero-arrow:hover {
          background: white;
          color: var(--dar-navy);
        }

        /* TICKER */

        .dar-hero-ticker {
          height: 44px;
          margin-top: 12px;
          background: var(--dar-navy);
          overflow: hidden;
          display: flex;
          align-items: center;
          direction: ltr;
          border-top: 1px solid rgba(184,149,82,.3);
        }

        .dar-hero-ticker-track {
          display: flex;
          width: max-content;
          animation: heroTicker 42s linear infinite;
        }

        .dar-hero-ticker:hover .dar-hero-ticker-track {
          animation-play-state: paused;
        }

        .dar-hero-ticker-group {
          display: flex;
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
            height: 92vh;
            height: 92svh;
            min-height: 720px;
            max-height: 900px;
          }

          .dar-hero-overlay {
            background:
              linear-gradient(
                0deg,
                rgba(8,18,27,.88) 0%,
                rgba(8,18,27,.55) 50%,
                rgba(8,18,27,.2) 100%
              );
          }

          .dar-hero-content {
            top: 45%;
            left: 24px;
            right: 24px;
            width: auto;
            transform: translateY(-50%);
          }

          .dar-hero[dir="rtl"] .dar-hero-content {
            right: 24px;
            left: 24px;
          }

          .dar-hero-title {
            font-size: clamp(48px, 13vw, 72px);
            letter-spacing: -1px;
          }

          .dar-hero-title.ar {
            font-size: clamp(36px, 10vw, 52px);
            line-height: 1.6;
          }

          .dar-hero-description {
            font-size: 13px;
            max-width: 100%;
            margin: 20px 0 26px;
          }

          .dar-hero-actions {
            gap: 12px;
          }

          .dar-hero-round {
            width: 46px;
            height: 46px;
          }

          .dar-hero-secondary {
            min-height: 44px;
            padding: 0 18px;
          }

          .dar-hero-card {
            display: none;
          }

          .dar-hero-slider {
            left: 24px;
            bottom: 25px;
            gap: 10px;
          }

          .dar-hero-arrows {
            display: none;
          }

          .dar-hero-segment {
            width: 22px;
          }

          .dar-hero-segment::before {
            width: 22px;
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
          .dar-hero-content {
            left: 18px;
            right: 18px;
          }

          .dar-hero[dir="rtl"] .dar-hero-content {
            left: 18px;
            right: 18px;
          }

          .dar-hero-title.ar {
            font-size: 33px;
          }

          .dar-hero-secondary {
            padding: 0 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dar-hero *,
          .dar-hero-ticker *,
          .dar-hero-ticker *::before {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="dar-hero" dir={ar ? "rtl" : "ltr"}>

        {/* Background Images */}
        <div className="dar-hero-slides" ref={slidesRef}>
          {SLIDES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`dar-hero-slide ${
                i === active ? "active" : ""
              }`}
            />
          ))}
        </div>

        <div className="dar-hero-overlay" />

        {/* Main Content */}
        <div className="dar-hero-content">

          <div className="dar-hero-eyebrow">
            {copy.eyebrow}
          </div>

          <h1 className={`dar-hero-title ${ar ? "ar" : ""}`}>
            {copy.line1}
            <span>{copy.line2}</span>
          </h1>

          <p className="dar-hero-description">
            {copy.sub}
          </p>

          <div className="dar-hero-actions">
            <a href="#projects" className="dar-hero-primary">
              <span className="dar-hero-round">
                {ar ? "←" : "→"}
              </span>
              {copy.btn1}
            </a>

            <a href="#contact" className="dar-hero-secondary">
              {copy.btn2}
            </a>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="dar-hero-slider">

          <span className="dar-hero-number">
            0{active + 1} / 0{SLIDES.length}
          </span>

          <div className="dar-hero-segments">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className="dar-hero-segment"
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              >
                <span
                  className={
                    i === active
                      ? "run"
                      : i < active
                      ? "done"
                      : ""
                  }
                />
              </button>
            ))}
          </div>

          <div className="dar-hero-arrows">
            <button
              className="dar-hero-arrow"
              onClick={() =>
                goTo((active - 1 + SLIDES.length) % SLIDES.length)
              }
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              className="dar-hero-arrow"
              onClick={() =>
                goTo((active + 1) % SLIDES.length)
              }
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT TICKER */}
      <div className="dar-hero-ticker">
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
                    {p.label}
                  </Link>
                  <i>◆</i>
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
