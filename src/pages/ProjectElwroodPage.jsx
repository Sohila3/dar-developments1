import Navbar from "../components/Navbar";
import cover from "../assets/werood.jpeg";
import video from "../assets/werood.mp4";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function ProjectElwroodPage() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", project: "Dar Elwrood" });
  const [error, setError] = useState("");
  const videoRef = useRef(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const openWhatsApp = () => {
    if (!formData.name || formData.name.trim() === "") {
      setError(lang === "ar" ? "من فضلك اكتب الاسم أولاً" : "Please enter your name");
      return;
    }
    setError("");
    const message = `${t("elwrood", "whatsappMsg")} ${formData.name} ${t("elwrood", "whatsappMsg2")} ${formData.project}`;
    window.open(`https://wa.me/201039207908?text=${encodeURIComponent(message)}`, "_blank");
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.playsInline = true;
    let isPlaying = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { if (!isPlaying) { isPlaying = true; vid.play().catch(() => {}); } }
        else { isPlaying = false; vid.pause(); }
      },
      { threshold: 0.5 }
    );
    observer.observe(vid);
    return () => observer.disconnect();
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const textAlign = lang === "ar" ? "right" : "left";

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg,#ffffff 0%,#eef6ff 35%,#dbeafe 100%)",
        fontFamily: "'Noto Naskh Arabic', serif",
        direction: dir,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .custom-select-wrapper { position: relative; width: 100%; margin-bottom: 16px; }
        .custom-select {
          width: 100%; appearance: none; -webkit-appearance: none;
          background: #fff; border: 1.5px solid rgba(201,168,76,0.35);
          border-radius: 6px; padding: 13px 44px 13px 16px;
          font-size: 15px; color: #0B1A2E; cursor: pointer; outline: none;
          transition: border-color .25s; font-family: 'Noto Naskh Arabic', serif;
          direction: ${dir};
        }
        .custom-select:focus { border-color: #C9A84C; box-shadow: 0 0 0 3px rgba(201,168,76,0.12); }
        .custom-select-arrow {
          position: absolute; top: 50%;
          ${lang === "ar" ? "left: 14px;" : "right: 14px;"}
          transform: translateY(-50%);
          pointer-events: none; color: #C9A84C; font-size: 12px;
        }
        .custom-input {
          width: 100%; border: 1.5px solid rgba(201,168,76,0.35);
          border-radius: 6px; padding: 13px 16px; font-size: 15px;
          color: #0B1A2E; outline: none;
          transition: border-color .25s, box-shadow .25s;
          font-family: 'Noto Naskh Arabic', serif;
          margin-bottom: 8px; direction: ${dir}; display: block;
        }
        .custom-input:focus { border-color: #C9A84C; box-shadow: 0 0 0 3px rgba(201,168,76,0.12); }
        .custom-input::placeholder { color: rgba(11,26,46,0.35); }

        .wa-btn {
          width: 100%; background: #1E3A5F; color: white;
          border: none; border-radius: 6px; padding: 14px;
          font-size: 15px; font-weight: 700;
          font-family: 'Noto Naskh Arabic', serif;
          cursor: pointer; transition: all .3s ease;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .wa-btn:hover {
          background: #C9A84C; color: #0B1A2E;
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,168,76,0.25);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr; }
        }
        .trust-left {
          background: #0B1A2E; padding: 56px 48px;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        .trust-right {
          background: white; padding: 56px 48px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .trust-stat {
          display: flex; flex-direction: column;
          padding: 18px 0;
          border-bottom: 1px solid rgba(201,168,76,0.15);
          animation: countUp 0.6s ease forwards;
        }
        .trust-stat:last-child { border-bottom: none; }
        .trust-stat-num {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700; color: #C9A84C; line-height: 1; margin-bottom: 4px;
        }
        .trust-stat-lbl { font-size: 14px; color: rgba(30,58,95,0.55); }

        .trust-cta-btn {
          background: #C9A84C; color: #0B1A2E;
          border: none; border-radius: 6px;
          padding: 14px 30px; font-size: 15px; font-weight: 700;
          font-family: 'Noto Naskh Arabic', serif;
          cursor: pointer; transition: all .35s ease;
          text-decoration: none; display: inline-block;
          margin-top: 28px; width: fit-content;
        }
        .trust-cta-btn:hover {
          background: #E8C96A; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.3);
        }

        .back-btn {
          display: inline-block; background: #0B1A2E; color: white;
          padding: 13px 40px; border-radius: 6px;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 15px; font-weight: 600;
          text-decoration: none; transition: all .3s ease;
        }
        .back-btn:hover { background: #C9A84C; color: #0B1A2E; transform: translateY(-2px); }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section
        className="flex flex-col md:flex-row min-h-screen pt-32 md:pt-40 gap-16 px-6 md:px-20 items-center relative overflow-hidden"
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
      >
        <div className="absolute w-[500px] h-[500px] bg-[#C9A84C]/10 blur-[140px] top-[-120px] right-[-120px]" />
        <div className="absolute w-[450px] h-[450px] bg-blue-200/20 blur-[140px] bottom-[-120px] left-[-120px]" />

        <div className="w-full md:w-1/2 h-[360px] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl relative group">
          <img src={cover} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>

        <div className="w-full md:w-1/2 relative z-10" style={{ textAlign }} dir={dir}>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0B1A2E]" style={{ lineHeight: 1.3 }}>
            <span style={{ color: "#C9A84C", textShadow: "0 0 10px rgba(201,168,76,0.35)" }}>
              {t("elwrood", "title1")}
            </span>{" "}
            {t("elwrood", "title2")}
          </h1>
          <div style={{
            width: "80px", height: "2px",
            background: "linear-gradient(90deg,#C9A84C,#E8C96A)",
            margin: lang === "ar" ? "16px 0 24px auto" : "16px auto 24px 0",
          }} />
          <p className="text-[#0B1A2E]/70 leading-10 text-justify">
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
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-24 py-28"
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      >
        {/* DETAILS */}
        <div
          className="bg-white shadow-xl rounded-2xl p-10"
          style={{ textAlign, order: lang === "ar" ? 1 : 2 }}
          dir={dir}
        >
          <h2 className="text-2xl font-bold text-[#0B1A2E] mb-2">
            {t("elwrood", "detailsTitle")}
          </h2>
          <div style={{
            width: "40px", height: "2px",
            background: "linear-gradient(90deg,#C9A84C,#E8C96A)",
            marginBottom: "20px", borderRadius: "2px",
            marginLeft: lang === "ar" ? "auto" : "0",
            marginRight: lang === "ar" ? "0" : "auto",
          }} />
          <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("elwrood", "location")}</p>
          
          <a  href="https://www.google.com/maps?q=30.809358596801758,31.007654190063477&z=17&hl=en"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "#C9A84C", fontSize: "14px", fontWeight: 600,
              textDecoration: "none", marginBottom: "12px", transition: "color .3s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#9A7535"}
            onMouseLeave={e => e.currentTarget.style.color = "#C9A84C"}
          >
            <span>{lang === "ar" ? "←" : "→"}</span>
            {lang === "ar" ? "عرض الموقع على الخريطة" : "View on Google Maps"}
          </a>
          <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("elwrood", "towers")}</p>
          <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("elwrood", "spaces")}</p>
          <p className="mb-3 text-[#0B1A2E]/70 text-justify">{t("elwrood", "downPayment")}</p>
          <p className="mb-6 text-[#0B1A2E]/70 text-justify">{t("elwrood", "installment")}</p>
        </div>

        {/* FORM */}
        <div
          className="bg-white shadow-xl rounded-2xl p-10"
          style={{ direction: dir, order: lang === "ar" ? 2 : 1 }}
        >
          <h2 className="text-2xl font-bold text-[#0B1A2E] mb-2" style={{ textAlign: "center" }}>
            {t("elwrood", "formTitle")}
          </h2>
          <div style={{
            width: "40px", height: "2px",
            background: "linear-gradient(90deg,#C9A84C,#E8C96A)",
            margin: "0 auto 24px", borderRadius: "2px",
          }} />

          <input
            name="name"
            placeholder={t("elwrood", "namePlaceholder")}
            className="custom-input"
            onChange={(e) => { handleChange(e); if (error) setError(""); }}
          />
          {error && (
            <div style={{
              marginBottom: "12px", color: "#ff3b3b", fontSize: "13px",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
              <span>{"⚠️"}</span>{error}
            </div>
          )}

          <div className="custom-select-wrapper">
            <select name="project" className="custom-select" onChange={handleChange}>
              <option value="Dar Elwrood">Dar Elwrood</option>
              <option value="Dar Damac">Dar Damac</option>
              <option value="Dar Landmark">Dar Landmark</option>
            </select>
            <span className="custom-select-arrow">{"▼"}</span>
          </div>

          <button className="wa-btn" onClick={openWhatsApp}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t("elwrood", "whatsappBtn")}
          </button>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="px-6 md:px-24 pb-28" style={{ direction: dir }}>
        <div className="max-w-6xl mx-auto trust-grid">

          {/* LEFT — DARK */}
          <div className="trust-left" style={{ order: lang === "ar" ? 1 : 2 }}>
            <div style={{
              position: "absolute", top: -60, right: -60, width: 220, height: 220,
              borderRadius: "50%", pointerEvents: "none",
              background: "radial-gradient(circle,rgba(201,168,76,0.08) 0%,transparent 70%)",
            }} />
            <div style={{
              position: "absolute", bottom: -40, left: -40, width: 160, height: 160,
              borderRadius: "50%", pointerEvents: "none",
              background: "radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 70%)",
            }} />

            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              marginBottom: "16px", alignSelf: lang === "ar" ? "flex-end" : "flex-start",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#C9A84C",
                display: "inline-block", animation: "pulse 2s infinite",
              }} />
              <span style={{ fontSize: "12px", color: "#9A7535", letterSpacing: "1.5px" }}>
                {lang === "ar" ? "ثقة ممتدة" : "Trusted Since"}
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700,
              color: "#FAF6EE", lineHeight: 1.4, marginBottom: "6px",
              textAlign: lang === "ar" ? "right" : "left",
            }}>
              {lang === "ar" ? "خبرة ممتدة لأكثر من" : "Over"}{" "}
              <span style={{ color: "#C9A84C" }}>
                {lang === "ar" ? "8 أعوام" : "8 Years"}
              </span>
              {lang === "en" && " of Excellence"}
            </h2>

            <div style={{
              width: "40px", height: "2px",
              background: "linear-gradient(90deg,#C9A84C,#E8C96A)",
              borderRadius: "2px", marginBottom: "20px",
              alignSelf: lang === "ar" ? "flex-end" : "flex-start",
            }} />

            <p style={{
              color: "rgba(250,246,238,0.6)", fontSize: "clamp(14px, 1.5vw, 16px)",
              lineHeight: 2, maxWidth: "380px",
              textAlign: lang === "ar" ? "right" : "left",
              alignSelf: lang === "ar" ? "flex-end" : "flex-start",
            }}>
              {lang === "ar"
                ? "نحن لا نبني وحدات سكنية فحسب — نبني علاقات تدوم. دعمنا لعملائنا لا يتوقف عند التسليم، بل يمتد معهم في كل خطوة."
                : "We don't just build units — we build lasting relationships. Our commitment to clients extends well beyond handover, every step of the way."}
            </p>

            {/* LOCATION */}
            <div style={{
              marginTop: "18px", color: "rgba(250,246,238,0.75)",
              fontSize: "14px", lineHeight: 1.9, direction: dir,
              textAlign: lang === "ar" ? "right" : "left",
              maxWidth: "420px", alignSelf: lang === "ar" ? "flex-end" : "flex-start",
            }}>
              <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                {lang === "ar" ? "مقر الشركة:" : "Company Location:"}
              </div>
              <div style={{ lineHeight: 1.8 }}>
                {lang === "ar"
                  ? "طنطا - شارع توت عنخ آمون من محمد فريد فوق مخبز الزهراء"
                  : "Tanta - Tutankhamun Street, Mohamed Farid, above Al Zahraa Bakery"}
              </div>
              <a href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
                target="_blank" rel="noreferrer"
                style={{ color: "#C9A84C", textDecoration: "none", display: "inline-block", marginTop: "6px", fontWeight: 600 }}>
                {lang === "ar" ? "← افتح على الخريطة" : "→ Open in Maps"}
              </a>
            </div>

            {/* SOCIAL */}
            <div style={{
              marginTop: "18px",
    textAlign: "center",
    direction: lang === "ar" ? "rtl" : "ltr",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "rgba(250,246,238,0.75)",
    fontSize: "14px",
            }}>
              <div style={{ fontWeight: 600, marginBottom: "12px" }}>
                {lang === "ar" ? "تابعنا على السوشيال ميديا:" : "Follow us:"}
              </div>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <a href="https://www.facebook.com/share/1XgDRDMitV/" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C">
                    <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85" target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 1114.5 12 2.5 2.5 0 0112 9.5zM17.8 6.2a1 1 0 11-1 1 1 1 0 011-1z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — STATS */}
          <div className="trust-right" style={{
            order: lang === "ar" ? 2 : 1,
            textAlign: lang === "ar" ? "right" : "left",
          }}>
            {[
              { num: "8+",   ar: "سنوات خبرة في السوق العقاري",  en: "Years in Real Estate" },
              { num: "+100", ar: "وحدة سكنية تم تسليمها بنجاح",  en: "Units Successfully Delivered" },
              { num: "3",    ar: "مشاريع نشطة حالياً في طنطا",   en: "Active Projects in Tanta" },
              { num: "98%",  ar: "نسبة رضا العملاء عن خدماتنا",  en: "Client Satisfaction Rate" },
            ].map((s, i) => (
              <div key={i} className="trust-stat" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                <span className="trust-stat-num">{s.num}</span>
                <span className="trust-stat-lbl">{lang === "ar" ? s.ar : s.en}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BACK */}
      <div className="text-center py-16">
        <a href="/#projects" className="back-btn">
          {t("elwrood", "backBtn")}
        </a>
      </div>
    </div>
  );
}

export default ProjectElwroodPage;