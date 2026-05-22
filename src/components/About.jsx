import aboutImg from "../assets/about-us.jpeg";

function About() {
  return (
    <div id="about" className="w-full bg-white py-16 md:py-24 px-4 md:px-16">

      <div className="max-w-6xl mx-auto flex flex-row items-stretch gap-6 md:gap-12">

        {/* IMAGE */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="about us"
            className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div className="flex-1 flex flex-col justify-center">

          <h2 className="text-2xl md:text-5xl font-bold text-[#1E3A5F] text-right mb-4 md:mb-6">
            من نحن
          </h2>

          <div className="text-gray-600 leading-7 md:leading-9 text-sm md:text-lg text-right" dir="rtl">

            <p>
              دار للاستثمار العقاري هي شركة مصرية تأسست عام 2017، متخصصة في تقديم حلول عقارية متكاملة تجمع بين الاستثمار والسكن، بخبرة تمتد لسنوات في سوق العقارات داخل طنطا والقاهرة، وخاصة منطقة بيت الوطن.
            </p>

            <br />

            <p>
              نحرص على تقديم فرص عقارية مدروسة تجمع بين الأمان الاستثماري، والمواقع المميزة، وخطط السداد المرنة التي تناسب مختلف العملاء.
            </p>

            <br />

            <p>
              نؤمن أن النجاح في العقار لا يعتمد فقط على بيع وحدات، بل على بناء ثقة وعلاقات طويلة الأمد مع عملائنا.
            </p>

            <br />

            <p className="font-semibold text-[#1E3A5F]">
              دار للاستثمار العقاري نوفر لك استثمار آمن، جودة عالية، وخدمة تليق بثقتك.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;