import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Component, useState, useEffect } from "react";
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
import plan1 from "../assets/pp1.jpeg";
import plan2 from "../assets/pp2.jpeg";
import brochureFile from "../assets/brochure_palm.pdf";

const WHATSAPP_NUMBER = "201039207908";

// الصورة اللي بتظهر فوق بعرض الشاشة
const COVER_IMAGE = palm1;

// صور تبويب (3D) = باقي صور المشروع. ضيفي هنا أي صور تانية
const GALLERY = [
  { src: palm2, alt: "Palm 2 - 2" },
  { src: palm3, alt: "Palm 2 - 3" },
  { src: palm4, alt: "Palm 2 - 4" },
  { src: palm5, alt: "Palm 2 - 5" },
  { src: palm6, alt: "Palm 2 - 6" },
  { src: palm7, alt: "Palm 2 - 7" },
  { src: palm8, alt: "Palm 2 - 8" },
  { src: palm9, alt: "Palm 2 - 9" },
  { src: palm10, alt: "Palm 2 - 10" },
];

// صور البلانات
const PLANS = [plan1, plan2];

// لوكيشن المشروع على جوجل ماب
const MAP_LINK = "https://maps.app.goo.gl/jrCCR6BjsDAi9TJw7?g_st=ac";

const PROJECT_OPTIONS = ["Palm 2", "Dar Damac", "Dar Landmark", "Dar Elwrood"];

// المساحات (م²) لكل مشروع. لو المصفوفة فاضية اختيار المساحة بيختفي
const AREAS = {
  "Palm 2": [101, 105, 114, 115, 118, 130, 131, 134, 135, 136, 138, 141, 155],
  "Dar Damac": [],
  "Dar Landmark": [],
  "Dar Elwrood": [122, 155, 174, 203],
};

// نصوص المشروع
const DETAILS = {
  ar: {
    title1: "بالم",
    title2: "المرحلة الثانية",
    desc: "بالم 2 هو استكمال للمرحلة الأولى من مشروع بالم، أكبر كمباوند سكني في كورنيش بلازا بطنطا، والذي يضم إجمالي 8 أبراج سكنية. وتضم المرحلة الثانية المطروحة حاليًا 4 أبراج سكنية، بمساحات متنوعة وأنظمة سداد مرنة، لتوفر فرصًا مميزة للسكن والاستثمار العقاري.",
    detailsTitle: "تفاصيل المشروع",
    location: "الموقع: كورنيش بلازا، تقاطع شارع أحمد الخشاب، طنطا، مصر.",
    mapsLabel: "عرض الموقع على الخريطة",
    towersTitle: "الأبراج السكنية ومساحات الوحدات:",
    towers: `البرج الأول: 131م² | 138م² | 115م² | 134م² | 135م² | 114م²
البرج الثاني: 130م² | 138م² | 115م² | 138م² | 141م² | 114م² | 136م²
البرج الثالث: 101م² | 105م²
البرج الرابع: 155م² | 118م²`,
    downPayment: "المقدم: يبدأ من 30%",
    installment: "التقسيط: على 4 سنوات",
    delivery: "الاستلام: يبدأ من سنتين ونصف — على الطوب",
    featuresTitle: "أهم مميزات المشروع:",
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
    backBtn: "العودة للمشاريع",
    badge1: "كمباوند سكني متكامل",
    badge2: "4 أبراج بالمرحلة الثانية",
    teamNote:
      "فريق دار جاهز لمساعدتك في اختيار الوحدة المناسبة والتعرف على أنظمة السداد المتاحة.",
  },
  en: {
    title1: "Palm",
    title2: "Phase Two",
    desc: "Palm 2 is the continuation of the first phase of the Palm project — the largest residential compound in Corniche Plaza, Tanta, comprising a total of 8 residential towers. Phase Two currently offers 4 residential towers with diverse spaces and flexible payment plans, providing outstanding opportunities for housing and real estate investment.",
    detailsTitle: "Project Details",
    location:
      "Location: Corniche Plaza, Ahmed Al-Khashab Street intersection, Tanta, Egypt.",
    mapsLabel: "View on Google Maps",
    towersTitle: "Residential Towers & Unit Spaces:",
    towers: `Tower 1: 131m² | 138m² | 115m² | 134m² | 135m² | 114m²
Tower 2: 130m² | 138m² | 115m² | 138m² | 141m² | 114m² | 136m²
Tower 3: 101m² | 105m²
Tower 4: 155m² | 118m²`,
    downPayment: "Down Payment: Starting from 30%",
    installment: "Installments: Over 4 years",
    delivery: "Delivery: Starting from 2.5 years — Red brick finishing",
    featuresTitle: "Key Project Features:",
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
    backBtn: "Back to Projects",
    badge1: "Integrated Residential Compound",
    badge2: "4 Towers in Phase Two",
    teamNote:
      "Our team is ready to help you find the right unit and explore available payment plans.",
  },
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
        <div className="palm-tab-error" role="alert">
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
    <div className="palm-file">
      <div className="palm-file-bar">
        <span className="palm-file-title">{title}</span>

        <div className="palm-file-actions">
          <a
            className="palm-file-btn"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {L.open}
          </a>
          <a className="palm-file-btn gold" href={src} download>
            {L.download}
          </a>
        </div>
      </div>

      {isPdf ? (
        <>
          <iframe
            className="palm-file-frame"
            src={`${src}#view=FitH`}
            title={title}
          />
          <div className="palm-file-mobile">
            <span className="palm-file-badge">PDF</span>
            <p style={{ margin: 0 }}>{L.note}</p>
          </div>
        </>
      ) : (
        <a href={src} target="_blank" rel="noopener noreferrer">
          <img className="palm-file-img" src={src} alt={title} />
        </a>
      )}
    </div>
  );
}

/* عارض البلانات: شبكة صور، كل صورة بتفتح في نافذة جديدة */
function PlansViewer({ plans, title, ar }) {
  const L = ar
    ? { open: "اضغط على أي بلان لفتحه بحجم كامل", plan: "بلان" }
    : { open: "Tap any plan to open it full size", plan: "Plan" };

  return (
    <div className="palm-file">
      <div className="palm-file-bar">
        <span className="palm-file-title">{title}</span>
        <span className="palm-file-hint">{L.open}</span>
      </div>

      <div className="palm-plans-grid">
        {plans.map((plan, index) => (
          <a
            key={index}
            className="palm-plan-card"
            href={plan}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={plan}
              alt={`Palm 2 ${L.plan} ${index + 1}`}
              loading="lazy"
            />
            <span className="palm-plan-label">
              {L.plan} {index + 1}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ProjectPalm2Page() {
  const { lang, t } = useLanguage();

  const ar = lang === "ar";
  const dir = ar ? "rtl" : "ltr";
  const textAlign = ar ? "right" : "left";
  const c = DETAILS[ar ? "ar" : "en"];

  const [activeTab, setActiveTab] = useState("details");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    project: "Palm 2",
    area: "",
  });
  const [error, setError] = useState("");

  const tabs = [
    { id: "details", label: ar ? "التفاصيل العامة والموقع" : "General Details & Location" },
    { id: "three", label: ar ? "صور (3D)" : "3D Images" },
    { id: "plans", label: ar ? "البلانات" : "Floor Plans" },
    { id: "brochure", label: ar ? "البروشور" : "Brochure" },
  ];

  const detailItems = [
    { icon: "⌖", text: c.location },
    { icon: "◇", text: c.downPayment },
    { icon: "◷", text: c.installment },
    { icon: "◈", text: c.delivery },
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
    <div className="palm-page" style={{ direction: dir }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .palm-page {
          --palm-bg: #F8F6F1;
          --palm-navy: #10243D;
          --palm-gold: #B89552;
          --palm-light-gold: #D7BC83;
          background: var(--palm-bg);
          color: var(--palm-navy);
          font-family: ${ar ? "'Alexandria'" : "'DM Sans'"}, sans-serif;
          overflow: hidden;
        }

        .palm-page * { box-sizing: border-box; }
        .palm-page a { -webkit-tap-highlight-color: transparent; }
        .palm-page button,
        .palm-page input,
        .palm-page select { font: inherit; }

        .palm-page .gold-text {
          background: linear-gradient(135deg, #9B773D, #D7BC83, #B89552);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes palmFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes palmPulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: .35; }
        }
        @keyframes palmCoverZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
        @keyframes palmGalleryReveal {
          from { opacity: 0; transform: scale(1.045); filter: blur(5px); }
          to   { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        /* ═════════ BREADCRUMB ═════════ */
        .palm-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 94px 6% 16px;
          font-size: 13px;
          font-weight: 500;
        }
        .palm-breadcrumb a {
          color: rgba(16,36,61,.6);
          text-decoration: none;
          transition: color .25s ease;
        }
        .palm-breadcrumb a:hover { color: var(--palm-gold); }
        .palm-bc-sep {
          color: var(--palm-gold);
          font-size: 16px;
          line-height: 1;
        }
        .palm-breadcrumb [aria-current="page"] {
          color: var(--palm-navy);
          font-weight: 700;
        }

        /* ═════════ COVER (full width) ═════════ */
        .palm-cover {
          position: relative;
          width: 100%;
          height: clamp(280px, 60vh, 640px);
          overflow: hidden;
          background: #e9e2d6;
          isolation: isolate;
        }
        .palm-cover img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: palmCoverZoom 12s ease-out both;
        }
        .palm-cover::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(16,36,61,.08), transparent 35%, rgba(16,36,61,.45));
        }
        .palm-cover-frame {
          position: absolute;
          inset: 16px;
          z-index: 2;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 6px;
          pointer-events: none;
        }
        .palm-cover-tag {
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
        .palm-cover-tag::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--palm-light-gold);
        }
        .palm-cover-line {
          position: absolute;
          z-index: 3;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--palm-gold), var(--palm-light-gold), var(--palm-gold), transparent);
        }

        /* ═════════ OVERVIEW ═════════ */
        .palm-overview {
          max-width: 980px;
          margin: 0 auto;
          padding: 56px 6% 36px;
          animation: palmFadeUp .9s ease both;
        }
        .palm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--palm-gold);
          margin-bottom: 18px;
        }
        .palm-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--palm-gold);
        }
        .palm-hero-title {
          font-size: clamp(34px, 8vw, 58px);
          line-height: 1.45;
          font-weight: 800;
          letter-spacing: -.8px;
          margin: 0;
          color: var(--palm-navy);
          overflow-wrap: anywhere;
        }
        .palm-title-line {
          width: 70px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--palm-gold), var(--palm-light-gold));
          margin: 24px 0;
        }
        .palm-hero-description {
          font-size: 15px;
          line-height: 2.3;
          color: rgba(16,36,61,.72);
          text-align: justify;
          margin: 0;
        }
        .palm-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .palm-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border: 1px solid rgba(184,149,82,.25);
          background: rgba(255,255,255,.8);
          border-radius: 50px;
          color: var(--palm-navy);
          font-size: 12px;
          font-weight: 600;
          transition: all .3s ease;
        }
        .palm-hero-badge:hover {
          background: #fff;
          box-shadow: 0 8px 25px rgba(184,149,82,.12);
          transform: translateY(-3px);
        }
        .palm-badge-dot {
          width: 7px;
          height: 7px;
          background: var(--palm-gold);
          border-radius: 50%;
          animation: palmPulse 2s infinite;
        }
/* ═════════ LOCATION SECTION ═════════ */
.palm-location-section {
  padding: 30px 6% 55px;
}

.palm-location-card {
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  background: #fff;
  border: 1px solid rgba(184,149,82,.2);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 20px 55px rgba(16,36,61,.07);
}

.palm-location-content {
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.palm-location-kicker {
  color: var(--palm-gold);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.palm-location-title {
  color: var(--palm-navy);
  font-size: clamp(24px, 4vw, 35px);
  font-weight: 800;
  line-height: 1.7;
  margin: 0;
}

.palm-location-description {
  color: rgba(16,36,61,.7);
  font-size: 14px;
  line-height: 2.2;
  margin: 18px 0 25px;
}

.palm-location-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: fit-content;
  padding: 13px 22px;
  border-radius: 9px;
  background: var(--palm-navy);
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  transition: all .3s ease;
}

.palm-location-btn:hover {
  background: linear-gradient(135deg, #B89552, #D7BC83);
  color: var(--palm-navy);
  transform: translateY(-3px);
}

.palm-location-map {
  min-height: 300px;
  background: #e9e2d6;
}

.palm-location-map iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border: 0;
}

@media (min-width: 900px) {
  .palm-location-section {
    padding: 40px 8% 65px;
  }

  .palm-location-card {
    grid-template-columns: .9fr 1.1fr;
  }

  .palm-location-content {
    padding: 55px 45px;
  }

  .palm-location-map {
    min-height: 430px;
  }

  .palm-location-map iframe {
    min-height: 430px;
  }
}
        /* ═════════ TABS ═════════ */
        .palm-tabs-section { padding: 10px 6% 0; }

        .palm-tabs {
          display: flex;
          max-width: 1250px;
          margin: 0 auto;
          overflow-x: auto;
          border-bottom: 1px solid rgba(184,149,82,.28);
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .palm-tabs::-webkit-scrollbar { display: none; }

        .palm-tab {
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
        .palm-tab:first-child { margin-inline-start: auto; }
        .palm-tab:last-child  { margin-inline-end: auto; }
        .palm-tab::after {
          content: "";
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: -1px;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(90deg, var(--palm-gold), var(--palm-light-gold));
          transform: scaleX(0);
          transition: transform .35s ease;
        }
        .palm-tab:hover { color: var(--palm-gold); }
        .palm-tab.active { color: var(--palm-navy); }
        .palm-tab.active::after { transform: scaleX(1); }

        .palm-panel {
          max-width: 1250px;
          margin: 40px auto 0;
        }
        .palm-panel-inner {
          animation: palmFadeUp .6s ease both;
        }
        .palm-tab-error {
          padding: 40px 20px;
          text-align: center;
          color: #c0392b;
          font-size: 14px;
          line-height: 2;
          word-break: break-word;
        }
        .palm-tab-error code {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          color: rgba(16,36,61,.6);
          direction: ltr;
        }
        .palm-empty {
          padding: 40px 0;
          text-align: center;
          color: rgba(16,36,61,.6);
        }

        /* ═════════ CARD ═════════ */
        .palm-card {
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(184,149,82,.18);
          border-radius: 20px;
          padding: 28px 22px;
          box-shadow: 0 15px 45px rgba(16,36,61,.055), 0 2px 8px rgba(184,149,82,.03);
          transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
          min-width: 0;
        }
        .palm-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 60px rgba(16,36,61,.09);
          border-color: rgba(184,149,82,.35);
        }
        .palm-card-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--palm-navy);
          margin: 0;
          line-height: 1.6;
        }
        .palm-card-line {
          width: 45px;
          height: 3px;
          background: linear-gradient(90deg, var(--palm-gold), var(--palm-light-gold));
          border-radius: 10px;
          margin: 18px 0 28px;
        }

        /* DETAILS */
        .palm-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .palm-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 15px;
          background: rgba(248,246,241,.7);
          border: 1px solid rgba(184,149,82,.08);
          border-radius: 12px;
          transition: background .3s ease, transform .3s ease, border-color .3s ease;
        }
        .palm-detail-item.wide { grid-column: 1 / -1; }
        .palm-detail-item:hover {
          background: #fff;
          transform: translateX(${ar ? "-4px" : "4px"});
          border-color: rgba(184,149,82,.25);
        }
        .palm-detail-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(184,149,82,.15), rgba(215,188,131,.08));
          color: var(--palm-gold);
          font-size: 16px;
        }
        .palm-detail-body { min-width: 0; }
        .palm-detail-heading {
          color: var(--palm-navy);
          font-size: 14px;
          font-weight: 700;
          line-height: 2;
        }
        .palm-detail-text {
          color: rgba(16,36,61,.75);
          font-size: 14px;
          line-height: 2;
          text-align: ${textAlign};
          white-space: pre-line;
        }
        .palm-map-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          padding: 12px 20px;
          border: 1px solid rgba(184,149,82,.35);
          border-radius: 50px;
          background: #fff;
          color: var(--palm-navy);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: all .3s ease;
        }
        .palm-map-link:hover {
          border-color: var(--palm-gold);
          color: var(--palm-gold);
          transform: translateY(-2px);
        }

        /* FEATURES */
        .palm-features-title {
          margin: 30px 0 8px;
          font-size: 16px;
          font-weight: 800;
          color: var(--palm-navy);
        }
        .palm-features-grid {
          display: grid;
          grid-template-columns: 1fr;
          column-gap: 24px;
        }
        .palm-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(184,149,82,.13);
          color: rgba(16,36,61,.75);
          font-size: 13px;
          line-height: 1.9;
        }
        .palm-feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--palm-gold);
          flex-shrink: 0;
        }

        /* GALLERY (3D) */
        .palm-gallery {
          max-width: 1000px;
          margin: 0 auto;
        }
        .palm-gallery-main {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 20px;
          background: #e9e2d6;
          box-shadow: 0 25px 65px rgba(16,36,61,.14), 0 0 0 1px rgba(184,149,82,.2);
          isolation: isolate;
        }
        .palm-gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: palmGalleryReveal .85s cubic-bezier(.2,.8,.2,1) both;
        }
        .palm-gallery-main::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(16,36,61,.35));
          pointer-events: none;
        }
        .palm-gallery-main-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 13px;
          z-index: 2;
          pointer-events: none;
          transition: inset .4s ease;
        }
        .palm-gallery-main:hover .palm-gallery-main-frame { inset: 18px; }
        .palm-gallery-counter {
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
        .palm-gallery-counter::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--palm-light-gold);
        }
        .palm-gallery-thumbnails {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 17px;
        }
        .palm-gallery-thumb {
          position: relative;
          width: 72px;
          height: 54px;
          border-radius: 10px;
          overflow: hidden;
          padding: 0;
          border: 2px solid transparent;
          background: #e9e2d6;
          cursor: pointer;
          opacity: .65;
          transition: all .35s ease;
        }
        .palm-gallery-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }
        .palm-gallery-thumb:hover {
          opacity: 1;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(16,36,61,.15);
        }
        .palm-gallery-thumb:hover img { transform: scale(1.08); }
        .palm-gallery-thumb.active {
          opacity: 1;
          border-color: var(--palm-gold);
          box-shadow: 0 8px 25px rgba(184,149,82,.2);
          transform: translateY(-3px);
        }

        /* FILE VIEWER (plans / brochure) */
        .palm-file {
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(184,149,82,.22);
          border-radius: 20px;
          padding: 14px;
          box-shadow: 0 25px 60px rgba(16,36,61,.1);
        }
        .palm-file-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 6px 8px 16px;
        }
        .palm-file-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--palm-navy);
        }
        .palm-file-hint {
          font-size: 12px;
          color: rgba(16,36,61,.55);
        }
        .palm-file-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .palm-file-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 9px;
          border: 1px solid rgba(184,149,82,.35);
          background: #fff;
          color: var(--palm-navy);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: all .3s ease;
        }
        .palm-file-btn:hover {
          border-color: var(--palm-gold);
          color: var(--palm-gold);
          transform: translateY(-2px);
        }
        .palm-file-btn.gold {
          background: var(--palm-navy);
          border-color: var(--palm-navy);
          color: #fff;
        }
        .palm-file-btn.gold:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          border-color: transparent;
          color: var(--palm-navy);
        }
        .palm-file-frame {
          display: block;
          width: 100%;
          height: clamp(520px, 78vh, 900px);
          border: 0;
          border-radius: 12px;
          background: #fff;
        }
        .palm-file-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
        }
        .palm-file-mobile {
          display: none;
          text-align: center;
          padding: 24px 12px 16px;
          color: rgba(16,36,61,.65);
          font-size: 13px;
          line-height: 2;
        }
        .palm-file-badge {
          display: inline-block;
          padding: 6px 14px;
          margin-bottom: 8px;
          border-radius: 8px;
          background: rgba(184,149,82,.14);
          color: var(--palm-gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        /* PLANS GRID */
        .palm-plans-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .palm-plan-card {
          display: block;
          padding: 10px;
          background: #fff;
          border: 1px solid rgba(184,149,82,.2);
          border-radius: 14px;
          text-decoration: none;
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .palm-plan-card:hover {
          transform: translateY(-4px);
          border-color: rgba(184,149,82,.45);
          box-shadow: 0 18px 40px rgba(16,36,61,.12);
        }
        .palm-plan-card img {
          display: block;
          width: 100%;
          height: 200px;
          object-fit: contain;
          background: #faf9f6;
          border-radius: 8px;
        }
        .palm-plan-label {
          display: block;
          padding: 12px 4px 4px;
          color: var(--palm-navy);
          font-size: 13px;
          font-weight: 700;
          text-align: center;
        }

        /* ═════════ BOOKING ═════════ */
        .palm-booking { padding: 70px 6% 90px; }
        .palm-section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .palm-section-kicker {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--palm-gold);
          margin-bottom: 14px;
        }
        .palm-section-title {
          font-size: clamp(25px, 4vw, 40px);
          font-weight: 800;
          line-height: 1.5;
          color: var(--palm-navy);
          margin: 0;
        }
        .palm-section-line {
          width: 55px;
          height: 3px;
          margin: 20px auto 0;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--palm-gold), var(--palm-light-gold));
        }
        .palm-booking-card {
          max-width: 680px;
          margin: 0 auto;
        }
        .palm-booking-card:hover { transform: none; }

        .palm-input {
          display: block;
          width: 100%;
          padding: 15px 17px;
          margin-bottom: 17px;
          border-radius: 11px;
          border: 1px solid rgba(184,149,82,.22);
          background: rgba(248,246,241,.6);
          color: var(--palm-navy);
          outline: none;
          transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .palm-input:focus {
          background: #fff;
          border-color: var(--palm-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.09);
        }
        .palm-input::placeholder { color: rgba(16,36,61,.4); }

        .palm-select-wrap {
          position: relative;
          margin-bottom: 17px;
        }
        .palm-select {
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          background: rgba(248,246,241,.6);
          border: 1px solid rgba(184,149,82,.22);
          border-radius: 11px;
          padding: 15px 17px;
          padding-inline-end: 44px;
          color: var(--palm-navy);
          cursor: pointer;
          outline: none;
          transition: all .3s ease;
        }
        .palm-select:focus {
          background: #fff;
          border-color: var(--palm-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.09);
        }
        .palm-select-arrow {
          position: absolute;
          top: 50%;
          ${ar ? "left: 18px;" : "right: 18px;"}
          transform: translateY(-50%);
          color: var(--palm-gold);
          pointer-events: none;
          font-size: 12px;
        }
        .palm-error {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: -8px 0 15px;
          color: #c0392b;
          font-size: 12px;
        }
        .palm-wa-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 6px;
          padding: 16px;
          background: var(--palm-navy);
          color: #fff;
          border: 1px solid transparent;
          border-radius: 11px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all .35s ease;
        }
        .palm-wa-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
          transition: left .6s ease;
        }
        .palm-wa-btn:hover::before { left: 100%; }
        .palm-wa-btn:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          color: var(--palm-navy);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(184,149,82,.25);
        }
        .palm-team-note {
          margin-top: 26px;
          padding: 18px 20px;
          border-radius: 12px;
          background: rgba(16,36,61,.04);
          border: 1px solid rgba(184,149,82,.15);
          color: rgba(16,36,61,.7);
          font-size: 13px;
          line-height: 2;
        }

        /* ═════════ TRUST ═════════ */
        .palm-trust-section { padding: 20px 6% 100px; }
        .palm-trust-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(16,36,61,.12);
        }
        .palm-trust-left {
          position: relative;
          overflow: hidden;
          padding: 40px 25px;
          background: var(--palm-navy);
          color: #F8F6F1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .palm-trust-left::before {
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
        .palm-trust-left::after {
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
        .palm-trust-content { position: relative; z-index: 1; }
        .palm-trust-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--palm-light-gold);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
        }
        .palm-trust-dot {
          width: 7px;
          height: 7px;
          background: var(--palm-light-gold);
          border-radius: 50%;
          animation: palmPulse 2s infinite;
        }
        .palm-trust-title {
          font-size: clamp(25px, 4vw, 39px);
          font-weight: 800;
          line-height: 1.6;
          margin: 0;
          color: #F8F6F1;
        }
        .palm-trust-title span { color: var(--palm-light-gold); }
        .palm-trust-description {
          max-width: 500px;
          margin-top: 20px;
          font-size: 14px;
          line-height: 2.3;
          color: rgba(248,246,241,.65);
          text-align: justify;
        }
        .palm-trust-location {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid rgba(215,188,131,.15);
          color: rgba(248,246,241,.75);
          font-size: 13px;
          line-height: 2;
        }
        .palm-trust-location a {
          display: inline-block;
          margin-top: 8px;
          color: var(--palm-light-gold);
          text-decoration: none;
          transition: color .3s ease;
        }
        .palm-trust-location a:hover { color: #fff; }
        .palm-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }
        .palm-social-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 16px;
          border: 1px solid rgba(215,188,131,.2);
          border-radius: 50px;
          color: var(--palm-light-gold);
          text-decoration: none;
          font-size: 12px;
          transition: all .3s ease;
        }
        .palm-social-link:hover {
          background: rgba(215,188,131,.12);
          border-color: var(--palm-light-gold);
          transform: translateY(-3px);
        }
        .palm-trust-right {
          background: #fff;
          padding: 35px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .palm-stat {
          display: flex;
          flex-direction: column;
          padding: 22px 0;
          border-bottom: 1px solid rgba(184,149,82,.13);
          transition: padding .3s ease;
        }
        .palm-stat:last-child { border-bottom: none; }
        .palm-stat:hover { padding-inline: 10px; }
        .palm-stat-number {
          font-size: clamp(34px, 5vw, 47px);
          font-weight: 800;
          line-height: 1.3;
          background: linear-gradient(135deg, #9B773D, #D7BC83, #B89552);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .palm-stat-label {
          margin-top: 5px;
          color: rgba(16,36,61,.58);
          font-size: 13px;
          line-height: 2;
        }

        /* BACK */
        .palm-back-section {
          padding: 0 6% 100px;
          text-align: center;
        }
        .palm-back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 35px;
          background: var(--palm-navy);
          color: #fff;
          text-decoration: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid transparent;
          transition: all .35s ease;
        }
        .palm-back-btn:hover {
          background: linear-gradient(135deg, #B89552, #D7BC83);
          color: var(--palm-navy);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(184,149,82,.22);
        }

        /* ═════════ TABLET ═════════ */
        @media (min-width: 600px) {
          .palm-card { padding: 35px; }
          .palm-gallery-main { height: 420px; }
          .palm-plan-card img { height: 300px; }
          .palm-trust-left,
          .palm-trust-right { padding: 45px 35px; }
        }

        /* ═════════ DESKTOP ═════════ */
        @media (min-width: 900px) {
          .palm-overview { padding: 70px 6% 44px; }
          .palm-hero-description { font-size: 16px; }

          .palm-detail-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .palm-features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .palm-gallery-main { height: 560px; }
          .palm-gallery-thumb { width: 96px; height: 68px; }

          .palm-plans-grid { gap: 20px; }
          .palm-plan-card img { height: 460px; }

          .palm-booking { padding: 90px 8% 120px; }

          .palm-trust-section { padding: 20px 8% 130px; }
          .palm-trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .palm-trust-left,
          .palm-trust-right { padding: 60px 50px; }

          .palm-back-section { padding-bottom: 130px; }
        }

        /* ═════════ MOBILE ═════════ */
        @media (max-width: 767px) {
          .palm-file-frame { display: none; }
          .palm-file-mobile { display: block; }
          .palm-file-actions { width: 100%; }
          .palm-file-btn { flex: 1; }
        }

        @media (max-width: 600px) {
          .palm-breadcrumb { padding-top: 80px; font-size: 12px; }
          .palm-cover-frame { inset: 10px; }
          .palm-cover-tag { bottom: 24px; inset-inline-start: 24px; }
          .palm-tab { padding: 14px 16px; font-size: 13px; }
        }

        @media (max-width: 380px) {
          .palm-hero-title { font-size: 29px; }
          .palm-hero-description { font-size: 13px; }
          .palm-card { padding: 22px 17px; }
          .palm-card-title { font-size: 21px; }
          .palm-gallery-main { height: 240px; }
          .palm-gallery-thumb { width: 56px; height: 42px; }
          .palm-plan-card img { height: 150px; }
          .palm-trust-left,
          .palm-trust-right { padding: 30px 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .palm-page *,
          .palm-page *::before,
          .palm-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <Navbar />

      {/* ═════════ BREADCRUMB ═════════ */}
      <nav className="palm-breadcrumb" aria-label="breadcrumb">
        <Link to="/">{homeLabel}</Link>
        <span className="palm-bc-sep" aria-hidden="true">
          {ar ? "‹" : "›"}
        </span>
        <a href="/#projects">{currentProjectsLabel}</a>
        <span className="palm-bc-sep" aria-hidden="true">
          {ar ? "‹" : "›"}
        </span>
        <span aria-current="page">
          {c.title1} {c.title2}
        </span>
      </nav>

      {/* ═════════ COVER ═════════ */}
      <section className="palm-cover">
        <img src={COVER_IMAGE} alt="Palm 2" />
        <div className="palm-cover-frame" />
        <span className="palm-cover-tag">DAR DEVELOPMENTS</span>
        <div className="palm-cover-line" />
      </section>

      {/* ═════════ OVERVIEW ═════════ */}
      <section className="palm-overview" style={{ textAlign }}>
        <span className="palm-eyebrow">
          {ar ? "مشروعات دار" : "DAR PROJECTS"}
        </span>

        <h1 className="palm-hero-title">
          <span className="gold-text">{c.title1}</span> {c.title2}
        </h1>

        <div className="palm-title-line" />

        <p className="palm-hero-description">{c.desc}</p>

        <div
          className="palm-badges"
          style={{ justifyContent: ar ? "flex-start" : "flex-start" }}
        >
          <div className="palm-hero-badge">
            <span className="palm-badge-dot" />
            {c.badge1}
          </div>
          <div className="palm-hero-badge">
            <span className="palm-badge-dot" />
            {c.badge2}
          </div>
        </div>
      </section>
      {/* ═════════ LOCATION SECTION ═════════ */}
<section className="palm-location-section">
  <div className="palm-location-card">

    <div className="palm-location-content" style={{ direction: dir, textAlign }}>
      <span className="palm-location-kicker">
        {ar ? "موقع المشروع" : "PROJECT LOCATION"}
      </span>

      <h2 className="palm-location-title">
        {ar ? "في قلب كورنيش بلازا" : "In the Heart of Corniche Plaza"}
      </h2>

      <p className="palm-location-description">
        {ar
          ? "يقع مشروع بالم 2 في كورنيش بلازا، عند تقاطع شارع أحمد الخشاب بمدينة طنطا، في موقع استراتيجي بالقرب من أهم الطرق والخدمات."
          : "Palm 2 is located in Corniche Plaza, at the intersection of Ahmed Al-Khashab Street in Tanta, offering a strategic location close to major roads and essential services."}
      </p>

      <a
        href={MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="palm-location-btn"
      >
        {ar ? "افتح الموقع على Google Maps" : "Open Location on Google Maps"}
        <span>{ar ? "←" : "→"}</span>
      </a>
    </div>

    <div className="palm-location-map">
      <iframe
        src="https://maps.google.com/maps?q=30.810883,31.010345&z=16&output=embed"
        title="Palm 2 Project Location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>

  </div>
</section>
      {/* ═════════ TABS ═════════ */}
      <section className="palm-tabs-section">
        <div className="palm-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`palm-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={(e) => selectTab(tab.id, e)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="palm-panel" role="tabpanel">
          <TabBoundary key={activeTab} ar={ar}>
            <div className="palm-panel-inner">
              {/* التفاصيل العامة والموقع */}
              {activeTab === "details" && (
                <div className="palm-card" style={{ textAlign, direction: dir }}>
                  <h2 className="palm-card-title">{c.detailsTitle}</h2>
                  <div className="palm-card-line" />

                  <div className="palm-detail-grid">
                    {detailItems.map((item, index) => (
                      <div className="palm-detail-item" key={index}>
                        <div className="palm-detail-icon">{item.icon}</div>
                        <div className="palm-detail-body">
                          <div className="palm-detail-text">{item.text}</div>
                        </div>
                      </div>
                    ))}

                    <div className="palm-detail-item wide">
                      <div className="palm-detail-icon">⌂</div>
                      <div className="palm-detail-body">
                        <div className="palm-detail-heading">{c.towersTitle}</div>
                        <div className="palm-detail-text">{c.towers}</div>
                      </div>
                    </div>
                  </div>


                  <h3 className="palm-features-title">{c.featuresTitle}</h3>

                  <div className="palm-features-grid">
                    {c.features.map((feature, index) => (
                      <div className="palm-feature-item" key={index}>
                        <span className="palm-feature-dot" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* صور 3D = باقي صور المشروع */}
              {activeTab === "three" && (
                <div className="palm-gallery">
                  <div className="palm-gallery-main">
                    <img
                      key={galleryIndex}
                      src={GALLERY[galleryIndex].src}
                      alt={GALLERY[galleryIndex].alt}
                    />
                    <div className="palm-gallery-main-frame" />
                    <div className="palm-gallery-counter">
                      {String(galleryIndex + 1).padStart(2, "0")} /{" "}
                      {String(GALLERY.length).padStart(2, "0")}
                    </div>
                  </div>

                  {GALLERY.length > 1 && (
                    <div className="palm-gallery-thumbnails">
                      {GALLERY.map((image, index) => (
                        <button
                          type="button"
                          key={image.alt}
                          className={`palm-gallery-thumb ${
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

              {/* البلانات */}
              {activeTab === "plans" &&
                (PLANS.length > 0 ? (
                  <PlansViewer
                    plans={PLANS}
                    title={ar ? "البلانات" : "Floor Plans"}
                    ar={ar}
                  />
                ) : (
                  <p className="palm-empty">
                    {ar ? "الملف غير متاح حالياً" : "File not available yet"}
                  </p>
                ))}

              {/* البروشور */}
              {activeTab === "brochure" &&
                (brochureFile ? (
                  <FileViewer
                    src={brochureFile}
                    title={ar ? "البروشور" : "Brochure"}
                    ar={ar}
                  />
                ) : (
                  <p className="palm-empty">
                    {ar ? "الملف غير متاح حالياً" : "File not available yet"}
                  </p>
                ))}
            </div>
          </TabBoundary>
        </div>
      </section>

      {/* ═════════ BOOKING FORM ═════════ */}
      <section className="palm-booking" id="booking">
        <div className="palm-section-header">
          <span className="palm-section-kicker">
            {ar ? "احجز وحدتك" : "RESERVE YOUR UNIT"}
          </span>
          <h2 className="palm-section-title">{c.formTitle}</h2>
          <div className="palm-section-line" />
        </div>

        <div className="palm-card palm-booking-card" style={{ direction: dir }}>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder={c.namePlaceholder}
            className="palm-input"
            value={formData.name}
            onChange={handleChange}
            style={{ direction: dir }}
          />

          {error && (
            <div className="palm-error">
              <span>⚠</span>
              {error}
            </div>
          )}

          <div className="palm-select-wrap">
            <select
              name="project"
              className="palm-select"
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
            <span className="palm-select-arrow">▼</span>
          </div>

          {areaOptions.length > 0 && (
            <div className="palm-select-wrap">
              <select
                name="area"
                className="palm-select"
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
              <span className="palm-select-arrow">▼</span>
            </div>
          )}

          <button type="button" className="palm-wa-btn" onClick={openWhatsApp}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {c.whatsappBtn}
          </button>

          <div className="palm-team-note" style={{ textAlign }}>
            {c.teamNote}
          </div>
        </div>
      </section>

      {/* ═════════ TRUST ═════════ */}
      <section className="palm-trust-section">
        <div className="palm-trust-grid">
          {/* LEFT */}
          <div
            className="palm-trust-left"
            style={{ order: ar ? 1 : 2, textAlign, direction: dir }}
          >
            <div className="palm-trust-content">
              <div className="palm-trust-kicker">
                <span className="palm-trust-dot" />
                {ar ? "ثقة ممتدة" : "TRUSTED SINCE"}
              </div>

              <h2 className="palm-trust-title">
                {ar ? "خبرة ممتدة لأكثر من" : "Over"}{" "}
                <span>{ar ? "8 أعوام" : "8 Years"}</span>
                {ar ? "" : " of Excellence"}
              </h2>

              <div className="palm-card-line" />

              <p className="palm-trust-description">
                {ar
                  ? "نحن لا نبني وحدات سكنية فحسب — نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
                  : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way."}
              </p>

              <div className="palm-trust-location">
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

              <div className="palm-socials">
                <a
                  href="https://www.facebook.com/share/1XgDRDMitV/"
                  target="_blank"
                  rel="noreferrer"
                  className="palm-social-link"
                >
                  <span>f</span>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                  target="_blank"
                  rel="noreferrer"
                  className="palm-social-link"
                >
                  <span>◎</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="palm-trust-right"
            style={{ order: ar ? 2 : 1, direction: dir, textAlign }}
          >
            {[
              { num: "8+", ar: "سنوات خبرة في السوق العقاري", en: "Years in Real Estate" },
              { num: "+150", ar: "وحدة سكنية تم تسليمها بنجاح", en: "Units Successfully Delivered" },
              { num: "3", ar: "مشاريع نشطة حالياً في طنطا", en: "Active Projects in Tanta" },
              { num: "98%", ar: "نسبة رضا العملاء عن خدماتنا", en: "Client Satisfaction Rate" },
            ].map((stat, index) => (
              <div className="palm-stat" key={index}>
                <span className="palm-stat-number">{stat.num}</span>
                <span className="palm-stat-label">{ar ? stat.ar : stat.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ BACK ═════════ */}
      <section className="palm-back-section">
        <a href="/#projects" className="palm-back-btn">
          <span>{c.backBtn}</span>
          <span>{ar ? "←" : "→"}</span>
        </a>
      </section>
    </div>
  );
}

export default ProjectPalm2Page;