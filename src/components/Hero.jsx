import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import heroVideo from "../assets/Hero.mp4";

// بلور على الفيديو كله. 0 = فيديو واضح تماماً (زوديها مثلاً 3 لو عايزة لمسة بلور)
const VIDEO_BLUR_PX = 0;

// قوة البلور (الزجاج) اللي ورا الكلام بس
const FROST_BLUR_PX = 12;

const TICKER = [
  { labelAr: "دار داماك", labelEn: "DAR DAMAC", to: "/projects/damac" },
  { labelAr: "دار لاند مارك", labelEn: "DAR LANDMARK", to: "/projects/landmark" },
  { labelAr: "دار الورود", labelEn: "DAR ELWROOD", to: "/projects/elwrood" },
  { labelAr: "بالم 2", labelEn: "PALM 2", to: "/projects/palm2" },
];

function Hero() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  // الفيديو يفضل شغال: لو المتصفح وقّفه لأي سبب بنشغله تاني
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (video.readyState >= 2) setVideoReady(true);

    const play = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const onVisibility = () => {
      if (!document.hidden) play();
    };

    // لو الـ autoplay اتمنع (مثلاً وضع توفير الطاقة في الآيفون) أول لمسة تشغله
    const onFirstInteraction = () => play();

    play();

    video.addEventListener("canplay", play);
    video.addEventListener("ended", play);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("touchstart", onFirstInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener("click", onFirstInteraction, { once: true });

    return () => {
      video.removeEventListener("canplay", play);
      video.removeEventListener("ended", play);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
    };
  }, []);

  const copy = ar
    ? {
        eyebrow: "دار للتطوير العقاري",
        line1: "نصنع ملامح",
        line2: "المستقبل.",
        sub: "نبني مساحات، نصنع قيمة، ونرسم ملامح المستقبل.",
        btn1: "استكشف مشاريعنا",
        btn2: "تواصل معنا",
      }
    : {
        eyebrow: "DAR DEVELOPMENTS — TANTA",
        line1: "WE SHAPE",
        line2: "THE FUTURE.",
        sub: "Building spaces. Creating lasting value. Shaping tomorrow.",
        btn1: "Explore Projects",
        btn2: "Contact Us",
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
          --dar-gold-light: #F0D69A;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* الهيرو بيكبر مع الكلام (min-height) فمفيش حاجة بتتقص */

        .dar-hero {
          position: relative;
          width: 100%;
          min-height: 700px;
          min-height: clamp(650px, 88vh, 1000px);
          min-height: clamp(650px, 88svh, 1000px);
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #14212b;
          color: white;
        }

        /* BACKGROUND VIDEO */

        .dar-hero-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #14212b;
        }

        .dar-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          ${
            VIDEO_BLUR_PX > 0
              ? `filter: blur(${VIDEO_BLUR_PX}px); transform: scale(1.06) translateZ(0);`
              : "transform: translateZ(0);"
          }
          opacity: 0;
          transition: opacity 1.4s ease;
          pointer-events: none;
        }

        .dar-hero-video.ready {
          opacity: 1;
        }

        /* FROSTED GLASS BEHIND THE TEXT (fades out toward the video) */

        .dar-hero-frost {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          -webkit-backdrop-filter: blur(${FROST_BLUR_PX}px);
          backdrop-filter: blur(${FROST_BLUR_PX}px);
          -webkit-mask-image: linear-gradient(
            90deg,
            #000 0%,
            #000 26%,
            rgba(0,0,0,.55) 44%,
            transparent 66%
          );
          mask-image: linear-gradient(
            90deg,
            #000 0%,
            #000 26%,
            rgba(0,0,0,.55) 44%,
            transparent 66%
          );
        }

        .dar-hero[dir="rtl"] .dar-hero-frost {
          -webkit-mask-image: linear-gradient(
            270deg,
            #000 0%,
            #000 26%,
            rgba(0,0,0,.55) 44%,
            transparent 66%
          );
          mask-image: linear-gradient(
            270deg,
            #000 0%,
            #000 26%,
            rgba(0,0,0,.55) 44%,
            transparent 66%
          );
        }

        /* LIGHT OVERLAY (the video stays visible) */

        .dar-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(5, 14, 23, 0.72) 0%,
              rgba(5, 14, 23, 0.46) 34%,
              rgba(5, 14, 23, 0.14) 60%,
              rgba(5, 14, 23, 0) 82%
            ),
            linear-gradient(
              0deg,
              rgba(5, 14, 23, 0.5) 0%,
              rgba(5, 14, 23, 0) 38%
            );
        }

        .dar-hero[dir="rtl"] .dar-hero-overlay {
          background:
            linear-gradient(
              270deg,
              rgba(5, 14, 23, 0.72) 0%,
              rgba(5, 14, 23, 0.46) 34%,
              rgba(5, 14, 23, 0.14) 60%,
              rgba(5, 14, 23, 0) 82%
            ),
            linear-gradient(
              0deg,
              rgba(5, 14, 23, 0.5) 0%,
              rgba(5, 14, 23, 0) 38%
            );
        }

        /* HERO CONTENT (في الـ flow العادي، من غير transform للتوسيط) */

        .dar-hero-content {
          position: relative;
          z-index: 2;
          width: min(570px, 48%);
          margin-inline-start: 7%;
          padding: 112px 0 72px;
          text-align: start;
          animation: heroFadeUp 1s .2s both;
          text-shadow: 0 2px 22px rgba(0, 0, 0, .4);
        }

        .dar-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--dar-gold-light);
          font-size: 11px;
          font-weight: 600;
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
          color: rgba(255,255,255,.92);
          font-weight: 400;
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
          font-weight: 600;
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
          border: 1px solid rgba(255,255,255,.5);
          color: white;
          text-decoration: none;
          font-size: 11px;
          font-weight: 600;
          transition: all .3s;
        }

        .dar-hero-secondary:hover {
          background: white;
          color: var(--dar-navy);
          border-color: white;
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
          flex-direction: row;
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

        /* لاب بارتفاع قصير: الهيرو بياخد ارتفاع الشاشة والكلام بيصغر شوية
           عشان العنوان والزراير يبانوا كلهم من غير سكرول */

        @media (min-width: 768px) and (max-height: 780px) {
          .dar-hero {
            min-height: 100vh;
            min-height: 100svh;
          }

          .dar-hero-content {
            padding: 100px 0 40px;
          }

          .dar-hero-eyebrow {
            margin-bottom: 14px;
          }

          .dar-hero-title {
            font-size: clamp(42px, 8.5vh, 72px);
          }

          .dar-hero-title.ar {
            font-size: clamp(34px, 7vh, 56px);
          }

          .dar-hero-description {
            margin: 14px 0 24px;
          }
        }

        /* MOBILE: الفيديو واضح فوق، والكلام تحت على gradient */

        @media (max-width: 767px) {
          .dar-hero {
            align-items: flex-end;
            min-height: 700px;
            min-height: clamp(700px, 92vh, 900px);
            min-height: clamp(700px, 92svh, 900px);
          }

          /* الزجاج بيتلغي على الموبايل عشان الأداء */
          .dar-hero-frost {
            display: none;
          }

          .dar-hero-overlay,
          .dar-hero[dir="rtl"] .dar-hero-overlay {
            background: linear-gradient(
              0deg,
              rgba(5, 14, 23, 0.92) 0%,
              rgba(5, 14, 23, 0.8) 34%,
              rgba(5, 14, 23, 0.42) 58%,
              rgba(5, 14, 23, 0) 85%
            );
          }

          .dar-hero-content {
            width: 100%;
            margin-inline-start: 0;
            padding: 120px 24px 44px;
          }

          .dar-hero-eyebrow {
            margin-bottom: 14px;
          }

          .dar-hero-title {
            font-size: clamp(46px, 13vw, 68px);
            letter-spacing: -1px;
          }

          .dar-hero-title.ar {
            font-size: clamp(34px, 10vw, 50px);
            line-height: 1.6;
          }

          .dar-hero-description {
            font-size: 13px;
            max-width: 100%;
            margin: 16px 0 24px;
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
            padding: 110px 18px 36px;
          }

          .dar-hero-title.ar {
            font-size: 32px;
          }

          .dar-hero-secondary {
            padding: 0 13px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .dar-hero *,
          .dar-hero-ticker *,
          .dar-hero-ticker *::before {
            animation: none !important;
            transition: none !important;
          }

          .dar-hero-ticker-track {
            transform: none !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="dar-hero" dir={ar ? "rtl" : "ltr"}>

        {/* Background Video */}
        <div className="dar-hero-media" aria-hidden="true">
          <video
            ref={videoRef}
            className={`dar-hero-video ${videoReady ? "ready" : ""}`}
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            onLoadedData={() => setVideoReady(true)}
          />
        </div>

        {/* Frosted glass behind text + light overlay */}
        <div className="dar-hero-frost" aria-hidden="true" />
        <div className="dar-hero-overlay" aria-hidden="true" />

        {/* Main Content */}
        <div className="dar-hero-content">
          <div className="dar-hero-eyebrow">{copy.eyebrow}</div>

          <h1 className={`dar-hero-title ${ar ? "ar" : ""}`}>
            {copy.line1}
            <span>{copy.line2}</span>
          </h1>

          <p className="dar-hero-description">{copy.sub}</p>

          <div className="dar-hero-actions">
            <a href="#projects" className="dar-hero-primary">
              <span className="dar-hero-round" aria-hidden="true">
                {ar ? "←" : "→"}
              </span>
              {copy.btn1}
            </a>

            <a href="#contact" className="dar-hero-secondary">
              {copy.btn2}
            </a>
          </div>
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
                  <Link to={p.to} tabIndex={g === 1 ? -1 : 0}>
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