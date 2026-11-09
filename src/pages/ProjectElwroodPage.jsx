
@import url("https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap");

.landmark-page {
  --lm-ivory: #F8F6F1;
  --lm-navy: #10243D;
  --lm-gold: #B89552;
  --lm-light-gold: #D7BC83;
  --lm-text: #263449;
  --lm-muted: #7C8490;

  background: var(--lm-ivory);
  color: var(--lm-navy);
  font-family: "DM Sans", "Alexandria", sans-serif;
  overflow: hidden;
}

.landmark-page.rtl {
  direction: rtl;
  font-family: "Alexandria", sans-serif;
}

.landmark-page.ltr {
  direction: ltr;
}

/* HERO */

.landmark-hero {
  position: relative;
  padding: 95px 7% 35px;
  background:
    radial-gradient(circle at 85% 10%, rgba(184,149,82,.10), transparent 35%),
    linear-gradient(135deg, #F8F6F1 0%, #F5F1E9 100%);
}

.landmark-hero-container {
  max-width: 1450px;
  margin: auto;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 75px;
  align-items: center;
}

.landmark-page.rtl .landmark-hero-container {
  grid-template-columns: 1.1fr .9fr;
}

.landmark-hero-content {
  padding: 35px 0;
  position: relative;
  z-index: 2;
}

.landmark-eyebrow,
.landmark-section-overline,
.landmark-card-eyebrow,
.landmark-contact-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--lm-gold);
}

.landmark-eyebrow::before,
.landmark-section-overline::before {
  content: "";
  width: 28px;
  height: 1px;
  background: var(--lm-gold);
}

.landmark-title {
  margin-top: 28px;
}

.landmark-title h1 {
  margin: 0;
  font-size: clamp(30px, 4vw, 55px);
  font-weight: 300;
  color: var(--lm-navy);
  line-height: 1.5;
}

.landmark-title h2 {
  margin: -4px 0 0;
  font-size: clamp(42px, 6vw, 85px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -3px;
  color: var(--lm-navy);
}

.landmark-title-line {
  width: 90px;
  height: 2px;
  background: linear-gradient(90deg, var(--lm-gold), var(--lm-light-gold));
  margin: 32px 0;
}

.landmark-page.rtl .landmark-title-line {
  background: linear-gradient(270deg, var(--lm-gold), var(--lm-light-gold));
}

.landmark-description {
  max-width: 540px;
  color: #697381;
  font-size: 14px;
  line-height: 2.2;
  font-weight: 300;
}

.landmark-hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 35px;
  flex-wrap: wrap;
}

.landmark-primary-btn,
.landmark-secondary-btn {
  min-height: 52px;
  padding: 0 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-decoration: none;
  font-size: 12px;
  transition: .3s ease;
}

.landmark-primary-btn {
  background: var(--lm-navy);
  color: white;
  border: 1px solid var(--lm-navy);
}

.landmark-primary-btn span {
  color: var(--lm-light-gold);
}

.landmark-primary-btn:hover {
  background: var(--lm-gold);
  border-color: var(--lm-gold);
  transform: translateY(-3px);
}

.landmark-secondary-btn {
  border: 1px solid rgba(16,36,61,.18);
  color: var(--lm-navy);
}

.landmark-secondary-btn:hover {
  border-color: var(--lm-gold);
  color: var(--lm-gold);
}

.landmark-hero-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 45px;
  color: #8B9098;
  font-size: 10px;
  letter-spacing: .4px;
}

.landmark-note-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--lm-gold);
}

/* GALLERY */

.landmark-hero-gallery {
  min-width: 0;
}

.landmark-gallery-main {
  position: relative;
  height: clamp(380px, 45vw, 600px);
  overflow: hidden;
  background: #E9E3D9;
  border-radius: 3px;
}

.landmark-gallery-image {
  position: absolute;
  inset: 0;
}

.landmark-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 1s ease, transform 5s ease;
}

.landmark-slide.active {
  opacity: 1;
  transform: scale(1);
}

.landmark-gallery-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(16,36,61,.15) 0%,
    transparent 40%,
    rgba(16,36,61,.5) 100%
  );
}

.landmark-gallery-label {
  position: absolute;
  bottom: 28px;
  left: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 10px;
  letter-spacing: 2px;
}

.landmark-page.rtl .landmark-gallery-label {
  left: auto;
  right: 30px;
}

.landmark-label-line {
  width: 35px;
  height: 1px;
  background: var(--lm-light-gold);
}

.landmark-gallery-controls {
  position: absolute;
  bottom: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
  font-size: 11px;
}

.landmark-page.rtl .landmark-gallery-controls {
  right: auto;
  left: 25px;
}

.landmark-gallery-controls button {
  border: 1px solid rgba(255,255,255,.55);
  background: transparent;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;
}

.landmark-gallery-controls button:hover {
  background: var(--lm-gold);
  border-color: var(--lm-gold);
}

.landmark-count-divider {
  color: var(--lm-light-gold);
  margin: 0 3px;
}

.landmark-thumbnails {
  display: flex;
  gap: 9px;
  margin-top: 12px;
}

.landmark-thumbnail {
  flex: 1;
  height: 65px;
  min-width: 0;
  padding: 0;
  border: 2px solid transparent;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  opacity: .55;
  transition: .3s;
}

.landmark-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.landmark-thumbnail.active {
  border-color: var(--lm-gold);
  opacity: 1;
}

.landmark-thumbnail:hover {
  opacity: 1;
}

.landmark-hero-bottom {
  max-width: 1450px;
  margin: 65px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(16,36,61,.12);
  display: flex;
  justify-content: space-between;
  color: #9A9DA2;
  font-size: 9px;
  letter-spacing: 2px;
}

/* SECTION HEADINGS */

.landmark-section-heading {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 55px;
}

.landmark-section-heading h2 {
  margin: 18px 0 12px;
  font-size: clamp(28px, 4vw, 45px);
  font-weight: 400;
  color: var(--lm-navy);
  line-height: 1.5;
}

.landmark-section-heading h2 span {
  color: var(--lm-gold);
  font-weight: 600;
}

.landmark-section-heading p {
  color: #7B8490;
  font-size: 13px;
  line-height: 2;
  font-weight: 300;
}

/* VIDEO */

.landmark-video-section {
  padding: 110px 7%;
  background: #F8F6F1;
}

.landmark-video-wrapper {
  max-width: 1250px;
  margin: auto;
  position: relative;
  background: #E9E3D9;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 25px 70px rgba(16,36,61,.08);
}

.landmark-video-wrapper video {
  display: block;
  width: 100%;
  max-height: 680px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.landmark-video-badge {
  position: absolute;
  top: 25px;
  left: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(16,36,61,.8);
  color: white;
  padding: 12px 17px;
  font-size: 9px;
  letter-spacing: 2px;
  backdrop-filter: blur(10px);
}

.landmark-page.rtl .landmark-video-badge {
  left: auto;
  right: 25px;
}

.landmark-video-badge-dot {
  width: 6px;
  height: 6px;
  background: var(--lm-light-gold);
  border-radius: 50%;
}

/* DETAILS SECTION */

.landmark-details-section {
  padding: 110px 7% 130px;
  background:
    radial-gradient(circle at 5% 80%, rgba(184,149,82,.07), transparent 35%),
    #F4F0E8;
}

.landmark-details-layout {
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: stretch;
}

/* DETAILS CARD */

.landmark-details-card {
  background: #FCFBF8;
  border: 1px solid rgba(184,149,82,.24);
  padding: 42px;
  box-shadow: 0 20px 55px rgba(16,36,61,.045);
  position: relative;
}

.landmark-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.landmark-card-eyebrow {
  font-size: 9px;
  letter-spacing: 2px;
}

.landmark-card-top h3 {
  margin: 13px 0 0;
  font-size: 25px;
  font-weight: 500;
  color: var(--lm-navy);
}

.landmark-card-icon {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F0E5;
  border: 1px solid rgba(184,149,82,.2);
  color: var(--lm-gold);
  flex-shrink: 0;
}

.landmark-card-icon svg {
  width: 27px;
  height: 27px;
}

.landmark-card-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(184,149,82,.4),
    rgba(16,36,61,.06)
  );
  margin: 25px 0;
}

.landmark-page.rtl .landmark-card-divider {
  background: linear-gradient(
    270deg,
    rgba(184,149,82,.4),
    rgba(16,36,61,.06)
  );
}

.landmark-detail-row {
  display: flex;
  align-items: flex-start;
  gap: 17px;
}

.landmark-detail-icon {
  width: 43px;
  height: 43px;
  min-width: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F7F3EB;
  color: var(--lm-gold);
  border: 1px solid rgba(184,149,82,.17);
}

.landmark-detail-icon svg {
  width: 22px;
  height: 22px;
}

.landmark-detail-content {
  flex: 1;
  min-width: 0;
}

.landmark-detail-label {
  display: block;
  color: #A18A61;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
}

.landmark-detail-content h4 {
  margin: 0;
  color: var(--lm-navy);
  font-size: 13px;
  font-weight: 500;
  line-height: 2;
}

.landmark-detail-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--lm-gold);
  text-decoration: none;
  font-size: 10px;
  margin-top: 9px;
  transition: .3s;
}

.landmark-detail-link:hover {
  color: var(--lm-navy);
}

.landmark-details-bottom-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--lm-navy);
  color: white;
  text-decoration: none;
  padding: 18px 22px;
  font-size: 12px;
  margin-top: 35px;
  transition: .3s;
}

.landmark-details-bottom-btn span {
  color: var(--lm-light-gold);
}

.landmark-details-bottom-btn:hover {
  background: var(--lm-gold);
  transform: translateY(-2px);
}

/* CONTACT CARD */

.landmark-contact-card {
  background: #FCFBF8;
  border: 1px solid rgba(184,149,82,.24);
  padding: 42px;
  position: relative;
  box-shadow: 0 20px 55px rgba(16,36,61,.045);
  overflow: hidden;
}

.landmark-contact-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--lm-navy),
    var(--lm-gold),
    var(--lm-light-gold)
  );
}

.landmark-contact-card-header {
  position: relative;
}

.landmark-contact-eyebrow {
  font-size: 9px;
  letter-spacing: 2px;
}

.landmark-contact-decoration {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--lm-light-gold);
  font-size: 30px;
  opacity: .6;
}

.landmark-page.rtl .landmark-contact-decoration {
  right: auto;
  left: 0;
}

.landmark-contact-card-header h3 {
  font-size: 27px;
  font-weight: 500;
  line-height: 1.7;
  color: var(--lm-navy);
  margin: 15px 0 10px;
}

.landmark-contact-card-header p {
  font-size: 12px;
  line-height: 2.2;
  color: #818995;
  font-weight: 300;
  margin: 0;
}

.landmark-contact-form {
  margin-top: 35px;
}

.landmark-contact-form label {
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: #697381;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.landmark-input-wrapper {
  display: flex;
  align-items: center;
  gap: 13px;
  background: #F8F6F1;
  border: 1px solid #E6E0D5;
  padding: 0 17px;
  height: 58px;
  transition: .3s;
}

.landmark-input-wrapper:focus-within {
  border-color: var(--lm-gold);
  box-shadow: 0 0 0 3px rgba(184,149,82,.08);
}

.landmark-input-wrapper svg {
  width: 20px;
  height: 20px;
  color: var(--lm-gold);
  flex-shrink: 0;
}

.landmark-input-wrapper input {
  flex: 1;
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--lm-navy);
  font-family: inherit;
  font-size: 12px;
}

.landmark-input-wrapper input::placeholder {
  color: #A2A6AC;
  font-weight: 300;
}

.landmark-contact-note {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #969AA0;
  font-size: 10px;
  margin-top: 17px;
  line-height: 1.8;
}

.landmark-contact-note-icon {
  color: var(--lm-gold);
}

.landmark-whatsapp-btn {
  width: 100%;
  min-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  margin-top: 28px;
  background: var(--lm-navy);
  color: white;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: .35s;
  position: relative;
}

.landmark-whatsapp-btn svg {
  width: 20px;
  height: 20px;
}

.landmark-btn-arrow {
  position: absolute;
  right: 20px;
  color: var(--lm-light-gold);
  transition: .3s;
}

.landmark-page.rtl .landmark-btn-arrow {
  right: auto;
  left: 20px;
}

.landmark-whatsapp-btn:hover {
  background: #B89552;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(184,149,82,.2);
}

.landmark-whatsapp-btn:hover .landmark-btn-arrow {
  transform: translate(3px, -3px);
}

.landmark-form-footer {
  text-align: center;
  color: #9A9EA4;
  font-size: 9px;
  margin-top: 20px;
}

.landmark-form-footer span {
  color: var(--lm-gold);
  margin-inline-end: 5px;
}

/* TRUST */

.landmark-trust-section {
  background: var(--lm-navy);
  color: white;
  padding: 100px 7%;
  position: relative;
  overflow: hidden;
}

.landmark-trust-section::before {
  content: "";
  position: absolute;
  width: 550px;
  height: 550px;
  border: 1px solid rgba(215,188,131,.08);
  border-radius: 50%;
  top: -300px;
  right: -150px;
  box-shadow:
    0 0 0 60px rgba(215,188,131,.025),
    0 0 0 120px rgba(215,188,131,.02);
}

.landmark-trust-inner {
  max-width: 1250px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.landmark-trust-heading {
  text-align: center;
  margin-bottom: 65px;
}

.landmark-trust-heading > span {
  color: var(--lm-light-gold);
  font-size: 9px;
  letter-spacing: 3px;
}

.landmark-trust-heading h2 {
  font-size: 40px;
  font-weight: 300;
  margin: 20px 0 12px;
}

.landmark-trust-heading h2 span {
  color: var(--lm-light-gold);
  font-weight: 600;
}

.landmark-trust-heading p {
  color: rgba(255,255,255,.55);
  font-size: 12px;
  line-height: 2;
}

.landmark-trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.landmark-trust-item {
  padding: 30px 25px;
  border: 1px solid rgba(215,188,131,.15);
  background: rgba(255,255,255,.015);
  transition: .3s;
}

.landmark-trust-item:hover {
  background: rgba(255,255,255,.04);
  border-color: rgba(215,188,131,.4);
  transform: translateY(-5px);
}

.landmark-trust-number {
  color: var(--lm-light-gold);
  font-size: 12px;
  letter-spacing: 2px;
}

.landmark-trust-line {
  width: 45px;
  height: 1px;
  background: var(--lm-gold);
  margin: 22px 0;
}

.landmark-trust-item h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 0 0 15px;
}

.landmark-trust-item p {
  color: rgba(255,255,255,.55);
  font-size: 11px;
  line-height: 2.2;
  font-weight: 300;
}

/* FOOTER */

.landmark-footer {
  background: #0B1A2D;
  color: white;
  padding: 65px 7% 25px;
}

.landmark-footer-main {
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 55px;
}

.landmark-footer-logo {
  display: block;
  font-family: "DM Sans", sans-serif;
  font-size: 38px;
  letter-spacing: 8px;
  font-weight: 500;
  color: var(--lm-light-gold);
}

.landmark-footer-logo-sub {
  display: block;
  font-size: 9px;
  letter-spacing: 4px;
  color: rgba(255,255,255,.6);
  margin-top: 4px;
}

.landmark-footer-brand p {
  font-size: 11px;
  color: rgba(255,255,255,.45);
  margin-top: 25px;
  line-height: 2;
}

.landmark-footer-contact,
.landmark-footer-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
}

.landmark-footer-contact > span,
.landmark-footer-social > span {
  font-size: 9px;
  color: var(--lm-light-gold);
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.landmark-footer-contact a,
.landmark-footer-social a {
  color: rgba(255,255,255,.65);
  text-decoration: none;
  font-size: 11px;
  transition: .3s;
}

.landmark-footer-contact a:hover,
.landmark-footer-social a:hover {
  color: var(--lm-light-gold);
}

.landmark-footer-bottom {
  max-width: 1250px;
  margin: auto;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,.1);
  display: flex;
  justify-content: space-between;
  color: rgba(255,255,255,.35);
  font-size: 9px;
  letter-spacing: 1px;
}

/* BACK */

.landmark-back-to-projects {
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(16,36,61,.94);
  backdrop-filter: blur(10px);
  color: white;
  text-decoration: none;
  padding: 14px 20px;
  font-size: 11px;
  box-shadow: 0 5px 25px rgba(16,36,61,.15);
  transition: .3s;
}

.landmark-page.rtl .landmark-back-to-projects {
  left: auto;
  right: 25px;
}

.landmark-back-to-projects span {
  color: var(--lm-light-gold);
}

.landmark-back-to-projects:hover {
  background: var(--lm-gold);
  transform: translateY(-3px);
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .landmark-hero-container {
    gap: 35px;
  }

  .landmark-details-card,
  .landmark-contact-card {
    padding: 30px;
  }

  .landmark-gallery-main {
    height: 450px;
  }
}

@media (max-width: 850px) {
  .landmark-hero {
    padding: 65px 5% 30px;
  }

  .landmark-hero-container,
  .landmark-page.rtl .landmark-hero-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .landmark-hero-content {
    padding: 10px 0 0;
  }

  .landmark-title h2 {
    letter-spacing: -1px;
  }

  .landmark-gallery-main {
    height: 480px;
  }

  .landmark-hero-bottom {
    margin-top: 40px;
  }

  .landmark-video-section,
  .landmark-details-section {
    padding: 80px 5%;
  }

  .landmark-details-layout {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .landmark-trust-section {
    padding: 80px 5%;
  }

  .landmark-trust-grid {
    gap: 15px;
  }

  .landmark-trust-item {
    padding: 25px 18px;
  }

  .landmark-footer {
    padding: 55px 5% 25px;
  }

  .landmark-footer-main {
    gap: 35px;
  }
}

@media (max-width: 600px) {
  .landmark-hero {
    padding-top: 45px;
  }

  .landmark-title h1 {
    font-size: 30px;
  }

  .landmark-title h2 {
    font-size: 48px;
  }

  .landmark-description {
    font-size: 12px;
    line-height: 2.2;
  }

  .landmark-hero-actions {
    gap: 10px;
  }

  .landmark-primary-btn,
  .landmark-secondary-btn {
    min-height: 48px;
    padding: 0 16px;
    font-size: 11px;
  }

  .landmark-gallery-main {
    height: 370px;
  }

  .landmark-thumbnail {
    height: 48px;
  }

  .landmark-gallery-label {
    bottom: 22px;
    left: 18px;
  }

  .landmark-page.rtl .landmark-gallery-label {
    right: 18px;
  }

  .landmark-gallery-controls {
    right: 15px;
    bottom: 15px;
    gap: 9px;
  }

  .landmark-page.rtl .landmark-gallery-controls {
    left: 15px;
  }

  .landmark-gallery-controls button {
    width: 30px;
    height: 30px;
  }

  .landmark-hero-bottom {
    font-size: 7px;
    letter-spacing: 1px;
    gap: 10px;
  }

  .landmark-hero-bottom span:last-child {
    text-align: end;
  }

  .landmark-video-section,
  .landmark-details-section {
    padding: 65px 5%;
  }

  .landmark-section-heading {
    margin-bottom: 35px;
  }

  .landmark-section-heading h2 {
    font-size: 30px;
  }

  .landmark-video-wrapper video {
    aspect-ratio: 4 / 3;
  }

  .landmark-video-badge {
    top: 12px;
    left: 12px;
    padding: 9px 12px;
    font-size: 8px;
  }

  .landmark-page.rtl .landmark-video-badge {
    right: 12px;
  }

  .landmark-details-card,
  .landmark-contact-card {
    padding: 25px 20px;
  }

  .landmark-card-top h3,
  .landmark-contact-card-header h3 {
    font-size: 22px;
  }

  .landmark-card-divider {
    margin: 20px 0;
  }

  .landmark-detail-row {
    gap: 12px;
  }

  .landmark-detail-icon {
    width: 38px;
    height: 38px;
    min-width: 38px;
  }

  .landmark-detail-content h4 {
    font-size: 12px;
  }

  .landmark-trust-section {
    padding: 65px 5%;
  }

  .landmark-trust-heading h2 {
    font-size: 30px;
  }

  .landmark-trust-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .landmark-trust-item {
    padding: 25px;
  }

  .landmark-footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 35px 20px;
  }

  .landmark-footer-brand {
    grid-column: 1 / -1;
  }

  .landmark-footer-bottom {
    font-size: 7px;
    letter-spacing: .5px;
    gap: 10px;
  }

  .landmark-back-to-projects {
    bottom: 15px;
    left: 15px;
    padding: 12px 15px;
    font-size: 10px;
  }

  .landmark-page.rtl .landmark-back-to-projects {
    right: 15px;
  }
}

@media (max-width: 380px) {
  .landmark-gallery-main {
    height: 310px;
  }

  .landmark-title h2 {
    font-size: 40px;
  }

  .landmark-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .landmark-footer-main {
    grid-template-columns: 1fr;
  }

  .landmark-footer-brand {
    grid-column: auto;
  }
}
