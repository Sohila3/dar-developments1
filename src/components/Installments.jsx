import installmentImg from "../assets/installments.jpeg";

function Installments() {
  return (
    <section
      className="w-full py-24 px-6 md:px-16"
      style={{
        background: "#f8fbff",
        fontFamily: "'Noto Naskh Arabic', serif",
        direction: "rtl",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        .install-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(201,168,76,0.25);
        }
        .install-img-wrap img {
          transition: transform .7s ease;
        }
        .install-img-wrap:hover img {
          transform: scale(1.04);
        }
      `}</style>

      {/* TEXT */}
      <div className="text-center mb-12">

        {/* LABEL */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "14px",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#C9A84C", display: "inline-block",
          }} />
          <span style={{ fontSize: "12px", color: "#9A7535", letterSpacing: "1.5px" }}>
            خطط السداد
          </span>
        </div>

        {/* TITLE */}
        <h2 style={{
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 700,
          color: "#0B1A2E",
          lineHeight: 1.4,
          marginBottom: "8px",
        }}>
          أنظمة <span style={{ color: "#C9A84C" }}>التقسيط والمقدم</span>
        </h2>

        {/* GOLD LINE */}
        <div style={{
          width: "50px", height: "2px",
          background: "linear-gradient(90deg,#C9A84C,#E8C96A)",
          margin: "12px auto 16px",
          borderRadius: "2px",
        }} />

        {/* SUBTITLE */}
        <p style={{
          color: "#4A4A4A",
          fontSize: "clamp(14px, 1.6vw, 17px)",
          lineHeight: 2,
          maxWidth: "600px",
          margin: "0 auto",
        }}>
          نوفر لك أفضل خطط السداد بمقدم منخفض وأقساط مريحة تناسب جميع العملاء
        </p>

      </div>

      {/* IMAGE */}
      <div
        className="install-img-wrap"
        style={{ width: "100%", height: "clamp(280px, 60vh, 600px)" }}
      >
        <img
          src={installmentImg}
          alt="installments"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            filter: "brightness(100%) contrast(110%)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.08)",
        }} />
      </div>

    </section>
  );
}

export default Installments;