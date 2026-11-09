
import { useLanguage } from "../context/LanguageContext";

function Installments() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const benefits = [
    {
      number: "01",
      title: ar ? "خطط مرنة" : "Flexible Plans",
      desc: ar
        ? "أنظمة سداد مصممة لتناسب احتياجاتك وتمنحك مساحة أكبر لاتخاذ القرار."
        : "Payment plans designed around your needs, giving you more freedom to decide.",
    },
  ];

  const features = [
    {
      number: "01",
      title: ar ? "خطط مرنة" : "Flexible Plans",
      desc: ar
        ? "أنظمة سداد تناسب احتياجاتك وتمنحك مرونة أكبر."
        : "Payment plans designed around your needs and flexibility.",
    },
    {
      number: "02",
      title: ar ? "وضوح وثقة" : "Clarity & Trust",
      desc: ar
        ? "تفاصيل واضحة تساعدك على اتخاذ قرار استثماري بثقة."
        : "Transparent details that help you invest with confidence.",
    },
    {
      number: "03",
      title: ar ? "استثمار أذكى" : "Smarter Investment",
      desc: ar
        ? "امتلك وحدتك بخطوة مدروسة نحو مستقبل أفضل."
        : "A thoughtful step toward owning your space and building your future.",
    },
  ];

  return (
    <section
      className={`dar-installments ${ar ? "is-ar" : "is-en"}`}
      dir={ar ? "rtl" : "ltr"}
    >
      <style>{`
        .dar-installments {
          --inst-navy: #10243D;
          --inst-gold: #B89552;
          --inst-gold-light: #D7BC83;
          --inst-ivory: #F8F6F1;
          --inst-muted: #788391;

          position: relative;
          overflow: hidden;
          padding: 120px 24px;
          background:
            radial-gradient(
              ellipse at 15% 15%,
              rgba(184,149,82,.075),
              transparent 38%
            ),
            linear-gradient(180deg, #FFFFFF 0%, var(--inst-ivory) 100%);
          color: var(--inst-navy);
          font-family: inherit;
          isolation: isolate;
        }

        .dar-installments *,
        .dar-installments *::before,
        .dar-installments *::after {
          box-sizing: border-box;
        }

        .dar-installments-container {
          position: relative;
          z-index: 1;
          max-width: 1380px;
          margin: 0 auto;
        }

        /* Decorative background */

        .dar-installments-bg-number {
          position: absolute;
          top: -105px;
          right: -25px;
          z-index: -1;
          font-family: "DM Sans", sans-serif;
          font-size: clamp(250px, 37vw, 570px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -35px;
          color: rgba(16,36,61,.025);
          pointer-events: none;
          user-select: none;
        }

        .dar-installments.is-en .dar-installments-bg-number {
          right: auto;
          left: -25px;
        }

        /* Header */

        .dar-installments-header {
          max-width: 900px;
          margin: 0 auto 65px;
          text-align: center;
          animation: instFadeUp .9s cubic-bezier(.22,.61,.36,1) both;
        }

        .dar-installments-eyebrow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          margin-bottom: 25px;
          color: var(--inst-gold);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .dar-installments-line {
          width: 34px;
          height: 1px;
          background: var(--inst-gold);
          opacity: .8;
        }

        .dar-installments-title {
          margin: 0;
          color: var(--inst-navy);
          font-size: clamp(34px, 5vw, 66px);
          font-weight: 800;
          line-height: 1.45;
          letter-spacing: -.8px;
        }

        .dar-installments-title span {
          display: inline-block;
          position: relative;
          color: var(--inst-gold);
          margin-inline-start: 10px;
        }

        .dar-installments-title span::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 7px;
          background: rgba(184,149,82,.13);
          z-index: -1;
        }

        .dar-installments-divider {
          width: 55px;
          height: 2px;
          margin: 25px auto;
          background: linear-gradient(
            90deg,
            var(--inst-gold),
            var(--inst-gold-light)
          );
        }

        .dar-installments-subtitle {
          max-width: 650px;
          margin: 0 auto;
          color: var(--inst-muted);
          font-size: 14px;
          line-height: 2.2;
          font-weight: 400;
        }

        /* Main editorial panel */

        .dar-installments-panel {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(35px, 6vw, 85px);
          overflow: hidden;
          background: var(--inst-navy);
          box-shadow:
            0 35px 90px rgba(16,36,61,.12),
            0 8px 25px rgba(16,36,61,.05);
          animation: instFadeUp 1s .15s cubic-bezier(.22,.61,.36,1) both;
        }

        .dar-installments-panel::before {
          content: "";
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(
            180deg,
            var(--inst-gold-light),
            var(--inst-gold),
            transparent
          );
        }

        .dar-installments-panel::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          top: -220px;
          inset-inline-end: -180px;
          border: 1px solid rgba(215,188,131,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 55px rgba(215,188,131,.025),
            0 0 0 110px rgba(215,188,131,.02);
          pointer-events: none;
        }

        .dar-installments-panel-inner {
          position: relative;
          z-index: 1;
          max-width: 850px;
        }

        .dar-installments-panel-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: var(--inst-gold-light);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .dar-installments-panel-label::before {
          content: "";
          width: 28px;
          height: 1px;
          background: var(--inst-gold-light);
        }

        .dar-installments-statement {
          margin: 0;
          color: #FFFFFF;
          font-size: clamp(26px, 4.2vw, 51px);
          font-weight: 700;
          line-height: 1.65;
          letter-spacing: -.5px;
        }

        .dar-installments-statement span {
          color: var(--inst-gold-light);
        }

        .dar-installments-panel-caption {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 35px;
          color: rgba(255,255,255,.55);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .dar-installments-panel-caption::before {
          content: "";
          width: 45px;
          height: 1px;
          background: rgba(215,188,131,.5);
        }

        /* Benefits */

        .dar-installments-benefits {
          max-width: 1200px;
          margin: 55px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(16,36,61,.12);
          border-bottom: 1px solid rgba(16,36,61,.12);
          animation: instFadeUp 1s .3s cubic-bezier(.22,.61,.36,1) both;
        }

        .dar-installment-benefit {
          position: relative;
          padding: 35px 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          transition:
            background 1s cubic-bezier(.22,.61,.36,1),
            transform 1s cubic-bezier(.22,.61,.36,1);
        }

        .dar-installment-benefit:not(:last-child) {
          border-inline-end: 1px solid rgba(16,36,61,.10);
        }

        .dar-installment-benefit:hover {
          background: rgba(184,149,82,.055);
        }

        .dar-installment-number {
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--inst-gold);
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .dar-installment-number::after {
          content: "";
          width: 35px;
          height: 1px;
          background: rgba(184,149,82,.45);
          transition: width 1s cubic-bezier(.22,.61,.36,1);
        }

        .dar-installment-benefit:hover .dar-installment-number::after {
          width: 55px;
        }

        .dar-installment-benefit h3 {
          margin: 0 0 12px;
          color: var(--inst-navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.7;
          transition: color 1s ease;
        }

        .dar-installment-benefit p {
          max-width: 300px;
          margin: 0;
          color: var(--inst-muted);
          font-size: 12px;
          line-height: 2.2;
        }

        /* Bottom signature */

        .dar-installments-signature {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 45px;
          color: rgba(16,36,61,.45);
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-align: center;
          animation: instFadeUp 1s .45s both;
        }

        .dar-installments-signature span {
          color: var(--inst-gold);
        }

        /* Animations */

        @keyframes instFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */

        @media (max-width: 900px) {
          .dar-installments {
            padding: 90px 22px;
          }

          .dar-installments-benefits {
            grid-template-columns: 1fr;
            margin-top: 35px;
          }

          .dar-installment-benefit {
            padding: 28px 22px;
            gap: 15px;
          }

          .dar-installment-benefit:not(:last-child) {
            border-inline-end: none;
            border-bottom: 1px solid rgba(16,36,61,.10);
          }

          .dar-installments-panel {
            padding: 45px 35px;
          }

          .dar-installments-header {
            margin-bottom: 45px;
          }
        }

        @media (max-width: 480px) {
          .dar-installments {
            padding: 75px 17px;
          }

          .dar-installments-eyebrow {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .dar-installments-title {
            font-size: 33px;
          }

          .dar-installments-subtitle {
            font-size: 12px;
          }

          .dar-installments-panel {
            padding: 35px 23px;
          }

          .dar-installments-statement {
            font-size: 27px;
          }

          .dar-installments-panel-caption {
            font-size: 8px;
            letter-spacing: 1.5px;
          }

          .dar-installments-bg-number {
            font-size: 260px;
          }

          .dar-installments-signature {
            font-size: 8px;
            letter-spacing: 2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dar-installments *,
          .dar-installments *::before,
          .dar-installments *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="dar-installments-bg-number" aria-hidden="true">
        01
      </div>

      <div className="dar-installments-container">

        {/* HEADER */}

        <header className="dar-installments-header">
          <div className="dar-installments-eyebrow">
            <span className="dar-installments-line" />
            {t("installments", "label")}
            <span className="dar-installments-line" />
          </div>

          <h2 className="dar-installments-title">
            {t("installments", "title1")}
            <span>{t("installments", "title2")}</span>
          </h2>

          <div className="dar-installments-divider" />

          <p className="dar-installments-subtitle">
            {t("installments", "subtitle")}
          </p>
        </header>

        {/* TYPOGRAPHIC HERO */}

        <div className="dar-installments-panel">
          <div className="dar-installments-panel-inner">
            <div className="dar-installments-panel-label">
              {ar ? "استثمارك يبدأ من هنا" : "YOUR INVESTMENT STARTS HERE"}
            </div>

            <h3 className="dar-installments-statement">
              {ar ? (
                <>
                  امتلك مستقبلك،
                  <br />
                  <span>بخطوات تناسبك.</span>
                </>
              ) : (
                <>
                  Own Your Future,
                  <br />
                  <span>One Thoughtful Step at a Time.</span>
                </>
              )}
            </h3>

            <div className="dar-installments-panel-caption">
              DAR DEVELOPMENTS
              <span>—</span>
              {ar ? "ثقة تبني المستقبل" : "BUILDING TRUST. SHAPING FUTURE."}
            </div>
          </div>
        </div>

        {/* BENEFITS */}

        <div className="dar-installments-benefits">
          {features.map((item) => (
            <article className="dar-installment-benefit" key={item.number}>
              <div className="dar-installment-number">
                {item.number}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* SIGNATURE */}

        <div className="dar-installments-signature">
          <span>✦</span>
          DAR DEVELOPMENTS
          <span>✦</span>
        </div>

      </div>
    </section>
  );
}

export default Installments;
