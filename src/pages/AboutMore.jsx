import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";

import aboutImg from "../assets/about-uspage.jpeg";
import contactImg from "../assets/contact-us.jpeg";
import cover from "../assets/cover.png";

function AboutMore() {

  const statsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />
      <div className="h-20" />

      {/* ===================== */}
      {/* 1 - ABOUT */}
      {/* ===================== */}
      <section className="py-24 px-6 md:px-16">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-start gap-12">

          <div className="flex-1 text-right">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A5F]">
              عن دار
            </h1>
          </div>

          <div className="flex-1 text-right text-gray-600 text-lg leading-10" dir="rtl">
            <p className="text-justify">
              من خلال رؤية مستقبلية تتمحور حول المجتمع والإلتزام بإضافة قيمة حقيقية،
              خلقت دار لنفسها مكانة قوية في السوق العقاري.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== */}
      {/* 2 - VISION & MISSION */}
      {/* ===================== */}
      <section className="py-28 px-6 md:px-16 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
              رؤيتنا
            </h2>
            <p className="text-gray-600 text-lg leading-10 text-justify" dir="rtl">
              نطمح لأن نكون شريكك العقاري الموثوق الذي يقودك نحو استثمار مستدام.
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
              مهمتنا
            </h2>
            <p className="text-gray-600 text-lg leading-10 text-justify" dir="rtl">
              نقدم مجتمعات سكنية متكاملة تحقق تجربة معيشية استثنائية.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== */}
      {/* 3 - IMAGES */}
      {/* ===================== */}
      <section className="w-full flex flex-col md:flex-row">

        <img
          src={aboutImg}
          className="w-full md:w-1/2 h-[300px] md:h-[500px] object-cover"
          alt="about"
        />

        <img
          src={contactImg}
          className="w-full md:w-1/2 h-[300px] md:h-[500px] object-cover"
          alt="contact"
        />

      </section>

      {/* ===================== */}
      {/* 4 - VALUES */}
      {/* ===================== */}
      <section className="py-28 px-6 md:px-16 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-bold text-[#1E3A5F]">
            قيمتنا
          </h2>

          <p className="mt-4 text-gray-600">
            الضمان • الثقة • الرضا
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "الالتزام",
              text: "نلتزم بتنمية شراكات مستدامة مع عملائنا."
            },
            {
              title: "الابتكار",
              text: "نسعى لتقديم حلول حديثة ومبتكرة."
            },
            {
              title: "النزاهة",
              text: "الشفافية والثقة أساس تعاملاتنا."
            },
            {
              title: "الاتحاد",
              text: "نعمل كفريق واحد لتحقيق النجاح."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-right">
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

      {/* ===================== */}
      {/* 5 - STATS WITH BLUR BACKGROUND */}
      {/* ===================== */}
      <section
        ref={statsRef}
        className="relative py-32 px-6 md:px-16 text-white overflow-hidden"
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={cover}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BLUR OVERLAY */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              حقائق وأرقام
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            {/* Projects */}
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="text-6xl md:text-7xl font-bold">+8</div>
              <p className="mt-4 text-gray-200">مشاريعنا</p>
            </div>

            {/* Experience */}
            <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="text-6xl md:text-7xl font-bold">+8</div>
              <p className="mt-4 text-gray-200">سنين الخبرة</p>
            </div>

            {/* Clients */}
            <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="text-6xl md:text-7xl font-bold">+1000</div>
              <p className="mt-4 text-gray-200">عملاؤنا</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default AboutMore;