import installmentImg from "../assets/installments.jpeg";

function Installments() {
  return (
    <section className="w-full">

      {/* SECTION */}
      <div className="relative w-full h-[45vh] md:h-[75vh] overflow-hidden">

        {/* IMAGE */}
        <img
          src={installmentImg}
          alt="installments"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

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