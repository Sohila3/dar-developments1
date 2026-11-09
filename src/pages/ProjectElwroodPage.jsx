
import Navbar from "../components/Navbar";
import werood1 from "../assets/werood1.jpeg";
import werood2 from "../assets/werood2.jpeg";
import werood3 from "../assets/werood3.jpeg";
import werood4 from "../assets/werood4.jpeg";
import video from "../assets/werood.mp4";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const weroodImages = [werood1, werood2, werood3, werood4];

function ProjectElwroodPage() {
  const { lang } = useLanguage();

  const ar = lang === "ar";
  const dir = ar ? "rtl" : "ltr";
  const textAlign = ar ? "right" : "left";

  const [activeImage, setActiveImage] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Elwrood",
  });
  const [error, setError] = useState("");

  const videoRef = useRef(null);

  const content = {
    eyebrow: ar ? "مشروعات دار للتطوير" : "DAR DEVELOPMENTS",
    title1: ar ? "دار" : "DAR",
    title2: ar ? "الورود" : "ELWROOD",
    description: ar
      ? "في دار الورود، نؤمن أن المنزل ليس مجرد مساحة، بل تجربة متكاملة من الراحة والخصوصية والتفاصيل المدروسة. صُمم المشروع ليمنحك حياة أكثر هدوءًا وراحة، مع موقع مميز وتخطيط يراعي احتياجاتك."
      : "At Dar Elwrood, we believe a home is more than a space. It is an experience built around comfort, privacy, and thoughtful details. Designed to offer a better lifestyle, with a distinctive location and carefully planned spaces.",
    badge: ar
      ? "تفاصيل مدروسة.. وحياة تستحقها"
      : "Thoughtful Details. Better Living.",
    discover: ar ? "اكتشف المشروع" : "DISCOVER THE PROJECT",
    videoTitle: ar ? "شاهد دار الورود عن قرب" : "Discover Dar Elwrood",
    detailsEyebrow: ar ? "تفاصيل المشروع" : "PROJECT DETAILS",
    detailsTitle: ar ? "كل ما تحتاج معرفته" : "Everything You Need to Know",
    locationTitle: ar ? "موقع المشروع" : "Project Location",
    location: ar
      ? "يقع مشروع دار الورود على طريق القاهرة – الإسكندرية، خلف عمارات الأطباء، في موقع مميز يسهل الوصول إليه."
      : "Dar Elwrood is located on Cairo–Alexandria Road, behind Doctors' Buildings, in a distinctive and accessible location.",
    towersTitle: ar ? "مواصفات المشروع" : "Project Highlights",
    towers: ar
      ? "مشروع سكني بتصميم معماري مميز، يجمع بين التخطيط العملي والمساحات المناسبة للحياة اليومية."
      : "A residential project featuring distinctive architecture, practical planning, and spaces designed for everyday living.",
    spacesTitle: ar ? "الوحدات والمساحات" : "Units & Spaces",
    spaces: ar
      ? "اختيارات متنوعة من الوحدات والمساحات لتناسب احتياجاتك وتطلعاتك.\n    122م² - 155م² - 174م² - 203م²"
      : "A diverse selection of units and spacious layouts to suit your needs and aspirations.\n122 m² - 155 m² - 174 m² - 203 m²",
    installmentTitle: ar ? "أنظمة السداد" : "Payment Plans",
    installment: ar
      ? "أنظمة سداد مرنة وقسط مريح يصل حتى 3 سنوات."
      : "Flexible payment plans and convenient installments for up to 3 years.",
    formEyebrow: ar ? "احجز استفسارك" : "YOUR NEXT HOME",
    formTitle: ar ? "مهتم بدار الورود؟" : "Interested in Dar Elwrood?",
    formDesc: ar
      ? "اترك بياناتك وسيتواصل معك فريقنا لمساعدتك."
      : "Leave your details and our team will get in touch.",
    namePlaceholder: ar ? "اكتب اسمك بالكامل" : "Enter your full name",
    projectPlaceholder: ar ? "اختر المشروع" : "Select a project",
    whatsappBtn: ar ? "تواصل معنا عبر واتساب" : "Contact Us on WhatsApp",
    whatsappMsg: ar ? "مرحبًا، أنا" : "Hello, my name is",
    whatsappMsg2: ar ? "مهتم بالاستفسار عن" : "and I'm interested in",
    whatsappMsg3: ar ? "من فضلكم تواصلوا معي." : "Please contact me.",
    trustEyebrow: ar ? "لماذا دار؟" : "WHY DAR",
    trustTitle: ar ? "ثقة تُبنى مع الوقت" : "Trust Built Over Time",
    trustLabel: ar ? "ثقة ممتدة" : "TRUSTED SINCE",
    trustHeadline: ar ? "خبرة ممتدة لأكثر من" : "Over",
    trustYears: ar ? "8 أعوام" : "8 Years",
    trustEnd: ar ? "" : " of Excellence",
    trustDesc: ar
      ? "نحن لا نبني وحدات سكنية فحسب، بل نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
      : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way.",
    companyLocation: ar
      ? "طنطا - شارع توت عنخ آمون من محمد فريد فوق مخبز الزهراء"
      : "Tanta - Tutankhamun Street, Mohamed Farid, above Al Zahraa Bakery",
    companyLocationTitle: ar ? "مقر الشركة:" : "Company Location:",
    openMap: ar ? "← افتح على الخريطة" : "→ Open in Maps",
    follow: ar ? "تابعنا على السوشيال ميديا" : "Follow us",
    stats: ar
      ? [
          "سنوات خبرة في السوق العقاري",
          "وحدة سكنية تم تسليمها بنجاح",
          "مشاريع نشطة حاليًا في طنطا",
          "نسبة رضا العملاء عن خدماتنا",
        ]
      : [
          "Years in Real Estate",
          "Units Successfully Delivered",
          "Active Projects in Tanta",
          "Client Satisfaction Rate",
        ],
    backBtn: ar ? "العودة إلى المشروعات" : "Back to Projects",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % weroodImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + weroodImages.length) % weroodImages.length
    );
  };

  useEffect(() => {
    if (isGalleryHovered) return;

    const interval = setInterval(nextImage, 4500);
    return () => clearInterval(interval);
  }, [isGalleryHovered]);

  const openWhatsApp = () => {
    if (!formData.name.trim()) {
      setError(ar ? "من فضلك اكتبي اسمك أولًا" : "Please enter your name");
      return;
    }

    setError("");

    const message = `${content.whatsappMsg} ${formData.name} ${content.whatsappMsg2} ${formData.project}. ${content.whatsappMsg3}`;

    window.open(
      `https://wa.me/201039207908?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

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

  const stats = ["8+", "+100", "3", "98%"];

  return (
    <div className="elwrood-page" dir={dir}>
      <style>{`

        .elwrood-page {
          --ew-bg: #F8F6F1;
          --ew-paper: #FFFFFF;
          --ew-navy: #10243D;
          --ew-gold: #B89552;
          --ew-light-gold: #D7BC83;
          --ew-muted: #777B80;
          background: var(--ew-bg);
          color: var(--ew-navy);
          font-family: 'Alexandria','DM Sans',sans-serif;
          min-height: 100vh;
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .elwrood-page *,
        .elwrood-page *::before,
        .elwrood-page *::after {
          box-sizing: border-box;
        }

        .elwrood-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          background:
            radial-gradient(circle at 85% 15%,rgba(184,149,82,.13),transparent 30%),
            radial-gradient(circle at 10% 75%,rgba(16,36,61,.05),transparent 35%),
            linear-gradient(135deg,#F8F6F1,#F5F1E9 48%,#F8F6F1);
        }

        .elwrood-page::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: .025;
          background-image:
            linear-gradient(#10243D 1px,transparent 1px),
            linear-gradient(90deg,#10243D 1px,transparent 1px);
          background-size: 55px 55px;
        }

        .elwrood-page button,
        .elwrood-page input,
        .elwrood-page select {
          font-family: inherit;
        }

        @keyframes ewReveal {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ewPulse {
          0%,100% { opacity: 1; }
          50% { opacity: .35; }
        }

        /* HERO */
        .elwrood-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 35px;
          position: relative;
          padding: 115px 20px 65px;
        }

        .elwrood-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          background: rgba(184,149,82,.12);
          filter: blur(140px);
          border-radius: 50%;
          pointer-events: none;
        }

        .elwrood-glow.one { top: -150px; right: -100px; }
        .elwrood-glow.two {
          bottom: -150px;
          left: -100px;
          background: rgba(16,36,61,.045);
        }

        .elwrood-hero-content {
          width: 100%;
          position: relative;
          z-index: 2;
          animation: ewReveal .9s ease both;
        }

        .elwrood-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--ew-gold);
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .elwrood-eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: var(--ew-gold);
        }

        .elwrood-title {
          font-size: clamp(32px,7vw,48px);
          line-height: 1.45;
          font-weight: 700;
          letter-spacing: -.5px;
          color: var(--ew-navy);
          margin: 0;
          overflow-wrap: anywhere;
        }

        .elwrood-title span {
          color: var(--ew-gold);
          text-shadow: 0 0 25px rgba(184,149,82,.15);
        }

        .elwrood-title-line {
          width: 65px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg,#B89552,#D7BC83);
          margin: 24px 0;
        }

        .elwrood-description {
          color: rgba(16,36,61,.72);
          font-size: 15px;
          line-height: 2.3;
          text-align: justify;
          margin: 0;
        }

        .elwrood-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(184,149,82,.25);
          background: rgba(255,255,255,.65);
          padding: 11px 17px;
          border-radius: 50px;
          margin-top: 25px;
          font-size: 12px;
          color: var(--ew-navy);
          box-shadow: 0 8px 25px rgba(16,36,61,.04);
        }

        .elwrood-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--ew-gold);
          animation: ewPulse 2s infinite;
        }

        /* GALLERY */
        .elwrood-gallery-column {
          width: 100%;
          position: relative;
          z-index: 2;
          animation: ewReveal 1s .15s ease both;
        }

        .elwrood-gallery {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          isolation: isolate;
          border-radius: 18px;
          background: var(--ew-navy);
          border: 1px solid rgba(184,149,82,.35);
          box-shadow: 0 25px 60px rgba(16,36,61,.15),0 0 35px rgba(184,149,82,.08);
        }

        .elwrood-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transform: scale(1.06);
          z-index: 1;
          transition: opacity 1s ease,transform 5s ease;
          user-select: none;
        }

        .elwrood-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .elwrood-gallery:hover .elwrood-slide.active {
          transform: scale(1.04);
        }

        .elwrood-gallery-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(180deg,rgba(16,36,61,.02),transparent 45%,rgba(16,36,61,.18) 70%,rgba(16,36,61,.65));
        }

        .elwrood-counter {
          position: absolute;
          bottom: 22px;
          left: 24px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-family: 'DM Sans',sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .elwrood-counter .current {
          color: var(--ew-light-gold);
          font-size: 17px;
        }

        .elwrood-arrow {
          position: absolute;
          top: 50%;
          z-index: 6;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.4);
          background: rgba(16,36,61,.4);
          backdrop-filter: blur(12px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 17px;
          transition: all .3s ease;
          opacity: 0;
        }

        .elwrood-gallery:hover .elwrood-arrow { opacity: 1; }
        .elwrood-arrow:hover {
          background: var(--ew-gold);
          color: var(--ew-navy);
          border-color: var(--ew-gold);
          transform: translateY(-50%) scale(1.08);
        }
        .elwrood-arrow.prev { left: 18px; }
        .elwrood-arrow.next { right: 18px; }

        .elwrood-thumbnails {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
          padding: 4px 0 8px;
          flex-wrap: wrap;
        }

        .elwrood-thumbnail {
          width: 78px;
          height: 62px;
          padding: 3px;
          border: 1px solid rgba(184,149,82,.25);
          border-radius: 10px;
          background: rgba(255,255,255,.6);
          overflow: hidden;
          cursor: pointer;
          opacity: .7;
          transition: all .3s ease;
        }

        .elwrood-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 6px;
          transition: transform .4s ease;
        }

        .elwrood-thumbnail:hover {
          opacity: 1;
          transform: translateY(-4px);
          border-color: var(--ew-gold);
        }

        .elwrood-thumbnail:hover img { transform: scale(1.1); }

        .elwrood-thumbnail.active {
          opacity: 1;
          border: 1.5px solid var(--ew-gold);
          box-shadow: 0 0 0 2px rgba(184,149,82,.12),0 8px 20px rgba(184,149,82,.15);
          transform: translateY(-2px);
        }

        /* SECTION HEADINGS */
        .elwrood-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .elwrood-heading .eyebrow {
          color: var(--ew-gold);
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 12px;
          display: block;
        }

        .elwrood-heading h2 {
          font-size: clamp(26px,4vw,40px);
          color: var(--ew-navy);
          font-weight: 700;
          line-height: 1.5;
          margin: 0;
        }

        .elwrood-heading .line {
          width: 55px;
          height: 3px;
          border-radius: 20px;
          margin: 18px auto 0;
          background: linear-gradient(90deg,#B89552,#D7BC83);
        }

        /* VIDEO */
        .elwrood-video-section {
          position: relative;
          padding: 55px 18px 80px;
        }

        .elwrood-video-glow {
          position: absolute;
          width: 65%;
          height: 260px;
          background: rgba(184,149,82,.12);
          filter: blur(90px);
          border-radius: 50%;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .elwrood-video-wrap {
          position: relative;
          width: 100%;
          max-width: 1050px;
          margin: auto;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(184,149,82,.3);
          background: var(--ew-navy);
          box-shadow: 0 30px 70px rgba(16,36,61,.15),0 0 35px rgba(184,149,82,.08);
          transition: box-shadow .4s ease,transform .4s ease;
        }

        .elwrood-video-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 40px 90px rgba(16,36,61,.2),0 0 50px rgba(184,149,82,.15);
        }

        .elwrood-video {
          display: block;
          width: 100%;
          max-height: 650px;
          object-fit: cover;
        }

        /* DETAILS & FORM */
        .elwrood-info-section {
          padding: 70px 20px 100px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          align-items: stretch;
        }

        .elwrood-card {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(184,149,82,.24);
          border-radius: 20px;
          padding: 30px 23px;
          box-shadow: 0 20px 60px rgba(16,36,61,.065);
          transition: transform .4s ease,box-shadow .4s ease,border-color .4s ease;
          animation: ewReveal .8s ease both;
        }

        .elwrood-card:hover {
          transform: translateY(-5px);
          border-color: rgba(184,149,82,.45);
          box-shadow: 0 28px 70px rgba(16,36,61,.1),0 0 35px rgba(184,149,82,.07);
        }

        .elwrood-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg,transparent,#B89552,#D7BC83,transparent);
        }

        .elwrood-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .elwrood-card-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: var(--ew-gold);
          background: rgba(184,149,82,.10);
          border: 1px solid rgba(184,149,82,.2);
        }

        .elwrood-card-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--ew-navy);
          margin: 0;
          line-height: 1.7;
        }

        .elwrood-card-subtitle {
          color: var(--ew-muted);
          font-size: 12px;
          line-height: 1.8;
          margin-top: 3px;
        }

        .elwrood-card-line {
          width: 45px;
          height: 3px;
          background: linear-gradient(90deg,#B89552,#D7BC83);
          border-radius: 10px;
          margin-bottom: 24px;
        }

        .elwrood-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 17px 0;
          border-bottom: 1px solid rgba(184,149,82,.15);
        }

        .elwrood-detail-item:last-of-type { border-bottom: none; }

        .elwrood-detail-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(184,149,82,.1);
          color: var(--ew-gold);
          font-size: 15px;
        }

        .elwrood-detail-content { flex: 1; min-width: 0; }

        .elwrood-detail-label {
          display: block;
          color: var(--ew-gold);
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .elwrood-detail-text {
          color: rgba(16,36,61,.72);
          font-size: 13px;
          line-height: 2.1;
          margin: 0;
          text-align: justify;
        }

        .elwrood-map-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ew-gold);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 18px;
          transition: color .3s,gap .3s;
        }

        .elwrood-map-link:hover {
          color: #8D6A32;
          gap: 12px;
        }

        /* FORM */
        .elwrood-form-card {
          background: linear-gradient(145deg,rgba(255,255,255,.95),rgba(249,246,239,.95));
        }

        .elwrood-form-intro {
          margin-bottom: 25px;
        }

        .elwrood-form-eyebrow {
          display: block;
          color: var(--ew-gold);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
        }

        .elwrood-form-desc {
          color: var(--ew-muted);
          font-size: 13px;
          line-height: 2;
          margin: 8px 0 0;
        }

        .elwrood-input-label {
          display: block;
          color: var(--ew-navy);
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .elwrood-input {
          display: block;
          width: 100%;
          background: #fff;
          border: 1px solid rgba(184,149,82,.28);
          border-radius: 10px;
          padding: 15px 16px;
          font-size: 13px;
          color: var(--ew-navy);
          outline: none;
          transition: border-color .25s,box-shadow .25s;
          margin-bottom: 18px;
        }

        .elwrood-input:focus {
          border-color: var(--ew-gold);
          box-shadow: 0 0 0 4px rgba(184,149,82,.1);
        }

        .elwrood-input::placeholder { color: rgba(16,36,61,.4); }

        .elwrood-select-wrapper { position: relative; width: 100%; }

        .elwrood-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          direction: inherit;
        }

        .elwrood-select-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: var(--ew-gold);
          pointer-events: none;
          font-size: 12px;
        }

        .elwrood-error {
          color: #dc2626;
          font-size: 12px;
          margin: -7px 0 15px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .elwrood-wa-btn {
          width: 100%;
          border: 1px solid rgba(184,149,82,.3);
          background: var(--ew-navy);
          color: white;
          border-radius: 10px;
          padding: 16px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all .35s ease;
        }

        .elwrood-wa-btn:hover {
          background: var(--ew-gold);
          color: var(--ew-navy);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(184,149,82,.25);
        }

        .elwrood-form-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          color: var(--ew-muted);
          font-size: 11px;
          margin-top: 16px;
        }

        /* TRUST */
        .elwrood-trust-section { padding: 0 20px 80px; }

        .elwrood-trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(184,149,82,.25);
          box-shadow: 0 25px 70px rgba(16,36,61,.1),0 0 35px rgba(184,149,82,.05);
        }

        .elwrood-trust-left {
          background: var(--ew-navy);
          padding: 35px 25px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .elwrood-trust-right {
          background: rgba(255,255,255,.85);
          padding: 30px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .elwrood-trust-stat {
          padding: 20px 0;
          border-bottom: 1px solid rgba(184,149,82,.18);
          transition: padding .3s;
        }

        .elwrood-trust-stat:last-child { border-bottom: none; }
        .elwrood-trust-stat:hover { padding-inline: 8px; }

        .elwrood-trust-num {
          display: block;
          font-family: 'DM Sans',sans-serif;
          font-size: clamp(30px,4vw,42px);
          font-weight: 700;
          color: var(--ew-gold);
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .elwrood-trust-label {
          font-size: 13px;
          line-height: 1.9;
          color: rgba(16,36,61,.6);
        }

        .elwrood-company-location {
          margin-top: 25px;
          color: rgba(248,246,241,.75);
          font-size: 12px;
          line-height: 2;
        }

        .elwrood-company-location strong {
          display: block;
          color: #D7BC83;
          margin-bottom: 5px;
        }

        .elwrood-company-location a {
          display: inline-block;
          color: #D7BC83;
          text-decoration: none;
          font-weight: 600;
          margin-top: 5px;
        }

        .elwrood-company-location a:hover { color: white; }

        .elwrood-socials {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
          color: rgba(248,246,241,.7);
          font-size: 12px;
        }

        .elwrood-social-links {
          display: flex;
          gap: 22px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .elwrood-social-links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #D7BC83;
          text-decoration: none;
          transition: color .3s,transform .3s;
        }

        .elwrood-social-links a:hover {
          color: white;
          transform: translateY(-3px);
        }

        .elwrood-trust-cta {
          background: var(--ew-gold);
          color: var(--ew-navy);
          border: 1px solid rgba(215,188,131,.4);
          border-radius: 10px;
          padding: 14px 25px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          width: fit-content;
          margin-top: 25px;
          transition: all .35s;
        }

        .elwrood-trust-cta:hover {
          background: var(--ew-light-gold);
          transform: translateY(-3px);
        }

        /* BACK */
        .elwrood-back-section {
          text-align: center;
          padding: 15px 20px 65px;
        }

        .elwrood-back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: var(--ew-navy);
          color: white;
          padding: 14px 35px;
          border-radius: 10px;
          border: 1px solid rgba(184,149,82,.3);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all .35s;
          box-shadow: 0 10px 30px rgba(16,36,61,.08);
        }

        .elwrood-back-btn:hover {
          background: var(--ew-gold);
          color: var(--ew-navy);
          transform: translateY(-3px);
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .elwrood-hero {
            flex-direction: row;
            min-height: 100vh;
            padding: 155px 7% 70px;
            gap: 6%;
          }

          .elwrood-hero.hero-en { flex-direction: row-reverse; }
          .elwrood-hero-content { width: 45%; }
          .elwrood-gallery-column { width: 55%; }

          .elwrood-gallery {
            height: clamp(480px,72vh,780px);
            border-radius: 24px;
          }

          .elwrood-title { font-size: clamp(42px,4.5vw,72px); }
          .elwrood-description { font-size: 16px; line-height: 2.5; }

          .elwrood-thumbnail { width: 95px; height: 72px; }
          .elwrood-thumbnails { gap: 14px; margin-top: 20px; }

          .elwrood-video-section { padding: 100px 5% 120px; }
          .elwrood-heading { margin-bottom: 55px; }

          .elwrood-info-section {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 35px;
            padding: 100px 7%;
          }

          .elwrood-card { padding: 42px; border-radius: 22px; }
          .elwrood-card-title { font-size: 25px; }
          .elwrood-detail-text { font-size: 14px; line-height: 2.3; }

          .elwrood-trust-section { padding: 0 7% 110px; }
          .elwrood-trust-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
            border-radius: 24px;
          }

          .elwrood-trust-left,
          .elwrood-trust-right { padding: 55px 50px; }

          .elwrood-trust-left { min-height: 620px; }
        }

        @media (max-width: 767px) {
          .elwrood-arrow { opacity: 1; width: 36px; height: 36px; font-size: 14px; }
          .elwrood-arrow.prev { left: 10px; }
          .elwrood-arrow.next { right: 10px; }
          .elwrood-counter { bottom: 16px; left: 15px; }
          .elwrood-thumbnails { gap: 8px; margin-top: 14px; }
          .elwrood-thumbnail { width: 65px; height: 52px; }
        }

        @media (max-width: 380px) {
          .elwrood-hero { padding: 95px 14px 40px; gap: 25px; }
          .elwrood-gallery { height: 240px; }
          .elwrood-title { font-size: 29px; }
          .elwrood-description { font-size: 14px; }
          .elwrood-thumbnail { width: 56px; height: 45px; }
          .elwrood-card { padding: 22px 17px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .elwrood-slide { transition: opacity .3s ease; }
          .elwrood-gallery:hover .elwrood-slide.active { transform: none; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className={`elwrood-hero ${ar ? "hero-ar" : "hero-en"}`}>
        <div className="elwrood-glow one" />
        <div className="elwrood-glow two" />

        <div className="elwrood-gallery-column">
          <div
            className="elwrood-gallery"
            onMouseEnter={() => setIsGalleryHovered(true)}
            onMouseLeave={() => setIsGalleryHovered(false)}
          >
            {weroodImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Dar Elwrood ${index + 1}`}
                className={`elwrood-slide ${activeImage === index ? "active" : ""}`}
                draggable="false"
              />
            ))}

            <div className="elwrood-gallery-overlay" />

            <button
              type="button"
              className="elwrood-arrow prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <button
              type="button"
              className="elwrood-arrow next"
              onClick={nextImage}
              aria-label="Next image"
            >
              &#10095;
            </button>

            <div className="elwrood-counter">
              <span className="current">
                {String(activeImage + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              {String(weroodImages.length).padStart(2, "0")}
            </div>
          </div>

          <div className="elwrood-thumbnails">
            {weroodImages.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`elwrood-thumbnail ${activeImage === index ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeImage === index ? "true" : undefined}
              >
                <img src={image} alt={`Dar Elwrood thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="elwrood-hero-content" style={{ textAlign }} dir={dir}>
          <div className="elwrood-eyebrow">
            {ar ? "مشروعات دار للتطوير" : "DAR DEVELOPMENTS"}
          </div>

          <h1 className="elwrood-title">
            <span>{content.title1}</span> {content.title2}
          </h1>

          <div
            className="elwrood-title-line"
            style={{ margin: ar ? "24px 0 24px auto" : "24px 0" }}
          />

          <p className="elwrood-description">{content.description}</p>

          <div className="elwrood-badge">
            <span className="elwrood-badge-dot" />
            <span>{content.badge}</span>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="elwrood-video-section">
        <div className="elwrood-video-glow" />

        <div className="elwrood-heading">
          <span className="eyebrow">{content.discover}</span>
          <h2>{content.videoTitle}</h2>
          <div className="line" />
        </div>

        <div className="elwrood-video-wrap">
          <video
            ref={videoRef}
            src={video}
            controls
            muted
            playsInline
            className="elwrood-video"
          />
        </div>
      </section>

      {/* DETAILS + FORM */}
      <section className="elwrood-info-section" dir={dir}>
        {/* PROJECT DETAILS */}
        <div
          className="elwrood-card"
          style={{ textAlign, order: ar ? 1 : 2 }}
        >
          <div className="elwrood-card-top">
            <div className="elwrood-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h2m2 0h2m-6 4h2m2 0h2m-6 4h2m2 0h2"/>
              </svg>
            </div>
            <div>
              <h2 className="elwrood-card-title">{content.detailsTitle}</h2>
              <div className="elwrood-card-subtitle">{content.detailsEyebrow}</div>
            </div>
          </div>

          <div className="elwrood-card-line" />

          <div className="elwrood-detail-item">
            <div className="elwrood-detail-icon">⌖</div>
            <div className="elwrood-detail-content">
              <span className="elwrood-detail-label">{content.locationTitle}</span>
              <p className="elwrood-detail-text">{content.location}</p>
              <a
                href="https://www.google.com/maps?q=30.809358596801758,31.007654190063477&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="elwrood-map-link"
              >
                {ar ? "← عرض الموقع على الخريطة" : "View on Google Maps →"}
              </a>
            </div>
          </div>

          <div className="elwrood-detail-item">
            <div className="elwrood-detail-icon">⌂</div>
            <div className="elwrood-detail-content">
              <span className="elwrood-detail-label">{content.towersTitle}</span>
              <p className="elwrood-detail-text">{content.towers}</p>
            </div>
          </div>

          <div className="elwrood-detail-item">
            <div className="elwrood-detail-icon">▦</div>
            <div className="elwrood-detail-content">
              <span className="elwrood-detail-label">{content.spacesTitle}</span>
              <p className="elwrood-detail-text">{content.spaces}</p>
            </div>
          </div>

          <div className="elwrood-detail-item">
            <div className="elwrood-detail-icon">◈</div>
            <div className="elwrood-detail-content">
              <span className="elwrood-detail-label">{content.installmentTitle}</span>
              <p className="elwrood-detail-text">{content.installment}</p>
            </div>
          </div>
        </div>

        {/* WHATSAPP FORM */}
        <div
          className="elwrood-card elwrood-form-card"
          style={{ direction: dir, order: ar ? 2 : 1 }}
        >
          <div className="elwrood-form-intro">
            <span className="elwrood-form-eyebrow">{content.formEyebrow}</span>
            <h2 className="elwrood-card-title">{content.formTitle}</h2>
            <p className="elwrood-form-desc">{content.formDesc}</p>
          </div>

          <label className="elwrood-input-label" htmlFor="elwrood-name">
            {ar ? "الاسم بالكامل" : "Full Name"}
          </label>

          <input
            id="elwrood-name"
            name="name"
            type="text"
            placeholder={content.namePlaceholder}
            className="elwrood-input"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
              if (error) setError("");
            }}
          />

          {error && (
            <div className="elwrood-error">
              <span>⚠</span>
              {error}
            </div>
          )}

          <label className="elwrood-input-label" htmlFor="elwrood-project">
            {ar ? "المشروع المهتم به" : "Interested Project"}
          </label>

          <div className="elwrood-select-wrapper">
            <select
              id="elwrood-project"
              name="project"
              className="elwrood-input elwrood-select"
              value={formData.project}
              onChange={handleChange}
            >
              <option value="Dar Elwrood">Dar Elwrood</option>
              <option value="Dar Damac">Dar Damac</option>
              <option value="Dar Landmark">Dar Landmark</option>
              <option value="Palm 2">Palm 2</option>
            </select>

            <span
              className="elwrood-select-arrow"
              style={ar ? { left: "15px" } : { right: "15px" }}
            >
              ▼
            </span>
          </div>

          <button type="button" className="elwrood-wa-btn" onClick={openWhatsApp}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {content.whatsappBtn}
          </button>

          <div className="elwrood-form-note">
            <span>✦</span>
            {ar ? "فريقنا جاهز للإجابة عن استفساراتك" : "Our team is ready to assist you"}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="elwrood-trust-section" dir={dir}>
        <div className="elwrood-heading">
          <span className="eyebrow">{content.trustEyebrow}</span>
          <h2>{content.trustTitle}</h2>
          <div className="line" />
        </div>

        <div className="elwrood-trust-grid">
          <div
            className="elwrood-trust-left"
            style={{ order: ar ? 1 : 2 }}
          >
            <div className="elwrood-trust-glow one" />
            <div className="elwrood-trust-glow two" />

            <div className="elwrood-trust-label-top">
              <span className="elwrood-badge-dot" />
              {content.trustLabel}
            </div>

            <h2 className="elwrood-trust-headline" style={{ textAlign }}>
              {content.trustHeadline}{" "}
              <span>{content.trustYears}</span>
              {content.trustEnd}
            </h2>

            <div
              className="elwrood-title-line"
              style={{ margin: ar ? "22px 0 22px auto" : "22px 0" }}
            />

            <p className="elwrood-trust-description" style={{ textAlign }}>
              {content.trustDesc}
            </p>

            <div className="elwrood-company-location" style={{ textAlign }}>
              <strong>{content.companyLocationTitle}</strong>
              <div>{content.companyLocation}</div>
              <a
                href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
                target="_blank"
                rel="noreferrer"
              >
                {content.openMap}
              </a>
            </div>

            <div className="elwrood-socials">
              <div style={{ fontWeight: 600 }}>{content.follow}</div>

              <div className="elwrood-social-links">
                <a
                  href="https://www.facebook.com/share/1XgDRDMitV/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z"/>
                  </svg>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 1114.5 12 2.5 2.5 0 0112 9.5zM17.8 6.2a1 1 0 11-1 1 1 0 011-1z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div
            className="elwrood-trust-right"
            style={{ order: ar ? 2 : 1, textAlign }}
          >
            {stats.map((num, index) => (
              <div className="elwrood-trust-stat" key={index}>
                <span className="elwrood-trust-num">{num}</span>
                <span className="elwrood-trust-label">{content.stats[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK */}
      <div className="elwrood-back-section">
        <a href="/#projects" className="elwrood-back-btn">
          <span>{ar ? "→" : "←"}</span>
          {content.backBtn}
        </a>
      </div>

      <style>{`
        .elwrood-trust-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .elwrood-trust-glow.one {
          top: -70px;
          right: -70px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle,rgba(184,149,82,.15),transparent 70%);
        }
        .elwrood-trust-glow.two {
          bottom: -50px;
          left: -50px;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle,rgba(184,149,82,.1),transparent 70%);
        }
        .elwrood-trust-label-top {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 18px;
          align-self: ${ar ? "flex-end" : "flex-start"};
          color: #D7BC83;
          font-size: 12px;
          letter-spacing: 1.5px;
        }
        .elwrood-trust-headline {
          font-size: clamp(26px,3.5vw,42px);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.6;
          margin: 0 0 15px;
        }
        .elwrood-trust-headline span { color: #D7BC83; }
        .elwrood-trust-description {
          color: rgba(248,246,241,.65);
          font-size: 14px;
          line-height: 2.2;
          max-width: 420px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default ProjectElwroodPage;
