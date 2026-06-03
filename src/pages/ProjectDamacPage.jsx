import Navbar from "../components/Navbar";
import cover from "../assets/project-1.png";
import videoFile from "../assets/Damac.mp4";
import brochure from "../assets/brochure_damac.pdf";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function ProjectDamacPage() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", project: "Dar Damac" });
  const [showBrochure, setShowBrochure] = useState(false);
  const videoRef = useRef(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const openWhatsApp = () => {
    const message = `${t("damac", "whatsappMsg")} ${formData.name} ${t("damac", "whatsappMsg2")} ${formData.project}`;
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
      { threshold: 0.4 }
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
      <section className="flex flex-col md:flex-row min-h-screen pt-32 md:pt-40 gap-16 px-6 md:px-20 items-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#C9A84C]/10 blur-[140px] top-[-120px] right-[-120px]" />
        <div className="absolute w-[450px] h-[450px] bg-blue-200/20 blur-[140px] bottom-[-120px] left-[-120px]" />

        <div className="w-full md:w-1/2 h-[360px] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl group relative">
          <img src={cover} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E]/10 to-transparent" />
        </div>

        <div className="w-full md:w-1/2 relative z-10" style={{ textAlign }} dir={dir}>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0B1A2E]">
            <span style={{ color: "#C9A84C", textShadow: "0 0 10px rgba(201,168,76,0.35)" }}>
              {t("damac", "title1")}
            </span>{" "}
            {t("damac", "title2")}
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mb-8 ml-auto" />
          <p className="text-[#0B1A2E]/70 leading-10 text-justify">
            {t("damac", "desc")}
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="w-full py-28 flex justify-center">
        <div className="relative w-[92%] md:w-[70%]">
          <div className="absolute inset-0 bg-[#C9A84C]/10 blur-3xl rounded-2xl" />
          <video
            ref={videoRef}
            src={videoFile}
            controls muted playsInline
            className="relative w-full rounded-2xl shadow-2xl z-10"
          />
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-24 py-28">

        <div className="bg-white shadow-xl rounded-2xl p-10" style={{ textAlign }} dir={dir}>
        <h2 className="text-2xl font-bold text-[#0B1A2E] mb-6">
        {t("damac", "detailsTitle")}
        </h2>
      <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("damac", "location")}</p>
      <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("damac", "towers")}</p>
      <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("damac", "spaces")}</p>
      <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("damac", "downPayment")}</p>
      <p className="mb-6 text-[#0B1A2E]/70 text-justify">{t("damac", "installment")}</p>
      <button
       onClick={() => setShowBrochure(true)}
       className="bg-[#0B1A2E] text-white px-8 py-3 rounded-md hover:bg-[#1E3A5F] transition"
      >
      {t("damac", "brochureBtn")}
      </button>
      </div>

        <div className="bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-center text-2xl font-bold text-[#0B1A2E] mb-6">
            {t("damac", "formTitle")}
          </h2>
          <input
            name="name"
            placeholder={t("damac", "namePlaceholder")}
            className="w-full border p-3 rounded-md mb-4"
            onChange={handleChange}
          />
          <select name="project" className="w-full border p-3 rounded-md mb-4" onChange={handleChange}>
            <option value="Dar Damac">Dar Damac</option>
            <option value="Dar Landmark">Dar Landmark</option>
            <option value="Dar Elwrood">Dar Elwrood</option>
          </select>
          <button
            onClick={openWhatsApp}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            {t("damac", "whatsappBtn")}
          </button>
        </div>
      </section>

      {/* BACK */}
      <div className="text-center py-24">
        <a
          href="/#projects"
          className="inline-block bg-[#0B1A2E] text-white px-10 py-3 rounded-md hover:bg-[#1E3A5F] transition"
        >
          {t("damac", "backBtn")}
        </a>
      </div>

      {/* BROCHURE MODAL */}
      {showBrochure && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[95%] md:w-[80%] h-[90%] bg-white rounded-xl overflow-hidden">
            <button onClick={() => setShowBrochure(false)} className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow">×</button>
            <iframe src={brochure} className="w-full h-full" title="Brochure" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDamacPage;