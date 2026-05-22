import contactImg from "../assets/contact-us.jpeg";

function Contact() {
  return (
    <div id="contact" className="w-full bg-gray-50 py-24 px-6 md:px-16">

      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-16">
        تواصل معنا
      </h2>

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-stretch gap-0 overflow-hidden rounded-2xl shadow-lg">

        {/* IMAGE RIGHT */}
        <div className="flex-1 overflow-hidden">
          <img
            src={contactImg}
            alt="contact"
            className="w-full h-full object-cover object-left"
          />
        </div>

        {/* CARD LEFT */}
        <div className="flex-1 bg-white p-10 text-right flex flex-col justify-between">

          {/* TOP */}
          <div>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6">
              نحن هنا لمساعدتك
            </h3>

            {/* ADDRESS */}
            <div className="mb-8 text-gray-700 leading-8" dir="rtl">

              <p className="font-bold text-[#1E3A5F] mb-2">
                📍 العنوان
              </p>

              <p>
                طنطا – شارع توت عنخ آمون<br />
                فوق مخبز الزهراء
              </p>

            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-4 text-gray-700">

              <a href="#" className="hover:text-[#1E3A5F] transition">
                📘 فيسبوك
              </a>

              <a href="#" className="hover:text-[#1E3A5F] transition">
                📸 إنستجرام
              </a>

            </div>

          </div>

          {/* WHATSAPP */}
          <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200">

            <p className="text-green-700 font-semibold mb-4">
              تواصل معنا مباشرة عبر واتساب
            </p>

            <a
              href="https://wa.me/201039207908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              فتح واتساب
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;