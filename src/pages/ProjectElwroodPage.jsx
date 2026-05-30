import Navbar from "../components/Navbar";
import cover from "../assets/werood.jpeg";
import video from "../assets/werood.mp4";
import brochure from "../assets/brochure_wrood.pdf";
import { useState } from "react";

function ProjectElwroodPage() {
  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Elwrood",
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
    <div className="w-full bg-gray-50">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row min-h-screen pt-28 md:pt-32 gap-10 px-4 md:px-10 animate-fadeIn">

        {/* IMAGE */}
        <div className="w-full md:w-1/2 h-[350px] md:h-[80vh] overflow-hidden rounded-2xl shadow-xl">
          <img
            src={cover}
            alt="Dar Elwrood"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* TEXT */}
        <div
          className="w-full md:w-1/2 p-2 md:p-6 text-right flex flex-col justify-center"
          dir="rtl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6 animate-slideUp">
            مشروع دار الورود
          </h1>

          <p className="text-gray-700 leading-loose text-base md:text-lg text-justify animate-fadeIn">
            يقدم مشروع دار الورود من دار للاستثمار العقاري تجربة سكنية واستثمارية متكاملة
            تجمع بين الموقع المميز والهدوء والقيمة الحقيقية للاستثمار. صُمم المشروع
            ليوفر بيئة مريحة بعيدًا عن زحام المدينة، مع وحدات سكنية بمساحات تبدأ من
            120 م² وأنظمة سداد مرنة تناسب مختلف الاحتياجات. ويعد دار الورود فرصة مثالية
            للراغبين في الحفاظ على قيمة استثماراتهم وتحقيق عائد مستقبلي في موقع واعد
            ومجتمع سكني متكامل.
          </p>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="w-full py-24 flex justify-center animate-fadeIn">
        <video
          src={video}
          controls
          className="w-[92%] md:w-[70%] rounded-2xl shadow-2xl"
        />
      </section>

      {/* ================= INFO + FORM ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-20 py-24 animate-fadeIn">

        {/* INFO */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 text-right hover:shadow-3xl transition duration-500" dir="rtl">

          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            تفاصيل المشروع
          </h2>

          <p className="mb-3">📍 الموقع: طنطا - الطريق السريع خلف عمارات الأطباء</p>
          <p className="mb-3">🏠 المساحات: 155م - 122م - 203م - 174م</p>
          <p className="mb-3">💰 المقدم: 35%</p>
          <p className="mb-6">⏳ القسط: حتى سنتين ونص</p>

          <button
            onClick={() => setShowBrochure(true)}
            className="bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            عرض البرشور
          </button>
        </div>

        {/* FORM */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition duration-500">

          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 text-center">
            احجز / استفسر
          </h2>

          <input
            name="name"
            placeholder="الاسم"
            className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />

          <select
            name="project"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          >
            <option value="Dar Elwrood">Dar Elwrood</option>
            <option value="Dar Damac">Dar Damac</option>
            <option value="Dar Landmark">Dar Landmark</option>
          </select>

          <button
            onClick={openWhatsApp}
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition hover:scale-105"
          >
            تواصل واتساب
          </button>
        </div>
      </section>

      {/* ================= BROCHURE MODAL ================= */}
      {showBrochure && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="relative w-[95%] md:w-[80%] h-[90%] bg-white rounded-xl overflow-hidden shadow-2xl animate-fadeIn">

            <button
              onClick={() => setShowBrochure(false)}
              className="absolute top-3 right-3 z-50 bg-white text-black w-10 h-10 rounded-full shadow"
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
      <div className="text-center pb-24 pt-10 animate-fadeIn">

        <a
          href="/#projects"
          className="inline-block bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          تعرف على المشاريع الأخرى
        </a>

      </div>

      {/* ================= SIMPLE ANIMATIONS ================= */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-slideUp {
            animation: slideUp 1s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

    </div>
  );
}

export default ProjectElwroodPage;