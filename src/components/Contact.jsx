
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [nameError, setNameError] = useState(false);

  const phone = "201039207908";

  const projects = [
    "Dar Damac",
    "Dar Landmark",
    "Dar Elwrood",
    "Palm 2",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1XgDRDMitV/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${phone}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 3.5A11.8 11.8 0 0012.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7a11.9 11.9 0 005.7 1.5c6.5 0 11.9-5.3 11.9-11.9a11.8 11.8 0 00-3.5-8.4zM12.1 21.8h-.1a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4a9.8 9.8 0 01-1.5-5.3c0-5.4 4.4-9.9 9.9-9.9a9.8 9.8 0 017 2.9 9.8 9.8 0 012.9 7c0 5.5-4.4 9.9-9.8 9.9zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-1 1-1.2 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3-.1-.5.1-.6.1-.2.3-.4.4-.6.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 2.9 1.2 3.1.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/>
        </svg>
      ),
    },
  ];

  const handleWhatsApp = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }

    const message =
      `${t("contact", "whatsappMsg")} ${name.trim()} ` +
      `${t("contact", "whatsappMsg2")} ${project}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeForm = () => {
    setShowForm(false);
    setNameError(false);
  };

  return (
    <>
      <section
        id="contact"
        className="dar-contact"
        style={{
          direction: ar ? "rtl" : "ltr",
          fontFamily: ar
            ? "'Noto Naskh Arabic', serif"
            : "'Montserrat', sans-serif",
        }}
      >
        <style>{`
          @keyframes darContactFade {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .dar-contact {
            padding: 110px 24px;
            background: linear-gradient(180deg,#FFFFFF 0%,#F4F7FA 100%);
            position: relative;
            overflow: hidden;
          }

          .dar-contact-container {
            max-width: 1250px;
            margin: auto;
          }

          /* HEADER */

          .dar-contact-header {
            text-align: center;
            margin-bottom: 60px;
            animation: darContactFade .7s ease both;
          }

          .dar-contact-eyebrow {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #9A7535;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2.5px;
            margin-bottom: 18px;
          }

          .dar-contact-dot {
            width: 6px;
            height: 6px;
            background: #C9A84C;
            border-radius: 50%;
          }

          .dar-contact-title {
            color: #10243D;
            font-size: clamp(32px,4vw,52px);
            font-weight: 800;
            line-height: 1.4;
            margin: 0;
          }

          .dar-contact-title span {
            color: #B8953F;
          }

          .dar-contact-divider {
            width: 48px;
            height: 2px;
            background: linear-gradient(90deg,#C9A84C,#E8C96A);
            margin: 22px auto;
          }

          .dar-contact-subtitle {
            color: #7B8797;
            font-size: 14px;
            line-height: 2;
            max-width: 600px;
            margin: auto;
          }

          /* CONTACT PANEL */

          .dar-contact-panel {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: white;
            border: 1px solid rgba(201,168,76,.2);
            box-shadow: 0 30px 80px rgba(16,36,61,.07);
            animation: darContactFade .8s .15s ease both;
          }

          .dar-contact-info {
            padding: clamp(30px,5vw,65px);
            background: #FFFFFF;
          }

          .dar-contact-info-title {
            color: #10243D;
            font-size: clamp(25px,3vw,36px);
            font-weight: 800;
            line-height: 1.5;
            margin: 0;
          }

          .dar-contact-info-title span {
            color: #C9A84C;
          }

          .dar-contact-info-intro {
            color: #7B8797;
            font-size: 13px;
            line-height: 2;
            margin: 15px 0 35px;
          }

          .dar-contact-detail {
            margin-bottom: 30px;
          }

          .dar-contact-detail-label {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #9A7535;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }

          .dar-contact-detail-label::before {
            content: "";
            width: 22px;
            height: 1px;
            background: #C9A84C;
          }

          .dar-contact-detail-text {
            color: #526174;
            font-size: 13px;
            line-height: 2;
            margin: 0;
          }

          .dar-contact-map {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 12px;
            color: #B8953F;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            transition: gap .3s;
          }

          .dar-contact-map:hover {
            gap: 14px;
          }

          .dar-contact-socials {
            display: flex;
            gap: 12px;
            margin-top: 20px;
          }

          .dar-contact-social {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #10243D;
            background: #F4F7FA;
            border: 1px solid rgba(16,36,61,.08);
            transition: all .3s;
            text-decoration: none;
          }

          .dar-contact-social svg {
            width: 17px;
            height: 17px;
          }

          .dar-contact-social:hover {
            color: #B8953F;
            background: white;
            border-color: #C9A84C;
            transform: translateY(-4px);
          }

          /* CTA PANEL */

          .dar-contact-cta {
            position: relative;
            overflow: hidden;
            padding: clamp(35px,5vw,65px);
            background: linear-gradient(145deg,#10243D,#0B1A2E);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .dar-contact-cta::before {
            content: "DAR";
            position: absolute;
            bottom: -65px;
            left: -20px;
            font-size: 190px;
            font-weight: 900;
            letter-spacing: -10px;
            color: rgba(255,255,255,.025);
            pointer-events: none;
          }

          .dar-contact-cta-content {
            position: relative;
            z-index: 1;
          }

          .dar-contact-cta-label {
            color: #D0B16A;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 3px;
            margin-bottom: 25px;
          }

          .dar-contact-cta-title {
            font-size: clamp(28px,3vw,42px);
            line-height: 1.5;
            font-weight: 800;
            margin: 0;
            color: white;
          }

          .dar-contact-cta-title span {
            color: #D0B16A;
          }

          .dar-contact-cta-desc {
            color: rgba(255,255,255,.55);
            font-size: 13px;
            line-height: 2.2;
            margin: 20px 0 35px;
            max-width: 400px;
          }

          .dar-contact-cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            width: fit-content;
            padding: 16px 28px;
            background: linear-gradient(135deg,#C9A84C,#E8C96A);
            color: #10243D;
            border: none;
            font-family: inherit;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition: all .35s;
          }

          .dar-contact-cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 35px rgba(201,168,76,.2);
          }

          .dar-contact-cta-btn span {
            font-size: 18px;
            transition: transform .3s;
          }

          .dar-contact-cta-btn:hover span {
            transform: translateX(${ar ? "-5px" : "5px"});
          }

          .dar-contact-cta-note {
            color: rgba(255,255,255,.3);
            font-size: 10px;
            margin-top: 22px;
          }

          /* MODAL */

          .dar-contact-overlay {
            position: fixed;
            inset: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(5,13,25,.72);
            backdrop-filter: blur(8px);
            animation: darContactFade .25s ease both;
          }

          .dar-contact-modal {
            width: 100%;
            max-width: 480px;
            background: #FFFFFF;
            border: 1px solid rgba(201,168,76,.3);
            box-shadow: 0 35px 100px rgba(0,0,0,.3);
            padding: 40px;
            position: relative;
          }

          .dar-contact-modal-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;
          }

          .dar-contact-modal-brand {
            color: #C9A84C;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 4px;
          }

          .dar-contact-modal-close {
            width: 35px;
            height: 35px;
            background: #F4F7FA;
            border: 1px solid rgba(16,36,61,.08);
            color: #10243D;
            font-size: 23px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .3s;
          }

          .dar-contact-modal-close:hover {
            background: #10243D;
            color: white;
          }

          .dar-contact-modal-title {
            text-align: center;
            color: #10243D;
            font-size: 25px;
            font-weight: 800;
            margin: 0 0 10px;
          }

          .dar-contact-modal-desc {
            text-align: center;
            color: #7B8797;
            font-size: 12px;
            line-height: 2;
            margin-bottom: 30px;
          }

          .dar-contact-field {
            margin-bottom: 18px;
          }

          .dar-contact-field label {
            display: block;
            color: #526174;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 9px;
          }

          .dar-contact-input {
            width: 100%;
            box-sizing: border-box;
            padding: 14px;
            background: #FAFCFE;
            border: 1px solid rgba(16,36,61,.12);
            color: #10243D;
            font-family: inherit;
            font-size: 13px;
            outline: none;
            transition: border-color .3s, box-shadow .3s;
          }

          .dar-contact-input:focus {
            border-color: #C9A84C;
            box-shadow: 0 0 0 3px rgba(201,168,76,.08);
          }

          .dar-contact-input::placeholder {
            color: #A0AAB7;
          }

          .dar-contact-error {
            color: #DC2626;
            font-size: 11px;
            margin-top: 8px;
          }

          .dar-contact-submit {
            width: 100%;
            margin-top: 8px;
            padding: 15px;
            background: #10243D;
            color: white;
            border: none;
            font-family: inherit;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition: all .3s;
          }

          .dar-contact-submit:hover {
            background: #C9A84C;
            color: #10243D;
          }

          /* FOOTER */

          .dar-footer {
            background: #081321;
            color: white;
            font-family: inherit;
            direction: inherit;
            position: relative;
            overflow: hidden;
          }

          .dar-footer-gold-line {
            height: 2px;
            background: linear-gradient(90deg,transparent,#C9A84C,#E8C96A,#C9A84C,transparent);
          }

          .dar-footer-container {
            max-width: 1350px;
            margin: auto;
            padding: 75px 32px 30px;
          }

          .dar-footer-grid {
            display: grid;
            grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
            gap: 45px;
            margin-bottom: 60px;
          }

          .dar-footer-brand {
            color: #C9A84C;
            font-size: 38px;
            font-weight: 900;
            letter-spacing: 7px;
            line-height: 1;
          }

          .dar-footer-brand-sub {
            color: rgba(201,168,76,.55);
            font-size: 10px;
            letter-spacing: 3px;
            margin-top: 10px;
          }

          .dar-footer-desc {
            color: rgba(255,255,255,.42);
            font-size: 12px;
            line-height: 2.2;
            max-width: 260px;
            margin: 25px 0;
          }

          .dar-footer-whatsapp {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 13px 22px;
            background: rgba(37,211,102,.08);
            border: 1px solid rgba(37,211,102,.25);
            color: #25D366;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
            transition: all .3s;
          }

          .dar-footer-whatsapp:hover {
            background: #25D366;
            color: white;
            transform: translateY(-3px);
          }

          .dar-footer-col-title {
            color: #C9A84C;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 2px;
            margin: 0 0 25px;
          }

          .dar-footer-links {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .dar-footer-link {
            color: rgba(255,255,255,.43);
            text-decoration: none;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 9px;
            transition: color .3s, gap .3s;
          }

          .dar-footer-link span {
            color: #C9A84C;
            font-size: 10px;
          }

          .dar-footer-link:hover {
            color: #E8C96A;
            gap: 14px;
          }

          .dar-footer-contact-label {
            color: rgba(255,255,255,.25);
            font-size: 9px;
            letter-spacing: 1.5px;
            margin-bottom: 8px;
          }

          .dar-footer-phone {
            color: rgba(255,255,255,.75);
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            direction: ltr;
            display: inline-block;
            transition: color .3s;
          }

          .dar-footer-phone:hover {
            color: #C9A84C;
          }

          .dar-footer-address {
            color: rgba(255,255,255,.48);
            font-size: 12px;
            line-height: 2;
            white-space: pre-line;
          }

          .dar-footer-socials {
            display: flex;
            gap: 10px;
            margin-top: 22px;
          }

          .dar-footer-social {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #C9A84C;
            border: 1px solid rgba(255,255,255,.12);
            transition: all .3s;
          }

          .dar-footer-social svg {
            width: 16px;
            height: 16px;
          }

          .dar-footer-social:hover {
            border-color: #C9A84C;
            background: rgba(201,168,76,.1);
            transform: translateY(-4px);
          }

          .dar-footer-divider {
            height: 1px;
            background: linear-gradient(90deg,transparent,rgba(201,168,76,.22),transparent);
            margin-bottom: 28px;
          }

          .dar-footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
          }

          .dar-footer-copyright {
            color: rgba(255,255,255,.25);
            font-size: 11px;
            margin: 0;
          }

          .dar-footer-location {
            display: flex;
            align-items: center;
            gap: 9px;
            color: rgba(201,168,76,.55);
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .dar-footer-location-dot {
            width: 5px;
            height: 5px;
            background: #C9A84C;
            border-radius: 50%;
          }

          @media (max-width: 900px) {
            .dar-contact-panel {
              grid-template-columns: 1fr;
            }

            .dar-footer-grid {
              grid-template-columns: repeat(2,minmax(0,1fr));
              gap: 40px;
            }
          }

          @media (max-width: 600px) {
            .dar-contact {
              padding: 80px 20px;
            }

            .dar-contact-header {
              margin-bottom: 40px;
            }

            .dar-contact-info,
            .dar-contact-cta {
              padding: 30px 24px;
            }

            .dar-contact-cta-btn {
              width: 100%;
              box-sizing: border-box;
            }

            .dar-contact-modal {
              padding: 28px 22px;
            }

            .dar-footer-container {
              padding: 55px 22px 25px;
            }

            .dar-footer-grid {
              grid-template-columns: 1fr;
              gap: 38px;
              margin-bottom: 40px;
            }

            .dar-footer-bottom {
              flex-direction: column;
              align-items: flex-start;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dar-contact *,
            .dar-footer * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        <div className="dar-contact-container">

          {/* HEADER */}

          <div className="dar-contact-header">
            <div className="dar-contact-eyebrow">
              <span className="dar-contact-dot" />
              {t("contact", "label") || (ar ? "تواصل معنا" : "GET IN TOUCH")}
              <span className="dar-contact-dot" />
            </div>

            <h2 className="dar-contact-title">
              {t("contact", "leftTitle1")}
              <span>{t("contact", "leftTitle2")}</span>
            </h2>

            <div className="dar-contact-divider" />

            <p className="dar-contact-subtitle">
              {t("contact", "rightSub2")}
            </p>
          </div>

          {/* CONTACT PANEL */}

          <div className="dar-contact-panel">

            {/* INFO */}

            <div className="dar-contact-info">
              <h3 className="dar-contact-info-title">
                {ar ? "دعنا" : "Let's"}
                <span> {ar ? "نتواصل" : "Connect"}</span>
              </h3>

              <p className="dar-contact-info-intro">
                {ar
                  ? "يسعدنا استقبال استفساراتك ومساعدتك في اختيار استثمارك القادم."
                  : "We'd love to hear from you and help you find your next investment."}
              </p>

              <div className="dar-contact-detail">
                <div className="dar-contact-detail-label">
                  {t("contact", "officeLabel")}
                </div>

                <p className="dar-contact-detail-text">
                  {t("contact", "officeAddr")}
                </p>

                <a
                  href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dar-contact-map"
                >
                  {t("contact", "mapLink")}
                  <span>{ar ? "←" : "→"}</span>
                </a>
              </div>

              <div className="dar-contact-detail">
                <div className="dar-contact-detail-label">
                  {t("contact", "socialLabel")}
                </div>

                <div className="dar-contact-socials">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dar-contact-social"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="dar-contact-cta">
              <div className="dar-contact-cta-content">
                <div className="dar-contact-cta-label">
                  DAR DEVELOPMENTS
                </div>

                <h2 className="dar-contact-cta-title">
                  {t("contact", "rightTitle")}
                </h2>

                <p className="dar-contact-cta-desc">
                  {t("contact", "rightSub1")}
                  <br />
                  {t("contact", "rightSub2")}
                </p>

                <button
                  className="dar-contact-cta-btn"
                  onClick={() => setShowForm(true)}
                >
                  {t("contact", "ctaBtn")}
                  <span>{ar ? "←" : "→"}</span>
                </button>

                <p className="dar-contact-cta-note">
                  {ar
                    ? "فريقنا جاهز لمساعدتك"
                    : "OUR TEAM IS READY TO ASSIST YOU"}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PREMIUM MODAL */}

        {showForm && (
          <div
            className="dar-contact-overlay"
            onClick={closeForm}
          >
            <div
              className="dar-contact-modal"
              dir={ar ? "rtl" : "ltr"}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dar-contact-modal-top">
                <span className="dar-contact-modal-brand">
                  DAR DEVELOPMENTS
                </span>

                <button
                  className="dar-contact-modal-close"
                  onClick={closeForm}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <h3 className="dar-contact-modal-title">
                {t("contact", "popupTitle")}
              </h3>

              <p className="dar-contact-modal-desc">
                {ar
                  ? "املأ بياناتك وسيتم تحويلك إلى واتساب لمتابعة استفسارك."
                  : "Enter your details and continue your inquiry through WhatsApp."}
              </p>

              <div className="dar-contact-field">
                <label>
                  {t("contact", "namePlaceholder")}
                </label>

                <input
                  className="dar-contact-input"
                  placeholder={t("contact", "namePlaceholder")}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.trim()) setNameError(false);
                  }}
                  style={{
                    borderColor: nameError ? "#DC2626" : undefined,
                  }}
                />

                {nameError && (
                  <p className="dar-contact-error">
                    {ar
                      ? "من فضلك أدخل الاسم"
                      : "Please enter your name"}
                  </p>
                )}
              </div>

              <div className="dar-contact-field">
                <label>
                  {t("contact", "selectProject")}
                </label>

                <select
                  className="dar-contact-input"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="">
                    {t("contact", "selectProject")}
                  </option>

                  {projects.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="dar-contact-submit"
                onClick={handleWhatsApp}
              >
                {t("contact", "sendWhatsapp")}
                <span style={{ marginInlineStart: 10 }}>
                  {ar ? "←" : "→"}
                </span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* SIGNATURE FOOTER */}

      <footer
        className="dar-footer"
        style={{
          direction: ar ? "rtl" : "ltr",
          fontFamily: ar
            ? "'Noto Naskh Arabic', serif"
            : "'Montserrat', sans-serif",
        }}
      >
        <div className="dar-footer-gold-line" />

        <div className="dar-footer-container">

          <div className="dar-footer-grid">

            {/* BRAND */}

            <div>
              <div className="dar-footer-brand">DAR</div>

              <div className="dar-footer-brand-sub">
                {ar ? "للاستثمار العقاري" : "DEVELOPMENTS"}
              </div>

              <p className="dar-footer-desc">
                {ar
                  ? "نبني مساحات، نصنع قيمة، ونرسم ملامح المستقبل في طنطا ومصر."
                  : "Building spaces, creating value, and shaping the future in Tanta and Egypt."}
              </p>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="dar-footer-whatsapp"
              >
                <span>↗</span>
                {ar ? "تواصل عبر واتساب" : "CHAT ON WHATSAPP"}
              </a>
            </div>

            {/* QUICK LINKS */}

            <div>
              <h4 className="dar-footer-col-title">
                {ar ? "روابط سريعة" : "QUICK LINKS"}
              </h4>

              <div className="dar-footer-links">
                {(ar
                  ? ["الرئيسية", "المشاريع", "عن الشركة", "تواصل معنا"]
                  : ["Home", "Projects", "About", "Contact"]
                ).map((label, i) => (
                  <a
                    key={i}
                    href={["/#home", "/#projects", "/#about", "/#contact"][i]}
                    className="dar-footer-link"
                  >
                    <span>{ar ? "←" : "→"}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* PROJECTS */}

            <div>
              <h4 className="dar-footer-col-title">
                {ar ? "مشاريعنا" : "OUR PROJECTS"}
              </h4>

              <div className="dar-footer-links">
                {[
                  { label: "Dar Damac", href: "/projects/damac" },
                  { label: "Dar Landmark", href: "/projects/landmark" },
                  { label: "Dar Elwrood", href: "/projects/elwrood" },
                  { label: "Palm 2", href: "/projects/palm2" },
                ].map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="dar-footer-link"
                  >
                    <span>{ar ? "←" : "→"}</span>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACT */}

            <div>
              <h4 className="dar-footer-col-title">
                {ar ? "تواصل معنا" : "CONTACT"}
              </h4>

              <div>
                <p className="dar-footer-contact-label">
                  {ar ? "الهاتف / واتساب" : "PHONE / WHATSAPP"}
                </p>

                <a
                  href={`tel:+${phone}`}
                  className="dar-footer-phone"
                >
                  +20 103 920 7908
                </a>
              </div>

              <div style={{ marginTop: 25 }}>
                <p className="dar-footer-contact-label">
                  {ar ? "العنوان" : "ADDRESS"}
                </p>

                <p className="dar-footer-address">
                  {ar
                    ? "طنطا - شارع توت عنخ آمون\nمن محمد فريد - فوق مخبز الزهراء"
                    : "Tanta - Tutankhamun Street\nMohamed Farid - above Al Zahraa Bakery"}
                </p>
              </div>

              <div className="dar-footer-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dar-footer-social"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* BOTTOM */}

          <div className="dar-footer-divider" />

          <div className="dar-footer-bottom">
            <p className="dar-footer-copyright">
              {ar
                ? `© ${new Date().getFullYear()} دار للاستثمار العقاري. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} DAR Developments. All rights reserved.`}
            </p>

            <div className="dar-footer-location">
              <span className="dar-footer-location-dot" />
              {ar ? "طنطا — مصر" : "TANTA — EGYPT"}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Contact;
