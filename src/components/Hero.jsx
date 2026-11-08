
import { useEffect, useRef, useState } from "react";

import logodar from "../assets/logodar.jpeg";
import heroBg from "../assets/palm5.jpeg";

import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.jpeg";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";
import p7 from "../assets/project-7.jpeg";
import p8 from "../assets/project-8.jpeg";

import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const imgRef = useRef(null);

  // HERO SLIDESHOW
  const images = [heroBg, p1, p2, p3, p4, p5, p6, p7, p8];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatic image change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // PARALLAX EFFECT
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;

      imgRef.current.style.transform =
        `scale(1.08) translateY(${window.scrollY * 0.15}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="home"
      style={{
        fontFamily: ar
          ? "'Noto Naskh Arabic', serif"
          : "'Montserrat', sans-serif",
        direction: ar ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Montserrat:wght@400;600;700;800;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes goldExpand {
          from { width: 0; }
          to { width: 48px; }
        }

        @keyframes pulse {
          0%,100% { opacity:1; }
          50% { opacity:0.3; }
        }

        @keyframes scrollBounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(7px); }
        }

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes revealRight {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }

        @keyframes heroImageFade {
          from {
            opacity: 0;
            filter: brightness(0.7);
          }
          to {
            opacity: 1;
            filter: brightness(1);
          }
        }

        .img-panel {
          animation: revealRight 1.2s 0.1s cubic-bezier(.77,0,.18,1) both;
        }

        .hero-slideshow-image {
          animation: heroImageFade 1.2s ease both;
        }

        .text-panel {
          animation: fadeIn 0.6s 0.5s both;
        }

        .a1 {
          opacity:0;
          animation: fadeUp 0.8s 0.6s cubic-bezier(.16,1,.3,1) forwards;
        }

        .a2 {
          opacity:0;
          animation: fadeUp 0.8s 0.75s cubic-bezier(.16,1,.3,1) forwards;
        }

        .a3 {
          opacity:0;
          animation: fadeUp 0.8s 0.9s cubic-bezier(.16,1,.3,1) forwards;
        }

        .a4 {
          opacity:0;
          animation: fadeUp 0.8s 1.05s cubic-bezier(.16,1,.3,1) forwards;
        }

        .a5 {
          opacity:0;
          animation: fadeUp 0.8s 1.2s cubic-bezier(.16,1,.3,1) forwards;
        }

        .a6 {
          opacity:0;
          animation: fadeIn 1s 1.4s forwards;
        }

        .hero-headline {
          font-size: clamp(44px, 5.5vw, 86px);
          font-weight: 900;
          line-height: 1.05;
          color: #10243D;
          letter-spacing: ${ar ? "0" : "-2px"};
        }

        .hero-headline-gold {
          color: #B8953F;
          display: block;
        }

        .gold-line {
          height: 2px;
          background: linear-gradient(90deg, #C9A84C, #E8C96A);
          width: 0;
          animation: goldExpand 0.8s 0.8s ease forwards;
          margin-bottom: 24px;
          border-radius: 2px;
        }

        .hero-sub {
          color: #667487;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 2;
          max-width: 380px;
        }

        .btn-gold {
          display: inline-block;
          background: #10243D;
          color: #fff;
          padding: 15px 40px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          border-radius: 1px;
          transition: all .3s ease;
          font-family: inherit;
        }

        .btn-gold:hover {
          background: #C9A84C;
          color: #10243D;
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(201,168,76,0.22);
        }

        .btn-outline-white {
          display: inline-block;
          color: #34465C;
          padding: 15px 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-decoration: none;
          border: 1px solid rgba(16,36,61,0.2);
          border-radius: 1px;
          transition: all .3s ease;
          font-family: inherit;
        }

        .btn-outline-white:hover {
          border-color: #B8953F;
          color: #B8953F;
          transform: translateY(-3px);
        }

        .stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(16,36,61,0.14);
        }

        .nav-link-hero {
          color: rgba(255,255,255,0.78);
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color .2s;
        }

        .nav-link-hero:hover {
          color: #E8C96A;
        }

        .lang-toggle {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(201,168,76,0.55);
          color: #E8C96A;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          border-radius: 1px;
          cursor: pointer;
          transition: all .2s;
          font-family: inherit;
        }

        .lang-toggle:hover {
          background: rgba(201,168,76,0.18);
        }

        .scroll-ind {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .scroll-ind-line {
          width: 1px;
          height: 52px;
          background: linear-gradient(to bottom, #B8953F, transparent);
          animation: scrollBounce 2s ease-in-out infinite;
        }

        .scroll-ind-txt {
          font-size: 9px;
          letter-spacing: 3px;
          color: rgba(16,36,61,0.45);
          writing-mode: vertical-rl;
        }

        .logo-ring-spin {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px dashed rgba(201,168,76,0.55);
          animation: spinRing 12s linear infinite;
        }

        .img-number {
          position: absolute;
          bottom: 40px;
          font-size: 120px;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -4px;
        }

        .hero-slide-indicator {
          width: 7px;
          height: 7px;
          border-radius: 20px;
          border: none;
          padding: 0;
          background: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: all .4s ease;
        }

        .hero-slide-indicator.active {
          width: 28px;
          background: #E8C96A;
        }

        @media (max-width: 767px) {
          .hero-split {
            flex-direction: column !important;
          }

          .img-panel-wrap {
            width: 100% !important;
            height: 45vh !important;
            min-height: 300px !important;
          }

          .text-panel-wrap {
            width: 100% !important;
            min-height: unset !important;
            padding: 40px 24px 48px !important;
            justify-content: flex-start !important;
          }

          .hero-nav {
            padding: 18px 20px !important;
          }

          .nav-links-wrap {
            display: none !important;
          }

          .hero-headline {
            font-size: clamp(38px, 10vw, 56px) !important;
          }

          .scroll-ind-wrap,
          .img-number {
            display: none !important;
          }

          .hero-slide-dots {
            bottom: 18px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-slideshow-image {
            animation: none;
          }
        }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
        {/* NAV */}
        <nav
          className="hero-nav"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: "24px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background:
              "linear-gradient(to bottom, rgba(11,26,46,0.62), transparent)",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 44,
                height: 44,
              }}
            >
              <div className="logo-ring-spin" />

              <img
                src={logodar}
                alt="DAR"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1.5px solid rgba(201,168,76,0.6)",
                  position: "relative",
                  zIndex: 2,
                }}
              />
            </div>

            <div>
              <p
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "15px",
                  letterSpacing: "4px",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                DAR
              </p>

              <p
                style={{
                  color: "rgba(232,201,106,0.85)",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  margin: 0,
                }}
              >
                {ar ? "للاستثمار العقاري" : "DEVELOPMENTS"}
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div
            className="nav-links-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {(ar
              ? ["الرئيسية", "المشاريع", "عن الشركة", "تواصل معنا"]
              : ["Home", "Projects", "About", "Contact"]
            ).map((lnk, i) => (
              <a
                key={i}
                href={["/#home", "/#projects", "/#about", "/#contact"][i]}
                className="nav-link-hero"
              >
                {lnk}
              </a>
            ))}

            <button
              className="lang-toggle"
              onClick={() => {
                // لو LanguageContext عندك فيه toggleLanguage
                // اربطيه هنا لو حابة.
              }}
            >
              {ar ? "EN" : "ع"}
            </button>
          </div>
        </nav>

        {/* SPLIT LAYOUT */}
        <div
          className="hero-split"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          {/* IMAGE PANEL */}
          <div
            className="img-panel img-panel-wrap"
            style={{
              width: "55%",
              height: "100%",
              position: "relative",
              overflow: "hidden",
              order: ar ? 2 : 1,
            }}
          >
            <img
              key={currentImage}
              ref={imgRef}
              src={images[currentImage]}
              alt={`DAR Developments - Slide ${currentImage + 1}`}
              className="hero-slideshow-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(1.08)",
                transformOrigin: "center center",
                willChange: "transform",
              }}
            />

            {/* VIGNETTE */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: ar
                  ? "linear-gradient(to left, rgba(11,26,46,0.38) 0%, transparent 40%)"
                  : "linear-gradient(to right, rgba(11,26,46,0.38) 0%, transparent 40%)",
                pointerEvents: "none",
              }}
            />

            {/* SLIDE INDICATORS */}
            <div
              className="hero-slide-dots"
              style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                zIndex: 5,
              }}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`hero-slide-indicator ${
                    currentImage === i ? "active" : ""
                  }`}
                />
              ))}
            </div>

            {/* IMAGE NUMBER */}
            <div
              className="img-number"
              style={{
                [ar ? "right" : "left"]: "24px",
              }}
            >
              {String(currentImage + 1).padStart(2, "0")}
            </div>
          </div>

          {/* TEXT PANEL */}
          <div
            className="text-panel text-panel-wrap"
            style={{
              width: "45%",
              background: "#F4F7FA",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "120px 56px 80px",
              position: "relative",
              overflow: "hidden",
              order: ar ? 1 : 2,
              textAlign: ar ? "right" : "left",
            }}
          >
            {/* TEXTURE */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.035,
                pointerEvents: "none",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(16,36,61,0.5) 40px, rgba(16,36,61,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(16,36,61,0.5) 40px, rgba(16,36,61,0.5) 41px)",
              }}
            />

            {/* GOLD ACCENT */}
            <div
              style={{
                position: "absolute",
                top: 0,
                [ar ? "right" : "left"]: 0,
                width: "3px",
                height: "100%",
                background:
                  "linear-gradient(to bottom, #C9A84C, transparent)",
              }}
            />

            {/* LOCATION */}
            <div className="a1" style={{ marginBottom: "28px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "10px",
                  color: "#9A7535",
                  letterSpacing: "2.5px",
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#C9A84C",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />

                {ar ? "طنطا — مصر" : "TANTA — EGYPT"}
              </span>
            </div>

            {/* HEADLINE */}
            <h1
              className="hero-headline a2"
              style={{
                marginBottom: 0,
              }}
            >
              {ar ? (
                <>
                  نصنع ملامح
                  <span className="hero-headline-gold">
                    المستقبل.
                  </span>
                </>
              ) : (
                <>
                  WE SHAPE
                  <span className="hero-headline-gold">
                    THE FUTURE.
                  </span>
                </>
              )}
            </h1>

            {/* GOLD LINE */}
            <div
              className="gold-line a3"
              style={{
                marginTop: "24px",
              }}
            />

            {/* SUBTITLE */}
            <p
              className="hero-sub a3"
              style={{
                marginBottom: "40px",
                marginLeft: ar ? "auto" : 0,
                marginRight: ar ? 0 : "auto",
              }}
            >
              {ar
                ? "نبني مساحات، نصنع قيمة، ونرسم ملامح المستقبل."
                : "Building spaces. Creating lasting value. Shaping tomorrow."}
            </p>

            {/* BUTTONS */}
            <div
              className="a4"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "52px",
              }}
            >
              <a href="#projects" className="btn-gold">
                {ar ? "استكشف مشاريعنا" : "Explore Projects"}
              </a>

              <a href="#contact" className="btn-outline-white">
                {ar ? "تواصل معنا" : "Contact Us"}
              </a>
            </div>

            {/* STATS */}
            <div
              className="a5"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  num: "+100",
                  ar: "وحدة سُلِّمت",
                  en: "Units Delivered",
                },
                {
                  num: "98%",
                  ar: "رضا العملاء",
                  en: "Satisfaction",
                },
                {
                  num: "8+",
                  ar: "سنوات خبرة",
                  en: "Yrs Experience",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(20px,2.5vw,28px)",
                        fontWeight: 800,
                        color: "#10243D",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </span>

                    <span
                      style={{
                        fontSize: "10px",
                        color: "#7B8797",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {ar ? s.ar : s.en}
                    </span>
                  </div>

                  {i < 2 && <div className="stat-divider" />}
                </div>
              ))}
            </div>

            {/* SCROLL INDICATOR */}
            <div
              className="scroll-ind-wrap a6"
              style={{
                position: "absolute",
                bottom: "40px",
                [ar ? "left" : "right"]: "32px",
              }}
            >
              <div className="scroll-ind">
                <span className="scroll-ind-txt">
                  SCROLL
                </span>

                <div className="scroll-ind-line" />
              </div>
            </div>
          </div>
        </div>

        {/* GOLD BOTTOM BAR */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg,transparent,#C9A84C,#E8C96A,#C9A84C,transparent)",
            zIndex: 10,
          }}
        />
      </section>
    </div>
  );
}

export default Hero;
