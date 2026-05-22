import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.png";

import p4 from "../assets/project-4.jpeg";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";
import p7 from "../assets/project-7.jpeg";
import p8 from "../assets/project-8.jpeg";

const whatsappLink = "https://wa.me/201039207908";

function Projects() {
  return (
    <div id="projects" className="w-full bg-gray-50 py-24 px-6 md:px-16">

      {/* MAIN TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-16">
        مشاريعنا الحالية 
      </h2>

      {/* CURRENT PROJECTS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={p1} className="w-full h-56 object-cover" />
          <div className="p-5 text-center">

            <h3 className="text-xl font-bold text-[#1E3A5F] whitespace-nowrap">
              Dar Damac 
            </h3>

            <p className="text-gray-600 mt-2 text-right leading-relaxed" dir="rtl">
              📍 طنطا / الكورنيش
            </p>

            <div className="mt-4">
              <button
                onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-[#1E3A5F] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
              >
                احجز الآن
              </button>
            </div>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={p2} className="w-full h-56 object-cover" />
          <div className="p-5 text-center">

            <h3 className="text-xl font-bold text-[#1E3A5F] whitespace-nowrap">
              Dar Landmark 
            </h3>

            <p className="text-gray-600 mt-2 text-right leading-relaxed" dir="rtl">
              📍 طنطا / طريق القاهرة - الإسكندرية
            </p>

            <div className="mt-4">
              <button
                onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-[#1E3A5F] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
              >
                احجز الآن
              </button>
            </div>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={p3} className="w-full h-56 object-cover" />
          <div className="p-5 text-center">

            <h3 className="text-xl font-bold text-[#1E3A5F] whitespace-nowrap">
              Dar Elwrood 
            </h3>

            <p className="text-gray-600 mt-2 text-right leading-relaxed" dir="rtl">
              📍 طنطا / خلف عمارات الأطباء
            </p>

            <div className="mt-4">
              <button
                onClick={() => window.open(whatsappLink, "_blank")}
                className="bg-[#1E3A5F] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
              >
                احجز الآن
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* COMPLETED PROJECTS TITLE */}
      <h3 className="text-center text-3xl font-bold text-[#1E3A5F] mb-12">
        مشاريع تم الانتهاء منها
      </h3>

      {/* COMPLETED PROJECTS */}
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={p4} className="w-full h-52 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-bold text-[#1E3A5F]">BET ELWATAN - J52</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={p5} className="w-full h-52 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-bold text-[#1E3A5F]">ELNARGAS - F72</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={p6} className="w-full h-52 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-bold text-[#1E3A5F]">PALM TOWERS 1</h4>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={p7} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-bold text-[#1E3A5F]">MOLTAQA HAGRAS</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={p8} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-bold text-[#1E3A5F]">DAR ELBOUSERY</h4>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;