
import installmentImg from "../assets/installments.jpeg";
import installmentImgEn from "../assets/installmentsEn.jpeg";
import { useLanguage } from "../context/LanguageContext";

function Installments() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const benefits = [
    {
      number: "01",
      title: ar ? "خطط مرنة" : "Flexible Plans",
      desc: ar ? "أنظمة سداد تناسب احتياجاتك" : "Payment plans tailored to you",
    },
    {
      number: "02",
      title: ar ? "وضوح وثقة" : "Clarity & Trust",
      desc: ar ? "تفاصيل واضحة لرحلة استثمارك" : "Clear terms for your investment",
    },
    {
      number: "03",
      title: ar ? "استثمار أذكى" : "Smarter Investment",
      desc: ar ? "خطوة مدروسة نحو مستقبلك" : "A thoughtful step toward your future",
    },
  ];

  return (
    <section
      className="dar-installments"
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Noto Naskh Arabic', serif"
          : "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        .dar-installments {
          padding: 110px 24px;
          background: linear-gradient(180deg, #FFFFFF 0%, #F4F7FA 100%);
          position: relative;
          overflow: hidden;
        }

        .dar-installments-container {
          max-width: 1350px;
          margin: auto;
        }

        .dar-installments-header {
          text-align: center;
          margin-bottom: 55px;
        }

        .dar-installments-eyebrow {
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

        .dar-installments-dot {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          border-radius: 50%;
        }

        .dar-installments-title {
          color: #10243D;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.5;
          margin: 0;
        }

        .dar-installments-title span {
          color: #B8953F;
        }

        .dar-installments-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #C9A84C, #E8C96A);
          margin: 22px auto;
        }

        .dar-installments-subtitle {
          max-width: 650px;
          margin: auto;
          color: #7B8797;
          font-size: 14px;
          line-height: 2;
        }

        /* MAIN VISUAL */

        .dar-installments-visual {
          position: relative;
          max-width: 1150px;
          margin: auto;
          padding: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(201,168,76,.25);
          box-shadow: 0 30px 80px rgba(16,36,61,.08);
        }

        .dar-installments-image {
          position: relative;
          overflow: hidden;
          height: clamp(300px, 52vw, 620px);
          background: #E8EDF3;
        }

        .dar-installments-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 1s ease;
        }

        .dar-installments-visual:hover img {
          transform: scale(1.025);
        }

        .dar-installments-corner {
          position: absolute;
          top: 25px;
          left: 25px;
          z-index: 2;
          background: rgba(16,36,61,.82);
          color: #E8C96A;
          padding: 12px 18px;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        /* BENEFITS */

        .dar-installments-benefits {
          max-width: 1150px;
          margin: 45px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(16,36,61,.10);
          border-bottom: 1px solid rgba(16,36,61,.10);
        }

        .dar-installment-benefit {
          padding: 32px 25px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
          transition: background .3s ease;
        }

        .dar-installment-benefit:not(:last-child) {
          border-inline-end: 1px solid rgba(16,36,61,.10);
        }

        .dar-installment-benefit:hover {
          background: rgba(201,168,76,.06);
        }

        .dar-installment-number {
          color: #C9A84C;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          padding-top: 3px;
        }

        .dar-installment-benefit h3 {
          margin: 0 0 10px;
          color: #10243D;
          font-size: 15px;
          font-weight: 800;
        }

        .dar-installment-benefit p {
          margin: 0;
          color: #7B8797;
          font-size: 11px;
          line-height: 1.9;
        }

        @media (max-width: 768px) {
          .dar-installments {
            padding: 80px 20px;
          }

          .dar-installments-header {
            margin-bottom: 35px;
          }

          .dar-installments-visual {
            padding: 7px;
          }

          .dar-installments-image {
            height: 350px;
          }

          .dar-installments-benefits {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }

          .dar-installment-benefit {
            padding: 24px 15px;
          }

          .dar-installment-benefit:not(:last-child) {
            border-inline-end: none;
            border-bottom: 1px solid rgba(16,36,61,.10);
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

      <div className="dar-installments-container">

        {/* HEADER */}

        <div className="dar-installments-header">
          <div className="dar-installments-eyebrow">
            <span className="dar-installments-dot" />
            {t("installments", "label")}
            <span className="dar-installments-dot" />
          </div>

          <h2 className="dar-installments-title">
            {t("installments", "title1")}
            <span>{t("installments", "title2")}</span>
          </h2>

          <div className="dar-installments-divider" />

          <p className="dar-installments-subtitle">
            {t("installments", "subtitle")}
          </p>
        </div>

        {/* MAIN IMAGE */}

        <div className="dar-installments-visual">
          <div className="dar-installments-image">
            <div className="dar-installments-corner">
              DAR DEVELOPMENTS
            </div>

            <img
              src={ar ? installmentImg : installmentImgEn}
              alt={ar ? "أنظمة السداد" : "Payment Plans"}
              loading="lazy"
            />
          </div>
        </div>

        {/* BENEFITS */}

        <div className="dar-installments-benefits">
          {benefits.map((item) => (
            <div className="dar-installment-benefit" key={item.number}>
              <span className="dar-installment-number">
                {item.number}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Installments;
