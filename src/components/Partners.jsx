function Partners() {
  return (
    <div
      id="partners"
      className="w-full bg-white py-24 px-6 md:px-16"
    >

      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4 animate-fadeIn">
        شركاء النجاح
      </h2>

      {/* Description with soft animation */}
      <p
        className="text-center text-gray-500 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-loose animate-fadeInUp"
      >
        شركاء النجاح الذين نعتز بالتعاون معهم في تنفيذ وتطوير مشاريعنا،
        والذين يساهمون بخبراتهم في تقديم أعلى معايير الجودة والتميز في كل تفاصيل البناء والتطوير
      </p>

      {/* Logos */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center
          hover:scale-105 transition duration-500 animate-float">
          Logo
        </div>

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center
          hover:scale-105 transition duration-500 animate-float delay-100">
          Logo
        </div>

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center
          hover:scale-105 transition duration-500 animate-float delay-200">
          Logo
        </div>

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center
          hover:scale-105 transition duration-500 animate-float delay-300">
          Logo
        </div>

      </div>

    </div>
  );
}

export default Partners;