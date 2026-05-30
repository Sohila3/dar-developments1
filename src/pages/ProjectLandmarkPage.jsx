import Navbar from "../components/Navbar";
import cover from "../assets/landmark.jpeg";
import videoFile from "../assets/Landmark.mp4";
import brochure from "../assets/brochure_landmark.pdf";
import { useState, useRef, useEffect } from "react";

function ProjectLandmarkPage() {
  const [formData, setFormData] = useState({
    name: "",
    project: "Dar Landmark",
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

  // ================= VIDEO AUTO PLAY / PAUSE (FIXED + MOBILE SAFE) =================
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    let isPlaying = false;

    const playVideo = () => {
      if (!isPlaying) {
        isPlaying = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    const pauseVideo = () => {
      if (isPlaying) {
        isPlaying = false;
        video.pause();
      }
    };

    // 1) Intersection Observer (primary)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(video);

    // 2) Scroll fallback (important for mobile Safari)
    const handleScroll = () => {
      const rect = video.getBoundingClientRect();

      const inView =
        rect.top < window.innerHeight * 0.75 &&
        rect.bottom > window.innerHeight * 0.25;

      if (inView) playVideo();
      else pauseVideo();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // run on load

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-white">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row h-screen mt-24 md:mt-0">

        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={cover}
            alt="Dar Landmark"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="w-full md:w-1/2 p-6 md:p-12 text-right flex flex-col justify-center"
          dir="rtl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            مشروع دار لاند مارك
          </h1>

          <p className="text-gray-700 leading-loose text-base md:text-lg text-justify">
مشروع سكني متكامل يقدم تجربة معيشية هادئة واستثمارًا ذكيًا في موقع مميز بالقرب من أهم المناطق الحيوية في طنطا، مما يضعك على بُعد دقائق من كل ما تحتاجه.
يتميز المشروع بتنوع المساحات التي تصل إلى 199 م²، ليناسب مختلف الاحتياجات العائلية، مع تصميم يراعي الراحة وجودة الحياة في كل تفصيلة.
اختيارك لـ Dar Landmark هو خطوة نحو حياة أكثر هدوءًا واستثمار أكثر استقرارًا وقيمة مستقبلية أفضل.          </p>
        </div>

      </section>

      {/* ================= VIDEO ================= */}
      <section className="w-full py-24 bg-gray-100 flex justify-center mt-10">

        <div className="relative w-[92%] md:w-[70%]">

          {/* glow background */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-2xl"></div>

          <video
            ref={videoRef}
            src={videoFile}
            controls
            muted
            playsInline
            preload="auto"
            className="relative w-full rounded-2xl shadow-2xl z-10"
          />
        </div>

      </section>

      {/* ================= INFO + FORM ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-24 py-24">

        <div className="bg-white shadow-xl rounded-2xl p-8 text-right" dir="rtl">

          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
            تفاصيل المشروع
          </h2>

          <p className="mb-3">📍 الموقع: طنطا - الطريق السريع امام شركة الكهرباء وبالقرب من منطقة الاستاد</p>
          <p className="mb-3">🏢 يتكون من: برجين</p>
          <p className="mb-3">💰 المقدم: 35%</p>
          <p className="mb-6">⏳ القسط: سنتين ونص</p>

          <button
            onClick={() => setShowBrochure(true)}
            className="bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            عرض البرشور
          </button>

        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h2 className="text-center text-2xl font-bold mb-6">
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

      {/* ================= BROCHURE ================= */}
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

      {/* ================= BACK ================= */}
      <div className="text-center py-20">
        <a
          href="/#projects"
          className="inline-block bg-gradient-to-r from-[#1E3A5F] to-blue-500 text-white px-8 py-3 rounded-full"
        >
          تعرف على المشاريع الأخرى
        </a>
      </div>

    </div>
  );
}

export default ProjectLandmarkPage;