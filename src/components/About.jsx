import aboutImg from "../assets/about-us.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about" className="w-full bg-white py-24 px-6 md:px-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">

        {/* IMAGE (أكبر) */}
        <div className="flex-[1.3]">
          <img
            src={aboutImg}
            alt="about us"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div className="flex-[1] text-right flex flex-col justify-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            عن دار
          </h2>

          <div className="text-gray-600 text-lg leading-9" dir="rtl">

            <p className="mb-4">
              دار للاستثمار العقاري شركة مصرية متخصصة في الاستثمار العقاري بخبرة في سوق العقارات داخل مصر.
            </p>

            <p>
              نقدم حلول عقارية متكاملة تجمع بين الاستثمار والسكن مع مواقع مميزة وخطط سداد مرنة تناسب جميع العملاء.
            </p>

          </div>

          {/* LINK (Router Navigation) */}
          <div className="mt-8 text-right">
            <Link
              to="/about-more"
              className="text-[#1E3A5F] font-semibold text-lg hover:underline hover:text-blue-700 transition"
            >
              اعرف المزيد عن دار
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;