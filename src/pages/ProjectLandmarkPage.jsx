
import Navbar from "../components/Navbar";

import land1 from "../assets/land1.jpeg";
import land2 from "../assets/land2.jpeg";
import land3 from "../assets/land3.jpeg";
import land4 from "../assets/land4.jpeg";
import land5 from "../assets/land5.jpeg";
import land6 from "../assets/land6.jpeg";
import land7 from "../assets/land7.jpeg";
import land8 from "../assets/land8.jpeg";
import videoFile from "../assets/Landmark.mp4";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function ProjectLandmarkPage() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";
  const dir = ar ? "rtl" : "ltr";
  const textAlign = ar ? "right" : "left";

  const galleryImages = [
    land1, land2, land3, land4,
    land5, land6, land7, land8,
  ];

  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Landmark",
  });

  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  const videoRef = useRef(null);
  const galleryRef = useRef(null);

  // ================= GALLERY AUTOPLAY =================

  useEffect(() => {
    if (isGalleryHovered) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isGalleryHovered, galleryImages.length]);

  const changeImage = (index) => {
    setActiveImage(index);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // ================= FORM =================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = () => {
    if (!formData.name.trim()) {
      setError(
        ar
          ? "من فضلك اكتب الاسم أولاً"
          : "Please enter your name"
      );
      return;
    }

    setError("");

    const message = `${t("landmark", "whatsappMsg")} ${
      formData.name
    } ${t("landmark", "whatsappMsg2")} ${formData.project}`;

    window.open(
      `https://wa.me/201039207908?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ================= VIDEO AUTOPLAY =================

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.muted = true;
    vid.playsInline = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(vid);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="landmark-page"
      dir={dir}
      style={{
        background: "#F8F6F1",
        fontFamily: ar
          ? "'Alexandria', sans-serif"
          : "'DM Sans', sans-serif",
      }}
    >
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        .landmark-page {
          --navy: #10243D;
          --gold: #B89552;
          --light-gold: #D7BC83;
          --ivory: #F8F6F1;
          --paper: #F2EEE6;
          --muted: #777B80;

          color: var(--navy);
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .landmark-page *,
        .landmark-page *::before,
        .landmark-page *::after {
          box-sizing: border-box;
        }

        .landmark-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          background:
            radial-gradient(circle at 90% 5%,rgba(184,149,82,.13),transparent 32%),
            radial-gradient(circle at 5% 80%,rgba(16,36,61,.055),transparent 35%),
            linear-gradient(135deg,#F8F6F1,#F4F0E8);
        }

        .landmark-page::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: .025;
          background-image:
            linear-gradient(var(--navy) 1px,transparent 1px),
            linear-gradient(90deg,var(--navy) 1px,transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes landmarkFade {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes landmarkZoom {
          from { transform: scale(1.04); }
          to { transform: scale(1); }
        }

        @keyframes landmarkPulse {
          0%,100% { opacity: 1; }
          50% { opacity: .35; }
        }

        /* ================= HERO ================= */

        .project-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 20px 70px;
          gap: 35px;
        }

        .project-gallery {
          width: 100%;
          min-width: 0;
          position: relative;
          z-index: 2;
          animation: landmarkFade 1s ease both;
        }

        .project-hero-image {
          width: 100%;
          height: 300px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          background: rgba(16,36,61,.035);
          border: 1px solid rgba(184,149,82,.2);
          box-shadow:
            0 25px 65px rgba(16,36,61,.13),
            0 4px 15px rgba(184,149,82,.08);
          isolation: isolate;
        }

        .project-gallery-main {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          animation: landmarkZoom .9s ease both;
          transition: transform 1.2s ease;
        }

        .project-hero-image:hover .project-gallery-main {
          transform: scale(1.025);
        }

        .project-gallery-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(16,36,61,.02) 45%,
            rgba(16,36,61,.3) 100%
          );
          transition: opacity .6s ease;
        }

        .project-gallery-label {
          position: absolute;
          bottom: 20px;
          ${ar ? "right: 22px;" : "left: 22px;"}
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 12px;
          letter-spacing: 1.5px;
          z-index: 3;
          text-shadow: 0 2px 8px rgba(0,0,0,.3);
        }

        .project-gallery-label::before {
          content: "";
          width: 26px;
          height: 1px;
          background: var(--light-gold);
          transition: width .5s ease;
        }

        .project-hero-image:hover .project-gallery-label::before {
          width: 42px;
        }

        .project-gallery-count {
          position: absolute;
          top: 20px;
          ${ar ? "left: 20px;" : "right: 20px;"}
          padding: 9px 15px;
          border-radius: 30px;
          background: rgba(16,36,61,.55);
          border: 1px solid rgba(215,188,131,.4);
          backdrop-filter: blur(12px);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          z-index: 3;
          transition: all .4s ease;
        }

        .project-hero-image:hover .project-gallery-count {
          background: rgba(184,149,82,.9);
          color: var(--navy);
        }

        .project-gallery-arrows {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 15px;
          z-index: 4;
          pointer-events: none;
        }

        .project-gallery-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
          border: 1px solid rgba(255,255,255,.55);
          color: white;
          backdrop-filter: blur(12px);
          display: grid;
          place-items: center;
          cursor: pointer;
          pointer-events: auto;
          transition: .3s ease;
        }

        .project-gallery-arrow:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--navy);
        }

        /* THUMBNAILS */

        .project-gallery-thumbnails {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          gap: 9px;
          margin-top: 15px;
          width: 100%;
        }

        .project-gallery-thumb {
          height: 58px;
          min-width: 0;
          padding: 0;
          border-radius: 9px;
          overflow: hidden;
          position: relative;
          background: var(--navy);
          border: 1px solid rgba(184,149,82,.12);
          opacity: .6;
          cursor: pointer;
          transition: opacity .35s ease,transform .35s ease,border-color .35s ease;
        }

        .project-gallery-thumb img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .project-gallery-thumb:hover {
          opacity: 1;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(16,36,61,.12);
        }

        .project-gallery-thumb:hover img {
          transform: scale(1.1);
        }

        .project-gallery-thumb.active {
          opacity: 1;
          border: 1.5px solid var(--gold);
          box-shadow: 0 5px 20px rgba(184,149,82,.2);
        }

        /* HERO TEXT */

        .project-hero-text {
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 2;
          animation: landmarkFade 1s .15s ease both;
        }

        .project-hero-title {
          font-size: clamp(30px,7vw,46px);
          font-weight: 700;
          line-height: 1.5;
          color: var(--navy);
          overflow-wrap: anywhere;
          margin: 0;
        }

        .project-hero-description {
          font-size: 15px;
          font-weight: 400;
          line-height: 2.3;
          color: rgba(16,36,61,.68);
          overflow-wrap: anywhere;
          margin: 0;
        }

        .landmark-heading-line {
          height: 2px;
          width: 65px;
          border-radius: 5px;
          background: linear-gradient(90deg,var(--gold),var(--light-gold));
          margin-top: 18px;
          margin-bottom: 25px;
        }

        .landmark-gold-text {
          color: var(--gold);
          text-shadow: 0 0 18px rgba(184,149,82,.15);
        }

        @media (min-width: 768px) {
          .project-hero {
            flex-direction: row;
            min-height: 100vh;
            padding: 150px 6vw 80px;
            gap: 5vw;
          }

          .project-hero.hero-en {
            flex-direction: row-reverse;
          }

          .project-gallery {
            width: 50%;
            flex-shrink: 0;
          }

          .project-hero-image {
            width: 100%;
            height: 80vh;
            min-height: 450px;
            max-height: 850px;
          }

          .project-gallery-thumbnails {
            grid-template-columns: repeat(8,minmax(0,1fr));
            gap: 9px;
            margin-top: 16px;
          }

          .project-gallery-thumb {
            height: 65px;
          }

          .project-hero-text {
            width: 50%;
          }

          .project-hero-title {
            font-size: clamp(40px,4.2vw,70px);
            line-height: 1.35;
          }

          .project-hero-description {
            font-size: 16px;
            line-height: 2.5;
          }
        }

        @media (max-width: 480px) {
          .project-hero {
            padding: 100px 16px 55px;
            gap: 25px;
          }

          .project-hero-image {
            height: 260px;
            border-radius: 13px;
          }

          .project-gallery-thumbnails {
            gap: 6px;
            margin-top: 10px;
          }

          .project-gallery-thumb {
            height: 43px;
            border-radius: 6px;
          }

          .project-gallery-count {
            top: 12px;
            ${ar ? "left: 12px;" : "right: 12px;"}
            padding: 7px 11px;
            font-size: 10px;
          }

          .project-gallery-label {
            bottom: 13px;
            ${ar ? "right: 13px;" : "left: 13px;"}
            font-size: 10px;
          }

          .project-hero-title {
            font-size: 28px;
          }

          .project-hero-description {
            font-size: 14px;
            line-height: 2.1;
          }
        }

        /* VIDEO */

        .landmark-video-section {
          position: relative;
          padding: 55px 0 90px;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .landmark-video-glow {
          position: absolute;
          width: 70%;
          height: 280px;
          background: rgba(184,149,82,.14);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none;
        }

        .landmark-video-wrap {
          width: 94%;
          max-width: 1100px;
          position: relative;
          z-index: 1;
          padding: 8px;
          border-radius: 22px;
          background: rgba(255,255,255,.55);
          border: 1px solid rgba(184,149,82,.22);
          box-shadow: 0 25px 70px rgba(16,36,61,.12);
          transition: transform .6s ease,box-shadow .6s ease;
        }

        .landmark-video-wrap:hover {
          transform: translateY(-5px);
          box-shadow: 0 35px 80px rgba(16,36,61,.16);
        }

        .landmark-video {
          width: 100%;
          display: block;
          border-radius: 16px;
          background: var(--navy);
        }

        @media (min-width: 768px) {
          .landmark-video-section {
            padding: 80px 0 130px;
          }

          .landmark-video-wrap {
            width: 75%;
          }
        }

        /* INFO + FORM */

        .landmark-info-section {
          padding: 55px 16px 80px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          position: relative;
        }

        .landmark-card {
          background: rgba(255,255,255,.78);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(184,149,82,.16);
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow:
            0 15px 45px rgba(16,36,61,.055),
            0 2px 8px rgba(184,149,82,.035);
          position: relative;
          overflow: hidden;
          transition: transform .5s ease,box-shadow .5s ease;
        }

        .landmark-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(16,36,61,.09);
        }

        .landmark-card-title {
          font-size: 23px;
          font-weight: 700;
          color: var(--navy);
          margin: 0 0 8px;
          line-height: 1.6;
        }

        .landmark-card-line {
          width: 42px;
          height: 2px;
          border-radius: 3px;
          background: linear-gradient(90deg,var(--gold),var(--light-gold));
          margin-bottom: 25px;
        }

        .landmark-detail-text {
          font-size: 14px;
          line-height: 2.2;
          color: rgba(16,36,61,.7);
          margin: 0 0 16px;
        }

        .landmark-map-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          margin: 0 0 18px;
          transition: color .3s ease,gap .3s ease;
        }

        .landmark-map-link:hover {
          color: var(--navy);
          gap: 12px;
        }

        .landmark-form-card {
          background: rgba(255,255,255,.82);
        }

        .landmark-form-title {
          text-align: center;
        }

        .landmark-form-line {
          width: 42px;
          height: 2px;
          border-radius: 3px;
          background: linear-gradient(90deg,var(--gold),var(--light-gold));
          margin: 0 auto 28px;
        }

        .custom-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(184,149,82,.28);
          border-radius: 10px;
          padding: 15px 16px;
          font-size: 14px;
          color: var(--navy);
          outline: none;
          transition: border-color .3s ease,box-shadow .3s ease;
          font-family: inherit;
          margin-bottom: 12px;
          direction: ${dir};
          display: block;
          background: rgba(248,246,241,.7);
        }

        .custom-input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.1);
          background: white;
        }

        .custom-input::placeholder {
          color: rgba(16,36,61,.38);
        }

        .custom-select-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 18px;
        }

        .custom-select {
          width: 100%;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
          background: rgba(248,246,241,.7);
          border: 1px solid rgba(184,149,82,.28);
          border-radius: 10px;
          padding: 15px 44px 15px 16px;
          font-size: 14px;
          color: var(--navy);
          cursor: pointer;
          outline: none;
          transition: border-color .3s ease,box-shadow .3s ease;
          font-family: inherit;
          direction: ${dir};
        }

        .custom-select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.1);
          background: white;
        }

        .custom-select-arrow {
          position: absolute;
          top: 50%;
          ${ar ? "left: 16px;" : "right: 16px;"}
          transform: translateY(-50%);
          pointer-events: none;
          color: var(--gold);
          font-size: 11px;
        }

        .landmark-error {
          color: #b42318;
          font-size: 12px;
          margin: 0 0 13px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .wa-btn {
          width: 100%;
          box-sizing: border-box;
          background: var(--navy);
          color: white;
          border: 1px solid var(--navy);
          border-radius: 10px;
          padding: 15px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all .4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .wa-btn:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--navy);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(184,149,82,.22);
        }

        /* TRUST */

        .landmark-trust-section {
          padding: 20px 16px 80px;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
          border-radius: 22px;
          box-shadow: 0 30px 80px rgba(16,36,61,.13);
          border: 1px solid rgba(184,149,82,.18);
          max-width: 1200px;
          margin: auto;
        }

        .trust-left {
          background:
            radial-gradient(circle at 100% 0%,rgba(184,149,82,.12),transparent 35%),
            radial-gradient(circle at 0% 100%,rgba(215,188,131,.06),transparent 35%),
            #10243D;
          padding: 38px 25px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .trust-right {
          background: rgba(255,255,255,.92);
          padding: 35px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .trust-stat {
          display: flex;
          flex-direction: column;
          padding: 22px 0;
          border-bottom: 1px solid rgba(184,149,82,.16);
          animation: landmarkFade .7s ease both;
        }

        .trust-stat:last-child {
          border-bottom: none;
        }

        .trust-stat-num {
          font-family: 'DM Sans',sans-serif;
          font-size: clamp(30px,4vw,44px);
          font-weight: 700;
          color: var(--gold);
          line-height: 1.2;
          margin-bottom: 7px;
        }

        .trust-stat-lbl {
          font-size: 13px;
          color: rgba(16,36,61,.55);
          line-height: 1.8;
        }

        .trust-cta-btn {
          background: var(--gold);
          color: var(--navy);
          border: 1px solid var(--gold);
          border-radius: 9px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all .4s ease;
          text-decoration: none;
          display: inline-block;
          margin-top: 25px;
          width: fit-content;
        }

        .trust-cta-btn:hover {
          background: var(--light-gold);
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(184,149,82,.2);
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--navy);
          color: white;
          padding: 14px 38px;
          border-radius: 9px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all .4s ease;
          border: 1px solid var(--navy);
        }

        .back-btn:hover {
          background: var(--gold);
          color: var(--navy);
          border-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(184,149,82,.2);
        }

        .landmark-social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--light-gold);
          text-decoration: none;
          font-size: 13px;
          transition: color .3s ease,transform .3s ease;
        }

        .landmark-social-link:hover {
          color: white;
          transform: translateY(-3px);
        }

        @media (min-width: 768px) {
          .landmark-info-section {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 35px;
            padding: 80px 7vw 120px;
          }

          .landmark-card {
            padding: 45px 38px;
          }

          .landmark-card-title {
            font-size: 27px;
          }

          .landmark-detail-text {
            font-size: 15px;
          }

          .trust-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }

          .trust-left,
          .trust-right {
            padding: 60px 50px;
          }

          .landmark-trust-section {
            padding: 30px 7vw 110px;
          }
        }

        @media (max-width: 380px) {
          .landmark-card {
            padding: 24px 18px;
          }

          .trust-left,
          .trust-right {
            padding: 30px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .landmark-page *,
          .landmark-page *::before,
          .landmark-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* ================= HERO ================= */}

      <section className={`project-hero ${ar ? "hero-ar" : "hero-en"}`}>
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            background: "rgba(184,149,82,.09)",
            filter: "blur(140px)",
            borderRadius: "50%",
            top: -180,
            right: -150,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            background: "rgba(16,36,61,.045)",
            filter: "blur(140px)",
            borderRadius: "50%",
            bottom: -180,
            left: -150,
            pointerEvents: "none",
          }}
        />

        {/* GALLERY */}

        <div
          className="project-gallery"
          ref={galleryRef}
          onMouseEnter={() => setIsGalleryHovered(true)}
          onMouseLeave={() => setIsGalleryHovered(false)}
        >
          <div className="project-hero-image">
            <img
              key={activeImage}
              src={galleryImages[activeImage]}
              alt={`Dar Landmark ${activeImage + 1}`}
              className="project-gallery-main"
            />

            <div className="project-gallery-overlay" />

            <div className="project-gallery-count">
              {String(activeImage + 1).padStart(2, "0")} / 08
            </div>

            <div className="project-gallery-label">
              {ar ? t("landmark", "title2") : "DAR LANDMARK"}
            </div>

            <div className="project-gallery-arrows">
              <button
                type="button"
                className="project-gallery-arrow"
                onClick={prevImage}
                aria-label="Previous image"
              >
                {ar ? "→" : "←"}
              </button>

              <button
                type="button"
                className="project-gallery-arrow"
                onClick={nextImage}
                aria-label="Next image"
              >
                {ar ? "←" : "→"}
              </button>
            </div>
          </div>

          {/* THUMBNAILS */}

          <div className="project-gallery-thumbnails">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`project-gallery-thumb ${
                  activeImage === index ? "active" : ""
                }`}
                onClick={() => changeImage(index)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={activeImage === index}
              >
                <img
                  src={image}
                  alt={`Landmark thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* HERO TEXT */}

        <div
          className="project-hero-text"
          style={{ textAlign }}
          dir={dir}
        >
          <h1 className="project-hero-title">
            <span className="landmark-gold-text">
              {t("landmark", "title1")}
            </span>{" "}
            {t("landmark", "title2")}
          </h1>

          <div
            className="landmark-heading-line"
            style={{
              margin: ar
                ? "18px 0 25px auto"
                : "18px auto 25px 0",
            }}
          />

          <p className="project-hero-description">
            {t("landmark", "desc")}
          </p>
        </div>
      </section>

      {/* ================= VIDEO ================= */}

      <section className="landmark-video-section">
        <div className="landmark-video-glow" />

        <div className="landmark-video-wrap">
          <video
            ref={videoRef}
            src={videoFile}
            controls
            muted
            playsInline
            preload="metadata"
            className="landmark-video"
          />
        </div>
      </section>

      {/* ================= DETAILS + FORM ================= */}

      <section
        className="landmark-info-section"
        style={{ direction: dir }}
      >
        {/* DETAILS CARD */}

        <div
          className="landmark-card"
          style={{
            textAlign,
            order: ar ? 1 : 2,
          }}
        >
          <h2 className="landmark-card-title">
            {t("landmark", "detailsTitle")}
          </h2>

          <div
            className="landmark-card-line"
            style={{
              marginRight: ar ? 0 : "auto",
              marginLeft: ar ? "auto" : 0,
            }}
          />

          <p className="landmark-detail-text">
            {t("landmark", "location")}
          </p>

          <a
            href="https://www.google.com/maps?q=30.809358596801758,31.007654190063477&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="landmark-map-link"
          >
            <span>{ar ? "←" : "→"}</span>
            {ar ? "عرض الموقع على الخريطة" : "View on Google Maps"}
          </a>

          <p className="landmark-detail-text">
            {t("landmark", "towers")}
          </p>

          <p
            className="landmark-detail-text"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("landmark", "spaces")}
          </p>

          <p className="landmark-detail-text">
            {t("landmark", "downPayment")}
          </p>

          <p className="landmark-detail-text" style={{ marginBottom: 0 }}>
            {t("landmark", "installment")}
          </p>
        </div>

        {/* FORM CARD */}

        <div
          className="landmark-card landmark-form-card"
          style={{
            direction: dir,
            order: ar ? 2 : 1,
          }}
        >
          <h2 className="landmark-card-title landmark-form-title">
            {t("landmark", "formTitle")}
          </h2>

          <div className="landmark-form-line" />

          <input
            name="name"
            placeholder={t("landmark", "namePlaceholder")}
            className="custom-input"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
              if (error) setError("");
            }}
          />

          {error && (
            <div className="landmark-error">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <div className="custom-select-wrapper">
            <select
              name="project"
              className="custom-select"
              value={formData.project}
              onChange={handleChange}
            >
              <option value="Dar Landmark">Dar Landmark</option>
              <option value="Dar Damac">Dar Damac</option>
              <option value="Dar Elwrood">Dar Elwrood</option>
            </select>

            <span className="custom-select-arrow">▼</span>
          </div>

          <button className="wa-btn" onClick={openWhatsApp}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>

            {t("landmark", "whatsappBtn")}
          </button>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}

      <section
        className="landmark-trust-section"
        style={{ direction: dir }}
      >
        <div className="trust-grid">

          {/* LEFT SIDE */}

          <div
            className="trust-left"
            style={{ order: ar ? 1 : 2 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                marginBottom: 20,
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#D7BC83",
                  display: "inline-block",
                  animation: "landmarkPulse 2s infinite",
                }}
              />

              <span
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 11,
                  color: "#D7BC83",
                  letterSpacing: 1.5,
                }}
              >
                {ar ? "ثقة ممتدة" : "TRUSTED SINCE"}
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(26px,3.5vw,42px)",
                fontWeight: 700,
                color: "#F8F6F1",
                lineHeight: 1.6,
                marginBottom: 12,
                textAlign,
              }}
            >
              {ar ? "خبرة ممتدة لأكثر من" : "Over"}{" "}
              <span style={{ color: "#D7BC83" }}>
                {ar ? "8 أعوام" : "8 Years"}
              </span>
              {ar ? "" : " of Excellence"}
            </h2>

            <div
              style={{
                width: 42,
                height: 2,
                background: "linear-gradient(90deg,#B89552,#D7BC83)",
                borderRadius: 2,
                marginBottom: 22,
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            />

            <p
              style={{
                color: "rgba(248,246,241,.65)",
                fontSize: 14,
                lineHeight: 2.3,
                maxWidth: 430,
                textAlign,
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            >
              {ar
                ? "نحن لا نبني وحدات سكنية فحسب — نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
                : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way."}
            </p>

            {/* COMPANY LOCATION */}

            <div
              style={{
                marginTop: 25,
                color: "rgba(248,246,241,.75)",
                fontSize: 13,
                lineHeight: 2,
                textAlign,
                maxWidth: 430,
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 5 }}>
                {ar ? "مقر الشركة:" : "Company Location:"}
              </div>

              <div>
                {t("contact", "officeAddr")}
              </div>

              <a
                href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#D7BC83",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: 8,
                  fontWeight: 600,
                }}
              >
                {t("contact", "mapLink")}
              </a>
            </div>

            {/* SOCIAL */}

            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: ar ? "flex-end" : "flex-start",
                color: "rgba(248,246,241,.75)",
                fontSize: 13,
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 14 }}>
                {t("contact", "socialLabel")}:
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 22,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://www.facebook.com/share/1XgDRDMitV/"
                  target="_blank"
                  rel="noreferrer"
                  className="landmark-social-link"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                  target="_blank"
                  rel="noreferrer"
                  className="landmark-social-link"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="trust-right"
            style={{
              order: ar ? 2 : 1,
              textAlign,
            }}
          >
            {[
              {
                num: "8+",
                key: "trustYears",
                ar: "سنوات خبرة في السوق العقاري",
                en: "Years in Real Estate",
              },
              {
                num: "+150",
                ar: "وحدة سكنية تم تسليمها بنجاح",
                en: "Units Successfully Delivered",
              },
              {
                num: "3",
                ar: "مشاريع نشطة حالياً في طنطا",
                en: "Active Projects in Tanta",
              },
              {
                num: "98%",
                ar: "نسبة رضا العملاء عن خدماتنا",
                en: "Client Satisfaction Rate",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="trust-stat"
                style={{
                  textAlign,
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                <span className="trust-stat-num">{s.num}</span>

                <span className="trust-stat-lbl">
                  {ar ? s.ar : s.en}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BACK TO PROJECTS ================= */}

      <div
        style={{
          textAlign: "center",
          padding: "10px 20px 70px",
        }}
      >
        <a href="/#projects" className="back-btn">
          {t("landmark", "backBtn")}
        </a>
      </div>

    </div>
  );
}

export default ProjectLandmarkPage;
