import Navbar from "../components/Navbar";
import cover from "../assets/werood.jpeg";
import video from "../assets/werood.mp4";
import brochure from "../assets/brochure_wrood.pdf";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function ProjectElwroodPage() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", project: "Dar Elwrood" });
  const [showBrochure, setShowBrochure] = useState(false);
  const videoRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const message = `${t("elwrood", "whatsappMsg")} ${formData.name} ${t("elwrood", "whatsappMsg2")} ${formData.project}`;
    window.open(`https://wa.me/201039207908?text=${encodeURIComponent(message)}`, "_blank");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    let isPlaying = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { if (!isPlaying) { isPlaying = true; video.play().catch(() => {}); } }
        else { isPlaying = false; video.pause(); }
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const textAlign = lang === "ar" ? "right" : "left";

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg,#ffffff 0%,#eef6ff 35%,#dbeafe 100%)",
        fontFamily: lang === "ar" ? "'IBM Plex Sans Arabic', sans-serif" : "'Montserrat', sans-serif",
        direction: dir,
      }}
    >
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col md:flex-row min-h-screen pt-32 md:pt-40 gap-16 px-6 md:px-20 items-center">
        <div className="w-full md:w-1/2 h-[360px] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl relative group">
          <img src={cover} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>

        <div className="w-full md:w-1/2" style={{ textAlign }} dir={dir}>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0B1A2E]">
            <span style={{ color: "#C9A84C", textShadow: "0 0 10px rgba(201,168,76,0.35)" }}>
              {t("elwrood", "title1")}
            </span>{" "}
            {t("elwrood", "title2")}
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mb-8 ml-auto" />
          <p className="text-gray-600 leading-10 text-justify opacity-90">
            {t("elwrood", "desc")}
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative w-full py-28 flex justify-center">
        <div className="absolute w-[70%] h-[320px] bg-[#C9A84C]/20 blur-3xl rounded-full" />
        <div className="relative w-[92%] md:w-[70%]">
          <video
            ref={videoRef}
            src={video}
            controls muted playsInline
            className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition duration-700"
          />
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-24 py-28">

        {/* DETAILS */}
        <div className="bg-white shadow-xl rounded-2xl p-10" style={{ textAlign }} dir={dir}>
          <h2 className="text-2xl font-bold text-[#0B1A2E] mb-6">
            {t("elwrood", "detailsTitle")}
          </h2>
          <p className="mb-3 text-gray-600 text-justify">{t("elwrood", "location")}
            <br />

            <a
              href="https://www.google.com/maps?q=30.809358596801758,31.007654190063477&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
              color: "#C9A84C",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#9A7535"}
              onMouseLeave={e => e.currentTarget.style.color = "#C9A84C"}
           >
  

           <span>
              {lang === "ar"
              ? "عرض الموقع على الخريطة"
              : "View on Google Maps"}
           </span>
          </a>
          </p>
          <p className="mb-3 text-gray-600 text-justify">{t("elwrood", "towers")}</p>
          <p className="mb-3 text-gray-600 text-justify">{t("elwrood", "spaces")}</p>
          <p className="mb-3 text-gray-600 text-justify">{t("elwrood", "downPayment")}</p>
          <p className="mb-6 text-gray-600 text-justify">{t("elwrood", "installment")}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowBrochure(true)}
              className="bg-gradient-to-r from-[#0B1A2E] to-[#1E3A5F] text-white px-8 py-3 rounded-md shadow-md hover:shadow-xl hover:scale-[1.02] transition"
            >
              {t("elwrood", "brochureBtn")}
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-[#0B1A2E] mb-6 text-center">
            {t("elwrood", "formTitle")}
          </h2>
          <input
            name="name"
            placeholder={t("elwrood", "namePlaceholder")}
            className="w-full border p-3 rounded-md mb-4"
            onChange={handleChange}
          />
          <select name="project" className="w-full border p-3 rounded-md mb-4" onChange={handleChange}>
            <option value="Dar Elwrood">Dar Elwrood</option>
            <option value="Dar Damac">Dar Damac</option>
            <option value="Dar Landmark">Dar Landmark</option>
          </select>
          <button
            onClick={openWhatsApp}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition shadow-md hover:shadow-lg"
          >
            {t("elwrood", "whatsappBtn")}
          </button>
        </div>
      </section>

      {/* BROCHURE */}
      {showBrochure && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[95%] md:w-[80%] h-[90%] bg-white rounded-xl overflow-hidden">
            <button onClick={() => setShowBrochure(false)} className="absolute top-3 right-3 bg-white w-10 h-10 rounded-md shadow">×</button>
            <iframe src={brochure} className="w-full h-full" />
          </div>
        </div>
      )}

      {/* BACK */}
      <div className="text-center py-24">
        <a
          href="/#projects"
          className="inline-block bg-gradient-to-r from-[#0B1A2E] to-[#1E3A5F] text-white px-10 py-3 rounded-md shadow-md hover:scale-105 transition"
        >
          {t("elwrood", "backBtn")}
        </a>
      </div>
    </div>
  );
}

export default ProjectElwroodPage;