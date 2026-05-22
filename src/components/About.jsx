import aboutImg from "../assets/about-us.jpeg";

function About() {
  return (
    <div id="about" className="w-full bg-white py-24 px-6 md:px-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">

        {/* IMAGE (left) */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="about us"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* TEXT (right) */}
        <div className="flex-1 flex flex-col justify-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] text-right mb-6">
            من نحن
          </h2>

          <div className="text-gray-600 leading-9 text-lg text-right" dir="rtl">

            <p>
              دار للاستثمار العقاري هي شركة مصرية تأسست عام 2017، متخصصة في تقديم حلول عقارية متكاملة تجمع بين الاستثمار والسكن، بخبرة تمتد لسنوات في سوق العقارات داخل طنطا والقاهرة، وخاصة منطقة بيت الوطن.
            </p>

            <br />

            <p>
              نحرص على تقديم فرص عقارية مدروسة تجمع بين الأمان الاستثماري، والمواقع المميزة، وخطط السداد المرنة التي تناسب مختلف العملاء.
            </p>

            <br />

            <p>
              نؤمن أن النجاح في العقار لا يعتمد فقط على بيع وحدات، بل على بناء ثقة وعلاقات طويلة الأمد مع عملائنا، من خلال المتابعة المستمرة وتقديم استشارات تساعدهم على اتخاذ القرار الصحيح في الوقت المناسب.
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