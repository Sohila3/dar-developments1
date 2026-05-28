function JoinUs() {
  return (
    <div
      id="join"
      className="w-full bg-gray-50 py-24 px-6 md:px-16"
    >

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-14">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] text-center mb-8">
          أنضم إلينا
        </h2>

        {/* DESCRIPTION */}
        <p
          className="text-gray-600 text-lg leading-9 text-center mb-14"
          dir="rtl"
        >
          إذا كان لديك ما نبحث عنه لإثراء رحلة نجاح دار،
          انضم إلينا الآن.
        </p>

        {/* FORM */}
        <form className="space-y-8">

          {/* JOBS */}
          <div dir="rtl">

            <label className="block text-[#1E3A5F] font-semibold mb-3">
              الوظائف
            </label>

            <select
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#1E3A5F]"
            >

              <option>قسم المبيعات</option>

              <option>خدمة العملاء</option>

              <option>مشرفي موقع</option>

              <option>مهندسين</option>

            </select>

          </div>

          {/* FULL NAME */}
          <div dir="rtl">

            <label className="block text-[#1E3A5F] font-semibold mb-3">
              الاسم بالكامل
            </label>

            <input
              type="text"
              placeholder="أدخل الاسم بالكامل"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#1E3A5F]"
            />

          </div>

          {/* EMAIL */}
          <div dir="rtl">

            <label className="block text-[#1E3A5F] font-semibold mb-3">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#1E3A5F]"
            />

          </div>

          {/* PHONE */}
          <div dir="rtl">

            <label className="block text-[#1E3A5F] font-semibold mb-3">
              رقم الموبايل
            </label>

            <input
              type="tel"
              placeholder="010 01234567"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#1E3A5F]"
            />

          </div>

          {/* CV */}
          <div dir="rtl">

            <label className="block text-[#1E3A5F] font-semibold mb-3">
              تحميل السيرة الذاتية
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center text-gray-500">

              <input
                type="file"
                className="w-full"
              />

              <p className="mt-4">
                Drop a file here or click to upload
              </p>

              <p className="text-sm mt-2">
                Maximum file size: 516MB
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <div className="text-center pt-6">

            <button
              type="submit"
              className="bg-[#1E3A5F] text-white px-10 py-4 rounded-full text-lg hover:bg-blue-900 transition"
            >
              التقدم بطلب للحصول
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default JoinUs;