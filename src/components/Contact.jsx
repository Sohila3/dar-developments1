import { useState } from "react";

function Contact() {

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");

  const [project, setProject] = useState("");

  const handleWhatsApp = () => {

    const message =
      `مرحبا، اسمي ${name} وأريد معرفة المزيد عن مشروع ${project}`;

    const whatsappURL =
      `https://wa.me/201039207908?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (

    <div
      id="contact"
      className="w-full bg-gray-50 py-24 px-6 md:px-16"
    >

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-10 md:p-16 text-right flex flex-col justify-center">

          <h3 className="text-3xl font-bold text-[#1E3A5F] mb-8">
            تواصل معنا
          </h3>

          {/* ADDRESS */}
          <div className="mb-8 text-gray-700 leading-8" dir="rtl">

            <p className="font-bold text-[#1E3A5F] mb-2">
              📍 العنوان
            </p>

            <p>
              طنطا – شارع توت عنخ آمون
              <br />
              فوق مخبز الزهراء
            </p>

          </div>

          {/* PHONE */}
          <div className="mb-8 text-gray-700 leading-8" dir="rtl">

            <p className="font-bold text-[#1E3A5F] mb-2">
              📞 أرقام التواصل
            </p>

            <p>01039207809</p>

            <p>0403294777</p>

          </div>

          {/* SOCIAL */}
          <div className="text-gray-700" dir="rtl">

            <p className="font-bold text-[#1E3A5F] mb-4">
              🌐 تابعنا على السوشيال ميديا
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="https://www.facebook.com/share/1XgDRDMitV/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A5F]"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/dar.developments?igsh=N202dXdhaWEyaW85"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A5F]"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#1E3A5F] text-white p-10 md:p-16 flex flex-col justify-center text-right">

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-right">

  <span className="block">
    أعرف أكثر
  </span>

  <span className="block mt-3 text-3xl md:text-5xl font-semibold">
    عن المشروع
  </span>

</h2>

          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-[#1E3A5F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition w-fit"
          >
            لنتحدث
          </button>

        </div>

      </div>

      {/* POPUP */}
      {showForm && (

        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-md rounded-3xl p-8 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 left-4 text-3xl text-gray-500"
            >
              ×
            </button>

            <h3 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">
              لنتحدث
            </h3>

            {/* NAME */}
            <div className="mb-6" dir="rtl">

              <label className="block mb-3 font-semibold text-[#1E3A5F]">
                الاسم
              </label>

              <input
                type="text"
                placeholder="أدخل اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#1E3A5F]"
              />

            </div>

            {/* PROJECT */}
            <div className="mb-8" dir="rtl">

              <label className="block mb-3 font-semibold text-[#1E3A5F]">
                المشروع
              </label>

              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#1E3A5F]"
              >

                <option value="">
                  اختر المشروع الذي تريده
                </option>

                <option value="Dar Damac">Dar Damac</option>

                <option value="Dar Landmark">Dar Landmark</option>

                <option value="Dar Elwrood">Dar Elwrood</option>

              </select>

            </div>

            {/* BUTTON */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#1E3A5F] text-white py-4 rounded-xl text-lg hover:bg-blue-900 transition"
            >
              إرسال عبر واتساب
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Contact;