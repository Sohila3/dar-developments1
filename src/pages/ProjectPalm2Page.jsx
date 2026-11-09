
import Navbar from "../components/Navbar";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

import palm1 from "../assets/palm1.jpeg";
import palm2 from "../assets/palm2.jpeg";
import palm3 from "../assets/palm3.jpeg";
import palm4 from "../assets/palm4.jpeg";
import palm5 from "../assets/palm5.jpeg";
import palm6 from "../assets/palm6.jpeg";
import palm7 from "../assets/palm7.jpeg";
import palm8 from "../assets/palm8.jpeg";
import palm9 from "../assets/palm9.jpeg";
import palm10 from "../assets/palm10.jpeg";

const IMAGES = [
  palm1,
  palm2,
  palm3,
  palm4,
  palm5,
  palm6,
  palm7,
  palm8,
];

const details = {
  ar: {
    title1: "بالم",
    title2: "المرحلة الثانية",
    desc: "بالم 2 هو استكمال للمرحلة الأولى من مشروع بالم، أكبر كمباوند سكني في كورنيش بلازا بطنطا، والذي يضم إجمالي 8 أبراج سكنية. وتضم المرحلة الثانية المطروحة حاليًا 4 أبراج سكنية، بمساحات متنوعة وأنظمة سداد مرنة، لتوفر فرصًا مميزة للسكن والاستثمار العقاري.",
    detailsTitle: "تفاصيل المشروع",
    location: "📍 الموقع: كورنيش بلازا، تقاطع شارع أحمد الخشاب، طنطا، مصر.",
    mapsLabel: "عرض الموقع على الخريطة",
    towersTitle: "🏢 الأبراج السكنية ومساحات الوحدات:",
    towers: `البرج الأول: 131م² | 138م² | 115م² | 134م² | 135م² | 114م²
البرج الثاني: 130م² | 138م² | 115م² | 138م² | 141م² | 114م² | 136م²
البرج الثالث: 101م² | 105م²
البرج الرابع: 155م² | 118م²`,
    downPayment: "💰 المقدم: يبدأ من 30%",
    installment: "📅 التقسيط: على 4 سنوات",
    delivery: "🏠 الاستلام: يبدأ من سنتين ونصف — على الطوب",
    featuresTitle: "✨ أهم مميزات المشروع:",
    features: [
      "أكبر كمباوند سكني في كورنيش بلازا",
      "8 أبراج بالمشروع، والمرحلة الثانية 4 أبراج",
      "مساحات متنوعة تناسب مختلف الاحتياجات",
      "أنظمة سداد مرنة",
      "استلام يبدأ من سنتين ونصف",
      "كمباوند مسوّر بالكامل (Exclusive Gated Community)",
      "على بُعد دقيقتين من الطرق الرئيسية والسريعة",
      "موقع استراتيجي في قلب طنطا",
      "خصوصية تامة",
      "تصميم متكامل ومدروس",
      "مسجد داخل المشروع",
      "نافورة",
      "مساحات خضراء",
      "جراج",
    ],
    formTitle: "تواصل معنا",
    namePlaceholder: "اكتب اسمك",
    whatsappBtn: "تواصل عبر واتساب",
    backBtn: "← العودة للمشاريع",
    highlightsLabel: "تفاصيل بالم",
    highlightsTitle: "جمال المشروع في كل تفصيلة",
    highlightsDesc: "اكتشف بالم 2، حيث يلتقي التصميم المتكامل بجودة الحياة.",
    highlight1: "تصميم معماري مميز",
    highlight2: "مساحات تعكس جودة الحياة",
  },

  en: {
    title1: "Palm",
    title2: "Phase Two",
    desc: "Palm 2 is the continuation of the first phase of the Palm project — the largest residential compound in Corniche Plaza, Tanta, comprising a total of 8 residential towers. Phase Two currently offers 4 residential towers with diverse spaces and flexible payment plans, providing outstanding opportunities for housing and real estate investment.",
    detailsTitle: "Project Details",
    location: "📍 Location: Corniche Plaza, Ahmed Al-Khashab Street intersection, Tanta, Egypt.",
    mapsLabel: "View on Google Maps",
    towersTitle: "🏢 Residential Towers & Unit Spaces:",
    towers: `Tower 1: 131m² | 138m² | 115m² | 134m² | 135m² | 114m²
Tower 2: 130m² | 138m² | 115m² | 138m² | 141m² | 114m² | 136m²
Tower 3: 101m² | 105m²
Tower 4: 155m² | 118m²`,
    downPayment: "💰 Down Payment: Starting from 30%",
    installment: "📅 Installments: Over 4 years",
    delivery: "🏠 Delivery: Starting from 2.5 years — Red brick finishing",
    featuresTitle: "✨ Key Project Features:",
    features: [
      "Largest residential compound in Corniche Plaza",
      "8 towers in total — Phase Two includes 4 towers",
      "Varied spaces to suit different needs",
      "Flexible payment plans",
      "Delivery starting from 2.5 years",
      "Exclusive Gated Community",
      "2 minutes away from main roads & highways",
      "Strategically located in the heart of Tanta",
      "Full privacy",
      "Thoughtful layout",
      "Mosque",
      "Fountain",
      "Green areas",
      "Garage",
    ],
    formTitle: "Contact Us",
    namePlaceholder: "Enter your name",
    whatsappBtn: "Contact via WhatsApp",
    backBtn: "Back to Projects →",
    highlightsLabel: "PALM RESIDENCES",
    highlightsTitle: "Designed to Make an Impression",
    highlightsDesc: "Discover Palm 2, where thoughtful design meets a refined lifestyle.",
    highlight1: "Distinctive Architectural Design",
    highlight2: "Spaces Designed for Better Living",
  },
};

function ProjectPalm2Page() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const dir = ar ? "rtl" : "ltr";
  const textAlign = ar ? "right" : "left";
  const c = details[ar ? "ar" : "en"];

  const [formData, setFormData] = useState({
    name: "",
    project: "Palm 2",
  });

  const [error, setError] = useState("");
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? IMAGES.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((i) => (i === IMAGES.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    if (!formData.name.trim()) {
      setError(
        ar ? "من فضلك اكتب الاسم أولاً" : "Please enter your name"
      );
      return;
    }

    setError("");

    const message = ar
      ? `اسم العميل: ${formData.name}\nالمشروع: ${formData.project}`
      : `Client Name: ${formData.name}\nProject: ${formData.project}`;

    window.open(
      `https://wa.me/201039207908?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className="palm-page w-full overflow-x-hidden"
      style={{
        background: `
          radial-gradient(circle at 85% 8%, rgba(184,149,82,0.10), transparent 30%),
          radial-gradient(circle at 5% 85%, rgba(16,36,61,0.06), transparent 35%),
          linear-gradient(135deg, #F8F6F1 0%, #F2EEE6 100%)
        `,
        fontFamily: "'Alexandria', sans-serif",
        direction: dir,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .3; }
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .palm-page {
          position: relative;
          isolation: isolate;
        }

        .palm-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(16,36,61,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,36,61,.025) 1px, transparent 1px);
          background-size: 55px 55px;
        }

        /* ================= HERO ================= */

        .project-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 110px 5% 65px;
          gap: 35px;
          min-height: auto;
        }

        .project-hero-image {
          width: 100%;
          min-width: 0;
          height: clamp(280px, 65vw, 430px);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 65px rgba(16,36,61,.14);
          position: relative;
          border: 1px solid rgba(184,149,82,.3);
          background: #EAE5DB;
          isolation: isolate;
        }

        .project-hero-image::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255,255,255,.15);
          pointer-events: none;
        }

        .project-hero-text {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          position: relative;
          z-index: 2;
        }

        .project-hero-title {
          font-size: clamp(28px, 5vw, 42px);
          line-height: 1.5;
          overflow-wrap: anywhere;
          color: #10243D;
        }

        .project-hero-description {
          font-size: 15px;
          line-height: 2.2;
          overflow-wrap: anywhere;
        }

        /* HERO IMAGE HOVER */

        .slider-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition:
            transform 1s cubic-bezier(.2,.7,.2,1),
            opacity .4s ease;
        }

        .project-hero-image:hover .slider-img {
          transform: scale(1.045);
        }

        .project-hero-image:hover {
          box-shadow: 0 32px 75px rgba(16,36,61,.2);
          border-color: rgba(184,149,82,.55);
          transition: box-shadow .5s, border-color .5s;
        }

        /* SLIDER ARROWS */

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(16,36,61,.72);
          color: #D7BC83;
          border: 1px solid rgba(215,188,131,.35);
          border-radius: 50%;
          width: 42px;
          height: 42px;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s ease;
          z-index: 10;
          backdrop-filter: blur(8px);
        }

        .slider-btn:hover {
          background: #B89552;
          color: #10243D;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 22px rgba(184,149,82,.3);
        }

        .slider-btn-prev { left: 15px; }
        .slider-btn-next { right: 15px; }

        /* SLIDER DOTS */

        .slider-dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 9px;
          z-index: 10;
          padding: 11px 16px;
          border-radius: 30px;
          background: rgba(16,36,61,.45);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.12);
        }

        .slider-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(248,246,241,.55);
          cursor: pointer;
          transition: all .3s ease;
          border: none;
          padding: 0;
          flex-shrink: 0;
        }

        .slider-dot:hover {
          background: #F8F6F1;
          transform: scale(1.2);
        }

        .slider-dot.active {
          background: #D7BC83;
          width: 22px;
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(215,188,131,.4);
        }

        /* DESKTOP HERO */

        @media (min-width: 768px) {
          .project-hero {
            grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
            gap: clamp(35px, 5vw, 85px);
            padding: 145px 7% 85px;
            min-height: 100vh;
            box-sizing: border-box;
          }

          .project-hero.hero-en {
            grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          }

          .project-hero.hero-en .project-hero-image {
            grid-column: 2;
            grid-row: 1;
          }

          .project-hero.hero-en .project-hero-text {
            grid-column: 1;
            grid-row: 1;
          }

          .project-hero-image {
            width: 100%;
            height: clamp(430px, 65vh, 720px);
            min-height: 430px;
            max-height: 760px;
          }

          .project-hero-text {
            width: 100%;
            max-width: 650px;
          }

          .project-hero-title {
            font-size: clamp(40px, 4.2vw, 68px);
            line-height: 1.35;
          }

          .project-hero-description {
            font-size: 16px;
            line-height: 2.4;
          }
        }

        @media (min-width: 1200px) {
          .project-hero {
            padding-left: 9%;
            padding-right: 9%;
            gap: 90px;
          }

          .project-hero-image {
            height: 75vh;
            max-height: 780px;
          }
        }

        @media (max-width: 767px) {
          .project-hero {
            padding: 100px 20px 50px;
            gap: 28px;
          }

          .project-hero-image {
            height: clamp(260px, 68vw, 400px);
          }

          .project-hero-title {
            font-size: clamp(28px, 7vw, 38px);
          }

          .project-hero-description {
            font-size: 14px;
            line-height: 2.1;
          }
        }

        @media (max-width: 380px) {
          .project-hero {
            padding: 90px 14px 40px;
            gap: 20px;
          }

          .project-hero-image { height: 240px; }
          .project-hero-title { font-size: 27px; }
          .project-hero-description { font-size: 13px; }
          .slider-btn { width: 36px; height: 36px; font-size: 20px; }
          .slider-dots { padding: 9px 12px; gap: 7px; }
        }

        /* ================= INFO CARDS ================= */

        .palm-info-card {
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(184,149,82,.18);
          box-shadow: 0 20px 60px rgba(16,36,61,.07);
          border-radius: 22px;
          backdrop-filter: blur(12px);
          min-width: 0;
        }

        /* ================= FORM ================= */

        .custom-select-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 16px;
        }

        .custom-select {
          width: 100%;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
          background: #fff;
          border: 1.5px solid rgba(184,149,82,.35);
          border-radius: 9px;
          padding: 13px 44px 13px 16px;
          font-size: 15px;
          color: #10243D;
          cursor: pointer;
          outline: none;
          transition: border-color .25s;
          font-family: 'Alexandria', sans-serif;
          direction: ${dir};
        }

        .custom-select:focus {
          border-color: #B89552;
          box-shadow: 0 0 0 3px rgba(184,149,82,.12);
        }

        .custom-select-arrow {
          position: absolute;
          top: 50%;
          ${ar ? "left: 14px;" : "right: 14px;"}
          transform: translateY(-50%);
          pointer-events: none;
          color: #B89552;
          font-size: 12px;
        }

        .custom-input {
          width: 100%;
          box-sizing: border-box;
          border: 1.5px solid rgba(184,149,82,.35);
          border-radius: 9px;
          padding: 13px 16px;
          font-size: 14px;
          color: #10243D;
          outline: none;
          transition: border-color .25s, box-shadow .25s;
          font-family: 'Alexandria', sans-serif;
          margin-bottom: 8px;
          direction: ${dir};
          display: block;
          background: #fff;
        }

        .custom-input:focus {
          border-color: #B89552;
          box-shadow: 0 0 0 3px rgba(184,149,82,.12);
        }

        .custom-input::placeholder {
          color: rgba(16,36,61,.35);
        }

        .wa-btn {
          width: 100%;
          box-sizing: border-box;
          background: #10243D;
          color: #F8F6F1;
          border: 1px solid rgba(184,149,82,.3);
          border-radius: 9px;
          padding: 15px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Alexandria', sans-serif;
          cursor: pointer;
          transition: all .3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }

        .wa-btn:hover {
          background: #B89552;
          color: #10243D;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(184,149,82,.22);
        }

        .back-btn {
          display: inline-block;
          background: #10243D;
          color: #F8F6F1;
          padding: 14px 42px;
          border-radius: 9px;
          font-family: 'Alexandria', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(184,149,82,.35);
          transition: all .3s ease;
        }

        .back-btn:hover {
          background: #B89552;
          color: #10243D;
          transform: translateY(-2px);
        }

        /* ================= FEATURES ================= */

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          column-gap: 24px;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 0;
          border-bottom: 1px solid rgba(184,149,82,.13);
          color: rgba(16,36,61,.72);
          font-size: 12px;
          line-height: 1.9;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #B89552;
          flex-shrink: 0;
        }

        /* ================= HIGHLIGHTS ================= */

        .palm-highlights {
          position: relative;
          padding: 75px 20px;
          overflow: hidden;
        }

        .palm-highlights-header {
          max-width: 1200px;
          margin: 0 auto 35px;
        }

        .palm-highlights-label {
          color: #B89552;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .palm-highlights-title {
          color: #10243D;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.5;
        }

        .palm-highlights-line {
          width: 65px;
          height: 3px;
          background: linear-gradient(90deg, #B89552, #D7BC83);
          margin-top: 18px;
          border-radius: 5px;
        }

        .palm-highlights-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .palm-highlight-card {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          height: 320px;
          background: #EAE5DB;
          border: 1px solid rgba(184,149,82,.25);
          box-shadow: 0 18px 45px rgba(16,36,61,.10);
        }

        .palm-highlight-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .8s ease;
        }

        .palm-highlight-card:hover img {
          transform: scale(1.06);
        }

        .palm-highlight-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 35%,
            rgba(16,36,61,.12) 60%,
            rgba(16,36,61,.78) 100%
          );
          pointer-events: none;
        }

        .palm-highlight-number {
          position: absolute;
          top: 18px;
          left: 18px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(248,246,241,.94);
          color: #10243D;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid rgba(184,149,82,.5);
        }

        .palm-highlight-caption {
          position: absolute;
          bottom: 22px;
          right: 24px;
          left: 24px;
          color: #F8F6F1;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.8;
        }

        @media (min-width: 768px) {
          .palm-highlights {
            padding: 100px 80px;
          }

          .palm-highlights-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px;
          }

          .palm-highlight-card {
            height: 460px;
          }
        }

        @media (max-width: 380px) {
          .palm-highlight-card {
            height: 250px;
          }
        }

        /* ================= TRUST ================= */

        .trust-section {
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
          border-radius: 18px;
        }

        .trust-left {
          background: #10243D;
          padding: 35px 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .trust-right {
          background: rgba(255,255,255,.88);
          padding: 35px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .trust-stat {
          display: flex;
          flex-direction: column;
          padding: 18px 0;
          border-bottom: 1px solid rgba(184,149,82,.15);
          animation: countUp .6s ease forwards;
        }

        .trust-stat:last-child {
          border-bottom: none;
        }

        .trust-stat-num {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #B89552;
          line-height: 1;
          margin-bottom: 8px;
        }

        .trust-stat-lbl {
          font-size: 13px;
          color: rgba(16,36,61,.55);
          line-height: 1.8;
        }

        @media (min-width: 768px) {
          .trust-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .trust-left,
          .trust-right {
            padding: 56px 48px;
          }
        }
      `}</style>

      <Navbar />

      {/* ================= HERO ================= */}

      <section className={`project-hero ${ar ? "hero-ar" : "hero-en"}`}>
        <div className="absolute w-[500px] h-[500px] bg-[#B89552]/10 blur-[140px] top-[-120px] right-[-120px] pointer-events-none" />

        <div className="absolute w-[450px] h-[450px] bg-[#10243D]/5 blur-[140px] bottom-[-120px] left-[-120px] pointer-events-none" />

        {/* IMAGE SLIDER */}

        <div className="project-hero-image">
          <img
            src={IMAGES[current]}
            alt={`Palm 2 - ${current + 1}`}
            className="slider-img"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10243D]/10 to-transparent pointer-events-none" />

          <button
            className="slider-btn slider-btn-prev"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className="slider-btn slider-btn-next"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>

          {/* IMAGE DOTS */}

          <div className="slider-dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`slider-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* HERO TEXT */}

        <div
          className="project-hero-text"
          style={{ textAlign }}
          dir={dir}
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#B89552]/25 bg-white/60"
          >
            <span className="w-2 h-2 rounded-full bg-[#B89552]" />

            <span className="text-xs tracking-wide text-[#10243D]/65">
              {ar ? "مشروعات دار للتطوير العقاري" : "DAR DEVELOPMENTS"}
            </span>
          </div>

          <h1 className="project-hero-title font-bold">
            <span
              style={{
                color: "#B89552",
                textShadow: "0 0 12px rgba(184,149,82,.25)",
              }}
            >
              {c.title1}
            </span>{" "}
            {c.title2}
          </h1>

          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg,#B89552,#D7BC83)",
              margin: ar ? "16px 0 24px auto" : "16px 0 24px 0",
              borderRadius: "4px",
            }}
          />

          <p className="project-hero-description text-[#10243D]/70 text-justify">
            {c.desc}
          </p>

          <div
            className="mt-7 flex flex-wrap gap-3"
            style={{
              justifyContent: ar ? "flex-end" : "flex-start",
            }}
          >
            <span className="px-4 py-2 rounded-full border border-[#B89552]/30 bg-white/60 text-[#10243D]/70 text-xs">
              {ar ? "كمباوند سكني متكامل" : "Integrated Residential Compound"}
            </span>

            <span className="px-4 py-2 rounded-full border border-[#B89552]/30 bg-white/60 text-[#10243D]/70 text-xs">
              {ar ? "4 أبراج بالمرحلة الثانية" : "4 Towers in Phase Two"}
            </span>
          </div>
        </div>
      </section>

      {/* ================= INFO + FORM ================= */}

      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-24 py-12 md:py-28"
        style={{ direction: dir }}
      >
        {/* DETAILS */}

        <div
          className="palm-info-card p-5 md:p-10"
          style={{ textAlign, order: ar ? 1 : 2 }}
          dir={dir}
        >
          <h2 className="text-2xl font-bold text-[#10243D] mb-2">
            {c.detailsTitle}
          </h2>

          <div
            style={{
              width: "40px",
              height: "3px",
              background: "linear-gradient(90deg,#B89552,#D7BC83)",
              marginBottom: "20px",
              borderRadius: "3px",
              marginLeft: ar ? "auto" : "0",
              marginRight: ar ? "0" : "auto",
            }}
          />

          <p className="mb-3 text-[#10243D]/70">{c.location}</p>

          <a
            href="https://maps.app.goo.gl/jrCCR6BjsDAi9TJw7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-5 font-semibold text-sm text-[#B89552] hover:text-[#8F6B32] transition-colors"
          >
            <span>{ar ? "←" : "→"}</span>
            {c.mapsLabel}
          </a>

          <p className="mb-3 text-[#10243D]/80 font-semibold">
            {c.towersTitle}
          </p>

          <p
            className="mb-5 text-[#10243D]/70 text-sm leading-8"
            style={{ whiteSpace: "pre-line" }}
          >
            {c.towers}
          </p>

          <div className="space-y-3 mb-6 text-[#10243D]/70">
            <p>{c.downPayment}</p>
            <p>{c.installment}</p>
            <p>{c.delivery}</p>
          </div>

          <p className="mb-3 text-[#10243D]/80 font-semibold">
            {c.featuresTitle}
          </p>

          <div className="features-grid">
            {c.features.map((f, i) => (
              <div key={i} className="feature-item">
                <span className="feature-dot" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}

        <div
          className="palm-info-card p-5 md:p-10"
          style={{ direction: dir, order: ar ? 2 : 1 }}
        >
          <h2 className="text-2xl font-bold text-[#10243D] mb-2 text-center">
            {c.formTitle}
          </h2>

          <div
            style={{
              width: "40px",
              height: "3px",
              background: "linear-gradient(90deg,#B89552,#D7BC83)",
              margin: "0 auto 24px",
              borderRadius: "3px",
            }}
          />

          <input
            name="name"
            placeholder={c.namePlaceholder}
            className="custom-input"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
              if (error) setError("");
            }}
          />

          {error && (
            <div className="mb-3 text-red-500 text-sm flex items-center gap-2">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <div className="custom-select-wrapper mt-2">
            <select
              name="project"
              className="custom-select"
              value={formData.project}
              onChange={handleChange}
            >
              <option value="Palm 2">Palm 2</option>
              <option value="Dar Damac">Dar Damac</option>
              <option value="Dar Landmark">Dar Landmark</option>
              <option value="Dar Elwrood">Dar Elwrood</option>
            </select>

            <span className="custom-select-arrow">▼</span>
          </div>

          <button className="wa-btn" onClick={openWhatsApp}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {c.whatsappBtn}
          </button>

          <div className="mt-8 rounded-xl bg-[#10243D]/[0.04] border border-[#B89552]/15 p-5">
            <p
              className="text-[#10243D]/70 text-sm leading-8"
              style={{ textAlign }}
            >
              {ar
                ? "فريق دار جاهز لمساعدتك في اختيار الوحدة المناسبة والتعرف على أنظمة السداد المتاحة."
                : "Our team is ready to help you find the right unit and explore available payment plans."}
            </p>
          </div>
        </div>
      </section>

      {/* ================= PALM HIGHLIGHTS ================= */}

      <section className="palm-highlights" dir={dir}>
        <div className="absolute w-[450px] h-[450px] bg-[#B89552]/10 blur-[140px] top-0 right-[-120px] pointer-events-none" />

        <div className="palm-highlights-header relative z-10">
          <div
            className="palm-highlights-label"
            style={{ textAlign }}
          >
            {c.highlightsLabel}
          </div>

          <h2
            className="palm-highlights-title"
            style={{ textAlign }}
          >
            {c.highlightsTitle}
          </h2>

          <div
            className="palm-highlights-line"
            style={{ marginLeft: ar ? "auto" : "0" }}
          />

          <p
            className="mt-5 text-[#10243D]/60 text-sm md:text-base leading-8 max-w-2xl"
            style={{
              textAlign,
              marginRight: ar ? "0" : "auto",
              marginLeft: ar ? "auto" : "0",
            }}
          >
            {c.highlightsDesc}
          </p>
        </div>

        <div className="palm-highlights-grid relative z-10">
          <div className="palm-highlight-card">
            <img
              src={palm9}
              alt="Palm 2 architectural details"
              loading="lazy"
            />

            <div className="palm-highlight-overlay" />

            <div className="palm-highlight-number">01</div>

            <div
              className="palm-highlight-caption"
              style={{ textAlign }}
            >
              {c.highlight1}
            </div>
          </div>

          <div className="palm-highlight-card">
            <img
              src={palm10}
              alt="Palm 2 project view"
              loading="lazy"
            />

            <div className="palm-highlight-overlay" />

            <div className="palm-highlight-number">02</div>

            <div
              className="palm-highlight-caption"
              style={{ textAlign }}
            >
              {c.highlight2}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}

      <section
        className="px-4 md:px-24 pb-12 md:pb-28"
        style={{ direction: dir }}
      >
        <div className="max-w-6xl mx-auto trust-section shadow-xl">
          {/* DARK SIDE */}

          <div
            className="trust-left"
            style={{ order: ar ? 1 : 2 }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle,rgba(184,149,82,.10) 0%,transparent 70%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 160,
                height: 160,
                borderRadius: "50%",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle,rgba(184,149,82,.06) 0%,transparent 70%)",
              }}
            />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#B89552",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />

              <span
                style={{
                  fontSize: "12px",
                  color: "#D7BC83",
                  letterSpacing: "1.5px",
                }}
              >
                {ar ? "ثقة ممتدة" : "Trusted Since"}
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 700,
                color: "#F8F6F1",
                lineHeight: 1.4,
                marginBottom: "6px",
                textAlign: ar ? "right" : "left",
              }}
            >
              {ar ? "خبرة ممتدة لأكثر من" : "Over"}{" "}
              <span style={{ color: "#D7BC83" }}>
                {ar ? "8 أعوام" : "8 Years"}
              </span>
              {!ar && " of Excellence"}
            </h2>

            <div
              style={{
                width: "40px",
                height: "3px",
                background: "linear-gradient(90deg,#B89552,#D7BC83)",
                borderRadius: "3px",
                marginBottom: "20px",
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            />

            <p
              style={{
                color: "rgba(248,246,241,.62)",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                lineHeight: 2,
                maxWidth: "380px",
                textAlign: ar ? "right" : "left",
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            >
              {ar
                ? "نحن لا نبني وحدات سكنية فحسب — نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
                : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way."}
            </p>

            {/* LOCATION */}

            <div
              style={{
                marginTop: "18px",
                color: "rgba(248,246,241,.75)",
                fontSize: "13px",
                lineHeight: 1.9,
                direction: dir,
                textAlign: ar ? "right" : "left",
                maxWidth: "420px",
                alignSelf: ar ? "flex-end" : "flex-start",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                {ar ? "مقر الشركة:" : "Company Location:"}
              </div>

              <div style={{ lineHeight: 1.8 }}>
                {ar
                  ? "طنطا - شارع توت عنخ آمون من محمد فريد فوق مخبز الزهراء"
                  : "Tanta - Tutankhamun Street, Mohamed Farid, above Al Zahraa Bakery"}
              </div>

              <a
                href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#D7BC83",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "6px",
                  fontWeight: 600,
                }}
              >
                {ar ? "← افتح على الخريطة" : "→ Open in Maps"}
              </a>
            </div>

            {/* SOCIAL */}

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "rgba(248,246,241,.75)",
                fontSize: "13px",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "12px" }}>
                {ar ? "تابعنا على السوشيال ميديا:" : "Follow us:"}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://www.facebook.com/share/1XgDRDMitV/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#D7BC83",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#D7BC83">
                    <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z" />
                  </svg>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#D7BC83",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#D7BC83">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 1114.5 12 2.5 2.5 0 0112 9.5zM17.8 6.2a1 1 0 11-1 1 1 0 011-1z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* STATS */}

          <div
            className="trust-right"
            style={{
              order: ar ? 2 : 1,
              textAlign: ar ? "right" : "left",
            }}
          >
            {[
              {
                num: "8+",
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
                style={{ textAlign: ar ? "right" : "left" }}
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

      {/* ================= BACK ================= */}

      <div className="text-center py-10 md:py-16">
        <a href="/#projects" className="back-btn">
          {c.backBtn}
        </a>
      </div>
    </div>
  );
}

export default ProjectPalm2Page;
