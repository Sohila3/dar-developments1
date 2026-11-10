import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.jpeg";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";
import p7 from "../assets/project-7.jpeg";
import p8 from "../assets/project-8.jpeg";
import palm1 from "../assets/palm1.jpeg";
import float1 from "../assets/float1.png";
import float2 from "../assets/float2.png";

function Projects() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);

  // سلايدر المشاريع المنتهية
  const trackRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    canPrev: false,
    canNext: true,
    thumb: 100,
    offset: 0,
  });

  const currentProjects = [
    {
      name: "Dar Damac",
      image: p1,
      location: t("projects", "damacLocation"),
      path: "/projects/damac",
    },
    {
      name: "Dar Landmark",
      image: p2,
      location: t("projects", "landmarkLocation"),
      path: "/projects/landmark",
    },
    {
      name: "Dar Elwrood",
      image: p3,
      location: t("projects", "elwroodLocation"),
      path: "/projects/elwrood",
    },
    {
      name: "Palm 2",
      image: palm1,
      location: ar
        ? "كورنيش بلازا — طنطا"
        : "Corniche Plaza — Tanta",
      path: "/projects/palm2",
    },
  ];

  const completedProjects = [
    { name: "BET ELWATAN - J52", image: p4 },
    { name: "ELNARGAS - F72", image: p5 },
    { name: "PALM TOWERS 1", image: p6 },
    { name: "MOLTAQA HAGRAS", image: p7 },
    { name: "DAR ELBOUSERY", image: p8 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + currentProjects.length) % currentProjects.length
    );
  };

  const visibleProjects = [
    currentProjects[currentIndex],
    currentProjects[(currentIndex + 1) % currentProjects.length],
  ];

  /* ============ COMPLETED SLIDER LOGIC ============ */

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft);

    const thumb =
      el.scrollWidth > 0 ? (el.clientWidth / el.scrollWidth) * 100 : 100;
    const progress = max > 0 ? pos / max : 0;

    setScrollState({
      canPrev: pos > 2,
      canNext: max > 2 && pos < max - 2,
      thumb: Math.min(100, thumb),
      offset: progress * (100 - Math.min(100, thumb)),
    });
  }, []);

  useEffect(() => {
    updateScrollState();

    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, ar]);

  const scrollCompleted = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    const slide = el.querySelector(".dp-completed-slide");
    if (!slide) return;

    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = slide.getBoundingClientRect().width + gap;

    // في العربي (RTL) اتجاه السكرول معكوس
    const rtlFactor = ar ? -1 : 1;

    el.scrollBy({
      left: direction * step * rtlFactor,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="dar-projects"
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Alexandria', sans-serif"
          : "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        .dar-projects {
          --dp-ivory: #F8F6F1;
          --dp-navy: #10243D;
          --dp-gold: #B89552;
          --dp-gold-light: #D7BC83;
          --dp-muted: #777B80;

          width: 100%;
          padding: 115px 24px;
          background: var(--dp-ivory);
          overflow: hidden;
          position: relative;
          color: var(--dp-navy);
        }

        .dar-projects-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* SECTION HEADER */

        .dp-header {
          text-align: center;
          margin-bottom: 52px;
        }

        .dp-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #96743E;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          margin-bottom: 20px;
        }

        .dp-dot {
          width: 5px;
          height: 5px;
          background: var(--dp-gold);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dp-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 500;
          line-height: 1.5;
          margin: 0;
          color: var(--dp-navy);
        }

        .dp-title span {
          color: var(--dp-gold);
        }

        .dp-divider {
          width: 50px;
          height: 1px;
          background: var(--dp-gold);
          margin: 22px auto 0;
        }

        .dp-description {
          color: var(--dp-muted);
          font-size: 13px;
          line-height: 2;
          max-width: 500px;
          margin: 22px auto 0;
        }

        /* CURRENT PROJECTS CAROUSEL */

        .dp-carousel {
          position: relative;
        }

        .dp-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        /* SHARED PROJECT CARD */

        .dp-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: #fff;
          border: 1px solid rgba(16,36,61,.08);
          overflow: hidden;
          position: relative;
          min-width: 0;

          transition:
            transform 1s cubic-bezier(.22,.61,.36,1),
            box-shadow 1s cubic-bezier(.22,.61,.36,1),
            border-color 1s ease;
        }

        .dp-card:hover {
          transform: translateY(-4px);
          border-color: rgba(184,149,82,.4);
          box-shadow: 0 20px 50px rgba(16,36,61,.08);
        }

        .dp-image {
          position: relative;
          height: 360px;
          overflow: hidden;
          background: #E8E5DE;
        }

        .dp-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition:
            transform 1.6s cubic-bezier(.22,.61,.36,1),
            filter 1.4s ease;
        }

        .dp-card:hover .dp-image img {
          transform: scale(1.035);
          filter: brightness(.96);
        }

        .dp-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,24,39,.58),
            transparent 48%
          );
          pointer-events: none;
        }

        .dp-number {
          position: absolute;
          top: 22px;
          inset-inline-start: 22px;
          z-index: 2;
          color: #fff;
          background: rgba(16,36,61,.72);
          border: 1px solid rgba(215,188,131,.35);
          backdrop-filter: blur(10px);
          padding: 9px 13px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .dp-image-label {
          position: absolute;
          bottom: 23px;
          inset-inline-start: 25px;
          z-index: 2;
          color: rgba(255,255,255,.85);
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .dp-card-content {
          padding: 27px 28px 28px;
        }

        .dp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .dp-card-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #96743E;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
        }

        .dp-card-tag i {
          width: 5px;
          height: 5px;
          background: var(--dp-gold);
          border-radius: 50%;
        }

        .dp-card-number {
          font-family: 'DM Sans', sans-serif;
          color: #A0A2A4;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .dp-card-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(23px, 2.5vw, 32px);
          font-weight: 500;
          line-height: 1.3;
          margin: 0;
          color: var(--dp-navy);

          transition: color 1s ease;
        }

        .dp-card:hover .dp-card-name {
          color: var(--dp-gold);
        }

        .dp-card-location {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #7C838A;
          font-size: 11px;
          line-height: 1.8;
          margin-top: 12px;
        }

        .dp-location-icon {
          color: var(--dp-gold);
          font-size: 13px;
        }

        .dp-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          border-top: 1px solid rgba(16,36,61,.10);
          padding-top: 20px;
          margin-top: 23px;
        }

        .dp-card-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--dp-navy);
          font-size: 11px;
          font-weight: 600;
        }

        .dp-card-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(184,149,82,.4);
          color: var(--dp-gold);
          font-size: 17px;

          transition:
            background 1s ease,
            color 1s ease,
            border-color 1s ease,
            transform 1s cubic-bezier(.22,.61,.36,1);
        }

        .dp-card:hover .dp-card-arrow {
          background: var(--dp-navy);
          color: var(--dp-gold-light);
          border-color: var(--dp-navy);
          transform: translateX(${ar ? "-3px" : "3px"});
        }

        /* CAROUSEL CONTROLS */

        .dp-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 34px;
        }

        .dp-controls-info {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #85888B;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .dp-progress {
          width: 110px;
          height: 1px;
          background: rgba(16,36,61,.13);
          position: relative;
          overflow: hidden;
        }

        .dp-progress-fill {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          height: 100%;
          background: var(--dp-gold);
          transition: width .8s ease;
        }

        .dp-arrows {
          display: flex;
          gap: 10px;
        }

        .dp-arrow-btn {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(16,36,61,.16);
          background: transparent;
          color: var(--dp-navy);
          font-size: 20px;
          cursor: pointer;

          transition:
            background .8s ease,
            border-color .8s ease,
            color .8s ease,
            opacity .4s ease;
        }

        .dp-arrow-btn:hover:not(:disabled) {
          background: var(--dp-navy);
          border-color: var(--dp-navy);
          color: var(--dp-gold-light);
        }

        .dp-arrow-btn:disabled {
          opacity: .3;
          cursor: default;
        }

        /* ARCHITECTURAL SHOWCASE */

        .dp-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
          max-width: 1000px;
          margin: 115px auto;
        }

        .dp-showcase-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: #E8E5DE;
          border: 1px solid rgba(184,149,82,.25);
        }

        .dp-showcase-image:first-child {
          margin-top: 45px;
        }

        .dp-showcase-image:last-child {
          margin-bottom: 45px;
        }

        .dp-showcase-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;

          transition:
            transform 1.8s cubic-bezier(.22,.61,.36,1),
            filter 1.4s ease;
        }

        .dp-showcase-image:hover img {
          transform: scale(1.035);
          filter: brightness(.96);
        }

        /* COMPLETED PROJECTS (IMAGE SLIDER) */

        .dp-completed-section {
          margin-top: 0;
        }

        .dp-completed-header {
          margin-bottom: 48px;
        }

        .dp-completed-slider {
          position: relative;
        }

        .dp-completed-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .dp-completed-track::-webkit-scrollbar {
          display: none;
        }

        .dp-completed-slide {
          position: relative;
          flex: 0 0 calc((100% - 48px) / 3);
          aspect-ratio: 4 / 3;
          overflow: hidden;
          scroll-snap-align: start;
          background: #E8E5DE;
          border: 1px solid rgba(184,149,82,.25);
        }

        .dp-completed-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;

          transition:
            transform 1.6s cubic-bezier(.22,.61,.36,1),
            filter 1.4s ease;
        }

        .dp-completed-slide:hover img {
          transform: scale(1.04);
          filter: brightness(.96);
        }

        .dp-completed-slide::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,24,39,.55),
            transparent 45%
          );
          pointer-events: none;
        }

        .dp-completed-name {
          position: absolute;
          bottom: 20px;
          inset-inline-start: 22px;
          inset-inline-end: 22px;
          z-index: 2;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          direction: ltr;
          text-align: ${ar ? "right" : "left"};
          text-shadow: 0 2px 10px rgba(0,0,0,.35);
        }

        .dp-completed-name::before {
          content: "";
          display: block;
          width: 26px;
          height: 1px;
          background: var(--dp-gold-light);
          margin-bottom: 10px;
          ${ar ? "margin-left: auto;" : ""}
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .dp-image {
            height: 300px;
          }

          .dp-card-content {
            padding: 24px 22px;
          }

          .dp-showcase {
            margin: 90px auto;
          }

          .dp-completed-slide {
            flex: 0 0 calc((100% - 24px) / 2);
          }
        }

        @media (max-width: 700px) {
          .dar-projects {
            padding: 80px 20px;
          }

          .dp-header {
            margin-bottom: 38px;
          }

          .dp-title {
            font-size: clamp(29px, 8vw, 40px);
          }

          .dp-description {
            font-size: 12px;
          }

          .dp-cards {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .dp-card:nth-child(2) {
            display: none;
          }

          .dp-image {
            height: 280px;
          }

          .dp-card-content {
            padding: 23px 20px;
          }

          .dp-card-name {
            font-size: 27px;
          }

          .dp-controls {
            margin-top: 25px;
          }

          .dp-progress {
            width: 75px;
          }

          .dp-arrow-btn {
            width: 43px;
            height: 43px;
          }

          .dp-showcase {
            grid-template-columns: 1fr;
            gap: 20px;
            margin: 80px auto;
          }

          .dp-showcase-image:first-child,
          .dp-showcase-image:last-child {
            margin: 0;
          }

          .dp-showcase-image:last-child {
            max-width: 85%;
            margin-inline-start: auto;
          }

          .dp-completed-track {
            gap: 14px;
          }

          .dp-completed-slide {
            flex: 0 0 100%;
          }

          .dp-completed-name {
            font-size: 11px;
            bottom: 16px;
          }
        }

        @media (max-width: 380px) {
          .dar-projects {
            padding-inline: 15px;
          }

          .dp-image {
            height: 240px;
          }

          .dp-card-name {
            font-size: 24px;
          }

          .dp-controls-info {
            gap: 8px;
          }

          .dp-progress {
            width: 55px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dar-projects *,
          .dar-projects *::before,
          .dar-projects *::after {
            animation: none !important;
            transition: none !important;
          }

          .dp-completed-track {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <div className="dar-projects-container">

        {/* CURRENT PROJECTS HEADER */}

        <div className="dp-header">
          <div className="dp-eyebrow">
            <span className="dp-dot" />
            {ar ? "مشاريع دار" : "DAR DEVELOPMENTS"}
            <span className="dp-dot" />
          </div>

          <h2 className="dp-title">
            {t("projects", "currentTitle")}
          </h2>

          <div className="dp-divider" />

          <p className="dp-description">
            {ar
              ? "اكتشف مشروعاتنا العقارية التي تجمع بين التصميم المميز والقيمة الاستثمارية."
              : "Discover our developments, where distinctive architecture meets lasting investment value."}
          </p>
        </div>

        {/* CURRENT PROJECTS CAROUSEL */}

        <div className="dp-carousel">
          <div className="dp-cards">
            {visibleProjects.map((project, i) => (
              <Link
                to={project.path}
                className="dp-card"
                key={`${project.name}-${currentIndex}`}
              >
                <div className="dp-image">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                  />

                  <span className="dp-number">
                    0{((currentIndex + i) % 4) + 1} / 04
                  </span>

                  <span className="dp-image-label">
                    DAR DEVELOPMENTS — TANTA
                  </span>
                </div>

                <div className="dp-card-content">
                  <div className="dp-card-top">
                    <span className="dp-card-tag">
                      <i />
                      {ar ? "مشروع عقاري" : "RESIDENTIAL PROJECT"}
                    </span>

                    <span className="dp-card-number">
                      0{((currentIndex + i) % 4) + 1}
                    </span>
                  </div>

                  <h3 className="dp-card-name">
                    {project.name}
                  </h3>

                  <div className="dp-card-location">
                    <span className="dp-location-icon">⌖</span>
                    {project.location}
                  </div>

                  <div className="dp-card-footer">
                    <span className="dp-card-link">
                      {t("projects", "viewBtn")}
                    </span>

                    <span className="dp-card-arrow">
                      {ar ? "←" : "→"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CAROUSEL NAVIGATION */}

          <div className="dp-controls">
            <div className="dp-controls-info">
              <span>0{currentIndex + 1}</span>

              <div className="dp-progress">
                <div
                  className="dp-progress-fill"
                  style={{
                    width: `${((currentIndex + 1) / currentProjects.length) * 100}%`,
                  }}
                />
              </div>

              <span>0{currentProjects.length}</span>
            </div>

            <div className="dp-arrows">
              <button
                type="button"
                className="dp-arrow-btn"
                onClick={prevSlide}
                aria-label={ar ? "المشروع السابق" : "Previous project"}
              >
                {ar ? "→" : "←"}
              </button>

              <button
                type="button"
                className="dp-arrow-btn"
                onClick={nextSlide}
                aria-label={ar ? "المشروع التالي" : "Next project"}
              >
                {ar ? "←" : "→"}
              </button>
            </div>
          </div>
        </div>

        {/* ARCHITECTURAL SHOWCASE */}

        <div className="dp-showcase">
          <div className="dp-showcase-image">
            <img
              src={float1}
              alt="DAR Architecture"
              loading="lazy"
            />
          </div>

          <div className="dp-showcase-image">
            <img
              src={float2}
              alt="DAR Developments"
              loading="lazy"
            />
          </div>
        </div>

        {/* COMPLETED PROJECTS HEADER */}

        <div className="dp-header dp-completed-header">
          <div className="dp-eyebrow">
            <span className="dp-dot" />
            {ar ? "إنجازاتنا" : "OUR ACHIEVEMENTS"}
            <span className="dp-dot" />
          </div>

          <h2 className="dp-title">
            {t("projects", "completedTitle")}
          </h2>

          <div className="dp-divider" />

          <p className="dp-description">
            {ar
              ? "مشروعات نفذناها وتركنا فيها بصمة تعكس جودة أعمالنا."
              : "A portfolio of completed developments reflecting our commitment to quality."}
          </p>
        </div>

        {/* COMPLETED PROJECTS (IMAGE SLIDER) */}

        <div className="dp-completed-section">
          <div className="dp-completed-slider">
            <div className="dp-completed-track" ref={trackRef}>
              {completedProjects.map((project) => (
                <div className="dp-completed-slide" key={project.name}>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    draggable="false"
                  />

                  <span className="dp-completed-name">
                    {project.name}
                  </span>
                </div>
              ))}
            </div>

            {/* SLIDER NAVIGATION */}

            <div className="dp-controls">
              <div className="dp-controls-info">
                <div className="dp-progress">
                  <div
                    className="dp-progress-fill"
                    style={{
                      width: `${scrollState.thumb}%`,
                      insetInlineStart: `${scrollState.offset}%`,
                    }}
                  />
                </div>
              </div>

              <div className="dp-arrows">
                <button
                  type="button"
                  className="dp-arrow-btn"
                  onClick={() => scrollCompleted(-1)}
                  disabled={!scrollState.canPrev}
                  aria-label={ar ? "السابق" : "Previous"}
                >
                  {ar ? "→" : "←"}
                </button>

                <button
                  type="button"
                  className="dp-arrow-btn"
                  onClick={() => scrollCompleted(1)}
                  disabled={!scrollState.canNext}
                  aria-label={ar ? "التالي" : "Next"}
                >
                  {ar ? "←" : "→"}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;