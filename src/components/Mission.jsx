
import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

function Mission() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Reveal immediately if IntersectionObserver is unavailable
    if (!("IntersectionObserver" in window)) {
      section.classList.add("mission-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("mission-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      number: "01",
      titleAr: "تصميمات معمارية استثنائية",
      titleEn: "Exceptional Architecture",
      descAr:
        "نقدم تصميمات معمارية عصرية وواجهات تجمع بين الفخامة والأناقة، لتمنح كل مشروع شخصية مميزة.",
      descEn:
        "We create modern architectural designs and elegant facades that give every project a distinctive identity.",
      icon: (
        <>
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 10h2" />
          <path d="M13 10h2" />
          <path d="M9 14h2" />
          <path d="M13 14h2" />
          <path d="M10 21v-4h4v4" />
        </>
      ),
    },
    {
      number: "02",
      titleAr: "مواقع استراتيجية",
      titleEn: "Strategic Locations",
      descAr:
        "نختار مواقع مشروعاتنا بعناية لتكون بالقرب من أهم الخدمات والمحاور الرئيسية، بما يحقق سهولة الوصول وراحة الحياة اليومية.",
      descEn:
        "We carefully select locations near essential services and major roads for convenient access and comfortable living.",
      icon: (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      number: "03",
      titleAr: "جودة بناء تثق بها",
      titleEn: "Quality You Can Trust",
      descAr:
        "نحرص على تطبيق المعايير الهندسية والمواصفات الفنية في جميع مراحل التنفيذ، لضمان جودة البناء والاهتمام بأدق التفاصيل.",
      descEn:
        "We follow engineering standards and technical specifications throughout construction, focusing on quality and every detail.",
      icon: (
        <>
          <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
          <path d="m8.5 12 2.5 2.5 5-5" />
        </>
      ),
    },
    {
      number: "04",
      titleAr: "مساحات مصممة بذكاء",
      titleEn: "Intelligently Designed Spaces",
      descAr:
        "نصمم الوحدات بعناية لتحقيق أفضل استفادة من المساحات الداخلية، مع توزيع عملي يواكب احتياجات الحياة العصرية.",
      descEn:
        "We thoughtfully plan every unit to maximize usable space through practical layouts suited to modern living.",
      icon: (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M12 3v18" />
          <path d="M3 12h9" />
          <path d="M15 8h3" />
          <path d="M15 16h3" />
        </>
      ),
    },
    {
      number: "05",
      titleAr: "التزام يصنع الثقة",
      titleEn: "Commitment That Builds Trust",
      descAr:
        "نؤمن بأن الالتزام بالمواعيد المتفق عليها والوضوح في التعامل أساس بناء علاقات طويلة الأمد مع عملائنا.",
      descEn:
        "We believe that honoring agreed timelines and maintaining transparency are the foundations of lasting client relationships.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ),
    },
    {
      number: "06",
      titleAr: "استثمار يحمل قيمة",
      titleEn: "Investment With Lasting Value",
      descAr:
        "نسعى لتقديم مشروعات تجمع بين جودة السكن وفرص الاستثمار، لتكون خطوة واثقة نحو مستقبل أفضل.",
      descEn:
        "We strive to deliver projects combining residential quality and investment opportunities for a more confident future.",
      icon: (
        <>
          <path d="M3 17 9 11l4 4 8-9" />
          <path d="M15 6h6v6" />
          <path d="M3 21h18" />
        </>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`dar-mission ${ar ? "mission-ar" : "mission-en"}`}
      dir={ar ? "rtl" : "ltr"}
    >
      <style>{`
        .dar-mission {
          background: #fff;
          padding: 105px 24px;
          overflow: hidden;
          position: relative;
          color: #10243D;
        }

        .dar-mission::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(201,168,76,.07),
            transparent 70%
          );
          top: -250px;
          right: -180px;
          pointer-events: none;
        }

        .mission-container {
          max-width: 1250px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .mission-header {
          max-width: 750px;
          margin: 0 auto 65px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: .9s ease;
        }

        .mission-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #A98432;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 22px;
        }

        .mission-eyebrow::before,
        .mission-eyebrow::after {
          content: "";
          width: 25px;
          height: 1px;
          background: #C9A84C;
        }

        .mission-heading {
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.4;
          font-weight: 800;
          margin: 0 0 22px;
          color: #10243D;
        }

        .mission-heading span {
          color: #B8953F;
        }

        .mission-intro {
          font-size: 16px;
          line-height: 2;
          color: #69788B;
          margin: 0;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .mission-card {
          position: relative;
          background: #FAFBFC;
          border: 1px solid #E9EDF2;
          padding: 35px 30px;
          min-height: 265px;
          overflow: hidden;
          transition:
            transform .4s ease,
            background .4s ease,
            border-color .4s ease,
            box-shadow .4s ease;
          opacity: 0;
          transform: translateY(35px);
        }

        .mission-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          ${ar ? "right: 0;" : "left: 0;"}
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,#C9A84C,#E8C96A);
          transition: width .5s ease;
        }

        .mission-card:hover {
          transform: translateY(-7px);
          background: #fff;
          border-color: rgba(201,168,76,.35);
          box-shadow: 0 18px 45px rgba(16,36,61,.07);
        }

        .mission-card:hover::after {
          width: 100%;
        }

        .mission-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .mission-icon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201,168,76,.10);
          border: 1px solid rgba(201,168,76,.23);
          color: #B8953F;
          transition: .4s ease;
        }

        .mission-icon svg {
          width: 26px;
          height: 26px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .mission-card:hover .mission-icon {
          background: #10243D;
          color: #E8C96A;
          transform: rotate(-5deg);
        }

        .mission-number {
          font-size: 13px;
          color: #B8953F;
          letter-spacing: 2px;
          font-weight: 700;
          opacity: .7;
        }

        .mission-card h3 {
          font-size: 19px;
          line-height: 1.7;
          color: #10243D;
          margin: 0 0 12px;
          font-weight: 800;
        }

        .mission-card p {
          font-size: 14px;
          line-height: 2;
          color: #718094;
          margin: 0;
        }

        /* Reveal Animation */
        .dar-mission.mission-visible .mission-header {
          opacity: 1;
          transform: translateY(0);
        }

        .dar-mission.mission-visible .mission-card {
          opacity: 1;
          transform: translateY(0);
        }

        .dar-mission.mission-visible .mission-card:nth-child(1) {
          transition-delay: .1s;
        }

        .dar-mission.mission-visible .mission-card:nth-child(2) {
          transition-delay: .2s;
        }

        .dar-mission.mission-visible .mission-card:nth-child(3) {
          transition-delay: .3s;
        }

        .dar-mission.mission-visible .mission-card:nth-child(4) {
          transition-delay: .4s;
        }

        .dar-mission.mission-visible .mission-card:nth-child(5) {
          transition-delay: .5s;
        }

        .dar-mission.mission-visible .mission-card:nth-child(6) {
          transition-delay: .6s;
        }

        /* Language Safety */
        .dar-mission.mission-en .mission-header,
        .dar-mission.mission-en .mission-card {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tablet */
        @media(max-width: 1000px) {
          .mission-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media(max-width: 600px) {
          .dar-mission {
            padding: 75px 20px;
          }

          .mission-header {
            margin-bottom: 40px;
          }

          .mission-heading {
            font-size: 35px;
          }

          .mission-intro {
            font-size: 14px;
          }

          .mission-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .mission-card {
            min-height: unset;
            padding: 28px 25px;
          }

          .mission-card-top {
            margin-bottom: 22px;
          }

          .mission-card h3 {
            font-size: 18px;
          }
        }

        /* Reduced Motion */
        @media(prefers-reduced-motion:reduce) {
          .dar-mission *,
          .dar-mission *::before,
          .dar-mission *::after {
            transition: none !important;
            animation: none !important;
          }

          .mission-header,
          .mission-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mission-container">
        <header className="mission-header">
          <div className="mission-eyebrow">
            DAR DEVELOPMENTS
          </div>

          <h2 className="mission-heading">
            {ar ? (
              <>رسالتنا <span>ورؤيتنا</span></>
            ) : (
              <>Our Mission <span>& Vision</span></>
            )}
          </h2>

          <p className="mission-intro">
            {ar
              ? "في دار، نؤمن أن العقار ليس مجرد مساحة، بل بداية لحياة أفضل واستثمار لمستقبل أكثر ثقة. رسالتنا أن نصنع مشروعات تجمع بين جودة البناء، وروعة التصميم، والقيمة الحقيقية."
              : "At DAR, we believe real estate is more than space — it is the beginning of a better life and a more confident future. Our mission is to create projects combining quality, exceptional design, and lasting value."}
          </p>
        </header>

        <div className="mission-grid">
          {items.map((item) => (
            <article className="mission-card" key={item.number}>
              <div className="mission-card-top">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>

                <span className="mission-number">
                  {item.number}
                </span>
              </div>

              <h3>{ar ? item.titleAr : item.titleEn}</h3>

              <p>{ar ? item.descAr : item.descEn}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
