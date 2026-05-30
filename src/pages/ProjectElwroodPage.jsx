import Navbar from "../components/Navbar";
import cover from "../assets/werood.jpeg";
import video from "../assets/werood.mp4";
import brochure from "../assets/brochure_wrood.pdf";
import { useState, useRef, useEffect } from "react";

function ProjectElwroodPage() {
  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Elwrood",
  });

  const [showBrochure, setShowBrochure] = useState(false);

  const videoRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const message = `مرحباً، اسمي ${formData.name} وأريد الاستفسار عن مشروع ${formData.project}`;
    const url = `https://wa.me/201039207908?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // 🔥 SAME LANDMARK VIDEO BEHAVIOR
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row min-h-screen pt-32 md:pt-40 gap-12 px-6 md:px-16">

        <div className="w-full md:w-1/2 h-[360px] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={cover}
            alt="Dar Elwrood"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center text-right" dir="rtl">

          <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            مشروع دار الورود
          </h1>

          <p className="text-gray-700 leading-loose text-base md:text-lg text-justify">
يقدم مشروع دار الورود من دار للاستثمار العقاري تجربة سكنية واستثمارية متكاملة تجمع بين الموقع المميز والهدوء والقيمة الحقيقية للاستثمار. صُمم المشروع ليوفر بيئة مريحة بعيدًا عن زحام المدينة، مع وحدات سكنية بمساحات تبدأ من 120 م² وأنظمة سداد مرنة تناسب مختلف الاحتياجات. ويعد دار الورود فرصة مثالية للراغبين في الحفاظ على قيمة استثماراتهم وتحقيق عائد مستقبلي في موقع واعد ومجتمع سكني متكامل.
          </p>

        </div>
      </section>

      {/* ================= VIDEO (LANDMARK STYLE) ================= */}
      <section className="w-full py-28 flex justify-center items-center relative">

        {/* glow */}
        <div className="absolute w-[80%] md:w-[60%] h-[300px] md:h-[420px] bg-blue-500/30 blur-3xl rounded-full"></div>

        {/* video */}
        <div className="relative w-[92%] md:w-[70%] group transition-all duration-700">

          <video
            ref={videoRef}
            src={video}
            controls
            muted
            playsInline
            className="
              w-full rounded-2xl shadow-2xl
              transition-all duration-700
              group-hover:scale-110
              group-hover:shadow-blue-400/40
              group-hover:shadow-2xl
              group-hover:brightness-110
            "
          />

          {/* border glow */}
          <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-blue-400/60 transition-all duration-500 pointer-events-none"></div>

        </div>

      </section>

      {/* ================= INFO + FORM ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-24 py-28">

        <div className="bg-white shadow-2xl rounded-2xl p-8 text-right" dir="rtl">

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

        <div className="bg-white shadow-2xl rounded-2xl p-8">

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
            <option value="Dar Elwrood">Dar Elwrood</option>
            <option value="Dar Damac">Dar Damac</option>
            <option value="Dar Landmark">Dar Landmark</option>
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
      <div className="text-center py-24">

        <a
          href="/#projects"
          className="inline-block bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          تعرف على المشاريع الأخرى
        </a>

      </div>

    </div>
  );
}

export default ProjectElwroodPage;