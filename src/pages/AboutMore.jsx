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

  // ================= OBSERVER =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  // ================= COUNTER =================
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        return {
          projects: prev.projects < 8 ? prev.projects + 1 : 8,
          years: prev.years < 8 ? prev.years + 1 : 8,
          clients:
            prev.clients < 1000
              ? prev.clients + Math.ceil((1000 - prev.clients) / 10)
              : 1000,
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      className="w-full bg-white"
      style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
    >
      <Navbar />
      <div className="h-20" />

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-6 md:px-16">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-start gap-12">

          <div className="flex-1 text-right">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1E3A5F] tracking-wide">
              عن دار
            </h1>

            <span className="block w-24 h-1 bg-gradient-to-r from-[#1E3A5F] to-[#38BDF8] mt-4 rounded-full ml-auto"></span>
          </div>

          {/* ✅ FIX HERE ONLY */}
          <div
            className="flex-1 text-right text-gray-600 text-lg leading-10 text-justify"
            dir="rtl"
          >
            <p className="whitespace-pre-line text-justify">
دار للاستثمار العقاري هي شركة مصرية تأسست عام 2017، متخصصة في تقديم حلول عقارية متكاملة تجمع بين الاستثمار والسكن، بخبرة تمتد لسنوات في سوق العقارات داخل طنطا والقاهرة، وخاصة منطقة بيت الوطن.

نحرص على تقديم فرص عقارية مدروسة تجمع بين الأمان الاستثماري، والمواقع المميزة، وخطط السداد المرنة التي تناسب مختلف العملاء.

نؤمن أن النجاح في العقار لا يعتمد فقط على بيع وحدات، بل على بناء ثقة وعلاقات طويلة الأمد مع عملائنا.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-28 px-6 md:px-16 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

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
            <div key={i} className="text-right">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
                {item.title}
              </h2>

              <span className="block w-16 h-1 bg-gradient-to-r from-[#1E3A5F] to-[#38BDF8] mb-6 rounded-full ml-auto"></span>

              <p className="text-gray-600 text-lg leading-10 text-justify" dir="rtl">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= IMAGES ================= */}
      <section className="w-full flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 h-[500px] md:h-[700px] overflow-hidden group">
          <img
            src={aboutImg}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/2 h-[500px] md:h-[700px] overflow-hidden group">
          <img
            src={contactImg}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 px-6 md:px-16 bg-gray-50">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1E3A5F]">
            قِيَمُنا
          </h2>

          <span className="block w-24 h-1 bg-gradient-to-r from-[#1E3A5F] to-[#38BDF8] mx-auto mt-4 rounded-full"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {[
            { title: "الالتزام", text: "نلتزم بتقديم جودة عالية في كل مشروع، مع الحفاظ على الثقة والشفافية في كل خطوة." },
            { title: "الابتكار", text: "نبتكر حلول عقارية حديثة تجمع بين التصميم الذكي وتجربة سكنية تناسب المستقبل." },
            { title: "النزاهة", text: "نلتزم بالنزاهة والشفافية، ونضع مصلحة العميل في مقدمة أولوياتنا دائمًا." },
            { title: "الاتحاد", text: " نعمل كفريق واحد بروح التعاون لتحقيق أفضل النتائج في كل مشروع." }
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                p-8
                rounded-2xl
                shadow-sm
                text-right

                transition-all duration-500 ease-in-out
                transform
                hover:scale-105
                hover:shadow-2xl
                hover:-translate-y-2
                cursor-pointer
              "
            >
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-9 text-justify" dir="rtl">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        ref={statsRef}
        className="relative py-32 px-6 md:px-16 text-white overflow-hidden"
      >

        <img
          src={cover}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            حقائق وأرقام
          </h2>

          <span className="block w-24 h-1 bg-gradient-to-r from-white to-blue-300 mx-auto mt-4 rounded-full"></span>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">

          <div>
            <div className="text-6xl md:text-7xl font-bold">
              +{count.projects}
            </div>
            <p className="mt-4 text-gray-200">مشاريعنا</p>
          </div>

          <div>
            <div className="text-6xl md:text-7xl font-bold">
              +{count.years}
            </div>
            <p className="mt-4 text-gray-200">سنين الخبرة</p>
          </div>

          <div>
            <div className="text-6xl md:text-7xl font-bold">
              +{count.clients}
            </div>
            <p className="mt-4 text-gray-200">عملاؤنا</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutMore;