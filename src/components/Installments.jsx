import installmentImg from "../assets/installments.jpeg";

function Installments() {
  return (
    <div className="w-full">

      {/* FULL WIDTH IMAGE SECTION */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">

        <img
          src={installmentImg}
          alt="installments"
          className="w-full h-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT OVER IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">

          <div className="text-white max-w-3xl">

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              أنظمة التقسيط والمقدم
            </h2>

            <p className="text-lg md:text-2xl leading-8">
              نوفر لك أفضل خطط السداد بمقدم منخفض وأقساط مريحة تناسب جميع العملاء
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Installments;