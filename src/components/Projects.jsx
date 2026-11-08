
import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.jpeg";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";
import p7 from "../assets/project-7.jpeg";
import p8 from "../assets/project-8.jpeg";
import palm1 from "../assets/palm1.jpeg";
import float1 from "../assets/float1.png";
import float2 from "../assets/float2.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const currentProjects = [
    {
      name: "Dar Damac",
      image: p1,
      location: t("projects", "damacLocation"),
      path: "/projects/damac",
    },
    {
      name: "Dar Landmark",
      image: p2,
      location: t("projects", "landmarkLocation"),
      path: "/projects/landmark",
    },
    {
      name: "Dar Elwrood",
      image: p3,
      location: t("projects", "elwroodLocation"),
      path: "/projects/elwrood",
    },
    {
      name: "Palm 2",
      image: palm1,
      location: ar
        ? "كورنيش بلازا — طنطا"
        : "Corniche Plaza — Tanta",
      path: "/projects/palm2",
    },
  ];

  const completedProjects = [
    { name: "BET ELWATAN - J52", image: p4 },
    { name: "ELNARGAS - F72", image: p5 },
    { name: "PALM TOWERS 1", image: p6 },
    { name: "MOLTAQA HAGRAS", image: p7 },
    { name: "DAR ELBOUSERY", image: p8 },
  ];

  return (
    <section
      id="projects"
      className="dar-projects"
      style={{
        direction: ar ? "rtl" : "ltr",
        fontFamily: ar
          ? "'Noto Naskh Arabic', serif"
          : "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        .dar-projects {
          width: 100%;
          padding: 110px 24px;
          background: linear-gradient(180deg, #FFFFFF 0%, #F4F7FA 100%);
          overflow: hidden;
          position: relative;
        }

        .dar-projects-container {
          max-width: 1350px;
          margin: auto;
        }

        /* SECTION HEADERS */
        .dar-projects-header {
          margin-bottom: 55px;
        }

        .dar-projects-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #9A7535;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .dar-projects-dot {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          border-radius: 50%;
        }

        .dar-projects-title {
          color: #10243D;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.3;
          margin: 0;
          text-align: center;
        }

        .dar-projects-title span {
          color: #B8953F;
        }

        .dar-projects-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #C9A84C, #E8C96A);
          margin: 22px auto 0;
        }

        /* CURRENT PROJECTS */
        .dar-current-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          margin-bottom: 100px;
        }

        .dar-project-card {
          display: block;
          text-decoration: none;
          background: #FFFFFF;
          border: 1px solid rgba(16,36,61,.08);
          overflow: hidden;
          position: relative;
          transition: transform .45s ease, box-shadow .45s ease,
                      border-color .45s ease;
        }

        .dar-project-card:hover {
          transform: translateY(-7px);
          border-color: rgba(201,168,76,.45);
          box-shadow: 0 24px 55px rgba(16,36,61,.10);
        }

        .dar-project-image {
          position: relative;
          height: 330px;
          overflow: hidden;
          background: #E8EDF3;
        }

        .dar-project-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .dar-project-card:hover .dar-project-image img {
          transform: scale(1.06);
        }

        .dar-project-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11,26,46,0.02) 40%,
            rgba(11,26,46,0.35) 100%
          );
          pointer-events: none;
        }

        .dar-project-number {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          padding: 8px 12px;
          background: rgba(16,36,61,.65);
          backdrop-filter: blur(8px);
        }

        .dar-project-content {
          padding: 28px 30px 30px;
        }

        .dar-project-name {
          color: #10243D;
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 12px;
          transition: color .3s ease;
        }

        .dar-project-card:hover .dar-project-name {
          color: #B8953F;
        }

        .dar-project-location {
          color: #7B8797;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }

        .dar-project-location-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .dar-project-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
          padding: 13px 24px;
          background: #10243D;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: all .3s ease;
        }

        .dar-project-button-arrow {
          color: #E8C96A;
          font-size: 17px;
          transition: transform .3s ease;
        }

        .dar-project-card:hover .dar-project-button {
          background: #C9A84C;
          color: #10243D;
        }

        .dar-project-card:hover .dar-project-button-arrow {
          color: #10243D;
          transform: translateX(${ar ? "-4px" : "4px"});
        }

        /* FLOATING IMAGES */
        .dar-project-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto 110px;
        }

        .dar-showcase-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          border: 1px solid rgba(201,168,76,.25);
          background: #E8EDF3;
        }

        .dar-showcase-image:first-child {
          margin-top: 45px;
        }

        .dar-showcase-image:last-child {
          margin-bottom: 45px;
        }

        .dar-showcase-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .8s ease;
        }

        .dar-showcase-image:hover img {
          transform: scale(1.05);
        }

        /* COMPLETED PROJECTS */
        .dar-completed-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .dar-completed-card {
          background: #FFFFFF;
          border: 1px solid rgba(16,36,61,.08);
          overflow: hidden;
          transition: all .4s ease;
        }

        .dar-completed-card:hover {
          border-color: rgba(201,168,76,.45);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(16,36,61,.08);
        }

        .dar-completed-image {
          height: 220px;
          overflow: hidden;
          background: #E8EDF3;
        }

        .dar-completed-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .7s ease;
        }

        .dar-completed-card:hover img {
          transform: scale(1.06);
        }

        .dar-completed-name {
          padding: 22px 15px;
          text-align: center;
          color: #10243D;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .5px;
          border-top: 2px solid #C9A84C;
        }

        @media (max-width: 900px) {
          .dar-projects {
            padding: 85px 24px;
          }

          .dar-project-image {
            height: 270px;
          }

          .dar-completed-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .dar-projects {
            padding: 70px 20px;
          }

          .dar-projects-header {
            margin-bottom: 40px;
          }

          .dar-current-grid {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 75px;
          }

          .dar-project-image {
            height: 260px;
          }

          .dar-project-content {
            padding: 24px 20px;
          }

          .dar-project-name {
            font-size: 20px;
          }

          .dar-project-showcase {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 75px;
          }

          .dar-showcase-image:first-child,
          .dar-showcase-image:last-child {
            margin: 0;
          }

          .dar-showcase-image:last-child {
            max-width: 85%;
            margin-${ar ? "right" : "left"}: auto;
          }

          .dar-completed-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .dar-completed-image {
            height: 240px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dar-projects *,
          .dar-projects *::before,
          .dar-projects *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="dar-projects-container">

        {/* CURRENT PROJECTS */}
        <div className="dar-projects-header">
          <div className="dar-projects-eyebrow">
            <span className="dar-projects-dot" />
            {ar ? "مشاريع دار" : "DAR DEVELOPMENTS"}
            <span className="dar-projects-dot" />
          </div>

          <h2 className="dar-projects-title">
            {t("projects", "currentTitle")}
          </h2>

          <div className="dar-projects-divider" />
        </div>

        <div className="dar-current-grid">
          {currentProjects.map((project, i) => (
            <Link
              to={project.path}
              className="dar-project-card"
              key={project.name}
            >
              <div className="dar-project-image">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />

                <span className="dar-project-number">
                  0{i + 1} / 04
                </span>
              </div>

              <div className="dar-project-content">
                <h3 className="dar-project-name">
                  {project.name}
                </h3>

                <div className="dar-project-location">
                  <span className="dar-project-location-dot" />
                  {project.location}
                </div>

                <div
                  className="dar-project-button"
                  style={{
                    width: "fit-content",
                  }}
                >
                  {t("projects", "viewBtn")}

                  <span className="dar-project-button-arrow">
                    {ar ? "←" : "→"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ARCHITECTURAL SHOWCASE */}
        <div className="dar-project-showcase">
          <div className="dar-showcase-image">
            <img
              src={float1}
              alt="DAR Architecture"
              loading="lazy"
            />
          </div>

          <div className="dar-showcase-image">
            <img
              src={float2}
              alt="DAR Developments"
              loading="lazy"
            />
          </div>
        </div>

        {/* COMPLETED PROJECTS */}
        <div className="dar-projects-header">
          <div className="dar-projects-eyebrow">
            <span className="dar-projects-dot" />
            {ar ? "إنجازاتنا" : "OUR ACHIEVEMENTS"}
            <span className="dar-projects-dot" />
          </div>

          <h2 className="dar-projects-title">
            {t("projects", "completedTitle")}
          </h2>

          <div className="dar-projects-divider" />
        </div>

        <div className="dar-completed-grid">
          {completedProjects.map((project, i) => (
            <div
              className="dar-completed-card"
              key={project.name}
            >
              <div className="dar-completed-image">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
              </div>

              <div className="dar-completed-name">
                {project.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
