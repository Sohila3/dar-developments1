
import Navbar from "../components/Navbar";
import damac1 from "../assets/damac1.jpeg";
import damac2 from "../assets/damac2.jpeg";
import damac3 from "../assets/damac3.jpeg";
import videoFile from "../assets/Damac.mp4";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function ProjectDamacPage() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Damac",
  });

  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [imageKey, setImageKey] = useState(0);

  const videoRef = useRef(null);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const textAlign = lang === "ar" ? "right" : "left";
  const ar = lang === "ar";

  const galleryImages = [
    { src: damac1, alt: "Dar Damac 1" },
    { src: damac2, alt: "Dar Damac 2" },
    { src: damac3, alt: "Dar Damac 3" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "name") setError("");
  };

  const changeImage = (index) => {
    setActiveImage(index);
    setImageKey((prev) => prev + 1);
  };

  // Automatic Gallery Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => {
        const next = (prev + 1) % galleryImages.length;
        setImageKey((key) => key + 1);
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

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

    const message = `
Name: ${formData.name}
Project: ${formData.project}
    `;

    const phone = "YOUR_PHONE_NUMBER";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="damac-page" style={{ direction: dir }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .damac-page {
          --damac-bg: #F8F6F1;
          --damac-navy: #10243D;
          --damac-gold: #B89552;
          --damac-light-gold: #D7BC83;
          --damac-text: #243449;
          background: var(--damac-bg);
          color: var(--damac-navy);
          font-family: ${ar ? "'Alexandria'" : "'DM Sans'"}, sans-serif;
          overflow: hidden;
        }

        .damac-page * {
          box-sizing: border-box;
        }

        .damac-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .damac-page button,
        .damac-page input,
        .damac-page select {
          font: inherit;
        }

        .damac-page .gold-text {
          background: linear-gradient(135deg, #9B773D, #D7BC83, #B89552);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes damacFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes damacPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .35; }
        }

        @keyframes damacGalleryReveal {
          from {
            opacity: 0;
            transform: scale(1.045);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        .damac-animate {
          animation: damacFadeUp .8s ease both;
        }

        /* HERO */

        .damac-hero {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 38px;
          padding: 125px 6% 80px;
          align-items: center;
          isolation: isolate;
        }

        .damac-hero::before {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(184,149,82,.12), transparent 70%);
          top: -150px;
          right: -180px;
          z-index: -1;
          pointer-events: none;
        }

        .damac-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(16,36,61,.06), transparent 70%);
          bottom: -120px;
          left: -150px;
          z-index: -1;
          pointer-events: none;
        }

        .damac-hero-image {
          position: relative;
          width: 100%;
          height: 310px;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 30px 70px rgba(16,36,61,.13), 0 0 0 1px rgba(184,149,82,.18);
          isolation: isolate;
          background: #e9e2d6;
        }

        .damac-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(.2,.8,.2,1);
        }

        .damac-hero-image:hover img {
          transform: scale(1.07);
        }

        .damac-hero-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(16,36,61,.25));
          pointer-events: none;
        }

        .damac-image-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 12px;
          z-index: 2;
          pointer-events: none;
          transition: inset .4s ease;
        }

        .damac-hero-image:hover .damac-image-frame {
          inset: 18px;
        }

        .damac-hero-content {
          position: relative;
          animation: damacFadeUp .9s ease both;
        }

        .damac-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--damac-gold);
          margin-bottom: 18px;
        }

        .damac-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--damac-gold);
        }

        .damac-hero-title {
          font-size: clamp(34px, 8vw, 54px);
          line-height: 1.45;
          font-weight: 800;
          letter-spacing: -.8px;
          margin: 0;
          color: var(--damac-navy);
          overflow-wrap: anywhere;
        }

        .damac-hero-title span {
          display: inline-block;
        }

        .damac-title-line {
          width: 70px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--damac-gold), var(--damac-light-gold));
          margin-top: 24px;
          margin-bottom: 24px;
        }

        .damac-hero-description {
          font-size: 15px;
          line-height: 2.3;
          color: rgba(16,36,61,.72);
          text-align: justify;
          max-width: 600px;
          margin: 0;
        }

        .damac-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border: 1px solid rgba(184,149,82,.25);
          background: rgba(255,255,255,.55);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          margin-top: 28px;
          color: var(--damac-navy);
          font-size: 12px;
          font-weight: 600;
          transition: all .3s ease;
        }

        .damac-hero-badge:hover {
          background: white;
          box-shadow: 0 8px 25px rgba(184,149,82,.12);
          transform: translateY(-3px);
        }

        .damac-badge-dot {
          width: 7px;
          height: 7px;
          background: var(--damac-gold);
          border-radius: 50%;
          animation: damacPulse 2s infinite;
        }

        /* SECTION HEADERS */

        .damac-section-header {
          text-align: center;
          margin-bottom: 45px;
        }

        .damac-section-kicker {
          font-size: 11px;
          color: var(--damac-gold);
          letter-spacing: 3px;
          font-weight: 700;
          text-transform: uppercase;
          display: block;
          margin-bottom: 14px;
        }

        .damac-section-title {
          font-size: clamp(25px, 4vw, 40px);
          font-weight: 800;
          color: var(--damac-navy);
          line-height: 1.5;
          margin: 0;
        }

        .damac-section-line {
          width: 55px;
          height: 3px;
          background: linear-gradient(90deg, var(--damac-gold), var(--damac-light-gold));
          margin: 20px auto 0;
          border-radius: 10px;
        }

        /* GALLERY - LARGE IMAGE + THUMBNAILS */

        .damac-gallery-section {
          padding: 60px 6% 100px;
          position: relative;
        }

        .damac-gallery-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 35px;
          max-width: 1350px;
          margin: auto;
          align-items: center;
        }

        .damac-gallery-main {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          border-radius: 20px;
          background: #e9e2d6;
          box-shadow: 0 25px 65px rgba(16,36,61,.14), 0 0 0 1px rgba(184,149,82,.2);
          isolation: isolate;
        }

        .damac-gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: damacGalleryReveal .85s cubic-bezier(.2,.8,.2,1) both;
        }

        .damac-gallery-main::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(16,36,61,.35));
          pointer-events: none;
        }

        .damac-gallery-main-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 13px;
          z-index: 2;
          pointer-events: none;
          transition: inset .4s ease;
        }

        .damac-gallery-main:hover .damac-gallery-main-frame {
          inset: 18px;
        }

        .damac-gallery-counter {
          position: absolute;
          z-index: 3;
          bottom: 25px;
          inset-inline-start: 30px;
          color: white;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .damac-gallery-counter::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--damac-light-gold);
        }

        .damac-gallery-thumbnails {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 17px;
        }

        .damac-gallery-thumb {
          position: relative;
          height: 85px;
          border-radius: 10px;
          overflow: hidden;
          padding: 0;
          border: 2px solid transparent;
          background: #e9e2d6;
          cursor: pointer;
          opacity: .65;
          transition: all .35s ease;
        }

        .damac-gallery-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }

        .damac-gallery-thumb:hover {
          opacity: 1;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(16,36,61,.15);
        }

        .damac-gallery-thumb:hover img {
          transform: scale(1.08);
        }

        .damac-gallery-thumb.active {
          opacity: 1;
          border-color: var(--damac-gold);
          box-shadow: 0 8px 25px rgba(184,149,82,.2);
          transform: translateY(-3px);
        }

        .damac-gallery-thumb.active::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(16,36,61,.15));
          pointer-events: none;
        }

        .damac-gallery-content {
          text-align: var(--gallery-text-align);
          animation: damacFadeUp .8s ease both;
        }

        .damac-gallery-content .damac-eyebrow {
          margin-bottom: 15px;
        }

        .damac-gallery-content-title {
          font-size: clamp(27px, 4vw, 42px);
          line-height: 1.6;
          font-weight: 800;
          color: var(--damac-navy);
          margin: 0;
        }

        .damac-gallery-content-title span {
          display: block;
          color: var(--damac-gold);
        }

        .damac-gallery-content-description {
          font-size: 14px;
          line-height: 2.3;
          color: rgba(16,36,61,.65);
          margin-top: 20px;
          text-align: justify;
        }

        .damac-gallery-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 25px;
          padding: 15px 18px;
          border: 1px solid rgba(184,149,82,.2);
          background: rgba(255,255,255,.55);
          border-radius: 12px;
          color: var(--damac-navy);
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
          max-width: 100%;
          transition: all .3s ease;
        }

        .damac-gallery-feature:hover {
          background: white;
          box-shadow: 0 10px 30px rgba(184,149,82,.12);
          transform: translateY(-3px);
        }

        .damac-gallery-feature-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(184,149,82,.13);
          color: var(--damac-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* VIDEO */

        .damac-video-section {
          padding: 30px 6% 100px;
          position: relative;
        }

        .damac-video-wrap {
          max-width: 1050px;
          margin: auto;
          position: relative;
        }

        .damac-video-glow {
          position: absolute;
          inset: -30px;
          background: radial-gradient(ellipse, rgba(184,149,82,.15), transparent 70%);
          filter: blur(35px);
          pointer-events: none;
        }

        .damac-video-frame {
          position: relative;
          padding: 10px;
          background: rgba(255,255,255,.65);
          border: 1px solid rgba(184,149,82,.25);
          border-radius: 20px;
          box-shadow: 0 30px 70px rgba(16,36,61,.12);
          transition: box-shadow .4s ease;
        }

        .damac-video-frame:hover {
          box-shadow: 0 35px 80px rgba(16,36,61,.18);
        }

        .damac-video-frame video {
          display: block;
          width: 100%;
          border-radius: 13px;
          max-height: 650px;
          background: #10243D;
        }

        /* DETAILS + FORM */

        .damac-contact-section {
          padding: 70px 6% 110px;
          background: linear-gradient(180deg, transparent, rgba(232,226,213,.35), transparent);
        }

        .damac-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          max-width: 1250px;
          margin: auto;
          align-items: stretch;
        }

        .damac-card {
          background: rgba(255,255,255,.8);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(184,149,82,.18);
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 15px 45px rgba(16,36,61,.055), 0 2px 8px rgba(184,149,82,.03);
          transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
          min-width: 0;
        }

        .damac-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(16,36,61,.09);
          border-color: rgba(184,149,82,.35);
        }

        .damac-card-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--damac-navy);
          margin: 0;
          line-height: 1.6;
        }

        .damac-card-line {
          width: 45px;
          height: 3px;
          background: linear-gradient(90deg, var(--damac-gold), var(--damac-light-gold));
          border-radius: 10px;
          margin: 18px 0 28px;
        }

        .damac-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
          padding: 15px;
          background: rgba(248,246,241,.7);
          border: 1px solid rgba(184,149,82,.08);
          border-radius: 12px;
          transition: background .3s ease, transform .3s ease, border-color .3s ease;
        }

        .damac-detail-item:hover {
          background: white;
          transform: translateX(${ar ? "-4px" : "4px"});
          border-color: rgba(184,149,82,.25);
        }

        .damac-detail-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(184,149,82,.15), rgba(215,188,131,.08));
          color: var(--damac-gold);
          font-size: 16px;
        }

        .damac-detail-text {
          color: rgba(16,36,61,.75);
          font-size: 14px;
          line-height: 2;
          text-align: justify;
        }

        /* FORM */

        .damac-input {
          width: 100%;
          padding: 15px 17px;
          border-radius: 11px;
          border: 1px solid rgba(184,149,82,.22);
          background: rgba(248,246,241,.6);
          color: var(--damac-navy);
          outline: none;
          margin-bottom: 17px;
          transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
          display: block;
        }

        .damac-input:focus {
          background: white;
          border-color: var(--damac-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.09);
        }

        .damac-input::placeholder {
          color: rgba(16,36,61,.4);
        }

        .damac-select-wrap {
          position: relative;
          margin-bottom: 20px;
        }

        .damac-select {
          width: 100%;
          appearance: none;
          background: rgba(248,246,241,.6);
          border: 1px solid rgba(184,149,82,.22);
          border-radius: 11px;
          padding: 15px 17px;
          color: var(--damac-navy);
          cursor: pointer;
          outline: none;
          transition: all .3s ease;
        }

        .damac-select:focus {
          background: white;
          border-color: var(--damac-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.09);
        }

        .damac-select-arrow {
          position: absolute;
          top: 50%;
          ${ar ? "left: 18px;" : "right: 18px;"}
          transform: translateY(-50%);
          color: var(--damac-gold);
          pointer-events: none;
          font-size: 12px;
        }

        .damac-error {
          color: #c0392b;
          font-size: 12px;
          margin: -8px 0 15px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .damac-wa-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: var(--damac-navy);
          color: white;
          border: 1px solid transparent;
          padding: 16px;
          border-radius: 11px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all .35s ease;
          position: relative;
          overflow: hidden;
        }

        .damac-wa-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
          transition: left .6s ease;
        }

        .damac-wa-btn:hover::before {
          left: 100%;
        }

        .damac-wa-btn:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          color: var(--damac-navy);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(184,149,82,.25);
        }

        .damac-wa-btn:active {
          transform: translateY(-1px);
        }

        /* TRUST */

        .damac-trust-section {
          padding: 20px 6% 100px;
        }

        .damac-trust-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(16,36,61,.12);
        }

        .damac-trust-left {
          position: relative;
          overflow: hidden;
          padding: 40px 25px;
          background: var(--damac-navy);
          color: #F8F6F1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .damac-trust-left::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,149,82,.15), transparent 70%);
          top: -150px;
          right: -120px;
          pointer-events: none;
        }

        .damac-trust-left::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(215,188,131,.08), transparent 70%);
          bottom: -100px;
          left: -100px;
          pointer-events: none;
        }

        .damac-trust-content {
          position: relative;
          z-index: 1;
        }

        .damac-trust-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--damac-light-gold);
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .damac-trust-dot {
          width: 7px;
          height: 7px;
          background: var(--damac-light-gold);
          border-radius: 50%;
          animation: damacPulse 2s infinite;
        }

        .damac-trust-title {
          font-size: clamp(25px, 4vw, 39px);
          font-weight: 800;
          line-height: 1.6;
          margin: 0;
          color: #F8F6F1;
        }

        .damac-trust-title span {
          color: var(--damac-light-gold);
        }

        .damac-trust-description {
          font-size: 14px;
          line-height: 2.3;
          color: rgba(248,246,241,.65);
          margin-top: 20px;
          max-width: 500px;
          text-align: justify;
        }

        .damac-trust-location {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid rgba(215,188,131,.15);
          color: rgba(248,246,241,.75);
          font-size: 13px;
          line-height: 2;
        }

        .damac-trust-location a {
          color: var(--damac-light-gold);
          text-decoration: none;
          display: inline-block;
          margin-top: 8px;
          transition: color .3s ease;
        }

        .damac-trust-location a:hover {
          color: white;
        }

        .damac-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .damac-social-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 16px;
          border: 1px solid rgba(215,188,131,.2);
          border-radius: 50px;
          color: var(--damac-light-gold);
          text-decoration: none;
          font-size: 12px;
          transition: all .3s ease;
        }

        .damac-social-link:hover {
          background: rgba(215,188,131,.12);
          border-color: var(--damac-light-gold);
          transform: translateY(-3px);
        }

        .damac-trust-right {
          background: #fff;
          padding: 35px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .damac-stat {
          display: flex;
          flex-direction: column;
          padding: 22px 0;
          border-bottom: 1px solid rgba(184,149,82,.13);
          transition: padding .3s ease;
        }

        .damac-stat:last-child {
          border-bottom: none;
        }

        .damac-stat:hover {
          padding-inline: 10px;
        }

        .damac-stat-number {
          font-size: clamp(34px, 5vw, 47px);
          font-weight: 800;
          line-height: 1.3;
          background: linear-gradient(135deg, #9B773D, #D7BC83, #B89552);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .damac-stat-label {
          color: rgba(16,36,61,.58);
          font-size: 13px;
          line-height: 2;
          margin-top: 5px;
        }

        /* BACK BUTTON */

        .damac-back-section {
          padding: 0 6% 100px;
          text-align: center;
        }

        .damac-back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 35px;
          background: var(--damac-navy);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid transparent;
          transition: all .35s ease;
        }

        .damac-back-btn:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          color: var(--damac-navy);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(184,149,82,.22);
        }

        /* TABLET */

        @media (min-width: 600px) {
          .damac-gallery-main {
            height: 420px;
          }

          .damac-gallery-thumb {
            height: 115px;
          }

          .damac-card {
            padding: 35px;
          }

          .damac-trust-left,
          .damac-trust-right {
            padding: 45px 35px;
          }
        }

        /* DESKTOP */

        @media (min-width: 900px) {
          .damac-hero {
            grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
            gap: 70px;
            padding: 165px 8% 100px;
            min-height: 95vh;
          }

          .damac-hero.hero-en {
            grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          }

          .damac-hero.hero-en .damac-hero-image {
            order: 2;
          }

          .damac-hero.hero-en .damac-hero-content {
            order: 1;
          }

          .damac-hero-image {
            height: 75vh;
            min-height: 500px;
            max-height: 760px;
          }

          .damac-hero-title {
            font-size: clamp(43px, 5vw, 72px);
          }

          .damac-hero-description {
            font-size: 16px;
          }

          .damac-gallery-section {
            padding: 80px 8% 120px;
          }

          .damac-gallery-layout {
            grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
            gap: 75px;
          }

          .damac-gallery-main {
            height: 530px;
          }

          .damac-gallery-thumb {
            height: 125px;
          }

          .damac-gallery-content-title {
            font-size: clamp(34px, 3.5vw, 49px);
          }

          .damac-gallery-content-description {
            font-size: 15px;
          }

          .damac-video-section {
            padding: 30px 8% 130px;
          }

          .damac-contact-section {
            padding: 100px 8% 130px;
          }

          .damac-contact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px;
          }

          .damac-trust-section {
            padding: 20px 8% 130px;
          }

          .damac-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .damac-trust-left,
          .damac-trust-right {
            padding: 60px 50px;
          }

          .damac-back-section {
            padding-bottom: 130px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {
          .damac-hero {
            padding: 100px 16px 55px;
            gap: 25px;
          }

          .damac-hero-image {
            height: 240px;
          }

          .damac-hero-title {
            font-size: 29px;
          }

          .damac-hero-description {
            font-size: 13px;
          }

          .damac-gallery-section,
          .damac-video-section,
          .damac-contact-section,
          .damac-trust-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .damac-gallery-main {
            height: 240px;
          }

          .damac-gallery-thumb {
            height: 65px;
          }

          .damac-gallery-thumbnails {
            gap: 8px;
          }

          .damac-gallery-content-title {
            font-size: 26px;
          }

          .damac-gallery-content-description {
            font-size: 13px;
          }

          .damac-gallery-feature {
            font-size: 12px;
          }

          .damac-card {
            padding: 22px 17px;
          }

          .damac-card-title {
            font-size: 21px;
          }

          .damac-trust-left,
          .damac-trust-right {
            padding: 30px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .damac-page *,
          .damac-page *::before,
          .damac-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <Navbar />

      {/* ================= HERO ================= */}

      <section className={`damac-hero ${ar ? "hero-ar" : "hero-en"}`}>
        <div className="damac-hero-image">
          <img src={damac1} alt="Dar Damac" />
          <div className="damac-image-frame" />

          <div
            style={{
              position: "absolute",
              bottom: 25,
              insetInlineStart: 28,
              zIndex: 3,
              color: "white",
              fontSize: 12,
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            DAR DEVELOPMENTS
          </div>
        </div>

        <div className="damac-hero-content" style={{ textAlign }}>
          <span className="damac-eyebrow">
            {ar ? "مشروعات دار" : "DAR PROJECTS"}
          </span>

          <h1 className="damac-hero-title">
            <span className="gold-text">{t("damac", "title1")}</span>{" "}
            {t("damac", "title2")}
          </h1>

          <div
            className="damac-title-line"
            style={{
              marginInlineStart: ar ? "auto" : "0",
              marginInlineEnd: ar ? "0" : "auto",
            }}
          />

          <p className="damac-hero-description">
            {t("damac", "desc")}
          </p>

          <div className="damac-hero-badge">
            <span className="damac-badge-dot" />
            {ar
              ? "مشروع متميز في قلب طنطا"
              : "Premium Living in Tanta"}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section className="damac-gallery-section">
        <div className="damac-section-header">
          <span className="damac-section-kicker">
            {ar ? "اكتشف المشروع" : "DISCOVER THE PROJECT"}
          </span>

          <h2 className="damac-section-title">
            {ar ? "تفاصيل من دار داماك" : "Dar Damac Gallery"}
          </h2>

          <div className="damac-section-line" />
        </div>

        <div className="damac-gallery-layout">

          {/* IMAGE + THUMBNAILS */}

          <div className="damac-gallery-visual">
            <div className="damac-gallery-main">
              <img
                key={imageKey}
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
              />

              <div className="damac-gallery-main-frame" />

              <div className="damac-gallery-counter">
                0{activeImage + 1} / 0{galleryImages.length}
              </div>
            </div>

            <div className="damac-gallery-thumbnails">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={image.alt}
                  className={`damac-gallery-thumb ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => changeImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img src={image.src} alt={image.alt} />
                </button>
              ))}
            </div>
          </div>

          {/* GALLERY TEXT */}

          <div
            className="damac-gallery-content"
            style={{
              "--gallery-text-align": textAlign,
              textAlign,
            }}
          >
            <span className="damac-eyebrow">
              {ar ? "تصميم • موقع • تفاصيل" : "DESIGN • LOCATION • DETAILS"}
            </span>

            <h3 className="damac-gallery-content-title">
              {ar ? "كل تفصيلة" : "Every Detail"}
              <span>
                {ar ? "تحكي قصة" : "Tells a Story"}
              </span>
            </h3>

            <div
              className="damac-title-line"
              style={{
                marginInlineStart: ar ? "auto" : "0",
                marginInlineEnd: ar ? "0" : "auto",
              }}
            />

            <p className="damac-gallery-content-description">
              {ar
                ? "اكتشف تفاصيل دار داماك من خلال مجموعة من الصور التي تعكس التصميم المعماري، جودة التنفيذ، والتفاصيل التي تمنح المشروع طابعًا مميزًا."
                : "Discover Dar Damac through a collection of images showcasing its architecture, construction quality, and distinctive details that make the project special."}
            </p>

            <div className="damac-gallery-feature">
              <span className="damac-gallery-feature-icon">✦</span>
              <span>
                {ar
                  ? "تصميم مميز وتجربة سكنية متكاملة"
                  : "Distinctive Design & Complete Living Experience"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}

      <section className="damac-video-section">
        <div className="damac-section-header">
          <span className="damac-section-kicker">
            {ar ? "جولة داخل المشروع" : "PROJECT EXPERIENCE"}
          </span>

          <h2 className="damac-section-title">
            {ar ? "شاهد دار داماك" : "Explore Dar Damac"}
          </h2>

          <div className="damac-section-line" />
        </div>

        <div className="damac-video-wrap">
          <div className="damac-video-glow" />

          <div className="damac-video-frame">
            <video
              ref={videoRef}
              src={videoFile}
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* ================= DETAILS + FORM ================= */}

      <section className="damac-contact-section">
        <div className="damac-contact-grid">

          {/* DETAILS */}

          <div
            className="damac-card"
            style={{
              order: ar ? 1 : 2,
              direction: dir,
              textAlign,
            }}
          >
            <h2 className="damac-card-title">
              {t("damac", "detailsTitle")}
            </h2>

            <div
              className="damac-card-line"
              style={{
                marginInlineStart: ar ? "auto" : "0",
                marginInlineEnd: ar ? "0" : "auto",
              }}
            />

            <div className="damac-detail-item">
              <div className="damac-detail-icon">⌖</div>
              <div className="damac-detail-text">
                {t("damac", "location")}
              </div>
            </div>

            <div className="damac-detail-item">
              <div className="damac-detail-icon">⌂</div>
              <div className="damac-detail-text">
                {t("damac", "towers")}
              </div>
            </div>

            <div className="damac-detail-item">
              <div className="damac-detail-icon">▦</div>
              <div className="damac-detail-text">
                {t("damac", "spaces")}
              </div>
            </div>

            <div className="damac-detail-item">
              <div className="damac-detail-icon">◇</div>
              <div className="damac-detail-text">
                {t("damac", "downPayment")}
              </div>
            </div>

            <div className="damac-detail-item" style={{ marginBottom: 0 }}>
              <div className="damac-detail-icon">◷</div>
              <div className="damac-detail-text">
                {t("damac", "installment")}
              </div>
            </div>
          </div>

          {/* FORM */}

          <div
            className="damac-card"
            style={{
              order: ar ? 2 : 1,
              direction: dir,
            }}
          >
            <h2 className="damac-card-title text-center">
              {t("damac", "formTitle")}
            </h2>

            <div className="damac-card-line" style={{ margin: "18px auto 30px" }} />

            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder={t("damac", "namePlaceholder")}
              className="damac-input"
              value={formData.name}
              onChange={handleChange}
              style={{ direction: dir }}
            />

            {error && (
              <div className="damac-error">
                <span>⚠</span>
                {error}
              </div>
            )}

            <div className="damac-select-wrap">
              <select
                name="project"
                className="damac-select"
                value={formData.project}
                onChange={handleChange}
                style={{ direction: dir }}
              >
                <option value="Dar Damac">Dar Damac</option>
                <option value="Dar Landmark">Dar Landmark</option>
                <option value="Dar Elwrood">Dar Elwrood</option>
              </select>

              <span className="damac-select-arrow">▼</span>
            </div>

            <button
              type="button"
              className="damac-wa-btn"
              onClick={openWhatsApp}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.43-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.37l-.36-.22-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.51-5.28c0-5.45 4.44-9.89 9.89-9.89a9.84 9.84 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.15-.3.15-.45.3-.17.97-1.16 1.16-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.39-1.48-.89-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
              </svg>

              {t("damac", "whatsappBtn")}
            </button>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}

      <section className="damac-trust-section">
        <div className="damac-trust-grid">

          {/* LEFT */}

          <div
            className="damac-trust-left"
            style={{
              order: ar ? 1 : 2,
              textAlign,
              direction: dir,
            }}
          >
            <div className="damac-trust-content">
              <div
                className="damac-trust-kicker"
                style={{
                  justifyContent: ar ? "flex-end" : "flex-start",
                }}
              >
                <span className="damac-trust-dot" />
                {ar ? "ثقة ممتدة" : "TRUSTED SINCE"}
              </div>

              <h2 className="damac-trust-title">
                {ar ? "خبرة ممتدة لأكثر من" : "Over"}{" "}
                <span>{ar ? "8 أعوام" : "8 Years"}</span>
                {ar ? "" : " of Excellence"}
              </h2>

              <div
                className="damac-card-line"
                style={{
                  marginInlineStart: ar ? "auto" : "0",
                  marginInlineEnd: ar ? "0" : "auto",
                }}
              />

              <p className="damac-trust-description">
                {ar
                  ? "نحن لا نبني وحدات سكنية فحسب — نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
                  : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way."}
              </p>

              <div className="damac-trust-location">
                <strong>
                  {ar ? "مقر الشركة:" : "Company Location:"}
                </strong>

                <div>
                  {ar
                    ? "طنطا - شارع توت عنخ آمون من محمد فريد فوق مخبز الزهراء"
                    : "Tanta - Tutankhamun Street, Mohamed Farid, above Al Zahraa Bakery"}
                </div>

                <a
                  href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
                  target="_blank"
                  rel="noreferrer"
                >
                  {ar ? "← افتح على الخريطة" : "← Open in Maps"}
                </a>
              </div>

              <div className="damac-socials">
                <a
                  href="https://www.facebook.com/share/1XgDRDMitV/"
                  target="_blank"
                  rel="noreferrer"
                  className="damac-social-link"
                >
                  <span>f</span>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                  target="_blank"
                  rel="noreferrer"
                  className="damac-social-link"
                >
                  <span>◎</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="damac-trust-right"
            style={{
              order: ar ? 2 : 1,
              direction: dir,
              textAlign,
            }}
          >
            {[
              {
                num: "8+",
                ar: "سنوات خبرة في السوق العقاري",
                en: "Years in Real Estate",
              },
              {
                num: "+100",
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
            ].map((stat, index) => (
              <div className="damac-stat" key={index}>
                <span className="damac-stat-number">
                  {stat.num}
                </span>

                <span className="damac-stat-label">
                  {ar ? stat.ar : stat.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BACK ================= */}

      <section className="damac-back-section">
        <a href="/#projects" className="damac-back-btn">
          <span>{t("damac", "backBtn")}</span>
          <span>{ar ? "←" : "→"}</span>
        </a>
      </section>
    </div>
  );
}

export default ProjectDamacPage;
