import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.jpeg";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";
import p7 from "../assets/project-7.jpeg";
import p8 from "../assets/project-8.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { lang, t } = useLanguage();

  const completedProjects = [
    "BET ELWATAN - J52",
    "ELNARGAS - F72",
    "PALM TOWERS 1",
    "MOLTAQA HAGRAS",
    "DAR ELBOUSERY",
  ];

  const ProjectButton = () => (
    <div className="mt-5 flex justify-center">
      <div className="project-btn">
        {t("projects", "viewBtn")}
      </div>
    </div>
  );

  return (
    <div
      id="projects"
      className="w-full py-28 px-6 md:px-20"
      style={{
        background: "linear-gradient(180deg,#0B1A2E 0%, #08121f 100%)",
        fontFamily: lang === "ar" ? "'Noto Naskh Arabic', serif" : "'Montserrat', sans-serif",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        .project-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 16px;
          overflow: hidden;
          transition: all .4s ease;
          backdrop-filter: blur(8px);
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,168,76,0.4);
        }
        .project-card img { transition: transform .7s ease; }
        .project-card:hover img { transform: scale(1.08); }

        .project-btn {
          padding: 10px 26px;
          border-radius: 6px;
          background: #C9A84C;
          color: #0B1A2E;
          font-weight: 600;
          font-size: 14px;
          transition: .3s ease;
        }
        .project-card:hover .project-btn { background: #E8C96A; }

        .project-title {
          color: rgba(232,201,108,0.9);
          transition: .3s;
        }
        .project-card:hover .project-title { color: #E8C96A; }

        .project-location {
          color: rgba(250,246,238,0.45);
          font-size: 13px;
        }
        .section-gap { margin-bottom: 90px; }
      `}</style>

      {/* CURRENT PROJECTS */}
      <h2 className="text-center text-4xl text-white mb-20">
        {t("projects", "currentTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 section-gap">

        <Link to="/projects/damac" className="project-card">
          <img src={p1} className="w-full h-[230px] object-cover" />
          <div className="p-5 text-center">
            <h3 className="project-title text-lg font-bold mb-2">Dar Damac</h3>
            <p className="project-location">{t("projects", "damacLocation")}</p>
            <ProjectButton />
          </div>
        </Link>

        <Link to="/projects/landmark" className="project-card">
          <img src={p2} className="w-full h-[230px] object-cover" />
          <div className="p-5 text-center">
            <h3 className="project-title text-lg font-bold mb-2">Dar Landmark</h3>
            <p className="project-location">{t("projects", "landmarkLocation")}</p>
            <ProjectButton />
          </div>
        </Link>

        <Link to="/projects/elwrood" className="project-card">
          <img src={p3} className="w-full h-[230px] object-cover" />
          <div className="p-5 text-center">
            <h3 className="project-title text-lg font-bold mb-2">Dar Elwrood</h3>
            <p className="project-location">{t("projects", "elwroodLocation")}</p>
            <ProjectButton />
          </div>
        </Link>

      </div>

      {/* COMPLETED PROJECTS */}
      <h2 className="text-center text-4xl text-white mb-20">
        {t("projects", "completedTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {[p4, p5, p6].map((img, i) => (
          <div key={i} className="project-card">
            <img src={img} className="w-full h-[210px] object-cover" />
            <div className="p-5 text-center">
              <h4 className="text-[#C9A84C] font-semibold">{completedProjects[i]}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[p7, p8].map((img, i) => (
          <div key={i} className="project-card">
            <img src={img} className="w-full h-[240px] object-cover" />
            <div className="p-5 text-center">
              <h4 className="text-[#C9A84C] font-semibold">{completedProjects[i + 3]}</h4>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;