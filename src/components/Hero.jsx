import { useEffect, useRef } from "react";
import heroBg from "../assets/palm5.jpeg";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const onScroll = () => {
      img.style.transform = `scale(1.08) translateY(${window.scrollY * 0.15}px)`;
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

        @keyframes revealRight {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }

        .img-panel {
          animation: revealRight 1.2s 0.1s cubic-bezier(.77,0,.18,1) both;
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

        /* ——— MOBILE ——— */
        @media (max-width: 767px) {
          .hero-section {
            height: auto !important;
            min-height: 100vh;
          }

          .hero-split {
            flex-direction: column !important;
            height: auto !important;
          }

          /* الصورة فوق والكلام تحتها في العربي والإنجليزي */
          .img-panel-wrap {
            order: 1 !important;
            width: 100% !important;
            height: 45vh !important;
            min-height: 300px !important;
          }

          .text-panel-wrap {
            order: 2 !important;
            width: 100% !important;
            min-height: unset !important;
            padding: 40px 24px 56px !important;
            justify-content: flex-start !important;
          }

          .hero-headline {
            font-size: clamp(38px, 10vw, 56px) !important;
          }

          .hero-sub {
            max-width: 100% !important;
          }

          .scroll-ind-wrap,
          .img-number {
            display: none !important;
          }
        }
      `}</style>

      <section
        className="hero-section"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
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
              ref={imgRef}
              src={heroBg}
              alt="DAR Developments"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(1.08)",
                transformOrigin: "center center",
                willChange: "transform",
              }}
            />

            {/* Subtle image vignette */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: ar
                  ? "linear-gradient(to left, rgba(11,26,46,0.38) 0%, transparent 40%)"
                  : "linear-gradient(to right, rgba(11,26,46,0.38) 0%, transparent 40%)",
              }}
            />

            {/* Decorative image number */}
            <div
              className="img-number"
              style={{
                [ar ? "right" : "left"]: "24px",
              }}
            >
              02
            </div>
          </div>

          {/* LIGHT TEXT PANEL */}
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
            {/* Soft background texture */}
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

            {/* Gold accent line */}
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

            {/* Location label */}
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
                  <span className="hero-headline-gold">المستقبل.</span>
                </>
              ) : (
                <>
                  WE SHAPE
                  <span className="hero-headline-gold">THE FUTURE.</span>
                </>
              )}
            </h1>

            {/* Gold line */}
            <div
              className="gold-line a3"
              style={{
                marginTop: "24px",
                marginLeft: ar ? "auto" : 0,
                marginRight: ar ? 0 : "auto",
              }}
            />

            {/* Subtitle */}
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
                { num: "+100", ar: "وحدة سُلِّمت", en: "Units Delivered" },
                { num: "98%", ar: "رضا العملاء", en: "Satisfaction" },
                { num: "8+", ar: "سنوات خبرة", en: "Yrs Experience" },
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
                <span className="scroll-ind-txt">SCROLL</span>
                <div className="scroll-ind-line" />
              </div>
            </div>
          </div>
        </div>

        {/* Gold bottom bar */}
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