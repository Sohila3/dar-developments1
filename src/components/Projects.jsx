import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";

import p4 from "../assets/project-4.jpeg";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";
import p7 from "../assets/project-7.jpeg";
import p8 from "../assets/project-8.jpeg";

import { Link } from "react-router-dom";

function Projects() {

  const openWhatsApp = (projectName) => {
    const message = `مرحباً، أريد الاستفسار عن مشروع ${projectName}`;
    const url = `https://wa.me/201039207908?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const ProjectButton = () => (
    <div className="mt-5 flex justify-center">
      <div className="
        px-6 py-3 rounded-full
        text-white font-semibold
        bg-gradient-to-r from-[#1E3A5F] via-[#2563EB] to-[#38BDF8]
        shadow-[0_0_20px_rgba(37,99,235,0.45)]
        transition duration-300 group-hover:scale-105
      ">
        عرض المشروع
      </div>
    </div>
  );

  return (
    <div id="projects" className="w-full bg-gray-50 py-24 px-6 md:px-16">

      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-16">
        مشاريعنا الحالية
      </h2>

      {/* CURRENT PROJECTS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

        {/* CARD 1 - DAMAC */}
        <Link
          to="/projects/damac"
          className="bg-white rounded-2xl shadow-lg overflow-hidden group block"
        >
          <div className="overflow-hidden">
            <img
              src={p1}
              alt="Dar Damac"
              className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-5 text-center">
            <h3 className="text-xl font-bold text-[#1E3A5F]">
              Dar Damac
            </h3>

            <p className="text-gray-600 mt-2 text-right leading-relaxed" dir="rtl">
              📍 طنطا / الكورنيش
            </p>

            <ProjectButton />
          </div>
        </Link>

        {/* CARD 2 - LANDMARK */}
        <Link
          to="/projects/landmark"
          className="bg-white rounded-2xl shadow-lg overflow-hidden group block"
        >
          <div className="overflow-hidden">
            <img
              src={p2}
              alt="Dar Landmark"
              className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-5 text-center">
            <h3 className="text-xl font-bold text-[#1E3A5F]">
              Dar Landmark
            </h3>

            <p className="text-gray-600 mt-2 text-right leading-relaxed" dir="rtl">
              📍 طنطا / طريق القاهرة - الإسكندرية
            </p>

            <ProjectButton />
          </div>
        </Link>

        {/* CARD 3 - ELWROOD */}
        <Link
          to="/projects/elwrood"
          className="bg-white rounded-2xl shadow-lg overflow-hidden group block"
        >
          <div className="overflow-hidden">
            <img
              src={p3}
              alt="Dar Elwrood"
              className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-5 text-center">
            <h3 className="text-xl font-bold text-[#1E3A5F]">
              Dar Elwrood
            </h3>

            <p className="text-gray-600 mt-2 text-right leading-relaxed" dir="rtl">
              📍 طنطا / خلف عمارات الأطباء
            </p>

            <ProjectButton />
          </div>
        </Link>

      </div>

      {/* COMPLETED */}
      <h3 className="text-center text-3xl font-bold text-[#1E3A5F] mb-12">
        مشاريع تم الانتهاء منها
      </h3>

      <div className="max-w-6xl mx-auto space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[p4, p5, p6].map((img, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <img
                src={img}
                className="w-full h-52 object-cover transition group-hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[p7, p8].map((img, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <img
                src={img}
                className="w-full h-60 object-cover transition group-hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Projects;