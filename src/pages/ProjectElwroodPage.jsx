import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Component, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

import werood1 from "../assets/werood1.jpeg";
import werood2 from "../assets/werood2.jpeg";
import werood3 from "../assets/werood3.jpeg";
import werood4 from "../assets/werood4.jpeg";
import videoFile from "../assets/werood.mp4";
import brochureFile from "../assets/brochure_wrood.pdf";

const WHATSAPP_NUMBER = "201039207908";

// الصورة اللي بتظهر فوق بعرض الشاشة
const COVER_IMAGE = werood1;

// صور تبويب (3D) = باقي صور المشروع. ضيفي هنا أي صور تانية
const GALLERY = [
  { src: werood2, alt: "Dar Elwrood 2" },
  { src: werood3, alt: "Dar Elwrood 3" },
  { src: werood4, alt: "Dar Elwrood 4" },
];

// لوكيشن المشروع على جوجل ماب
const MAP_LINK =
  "https://www.google.com/maps?q=30.809358596801758,31.007654190063477&z=17&hl=en";

const PROJECT_OPTIONS = ["Dar Elwrood", "Dar Damac", "Dar Landmark", "Palm 2"];

// المساحات (م²) لكل مشروع. لو المصفوفة فاضية اختيار المساحة بيختفي
const AREAS = {
  "Dar Elwrood": [122, 155, 174, 203],
  "Dar Damac": [],
  "Dar Landmark": [],
  "Palm 2": [101, 105, 114, 115, 118, 130, 131, 134, 135, 136, 138, 141, 155],
};

/* حماية: لو تبويب حصله error الصفحة كلها متبيضش */
class TabBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Tab error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="elwrood-tab-error" role="alert">
          <p style={{ margin: 0 }}>
            {this.props.ar
              ? "حصل خطأ في عرض هذا التبويب"
              : "Something went wrong showing this tab"}
          </p>
          <code>{String(this.state.error?.message || this.state.error)}</code>
        </div>
      );
    }
    return this.props.children;
  }
}

/* عارض الملفات: بيعرض PDF أو صورة حسب نوع الملف */
function FileViewer({ src, title, ar }) {
  const isPdf = /\.pdf($|[?#])/i.test(String(src));

  const L = ar
    ? {
        open: "فتح في نافذة جديدة",
        download: "تحميل الملف",
        note: "لمشاهدة الملف كاملاً على الموبايل اضغط على «فتح في نافذة جديدة»",
      }
    : {
        open: "Open in new tab",
        download: "Download",
        note: "To view the full file on mobile, tap “Open in new tab”",
      };

  return (
    <div className="elwrood-file">
      <div className="elwrood-file-bar">
        <span className="elwrood-file-title">{title}</span>

        <div className="elwrood-file-actions">
          <a
            className="elwrood-file-btn"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {L.open}
          </a>
          <a className="elwrood-file-btn gold" href={src} download>
            {L.download}
          </a>
        </div>
      </div>

      {isPdf ? (
        <>
          <iframe
            className="elwrood-file-frame"
            src={`${src}#view=FitH`}
            title={title}
          />
          <div className="elwrood-file-mobile">
            <span className="elwrood-file-badge">PDF</span>
            <p style={{ margin: 0 }}>{L.note}</p>
          </div>
        </>
      ) : (
        <a href={src} target="_blank" rel="noopener noreferrer">
          <img className="elwrood-file-img" src={src} alt={title} />
        </a>
      )}
    </div>
  );
}

function ProjectElwroodPage() {
  const { lang, t } = useLanguage();

  const ar = lang === "ar";
  const dir = ar ? "rtl" : "ltr";
  const textAlign = ar ? "right" : "left";

  const [activeTab, setActiveTab] = useState("details");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Elwrood",
    area: "",
  });
  const [error, setError] = useState("");

  const tabs = [
    { id: "details", label: ar ? "التفاصيل العامة والموقع" : "General Details & Location" },
    { id: "real", label: ar ? "صور من الواقع" : "Real Photos" },
    { id: "three", label: ar ? "صور (3D)" : "3D Images" },
    { id: "brochure", label: ar ? "البروشور" : "Brochure" },
  ];

  const detailItems = [
    { icon: "⌖", key: "location" },
    { icon: "⌂", key: "towers" },
    { icon: "▦", key: "spaces" },
    { icon: "◇", key: "downPayment" },
    { icon: "◷", key: "installment" },
  ];

  const areaOptions = AREAS[formData.project] || [];

  const homeLabel = t("navbar", "home") || (ar ? "الرئيسية" : "Home");
  const currentProjectsLabel =
    t("projects", "currentTitle") || (ar ? "مشاريعنا الحالية" : "Current Projects");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "project" ? { area: "" } : {}),
    }));

    if (name === "name") setError("");
  };

  const selectTab = (id, e) => {
    setActiveTab(id);
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const openWhatsApp = () => {
    if (!formData.name.trim()) {
      setError(ar ? "من فضلك اكتب الاسم أولاً" : "Please enter your name");
      return;
    }

    setError("");

    const areaText = formData.area
      ? ar
        ? ` (مساحة ${formData.area} م²)`
        : ` (${formData.area} m²)`
      : "";

    const message = ar
      ? `مرحباً، أنا ${formData.name.trim()}، أود الاستفسار عن ${formData.project}${areaText}. برجاء التواصل معي.`
      : `Hello, I'm ${formData.name.trim()}. I'd like to inquire about ${formData.project}${areaText}. Please contact me.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* سلايدر صور 3D: بيتحرك لوحده وهو في تبويبه بس */
  useEffect(() => {
    if (activeTab !== "three" || GALLERY.length < 2) return;

    const timer = setTimeout(() => {
      setGalleryIndex((i) => (i + 1) % GALLERY.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeTab, galleryIndex]);

  return (
    <div className="elwrood-page" style={{ direction: dir }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .elwrood-page {
          --elwrood-bg: #F8F6F1;
          --elwrood-navy: #10243D;
          --elwrood-gold: #B89552;
          --elwrood-light-gold: #D7BC83;
          background: var(--elwrood-bg);
          color: var(--elwrood-navy);
          font-family: ${ar ? "'Alexandria'" : "'DM Sans'"}, sans-serif;
          overflow: hidden;
        }

        .elwrood-page * { box-sizing: border-box; }
        .elwrood-page a { -webkit-tap-highlight-color: transparent; }
        .elwrood-page button,
        .elwrood-page input,
        .elwrood-page select { font: inherit; }

        .elwrood-page .gold-text {
          background: linear-gradient(135deg, #9B773D, #D7BC83, #B89552);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes elwroodFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes elwroodPulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: .35; }
        }
        @keyframes elwroodCoverZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
        @keyframes elwroodGalleryReveal {
          from { opacity: 0; transform: scale(1.045); filter: blur(5px); }
          to   { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        /* ═════════ BREADCRUMB ═════════ */
        .elwrood-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 94px 6% 16px;
          font-size: 13px;
          font-weight: 500;
        }
        .elwrood-breadcrumb a {
          color: rgba(16,36,61,.6);
          text-decoration: none;
          transition: color .25s ease;
        }
        .elwrood-breadcrumb a:hover { color: var(--elwrood-gold); }
        .elwrood-bc-sep {
          color: var(--elwrood-gold);
          font-size: 16px;
          line-height: 1;
        }
        .elwrood-breadcrumb [aria-current="page"] {
          color: var(--elwrood-navy);
          font-weight: 700;
        }

        /* ═════════ COVER (full width) ═════════ */
        .elwrood-cover {
          position: relative;
          width: 100%;
          height: clamp(280px, 60vh, 640px);
          overflow: hidden;
          background: #e9e2d6;
          isolation: isolate;
        }
        .elwrood-cover img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: elwroodCoverZoom 12s ease-out both;
        }
        .elwrood-cover::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(16,36,61,.08), transparent 35%, rgba(16,36,61,.45));
        }
        .elwrood-cover-frame {
          position: absolute;
          inset: 16px;
          z-index: 2;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 6px;
          pointer-events: none;
        }
        .elwrood-cover-tag {
          position: absolute;
          z-index: 3;
          bottom: 34px;
          inset-inline-start: 36px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
        }
        .elwrood-cover-tag::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--elwrood-light-gold);
        }
        .elwrood-cover-line {
          position: absolute;
          z-index: 3;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--elwrood-gold), var(--elwrood-light-gold), var(--elwrood-gold), transparent);
        }

        /* ═════════ OVERVIEW ═════════ */
        .elwrood-overview {
          max-width: 980px;
          margin: 0 auto;
          padding: 56px 6% 36px;
          animation: elwroodFadeUp .9s ease both;
        }
        .elwrood-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--elwrood-gold);
          margin-bottom: 18px;
        }
        .elwrood-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--elwrood-gold);
        }
        .elwrood-hero-title {
          font-size: clamp(34px, 8vw, 58px);
          line-height: 1.45;
          font-weight: 800;
          letter-spacing: -.8px;
          margin: 0;
          color: var(--elwrood-navy);
          overflow-wrap: anywhere;
        }
        .elwrood-title-line {
          width: 70px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--elwrood-gold), var(--elwrood-light-gold));
          margin: 24px 0;
        }
        .elwrood-hero-description {
          font-size: 15px;
          line-height: 2.3;
          color: rgba(16,36,61,.72);
          text-align: justify;
          margin: 0;
        }
        .elwrood-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border: 1px solid rgba(184,149,82,.25);
          background: rgba(255,255,255,.8);
          border-radius: 50px;
          margin-top: 28px;
          color: var(--elwrood-navy);
          font-size: 12px;
          font-weight: 600;
          transition: all .3s ease;
        }
        .elwrood-hero-badge:hover {
          background: #fff;
          box-shadow: 0 8px 25px rgba(184,149,82,.12);
          transform: translateY(-3px);
        }
        .elwrood-badge-dot {
          width: 7px;
          height: 7px;
          background: var(--elwrood-gold);
          border-radius: 50%;
          animation: elwroodPulse 2s infinite;
        }

        /* ═════════ TABS ═════════ */
        .elwrood-tabs-section { padding: 10px 6% 0; }

        .elwrood-tabs {
          display: flex;
          max-width: 1250px;
          margin: 0 auto;
          overflow-x: auto;
          border-bottom: 1px solid rgba(184,149,82,.28);
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .elwrood-tabs::-webkit-scrollbar { display: none; }

        .elwrood-tab {
          position: relative;
          flex: 0 0 auto;
          padding: 16px 24px;
          background: none;
          border: 0;
          cursor: pointer;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 700;
          color: rgba(16,36,61,.55);
          transition: color .3s ease;
        }
        .elwrood-tab:first-child { margin-inline-start: auto; }
        .elwrood-tab:last-child  { margin-inline-end: auto; }
        .elwrood-tab::after {
          content: "";
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: -1px;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(90deg, var(--elwrood-gold), var(--elwrood-light-gold));
          transform: scaleX(0);
          transition: transform .35s ease;
        }
        .elwrood-tab:hover { color: var(--elwrood-gold); }
        .elwrood-tab.active { color: var(--elwrood-navy); }
        .elwrood-tab.active::after { transform: scaleX(1); }

        .elwrood-panel {
          max-width: 1250px;
          margin: 40px auto 0;
        }
        .elwrood-panel-inner {
          animation: elwroodFadeUp .6s ease both;
        }
        .elwrood-tab-error {
          padding: 40px 20px;
          text-align: center;
          color: #c0392b;
          font-size: 14px;
          line-height: 2;
          word-break: break-word;
        }
        .elwrood-tab-error code {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          color: rgba(16,36,61,.6);
          direction: ltr;
        }
        .elwrood-empty {
          padding: 40px 0;
          text-align: center;
          color: rgba(16,36,61,.6);
        }

        /* ═════════ CARD ═════════ */
        .elwrood-card {
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(184,149,82,.18);
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 15px 45px rgba(16,36,61,.055), 0 2px 8px rgba(184,149,82,.03);
          transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
          min-width: 0;
        }
        .elwrood-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 60px rgba(16,36,61,.09);
          border-color: rgba(184,149,82,.35);
        }
        .elwrood-card-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--elwrood-navy);
          margin: 0;
          line-height: 1.6;
        }
        .elwrood-card-line {
          width: 45px;
          height: 3px;
          background: linear-gradient(90deg, var(--elwrood-gold), var(--elwrood-light-gold));
          border-radius: 10px;
          margin: 18px 0 28px;
        }

        /* DETAILS */
        .elwrood-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .elwrood-detail-grid .elwrood-detail-item:last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }
        .elwrood-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 15px;
          background: rgba(248,246,241,.7);
          border: 1px solid rgba(184,149,82,.08);
          border-radius: 12px;
          transition: background .3s ease, transform .3s ease, border-color .3s ease;
        }
        .elwrood-detail-item:hover {
          background: #fff;
          transform: translateX(${ar ? "-4px" : "4px"});
          border-color: rgba(184,149,82,.25);
        }
        .elwrood-detail-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(184,149,82,.15), rgba(215,188,131,.08));
          color: var(--elwrood-gold);
          font-size: 16px;
        }
        .elwrood-detail-text {
          color: rgba(16,36,61,.75);
          font-size: 14px;
          line-height: 2;
          text-align: justify;
          white-space: pre-line;
        }
        .elwrood-map-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          padding: 12px 20px;
          border: 1px solid rgba(184,149,82,.35);
          border-radius: 50px;
          background: #fff;
          color: var(--elwrood-navy);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: all .3s ease;
        }
        .elwrood-map-link:hover {
          border-color: var(--elwrood-gold);
          color: var(--elwrood-gold);
          transform: translateY(-2px);
        }

        /* VIDEO */
        .elwrood-video-wrap {
          max-width: 1050px;
          margin: 0 auto;
        }
        .elwrood-video-frame {
          padding: 10px;
          background: #fff;
          border: 1px solid rgba(184,149,82,.25);
          border-radius: 20px;
          box-shadow: 0 30px 70px rgba(16,36,61,.12);
        }
        .elwrood-video-frame video {
          display: block;
          width: 100%;
          max-height: 650px;
          border-radius: 13px;
          background: #10243D;
        }
        .elwrood-video-fallback {
          padding: 70px 20px;
          text-align: center;
          color: rgba(16,36,61,.65);
          font-size: 14px;
          line-height: 2;
        }

        /* GALLERY (3D) */
        .elwrood-gallery {
          max-width: 1000px;
          margin: 0 auto;
        }
        .elwrood-gallery-main {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 20px;
          background: #e9e2d6;
          box-shadow: 0 25px 65px rgba(16,36,61,.14), 0 0 0 1px rgba(184,149,82,.2);
          isolation: isolate;
        }
        .elwrood-gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: elwroodGalleryReveal .85s cubic-bezier(.2,.8,.2,1) both;
        }
        .elwrood-gallery-main::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(16,36,61,.35));
          pointer-events: none;
        }
        .elwrood-gallery-main-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 13px;
          z-index: 2;
          pointer-events: none;
          transition: inset .4s ease;
        }
        .elwrood-gallery-main:hover .elwrood-gallery-main-frame { inset: 18px; }
        .elwrood-gallery-counter {
          position: absolute;
          z-index: 3;
          bottom: 25px;
          inset-inline-start: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;
          direction: ltr;
        }
        .elwrood-gallery-counter::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--elwrood-light-gold);
        }
        .elwrood-gallery-thumbnails {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 17px;
        }
        .elwrood-gallery-thumb {
          position: relative;
          width: 110px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          padding: 0;
          border: 2px solid transparent;
          background: #e9e2d6;
          cursor: pointer;
          opacity: .65;
          transition: all .35s ease;
        }
        .elwrood-gallery-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }
        .elwrood-gallery-thumb:hover {
          opacity: 1;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(16,36,61,.15);
        }
        .elwrood-gallery-thumb:hover img { transform: scale(1.08); }
        .elwrood-gallery-thumb.active {
          opacity: 1;
          border-color: var(--elwrood-gold);
          box-shadow: 0 8px 25px rgba(184,149,82,.2);
          transform: translateY(-3px);
        }

        /* FILE VIEWER (brochure) */
        .elwrood-file {
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(184,149,82,.22);
          border-radius: 20px;
          padding: 14px;
          box-shadow: 0 25px 60px rgba(16,36,61,.1);
        }
        .elwrood-file-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 6px 8px 16px;
        }
        .elwrood-file-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--elwrood-navy);
        }
        .elwrood-file-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .elwrood-file-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 9px;
          border: 1px solid rgba(184,149,82,.35);
          background: #fff;
          color: var(--elwrood-navy);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: all .3s ease;
        }
        .elwrood-file-btn:hover {
          border-color: var(--elwrood-gold);
          color: var(--elwrood-gold);
          transform: translateY(-2px);
        }
        .elwrood-file-btn.gold {
          background: var(--elwrood-navy);
          border-color: var(--elwrood-navy);
          color: #fff;
        }
        .elwrood-file-btn.gold:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          border-color: transparent;
          color: var(--elwrood-navy);
        }
        .elwrood-file-frame {
          display: block;
          width: 100%;
          height: clamp(520px, 78vh, 900px);
          border: 0;
          border-radius: 12px;
          background: #fff;
        }
        .elwrood-file-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
        }
        .elwrood-file-mobile {
          display: none;
          text-align: center;
          padding: 24px 12px 16px;
          color: rgba(16,36,61,.65);
          font-size: 13px;
          line-height: 2;
        }
        .elwrood-file-badge {
          display: inline-block;
          padding: 6px 14px;
          margin-bottom: 8px;
          border-radius: 8px;
          background: rgba(184,149,82,.14);
          color: var(--elwrood-gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        /* ═════════ BOOKING ═════════ */
        .elwrood-booking { padding: 70px 6% 90px; }
        .elwrood-section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .elwrood-section-kicker {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--elwrood-gold);
          margin-bottom: 14px;
        }
        .elwrood-section-title {
          font-size: clamp(25px, 4vw, 40px);
          font-weight: 800;
          line-height: 1.5;
          color: var(--elwrood-navy);
          margin: 0;
        }
        .elwrood-section-line {
          width: 55px;
          height: 3px;
          margin: 20px auto 0;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--elwrood-gold), var(--elwrood-light-gold));
        }
        .elwrood-booking-card {
          max-width: 680px;
          margin: 0 auto;
        }
        .elwrood-booking-card:hover { transform: none; }

        .elwrood-input {
          display: block;
          width: 100%;
          padding: 15px 17px;
          margin-bottom: 17px;
          border-radius: 11px;
          border: 1px solid rgba(184,149,82,.22);
          background: rgba(248,246,241,.6);
          color: var(--elwrood-navy);
          outline: none;
          transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .elwrood-input:focus {
          background: #fff;
          border-color: var(--elwrood-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.09);
        }
        .elwrood-input::placeholder { color: rgba(16,36,61,.4); }

        .elwrood-select-wrap {
          position: relative;
          margin-bottom: 17px;
        }
        .elwrood-select {
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          background: rgba(248,246,241,.6);
          border: 1px solid rgba(184,149,82,.22);
          border-radius: 11px;
          padding: 15px 17px;
          padding-inline-end: 44px;
          color: var(--elwrood-navy);
          cursor: pointer;
          outline: none;
          transition: all .3s ease;
        }
        .elwrood-select:focus {
          background: #fff;
          border-color: var(--elwrood-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.09);
        }
        .elwrood-select-arrow {
          position: absolute;
          top: 50%;
          ${ar ? "left: 18px;" : "right: 18px;"}
          transform: translateY(-50%);
          color: var(--elwrood-gold);
          pointer-events: none;
          font-size: 12px;
        }
        .elwrood-error {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: -8px 0 15px;
          color: #c0392b;
          font-size: 12px;
        }
        .elwrood-wa-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 6px;
          padding: 16px;
          background: var(--elwrood-navy);
          color: #fff;
          border: 1px solid transparent;
          border-radius: 11px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all .35s ease;
        }
        .elwrood-wa-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
          transition: left .6s ease;
        }
        .elwrood-wa-btn:hover::before { left: 100%; }
        .elwrood-wa-btn:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          color: var(--elwrood-navy);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(184,149,82,.25);
        }

        /* ═════════ TRUST ═════════ */
        .elwrood-trust-section { padding: 20px 6% 100px; }
        .elwrood-trust-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(16,36,61,.12);
        }
        .elwrood-trust-left {
          position: relative;
          overflow: hidden;
          padding: 40px 25px;
          background: var(--elwrood-navy);
          color: #F8F6F1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .elwrood-trust-left::before {
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
        .elwrood-trust-left::after {
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
        .elwrood-trust-content { position: relative; z-index: 1; }
        .elwrood-trust-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--elwrood-light-gold);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
        }
        .elwrood-trust-dot {
          width: 7px;
          height: 7px;
          background: var(--elwrood-light-gold);
          border-radius: 50%;
          animation: elwroodPulse 2s infinite;
        }
        .elwrood-trust-title {
          font-size: clamp(25px, 4vw, 39px);
          font-weight: 800;
          line-height: 1.6;
          margin: 0;
          color: #F8F6F1;
        }
        .elwrood-trust-title span { color: var(--elwrood-light-gold); }
        .elwrood-trust-description {
          max-width: 500px;
          margin-top: 20px;
          font-size: 14px;
          line-height: 2.3;
          color: rgba(248,246,241,.65);
          text-align: justify;
        }
        .elwrood-trust-location {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid rgba(215,188,131,.15);
          color: rgba(248,246,241,.75);
          font-size: 13px;
          line-height: 2;
        }
        .elwrood-trust-location a {
          display: inline-block;
          margin-top: 8px;
          color: var(--elwrood-light-gold);
          text-decoration: none;
          transition: color .3s ease;
        }
        .elwrood-trust-location a:hover { color: #fff; }
        .elwrood-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }
        .elwrood-social-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 16px;
          border: 1px solid rgba(215,188,131,.2);
          border-radius: 50px;
          color: var(--elwrood-light-gold);
          text-decoration: none;
          font-size: 12px;
          transition: all .3s ease;
        }
        .elwrood-social-link:hover {
          background: rgba(215,188,131,.12);
          border-color: var(--elwrood-light-gold);
          transform: translateY(-3px);
        }
        .elwrood-trust-right {
          background: #fff;
          padding: 35px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .elwrood-stat {
          display: flex;
          flex-direction: column;
          padding: 22px 0;
          border-bottom: 1px solid rgba(184,149,82,.13);
          transition: padding .3s ease;
        }
        .elwrood-stat:last-child { border-bottom: none; }
        .elwrood-stat:hover { padding-inline: 10px; }
        .elwrood-stat-number {
          font-size: clamp(34px, 5vw, 47px);
          font-weight: 800;
          line-height: 1.3;
          background: linear-gradient(135deg, #9B773D, #D7BC83, #B89552);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .elwrood-stat-label {
          margin-top: 5px;
          color: rgba(16,36,61,.58);
          font-size: 13px;
          line-height: 2;
        }

        /* BACK */
        .elwrood-back-section {
          padding: 0 6% 100px;
          text-align: center;
        }
        .elwrood-back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 35px;
          background: var(--elwrood-navy);
          color: #fff;
          text-decoration: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid transparent;
          transition: all .35s ease;
        }
        .elwrood-back-btn:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          color: var(--elwrood-navy);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(184,149,82,.22);
        }

        /* ═════════ TABLET ═════════ */
        @media (min-width: 600px) {
          .elwrood-card { padding: 35px; }
          .elwrood-gallery-main { height: 420px; }
          .elwrood-trust-left,
          .elwrood-trust-right { padding: 45px 35px; }
        }

        /* ═════════ DESKTOP ═════════ */
        @media (min-width: 900px) {
          .elwrood-overview { padding: 70px 6% 44px; }
          .elwrood-hero-description { font-size: 16px; }

          .elwrood-detail-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .elwrood-gallery-main { height: 560px; }
          .elwrood-gallery-thumb { width: 150px; height: 105px; }

          .elwrood-booking { padding: 90px 8% 120px; }

          .elwrood-trust-section { padding: 20px 8% 130px; }
          .elwrood-trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .elwrood-trust-left,
          .elwrood-trust-right { padding: 60px 50px; }

          .elwrood-back-section { padding-bottom: 130px; }
        }

        /* ═════════ MOBILE ═════════ */
        @media (max-width: 767px) {
          .elwrood-file-frame { display: none; }
          .elwrood-file-mobile { display: block; }
          .elwrood-file-actions { width: 100%; }
          .elwrood-file-btn { flex: 1; }
        }

        @media (max-width: 600px) {
          .elwrood-breadcrumb { padding-top: 80px; font-size: 12px; }
          .elwrood-cover-frame { inset: 10px; }
          .elwrood-cover-tag { bottom: 24px; inset-inline-start: 24px; }
          .elwrood-tab { padding: 14px 16px; font-size: 13px; }
        }

        @media (max-width: 380px) {
          .elwrood-hero-title { font-size: 29px; }
          .elwrood-hero-description { font-size: 13px; }
          .elwrood-card { padding: 22px 17px; }
          .elwrood-card-title { font-size: 21px; }
          .elwrood-gallery-main { height: 240px; }
          .elwrood-gallery-thumb { width: 80px; height: 60px; }
          .elwrood-trust-left,
          .elwrood-trust-right { padding: 30px 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .elwrood-page *,
          .elwrood-page *::before,
          .elwrood-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <Navbar />

      {/* ═════════ BREADCRUMB ═════════ */}
      <nav className="elwrood-breadcrumb" aria-label="breadcrumb">
        <Link to="/">{homeLabel}</Link>
        <span className="elwrood-bc-sep" aria-hidden="true">
          {ar ? "‹" : "›"}
        </span>
        <a href="/#projects">{currentProjectsLabel}</a>
        <span className="elwrood-bc-sep" aria-hidden="true">
          {ar ? "‹" : "›"}
        </span>
        <span aria-current="page">
          {t("elwrood", "title1")} {t("elwrood", "title2")}
        </span>
      </nav>

      {/* ═════════ COVER ═════════ */}
      <section className="elwrood-cover">
        <img src={COVER_IMAGE} alt="Dar Elwrood" />
        <div className="elwrood-cover-frame" />
        <span className="elwrood-cover-tag">DAR DEVELOPMENTS</span>
        <div className="elwrood-cover-line" />
      </section>

      {/* ═════════ OVERVIEW ═════════ */}
      <section className="elwrood-overview" style={{ textAlign }}>
        <span className="elwrood-eyebrow">
          {ar ? "مشروعات دار" : "DAR PROJECTS"}
        </span>

        <h1 className="elwrood-hero-title">
          <span className="gold-text">{t("elwrood", "title1")}</span>{" "}
          {t("elwrood", "title2")}
        </h1>

        <div className="elwrood-title-line" />

        <p className="elwrood-hero-description">{t("elwrood", "desc")}</p>

        <div className="elwrood-hero-badge">
          <span className="elwrood-badge-dot" />
          {ar
            ? "تفاصيل مدروسة.. وحياة تستحقها"
            : "Thoughtful Details. Better Living."}
        </div>
      </section>

      {/* ═════════ TABS ═════════ */}
      <section className="elwrood-tabs-section">
        <div className="elwrood-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`elwrood-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={(e) => selectTab(tab.id, e)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="elwrood-panel" role="tabpanel">
          <TabBoundary key={activeTab} ar={ar}>
            <div className="elwrood-panel-inner">
              {/* التفاصيل العامة والموقع */}
              {activeTab === "details" && (
                <div className="elwrood-card" style={{ textAlign, direction: dir }}>
                  <h2 className="elwrood-card-title">{t("elwrood", "detailsTitle")}</h2>
                  <div className="elwrood-card-line" />

                  <div className="elwrood-detail-grid">
                    {detailItems.map((item) => (
                      <div className="elwrood-detail-item" key={item.key}>
                        <div className="elwrood-detail-icon">{item.icon}</div>
                        <div className="elwrood-detail-text">{t("elwrood", item.key)}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    className="elwrood-map-link"
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{ar ? "←" : "→"}</span>
                    {ar ? "عرض الموقع على الخريطة" : "View on Google Maps"}
                  </a>
                </div>
              )}

              {/* صور من الواقع = الفيديو */}
              {activeTab === "real" && (
                <div className="elwrood-video-wrap">
                  <div className="elwrood-video-frame">
                    {videoFile && !videoError ? (
                      <video
                        src={videoFile}
                        controls
                        muted
                        playsInline
                        autoPlay
                        preload="metadata"
                        onError={() => setVideoError(true)}
                      />
                    ) : (
                      <div className="elwrood-video-fallback">
                        {ar
                          ? "تعذر تشغيل الفيديو حالياً"
                          : "The video can't be played right now"}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* صور 3D = باقي صور المشروع */}
              {activeTab === "three" && (
                <div className="elwrood-gallery">
                  <div className="elwrood-gallery-main">
                    <img
                      key={galleryIndex}
                      src={GALLERY[galleryIndex].src}
                      alt={GALLERY[galleryIndex].alt}
                    />
                    <div className="elwrood-gallery-main-frame" />
                    <div className="elwrood-gallery-counter">
                      {String(galleryIndex + 1).padStart(2, "0")} /{" "}
                      {String(GALLERY.length).padStart(2, "0")}
                    </div>
                  </div>

                  {GALLERY.length > 1 && (
                    <div className="elwrood-gallery-thumbnails">
                      {GALLERY.map((image, index) => (
                        <button
                          type="button"
                          key={image.alt}
                          className={`elwrood-gallery-thumb ${
                            galleryIndex === index ? "active" : ""
                          }`}
                          onClick={() => setGalleryIndex(index)}
                          aria-label={`Show image ${index + 1}`}
                          aria-pressed={galleryIndex === index}
                        >
                          <img src={image.src} alt={image.alt} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* البروشور */}
              {activeTab === "brochure" &&
                (brochureFile ? (
                  <FileViewer
                    src={brochureFile}
                    title={ar ? "البروشور" : "Brochure"}
                    ar={ar}
                  />
                ) : (
                  <p className="elwrood-empty">
                    {ar ? "الملف غير متاح حالياً" : "File not available yet"}
                  </p>
                ))}
            </div>
          </TabBoundary>
        </div>
      </section>

      {/* ═════════ BOOKING FORM ═════════ */}
      <section className="elwrood-booking" id="booking">
        <div className="elwrood-section-header">
          <span className="elwrood-section-kicker">
            {ar ? "احجز وحدتك" : "RESERVE YOUR UNIT"}
          </span>
          <h2 className="elwrood-section-title">{t("elwrood", "formTitle")}</h2>
          <div className="elwrood-section-line" />
        </div>

        <div className="elwrood-card elwrood-booking-card" style={{ direction: dir }}>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t("elwrood", "namePlaceholder")}
            className="elwrood-input"
            value={formData.name}
            onChange={handleChange}
            style={{ direction: dir }}
          />

          {error && (
            <div className="elwrood-error">
              <span>⚠</span>
              {error}
            </div>
          )}

          <div className="elwrood-select-wrap">
            <select
              name="project"
              className="elwrood-select"
              value={formData.project}
              onChange={handleChange}
              style={{ direction: dir }}
            >
              {PROJECT_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <span className="elwrood-select-arrow">▼</span>
          </div>

          {areaOptions.length > 0 && (
            <div className="elwrood-select-wrap">
              <select
                name="area"
                className="elwrood-select"
                value={formData.area}
                onChange={handleChange}
                style={{ direction: dir }}
              >
                <option value="">{ar ? "اختر المساحة" : "Select area"}</option>
                {areaOptions.map((a) => (
                  <option key={a} value={a}>
                    {ar ? `${a} م²` : `${a} m²`}
                  </option>
                ))}
              </select>
              <span className="elwrood-select-arrow">▼</span>
            </div>
          )}

          <button type="button" className="elwrood-wa-btn" onClick={openWhatsApp}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("elwrood", "whatsappBtn")}
          </button>
        </div>
      </section>

      {/* ═════════ TRUST ═════════ */}
      <section className="elwrood-trust-section">
        <div className="elwrood-trust-grid">
          {/* LEFT */}
          <div
            className="elwrood-trust-left"
            style={{ order: ar ? 1 : 2, textAlign, direction: dir }}
          >
            <div className="elwrood-trust-content">
              <div className="elwrood-trust-kicker">
                <span className="elwrood-trust-dot" />
                {ar ? "ثقة ممتدة" : "TRUSTED SINCE"}
              </div>

              <h2 className="elwrood-trust-title">
                {ar ? "خبرة ممتدة لأكثر من" : "Over"}{" "}
                <span>{ar ? "8 أعوام" : "8 Years"}</span>
                {ar ? "" : " of Excellence"}
              </h2>

              <div className="elwrood-card-line" />

              <p className="elwrood-trust-description">
                {ar
                  ? "نحن لا نبني وحدات سكنية فحسب — نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
                  : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way."}
              </p>

              <div className="elwrood-trust-location">
                <strong>{ar ? "مقر الشركة:" : "Company Location:"}</strong>

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
                  {ar ? "← افتح على الخريطة" : "→ Open in Maps"}
                </a>
              </div>

              <div className="elwrood-socials">
                <a
                  href="https://www.facebook.com/share/1XgDRDMitV/"
                  target="_blank"
                  rel="noreferrer"
                  className="elwrood-social-link"
                >
                  <span>f</span>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                  target="_blank"
                  rel="noreferrer"
                  className="elwrood-social-link"
                >
                  <span>◎</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="elwrood-trust-right"
            style={{ order: ar ? 2 : 1, direction: dir, textAlign }}
          >
            {[
              { num: "8+", ar: "سنوات خبرة في السوق العقاري", en: "Years in Real Estate" },
              { num: "+100", ar: "وحدة سكنية تم تسليمها بنجاح", en: "Units Successfully Delivered" },
              { num: "3", ar: "مشاريع نشطة حالياً في طنطا", en: "Active Projects in Tanta" },
              { num: "98%", ar: "نسبة رضا العملاء عن خدماتنا", en: "Client Satisfaction Rate" },
            ].map((stat, index) => (
              <div className="elwrood-stat" key={index}>
                <span className="elwrood-stat-number">{stat.num}</span>
                <span className="elwrood-stat-label">{ar ? stat.ar : stat.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ BACK ═════════ */}
      <section className="elwrood-back-section">
        <a href="/#projects" className="elwrood-back-btn">
          <span>{t("elwrood", "backBtn")}</span>
          <span>{ar ? "←" : "→"}</span>
        </a>
      </section>
    </div>
  );
}

export default ProjectElwroodPage;