
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

function Counter({ to, prefix = "", suffix = "", delay = 1000, duration = 1600 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }

    let raf;
    let start;
    const timer = setTimeout(() => {
      const tick = (ts) => {
        if (!start) start = ts;

        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setVal(Math.round(to * eased));

        if (progress < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, delay, duration]);

  return (
    <span dir="ltr" style={{ display: "inline-block" }}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

function Hero() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const slidesRef = useRef(null);

  const [{ active, prev }, setSlide] = useState({
    active: 0,
    prev: -1,
  });

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

      el.style.transform = `translateY(${Math.min(window.scrollY, 400) * 0.08}px) scale(1.1)`;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copy = ar
    ? {
        eyebrow: "دار للاستثمار العقاري",
        line1: "نصنع ملامح",
        line2: "المستقبل.",
        sub: "نبني مساحات، نصنع قيمة، ونرسم ملامح المستقبل.",
        btn1: "استكشف مشاريعنا",
        btn2: "تواصل معنا",
        cardTag: "المشروع المميز",
        cardTitle: "بالم 2",
        cardLoc: "كورنيش بلازا — طنطا",
        chip1: "مقدم يبدأ من 30%",
        chip2: "تقسيط 4 سنوات",
        cardCta: "اكتشف المشروع",
        arrow: "←",
        stats: ["وحدة سُلِّمت", "رضا العملاء", "سنوات خبرة"],
      }
    : {
        eyebrow: "TANTA — EGYPT",
        line1: "WE SHAPE",
        line2: "THE FUTURE.",
        sub: "Building spaces. Creating lasting value. Shaping tomorrow.",
        btn1: "Explore Projects",
        btn2: "Contact Us",
        cardTag: "FEATURED PROJECT",
        cardTitle: "Palm 2",
        cardLoc: "Corniche Plaza — Tanta",
        chip1: "From 30% down",
        chip2: "4-year installments",
        cardCta: "Discover the project",
        arrow: "→",
        stats: ["Units Delivered", "Satisfaction", "Years Experience"],
      };

  const statNumbers = [
    { to: 100, prefix: "+", suffix: "" },
    { to: 98, prefix: "", suffix: "%" },
    { to: 8, prefix: "", suffix: "+" },
  ];

  return (
    <div
      id="home"
      style={{
        fontFamily: ar ? "'Alexandria', sans-serif" : "'DM Sans', sans-serif",
        direction: ar ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        :root {
          --dar-ivory: #F8F6F1;
          --dar-paper: #F2EEE6;
          --dar-navy: #10243D;
          --dar-gold: #B89552;
          --dar-gold-light: #D7BC83;
          --dar-muted: #777B80;
        }

        @keyframes hxFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes hxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes hxLineReveal {
          from { width: 0; }
          to { width: 56px; }
        }

        @keyframes hxImageReveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }

        @keyframes hxKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes hxProgress {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes hxPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .35; }
        }

        @keyframes hxScroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        @keyframes hxMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes hxGoldShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .hx-hero {
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          background: var(--dar-ivory);
          color: var(--dar-navy);
          overflow: hidden;
          position: relative;
        }

        .hx-split {
          display: flex;
          flex: 1;
          width: 100%;
          min-height: 660px;
        }

        /* IMAGE */

        .hx-img-panel {
          width: 56%;
          min-height: 660px;
          position: relative;
          overflow: hidden;
          background: #D8D4CC;
          animation: hxImageReveal 1.1s .1s cubic-bezier(.77,0,.18,1) both;
        }

        .hx-slides {
          position: absolute;
          inset: 0;
          transform-origin: center;
          will-change: transform;
        }

        .hx-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease;
          animation: none;
        }

        .hx-slide.active {
          opacity: 1;
          animation: hxKenBurns 7s ease-out both;
        }

        .hx-shade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(to top, rgba(10,24,39,.56), transparent 42%),
            ${ar
              ? "linear-gradient(to left, rgba(10,24,39,.18), transparent 42%)"
              : "linear-gradient(to right, rgba(10,24,39,.18), transparent 42%)"};
        }

        .hx-image-label {
          position: absolute;
          bottom: 28px;
          inset-inline-end: 30px;
          color: rgba(255,255,255,.75);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          z-index: 2;
        }

        /* SLIDER CONTROLS */

        .hx-meta {
          position: absolute;
          top: 105px;
          inset-inline-end: 30px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 14px;
          direction: ltr;
          opacity: 0;
          animation: hxFadeIn 1s 1s forwards;
        }

        .hx-count {
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-shadow: 0 1px 8px rgba(0,0,0,.3);
        }

        .hx-segs {
          display: flex;
          gap: 5px;
        }

        .hx-seg {
          position: relative;
          width: 26px;
          height: 16px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .hx-seg::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255,255,255,.4);
        }

        .hx-seg-fill {
          position: relative;
          height: 1px;
          width: 0;
          background: var(--dar-gold-light);
        }

        .hx-seg-fill.done { width: 100%; }

        .hx-seg-fill.run {
          animation: hxProgress ${SLIDE_MS}ms linear forwards;
        }

        /* FEATURED PROJECT */

        .hx-card {
          position: absolute;
          bottom: 34px;
          inset-inline-start: 34px;
          width: min(310px, calc(100% - 68px));
          z-index: 3;
          display: block;
          padding: 22px 24px 18px;
          color: white;
          text-decoration: none;
          background: rgba(16,36,61,.76);
          border: 1px solid rgba(215,188,131,.38);
          border-radius: 2px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          opacity: 0;
          animation: hxFadeUp .8s 1.1s cubic-bezier(.16,1,.3,1) forwards;
          transition: background .3s ease, transform .3s ease;
        }

        .hx-card:hover {
          background: rgba(16,36,61,.9);
          transform: translateY(-4px);
        }

        .hx-card-tag {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--dar-gold-light);
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 13px;
        }

        .hx-card-tag i {
          width: 5px;
          height: 5px;
          background: var(--dar-gold-light);
          border-radius: 50%;
          animation: hxPulse 2s infinite;
        }

        .hx-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 500;
          line-height: 1.15;
          margin: 0;
        }

        .hx-card-loc {
          font-size: 11px;
          color: rgba(255,255,255,.68);
          margin: 7px 0 16px;
        }

        .hx-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 17px;
        }

        .hx-chip {
          font-size: 10px;
          color: var(--dar-gold-light);
          border: 1px solid rgba(215,188,131,.35);
          padding: 5px 9px;
          border-radius: 1px;
        }

        .hx-card-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 13px;
          border-top: 1px solid rgba(255,255,255,.15);
          color: white;
          font-size: 11px;
          font-weight: 500;
        }

        .hx-card-cta span:last-child {
          color: var(--dar-gold-light);
          transition: transform .3s;
        }

        .hx-card:hover .hx-card-cta span:last-child {
          transform: translateX(${ar ? "-5px" : "5px"});
        }

        /* TEXT PANEL */

        .hx-text-panel {
          width: 44%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 110px 54px 70px;
          background: var(--dar-ivory);
          animation: hxFadeIn .8s .3s both;
        }

        .hx-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .025;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 39px, #10243D 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, #10243D 40px);
        }

        .hx-glow {
          position: absolute;
          top: -160px;
          inset-inline-end: -180px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(184,149,82,.12), transparent 70%);
        }

        .hx-watermark {
          position: absolute;
          bottom: -35px;
          inset-inline-end: -10px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(150px, 17vw, 250px);
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(16,36,61,.055);
          pointer-events: none;
          user-select: none;
          direction: ltr;
        }

        .hx-edge {
          position: absolute;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, var(--dar-gold), transparent 65%);
        }

        .hx-content {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hx-a1 { opacity: 0; animation: hxFadeUp .8s .45s forwards; }
        .hx-a2 { opacity: 0; animation: hxFadeUp .8s .6s forwards; }
        .hx-a3 { opacity: 0; animation: hxFadeUp .8s .75s forwards; }
        .hx-a4 { opacity: 0; animation: hxFadeUp .8s .9s forwards; }
        .hx-a5 { opacity: 0; animation: hxFadeUp .8s 1.05s forwards; }
        .hx-a6 { opacity: 0; animation: hxFadeIn 1s 1.3s forwards; }

        .hx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #96743E;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: ${ar ? "1px" : "3px"};
        }

        .hx-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--dar-gold);
          animation: hxPulse 2s infinite;
        }

        .hx-headline {
          color: var(--dar-navy);
          font-size: clamp(44px, 5vw, 78px);
          font-weight: 500;
          line-height: ${ar ? 1.55 : 1.04};
          letter-spacing: ${ar ? "0" : "-2.5px"};
          margin: 0;
        }

        .hx-headline-en {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
        }

        .hx-headline-ar {
          font-family: 'Alexandria', sans-serif;
          font-weight: 500;
        }

        .hx-gold {
          display: block;
          padding-bottom: .08em;
          color: var(--dar-gold);
        }

        .hx-line {
          height: 1px;
          width: 0;
          margin-top: 25px;
          margin-bottom: 25px;
          background: var(--dar-gold);
          animation: hxLineReveal .8s .7s ease forwards;
        }

        .hx-sub {
          color: #73777B;
          font-size: clamp(13px, 1.2vw, 15px);
          line-height: 2;
          max-width: 360px;
          margin-top: 0;
          margin-bottom: 34px;
          font-weight: 400;
        }

        .hx-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 42px;
        }

        .hx-btn-primary,
        .hx-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 14px 28px;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          border-radius: 1px;
          transition: all .3s ease;
          font-family: inherit;
        }

        .hx-btn-primary {
          background: var(--dar-navy);
          color: white;
          border: 1px solid var(--dar-navy);
        }

        .hx-btn-primary:hover {
          background: var(--dar-gold);
          border-color: var(--dar-gold);
          color: var(--dar-navy);
          transform: translateY(-2px);
        }

        .hx-btn-ghost {
          color: var(--dar-navy);
          border: 1px solid rgba(16,36,61,.2);
          background: transparent;
        }

        .hx-btn-ghost:hover {
          border-color: var(--dar-gold);
          color: #96743E;
          transform: translateY(-2px);
        }

        /* STATS */

        .hx-stats {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hx-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hx-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(25px, 2.7vw, 34px);
          font-weight: 500;
          color: var(--dar-navy);
          line-height: 1;
        }

        .hx-stat-lbl {
          font-size: 10px;
          color: #85888B;
          letter-spacing: .2px;
        }

        .hx-stat-div {
          width: 1px;
          height: 34px;
          background: rgba(16,36,61,.15);
        }

        /* SCROLL */

        .hx-scroll {
          position: absolute;
          bottom: 28px;
          inset-inline-end: 26px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
        }

        .hx-scroll-txt {
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(16,36,61,.42);
          writing-mode: vertical-rl;
          font-family: 'DM Sans', sans-serif;
        }

        .hx-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--dar-gold), transparent);
          animation: hxScroll 2s ease-in-out infinite;
        }

        /* TICKER */

        .hx-ticker {
          position: relative;
          z-index: 5;
          height: 44px;
          background: var(--dar-navy);
          border-top: 1px solid rgba(184,149,82,.4);
          overflow: hidden;
          display: flex;
          align-items: center;
          direction: ltr;
        }

        .hx-ticker-track {
          display: flex;
          width: max-content;
          animation: hxMarquee 42s linear infinite;
        }

        .hx-ticker:hover .hx-ticker-track {
          animation-play-state: paused;
        }

        .hx-ticker-group {
          display: flex;
          flex-shrink: 0;
        }

        .hx-ticker-item {
          display: inline-flex;
          align-items: center;
        }

        .hx-ticker-item a {
          color: #D7BC83;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          padding: 0 22px;
          text-decoration: none;
          white-space: nowrap;
          transition: color .25s;
        }

        .hx-ticker-item a:hover { color: white; }

        .hx-ticker-item i {
          font-style: normal;
          font-size: 7px;
          color: var(--dar-gold);
          opacity: .65;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .hx-text-panel { padding-inline: 36px; }
          .hx-headline { font-size: clamp(42px, 5.5vw, 68px); }
          .hx-card { width: min(290px, calc(100% - 48px)); inset-inline-start: 24px; }
        }

        @media (max-width: 767px) {
          .hx-split {
            flex-direction: column !important;
            min-height: auto;
          }

          .hx-img-panel {
            order: 1 !important;
            width: 100% !important;
            height: 58vh;
            height: 58svh;
            min-height: 390px;
            max-height: 620px;
            flex: none;
          }

          .hx-text-panel {
            order: 2 !important;
            width: 100% !important;
            padding: 48px 24px 56px !important;
            min-height: 510px;
          }

          .hx-meta {
            top: 22px;
            inset-inline-end: 18px;
          }

          .hx-card {
            bottom: 18px;
            inset-inline-start: 18px;
            width: min(300px, calc(100% - 36px));
            padding: 17px 19px 15px;
          }

          .hx-card-title { font-size: 28px; }

          .hx-headline {
            font-size: clamp(38px, 10vw, 58px) !important;
            letter-spacing: -1px;
          }

          .hx-headline-ar {
            font-size: clamp(34px, 9vw, 48px) !important;
            line-height: 1.6;
            letter-spacing: 0;
          }

          .hx-sub { max-width: 100%; }

          .hx-actions {
            gap: 10px;
            margin-bottom: 34px;
          }

          .hx-btn-primary,
          .hx-btn-ghost {
            flex: 1 1 140px;
            padding: 14px 16px;
            min-height: 48px;
          }

          .hx-stats { gap: 13px; }
          .hx-stat-num { font-size: 25px; }
          .hx-stat-lbl { font-size: 9px; }
          .hx-stat-div { height: 28px; }
          .hx-watermark { font-size: 130px; }
          .hx-scroll { display: none; }
          .hx-image-label { bottom: 20px; inset-inline-end: 18px; }
          .hx-ticker { height: 40px; }
          .hx-ticker-item a { font-size: 9px; padding: 0 16px; }
        }

        @media (max-width: 380px) {
          .hx-text-panel { padding-inline: 18px !important; }
          .hx-headline { font-size: 36px !important; }
          .hx-headline-ar { font-size: 32px !important; }
          .hx-stats { gap: 10px; }
          .hx-stat-div { margin-inline: 2px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hx-hero *,
          .hx-hero *::before,
          .hx-hero *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <section className="hx-hero">
        <div className="hx-split">

          {/* IMAGE PANEL */}
          <div
            className="hx-img-panel"
            style={{ order: ar ? 2 : 1 }}
          >
            <div className="hx-slides" ref={slidesRef}>
              {SLIDES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  decoding="async"
                  className={`hx-slide ${i === active ? "active" : ""}`}
                />
              ))}
            </div>

            <div className="hx-shade" />

            <div className="hx-meta">
              <span className="hx-count">
                0{active + 1} / 0{SLIDES.length}
              </span>

              <div className="hx-segs">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    className="hx-seg"
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                  >
                    <span
                      className={`hx-seg-fill ${
                        i === active ? "run" : i < active ? "done" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <Link to="/projects/palm2" className="hx-card">
              <div className="hx-card-tag">
                <i />
                {copy.cardTag}
              </div>

              <h3 className="hx-card-title">{copy.cardTitle}</h3>
              <p className="hx-card-loc">{copy.cardLoc}</p>

              <div className="hx-chips">
                <span className="hx-chip">{copy.chip1}</span>
                <span className="hx-chip">{copy.chip2}</span>
              </div>

              <div className="hx-card-cta">
                <span>{copy.cardCta}</span>
                <span>{copy.arrow}</span>
              </div>
            </Link>

            <div className="hx-image-label">
              DAR DEVELOPMENTS — TANTA
            </div>
          </div>

          {/* TEXT PANEL */}
          <div
            className="hx-text-panel"
            style={{
              order: ar ? 1 : 2,
              textAlign: ar ? "right" : "left",
            }}
          >
            <div className="hx-grid" />
            <div className="hx-glow" />
            <div className="hx-watermark">DAR</div>

            <div
              className="hx-edge"
              style={{ [ar ? "right" : "left"]: 0 }}
            />

            <div className="hx-content">

              {/* Eyebrow */}
              <div className="hx-a1" style={{ marginBottom: 28 }}>
                <span className="hx-eyebrow">
                  <span className="hx-eyebrow-dot" />
                  {copy.eyebrow}
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`hx-headline hx-a2 ${
                  ar ? "hx-headline-ar" : "hx-headline-en"
                }`}
              >
                {copy.line1}
                <span className="hx-gold">{copy.line2}</span>
              </h1>

              <div
                className="hx-line"
                style={{
                  marginLeft: ar ? "auto" : 0,
                  marginRight: ar ? 0 : "auto",
                }}
              />

              {/* Description */}
              <p
                className="hx-sub hx-a3"
                style={{
                  marginLeft: ar ? "auto" : 0,
                  marginRight: ar ? 0 : "auto",
                }}
              >
                {copy.sub}
              </p>

              {/* Buttons */}
              <div
                className="hx-actions hx-a4"
                style={{ justifyContent: ar ? "flex-start" : "flex-start" }}
              >
                <a href="#projects" className="hx-btn-primary">
                  {copy.btn1}
                </a>

                <a href="#contact" className="hx-btn-ghost">
                  {copy.btn2}
                </a>
              </div>

              {/* Stats */}
              <div className="hx-stats hx-a5">
                {statNumbers.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <div className="hx-stat">
                      <span className="hx-stat-num">
                        <Counter
                          to={s.to}
                          prefix={s.prefix}
                          suffix={s.suffix}
                        />
                      </span>

                      <span className="hx-stat-lbl">
                        {copy.stats[i]}
                      </span>
                    </div>

                    {i < statNumbers.length - 1 && (
                      <div className="hx-stat-div" />
                    )}
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="hx-scroll hx-a6">
                <span className="hx-scroll-txt">SCROLL</span>
                <div className="hx-scroll-line" />
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT TICKER */}
        <div className="hx-ticker">
          <div className="hx-ticker-track">
            {[0, 1].map((g) => (
              <div
                className="hx-ticker-group"
                key={g}
                aria-hidden={g === 1}
              >
                {[...TICKER, ...TICKER, ...TICKER].map((p, i) => (
                  <span className="hx-ticker-item" key={i}>
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
      </section>
    </div>
  );
}

export default Hero;
