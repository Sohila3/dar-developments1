
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
      `${t("contact", "whatsappMsg2")} ${project || (ar ? "لم يتم تحديد المشروع" : "No project selected")}`;

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
        className={`dar-contact ${ar ? "is-ar" : "is-en"}`}
        dir={ar ? "rtl" : "ltr"}
      >
        <style>{`
          .dar-contact {
            --contact-navy: #10243D;
            --contact-dark: #081321;
            --contact-gold: #B89552;
            --contact-gold-light: #D7BC83;
            --contact-ivory: #F8F6F1;
            --contact-muted: #788391;

            position: relative;
            overflow: hidden;
            padding: 120px 24px;
            background:
              radial-gradient(ellipse at 10% 15%, rgba(184,149,82,.06), transparent 40%),
              linear-gradient(180deg, #FFFFFF 0%, var(--contact-ivory) 100%);
            color: var(--contact-navy);
            font-family: inherit;
            isolation: isolate;
          }

          .dar-contact *,
          .dar-contact *::before,
          .dar-contact *::after,
          .dar-footer *,
          .dar-footer *::before,
          .dar-footer *::after {
            box-sizing: border-box;
          }

          @keyframes contactFadeUp {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* HEADER */

          .dar-contact-container {
            max-width: 1380px;
            margin: auto;
            position: relative;
            z-index: 1;
          }

          .dar-contact-header {
            text-align: center;
            margin-bottom: 65px;
            animation: contactFadeUp .9s cubic-bezier(.22,.61,.36,1) both;
          }

          .dar-contact-eyebrow {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 13px;
            color: var(--contact-gold);
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 25px;
          }

          .dar-contact-dot {
            width: 5px;
            height: 5px;
            background: var(--contact-gold);
            border-radius: 50%;
          }

          .dar-contact-title {
            color: var(--contact-navy);
            font-size: clamp(35px,5vw,65px);
            font-weight: 800;
            line-height: 1.5;
            margin: 0;
          }

          .dar-contact-title span {
            position: relative;
            display: inline-block;
            color: var(--contact-gold);
            margin-inline-start: 10px;
          }

          .dar-contact-title span::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 7px;
            background: rgba(184,149,82,.12);
            z-index: -1;
          }

          .dar-contact-divider {
            width: 55px;
            height: 2px;
            margin: 25px auto;
            background: linear-gradient(90deg,var(--contact-gold),var(--contact-gold-light));
          }

          .dar-contact-subtitle {
            max-width: 680px;
            margin: auto;
            color: var(--contact-muted);
            font-size: 14px;
            line-height: 2.2;
          }

          /* MAIN PANEL */

          .dar-contact-panel {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1200px;
            margin: auto;
            background: #FFFFFF;
            border: 1px solid rgba(16,36,61,.075);
            box-shadow: 0 35px 90px rgba(16,36,61,.065);
            animation: contactFadeUp 1s .15s cubic-bezier(.22,.61,.36,1) both;
          }

          /* INFO */

          .dar-contact-info {
            padding: clamp(35px,5vw,75px);
            background: #FFFFFF;
          }

          .dar-contact-info-top {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--contact-gold);
            font-family: "DM Sans",sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2.5px;
            margin-bottom: 28px;
          }

          .dar-contact-info-top::before {
            content: "";
            width: 28px;
            height: 1px;
            background: var(--contact-gold);
          }

          .dar-contact-info-title {
            color: var(--contact-navy);
            font-size: clamp(27px,3vw,42px);
            font-weight: 800;
            line-height: 1.55;
            margin: 0;
          }

          .dar-contact-info-title span {
            color: var(--contact-gold);
          }

          .dar-contact-info-intro {
            color: var(--contact-muted);
            font-size: 13px;
            line-height: 2.2;
            margin: 18px 0 45px;
            max-width: 450px;
          }

          .dar-contact-detail {
            margin-bottom: 35px;
          }

          .dar-contact-detail-label {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--contact-gold);
            font-family: "DM Sans",sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 15px;
          }

          .dar-contact-detail-label::before {
            content: "";
            width: 24px;
            height: 1px;
            background: var(--contact-gold);
          }

          .dar-contact-detail-text {
            color: #526174;
            font-size: 13px;
            line-height: 2.2;
            margin: 0;
          }

          .dar-contact-map {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 16px;
            color: var(--contact-gold);
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            transition: gap 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-contact-map:hover {
            gap: 17px;
          }

          .dar-contact-socials {
            display: flex;
            gap: 12px;
            margin-top: 20px;
          }

          .dar-contact-social {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--contact-navy);
            background: #FAF9F6;
            border: 1px solid rgba(16,36,61,.08);
            text-decoration: none;
            transition:
              transform 1s cubic-bezier(.22,.61,.36,1),
              color 1s ease,
              background 1s ease,
              border-color 1s ease;
          }

          .dar-contact-social svg {
            width: 17px;
            height: 17px;
          }

          .dar-contact-social:hover {
            color: var(--contact-gold);
            background: #FFFFFF;
            border-color: rgba(184,149,82,.55);
            transform: translateY(-5px);
          }

          /* CTA */

          .dar-contact-cta {
            position: relative;
            overflow: hidden;
            padding: clamp(40px,5vw,75px);
            background:
              radial-gradient(circle at 90% 10%,rgba(215,188,131,.09),transparent 35%),
              linear-gradient(145deg,#10243D,#081321);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            isolation: isolate;
          }

          .dar-contact-cta::before {
            content: "DAR";
            position: absolute;
            bottom: -75px;
            inset-inline-start: -20px;
            z-index: -1;
            font-family: "DM Sans",sans-serif;
            font-size: clamp(150px,18vw,260px);
            font-weight: 900;
            letter-spacing: -15px;
            line-height: 1;
            color: rgba(255,255,255,.025);
            pointer-events: none;
            user-select: none;
          }

          .dar-contact-cta::after {
            content: "";
            position: absolute;
            width: 330px;
            height: 330px;
            top: -190px;
            inset-inline-end: -180px;
            border: 1px solid rgba(215,188,131,.13);
            border-radius: 50%;
            box-shadow:
              0 0 0 45px rgba(215,188,131,.025),
              0 0 0 90px rgba(215,188,131,.02);
            pointer-events: none;
          }

          .dar-contact-cta-content {
            position: relative;
            z-index: 1;
          }

          .dar-contact-cta-label {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--contact-gold-light);
            font-family: "DM Sans",sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 3px;
            margin-bottom: 28px;
          }

          .dar-contact-cta-label::before {
            content: "";
            width: 28px;
            height: 1px;
            background: var(--contact-gold-light);
          }

          .dar-contact-cta-title {
            font-size: clamp(30px,3.5vw,48px);
            line-height: 1.65;
            font-weight: 800;
            margin: 0;
            color: white;
          }

          .dar-contact-cta-title span {
            color: var(--contact-gold-light);
          }

          .dar-contact-cta-desc {
            color: rgba(255,255,255,.55);
            font-size: 13px;
            line-height: 2.2;
            margin: 22px 0 38px;
            max-width: 430px;
          }

          .dar-contact-cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            width: fit-content;
            padding: 17px 30px;
            background: linear-gradient(135deg,#C9A84C,#E8C96A);
            color: #10243D;
            border: 1px solid rgba(255,255,255,.12);
            font-family: inherit;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition:
              transform 1s cubic-bezier(.22,.61,.36,1),
              box-shadow 1s cubic-bezier(.22,.61,.36,1),
              background 1s ease;
          }

          .dar-contact-cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 40px rgba(201,168,76,.18);
          }

          .dar-contact-cta-btn span {
            font-size: 18px;
            transition: transform 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-contact-cta-btn:hover span {
            transform: translateX(5px);
          }

          .dar-contact.is-ar .dar-contact-cta-btn:hover span {
            transform: translateX(-5px);
          }

          .dar-contact-cta-note {
            display: flex;
            align-items: center;
            gap: 10px;
            color: rgba(255,255,255,.32);
            font-family: "DM Sans",sans-serif;
            font-size: 9px;
            letter-spacing: 1.5px;
            margin-top: 24px;
          }

          .dar-contact-cta-note::before {
            content: "";
            width: 5px;
            height: 5px;
            background: var(--contact-gold);
            border-radius: 50%;
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
            background: rgba(5,13,25,.75);
            backdrop-filter: blur(10px);
            animation: contactFadeUp .3s ease both;
          }

          .dar-contact-modal {
            width: 100%;
            max-width: 480px;
            background: #FFFFFF;
            border: 1px solid rgba(184,149,82,.3);
            box-shadow: 0 35px 100px rgba(0,0,0,.3);
            padding: 42px;
            position: relative;
            animation: contactFadeUp .45s cubic-bezier(.22,.61,.36,1) both;
          }

          .dar-contact-modal-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 28px;
          }

          .dar-contact-modal-brand {
            color: var(--contact-gold);
            font-family: "DM Sans",sans-serif;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 4px;
          }

          .dar-contact-modal-close {
            width: 38px;
            height: 38px;
            background: #FAF9F6;
            border: 1px solid rgba(16,36,61,.08);
            color: var(--contact-navy);
            font-size: 23px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition:
              background 1s ease,
              color 1s ease,
              border-color 1s ease;
          }

          .dar-contact-modal-close:hover {
            background: var(--contact-navy);
            color: white;
            border-color: var(--contact-navy);
          }

          .dar-contact-modal-title {
            text-align: center;
            color: var(--contact-navy);
            font-size: 26px;
            font-weight: 800;
            line-height: 1.6;
            margin: 0 0 12px;
          }

          .dar-contact-modal-desc {
            text-align: center;
            color: var(--contact-muted);
            font-size: 12px;
            line-height: 2.1;
            margin-bottom: 35px;
          }

          .dar-contact-field {
            margin-bottom: 22px;
          }

          .dar-contact-field label {
            display: block;
            color: #526174;
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 10px;
          }

          .dar-contact-input {
            width: 100%;
            padding: 15px;
            background: #FAFAF8;
            border: 1px solid rgba(16,36,61,.10);
            color: var(--contact-navy);
            font-family: inherit;
            font-size: 13px;
            outline: none;
            transition:
              border-color .5s ease,
              box-shadow .5s ease;
          }

          .dar-contact-input:focus {
            border-color: var(--contact-gold);
            box-shadow: 0 0 0 4px rgba(184,149,82,.08);
          }

          .dar-contact-input::placeholder {
            color: #A0AAB7;
          }

          .dar-contact-input option {
            color: var(--contact-navy);
          }

          .dar-contact-error {
            color: #DC2626;
            font-size: 11px;
            margin-top: 9px;
          }

          .dar-contact-submit {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            width: 100%;
            margin-top: 10px;
            padding: 17px;
            background: var(--contact-navy);
            color: white;
            border: none;
            font-family: inherit;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition:
              background 1s ease,
              color 1s ease,
              transform 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-contact-submit:hover {
            background: var(--contact-gold);
            color: var(--contact-navy);
            transform: translateY(-2px);
          }

          /* FOOTER */

          .dar-footer {
            --footer-navy: #081321;
            --footer-gold: #C9A84C;
            --footer-gold-light: #E8C96A;

            background: var(--footer-navy);
            color: white;
            position: relative;
            overflow: hidden;
            font-family: inherit;
          }

          .dar-footer-gold-line {
            height: 2px;
            background: linear-gradient(
              90deg,
              transparent,
              #C9A84C,
              #E8C96A,
              #C9A84C,
              transparent
            );
          }

          .dar-footer-container {
            max-width: 1380px;
            margin: auto;
            padding: 85px 32px 30px;
            position: relative;
            z-index: 1;
          }

          .dar-footer-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1.1fr 1.25fr;
            gap: 50px;
            margin-bottom: 75px;
          }

          /* BRAND */

          .dar-footer-brand {
            display: inline-block;
            color: var(--footer-gold);
            font-family: "DM Sans",sans-serif;
            font-size: 68px;
            font-weight: 900;
            letter-spacing: 8px;
            line-height: .9;
            position: relative;
          }

          .dar-footer-brand::after {
            content: "";
            position: absolute;
            bottom: -12px;
            inset-inline-start: 0;
            width: 42px;
            height: 1px;
            background: var(--footer-gold);
          }

          .dar-footer-brand-sub {
            color: rgba(215,188,131,.55);
            font-family: "DM Sans",sans-serif;
            font-size: 9px;
            letter-spacing: 3px;
            margin-top: 24px;
          }

          .dar-footer-desc {
            color: rgba(255,255,255,.42);
            font-size: 12px;
            line-height: 2.3;
            max-width: 300px;
            margin: 27px 0;
          }

          .dar-footer-whatsapp {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 14px 21px;
            border: 1px solid rgba(37,211,102,.25);
            background: rgba(37,211,102,.045);
            color: #25D366;
            font-size: 11px;
            font-weight: 700;
            text-decoration: none;
            transition:
              background 1s ease,
              color 1s ease,
              border-color 1s ease,
              transform 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-footer-whatsapp:hover {
            background: #25D366;
            color: white;
            border-color: #25D366;
            transform: translateY(-3px);
          }

          /* FOOTER COLUMNS */

          .dar-footer-col-title {
            color: var(--footer-gold);
            font-family: "DM Sans",sans-serif;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 2.5px;
            margin: 5px 0 30px;
          }

          .dar-footer-links {
            display: flex;
            flex-direction: column;
            gap: 17px;
          }

          .dar-footer-link {
            color: rgba(255,255,255,.43);
            text-decoration: none;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition:
              color 1s ease,
              gap 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-footer-link span {
            color: var(--footer-gold);
            font-size: 10px;
          }

          .dar-footer-link:hover {
            color: var(--footer-gold-light);
            gap: 15px;
          }

          /* CONTACT */

          .dar-footer-contact-label {
            color: rgba(255,255,255,.25);
            font-family: "DM Sans",sans-serif;
            font-size: 9px;
            letter-spacing: 1.5px;
            margin-bottom: 10px;
          }

          .dar-footer-phone {
            color: rgba(255,255,255,.78);
            text-decoration: none;
            font-family: "DM Sans",sans-serif;
            font-size: 14px;
            font-weight: 700;
            direction: ltr;
            display: inline-block;
            transition: color 1s ease;
          }

          .dar-footer-phone:hover {
            color: var(--footer-gold-light);
          }

          .dar-footer-address {
            color: rgba(255,255,255,.48);
            font-size: 12px;
            line-height: 2.2;
            white-space: pre-line;
          }

          .dar-footer-socials {
            display: flex;
            gap: 10px;
            margin-top: 24px;
          }

          .dar-footer-social {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--footer-gold);
            border: 1px solid rgba(255,255,255,.10);
            text-decoration: none;
            transition:
              border-color 1s ease,
              background 1s ease,
              transform 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-footer-social svg {
            width: 16px;
            height: 16px;
          }

          .dar-footer-social:hover {
            border-color: rgba(201,168,76,.6);
            background: rgba(201,168,76,.08);
            transform: translateY(-4px);
          }

          /* FOOTER BOTTOM */

          .dar-footer-divider {
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(201,168,76,.22),
              transparent
            );
            margin-bottom: 30px;
          }

          .dar-footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 18px;
          }

          .dar-footer-copyright {
            color: rgba(255,255,255,.25);
            font-family: "DM Sans",sans-serif;
            font-size: 10px;
            margin: 0;
          }

          .dar-footer-location {
            display: flex;
            align-items: center;
            gap: 10px;
            color: rgba(215,188,131,.55);
            font-family: "DM Sans",sans-serif;
            font-size: 9px;
            letter-spacing: 2px;
          }

          .dar-footer-location-dot {
            width: 5px;
            height: 5px;
            background: var(--footer-gold);
            border-radius: 50%;
          }

          /* BACK TO TOP */

          .dar-footer-top {
            position: absolute;
            top: 35px;
            inset-inline-end: 35px;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--footer-gold);
            border: 1px solid rgba(201,168,76,.3);
            text-decoration: none;
            font-size: 18px;
            transition:
              background 1s ease,
              color 1s ease,
              transform 1s cubic-bezier(.22,.61,.36,1);
          }

          .dar-footer-top:hover {
            background: var(--footer-gold);
            color: var(--footer-navy);
            transform: translateY(-4px);
          }

          /* RESPONSIVE */

          @media (max-width: 1000px) {
            .dar-contact-panel {
              grid-template-columns: 1fr;
            }

            .dar-footer-grid {
              grid-template-columns: repeat(2,minmax(0,1fr));
              gap: 50px 35px;
            }
          }

          @media (max-width: 600px) {
            .dar-contact {
              padding: 85px 18px;
            }

            .dar-contact-header {
              margin-bottom: 45px;
            }

            .dar-contact-title {
              font-size: 35px;
            }

            .dar-contact-subtitle {
              font-size: 12px;
            }

            .dar-contact-info,
            .dar-contact-cta {
              padding: 35px 25px;
            }

            .dar-contact-info-intro {
              margin-bottom: 35px;
            }

            .dar-contact-cta-title {
              font-size: 32px;
            }

            .dar-contact-cta-btn {
              width: 100%;
            }

            .dar-contact-modal {
              padding: 30px 22px;
            }

            .dar-footer-container {
              padding: 70px 23px 25px;
            }

            .dar-footer-grid {
              grid-template-columns: 1fr;
              gap: 42px;
              margin-bottom: 50px;
            }

            .dar-footer-brand {
              font-size: 60px;
            }

            .dar-footer-top {
              top: 25px;
              inset-inline-end: 23px;
              width: 38px;
              height: 38px;
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

          <header className="dar-contact-header">
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
          </header>

          {/* CONTACT PANEL */}

          <div className="dar-contact-panel">

            {/* CONTACT INFORMATION */}

            <div className="dar-contact-info">
              <div className="dar-contact-info-top">
                {ar ? "نحن هنا من أجلك" : "WE ARE HERE FOR YOU"}
              </div>

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
                  type="button"
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

        {/* MODAL */}

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
                  type="button"
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
                type="button"
                className="dar-contact-submit"
                onClick={handleWhatsApp}
              >
                {t("contact", "sendWhatsapp")}
                <span>{ar ? "←" : "→"}</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* FOOTER */}

      <footer
        className="dar-footer"
        dir={ar ? "rtl" : "ltr"}
        style={{
          fontFamily: ar
            ? "'Alexandria', sans-serif"
            : "'DM Sans', sans-serif",
        }}
      >
        <div className="dar-footer-gold-line" />

        <a
          href="#home"
          className="dar-footer-top"
          aria-label={ar ? "العودة للأعلى" : "Back to top"}
        >
          ↑
        </a>

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
