import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

import aboutImg from "../assets/about-uspage.jpeg";
import contactImg from "../assets/contact-us.jpeg";
import cover from "../assets/cover.png";

function AboutMore() {
  const statsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [count, setCount] = useState({
    projects: 0,
    years: 0,
    clients: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCount((prev) => ({
        projects: prev.projects < 8 ? prev.projects + 1 : 8,
        years: prev.years < 8 ? prev.years + 1 : 8,
        clients:
          prev.clients < 1000
            ? prev.clients + Math.ceil((1000 - prev.clients) / 12)
            : 1000,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,#f5f9ff 50%)",
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
      }}
    >
      <Navbar />
      <div className="h-20" />

      {/* ================= HERO ================= */}
      <section className="py-32 px-6 md:px-16 relative overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-blue-200/30 blur-[120px] top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#C9A84C]/20 blur-[100px] bottom-[-120px] left-[-120px]" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-start gap-16">

          <div className="flex-1 text-right">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0B1A2E]">
              <span
                style={{
                  color: "#C9A84C",
                  textShadow: "0 0 10px rgba(201,168,76,0.35)",
                }}
              >
                عن
              </span>{" "}
              دار
            </h1>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mt-6 ml-auto" />
          </div>

          {/* ABOUT TEXT */}
          <div className="flex-1 text-right text-gray-600 text-lg leading-10 text-justify" dir="rtl">
            <p>
              دار للاستثمار العقاري هي شركة مصرية تأسست عام 2017،
              متخصصة في تقديم حلول عقارية متكاملة تجمع بين الاستثمار والسكن،
              بخبرة تمتد لسنوات في سوق العقارات داخل طنطا والقاهرة.

              <br /><br />

              نحرص على تقديم فرص عقارية مدروسة تجمع بين الأمان الاستثماري،
              والمواقع المميزة، وخطط السداد المرنة التي تناسب مختلف العملاء.

              <br /><br />

              نؤمن أن النجاح في العقار لا يعتمد فقط على البيع،
              بل على بناء ثقة وعلاقات طويلة الأمد مع عملائنا.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-36 px-6 md:px-16 bg-[#FAF6EE]/40">

        <div
  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20"
  dir="rtl"
>

          {[
            {
              title: "رؤيتنا",
              text: "نطمح لأن نكون شريكك العقاري الموثوق الذي يقودك نحو استثمار مستدام."
            },
            {
              title: "مهمتنا",
              text: "نقدم مجتمعات سكنية متكاملة تحقق تجربة معيشية استثنائية."
            }
          ].map((item, i) => (
            <div key={i} className="text-right group cursor-default">

              <h2 className="
                text-4xl md:text-5xl font-bold
                text-[#C9A84C]
                transition duration-300
                group-hover:drop-shadow-[0_0_10px_rgba(201,168,76,0.6)]
              ">
                {item.title}
              </h2>

              <div className="w-16 h-[2px] bg-[#C9A84C] mt-4 mb-6 ml-auto" />

              <p className="text-gray-600 leading-10 text-justify">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* IMAGES */}
      <section className="flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 h-[600px] overflow-hidden">
          <img src={aboutImg} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
        </div>

        <div className="w-full md:w-1/2 h-[600px] overflow-hidden">
          <img src={contactImg} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
        </div>

      </section>

      {/* VALUES */}
      <section className="py-36 px-6 md:px-16 bg-white">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#C9A84C]">
            قِيَمُنَـــا
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto mt-6" />
        </div>

        <div
  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20"
  dir="rtl"
>

          {[
            { title: "الالتزام", text: "نلتزم بتقديم جودة عالية في كل مشروع، مع الحفاظ على الثقة والشفافية في كل خطوة" },
            { title: "الابتكار", text: "نبتكر حلول عقارية حديثة تجمع بين التصميم الذكي وتجربة سكنية تناسب المستقبل" },
            { title: "النزاهة", text: "نلتزم بالنزاهة والشفافية، ونضع مصلحة العميل في مقدمة أولوياتنا دائمًا" },
            { title: "الاتحاد", text: "نعمل كفريق واحد بروح التعاون لتحقيق أفضل النتائج في كل مشروع" }
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-10 rounded-2xl
                border border-gray-100
                bg-white
                shadow-sm
                text-right
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[#C9A84C]
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0B1A2E]">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-10 text-justify">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section
        ref={statsRef}
        className="relative py-40 px-6 md:px-16 text-white overflow-hidden"
      >

        <img src={cover} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">أرقامنا</h2>
          <div className="w-24 h-[2px] bg-white mx-auto mt-6" />
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-16 text-center">

          <div>
            <div className="text-6xl font-bold text-[#C9A84C]">+{count.projects}</div>
            <p className="mt-4 opacity-70">مشاريعنا</p>
          </div>

          <div>
            <div className="text-6xl font-bold text-[#C9A84C]">+{count.years}</div>
            <p className="mt-4 opacity-70">سنين الخبرة</p>
          </div>

          <div>
            <div className="text-6xl font-bold text-[#C9A84C]">+{count.clients}</div>
            <p className="mt-4 opacity-70">عملاؤنا</p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default AboutMore;