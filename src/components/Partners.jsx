function Partners() {
  return (
    <div
      id="partners"
      className="w-full bg-white py-24 px-6 md:px-16"
    >

      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-16">
        شركاء النجاح
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center">
          Logo
        </div>

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center">
          Logo
        </div>

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center">
          Logo
        </div>

        <div className="bg-gray-100 h-32 rounded-2xl flex items-center justify-center">
          Logo
        </div>

      </div>

    </div>
  );
}

export default Partners;