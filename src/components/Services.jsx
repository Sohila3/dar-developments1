function Services() {
  return (
    <div id="services" className="w-full bg-white py-24 px-6 md:px-16">

      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-16">
        خدماتنا
      </h2>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* 1 */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">

          <h3
            className="text-xl md:text-2xl font-bold text-[#1E3A5F] whitespace-nowrap text-center mb-5"
            dir="rtl"
          >
            الاستثمار العقاري
          </h3>

          <p className="text-gray-600 leading-8 text-base text-center" dir="rtl">
            نقدم فرص استثمار عقاري مدروسة تحقق أعلى عائد بأقل مخاطرة داخل أفضل المواقع المميزة في السوق العقاري.
          </p>

        </div>

        {/* 2 */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">

          <h3
            className="text-xl md:text-2xl font-bold text-[#1E3A5F] whitespace-nowrap text-center mb-5"
            dir="rtl"
          >
            بيع وشراء العقارات
          </h3>

          <p className="text-gray-600 leading-8 text-base text-center" dir="rtl">
            نساعدك في بيع وشراء الوحدات السكنية والتجارية بأفضل الأسعار وخطط سداد مرنة تناسب جميع العملاء.
          </p>

        </div>

        {/* 3 */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">

          <h3
            className="text-xl md:text-2xl font-bold text-[#1E3A5F] whitespace-nowrap text-center mb-5"
            dir="rtl"
          >
            الاستشارات العقارية
          </h3>

          <p className="text-gray-600 leading-8 text-base text-center" dir="rtl">
            نقدم استشارات احترافية تساعدك على اتخاذ القرار الصحيح في الوقت المناسب لضمان استثمار آمن ومضمون.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Services;