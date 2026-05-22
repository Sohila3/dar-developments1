import installmentImg from "../assets/installments.jpeg";

function Installments() {
  return (
    <section className="w-full">

      {/* FULL WIDTH SECTION */}
      <div className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden">

        {/* IMAGE */}
        <img
          src={installmentImg}
          alt="installments"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT */}
        <div className="relative z-10 flex items-center justify-center text-center px-4 py-20">

          <div className="text-white max-w-3xl">

            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
              أنظمة التقسيط والمقدم
            </h2>

            <p className="text-sm md:text-2xl leading-7 md:leading-9">
              نوفر لك أفضل خطط السداد بمقدم منخفض وأقساط مريحة تناسب جميع العملاء
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Installments;