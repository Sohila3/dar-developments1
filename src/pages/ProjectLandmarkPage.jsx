import Navbar from "../components/Navbar";
import cover from "../assets/landmark.jpeg";
import videoFile from "../assets/Landmark.mp4";
import brochure from "../assets/brochure_landmark.pdf";
import { useState } from "react";

function ProjectLandmarkPage() {
  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Landmark",
  });

  const [showBrochure, setShowBrochure] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const message = `مرحباً، اسمي ${formData.name} وأريد الاستفسار عن مشروع ${formData.project}`;
    const url = `https://wa.me/201039207908?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-white">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row h-screen mt-24 md:mt-0">

        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full animate-fadeIn">
          <img
            src={cover}
            alt="Dar Landmark"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div
          className="w-full md:w-1/2 p-6 md:p-12 text-right flex flex-col justify-center animate-slideUp"
          dir="rtl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            مشروع دار لاند مارك
          </h1>

          <p className="text-gray-700 leading-loose text-base md:text-lg whitespace-pre-line">
Dar Landmark هو مشروع سكني متكامل يقدم تجربة معيشية هادئة واستثمارًا ذكيًا في موقع مميز بالقرب من أهم المناطق الحيوية في طنطا، مما يضعك على بُعد دقائق من كل ما تحتاجه.

يتميز المشروع بتنوع المساحات التي تصل إلى 199 م²، ليناسب مختلف الاحتياجات العائلية، مع تصميم يراعي الراحة وجودة الحياة في كل تفصيلة.

يوفر Dar Landmark أنظمة سداد مرنة تبدأ بمقدم 35% وتقسيط يصل حتى 30 شهر، مع فترة استلام خلال 24 شهر، مما يجعله فرصة مناسبة للراغبين في السكن أو الاستثمار.

اختيارك لـ Dar Landmark هو خطوة نحو حياة أكثر هدوءًا واستثمار أكثر استقرارًا وقيمة مستقبلية أفضل.
          </p>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="w-full py-24 bg-gray-100 flex justify-center mt-10">

        <video
          src={videoFile}
          controls
          className="w-[92%] md:w-[70%] rounded-2xl shadow-2xl animate-fadeIn"
        />

      </section>

      {/* ================= INFO + FORM ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-24 py-24">

        {/* INFO CARD */}
        <div
          className="bg-white shadow-xl rounded-2xl p-8 text-right animate-slideUp"
          dir="rtl"
        >
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            تفاصيل المشروع
          </h2>

          <p className="mb-3">📍 الموقع: طنطا - الطريق السريع امام شركة الكهرباء وبالقرب من منطقة الاستاد</p>
          <p className="mb-3">🏢 يتكون من: برجين</p>

          <p className="mb-2 font-semibold">البرج الأول:</p>
          <p className="mb-3">145م² - 157م² - 170م² - 199م²</p>

          <p className="mb-2 font-semibold">البرج الثاني:</p>
          <p className="mb-3">110م² - 114م² - 151م²</p>

          <p className="mb-3">💰 المقدم: 35%</p>
          <p className="mb-6">⏳ القسط: سنتين ونص</p>

          <button
            onClick={() => setShowBrochure(true)}
            className="bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            عرض البرشور
          </button>
        </div>

        {/* FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8 animate-fadeIn">

          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 text-center">
            احجز / استفسر
          </h2>

          <input
            name="name"
            placeholder="الاسم"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />

          <select
            name="project"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          >
            <option value="Dar Landmark">Dar Landmark</option>
            <option value="Dar Damac">Dar Damac</option>
            <option value="Dar Elwrood">Dar Elwrood</option>
          </select>

          <button
            onClick={openWhatsApp}
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition"
          >
            تواصل واتساب
          </button>
        </div>

      </section>

      {/* ================= BROCHURE MODAL ================= */}
      {showBrochure && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="relative w-[95%] md:w-[80%] h-[90%] bg-white rounded-xl overflow-hidden">

            <button
              onClick={() => setShowBrochure(false)}
              className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow"
            >
              ×
            </button>

            <iframe
              src={brochure}
              className="w-full h-full"
              title="Brochure"
            />
          </div>

        </div>
      )}

      {/* ================= BACK BUTTON ================= */}
      <div className="text-center py-20 animate-fadeIn">

        <a
          href="/#projects"
          className="inline-block bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          تعرف على المشاريع الأخرى
        </a>

      </div>

      {/* ================= ANIMATION CSS ================= */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-slideUp {
            animation: slideUp 1s ease-in-out;
          }

          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}

export default ProjectLandmarkPage;