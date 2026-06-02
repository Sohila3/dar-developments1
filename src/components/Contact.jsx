import { useState } from "react";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [project, setProject] = useState("");

  const handleWhatsApp = () => {
    const message = `مرحبا، اسمي ${name} وأريد معرفة المزيد عن مشروع ${project}`;
    const whatsappURL = `https://wa.me/201039207908?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      id="contact"
      className="w-full py-24 px-6 md:px-16"
      style={{
        background: "#f8fbff",
        fontFamily: "'Noto Naskh Arabic', serif",
        direction: "rtl",
      }}
    >

      {/* ================= STYLE ================= */}
      <style>{`
        .contact-wrap { animation: fadeUp 0.7s ease forwards; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4A4A4A;
          text-decoration: none;
          font-size: 15px;
        }
        .social-link:hover {
          color: #C9A84C;
          gap: 12px;
        }

        .cta-btn {
          background: #C9A84C;
          color: #0B1A2E;
          border: none;
          border-radius: 6px;
          padding: 14px 30px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .cta-btn:hover {
          background: #E8C96A;
          transform: translateY(-2px);
        }

        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .popup-box {
          background: #FAF6EE;
          width: 100%;
          max-width: 420px;
          border-radius: 10px;
          padding: 35px;
        }

        .popup-input {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 6px;
        }

        .popup-submit {
          width: 100%;
          margin-top: 15px;
          padding: 12px;
          background: #0B1A2E;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }
        .popup-submit:hover {
          background: #C9A84C;
          color: #0B1A2E;
        }
      `}</style>

      <div
        className="contact-wrap max-w-6xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >

        {/* ================= LEFT ================= */}
        <div style={{ background: "white", padding: "40px", textAlign: "right" }}>

          <h3 style={{ fontSize: "32px", fontWeight: 700 }}>
            تواصل <span style={{ color: "#C9A84C" }}>معنا</span>
          </h3>

          {/* ✨ NEW LOCATION SECTION */}
          <div style={{ marginTop: "25px" }}>
            <p style={{ fontWeight: 600, color: "#C9A84C", marginBottom: "8px" }}>
              مقر الشركة
            </p>

            <p style={{ color: "#444", lineHeight: 1.8 }}>
              طنطا - شارع توت عنخ آمون من محمد فريد فوق مخبز الزهراء
            </p>

            <a
              href="https://maps.app.goo.gl/CjGnSencAK6vsoh19?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ marginTop: "10px", display: "inline-block", color: "#C9A84C" }}
            >
               افتح على الخريطة
            </a>
          </div>

          {/* SOCIAL */}
          <div style={{ marginTop: "30px" }}>
            <p style={{ fontWeight: 600, color: "#C9A84C", marginBottom: "10px" }}>
              تابعنا على السوشيال ميديا
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://www.facebook.com/share/1XgDRDMitV/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                ← Facebook
              </a>

              <a
                href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                ← Instagram
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div style={{ background: "#0B1A2E", padding: "45px", color: "#fff" }}>

          <h2 style={{ fontSize: "34px", fontWeight: 700 }}>
            لنتحدث
          </h2>

          {/* ✨ NEW TEXT */}
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "8px" }}>
            اعرف أكتر عن المشروع
          </p>

          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "10px", lineHeight: 1.8 }}>
            احنا هنا عشان نساعدك تختار أفضل مشروع يناسب احتياجك واستثمارك
          </p>

          <button className="cta-btn" onClick={() => setShowForm(true)}>
            لنتحدث
          </button>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-box">

            <button onClick={() => setShowForm(false)}>×</button>

            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
              لنتحدث
            </h3>

            <input
              className="popup-input"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select
              className="popup-input"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="">اختر المشروع</option>
              <option value="Dar Damac">Dar Damac</option>
              <option value="Dar Landmark">Dar Landmark</option>
              <option value="Dar Elwrood">Dar Elwrood</option>
            </select>

            <button className="popup-submit" onClick={handleWhatsApp}>
              إرسال عبر واتساب
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;